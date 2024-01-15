import{m as V,s as L,x as J,u as k,k as X,d as G,l as K,e as Q,n as Y,B as Z,r as p,i as ee,F as te,V as ae,C as ne}from"./VContainer-A7hlFbOe.js";import{p as z,d as R,f as n,c as h,a6 as re,m as U,ag as se,b7 as x,ab as ie,s as _,r as le,w as P,af as oe,X as ue,b as ce,ai as F,al as ve,F as de,L as me,aj as ge,ak as fe,I as ye,J as Se}from"./index-QFnvUixi.js";function _e(e){return{aspectStyles:h(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const D=z({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...V(),...L()},"VResponsive"),N=R()({name:"VResponsive",props:D(),setup(e,l){let{slots:r}=l;const{aspectStyles:a}=_e(e),{dimensionStyles:c}=J(e);return k(()=>{var v;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[n("div",{class:"v-responsive__sizer",style:a.value},null),(v=r.additional)==null?void 0:v.call(r),r.default&&n("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}}),be=z({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),b=(e,l)=>{let{slots:r}=l;const{transition:a,disabled:c,...v}=e,{component:i=se,...s}=typeof a=="object"?a:{};return re(i,U(typeof a=="string"?{name:c?"":a}:s,v,{disabled:c}),r)};function he(e,l){if(!x)return;const r=l.modifiers||{},a=l.value,{handler:c,options:v}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var m;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const d=(m=e._observe)==null?void 0:m[l.instance.$.uid];if(!d)return;const o=s.some(y=>y.isIntersecting);c&&(!r.quiet||d.init)&&(!r.once||o||d.init)&&c(o,s,g),o&&r.once?W(e,l):d.init=!0},v);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:i},i.observe(e)}function W(e,l){var a;const r=(a=e._observe)==null?void 0:a[l.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const ze={mounted:he,unmounted:W},Ie=ze,Pe=z({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...D(),...V(),...be()},"VImg"),Ve=R()({name:"VImg",directives:{intersect:Ie},props:Pe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:r,slots:a}=l;const c=ie("VImg"),v=_(""),i=le(),s=_(e.eager?"loading":"idle"),g=_(),d=_(),o=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=h(()=>o.value.aspect||g.value/d.value||0);P(()=>e.src,()=>{y(s.value!=="idle")}),P(m,(t,u)=>{!t&&u&&i.value&&S(i.value)}),oe(()=>y());function y(t){if(!(e.eager&&t)&&!(x&&!t&&!e.eager)){if(s.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,S(u,null)}o.value.src&&ue(()=>{var u;r("loadstart",((u=i.value)==null?void 0:u.currentSrc)||o.value.src),setTimeout(()=>{var f;if(!c.isUnmounted)if((f=i.value)!=null&&f.complete){if(i.value.naturalWidth||C(),s.value==="error")return;m.value||S(i.value,null),s.value==="loading"&&T()}else m.value||S(i.value),w()})})}}function T(){var t;c.isUnmounted||(w(),S(i.value),s.value="loaded",r("load",((t=i.value)==null?void 0:t.currentSrc)||o.value.src))}function C(){var t;c.isUnmounted||(s.value="error",r("error",((t=i.value)==null?void 0:t.currentSrc)||o.value.src))}function w(){const t=i.value;t&&(v.value=t.currentSrc||t.src)}let I=-1;ce(()=>{clearTimeout(I)});function S(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{if(clearTimeout(I),c.isUnmounted)return;const{naturalHeight:O,naturalWidth:A}=t;O||A?(g.value=A,d.value=O):!t.complete&&s.value==="loading"&&u!=null?I=window.setTimeout(f,u):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,d.value=1)};f()}const B=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),$=()=>{var f;if(!o.value.src||s.value==="idle")return null;const t=n("img",{class:["v-img__img",B.value],style:{objectPosition:e.position},src:o.value.src,srcset:o.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:i,onLoad:T,onError:C},null),u=(f=a.sources)==null?void 0:f.call(a);return n(b,{transition:e.transition,appear:!0},{default:()=>[F(u?n("picture",{class:"v-img__picture"},[u,t]):t,[[ge,s.value==="loaded"]])]})},E=()=>n(b,{transition:e.transition},{default:()=>[o.value.lazySrc&&s.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",B.value],style:{objectPosition:e.position},src:o.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),M=()=>a.placeholder?n(b,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!a.error)&&n("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,q=()=>a.error?n(b,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&n("div",{class:"v-img__error"},[a.error()])]}):null,H=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=_(!1);{const t=P(m,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),t())})}return k(()=>{const t=N.filterProps(e);return F(n(N,U({class:["v-img",{"v-img--booting":!j.value},e.class],style:[{width:me(e.width==="auto"?g.value:e.width)},e.style]},t,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(de,null,[n($,null,null),n(E,null,null),n(H,null,null),n(M,null,null),n(q,null,null)]),default:a.default}),[[ve("intersect"),{handler:y,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:i,state:s,naturalWidth:g,naturalHeight:d}}}),ke=z({start:Boolean,end:Boolean,icon:fe,image:String,text:String,...V(),...X(),...G(),...K(),...Q(),...ye(),...Y({variant:"flat"})},"VAvatar"),Ce=R()({name:"VAvatar",props:ke(),setup(e,l){let{slots:r}=l;const{themeClasses:a}=Se(e),{colorClasses:c,colorStyles:v,variantClasses:i}=Z(e),{densityClasses:s}=p(e),{roundedClasses:g}=ee(e),{sizeClasses:d,sizeStyles:o}=te(e);return k(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,s.value,g.value,d.value,i.value,e.class],style:[v.value,o.value,e.style]},{default:()=>{var m;return[e.image?n(Ve,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(ae,{key:"icon",icon:e.icon},null):((m=r.default)==null?void 0:m.call(r))??e.text,ne(!1,"v-avatar")]}})),{}}});export{Ie as I,b as M,Ve as V,Ce as a,be as m};
