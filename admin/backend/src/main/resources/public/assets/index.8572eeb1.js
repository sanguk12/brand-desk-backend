import{ap as _,a as C,cA as v,s as y,fi as F,ar as a,o as g,j as B,y as n,n as s,m as h,i,z as b,D as w}from"./index.9b68f3a5.js";import{P as x}from"./index.27ebe66e.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./useSize.48fdc38e.js";import"./eagerComputed.4def26ea.js";import"./onMountedOrActivated.f9a7813e.js";import"./useWindowSizeFn.d868051d.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";const k=C({name:"Copy",components:{CollapseContainer:v,PageWrapper:x},setup(){const e=y(""),{createMessage:o}=w(),{clipboardRef:r,copiedRef:p}=F();function u(){const t=i(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}r.value=t,i(p)&&o.warning("copy success\uFF01")}return{handleCopy:u,value:e}}}),D={class:"flex justify-center"},P=b(" Copy ");function $(e,o,r,p,u,t){const l=a("a-input"),c=a("a-button"),m=a("CollapseContainer"),d=a("PageWrapper");return g(),B(d,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[s(m,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[h("div",D,[s(l,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=f=>e.value=f)},null,8,["value"]),s(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[P]),_:1},8,["onClick"])])]),_:1})]),_:1})}var G=_(k,[["render",$]]);export{G as default};