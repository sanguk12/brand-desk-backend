var h=(t,i,e)=>new Promise((a,o)=>{var H=n=>{try{u(e.next(n))}catch(s){o(s)}},w=n=>{try{u(e.throw(n))}catch(s){o(s)}},u=n=>n.done?a(n.value):Promise.resolve(n.value).then(H,w);u((e=e.apply(t,i)).next())});import{bf as d,s as r,f as m,i as c}from"./index.0a8b89be.js";import{u as l}from"./useWindowSizeFn.64599f54.js";const p=Symbol();function v(t){return d(t,p,{native:!0})}const g=r(0),f=r(0);function b(){function t(e){g.value=e}function i(e){f.value=e}return{headerHeightRef:g,footerHeightRef:f,setHeaderHeight:t,setFooterHeight:i}}function F(){const t=r(window.innerHeight),i=r(window.innerHeight),e=m(()=>c(t)-c(g)-c(f)||0);l(()=>{t.value=window.innerHeight},100,{immediate:!0});function a(o){return h(this,null,function*(){i.value=o})}v({contentHeight:e,setPageHeight:a,pageHeight:i})}export{b as a,F as u};
