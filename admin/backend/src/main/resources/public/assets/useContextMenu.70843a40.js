var $=Object.defineProperty,D=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,g=(e,t)=>{for(var s in t||(t={}))N.call(t,s)&&_(e,s,t[s]);if(C)for(var s of C(t))S.call(t,s)&&_(e,s,t[s]);return e},w=(e,t)=>D(e,O(t));import{a as A,s as I,f as P,aA as F,ad as H,bZ as E,i as p,n as c,b5 as v,F as R,cy as V,b4 as W,f0 as z,f1 as B,am as T}from"./index.0a8b89be.js";import{D as U}from"./index.8eadf802.js";function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!V(e)}const b="context-menu",Y={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},M=e=>{const{item:t}=e;return c("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&c(W,{class:"mr-2",icon:t.icon},null),c("span",null,[t.label])])};var Z=A({name:"ContextMenu",props:Y,setup(e){const t=I(null),s=I(!1),i=P(()=>{const{axis:o,items:n,styles:r,width:l}=e,{x:a,y:m}=o||{x:0,y:0},y=(n||[]).length*40,h=l,x=document.body,L=x.clientWidth<a+h?a-h:a,j=x.clientHeight<m+y?m-y:m;return w(g({},r),{position:"absolute",width:`${l}px`,left:`${L+1}px`,top:`${j+1}px`,zIndex:9999})});F(()=>{H(()=>s.value=!0)}),E(()=>{const o=p(t);o&&document.body.removeChild(o)});function f(o,n){const{handler:r,disabled:l}=o;l||(s.value=!1,n==null||n.stopPropagation(),n==null||n.preventDefault(),r==null||r())}function u(o){return o.map(n=>{const{disabled:r,label:l,children:a,divider:m=!1}=n,y={item:n,handler:f,showIcon:e.showIcon};return!a||a.length===0?c(R,null,[c(v.Item,{disabled:r,class:`${b}__item`,key:l},{default:()=>[c(M,y,null)]}),m?c(U,{key:`d-${l}`},null):null]):p(s)?c(v.SubMenu,{key:l,disabled:r,popupClassName:`${b}__popup`},{title:()=>c(M,y,null),default:()=>u(a)}):null})}return()=>{let o;if(!p(s))return null;const{items:n}=e;return c("div",{class:b},[c(v,{inlineIndent:12,mode:"vertical",ref:t,style:p(i)},X(o=u(n))?o:{default:()=>[o]})])}}});const d={domList:[],resolve:()=>{}},q=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!z)return new Promise(s=>{const i=document.body,f=document.createElement("div"),u={};e.styles&&(u.styles=e.styles),e.items&&(u.items=e.items),e.event&&(u.customEvent=t,u.axis={x:t.clientX,y:t.clientY});const o=c(Z,u);B(o,f);const n=function(){d.resolve("")};d.domList.push(f);const r=function(){d.domList.forEach(l=>{try{l&&i.removeChild(l)}catch(a){}}),i.removeEventListener("click",n),i.removeEventListener("scroll",n)};d.resolve=function(l){r(),s(l)},r(),i.appendChild(f),i.addEventListener("click",n),i.addEventListener("scroll",n)})},k=function(){d&&(d.resolve(""),d.domList=[])};function Q(e=!0){return T()&&e&&E(()=>{k()}),[q,k]}export{Q as u};
