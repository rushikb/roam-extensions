!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/webpack-demo/",n(n.s=0)}([function(e,t,n){"use strict";function r(){if(!(this instanceof r))return new r;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}n.r(t);var o=window.document.documentElement,i=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector;r.prototype.matchesSelector=function(e,t){return i.call(e,t)},r.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},r.prototype.indexes=[];var u=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(u))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var a=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(a))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var s,c=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(c))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),r.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},s="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var l=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function f(e,t){var n,r,o,i,u,a,s=(e=e.slice(0).concat(e.default)).length,c=t,f=[];do{if(l.exec(""),(o=l.exec(c))&&(c=o[3],o[2]||!c))for(n=0;n<s;n++)if(u=(a=e[n]).selector(o[1])){for(r=f.length,i=!1;r--;)if(f[r].index===a&&f[r].key===u){i=!0;break}i||f.push({index:a,key:u});break}}while(o);return f}function d(e,t){var n,r,o;for(n=0,r=e.length;n<r;n++)if(o=e[n],t.isPrototypeOf(o))return o}function p(e,t){return e.id-t.id}r.prototype.logDefaultIndexUsed=function(){},r.prototype.add=function(e,t){var n,r,o,i,u,a,c,l,p=this.activeIndexes,h=this.selectors,v=this.selectorObjects;if("string"==typeof e){for(v[(n={id:this.uid++,selector:e,data:t}).id]=n,c=f(this.indexes,e),r=0;r<c.length;r++)i=(l=c[r]).key,(u=d(p,o=l.index))||((u=Object.create(o)).map=new s,p.push(u)),o===this.indexes.default&&this.logDefaultIndexUsed(n),(a=u.map.get(i))||(a=[],u.map.set(i,a)),a.push(n);this.size++,h.push(e)}},r.prototype.remove=function(e,t){if("string"==typeof e){var n,r,o,i,u,a,s,c,l=this.activeIndexes,d=this.selectors=[],p=this.selectorObjects,h={},v=1===arguments.length;for(n=f(this.indexes,e),o=0;o<n.length;o++)for(r=n[o],i=l.length;i--;)if(a=l[i],r.index.isPrototypeOf(a)){if(s=a.map.get(r.key))for(u=s.length;u--;)(c=s[u]).selector!==e||!v&&c.data!==t||(s.splice(u,1),h[c.id]=!0);break}for(o in h)delete p[o],this.size--;for(o in p)d.push(p[o].selector)}},r.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,r,o,i,u,a,s,c={},l=[],f=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,r=f.length;t<r;t++)for(i=f[t],n=0,o=(u=this.matches(i)).length;n<o;n++)c[(s=u[n]).id]?a=c[s.id]:(a={id:s.id,selector:s.selector,data:s.data,elements:[]},c[s.id]=a,l.push(a)),a.elements.push(i);return l.sort(p)},r.prototype.matches=function(e){if(!e)return[];var t,n,r,o,i,u,a,s,c,l,f,d=this.activeIndexes,h={},v=[];for(t=0,o=d.length;t<o;t++)if(s=(a=d[t]).element(e))for(n=0,i=s.length;n<i;n++)if(c=a.map.get(s[n]))for(r=0,u=c.length;r<u;r++)!h[f=(l=c[r]).id]&&this.matchesSelector(e,l.selector)&&(h[f]=!0,v.push(l));return v.sort(p)};var h={},v={},m=new WeakMap,y=new WeakMap,g=new WeakMap,b=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function w(e,t,n){var r=e[t];return e[t]=function(){return n.apply(e,arguments),r.apply(e,arguments)},e}function x(){m.set(this,!0)}function S(){m.set(this,!0),y.set(this,!0)}function k(){return g.get(this)||null}function O(e,t){b&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||b.get})}function P(e){if(function(e){try{return e.eventPhase,!0}catch(e){return!1}}(e)){var t=(1===e.eventPhase?v:h)[e.type];if(t){var n=function(e,t,n){var r=[],o=t;do{if(1!==o.nodeType)break;var i=e.matches(o);if(i.length){var u={node:o,observers:i};n?r.unshift(u):r.push(u)}}while(o=o.parentElement);return r}(t,e.target,1===e.eventPhase);if(n.length){w(e,"stopPropagation",x),w(e,"stopImmediatePropagation",S),O(e,k);for(var r=0,o=n.length;r<o&&!m.get(e);r++){var i=n[r];g.set(e,i.node);for(var u=0,a=i.observers.length;u<a&&!y.get(e);u++)i.observers[u].data.call(i.node,e)}g.delete(e),O(e)}}}}var j,E,M,F,I,_,z=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},L=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},T=function(e){return function(t){var n=t.x-window.m_pos;window.m_pos=t.x;var r=getComputedStyle(document.documentElement).getPropertyValue(e);document.documentElement.style.setProperty(e,parseInt(r)+n+"px")}},A=function(e,t,n){return function(r){document.querySelector(e).offsetWidth-t<=r.offsetX&&(window.m_pos=r.x,window.addEventListener("mousemove",n))}},q=function(e,t,n){return z(void 0,void 0,void 0,(function(){var o;return L(this,(function(i){return function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=!!o.capture,u=i?v:h,a=u[e];a||(a=new r,u[e]=a,document.addEventListener(e,P,i)),a.add(t,n)}("mousedown",e,t),o=function(){window.removeEventListener("mousemove",n)},window.addEventListener("mouseup",o),[2]}))}))},C=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},U=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};(j=function(){return C(void 0,void 0,void 0,(function(){var e;return U(this,(function(t){switch(t.label){case 0:return e=T("--page-width"),[4,(n=document.querySelector(".roam-article"),r="roam-page-width-resize",o=10,z(void 0,void 0,void 0,(function(){var e;return L(this,(function(t){return e=document.createElement("span"),Object.assign(e.style,{position:"absolute",top:0,right:0,height:"100%",width:o+"px",cursor:"w-resize"}),e.className=r,null==n||n.appendChild(e),[2]}))})))];case 1:return t.sent(),[4,q(".roam-page-width-resize",A(".roam-page-width-resize",10,e),e)];case 2:return t.sent(),[2]}var n,r,o}))}))})(),window.addEventListener("hashchange",j,!1),E={id:"roam-right-sidebar-content",parent:document.getElementById("right-sidebar"),recursive:!1,done:function(e){var t="#roam-right-sidebar-content > div > div > div > div:last-child",n=T("--page-side-width");q(t,A(t,25,n),n)}},M=E.id,F=E.parent,I=E.recursive,_=E.done,new MutationObserver((function(e){var t=document.getElementById(M);t&&_(t)&&this.disconnect()})).observe(F||document,{subtree:!!I,childList:!0})}]);