var u=(e,o,i)=>new Promise((d,s)=>{var p=n=>{try{r(i.next(n))}catch(a){s(a)}},l=n=>{try{r(i.throw(n))}catch(a){s(a)}},r=n=>n.done?d(n.value):Promise.resolve(n.value).then(p,l);r((i=i.apply(e,o)).next())});import{ap as A,a as _,c as D,v as B,ar as f,o as C,h as v,n as h,y as b,z as g,t as I,j as R,k as E,D as F}from"./index.0a8b89be.js";import{B as U}from"./TableImg.532f196d.js";import{T as $}from"./index.5a0c5bc8.js";import{u as N}from"./useTable.9784714c.js";import{b as V}from"./index.b536e7c7.js";import{M as z,c as L,s as j,g as K,d as P}from"./ModuleModal.c54ad8f9.js";import{i as W}from"./isEmpty.2eac4d18.js";import"./index.d06f97b4.js";import"./Checkbox.e21486b4.js";import"./index.281aa2ea.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./BasicForm.90108631.js";/* empty css               *//* empty css              */import"./index.8eadf802.js";import"./index.5485e619.js";import"./index.bd809198.js";import"./index.1b5c222a.js";import"./index.f5f3d84b.js";import"./get.40773c6b.js";import"./index.14314bc3.js";import"./_baseEach.0f4dbd6f.js";import"./_baseIteratee.b2478045.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.b8e551ed.js";import"./index.ac3b1fda.js";import"./useRefs.f7f322ba.js";import"./Form.b63e2253.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";import"./index.14059c69.js";import"./index.04c8d476.js";import"./useWindowSizeFn.64599f54.js";import"./index.25fd638a.js";import"./uniqBy.7ccff7b8.js";import"./index.624fc280.js";import"./useForm.14189227.js";import"./index.c388f747.js";import"./index.61a163e2.js";import"./index.2c6c45b9.js";import"./onMountedOrActivated.b04887f0.js";import"./useContentViewHeight.2aaec145.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.01edd6fb.js";import"./transButton.4e1319c6.js";import"./uuid.2b29000c.js";import"./merge.9e7c3f63.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b7e813f0.js";import"./FullscreenOutlined.9f59f3fc.js";import"./index.4a0da81f.js";import"./scrollTo.9228901a.js";import"./index.d4ddb90b.js";import"./index.b2d27a9d.js";import"./index.bacabee8.js";import"./download.edb4e6af.js";import"./base64Conver.08b9f4ec.js";const q=_({name:"ModuleManagement",components:{BasicTable:U,ModuleModal:z,TableAction:$},setup(){const{t:e}=D(),o=B({id:null,type:null,hidden:null,parentId:null,parent:null}),{createSuccessModal:i}=F();function d(){return u(this,null,function*(){return new Promise(t=>u(this,null,function*(){const c=yield K(o);if(!W(c)){const S=c[0];o.parentId=S.parentId,o.parentCate=!1}t(c)}))})}const[s,{openModal:p}]=V(),[l,{reload:r,expandAll:n,collapseAll:a}]=N({title:e("AccessControl.module.list"),isTreeTable:!1,api:d,columns:L,formConfig:{labelWidth:120,schemas:j},handleSearchInfoFn(t){return t},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,rowKey:"id",actionColumn:{width:100,title:e("common.action"),dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function m(){p(!0,{isUpdate:!1,record:{parentId:o.parentId}})}function M(t){t.parentId=o.parentId,p(!0,{record:t,isUpdate:!0})}function y(t){return u(this,null,function*(){const c=yield P(t.id);i({title:e("common.info"),content:e("AccessControl.module.deleted")}),r()})}function T(){r()}function w(t){o.parent=!0,r()}function k(t){o.parentId=t.id,o.parent=!1,r()}return{t:e,expandAll:n,collapseAll:a,registerTable:l,registerModal:s,handleCreate:m,handleEdit:M,handleDelete:y,handleSuccess:T,handleUp:w,handleDown:k,searchInfo:o}}});function G(e,o,i,d,s,p){const l=f("a-button"),r=f("TableAction"),n=f("BasicTable"),a=f("ModuleModal");return C(),v("div",null,[h(n,{onRegister:e.registerTable,searchInfo:e.searchInfo},{toolbar:b(()=>[h(l,{type:"primary",onClick:e.handleCreate},{default:b(()=>[g(I(e.t("AccessControl.module.add")),1)]),_:1},8,["onClick"]),e.searchInfo.parentId?(C(),R(l,{key:0,type:"primary",preIcon:"bi:file-arrow-up",onClick:e.handleUp},{default:b(()=>[g(I(e.t("AccessControl.module.go_parent")),1)]),_:1},8,["onClick"])):E("",!0)]),action:b(({record:m})=>[h(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,m)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"Deletion Confirm",confirm:e.handleDelete.bind(null,m)}},{icon:"bi:file-arrow-down",onClick:e.handleDown.bind(null,m)}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),h(a,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var eo=A(q,[["render",G]]);export{eo as default};