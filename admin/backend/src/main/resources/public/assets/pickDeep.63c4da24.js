import{_ as y}from"./merge.f321b105.js";import{aR as w,aS as _,fz as Q,O as Z,fA as J,d_ as X,d$ as Y,fB as K,fC as x,eK as ee,aO as re,fD as ne,ep as te,fE as ae,fF as ie,fG as fe,aM as O,fH as R,a7 as A,du as S,cN as le,ah as se}from"./index.9b68f3a5.js";import{t as he}from"./toInteger.6d763759.js";import{b as T,c as ue,d as de}from"./_baseEach.e6ca9cd4.js";import{b as j}from"./_baseIteratee.f572c494.js";import{g as U}from"./get.8f01bfdb.js";import{i as ce}from"./isEmpty.7bce0800.js";function pe(r,t,a,s){var l=-1,e=r==null?0:r.length;for(s&&e&&(a=r[++l]);++l<e;)a=t(a,r[l],l,r);return a}function L(r){return typeof r=="function"?r:w}function oe(r,t){var a=_(r)?Q:T;return a(r,L(t))}function ye(r,t){for(var a=r==null?0:r.length;a--&&t(r[a],a,r)!==!1;);return r}var ge=ue(!0),Pe=ge;function De(r,t){return r&&Pe(r,t,Z)}var Ce=de(De,!0),_e=Ce;function ke(r,t){var a=_(r)?ye:_e;return a(r,L(t))}var Ae=Object.prototype,be=Ae.hasOwnProperty;function $e(r,t){return r!=null&&be.call(r,t)}function m(r,t){return r!=null&&J(r,t,$e)}var Oe="[object String]";function I(r){return typeof r=="string"||!_(r)&&X(r)&&Y(r)==Oe}var Ie=1;function b(r){return j(typeof r=="function"?r:K(r,Ie))}function ve(r,t,a,s,l){return l(r,function(e,i,n){a=s?(s=!1,e):t(a,e,i,n)}),a}function Ee(r,t,a){var s=_(r)?pe:ve,l=arguments.length<3;return s(r,j(t),a,l,T)}function Fe(r,t,a){var s=r==null?0:r.length;return s?(t=a||t===void 0?1:he(t),t=s-t,x(r,t<0?0:t,s)):[]}function B(r){return _(r)?ee(r,re):ne(r)?[r]:te(ae(ie(r)))}function N(r,t){return r==null?!0:fe(r,t)}var we={};function z(r){function t(a){for(var s=[],l=0;l<a.length;l++)l in a||s.push(l);for(var e=s.length;e--;)a.splice(s[e],1);return a}return t}function Re(r,t){for(var a=0;a<r.length&&t(r[a],a,r)!==!1;a++);return r}var G={isString:I,reduce:Ee},Se=y({isObject:O,isEmpty:ce,get:U},G),C=y({identity:w,merge:y,isString:I,toPath:B},Se),V=y({merge:y,forArray:Re},we,C),Te=/\D/,je=/^[a-zA-Z_$]+([\w_$]*)$/,Ue=/"/g;function v(...r){return r.reduce((t,a)=>t?!a||a.startsWith("[")?`${t}${a}`:`${t}.${a}`:a,"")}function W(r){function t(a,...s){if(s=s.filter(l=>l!==void 0),r.isString(a))return v(...s,a);if(!!Array.isArray(a))return s=v(...s),a.reduce((l,e)=>{const i=typeof e;return i==="number"?e<0||e%1!==0?`${l}["${e}"]`:`${l}[${e}]`:i!=="string"?`${l}["${e}"]`:e?Te.test(e)?je.test(e)?l?`${l}.${e}`:`${l}${e}`:`${l}["${e.replace(Ue,'\\"')}"]`:`${l}[${e}]`:`${l}[""]`},s)}return t}W.notChainable=!0;function $(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var Le=/^[a-zA-Z_$]+([\w_$]*)$/,me=/"/g;const q=Object.prototype.hasOwnProperty;function Be(r){const t=W(r);function a(e){const{options:i,obj:n,callback:o}=e;i.pathFormatArray=i.pathFormat=="array",e.depth=0;let p=!1;const h=()=>(p=!0,!1);for(;e&&!p;){if(!e.inited){if(e.inited=!0,e.info=F(e.value,i.ownPropertiesOnly),i.checkCircular&&(e.circularParentIndex=-1,e.circularParent=null,e.isCircular=!1,e.info.isObject&&!e.info.isEmpty)){let u=e.parent;for(;u;){if(u.value===e.value){e.isCircular=!0,e.circularParent=u,e.circularParentIndex=e.depth-u.depth-1;break}u=u.parent}}if(e.children=[],i.childrenPath&&i.childrenPath.forEach((u,d)=>{const c=r.get(e.value,u),P=F(c,i.ownPropertiesOnly);P.isEmpty||e.children.push([u,i.strChildrenPath[d],c,P])}),e.isLeaf=e.isCircular||i.childrenPath!==void 0&&!e.children.length||!e.info.isObject||e.info.isEmpty,e.needCallback=(e.depth||i.includeRoot)&&(!i.leavesOnly||e.isLeaf),e.needCallback){const u=new E(n,i,h);u.setItem(e,!1);try{e.res=o(e.value,e.key,e.parent&&e.parent.value,u)}catch(d){throw d.message&&(d.message+=`
callback failed before deep iterate at:
`+t(e.path)),d}}if(p)break;e.res!==!1&&!p&&!e.isCircular&&e.info.isObject&&(i.childrenPath!==void 0&&(e.depth||!i.rootIsChildren)?(e.childrenItems=[],e.children.length&&e.children.forEach(([u,d,c,P])=>{e.childrenItems=[...e.childrenItems,...P.isArray?s(e,c,i,u,d):l(e,c,i,u,d)]})):e.childrenItems=e.info.isArray?s(e,e.value,i,[],""):l(e,e.value,i,[],"")),e.currentChildIndex=-1}if(e.childrenItems&&e.currentChildIndex<e.childrenItems.length-1){e.currentChildIndex++,e.childrenItems[e.currentChildIndex].parentItem=e,e=e.childrenItems[e.currentChildIndex];continue}if(e.needCallback&&i.callbackAfterIterate){const u=new E(n,i,h);u.setItem(e,!0);try{o(e.value,e.key,e.parent&&e.parent.value,u)}catch(d){throw d.message&&(d.message+=`
callback failed after deep iterate at:
`+t(e.path)),d}}e=e.parentItem}}return a;function s(e,i,n,o,p){let h;n.pathFormatArray||(h=e.strPath||"",p&&h&&!p.startsWith("[")&&(h+="."),h+=p||"");const u=[];for(var d=0;d<i.length;d++){const c=i[d];if(c===void 0&&!(d in i))continue;let P;const k=!n.pathFormatArray;k&&(P=`${h}[${d}]`),u.push({value:c,key:d+"",path:[...e.path||[],...o,d+""],strPath:P,depth:e.depth+1,parent:{value:e.value,key:e.key,path:k?e.strPath:e.path,parent:e.parent,depth:e.depth,info:e.info},childrenPath:o.length&&o||void 0,strChildrenPath:p||void 0})}return u}function l(e,i,n,o,p){let h;n.pathFormatArray||(h=e.strPath||"",p&&h&&!p.startsWith("[")&&(h+="."),h+=p||"");const u=[],d=!n.pathFormatArray;for(var c in i){if(n.ownPropertiesOnly&&!q.call(i,c))continue;let P;d&&(Le.test(c)?h?P=`${h}.${c}`:P=`${c}`:P=`${h}["${c.replace(me,'\\"')}"]`),u.push({value:i[c],key:c,path:[...e.path||[],...o,c],strPath:P,depth:e.depth+1,parent:{value:e.value,key:e.key,path:d?e.strPath:e.path,parent:e.parent,depth:e.depth,info:e.info},childrenPath:o.length&&o||void 0,strChildrenPath:p||void 0})}return u}}class E{constructor(t,a,s){this.obj=t,this._options=a,this.break=s}setItem(t,a){this._item=t,this.afterIterate=a}get path(){return this._options.pathFormatArray?this._item.path:this._item.strPath}get parent(){return this._item.parent}get parents(){if(!this._item._parents){this._item._parents=[];let t=this._item.parent;for(;t;)this._item._parents[t.depth]=t,t=t.parent}return this._item._parents}get depth(){return this._item.depth}get isLeaf(){return this._item.isLeaf}get isCircular(){return this._item.isCircular}get circularParentIndex(){return this._item.circularParentIndex}get circularParent(){return this._item.circularParent}get childrenPath(){return this._options.childrenPath!==void 0&&(this._options.pathFormatArray?this._item.childrenPath:this._item.strChildrenPath)||void 0}get info(){return this._item.info}}function Ne(r,t){for(var a in r)if(!t||q.call(r,a))return!1;return!0}function F(r,t){const a={isObject:$(r)};return a.isArray=a.isObject&&Array.isArray(r),a.isEmpty=a.isArray?!r.length:a.isObject?Ne(r,t):!0,a}function H(r){var t=Be(r);function a(s,l,e){if(l===void 0&&(l=r.identity),e=r.merge({includeRoot:!Array.isArray(s),pathFormat:"string",checkCircular:!1,leavesOnly:!1,ownPropertiesOnly:!0},e||{}),e.childrenPath!==void 0){if(!e.includeRoot&&e.rootIsChildren===void 0&&(e.rootIsChildren=Array.isArray(s)),!r.isString(e.childrenPath)&&!Array.isArray(e.childrenPath))throw Error("childrenPath can be string or array");r.isString(e.childrenPath)&&(e.childrenPath=[e.childrenPath]),e.strChildrenPath=e.childrenPath,e.childrenPath=[];for(var i=e.strChildrenPath.length-1;i>=0;i--)e.childrenPath[i]=r.toPath(e.strChildrenPath[i])}return t({value:s,callback:l,options:e,obj:s}),s}return a}function ze(r){var t=H(r),a=z(),s=r.each||r.forArray;function l(e,i){i=r.merge({checkCircular:!1},i||{});var n={checkCircular:i.checkCircular,ownPropertiesOnly:i.ownPropertiesOnly},o=[];return t(e,function(p,h,u,d){!d.isCircular&&Array.isArray(p)&&o.push(p)},n),Array.isArray(e)&&o.push(e),s(o,a),e}return l}ze(V);var M=y({merge:y,clone:R,cloneDeep:A,isObject:O,each:oe,eachRight:ke,has:m,set:S,unset:N,isPlainObject:le,iteratee:b,get:U},C,V);function Ge(r){const t=H(r),a=z();function s(e,i,n){i=r.iteratee(i),n?(n=r.cloneDeep(n),n.leafsOnly!==void 0&&(n.leavesOnly=n.leafsOnly)):n={},n.onTrue||(n.onTrue={}),n.onFalse||(n.onFalse={}),n.onUndefined||(n.onUndefined={}),n.childrenPath!==void 0&&(n.onTrue.skipChildren===void 0&&(n.onTrue.skipChildren=!1),n.onUndefined.skipChildren===void 0&&(n.onUndefined.skipChildren=!1),n.onFalse.skipChildren===void 0&&(n.onFalse.skipChildren=!1),n.onTrue.cloneDeep===void 0&&(n.onTrue.cloneDeep=!0),n.onUndefined.cloneDeep===void 0&&(n.onUndefined.cloneDeep=!0),n.onFalse.cloneDeep===void 0&&(n.onFalse.cloneDeep=!0)),n=r.merge({checkCircular:!1,keepCircular:!0,leavesOnly:n.childrenPath===void 0,condense:!0,cloneDeep:r.cloneDeep,pathFormat:"string",onTrue:{skipChildren:!0,cloneDeep:!0,keepIfEmpty:!0},onUndefined:{skipChildren:!1,cloneDeep:!1,keepIfEmpty:!1},onFalse:{skipChildren:!0,cloneDeep:!1,keepIfEmpty:!1}},n);const o={pathFormat:n.pathFormat,checkCircular:n.checkCircular,childrenPath:n.childrenPath,includeRoot:n.includeRoot,rootIsChildren:n.rootIsChildren,ownPropertiesOnly:n.ownPropertiesOnly,callbackAfterIterate:!0,leavesOnly:!1},p=Array.isArray(e);let h=p?[]:$(e)?{}:null;const u=n.condense?[]:!1;if(t(e,function(c,P,k,f){if(f.afterIterate){if(f.afterIterate&&!f.isCircular){const g=f.info._filterDeep.reply;if(f.info._filterDeep.empty&&!g.keepIfEmpty)if(f.path===void 0)h=null;else{let D=l(f,h);delete D[P],u&&(D===f.parent.info._filterDeep.res&&f.parent.info.isArray||Array.isArray(D))&&!f.parent.info._filterDeep.isSparse&&(f.parent.info._filterDeep.isSparse=!0,u.push(f.parent.info)),f.info._filterDeep.excluded=!0}else{let D=f.parent;for(;D&&(D.info._filterDeep.reply||(D.info._filterDeep.reply=n.onUndefined),!!D.info._filterDeep.empty);)D.info._filterDeep.empty=!1,D=D.parent}return}}else if(f.info._filterDeep={},f.isCircular){let g=l(f,h);return n.keepCircular?f.info._filterDeep.res=g[P]="replaceCircularBy"in n?n.replaceCircularBy:f.circularParent.path!==void 0?f.circularParent.info._filterDeep.res:h:(delete g[P],u&&(g===f.parent.info._filterDeep.res&&f.parent.info.isArray||Array.isArray(g))&&!f.parent.info._filterDeep.isSparse&&(f.parent.info._filterDeep.isSparse=!0,u.push(f.parent.info)),f.info._filterDeep.excluded=!0),!1}else{let g=!n.leavesOnly||f.isLeaf?i(c,P,k,f):void 0;if($(g)||(g===void 0?g=n.onUndefined:g?g=n.onTrue:g=n.onFalse),f.info._filterDeep.reply=g,f.info._filterDeep.empty=g.empty===void 0?!0:g.empty,g.keepIfEmpty||!g.skipChildren)if(n.cloneDeep&&g.cloneDeep)if(f.path!==void 0){let D=l(f,h);f.info._filterDeep.res=D[P]=n.cloneDeep(c)}else f.info._filterDeep.res=h=n.cloneDeep(c);else if(f.path!==void 0){let D=l(f,h);f.info._filterDeep.res=D[P]=f.info.isArray?[]:f.info.isObject?{}:c}else f.info._filterDeep.res=h=f.info.isArray?[]:f.info.isObject?{}:c;return!g.skipChildren}},o),u){for(var d=0;d<u.length;d++){const c=u[d];c._filterDeep.isSparse&&!c._filterDeep.excluded&&a(c.children)}p&&a(h)}return p&&!h.length&&!o.includeRoot?null:h}return s;function l(e,i){if(e.parent.info.children)return e.parent.info.children;e.parent.info._filterDeep||(e.parent.info._filterDeep={});let n=e.parent.info._filterDeep.res;if(n===void 0&&(n=e.parent.info._filterDeep.res=i),e._item.childrenPath){let o=e.parent.value;for(let p=0;p<e._item.childrenPath.length;p++){const h=e._item.childrenPath[p];o=o[h],n[h]||(n[h]=Array.isArray(o)?[]:{}),n=n[h]}}return e.parent.info.children=n,n}}var Ke=Ge(M);y({iteratee:b,cloneDeep:A,merge:y},C);y({merge:y},C);y({merge:y},C);y({iteratee:b},C);var Ve=y({iteratee:b,isObject:O,clone:R,set:S},C);y({cloneDeep:A,has:m,unset:N},Ve);var We=y({isString:I,toPath:B,isEqual:se,takeRight:Fe,cloneDeep:A},G),qe=y({merge:y},We,M);y({merge:y},qe);export{Ke as f};