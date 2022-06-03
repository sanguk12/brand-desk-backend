import{a as bt,ac as y,W as yt,cL as g,aB as gt,M as c,n as t,c3 as pt,av as _t,cy as H,cM as ht,cN as Ct}from"./index.9b68f3a5.js";import"./index.4f96a025.js";import{R as p}from"./index.b9fae046.js";import{C as s}from"./index.b8e26f6f.js";import{T as J}from"./index.10106a95.js";var xt=J.TabPane,mt=function(){return{prefixCls:String,title:y.any,extra:y.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:y.any,tabList:{type:Array},tabBarExtraContent:y.any,activeTabKey:String,defaultActiveTabKey:String,cover:y.any,onTabChange:{type:Function}}},Tt=bt({name:"ACard",props:mt(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,X){var r=X.slots,C=yt("card",e),Y=C.prefixCls,Z=C.direction,K=C.size,tt=function(o){var i=o.map(function(d,f){return H(d)&&!ht(d)||!H(d)?t("li",{style:{width:"".concat(100/o.length,"%")},key:"action-".concat(f)},[t("span",null,[d])]):null});return i},at=function(o){var i;(i=e.onTabChange)===null||i===void 0||i.call(e,o)},et=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],i;return o.forEach(function(d){d&&Ct(d.type)&&d.type.__ANT_CARD_GRID&&(i=!0)}),i};return function(){var l,o,i,d,f,x,m,T,$=e.headStyle,nt=$===void 0?{}:$,k=e.bodyStyle,S=k===void 0?{}:k,j=e.loading,L=e.bordered,rt=L===void 0?!0:L,R=e.type,v=e.tabList,lt=e.hoverable,z=e.activeTabKey,ot=e.defaultActiveTabKey,D=e.tabBarExtraContent,G=D===void 0?g((i=r.tabBarExtraContent)===null||i===void 0?void 0:i.call(r)):D,N=e.title,B=N===void 0?g((d=r.title)===null||d===void 0?void 0:d.call(r)):N,w=e.extra,A=w===void 0?g((f=r.extra)===null||f===void 0?void 0:f.call(r)):w,I=e.actions,E=I===void 0?g((x=r.actions)===null||x===void 0?void 0:x.call(r)):I,O=e.cover,W=O===void 0?g((m=r.cover)===null||m===void 0?void 0:m.call(r)):O,_=gt((T=r.default)===null||T===void 0?void 0:T.call(r)),a=Y.value,it=(l={},c(l,"".concat(a),!0),c(l,"".concat(a,"-loading"),j),c(l,"".concat(a,"-bordered"),rt),c(l,"".concat(a,"-hoverable"),!!lt),c(l,"".concat(a,"-contain-grid"),et(_)),c(l,"".concat(a,"-contain-tabs"),v&&v.length),c(l,"".concat(a,"-").concat(K.value),K.value),c(l,"".concat(a,"-type-").concat(R),!!R),c(l,"".concat(a,"-rtl"),Z.value==="rtl"),l),dt=S.padding===0||S.padding==="0px"?{padding:"24px"}:void 0,u=t("div",{class:"".concat(a,"-loading-block")},null),ct=t("div",{class:"".concat(a,"-loading-content"),style:dt},[t(p,{gutter:8},{default:function(){return[t(s,{span:22},{default:function(){return[u]}})]}}),t(p,{gutter:8},{default:function(){return[t(s,{span:8},{default:function(){return[u]}}),t(s,{span:15},{default:function(){return[u]}})]}}),t(p,{gutter:8},{default:function(){return[t(s,{span:6},{default:function(){return[u]}}),t(s,{span:18},{default:function(){return[u]}})]}}),t(p,{gutter:8},{default:function(){return[t(s,{span:13},{default:function(){return[u]}}),t(s,{span:9},{default:function(){return[u]}})]}}),t(p,{gutter:8},{default:function(){return[t(s,{span:4},{default:function(){return[u]}}),t(s,{span:3},{default:function(){return[u]}}),t(s,{span:16},{default:function(){return[u]}})]}})]),M=z!==void 0,ut=(o={size:"large"},c(o,M?"activeKey":"defaultActiveKey",M?z:ot),c(o,"onChange",at),c(o,"class","".concat(a,"-head-tabs")),o),V,F=v&&v.length?t(J,ut,{default:function(){return[v.map(function(n){var U=n.tab,h=n.slots,q=h==null?void 0:h.tab;pt(!h,"Card","tabList slots is deprecated, Please use `customTab` instead.");var P=U!==void 0?U:r[q]?r[q](n):null;return P=_t(r,"customTab",n,function(){return[P]}),t(xt,{tab:P,key:n.key,disabled:n.disabled},null)})]},rightExtra:G?function(){return G}:null}):null;(B||A||F)&&(V=t("div",{class:"".concat(a,"-head"),style:nt},[t("div",{class:"".concat(a,"-head-wrapper")},[B&&t("div",{class:"".concat(a,"-head-title")},[B]),A&&t("div",{class:"".concat(a,"-extra")},[A])]),F]));var st=W?t("div",{class:"".concat(a,"-cover")},[W]):null,ft=t("div",{class:"".concat(a,"-body"),style:S},[j?ct:_]),vt=E&&E.length?t("ul",{class:"".concat(a,"-actions")},[tt(E)]):null;return t("div",{class:it,ref:"cardContainerRef"},[V,st,_&&_.length?ft:null,vt])}}}),Kt=Tt;export{Kt as C};
