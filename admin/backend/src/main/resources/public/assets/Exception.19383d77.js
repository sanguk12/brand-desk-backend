import{a as N,aU as e,s as O,aV as R,aW as S,aX as A,b as v,f,i as s,aY as d,n as r,B as G,c as k}from"./index.f8b6fa94.js";import{R as P}from"./index.bedb9942.js";var C="/assets/no-data.f7e550cc.svg",D="/assets/net-error.f2a43b32.svg",I=N({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(a){const n=O(new Map),{query:p}=R(),o=S(),c=A(),{t}=k(),{prefixCls:x}=v("app-exception-page"),E=f(()=>{const{status:l}=p,{status:i}=a;return Number(l)||i}),m=f(()=>s(n).get(s(E))),T=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(n).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:a.full?T:u,handler:()=>a.full?o(d.BASE_LOGIN):o()}),s(n).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:a.full?T:u,handler:()=>a.full?o(d.BASE_LOGIN):o()}),s(n).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(n).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:C}),s(n).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:D}),()=>{const{title:l,subTitle:i,btnText:b,icon:_,handler:g,status:y}=s(m)||{};return r(P,{class:x,status:y,title:a.title||l,"sub-title":a.subTitle||i},{extra:()=>b&&r(G,{type:"primary",onClick:g},{default:()=>b}),icon:()=>_?r("img",{src:_},null):null})}}});export{I as default};
