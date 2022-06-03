import{a4 as W,i as c,fj as w,fk as v,a9 as x,s as y,fl as b,am as $,fm as g,ap as R,a as B,cA as I,ar as k,o as P,j as z,y as m,n as u,z as C}from"./index.f8b6fa94.js";import{P as M}from"./index.7cdcb74e.js";import"./index.fd9bf113.js";import"./index.7880b903.js";import"./useSize.3eb1ac1b.js";import"./eagerComputed.d49f1c93.js";import"./onMountedOrActivated.73153770.js";import"./useWindowSizeFn.268c75c1.js";import"./useContentViewHeight.a5b3eda6.js";import"./ArrowLeftOutlined.2c75bf82.js";import"./index.fad130bb.js";import"./transButton.7ec2a071.js";const S=Symbol("watermark-dom");function j(n=y(document.body)){const r=b(function(){const t=c(n);if(!t)return;const{clientHeight:e,clientWidth:o}=t;i({height:e,width:o})}),s=S.toString(),l=W(),f=()=>{const t=c(l);l.value=void 0;const e=c(n);!e||(t&&e.removeChild(t),w(e,r))};function _(t){const e=document.createElement("canvas"),o=300,d=240;Object.assign(e,{width:o,height:d});const a=e.getContext("2d");return a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(t,o/20,d)),e.toDataURL("image/png")}function i(t={}){const e=c(l);!e||(g(t.width)&&(e.style.width=`${t.width}px`),g(t.height)&&(e.style.height=`${t.height}px`),g(t.str)&&(e.style.background=`url(${_(t.str)}) left top repeat`))}const p=t=>{if(c(l))return i({str:t}),s;const e=document.createElement("div");l.value=e,e.id=s,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const o=c(n);if(!o)return s;const{clientHeight:d,clientWidth:a}=o;return i({str:t,width:a,height:d}),o.appendChild(e),s};function h(t){p(t),v(document.documentElement,r),$()&&x(()=>{f()})}return{setWatermark:h,clear:f}}const A=B({components:{CollapseContainer:I,PageWrapper:M},setup(){const n=y(null),{setWatermark:r,clear:s}=j();return{setWatermark:r,clear:s,areaRef:n}}}),E=C(" Create "),L=C(" Clear "),N=C(" Reset ");function T(n,r,s,l,f,_){const i=k("a-button"),p=k("CollapseContainer"),h=k("PageWrapper");return P(),z(h,{title:"\u6C34\u5370\u793A\u4F8B"},{default:m(()=>[u(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:m(()=>[u(i,{type:"primary",class:"mr-2",onClick:r[0]||(r[0]=t=>n.setWatermark("WaterMark Info"))},{default:m(()=>[E]),_:1}),u(i,{color:"error",class:"mr-2",onClick:n.clear},{default:m(()=>[L]),_:1},8,["onClick"]),u(i,{color:"warning",class:"mr-2",onClick:r[1]||(r[1]=t=>n.setWatermark("WaterMark Info New"))},{default:m(()=>[N]),_:1})]),_:1})]),_:1})}var Y=R(A,[["render",T]]);export{Y as default};
