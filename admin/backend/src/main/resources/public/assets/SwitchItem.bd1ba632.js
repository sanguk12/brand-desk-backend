import{ap as s,a as p,b as m,f as d,ar as l,o as c,h,m as u,t as f,n as C,as as g,q as _,c as v}from"./index.f8b6fa94.js";import{S as y}from"./index.12c7904d.js";import{b as S}from"./index.ffd8137d.js";import"./index.0631543e.js";import"./index.8f048939.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.bec743a7.js";import"./index.f6a02d8b.js";import"./FullscreenOutlined.8522ef3f.js";import"./index.3634e4b0.js";import"./useWindowSizeFn.268c75c1.js";import"./useContentViewHeight.a5b3eda6.js";import"./uniqBy.ed970345.js";import"./_baseIteratee.07173297.js";import"./get.12156efd.js";import"./_baseProperty.2030e337.js";import"./index.d1b4dbc3.js";import"./useRefs.25abb648.js";import"./PlusOutlined.40029b3f.js";import"./RedoOutlined.53735e83.js";import"./index.8790c6a2.js";import"./lock.c3407455.js";const b=p({name:"SwitchItem",components:{Switch:y},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=m("setting-switch-item"),{t:o}=v(),n=d(()=>e.def?{checked:e.def}:{});function i(a){e.event&&S(e.event,a)}return{prefixCls:t,t:o,handleChange:i,getBindValue:n}}});function k(e,t,o,n,i,a){const r=l("Switch");return c(),h("div",{class:_(e.prefixCls)},[u("span",null,f(e.title),1),C(r,g(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var R=s(b,[["render",k],["__scopeId","data-v-fd7354e2"]]);export{R as default};