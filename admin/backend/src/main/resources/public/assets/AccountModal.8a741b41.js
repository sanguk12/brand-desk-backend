var y=Object.defineProperty,q=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var w=(o,a,e)=>a in o?y(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,f=(o,a)=>{for(var e in a||(a={}))R.call(a,e)&&w(o,e,a[e]);if(g)for(var e of g(a))U.call(a,e)&&w(o,e,a[e]);return o},b=(o,a)=>q(o,x(a));var h=(o,a,e)=>new Promise((l,i)=>{var p=s=>{try{n(e.next(s))}catch(c){i(c)}},d=s=>{try{n(e.throw(s))}catch(c){i(c)}},n=s=>s.done?l(s.value):Promise.resolve(s.value).then(p,d);n((e=e.apply(o,a)).next())});import{B as D,a as N}from"./index.c6d9e38a.js";import{B as T}from"./BasicForm.6899d0a5.js";import{u as $}from"./useForm.b2949832.js";import{g as L}from"./role.c49c087f.js";import{g as I}from"./dept.1369de14.js";import{a as O,s as P,i as r,f as Y,ap as j,fs as W,ft as E,ar as M,o as H,j as V,y as z,n as G,as as J}from"./index.9b68f3a5.js";const ie=[{title:"Username",dataIndex:"username",width:120},{title:"Nickname",dataIndex:"nickname",width:120},{title:"Mail",dataIndex:"email",width:120},{title:"Creation time",dataIndex:"createDate",format:"date|YYYY-MM-DD HH:mm:ss",width:180},{title:"Role",dataIndex:"roles",width:200}],de=[{field:"name",label:"Name",component:"Input",colProps:{span:8}},{field:"nickname",label:"Nick name",component:"Input",colProps:{span:8}}],K=[{field:"id",label:"id",component:"Input",show:!1},{field:"username",label:"Username",component:"Input",helpMessage:["This field demonstrates asynchronous validation","Cannot enter username with admin"],colProps:{span:24}},{field:"isAdmin",component:"Checkbox",label:"Administrator",colProps:{span:24}},{field:"ownsAllContent",component:"Checkbox",label:"Manage all contents",colProps:{span:24}},{field:"password",label:"Password",labelWidth:200,component:"InputPassword",required:!0,ifShow:!1,colProps:{span:24}},{field:"repassword",label:"Password Confirm",labelWidth:200,component:"InputPassword",required:!0,ifShow:!1,colProps:{span:24}},{label:"Role",field:"roles",component:"ApiTreeSelect",componentProps:{mode:"multiple",api:L,resultField:"list",labelField:"name",valueField:"id"},required:!0,colProps:{span:24}},{field:"deptId",label:"Department",component:"ApiTreeSelect",componentProps:{api:I,resultField:"list",fieldNames:{label:"name",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0,colProps:{span:24}},{field:"nickname",label:"Nickname",component:"Input",required:!0,colProps:{span:24}},{label:"Mail",field:"email",component:"Input",required:!0,colProps:{span:24}}],Q=O({name:"AccountModal",components:{BasicModal:D,BasicForm:T},emits:["success","register"],setup(o,{emit:a}){const e=P(!0),l=P(""),[i,{setFieldsValue:p,updateSchema:d,resetFields:n,validate:s}]=$({labelWidth:100,schemas:K,showActionButtonGroup:!1,actionColOptions:{span:23}}),[c,{setModalProps:u,closeModal:v}]=N(t=>h(this,null,function*(){n(),u({confirmLoading:!1}),e.value=!!(t!=null&&t.isUpdate),r(e)&&(l.value=t.record.id,p(f({},t.record)));let m=[];r(e)||(m=[{required:!0,message:"please enter user name"},{validator(ee,S){return new Promise((A,B)=>{W(S).then(()=>{A()}).catch(C=>{B(C.message||"verification failed")})})}}]);const k=yield I();d([{field:"username",componentProps:{disabled:r(e)},rules:m},{field:"password",ifShow:!r(e)},{field:"repassword",ifShow:!r(e)},{field:"deptId",componentProps:{treeData:k}}])})),F=Y(()=>r(e)?"Edit account":"Add account");function _(){return h(this,null,function*(){try{const t=yield s();u({confirmLoading:!0});const m=yield E(t);v(),a("success",{isUpdate:r(e),values:b(f({},t),{id:l.value})})}finally{u({confirmLoading:!1})}})}return{registerModal:c,registerForm:i,getTitle:F,handleSubmit:_}}});function X(o,a,e,l,i,p){const d=M("BasicForm"),n=M("BasicModal");return H(),V(n,J(o.$attrs,{onRegister:o.registerModal,title:o.getTitle,onOk:o.handleSubmit}),{default:z(()=>[G(d,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Z=j(Q,[["render",X]]),ce=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{Z as A,ce as a,ie as c,de as s};
