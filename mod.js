// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r};var c=e;var f=Number.POSITIVE_INFINITY;function _(r){return 0===r&&1/r===f}var p=Number.NEGATIVE_INFINITY;function b(r){return 0===r&&1/r===p}function y(r){return r!=r}function v(r,e,t){var n,o,a,u,i;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(n=o=e[a=t<0?(1-r)*t:0],i=1;i<r;i++){if(y(u=e[a+=t]))return u;u<o||u===o&&b(u)?o=u:(u>n||u===n&&_(u))&&(n=u)}return(n+o)/2}function d(r,e,t,n){var o,a,u,i,l;if(r<=0)return NaN;if(1===r||0===t)return e[n];for(o=a=e[u=n],l=1;l<r;l++){if(y(i=e[u+=t]))return i;i<a||i===a&&b(i)?a=i:(i>o||i===o&&_(i))&&(o=i)}return(o+a)/2}c(v,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:d});export{v as default,d as ndarray};
//# sourceMappingURL=mod.js.map
