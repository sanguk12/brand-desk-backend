import{al as S,a as _,W as p,f as r,aB as D,n as d,M as a,_ as f}from"./index.f8b6fa94.js";var P=function(){return{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}},w=_({name:"ADivider",props:P(),setup:function(n,g){var l=g.slots,u=p("divider",n),o=u.prefixCls,h=u.direction,c=r(function(){return n.orientation==="left"&&n.orientationMargin!=null}),v=r(function(){return n.orientation==="right"&&n.orientationMargin!=null}),m=r(function(){var t,i=n.type,C=n.dashed,M=n.plain,e=o.value;return t={},a(t,e,!0),a(t,"".concat(e,"-").concat(i),!0),a(t,"".concat(e,"-dashed"),!!C),a(t,"".concat(e,"-plain"),!!M),a(t,"".concat(e,"-rtl"),h.value==="rtl"),a(t,"".concat(e,"-no-default-orientation-margin-left"),c.value),a(t,"".concat(e,"-no-default-orientation-margin-right"),v.value),t}),x=r(function(){var t=typeof n.orientationMargin=="number"?"".concat(n.orientationMargin,"px"):n.orientationMargin;return f(f({},c.value&&{marginLeft:t}),v.value&&{marginRight:t})}),y=r(function(){return n.orientation.length>0?"-"+n.orientation:n.orientation});return function(){var t,i=D((t=l.default)===null||t===void 0?void 0:t.call(l));return d("div",{class:[m.value,i.length?"".concat(o.value,"-with-text ").concat(o.value,"-with-text").concat(y.value):""],role:"separator"},[i.length?d("span",{class:"".concat(o.value,"-inner-text"),style:x.value},[i]):null])}}}),I=S(w);export{I as D};
