var I=(e,t,s)=>new Promise((n,u)=>{var c=o=>{try{i(s.next(o))}catch(l){u(l)}},C=o=>{try{i(s.throw(o))}catch(l){u(l)}},i=o=>o.done?n(o.value):Promise.resolve(o.value).then(c,C);i((s=s.apply(e,t)).next())});import{c as k,ap as D,a as M,v as R,s as h,ar as p,o as B,j as S,y as f,n as d,z as L,t as O,as as E}from"./index.0a8b89be.js";import{C as P}from"./index.281aa2ea.js";/* empty css              */import{D as $}from"./index.8eadf802.js";import{B as N,a as V}from"./index.b536e7c7.js";import{B as x}from"./TableImg.532f196d.js";import{T as F}from"./index.5a0c5bc8.js";import{u as U}from"./useTable.9784714c.js";import{a as z,s as K,b as Y}from"./dept.a217a541.js";import{i as j}from"./isEmpty.2eac4d18.js";import{C as q}from"./index.25fd638a.js";import{R as G}from"./index.624fc280.js";import"./Checkbox.e21486b4.js";import"./useWindowSizeFn.64599f54.js";import"./FullscreenOutlined.9f59f3fc.js";import"./index.d06f97b4.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./BasicForm.90108631.js";/* empty css               */import"./index.5485e619.js";import"./index.bd809198.js";import"./index.1b5c222a.js";import"./index.f5f3d84b.js";import"./get.40773c6b.js";import"./index.14314bc3.js";import"./_baseEach.0f4dbd6f.js";import"./_baseIteratee.b2478045.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.b8e551ed.js";import"./index.ac3b1fda.js";import"./useRefs.f7f322ba.js";import"./Form.b63e2253.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";import"./index.14059c69.js";import"./index.04c8d476.js";import"./uniqBy.7ccff7b8.js";import"./useForm.14189227.js";import"./index.c388f747.js";import"./index.61a163e2.js";import"./index.2c6c45b9.js";import"./onMountedOrActivated.b04887f0.js";import"./useContentViewHeight.2aaec145.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.01edd6fb.js";import"./transButton.4e1319c6.js";import"./uuid.2b29000c.js";import"./merge.9e7c3f63.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b7e813f0.js";import"./index.4a0da81f.js";import"./scrollTo.9228901a.js";import"./index.d4ddb90b.js";import"./index.b2d27a9d.js";import"./index.bacabee8.js";import"./download.edb4e6af.js";import"./base64Conver.08b9f4ec.js";const{t:g}=k(),H=[{title:g("AccessControl.dept.id"),dataIndex:"id",width:50},{title:g("AccessControl.cate.selected"),dataIndex:"selected",edit:!0,editRow:!1,editable:!1,editComponent:"Checkbox",editComponentProps:{},editValueMap:e=>e?"Y":"N",width:200},{title:g("AccessControl.cate.contain_child"),dataIndex:"containChild",edit:!0,editRow:!1,editable:!1,editComponent:"Checkbox",editComponentProps:{},editValueMap:e=>e?"Y":"N",width:200},{title:g("AccessControl.cate.name"),dataIndex:"name",width:150,align:"left"}],J=M({name:"DeptCategoryManagement",components:{BasicTable:x,BasicModal:N,TableAction:F,Checkbox:P,Col:q,Divider:$,Row:G},setup(){const{t:e}=k(),t=R({deptId:null,cateId:null,parentCate:!1}),s=h([]),n=h(!1),u=h(null),c=h(!1);function C(){return I(this,null,function*(){return z(t)})}const[i,{reload:o}]=U({isTreeTable:!1,api:C,columns:H,rowKey:"id",pagination:!1,striped:!1,useSearchForm:!1,showTableSetting:!1,bordered:!0,showIndexColumn:!1,canResize:!1,immediate:!0,handleSearchInfoFn(a){return a},actionColumn:{width:80,title:e("common.action"),dataIndex:"action",slots:{customRender:"action"}}}),[l,{setModalProps:m,closeModal:b}]=V(a=>I(this,null,function*(){c.value=a.record.ownsAllCategory,t.deptId=a.record.id,t.cateId=null,yield o()}));function w(){b()}function r(a){t.cateId=a.parentId,t.parentCate=!0,o()}function A(a){t.cateId=a.id,t.parentCate=!1,o()}function T({record:a,key:y,value:_}){try{m({confirmLoading:!0}),n.value=!0,K(t.deptId,[{id:a.id,selected:y==="selected"?_:a.selected,containChild:y==="containChild"?_:a.containChild}])}finally{m({confirmLoading:!1}),n.value=!1}}function v(){try{m({confirmLoading:!0}),n.value=!0,Y(t.deptId,c.value)}finally{m({confirmLoading:!1}),n.value=!1}}return{t:e,isEmpty:j,loading:n,deptCateTable:u,ownsAllCategory:c,registerTable:i,registerModal:l,handleOk:w,handleUp:r,handleDown:A,beforeEditSubmit:T,handleOwnsAllCategory:v,checkedKeys:s,searchInfo:t}}});function Q(e,t,s,n,u,c){const C=p("Checkbox"),i=p("Col"),o=p("Divider"),l=p("TableAction"),m=p("BasicTable"),b=p("Row"),w=p("BasicModal");return B(),S(w,E(e.$attrs,{onRegister:e.registerModal,title:e.t("AccessControl.dept.edit_category"),onOk:e.handleOk,cancelButtonProps:{hidden:!0},width:800,"min-height":400}),{default:f(()=>[d(b,null,{default:f(()=>[d(i,{span:24},{default:f(()=>[d(C,{checked:e.ownsAllCategory,"onUpdate:checked":t[0]||(t[0]=r=>e.ownsAllCategory=r),onChange:e.handleOwnsAllCategory},{default:f(()=>[L(O(e.t("AccessControl.dept.own_all_cate")),1)]),_:1},8,["checked","onChange"])]),_:1}),d(o),d(i,{span:24},{default:f(()=>[d(m,{ref:"deptCateTable",onRegister:e.registerTable,searchInfo:e.searchInfo,beforeEditSubmit:e.beforeEditSubmit},{action:f(({record:r})=>[d(l,{"stop-button-propagation":!0,actions:[{icon:"bi:file-arrow-up",onClick:e.handleUp.bind(null,r),ifShow:r.parentId!=null},{icon:"bi:file-arrow-down",onClick:e.handleDown.bind(null,r),ifShow:!r.isLeaf}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo","beforeEditSubmit"])]),_:1})]),_:1})]),_:1},16,["onRegister","title","onOk"])}var it=D(J,[["render",Q]]);export{it as default};
