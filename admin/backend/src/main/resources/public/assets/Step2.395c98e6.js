var f=(a,s,i)=>new Promise((c,r)=>{var _=o=>{try{t(i.next(o))}catch(p){r(p)}},m=o=>{try{t(i.throw(o))}catch(p){r(p)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,m);t((i=i.apply(a,s)).next())});import{B as v}from"./BasicForm.eebb9e8d.js";import{u as h}from"./useForm.74156ad2.js";import{step2Schemas as E}from"./data.1866c55a.js";import{a as b,ap as x,ar as n,o as C,h as g,n as e,y as u,z as d}from"./index.f8b6fa94.js";import{A as D}from"./index.c3665e07.js";import{D as l}from"./index.15e7dfc9.js";import{D as B}from"./index.bec743a7.js";/* empty css               *//* empty css              */import"./index.1423091e.js";import"./Checkbox.572a0527.js";import"./index.20e31dae.js";import"./index.e501ff06.js";import"./index.5c9fe55c.js";import"./index.12c7904d.js";import"./index.345349a2.js";import"./get.12156efd.js";import"./index.961d34d0.js";import"./eagerComputed.d49f1c93.js";import"./index.1efac556.js";import"./_baseEach.2d110e96.js";import"./_baseIteratee.07173297.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.c60a3e36.js";import"./index.65e8311b.js";import"./useRefs.25abb648.js";import"./Form.42748d5d.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./toInteger.443f55d3.js";import"./Col.b99e5aca.js";import"./useSize.3eb1ac1b.js";import"./index.26a558af.js";import"./index.a4095fd7.js";import"./index.0c1d45ad.js";import"./useWindowSizeFn.268c75c1.js";import"./FullscreenOutlined.8522ef3f.js";import"./index.29f29e0d.js";import"./uuid.2b29000c.js";import"./download.3a5cff84.js";import"./base64Conver.08b9f4ec.js";import"./index.5ddb8e93.js";import"./index.ae9da7c5.js";import"./index.b3bb861d.js";import"./uniqBy.ed970345.js";import"./index.8ffde185.js";const y=b({components:{BasicForm:v,[D.name]:D,[B.name]:B,[l.name]:l,[l.Item.name]:l.Item},emits:["next","prev"],setup(a,{emit:s}){const[i,{validate:c,setProps:r}]=h({labelWidth:80,schemas:E,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:m});function _(){return f(this,null,function*(){s("prev")})}function m(){return f(this,null,function*(){try{const t=yield c();r({submitButtonOptions:{loading:!0}}),setTimeout(()=>{r({submitButtonOptions:{loading:!1}}),s("next",t)},1500)}catch(t){}})}return{register:i}}}),A={class:"step2"},O=d(" ant-design@alipay.com "),S=d(" test@example.com "),$=d(" Vben "),w=d(" 500\u5143 ");function I(a,s,i,c,r,_){const m=n("a-alert"),t=n("a-descriptions-item"),o=n("a-descriptions"),p=n("a-divider"),F=n("BasicForm");return C(),g("div",A,[e(m,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:u(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:u(()=>[O]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:u(()=>[S]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:u(()=>[$]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:u(()=>[w]),_:1})]),_:1}),e(p),e(F,{onRegister:a.register},null,8,["onRegister"])])}var yt=x(y,[["render",I],["__scopeId","data-v-27c22141"]]);export{yt as default};