var u=(t,i,o)=>new Promise((m,r)=>{var a=e=>{try{s(o.next(e))}catch(n){r(n)}},p=e=>{try{s(o.throw(e))}catch(n){r(n)}},s=e=>e.done?m(e.value):Promise.resolve(e.value).then(a,p);s((o=o.apply(t,i)).next())});import{P as _}from"./index.27ebe66e.js";import{B as h}from"./BasicForm.6899d0a5.js";import{u as P}from"./useForm.b2949832.js";import{ap as g,a as y,ar as c,o as C,j as b,y as l,m as f,n as d,z as w}from"./index.9b68f3a5.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./useSize.48fdc38e.js";import"./eagerComputed.4def26ea.js";import"./onMountedOrActivated.f9a7813e.js";import"./useWindowSizeFn.d868051d.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";/* empty css               *//* empty css              */import"./index.c90ef721.js";import"./index.7b6b1e1d.js";import"./Checkbox.0353578e.js";import"./index.e9a061d5.js";import"./index.6344e34d.js";import"./index.ea5e7c7e.js";import"./index.f5ce31a5.js";import"./index.8a286a94.js";import"./get.8f01bfdb.js";import"./index.6b109d0e.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./index.3604fdfb.js";import"./index.64609094.js";import"./index.c6d9e38a.js";import"./FullscreenOutlined.33f2b7f2.js";import"./index.54a0672f.js";import"./index.f93c2cff.js";import"./uuid.2b29000c.js";import"./download.434637e8.js";import"./base64Conver.08b9f4ec.js";import"./index.88ecfd13.js";import"./index.32457c96.js";import"./index.b8e26f6f.js";import"./uniqBy.b254c588.js";import"./index.b9fae046.js";const B=[{field:"passwordOld",label:"Current Password",component:"InputPassword",required:!0},{field:"passwordNew",label:"New Password",component:"StrengthMeter",componentProps:{placeholder:"New Password"},rules:[{required:!0,message:"Please enter a new password"}]},{field:"confirmPassword",label:"Confirm Password",component:"InputPassword",dynamicRules:({values:t})=>[{required:!0,validator:(i,o)=>o?o!==t.passwordNew?Promise.reject("The two entered passwords do not match!"):Promise.resolve():Promise.reject("Can not be empty")}]}],N=y({name:"ChangePassword",components:{BasicForm:h,PageWrapper:_},setup(){const[t,{validate:i,resetFields:o}]=P({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:B});function m(){return u(this,null,function*(){try{const r=yield i(),{passwordOld:a,passwordNew:p}=r}catch(r){}})}return{register:t,resetFields:o,handleSubmit:m}}}),v={class:"py-8 bg-white flex flex-col justify-center items-center"},k={class:"flex justify-center"},x=w("Reset"),F=w("Confirm");function j(t,i,o,m,r,a){const p=c("BasicForm"),s=c("a-button"),e=c("PageWrapper");return C(),b(e,{title:"Modify the current user password",content:"After the modification is successful, the current login will be automatically logged out!"},{default:l(()=>[f("div",v,[d(p,{onRegister:t.register},null,8,["onRegister"]),f("div",k,[d(s,{onClick:t.resetFields},{default:l(()=>[x]),_:1},8,["onClick"]),d(s,{class:"!ml-4",type:"primary",onClick:t.handleSubmit},{default:l(()=>[F]),_:1},8,["onClick"])])])]),_:1})}var Ro=g(N,[["render",j]]);export{Ro as default};