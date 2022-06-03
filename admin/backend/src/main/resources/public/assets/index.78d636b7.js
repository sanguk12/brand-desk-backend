var u=(t,e,r)=>new Promise((d,p)=>{var m=o=>{try{i(r.next(o))}catch(a){p(a)}},l=o=>{try{i(r.throw(o))}catch(a){p(a)}},i=o=>o.done?d(o.value):Promise.resolve(o.value).then(m,l);i((r=r.apply(t,e)).next())});import{ap as M,a as _,c as F,v as B,ar as f,o as C,h as v,n as h,y as g,z as b,t as y,j as A,k as R,D as z}from"./index.9b68f3a5.js";import{B as E}from"./TableImg.56506859.js";import{T as U}from"./index.3604fdfb.js";import{u as $}from"./useTable.bd2598d0.js";import{b as N}from"./index.c6d9e38a.js";import V from"./DictModal.7b1f3e49.js";import{c as j,s as K}from"./ItemListTable.30c7f760.js";import{d as L}from"./category.6f69ae3f.js";import{d as P}from"./v4.8b5f0c91.js";import{i as W}from"./isEmpty.7bce0800.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./BasicForm.6899d0a5.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./useWindowSizeFn.d868051d.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.b9fae046.js";import"./useForm.b2949832.js";import"./index.27ebe66e.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./onMountedOrActivated.f9a7813e.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";import"./uuid.2b29000c.js";import"./merge.f321b105.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.43914e4e.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.f93c2cff.js";import"./scrollTo.39f4a54d.js";import"./index.a3bc6812.js";import"./index.64609094.js";import"./index.54a0672f.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";const q=_({name:"DictManagement",components:{BasicTable:E,DictModal:V,TableAction:U},setup(){const{t}=F(),e=B({parent:!1,parentId:null,name:null,code:null}),{createSuccessModal:r}=z();function d(){return u(this,null,function*(){return new Promise(n=>u(this,null,function*(){const c=yield P(e);if(!W(c.list)){const k=c.list[0];e.parentId=k.parentId,e.parent=!1}n(c)}))})}const[p,{openModal:m}]=N(),[l,{reload:i,expandAll:o,collapseAll:a}]=$({title:t("Content.dict.list"),isTreeTable:!1,api:d,columns:j,formConfig:{labelWidth:120,schemas:K},fetchSetting:{listField:"list",totalField:"totalCount",sizeField:"pageSize",pageField:"pageIndex"},handleSearchInfoFn(n){return n},pagination:!0,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,rowKey:"id",actionColumn:{width:115,title:t("common.action"),dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function s(){m(!0,{isUpdate:!1,record:{parentId:e.cateId}})}function I(n){m(!0,{record:n,isUpdate:!0})}function w(n){return u(this,null,function*(){const c=yield L(n.id);r({title:t("common.info"),content:t("Content.dict.deleted")}),yield i()})}function D(){i()}function S(){e.parent=!0,i()}function T(n){e.parentId=n.id,e.parent=!1,i()}return{t,expandAll:o,collapseAll:a,registerTable:l,registerModal:p,handleCreate:s,handleEdit:I,handleDelete:w,handleSuccess:D,handleUp:S,handleDown:T,searchInfo:e}}});function x(t,e,r,d,p,m){const l=f("a-button"),i=f("TableAction"),o=f("BasicTable"),a=f("DictModal");return C(),v("div",null,[h(o,{onRegister:t.registerTable},{toolbar:g(()=>[h(l,{type:"primary",onClick:t.handleCreate},{default:g(()=>[b(y(t.t("Content.dict.add")),1)]),_:1},8,["onClick"]),t.searchInfo.parentId?(C(),A(l,{key:0,type:"primary",preIcon:"bi:file-arrow-up",onClick:t.handleUp},{default:g(()=>[b(y(t.t("AccessControl.module.go_parent")),1)]),_:1},8,["onClick"])):R("",!0)]),action:g(({record:s})=>[h(i,{actions:[{icon:"clarity:note-edit-line",onClick:t.handleEdit.bind(null,s)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"Deletion Confirm",confirm:t.handleDelete.bind(null,s)}},{icon:"bi:file-arrow-down",onClick:t.handleDown.bind(null,s),ifShow:s.hasChild}]},null,8,["actions"])]),_:1},8,["onRegister"]),h(a,{onRegister:t.registerModal,onSuccess:t.handleSuccess},null,8,["onRegister","onSuccess"])])}var ie=M(q,[["render",x]]);export{ie as default};
