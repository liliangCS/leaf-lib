"use strict";Object.defineProperty(exports,"__esModule",{value:!0});function t(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=x(a,r);if(u){if(u===l)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var l={};function h(){}function p(){}function y(){}var v={};c(v,i,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(j([])));m&&m!==r&&n.call(m,i)&&(v=m);var g=y.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=y,c(g,"constructor",y),c(y,"constructor",p),p.displayName=c(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),c(g,u,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t){var r=e(t);return"function"===r||"object"===r&&null!==t}function c(t){return Object.prototype.toString.call(t).replace(/\[|\]|object /g,"")}function s(){return(s=n(t().mark((function e(r){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(r);case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),new Error("copyText: "+t.t0.message);case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}var f={eventlist:{},on:function(t,e){this.eventlist.hasOwnProperty(t)||(this.eventlist[t]=[]),this.eventlist[t].push(e)},emit:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(!this.eventlist.hasOwnProperty(t))throw Error("".concat(t," is not existence"));this.eventlist[t].forEach((function(t){t.apply(void 0,r)}))},off:function(t){if(!this.eventlist.hasOwnProperty(t))throw Error("".concat(t," is not existence"));delete this.eventlist[t]},clear:function(){this.eventlist={}}};exports.calcMemory=function(t,e,r){var n={b:1,B:8,KB:8192,MB:8388608,GB:8589934592},o=Object.keys(n);if(!o.includes(r))throw new Error("TargetUnit Only 'b','B','KB','MB','GB' are supported.");if(!o.includes(e))throw new Error("Unit Only 'b','B','KB','MB','GB' are supported.");return t*n[e]/n[r]},exports.classes=function(){for(var t=[],e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.map((function(e){switch(c(e)){case"String":t.push(e);break;case"Object":var r=Object.keys(e).filter((function(t){return e[t]})).map((function(t){return String(t)}));t.push.apply(t,o(r));break;default:throw new TypeError("Parameter invalid")}})),t.join(" ")},exports.cleanData=function t(e,r){var n,o={},a=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=i(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw a}}}}(r);try{for(a.s();!(n=a.n()).done;){var u,c=n.value;if("[object String]"===Object.prototype.toString.call(c))o[c]=null!==(u=e[c])&&void 0!==u?u:null;else o[c[0]]=void 0===e[c[0]]?null:t(e[c[0]],c[1])}}catch(t){a.e(t)}finally{a.f()}return o},exports.copyText=function(t){return s.apply(this,arguments)},exports.debounce=function(t,e){var r=this,n=null;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){t.apply(r,i)}),e)}},exports.deepClone=function(t){return function t(e,r){if(!u(e))return"Symbol"===c(e)?function(t){var e=String(t),r=e.slice(7,e.length-1);return Symbol(r)}(e):e;var n=function(t){return"Array"===c(t)?[]:"Object"===c(t)?{}:"Set"===c(t)?new Set:"Map"===c(t)?new Map:null}(e);if(r.has(e))return r.get(e);if(r.set(e,n),"Map"===c(e))return e.forEach((function(e,o){n.set(t(o,r),t(e,r))})),n;if("Set"===c(e))return e.forEach((function(e){n.add(t(e,r))})),n;if("Object"===c(e)||"Array"===c(e)){for(var o in e)e.hasOwnProperty(o)&&(n[o]=t(e[o],r));return n}return"RegExp"===c(e)?function(t){return new RegExp(t.source,t.flags)}(e):"Date"===c(e)?new Date(e):"Function"===c(e)?e:void 0}(t,new WeakMap)},exports.eventBus=f,exports.findMaxValue=function(t){return t.map((function(t){if("number"!=typeof t)throw new Error("Parameter is not a number array")})),Math.max.apply(Math,o(t))},exports.findMinValue=function(t){return t.map((function(t){if("number"!=typeof t)throw new TypeError("Parameter is not a number array")})),Math.min.apply(Math,o(t))},exports.getTimeInfo=function(t){var e=String(t);10===e.length&&(e+="000"),e=Number(e);var r=new Date(e),n={};return n.year=r.getFullYear(),n.month=r.getMonth()+1,n.date=r.getDate(),n.day=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][r.getDay()],n.hours=r.getHours(),n.minutes=r.getMinutes(),n.seconds=r.getSeconds(),n},exports.getVariableType=c,exports.imageCompress=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=new FileReader,n=(null==t?void 0:t.type)||"image/png",o=new Image;return new Promise((function(i,a){o.addEventListener("load",(function(){var t=o.width/o.height,r=o.width,a=o.height;e.width&&e.height?(r=e.width,a=e.height):(e.width||e.height)&&(e.width?a=(r=e.width)/t:r=(a=e.height)*t);var u=document.createElement("canvas");u.width=r,u.height=a;var c=u.getContext("2d");if(c.clearRect(0,0,r,a),c.drawImage(o,0,0,r,a),"blob"===e.dataType)u.toBlob((function(t){i(t)}),n,e.quality||.6);else{var s=u.toDataURL(n,e.quality||.6);i(s)}})),r.addEventListener("load",(function(){2===r.readyState&&(o.src=r.result)})),r.readAsDataURL(t)}))},exports.initPromiseFunc=function(t){return function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return new Promise((function(r){r(t.apply(e,n))}))}},exports.isEmptyObject=function(t){return!Object.keys(t).length},exports.isObject=u,exports.queryParse=function(t){if("String"!==c(t))throw new TypeError("parameter is not a string");var e={};return t.split("&").map((function(t){var r=t.split("=");e[r[0]]=r[1]})),e},exports.queryStringify=function(t){if(!u(t))throw new TypeError("parameter is not a object");var e="";return Object.keys(t).map((function(r){e+=r+"="+t[r]+"&"})),e.slice(0,-1)},exports.random=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];if(1!==e.length&&2!==e.length)throw new Error("function random needs to accept one or two parameter");for(var n=0,o=e;n<o.length;n++){var i=o[n];if("number"!=typeof i)throw new TypeError("The parameter type must be number")}return 1===e.length?Math.random()*e[0]:Math.random()*(e[1]-e[0])+e[0]},exports.remAdapter=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=document.documentElement;function r(){var r=e.clientWidth/t;e.style.fontSize=r+"px"}r(),window.addEventListener("resize",r),window.addEventListener("pageshow",(function(t){t.persisted&&r()}))},exports.styleStrToObject=function(t){for(var e={},r=t.toLowerCase().replace(/-(.)/g,(function(t,e){return e.toUpperCase()})).replace(/;\s?$/g,"").split(/:|;/g),n=0;n<r.length;n+=2)e[r[n].replace(/\s/g,"")]=r[n+1].replace(/^\s+|\s+$/g,"");return e},exports.throttle=function(t,e){var r=this,n=0;return function(){var o=Date.now();if(o-n>=e){n=o;for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];t.apply(r,a)}}},exports.uid=function(){for(var t="",e=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","_"],r=0;r<17;r++)t+=e[Math.floor(63*Math.random())];return t},exports.version="1.4.0";
