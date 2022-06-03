import{B as s}from"./TableImg.56506859.js";import{T as c}from"./index.3604fdfb.js";import{u as F}from"./useTable.bd2598d0.js";import{P as d}from"./index.27ebe66e.js";import{getBasicColumns as B}from"./tableData.0a246808.js";import{d as E}from"./table.cec3c9a7.js";import{ap as C,a as f,ar as r,o as b,j as g,y as p,n,m as T,t as _}from"./index.9b68f3a5.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./BasicForm.6899d0a5.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./useWindowSizeFn.d868051d.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.c6d9e38a.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.b9fae046.js";import"./useForm.b2949832.js";import"./uuid.2b29000c.js";import"./merge.f321b105.js";import"./onMountedOrActivated.f9a7813e.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.43914e4e.js";import"./index.f93c2cff.js";import"./scrollTo.39f4a54d.js";import"./index.a3bc6812.js";import"./index.64609094.js";import"./index.54a0672f.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";const D=f({components:{BasicTable:s,TableAction:c,PageWrapper:d},setup(){const[o]=F({api:E,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:B(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action"}});function e(t){}function u(t){}return{registerTable:o,handleDelete:e,handleOpen:u}}});function A(o,e,u,t,w,R){const m=r("TableAction"),a=r("BasicTable"),l=r("PageWrapper");return b(),g(l,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"\u4E0D\u53EF\u4E0Escroll\u5171\u7528\u3002TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:p(()=>[n(a,{onRegister:o.registerTable},{expandedRowRender:p(({record:i})=>[T("span",null,"No: "+_(i.no),1)]),action:p(({record:i})=>[n(m,{stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,i)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,i)}}]},null,8,["actions","dropDownActions"])]),_:1},8,["onRegister"])]),_:1})}var vo=C(D,[["render",A]]);export{vo as default};