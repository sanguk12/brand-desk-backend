var $=Object.defineProperty,j=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var M=(e,o,t)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,g=(e,o)=>{for(var t in o||(o={}))z.call(o,t)&&M(e,t,o[t]);if(v)for(var t of v(o))L.call(o,t)&&M(e,t,o[t]);return e},_=(e,o)=>j(e,k(o));var p=(e,o,t)=>new Promise((a,i)=>{var m=s=>{try{r(t.next(s))}catch(l){i(l)}},c=s=>{try{r(t.throw(s))}catch(l){i(l)}},r=s=>s.done?a(s.value):Promise.resolve(s.value).then(m,c);r((t=t.apply(e,o)).next())});import{B as R,a as T}from"./index.b536e7c7.js";import{B as G}from"./BasicForm.90108631.js";import{u as P}from"./useForm.14189227.js";import{dz as S,fu as U,ap as D,a as V,cT as h,I as u,c as x,s as w,i as C,f as A,ar as B,o as H,j as N,y as W,n as q,as as E}from"./index.0a8b89be.js";import{D as F}from"./index.8eadf802.js";import J from"./content.form.7f00a026.js";function re(e){return S.post({url:"/api/cmsContent/list",data:e,params:{pageIndex:e.pageIndex,pageSize:e.pageSize}})}function K(e){return p(this,null,function*(){const o=yield U();return S.post({url:"/api/cmsContent/save",data:e,params:{_csrf:o}},{errorMessageMode:"none"})})}const Q=V({name:"ContentModal",components:{BasicModal:R,BasicForm:G,[h.name]:h,[u.name]:u,[u.Group.name]:u.Group,[F.name]:F},emits:["success","register"],props:{value:Object},setup(e,{emit:o}){const{t}=x(),a=w(!0),i=w(""),[m,{setFieldsValue:c,resetFields:r,resetSchema:s,validate:l}]=P({labelWidth:100,schemas:[],showActionButtonGroup:!1,actionColOptions:{span:23}}),[y,{setModalProps:d,closeModal:I}]=T(n=>p(this,null,function*(){yield r(),d({confirmLoading:!1}),a.value=!!(n!=null&&n.isUpdate);const f=yield J(n.record.modelId);yield s(f),C(a)&&(i.value=n.record.id),yield c(g({},n.record))})),b=A(()=>C(a)?t("Content.content.edit"):t("Content.content.add"));function O(){return p(this,null,function*(){try{const n=yield l();d({confirmLoading:!0});const f=yield K(n);I(),o("success",{isUpdate:C(a),values:_(g({},n),{id:i.value})})}finally{d({confirmLoading:!1})}})}return{t,registerModal:y,registerForm:m,getTitle:b,handleSubmit:O}}});function X(e,o,t,a,i,m){const c=B("BasicForm"),r=B("BasicModal");return H(),N(r,E(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,centered:!0,onOk:e.handleSubmit,width:1100,"min-height":700}),{default:W(()=>[q(c,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Y=D(Q,[["render",X]]),ie=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{Y as C,ie as a,re as g};
