var g=(o,t,a)=>new Promise((d,l)=>{var c=e=>{try{i(a.next(e))}catch(r){l(r)}},n=e=>{try{i(a.throw(e))}catch(r){l(r)}},i=e=>e.done?d(e.value):Promise.resolve(e.value).then(c,n);i((a=a.apply(o,t)).next())});import{ap as w,a as D,aV as N,c as $,s as f,bU as I,fK as U,ar as p,o as _,h as B,n as u,y as A,q as b,m as v,j as y,k as h}from"./index.9b68f3a5.js";/* empty css              */import{T as k}from"./index.10106a95.js";import K from"./ActionLog.2e6cf7f6.js";import j from"./LoginLog.33871ac5.js";import{h as R}from"./avata.e91355cf.js";import{D as V}from"./index.89e79691.js";import{R as T}from"./index.b9fae046.js";import"./useRefs.77e757f9.js";import"./PlusOutlined.8b22ded4.js";import"./TableImg.56506859.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6b109d0e.js";import"./eagerComputed.4def26ea.js";import"./BasicForm.6899d0a5.js";/* empty css               */import"./index.c90ef721.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.3604fdfb.js";import"./index.64609094.js";import"./index.c6d9e38a.js";import"./useWindowSizeFn.d868051d.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.54a0672f.js";import"./index.f93c2cff.js";import"./uuid.2b29000c.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./useForm.b2949832.js";import"./index.27ebe66e.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./onMountedOrActivated.f9a7813e.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";import"./merge.f321b105.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.43914e4e.js";import"./scrollTo.39f4a54d.js";import"./index.a3bc6812.js";import"./useTable.bd2598d0.js";import"./actionLogData.0b0085da.js";import"./log.271b0b38.js";import"./ContentDetailModal.0cf94906.js";import"./loginLogData.96537b65.js";import"./index.a683ae40.js";const E=D({components:{Description:V,[T.name]:T,ATabs:k,ATabPane:k.TabPane,ActionLog:K,LoginLog:j},setup(){var r;const o=N(),{t}=$(),a=(r=o.params)==null?void 0:r.id,d=f("login"),{setTitle:l}=I(),c=f({}),n=f({});g(this,null,function*(){const m=yield U(a);c.value=m,n.value=m.avatar||R,yield l(t("AccessControl.user.detail_tab_title",{user:m.nickname}))});function i(){return[{field:"username",label:t("AccessControl.user.username")},{field:"admin",label:t("AccessControl.user.admin"),render:s=>s?"Y":"N"},{field:"ownsAllContent",label:t("AccessControl.user.all_content"),render:s=>s?"Y":"N"},{label:t("AccessControl.user.role"),field:"roles",render:s=>(Array.isArray(s)?s:[]).map(L=>L.name).join(", ")},{field:"deptName",label:t("AccessControl.user.dept")},{field:"nickname",label:t("AccessControl.user.nickname")},{label:t("AccessControl.user.email"),field:"email"}]}const e=i();return{prefixCls:"user-detail",schema:e,t,currentTab:d,user:c,avatar:n}}}),O={class:"pt-4 m-4 desc-wrap"};function P(o,t,a,d,l,c){const n=p("Description"),i=p("a-row"),e=p("a-tab-pane"),r=p("a-tabs"),m=p("LoginLog"),s=p("ActionLog");return _(),B("div",{class:b(o.prefixCls)},[u(i,{class:b(`${o.prefixCls}-top`)},{default:A(()=>[u(n,{title:o.t("AccessControl.user.info"),collapseOptions:{canExpand:!0,helpMessage:o.t("AccessControl.user.info_help")},data:o.user,schema:o.schema},null,8,["title","collapseOptions","data","schema"])]),_:1},8,["class"]),v("div",{class:b(`${o.prefixCls}-bottom`)},[u(r,{"default-active-key":"project",activeKey:o.currentTab,"onUpdate:activeKey":t[0]||(t[0]=C=>o.currentTab=C)},{default:A(()=>[u(e,{key:"login",tab:o.t("AccessControl.user.login_log")},null,8,["tab"]),u(e,{key:"action",tab:o.t("AccessControl.user.action_log")},null,8,["tab"])]),_:1},8,["activeKey"])],2),v("div",O,[o.currentTab=="login"?(_(),y(m,{key:0})):h("",!0),o.currentTab=="action"?(_(),y(s,{key:1})):h("",!0)])],2)}var st=w(E,[["render",P],["__scopeId","data-v-2ef150bf"]]);export{st as default};