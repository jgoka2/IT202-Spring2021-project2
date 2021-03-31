const cacheName = "IT-project-2"
const assets = [
    "./",
    "./index.html",
    "./pictures/ant.jpg",
    "./pictures/background.png",
    "./pictures/candy.png",
    "./pictures/mario.jfif"
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})