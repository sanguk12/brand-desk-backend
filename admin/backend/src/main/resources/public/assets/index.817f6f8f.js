var f=(t,p,o)=>new Promise((s,n)=>{var m=e=>{try{i(o.next(e))}catch(r){n(r)}},a=e=>{try{i(o.throw(e))}catch(r){n(r)}},i=e=>e.done?s(e.value):Promise.resolve(e.value).then(m,a);i((o=o.apply(t,p)).next())});import{ap as b,a as h,c as _,ar as c,o as M,h as S,n as d,y as T,z as w,t as B,D}from"./index.9b68f3a5.js";import{B as F}from"./TableImg.56506859.js";import{T as R}from"./index.3604fdfb.js";import{u as k}from"./useTable.bd2598d0.js";import{b as A}from"./index.c6d9e38a.js";import v from"./CateTypeModal.bd8340eb.js";import{c as x}from"./ExtendFieldTable.e691f278.js";import{a as z,d as I}from"./categoryType.41fd9b3f.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./BasicForm.6899d0a5.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./useWindowSizeFn.d868051d.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.b9fae046.js";import"./useForm.b2949832.js";import"./index.27ebe66e.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./onMountedOrActivated.f9a7813e.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";import"./uuid.2b29000c.js";import"./merge.f321b105.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.43914e4e.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.f93c2cff.js";import"./scrollTo.39f4a54d.js";import"./index.a3bc6812.js";import"./index.64609094.js";import"./index.54a0672f.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./inputTypeEnum.e562aefd.js";import"./v4.8b5f0c91.js";const $=h({name:"CateTypeManagement",components:{BasicTable:F,CateTypeModal:v,TableAction:R},setup(){const{t}=_(),{createSuccessModal:p}=D();function o(){return f(this,null,function*(){return z()})}const[s,{openModal:n}]=A(),[m,{reload:a,expandAll:i,collapseAll:e}]=k({title:t("Content.cateType.list"),isTreeTable:!1,api:o,fetchSetting:{listField:"list",totalField:"totalCount",sizeField:"pageSize",pageField:"pageIndex"},columns:x,pagination:!1,striped:!1,useSearchForm:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,rowKey:"id",actionColumn:{width:100,title:t("common.action"),dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function r(){n(!0,{isUpdate:!1})}function l(u){n(!0,{record:u,isUpdate:!0})}function g(u){return f(this,null,function*(){const y=yield I(u.id);p({title:t("common.info"),content:t("Content.cateType.deleted")}),a()})}function C(){a()}return{t,expandAll:i,collapseAll:e,registerTable:m,registerModal:s,handleCreate:r,handleEdit:l,handleDelete:g,handleSuccess:C}}});function E(t,p,o,s,n,m){const a=c("a-button"),i=c("TableAction"),e=c("BasicTable"),r=c("CateTypeModal");return M(),S("div",null,[d(e,{onRegister:t.registerTable},{toolbar:T(()=>[d(a,{type:"primary",onClick:t.handleCreate},{default:T(()=>[w(B(t.t("Content.cateType.add")),1)]),_:1},8,["onClick"])]),action:T(({record:l})=>[d(i,{actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,l)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"Deletion Confirm",confirm:t.handleDelete.bind(null,l)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),d(r,{onRegister:t.registerModal,onSuccess:t.handleSuccess,defaultFullscreen:!0},null,8,["onRegister","onSuccess"])])}var Pt=b($,[["render",E]]);export{Pt as default};
