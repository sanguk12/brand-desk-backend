import{M as C,a as w}from"./index.ba905274.js";import{P as h}from"./index.7cdcb74e.js";import{ap as g,a as D,s,ar as a,o as V,j as M,y as n,m as l,n as r,i as B,z as c}from"./index.f8b6fa94.js";import{C as E}from"./index.c0b4a020.js";import"./index.d1b4dbc3.js";/* empty css              */import"./index.0c1d45ad.js";import"./useWindowSizeFn.268c75c1.js";import"./FullscreenOutlined.8522ef3f.js";import"./onMountedOrActivated.73153770.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./useSize.3eb1ac1b.js";import"./eagerComputed.d49f1c93.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";import"./index.8790c6a2.js";import"./index.8ffde185.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./index.b3bb861d.js";import"./Col.b99e5aca.js";import"./useRefs.25abb648.js";import"./PlusOutlined.40029b3f.js";const F=D({components:{MarkDown:C,PageWrapper:h,MarkdownViewer:w,ACard:E},setup(){const e=s(null),o=s(`
# title

# content
`);function i(){const t=B(e);if(!t)return;t.getVditor().setTheme("dark")}function p(t){o.value=t}function m(){o.value=""}return{value:o,toggleTheme:i,markDownRef:e,handleChange:p,clearValue:m}}}),A=c(" \u9ED1\u6697\u4E3B\u9898 "),b=c(" \u6E05\u7A7A\u5185\u5BB9 "),y={class:"mt-2"};function P(e,o,i,p,m,t){const u=a("a-button"),d=a("MarkDown"),f=a("MarkdownViewer"),_=a("a-card"),k=a("PageWrapper");return V(),M(k,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:n(()=>[l("div",null,[r(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:n(()=>[A]),_:1},8,["onClick"]),r(u,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:n(()=>[b]),_:1},8,["onClick"]),r(d,{value:e.value,"onUpdate:value":o[0]||(o[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),l("div",y,[r(_,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:n(()=>[r(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var re=g(F,[["render",P]]);export{re as default};
