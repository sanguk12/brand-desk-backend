var R=Object.defineProperty,U=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?R(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))D.call(e,t)&&v(o,t,e[t]);if(C)for(var t of C(e))N.call(e,t)&&v(o,t,e[t]);return o},f=(o,e)=>U(o,I(e));var d=(o,e,t)=>new Promise((i,m)=>{var l=a=>{try{s(t.next(a))}catch(n){m(n)}},p=a=>{try{s(t.throw(a))}catch(n){m(n)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(l,p);s((t=t.apply(o,e)).next())});import{B as O,a as P}from"./index.0c1d45ad.js";import{B as T}from"./BasicForm.eebb9e8d.js";import{u as V}from"./useForm.74156ad2.js";import{a as j,b as F}from"./cate.data.e569a449.js";import{ap as A,a as G,c as W,s as h,i as _,f as q,ar as y,o as z,j as E,y as H,n as J,as as K,fy as Q}from"./index.f8b6fa94.js";import{g as X,a as Y}from"./category.3b340477.js";import"./useWindowSizeFn.268c75c1.js";import"./FullscreenOutlined.8522ef3f.js";/* empty css               *//* empty css              */import"./index.bec743a7.js";import"./index.1423091e.js";import"./Checkbox.572a0527.js";import"./index.20e31dae.js";import"./index.e501ff06.js";import"./index.5c9fe55c.js";import"./index.12c7904d.js";import"./index.345349a2.js";import"./get.12156efd.js";import"./index.961d34d0.js";import"./eagerComputed.d49f1c93.js";import"./index.1efac556.js";import"./_baseEach.2d110e96.js";import"./_baseIteratee.07173297.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.c60a3e36.js";import"./index.65e8311b.js";import"./useRefs.25abb648.js";import"./Form.42748d5d.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./toInteger.443f55d3.js";import"./Col.b99e5aca.js";import"./useSize.3eb1ac1b.js";import"./index.26a558af.js";import"./index.a4095fd7.js";import"./index.c3665e07.js";import"./index.29f29e0d.js";import"./uuid.2b29000c.js";import"./download.3a5cff84.js";import"./base64Conver.08b9f4ec.js";import"./index.5ddb8e93.js";import"./index.ae9da7c5.js";import"./index.b3bb861d.js";import"./uniqBy.ed970345.js";import"./index.8ffde185.js";import"./contentModel.d75448ba.js";import"./categoryType.63919193.js";import"./contentUtil.a6ebc75b.js";import"./inputTypeEnum.8d05b9f9.js";import"./upload.516cd581.js";import"./index.6272a57f.js";import"./onMountedOrActivated.73153770.js";import"./isEmpty.46a5c532.js";const Z=G({name:"CateModal",components:{BasicModal:O,BasicForm:T},emits:["success","register"],setup(o,{emit:e}){const{t}=W(),i=h(!0),m=r=>d(this,null,function*(){const c=yield Q({name:r});M.value=c.list.map(B=>({label:`${B.nickname}`,value:B.id}))}),l=r=>{w.value=r},[p,{resetFields:s,setFieldsValue:a,updateSchema:n,validate:S}]=V({labelWidth:100,schemas:j(),showActionButtonGroup:!1}),[$,{setModalProps:u,closeModal:b}]=P(r=>d(this,null,function*(){if(yield s(),u({confirmLoading:!1}),i.value=!!(r!=null&&r.isUpdate),_(i)){const c=yield X(r.record.id);yield a(f(g({},c),{isUpdate:i.value})),yield n(F(r.record.id)),yield m(r.record.managerName)}else yield a(f(g({},r.record),{isUpdate:i.value})),yield n(F())})),k=q(()=>_(i)?t("Content.cate.edit"):t("Content.cate.add"));function L(){return d(this,null,function*(){try{const r=yield S();u({confirmLoading:!0});const c=yield Y(r);b(),e("success")}finally{u({confirmLoading:!1})}})}const M=h([]),w=h();return{t,registerModal:$,registerForm:p,getTitle:k,handleSubmit:L,handleManagerSearch:m,handleManagerChange:l,managerList:M,managerId:w}}});function x(o,e,t,i,m,l){const p=y("BasicForm"),s=y("BasicModal");return z(),E(s,K(o.$attrs,{onRegister:o.registerModal,title:o.getTitle,onOk:o.handleSubmit}),{default:H(()=>[J(p,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var oo=A(Z,[["render",x]]);export{oo as default};
