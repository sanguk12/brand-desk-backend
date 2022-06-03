var u=(t,e,r)=>new Promise((d,p)=>{var m=o=>{try{i(r.next(o))}catch(a){p(a)}},l=o=>{try{i(r.throw(o))}catch(a){p(a)}},i=o=>o.done?d(o.value):Promise.resolve(o.value).then(m,l);i((r=r.apply(t,e)).next())});import{ap as M,a as _,c as F,v as B,ar as f,o as C,h as v,n as h,y as g,z as b,t as y,j as A,k as R,D as z}from"./index.0a8b89be.js";import{B as E}from"./TableImg.532f196d.js";import{T as U}from"./index.5a0c5bc8.js";import{u as $}from"./useTable.9784714c.js";import{b as N}from"./index.b536e7c7.js";import V from"./DictModal.2fc4a891.js";import{c as j,s as K}from"./ItemListTable.a0289a66.js";import{d as L}from"./category.e8d5ece4.js";import{d as P}from"./v4.3982541b.js";import{i as W}from"./isEmpty.2eac4d18.js";import"./index.d06f97b4.js";import"./Checkbox.e21486b4.js";import"./index.281aa2ea.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./BasicForm.90108631.js";/* empty css               *//* empty css              */import"./index.8eadf802.js";import"./index.5485e619.js";import"./index.bd809198.js";import"./index.1b5c222a.js";import"./index.f5f3d84b.js";import"./get.40773c6b.js";import"./index.14314bc3.js";import"./_baseEach.0f4dbd6f.js";import"./_baseIteratee.b2478045.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.b8e551ed.js";import"./index.ac3b1fda.js";import"./useRefs.f7f322ba.js";import"./Form.b63e2253.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";import"./index.14059c69.js";import"./index.04c8d476.js";import"./useWindowSizeFn.64599f54.js";import"./index.25fd638a.js";import"./uniqBy.7ccff7b8.js";import"./index.624fc280.js";import"./useForm.14189227.js";import"./index.c388f747.js";import"./index.61a163e2.js";import"./index.2c6c45b9.js";import"./onMountedOrActivated.b04887f0.js";import"./useContentViewHeight.2aaec145.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.01edd6fb.js";import"./transButton.4e1319c6.js";import"./uuid.2b29000c.js";import"./merge.9e7c3f63.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b7e813f0.js";import"./FullscreenOutlined.9f59f3fc.js";import"./index.4a0da81f.js";import"./scrollTo.9228901a.js";import"./index.d4ddb90b.js";import"./index.b2d27a9d.js";import"./index.bacabee8.js";import"./download.edb4e6af.js";import"./base64Conver.08b9f4ec.js";const q=_({name:"DictManagement",components:{BasicTable:E,DictModal:V,TableAction:U},setup(){const{t}=F(),e=B({parent:!1,parentId:null,name:null,code:null}),{createSuccessModal:r}=z();function d(){return u(this,null,function*(){return new Promise(n=>u(this,null,function*(){const c=yield P(e);if(!W(c.list)){const k=c.list[0];e.parentId=k.parentId,e.parent=!1}n(c)}))})}const[p,{openModal:m}]=N(),[l,{reload:i,expandAll:o,collapseAll:a}]=$({title:t("Content.dict.list"),isTreeTable:!1,api:d,columns:j,formConfig:{labelWidth:120,schemas:K},fetchSetting:{listField:"list",totalField:"totalCount",sizeField:"pageSize",pageField:"pageIndex"},handleSearchInfoFn(n){return n},pagination:!0,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,rowKey:"id",actionColumn:{width:115,title:t("common.action"),dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function s(){m(!0,{isUpdate:!1,record:{parentId:e.cateId}})}function I(n){m(!0,{record:n,isUpdate:!0})}function w(n){return u(this,null,function*(){const c=yield L(n.id);r({title:t("common.info"),content:t("Content.dict.deleted")}),yield i()})}function D(){i()}function S(){e.parent=!0,i()}function T(n){e.parentId=n.id,e.parent=!1,i()}return{t,expandAll:o,collapseAll:a,registerTable:l,registerModal:p,handleCreate:s,handleEdit:I,handleDelete:w,handleSuccess:D,handleUp:S,handleDown:T,searchInfo:e}}});function x(t,e,r,d,p,m){const l=f("a-button"),i=f("TableAction"),o=f("BasicTable"),a=f("DictModal");return C(),v("div",null,[h(o,{onRegister:t.registerTable},{toolbar:g(()=>[h(l,{type:"primary",onClick:t.handleCreate},{default:g(()=>[b(y(t.t("Content.dict.add")),1)]),_:1},8,["onClick"]),t.searchInfo.parentId?(C(),A(l,{key:0,type:"primary",preIcon:"bi:file-arrow-up",onClick:t.handleUp},{default:g(()=>[b(y(t.t("AccessControl.module.go_parent")),1)]),_:1},8,["onClick"])):R("",!0)]),action:g(({record:s})=>[h(i,{actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,s)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"Deletion Confirm",confirm:t.handleDelete.bind(null,s)}},{icon:"bi:file-arrow-down",onClick:t.handleDown.bind(null,s),ifShow:s.hasChild}]},null,8,["actions"])]),_:1},8,["onRegister"]),h(a,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])])}var ie=M(q,[["render",x]]);export{ie as default};
