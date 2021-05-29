(()=>{var e,r,n,t,o,i,d,a={809:()=>{document.getElementById("app")}},c={};function l(e){var r=c[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=c[e]={exports:{}};try{var t={id:e,module:n,factory:a[e],require:l};l.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.exports}l.m=a,l.c=c,l.i=[],l.hu=e=>e+"."+l.h()+".hot-update.js",l.miniCssF=e=>{},l.hmrF=()=>"main."+l.h()+".hot-update.json",l.h=()=>"b4df0771ebe51e530e55",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="js-redux-training-repo:",l.l=(n,t,o,i)=>{if(e[n])e[n].push(t);else{var d,a;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==r+o){d=u;break}}d||(a=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.setAttribute("data-webpack",r+o),d.src=n),e[n]=[t];var p=(r,t)=>{d.onerror=d.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=p.bind(null,d.onerror),d.onload=p.bind(null,d.onload),a&&document.head.appendChild(d)}},(()=>{var e,r,n,t,o={},i=l.c,d=[],a=[],c="idle";function s(e){c=e;for(var r=0;r<a.length;r++)a[r].call(null,e)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return s("check"),l.hmrM().then((function(t){if(!t)return s(v()?"ready":"idle"),null;s("prepare");var o=[];return r=[],n=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,r){return l.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return u((function(){return e?h(e):(s("ready"),o)}))}))}))}function f(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var r=n.map((function(r){return r(e)}));n=void 0;var o,i=r.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return s("abort"),Promise.resolve().then((function(){throw i[0]}));s("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),s("apply");var d=function(e){o||(o=e)},a=[];return r.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)a.push(r[n])}})),o?(s("fail"),Promise.resolve().then((function(){throw o}))):t?h(e).then((function(e){return a.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(s("idle"),Promise.resolve(a))}function v(){if(t)return n||(n=[]),Object.keys(l.hmrI).forEach((function(e){t.forEach((function(r){l.hmrI[e](r,n)}))})),t=void 0,!0}l.hmrD=o,l.i.push((function(h){var v,m,y,g,E=h.module,b=function(n,t){var o=i[t];if(!o)return n;var a=function(r){if(o.hot.active){if(i[r]){var a=i[r].parents;-1===a.indexOf(t)&&a.push(t)}else d=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),d=[];return n(r)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&"e"!==p&&Object.defineProperty(a,p,l(p));return a.e=function(e){return function(e){switch(c){case"ready":return s("prepare"),r.push(e),u((function(){s("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},a}(h.require,h.id);E.hot=(v=h.id,m=E,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){d=m.parents.slice(),e=y?void 0:v,l(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":n=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](v,n)})),s("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](v,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(v)}},check:p,apply:f,status:function(e){if(!e)return c;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:o[v]},e=void 0,g),E.parents=d,E.children=[],d=[],h.require=b})),l.hmrC={},l.hmrI={}})(),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var r=l.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),n=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var d=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=d,c.request=a,o.parentNode.removeChild(o),t(c)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(d=n[t]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(o===e||o===r))return d}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var d;if((o=(d=i[t]).getAttribute("data-href"))===e||o===r)return d}},o=[],i=[],d=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),l.hmrC.miniCss=(e,r,a,c,s,u)=>{s.push(d),e.forEach((e=>{var r=l.miniCssF(e),d=l.p+r,a=t(r,d);a&&c.push(new Promise(((r,t)=>{var c=n(e,d,(()=>{c.as="style",c.rel="preload",r()}),t);o.push(a),i.push(c)})))}))},(()=>{var e,r,n,t,o={179:0},i={};function d(e){return new Promise(((r,n)=>{i[e]=r;var t=l.p+l.hu(e),o=new Error;l.l(t,(r=>{if(i[e]){i[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+d+")",o.name="ChunkLoadError",o.type=t,o.request=d,n(o)}}))}))}function a(i){function d(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,d=o.chain,c=l.c[i];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var s=0;s<c.parents.length;s++){var u=c.parents[s],p=l.c[u];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([u]),moduleId:i,parentId:u};-1===r.indexOf(u)&&(p.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),a(n[u],[i])):(delete n[u],r.push(u),t.push({chain:d.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function a(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}l.f&&delete l.f.jsonpHmr,e=void 0;var c={},s=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(l.o(r,f)){var h,v=r[f],m=!1,y=!1,g=!1,E="";switch((h=v?d(f):{type:"disposed",moduleId:f}).chain&&(E="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+E));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+E));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(m=new Error("Aborted because "+f+" is not accepted"+E));break;case"accepted":i.onAccepted&&i.onAccepted(h),y=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(f in u[f]=v,a(s,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,f)&&(c[f]||(c[f]=[]),a(c[f],h.outdatedDependencies[f]));g&&(a(s,[h.moduleId]),u[f]=p)}r=void 0;for(var b,_=[],w=0;w<s.length;w++){var I=s[w],D=l.c[I];D&&(D.hot._selfAccepted||D.hot._main)&&u[I]!==p&&!D.hot._selfInvalidated&&_.push({module:I,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var r,t=s.slice();t.length>0;){var i=t.pop(),d=l.c[i];if(d){var a={},u=d.hot._disposeHandlers;for(w=0;w<u.length;w++)u[w].call(null,a);for(l.hmrD[i]=a,d.hot.active=!1,delete l.c[i],delete c[i],w=0;w<d.children.length;w++){var p=l.c[d.children[w]];p&&(e=p.parents.indexOf(i))>=0&&p.parents.splice(e,1)}}}for(var f in c)if(l.o(c,f)&&(d=l.c[f]))for(b=c[f],w=0;w<b.length;w++)r=b[w],(e=d.children.indexOf(r))>=0&&d.children.splice(e,1)},apply:function(e){for(var r in u)l.o(u,r)&&(l.m[r]=u[r]);for(var n=0;n<t.length;n++)t[n](l);for(var o in c)if(l.o(c,o)){var d=l.c[o];if(d){b=c[o];for(var a=[],p=[],f=[],h=0;h<b.length;h++){var v=b[h],m=d.hot._acceptedDependencies[v],y=d.hot._acceptedErrorHandlers[v];if(m){if(-1!==a.indexOf(m))continue;a.push(m),p.push(y),f.push(v)}}for(var g=0;g<a.length;g++)try{a[g].call(null,b)}catch(r){if("function"==typeof p[g])try{p[g](r,{moduleId:o,dependencyId:f[g]})}catch(n){i.onErrored&&i.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:f[g],error:n,originalError:r}),i.ignoreErrored||(e(n),e(r))}else i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[g],error:r}),i.ignoreErrored||e(r)}}}for(var E=0;E<_.length;E++){var w=_[E],I=w.module;try{w.require(I)}catch(r){if("function"==typeof w.errorHandler)try{w.errorHandler(r,{moduleId:I,module:l.c[I]})}catch(n){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:n,originalError:r}),i.ignoreErrored||(e(n),e(r))}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:I,error:r}),i.ignoreErrored||e(r)}}return s}}}self.webpackHotUpdatejs_redux_training_repo=(e,n,o)=>{for(var d in n)l.o(n,d)&&(r[d]=n[d]);o&&t.push(o),i[e]&&(i[e](),i[e]=void 0)},l.hmrI.jsonp=function(e,o){r||(r={},t=[],n=[],o.push(a)),l.o(r,e)||(r[e]=l.m[e])},l.hmrC.jsonp=function(i,c,s,u,p,f){p.push(a),e={},n=c,r=s.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],i.forEach((function(r){l.o(o,r)&&void 0!==o[r]&&(u.push(d(r)),e[r]=!0)})),l.f&&(l.f.jsonpHmr=function(r,n){e&&!l.o(e,r)&&l.o(o,r)&&void 0!==o[r]&&(n.push(d(r)),e[r]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),l(809)})();