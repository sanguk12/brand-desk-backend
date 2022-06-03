import{n as o,M as _,R as le,s as M,cF as ae,cG as oe,cH as re,_ as f,F as ce,ac as N,a as Z,W as ie,bn as se,aG as J,H as ee,a9 as ue,Q as de,bB as K,f as ve,aB as fe,aH as X,ci as ye,ak as be}from"./index.0a8b89be.js";function L(l){return l!=null}var pe=function(e){var n=e.itemPrefixCls,t=e.component,r=e.span,a=e.labelStyle,u=e.contentStyle,p=e.bordered,i=e.label,s=e.content,c=e.colon,S=t;if(p){var d;return o(S,{class:[(d={},_(d,"".concat(n,"-item-label"),L(i)),_(d,"".concat(n,"-item-content"),L(s)),d)],colSpan:r},{default:function(){return[L(i)&&o("span",{style:a},[i]),L(s)&&o("span",{style:u},[s])]}})}return o(S,{class:["".concat(n,"-item")],colSpan:r},{default:function(){return[o("div",{class:"".concat(n,"-item-container")},[i&&o("span",{class:["".concat(n,"-item-label"),_({},"".concat(n,"-item-no-colon"),!c)],style:a},[i]),s&&o("span",{class:"".concat(n,"-item-content"),style:u},[s])])]}})},E=pe,me=function(e){var n=function(d,y,b){var P=y.colon,D=y.prefixCls,C=y.bordered,x=b.component,k=b.type,O=b.showLabel,R=b.showContent,h=b.labelStyle,j=b.contentStyle;return d.map(function(v,$){var g,I,m=v.props||{},H=m.prefixCls,B=H===void 0?D:H,U=m.span,G=U===void 0?1:U,T=m.labelStyle,Q=m.contentStyle,V=m.label,W=V===void 0?(I=(g=v.children)===null||g===void 0?void 0:g.label)===null||I===void 0?void 0:I.call(g):V,q=ae(v),A=oe(v),F=re(v),z=v.key;return typeof x=="string"?o(E,{key:"".concat(k,"-").concat(String(z)||$),class:A,style:F,labelStyle:f(f({},h.value),T),contentStyle:f(f({},j.value),Q),span:G,colon:P,component:x,itemPrefixCls:B,bordered:C,label:O?W:null,content:R?q:null},null):[o(E,{key:"label-".concat(String(z)||$),class:A,style:f(f(f({},h.value),F),T),span:1,colon:P,component:x[0],itemPrefixCls:B,bordered:C,label:W},null),o(E,{key:"content-".concat(String(z)||$),class:A,style:f(f(f({},j.value),F),Q),span:G*2-1,component:x[1],itemPrefixCls:B,bordered:C,content:q},null)]})},t=e.prefixCls,r=e.vertical,a=e.row,u=e.index,p=e.bordered,i=le(ne,{labelStyle:M({}),contentStyle:M({})}),s=i.labelStyle,c=i.contentStyle;return r?o(ce,null,[o("tr",{key:"label-".concat(u),class:"".concat(t,"-row")},[n(a,e,{component:"th",type:"label",showLabel:!0,labelStyle:s,contentStyle:c})]),o("tr",{key:"content-".concat(u),class:"".concat(t,"-row")},[n(a,e,{component:"td",type:"content",showContent:!0,labelStyle:s,contentStyle:c})])]):o("tr",{key:u,class:"".concat(t,"-row")},[n(a,e,{component:p?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:s,contentStyle:c})])},Se=me;N.any;var Ce=function(){return{prefixCls:String,label:N.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},xe=Z({name:"ADescriptionsItem",props:Ce(),slots:["label"],setup:function(e,n){var t=n.slots;return function(){var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),te={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function he(l,e){if(typeof l=="number")return l;if(ee(l)==="object")for(var n=0;n<X.length;n++){var t=X[n];if(e[t]&&l[t]!==void 0)return l[t]||te[t]}return 3}function Y(l,e,n){var t=l;return(e===void 0||e>n)&&(t=ye(l,{span:n}),be(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}function ge(l,e){var n=fe(l),t=[],r=[],a=e;return n.forEach(function(u,p){var i,s=(i=u.props)===null||i===void 0?void 0:i.span,c=s||1;if(p===n.length-1){r.push(Y(u,s,a)),t.push(r);return}c<a?(a-=c,r.push(u)):(r.push(Y(u,c,a)),t.push(r),a=e,r=[])}),t}var we=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:N.any,extra:N.any,column:{type:[Number,Object],default:function(){return te}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},ne=Symbol("descriptionsContext"),w=Z({name:"ADescriptions",props:we(),slots:["title","extra"],Item:xe,setup:function(e,n){var t=n.slots,r=ie("descriptions",e),a=r.prefixCls,u=r.direction,p,i=M({});se(function(){p=J.subscribe(function(c){ee(e.column)==="object"&&(i.value=c)})}),ue(function(){J.unsubscribe(p)}),de(ne,{labelStyle:K(e,"labelStyle"),contentStyle:K(e,"contentStyle")});var s=ve(function(){return he(e.column,i.value)});return function(){var c,S,d,y,b=e.size,P=e.bordered,D=P===void 0?!1:P,C=e.layout,x=C===void 0?"horizontal":C,k=e.colon,O=k===void 0?!0:k,R=e.title,h=R===void 0?(S=t.title)===null||S===void 0?void 0:S.call(t):R,j=e.extra,v=j===void 0?(d=t.extra)===null||d===void 0?void 0:d.call(t):j,$=(y=t.default)===null||y===void 0?void 0:y.call(t),g=ge($,s.value);return o("div",{class:[a.value,(c={},_(c,"".concat(a.value,"-").concat(b),b!=="default"),_(c,"".concat(a.value,"-bordered"),!!D),_(c,"".concat(a.value,"-rtl"),u.value==="rtl"),c)]},[(h||v)&&o("div",{class:"".concat(a.value,"-header")},[h&&o("div",{class:"".concat(a.value,"-title")},[h]),v&&o("div",{class:"".concat(a.value,"-extra")},[v])]),o("div",{class:"".concat(a.value,"-view")},[o("table",null,[o("tbody",null,[g.map(function(I,m){return o(Se,{key:m,index:m,colon:O,prefixCls:a.value,vertical:x==="vertical",bordered:D,row:I},null)})])])])])}}});w.install=function(l){return l.component(w.name,w),l.component(w.Item.name,w.Item),l};var Pe=w;export{Pe as D};
