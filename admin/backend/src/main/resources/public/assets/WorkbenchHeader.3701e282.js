import{a as o,r as c,f as r,o as n,h as l,n as d,i as s,m as e,t as i,cQ as m}from"./index.9b68f3a5.js";import{A as x}from"./index.8bdac382.js";import{h as p}from"./avata.e91355cf.js";import"./index.9b1940b4.js";import"./useSize.48fdc38e.js";import"./eagerComputed.4def26ea.js";const f={class:"lg:flex"},u={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},_={class:"md:text-lg text-md"},h=e("span",{class:"text-secondary"}," Sunny\uFF0C20\u2103 - 32\u2103\uFF01 ",-1),y=m('<div class="flex flex-1 justify-end md:mt-0 mt-4"><div class="flex flex-col justify-center text-right"><span class="text-secondary"> Todo </span><span class="text-2xl">2/10</span></div><div class="flex flex-col justify-center text-right md:mx-16 mx-12"><span class="text-secondary"> Project </span><span class="text-2xl">8</span></div><div class="flex flex-col justify-center text-right md:mr-10 mr-4"><span class="text-secondary"> Team </span><span class="text-2xl">300</span></div></div>',1),b=o({name:"WorkbenchHeader",setup(v){const a=c(),t=r(()=>a.getUserInfo);return(g,j)=>(n(),l("div",f,[d(s(x),{src:s(t).avatar||s(p),size:72,class:"!mx-auto !block"},null,8,["src"]),e("div",u,[e("h1",_,"Good morning , "+i(s(t).realName)+", Let's get started your day\uFF01",1),h]),y]))}});export{b as default};