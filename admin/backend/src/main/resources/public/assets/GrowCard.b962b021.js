import{C as r}from"./index.c196a172.js";import{a as d,o as a,h as i,F as u,au as m,j as f,y as l,n as e,z as g,t as c,i as o,m as s,b4 as v,q as x}from"./index.f8b6fa94.js";import{C as _}from"./index.c0b4a020.js";import"./index.d1b4dbc3.js";/* empty css              */import{T as C}from"./index.e501ff06.js";import"./index.c1051d4d.js";import"./index.8790c6a2.js";import"./index.8ffde185.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./index.b3bb861d.js";import"./Col.b99e5aca.js";import"./useRefs.25abb648.js";import"./PlusOutlined.40029b3f.js";const w=[{title:"Number of visits",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"Month"},{title:"Sales",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"Month"},{title:"Download Count",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"Week"},{title:"Transaction",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"Year"}],V={class:"md:flex"},h={class:"py-4 px-4 flex justify-between items-center"},y={class:"p-2 px-4 flex justify-between"},W=d({name:"GrowCard",props:{loading:{type:Boolean}},setup(p){return(T,b)=>(a(),i("div",V,[(a(!0),i(u,null,m(o(w),(t,n)=>(a(),f(o(_),{key:t.title,size:"small",loading:p.loading,title:t.title,class:x(["md:w-1/4 w-full !md:mt-0",{"!md:mr-4":n+1<4,"!mt-4":n>0}])},{extra:l(()=>[e(o(C),{color:t.color},{default:l(()=>[g(c(t.action),1)]),_:2},1032,["color"])]),default:l(()=>[s("div",h,[e(o(r),{prefix:"$",startVal:1,endVal:t.value,class:"text-2xl"},null,8,["endVal"]),e(o(v),{icon:t.icon,size:40},null,8,["icon"])]),s("div",y,[s("span",null,"Total "+c(t.title),1),e(o(r),{prefix:"$",startVal:1,endVal:t.total},null,8,["endVal"])])]),_:2},1032,["loading","title","class"]))),128))]))}});export{W as default};
