import{B as u,a as c}from"./index.c6d9e38a.js";import{a as p,ap as d,ar as r,o as _,j as m,y as e,n,z as l}from"./index.9b68f3a5.js";import"./useWindowSizeFn.d868051d.js";import"./FullscreenOutlined.33f2b7f2.js";const M=p({components:{BasicModal:u},setup(){const[o,{closeModal:t,setModalProps:s}]=c();return{register:o,closeModal:t,setModalProps:()=>{s({title:"Modal New Title"})}}}}),f=l(" \u4ECE\u5185\u90E8\u5173\u95ED\u5F39\u7A97 "),C=l(" \u4ECE\u5185\u90E8\u4FEE\u6539title ");function E(o,t,s,k,B,g){const a=r("a-button"),i=r("BasicModal");return _(),m(i,{onRegister:o.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],okButtonProps:{disabled:!0}},{default:e(()=>[n(a,{type:"primary",onClick:o.closeModal,class:"mr-2"},{default:e(()=>[f]),_:1},8,["onClick"]),n(a,{type:"primary",onClick:o.setModalProps},{default:e(()=>[C]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var b=d(M,[["render",E]]);export{b as default};