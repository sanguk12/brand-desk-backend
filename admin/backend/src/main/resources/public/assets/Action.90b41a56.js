import{ap as f,a as E,bC as A,s as v,ar as c,o as _,j as C,y as s,m as a,n as l,h as F,au as D,t as k,F as B,z as u,i as $}from"./index.9b68f3a5.js";import{P as g}from"./index.27ebe66e.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./useSize.48fdc38e.js";import"./eagerComputed.4def26ea.js";import"./onMountedOrActivated.f9a7813e.js";import"./useWindowSizeFn.d868051d.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";const y=E({components:{ScrollContainer:A,PageWrapper:g},setup(){const t=v(null),o=()=>{const r=$(t);if(!r)throw new Error("scroll is Null");return r};function i(r){o().scrollTo(r)}function p(){o().scrollBottom()}return{scrollTo:i,scrollRef:t,scrollBottom:p}}}),b={class:"my-4"},T=u(" \u6EDA\u52A8\u5230100px\u4F4D\u7F6E "),S=u(" \u6EDA\u52A8\u5230800px\u4F4D\u7F6E "),w=u(" \u6EDA\u52A8\u5230\u9876\u90E8 "),x=u(" \u6EDA\u52A8\u5230\u5E95\u90E8 "),N={class:"scroll-wrap"},P={class:"p-3"};function h(t,o,i,p,r,V){const n=c("a-button"),m=c("ScrollContainer"),d=c("PageWrapper");return _(),C(d,{title:"\u6EDA\u52A8\u7EC4\u4EF6\u51FD\u6570\u793A\u4F8B",content:"\u57FA\u4E8Eel-scrollbar"},{default:s(()=>[a("div",b,[l(n,{onClick:o[0]||(o[0]=e=>t.scrollTo(100)),class:"mr-2"},{default:s(()=>[T]),_:1}),l(n,{onClick:o[1]||(o[1]=e=>t.scrollTo(800)),class:"mr-2"},{default:s(()=>[S]),_:1}),l(n,{onClick:o[2]||(o[2]=e=>t.scrollTo(0)),class:"mr-2"},{default:s(()=>[w]),_:1}),l(n,{onClick:o[3]||(o[3]=e=>t.scrollBottom()),class:"mr-2"},{default:s(()=>[x]),_:1})]),a("div",N,[l(m,{class:"mt-4",ref:"scrollRef"},{default:s(()=>[a("ul",P,[(_(),F(B,null,D(100,e=>a("li",{key:e,class:"p-2",style:{border:"1px solid #eee"}},k(e),1)),64))])]),_:1},512)])]),_:1})}var O=f(y,[["render",h],["__scopeId","data-v-4fbe3193"]]);export{O as default};