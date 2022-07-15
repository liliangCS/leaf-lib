"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function n(r){var e=t(r);return"function"===e||"object"===e&&null!==r}function o(t){return Object.prototype.toString.call(t).replace(/\[|\]|object /g,"")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounce=function(t,r){var e=this,n=null;return function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){t.apply(e,a)}),r)}},exports.deepClone=function(t){return function t(r,e){if(!n(r))return"Symbol"===o(r)?function(t){var r=String(t),e=r.slice(7,r.length-1);return Symbol(e)}(r):r;var a=function(t){return"Array"===o(t)?[]:"Object"===o(t)?{}:"Set"===o(t)?new Set:"Map"===o(t)?new Map:null}(r);if(e.has(r))return e.get(r);if(e.set(r,a),"Map"===o(r))return r.forEach((function(r,n){a.set(n,t(r,e))})),a;if("Set"===o(r))return r.forEach((function(r){a.add(t(r,e))})),a;if("Object"===o(r)||"Array"===o(r)){for(var i in r)r.hasOwnProperty(i)&&(a[i]=t(r[i],e));return a}return"RegExp"===o(r)?function(t){return new RegExp(t.source,t.flags)}(r):"Date"===o(r)?new Date(r):"Function"===o(r)?r:void 0}(t,new WeakMap)},exports.findMaxValue=function(t){return t.map((function(t){if("number"!=typeof t)throw new Error("Parameter is not a number array")})),Math.max.apply(Math,r(t))},exports.findMinValue=function(t){return t.map((function(t){if("number"!=typeof t)throw new TypeError("Parameter is not a number array")})),Math.min.apply(Math,r(t))},exports.getTimeInfo=function(t){var r=String(t);10===r.length&&(r+="000"),r=Number(r);var e=new Date(r),n={};return n.year=e.getFullYear(),n.month=e.getMonth()+1,n.date=e.getDate(),n.day=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][e.getDay()],n.hours=e.getHours(),n.minutes=e.getMinutes(),n.seconds=e.getSeconds(),n},exports.getVariableType=o,exports.initPromiseFunc=function(t){return function(){for(var r=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return new Promise((function(e){e(t.apply(r,n))}))}},exports.isObject=n,exports.queryParse=function(t){if("String"!==o(t))throw new TypeError("parameter is not a string");var r={};return t.split("&").map((function(t){var e=t.split("=");r[e[0]]=e[1]})),r},exports.queryStringify=function(t){if(!n(t))throw new TypeError("parameter is not a object");var r="";return Object.keys(t).map((function(e){r+=e+"="+t[e]+"&"})),r.slice(0,-1)},exports.throttle=function(t,r){var e=this,n=0;return function(){var o=Date.now();if(o-n>=r){n=o;for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];t.apply(e,i)}}};
