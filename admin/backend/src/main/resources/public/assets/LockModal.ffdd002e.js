var f=(o,l,r)=>new Promise((c,s)=>{var d=e=>{try{t(r.next(e))}catch(i){s(i)}},a=e=>{try{t(r.throw(e))}catch(i){s(i)}},t=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,a);t((r=r.apply(o,l)).next())});import{ap as y,a as w,b as $,r as F,f as _,ar as u,o as L,j as M,y as g,m,q as n,t as k,n as h,z as S,as as I,c as N}from"./index.0a8b89be.js";import{B as R,a as b}from"./index.b536e7c7.js";import{B as P}from"./BasicForm.90108631.js";import{u as U}from"./useForm.14189227.js";import{u as V}from"./lock.745b2967.js";import{h as q}from"./avata.e91355cf.js";import"./useWindowSizeFn.64599f54.js";import"./FullscreenOutlined.9f59f3fc.js";/* empty css               *//* empty css              */import"./index.8eadf802.js";import"./index.d06f97b4.js";import"./Checkbox.e21486b4.js";import"./index.281aa2ea.js";import"./index.5485e619.js";import"./index.bd809198.js";import"./index.1b5c222a.js";import"./index.f5f3d84b.js";import"./get.40773c6b.js";import"./index.5f1bdad7.js";import"./eagerComputed.d89357d9.js";import"./index.14314bc3.js";import"./_baseEach.0f4dbd6f.js";import"./_baseIteratee.b2478045.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.b8e551ed.js";import"./index.ac3b1fda.js";import"./useRefs.f7f322ba.js";import"./Form.b63e2253.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";import"./index.5a0c5bc8.js";import"./index.b2d27a9d.js";import"./index.bacabee8.js";import"./index.4a0da81f.js";import"./uuid.2b29000c.js";import"./download.edb4e6af.js";import"./base64Conver.08b9f4ec.js";import"./index.14059c69.js";import"./index.04c8d476.js";import"./index.25fd638a.js";import"./uniqBy.7ccff7b8.js";import"./index.624fc280.js";const z=w({name:"LockModal",components:{BasicModal:R,BasicForm:P},setup(){const{t:o}=N(),{prefixCls:l}=$("header-lock-modal"),r=F(),c=V(),s=_(()=>{var p;return(p=r.getUserInfo)==null?void 0:p.realName}),[d,{closeModal:a}]=b(),[t,{validateFields:e,resetFields:i}]=U({showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield e()).password;a(),c.setLockInfo({isLock:!0,pwd:C}),yield i()})}const B=_(()=>{const{avatar:p}=r.getUserInfo;return p||q});return{t:o,prefixCls:l,getRealName:s,register:d,registerForm:t,handleLock:v,avatar:B}}}),D=["src"];function j(o,l,r,c,s,d){const a=u("BasicForm"),t=u("a-button"),e=u("BasicModal");return L(),M(e,I({footer:null,title:o.t("layout.header.lockScreen")},o.$attrs,{class:o.prefixCls,onRegister:o.register}),{default:g(()=>[m("div",{class:n(`${o.prefixCls}__entry`)},[m("div",{class:n(`${o.prefixCls}__header`)},[m("img",{src:o.avatar,class:n(`${o.prefixCls}__header-img`)},null,10,D),m("p",{class:n(`${o.prefixCls}__header-name`)},k(o.getRealName),3)],2),h(a,{onRegister:o.registerForm},null,8,["onRegister"]),m("div",{class:n(`${o.prefixCls}__footer`)},[h(t,{type:"primary",block:"",class:"mt-2",onClick:o.handleLock},{default:g(()=>[S(k(o.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var Uo=y(z,[["render",j]]);export{Uo as default};
