var C=(t,o,a)=>new Promise((f,p)=>{var m=n=>{try{r(a.next(n))}catch(i){p(i)}},s=n=>{try{r(a.throw(n))}catch(i){p(i)}},r=n=>n.done?f(n.value):Promise.resolve(n.value).then(m,s);r((a=a.apply(t,o)).next())});import{ap as A,a as E,c as U,v as F,ar as d,o as b,h as $,n as u,y as h,z as M,t as y,j as N,k as V,D as z}from"./index.0a8b89be.js";import{B as L}from"./TableImg.532f196d.js";import{T as j}from"./index.5a0c5bc8.js";import{u as K}from"./useTable.9784714c.js";import{b as I}from"./index.b536e7c7.js";import P from"./CateModal.f5b95a9e.js";import W from"./CateContentModal.7828d4f9.js";import{c as q,s as G}from"./cate.data.1209d360.js";import{b as H,d as J}from"./category.e8d5ece4.js";import{i as O}from"./isEmpty.2eac4d18.js";import"./index.d06f97b4.js";import"./Checkbox.e21486b4.js";import"./index.281aa2ea.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./BasicForm.90108631.js";/* empty css               *//* empty css              */import"./index.8eadf802.js";import"./index.5485e619.js";import"./index.bd809198.js";import"./index.1b5c222a.js";import"./index.f5f3d84b.js";import"./get.40773c6b.js";import"./index.14314bc3.js";import"./_baseEach.0f4dbd6f.js";import"./_baseIteratee.b2478045.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.b8e551ed.js";import"./index.ac3b1fda.js";import"./useRefs.f7f322ba.js";import"./Form.b63e2253.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";import"./index.14059c69.js";import"./index.04c8d476.js";import"./useWindowSizeFn.64599f54.js";import"./index.25fd638a.js";import"./uniqBy.7ccff7b8.js";import"./index.624fc280.js";import"./useForm.14189227.js";import"./index.c388f747.js";import"./index.61a163e2.js";import"./index.2c6c45b9.js";import"./onMountedOrActivated.b04887f0.js";import"./useContentViewHeight.2aaec145.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.01edd6fb.js";import"./transButton.4e1319c6.js";import"./uuid.2b29000c.js";import"./merge.9e7c3f63.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b7e813f0.js";import"./FullscreenOutlined.9f59f3fc.js";import"./index.4a0da81f.js";import"./scrollTo.9228901a.js";import"./index.d4ddb90b.js";import"./index.b2d27a9d.js";import"./index.bacabee8.js";import"./download.edb4e6af.js";import"./base64Conver.08b9f4ec.js";import"./contentModel.0170ba3d.js";import"./categoryType.435ace3d.js";import"./contentUtil.1c28a977.js";import"./inputTypeEnum.d9dff2a9.js";import"./upload.360b43d7.js";import"./index.f09ce687.js";const Q=E({name:"CateManagement",components:{BasicTable:L,CateModal:P,CateContentModal:W,TableAction:j},setup(){const{t}=U(),o=F({parentId:null,name:null,hidden:null}),{createSuccessModal:a}=z();function f(){return C(this,null,function*(){return new Promise(e=>C(this,null,function*(){const c=yield H(o);if(!O(c)){const v=c[0];o.cateId=v.parentId,o.parentCate=!1}e(c)}))})}const[p,{openModal:m}]=I(),[s,{openModal:r}]=I(),[n,{reload:i,expandAll:g,collapseAll:l}]=K({title:t("Content.cate.list"),isTreeTable:!1,api:f,columns:q,formConfig:{labelWidth:120,schemas:G},handleSearchInfoFn(e){return e},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,rowKey:"id",actionColumn:{width:115,title:t("common.action"),dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function S(){m(!0,{isUpdate:!1,record:{parentId:o.cateId}})}function w(e){m(!0,{record:e,isUpdate:!0})}function T(e){r(!0,{record:e,isUpdate:!0})}function k(e){return C(this,null,function*(){const c=yield J(e.id);a({title:t("common.info"),content:t("Content.cate.deleted")}),i()})}function _(){i()}function D(){i()}function R(){o.parentCate=!0,i()}function B(e){o.cateId=e.id,o.parentCate=!1,i()}return{t,expandAll:g,collapseAll:l,registerTable:n,registerModal:p,registerContentModal:s,handleCreate:S,handleEdit:w,handleContentEdit:T,handleDelete:k,handleSuccess:_,handleContentSuccess:D,handleUp:R,handleDown:B,searchInfo:o}}});function X(t,o,a,f,p,m){const s=d("a-button"),r=d("TableAction"),n=d("BasicTable"),i=d("CateModal"),g=d("CateContentModal");return b(),$("div",null,[u(n,{onRegister:t.registerTable},{toolbar:h(()=>[u(s,{type:"primary",onClick:t.handleCreate},{default:h(()=>[M(y(t.t("Content.cate.add")),1)]),_:1},8,["onClick"]),t.searchInfo.cateId?(b(),N(s,{key:0,type:"primary",preIcon:"bi:file-arrow-up",onClick:t.handleUp},{default:h(()=>[M(y(t.t("AccessControl.module.go_parent")),1)]),_:1},8,["onClick"])):V("",!0)]),action:h(({record:l})=>[u(r,{actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,l)},{icon:"el:file-edit-alt",onClick:t.handleContentEdit.bind(null,l),ifShow:l.typeId!=null},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"Deletion Confirm",confirm:t.handleDelete.bind(null,l)}},{icon:"bi:file-arrow-down",onClick:t.handleDown.bind(null,l)}]},null,8,["actions"])]),_:1},8,["onRegister"]),u(i,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"]),u(g,{onRegister:t.registerContentModal,onSuccess:t.handleContentSuccess},null,8,["onRegister","onSuccess"])])}var fe=A(Q,[["render",X]]);export{fe as default};