import{a as n,s,X as l,o as m,j as u,y as c,m as p,bk as d,i as f}from"./index.9b68f3a5.js";import{C as h}from"./index.f6e31399.js";import"./index.10106a95.js";/* empty css              */import{u as g}from"./useECharts.1e693f38.js";import"./index.4f96a025.js";import"./index.b9fae046.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./index.b8e26f6f.js";import"./Col.5a4e1b28.js";import"./useRefs.77e757f9.js";import"./PlusOutlined.8b22ded4.js";const R=n({name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=s(null),{setOptions:r}=g(a);return l(()=>t.loading,()=>{t.loading||r({tooltip:{trigger:"item"},series:[{name:"Source of visit",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"Electronic"},{value:310,name:"Clothing"},{value:274,name:"Cosmetic"},{value:400,name:"Home"}].sort(function(i,o){return i.value-o.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(i,o)=>(m(),u(f(h),{title:"Transaction ratio",loading:e.loading},{default:c(()=>[p("div",{ref_key:"chartRef",ref:a,style:d({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{R as default};
