var t="1.4.1";function r(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof h?r:h,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=E(a,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=l(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var s={};function h(){}function p(){}function y(){}var v={};c(v,i,(function(){return this}));var d=Object.getPrototypeOf,g=d&&d(d(O([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=y.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function e(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function x(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=y,c(m,"constructor",y),c(y,"constructor",p),p.displayName=c(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),c(m,u,"Generator"),c(m,i,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){if(t){if("string"==typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,r):void 0}}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function c(t){var r=e(t);return"function"===r||"object"===r&&null!==t}function f(t,r){var e=this,n=null;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){t.apply(e,i)}),r)}}function l(t,r){var e=this,n=0;return function(){var o=Date.now();if(o-n>=r){n=o;for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];t.apply(e,a)}}}function s(t){return t.map((function(t){if("number"!=typeof t)throw new Error("Parameter is not a number array")})),Math.max.apply(Math,i(t))}function h(t){return t.map((function(t){if("number"!=typeof t)throw new TypeError("Parameter is not a number array")})),Math.min.apply(Math,i(t))}function p(t){return Object.prototype.toString.call(t).replace(/\[|\]|object /g,"")}function y(t){return function t(r,e){if(!c(r))return"Symbol"===p(r)?function(t){var r=String(t),e=r.slice(7,r.length-1);return Symbol(e)}(r):r;var n=function(t){return"Array"===p(t)?[]:"Object"===p(t)?{}:"Set"===p(t)?new Set:"Map"===p(t)?new Map:null}(r);if(e.has(r))return e.get(r);if(e.set(r,n),"Map"===p(r))return r.forEach((function(r,o){n.set(t(o,e),t(r,e))})),n;if("Set"===p(r))return r.forEach((function(r){n.add(t(r,e))})),n;if("Object"===p(r)||"Array"===p(r)){for(var o in r)r.hasOwnProperty(o)&&(n[o]=t(r[o],e));return n}return"RegExp"===p(r)?function(t){return new RegExp(t.source,t.flags)}(r):"Date"===p(r)?new Date(r):"Function"===p(r)?r:void 0}(t,new WeakMap)}function v(t){return function(){for(var r=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return new Promise((function(e){e(t.apply(r,n))}))}}function d(t){var r=String(t);10===r.length&&(r+="000"),r=Number(r);var e=new Date(r),n={};return n.year=e.getFullYear(),n.month=e.getMonth()+1,n.date=e.getDate(),n.day=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][e.getDay()],n.hours=e.getHours(),n.minutes=e.getMinutes(),n.seconds=e.getSeconds(),n}function g(t){if(!c(t))throw new TypeError("parameter is not a object");var r="";return Object.keys(t).map((function(e){r+=e+"="+t[e]+"&"})),r.slice(0,-1)}function m(t){if("String"!==p(t))throw new TypeError("parameter is not a string");var r={};return t.split("&").map((function(t){var e=t.split("=");r[e[0]]=e[1]})),r}function w(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];if(1!==r.length&&2!==r.length)throw new Error("function random needs to accept one or two parameter");for(var n=0,o=r;n<o.length;n++){var i=o[n];if("number"!=typeof i)throw new TypeError("The parameter type must be number")}return 1===r.length?Math.random()*r[0]:Math.random()*(r[1]-r[0])+r[0]}function b(){for(var t=[],r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];return e.map((function(r){switch(p(r)){case"String":t.push(r);break;case"Object":var e=Object.keys(r).filter((function(t){return r[t]})).map((function(t){return String(t)}));t.push.apply(t,i(e));break;default:throw new TypeError("Parameter invalid")}})),t.join(" ")}function E(t){for(var r={},e=t.toLowerCase().replace(/-(.)/g,(function(t,r){return r.toUpperCase()})).replace(/;\s?$/g,"").split(/:|;/g),n=0;n<e.length;n+=2)r[e[n].replace(/\s/g,"")]=e[n+1].replace(/^\s+|\s+$/g,"");return r}function x(t){return!Object.keys(t).length}function S(){for(var t="",r=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","_"],e=0;e<17;e++)t+=r[Math.floor(63*Math.random())];return t}function L(t){return O.apply(this,arguments)}function O(){return(O=o(r().mark((function t(e){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(e);case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),new Error("copyText: "+t.t0.message);case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}function j(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=new FileReader,n=(null==t?void 0:t.type)||"image/png",o=new Image;return new Promise((function(i,a){o.addEventListener("load",(function(){var t=o.width/o.height,e=o.width,a=o.height;r.width&&r.height?(e=r.width,a=r.height):(r.width||r.height)&&(r.width?a=(e=r.width)/t:e=(a=r.height)*t);var u=document.createElement("canvas");u.width=e,u.height=a;var c=u.getContext("2d");if(c.clearRect(0,0,e,a),c.drawImage(o,0,0,e,a),"blob"===r.dataType)u.toBlob((function(t){i(t)}),n,r.quality||.6);else{var f=u.toDataURL(n,r.quality||.6);i(f)}})),e.addEventListener("load",(function(){2===e.readyState&&(o.src=e.result)})),e.readAsDataURL(t)}))}function B(t,r){var e,n={},o=function(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=a(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw i}}}}(r);try{for(o.s();!(e=o.n()).done;){var i,u=e.value;if("[object String]"===Object.prototype.toString.call(u))n[u]=null!==(i=t[u])&&void 0!==i?i:null;else n[u[0]]=void 0===t[u[0]]?null:B(t[u[0]],u[1])}}catch(t){o.e(t)}finally{o.f()}return n}function A(t,r,e){var n={b:1,B:8,KB:8192,MB:8388608,GB:8589934592},o=Object.keys(n);if(!o.includes(e))throw new Error("TargetUnit Only 'b','B','KB','MB','GB' are supported.");if(!o.includes(r))throw new Error("Unit Only 'b','B','KB','MB','GB' are supported.");return t*n[r]/n[e]}function M(t,r){var e=["b","B","KB","MB","GB"];if(!e.includes(r))throw new Error("Unit Only 'b','B','KB','MB','GB' are supported.");for(var n=e.indexOf(r);t>=1024||0===n&&t>=8;)t=A(t,e[n],e[++n]);return t.toFixed(2)+e[n]}var T=function(t){return t%4==0&&t%100!=0||t%400==0},k={eventlist:{},on:function(t,r){this.eventlist.hasOwnProperty(t)||(this.eventlist[t]=[]),this.eventlist[t].push(r)},emit:function(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];if(!this.eventlist.hasOwnProperty(t))throw Error("".concat(t," is not existence"));this.eventlist[t].forEach((function(t){t.apply(void 0,e)}))},off:function(t){if(!this.eventlist.hasOwnProperty(t))throw Error("".concat(t," is not existence"));delete this.eventlist[t]},clear:function(){this.eventlist={}}};function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,r=document.documentElement;function e(){var e=r.clientWidth/t;r.style.fontSize=e+"px"}e(),window.addEventListener("resize",e),window.addEventListener("pageshow",(function(t){t.persisted&&e()}))}export{b as classes,B as cleanData,L as copyText,f as debounce,y as deepClone,k as eventBus,s as findMaxValue,h as findMinValue,d as getTimeInfo,p as getVariableType,j as imageCompress,v as initPromiseFunc,x as isEmptyObject,T as isLeapYear,c as isObject,A as memoryCalc,M as memoryFormat,m as queryParse,g as queryStringify,w as random,P as remAdapter,E as styleStrToObject,l as throttle,S as uid,t as version};
