var k=Object.defineProperty,W=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var A=(e,t,l)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,I=(e,t)=>{for(var l in t||(t={}))T.call(t,l)&&A(e,l,t[l]);if(C)for(var l of C(t))U.call(t,l)&&A(e,l,t[l]);return e},M=(e,t)=>W(e,B(t));var p=(e,t,l)=>new Promise((a,i)=>{var u=n=>{try{r(l.next(n))}catch(c){i(c)}},m=n=>{try{r(l.throw(n))}catch(c){i(c)}},r=n=>n.done?a(n.value):Promise.resolve(n.value).then(u,m);r((l=l.apply(e,t)).next())});import{B as F,a as O}from"./index.b536e7c7.js";import{B as R}from"./BasicForm.90108631.js";import{u as S}from"./useForm.14189227.js";import{c as h,eb as D,dz as b,fu as N,ap as $,a as Y,s as j,i as g,f as z,ar as P,o as L,j as E,y as H,n as q,as as V}from"./index.0a8b89be.js";const{t:w}=h();var d=(e=>(e[e.MENU=1]="MENU",e[e.ACTION=2]="ACTION",e))(d||{});const f=(()=>{const e=new Map;return e.set(1,w("common.module.menu")),e.set(2,w("common.module.action")),e})(),{t:o}=h(),se=[{title:o("AccessControl.module.id"),dataIndex:"id",width:150},{title:o("AccessControl.module.koName"),dataIndex:"koName",width:150,align:"left"},{title:o("AccessControl.module.enName"),dataIndex:"enName",width:150,align:"left"},{title:o("AccessControl.module.type"),dataIndex:"type",width:120,customRender:({record:e})=>f.get(e.type)},{title:o("AccessControl.module.sort"),dataIndex:"sort",width:120},{title:o("AccessControl.module.hidden"),dataIndex:"hidden",width:120,customRender:({record:e})=>~~e.hidden===1?"Y":"N"},{title:o("AccessControl.module.createDate"),dataIndex:"createDate",format:(e,t,l)=>t.createDate===null?"":D(t.createDate,"YYYY-MM-DD HH:mm:ss"),width:130}],ne=[{field:"id",label:o("AccessControl.module.id"),component:"Input",colProps:{span:8}},{field:"hidden",label:o("AccessControl.module.hidden"),component:"Select",componentProps:{options:[{label:o("AccessControl.module.show"),value:1},{label:o("AccessControl.module.hidden"),value:0}]},colProps:{span:8}},{field:"type",label:o("AccessControl.module.type"),component:"Select",colProps:{span:8},componentProps:{options:[{label:f.get(d.MENU),value:d.MENU,key:d.MENU},{label:f.get(d.ACTION),value:d.ACTION,key:d.ACTION}]}}],G=[{field:"oldId",label:o("AccessControl.module.id"),component:"Input",show:!1},{field:"parentId",label:o("AccessControl.module.parentId"),component:"Input",show:!1},{field:"id",label:o("AccessControl.module.id"),component:"Input",colProps:{span:24}},{field:"enName",label:o("AccessControl.module.enName"),labelWidth:100,component:"Input",required:!0,colProps:{span:24}},{field:"koName",label:o("AccessControl.module.koName"),labelWidth:100,component:"Input",required:!0,colProps:{span:24}},{field:"component",label:o("AccessControl.module.component"),labelWidth:100,component:"Input",colProps:{span:24}},{field:"url",label:o("AccessControl.module.url"),labelWidth:100,component:"Input",colProps:{span:24}},{field:"icon",label:o("AccessControl.module.icon"),labelWidth:100,component:"IconPicker",colProps:{span:24}},{field:"meta",label:o("AccessControl.module.meta"),labelWidth:100,component:"CodeEditor",componentProps:{mode:"application/json"},colProps:{span:24}},{field:"alias",label:o("AccessControl.module.alias"),labelWidth:100,component:"InputTextArea",colProps:{span:24}},{field:"redirect",label:o("AccessControl.module.redirect"),labelWidth:100,component:"Input",colProps:{span:24}},{field:"hidden",label:o("AccessControl.module.hidden"),labelWidth:100,component:"Checkbox",colProps:{span:24}},{field:"menu",label:o("AccessControl.module.menu"),labelWidth:100,component:"Checkbox",colProps:{span:24}},{field:"authorizedUrl",component:"InputTextArea",label:o("AccessControl.module.authorizedUrl"),labelWidth:100,componentProps:{minRows:5,maxRows:15},colProps:{span:24}},{label:o("AccessControl.module.sort"),labelWidth:100,field:"sort",component:"InputNumber",colProps:{span:24}}];function ae(e){return b.get({url:"/api/sysModule/list",params:e})}function J(e){return p(this,null,function*(){const t=yield N();return b.post({url:"/api/sysModule/save",data:e,params:{_csrf:t}},{errorMessageMode:"none"})})}function re(e){return p(this,null,function*(){const t=yield N();return b.post({url:"/api/sysModule/delete",data:{id:e},params:{_csrf:t}})})}const K=Y({name:"ModuleModal",components:{BasicModal:F,BasicForm:R},emits:["success","register"],setup(e,{emit:t}){const{t:l}=h(),a=j(!0),[i,{resetFields:u,setFieldsValue:m,validate:r}]=S({labelWidth:100,schemas:G,showActionButtonGroup:!1}),[n,{setModalProps:c,closeModal:y}]=O(s=>p(this,null,function*(){yield u(),c({confirmLoading:!1}),a.value=!!(s!=null&&s.isUpdate),g(a)&&(s.record.oldId=s.record.id),s.record.meta==null&&(s.record.meta={}),yield m(M(I({},s.record),{isUpdate:a.value}))})),_=z(()=>g(a)?l("AccessControl.module.edit"):l("AccessControl.module.add"));function v(){return p(this,null,function*(){try{const s=yield r();c({confirmLoading:!0});const x=yield J(s);y(),t("success")}finally{c({confirmLoading:!1})}})}return{t:l,registerModal:n,registerForm:i,getTitle:_,handleSubmit:v}}});function Q(e,t,l,a,i,u){const m=P("BasicForm"),r=P("BasicModal");return L(),E(r,V(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit,width:800,"min-height":400}),{default:H(()=>[q(m,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var X=$(K,[["render",Q]]),ce=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{X as M,ce as a,se as c,re as d,ae as g,ne as s};