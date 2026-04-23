(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{3022:function(e,t,r){Promise.resolve().then(r.bind(r,9222))},9222:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var a=r(7437),s=r(2265),i=r(826),o=r(5925);function n(){let[e,t]=(0,s.useState)([]),[r,n]=(0,s.useState)({name:"",description:""}),[l,c]=(0,s.useState)(!1),[d,u]=(0,s.useState)(!1),p=async()=>{try{let{data:e}=await i.Z.get("/categories");t(e)}catch(e){o.default.error("Failed to load categories")}};(0,s.useEffect)(()=>{p()},[]);let m=async e=>{e.preventDefault(),c(!0);try{await i.Z.post("/categories",r),o.default.success("Category created"),n({name:"",description:""}),u(!1),p()}catch(e){var t,a;o.default.error((null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.message)||"Failed")}finally{c(!1)}},f=async(e,t)=>{if(confirm('Delete "'.concat(t,'"?')))try{await i.Z.delete("/categories/".concat(e)),o.default.success("Deleted"),p()}catch(e){o.default.error("Delete failed")}};return(0,a.jsxs)("div",{className:"p-8",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,a.jsx)("h1",{className:"font-playfair text-3xl font-normal",children:"Categories"}),(0,a.jsx)("button",{onClick:()=>u(!d),className:"btn-primary text-sm py-2.5 px-6",children:d?"Cancel":"+ Add Category"})]}),d&&(0,a.jsxs)("form",{onSubmit:m,className:"bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 mb-8 grid md:grid-cols-3 gap-5 items-end",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"form-label",children:"Category Name"}),(0,a.jsx)("input",{required:!0,className:"input-aurora",placeholder:"Garden Fountains",value:r.name,onChange:e=>n({...r,name:e.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"form-label",children:"Description"}),(0,a.jsx)("input",{className:"input-aurora",placeholder:"Brief description",value:r.description,onChange:e=>n({...r,description:e.target.value})})]}),(0,a.jsx)("button",{type:"submit",disabled:l,className:"btn-primary disabled:opacity-60",children:l?"Creating...":"Create"})]}),(0,a.jsx)("div",{className:"bg-aurora-card border border-[rgba(240,192,64,0.18)]",children:(0,a.jsxs)("table",{className:"w-full admin-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Slug"}),(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("th",{children:"Actions"})]})}),(0,a.jsxs)("tbody",{children:[e.map(e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"font-playfair",children:e.name}),(0,a.jsx)("td",{className:"text-aurora-muted text-xs tracking-widest",children:e.slug}),(0,a.jsx)("td",{className:"text-aurora-muted",children:e.description||"—"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{onClick:()=>f(e._id,e.name),className:"border border-[rgba(235,87,87,0.3)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-red-400 hover:text-red-400 transition-all",children:"Delete"})})]},e._id)),0===e.length&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:4,className:"text-center text-aurora-muted py-8",children:"No categories yet."})})]})]})})]})}},826:function(e,t,r){"use strict";let a=r(4829).Z.create({baseURL:"http://localhost:5002/api",withCredentials:!0});a.interceptors.request.use(e=>{{let t=localStorage.getItem("aurora_token");t&&(e.headers.Authorization="Bearer ".concat(t))}return e}),t.Z=a},5925:function(e,t,r){"use strict";let a,s;r.r(t),r.d(t,{CheckmarkIcon:function(){return Q},ErrorIcon:function(){return G},LoaderIcon:function(){return Y},ToastBar:function(){return el},ToastIcon:function(){return er},Toaster:function(){return ep},default:function(){return em},resolveValue:function(){return k},toast:function(){return Z},useToaster:function(){return B},useToasterStore:function(){return F}});var i,o=r(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},h=(e,t,r,a,s)=>{var i;let o=f(e),n=m[o]||(m[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!m[n]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},g=(e,t,r)=>e.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let y,x,v,w=b.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:x&&x()},n),r.o=/ *go\d+/.test(l),n.className=b.apply(r,a)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),y(c,n)}return t?t(s):s}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,C=(a=0,()=>(++a).toString()),E=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},D="default",$=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return $(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},I=[],O={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},_={},A=(e,t=D)=>{_[t]=$(_[t]||O,e),I.forEach(([e,r])=>{e===t&&r(_[t])})},S=e=>Object.keys(_).forEach(t=>A(e,t)),z=e=>Object.keys(_).find(t=>_[t].toasts.some(t=>t.id===e)),T=(e=D)=>t=>{A(t,e)},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={},t=D)=>{let[r,a]=(0,o.useState)(_[t]||O),s=(0,o.useRef)(_[t]);(0,o.useEffect)(()=>(s.current!==_[t]&&a(_[t]),I.push([t,a]),()=>{let e=I.findIndex(([e])=>e===t);e>-1&&I.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:i}},L=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),M=e=>(t,r)=>{let a=L(t,e,r);return T(a.toasterId||z(a.id))({type:2,toast:a}),a.id},Z=(e,t)=>M("blank")(e,t);Z.error=M("error"),Z.success=M("success"),Z.loading=M("loading"),Z.custom=M("custom"),Z.dismiss=(e,t)=>{let r={type:3,toastId:e};t?T(t)(r):S(r)},Z.dismissAll=e=>Z.dismiss(void 0,e),Z.remove=(e,t)=>{let r={type:4,toastId:e};t?T(t)(r):S(r)},Z.removeAll=e=>Z.remove(void 0,e),Z.promise=(e,t,r)=>{let a=Z.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?k(t.success,e):void 0;return s?Z.success(s,{id:a,...r,...null==r?void 0:r.success}):Z.dismiss(a),e}).catch(e=>{let s=t.error?k(t.error,e):void 0;s?Z.error(s,{id:a,...r,...null==r?void 0:r.error}):Z.dismiss(a)}),e};var H=1e3,B=(e,t="default")=>{let{toasts:r,pausedAt:a}=F(e,t),s=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=H)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,r)},[]);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&Z.dismiss(r.id);return}return setTimeout(()=>Z.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,o.useCallback)(T(t),[t]),l=(0,o.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),c=(0,o.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),d=(0,o.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=t||{},o=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},R=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,V=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Y=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${V} 1s linear infinite;
`,J=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,K=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Q=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,W=j("div")`
  position: absolute;
`,X=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(et,null,t):t:"blank"===r?null:o.createElement(X,null,o.createElement(Y,{...a}),"loading"!==r&&o.createElement(W,null,"error"===r?o.createElement(G,{...a}):o.createElement(Q,{...a})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,eo=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=o.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(er,{toast:e}),n=o.createElement(eo,{...e.ariaProps},k(e.message,e));return o.createElement(ei,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,y=i,x=void 0,v=void 0;var ec=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let i=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:r},s)},ed=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:c,handlers:d}=B(r,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(r=>{let i=r.position||t,n=ed(i,d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(ec,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?eu:"",style:n},"custom"===r.type?k(r.message,r):s?s(r):o.createElement(el,{toast:r,position:i}))}))},em=Z}},function(e){e.O(0,[737,971,938,744],function(){return e(e.s=3022)}),_N_E=e.O()}]);