import{dz as t}from"./index.9b68f3a5.js";const i=s=>t.get({url:"/basic-api/system/getDeptList",params:s}),o=s=>t.get({url:"/basic-api/system/getMenuList",params:s}),c=s=>t.get({url:"/basic-api/system/getRoleListByPage",params:s}),p=(s,e)=>t.post({url:"/basic-api/system/setRoleStatus",params:{id:s,status:e}}),g=s=>t.post({url:"/basic-api/system/accountExist",params:{account:s}},{errorMessageMode:"none"});export{o as a,i as b,c as g,g as i,p as s};
