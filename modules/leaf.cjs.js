"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(e){var r=t(e);return"function"===r||"object"===r&&null!==e}function o(t){return Object.prototype.toString.call(t).replace(/\[|\]|object /g,"")}Object.defineProperty(exports,"__esModule",{value:!0});var i={eventlist:{},on:function(t,e){this.eventlist.hasOwnProperty(t)||(this.eventlist[t]=[]),this.eventlist[t].push(e)},emit:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];if(!this.eventlist.hasOwnProperty(t))throw Error("".concat(t," is not existence"));this.eventlist[t].forEach((function(t){t.apply(void 0,r)}))},off:function(t){if(!this.eventlist.hasOwnProperty(t))throw Error("".concat(t," is not existence"));delete this.eventlist[t]},clear:function(){this.eventlist={}}};exports.debounce=function(t,e){var r=this,n=null;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];n&&clearTimeout(n),n=setTimeout((function(){t.apply(r,i)}),e)}},exports.deepClone=function(t){return function t(e,r){if(!n(e))return"Symbol"===o(e)?function(t){var e=String(t),r=e.slice(7,e.length-1);return Symbol(r)}(e):e;var i=function(t){return"Array"===o(t)?[]:"Object"===o(t)?{}:"Set"===o(t)?new Set:"Map"===o(t)?new Map:null}(e);if(r.has(e))return r.get(e);if(r.set(e,i),"Map"===o(e))return e.forEach((function(e,n){i.set(t(n,r),t(e,r))})),i;if("Set"===o(e))return e.forEach((function(e){i.add(t(e,r))})),i;if("Object"===o(e)||"Array"===o(e)){for(var a in e)e.hasOwnProperty(a)&&(i[a]=t(e[a],r));return i}return"RegExp"===o(e)?function(t){return new RegExp(t.source,t.flags)}(e):"Date"===o(e)?new Date(e):"Function"===o(e)?e:void 0}(t,new WeakMap)},exports.eventBus=i,exports.findMaxValue=function(t){return t.map((function(t){if("number"!=typeof t)throw new Error("Parameter is not a number array")})),Math.max.apply(Math,e(t))},exports.findMinValue=function(t){return t.map((function(t){if("number"!=typeof t)throw new TypeError("Parameter is not a number array")})),Math.min.apply(Math,e(t))},exports.getTimeInfo=function(t){var e=String(t);10===e.length&&(e+="000"),e=Number(e);var r=new Date(e),n={};return n.year=r.getFullYear(),n.month=r.getMonth()+1,n.date=r.getDate(),n.day=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][r.getDay()],n.hours=r.getHours(),n.minutes=r.getMinutes(),n.seconds=r.getSeconds(),n},exports.getVariableType=o,exports.initPromiseFunc=function(t){return function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return new Promise((function(r){r(t.apply(e,n))}))}},exports.isObject=n,exports.queryParse=function(t){if("String"!==o(t))throw new TypeError("parameter is not a string");var e={};return t.split("&").map((function(t){var r=t.split("=");e[r[0]]=r[1]})),e},exports.queryStringify=function(t){if(!n(t))throw new TypeError("parameter is not a object");var e="";return Object.keys(t).map((function(r){e+=r+"="+t[r]+"&"})),e.slice(0,-1)},exports.random=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];if(1!==e.length&&2!==e.length)throw new Error("function random needs to accept one or two parameter");for(var n=0,o=e;n<o.length;n++){var i=o[n];if("number"!=typeof i)throw new TypeError("The parameter type must be number")}return 1===e.length?Math.random()*e[0]:Math.random()*(e[1]-e[0])+e[0]},exports.remAdapter=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=document.documentElement;function r(){var r=e.clientWidth/t;e.style.fontSize=r+"px"}r(),window.addEventListener("resize",r),window.addEventListener("pageshow",(function(t){t.persisted&&r()}))},exports.throttle=function(t,e){var r=this,n=0;return function(){var o=Date.now();if(o-n>=e){n=o;for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];t.apply(r,a)}}};
