// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},_=r()?l:c,p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Number.POSITIVE_INFINITY,b=function(e){return 0===e&&1/e===d},y=Number.NEGATIVE_INFINITY,s=function(e){return 0===e&&1/e===y},m=function(e){return e!=e};function v(e,r,t){var n,o,i,u,a;if(e<=0)return NaN;if(1===e||0===t)return r[0];for(n=o=r[i=t<0?(1-e)*t:0],a=1;a<e;a++){if(u=r[i+=t],m(u))return u;u<o||u===o&&s(u)?o=u:(u>n||u===n&&b(u))&&(n=u)}return(n+o)/2}return p(v,"ndarray",(function(e,r,t,n){var o,i,u,a,f;if(e<=0)return NaN;if(1===e||0===t)return r[n];for(o=i=r[u=n],f=1;f<e;f++){if(a=r[u+=t],m(a))return a;a<i||a===i&&s(a)?i=a:(a>o||a===o&&b(a))&&(o=a)}return(o+i)/2})),v},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dmidrange=r();
//# sourceMappingURL=browser.js.map
