var c=(e,r,t)=>new Promise((n,o)=>{var i=a=>{try{s(t.next(a))}catch(p){o(p)}},d=a=>{try{s(t.throw(a))}catch(p){o(p)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(i,d);s((t=t.apply(e,r)).next())});import{u as f}from"./useScript.951fa0f0.js";import{ap as u,a as l,s as m,aA as h,o as w,h as M,bk as _,ad as y,i as A}from"./index.f8b6fa94.js";const b="https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b",g=l({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=m(null),{toPromise:r}=f({src:b});function t(){return c(this,null,function*(){yield r(),yield y();const n=A(e);if(!n)return;const o=window.AMap;new o.Map(n,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})})}return h(()=>{t()}),{wrapRef:e}}});function k(e,r,t,n,o,i){return w(),M("div",{ref:"wrapRef",style:_({height:e.height,width:e.width})},null,4)}var x=u(g,[["render",k]]);export{x as default};
