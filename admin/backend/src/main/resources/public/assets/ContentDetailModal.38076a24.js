var d=(a,t,e)=>new Promise((n,r)=>{var p=o=>{try{s(e.next(o))}catch(c){r(c)}},i=o=>{try{s(e.throw(o))}catch(c){r(c)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(p,i);s((e=e.apply(a,t)).next())});import{B as m,a as f}from"./index.0c1d45ad.js";import{ap as u,a as _,c as M,s as w,ar as l,o as v,j as B,y as J,n as g}from"./index.f8b6fa94.js";import{J as C}from"./index.ae9da7c5.js";import"./useWindowSizeFn.268c75c1.js";import"./FullscreenOutlined.8522ef3f.js";const D=_({name:"JSONViewModal",components:{BasicModal:m,JsonPreview:C},setup(){const{t:a}=M(),t=w({}),[e]=f(n=>d(this,null,function*(){t.value=JSON.parse(n.record.content)}));return{t:a,registerModal:e,jsonData:t}}});function $(a,t,e,n,r,p){const i=l("JsonPreview"),s=l("BasicModal");return v(),B(s,{onRegister:a.registerModal,title:"Log Detail View",width:"50%"},{default:J(()=>[g(i,{data:a.jsonData},null,8,["data"])]),_:1},8,["onRegister"])}var x=u(D,[["render",$]]);export{x as default};