import{B as C}from"./BasicForm.6899d0a5.js";import{ap as B,a as c,cA as E,s as P,ar as i,o as b,j as F,y as e,m as a,n as s,D as v,z as r}from"./index.9b68f3a5.js";import{P as k}from"./index.27ebe66e.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.3604fdfb.js";import"./index.64609094.js";import"./index.c6d9e38a.js";import"./useWindowSizeFn.d868051d.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.54a0672f.js";import"./index.f93c2cff.js";import"./uuid.2b29000c.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.b9fae046.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./onMountedOrActivated.f9a7813e.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";const _=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:t=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],$=c({components:{BasicForm:C,CollapseContainer:E,PageWrapper:k},setup(){const t=P(null),{createMessage:o}=v();return{formElRef:t,schemas:_,handleSubmit:n=>{o.success("click search,values:"+JSON.stringify(n))},setProps(n){const p=t.value;!p||p.setProps(n)}}}}),D={class:"mb-4"},A=r(" \u66F4\u6539labelWidth "),g=r(" \u8FD8\u539FlabelWidth "),S=r(" \u66F4\u6539Size "),h=r(" \u8FD8\u539FSize "),w=r(" \u7981\u7528\u8868\u5355 "),W=r(" \u89E3\u9664\u7981\u7528 "),R=r(" \u7D27\u51D1\u8868\u5355 "),z=r(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD "),N=r(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E "),O={class:"mb-4"},y=r(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE "),G=r(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE "),V=r(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE "),I=r(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE "),M=r(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE "),j=r(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE "),J=r(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE "),T=r(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ");function q(t,o,n,p,H,K){const u=i("a-button"),m=i("BasicForm"),d=i("CollapseContainer"),f=i("PageWrapper");return b(),F(f,{title:"Ref\u64CD\u4F5C\u793A\u4F8B"},{default:e(()=>[a("div",D,[s(u,{onClick:o[0]||(o[0]=l=>t.setProps({labelWidth:150})),class:"mr-2"},{default:e(()=>[A]),_:1}),s(u,{onClick:o[1]||(o[1]=l=>t.setProps({labelWidth:120})),class:"mr-2"},{default:e(()=>[g]),_:1}),s(u,{onClick:o[2]||(o[2]=l=>t.setProps({size:"large"})),class:"mr-2"},{default:e(()=>[S]),_:1}),s(u,{onClick:o[3]||(o[3]=l=>t.setProps({size:"default"})),class:"mr-2"},{default:e(()=>[h]),_:1}),s(u,{onClick:o[4]||(o[4]=l=>t.setProps({disabled:!0})),class:"mr-2"},{default:e(()=>[w]),_:1}),s(u,{onClick:o[5]||(o[5]=l=>t.setProps({disabled:!1})),class:"mr-2"},{default:e(()=>[W]),_:1}),s(u,{onClick:o[6]||(o[6]=l=>t.setProps({compact:!0})),class:"mr-2"},{default:e(()=>[R]),_:1}),s(u,{onClick:o[7]||(o[7]=l=>t.setProps({compact:!1})),class:"mr-2"},{default:e(()=>[z]),_:1}),s(u,{onClick:o[8]||(o[8]=l=>t.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:e(()=>[N]),_:1})]),a("div",O,[s(u,{onClick:o[9]||(o[9]=l=>t.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:e(()=>[y]),_:1}),s(u,{onClick:o[10]||(o[10]=l=>t.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:e(()=>[G]),_:1}),s(u,{onClick:o[11]||(o[11]=l=>t.setProps({showResetButton:!1})),class:"mr-2"},{default:e(()=>[V]),_:1}),s(u,{onClick:o[12]||(o[12]=l=>t.setProps({showResetButton:!0})),class:"mr-2"},{default:e(()=>[I]),_:1}),s(u,{onClick:o[13]||(o[13]=l=>t.setProps({showSubmitButton:!1})),class:"mr-2"},{default:e(()=>[M]),_:1}),s(u,{onClick:o[14]||(o[14]=l=>t.setProps({showSubmitButton:!0})),class:"mr-2"},{default:e(()=>[j]),_:1}),s(u,{onClick:o[15]||(o[15]=l=>t.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:e(()=>[J]),_:1}),s(u,{onClick:o[16]||(o[16]=l=>t.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:e(()=>[T]),_:1})]),s(d,{title:"\u4F7F\u7528ref\u8C03\u7528\u8868\u5355\u5185\u90E8\u51FD\u6570\u793A\u4F8B"},{default:e(()=>[s(m,{schemas:t.schemas,ref:"formElRef",labelWidth:100,onSubmit:t.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Ho=B($,[["render",q]]);export{Ho as default};