import{R as h,f as n,Q as P,ab as R,a as F,W as I,s as N,aA as B,aG as b,H as i,a9 as z,aH as j,U as H,M as c,n as K}from"./index.0a8b89be.js";import{u as M}from"./useFlexGapSupport.4f13b498.js";var A=Symbol("rowContextKey"),U=function(t){P(A,t)},T=function(){return h(A,{gutter:n(function(){}),wrap:n(function(){}),supportFlexGap:n(function(){})})};R("top","middle","bottom","stretch");R("start","end","center","space-around","space-between");var E=function(){return{align:String,justify:String,prefixCls:String,gutter:{type:[Number,Array],default:0},wrap:{type:Boolean,default:void 0}}},L=F({name:"ARow",props:E(),setup:function(t,G){var d=G.slots,p=I("row",t),u=p.prefixCls,C=p.direction,m,g=N({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0,xxxl:!0}),w=M();B(function(){m=b.subscribe(function(e){var r=t.gutter||0;(!Array.isArray(r)&&i(r)==="object"||Array.isArray(r)&&(i(r[0])==="object"||i(r[1])==="object"))&&(g.value=e)})}),z(function(){b.unsubscribe(m)});var y=n(function(){var e=[0,0],r=t.gutter,a=r===void 0?0:r,o=Array.isArray(a)?a:[a,0];return o.forEach(function(s,x){if(i(s)==="object")for(var f=0;f<j.length;f++){var v=j[f];if(g.value[v]&&s[v]!==void 0){e[x]=s[v];break}}else e[x]=s||0}),e});U({gutter:y,supportFlexGap:w,wrap:n(function(){return t.wrap})});var S=n(function(){var e;return H(u.value,(e={},c(e,"".concat(u.value,"-no-wrap"),t.wrap===!1),c(e,"".concat(u.value,"-").concat(t.justify),t.justify),c(e,"".concat(u.value,"-").concat(t.align),t.align),c(e,"".concat(u.value,"-rtl"),C.value==="rtl"),e))}),_=n(function(){var e=y.value,r={},a=e[0]>0?"".concat(e[0]/-2,"px"):void 0,o=e[1]>0?"".concat(e[1]/-2,"px"):void 0;return a&&(r.marginLeft=a,r.marginRight=a),w.value?r.rowGap="".concat(e[1],"px"):o&&(r.marginTop=o,r.marginBottom=o),r});return function(){var e;return K("div",{class:S.value,style:_.value},[(e=d.default)===null||e===void 0?void 0:e.call(d)])}}}),V=L;export{V as R,T as u};
