import{B as d}from"./TableImg.9ee05584.js";import"./index.26a558af.js";import{E as f}from"./index.1d3d5466.js";import{c as _,d as s,j as E}from"./data.5f02294c.js";import{b as C}from"./index.0c1d45ad.js";import{P as F}from"./index.7cdcb74e.js";import{ap as B,a as x,ar as t,o as b,j as g,y as r,n as p,z as M}from"./index.f8b6fa94.js";import"./index.1423091e.js";import"./Checkbox.572a0527.js";import"./index.20e31dae.js";import"./index.961d34d0.js";import"./eagerComputed.d49f1c93.js";import"./BasicForm.eebb9e8d.js";/* empty css               *//* empty css              */import"./index.bec743a7.js";import"./index.e501ff06.js";import"./index.5c9fe55c.js";import"./index.12c7904d.js";import"./index.345349a2.js";import"./get.12156efd.js";import"./index.1efac556.js";import"./_baseEach.2d110e96.js";import"./_baseIteratee.07173297.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.c60a3e36.js";import"./index.65e8311b.js";import"./useRefs.25abb648.js";import"./Form.42748d5d.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./toInteger.443f55d3.js";import"./Col.b99e5aca.js";import"./useSize.3eb1ac1b.js";import"./index.5ddb8e93.js";import"./index.ae9da7c5.js";import"./useWindowSizeFn.268c75c1.js";import"./index.b3bb861d.js";import"./uniqBy.ed970345.js";import"./index.8ffde185.js";import"./useForm.74156ad2.js";import"./uuid.2b29000c.js";import"./merge.a3bec796.js";import"./onMountedOrActivated.73153770.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.53735e83.js";import"./FullscreenOutlined.8522ef3f.js";import"./index.29f29e0d.js";import"./scrollTo.7fe5bdbc.js";import"./index.55183d61.js";import"./index.a4095fd7.js";import"./index.c3665e07.js";import"./download.3a5cff84.js";import"./base64Conver.08b9f4ec.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";const A=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:F},setup(){function o({filename:e,bookType:a}){E({data:s,filename:e,write2excelOpts:{bookType:a}})}const[i,{openModal:m}]=C();return{defaultHeader:o,columns:_,data:s,register:i,openModal:m}}}),S=M(" \u5BFC\u51FA ");function T(o,i,m,e,a,h){const n=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(n,{onClick:o.openModal},{default:r(()=>[S]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var Ho=B(A,[["render",T]]);export{Ho as default};