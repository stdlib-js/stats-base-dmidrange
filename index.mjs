// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";function n(r,n,i){var a,d,m,o,f;if(r<=0)return NaN;if(1===r||0===i)return n[0];for(a=d=n[m=i<0?(1-r)*i:0],f=1;f<r;f++){if(o=n[m+=i],s(o))return o;o<d||o===d&&t(o)?d=o:(o>a||o===a&&e(o))&&(a=o)}return(a+d)/2}function i(r,n,i,a){var d,m,o,f,u;if(r<=0)return NaN;if(1===r||0===i)return n[a];for(d=m=n[o=a],u=1;u<r;u++){if(f=n[o+=i],s(f))return f;f<m||f===m&&t(f)?m=f:(f>d||f===d&&e(f))&&(d=f)}return(d+m)/2}r(n,"ndarray",i);export{n as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
