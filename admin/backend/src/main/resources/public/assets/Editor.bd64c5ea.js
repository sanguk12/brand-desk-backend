import{B as n}from"./BasicForm.eebb9e8d.js";import{ap as u,a as l,cA as c,ar as r,o as d,j as f,y as i,n as p,bQ as C,D as _}from"./index.f8b6fa94.js";import{T as h}from"./index.6272a57f.js";import{P as B}from"./index.7cdcb74e.js";/* empty css               *//* empty css              */import"./index.bec743a7.js";import"./index.1423091e.js";import"./Checkbox.572a0527.js";import"./index.20e31dae.js";import"./index.e501ff06.js";import"./index.5c9fe55c.js";import"./index.12c7904d.js";import"./index.345349a2.js";import"./get.12156efd.js";import"./index.961d34d0.js";import"./eagerComputed.d49f1c93.js";import"./index.1efac556.js";import"./_baseEach.2d110e96.js";import"./_baseIteratee.07173297.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.c60a3e36.js";import"./index.65e8311b.js";import"./useRefs.25abb648.js";import"./Form.42748d5d.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./toInteger.443f55d3.js";import"./Col.b99e5aca.js";import"./useSize.3eb1ac1b.js";import"./index.26a558af.js";import"./index.a4095fd7.js";import"./index.0c1d45ad.js";import"./useWindowSizeFn.268c75c1.js";import"./FullscreenOutlined.8522ef3f.js";import"./index.c3665e07.js";import"./index.29f29e0d.js";import"./uuid.2b29000c.js";import"./download.3a5cff84.js";import"./base64Conver.08b9f4ec.js";import"./index.5ddb8e93.js";import"./index.ae9da7c5.js";import"./index.b3bb861d.js";import"./uniqBy.ed970345.js";import"./index.8ffde185.js";import"./onMountedOrActivated.73153770.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";const b=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:t,field:o})=>C(h,{value:t[o],onChange:e=>{t[o]=e}})}],g=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:B},setup(){const{createMessage:t}=_();return{schemas:b,handleSubmit:o=>{t.success("click search,values:"+JSON.stringify(o))}}}});function y(t,o,e,S,V,v){const m=r("BasicForm"),a=r("CollapseContainer"),s=r("PageWrapper");return d(),f(s,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[p(a,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[p(m,{labelWidth:100,schemas:t.schemas,actionColOptions:{span:24},onSubmit:t.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Vt=u(g,[["render",y]]);export{Vt as default};