import{B as g,a as f}from"./index.0c1d45ad.js";import{a as h,s as p,X as M,ap as B,ar as m,o,j as v,y as u,n as y,h as t,k as _,F as C,au as F,t as k,as as D,z as b}from"./index.f8b6fa94.js";import"./useWindowSizeFn.268c75c1.js";import"./FullscreenOutlined.8522ef3f.js";const A=h({components:{BasicModal:g},setup(){const e=p(!0),a=p(10),[i,{setModalProps:s,redoModalHeight:l}]=f();M(()=>a.value,()=>{l()});function d(r){r&&(e.value=!0,s({loading:!0,confirmLoading:!0}),setTimeout(()=>{a.value=Math.round(Math.random()*30+5),e.value=!1,s({loading:!1,confirmLoading:!1})},3e3))}function n(){a.value=Math.round(Math.random()*20+10)}return{register:i,loading:e,handleShow:d,lines:a,setLines:n}}}),L=b("\u70B9\u6211\u66F4\u65B0\u5185\u5BB9"),V={key:0,class:"empty-tips"},$={key:1};function w(e,a,i,s,l,d){const n=m("a-button"),r=m("BasicModal");return o(),v(r,D(e.$attrs,{destroyOnClose:"",onRegister:e.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],onVisibleChange:e.handleShow}),{insertFooter:u(()=>[y(n,{type:"primary",danger:"",onClick:e.setLines,disabled:e.loading},{default:u(()=>[L]),_:1},8,["onClick","disabled"])]),default:u(()=>[e.loading?(o(),t("div",V,"\u52A0\u8F7D\u4E2D\uFF0C\u7A0D\u7B493\u79D2\u2026\u2026")):_("",!0),e.loading?_("",!0):(o(),t("ul",$,[(o(!0),t(C,null,F(e.lines,c=>(o(),t("li",{key:c},"\u52A0\u8F7D\u5B8C\u6210"+k(c)+"\uFF01",1))),128))]))]),_:1},16,["onRegister","onVisibleChange"])}var I=B(A,[["render",w],["__scopeId","data-v-18c98c8c"]]);export{I as default};