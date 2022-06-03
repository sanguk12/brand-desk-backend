var k=Object.defineProperty,A=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var w=(e,r,o)=>r in e?k(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,f=(e,r)=>{for(var o in r||(r={}))R.call(r,o)&&w(e,o,r[o]);if(h)for(var o of h(r))I.call(r,o)&&w(e,o,r[o]);return e},_=(e,r)=>A(e,P(r));var g=(e,r,o)=>new Promise((t,p)=>{var l=s=>{try{a(o.next(s))}catch(c){p(c)}},n=s=>{try{a(o.throw(s))}catch(c){p(c)}},a=s=>s.done?t(s.value):Promise.resolve(s.value).then(l,n);a((o=o.apply(e,r)).next())});import{B as L,a as O}from"./index.c6d9e38a.js";import{B as T}from"./BasicForm.6899d0a5.js";import{u as V}from"./useForm.b2949832.js";import{userFormSchema as j}from"./user.data.b8db55f0.js";import{ap as q,a as E,c as G,s as v,i as m,fs as N,f as W,ar as B,o as x,j as z,y as D,n as H,as as J,ft as K}from"./index.9b68f3a5.js";import"./useWindowSizeFn.d868051d.js";import"./FullscreenOutlined.33f2b7f2.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.3604fdfb.js";import"./index.64609094.js";import"./index.54a0672f.js";import"./index.f93c2cff.js";import"./uuid.2b29000c.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.b9fae046.js";import"./role.c49c087f.js";import"./dept.1369de14.js";const Q=E({name:"UserModal",components:{BasicModal:L,BasicForm:T},emits:["success","register"],setup(e,{emit:r}){const{t:o}=G(),t=v(!0),p=v(""),[l,{setFieldsValue:n,updateSchema:a,resetFields:s,validate:c}]=V({labelWidth:100,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:23}}),[M,{setModalProps:u,closeModal:F}]=O(i=>g(this,null,function*(){yield s(),u({confirmLoading:!1}),t.value=!!(i!=null&&i.isUpdate),m(t)&&(p.value=i.record.id,yield n(f({},i.record)));let d=[];m(t)||(d=[{required:!0,message:o("AccessControl.user.guide_input_username")},{validator(Y,y){return new Promise((S,$)=>{N(y).then(()=>{S()}).catch(b=>{$(b.message||o("common.verify_failed"))})})}}]),yield a([{field:"username",componentProps:{disabled:m(t)},rules:d},{field:"password",ifShow:!m(t)},{field:"repassword",ifShow:!m(t)}])})),C=W(()=>m(t)?o("AccessControl.user.edit"):o("AccessControl.user.add"));function U(){return g(this,null,function*(){try{const i=yield c();u({confirmLoading:!0});const d=yield K(i);F(),r("success",{isUpdate:m(t),values:_(f({},i),{id:p.value})})}finally{u({confirmLoading:!1})}})}return{t:o,registerModal:M,registerForm:l,getTitle:C,handleSubmit:U}}});function X(e,r,o,t,p,l){const n=B("BasicForm"),a=B("BasicModal");return x(),z(a,J(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:D(()=>[H(n,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Jo=q(Q,[["render",X]]);export{Jo as default};