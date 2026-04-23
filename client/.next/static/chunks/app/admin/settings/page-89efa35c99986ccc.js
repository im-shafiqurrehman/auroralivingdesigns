(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[140],{7711:function(e,t,r){Promise.resolve().then(r.bind(r,143))},143:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var a=r(7437),s=r(2265),o=r(5925);function i(){let[e,t]=(0,s.useState)({siteName:"Aurora Living Designs",domain:"auroralivingdesigns.online",whatsapp:"+92 300 123 4567",email:"info@auroralivingdesigns.online",address:"Lahore, Punjab, Pakistan",hours:"Monday – Saturday: 9:00 AM – 6:00 PM"}),r=function(r,s){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";return(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"form-label",children:s}),(0,a.jsx)("input",{type:o,className:"input-aurora",value:e[r],onChange:a=>t({...e,[r]:a.target.value})})]})};return(0,a.jsxs)("div",{className:"p-8 max-w-2xl",children:[(0,a.jsx)("h1",{className:"font-playfair text-3xl font-normal mb-8",children:"Settings"}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o.default.success("Settings saved (placeholder — connect to API as needed).")},className:"space-y-6",children:[(0,a.jsxs)("div",{className:"bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-5",children:[(0,a.jsx)("div",{className:"text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2",children:"Site Information"}),r("siteName","Site Name"),r("domain","Domain")]}),(0,a.jsxs)("div",{className:"bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-5",children:[(0,a.jsx)("div",{className:"text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2",children:"Contact Details"}),r("email","Contact Email","email"),r("whatsapp","WhatsApp Number"),r("address","Address"),r("hours","Business Hours")]}),(0,a.jsxs)("div",{className:"bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6",children:[(0,a.jsx)("div",{className:"text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-4",children:"Security"}),(0,a.jsx)("p",{className:"text-aurora-muted text-sm font-light",children:"Keep administrator credentials outside the frontend UI. Manage admin accounts from secure backend tooling or database admin workflows only."})]}),(0,a.jsx)("button",{type:"submit",className:"btn-primary",children:"Save Settings"})]})]})}},622:function(e,t,r){"use strict";var a=r(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var a,o={},d=null,c=null;for(a in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:c,props:o,_owner:n.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},7437:function(e,t,r){"use strict";e.exports=r(622)},5925:function(e,t,r){"use strict";let a,s;r.r(t),r.d(t,{CheckmarkIcon:function(){return J},ErrorIcon:function(){return q},LoaderIcon:function(){return V},ToastBar:function(){return el},ToastIcon:function(){return er},Toaster:function(){return ep},default:function(){return em},resolveValue:function(){return N},toast:function(){return F},useToaster:function(){return U},useToasterStore:function(){return z}});var o,i=r(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(o,i):o+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},g=(e,t,r,a,s)=>{var o;let i=f(e),n=m[i]||(m[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),o=m[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),n},y=(e,t,r)=>e.reduce((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?y(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let h,v,x,w=b.bind({k:1});function k(e,t){let r=this||{};return function(){let a=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;r.p=Object.assign({theme:v&&v()},n),r.o=/ *go\d+/.test(l),n.className=b.apply(r,a)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),x&&d[0]&&x(n),h(d,n)}return t?t(s):s}}var E=e=>"function"==typeof e,N=(e,t)=>E(e)?e(t):e,j=(a=0,()=>(++a).toString()),_=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},O="default",C=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return C(e,{type:e.toasts.find(e=>e.id===a.id)?1:0,toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},I=[],S={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},$={},D=(e,t=O)=>{$[t]=C($[t]||S,e),I.forEach(([e,r])=>{e===t&&r($[t])})},A=e=>Object.keys($).forEach(t=>D(e,t)),P=e=>Object.keys($).find(t=>$[t].toasts.some(t=>t.id===e)),T=(e=O)=>t=>{D(t,e)},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={},t=O)=>{let[r,a]=(0,i.useState)($[t]||S),s=(0,i.useRef)($[t]);(0,i.useEffect)(()=>(s.current!==$[t]&&a($[t]),I.push([t,a]),()=>{let e=I.findIndex(([e])=>e===t);e>-1&&I.splice(e,1)}),[t]);let o=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||L[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:o}},M=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}),R=e=>(t,r)=>{let a=M(t,e,r);return T(a.toasterId||P(a.id))({type:2,toast:a}),a.id},F=(e,t)=>R("blank")(e,t);F.error=R("error"),F.success=R("success"),F.loading=R("loading"),F.custom=R("custom"),F.dismiss=(e,t)=>{let r={type:3,toastId:e};t?T(t)(r):A(r)},F.dismissAll=e=>F.dismiss(void 0,e),F.remove=(e,t)=>{let r={type:4,toastId:e};t?T(t)(r):A(r)},F.removeAll=e=>F.remove(void 0,e),F.promise=(e,t,r)=>{let a=F.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?N(t.success,e):void 0;return s?F.success(s,{id:a,...r,...null==r?void 0:r.success}):F.dismiss(a),e}).catch(e=>{let s=t.error?N(t.error,e):void 0;s?F.error(s,{id:a,...r,...null==r?void 0:r.error}):F.dismiss(a)}),e};var H=1e3,U=(e,t="default")=>{let{toasts:r,pausedAt:a}=z(e,t),s=(0,i.useRef)(new Map).current,o=(0,i.useCallback)((e,t=H)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,r)},[]);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&F.dismiss(r.id);return}return setTimeout(()=>F.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let n=(0,i.useCallback)(T(t),[t]),l=(0,i.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,i.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,i.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,i.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:o}=t||{},i=r.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,i.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},B=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,W=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,q=k("div")`
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
    animation: ${W} 0.15s ease-out forwards;
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
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,K=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${K} 1s linear infinite;
`,Z=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,G=w`
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
}`,J=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${G} 0.2s ease-out forwards;
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
`,er=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===r?null:i.createElement(X,null,i.createElement(V,{...a}),"loading"!==r&&i.createElement(Q,null,"error"===r?i.createElement(q,{...a}):i.createElement(J,{...a})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eo=k("div")`
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
`,en=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(r),es(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=i.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(er,{toast:e}),n=i.createElement(ei,{...e.ariaProps},N(e.message,e));return i.createElement(eo,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,p.p=void 0,h=o,v=void 0,x=void 0;var ed=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let o=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:o,className:t,style:r},s)},ec=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},eu=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,toasterId:o,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=U(r,o);return i.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let o=r.position||t,n=ec(o,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(ed,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?eu:"",style:n},"custom"===r.type?N(r.message,r):s?s(r):i.createElement(el,{toast:r,position:o}))}))},em=F}},function(e){e.O(0,[971,938,744],function(){return e(e.s=7711)}),_N_E=e.O()}]);