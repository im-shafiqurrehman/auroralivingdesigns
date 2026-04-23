(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{2729:function(e,t,r){Promise.resolve().then(r.bind(r,5262))},5262:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var a=r(7437),i=r(2265),n=r(1396),o=r.n(n),s=r(4033),l=r(3760),u=r(5925);function c(){let[e,t]=(0,i.useState)({name:"",email:"",password:""}),[r,n]=(0,i.useState)(!1),{register:c}=(0,l.t)(),d=(0,s.useRouter)(),p=async t=>{t.preventDefault(),n(!0);try{await c(e.name,e.email,e.password),u.default.success("Account created."),d.push("/")}catch(e){var r,a;u.default.error((null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(r=a.data)||void 0===r?void 0:r.message)||"Registration failed")}finally{n(!1)}};return(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center px-6 pt-20",children:(0,a.jsxs)("div",{className:"bg-aurora-card border border-[rgba(240,192,64,0.25)] p-10 w-full max-w-md",children:[(0,a.jsxs)("div",{className:"text-center mb-8",children:[(0,a.jsx)("div",{className:"font-playfair text-gold text-sm tracking-[0.2em] uppercase mb-4",children:"Aurora Living Designs"}),(0,a.jsx)("h1",{className:"font-playfair text-2xl font-normal mb-1",children:"Create Account"}),(0,a.jsx)("p",{className:"text-aurora-muted text-sm",children:"Join our platform"})]}),(0,a.jsxs)("form",{onSubmit:p,className:"space-y-5",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"form-label",children:"Full Name"}),(0,a.jsx)("input",{required:!0,className:"input-aurora",placeholder:"Ahmed Khan",value:e.name,onChange:r=>t({...e,name:r.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"form-label",children:"Email Address"}),(0,a.jsx)("input",{required:!0,type:"email",className:"input-aurora",placeholder:"you@example.com",value:e.email,onChange:r=>t({...e,email:r.target.value})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"form-label",children:"Password"}),(0,a.jsx)("input",{required:!0,type:"password",className:"input-aurora",placeholder:"••••••••",value:e.password,onChange:r=>t({...e,password:r.target.value})})]}),(0,a.jsx)("button",{type:"submit",disabled:r,className:"btn-primary w-full disabled:opacity-60",children:r?"Creating...":"Create Account"})]}),(0,a.jsxs)("p",{className:"text-center text-aurora-muted text-sm mt-5",children:["Already registered?"," ",(0,a.jsx)(o(),{href:"/login",className:"text-gold hover:underline",children:"Sign in"})]})]})})}},826:function(e,t,r){"use strict";let a=r(4829).Z.create({baseURL:"http://localhost:5002/api",withCredentials:!0});a.interceptors.request.use(e=>{{let t=localStorage.getItem("aurora_token");t&&(e.headers.Authorization="Bearer ".concat(t))}return e}),t.Z=a},3760:function(e,t,r){"use strict";r.d(t,{t:function(){return m}});let a=e=>{let t;let r=new Set,a=(e,a)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=a?a:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,n={setState:a,getState:i,getInitialState:()=>o,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},o=t=e(a,i,n);return n},i=e=>e?a(e):a;var n,o=r(2265),s=r(5401);let{useDebugValue:l}=o,{useSyncExternalStoreWithSelector:u}=s,c=!1,d=e=>e,p=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?i(e):e,r=(e,r)=>(function(e,t=d,r){r&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let a=u(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return l(a),a})(t,e,r);return Object.assign(r,t),r};var f=r(826);let m=(n=e=>({user:null,loading:!1,initialized:!1,login:async(t,r)=>{e({loading:!0});try{let{data:a}=await f.Z.post("/auth/login",{email:t,password:r});a.token&&localStorage.setItem("aurora_token",a.token),e({user:a,initialized:!0})}finally{e({loading:!1})}},register:async(t,r,a)=>{e({loading:!0});try{let{data:i}=await f.Z.post("/auth/register",{name:t,email:r,password:a});i.token&&localStorage.setItem("aurora_token",i.token),e({user:i,initialized:!0})}finally{e({loading:!1})}},logout:async()=>{try{await f.Z.post("/auth/logout")}finally{localStorage.removeItem("aurora_token"),e({user:null,initialized:!0})}},fetchMe:async()=>{e({loading:!0});try{let{data:t}=await f.Z.get("/auth/me");e({user:t,initialized:!0})}catch(t){localStorage.removeItem("aurora_token"),e({user:null,initialized:!0})}finally{e({loading:!1})}}}))?p(n):p},1396:function(e,t,r){e.exports=r(5250)},4033:function(e,t,r){e.exports=r(5313)},9808:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=a.useState,o=a.useEffect,s=a.useLayoutEffect,l=a.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),a=n({inst:{value:r,getSnapshot:t}}),i=a[0].inst,c=a[1];return s(function(){i.value=r,i.getSnapshot=t,u(i)&&c({inst:i})},[e,r,t]),o(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==a.useSyncExternalStore?a.useSyncExternalStore:c},3176:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),i=r(6272),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,s=a.useRef,l=a.useEffect,u=a.useMemo,c=a.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,a,i){var d=s(null);if(null===d.current){var p={hasValue:!1,value:null};d.current=p}else p=d.current;var f=o(e,(d=u(function(){function e(e){if(!l){if(l=!0,o=e,e=a(e),void 0!==i&&p.hasValue){var t=p.value;if(i(t,e))return s=t}return s=e}if(t=s,n(o,e))return t;var r=a(e);return void 0!==i&&i(t,r)?(o=e,t):(o=e,s=r)}var o,s,l=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,a,i]))[0],d[1]);return l(function(){p.hasValue=!0,p.value=f},[f]),c(f),f}},6272:function(e,t,r){"use strict";e.exports=r(9808)},5401:function(e,t,r){"use strict";e.exports=r(3176)},5925:function(e,t,r){"use strict";let a,i;r.r(t),r.d(t,{CheckmarkIcon:function(){return G},ErrorIcon:function(){return B},LoaderIcon:function(){return J},ToastBar:function(){return el},ToastIcon:function(){return er},Toaster:function(){return ep},default:function(){return ef},resolveValue:function(){return S},toast:function(){return M},useToaster:function(){return Z},useToasterStore:function(){return L}});var n,o=r(2265);let s={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||s},u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,p=(e,t)=>{let r="",a="",i="";for(let n in e){let o=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+o+";":a+="f"==n[1]?p(o,n):n+"{"+p(o,"k"==n[1]?"":t)+"}":"object"==typeof o?a+=p(o,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=o&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=p.p?p.p(n,o):n+":"+o+";")}return r+(t&&i?t+"{"+i+"}":i)+a},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},g=(e,t,r,a,i)=>{var n;let o=m(e),s=f[o]||(f[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!f[s]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=u.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(d," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(d," ").trim();return a[0]})(e);f[s]=p(i?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&f.g?f.g:null;return r&&(f.g=f[s]),n=f[s],l?t.data=t.data.replace(l,n):-1===t.data.indexOf(n)&&(t.data=a?n+t.data:t.data+n),s},h=(e,t,r)=>e.reduce((e,a,i)=>{let n=t[i];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,v,x,w=y.bind({k:1});function E(e,t){let r=this||{};return function(){let a=arguments;function i(n,o){let s=Object.assign({},n),l=s.className||i.className;r.p=Object.assign({theme:v&&v()},s),r.o=/ *go\d+/.test(l),s.className=y.apply(r,a)+(l?" "+l:""),t&&(s.ref=o);let u=e;return e[0]&&(u=s.as||e,delete s.as),x&&u[0]&&x(s),b(u,s)}return t?t(i):i}}var j=e=>"function"==typeof e,S=(e,t)=>j(e)?e(t):e,k=(a=0,()=>(++a).toString()),N=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},C="default",D=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return D(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},I=[],O={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},A={},z=(e,t=C)=>{A[t]=D(A[t]||O,e),I.forEach(([e,r])=>{e===t&&r(A[t])})},$=e=>Object.keys(A).forEach(t=>z(e,t)),_=e=>Object.keys(A).find(t=>A[t].toasts.some(t=>t.id===e)),T=(e=C)=>t=>{z(t,e)},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},L=(e={},t=C)=>{let[r,a]=(0,o.useState)(A[t]||O),i=(0,o.useRef)(A[t]);(0,o.useEffect)(()=>(i.current!==A[t]&&a(A[t]),I.push([t,a]),()=>{let e=I.findIndex(([e])=>e===t);e>-1&&I.splice(e,1)}),[t]);let n=r.toasts.map(t=>{var r,a,i;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...r,toasts:n}},R=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||k()}),F=e=>(t,r)=>{let a=R(t,e,r);return T(a.toasterId||_(a.id))({type:2,toast:a}),a.id},M=(e,t)=>F("blank")(e,t);M.error=F("error"),M.success=F("success"),M.loading=F("loading"),M.custom=F("custom"),M.dismiss=(e,t)=>{let r={type:3,toastId:e};t?T(t)(r):$(r)},M.dismissAll=e=>M.dismiss(void 0,e),M.remove=(e,t)=>{let r={type:4,toastId:e};t?T(t)(r):$(r)},M.removeAll=e=>M.remove(void 0,e),M.promise=(e,t,r)=>{let a=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?S(t.success,e):void 0;return i?M.success(i,{id:a,...r,...null==r?void 0:r.success}):M.dismiss(a),e}).catch(e=>{let i=t.error?S(t.error,e):void 0;i?M.error(i,{id:a,...r,...null==r?void 0:r.error}):M.dismiss(a)}),e};var q=1e3,Z=(e,t="default")=>{let{toasts:r,pausedAt:a}=L(e,t),i=(0,o.useRef)(new Map).current,n=(0,o.useCallback)((e,t=q)=>{if(i.has(e))return;let r=setTimeout(()=>{i.delete(e),s({type:4,toastId:e})},t);i.set(e,r)},[]);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),i=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&M.dismiss(r.id);return}return setTimeout(()=>M.dismiss(r.id,t),a)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let s=(0,o.useCallback)(T(t),[t]),l=(0,o.useCallback)(()=>{s({type:5,time:Date.now()})},[s]),u=(0,o.useCallback)((e,t)=>{s({type:1,toast:{id:e,height:t}})},[s]),c=(0,o.useCallback)(()=>{a&&s({type:6,time:Date.now()})},[a,s]),d=(0,o.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:n}=t||{},o=r.filter(t=>(t.position||n)===(e.position||n)&&t.height),s=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[r,n]),{toasts:r,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},V=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,H=w`
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
}`,B=E("div")`
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
    animation: ${H} 0.15s ease-out forwards;
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
`,W=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,J=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${W} 1s linear infinite;
`,K=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=w`
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
}`,G=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
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
`,Q=E("div")`
  position: absolute;
`,X=E("div")`
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
}`,et=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(et,null,t):t:"blank"===r?null:o.createElement(X,null,o.createElement(J,{...a}),"loading"!==r&&o.createElement(Q,null,"error"===r?o.createElement(B,{...a}):o.createElement(G,{...a})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ei=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,en=E("div")`
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
`,eo=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,es=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),ei(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=o.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?es(e.position||t||"top-center",e.visible):{opacity:0},n=o.createElement(er,{toast:e}),s=o.createElement(eo,{...e.ariaProps},S(e.message,e));return o.createElement(en,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:n,message:s}):o.createElement(o.Fragment,null,n,s))});n=o.createElement,p.p=void 0,b=n,v=void 0,x=void 0;var eu=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let n=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:n,className:t,style:r},i)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ed=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,toasterId:n,containerStyle:s,containerClassName:l})=>{let{toasts:u,handlers:c}=Z(r,n);return o.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(r=>{let n=r.position||t,s=ec(n,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(eu,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ed:"",style:s},"custom"===r.type?S(r.message,r):i?i(r):o.createElement(el,{toast:r,position:n}))}))},ef=M}},function(e){e.O(0,[737,250,971,938,744],function(){return e(e.s=2729)}),_N_E=e.O()}]);