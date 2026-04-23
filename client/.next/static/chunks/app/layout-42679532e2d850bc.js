(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{463:function(e,t,r){Promise.resolve().then(r.bind(r,5883)),Promise.resolve().then(r.t.bind(r,227,23)),Promise.resolve().then(r.t.bind(r,368,23)),Promise.resolve().then(r.t.bind(r,2445,23)),Promise.resolve().then(r.bind(r,5925))},5883:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var a=r(7437),o=r(1396),n=r.n(o),i=r(4033),s=r(2265),l=r(3760);let c=[{href:"/",label:"Home"},{href:"/products",label:"Products"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}];function u(){let e=(0,i.usePathname)(),t=(0,i.useRouter)(),{user:r,initialized:o,fetchMe:u,logout:d}=(0,l.t)(),[f,p]=(0,s.useState)(!1),[m,g]=(0,s.useState)(!1);(0,s.useEffect)(()=>{o||u();let e=()=>p(window.scrollY>20);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[u,o]);let b=async()=>{await d(),t.push("/")};return(0,a.jsxs)("nav",{className:"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-4 border-b border-[rgba(240,192,64,0.2)] transition-all duration-300 ".concat(f?"bg-[rgba(13,13,13,0.97)] backdrop-blur-md":"bg-transparent"),children:[(0,a.jsxs)(n(),{href:"/",className:"font-playfair text-lg text-gold tracking-[0.15em] uppercase",children:["Aurora ",(0,a.jsx)("span",{className:"text-aurora-text font-light",children:"Living Designs"})]}),(0,a.jsxs)("ul",{className:"hidden md:flex gap-10 list-none",children:[c.map(t=>(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:t.href,className:"text-xs tracking-[0.12em] uppercase transition-colors duration-300 ".concat(e===t.href?"text-gold":"text-aurora-muted hover:text-gold"),children:t.label})},t.href)),(null==r?void 0:r.role)==="admin"&&(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/admin",className:"text-xs tracking-[0.12em] uppercase transition-colors duration-300 ".concat(e.startsWith("/admin")?"text-gold":"text-aurora-muted hover:text-gold"),children:"Admin"})})]}),(0,a.jsx)("div",{className:"hidden md:flex items-center gap-4",children:r?(0,a.jsx)("button",{onClick:b,className:"border border-[rgba(240,192,64,0.25)] text-aurora-muted px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all hover:border-gold hover:text-gold",children:"Sign Out"}):(0,a.jsx)(n(),{href:"/login",className:"border border-[rgba(240,192,64,0.25)] text-aurora-muted px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all hover:border-gold hover:text-gold",children:"Sign In"})}),(0,a.jsx)("button",{className:"md:hidden text-aurora-muted",onClick:()=>g(!m),"aria-label":"Toggle menu",children:(0,a.jsx)("span",{className:"text-2xl",children:m?"✕":"☰"})}),m&&(0,a.jsxs)("div",{className:"absolute top-full left-0 right-0 bg-[#0d0d0d] border-b border-[rgba(240,192,64,0.2)] md:hidden",children:[c.map(e=>(0,a.jsx)(n(),{href:e.href,onClick:()=>g(!1),className:"block px-8 py-4 text-xs tracking-[0.15em] uppercase text-aurora-muted hover:text-gold border-b border-[rgba(240,192,64,0.08)]",children:e.label},e.href)),(null==r?void 0:r.role)==="admin"&&(0,a.jsx)(n(),{href:"/admin",onClick:()=>g(!1),className:"block px-8 py-4 text-xs tracking-[0.15em] uppercase text-aurora-muted hover:text-gold border-b border-[rgba(240,192,64,0.08)]",children:"Admin"}),r?(0,a.jsx)("button",{onClick:b,className:"block w-full text-left px-8 py-4 text-xs tracking-[0.15em] uppercase text-aurora-muted hover:text-gold",children:"Sign Out"}):(0,a.jsx)(n(),{href:"/login",onClick:()=>g(!1),className:"block px-8 py-4 text-xs tracking-[0.15em] uppercase text-aurora-muted hover:text-gold",children:"Sign In"})]})]})}},826:function(e,t,r){"use strict";let a=r(4829).Z.create({baseURL:"http://localhost:5002/api",withCredentials:!0});a.interceptors.request.use(e=>{{let t=localStorage.getItem("aurora_token");t&&(e.headers.Authorization="Bearer ".concat(t))}return e}),t.Z=a},3760:function(e,t,r){"use strict";r.d(t,{t:function(){return m}});let a=e=>{let t;let r=new Set,a=(e,a)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=a?a:"object"!=typeof o||null===o)?o:Object.assign({},t,o),r.forEach(r=>r(t,e))}},o=()=>t,n={setState:a,getState:o,getInitialState:()=>i,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},i=t=e(a,o,n);return n},o=e=>e?a(e):a;var n,i=r(2265),s=r(5401);let{useDebugValue:l}=i,{useSyncExternalStoreWithSelector:c}=s,u=!1,d=e=>e,f=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,r=(e,r)=>(function(e,t=d,r){r&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let a=c(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return l(a),a})(t,e,r);return Object.assign(r,t),r};var p=r(826);let m=(n=e=>({user:null,loading:!1,initialized:!1,login:async(t,r)=>{e({loading:!0});try{let{data:a}=await p.Z.post("/auth/login",{email:t,password:r});a.token&&localStorage.setItem("aurora_token",a.token),e({user:a,initialized:!0})}finally{e({loading:!1})}},register:async(t,r,a)=>{e({loading:!0});try{let{data:o}=await p.Z.post("/auth/register",{name:t,email:r,password:a});o.token&&localStorage.setItem("aurora_token",o.token),e({user:o,initialized:!0})}finally{e({loading:!1})}},logout:async()=>{try{await p.Z.post("/auth/logout")}finally{localStorage.removeItem("aurora_token"),e({user:null,initialized:!0})}},fetchMe:async()=>{e({loading:!0});try{let{data:t}=await p.Z.get("/auth/me");e({user:t,initialized:!0})}catch(t){localStorage.removeItem("aurora_token"),e({user:null,initialized:!0})}finally{e({loading:!1})}}}))?f(n):f},2445:function(){},368:function(e){e.exports={style:{fontFamily:"'__Cormorant_Garamond_1a41a3', '__Cormorant_Garamond_Fallback_1a41a3'",fontStyle:"normal"},className:"__className_1a41a3",variable:"__variable_1a41a3"}},227:function(e){e.exports={style:{fontFamily:"'__Playfair_Display_0a80b4', '__Playfair_Display_Fallback_0a80b4'",fontStyle:"normal"},className:"__className_0a80b4",variable:"__variable_0a80b4"}},1396:function(e,t,r){e.exports=r(5250)},4033:function(e,t,r){e.exports=r(5313)},9808:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=a.useState,i=a.useEffect,s=a.useLayoutEffect,l=a.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),a=n({inst:{value:r,getSnapshot:t}}),o=a[0].inst,u=a[1];return s(function(){o.value=r,o.getSnapshot=t,c(o)&&u({inst:o})},[e,r,t]),i(function(){return c(o)&&u({inst:o}),e(function(){c(o)&&u({inst:o})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==a.useSyncExternalStore?a.useSyncExternalStore:u},3176:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),o=r(6272),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useSyncExternalStore,s=a.useRef,l=a.useEffect,c=a.useMemo,u=a.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,a,o){var d=s(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var p=i(e,(d=c(function(){function e(e){if(!l){if(l=!0,i=e,e=a(e),void 0!==o&&f.hasValue){var t=f.value;if(o(t,e))return s=t}return s=e}if(t=s,n(i,e))return t;var r=a(e);return void 0!==o&&o(t,r)?(i=e,t):(i=e,s=r)}var i,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,a,o]))[0],d[1]);return l(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}},6272:function(e,t,r){"use strict";e.exports=r(9808)},5401:function(e,t,r){"use strict";e.exports=r(3176)},5925:function(e,t,r){"use strict";let a,o;r.r(t),r.d(t,{CheckmarkIcon:function(){return K},ErrorIcon:function(){return W},LoaderIcon:function(){return G},ToastBar:function(){return el},ToastIcon:function(){return er},Toaster:function(){return ef},default:function(){return ep},resolveValue:function(){return _},toast:function(){return M},useToaster:function(){return H},useToasterStore:function(){return L}});var n,i=r(2265);let s={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||s},c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,f=(e,t)=>{let r="",a="",o="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+i+";":a+="f"==n[1]?f(i,n):n+"{"+f(i,"k"==n[1]?"":t)+"}":"object"==typeof i?a+=f(i,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=f.p?f.p(n,i):n+":"+i+";")}return r+(t&&o?t+"{"+o+"}":o)+a},p={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},g=(e,t,r,a,o)=>{var n;let i=m(e),s=p[i]||(p[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!p[s]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(u,""));)t[4]?a.shift():t[3]?(r=t[3].replace(d," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(d," ").trim();return a[0]})(e);p[s]=f(o?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&p.g?p.g:null;return r&&(p.g=p[s]),n=p[s],l?t.data=t.data.replace(l,n):-1===t.data.indexOf(n)&&(t.data=a?n+t.data:t.data+n),s},b=(e,t,r)=>e.reduce((e,a,o)=>{let n=t[o];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"");function h(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?b(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let y,x,v,w=h.bind({k:1});function k(e,t){let r=this||{};return function(){let a=arguments;function o(n,i){let s=Object.assign({},n),l=s.className||o.className;r.p=Object.assign({theme:x&&x()},s),r.o=/ *go\d+/.test(l),s.className=h.apply(r,a)+(l?" "+l:""),t&&(s.ref=i);let c=e;return e[0]&&(c=s.as||e,delete s.as),v&&c[0]&&v(s),y(c,s)}return t?t(o):o}}var E=e=>"function"==typeof e,_=(e,t)=>E(e)?e(t):e,S=(a=0,()=>(++a).toString()),j=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},N="default",C=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return C(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},I=[],D={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},O={},z=(e,t=N)=>{O[t]=C(O[t]||D,e),I.forEach(([e,r])=>{e===t&&r(O[t])})},P=e=>Object.keys(O).forEach(t=>z(e,t)),A=e=>Object.keys(O).find(t=>O[t].toasts.some(t=>t.id===e)),$=(e=N)=>t=>{z(t,e)},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},L=(e={},t=N)=>{let[r,a]=(0,i.useState)(O[t]||D),o=(0,i.useRef)(O[t]);(0,i.useEffect)(()=>(o.current!==O[t]&&a(O[t]),I.push([t,a]),()=>{let e=I.findIndex(([e])=>e===t);e>-1&&I.splice(e,1)}),[t]);let n=r.toasts.map(t=>{var r,a,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...r,toasts:n}},F=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||S()}),R=e=>(t,r)=>{let a=F(t,e,r);return $(a.toasterId||A(a.id))({type:2,toast:a}),a.id},M=(e,t)=>R("blank")(e,t);M.error=R("error"),M.success=R("success"),M.loading=R("loading"),M.custom=R("custom"),M.dismiss=(e,t)=>{let r={type:3,toastId:e};t?$(t)(r):P(r)},M.dismissAll=e=>M.dismiss(void 0,e),M.remove=(e,t)=>{let r={type:4,toastId:e};t?$(t)(r):P(r)},M.removeAll=e=>M.remove(void 0,e),M.promise=(e,t,r)=>{let a=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?_(t.success,e):void 0;return o?M.success(o,{id:a,...r,...null==r?void 0:r.success}):M.dismiss(a),e}).catch(e=>{let o=t.error?_(t.error,e):void 0;o?M.error(o,{id:a,...r,...null==r?void 0:r.error}):M.dismiss(a)}),e};var Z=1e3,H=(e,t="default")=>{let{toasts:r,pausedAt:a}=L(e,t),o=(0,i.useRef)(new Map).current,n=(0,i.useCallback)((e,t=Z)=>{if(o.has(e))return;let r=setTimeout(()=>{o.delete(e),s({type:4,toastId:e})},t);o.set(e,r)},[]);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),o=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&M.dismiss(r.id);return}return setTimeout(()=>M.dismiss(r.id,t),a)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let s=(0,i.useCallback)($(t),[t]),l=(0,i.useCallback)(()=>{s({type:5,time:Date.now()})},[s]),c=(0,i.useCallback)((e,t)=>{s({type:1,toast:{id:e,height:t}})},[s]),u=(0,i.useCallback)(()=>{a&&s({type:6,time:Date.now()})},[a,s]),d=(0,i.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:n}=t||{},i=r.filter(t=>(t.position||n)===(e.position||n)&&t.height),s=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<s&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[r]);return(0,i.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=o.get(e.id);t&&(clearTimeout(t),o.delete(e.id))}})},[r,n]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:d}}},V=w`
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
}`,W=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,B=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,Y=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,J=w`
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
}`,K=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${J} 0.2s ease-out forwards;
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
`,Q=k("div")`
  position: absolute;
`,X=k("div")`
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
}`,et=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===r?null:i.createElement(X,null,i.createElement(G,{...a}),"loading"!==r&&i.createElement(Q,null,"error"===r?i.createElement(W,{...a}):i.createElement(K,{...a})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,eo=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,en=k("div")`
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
`,ei=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,es=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=j()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),eo(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=i.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?es(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(er,{toast:e}),s=i.createElement(ei,{...e.ariaProps},_(e.message,e));return i.createElement(en,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:n,message:s}):i.createElement(i.Fragment,null,n,s))});n=i.createElement,f.p=void 0,y=n,x=void 0,v=void 0;var ec=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let n=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:n,className:t,style:r},o)},eu=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:j()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ed=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ef=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,toasterId:n,containerStyle:s,containerClassName:l})=>{let{toasts:c,handlers:u}=H(r,n);return i.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(r=>{let n=r.position||t,s=eu(n,u.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(ec,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?ed:"",style:s},"custom"===r.type?_(r.message,r):o?o(r):i.createElement(el,{toast:r,position:n}))}))},ep=M}},function(e){e.O(0,[737,250,971,938,744],function(){return e(e.s=463)}),_N_E=e.O()}]);