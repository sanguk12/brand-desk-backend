import{fL as p,d_ as T,d$ as D,fM as h,eL as U,aM as Y,fN as b,fF as v,fO as w,fP as _,c as j}from"./index.9b68f3a5.js";import{b as A}from"./_baseProperty.2030e337.js";import{t as F}from"./toInteger.6d763759.js";var N=A("length"),z=N,I="\\ud800-\\udfff",P="\\u0300-\\u036f",k="\\ufe20-\\ufe2f",H="\\u20d0-\\u20ff",$=P+k+H,y="\\ufe0e\\ufe0f",G="["+I+"]",s="["+$+"]",l="\\ud83c[\\udffb-\\udfff]",J="(?:"+s+"|"+l+")",L="[^"+I+"]",S="(?:\\ud83c[\\udde6-\\uddff]){2}",M="[\\ud800-\\udbff][\\udc00-\\udfff]",V="\\u200d",C=J+"?",E="["+y+"]?",q="(?:"+V+"(?:"+[L,S,M].join("|")+")"+E+C+")*",W=E+C+q,Z="(?:"+[L+s+"?",s,S,M,G].join("|")+")",x=RegExp(l+"(?="+l+")|"+Z+W,"g");function B(e){for(var a=x.lastIndex=0;x.test(e);)++a;return a}function K(e){return p(e)?B(e):z(e)}var Q="[object RegExp]";function X(e){return T(e)&&D(e)==Q}var R=h&&h.isRegExp,ee=R?U(R):X,ne=ee,ae=30,te="...",re=/\w*$/;function ie(e,a){var f=ae,o=te;if(Y(a)){var n="separator"in a?a.separator:n;f="length"in a?F(a.length):f,o="omission"in a?b(a.omission):o}e=v(e);var c=e.length;if(p(e)){var d=w(e);c=d.length}if(f>=c)return e;var t=f-K(o);if(t<1)return o;var r=d?_(d,0,t).join(""):e.slice(0,t);if(n===void 0)return r+o;if(d&&(t+=r.length-t),ne(n)){if(e.slice(t).search(n)){var u,O=r;for(n.global||(n=RegExp(n.source,v(re.exec(n))+"g")),n.lastIndex=0;u=n.exec(O);)var g=u.index;r=r.slice(0,g===void 0?t:g)}}else if(e.indexOf(b(n),t)!=t){var m=r.lastIndexOf(n);m>-1&&(r=r.slice(0,m))}return r+o}const{t:i}=j();function se(){return[{title:i("Log.channel"),dataIndex:"channel",width:150},{title:i("Log.action"),dataIndex:"operate",width:150},{title:i("Log.ip"),dataIndex:"ip",width:150},{title:i("Log.action_date"),dataIndex:"createDate",format:"date|YYYY-MM-DD HH:mm:ss",width:150},{title:i("Log.content"),dataIndex:"content",width:150,customRender:({record:e})=>ie(e.content,{length:20,omission:"***"})}]}function le(){return[{field:"operate",label:i("Log.action"),component:"Input"},{field:"channel",label:i("Log.channel"),component:"Input"},{field:"ip",label:i("Log.ip"),component:"Input"},{field:"[startCreateDate, endCreateDate]",label:i("Log.action_date"),component:"RangePicker",componentProps:{format:"YYYY-MM-DD"}}]}export{le as getSearchFormSchema,se as getTableColumns};