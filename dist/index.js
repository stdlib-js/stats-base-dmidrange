"use strict";var s=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var o=s(function(B,f){
var j=require('@stdlib/math-base-assert-is-positive-zero/dist'),l=require('@stdlib/math-base-assert-is-negative-zero/dist'),R=require('@stdlib/math-base-assert-is-nan/dist');function Z(i,e,n,d){var t,a,u,r,v;if(i<=0)return NaN;if(i===1||n===0)return e[d];for(u=d,a=e[u],t=a,v=1;v<i;v++){if(u+=n,r=e[u],R(r))return r;r<a||r===a&&l(r)?a=r:(r>t||r===t&&j(r))&&(t=r)}return(t+a)/2}f.exports=Z
});var c=s(function(C,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=o();function O(i,e,n){return E(i,e,n,_(i,n))}m.exports=O
});var y=s(function(D,p){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),b=o();P(g,"ndarray",b);p.exports=g
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),q,x=k(h(__dirname,"./native.js"));w(x)?q=z:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
