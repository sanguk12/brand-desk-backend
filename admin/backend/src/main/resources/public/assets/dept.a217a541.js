var p=(s,t,a)=>new Promise((y,i)=>{var l=e=>{try{n(a.next(e))}catch(c){i(c)}},g=e=>{try{n(a.throw(e))}catch(c){i(c)}},n=e=>e.done?y(e.value):Promise.resolve(e.value).then(l,g);n((a=a.apply(s,t)).next())});import{dz as r,fu as o}from"./index.0a8b89be.js";const f=s=>r.get({url:"/api/sysDept/list",params:s}),d=s=>r.get({url:"/api/sysDept/tree",params:s});function m(s){return p(this,null,function*(){const t=yield o();return r.post({url:"/api/sysDept/save",data:s,params:{_csrf:t}},{errorMessageMode:"none"})})}function v(s){return p(this,null,function*(){const t=yield o();return r.post({url:"/api/sysDept/delete",params:{id:s,_csrf:t}})})}const w=s=>r.get({url:"/api/sysDept/categoryList",params:s}),C=(s,t)=>p(void 0,null,function*(){const a=yield o();r.post({url:"/api/sysDept/saveCategory",data:{deptId:s,cateList:t},params:{_csrf:a}})}),_=(s,t)=>p(void 0,null,function*(){const a=yield o();r.post({url:"/api/sysDept/saveOwnAllCategory",params:{deptId:s,ownsAllCategory:t,_csrf:a}})});export{w as a,_ as b,d as c,m as d,v as e,f as g,C as s};