'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "a1e32e331d5929fdcf25f8df770a9d77",
".git/config": "7a96924abe88edc00b99d73f2ab6c49d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/FETCH_HEAD": "98d3284662972ac3fea1d13d9ff77466",
".git/logs/HEAD": "b5f5e3535a674be3ae11e6ea08ff57d9",
".git/logs/refs/heads/main": "05649fd7a948ac0a7672588c2fcb24f5",
".git/logs/refs/remotes/origin/main": "9a7a94256517ba3fa44f5cc5a5fa904b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/refs/heads/main": "ddfcc8609b6579d8f1281ba2f636641b",
".git/refs/remotes/origin/main": "ddfcc8609b6579d8f1281ba2f636641b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/b2/c94b8ed624e9f4baf53d65655fa62051dea94d": "2ce7d8098e9d0b76c109ad0e73107e0f",
".git/objects/7b/7db608c6e85acc6af9e30e1b47038eb18d400c": "dfd3dba665164daba84be04822074b4f",
".git/objects/5b/23e0d9d209e0ed7b229705deb6166438d767f8": "ba7f4c20f11cbcad58c171f6f4002ad1",
".git/objects/42/a461d07bbbbaca3e38fd52abe8a8eaed66a889": "ca2042060c89c97f52e295ccc12ea466",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/39/43b187b6937bcab37adeb6120a7b1f7bb2ee72": "e1368060160f3de2d3df1245adea03a3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/97/b049dbe9302c1e57f24f02df154bb706840c56": "b57ae6839ba04e68bb627775fa59f71f",
".git/objects/cf/d38eaeab640c365d9a8ad7c2ade43682b5b24e": "8f4e77d977a6175f3a5f34e437a3b38b",
".git/objects/6e/c38836680a4dcd78a78962fa7b82393669751c": "fc6d42973883eb2db7c25df77b272934",
".git/objects/b1/54b8ac7f32894ba2daf390c469b37f03de718e": "d7ae0e38730f2c59fc863e753e4b4519",
".git/objects/b1/2c72d60af601872c3c06e3f64189bdde305205": "d14f2f1370f30827118012bda33a39c9",
".git/objects/e5/549eb2e74505a3af2cadb9892f65620338d5a6": "bc3534ec9a61b5383a6ebeb51d28015f",
".git/objects/e5/f8d97d1a8d5e7fc3292fbec20de0ca1ae726a4": "c3632f737ea3a7331f4bf85a7a571063",
".git/objects/07/5a780fc400ada73407ef8058d394b816b67abe": "4405bb6a529f3def863ffa7e8bf88044",
".git/objects/07/c3d80530e5a54985701b3bda7ff34b769c278b": "adb314d0c3a57ff07fc48e0e3940fe63",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/0d/5331cf5c5210f661145ed6b0d4c333a4e1b3fa": "7c3d77192756406e963ccf976ab4f491",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/55/3d69a11151434efb47c9682d519dd7c8f7d580": "f720c53e3584e1bb970d21944c7ca974",
".git/objects/7c/9127b1c7b19d02f24cfb6472d5cca0c84ea439": "c286273d6066e125a557e4dad8f9ee55",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/dfa32c62b932c6e028866ae59926ae2bd0e5e4": "b80b912a742ea358b3778d1d01eef4d9",
".git/objects/54/ee75fa50e2d085d16377fd9ffcd278111dba89": "abc3e2604e2eee7868fbe08a4fe130df",
".git/objects/2f/99347ffeaedd2000d8c650c9ed67ef47c578f9": "3ce5970a8153847eec5c2b5597099893",
".git/objects/0f/8d23ecc1a460c3b7f59e681c5f763b1fd4f523": "cf8fe030f6d938d1576610d686d2b36f",
".git/objects/3a/679066cf77ef0546e621c19eb5d0244536bfc2": "367adbe9d73860adbae4282c9f9b776d",
".git/objects/28/ad9e01d71e22aa6844a04a8cc6277d6d6c338b": "84c05bd518082d71d65660e2fc18c75e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/71/665739188bb9c289703c2c6de46bc758062dd0": "6abc34148cb15fa6ac221dfb354d8c31",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/89/237c99dbb4f9111093c37bcc478a3f0516cf70": "c5295fa3bd1ed0f7d3f190a6cd021dcd",
".git/objects/78/3fbb7db0955470199fa916023bd9a6109ca5ca": "27112cc78d3e6d5c09e0acbead4d0cf5",
".git/objects/a4/b98118fca831d2a0f28f461c6678c10b85bd41": "0938aeb2bc615e6a75cc7f3a5a7f30d3",
".git/objects/7a/ab8703fccf54df38f2eed9e5765ebc6fb02fbd": "c79a4d96ec2685adc7fc6fd7d5c497fe",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/ae/80709d4a3c0960b5601618890b6d2e19013ce6": "21af65e401e511f15f9ebbaf81005d18",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/43/958de96d0340bc691863621f0a632e73db115a": "70202ffc980a25ad44201f240557277c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/8f/54c8b6616bd7c20dd75e7c10ac5b9b5c90f910": "b836ca9eb1a80c7377196882fb3dcd0a",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/27/599f8f6a939fb472b130a569e9c6c0753f0f53": "f20be7cb0b37175c3ce6c7e1daca3dff",
".git/objects/b9/8fe20d8d65cd5b85baa79d5385daefa8a274d1": "c9ed603667712632f674c32879b53ba8",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/53/5fc5f6938784ca75975d8d4a37b69ed2bd80fd": "6b0a7f65f63fcea948089a7137e1b28c",
".git/objects/e1/f4cf362a129a5799e75708e2311b43dcf2830a": "22d9c4ddbdd6cbc1edacdd943e11c9da",
".git/objects/9e/75fa0991a9bc17e87942ce4125e3a13ebd834a": "d36029c321e854ad789409a92883917d",
".git/objects/9b/b160e0abf4e449e34525b746f5ff2f94e76095": "c587c72cf7c1e38069ed25e0e6cf5006",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/45/9b31746e3595d89138eabf939609c66e852cfc": "63c15689570ce74ac9dc9fe5c7ba408b",
".git/objects/da/d9096029198247cbc61cf430b4c9801ad83050": "5bcb5fda6981a80d339d788cfe3f8fba",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/29/d38e69d636d4916b0fc2d7dc100eaeaddd848c": "71b9bde9fa9942c3e2cb990511638700",
".git/objects/22/1f27e2e0e48a8bcdf703fd11c9a2fbbfbfefcf": "a526af453beab00aa4e5da2d2ac3006c",
".git/objects/ab/b53a2544e408908e67694e31d6d7fd6b97b653": "48fbed42471b06ea7a89ba3a0f67f657",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/80/051cfccd0ebd298602a295fb9810b8cbf1cafc": "f12d8968262ad26b3f3e673a7129192a",
".git/index": "70b0e7b6a970da24ab22141646b87cbd",
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
"icons/Icon-512-maskable.png": "ee09641d5f4b9b0ff7d27c8624d931d4",
"icons/Icon-192-maskable.png": "490cafda29ad1be5f8dad0ca4ffb13c9",
"icons/Icon-maskable-192.png": "490cafda29ad1be5f8dad0ca4ffb13c9",
"icons/Icon-512.png": "9206e70fb710b275d61b2731ce092ac1",
"icons/Icon-maskable-512.png": "ee09641d5f4b9b0ff7d27c8624d931d4",
"version.json": "80de7473bc4b09a63424516eb2d5e4a6",
"index.html": "de371a4ddd1f125de965883864b94aa8",
"/": "de371a4ddd1f125de965883864b94aa8",
"flutter_bootstrap.js": "b74310a12f0a03f65190c19fb4919c2d",
"assets/AssetManifest.json": "db94d49e4401e5893ef04f85215456ac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "b6cf1c0564e49a0adfa8909e17362330",
"assets/NOTICES": "d799811a6be78d3c3f259c30d09627ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "7b176999d186df54399d3a8c055661b1",
"assets/lib/images/appointment_page.jpg": "6499bf9e33b3990fd9c28bb9f4453dfb",
"assets/lib/images/flowchart.png": "9775635e8d7185265c27268be434bf65",
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
"assets/AssetManifest.bin": "09c8fc5942045ce273edeb940a2a3fb7",
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
