import{a as I,W as P,f as b,n as F,H as R,_ as N,M as r,U as W}from"./index.0a8b89be.js";import{u as V}from"./Row.0bf79b77.js";function A(o){return typeof o=="number"?"".concat(o," ").concat(o," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(o)?"0 0 ".concat(o):o}var B=function(){return{span:[String,Number],order:[String,Number],offset:[String,Number],push:[String,Number],pull:[String,Number],xs:{type:[String,Number,Object],default:void 0},sm:{type:[String,Number,Object],default:void 0},md:{type:[String,Number,Object],default:void 0},lg:{type:[String,Number,Object],default:void 0},xl:{type:[String,Number,Object],default:void 0},xxl:{type:[String,Number,Object],default:void 0},xxxl:{type:[String,Number,Object],default:void 0},prefixCls:String,flex:[String,Number]}},L=I({name:"ACol",props:B(),setup:function(u,S){var v=S.slots,p=V(),y=p.gutter,j=p.supportFlexGap,h=p.wrap,g=P("col",u),C=g.prefixCls,_=g.direction,O=b(function(){var t,c=u.span,a=u.order,f=u.offset,d=u.push,x=u.pull,n=C.value,m={};return["xs","sm","md","lg","xl","xxl","xxxl"].forEach(function(s){var l,e={},i=u[s];typeof i=="number"?e.span=i:R(i)==="object"&&(e=i||{}),m=N(N({},m),(l={},r(l,"".concat(n,"-").concat(s,"-").concat(e.span),e.span!==void 0),r(l,"".concat(n,"-").concat(s,"-order-").concat(e.order),e.order||e.order===0),r(l,"".concat(n,"-").concat(s,"-offset-").concat(e.offset),e.offset||e.offset===0),r(l,"".concat(n,"-").concat(s,"-push-").concat(e.push),e.push||e.push===0),r(l,"".concat(n,"-").concat(s,"-pull-").concat(e.pull),e.pull||e.pull===0),r(l,"".concat(n,"-rtl"),_.value==="rtl"),l))}),W(n,(t={},r(t,"".concat(n,"-").concat(c),c!==void 0),r(t,"".concat(n,"-order-").concat(a),a),r(t,"".concat(n,"-offset-").concat(f),f),r(t,"".concat(n,"-push-").concat(d),d),r(t,"".concat(n,"-pull-").concat(x),x),t),m)}),w=b(function(){var t=u.flex,c=y.value,a={};if(c&&c[0]>0){var f="".concat(c[0]/2,"px");a.paddingLeft=f,a.paddingRight=f}if(c&&c[1]>0&&!j.value){var d="".concat(c[1]/2,"px");a.paddingTop=d,a.paddingBottom=d}return t&&(a.flex=A(t),h.value===!1&&!a.minWidth&&(a.minWidth=0)),a});return function(){var t;return F("div",{class:O.value,style:w.value},[(t=v.default)===null||t===void 0?void 0:t.call(v)])}}});export{L as C};
