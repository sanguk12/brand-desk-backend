var T=Object.defineProperty,V=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var M=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))L.call(t,r)&&M(e,r,t[r]);if(R)for(var r of R(t))O.call(t,r)&&M(e,r,t[r]);return e},y=(e,t)=>V(e,z(t));var P=(e,t,r)=>new Promise((h,d)=>{var b=l=>{try{f(r.next(l))}catch(c){d(c)}},p=l=>{try{f(r.throw(l))}catch(c){d(c)}},f=l=>l.done?h(l.value):Promise.resolve(l.value).then(b,p);f((r=r.apply(e,t)).next())});import{ap as j,a as q,b4 as G,aC as W,s as Z,bb as F,b as H,bA as J,aW as K,a5 as Q,ar as B,o as g,h as w,n as U,y as A,j as E,k as X,t as D,z as Y,q as x,c as ee,bd as te,bw as ne,b9 as ae,eZ as re,aD as se}from"./index.9b68f3a5.js";import{B as S}from"./index.d87b86ee.js";const oe=q({name:"LayoutBreadcrumb",components:{Icon:G,[S.name]:S},props:{theme:W.oneOf(["dark","light"])},setup(){const e=Z([]),{currentRoute:t}=F(),{prefixCls:r}=H("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=J(),d=K(),{t:b}=ee();Q(()=>P(this,null,function*(){var C,I,$;if(t.value.name===te)return;const s=yield ne(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((C=a==null?void 0:a.meta)==null?void 0:C.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const u=ae(s,o),m=s.filter(N=>N.path===u[0]),i=p(m,u);if(!i||i.length===0)return;const _=f(i);(I=t.value.meta)!=null&&I.currentActiveMenu&&_.push(y(k({},t.value),{name:(($=t.value.meta)==null?void 0:$.title)||t.value.name})),e.value=_}));function p(s,n){const a=[];return s.forEach(o=>{var u,m;n.includes(o.path)&&a.push(y(k({},o),{name:((u=o.meta)==null?void 0:u.title)||o.name})),(m=o.children)!=null&&m.length&&a.push(...p(o.children,n))}),a}function f(s){return re(s,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:u,hideBreadcrumb:m,hideMenu:i}=a;return!(!u||m||i)}).filter(n=>{var a;return!((a=n.meta)!=null&&a.hideBreadcrumb)})}function l(s,n,a){a==null||a.preventDefault();const{children:o,redirect:u,meta:m}=s;if((o==null?void 0:o.length)&&!u){a==null||a.stopPropagation();return}if(!(m!=null&&m.carryParam))if(u&&se(u))d(u);else{let i="";n.length===1?i=n[0]:i=`${n.slice(1).pop()||""}`,i=/^\//.test(i)?i:`/${i}`,d(i)}}function c(s,n){return s.indexOf(n)!==s.length-1}function v(s){var n;return s.icon||((n=s.meta)==null?void 0:n.icon)}return{routes:e,t:b,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:h,handleClick:l,hasRedirect:c}}}),ce={key:1};function ie(e,t,r,h,d,b){const p=B("Icon"),f=B("router-link"),l=B("a-breadcrumb");return g(),w("div",{class:x([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[U(l,{routes:e.routes},{itemRender:A(({route:c,routes:v,paths:s})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(g(),E(p,{key:0,icon:e.getIcon(c)},null,8,["icon"])):X("",!0),e.hasRedirect(v,c)?(g(),E(f,{key:2,to:"",onClick:n=>e.handleClick(c,s,n)},{default:A(()=>[Y(D(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(g(),w("span",ce,D(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}var fe=j(oe,[["render",ie]]);export{fe as default};
