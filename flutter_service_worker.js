'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "3341d6a1b470be8e28bb11baac3aab21",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"manifest.json": "767a12457a8713215c2d5728e9965233",
"icons/Icon-192.png": "d6c52b658ef1a16dcd112bb8327e436a",
"icons/Icon-maskable-192.png": "490cafda29ad1be5f8dad0ca4ffb13c9",
"icons/Icon-512.png": "9206e70fb710b275d61b2731ce092ac1",
"icons/Icon-maskable-512.png": "ee09641d5f4b9b0ff7d27c8624d931d4",
"version.json": "80de7473bc4b09a63424516eb2d5e4a6",
"index.html": "de371a4ddd1f125de965883864b94aa8",
"/": "de371a4ddd1f125de965883864b94aa8",
"flutter_bootstrap.js": "624b2777e2d872bb7c5fce2dc54d0ba6",
"assets/AssetManifest.json": "05d70509b4bc9692dac8726c60aa6ea5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "69e7ae0a43fbc3cf387439e604ddce31",
"assets/NOTICES": "1021803de1a7f5cb12eb4d64e5b45131",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "59ac1321d37fc6b4a0eeb9aebe261184",
"assets/lib/images/appointment_page.jpg": "6499bf9e33b3990fd9c28bb9f4453dfb",
"assets/lib/images/flowchart.png": "9775635e8d7185265c27268be434bf65",
"assets/lib/images/logo.png": "14de749b2b0ac45219731ccbe41af7b3",
"assets/lib/images/DOCTOR.png": "8b30eb5cffe52f9ac5b1a3140cb53ef4",
"assets/lib/icons/pediatric.png": "fecc7d54e4f9601c504b73fc76c73376",
"assets/lib/icons/rheumatology.png": "b2fd9ca5868ff9b479ae035f21cfb41b",
"assets/lib/icons/gastroenterology.png": "bbb32e3fa1b718ef83a128e19848aa58",
"assets/lib/icons/lungs.png": "18dc40c53283fb37e9a9801d8f2f9a27",
"assets/lib/icons/orthopedics.png": "d8f111f6104fba6efed6f8f6682999e4",
"assets/lib/icons/brain.png": "a5a2f697699699fa7569464eb9f9a977",
"assets/lib/icons/ophthalmology.png": "4f19f988a9b947dd9d767d6855df3407",
"assets/lib/icons/oncology.png": "50006e183481859e52575b8c3482d71f",
"assets/lib/icons/gynecology.png": "d3bd6f5a98ce110588a96afde62895db",
"assets/lib/icons/Nephrology.png": "86e977b59d38999976d85ce5a794a9b3",
"assets/lib/icons/geriatrics.png": "97f4ce868d7cf86c964b2d1e7e598fa5",
"assets/lib/icons/cardiology.png": "634a918a0e5c24dd2169689781fcfaca",
"assets/lib/icons/anesthesiology.png": "80d0d83ff93a62520de9def91ad1ef1f",
"assets/lib/icons/kidney.png": "06dce91da2b4303c1f18b4e6afd3d4cf",
"assets/lib/icons/dentistry.png": "bde92bd11f63f405cf726bdc03a79341",
"assets/lib/icons/hematology.png": "500c05aa91efcf60c96f0bc037c411a2",
"assets/lib/icons/dermatology.png": "f896b69d52fe84b315e5985996b8078e",
"assets/lib/icons/psychiatry.png": "4a2e061035794359150d00db1d0cbca0",
"assets/lib/icons/urology.png": "f630f6f246e6bfd49700c2c4d9c4b37f",
"assets/lib/icons/ent.png": "c1d0bfbb8934621ce9f1a3a66e296c4e",
"assets/lib/icons/endocrinology.png": "c05b79f9fce27797f4992ad5402bfa6c",
"assets/lib/icons/pulmonology.png": "cc26677341fadfa77a5ebed226ef0c28",
"assets/lib/icons/general.png": "407bbb1eb34947fcca35ecc855cca22b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "58a90ed814d6c76e75b64534be1e9947",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "137a958308ac832ade763539b7aec852"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
