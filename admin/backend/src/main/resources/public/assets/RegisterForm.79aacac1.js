var k=(x,n,i)=>new Promise((t,c)=>{var p=s=>{try{m(i.next(s))}catch(u){c(u)}},d=s=>{try{m(i.throw(s))}catch(u){c(u)}},m=s=>s.done?t(s.value):Promise.resolve(s.value).then(p,d);m((i=i.apply(x,n)).next())});import{u as I,a as S,L as R,_,b as P}from"./LoginFormTitle.742e7ff0.js";import{a as B,I as g,c as U,s as w,v as L,f as E,i as e,o as N,h as V,n as o,y as r,z as y,t as v,B as b,F as T,k as D}from"./index.0a8b89be.js";import{C as G}from"./index.281aa2ea.js";/* empty css               *//* empty css              */import{S as M}from"./index.14059c69.js";import{C as $}from"./index.f5f3d84b.js";import{F as C}from"./Form.b63e2253.js";import"./Checkbox.e21486b4.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./_baseIteratee.b2478045.js";import"./get.40773c6b.js";import"./_baseProperty.2030e337.js";import"./toInteger.728c1e91.js";import"./Col.a8b0ef91.js";import"./useSize.d9666d99.js";const re=B({name:"RegisterForm",setup(x){const n=C.Item,i=g.Password,{t}=U(),{handleBackLogin:c,getLoginState:p}=I(),d=w(),m=w(!1),s=L({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:u}=S(s),{validForm:F}=P(d),h=E(()=>e(p)===R.REGISTER);function z(){return k(this,null,function*(){const f=yield F()})}return(f,a)=>e(h)?(N(),V(T,{key:0},[o(_,{class:"enter-x"}),o(e(C),{class:"p-4 enter-x",model:s,rules:e(u),ref_key:"formRef",ref:d},{default:r(()=>[o(e(n),{name:"account",class:"enter-x"},{default:r(()=>[o(e(g),{class:"fix-auto-fill",size:"large",value:s.account,"onUpdate:value":a[0]||(a[0]=l=>s.account=l),placeholder:e(t)("sys.login.userName")},null,8,["value","placeholder"])]),_:1}),o(e(n),{name:"mobile",class:"enter-x"},{default:r(()=>[o(e(g),{size:"large",value:s.mobile,"onUpdate:value":a[1]||(a[1]=l=>s.mobile=l),placeholder:e(t)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),o(e(n),{name:"sms",class:"enter-x"},{default:r(()=>[o(e($),{size:"large",class:"fix-auto-fill",value:s.sms,"onUpdate:value":a[2]||(a[2]=l=>s.sms=l),placeholder:e(t)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),o(e(n),{name:"password",class:"enter-x"},{default:r(()=>[o(e(M),{size:"large",value:s.password,"onUpdate:value":a[3]||(a[3]=l=>s.password=l),placeholder:e(t)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),o(e(n),{name:"confirmPassword",class:"enter-x"},{default:r(()=>[o(e(i),{size:"large",visibilityToggle:"",value:s.confirmPassword,"onUpdate:value":a[4]||(a[4]=l=>s.confirmPassword=l),placeholder:e(t)("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),o(e(n),{class:"enter-x",name:"policy"},{default:r(()=>[o(e(G),{checked:s.policy,"onUpdate:checked":a[5]||(a[5]=l=>s.policy=l),size:"small"},{default:r(()=>[y(v(e(t)("sys.login.policy")),1)]),_:1},8,["checked"])]),_:1}),o(e(b),{type:"primary",class:"enter-x",size:"large",block:"",onClick:z,loading:m.value},{default:r(()=>[y(v(e(t)("sys.login.registerButton")),1)]),_:1},8,["loading"]),o(e(b),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(c)},{default:r(()=>[y(v(e(t)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])],64)):D("",!0)}});export{re as default};
