import{ap as r,a as i,s,X as n,ar as l,o as m,j as d,y as p,m as u,bk as c}from"./index.9b68f3a5.js";import{C as f}from"./index.f6e31399.js";import"./index.10106a95.js";/* empty css              */import{u as h}from"./useECharts.1e693f38.js";import"./index.4f96a025.js";import"./index.b9fae046.js";import"./Row.368c65f6.js";import"./useFlexGapSupport.20ae4a44.js";import"./index.b8e26f6f.js";import"./Col.5a4e1b28.js";import"./useRefs.77e757f9.js";import"./PlusOutlined.8b22ded4.js";const g=i({components:{Card:f},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const t=s(null),{setOptions:a}=h(t);return n(()=>e.loading,()=>{e.loading||a({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})},{immediate:!0}),{chartRef:t}}});function y(e,t,a,S,w,C){const o=l("Card");return m(),d(o,{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:p(()=>[u("div",{ref:"chartRef",style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var X=r(g,[["render",y]]);export{X as default};
