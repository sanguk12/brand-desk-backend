var t=(i,o,n)=>new Promise((r,c)=>{var d=s=>{try{a(n.next(s))}catch(l){c(l)}},e=s=>{try{a(n.throw(s))}catch(l){c(l)}},a=s=>s.done?r(s.value):Promise.resolve(s.value).then(d,e);a((n=n.apply(i,o)).next())});import{s as f,bZ as u,i as m,cB as h,X as y,dx as F,ad as w,e2 as p}from"./index.9b68f3a5.js";function b(i){const o=f(null),n=f(!1);function r(){return t(this,null,function*(){const e=m(o);return e||F("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),yield w(),e})}function c(e){u(()=>{o.value=null,n.value=null}),!(m(n)&&h()&&e===m(o))&&(o.value=e,n.value=!0,y(()=>i,()=>{i&&e.setProps(p(i))},{immediate:!0,deep:!0}))}return[c,{scrollToField:(e,a)=>t(this,null,function*(){(yield r()).scrollToField(e,a)}),setProps:e=>t(this,null,function*(){(yield r()).setProps(e)}),updateSchema:e=>t(this,null,function*(){(yield r()).updateSchema(e)}),resetSchema:e=>t(this,null,function*(){(yield r()).resetSchema(e)}),clearValidate:e=>t(this,null,function*(){(yield r()).clearValidate(e)}),resetFields:()=>t(this,null,function*(){r().then(e=>t(this,null,function*(){yield e.resetFields()}))}),removeSchemaByFiled:e=>t(this,null,function*(){var a;(a=m(o))==null||a.removeSchemaByFiled(e)}),getFieldsValue:()=>{var e;return(e=m(o))==null?void 0:e.getFieldsValue()},setFieldsValue:e=>t(this,null,function*(){(yield r()).setFieldsValue(e)}),appendSchemaByField:(e,a,s)=>t(this,null,function*(){(yield r()).appendSchemaByField(e,a,s)}),submit:()=>t(this,null,function*(){return(yield r()).submit()}),validate:e=>t(this,null,function*(){return(yield r()).validate(e)}),validateFields:e=>t(this,null,function*(){return(yield r()).validateFields(e)})}]}export{b as u};
