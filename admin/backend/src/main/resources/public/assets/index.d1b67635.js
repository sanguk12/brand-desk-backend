import{ap as $,a as P,b4 as k,ar as a,o as l,j as _,y as e,q as i,m as t,n as r,h as d,au as w,F as y,f7 as A,f8 as L,k as m,t as p,z as f}from"./index.9b68f3a5.js";/* empty css              */import{L as c}from"./index.15a304c5.js";import{P as S}from"./index.e8a8c5ca.js";import{cardList as N}from"./data.a96915dc.js";import{P as V}from"./index.27ebe66e.js";import{R as v}from"./index.b9fae046.js";import{C as h}from"./index.b8e26f6f.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./Col.5a4e1b28.js";import"./eagerComputed.4def26ea.js";import"./useRefs.77e757f9.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./useSize.48fdc38e.js";import"./onMountedOrActivated.f9a7813e.js";import"./useWindowSizeFn.d868051d.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";const z=P({components:{Icon:k,Progress:S,PageWrapper:V,[c.name]:c,[c.Item.name]:c.Item,AListItemMeta:c.Item.Meta,[v.name]:v,[h.name]:h},setup(){return{prefixCls:"list-basic",list:N,pagination:{show:!0,pageSize:3}}}}),n=o=>(A("data-v-a313e102"),o=o(),L(),o),W=n(()=>t("div",null,"\u6211\u7684\u5F85\u529E",-1)),b=n(()=>t("p",null,"8\u4E2A\u4EFB\u52A1",-1)),M=n(()=>t("div",null,"\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4",-1)),R=n(()=>t("p",null,"32\u5206\u949F",-1)),j=n(()=>t("div",null,"\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570",-1)),q=n(()=>t("p",null,"24\u4E2A\u4EFB\u52A1",-1)),D={key:0,class:"extra"},O={class:"description"},T={class:"info"},G=n(()=>t("span",null,"Owner",-1)),H=n(()=>t("span",null,"\u5F00\u59CB\u65F6\u95F4",-1)),J={class:"progress"};function K(o,Q,U,X,Y,Z){const u=a("a-col"),C=a("a-row"),g=a("Icon"),F=a("Progress"),I=a("a-list-item-meta"),x=a("a-list-item"),B=a("a-list"),E=a("PageWrapper");return l(),_(E,{class:i(o.prefixCls),title:"\u6807\u51C6\u5217\u8868"},{default:e(()=>[t("div",{class:i(`${o.prefixCls}__top`)},[r(C,{gutter:12},{default:e(()=>[r(u,{span:8,class:i(`${o.prefixCls}__top-col`)},{default:e(()=>[W,b]),_:1},8,["class"]),r(u,{span:8,class:i(`${o.prefixCls}__top-col`)},{default:e(()=>[M,R]),_:1},8,["class"]),r(u,{span:8,class:i(`${o.prefixCls}__top-col`)},{default:e(()=>[j,q]),_:1},8,["class"])]),_:1})],2),t("div",{class:i(`${o.prefixCls}__content`)},[r(B,{pagination:o.pagination},{default:e(()=>[(l(!0),d(y,null,w(o.list,s=>(l(),_(x,{key:s.id,class:"list"},{default:e(()=>[r(I,null,{avatar:e(()=>[s.icon?(l(),_(g,{key:0,class:"icon",icon:s.icon,color:s.color},null,8,["icon","color"])):m("",!0)]),title:e(()=>[t("span",null,p(s.title),1),s.extra?(l(),d("div",D,p(s.extra),1)):m("",!0)]),description:e(()=>[t("div",O,p(s.description),1),t("div",T,[t("div",null,[G,f(p(s.author),1)]),t("div",null,[H,f(p(s.datetime),1)])]),t("div",J,[r(F,{percent:s.percent,status:"active"},null,8,["percent"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["pagination"])],2)]),_:1},8,["class"])}var xt=$(z,[["render",K],["__scopeId","data-v-a313e102"]]);export{xt as default};