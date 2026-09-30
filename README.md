# Smart Gear 🚗⚙️ – Drive smarter in NYC

**A map-first shift companion for NYC rideshare drivers.** It shows where rides are likely right now, tracks your online time and GPS miles, and can start your shift automatically when your phone connects to your car. All data stays on your phone. No account needed, and everything except map tiles works offline.

## Features
- **Home (Uber-driver style):** full-screen dark map with your blue location dot and busy spots. A status pill at the top center shows **Offline** or **Online 1h 23m**. The round buttons are Settings (top left), Scanner (top right) and My location. The big **GO** button starts your shift (it pulses gently while you're offline) and becomes a stop button while you're online. The bottom sheet shows "You're offline / You're online", today's online time, the nearest busy area, and **Log pickup** / **Where to go** buttons. Drag the sheet up to see today's and this week's online time, GPS miles, logged pickups and recent shifts.
- **Log pickup:** one tap records your current area (the nearest saved area from GPS) and the time. You can also mark **✈️ Airport drop-off** or **🛣️ Long ride**, or tap **Undo**. The Scanner learns from these pickups.
- **Ride Scanner (estimates):** 51 NYC-area hotspots come preloaded across Manhattan, Brooklyn, Queens, the Bronx and Staten Island, plus Newark (EWR) and Yonkers. They include casinos (Resorts World Casino NYC, Empire City Casino by MGM), restaurant districts (Koreatown, Little Italy / Chinatown, West Village, Flushing, Arthur Ave, Smith St) and clubs / nightlife (Meatpacking, Hell's Kitchen, East Village, Williamsburg, Bushwick, Lower East Side). You can filter by borough.
  - **🔥 Where to go:** the best areas right now, or at any time you pick.
  - **✈️ Airport:** where you're most likely to get a ride to JFK / LGA / EWR.
  - **🛣️ Long rides:** where long trips (suburbs, NJ, Long Island, Westchester) are most likely. Casinos are marked long-ride friendly.
  - **📍 My areas:** add, edit or delete areas (with GPS), or restore the NYC defaults.
- **🗺️ Busy Map:** OpenStreetMap with colored busy spots (green = busy, amber = medium, grey = quiet) and five-borough shading. It has layers (Where to go / Airport / Long rides), type filters (Casinos, Restaurants, Clubs & nightlife, Airports & transit, Events & hotels), popups with Directions, and an offline list fallback.
- **GPS:** auto-tracks shift miles, finds the nearest busy area and pre-fills Log pickup.
- **Online / offline badge:** the app tells you when you're offline and keeps working.
- **Bluetooth auto-shift (Android APK only):** choose your car's Bluetooth in Settings. Your shift starts when the phone connects and pauses when it disconnects.
- **Settings:** city for Maps search, long-ride threshold (miles / minutes), GPS miles, car Bluetooth, theme, and delete all data.

> Ride Scanner and Busy Map scores are **estimates** based on general time-of-day / day-of-week patterns and the pickups you log. They are not real Uber or Lyft demand data. Hotspot locations are approximate. Smart Gear is not affiliated with Uber, Lyft, Revel, MGM, Resorts World or NYC TLC. Map data: © OpenStreetMap contributors.

## Open the app
👉 https://sk6058160-collab.github.io/smart-gear/

## Install on iPhone (Home Screen app)
1. Open the link above in **Safari** on your iPhone.
2. Tap the **Share** button (the square with an arrow ⬆️).
3. Choose **Add to Home Screen**, then tap **Add**.
4. Open **Smart Gear** from your Home Screen.

(Bluetooth auto-shift isn't available on iPhone. Start your shift with the GO button.)

## Android
- **Download the APK:** https://sk6058160-collab.github.io/smart-gear/smart-gear.apk
  (This is a debug-signed APK. You'll need to allow "Install unknown apps" when installing it.)
- Or open the web link in Chrome, then tap ⋮ menu → **Add to Home screen / Install app**.

## Files
`index.html`, `manifest.json`, `sw.js` (offline service worker), `icons/`, `vendor/` (Leaflet 1.9.4 under the BSD-2 license, plus NYC borough boundaries), `smart-gear.apk`, `.nojekyll`.
