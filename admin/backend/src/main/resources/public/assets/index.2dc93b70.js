import{B as f}from"./TableImg.9ee05584.js";import{T as h}from"./index.26a558af.js";import{u as b}from"./useTable.1012c757.js";import{a as g}from"./system.cc6d32e4.js";import{u as T}from"./index.0631543e.js";import{M as _,c as C,s as w}from"./MenuDrawer.ca9c9697.js";import{ap as S,a as D,ar as t,o as M,h as k,n as r,y as p,ad as B,z as F}from"./index.f8b6fa94.js";import"./index.1423091e.js";import"./Checkbox.572a0527.js";import"./index.20e31dae.js";import"./index.961d34d0.js";import"./eagerComputed.d49f1c93.js";import"./BasicForm.eebb9e8d.js";/* empty css               *//* empty css              */import"./index.bec743a7.js";import"./index.e501ff06.js";import"./index.5c9fe55c.js";import"./index.12c7904d.js";import"./index.345349a2.js";import"./get.12156efd.js";import"./index.1efac556.js";import"./_baseEach.2d110e96.js";import"./_baseIteratee.07173297.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.c60a3e36.js";import"./index.65e8311b.js";import"./useRefs.25abb648.js";import"./Form.42748d5d.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./toInteger.443f55d3.js";import"./Col.b99e5aca.js";import"./useSize.3eb1ac1b.js";import"./index.5ddb8e93.js";import"./index.ae9da7c5.js";import"./useWindowSizeFn.268c75c1.js";import"./index.b3bb861d.js";import"./uniqBy.ed970345.js";import"./index.0c1d45ad.js";import"./FullscreenOutlined.8522ef3f.js";import"./index.8ffde185.js";import"./useForm.74156ad2.js";import"./index.7cdcb74e.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./onMountedOrActivated.73153770.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";import"./uuid.2b29000c.js";import"./merge.a3bec796.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.53735e83.js";import"./index.29f29e0d.js";import"./scrollTo.7fe5bdbc.js";import"./index.55183d61.js";import"./index.a4095fd7.js";import"./index.c3665e07.js";import"./download.3a5cff84.js";import"./base64Conver.08b9f4ec.js";import"./index.8f048939.js";const R=D({name:"MenuManagement",components:{BasicTable:f,MenuDrawer:_,TableAction:h},setup(){const[e,{openDrawer:i}]=T(),[c,{reload:l,expandAll:u}]=b({title:"menu list",api:g,columns:C,formConfig:{labelWidth:120,schemas:w},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"Operate",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function d(){i(!0,{isUpdate:!1})}function n(o){i(!0,{record:o,isUpdate:!0})}function a(o){}function m(){l()}function s(){B(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:n,handleDelete:a,handleSuccess:m,onFetchSuccess:s}}}),A=F(" Add menu ");function v(e,i,c,l,u,d){const n=t("a-button"),a=t("TableAction"),m=t("BasicTable"),s=t("MenuDrawer");return M(),k("div",null,[r(m,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:p(()=>[A]),_:1},8,["onClick"])]),action:p(({record:o})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"Confirm delete",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),r(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Le=S(R,[["render",v]]);export{Le as default};