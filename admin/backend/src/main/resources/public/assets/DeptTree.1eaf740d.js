var p=(o,r,e)=>new Promise((a,s)=>{var c=t=>{try{i(e.next(t))}catch(l){s(l)}},n=t=>{try{i(e.throw(t))}catch(l){s(l)}},i=t=>t.done?a(t.value):Promise.resolve(t.value).then(c,n);i((e=e.apply(o,r)).next())});import{_ as m}from"./index.f12c8038.js";import{c as d}from"./dept.e04c0af6.js";import{ap as f,a as _,c as u,s as h,aA as D,ar as T,o as v,h as B,n as $}from"./index.f8b6fa94.js";import"./index.961d34d0.js";import"./eagerComputed.d49f1c93.js";import"./useContextMenu.7165a230.js";import"./index.bec743a7.js";import"./get.12156efd.js";const k=_({name:"DeptTree",components:{BasicTree:m},emits:["select"],setup(o,{emit:r}){const{t:e}=u(),a=h([]);function s(){return p(this,null,function*(){a.value=yield d()})}function c(n){r("select",n[0])}return D(()=>{s()}),{t:e,treeData:a,handleSelect:c}}}),w={class:"m-4 mr-0 overflow-hidden bg-white"};function S(o,r,e,a,s,c){const n=T("BasicTree");return v(),B("div",w,[$(n,{title:o.t("AccessControl.user.dept_list"),toolbar:"",search:"",clickRowToExpand:!1,treeData:o.treeData,fieldNames:{key:"id",title:"name"},onSelect:o.handleSelect},null,8,["title","treeData","onSelect"])])}var M=f(k,[["render",S]]);export{M as default};
