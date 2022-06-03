import{ca as C,G as j,n as m,aZ as H,al as N,a as $,W as U,s as M,v as q,X as z,ad as w,aA as W,cI as X,f2 as G,a9 as J,_ as D,M as O,dS as Z,w as Q,x as Y,V as E,dR as K,de as tt,ap as et,bq as L,bA as rt,fR as nt,b as ot,f as x,ar as T,o as _,h as at,j as k,k as A,q as it,F as st,i as S,bJ as I}from"./index.9b68f3a5.js";import{c as V,u as ct}from"./index.0fb5d2c7.js";import lt from"./SessionTimeoutLogin.2b8eece9.js";import{s as ut,g as pt}from"./scrollTo.39f4a54d.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.34078887.js";import"./useWindowSizeFn.d868051d.js";import"./useContentViewHeight.49fde9ac.js";import"./uniqBy.b254c588.js";import"./_baseIteratee.f572c494.js";import"./get.8f01bfdb.js";import"./_baseProperty.2030e337.js";import"./index.545f1162.js";import"./index.10106a95.js";import"./useRefs.77e757f9.js";import"./PlusOutlined.8b22ded4.js";import"./RedoOutlined.43914e4e.js";import"./index.4f96a025.js";import"./lock.21454fe5.js";import"./Login.f5142b4a.js";import"./LoginForm.85e0be23.js";/* empty css              *//* empty css               */import"./LoginFormTitle.cd0fc348.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.b8e26f6f.js";import"./index.b9fae046.js";import"./ForgetPasswordForm.940a5e89.js";import"./index.8a286a94.js";import"./RegisterForm.abb2bcbc.js";import"./index.e9a061d5.js";import"./Checkbox.0353578e.js";import"./index.88ecfd13.js";import"./MobileForm.557dc4ab.js";import"./QrCodeForm.df1a2a56.js";import"./index.c90ef721.js";import"./index.ffa5837b.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";function mt(e){var t,r=function(s){return function(){t=null,e.apply(void 0,j(s))}},n=function(){if(t==null){for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];t=C(r(c))}};return n.cancel=function(){return C.cancel(t)},n}var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},ft=vt;function F(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){gt(e,o,r[o])})}return e}function gt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(t,r){var n=F({},t,r.attrs);return m(H,F({},n,{icon:ft}),null)};P.displayName="VerticalAlignTopOutlined";P.inheritAttrs=!1;var dt=P,Tt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},_t=$({name:"ABackTop",inheritAttrs:!1,props:Tt(),setup:function(t,r){var n=r.slots,o=r.attrs,s=r.emit,c=U("back-top",t),a=c.prefixCls,f=c.direction,l=M(),g=q({visible:!1,scrollEvent:null}),B=function(){return l.value&&l.value.ownerDocument?l.value.ownerDocument:window},R=function(u){var p=t.target,v=p===void 0?B:p,d=t.duration;ut(0,{getContainer:v,duration:d}),s("click",u)},b=mt(function(i){var u=t.visibilityHeight,p=pt(i.target,!0);g.visible=p>u}),h=function(){var u=t.target,p=u||B,v=p();g.scrollEvent=tt(v,"scroll",function(d){b(d)}),b({target:v})},y=function(){g.scrollEvent&&g.scrollEvent.remove(),b.cancel()};return z(function(){return t.target},function(){y(),w(function(){h()})}),W(function(){w(function(){h()})}),X(function(){w(function(){h()})}),G(function(){y()}),J(function(){y()}),function(){var i,u,p=m("div",{class:"".concat(a.value,"-content")},[m("div",{class:"".concat(a.value,"-icon")},[m(dt,null,null)])]),v=D(D({},o),{onClick:R,class:(i={},O(i,"".concat(a.value),!0),O(i,"".concat(o.class),o.class),O(i,"".concat(a.value,"-rtl"),f.value==="rtl"),i)}),d=Z("fade");return m(K,d,{default:function(){return[Q(m("div",E(E({},v),{},{ref:l}),[((u=n.default)===null||u===void 0?void 0:u.call(n))||p]),[[Y,g.visible]])]}})}}}),St=N(_t);const bt=$({name:"LayoutFeatures",components:{BackTop:St,LayoutLockPage:V(()=>L(()=>import("./index.21bc57f6.js"),["assets/index.21bc57f6.js","assets/index.9b68f3a5.js","assets/index.8a05f489.css","assets/LockPage.23f5cc74.js","assets/LockPage.4b4873e2.css","assets/lock.21454fe5.js","assets/avata.e91355cf.js"])),SettingDrawer:V(()=>L(()=>import("./index.5b7816f9.js").then(function(e){return e.i}),["assets/index.5b7816f9.js","assets/index.4fba7fb9.js","assets/index.5c7227e9.css","assets/index.9b68f3a5.js","assets/index.8a05f489.css","assets/index.545f1162.js","assets/index.5f816ca3.css","assets/ArrowLeftOutlined.ada3a7c9.js","assets/index.c90ef721.js","assets/index.3a3c1369.css","assets/index.0fb5d2c7.js","assets/index.02100ad6.css","assets/FullscreenOutlined.33f2b7f2.js","assets/index.34078887.js","assets/index.97099140.css","assets/useWindowSizeFn.d868051d.js","assets/useContentViewHeight.49fde9ac.js","assets/uniqBy.b254c588.js","assets/_baseIteratee.f572c494.js","assets/get.8f01bfdb.js","assets/_baseProperty.2030e337.js","assets/index.10106a95.js","assets/index.a2831ae3.css","assets/useRefs.77e757f9.js","assets/PlusOutlined.8b22ded4.js","assets/RedoOutlined.43914e4e.js","assets/index.4f96a025.js","assets/lock.21454fe5.js"])),SessionTimeoutLogin:lt},setup(){const{getUseOpenBackTop:e,getShowSettingButton:t,getSettingButtonPosition:r,getFullContent:n}=rt(),o=nt(),{prefixCls:s}=ot("setting-drawer-feature"),{getShowHeader:c}=ct(),a=x(()=>o.getSessionTimeout),f=x(()=>{if(!S(t))return!1;const l=S(r);return l===I.AUTO?!S(c)||S(n):l===I.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:f,prefixCls:s,getIsSessionTimeout:a}}});function ht(e,t,r,n,o,s){const c=T("LayoutLockPage"),a=T("BackTop"),f=T("SettingDrawer"),l=T("SessionTimeoutLogin");return _(),at(st,null,[m(c),e.getUseOpenBackTop?(_(),k(a,{key:0,target:e.getTarget},null,8,["target"])):A("",!0),e.getIsFixedSettingDrawer?(_(),k(f,{key:1,class:it(e.prefixCls)},null,8,["class"])):A("",!0),e.getIsSessionTimeout?(_(),k(l,{key:2})):A("",!0)],64)}var ve=et(bt,[["render",ht]]);export{ve as default};