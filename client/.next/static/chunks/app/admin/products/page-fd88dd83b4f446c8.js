(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{771:function(e,t,r){Promise.resolve().then(r.bind(r,974))},974:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(7437),o=r(2265),s=r(1396),i=r.n(s),n=r(826),l=r(5925);function d(){let[e,t]=(0,o.useState)([]),[r,s]=(0,o.useState)(!0),d=async()=>{try{let{data:e}=await n.Z.get("/products?limit=50");t(e.products)}catch(e){l.default.error("Failed to load products")}finally{s(!1)}};(0,o.useEffect)(()=>{d()},[]);let c=async(e,t)=>{if(confirm('Delete "'.concat(t,'"?')))try{await n.Z.delete("/products/".concat(e)),l.default.success("Product deleted"),d()}catch(e){l.default.error("Delete failed")}};return(0,a.jsxs)("div",{className:"p-8",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,a.jsx)("h1",{className:"font-playfair text-3xl font-normal",children:"Products"}),(0,a.jsx)(i(),{href:"/admin/products/new",className:"btn-primary text-sm py-2.5 px-6",children:"+ Add Product"})]}),(0,a.jsx)("div",{className:"bg-aurora-card border border-[rgba(240,192,64,0.18)]",children:r?(0,a.jsx)("div",{className:"text-center text-aurora-muted py-10",children:"Loading..."}):(0,a.jsxs)("table",{className:"w-full admin-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Product"}),(0,a.jsx)("th",{children:"Category"}),(0,a.jsx)("th",{children:"Price"}),(0,a.jsx)("th",{children:"Stock"}),(0,a.jsx)("th",{children:"Featured"}),(0,a.jsx)("th",{children:"Actions"})]})}),(0,a.jsxs)("tbody",{children:[e.map(e=>{var t,r;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"font-playfair",children:e.name}),(0,a.jsx)("td",{className:"text-aurora-muted",children:null===(t=e.category)||void 0===t?void 0:t.name}),(0,a.jsxs)("td",{children:["Rs. ",null===(r=e.price)||void 0===r?void 0:r.toLocaleString()]}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"text-[0.62rem] tracking-widest uppercase border px-2 py-0.5 ".concat(e.inStock?"text-green-400 border-green-400":"text-red-400 border-red-400"),children:e.inStock?"In Stock":"Out"})}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"text-[0.62rem] tracking-widest uppercase border px-2 py-0.5 ".concat(e.featured?"text-gold border-gold":"text-aurora-muted border-aurora-muted"),children:e.featured?"Yes":"No"})}),(0,a.jsx)("td",{children:(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(i(),{href:"/admin/products/new?edit=".concat(e._id),className:"border border-[rgba(240,192,64,0.2)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-gold hover:text-gold transition-all",children:"Edit"}),(0,a.jsx)("button",{onClick:()=>c(e._id,e.name),className:"border border-[rgba(235,87,87,0.3)] text-aurora-muted px-3 py-1 text-xs uppercase tracking-wider hover:border-red-400 hover:text-red-400 transition-all",children:"Delete"})]})})]},e._id)}),0===e.length&&(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:6,className:"text-center text-aurora-muted py-8",children:"No products yet."})})]})]})})]})}},826:function(e,t,r){"use strict";let a=r(4829).Z.create({baseURL:"http://localhost:5002/api",withCredentials:!0});a.interceptors.request.use(e=>{{let t=localStorage.getItem("aurora_token");t&&(e.headers.Authorization="Bearer ".concat(t))}return e}),t.Z=a},1396:function(e,t,r){e.exports=r(5250)},5925:function(e,t,r){"use strict";let a,o;r.r(t),r.d(t,{CheckmarkIcon:function(){return Q},ErrorIcon:function(){return Y},LoaderIcon:function(){return G},ToastBar:function(){return el},ToastIcon:function(){return er},Toaster:function(){return ep},default:function(){return em},resolveValue:function(){return N},toast:function(){return H},useToaster:function(){return Z},useToasterStore:function(){return L}});var s,i=r(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",o="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+i+";":a+="f"==s[1]?p(i,s):s+"{"+p(i,"k"==s[1]?"":t)+"}":"object"==typeof i?a+=p(i,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(s,i):s+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},h=(e,t,r,a,o)=>{var s;let i=f(e),n=m[i]||(m[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(o?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),s=m[n],l?t.data=t.data.replace(l,s):-1===t.data.indexOf(s)&&(t.data=a?s+t.data:t.data+s),n},g=(e,t,r)=>e.reduce((e,a,o)=>{let s=t[o];if(s&&s.call){let e=s(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==s?"":s)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let y,b,v,w=x.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function o(s,i){let n=Object.assign({},s),l=n.className||o.className;r.p=Object.assign({theme:b&&b()},n),r.o=/ *go\d+/.test(l),n.className=x.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),v&&d[0]&&v(n),y(d,n)}return t?t(o):o}}var k=e=>"function"==typeof e,N=(e,t)=>k(e)?e(t):e,E=(a=0,()=>(++a).toString()),C=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},$="default",D=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return D(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},I=[],O={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},_={},S=(e,t=$)=>{_[t]=D(_[t]||O,e),I.forEach(([e,r])=>{e===t&&r(_[t])})},A=e=>Object.keys(_).forEach(t=>S(e,t)),P=e=>Object.keys(_).find(t=>_[t].toasts.some(t=>t.id===e)),z=(e=$)=>t=>{S(t,e)},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},L=(e={},t=$)=>{let[r,a]=(0,i.useState)(_[t]||O),o=(0,i.useRef)(_[t]);(0,i.useEffect)(()=>(o.current!==_[t]&&a(_[t]),I.push([t,a]),()=>{let e=I.findIndex(([e])=>e===t);e>-1&&I.splice(e,1)}),[t]);let s=r.toasts.map(t=>{var r,a,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...r,toasts:s}},F=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),M=e=>(t,r)=>{let a=F(t,e,r);return z(a.toasterId||P(a.id))({type:2,toast:a}),a.id},H=(e,t)=>M("blank")(e,t);H.error=M("error"),H.success=M("success"),H.loading=M("loading"),H.custom=M("custom"),H.dismiss=(e,t)=>{let r={type:3,toastId:e};t?z(t)(r):A(r)},H.dismissAll=e=>H.dismiss(void 0,e),H.remove=(e,t)=>{let r={type:4,toastId:e};t?z(t)(r):A(r)},H.removeAll=e=>H.remove(void 0,e),H.promise=(e,t,r)=>{let a=H.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?N(t.success,e):void 0;return o?H.success(o,{id:a,...r,...null==r?void 0:r.success}):H.dismiss(a),e}).catch(e=>{let o=t.error?N(t.error,e):void 0;o?H.error(o,{id:a,...r,...null==r?void 0:r.error}):H.dismiss(a)}),e};var R=1e3,Z=(e,t="default")=>{let{toasts:r,pausedAt:a}=L(e,t),o=(0,i.useRef)(new Map).current,s=(0,i.useCallback)((e,t=R)=>{if(o.has(e))return;let r=setTimeout(()=>{o.delete(e),n({type:4,toastId:e})},t);o.set(e,r)},[]);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),o=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&H.dismiss(r.id);return}return setTimeout(()=>H.dismiss(r.id,t),a)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,i.useCallback)(z(t),[t]),l=(0,i.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,i.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,i.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,i.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:s}=t||{},i=r.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[r]);return(0,i.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)s(e.id,e.removeDelay);else{let t=o.get(e.id);t&&(clearTimeout(t),o.delete(e.id))}})},[r,s]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},B=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${B} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
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
    animation: ${q} 0.15s ease-out forwards;
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
`,G=j("div")`
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
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===r?null:i.createElement(X,null,i.createElement(G,{...a}),"loading"!==r&&i.createElement(W,null,"error"===r?i.createElement(Y,{...a}):i.createElement(Q,{...a})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,eo=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,es=j("div")`
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
`,ei=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),eo(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=i.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},s=i.createElement(er,{toast:e}),n=i.createElement(ei,{...e.ariaProps},N(e.message,e));return i.createElement(es,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:s,message:n}):i.createElement(i.Fragment,null,s,n))});s=i.createElement,p.p=void 0,y=s,b=void 0,v=void 0;var ed=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let s=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:s,className:t,style:r},o)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,toasterId:s,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=Z(r,s);return i.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let s=r.position||t,n=ec(s,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(ed,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:n},"custom"===r.type?N(r.message,r):o?o(r):i.createElement(el,{toast:r,position:s}))}))},em=H}},function(e){e.O(0,[737,250,971,938,744],function(){return e(e.s=771)}),_N_E=e.O()}]);