import{a as f,u as h,b as g,c as w,e as y,f as v,o as l,h as k,i as e,j as m,A as b,k as c,l as T,m as t,n as s,p,t as x,q as _}from"./index.9b68f3a5.js";import L from"./LoginForm.85e0be23.js";import S from"./ForgetPasswordForm.940a5e89.js";import $ from"./RegisterForm.abb2bcbc.js";import B from"./MobileForm.557dc4ab.js";import A from"./QrCodeForm.df1a2a56.js";/* empty css              *//* empty css               */import"./LoginFormTitle.cd0fc348.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./_baseIteratee.f572c494.js";import"./get.8f01bfdb.js";import"./_baseProperty.2030e337.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./useSize.48fdc38e.js";import"./index.b8e26f6f.js";import"./index.b9fae046.js";import"./index.8a286a94.js";import"./index.e9a061d5.js";import"./Checkbox.0353578e.js";import"./index.88ecfd13.js";import"./index.c90ef721.js";import"./index.ffa5837b.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";var C="/assets/login-box-bg.9027741f.svg";const D={class:"-enter-x xl:hidden"},I={class:"container relative h-full py-2 mx-auto sm:px-10"},N={class:"flex h-full"},V={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},P={class:"my-auto"},j=["alt"],q={class:"mt-10 font-medium text-white -enter-x"},z={class:"inline-block mt-4 text-3xl"},E={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},G={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},ht=f({name:"Login",props:{sessionTimeout:{type:Boolean}},setup(a){const o=h(),{prefixCls:r}=g("login"),{t:n}=w(),d=y().getShowPicker,u=v(()=>{var i;return(i=o==null?void 0:o.title)!=null?i:""});return(i,F)=>(l(),k("div",{class:_([e(r),"relative w-full h-full px-4"])},[!a.sessionTimeout&&e(d)?(l(),m(e(b),{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):c("",!0),a.sessionTimeout?c("",!0):(l(),m(e(T),{key:1,class:"absolute top-3 right-7 enter-x"})),t("span",D,[s(e(p),{alwaysShowTitle:!0})]),t("div",I,[t("div",N,[t("div",V,[s(e(p),{class:"-enter-x"}),t("div",P,[t("img",{alt:e(u),src:C,class:"w-1/2 -mt-16 -enter-x"},null,8,j),t("div",q,[t("span",z,x(e(n)("sys.login.signInTitle")),1)]),t("div",E,x(e(n)("sys.login.signInDesc")),1)])]),t("div",G,[t("div",{class:_([`${e(r)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[s(L),s(S),s($),s(B),s(A)],2)])])])],2))}});export{ht as default};