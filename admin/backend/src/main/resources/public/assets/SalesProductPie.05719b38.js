import{a as n,s,X as l,o as m,j as u,y as c,m as p,bk as d,i as f}from"./index.f8b6fa94.js";import{C as h}from"./index.c0b4a020.js";import"./index.d1b4dbc3.js";/* empty css              */import{u as g}from"./useECharts.fe12e626.js";import"./index.8790c6a2.js";import"./index.8ffde185.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./index.b3bb861d.js";import"./Col.b99e5aca.js";import"./useRefs.25abb648.js";import"./PlusOutlined.40029b3f.js";const R=n({name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=e,a=s(null),{setOptions:r}=g(a);return l(()=>t.loading,()=>{t.loading||r({tooltip:{trigger:"item"},series:[{name:"Source of visit",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:500,name:"Electronic"},{value:310,name:"Clothing"},{value:274,name:"Cosmetic"},{value:400,name:"Home"}].sort(function(i,o){return i.value-o.value}),roseType:"radius",animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(i,o)=>(m(),u(f(h),{title:"Transaction ratio",loading:e.loading},{default:c(()=>[p("div",{ref_key:"chartRef",ref:a,style:d({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{R as default};
