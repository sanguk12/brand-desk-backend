import{c as a,eb as o}from"./index.f8b6fa94.js";import{C as i,c as s}from"./statusEnum.2e90045a.js";const{t}=a(),m=[{title:t("Content.content.id"),dataIndex:"id",width:100},{title:t("Content.content.title"),dataIndex:"title",width:100},{title:t("Content.content.cate"),dataIndex:"category.name",width:120},{title:t("Content.content.model"),dataIndex:"modelId",width:130},{title:t("Content.content.status"),dataIndex:"status",width:100,customRender:({record:e})=>(Reflect.has(e,"status")||(e.status=i.DRAFT),s.get(e.status))},{title:t("Content.content.publish_date"),dataIndex:"publishDate",format:"date|YYYY-MM-DD HH:mm:ss",width:180},{title:t("Content.content.expiry_date"),dataIndex:"expiryDate",format:(e,n,d)=>n.expiryDate===null?"":o(n.expiryDate,"YYYY-MM-DD HH:mm:ss"),width:180},{title:t("Content.content.create_date"),dataIndex:"createDate",format:"date|YYYY-MM-DD HH:mm:ss",width:180}],r=[{field:"title",label:t("Content.content.title"),component:"Input",colProps:{span:8}},{field:"publishDate",label:t("Content.content.publish_date"),component:"RangePicker",colProps:{span:8}}];export{m as columns,r as searchFormSchema};