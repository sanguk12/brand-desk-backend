import{a as o,s as r,X as s,o as l,j as m,y as d,m as n,bk as p,i as c}from"./index.9b68f3a5.js";import{C as f}from"./index.f6e31399.js";import"./index.10106a95.js";/* empty css              */import{u as h}from"./useECharts.1e693f38.js";import"./index.4f96a025.js";import"./index.b9fae046.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./index.b8e26f6f.js";import"./Col.5a4e1b28.js";import"./useRefs.77e757f9.js";import"./PlusOutlined.8b22ded4.js";const N=o({name:"SaleRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(t){const e=t,a=r(null),{setOptions:i}=h(a);return s(()=>e.loading,()=>{e.loading||i({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"2017",max:100},{text:"2017",max:100},{text:"2018",max:100},{text:"2019",max:100},{text:"2020",max:100},{text:"2021",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(u,x)=>(l(),m(c(f),{title:"Sales Statistics",loading:t.loading},{default:d(()=>[n("div",{ref_key:"chartRef",ref:a,style:p({width:t.width,height:t.height})},null,4)]),_:1},8,["loading"]))}});export{N as default};
