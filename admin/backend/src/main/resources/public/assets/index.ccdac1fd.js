import{ap as D,a as w,cD as I,b5 as M,bq as k,aC as $,b,r as U,f as O,ar as t,o as g,h as A,n,y as m,j as N,k as x,m as r,q as a,t as E,F as P,c as R,aJ as S}from"./index.f8b6fa94.js";import{D as V}from"./siteSetting.71e98578.js";import{c as C,u as B}from"./index.f6a02d8b.js";import{b as T}from"./index.0c1d45ad.js";import{h as q}from"./avata.e91355cf.js";import"./FullscreenOutlined.8522ef3f.js";import"./index.3634e4b0.js";import"./useWindowSizeFn.268c75c1.js";import"./useContentViewHeight.a5b3eda6.js";import"./uniqBy.ed970345.js";import"./_baseIteratee.07173297.js";import"./get.12156efd.js";import"./_baseProperty.2030e337.js";import"./index.8f048939.js";import"./index.d1b4dbc3.js";import"./useRefs.25abb648.js";import"./PlusOutlined.40029b3f.js";import"./RedoOutlined.53735e83.js";import"./index.8790c6a2.js";import"./lock.c3407455.js";const F=w({name:"UserDropdown",components:{Dropdown:I,Menu:M,MenuItem:C(()=>k(()=>import("./DropMenuItem.2b53fcec.js"),["assets/DropMenuItem.2b53fcec.js","assets/index.f8b6fa94.js","assets/index.8a05f489.css"])),LockAction:C(()=>k(()=>import("./LockModal.a1afc5c2.js"),["assets/LockModal.a1afc5c2.js","assets/LockModal.0068f88c.css","assets/index.86d55544.css","assets/index.a18cc309.css","assets/index.f8b6fa94.js","assets/index.8a05f489.css","assets/index.0c1d45ad.js","assets/index.4815a7e8.css","assets/useWindowSizeFn.268c75c1.js","assets/FullscreenOutlined.8522ef3f.js","assets/BasicForm.eebb9e8d.js","assets/BasicForm.0c166b86.css","assets/index.bec743a7.js","assets/index.3a3c1369.css","assets/index.1423091e.js","assets/index.cb0992d5.css","assets/Checkbox.572a0527.js","assets/index.20e31dae.js","assets/index.695a0c50.css","assets/index.e501ff06.js","assets/index.49ada229.css","assets/index.5c9fe55c.js","assets/index.47f7c782.css","assets/index.12c7904d.js","assets/index.579bd49e.css","assets/index.345349a2.js","assets/index.7b8b5e30.css","assets/get.12156efd.js","assets/index.961d34d0.js","assets/index.560eb672.css","assets/eagerComputed.d49f1c93.js","assets/index.1efac556.js","assets/index.aeeee80c.css","assets/_baseEach.2d110e96.js","assets/_baseIteratee.07173297.js","assets/_baseProperty.2030e337.js","assets/DeleteOutlined.c60a3e36.js","assets/index.65e8311b.js","assets/index.8f5fe29a.css","assets/useRefs.25abb648.js","assets/Form.42748d5d.js","assets/Row.0bd81407.js","assets/useFlexGapSupport.816f6ec3.js","assets/toInteger.443f55d3.js","assets/Col.b99e5aca.js","assets/useSize.3eb1ac1b.js","assets/index.26a558af.js","assets/index.5126ccce.css","assets/index.a4095fd7.js","assets/index.cd256673.css","assets/index.c3665e07.js","assets/index.9d09be4d.css","assets/index.29f29e0d.js","assets/index.b1363280.css","assets/uuid.2b29000c.js","assets/download.3a5cff84.js","assets/base64Conver.08b9f4ec.js","assets/index.5ddb8e93.js","assets/index.88b1d373.css","assets/index.ae9da7c5.js","assets/index.8ebfd46a.css","assets/index.b3bb861d.js","assets/uniqBy.ed970345.js","assets/index.8ffde185.js","assets/useForm.74156ad2.js","assets/lock.c3407455.js","assets/avata.e91355cf.js"]))},props:{theme:$.oneOf(["dark","light"])},setup(){const{prefixCls:e}=b("header-user-dropdown"),{t:u}=R(),{getShowDoc:d,getUseLockPage:f}=B(),s=U(),_=O(()=>{const{nickname:l="",avatar:y,desc:L}=s.getUserInfo||{};return{nickname:l,avatar:y||q,desc:L}}),[o,{openModal:i}]=T();function p(){i(!0)}function c(){s.confirmLoginOut()}function h(){S(V)}function v(l){switch(l.key){case"logout":c();break;case"doc":h();break;case"lock":p();break}}return{prefixCls:e,t:u,getUserInfo:_,handleMenuClick:v,getShowDoc:d,register:o,getUseLockPage:f}}}),j=["src"];function z(e,u,d,f,s,_){const o=t("MenuItem"),i=t("Menu"),p=t("Dropdown"),c=t("LockAction");return g(),A(P,null,[n(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[n(i,{onClick:e.handleMenuClick},{default:m(()=>[e.getUseLockPage?(g(),N(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):x("",!0),n(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[r("span",{class:a([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[r("img",{class:a(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),r("span",{class:a(`${e.prefixCls}__info hidden md:block`)},[r("span",{class:a([`${e.prefixCls}__name  `,"truncate"])},E(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),n(c,{onRegister:e.register},null,8,["onRegister"])],64)}var me=D(F,[["render",z]]);export{me as default};