import{B as n}from"./BasicForm.6899d0a5.js";import{ap as u,a as l,cA as c,ar as r,o as d,j as f,y as i,n as p,bQ as C,D as _}from"./index.9b68f3a5.js";import{T as h}from"./index.055a9a81.js";import{P as B}from"./index.27ebe66e.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.3604fdfb.js";import"./index.64609094.js";import"./index.c6d9e38a.js";import"./useWindowSizeFn.d868051d.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.54a0672f.js";import"./index.f93c2cff.js";import"./uuid.2b29000c.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.b9fae046.js";import"./onMountedOrActivated.f9a7813e.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";const b=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:t,field:o})=>C(h,{value:t[o],onChange:e=>{t[o]=e}})}],g=l({components:{BasicForm:n,CollapseContainer:c,PageWrapper:B},setup(){const{createMessage:t}=_();return{schemas:b,handleSubmit:o=>{t.success("click search,values:"+JSON.stringify(o))}}}});function y(t,o,e,S,V,v){const m=r("BasicForm"),a=r("CollapseContainer"),s=r("PageWrapper");return d(),f(s,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[p(a,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[p(m,{labelWidth:100,schemas:t.schemas,actionColOptions:{span:24},onSubmit:t.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Vt=u(g,[["render",y]]);export{Vt as default};