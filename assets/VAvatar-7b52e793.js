<<<<<<<< HEAD:assets/VAvatar-7b52e793.js
import{m as z,k as L,o as K,u as R,w as Z,d as G,K as J,a as Q,y as X,C as Y,x as p,h as ee,M as te,V as ae,D as ne}from"./VContainer-51ce664a.js";import{n as V,as as se,aV as re,aU as D,p as I,v as l,e as b,x as F,T as le,aZ as N,s as S,r as ie,w as P,F as ue,E as oe,aa as A,ad as ce,H as ve,j as de,ab as me,ac as ge,z as fe,B as Se}from"./index-1bfe9050.js";function Te(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",s=arguments.length>2?arguments[2]:void 0;return V()({name:s??se(re(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i},...z()},setup(t,c){let{slots:n}=c;return()=>{var r;return D(t.tag,{class:[e,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}})}function ye(e){return{aspectStyles:b(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const W=I({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...z(),...L()},"VResponsive"),O=V()({name:"VResponsive",props:W(),setup(e,i){let{slots:s}=i;const{aspectStyles:t}=ye(e),{dimensionStyles:c}=K(e);return R(()=>{var n;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(n=s.additional)==null?void 0:n.call(s),s.default&&l("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),_e=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,i)=>{let{slots:s}=i;const{transition:t,disabled:c,...n}=e,{component:r=le,...v}=typeof t=="object"?t:{};return D(r,F(typeof t=="string"?{name:c?"":t}:v,n,{disabled:c}),s)};function he(e,i){if(!N)return;const s=i.modifiers||{},t=i.value,{handler:c,options:n}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var m;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const u=(m=e._observe)==null?void 0:m[i.instance.$.uid];if(!u)return;const d=v.some(y=>y.isIntersecting);c&&(!s.quiet||u.init)&&(!s.once||d||u.init)&&c(d,v,g),d&&s.once?x(e,i):u.init=!0},n);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:r},r.observe(e)}function x(e,i){var t;const s=(t=e._observe)==null?void 0:t[i.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const be={mounted:he,unmounted:x},ze=be,Ve=I({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...W(),...z(),..._e()},"VImg"),Ie=V()({name:"VImg",directives:{intersect:ze},props:Ve(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:s,slots:t}=i;const c=S(""),n=ie(),r=S(e.eager?"loading":"idle"),v=S(),g=S(),u=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=b(()=>u.value.aspect||v.value/g.value||0);P(()=>e.src,()=>{m(r.value!=="idle")}),P(d,(a,o)=>{!a&&o&&n.value&&_(n.value)}),ue(()=>m());function m(a){if(!(e.eager&&a)&&!(N&&!a&&!e.eager)){if(r.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,_(o,null)}u.value.src&&oe(()=>{var o,f;if(s("loadstart",((o=n.value)==null?void 0:o.currentSrc)||u.value.src),(f=n.value)!=null&&f.complete){if(n.value.naturalWidth||k(),r.value==="error")return;d.value||_(n.value,null),y()}else d.value||_(n.value),T()})}}function y(){var a;T(),r.value="loaded",s("load",((a=n.value)==null?void 0:a.currentSrc)||u.value.src)}function k(){var a;r.value="error",s("error",((a=n.value)==null?void 0:a.currentSrc)||u.value.src)}function T(){const a=n.value;a&&(c.value=a.currentSrc||a.src)}let w=-1;function _(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{clearTimeout(w);const{naturalHeight:$,naturalWidth:j}=a;$||j?(v.value=j,g.value=$):!a.complete&&r.value==="loading"&&o!=null?w=window.setTimeout(f,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,g.value=1)};f()}const C=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),E=()=>{var f;if(!u.value.src||r.value==="idle")return null;const a=l("img",{class:["v-img__img",C.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:n,onLoad:y,onError:k},null),o=(f=t.sources)==null?void 0:f.call(t);return l(h,{transition:e.transition,appear:!0},{default:()=>[A(o?l("picture",{class:"v-img__picture"},[o,a]):a,[[me,r.value==="loaded"]])]})},M=()=>l(h,{transition:e.transition},{default:()=>[u.value.lazySrc&&r.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",C.value],src:u.value.lazySrc,alt:e.alt},null)]}),H=()=>t.placeholder?l(h,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,q=()=>t.error?l(h,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,U=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=S(!1);{const a=P(d,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),a())})}return R(()=>{const[a]=O.filterProps(e);return A(l(O,F({class:["v-img",{"v-img--booting":!B.value},e.class],style:[{width:de(e.width==="auto"?v.value:e.width)},e.style]},a,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(ve,null,[l(E,null,null),l(M,null,null),l(U,null,null),l(H,null,null),l(q,null,null)]),default:t.default}),[[ce("intersect"),{handler:m,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:n,state:r,naturalWidth:v,naturalHeight:g}}});const Pe=I({start:Boolean,end:Boolean,icon:ge,image:String,...z(),...Z(),...G(),...J(),...Q(),...fe(),...X({variant:"flat"})},"VAvatar"),we=V()({name:"VAvatar",props:Pe(),setup(e,i){let{slots:s}=i;const{themeClasses:t}=Se(e),{colorClasses:c,colorStyles:n,variantClasses:r}=Y(e),{densityClasses:v}=p(e),{roundedClasses:g}=ee(e),{sizeClasses:u,sizeStyles:d}=te(e);return R(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,c.value,v.value,g.value,u.value,r.value,e.class],style:[n.value,d.value,e.style]},{default:()=>{var m;return[e.image?l(Ie,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(ae,{key:"icon",icon:e.icon},null):(m=s.default)==null?void 0:m.call(s),ne(!1,"v-avatar")]}})),{}}});export{ze as I,h as M,Ie as V,we as a,Te as c,_e as m};
========
import{m as z,k as L,o as K,u as R,w as Y,d as G,K as J,a as Q,y as X,C as Z,x as p,h as ee,M as te,V as ae,D as ne}from"./VContainer-69edc0fd.js";import{n as V,as as se,aU as re,aT as D,p as I,v as l,e as b,x as F,T as le,aY as N,s as S,r as ie,w as P,F as ue,E as oe,aa as A,ad as ce,H as ve,j as de,ab as me,ac as ge,z as fe,B as Se}from"./index-4a25dcfa.js";function Te(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",s=arguments.length>2?arguments[2]:void 0;return V()({name:s??se(re(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i},...z()},setup(t,c){let{slots:n}=c;return()=>{var r;return D(t.tag,{class:[e,t.class],style:t.style},(r=n.default)==null?void 0:r.call(n))}}})}function ye(e){return{aspectStyles:b(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const W=I({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...z(),...L()},"VResponsive"),O=V()({name:"VResponsive",props:W(),setup(e,i){let{slots:s}=i;const{aspectStyles:t}=ye(e),{dimensionStyles:c}=K(e);return R(()=>{var n;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(n=s.additional)==null?void 0:n.call(s),s.default&&l("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),_e=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,i)=>{let{slots:s}=i;const{transition:t,disabled:c,...n}=e,{component:r=le,...v}=typeof t=="object"?t:{};return D(r,F(typeof t=="string"?{name:c?"":t}:v,n,{disabled:c}),s)};function he(e,i){if(!N)return;const s=i.modifiers||{},t=i.value,{handler:c,options:n}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var m;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const u=(m=e._observe)==null?void 0:m[i.instance.$.uid];if(!u)return;const d=v.some(y=>y.isIntersecting);c&&(!s.quiet||u.init)&&(!s.once||d||u.init)&&c(d,v,g),d&&s.once?x(e,i):u.init=!0},n);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:r},r.observe(e)}function x(e,i){var t;const s=(t=e._observe)==null?void 0:t[i.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const be={mounted:he,unmounted:x},ze=be,Ve=I({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...W(),...z(),..._e()},"VImg"),Ie=V()({name:"VImg",directives:{intersect:ze},props:Ve(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:s,slots:t}=i;const c=S(""),n=ie(),r=S(e.eager?"loading":"idle"),v=S(),g=S(),u=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=b(()=>u.value.aspect||v.value/g.value||0);P(()=>e.src,()=>{m(r.value!=="idle")}),P(d,(a,o)=>{!a&&o&&n.value&&_(n.value)}),ue(()=>m());function m(a){if(!(e.eager&&a)&&!(N&&!a&&!e.eager)){if(r.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,_(o,null)}u.value.src&&oe(()=>{var o,f;if(s("loadstart",((o=n.value)==null?void 0:o.currentSrc)||u.value.src),(f=n.value)!=null&&f.complete){if(n.value.naturalWidth||k(),r.value==="error")return;d.value||_(n.value,null),y()}else d.value||_(n.value),T()})}}function y(){var a;T(),r.value="loaded",s("load",((a=n.value)==null?void 0:a.currentSrc)||u.value.src)}function k(){var a;r.value="error",s("error",((a=n.value)==null?void 0:a.currentSrc)||u.value.src)}function T(){const a=n.value;a&&(c.value=a.currentSrc||a.src)}let w=-1;function _(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{clearTimeout(w);const{naturalHeight:$,naturalWidth:j}=a;$||j?(v.value=j,g.value=$):!a.complete&&r.value==="loading"&&o!=null?w=window.setTimeout(f,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,g.value=1)};f()}const C=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),E=()=>{var f;if(!u.value.src||r.value==="idle")return null;const a=l("img",{class:["v-img__img",C.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:n,onLoad:y,onError:k},null),o=(f=t.sources)==null?void 0:f.call(t);return l(h,{transition:e.transition,appear:!0},{default:()=>[A(o?l("picture",{class:"v-img__picture"},[o,a]):a,[[me,r.value==="loaded"]])]})},M=()=>l(h,{transition:e.transition},{default:()=>[u.value.lazySrc&&r.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",C.value],src:u.value.lazySrc,alt:e.alt},null)]}),H=()=>t.placeholder?l(h,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,q=()=>t.error?l(h,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,U=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=S(!1);{const a=P(d,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),a())})}return R(()=>{const[a]=O.filterProps(e);return A(l(O,F({class:["v-img",{"v-img--booting":!B.value},e.class],style:[{width:de(e.width==="auto"?v.value:e.width)},e.style]},a,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(ve,null,[l(E,null,null),l(M,null,null),l(U,null,null),l(H,null,null),l(q,null,null)]),default:t.default}),[[ce("intersect"),{handler:m,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:n,state:r,naturalWidth:v,naturalHeight:g}}});const Pe=I({start:Boolean,end:Boolean,icon:ge,image:String,...z(),...Y(),...G(),...J(),...Q(),...fe(),...X({variant:"flat"})},"VAvatar"),we=V()({name:"VAvatar",props:Pe(),setup(e,i){let{slots:s}=i;const{themeClasses:t}=Se(e),{colorClasses:c,colorStyles:n,variantClasses:r}=Z(e),{densityClasses:v}=p(e),{roundedClasses:g}=ee(e),{sizeClasses:u,sizeStyles:d}=te(e);return R(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,c.value,v.value,g.value,u.value,r.value,e.class],style:[n.value,d.value,e.style]},{default:()=>{var m;return[e.image?l(Ie,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(ae,{key:"icon",icon:e.icon},null):(m=s.default)==null?void 0:m.call(s),ne(!1,"v-avatar")]}})),{}}});export{ze as I,h as M,Ie as V,we as a,Te as c,_e as m};
>>>>>>>> e21232eb546c63bf996bf80c0693fe58639ce4af:assets/VAvatar-cc0f62a5.js
