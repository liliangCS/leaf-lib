"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}module.exports={isObject:function(n){var o=t(n);return"function"===o||"object"===o&&null!==n},debounce:function(t,n){var o=this,r=null;return function(){for(var e=arguments.length,u=new Array(e),f=0;f<e;f++)u[f]=arguments[f];r&&clearTimeout(r),r=setTimeout((function(){t.apply(o,u)}),n)}},throttle:function(t,n){var o=this,r=0;return function(){var e=Date.now();if(e-r>=n){r=e;for(var u=arguments.length,f=new Array(u),i=0;i<u;i++)f[i]=arguments[i];t.apply(o,f)}}}};
