import{a as r,s,fh as m,aA as _,o as c,h as k,av as f,ay as C,ap as O,ar as o,j as v,y as a,n as x,m as y,t as S}from"./index.0a8b89be.js";import{P as h}from"./index.c388f747.js";import"./index.61a163e2.js";import"./index.2c6c45b9.js";import"./useSize.d9666d99.js";import"./eagerComputed.d89357d9.js";import"./onMountedOrActivated.b04887f0.js";import"./useWindowSizeFn.64599f54.js";import"./useContentViewHeight.2aaec145.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.01edd6fb.js";import"./transButton.4e1319c6.js";const B=r({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=s(null);return m(n,()=>{t("clickOutside")}),_(()=>{t("mounted")}),(i,l)=>(c(),k("div",{ref_key:"wrap",ref:n},[f(i.$slots,"default")],512))}}),$=C(B);const g=r({components:{ClickOutSide:$,PageWrapper:h},setup(){const e=s("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}});function E(e,t,n,i,l,w){const u=o("ClickOutSide"),p=o("PageWrapper");return c(),v(p,{title:"\u70B9\u5185\u5916\u90E8\u89E6\u53D1\u4E8B\u4EF6"},{default:a(()=>[x(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:a(()=>[y("div",{onClick:t[0]||(t[0]=(...d)=>e.innerClick&&e.innerClick(...d)),class:"demo-box"},S(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})}var z=O(g,[["render",E],["__scopeId","data-v-1c7123ae"]]);export{z as default};
