var f=(o,t,s)=>new Promise((c,n)=>{var d=e=>{try{r(s.next(e))}catch(a){n(a)}},i=e=>{try{r(s.throw(e))}catch(a){n(a)}},r=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,i);r((s=s.apply(o,t)).next())});import{ap as k,a as P,dI as g,r as C,bE as v,f as w,fp as b,ar as m,o as B,j as M,y as u,n as p,m as A,fq as S,z as _}from"./index.9b68f3a5.js";import{P as T}from"./index.27ebe66e.js";import{A as y}from"./index.54a0672f.js";import{S as $}from"./index.64609094.js";import x from"./CurrentPermissionMode.d1428f3e.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./useSize.48fdc38e.js";import"./eagerComputed.4def26ea.js";import"./onMountedOrActivated.f9a7813e.js";import"./useWindowSizeFn.d868051d.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";import"./useFlexGapSupport.20ae4a44.js";import"./index.c90ef721.js";const E=P({components:{Space:$,Alert:y,CurrentPermissionMode:x,PageWrapper:T},setup(){const{refreshMenu:o}=g(),t=C(),s=v(),c=w(()=>s.getProjectConfig.permissionMode===S.BACK);function n(d){return f(this,null,function*(){const i="fakeToken"+d;t.setToken(i),t.getUserInfoAction(),o()})}return{RoleEnum:b,refreshMenu:o,switchToken:n,isBackPremissionMode:c}}}),I={class:"mt-4"},N=_(" Permission switching(Please switch the permission mode to background permission mode first): "),V=_(" Get the menu with user id 1 "),W=_(" Get the menu with user id 2 ");function j(o,t,s,c,n,d){const i=m("CurrentPermissionMode"),r=m("Alert"),e=m("a-button"),a=m("Space"),l=m("PageWrapper");return B(),M(l,{title:"Background permission example",contentBackground:"",contentClass:"p-4",content:"At present, two sets of data have been mocked. The id is 1 and 2. The specific menu returned can be viewed in mocksysmenu.ts"},{default:u(()=>[p(i),p(r,{class:"mt-4",type:"info",message:"Click to see the changes in the left menu","show-icon":""}),A("div",I,[N,p(a,null,{default:u(()=>[p(e,{onClick:t[0]||(t[0]=h=>o.switchToken(1)),disabled:!o.isBackPremissionMode},{default:u(()=>[V]),_:1},8,["disabled"]),p(e,{onClick:t[1]||(t[1]=h=>o.switchToken(2)),disabled:!o.isBackPremissionMode},{default:u(()=>[W]),_:1},8,["disabled"])]),_:1})])]),_:1})}var te=k(E,[["render",j],["__scopeId","data-v-45f4e2f2"]]);export{te as default};