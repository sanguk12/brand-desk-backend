var u=(e,r,t)=>new Promise((o,n)=>{var s=a=>{try{p(t.next(a))}catch(c){n(c)}},i=a=>{try{p(t.throw(a))}catch(c){n(c)}},p=a=>a.done?o(a.value):Promise.resolve(a.value).then(s,i);p((t=t.apply(e,r)).next())});import{u as d}from"./useScript.6ebd8aa8.js";import{ap as l,a as f,s as m,aA as h,o as w,h as B,bk as _,ad as M,i as g}from"./index.0a8b89be.js";const v="https://api.map.baidu.com/getscript?v=3.0&ak=OaBvYmKX3pjF7YFUFeeBCeGdy9Zp7xB2&services=&t=20210201100830&s=1",y=f({name:"BaiduMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=m(null),{toPromise:r}=d({src:v});function t(){return u(this,null,function*(){yield r(),yield M();const o=g(e);if(!o)return;const n=window.BMap,s=new n.Map(o),i=new n.Point(116.404,39.915);s.centerAndZoom(i,15),s.enableScrollWheelZoom(!0)})}return h(()=>{t()}),{wrapRef:e}}});function k(e,r,t,o,n,s){return w(),B("div",{ref:"wrapRef",style:_({height:e.height,width:e.width})},null,4)}var $=l(y,[["render",k]]);export{$ as default};
