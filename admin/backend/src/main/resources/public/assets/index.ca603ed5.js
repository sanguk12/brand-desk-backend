import{ap as _,a as f,cA as g,s as C,bF as u,ar as l,o as h,j as F,y as o,n as t,z as n,t as k,m as w}from"./index.0a8b89be.js";import{P as y}from"./index.c388f747.js";import"./index.61a163e2.js";import"./index.2c6c45b9.js";import"./useSize.d9666d99.js";import"./eagerComputed.d89357d9.js";import"./onMountedOrActivated.b04887f0.js";import"./useWindowSizeFn.64599f54.js";import"./useContentViewHeight.2aaec145.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.01edd6fb.js";import"./transButton.4e1319c6.js";const S=f({components:{CollapseContainer:g,PageWrapper:y},setup(){const e=C(null),{enter:s,toggle:a,exit:i,isFullscreen:c}=u(),{toggle:m}=u(e);return{enter:s,toggleDom:m,toggle:a,isFullscreen:c,exit:i,domRef:e}}}),D=n(" Enter Window Full Screen "),W=n(" Toggle Window Full Screen "),b=n(" Exit Window Full Screen "),x=n(" Enter Dom Full Screen "),B={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"},E=n(" Exit Dom Full Screen ");function P(e,s,a,i,c,m){const r=l("a-button"),p=l("CollapseContainer"),d=l("PageWrapper");return h(),F(d,{title:"\u5168\u5C4F\u793A\u4F8B"},{default:o(()=>[t(p,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:o(()=>[t(r,{type:"primary",onClick:e.enter,class:"mr-2"},{default:o(()=>[D]),_:1},8,["onClick"]),t(r,{color:"success",onClick:e.toggle,class:"mr-2"},{default:o(()=>[W]),_:1},8,["onClick"]),t(r,{color:"error",onClick:e.exit,class:"mr-2"},{default:o(()=>[b]),_:1},8,["onClick"]),n(" Current State: "+k(e.isFullscreen),1)]),_:1}),t(p,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:o(()=>[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[x]),_:1},8,["onClick"])]),_:1}),w("div",B,[t(r,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[E]),_:1},8,["onClick"])],512)]),_:1})}var I=_(S,[["render",P]]);export{I as default};