// ======================================================
// PROMPTWERKSTATT – SERVICE WORKER
// ======================================================

const CACHE_NAME =
    "promptwerkstatt-v14";


const APP_DATEIEN = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./api.js",
    "./bereiche-ui.js",
    "./daten.js",
    "./daten/gemeinsam.js",
    "./daten/bereiche.js",
    "./daten/profile.js",
    "./daten/bereiche/allgemein.js",
    "./daten/bereiche/schreiben.js",
    "./daten/bereiche/familie.js",
    "./daten/bereiche/kreativ.js",
    "./daten/bereiche/kochen.js",
    "./daten/bereiche/freizeit.js",
    "./daten/bereiche/social-media.js",
    "./daten/bereiche/gesundheit.js",
    "./daten/bereiche/lernen.js",
    "./daten/bereiche/business.js",
    "./daten/bereiche/it.js",
    "./daten/bereiche/technik.js",
    "./daten/bereiche/recht.js",
    "./storage.js",
    "./manifest.webmanifest",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];


// ======================================================
// APP-DATEIEN BEIM INSTALLIEREN SPEICHERN
// ======================================================

self.addEventListener(
    "install",
    function (event) {

        event.waitUntil(

            caches
                .open(
                    CACHE_NAME
                )
                .then(
                    function (cache) {

                        return cache.addAll(
                            APP_DATEIEN
                        );
                    }
                )

        );


        self.skipWaiting();
    }
);


// ======================================================
// ALTEN CACHE ENTFERNEN
// ======================================================

self.addEventListener(
    "activate",
    function (event) {

        event.waitUntil(

            caches
                .keys()
                .then(
                    function (cacheNamen) {

                        return Promise.all(

                            cacheNamen
                                .filter(
                                    function (name) {

                                        return (
                                            name !==
                                            CACHE_NAME
                                        );
                                    }
                                )
                                .map(
                                    function (name) {

                                        return caches.delete(
                                            name
                                        );
                                    }
                                )

                        );
                    }
                )

        );


        self.clients.claim();
    }
);


// ======================================================
// NETZWERK ZUERST – CACHE ALS OFFLINE-FALLBACK
// ======================================================

self.addEventListener(
    "fetch",
    function (event) {

        if (
            event.request.method !==
            "GET"
        ) {

            return;
        }


        event.respondWith(

            fetch(
                event.request
            )
                .then(
                    function (antwort) {

                        const kopie =
                            antwort.clone();


                        caches
                            .open(
                                CACHE_NAME
                            )
                            .then(
                                function (cache) {

                                    cache.put(
                                        event.request,
                                        kopie
                                    );
                                }
                            );


                        return antwort;
                    }
                )
                .catch(
                    function () {

                        return caches.match(
                            event.request
                        );
                    }
                )

        );
    }
);
