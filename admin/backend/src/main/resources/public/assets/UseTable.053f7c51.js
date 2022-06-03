import{B as v}from"./TableImg.532f196d.js";import"./index.5a0c5bc8.js";import{u as $}from"./useTable.9784714c.js";import{getBasicColumns as p,getBasicShortColumns as M}from"./tableData.0a246808.js";import{ap as N,a as V,ar as d,o as z,h as I,m as g,n as t,y as u,z as i,D as H}from"./index.0a8b89be.js";import{d as U}from"./table.194e4a23.js";import"./index.d06f97b4.js";import"./Checkbox.e21486b4.js";import"./index.281aa2ea.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./BasicForm.90108631.js";/* empty css               *//* empty css              */import"./index.8eadf802.js";import"./index.5485e619.js";import"./index.bd809198.js";import"./index.1b5c222a.js";import"./index.f5f3d84b.js";import"./get.40773c6b.js";import"./index.14314bc3.js";import"./_baseEach.0f4dbd6f.js";import"./_baseIteratee.b2478045.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.b8e551ed.js";import"./index.ac3b1fda.js";import"./useRefs.f7f322ba.js";import"./Form.b63e2253.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";import"./index.14059c69.js";import"./index.04c8d476.js";import"./useWindowSizeFn.64599f54.js";import"./index.25fd638a.js";import"./uniqBy.7ccff7b8.js";import"./index.b536e7c7.js";import"./FullscreenOutlined.9f59f3fc.js";import"./index.624fc280.js";import"./useForm.14189227.js";import"./index.c388f747.js";import"./index.61a163e2.js";import"./index.2c6c45b9.js";import"./onMountedOrActivated.b04887f0.js";import"./useContentViewHeight.2aaec145.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.01edd6fb.js";import"./transButton.4e1319c6.js";import"./uuid.2b29000c.js";import"./merge.9e7c3f63.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b7e813f0.js";import"./index.4a0da81f.js";import"./scrollTo.9228901a.js";import"./index.d4ddb90b.js";import"./index.b2d27a9d.js";import"./index.bacabee8.js";import"./download.edb4e6af.js";import"./base64Conver.08b9f4ec.js";const j=V({components:{BasicTable:v},setup(){const{createMessage:o}=H();function n(){}const[r,{setLoading:s,setColumns:a,getColumns:c,getDataSource:e,getRawDataSource:l,reload:m,getPaginationRef:C,setPagination:f,getSelectRows:_,getSelectRowKeys:F,setSelectedRowKeys:B,clearSelectedRowKeys:h}]=$({canResize:!0,title:"useTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",api:U,columns:p(),defSort:{field:"name",order:"ascend"},rowKey:"id",showTableSetting:!0,onChange:n,rowSelection:{type:"checkbox"},onColumnsChange:P=>{}});function k(){s(!0),setTimeout(()=>{s(!1)},1e3)}function b(){a(M())}function D(){a(p()),m({page:1})}function E(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),c()}function S(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e()}function T(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),l()}function w(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),C()}function R(){f({current:2}),m()}function y(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),_()}function A(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),F()}function L(){B(["0","1","2"])}function K(){h()}return{registerTable:r,changeLoading:k,changeColumns:b,reloadTable:D,getColumn:E,getTableData:S,getTableRawData:T,getPagination:w,setPaginationInfo:R,getSelectRowList:y,getSelectRowKeyList:A,setSelectedRowKeyList:L,clearSelect:K,onChange:n}}}),q={class:"p-4"},G={class:"mb-4"},J=i(" \u8FD8\u539F "),O=i(" \u5F00\u542Floading "),Q=i(" \u66F4\u6539Columns "),W=i(" \u83B7\u53D6Columns "),X=i(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),Y=i(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),Z=i(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),x={class:"mb-4"},oo=i(" \u83B7\u53D6\u9009\u4E2D\u884C "),eo=i(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),to=i(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),uo=i(" \u6E05\u7A7A\u9009\u4E2D\u884C "),io=i(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function no(o,n,r,s,a,c){const e=d("a-button"),l=d("BasicTable");return z(),I("div",q,[g("div",G,[t(e,{class:"mr-2",onClick:o.reloadTable},{default:u(()=>[J]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeLoading},{default:u(()=>[O]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.changeColumns},{default:u(()=>[Q]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getColumn},{default:u(()=>[W]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableData},{default:u(()=>[X]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getTableRawData},{default:u(()=>[Y]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setPaginationInfo},{default:u(()=>[Z]),_:1},8,["onClick"])]),g("div",x,[t(e,{class:"mr-2",onClick:o.getSelectRowList},{default:u(()=>[oo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:u(()=>[eo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:u(()=>[to]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.clearSelect},{default:u(()=>[uo]),_:1},8,["onClick"]),t(e,{class:"mr-2",onClick:o.getPagination},{default:u(()=>[io]),_:1},8,["onClick"])]),t(l,{onRegister:o.registerTable},null,8,["onRegister"])])}var ge=N(j,[["render",no]]);export{ge as default};