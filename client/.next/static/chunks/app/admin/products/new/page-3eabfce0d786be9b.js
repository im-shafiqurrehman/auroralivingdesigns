(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{9907:function(e,t,a){Promise.resolve().then(a.bind(a,3208))},3208:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var r=a(7437),s=a(2265),i=a(4033),o=a(826),n=a(5925);function l(){let e=(0,i.useRouter)(),t=(0,i.useSearchParams)().get("edit"),a=!!t,[l,c]=(0,s.useState)([]),[d,u]=(0,s.useState)(!1),[p,m]=(0,s.useState)({name:"",category:"",shortDescription:"",longDescription:"",price:"",dimensions:"",weight:"",material:"",inStock:!0,featured:!1}),[f,g]=(0,s.useState)([]);(0,s.useEffect)(()=>{o.Z.get("/categories").then(e=>{let{data:t}=e;return c(t)}),a&&o.Z.get("/products/".concat(t)).then(e=>{var t;let{data:a}=e;m({name:a.name,category:(null===(t=a.category)||void 0===t?void 0:t._id)||"",shortDescription:a.shortDescription,longDescription:a.longDescription||"",price:String(a.price),dimensions:a.dimensions||"",weight:a.weight||"",material:a.material||"",inStock:a.inStock,featured:a.featured})})},[t,a]);let h=async r=>{r.preventDefault(),u(!0);try{let r=new FormData;Object.entries(p).forEach(e=>{let[t,a]=e;return r.append(t,String(a))}),f.forEach(e=>r.append("images",e)),a?(await o.Z.put("/products/".concat(t),r,{headers:{"Content-Type":"multipart/form-data"}}),n.default.success("Product updated")):(await o.Z.post("/products",r,{headers:{"Content-Type":"multipart/form-data"}}),n.default.success("Product created")),e.push("/admin/products")}catch(e){var s,i;n.default.error((null==e?void 0:null===(i=e.response)||void 0===i?void 0:null===(s=i.data)||void 0===s?void 0:s.message)||"Save failed")}finally{u(!1)}},b=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"form-label",children:t}),(0,r.jsx)("input",{type:a,className:"input-aurora",placeholder:s,value:String(p[e]),onChange:t=>m({...p,[e]:t.target.value})})]})};return(0,r.jsxs)("div",{className:"p-8 max-w-3xl",children:[(0,r.jsx)("h1",{className:"font-playfair text-3xl font-normal mb-8",children:a?"Edit Product":"Add Product"}),(0,r.jsxs)("form",{onSubmit:h,className:"space-y-6",children:[(0,r.jsxs)("div",{className:"bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-5",children:[(0,r.jsx)("div",{className:"text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2",children:"Basic Info"}),b("name","Product Name","text","3-Tier Classical Garden Fountain"),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"form-label",children:"Category"}),(0,r.jsxs)("select",{required:!0,className:"w-full bg-transparent border-b border-[rgba(240,192,64,0.25)] py-2 text-aurora-text outline-none",value:p.category,onChange:e=>m({...p,category:e.target.value}),children:[(0,r.jsx)("option",{value:"",children:"Select a category"}),l.map(e=>(0,r.jsx)("option",{value:e._id,className:"bg-[#111]",children:e.name},e._id))]})]}),b("price","Price (Rs.)","number","45000"),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"form-label",children:"Short Description"}),(0,r.jsx)("input",{className:"input-aurora",placeholder:"A brief one-line description...",value:p.shortDescription,onChange:e=>m({...p,shortDescription:e.target.value})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"form-label",children:"Long Description"}),(0,r.jsx)("textarea",{rows:4,className:"input-aurora resize-none",placeholder:"Full product description...",value:p.longDescription,onChange:e=>m({...p,longDescription:e.target.value})})]})]}),(0,r.jsxs)("div",{className:"bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-5",children:[(0,r.jsx)("div",{className:"text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2",children:"Specifications"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-5",children:[b("dimensions","Dimensions","text","90cm \xd7 150cm"),b("weight","Weight","text","85 kg"),b("material","Material","text","Reinforced concrete composite")]})]}),(0,r.jsxs)("div",{className:"bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6 space-y-4",children:[(0,r.jsx)("div",{className:"text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-2",children:"Settings"}),(0,r.jsxs)("div",{className:"flex gap-8",children:[(0,r.jsxs)("label",{className:"flex items-center gap-3 cursor-pointer",children:[(0,r.jsx)("input",{type:"checkbox",checked:p.inStock,onChange:e=>m({...p,inStock:e.target.checked}),className:"accent-gold"}),(0,r.jsx)("span",{className:"text-sm text-aurora-muted",children:"In Stock"})]}),(0,r.jsxs)("label",{className:"flex items-center gap-3 cursor-pointer",children:[(0,r.jsx)("input",{type:"checkbox",checked:p.featured,onChange:e=>m({...p,featured:e.target.checked}),className:"accent-gold"}),(0,r.jsx)("span",{className:"text-sm text-aurora-muted",children:"Featured (shows on homepage)"})]})]})]}),(0,r.jsxs)("div",{className:"bg-aurora-card border border-[rgba(240,192,64,0.18)] p-6",children:[(0,r.jsx)("div",{className:"text-[0.7rem] tracking-[0.2em] uppercase text-gold mb-4",children:"Images"}),(0,r.jsx)("input",{type:"file",multiple:!0,accept:"image/*",onChange:e=>g(Array.from(e.target.files||[])),className:"text-sm text-aurora-muted"}),f.length>0&&(0,r.jsxs)("p",{className:"text-xs text-gold mt-2",children:[f.length," file(s) selected"]})]}),(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsx)("button",{type:"submit",disabled:d,className:"btn-primary disabled:opacity-60",children:d?"Saving...":a?"Update Product":"Create Product"}),(0,r.jsx)("button",{type:"button",onClick:()=>e.push("/admin/products"),className:"btn-ghost",children:"Cancel"})]})]})]})}},826:function(e,t,a){"use strict";let r=a(4829).Z.create({baseURL:"http://localhost:5002/api",withCredentials:!0});r.interceptors.request.use(e=>{{let t=localStorage.getItem("aurora_token");t&&(e.headers.Authorization="Bearer ".concat(t))}return e}),t.Z=r},4033:function(e,t,a){e.exports=a(5313)},5925:function(e,t,a){"use strict";let r,s;a.r(t),a.d(t,{CheckmarkIcon:function(){return K},ErrorIcon:function(){return G},LoaderIcon:function(){return W},ToastBar:function(){return el},ToastIcon:function(){return ea},Toaster:function(){return ep},default:function(){return em},resolveValue:function(){return k},toast:function(){return R},useToaster:function(){return H},useToasterStore:function(){return F}});var i,o=a(2265);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":r+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(i,o):i+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},g=(e,t,a,r,s)=>{var i;let o=f(e),n=m[o]||(m[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!m[n]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&m.g?m.g:null;return a&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n},h=(e,t,a)=>e.reduce((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function b(e){let t=this||{},a=e.call?e(t.p):e;return g(a.unshift?a.raw?h(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let x,y,v,j=b.bind({k:1});function w(e,t){let a=this||{};return function(){let r=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=b.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),x(c,n)}return t?t(s):s}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,C=(r=0,()=>(++r).toString()),E=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},D="default",S=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return S(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},I=[],$={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},P={},O=(e,t=D)=>{P[t]=S(P[t]||$,e),I.forEach(([e,a])=>{e===t&&a(P[t])})},_=e=>Object.keys(P).forEach(t=>O(e,t)),A=e=>Object.keys(P).find(t=>P[t].toasts.some(t=>t.id===e)),T=(e=D)=>t=>{O(t,e)},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={},t=D)=>{let[a,r]=(0,o.useState)(P[t]||$),s=(0,o.useRef)(P[t]);(0,o.useEffect)(()=>(s.current!==P[t]&&r(P[t]),I.push([t,r]),()=>{let e=I.findIndex(([e])=>e===t);e>-1&&I.splice(e,1)}),[t]);let i=a.toasts.map(t=>{var a,r,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...a,toasts:i}},L=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||C()}),M=e=>(t,a)=>{let r=L(t,e,a);return T(r.toasterId||A(r.id))({type:2,toast:r}),r.id},R=(e,t)=>M("blank")(e,t);R.error=M("error"),R.success=M("success"),R.loading=M("loading"),R.custom=M("custom"),R.dismiss=(e,t)=>{let a={type:3,toastId:e};t?T(t)(a):_(a)},R.dismissAll=e=>R.dismiss(void 0,e),R.remove=(e,t)=>{let a={type:4,toastId:e};t?T(t)(a):_(a)},R.removeAll=e=>R.remove(void 0,e),R.promise=(e,t,a)=>{let r=R.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?k(t.success,e):void 0;return s?R.success(s,{id:r,...a,...null==a?void 0:a.success}):R.dismiss(r),e}).catch(e=>{let s=t.error?k(t.error,e):void 0;s?R.error(s,{id:r,...a,...null==a?void 0:a.error}):R.dismiss(r)}),e};var Z=1e3,H=(e,t="default")=>{let{toasts:a,pausedAt:r}=F(e,t),s=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=Z)=>{if(s.has(e))return;let a=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,a)},[]);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),s=a.map(a=>{if(a.duration===1/0)return;let r=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(r<0){a.visible&&R.dismiss(a.id);return}return setTimeout(()=>R.dismiss(a.id,t),r)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[a,r,t]);let n=(0,o.useCallback)(T(t),[t]),l=(0,o.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),c=(0,o.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),d=(0,o.useCallback)(()=>{r&&n({type:6,time:Date.now()})},[r,n]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:i}=t||{},o=a.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[a]);return(0,o.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[a,i]),{toasts:a,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},B=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=w("div")`
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
`,V=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,W=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${V} 1s linear infinite;
`,Y=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,J=j`
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
}`,K=w("div")`
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
`,Q=w("div")`
  position: absolute;
`,X=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ea=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(et,null,t):t:"blank"===a?null:o.createElement(X,null,o.createElement(W,{...r}),"loading"!==a&&o.createElement(Q,null,"error"===a?o.createElement(G,{...r}):o.createElement(K,{...r})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=w("div")`
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
`,eo=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(a),es(a)];return{animation:t?`${j(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=o.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(ea,{toast:e}),n=o.createElement(eo,{...e.ariaProps},k(e.message,e));return o.createElement(ei,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,x=i,y=void 0,v=void 0;var ec=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let i=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:i,className:t,style:a},s)},ed=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},eu=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:c,handlers:d}=H(a,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(a=>{let i=a.position||t,n=ed(i,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(ec,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?eu:"",style:n},"custom"===a.type?k(a.message,a):s?s(a):o.createElement(el,{toast:a,position:i}))}))},em=R}},function(e){e.O(0,[737,971,938,744],function(){return e(e.s=9907)}),_N_E=e.O()}]);