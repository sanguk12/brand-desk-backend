import{B as h}from"./TableImg.532f196d.js";import{T as k}from"./index.5a0c5bc8.js";import{u as C}from"./useTable.9784714c.js";import{a as w,ap as _,ar as r,o as E,h as D,n as u,y as c,z as T}from"./index.0a8b89be.js";import"./index.d06f97b4.js";import"./Checkbox.e21486b4.js";import"./index.281aa2ea.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./BasicForm.90108631.js";/* empty css               *//* empty css              */import"./index.8eadf802.js";import"./index.5485e619.js";import"./index.bd809198.js";import"./index.1b5c222a.js";import"./index.f5f3d84b.js";import"./get.40773c6b.js";import"./index.14314bc3.js";import"./_baseEach.0f4dbd6f.js";import"./_baseIteratee.b2478045.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.b8e551ed.js";import"./index.ac3b1fda.js";import"./useRefs.f7f322ba.js";import"./Form.b63e2253.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";import"./index.14059c69.js";import"./index.04c8d476.js";import"./useWindowSizeFn.64599f54.js";import"./index.25fd638a.js";import"./uniqBy.7ccff7b8.js";import"./index.b536e7c7.js";import"./FullscreenOutlined.9f59f3fc.js";import"./index.624fc280.js";import"./useForm.14189227.js";import"./index.c388f747.js";import"./index.61a163e2.js";import"./index.2c6c45b9.js";import"./onMountedOrActivated.b04887f0.js";import"./useContentViewHeight.2aaec145.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.01edd6fb.js";import"./transButton.4e1319c6.js";import"./uuid.2b29000c.js";import"./merge.9e7c3f63.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b7e813f0.js";import"./index.4a0da81f.js";import"./scrollTo.9228901a.js";import"./index.d4ddb90b.js";import"./index.b2d27a9d.js";import"./index.bacabee8.js";import"./download.edb4e6af.js";import"./base64Conver.08b9f4ec.js";const g=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",editRow:!0},{title:"\u5DE5\u53F7",dataIndex:"no",editRow:!0},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"dept",editRow:!0}],B=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],N=w({components:{BasicTable:h,TableAction:k},setup(){const[n,{getDataSource:i}]=C({columns:g,showIndexColumn:!1,dataSource:B,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function a(t){var o;(o=t.onEdit)==null||o.call(t,!0)}function l(t){var o;if((o=t.onEdit)==null||o.call(t,!1),t.isNew){const e=i(),f=e.findIndex(b=>b.key===t.key);e.splice(f,1)}}function s(t){var o;(o=t.onEdit)==null||o.call(t,!1,!0)}function d(t){}function p(){const t=i(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(o)}function m(t,o){return t.editable?[{label:"\u4FDD\u5B58",onClick:s.bind(null,t,o)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,o)}}]:[{label:"\u7F16\u8F91",onClick:a.bind(null,t)},{label:"\u5220\u9664"}]}return{registerTable:n,handleEdit:a,createActions:m,handleAdd:p,getDataSource:i,handleEditChange:d}}}),x=T(" \u65B0\u589E\u6210\u5458 ");function F(n,i,a,l,s,d){const p=r("TableAction"),m=r("BasicTable"),t=r("a-button");return E(),D("div",null,[u(m,{onRegister:n.registerTable,onEditChange:n.handleEditChange},{action:c(({record:o,column:e})=>[u(p,{actions:n.createActions(o,e)},null,8,["actions"])]),_:1},8,["onRegister","onEditChange"]),u(t,{block:"",class:"mt-5",type:"dashed",onClick:n.handleAdd},{default:c(()=>[x]),_:1},8,["onClick"])])}var vt=_(N,[["render",F]]);export{vt as default};
