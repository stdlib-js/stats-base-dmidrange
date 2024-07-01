"use strict";var o=function(n,i){return function(){return i||n((i={exports:{}}).exports,i),i.exports}};var m=o(function(B,q){
var y=require('@stdlib/math-base-assert-is-positive-zero/dist'),Z=require('@stdlib/math-base-assert-is-negative-zero/dist'),j=require('@stdlib/math-base-assert-is-nan/dist');function P(n,i,t){var u,a,v,r,e;if(n<=0)return NaN;if(n===1||t===0)return i[0];for(t<0?v=(1-n)*t:v=0,a=i[v],u=a,e=1;e<n;e++){if(v+=t,r=i[v],j(r))return r;r<a||r===a&&Z(r)?a=r:(r>u||r===u&&y(r))&&(u=r)}return(u+a)/2}q.exports=P
});var c=o(function(C,d){
var R=require('@stdlib/math-base-assert-is-positive-zero/dist'),_=require('@stdlib/math-base-assert-is-negative-zero/dist'),E=require('@stdlib/math-base-assert-is-nan/dist');function N(n,i,t,u){var a,v,r,e,s;if(n<=0)return NaN;if(n===1||t===0)return i[u];for(r=u,v=i[r],a=v,s=1;s<n;s++){if(r+=t,e=i[r],E(e))return e;e<v||e===v&&_(e)?v=e:(e>a||e===a&&R(e))&&(a=e)}return(a+v)/2}d.exports=N
});var p=o(function(D,l){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=m(),b=c();O(g,"ndarray",b);l.exports=g
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=p(),f,x=k(h(__dirname,"./native.js"));w(x)?f=z:f=x;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
