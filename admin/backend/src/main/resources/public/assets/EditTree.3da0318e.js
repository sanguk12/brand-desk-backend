import{ap as d,a as B,ar as i,o as E,j as C,y as a,n as e,z as m,t as c,bQ as F}from"./index.0a8b89be.js";/* empty css              */import{_ as g}from"./index.04dea44f.js";import{t as h,a as _,b as A}from"./data.ec134722.js";import{P as b}from"./index.c388f747.js";import{D as k}from"./DeleteOutlined.b8e551ed.js";import{R as L}from"./index.624fc280.js";import{C as R}from"./index.25fd638a.js";import{P as M}from"./PlusOutlined.a999796c.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./useContextMenu.70843a40.js";import"./index.8eadf802.js";import"./get.40773c6b.js";import"./index.61a163e2.js";import"./index.2c6c45b9.js";import"./useSize.d9666d99.js";import"./onMountedOrActivated.b04887f0.js";import"./useWindowSizeFn.64599f54.js";import"./useContentViewHeight.2aaec145.js";import"./ArrowLeftOutlined.e3e0fbfd.js";import"./index.01edd6fb.js";import"./transButton.4e1319c6.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./Col.a8b0ef91.js";const N=B({components:{BasicTree:g,PageWrapper:b,Row:L,Col:R},setup(){function t(u){}function s(u){return[{label:"\u65B0\u589E",handler:()=>{},icon:"bi:plus"},{label:"\u5220\u9664",handler:()=>{},icon:"bx:bxs-folder-open"}]}const l=[{render:u=>F(M,{class:"ml-2",onClick:()=>{}})},{render:()=>F(k)}];function p({level:u}){return u===1?"ion:git-compare-outline":u===2?"ion:home":u===3?"ion:airplane":""}return{treeData:h,treeData2:_,treeData3:A,actionList:l,getRightMenuList:s,createIcon:p}}});function P(t,s,l,p,u,T){const r=i("BasicTree"),o=i("Col"),D=i("Row"),f=i("PageWrapper");return E(),C(f,{title:"Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B"},{default:a(()=>[e(D,{gutter:[16,16]},{default:a(()=>[e(o,{span:8},{default:a(()=>[e(r,{title:"\u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE/\u81EA\u5B9A\u4E49\u56FE\u6807",helpMessage:"\u5E2E\u52A9\u4FE1\u606F",treeData:t.treeData,actionList:t.actionList,renderIcon:t.createIcon},null,8,["treeData","actionList","renderIcon"])]),_:1}),e(o,{span:8},{default:a(()=>[e(r,{title:"\u53F3\u952E\u83DC\u5355",treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])]),_:1}),e(o,{span:8},{default:a(()=>[e(r,{title:"\u5DE5\u5177\u680F\u4F7F\u7528",toolbar:"",checkable:"",search:"",treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])]),_:1}),e(o,{span:8},{default:a(()=>[e(r,{title:"\u6CA1\u6709fieldNames\uFF0C\u63D2\u69FD\u6709\u6548",helpMessage:"\u6B63\u786E\u7684\u793A\u4F8B",treeData:t.treeData3},{title:a(n=>[m(" \u63D2\u69FD\uFF1A"+c(n.name),1)]),_:1},8,["treeData"])]),_:1}),e(o,{span:8},{default:a(()=>[e(r,{title:"\u6709fieldNames\u540E\uFF0C\u63D2\u69FD\u5931\u6548",helpMessage:"\u9519\u8BEF\u7684\u793A\u4F8B, \u5E94\u8BE5\u663E\u793A\u63D2\u69FD\u7684\u5185\u5BB9\u624D\u5BF9",fieldNames:{key:"id",title:"name"},treeData:t.treeData2},{title:a(n=>[m(" \u63D2\u69FD\uFF1A"+c(n.title),1)]),_:1},8,["treeData"])]),_:1}),e(o,{span:8},{default:a(()=>[e(r,{title:"\u6709fieldNames\u540E\uFF0CactionList\u5931\u6548",helpMessage:"\u9519\u8BEF\u7684\u793A\u4F8B\uFF0C\u5E94\u8BE5\u5728\u9F20\u6807\u79FB\u4E0A\u53BB\u65F6\uFF0C\u663E\u793A\u65B0\u589E\u548C\u5220\u9664\u6309\u94AE\u624D\u5BF9",treeData:t.treeData3,actionList:t.actionList,fieldNames:{key:"key",title:"name"}},null,8,["treeData","actionList"])]),_:1})]),_:1})]),_:1})}var re=d(N,[["render",P]]);export{re as default};