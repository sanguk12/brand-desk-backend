import{B as f}from"./TableImg.56506859.js";import"./index.3604fdfb.js";import{u as g}from"./useTable.bd2598d0.js";import{getTableColumns as C,getSearchFormSchema as b}from"./loginLogData.96537b65.js";import{ap as S,a as I,c as _,r as T,v as F,eb as l,ar as c,o as k,j as y,y as i,n as d,z as u,t as h}from"./index.9b68f3a5.js";import{a as B}from"./log.271b0b38.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./BasicForm.6899d0a5.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./useWindowSizeFn.d868051d.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.c6d9e38a.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.b9fae046.js";import"./useForm.b2949832.js";import"./index.27ebe66e.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./onMountedOrActivated.f9a7813e.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";import"./uuid.2b29000c.js";import"./merge.f321b105.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.43914e4e.js";import"./index.f93c2cff.js";import"./scrollTo.39f4a54d.js";import"./index.a3bc6812.js";import"./index.64609094.js";import"./index.54a0672f.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";const D=I({components:{BasicTable:f},setup(){const{t:o}=_(),a=T(),m=F({}),[p,{reload:e}]=g({api:B,fetchSetting:{listField:"list",totalField:"totalCount",sizeField:"pageSize",pageField:"pageIndex"},columns:C(),formConfig:{labelWidth:120,schemas:b(),autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(t){var s;return t.userId=(s=a.getUserInfo)==null?void 0:s.userId,t.startCreateDate=l(t.startCreateDate),t.endCreateDate=l(t.endCreateDate),t}});function n(){e()}function r(){e({page:1})}return{t:o,registerTable:p,handleReloadCurrent:n,handleReload:r,searchInfo:m}}});function R(o,a,m,p,e,n){const r=c("a-button"),t=c("BasicTable");return k(),y(t,{onRegister:o.registerTable,searchInfo:o.searchInfo},{toolbar:i(()=>[d(r,{type:"primary",onClick:o.handleReloadCurrent},{default:i(()=>[u(h(o.t("common.reload_current")),1)]),_:1},8,["onClick"]),d(r,{type:"primary",onClick:o.handleReload},{default:i(()=>[u(h(o.t("common.reload")),1)]),_:1},8,["onClick"])]),_:1},8,["onRegister","searchInfo"])}var Vt=S(D,[["render",R]]);export{Vt as default};
