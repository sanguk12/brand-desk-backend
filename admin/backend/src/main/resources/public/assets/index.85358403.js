var f=(t,l,e)=>new Promise((p,r)=>{var s=o=>{try{i(e.next(o))}catch(n){r(n)}},a=o=>{try{i(e.throw(o))}catch(n){r(n)}},i=o=>o.done?p(o.value):Promise.resolve(o.value).then(s,a);i((e=e.apply(t,l)).next())});import{ap as T,a as h,c as _,ar as c,o as y,h as S,n as d,y as C,z as w,t as B,D}from"./index.f8b6fa94.js";import{B as F}from"./TableImg.9ee05584.js";import{T as R}from"./index.26a558af.js";import{u as k}from"./useTable.1012c757.js";import{b as A}from"./index.0c1d45ad.js";import v from"./ContentModelModal.404c8c26.js";import{c as x}from"./ExtendFieldTable.d338af8b.js";import{g as z,d as I}from"./contentModel.d75448ba.js";import"./index.1423091e.js";import"./Checkbox.572a0527.js";import"./index.20e31dae.js";import"./index.961d34d0.js";import"./eagerComputed.d49f1c93.js";import"./BasicForm.eebb9e8d.js";/* empty css               *//* empty css              */import"./index.bec743a7.js";import"./index.e501ff06.js";import"./index.5c9fe55c.js";import"./index.12c7904d.js";import"./index.345349a2.js";import"./get.12156efd.js";import"./index.1efac556.js";import"./_baseEach.2d110e96.js";import"./_baseIteratee.07173297.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.c60a3e36.js";import"./index.65e8311b.js";import"./useRefs.25abb648.js";import"./Form.42748d5d.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./toInteger.443f55d3.js";import"./Col.b99e5aca.js";import"./useSize.3eb1ac1b.js";import"./index.5ddb8e93.js";import"./index.ae9da7c5.js";import"./useWindowSizeFn.268c75c1.js";import"./index.b3bb861d.js";import"./uniqBy.ed970345.js";import"./index.8ffde185.js";import"./useForm.74156ad2.js";import"./index.7cdcb74e.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./onMountedOrActivated.73153770.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";import"./uuid.2b29000c.js";import"./merge.a3bec796.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.53735e83.js";import"./FullscreenOutlined.8522ef3f.js";import"./index.29f29e0d.js";import"./scrollTo.7fe5bdbc.js";import"./index.55183d61.js";import"./index.a4095fd7.js";import"./index.c3665e07.js";import"./download.3a5cff84.js";import"./base64Conver.08b9f4ec.js";import"./inputTypeEnum.8d05b9f9.js";import"./v4.920e6786.js";const $=h({name:"ContentModelManagement",components:{BasicTable:F,CateTypeModal:v,TableAction:R},setup(){const{t}=_(),{createSuccessModal:l}=D();function e(){return f(this,null,function*(){return z()})}const[p,{openModal:r}]=A(),[s,{reload:a,expandAll:i,collapseAll:o}]=k({title:t("Content.contentModel.list"),isTreeTable:!0,api:e,fetchSetting:{listField:"list",totalField:"totalCount",sizeField:"pageSize",pageField:"pageIndex"},columns:x,pagination:!1,striped:!1,useSearchForm:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,rowKey:"id",actionColumn:{width:100,title:t("common.action"),dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function n(){r(!0,{isUpdate:!1})}function m(u){r(!0,{record:u,isUpdate:!0})}function g(u){return f(this,null,function*(){const M=yield I(u.id);l({title:t("common.info"),content:t("Content.contentModel.deleted")}),yield a()})}function b(){a()}return{t,expandAll:i,collapseAll:o,registerTable:s,registerModal:p,handleCreate:n,handleEdit:m,handleDelete:g,handleSuccess:b}}});function E(t,l,e,p,r,s){const a=c("a-button"),i=c("TableAction"),o=c("BasicTable"),n=c("CateTypeModal");return y(),S("div",null,[d(o,{onRegister:t.registerTable},{toolbar:C(()=>[d(a,{type:"primary",onClick:t.handleCreate},{default:C(()=>[w(B(t.t("Content.contentModel.add")),1)]),_:1},8,["onClick"])]),action:C(({record:m})=>[d(i,{actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,m)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"Deletion Confirm",confirm:t.handleDelete.bind(null,m)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),d(n,{onRegister:t.registerModal,onSuccess:t.handleSuccess,defaultFullscreen:!0},null,8,["onRegister","onSuccess"])])}var Pt=T($,[["render",E]]);export{Pt as default};