import{ap as _,a as m,cT as S,ev as T,ew as f,ex as x,ey as R,ez as X,eA as h,eB as y,eC as E,eD as w,eE as C,eF as Y,eG as B,eH as F,s as n,ar as o,o as r,j as i,y as s,m as l,n as p,aE as b,w as k,x as $,z as g}from"./index.f8b6fa94.js";import{P as A}from"./index.7cdcb74e.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./useSize.3eb1ac1b.js";import"./eagerComputed.d49f1c93.js";import"./onMountedOrActivated.73153770.js";import"./useWindowSizeFn.268c75c1.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";const P=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],D=P.map(e=>({label:e,value:e,key:e})),N=m({components:{Select:S,PageWrapper:A,FadeTransition:T,ScaleTransition:f,SlideYTransition:x,ScrollYTransition:R,SlideYReverseTransition:X,ScrollYReverseTransition:h,SlideXTransition:y,ScrollXTransition:E,SlideXReverseTransition:w,ScrollXReverseTransition:C,ScaleRotateTransition:Y,ExpandXTransition:B,ExpandTransition:F},setup(){const e=n("Fade"),a=n(!0);function t(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:D,value:e,start:t,show:a}}}),V={class:"flex"},W=g(" start "),z={class:"box"};function j(e,a,t,G,H,I){const c=o("Select"),u=o("a-button"),d=o("PageWrapper");return r(),i(d,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:s(()=>[l("div",V,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(u,{type:"primary",class:"ml-4",onClick:e.start},{default:s(()=>[W]),_:1},8,["onClick"])]),(r(),i(b(`${e.value}Transition`),null,{default:s(()=>[k(l("div",z,null,512),[[$,e.show]])]),_:1}))]),_:1})}var se=_(N,[["render",j],["__scopeId","data-v-e995b610"]]);export{se as default};
