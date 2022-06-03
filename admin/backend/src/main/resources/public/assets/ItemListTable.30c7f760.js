var y=Object.defineProperty,P=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var I=(t,o,n)=>o in t?y(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,w=(t,o)=>{for(var n in o||(o={}))L.call(o,n)&&I(t,n,o[n]);if(b)for(var n of b(o))k.call(o,n)&&I(t,n,o[n]);return t},x=(t,o)=>P(t,A(o));var S=(t,o,n)=>new Promise((d,c)=>{var m=i=>{try{r(n.next(i))}catch(l){c(l)}},u=i=>{try{r(n.throw(i))}catch(l){c(l)}},r=i=>i.done?d(i.value):Promise.resolve(i.value).then(m,u);r((n=n.apply(t,o)).next())});import{B}from"./TableImg.56506859.js";import{T as N}from"./index.3604fdfb.js";import{u as Y}from"./useTable.bd2598d0.js";import{c as _,ap as F,a as W,s as g,X as $,ar as f,o as j,h as M,n as h,y as C,z as q,t as E,ad as H,i as O}from"./index.9b68f3a5.js";import{c as V,v as T}from"./v4.8b5f0c91.js";const{t:e}=_(),ot=[{title:e("Content.dict.id"),dataIndex:"id",width:50},{title:e("Content.dict.name"),dataIndex:"name",width:150,align:"left"},{title:e("Content.dict.code"),dataIndex:"code",width:150,align:"left"},{title:e("Content.dict.parentId"),dataIndex:"parentId",width:120},{title:e("Content.dict.parentData"),dataIndex:"parentData",width:120},{title:e("Content.dict.multiple"),dataIndex:"multiple",width:120,customRender:({record:t})=>~~t.multiple===1?"Y":"N"},{title:e("Content.dict.hasChild"),dataIndex:"hasChild",width:120,customRender:({record:t})=>~~t.hasChild===1?"Y":"N"},{title:e("Content.dict.createDate"),dataIndex:"createDate",format:"date|YYYY-MM-DD HH:mm:ss",width:180}],it=[{field:"name",label:e("Content.dict.name"),component:"Input",colProps:{span:8}},{field:"code",label:e("Content.dict.code"),component:"Input",colProps:{span:8}}];function at(){return[{field:"id",label:e("Content.dict.id"),component:"Input",show:!1},{field:"parentId",label:e("Content.dict.parentId"),component:"Input",show:!1},{field:"parentData",label:e("Content.dict.parentData"),component:"Input",show:!1},{field:"code",label:e("Content.dict.code"),labelWidth:200,component:"Input",required:!0},{field:"name",label:e("Content.dict.name"),labelWidth:200,component:"Input"},{field:"multiple",component:"Checkbox",label:e("Content.dict.multiple"),labelWidth:200,colProps:{span:12}},{field:"hasChild",component:"Checkbox",label:e("Content.dict.hasChild"),labelWidth:200,colProps:{span:12}},{field:"",component:"Divider",label:"",colProps:{span:24}},{field:"itemList",component:"Input",label:e("Content.cateType.itemList"),colSlot:"itemList",colProps:{span:24}}]}function dt(t){return{field:"code",label:e("Content.dict.code"),labelWidth:200,component:"Input",required:!0,dynamicRules:({})=>[{required:!0,validator:(n,d)=>S(this,null,function*(){return d?(yield V(d,t))?Promise.resolve():Promise.reject(e("common.exist")):Promise.reject(e("common.not_empty"))})}]}}const z=[{title:e("Content.dict.item.uuid"),dataIndex:"uuid",editComponent:"Input",ifShow:!1},{title:e("Content.dict.item.id"),dataIndex:"id",editComponent:"Input",ifShow:!1},{title:e("Content.dict.item.parentId"),dataIndex:"parentId",editComponent:"Input",ifShow:!1},{title:e("Content.dict.item.parentData"),dataIndex:"parentData",editComponent:"Input",ifShow:!1},{title:e("Content.dict.item.value"),dataIndex:"value",editRow:!0,editComponent:"Input",align:"left",editRule:!0,width:100},{title:e("Content.dict.item.text"),dataIndex:"text",editRow:!0,editComponent:"Input",align:"left",editRule:!0,width:100},{title:e("Content.dict.item.sort"),dataIndex:"sort",editComponent:"InputNumber",width:100,editRow:!0}],K=W({components:{BasicTable:B,TableAction:N},props:{value:Object,hasChild:{type:Boolean,default:!1}},emits:["add-child"],setup(t,{emit:o}){const{t:n}=_(),d=g(t.value),c=g(null),[m,{reload:u,setTableData:r}]=Y({title:n("Content.dict.item_list"),titleHelpMessage:[n("Content.dict.item_list_desc")],dataSource:d,columns:z,showIndexColumn:!1,showTableSetting:!1,tableSetting:{fullScreen:!0},rowKey:"uuid",actionColumn:{width:100,title:n("common.action"),dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});$(()=>t.value,a=>{const p=a||[];p.map(s=>{s.editRow=!0,s.editable=!0,s.uuid=T()}),d.value=p,r(d.value),u()});function i(){const a=O(c);if(!a)throw new Error("tableAction is null");return a}function l(){i().insertTableDataRecord({id:null,editRow:!0,editable:!0,uuid:T()}),H(()=>{const a=i().getDataSource();a[a.length-1].onEdit(!0)})}function D(a){i().deleteTableDataRecord(a.uuid)}function v(a){o("add-child",a.id)}function R(){return i().getDataSource().map(function(s){return x(w({},s.editValueRefs),{id:s.id})})}return{t:n,itemTableRef:c,registerTable:m,itemList:d,validate:R,handleDelete:D,addNewField:l,handleAddChild:v}}}),X={class:"p-4"};function G(t,o,n,d,c,m){const u=f("a-button"),r=f("TableAction"),i=f("BasicTable");return j(),M("div",X,[h(i,{onRegister:t.registerTable,ref:"itemTableRef",pagination:!1},{toolbar:C(()=>[h(u,{type:"primary",onClick:t.addNewField},{default:C(()=>[q(E(t.t("Content.dict.add_row")),1)]),_:1},8,["onClick"])]),action:C(({record:l})=>[h(r,{actions:[{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"Deletion Confirm",confirm:t.handleDelete.bind(null,l)}},{icon:"carbon:parent-child",color:"error",ifShow:t.hasChild&&l.id!=null,popConfirm:{title:"Add Child",confirm:t.handleAddChild.bind(null,l)}}]},null,8,["actions"])]),_:1},8,["onRegister"])])}var J=F(K,[["render",G]]),lt=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{J as I,dt as a,lt as b,ot as c,at as g,it as s};