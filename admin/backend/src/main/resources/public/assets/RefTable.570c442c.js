import{B as b}from"./TableImg.56506859.js";import"./index.3604fdfb.js";import{getBasicColumns as p,getBasicShortColumns as D}from"./tableData.0a246808.js";import{ap as R,a as E,s as w,ar as f,o as S,h as A,m as d,n as i,y as u,z as n,D as T,i as y}from"./index.9b68f3a5.js";import{d as L}from"./table.cec3c9a7.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./BasicForm.6899d0a5.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./useWindowSizeFn.d868051d.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.c6d9e38a.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.b9fae046.js";import"./useForm.b2949832.js";import"./index.27ebe66e.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./onMountedOrActivated.f9a7813e.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";import"./uuid.2b29000c.js";import"./merge.f321b105.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.43914e4e.js";import"./index.f93c2cff.js";import"./scrollTo.39f4a54d.js";import"./index.a3bc6812.js";import"./index.64609094.js";import"./index.54a0672f.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";const K=E({components:{BasicTable:b},setup(){const o=w(null),{createMessage:s}=T();function t(){const m=y(o);if(!m)throw new Error("tableAction is null");return m}function l(){t().setLoading(!0),setTimeout(()=>{t().setLoading(!1)},1e3)}function c(){t().setColumns(D())}function r(){t().setColumns(p()),t().reload({page:1})}function e(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getColumns()}function a(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getDataSource()}function C(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getRawDataSource()}function g(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getPaginationRef()}function _(){t().setPagination({current:2}),t().reload()}function F(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRows()}function B(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRowKeys()}function k(){t().setSelectedRowKeys(["0","1","2"])}function h(){t().clearSelectedRowKeys()}return{tableRef:o,api:L,columns:p(),changeLoading:l,changeColumns:c,reloadTable:r,getColumn:e,getTableData:a,getTableRawData:C,getPagination:g,setPaginationInfo:_,getSelectRowList:F,getSelectRowKeyList:B,setSelectedRowKeyList:k,clearSelect:h}}}),P={class:"p-4"},v={class:"mb-4"},$=n(" \u8FD8\u539F "),M=n(" \u5F00\u542Floading "),N=n(" \u66F4\u6539Columns "),V=n(" \u83B7\u53D6Columns "),z=n(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),I=n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),H=n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),j={class:"mb-4"},q=n(" \u83B7\u53D6\u9009\u4E2D\u884C "),G=n(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),J=n(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),O=n(" \u6E05\u7A7A\u9009\u4E2D\u884C "),Q=n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function U(o,s,t,l,c,r){const e=f("a-button"),a=f("BasicTable");return S(),A("div",P,[d("div",v,[i(e,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[$]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[M]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[N]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[V]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[z]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[I]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[H]),_:1},8,["onClick"])]),d("div",j,[i(e,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[q]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[G]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[J]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[O]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[Q]),_:1},8,["onClick"])]),i(a,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var et=R(K,[["render",U]]);export{et as default};