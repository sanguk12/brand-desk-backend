var i=(s,n,t)=>new Promise((l,c)=>{var u=o=>{try{a(t.next(o))}catch(r){c(r)}},p=o=>{try{a(t.throw(o))}catch(r){c(r)}},a=o=>o.done?l(o.value):Promise.resolve(o.value).then(u,p);a((t=t.apply(s,n)).next())});import{g as m}from"./role.f2d76f65.js";import{g as f}from"./dept.e04c0af6.js";import{c as C,n as d,bQ as h,fI as b,fJ as A,D as w}from"./index.f8b6fa94.js";import{S as I}from"./index.12c7904d.js";import{T as k}from"./index.e501ff06.js";const{t:e}=C(),_=[{title:e("AccessControl.user.username"),dataIndex:"username",width:100},{title:e("AccessControl.user.nickname"),dataIndex:"nickname",width:100},{title:e("AccessControl.user.email"),dataIndex:"email",width:120},{title:e("AccessControl.user.dept"),dataIndex:"deptName",width:130},{title:e("AccessControl.user.role"),dataIndex:"roles",width:150,customRender:({record:s})=>{const n=s.roles,t=[];for(const l of n)t.push(d(k,{key:"{value.id}",color:"blue"},{default:()=>[l.name]}));return d("span",null,[t])}},{title:e("AccessControl.user.status"),dataIndex:"disabled",width:100,customRender:({record:s})=>(Reflect.has(s,"disabled")||(s.disabled=!1),h(I,{checked:s.disabled,checkedChildren:e("AccessControl.user.status_disabled"),unCheckedChildren:e("AccessControl.user.status_enabled"),loading:s.pendingStatus,onChange(t){return i(this,null,function*(){s.pendingStatus=!0;const{createMessage:l}=w();t?(yield b(s.id),s.disabled=!0):(yield A(s.id),s.disabled=!1),l.success(e("AccessControl.user.status_updated")),s.pendingStatus=!1})}}))},{title:e("AccessControl.user.locked"),dataIndex:"locked",width:100,customRender:({record:s})=>s.locked?e("AccessControl.user.invalid"):e("AccessControl.user.valid")},{title:e("AccessControl.user.create_date"),dataIndex:"createDate",format:"date|YYYY-MM-DD HH:mm:ss",width:180}],y=[{field:"name",label:e("AccessControl.user.name"),component:"Input",colProps:{span:8}},{field:"nickname",label:e("AccessControl.user.nickname"),component:"Input",colProps:{span:8}}],D=[{field:"id",label:e("AccessControl.user.id"),component:"Input",show:!1},{field:"username",label:e("AccessControl.user.username"),component:"Input",helpMessage:["This field demonstrates asynchronous validation","Cannot enter username with admin"],colProps:{span:24}},{field:"admin",component:"Checkbox",label:e("AccessControl.user.admin"),colProps:{span:24}},{field:"ownsAllContent",component:"Checkbox",label:e("AccessControl.user.all_content"),colProps:{span:24}},{field:"password",label:e("AccessControl.user.password"),labelWidth:200,component:"InputPassword",required:!0,ifShow:!1,colProps:{span:24}},{field:"repassword",label:e("AccessControl.user.password_confirm"),labelWidth:200,component:"InputPassword",required:!0,ifShow:!1,colProps:{span:24}},{label:e("AccessControl.user.role"),field:"roleIds",component:"ApiSelect",componentProps:{mode:"multiple",api:m,resultField:"list",fieldNames:{label:"name",key:"id",value:"id"}},required:!0,colProps:{span:24}},{field:"deptId",label:e("AccessControl.user.dept"),component:"ApiTreeSelect",componentProps:{resultField:"list",api:f,fieldNames:{label:"name",key:"id",value:"id"}},required:!0,colProps:{span:24}},{field:"nickname",label:e("AccessControl.user.nickname"),component:"Input",required:!0,colProps:{span:24}},{label:e("AccessControl.user.email"),field:"email",component:"Input",required:!0,colProps:{span:24}},{label:e("AccessControl.user.email_verified"),field:"email",component:"Checkbox",required:!0,colProps:{span:24}}];export{_ as columns,y as searchFormSchema,D as userFormSchema};
