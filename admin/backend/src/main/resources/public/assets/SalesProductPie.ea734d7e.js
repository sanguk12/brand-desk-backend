import{a as n,s,X as l,o as m,j as u,y as c,m as p,bk as d,i as f}from"./index.0a8b89be.js";import{C as h}from"./index.9dc4f944.js";import"./index.31c2a6fb.js";/* empty css              */import{u as g}from"./useECharts.8144147f.js";import"./index.f3845fae.js";import"./index.624fc280.js";import"./Row.0bf79b77.js";import"./useFlexGapSupport.4f13b498.js";import"./index.25fd638a.js";import"./Col.a8b0ef91.js";import"./useRefs.f7f322ba.js";import"./PlusOutlined.a999796c.js";const R=n({name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=s(null),{setOptions:r}=g(a);return l(()=>t.loading,()=>{t.loading||r({tooltip:{trigger:"item"},series:[{name:"Source of visit",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"Electronic"},{value:310,name:"Clothing"},{value:274,name:"Cosmetic"},{value:400,name:"Home"}].sort(function(i,o){return i.value-o.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(i,o)=>(m(),u(f(h),{title:"Transaction ratio",loading:e.loading},{default:c(()=>[p("div",{ref_key:"chartRef",ref:a,style:d({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{R as default};