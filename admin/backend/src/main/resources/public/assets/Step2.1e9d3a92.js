var f=(a,s,i)=>new Promise((c,r)=>{var _=o=>{try{t(i.next(o))}catch(p){r(p)}},m=o=>{try{t(i.throw(o))}catch(p){r(p)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,m);t((i=i.apply(a,s)).next())});import{B as v}from"./BasicForm.90108631.js";import{u as h}from"./useForm.14189227.js";import{step2Schemas as E}from"./data.1866c55a.js";import{a as b,ap as x,ar as n,o as C,h as g,n as e,y as u,z as d}from"./index.0a8b89be.js";import{A as D}from"./index.bacabee8.js";import{D as l}from"./index.35039024.js";import{D as B}from"./index.8eadf802.js";/* empty css               *//* empty css              */import"./index.d06f97b4.js";import"./Checkbox.e21486b4.js";import"./index.281aa2ea.js";import"./index.5485e619.js";import"./index.bd809198.js";import"./index.1b5c222a.js";import"./index.f5f3d84b.js";import"./get.40773c6b.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./index.14314bc3.js";import"./_baseEach.0f4dbd6f.js";import"./_baseIteratee.b2478045.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.b8e551ed.js";import"./index.ac3b1fda.js";import"./useRefs.f7f322ba.js";import"./Form.b63e2253.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";import"./index.5a0c5bc8.js";import"./index.b2d27a9d.js";import"./index.b536e7c7.js";import"./useWindowSizeFn.64599f54.js";import"./FullscreenOutlined.9f59f3fc.js";import"./index.4a0da81f.js";import"./uuid.2b29000c.js";import"./download.edb4e6af.js";import"./base64Conver.08b9f4ec.js";import"./index.14059c69.js";import"./index.04c8d476.js";import"./index.25fd638a.js";import"./uniqBy.7ccff7b8.js";import"./index.624fc280.js";const y=b({components:{BasicForm:v,[D.name]:D,[B.name]:B,[l.name]:l,[l.Item.name]:l.Item},emits:["next","prev"],setup(a,{emit:s}){const[i,{validate:c,setProps:r}]=h({labelWidth:80,schemas:E,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:m});function _(){return f(this,null,function*(){s("prev")})}function m(){return f(this,null,function*(){try{const t=yield c();r({submitButtonOptions:{loading:!0}}),setTimeout(()=>{r({submitButtonOptions:{loading:!1}}),s("next",t)},1500)}catch(t){}})}return{register:i}}}),A={class:"step2"},O=d(" ant-design@alipay.com "),S=d(" test@example.com "),$=d(" Vben "),w=d(" 500\u5143 ");function I(a,s,i,c,r,_){const m=n("a-alert"),t=n("a-descriptions-item"),o=n("a-descriptions"),p=n("a-divider"),F=n("BasicForm");return C(),g("div",A,[e(m,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:u(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:u(()=>[O]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:u(()=>[S]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:u(()=>[$]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:u(()=>[w]),_:1})]),_:1}),e(p),e(F,{onRegister:a.register},null,8,["onRegister"])])}var yt=x(y,[["render",I],["__scopeId","data-v-27c22141"]]);export{yt as default};