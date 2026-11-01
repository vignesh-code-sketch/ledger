// Ledger: makes the site installable as an app. Stores no data and caches nothing.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return; // sheet requests go straight to the network
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<meta name="viewport" content="width=device-width,initial-scale=1"><body style="font-family:sans-serif;padding:24px;background:#f1e8d8;color:#3a2e22"><h2>No internet</h2><p>Ledger reads everything from your Google Sheet, so it needs a connection. Reconnect and reopen the app.</p></body>',
    {headers: {"Content-Type": "text/html; charset=utf-8"}})));
});
