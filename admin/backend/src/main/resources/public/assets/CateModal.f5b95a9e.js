var R=Object.defineProperty,U=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?R(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))D.call(e,t)&&v(o,t,e[t]);if(C)for(var t of C(e))N.call(e,t)&&v(o,t,e[t]);return o},f=(o,e)=>U(o,I(e));var d=(o,e,t)=>new Promise((i,m)=>{var l=a=>{try{s(t.next(a))}catch(n){m(n)}},p=a=>{try{s(t.throw(a))}catch(n){m(n)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(l,p);s((t=t.apply(o,e)).next())});import{B as O,a as P}from"./index.b536e7c7.js";import{B as T}from"./BasicForm.90108631.js";import{u as V}from"./useForm.14189227.js";import{a as j,b as F}from"./cate.data.1209d360.js";import{ap as A,a as G,c as W,s as h,i as _,f as q,ar as y,o as z,j as E,y as H,n as J,as as K,fy as Q}from"./index.0a8b89be.js";import{g as X,a as Y}from"./category.e8d5ece4.js";import"./useWindowSizeFn.64599f54.js";import"./FullscreenOutlined.9f59f3fc.js";/* empty css               *//* empty css              */import"./index.8eadf802.js";import"./index.d06f97b4.js";import"./Checkbox.e21486b4.js";import"./index.281aa2ea.js";import"./index.5485e619.js";import"./index.bd809198.js";import"./index.1b5c222a.js";import"./index.f5f3d84b.js";import"./get.40773c6b.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./index.14314bc3.js";import"./_baseEach.0f4dbd6f.js";import"./_baseIteratee.b2478045.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.b8e551ed.js";import"./index.ac3b1fda.js";import"./useRefs.f7f322ba.js";import"./Form.b63e2253.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";import"./index.5a0c5bc8.js";import"./index.b2d27a9d.js";import"./index.bacabee8.js";import"./index.4a0da81f.js";import"./uuid.2b29000c.js";import"./download.edb4e6af.js";import"./base64Conver.08b9f4ec.js";import"./index.14059c69.js";import"./index.04c8d476.js";import"./index.25fd638a.js";import"./uniqBy.7ccff7b8.js";import"./index.624fc280.js";import"./contentModel.0170ba3d.js";import"./categoryType.435ace3d.js";import"./contentUtil.1c28a977.js";import"./inputTypeEnum.d9dff2a9.js";import"./upload.360b43d7.js";import"./index.f09ce687.js";import"./onMountedOrActivated.b04887f0.js";import"./isEmpty.2eac4d18.js";const Z=G({name:"CateModal",components:{BasicModal:O,BasicForm:T},emits:["success","register"],setup(o,{emit:e}){const{t}=W(),i=h(!0),m=r=>d(this,null,function*(){const c=yield Q({name:r});M.value=c.list.map(B=>({label:`${B.nickname}`,value:B.id}))}),l=r=>{w.value=r},[p,{resetFields:s,setFieldsValue:a,updateSchema:n,validate:S}]=V({labelWidth:100,schemas:j(),showActionButtonGroup:!1}),[$,{setModalProps:u,closeModal:b}]=P(r=>d(this,null,function*(){if(yield s(),u({confirmLoading:!1}),i.value=!!(r!=null&&r.isUpdate),_(i)){const c=yield X(r.record.id);yield a(f(g({},c),{isUpdate:i.value})),yield n(F(r.record.id)),yield m(r.record.managerName)}else yield a(f(g({},r.record),{isUpdate:i.value})),yield n(F())})),k=q(()=>_(i)?t("Content.cate.edit"):t("Content.cate.add"));function L(){return d(this,null,function*(){try{const r=yield S();u({confirmLoading:!0});const c=yield Y(r);b(),e("success")}finally{u({confirmLoading:!1})}})}const M=h([]),w=h();return{t,registerModal:$,registerForm:p,getTitle:k,handleSubmit:L,handleManagerSearch:m,handleManagerChange:l,managerList:M,managerId:w}}});function x(o,e,t,i,m,l){const p=y("BasicForm"),s=y("BasicModal");return z(),E(s,K(o.$attrs,{onRegister:o.registerModal,title:o.getTitle,onOk:o.handleSubmit}),{default:H(()=>[J(p,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var oo=A(Z,[["render",x]]);export{oo as default};