var C=(o,e,l)=>new Promise((d,m)=>{var c=r=>{try{a(l.next(r))}catch(p){m(p)}},t=r=>{try{a(l.throw(r))}catch(p){m(p)}},a=r=>r.done?d(r.value):Promise.resolve(r.value).then(c,t);a((l=l.apply(o,e)).next())});import{B as v}from"./BasicForm.6899d0a5.js";import{u as k}from"./useForm.b2949832.js";import{dz as A,ap as _,a as D,cA as $,ar as f,o as g,j as y,y as s,m as F,n as u,D as h,z as n}from"./index.9b68f3a5.js";import{P as w}from"./index.27ebe66e.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.3604fdfb.js";import"./index.64609094.js";import"./index.c6d9e38a.js";import"./useWindowSizeFn.d868051d.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.54a0672f.js";import"./index.f93c2cff.js";import"./uuid.2b29000c.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.b9fae046.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./onMountedOrActivated.f9a7813e.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";const P=o=>A.post({url:"/basic-api/cascader/getAreaRecord",data:o}),B=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"fieldTime",component:"RangePicker",label:"\u65F6\u95F4\u5B57\u6BB5",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"ApiCascader",label:"\u8054\u52A8",colProps:{span:8},componentProps:{api:P,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:o=>!(o.levelType<3)}},{field:"field9",component:"ApiCascader",label:"\u8054\u52A8\u56DE\u663E",colProps:{span:8},componentProps:{api:P,apiParamKey:"parentCode",dataField:"data",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:o=>!(o.levelType<3)}}],S=D({components:{BasicForm:v,CollapseContainer:$,PageWrapper:w},setup(){const{createMessage:o}=h(),[e,{setProps:l,setFieldsValue:d,updateSchema:m}]=k({labelWidth:120,schemas:B,actionColOptions:{span:24},fieldMapToTime:[["fieldTime",["startTime","endTime"],"YYYY-MM"]]});function c(){return C(this,null,function*(){const a=yield function(){return new Promise(E=>{setTimeout(()=>{E({field9:["430000","430100","430102"],province:"\u6E56\u5357\u7701",city:"\u957F\u6C99\u5E02",district:"\u5CB3\u9E93\u533A"})},1e3)})}(),{field9:r,province:p,city:i,district:b}=a;yield m({field:"field9",componentProps:{displayRenderArray:[p,i,b]}}),yield d({field9:r})})}return{register:e,schemas:B,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))},setProps:l,handleLoad:c}}}),T={class:"mb-4"},R=n(" \u66F4\u6539labelWidth "),W=n(" \u8FD8\u539FlabelWidth "),z=n(" \u66F4\u6539Size "),M=n(" \u8FD8\u539FSize "),N=n(" \u7981\u7528\u8868\u5355 "),O=n(" \u89E3\u9664\u7981\u7528 "),G=n(" \u7D27\u51D1\u8868\u5355 "),L=n(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD "),V=n(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E "),Y={class:"mb-4"},I=n(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE "),K=n(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE "),U=n(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE "),j=n(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE "),H=n(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE "),J=n(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE "),q=n(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE "),Q=n(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE "),X=n(" \u8054\u52A8\u56DE\u663E ");function Z(o,e,l,d,m,c){const t=f("a-button"),a=f("BasicForm"),r=f("CollapseContainer"),p=f("PageWrapper");return g(),y(p,{title:"UseForm\u64CD\u4F5C\u793A\u4F8B"},{default:s(()=>[F("div",T,[u(t,{onClick:e[0]||(e[0]=i=>o.setProps({labelWidth:150})),class:"mr-2"},{default:s(()=>[R]),_:1}),u(t,{onClick:e[1]||(e[1]=i=>o.setProps({labelWidth:120})),class:"mr-2"},{default:s(()=>[W]),_:1}),u(t,{onClick:e[2]||(e[2]=i=>o.setProps({size:"large"})),class:"mr-2"},{default:s(()=>[z]),_:1}),u(t,{onClick:e[3]||(e[3]=i=>o.setProps({size:"default"})),class:"mr-2"},{default:s(()=>[M]),_:1}),u(t,{onClick:e[4]||(e[4]=i=>o.setProps({disabled:!0})),class:"mr-2"},{default:s(()=>[N]),_:1}),u(t,{onClick:e[5]||(e[5]=i=>o.setProps({disabled:!1})),class:"mr-2"},{default:s(()=>[O]),_:1}),u(t,{onClick:e[6]||(e[6]=i=>o.setProps({compact:!0})),class:"mr-2"},{default:s(()=>[G]),_:1}),u(t,{onClick:e[7]||(e[7]=i=>o.setProps({compact:!1})),class:"mr-2"},{default:s(()=>[L]),_:1}),u(t,{onClick:e[8]||(e[8]=i=>o.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:s(()=>[V]),_:1})]),F("div",Y,[u(t,{onClick:e[9]||(e[9]=i=>o.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:s(()=>[I]),_:1}),u(t,{onClick:e[10]||(e[10]=i=>o.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:s(()=>[K]),_:1}),u(t,{onClick:e[11]||(e[11]=i=>o.setProps({showResetButton:!1})),class:"mr-2"},{default:s(()=>[U]),_:1}),u(t,{onClick:e[12]||(e[12]=i=>o.setProps({showResetButton:!0})),class:"mr-2"},{default:s(()=>[j]),_:1}),u(t,{onClick:e[13]||(e[13]=i=>o.setProps({showSubmitButton:!1})),class:"mr-2"},{default:s(()=>[H]),_:1}),u(t,{onClick:e[14]||(e[14]=i=>o.setProps({showSubmitButton:!0})),class:"mr-2"},{default:s(()=>[J]),_:1}),u(t,{onClick:e[15]||(e[15]=i=>o.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:s(()=>[q]),_:1}),u(t,{onClick:e[16]||(e[16]=i=>o.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:s(()=>[Q]),_:1}),u(t,{onClick:o.handleLoad,class:"mr-2"},{default:s(()=>[X]),_:1},8,["onClick"])]),u(r,{title:"useForm\u793A\u4F8B"},{default:s(()=>[u(a,{onRegister:o.register,onSubmit:o.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Ze=_(S,[["render",Z]]);export{Ze as default};
