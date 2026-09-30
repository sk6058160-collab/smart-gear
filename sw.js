/* Smart Gear service worker: cache-first app shell, works fully offline */
const CACHE = 'smartgear-v14';
// Map tiles: only tiles you actually viewed are kept (OSM tile policy forbids prefetch / bulk download).
// Online: normal network + browser HTTP cache. Offline: the last viewed copy, up to 7 days old (OSM sends stale-if-error=7 days).
const TILES = 'smartgear-tiles', TILE_MAX = 800, TILE_TTL = 7 * 24 * 3600e3;
const ASSETS = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png', './vendor/leaflet/leaflet.js', './vendor/leaflet/leaflet.css', './vendor/nyc-boroughs.js'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== TILES).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.hostname === 'tile.openstreetmap.org') { e.respondWith(tile(req)); return; }
  if (u.origin !== location.origin) return;
  e.respondWith(
    caches.match(req, {ignoreSearch: true}).then(hit => {
      const net = fetch(req).then(res => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => hit || (req.mode === 'navigate' ? caches.match('./index.html') : undefined));
      return hit || net;
    })
  );
});

async function tile(req) {
  const c = await caches.open(TILES);
  try {
    const res = await fetch(req);
    if (res && res.ok && res.type !== 'opaque') {
      const h = new Headers(res.headers); h.set('x-sg-saved', String(Date.now()));
      const body = await res.clone().blob();
      c.put(req.url, new Response(body, {status: 200, headers: h})).then(() => trim(c)).catch(() => {});
    }
    return res;
  } catch (err) {
    const hit = await c.match(req.url);
    if (hit && Date.now() - Number(hit.headers.get('x-sg-saved') || 0) < TILE_TTL) return hit;
    throw err;
  }
}
let trimming = false;
async function trim(c) {
  if (trimming) return; trimming = true;
  try { const k = await c.keys(); for (let i = 0; i < k.length - TILE_MAX; i++) await c.delete(k[i]); } finally { trimming = false; }
}
