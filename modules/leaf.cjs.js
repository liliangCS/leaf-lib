"use strict";Object.defineProperty(exports,"__esModule",{value:!0});function t(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
t=function(){return r};var r={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof h?r:h,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=x(a,e);if(u){if(u===l)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=f(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var l={};function h(){}function p(){}function y(){}var d={};c(d,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==e&&n.call(m,i)&&(d=m);var g=y.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function e(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,l;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function r(){for(;++e<t.length;)if(n.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=y,c(g,"constructor",y),c(y,"constructor",p),p.displayName=c(y,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},r.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,a,(function(){return this})),r.AsyncIterator=b,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new b(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),c(g,u,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},r}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function e(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){if(t){if("string"==typeof t)return a(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function u(t){var e=r(t);return"function"===e||"object"===e&&null!==t}function c(t){return Object.prototype.toString.call(t).replace(/\[|\]|object /g,"")}function s(){return(s=n(t().mark((function r(e){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(e);case 3:t.next=8;break;case 5:throw t.prev=5,t.t0=t.catch(0),new Error("copyText: "+t.t0.message);case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}}),r,null,[[0,5]])})))).apply(this,arguments)}function f(t,r,e){var n={b:1,B:8,KB:8192,MB:8388608,GB:8589934592},o=Object.keys(n);if(!o.includes(e))throw new Error("TargetUnit Only 'b','B','KB','MB','GB' are supported.");if(!o.includes(r))throw new Error("Unit Only 'b','B','KB','MB','GB' are supported.");return t*n[r]/n[e]}var l={eventlist:{},on:function(t,r){this.eventlist.hasOwnProperty(t)||(this.eventlist[t]=[]),this.eventlist[t].push(r)},emit:function(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];if(!this.eventlist.hasOwnProperty(t))throw Error("".concat(t," is not existence"));this.eventlist[t].forEach((function(t){t.apply(void 0,e)}))},off:function(t){if(!this.eventlist.hasOwnProperty(t))throw Error("".concat(t," is not existence"));delete this.eventlist[t]},clear:function(){this.eventlist={}}};exports.classes=function(){for(var t=[],r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];return e.map((function(r){switch(c(r)){case"String":t.push(r);break;case"Object":var e=Object.keys(r).filter((function(t){return r[t]})).map((function(t){return String(t)}));t.push.apply(t,o(e));break;default:throw new TypeError("Parameter invalid")}})),t.join(" ")},exports.cleanData=function t(r,e){var n,o={},a=function(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=i(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}(e);try{for(a.s();!(n=a.n()).done;){var u,c=n.value;if("[object String]"===Object.prototype.toString.call(c))o[c]=null!==(u=r[c])&&void 0!==u?u:null;else o[c[0]]=void 0===r[c[0]]?null:t(r[c[0]],c[1])}}catch(t){a.e(t)}finally{a.f()}return o},exports.copyText=function(t){return s.apply(this,arguments)},exports.debounce=function(t,r){var e=this,n=null;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){t.apply(e,i)}),r)}},exports.deepClone=function(t){return function t(r,e){if(!u(r))return"Symbol"===c(r)?function(t){var r=String(t),e=r.slice(7,r.length-1);return Symbol(e)}(r):r;var n=function(t){return"Array"===c(t)?[]:"Object"===c(t)?{}:"Set"===c(t)?new Set:"Map"===c(t)?new Map:null}(r);if(e.has(r))return e.get(r);if(e.set(r,n),"Map"===c(r))return r.forEach((function(r,o){n.set(t(o,e),t(r,e))})),n;if("Set"===c(r))return r.forEach((function(r){n.add(t(r,e))})),n;if("Object"===c(r)||"Array"===c(r)){for(var o in r)r.hasOwnProperty(o)&&(n[o]=t(r[o],e));return n}return"RegExp"===c(r)?function(t){return new RegExp(t.source,t.flags)}(r):"Date"===c(r)?new Date(r):"Function"===c(r)?r:void 0}(t,new WeakMap)},exports.eventBus=l,exports.findMaxValue=function(t){return t.map((function(t){if("number"!=typeof t)throw new Error("Parameter is not a number array")})),Math.max.apply(Math,o(t))},exports.findMinValue=function(t){return t.map((function(t){if("number"!=typeof t)throw new TypeError("Parameter is not a number array")})),Math.min.apply(Math,o(t))},exports.getTimeInfo=function(t){var r=String(t);10===r.length&&(r+="000"),r=Number(r);var e=new Date(r),n={};return n.year=e.getFullYear(),n.month=e.getMonth()+1,n.date=e.getDate(),n.day=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][e.getDay()],n.hours=e.getHours(),n.minutes=e.getMinutes(),n.seconds=e.getSeconds(),n},exports.getVariableType=c,exports.imageCompress=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=new FileReader,n=(null==t?void 0:t.type)||"image/png",o=new Image;return new Promise((function(i,a){o.addEventListener("load",(function(){var t=o.width/o.height,e=o.width,a=o.height;r.width&&r.height?(e=r.width,a=r.height):(r.width||r.height)&&(r.width?a=(e=r.width)/t:e=(a=r.height)*t);var u=document.createElement("canvas");u.width=e,u.height=a;var c=u.getContext("2d");if(c.clearRect(0,0,e,a),c.drawImage(o,0,0,e,a),"blob"===r.dataType)u.toBlob((function(t){i(t)}),n,r.quality||.6);else{var s=u.toDataURL(n,r.quality||.6);i(s)}})),e.addEventListener("load",(function(){2===e.readyState&&(o.src=e.result)})),e.readAsDataURL(t)}))},exports.initPromiseFunc=function(t){return function(){for(var r=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return new Promise((function(e){e(t.apply(r,n))}))}},exports.isEmptyObject=function(t){return!Object.keys(t).length},exports.isLeapYear=function(t){return t%4==0&&t%100!=0||t%400==0},exports.isObject=u,exports.memoryCalc=f,exports.memoryFormat=function(t,r){var e=["b","B","KB","MB","GB"];if(!e.includes(r))throw new Error("Unit Only 'b','B','KB','MB','GB' are supported.");for(var n=e.indexOf(r);t>=1024||0===n&&t>=8;)t=f(t,e[n],e[++n]);return t.toFixed(2)+e[n]},exports.queryParse=function(t){if("String"!==c(t))throw new TypeError("parameter is not a string");var r={};return t.split("&").map((function(t){var e=t.split("=");r[e[0]]=e[1]})),r},exports.queryStringify=function(t){if(!u(t))throw new TypeError("parameter is not a object");var r="";return Object.keys(t).map((function(e){r+=e+"="+t[e]+"&"})),r.slice(0,-1)},exports.random=function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];if(1!==r.length&&2!==r.length)throw new Error("function random needs to accept one or two parameter");for(var n=0,o=r;n<o.length;n++){var i=o[n];if("number"!=typeof i)throw new TypeError("The parameter type must be number")}return 1===r.length?Math.random()*r[0]:Math.random()*(r[1]-r[0])+r[0]},exports.remAdapter=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,r=document.documentElement;function e(){var e=r.clientWidth/t;r.style.fontSize=e+"px"}e(),window.addEventListener("resize",e),window.addEventListener("pageshow",(function(t){t.persisted&&e()}))},exports.styleStrToObject=function(t){for(var r={},e=t.toLowerCase().replace(/-(.)/g,(function(t,r){return r.toUpperCase()})).replace(/;\s?$/g,"").split(/:|;/g),n=0;n<e.length;n+=2)r[e[n].replace(/\s/g,"")]=e[n+1].replace(/^\s+|\s+$/g,"");return r},exports.throttle=function(t,r){var e=this,n=0;return function(){var o=Date.now();if(o-n>=r){n=o;for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];t.apply(e,a)}}},exports.uid=function(){for(var t="",r=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","_"],e=0;e<17;e++)t+=r[Math.floor(63*Math.random())];return t},exports.version="1.4.2";
