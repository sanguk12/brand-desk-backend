import{ap as m,a as l,dU as c,b as d,ar as u,o as r,h as o,F as C,au as _,q as a,bk as f,n as k}from"./index.0a8b89be.js";import{b as h}from"./index.516b0889.js";import"./index.f472a1fa.js";import"./index.d1a4e034.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.8eadf802.js";import"./index.21e91937.js";import"./FullscreenOutlined.9f59f3fc.js";import"./index.80642066.js";import"./useWindowSizeFn.64599f54.js";import"./useContentViewHeight.2aaec145.js";import"./uniqBy.7ccff7b8.js";import"./_baseIteratee.b2478045.js";import"./get.40773c6b.js";import"./_baseProperty.2030e337.js";import"./index.31c2a6fb.js";import"./useRefs.f7f322ba.js";import"./PlusOutlined.a999796c.js";import"./RedoOutlined.b7e813f0.js";import"./index.f3845fae.js";import"./lock.745b2967.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,b,g){const p=u("CheckOutlined");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(p)],14,y))),128))],2)}var K=m(v,[["render",$]]);export{K as default};