import{a as C,s as R,v as T,f as c,i,X as I,aA as B,ad as M,cO as k,n as o,cz as P,ap as E,ay as L,ar as S,o as z,j,y as _,m as g,t as W,z as V}from"./index.f8b6fa94.js";import{D as q}from"./index.bec743a7.js";import{P as O}from"./index.7cdcb74e.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./useSize.3eb1ac1b.js";import"./eagerComputed.d49f1c93.js";import"./onMountedOrActivated.73153770.js";import"./useWindowSizeFn.268c75c1.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";const U={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},y="virtual-scroll";function a(t,s="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${s}`}var X=C({name:"VirtualScroll",props:U,setup(t,{slots:s}){const u=R(null),n=T({first:0,last:0,scrollTop:0}),p=c(()=>parseInt(t.bench,10)),m=c(()=>parseInt(t.itemHeight,10)),d=c(()=>Math.max(0,n.first-i(p))),f=c(()=>Math.min((t.items||[]).length,n.last+i(p))),v=c(()=>({height:a((t.items||[]).length*i(m))})),h=c(()=>{const e={},r=a(t.height),l=a(t.minHeight),H=a(t.minWidth),N=a(t.maxHeight),F=a(t.maxWidth),b=a(t.width);return r&&(e.height=r),l&&(e.minHeight=l),H&&(e.minWidth=H),N&&(e.maxHeight=N),F&&(e.maxWidth=F),b&&(e.width=b),e});I([()=>t.itemHeight,()=>t.height],()=>{x()});function w(e){const r=i(u);if(!r)return 0;const l=parseInt(t.height||0,10)||r.clientHeight;return e+Math.ceil(l/i(m))}function $(){return Math.floor(n.scrollTop/i(m))}function x(){const e=i(u);!e||(n.scrollTop=e.scrollTop,n.first=$(),n.last=w(n.first))}function A(){const{items:e=[]}=t;return e.slice(i(d),i(f)).map(D)}function D(e,r){r+=i(d);const l=a(r*i(m));return o("div",{class:`${y}__item`,style:{top:l},key:r},[P(s,"default",{index:r,item:e})])}return B(()=>{n.last=w(0),M(()=>{const e=i(u);!e||k({el:e,name:"scroll",listener:x,wait:0})})}),()=>o("div",{class:y,style:i(h),ref:u},[o("div",{class:`${y}__container`,style:i(v)},[A()])])}});var G=E(X,[["__scopeId","data-v-0610daca"]]);const J=L(G);const K=(()=>{const t=[];for(let s=1;s<2e4;s++)t.push({title:"\u5217\u8868\u9879"+s});return t})(),Q=C({components:{VScroll:J,Divider:q,PageWrapper:O},setup(){return{data:K}}}),Y=V("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),Z={class:"virtual-scroll-demo-wrap"},tt={class:"virtual-scroll-demo__item"},et=V("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),it={class:"virtual-scroll-demo-wrap"},rt={class:"virtual-scroll-demo__item"};function nt(t,s,u,n,p,m){const d=S("Divider"),f=S("VScroll"),v=S("PageWrapper");return z(),j(v,{class:"virtual-scroll-demo"},{default:_(()=>[o(d,null,{default:_(()=>[Y]),_:1}),g("div",Z,[o(f,{itemHeight:41,items:t.data,height:300,width:300},{default:_(({item:h})=>[g("div",tt,W(h.title),1)]),_:1},8,["items"])]),o(d,null,{default:_(()=>[et]),_:1}),g("div",it,[o(f,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:_(({item:h})=>[g("div",rt,W(h.title),1)]),_:1},8,["items"])])]),_:1})}var vt=E(Q,[["render",nt],["__scopeId","data-v-415913f3"]]);export{vt as default};
