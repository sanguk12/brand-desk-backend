import{P as A}from"./index.27ebe66e.js";import{ap as h,a as I,cA as y,s as a,r as E,ar as s,o as n,j as B,y as u,n as r,m as i,h as c,k as m,t as F}from"./index.9b68f3a5.js";import{C as D,a as k}from"./index.83b16922.js";import{u as w}from"./upload.b58fb754.js";import{h as P}from"./avata.e91355cf.js";import"./index.d87b86ee.js";import"./index.8bdac382.js";import"./useSize.48fdc38e.js";import"./eagerComputed.4def26ea.js";import"./onMountedOrActivated.f9a7813e.js";import"./useWindowSizeFn.d868051d.js";import"./useContentViewHeight.49fde9ac.js";import"./ArrowLeftOutlined.ada3a7c9.js";import"./index.9b1940b4.js";import"./transButton.339ada11.js";import"./index.64609094.js";import"./useFlexGapSupport.20ae4a44.js";import"./index.3fe76539.js";import"./_baseEach.e6ca9cd4.js";import"./_baseIteratee.f572c494.js";import"./get.8f01bfdb.js";import"./_baseProperty.2030e337.js";import"./DeleteOutlined.8d0b60c9.js";import"./index.e8a8c5ca.js";import"./useRefs.77e757f9.js";import"./Form.be6a34f6.js";import"./Row.368c65f6.js";import"./toInteger.6d763759.js";import"./Col.5a4e1b28.js";import"./index.c6d9e38a.js";import"./FullscreenOutlined.33f2b7f2.js";import"./base64Conver.08b9f4ec.js";const $=I({components:{PageWrapper:A,CropperImage:D,CollapseContainer:y,CropperAvatar:k},setup(){var t;const e=a(""),l=a(""),d=a(""),C=a(""),v=E(),g=a(((t=v.getUserInfo)==null?void 0:t.avatar)||"");function _({imgBase64:p,imgInfo:f}){e.value=f,l.value=p}function o({imgBase64:p,imgInfo:f}){d.value=f,C.value=p}return{img:P,info:e,circleInfo:d,cropperImg:l,circleImg:C,handleCropend:_,handleCircleCropend:o,avatar:g,uploadApi:w}}}),N={class:"container p-4"},S={class:"cropper-container mr-10"},V=["src"],W={key:0},U={class:"container p-4"},j={class:"cropper-container mr-10"},b=["src"],q={key:0};function z(e,l,d,C,v,g){const _=s("CropperAvatar"),o=s("CollapseContainer"),t=s("CropperImage"),p=s("PageWrapper");return n(),B(p,{title:"\u56FE\u7247\u88C1\u526A\u793A\u4F8B",content:"\u9700\u8981\u5F00\u542F\u6D4B\u8BD5\u63A5\u53E3\u670D\u52A1\u624D\u80FD\u8FDB\u884C\u4E0A\u4F20\u6D4B\u8BD5\uFF01"},{default:u(()=>[r(o,{title:"\u5934\u50CF\u88C1\u526A"},{default:u(()=>[r(_,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])]),_:1}),r(o,{title:"\u77E9\u5F62\u88C1\u526A",class:"my-4"},{default:u(()=>[i("div",N,[i("div",S,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(n(),c("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,V)):m("",!0)]),e.cropperImg?(n(),c("p",W,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.info),1)):m("",!0)]),_:1}),r(o,{title:"\u5706\u5F62\u88C1\u526A"},{default:u(()=>[i("div",U,[i("div",j,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(n(),c("img",{key:0,src:e.circleImg,class:"croppered"},null,8,b)):m("",!0)]),e.circleImg?(n(),c("p",q,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.circleInfo),1)):m("",!0)]),_:1})]),_:1})}var ge=h($,[["render",z],["__scopeId","data-v-258dcdc8"]]);export{ge as default};