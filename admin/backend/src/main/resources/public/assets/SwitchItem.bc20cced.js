import{ap as s,a as p,b as m,f as d,ar as l,o as c,h,m as u,t as f,n as C,as as g,q as _,c as v}from"./index.0a8b89be.js";import{S as y}from"./index.1b5c222a.js";import{b as S}from"./index.516b0889.js";import"./index.f472a1fa.js";import"./index.d1a4e034.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.8eadf802.js";import"./index.21e91937.js";import"./FullscreenOutlined.9f59f3fc.js";import"./index.80642066.js";import"./useWindowSizeFn.64599f54.js";import"./useContentViewHeight.2aaec145.js";import"./uniqBy.7ccff7b8.js";import"./_baseIteratee.b2478045.js";import"./get.40773c6b.js";import"./_baseProperty.2030e337.js";import"./index.31c2a6fb.js";import"./useRefs.f7f322ba.js";import"./PlusOutlined.a999796c.js";import"./RedoOutlined.b7e813f0.js";import"./index.f3845fae.js";import"./lock.745b2967.js";const b=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=m("setting-switch-item"),{t:o}=v(),n=d(()=>e.def?{checked:e.def}:{});function i(a){e.event&&S(e.event,a)}return{prefixCls:t,t:o,handleChange:i,getBindValue:n}}});function k(e,t,o,n,i,a){const r=l("Switch");return c(),h("div",{class:_(e.prefixCls)},[u("span",null,f(e.title),1),C(r,g(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var R=s(b,[["render",k],["__scopeId","data-v-fd7354e2"]]);export{R as default};