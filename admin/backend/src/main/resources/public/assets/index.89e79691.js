var V=Object.defineProperty,k=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var v=(t,e,r)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,o=(t,e)=>{for(var r in e||(e={}))L.call(e,r)&&v(t,r,e[r]);if(j)for(var r of j(e))R.call(e,r)&&v(t,r,e[r]);return t},h=(t,e)=>k(t,q(e));import{a as F,s as G,b as H,cx as J,f as p,i as s,n as i,aq as P,cy as K,as as Q,cz as T,cA as U,ay as X}from"./index.9b68f3a5.js";import{D as S}from"./index.a683ae40.js";import{g as Y}from"./get.8f01bfdb.js";function Z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!K(t)}const tt={useCollapse:{type:Boolean,default:!0},title:{type:String,default:""},size:{type:String,validator:t=>["small","default","middle",void 0].includes(t),default:"small"},bordered:{type:Boolean,default:!0},column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}};var et=F({name:"Description",props:tt,emits:["register"],setup(t,{slots:e,emit:r}){const m=G(null),{prefixCls:_}=H("description"),w=J(),g=p(()=>o(o({},t),s(m))),d=p(()=>h(o({},s(g)),{title:void 0})),A=p(()=>!!s(g).title),E=p(()=>o({canExpand:!1},s(d).collapseOptions)),I=p(()=>o(o({},s(w)),s(d)));function M(n){m.value=o(o({},s(m)),n)}function N({label:n,labelMinWidth:l,labelStyle:a}){if(!a&&!l)return n;const c=h(o({},a),{minWidth:`${l}px `});return i("div",{style:c},[n])}function W(){const{schema:n,data:l}=s(d);return s(n).map(a=>{const{render:c,field:C,span:z,show:x,contentMinWidth:b}=a;if(x&&P(x)&&!x(l))return null;const D=()=>{var O;const u=(O=s(d))==null?void 0:O.data;if(!u)return null;const f=Y(u,C);return P(c)?c(f,u):f!=null?f:""},B=b;return i(S.Item,{label:N(a),key:C,span:z},{default:()=>{if(!b)return D();const u={minWidth:`${B}px`};return i("div",{style:u},[D()])}})}).filter(a=>!!a)}const y=()=>{let n;return i(S,Q({class:`${_}`},s(I)),Z(n=W())?n:{default:()=>[n]})},$=()=>{const n=t.useCollapse?y():i("div",null,[y()]);if(!t.useCollapse)return n;const{canExpand:l,helpMessage:a}=s(E),{title:c}=s(g);return i(U,{title:c,canExpan:l,helpMessage:a},{default:()=>n,action:()=>T(e,"action")})};return r("register",{setDescProps:M}),()=>s(A)?$():y()}});const lt=X(et);export{lt as D};
