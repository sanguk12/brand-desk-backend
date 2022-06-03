import{a as V,ac as n,U as L,M as p,aa as G,n as c,_ as O,ci as H,V as $,dh as J,aj as K,W as Q,cE as X,f as U,dU as Y,c5 as Z,b$ as ee}from"./index.f8b6fa94.js";import{P as te}from"./index.65e8311b.js";var ne=globalThis&&globalThis.__rest||function(v,e){var g={};for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&e.indexOf(t)<0&&(g[t]=v[t]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,t=Object.getOwnPropertySymbols(v);C<t.length;C++)e.indexOf(t[C])<0&&Object.prototype.propertyIsEnumerable.call(v,t[C])&&(g[t[C]]=v[t[C]]);return g},ie=V({name:"Steps",props:{type:n.string.def("default"),prefixCls:n.string.def("vc-steps"),iconPrefix:n.string.def("vc"),direction:n.string.def("horizontal"),labelPlacement:n.string.def("horizontal"),status:n.string.def("process"),size:n.string.def(""),progressDot:n.oneOfType([n.looseBool,n.func]).def(!1),initial:n.number.def(0),current:n.number.def(0),icons:n.shape({finish:n.any,error:n.any}).loose,stepIcon:Function},slots:["stepIcon","progressDot"],emits:["change"],setup:function(e,g){var t=g.slots,C=g.emit,j=function(i){var o=e.current;o!==i&&C("change",i)};return function(){var b,i,o=e.prefixCls,f=e.direction,l=e.type,x=e.labelPlacement,a=e.iconPrefix,u=e.status,y=e.size,s=e.current,d=e.progressDot,r=d===void 0?t.progressDot:d,k=e.initial,S=e.icons,P=e.stepIcon,_=P===void 0?t.stepIcon:P,m=l==="navigation",N=r?"vertical":x,D=L(o,"".concat(o,"-").concat(f),(b={},p(b,"".concat(o,"-").concat(y),y),p(b,"".concat(o,"-label-").concat(N),f==="horizontal"),p(b,"".concat(o,"-dot"),!!r),p(b,"".concat(o,"-navigation"),m),b)),T=G((i=t.default)===null||i===void 0?void 0:i.call(t));return c("div",{class:D},[T.map(function(w,z){var B=w.props||{},F=B.prefixCls,W=F===void 0?o:F,R=ne(B,["prefixCls"]),I=k+z,h=O(O({},R),{stepNumber:I+1,stepIndex:I,key:I,prefixCls:W,iconPrefix:a,progressDot:r,icons:S,stepIcon:_,onStepClick:j});return u==="error"&&z===s-1&&(h.class="".concat(o,"-next-error")),R.status||(I===s?h.status=u:I<s?h.status="finish":h.status="wait"),h.active=I===s,H(w,h)})])}}});function A(v){return typeof v=="string"}function se(){}var q=function(){return{prefixCls:String,wrapperStyle:{type:Object,default:void 0},itemWidth:String,active:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},status:String,iconPrefix:String,icon:n.any,adjustMarginRight:String,stepNumber:Number,stepIndex:Number,description:n.any,title:n.any,subTitle:n.any,progressDot:J(n.oneOfType([n.looseBool,n.func])),tailContent:n.any,icons:n.shape({finish:n.any,error:n.any}).loose,onClick:Function,onStepClick:Function,stepIcon:Function}},oe=V({name:"Step",props:q(),slots:["title","subTitle","description","tailContent","stepIcon","progressDot"],emits:["click","stepClick"],setup:function(e,g){var t=g.slots,C=g.emit,j=function(o){C("click",o),C("stepClick",e.stepIndex)},b=function(o){var f,l=o.icon,x=o.title,a=o.description,u=e.prefixCls,y=e.stepNumber,s=e.status,d=e.iconPrefix,r=e.icons,k=e.progressDot,S=k===void 0?t.progressDot:k,P=e.stepIcon,_=P===void 0?t.stepIcon:P,m,N=(f={},p(f,"".concat(u,"-icon"),!0),p(f,"".concat(d,"icon"),!0),p(f,"".concat(d,"icon-").concat(l),l&&A(l)),p(f,"".concat(d,"icon-check"),!l&&s==="finish"&&r&&!r.finish),p(f,"".concat(d,"icon-close"),!l&&s==="error"&&r&&!r.error),f),D=c("span",{class:"".concat(u,"-icon-dot")},null);return S?typeof S=="function"?m=c("span",{class:"".concat(u,"-icon")},[S({iconDot:D,index:y-1,status:s,title:x,description:a,prefixCls:u})]):m=c("span",{class:"".concat(u,"-icon")},[D]):l&&!A(l)?m=c("span",{class:"".concat(u,"-icon")},[l]):r&&r.finish&&s==="finish"?m=c("span",{class:"".concat(u,"-icon")},[r.finish]):r&&r.error&&s==="error"?m=c("span",{class:"".concat(u,"-icon")},[r.error]):l||s==="finish"||s==="error"?m=c("span",{class:N},null):m=c("span",{class:"".concat(u,"-icon")},[y]),_&&(m=_({index:y-1,status:s,title:x,description:a,node:m})),m};return function(){var i,o,f,l,x,a=e.prefixCls,u=e.itemWidth,y=e.active,s=e.status,d=s===void 0?"wait":s,r=e.tailContent,k=e.adjustMarginRight,S=e.disabled,P=e.title,_=P===void 0?(o=t.title)===null||o===void 0?void 0:o.call(t):P,m=e.description,N=m===void 0?(f=t.description)===null||f===void 0?void 0:f.call(t):m,D=e.subTitle,T=D===void 0?(l=t.subTitle)===null||l===void 0?void 0:l.call(t):D,w=e.icon,z=w===void 0?(x=t.icon)===null||x===void 0?void 0:x.call(t):w,B=e.onClick,F=e.onStepClick,W=(i={},p(i,"".concat(a,"-item"),!0),p(i,"".concat(a,"-item-").concat(d),!0),p(i,"".concat(a,"-item-custom"),z),p(i,"".concat(a,"-item-active"),y),p(i,"".concat(a,"-item-disabled"),S===!0),i),R={class:W},I={};u&&(I.width=u),k&&(I.marginRight=k);var h={onClick:B||se};return F&&!S&&(h.role="button",h.tabindex=0,h.onClick=j),c("div",$($({},R),{},{style:I}),[c("div",$($({},h),{},{class:"".concat(a,"-item-container")}),[c("div",{class:"".concat(a,"-item-tail")},[r]),c("div",{class:"".concat(a,"-item-icon")},[b({icon:z,title:_,description:N})]),c("div",{class:"".concat(a,"-item-content")},[c("div",{class:"".concat(a,"-item-title")},[_,T&&c("div",{title:T,class:"".concat(a,"-item-subtitle")},[T])]),N&&c("div",{class:"".concat(a,"-item-description")},[N])])])])}}}),ce=function(){return{prefixCls:String,iconPrefix:String,current:Number,initial:Number,percent:Number,responsive:{type:Boolean,default:void 0},labelPlacement:String,status:String,size:String,direction:String,progressDot:{type:[Boolean,Function],default:void 0},type:String,onChange:Function,"onUpdate:current":Function}},E=V({name:"ASteps",inheritAttrs:!1,props:K(ce(),{current:0,responsive:!0,labelPlacement:"horizontal"}),slots:["progressDot"],setup:function(e,g){var t=g.attrs,C=g.slots,j=g.emit,b=Q("steps",e),i=b.prefixCls,o=b.direction,f=b.configProvider,l=X(),x=U(function(){return e.responsive&&l.value.xs?"vertical":e.direction}),a=U(function(){return f.getPrefixCls("",e.iconPrefix)}),u=function(d){j("update:current",d),j("change",d)},y=function(d){var r=d.node,k=d.status;if(k==="process"&&e.percent!==void 0){var S=e.size==="small"?32:40,P=c("div",{class:"".concat(i,"-progress-icon")},[c(te,{type:"circle",percent:e.percent,width:S,strokeWidth:4,format:function(){return null}},null),r]);return P}return r};return function(){var s,d=L((s={},p(s,"".concat(i.value,"-rtl"),o.value==="rtl"),p(s,"".concat(i.value,"-with-progress"),e.percent!==void 0),s),t.class),r={finish:c(Y,{class:"".concat(i,"-finish-icon")},null),error:c(Z,{class:"".concat(i,"-error-icon")},null)};return c(ie,$($({icons:r},ee(e,["percent","responsive"])),{},{direction:x.value,prefixCls:i.value,iconPrefix:a.value,class:d,onChange:u}),O(O({},C),{stepIcon:y}))}}}),M=V(O(O({},oe),{name:"AStep",props:q()})),le=O(E,{Step:M,install:function(e){return e.component(E.name,E),e.component(M.name,M),e}});export{le as S};