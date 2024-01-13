import{m as I,s as L,x as U,u as k,j as J,d as X,k as G,e as K,l as Q,B as Y,r as Z,i as p,F as ee,V as te,C as ae}from"./VContainer-baf2d6aa.js";import{p as V,d as P,f as n,c as b,a6 as ne,m as F,aj as se,b1 as N,s as S,r as re,w as z,ai as le,X as ie,ak as A,am as oe,F as ue,L as ce,al as ve,a8 as de,I as me,J as ge}from"./index-5fbc4a04.js";function fe(e){return{aspectStyles:b(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const D=V({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...I(),...L()},"VResponsive"),O=P()({name:"VResponsive",props:D(),setup(e,i){let{slots:s}=i;const{aspectStyles:a}=fe(e),{dimensionStyles:c}=U(e);return k(()=>{var r;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[n("div",{class:"v-responsive__sizer",style:a.value},null),(r=s.additional)==null?void 0:r.call(s),s.default&&n("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),Se=V({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,i)=>{let{slots:s}=i;const{transition:a,disabled:c,...r}=e,{component:l=se,...v}=typeof a=="object"?a:{};return ne(l,F(typeof a=="string"?{name:c?"":a}:v,r,{disabled:c}),s)};function ye(e,i){if(!N)return;const s=i.modifiers||{},a=i.value,{handler:c,options:r}=typeof a=="object"?a:{handler:a,options:{}},l=new IntersectionObserver(function(){var m;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const o=(m=e._observe)==null?void 0:m[i.instance.$.uid];if(!o)return;const d=v.some(y=>y.isIntersecting);c&&(!s.quiet||o.init)&&(!s.once||d||o.init)&&c(d,v,g),d&&s.once?W(e,i):o.init=!0},r);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:l},l.observe(e)}function W(e,i){var a;const s=(a=e._observe)==null?void 0:a[i.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const _e={mounted:ye,unmounted:W},he=_e,be=V({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...D(),...I(),...Se()},"VImg"),Ve=P()({name:"VImg",directives:{intersect:he},props:be(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:s,slots:a}=i;const c=S(""),r=re(),l=S(e.eager?"loading":"idle"),v=S(),g=S(),o=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=b(()=>o.value.aspect||v.value/g.value||0);z(()=>e.src,()=>{m(l.value!=="idle")}),z(d,(t,u)=>{!t&&u&&r.value&&_(r.value)}),le(()=>m());function m(t){if(!(e.eager&&t)&&!(N&&!t&&!e.eager)){if(l.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,_(u,null)}o.value.src&&ie(()=>{var u,f;if(s("loadstart",((u=r.value)==null?void 0:u.currentSrc)||o.value.src),(f=r.value)!=null&&f.complete){if(r.value.naturalWidth||R(),l.value==="error")return;d.value||_(r.value,null),y()}else d.value||_(r.value),C()})}}function y(){var t;C(),l.value="loaded",s("load",((t=r.value)==null?void 0:t.currentSrc)||o.value.src)}function R(){var t;l.value="error",s("error",((t=r.value)==null?void 0:t.currentSrc)||o.value.src)}function C(){const t=r.value;t&&(c.value=t.currentSrc||t.src)}let T=-1;function _(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{clearTimeout(T);const{naturalHeight:j,naturalWidth:$}=t;j||$?(v.value=$,g.value=j):!t.complete&&l.value==="loading"&&u!=null?T=window.setTimeout(f,u):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,g.value=1)};f()}const w=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),x=()=>{var f;if(!o.value.src||l.value==="idle")return null;const t=n("img",{class:["v-img__img",w.value],src:o.value.src,srcset:o.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:y,onError:R},null),u=(f=a.sources)==null?void 0:f.call(a);return n(h,{transition:e.transition,appear:!0},{default:()=>[A(u?n("picture",{class:"v-img__picture"},[u,t]):t,[[ve,l.value==="loaded"]])]})},E=()=>n(h,{transition:e.transition},{default:()=>[o.value.lazySrc&&l.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",w.value],src:o.value.lazySrc,alt:e.alt},null)]}),M=()=>a.placeholder?n(h,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!a.error)&&n("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,q=()=>a.error?n(h,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&n("div",{class:"v-img__error"},[a.error()])]}):null,H=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=S(!1);{const t=z(d,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),t())})}return k(()=>{const[t]=O.filterProps(e);return A(n(O,F({class:["v-img",{"v-img--booting":!B.value},e.class],style:[{width:ce(e.width==="auto"?v.value:e.width)},e.style]},t,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(ue,null,[n(x,null,null),n(E,null,null),n(H,null,null),n(M,null,null),n(q,null,null)]),default:a.default}),[[oe("intersect"),{handler:m,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:r,state:l,naturalWidth:v,naturalHeight:g}}});const ze=V({start:Boolean,end:Boolean,icon:de,image:String,...I(),...J(),...X(),...G(),...K(),...me(),...Q({variant:"flat"})},"VAvatar"),Pe=P()({name:"VAvatar",props:ze(),setup(e,i){let{slots:s}=i;const{themeClasses:a}=ge(e),{colorClasses:c,colorStyles:r,variantClasses:l}=Y(e),{densityClasses:v}=Z(e),{roundedClasses:g}=p(e),{sizeClasses:o,sizeStyles:d}=ee(e);return k(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,v.value,g.value,o.value,l.value,e.class],style:[r.value,d.value,e.style]},{default:()=>{var m;return[e.image?n(Ve,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(te,{key:"icon",icon:e.icon},null):(m=s.default)==null?void 0:m.call(s),ae(!1,"v-avatar")]}})),{}}});export{he as I,h as M,Ve as V,Pe as a,Se as m};
