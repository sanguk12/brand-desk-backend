import{ap as r,a as i,s,X as n,ar as l,o as m,j as d,y as p,m as u,bk as c}from"./index.f8b6fa94.js";import{C as f}from"./index.c0b4a020.js";import"./index.d1b4dbc3.js";/* empty css              */import{u as h}from"./useECharts.fe12e626.js";import"./index.8790c6a2.js";import"./index.8ffde185.js";import"./Row.0bd81407.js";import"./useFlexGapSupport.816f6ec3.js";import"./index.b3bb861d.js";import"./Col.b99e5aca.js";import"./useRefs.25abb648.js";import"./PlusOutlined.40029b3f.js";const g=i({components:{Card:f},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const t=s(null),{setOptions:a}=h(t);return n(()=>e.loading,()=>{e.loading||a({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})},{immediate:!0}),{chartRef:t}}});function y(e,t,a,S,w,C){const o=l("Card");return m(),d(o,{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:p(()=>[u("div",{ref:"chartRef",style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var X=r(g,[["render",y]]);export{X as default};
