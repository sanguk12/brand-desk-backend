import{aK as h,aL as P,aM as _,O as y,aN as p,aO as E,aP as C,aQ as L,aR as m,aS as I}from"./index.f8b6fa94.js";import{g as l}from"./get.12156efd.js";import{b as D}from"./_baseProperty.2030e337.js";var G=1,w=2;function F(n,r,e,t){var i=e.length,a=i,o=!t;if(n==null)return!a;for(n=Object(n);i--;){var f=e[i];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<a;){f=e[i];var s=f[0],u=n[s],A=f[1];if(o&&f[2]){if(u===void 0&&!(s in n))return!1}else{var O=new h;if(t)var R=t(u,A,s,n,r,O);if(!(R===void 0?P(A,u,G|w,t,O):R))return!1}}return!0}function M(n){return n===n&&!_(n)}function S(n){for(var r=y(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,M(i)]}return r}function g(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function b(n){var r=S(n);return r.length==1&&r[0][2]?g(r[0][0],r[0][1]):function(e){return e===n||F(e,n,r)}}var d=1,K=2;function N(n,r){return p(n)&&M(r)?g(E(n),r):function(e){var t=l(e,n);return t===void 0&&t===r?C(e,n):P(r,t,d|K)}}function c(n){return function(r){return L(r,n)}}function x(n){return p(n)?D(E(n)):c(n)}function q(n){return typeof n=="function"?n:n==null?m:typeof n=="object"?I(n)?N(n[0],n[1]):b(n):x(n)}export{q as b};
