import{ap as B,a as w,cA as x,b4 as D,r as S,f as F,ar as r,o as t,h as l,n as o,y as s,q as n,m as p,F as c,au as u,f7 as P,f8 as V,z as b,t as m,j as _,aE as A}from"./index.9b68f3a5.js";/* empty css              */import{T as h}from"./index.10106a95.js";import{T as L}from"./index.6344e34d.js";import N from"./Article.88c6bca4.js";import j from"./Application.427c5990.js";import z from"./Project.075e9c23.js";import{h as R}from"./avata.e91355cf.js";import{tags as U,teams as q,details as G,achieveList as H}from"./data.84187af5.js";import{R as T}from"./index.b9fae046.js";import{C as $}from"./index.b8e26f6f.js";import"./useRefs.77e757f9.js";import"./PlusOutlined.8b22ded4.js";import"./index.15a304c5.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./Col.5a4e1b28.js";import"./eagerComputed.4def26ea.js";import"./index.f6e31399.js";import"./index.4f96a025.js";const J=w({components:{CollapseContainer:x,Icon:D,Tag:L,Tabs:h,TabPane:h.TabPane,Article:N,Application:j,Project:z,[T.name]:T,[$.name]:$},setup(){const a=S(),f=F(()=>a.getUserInfo.avatar||R);return{prefixCls:"account-center",avatar:f,tags:U,teams:q,details:G,achieveList:H}}}),g=a=>(P("data-v-52b05e1a"),a=a(),V(),a),K=["src"],M=g(()=>p("span",null,"Vben",-1)),O=g(()=>p("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1));function Q(a,f,W,X,Y,Z){const i=r("a-col"),d=r("Icon"),C=r("a-row"),y=r("Tag"),v=r("CollapseContainer"),E=r("TabPane"),I=r("Tabs");return t(),l("div",{class:n(a.prefixCls)},[o(C,{class:n(`${a.prefixCls}-top`)},{default:s(()=>[o(i,{span:9,class:n(`${a.prefixCls}-col`)},{default:s(()=>[o(C,null,{default:s(()=>[o(i,{span:8},{default:s(()=>[p("div",{class:n(`${a.prefixCls}-top__avatar`)},[p("img",{width:"70",src:a.avatar},null,8,K),M,O],2)]),_:1}),o(i,{span:16},{default:s(()=>[p("div",{class:n(`${a.prefixCls}-top__detail`)},[(t(!0),l(c,null,u(a.details,e=>(t(),l("p",{key:e.title},[o(d,{icon:e.icon},null,8,["icon"]),b(" "+m(e.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),o(i,{span:7,class:n(`${a.prefixCls}-col`)},{default:s(()=>[o(v,{title:"\u6807\u7B7E",canExpan:!1},{default:s(()=>[(t(!0),l(c,null,u(a.tags,e=>(t(),_(y,{key:e,class:"mb-2"},{default:s(()=>[b(m(e),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),o(i,{span:8,class:n(`${a.prefixCls}-col`)},{default:s(()=>[o(v,{class:n(`${a.prefixCls}-top__team`),title:"\u56E2\u961F",canExpan:!1},{default:s(()=>[(t(!0),l(c,null,u(a.teams,(e,k)=>(t(),l("div",{key:k,class:n(`${a.prefixCls}-top__team-item`)},[o(d,{icon:e.icon,color:e.color},null,8,["icon","color"]),p("span",null,m(e.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),p("div",{class:n(`${a.prefixCls}-bottom`)},[o(I,null,{default:s(()=>[(t(!0),l(c,null,u(a.achieveList,e=>(t(),_(E,{key:e.key,tab:e.name},{default:s(()=>[(t(),_(A(e.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)}var Ta=B(J,[["render",Q],["__scopeId","data-v-52b05e1a"]]);export{Ta as default};
