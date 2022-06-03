var R=Object.defineProperty,U=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?R(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))D.call(e,t)&&v(o,t,e[t]);if(C)for(var t of C(e))N.call(e,t)&&v(o,t,e[t]);return o},f=(o,e)=>U(o,I(e));var d=(o,e,t)=>new Promise((i,m)=>{var l=a=>{try{s(t.next(a))}catch(n){m(n)}},p=a=>{try{s(t.throw(a))}catch(n){m(n)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(l,p);s((t=t.apply(o,e)).next())});import{B as O,a as P}from"./index.c6d9e38a.js";import{B as T}from"./BasicForm.6899d0a5.js";import{u as V}from"./useForm.b2949832.js";import{a as j,b as F}from"./cate.data.5045520c.js";import{ap as A,a as G,c as W,s as h,i as _,f as q,ar as y,o as z,j as E,y as H,n as J,as as K,fy as Q}from"./index.9b68f3a5.js";import{g as X,a as Y}from"./category.6f69ae3f.js";import"./useWindowSizeFn.d868051d.js";import"./FullscreenOutlined.33f2b7f2.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.3604fdfb.js";import"./index.64609094.js";import"./index.54a0672f.js";import"./index.f93c2cff.js";import"./uuid.2b29000c.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.b9fae046.js";import"./contentModel.d81852df.js";import"./categoryType.41fd9b3f.js";import"./contentUtil.7222567a.js";import"./inputTypeEnum.e562aefd.js";import"./upload.b58fb754.js";import"./index.055a9a81.js";import"./onMountedOrActivated.f9a7813e.js";import"./isEmpty.7bce0800.js";const Z=G({name:"CateModal",components:{BasicModal:O,BasicForm:T},emits:["success","register"],setup(o,{emit:e}){const{t}=W(),i=h(!0),m=r=>d(this,null,function*(){const c=yield Q({name:r});M.value=c.list.map(B=>({label:`${B.nickname}`,value:B.id}))}),l=r=>{w.value=r},[p,{resetFields:s,setFieldsValue:a,updateSchema:n,validate:S}]=V({labelWidth:100,schemas:j(),showActionButtonGroup:!1}),[$,{setModalProps:u,closeModal:b}]=P(r=>d(this,null,function*(){if(yield s(),u({confirmLoading:!1}),i.value=!!(r!=null&&r.isUpdate),_(i)){const c=yield X(r.record.id);yield a(f(g({},c),{isUpdate:i.value})),yield n(F(r.record.id)),yield m(r.record.managerName)}else yield a(f(g({},r.record),{isUpdate:i.value})),yield n(F())})),k=q(()=>_(i)?t("Content.cate.edit"):t("Content.cate.add"));function L(){return d(this,null,function*(){try{const r=yield S();u({confirmLoading:!0});const c=yield Y(r);b(),e("success")}finally{u({confirmLoading:!1})}})}const M=h([]),w=h();return{t,registerModal:$,registerForm:p,getTitle:k,handleSubmit:L,handleManagerSearch:m,handleManagerChange:l,managerList:M,managerId:w}}});function x(o,e,t,i,m,l){const p=y("BasicForm"),s=y("BasicModal");return z(),E(s,K(o.$attrs,{onRegister:o.registerModal,title:o.getTitle,onOk:o.handleSubmit}),{default:H(()=>[J(p,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var oo=A(Z,[["render",x]]);export{oo as default};