import{I as B}from"./index.705bd28b.js";import{B as h}from"./TableImg.532f196d.js";import"./index.5a0c5bc8.js";import{P as S}from"./index.c388f747.js";import{ap as E,a as F,s as I,ar as e,o as a,j as d,y as s,n as f,h as b,au as g,F as C,z as k}from"./index.0a8b89be.js";import"./index.b536e7c7.js";import"./useWindowSizeFn.64599f54.js";import"./FullscreenOutlined.9f59f3fc.js";import"./BasicForm.90108631.js";/* empty css               *//* empty css              */import"./index.8eadf802.js";import"./index.d06f97b4.js";import"./Checkbox.e21486b4.js";import"./index.281aa2ea.js";import"./index.5485e619.js";import"./index.bd809198.js";import"./index.1b5c222a.js";import"./index.f5f3d84b.js";import"./get.40773c6b.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./index.14314bc3.js";import"./_baseEach.0f4dbd6f.js";import"./_baseIteratee.b2478045.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.b8e551ed.js";import"./index.ac3b1fda.js";import"./useRefs.f7f322ba.js";import"./Form.b63e2253.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";import"./index.14059c69.js";import"./index.04c8d476.js";import"./index.25fd638a.js";import"./uniqBy.7ccff7b8.js";import"./index.624fc280.js";import"./useForm.14189227.js";import"./uuid.2b29000c.js";import"./merge.9e7c3f63.js";import"./onMountedOrActivated.b04887f0.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.b7e813f0.js";import"./index.4a0da81f.js";import"./scrollTo.9228901a.js";import"./index.d4ddb90b.js";import"./index.b2d27a9d.js";import"./index.bacabee8.js";import"./download.edb4e6af.js";import"./base64Conver.08b9f4ec.js";import"./index.61a163e2.js";import"./index.2c6c45b9.js";import"./useContentViewHeight.2aaec145.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.01edd6fb.js";import"./transButton.4e1319c6.js";const v=F({components:{BasicTable:h,ImpExcel:B,PageWrapper:S},setup(){const t=I([]);function c(p){t.value=[];for(const n of p){const{header:u,results:l,meta:{sheetName:m}}=n,o=[];for(const r of u)o.push({title:r,dataIndex:r});t.value.push({title:m,dataSource:l,columns:o})}}return{loadDataSuccess:c,tableListRef:t}}}),D=k(" \u5BFC\u5165Excel ");function P(t,c,p,n,u,l){const m=e("a-button"),o=e("ImpExcel"),r=e("BasicTable"),_=e("PageWrapper");return a(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:s(()=>[f(o,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:s(()=>[f(m,{class:"m-3"},{default:s(()=>[D]),_:1})]),_:1},8,["onSuccess"]),(a(!0),b(C,null,g(t.tableListRef,(i,x)=>(a(),d(r,{key:x,title:i.title,columns:i.columns,dataSource:i.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var yt=E(v,[["render",P]]);export{yt as default};
