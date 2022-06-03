var M=(o,c,i)=>new Promise((n,l)=>{var u=e=>{try{t(i.next(e))}catch(r){l(r)}},a=e=>{try{t(i.throw(e))}catch(r){l(r)}},t=e=>e.done?n(e.value):Promise.resolve(e.value).then(u,a);t((i=i.apply(o,c)).next())});import{ap as _,a as S,c as w,ar as p,o as A,h as y,n as d,y as g,z as k,t as B,D as F}from"./index.9b68f3a5.js";import{B as v}from"./TableImg.56506859.js";import{T as D}from"./index.3604fdfb.js";import{u as E}from"./useTable.bd2598d0.js";import{g as z,d as I}from"./role.c49c087f.js";import{b as h}from"./index.c6d9e38a.js";import{R as $,c as x,s as N}from"./RoleModal.50428f8e.js";import U from"./RoleModuleModal.7820742c.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./BasicForm.6899d0a5.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./useWindowSizeFn.d868051d.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.b9fae046.js";import"./useForm.b2949832.js";import"./index.27ebe66e.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./onMountedOrActivated.f9a7813e.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";import"./uuid.2b29000c.js";import"./merge.f321b105.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.43914e4e.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.f93c2cff.js";import"./scrollTo.39f4a54d.js";import"./index.a3bc6812.js";import"./index.64609094.js";import"./index.54a0672f.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./index.44805738.js";import"./useContextMenu.49129f71.js";import"./pickDeep.63c4da24.js";import"./isEmpty.7bce0800.js";const V=S({name:"RoleManagement",components:{BasicTable:v,RoleModal:$,RoleModuleModal:U,TableAction:D},setup(){const{t:o}=w(),{createSuccessModal:c}=F(),[i,{openModal:n}]=h(),[l,{openModal:u}]=h(),[a,{reload:t,expandAll:e,collapseAll:r}]=E({title:o("AccessControl.role.list"),isTreeTable:!1,api:z,fetchSetting:{listField:"list",totalField:"totalCount",sizeField:"pageSize",pageField:"pageIndex"},columns:x,formConfig:{labelWidth:120,schemas:N},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,rowKey:"id",actionColumn:{width:100,title:o("common.action"),dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function f(){n(!0,{isUpdate:!1})}function s(m){n(!0,{record:m,isUpdate:!0})}function b(m){u(!0,{record:m})}function R(m){return M(this,null,function*(){const T=yield I(m.id);c({title:o("common.info"),content:o("AccessControl.role.deleted")}),yield t()})}function C(){t()}return{t:o,expandAll:e,collapseAll:r,registerTable:a,registerModal:i,registerRoleModuleModal:l,handleCreate:f,handleEdit:s,handleEditModule:b,handleDelete:R,handleSuccess:C}}});function K(o,c,i,n,l,u){const a=p("a-button"),t=p("TableAction"),e=p("BasicTable"),r=p("RoleModal"),f=p("RoleModuleModal");return A(),y("div",null,[d(e,{onRegister:o.registerTable},{toolbar:g(()=>[d(a,{type:"primary",onClick:o.handleCreate},{default:g(()=>[k(B(o.t("AccessControl.role.add")),1)]),_:1},8,["onClick"])]),action:g(({record:s})=>[d(t,{actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,s)},{icon:"ic:baseline-view-module",onClick:o.handleEditModule.bind(null,s)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"Deletion Confirm",confirm:o.handleDelete.bind(null,s)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),d(r,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"]),d(f,{onRegister:o.registerRoleModuleModal},null,8,["onRegister"])])}var ee=_(V,[["render",K]]);export{ee as default};