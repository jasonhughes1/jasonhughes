"use strict";var precacheConfig=[["/jasonhughes/index.html","ba059b1e3849eb85f28db5eb420e0af0"],["/jasonhughes/static/css/main.a4b50f01.css","8c2ea7fdbb0b006298154c3fc0e0fa1d"],["/jasonhughes/static/js/main.f3f30e09.js","dcb4e76795337b2483dd7339b51f9271"],["/jasonhughes/static/media/CSS.385b1cd1.jpg","385b1cd120f9e63862f1c8e8eda080e3"],["/jasonhughes/static/media/JavaScript.0cded3a3.png","0cded3a3276425911d55a2552bf361bf"],["/jasonhughes/static/media/Resume.f3dc040a.pdf","f3dc040afcee969a6484b52a196b65ac"],["/jasonhughes/static/media/email.8e626ada.svg","8e626ada114559e257bff19435d4af7f"],["/jasonhughes/static/media/express.0bf7e90f.png","0bf7e90f5c12f8bba05649d29f554a71"],["/jasonhughes/static/media/github.dd24e5cb.png","dd24e5cbdc77ae6eac2c09f96de0c293"],["/jasonhughes/static/media/golden.92010d18.jpg","92010d18a52ca899c9478e230cf6ec9d"],["/jasonhughes/static/media/headcount.b5c8e99c.png","b5c8e99cba1cf363e94f00147683c736"],["/jasonhughes/static/media/linkedin.c1a3ad44.png","c1a3ad44057df610974c24bf46f6cae9"],["/jasonhughes/static/media/node.9100f2eb.png","9100f2eb47cae949fb1f01853263103c"],["/jasonhughes/static/media/pdf.1a131f5c.png","1a131f5c82fcdafeb38df5189acf5c0d"],["/jasonhughes/static/media/react-1.876a8325.svg","876a8325687358ce46ec26be29118535"],["/jasonhughes/static/media/redux.b4e23a50.png","b4e23a502e44692d9f3c8b427ac23e01"],["/jasonhughes/static/media/salaries.d70db71e.png","d70db71ec0d3112667117521d34276f9"],["/jasonhughes/static/media/swapi.d08cd6dc.png","d08cd6dcde091694a15ec28636df37a4"],["/jasonhughes/static/media/wowzalogo.2ffe128f.png","2ffe128fb5214b5e355cda2060813d4f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),s=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var s="/jasonhughes/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});