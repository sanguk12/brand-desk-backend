var _=Object.defineProperty;var h=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var b=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,w=(e,a)=>{for(var t in a||(a={}))B.call(a,t)&&b(e,t,a[t]);if(h)for(var t of h(a))k.call(a,t)&&b(e,t,a[t]);return e};var p=(e,a,t)=>new Promise((n,i)=>{var c=s=>{try{r(t.next(s))}catch(o){i(o)}},u=s=>{try{r(t.throw(s))}catch(o){i(o)}},r=s=>s.done?n(s.value):Promise.resolve(s.value).then(c,u);r((t=t.apply(e,a)).next())});import{B as I}from"./BasicForm.eebb9e8d.js";import{u as y}from"./useForm.74156ad2.js";import{bQ as F,D as N,a as T,s as v,f as C,i as f,ap as P,ar as g,o as $,j as x,y as S,n as D,as as V}from"./index.f8b6fa94.js";import{S as L}from"./index.12c7904d.js";import{s as M,a as O}from"./system.cc6d32e4.js";import{B as U,a as j}from"./index.0631543e.js";import{_ as A}from"./index.f12c8038.js";const ee=[{title:"Role Name",dataIndex:"roleName",width:200},{title:"role value",dataIndex:"roleValue",width:180},{title:"sort",dataIndex:"orderNo",width:50},{title:"Status",dataIndex:"status",width:120,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),F(L,{checked:e.status==="1",checkedChildren:"activated",unCheckedChildren:"disabled",loading:e.pendingStatus,onChange(a){e.pendingStatus=!0;const t=a?"1":"0",{createMessage:n}=N();M(e.id,t).then(()=>{e.status=t,n.success("Role status modified successfully")}).catch(()=>{n.error("Failed to modify role status")}).finally(()=>{e.pendingStatus=!1})}}))},{title:"creation time",dataIndex:"createTime",width:180},{title:"Remark",dataIndex:"remark"}],te=[{field:"roleNme",label:"Role Name",component:"Input",colProps:{span:8}},{field:"status",label:"Status",component:"Select",componentProps:{options:[{label:"enable",value:"0"},{label:"Disabled",value:"1"}]},colProps:{span:8}}],q=[{field:"roleName",label:"Role Name",required:!0,component:"Input"},{field:"roleValue",label:"role value",required:!0,component:"Input"},{field:"status",label:"Status",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"enabled",value:"0"},{label:"Disabled",value:"1"}]}},{label:"Remark",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}],G=T({name:"RoleDrawer",components:{BasicDrawer:U,BasicForm:I,BasicTree:A},emits:["success","register"],setup(e,{emit:a}){const t=v(!0),n=v([]),[i,{resetFields:c,setFieldsValue:u,validate:r}]=y({labelWidth:90,schemas:q,showActionButtonGroup:!1}),[s,{setDrawerProps:o,closeDrawer:m}]=j(l=>p(this,null,function*(){c(),o({confirmLoading:!1}),f(n).length===0&&(n.value=yield O()),t.value=!!(l!=null&&l.isUpdate),f(t)&&u(w({},l.record))})),d=C(()=>f(t)?"edit role":"Add role");function R(){return p(this,null,function*(){try{const l=yield r();o({confirmLoading:!0}),m(),a("success")}finally{o({confirmLoading:!1})}})}return{registerDrawer:s,registerForm:i,getTitle:d,handleSubmit:R,treeData:n}}});function z(e,a,t,n,i,c){const u=g("BasicTree"),r=g("BasicForm"),s=g("BasicDrawer");return $(),x(s,V(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:S(()=>[D(r,{onRegister:e.registerForm},{menu:S(({model:o,field:m})=>[D(u,{value:o[m],"onUpdate:value":d=>o[m]=d,treeData:e.treeData,fieldNames:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"menu assignment"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Q=P(G,[["render",z]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{Q as R,ae as a,ee as c,te as s};
