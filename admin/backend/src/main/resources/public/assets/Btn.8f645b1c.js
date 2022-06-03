import{ap as v,a as T,dI as w,r as V,fp as d,f as E,ar as r,bO as C,o as n,j as l,y as s,n as t,m as f,t as _,z as o,k as h,w as y}from"./index.f8b6fa94.js";import{A as k}from"./index.c3665e07.js";import{D as U}from"./index.bec743a7.js";import{S as A}from"./index.a4095fd7.js";import D from"./CurrentPermissionMode.ec927f69.js";import{A as B}from"./index.9f86f034.js";import{P as $}from"./index.7cdcb74e.js";import"./useFlexGapSupport.816f6ec3.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./useSize.3eb1ac1b.js";import"./eagerComputed.d49f1c93.js";import"./onMountedOrActivated.73153770.js";import"./useWindowSizeFn.268c75c1.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";const I=T({components:{Alert:k,PageWrapper:$,Space:A,CurrentPermissionMode:D,Divider:U,Authority:B},setup(){const{changeRole:e,hasPermission:a}=w(),m=V();return{userStore:m,RoleEnum:d,isSuper:E(()=>m.getRoleList.includes(d.SUPER)),isTest:E(()=>m.getRoleList.includes(d.TEST)),changeRole:e,hasPermission:a}}}),N=o(" current role: "),L={class:"mt-4"},M=o(" Permission switching(Please switch the permission mode to the front-end role permission mode first): "),W=o("Component way to judge permissions(If necessary, you can register globally by yourself)"),j=o(" Visible with super role permissions "),J=o(" Visible with test role permissions "),q=o(" Visible with [test, super] role permissions "),z=o(" Judging permissions by function method(Suitable for filtering inside functions) "),F=o(" Visible with super role permissions "),O=o(" Visible with test role permissions "),G=o(" Visible with [test, super] role permissions "),H=o(" Judging authority by command method(This method cannot dynamically modify permissions.) "),K=o(" Visible with super role permissions "),Q=o(" Visible with test role permissions "),X=o(" Visible with [test, super] role permissions ");function Y(e,a,m,Z,x,ee){const R=r("CurrentPermissionMode"),S=r("Alert"),i=r("a-button"),g=r("Space"),u=r("Divider"),p=r("Authority"),P=r("PageWrapper"),c=C("auth");return n(),l(P,{title:"Front-end permission button example",contentBackground:"",contentClass:"p-4",content:"Since the user information interface will be requested when refreshing, the role information will be reset according to the interface, so the interface will be restored to its original state after refreshing. If not, you can comment the user information interface in src/layout/default/index"},{default:s(()=>[t(R),f("p",null,[N,f("a",null,_(e.userStore.getRoleList),1)]),t(S,{class:"mt-4",type:"info",message:"Please see the button changes after clicking","show-icon":""}),f("div",L,[M,t(g,null,{default:s(()=>[t(i,{onClick:a[0]||(a[0]=b=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:s(()=>[o(_(e.RoleEnum.SUPER),1)]),_:1},8,["type"]),t(i,{onClick:a[1]||(a[1]=b=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:s(()=>[o(_(e.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})]),t(u,null,{default:s(()=>[W]),_:1}),t(p,{value:e.RoleEnum.SUPER},{default:s(()=>[t(i,{type:"primary",class:"mx-4"},{default:s(()=>[j]),_:1})]),_:1},8,["value"]),t(p,{value:e.RoleEnum.TEST},{default:s(()=>[t(i,{color:"success",class:"mx-4"},{default:s(()=>[J]),_:1})]),_:1},8,["value"]),t(p,{value:[e.RoleEnum.TEST,e.RoleEnum.SUPER]},{default:s(()=>[t(i,{color:"error",class:"mx-4"},{default:s(()=>[q]),_:1})]),_:1},8,["value"]),t(u,null,{default:s(()=>[z]),_:1}),e.hasPermission(e.RoleEnum.SUPER)?(n(),l(i,{key:0,type:"primary",class:"mx-4"},{default:s(()=>[F]),_:1})):h("",!0),e.hasPermission(e.RoleEnum.TEST)?(n(),l(i,{key:1,color:"success",class:"mx-4"},{default:s(()=>[O]),_:1})):h("",!0),e.hasPermission([e.RoleEnum.TEST,e.RoleEnum.SUPER])?(n(),l(i,{key:2,color:"error",class:"mx-4"},{default:s(()=>[G]),_:1})):h("",!0),t(u,null,{default:s(()=>[H]),_:1}),y((n(),l(i,{type:"primary",class:"mx-4"},{default:s(()=>[K]),_:1})),[[c,e.RoleEnum.SUPER]]),y((n(),l(i,{color:"success",class:"mx-4"},{default:s(()=>[Q]),_:1})),[[c,e.RoleEnum.TEST]]),y((n(),l(i,{color:"error",class:"mx-4"},{default:s(()=>[X]),_:1})),[[c,[e.RoleEnum.TEST,e.RoleEnum.SUPER]]])]),_:1})}var Re=v(I,[["render",Y],["__scopeId","data-v-3303a9f8"]]);export{Re as default};
