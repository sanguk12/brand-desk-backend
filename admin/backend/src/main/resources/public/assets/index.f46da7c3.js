import{ap as _,a as C,cA as v,s as y,fi as F,ar as a,o as g,j as B,y as n,n as s,m as h,i,z as b,D as w}from"./index.f8b6fa94.js";import{P as x}from"./index.7cdcb74e.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./useSize.3eb1ac1b.js";import"./eagerComputed.d49f1c93.js";import"./onMountedOrActivated.73153770.js";import"./useWindowSizeFn.268c75c1.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";const k=C({name:"Copy",components:{CollapseContainer:v,PageWrapper:x},setup(){const e=y(""),{createMessage:o}=w(),{clipboardRef:r,copiedRef:p}=F();function u(){const t=i(e);if(!t){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}r.value=t,i(p)&&o.warning("copy success\uFF01")}return{handleCopy:u,value:e}}}),D={class:"flex justify-center"},P=b(" Copy ");function $(e,o,r,p,u,t){const l=a("a-input"),c=a("a-button"),m=a("CollapseContainer"),d=a("PageWrapper");return g(),B(d,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[s(m,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:n(()=>[h("div",D,[s(l,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[0]||(o[0]=f=>e.value=f)},null,8,["value"]),s(c,{type:"primary",onClick:e.handleCopy},{default:n(()=>[P]),_:1},8,["onClick"])])]),_:1})]),_:1})}var G=_(k,[["render",$]]);export{G as default};
