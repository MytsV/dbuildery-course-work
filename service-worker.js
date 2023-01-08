/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "85c26d8ec33511cc2a4cacc1057d45c2"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1f09101c.css",
    "revision": "5772d47df4675db0047ce74a3c442015"
  },
  {
    "url": "assets/img/Agile-model1.d7cea002.jpg",
    "revision": "d7cea002c29bd7b3520e9ee4b29fd9ae"
  },
  {
    "url": "assets/img/create1.383a937e.png",
    "revision": "383a937e5c469d53b66fe352a2dc281c"
  },
  {
    "url": "assets/img/create2.29b3765c.png",
    "revision": "29b3765c6d1ff0e1309b01ad30c8e3c8"
  },
  {
    "url": "assets/img/createMissing.f08f50e6.png",
    "revision": "f08f50e6067cde39d3105d51a3da141a"
  },
  {
    "url": "assets/img/createResult.3b33427c.png",
    "revision": "3b33427c5fd1519466e52aab966a1b32"
  },
  {
    "url": "assets/img/delete.1b495cf9.png",
    "revision": "1b495cf9c7dd9bda7a2ee230434a1846"
  },
  {
    "url": "assets/img/deleteMissing.84febaac.png",
    "revision": "84febaac61745b8cf5bfe562047629aa"
  },
  {
    "url": "assets/img/deleteResult.a8b77b38.png",
    "revision": "a8b77b38bfdc9cde849c9a301f40df81"
  },
  {
    "url": "assets/img/getAll1.87736abd.png",
    "revision": "87736abd54cee2f4eca66e68e4165832"
  },
  {
    "url": "assets/img/getSingle1.ce1f6775.png",
    "revision": "ce1f6775c3995258bd63a8b34d4cd682"
  },
  {
    "url": "assets/img/getSingleMissing.1c5d6258.png",
    "revision": "1c5d6258d0da7699de396071766165bd"
  },
  {
    "url": "assets/img/incremental_model.f5d9e8fb.jpg",
    "revision": "f5d9e8fb91535b6d3c0ea1fabfff8de3"
  },
  {
    "url": "assets/img/iteration_model.e0a0d503.png",
    "revision": "e0a0d503d526275a965b85712a403de8"
  },
  {
    "url": "assets/img/kanban.b72f5f24.png",
    "revision": "b72f5f24fff0c7c164d7fd9c58239efd"
  },
  {
    "url": "assets/img/launch.91547683.png",
    "revision": "915476838de4afaf586a6a996792a369"
  },
  {
    "url": "assets/img/rup.7215ce47.png",
    "revision": "7215ce47c8b371b4efe2dd0229a203da"
  },
  {
    "url": "assets/img/sceme.4c43a144.png",
    "revision": "4c43a1442c9af499a43b753271d55083"
  },
  {
    "url": "assets/img/Scrum1.6cf6e799.jpg",
    "revision": "6cf6e7992ae0a26347624ec09b471af1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Spiral-model.ff8b53fb.jpg",
    "revision": "ff8b53fb3a68d45d8d41595446121981"
  },
  {
    "url": "assets/img/update1.f51098cc.png",
    "revision": "f51098ccde1308fe3078b830e43129bf"
  },
  {
    "url": "assets/img/update2.e4a47fef.png",
    "revision": "e4a47fef23e70a4918bb57f3fa138ed9"
  },
  {
    "url": "assets/img/update3.d06242e1.png",
    "revision": "d06242e123d05e9f0dbde0605d99caec"
  },
  {
    "url": "assets/img/updateMissing.37eb90aa.png",
    "revision": "37eb90aa268539b6c4b36b3dd98febd7"
  },
  {
    "url": "assets/img/updateResult.89dca0f3.png",
    "revision": "89dca0f3535b812169fb58afbddd2b84"
  },
  {
    "url": "assets/img/V-model-1.f7c326d5.jpg",
    "revision": "f7c326d533c04a8c5c68e1344c6ed759"
  },
  {
    "url": "assets/img/Waterfall-model.370b6011.jpg",
    "revision": "370b60114ad9a205c274b630c92f2bab"
  },
  {
    "url": "assets/js/10.1292da4a.js",
    "revision": "4d1fa0251e44b5bdb0c9853451fdb992"
  },
  {
    "url": "assets/js/11.75299aa9.js",
    "revision": "2877794469693fafb75340f6ae954cbf"
  },
  {
    "url": "assets/js/12.7482dfc0.js",
    "revision": "a00a03e35fe576fc6dd7db244a827680"
  },
  {
    "url": "assets/js/13.0eebeef6.js",
    "revision": "62d29d7cdd9bd5b397519a544970954d"
  },
  {
    "url": "assets/js/14.b1b1c777.js",
    "revision": "b7827b3af4673aec52a7c74df7315523"
  },
  {
    "url": "assets/js/15.3e6a71e3.js",
    "revision": "d39ff77024c51fb760fe8a64935df4eb"
  },
  {
    "url": "assets/js/16.3206680e.js",
    "revision": "5d7d55ff710d3e0263ff10cb2ae2d578"
  },
  {
    "url": "assets/js/17.1e8ad942.js",
    "revision": "466a7ef9c4dd687ed594f5ac19381233"
  },
  {
    "url": "assets/js/18.f20e2cbd.js",
    "revision": "23507fc7093c6348599bd871d0a37b64"
  },
  {
    "url": "assets/js/19.28842215.js",
    "revision": "79d7525094d16a6827effbcdee325f78"
  },
  {
    "url": "assets/js/2.bf3b2444.js",
    "revision": "4d976bc69dc0d1fa5af7e2342ced82c6"
  },
  {
    "url": "assets/js/20.73bd58d4.js",
    "revision": "95c41aaff742b8f57ab38299f33c08d9"
  },
  {
    "url": "assets/js/21.45914e15.js",
    "revision": "37e02f4a07f269bd032814a5962cd03c"
  },
  {
    "url": "assets/js/22.6288d3f9.js",
    "revision": "923289c42b8038dc9d2d33bb1d6dba2a"
  },
  {
    "url": "assets/js/23.5fe46f65.js",
    "revision": "ac4629724ba8862cac79443e14b31a52"
  },
  {
    "url": "assets/js/24.711eefca.js",
    "revision": "882a2cd3a9281757c3cc30fa22690f37"
  },
  {
    "url": "assets/js/26.9770dbfa.js",
    "revision": "e578007821f3b81a48a7b649d9f803b4"
  },
  {
    "url": "assets/js/3.c6816355.js",
    "revision": "4de7f00fc464b6bd9237b9629f4d636f"
  },
  {
    "url": "assets/js/4.5eeb1dfa.js",
    "revision": "36863cabb4ee300a93ae4ab2999e9028"
  },
  {
    "url": "assets/js/5.460d9149.js",
    "revision": "195cddc3c7eab3cccce33617bec54315"
  },
  {
    "url": "assets/js/6.17bedae3.js",
    "revision": "7fb6bd62534c55c1f43d357604d98651"
  },
  {
    "url": "assets/js/7.72ce730f.js",
    "revision": "9ab7619ce053961cdf30b26fc4dc48aa"
  },
  {
    "url": "assets/js/8.1ad78406.js",
    "revision": "94e05a0c9563841fd8702f4d7e434a2f"
  },
  {
    "url": "assets/js/9.2019e93b.js",
    "revision": "c88461856d8482ec9b8acd50e9f2bec4"
  },
  {
    "url": "assets/js/app.8dbf52bc.js",
    "revision": "a53a8138d1de5ec3ecfea25ac22a5ac3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "15b45bcb57683652cfb7218c997b6a9a"
  },
  {
    "url": "design/index.html",
    "revision": "cc72b052cf632a4b9b102c88db92ce0c"
  },
  {
    "url": "index.html",
    "revision": "3c7c95f0f8b60199c1527093cdd02e5d"
  },
  {
    "url": "intro/index.html",
    "revision": "b8603f8d94f9cd180a7b08db337f4960"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "647aca3ad7b1a62f8aad7a575662b62a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ae63c879a4429a940560a2ec5363f056"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "dc8fab1df030e66ebfb41039359f6209"
  },
  {
    "url": "software/index.html",
    "revision": "feb49fdd887d02cd7d66fa461cadd951"
  },
  {
    "url": "test/index.html",
    "revision": "0f1f3fd97d293a75a16fd92153e44368"
  },
  {
    "url": "use cases/index.html",
    "revision": "b3ee592b62fed1943df72e2f608d2d78"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
