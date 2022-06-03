import{B as b}from"./TableImg.9ee05584.js";import"./index.26a558af.js";import{getBasicColumns as p,getBasicShortColumns as D}from"./tableData.0a246808.js";import{ap as R,a as E,s as w,ar as f,o as S,h as A,m as d,n as i,y as u,z as n,D as T,i as y}from"./index.f8b6fa94.js";import{d as L}from"./table.0fa51c80.js";import"./index.1423091e.js";import"./Checkbox.572a0527.js";import"./index.20e31dae.js";import"./index.961d34d0.js";import"./eagerComputed.d49f1c93.js";import"./BasicForm.eebb9e8d.js";/* empty css               *//* empty css              */import"./index.bec743a7.js";import"./index.e501ff06.js";import"./index.5c9fe55c.js";import"./index.12c7904d.js";import"./index.345349a2.js";import"./get.12156efd.js";import"./index.1efac556.js";import"./_baseEach.2d110e96.js";import"./_baseIteratee.07173297.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.c60a3e36.js";import"./index.65e8311b.js";import"./useRefs.25abb648.js";import"./Form.42748d5d.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./toInteger.443f55d3.js";import"./Col.b99e5aca.js";import"./useSize.3eb1ac1b.js";import"./index.5ddb8e93.js";import"./index.ae9da7c5.js";import"./useWindowSizeFn.268c75c1.js";import"./index.b3bb861d.js";import"./uniqBy.ed970345.js";import"./index.0c1d45ad.js";import"./FullscreenOutlined.8522ef3f.js";import"./index.8ffde185.js";import"./useForm.74156ad2.js";import"./index.7cdcb74e.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./onMountedOrActivated.73153770.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";import"./uuid.2b29000c.js";import"./merge.a3bec796.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.53735e83.js";import"./index.29f29e0d.js";import"./scrollTo.7fe5bdbc.js";import"./index.55183d61.js";import"./index.a4095fd7.js";import"./index.c3665e07.js";import"./download.3a5cff84.js";import"./base64Conver.08b9f4ec.js";const K=E({components:{BasicTable:b},setup(){const o=w(null),{createMessage:s}=T();function t(){const m=y(o);if(!m)throw new Error("tableAction is null");return m}function l(){t().setLoading(!0),setTimeout(()=>{t().setLoading(!1)},1e3)}function c(){t().setColumns(D())}function r(){t().setColumns(p()),t().reload({page:1})}function e(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getColumns()}function a(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getDataSource()}function C(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getRawDataSource()}function g(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getPaginationRef()}function _(){t().setPagination({current:2}),t().reload()}function F(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRows()}function B(){s.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),t().getSelectRowKeys()}function k(){t().setSelectedRowKeys(["0","1","2"])}function h(){t().clearSelectedRowKeys()}return{tableRef:o,api:L,columns:p(),changeLoading:l,changeColumns:c,reloadTable:r,getColumn:e,getTableData:a,getTableRawData:C,getPagination:g,setPaginationInfo:_,getSelectRowList:F,getSelectRowKeyList:B,setSelectedRowKeyList:k,clearSelect:h}}}),P={class:"p-4"},v={class:"mb-4"},$=n(" \u8FD8\u539F "),M=n(" \u5F00\u542Floading "),N=n(" \u66F4\u6539Columns "),V=n(" \u83B7\u53D6Columns "),z=n(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),I=n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),H=n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),j={class:"mb-4"},q=n(" \u83B7\u53D6\u9009\u4E2D\u884C "),G=n(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),J=n(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),O=n(" \u6E05\u7A7A\u9009\u4E2D\u884C "),Q=n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function U(o,s,t,l,c,r){const e=f("a-button"),a=f("BasicTable");return S(),A("div",P,[d("div",v,[i(e,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[$]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[M]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[N]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[V]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[z]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[I]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[H]),_:1},8,["onClick"])]),d("div",j,[i(e,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[q]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[G]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[J]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[O]),_:1},8,["onClick"]),i(e,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[Q]),_:1},8,["onClick"])]),i(a,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var et=R(K,[["render",U]]);export{et as default};