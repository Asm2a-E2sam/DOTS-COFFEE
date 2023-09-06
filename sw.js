self.addEventListener("install",(event)=>{

    console.log("service worker installed!!!!!");
    // self.skipWaiting()
    event.waitUntil( 
        caches.open("DOTS-Coffee").then(cache=>{
           return cache.addAll(["DOTS.html","DOTS.css","DOTS.js","imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg","imgs/5.jpg","imgs/6.jpg","imgs/7.jpg","imgs/8.gif","imgs/9.jpg","imgs/10.jpg","imgs/quote.jpg"])
        }).catch(err=>console.log("cache error",err))
     )
})

self.addEventListener("activate",()=>{
    console.log("service worker activate!!!!!");
})

self.addEventListener("fetch",(event)=>{
    console.log("Network request :",event.request.url);
    event.respondWith(
        caches.match(event.request).then((file)=>{
            if(file){
                console.log("Found in cache",event.request.url);
                return file
            }
            else{
                console.log("Not found",event.request.url);
           return fetch(event.request.url)
            }

        }).catch(err=>console.log(err))
    )

})