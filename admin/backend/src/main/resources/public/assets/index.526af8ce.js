var E=Object.defineProperty;var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var _=(t,e,o)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,f=(t,e)=>{for(var o in e||(e={}))A.call(e,o)&&_(t,o,e[o]);if(S)for(var o of S(e))k.call(e,o)&&_(t,o,e[o]);return t};import{ap as x,a as y,s as R,v as w,ba as D,ar as p,o as m,j as u,y as v,m as h,n as i,w as a,x as s,k as F}from"./index.9b68f3a5.js";import $ from"./Step1.b5f1054f.js";import V from"./Step2.a17619a1.js";import W from"./Step3.51298056.js";import{P as b}from"./index.27ebe66e.js";import{S as n}from"./index.32f4874e.js";import"./index.e8a8c5ca.js";import"./BasicForm.6899d0a5.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.3604fdfb.js";import"./index.64609094.js";import"./index.c6d9e38a.js";import"./useWindowSizeFn.d868051d.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.54a0672f.js";import"./index.f93c2cff.js";import"./uuid.2b29000c.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./useRefs.77e757f9.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.b9fae046.js";import"./useForm.b2949832.js";import"./data.1866c55a.js";import"./index.a683ae40.js";import"./index.acc4f2c4.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./onMountedOrActivated.f9a7813e.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";const j=y({name:"FormStepPage",components:{Step1:$,Step2:V,Step3:W,PageWrapper:b,[n.name]:n,[n.Step.name]:n.Step},setup(){const t=R(0),e=w({initSetp2:!1,initSetp3:!1});function o(r){t.value++,e.initSetp2=!0}function c(){t.value--}function l(r){t.value++,e.initSetp3=!0}function d(){t.value=0,e.initSetp2=!1,e.initSetp3=!1}return f({current:t,handleStep1Next:o,handleStep2Next:l,handleRedo:d,handleStepPrev:c},D(e))}}),I={class:"step-form-form"},q={class:"mt-5"};function z(t,e,o,c,l,d){const r=p("a-step"),B=p("a-steps"),C=p("Step1"),N=p("Step2"),P=p("Step3"),g=p("PageWrapper");return m(),u(g,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",content:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",contentClass:"p-4"},{default:v(()=>[h("div",I,[i(B,{current:t.current},{default:v(()=>[i(r,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),i(r,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),i(r,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),h("div",q,[a(i(C,{onNext:t.handleStep1Next},null,8,["onNext"]),[[s,t.current===0]]),t.initSetp2?a((m(),u(N,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[s,t.current===1]]):F("",!0),t.initSetp3?a((m(),u(P,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[s,t.current===2]]):F("",!0)])]),_:1})}var Ot=x(j,[["render",z],["__scopeId","data-v-47230cce"]]);export{Ot as default};
