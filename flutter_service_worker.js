'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "3341d6a1b470be8e28bb11baac3aab21",
".git/config": "9582026188011a07d99c33aafeea35f3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "abe76da38312cdb259848dcb35803f13",
".git/logs/HEAD": "0408d27c22bf2fbba99b3e06898b8a20",
".git/logs/refs/heads/main": "0408d27c22bf2fbba99b3e06898b8a20",
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
".git/refs/heads/main": "fffb7ef62942bbd0f9a2b67d935adfac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/0b/7f0b0c06401797bced2cbe6b9bf9474c353642": "4f8bc2ae347fbd9a623b8ffd3d4a1eea",
".git/objects/b2/c94b8ed624e9f4baf53d65655fa62051dea94d": "2ce7d8098e9d0b76c109ad0e73107e0f",
".git/objects/eb/997c93a6a480416c95c75f16e389e1542b3e0c": "d62fbf19631c387d16a87fd76ac36143",
".git/objects/11/9bcd64cb51fe51bea40b793589a85f5b4fad89": "cdbfbb749aaf7c921db9828199823427",
".git/objects/4d/a90fb5c784e07748d2d6d188aca0534b95b2ad": "6f1efeefe12ea3699752c9b60c878617",
".git/objects/4d/1dab80c9f5c612267279ad22bc7883613b89d9": "a98b75cbbb0b9a73dc606437e4f64da7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/39/43b187b6937bcab37adeb6120a7b1f7bb2ee72": "e1368060160f3de2d3df1245adea03a3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/518fca567af36bacef91df1840a79e42114366": "79029fcf3ee5d0b5eea65e69d8741b9e",
".git/objects/97/b049dbe9302c1e57f24f02df154bb706840c56": "b57ae6839ba04e68bb627775fa59f71f",
".git/objects/e7/39337e9db0ae79e92e6cc924b10c8a1650d3d8": "3a15c7044c6338ea1451a3df991a081a",
".git/objects/77/0a6426fe8aa9a23f8a791cee0c2b94c411f52b": "e67f814eeb3976784088d174959d2c9d",
".git/objects/6e/501b8e212952839c2593b7f8755f63d32e2344": "bf9080197567e001015b6e92f5e6cd9c",
".git/objects/6e/c38836680a4dcd78a78962fa7b82393669751c": "fc6d42973883eb2db7c25df77b272934",
".git/objects/d0/83e57d398523bca1d31cb640fc635b2182b9ce": "c78fd6fbf91a7ff99bdf1032e30d5e7a",
".git/objects/59/d38a4a1732b0e673591f5cd60e1130bb38eb49": "d248422170c7924fb6168c0aa4f1a23a",
".git/objects/1c/7e78faebacc2c21a0e532ec9ebfe10c5473055": "241aa260dbb7f20b88fbb0b8d7514fc8",
".git/objects/fe/0138dd96c920515b590e11abe4f383727bf63d": "ab6438fe5fdb366addcfd193af777004",
".git/objects/e5/549eb2e74505a3af2cadb9892f65620338d5a6": "bc3534ec9a61b5383a6ebeb51d28015f",
".git/objects/d6/316e406305fb01c6ee28f4e76b11947733ff4a": "4cc00ea1e44eed59cbd30828d0758c25",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/50/bc4385fe9193e4c3da9ff2b1c23ab74c9c6802": "ed40d281221dadf7b47622f38f60faab",
".git/objects/d9/3d901f33d2b2908ba26510d6b8708c8f2c350f": "1b748cebd89186d4f7a52e72ceb4cb0d",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/00/94ced1d26ad2f17cd0730e267e2f83f9459a6f": "5a411d7eb41aead9b058db52263dcb16",
".git/objects/7c/9127b1c7b19d02f24cfb6472d5cca0c84ea439": "c286273d6066e125a557e4dad8f9ee55",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/dfa32c62b932c6e028866ae59926ae2bd0e5e4": "b80b912a742ea358b3778d1d01eef4d9",
".git/objects/54/ee75fa50e2d085d16377fd9ffcd278111dba89": "abc3e2604e2eee7868fbe08a4fe130df",
".git/objects/2f/99347ffeaedd2000d8c650c9ed67ef47c578f9": "3ce5970a8153847eec5c2b5597099893",
".git/objects/c6/e6e3deb933208d41d3cfbca2c7486ce61ad6c5": "efa1d585dfade771eeb760c4f52f20d7",
".git/objects/5d/14f45e1727197fdec83f6a885aaca6fe7fed36": "d30a9fa208389c6ca3911434a6530eee",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/c9/cf24a0f604809a31fa1a6747b7a898335063aa": "107ba0bc4895bd15524985d3dd6b424d",
".git/objects/78/3fbb7db0955470199fa916023bd9a6109ca5ca": "27112cc78d3e6d5c09e0acbead4d0cf5",
".git/objects/a4/b98118fca831d2a0f28f461c6678c10b85bd41": "0938aeb2bc615e6a75cc7f3a5a7f30d3",
".git/objects/fd/5845b854759d0fb50742114926ad7db4bdf09c": "88f66e095083a62c57795262fdac819d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/03/0c386d4a97d5ccdfb381cd6647b9ae49bfe9e9": "dc64400085196794c5ea1dc827eb3187",
".git/objects/5c/2451f489937743b86882a6744ce576003616ac": "333ce582549b19a818b0f9a7c5ddb3ab",
".git/objects/ae/67425af6aa18ef97611b776c07ccc70d780bda": "5eaaa496693ddd13aa997fd890a3b4f9",
".git/objects/ae/80709d4a3c0960b5601618890b6d2e19013ce6": "21af65e401e511f15f9ebbaf81005d18",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/8f/54c8b6616bd7c20dd75e7c10ac5b9b5c90f910": "b836ca9eb1a80c7377196882fb3dcd0a",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/8b/d2928073f10d939117b674ce87b0a8a5f4d54c": "912f0d084b8b8a8f8e57db2e36fdc75f",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/90db035cc2dbb7d932dc77f667384484bd3047": "7e7f4ad10249b17edf986ef63437943a",
".git/objects/27/599f8f6a939fb472b130a569e9c6c0753f0f53": "f20be7cb0b37175c3ce6c7e1daca3dff",
".git/objects/b9/8fe20d8d65cd5b85baa79d5385daefa8a274d1": "c9ed603667712632f674c32879b53ba8",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/53/5fc5f6938784ca75975d8d4a37b69ed2bd80fd": "6b0a7f65f63fcea948089a7137e1b28c",
".git/objects/9b/b160e0abf4e449e34525b746f5ff2f94e76095": "c587c72cf7c1e38069ed25e0e6cf5006",
".git/objects/10/0b643fee59739fe60a0523b7328263ab3e96c4": "03594836d6b3ae0e7a3de8404458970b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/45/9b31746e3595d89138eabf939609c66e852cfc": "63c15689570ce74ac9dc9fe5c7ba408b",
".git/objects/da/d9096029198247cbc61cf430b4c9801ad83050": "5bcb5fda6981a80d339d788cfe3f8fba",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/32/fb3dce7b6b54b016fc3d1dee44be2bad4ae46a": "ed41b35a44a9fc4d7d8a34ca6341d39b",
".git/objects/32/002d1dbfb05662d1a00c1088ce4371cef091c5": "86d91ab57b5bb6494ab780004e782c59",
".git/objects/a3/9f353815d093f74be38a1b7a035f150be21424": "830fac01046861361ff937fb7b5e5dd1",
".git/objects/80/051cfccd0ebd298602a295fb9810b8cbf1cafc": "f12d8968262ad26b3f3e673a7129192a",
".git/objects/80/8e311a84354288258b84d0d432acfbd0c3fa64": "5ab8e967af5dc420b99c7ea1b6597651",
".git/objects/13/a99acdcfd2db30638423104f8045b5a25e9185": "19aa8639d79b4906353d5c9b503b1c00",
".git/index": "c2d5d066f6cc83f231106abaff841fe5",
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
"flutter_bootstrap.js": "4f1bd55c9045834c3c7bc42543931848",
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
