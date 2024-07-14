import{bf as X,p as h,at as G,r as O,ad as Ie,b as q,w as K,b9 as ge,aY as tt,d as V,am as nt,a9 as Be,c as r,L as b,b2 as P,$ as M,b6 as Ee,bg as he,bh as at,bi as st,bj as it,C as be,f as v,F as lt,I as H,J as F,t as E,as as ot,u as Ve,o as rt,a8 as Pe,aE as Le,S as ut,ak as ct,aF as dt,au as vt,m as ft,aa as ne,bk as mt,bl as gt,bm as ht,s as bt,bd as yt,h as Ct,K as ie,aw as pt,a0 as St,bn as ye,Y as Te,aT as kt,af as _t,bo as Ce,ai as wt,aj as xt}from"./index-jpwoycOT.js";const Re=["top","bottom"],It=["start","end","left","right"];function Bt(e,t){let[a,n]=e.split(" ");return n||(n=X(Re,a)?"start":X(It,a)?"top":"center"),{side:pe(a,t),align:pe(n,t)}}function pe(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function mn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function gn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function hn(e){return{side:e.align,align:e.side}}function bn(e){return X(Re,e.side)?"y":"x"}const $=h({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function L(e){const t=G("useRender");t.render=e}function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=O(),n=O();if(Ie){const i=new ResizeObserver(s=>{e==null||e(s,i),s.length&&(t==="content"?n.value=s[0].contentRect:n.value=s[0].target.getBoundingClientRect())});q(()=>{i.disconnect()}),K(a,(s,l)=>{l&&(i.unobserve(ge(l)),n.value=void 0),s&&i.observe(ge(s))},{flush:"post"})}return{resizeRef:a,contentRect:tt(n)}}const N=h({tag:{type:String,default:"div"}},"tag"),Vt=h({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Z=V(!1)({name:"VDefaultsProvider",props:Vt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:i,reset:s,root:l,scoped:c}=nt(e);return Be(n,{reset:s,root:l,scoped:c,disabled:i}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}}),Pt=h({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Lt(e){return{dimensionStyles:r(()=>({height:b(e.height),maxHeight:b(e.maxHeight),maxWidth:b(e.maxWidth),minHeight:b(e.minHeight),minWidth:b(e.minWidth),width:b(e.width)}))}}const $e=h({border:[Boolean,Number,String]},"border");function Ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:r(()=>{const n=M(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`border-${s}`);return i})}}function le(e){return Ee(()=>{const t=[],a={};if(e.value.background)if(he(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&at(e.value.background)){const n=st(e.value.background);if(n.a==null||n.a===1){const i=it(n);a.color=i,a.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(he(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function Y(e,t){const a=r(()=>({text:M(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=le(a);return{textColorClasses:n,textColorStyles:i}}function Se(e,t){const a=r(()=>({background:M(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=le(a);return{backgroundColorClasses:n,backgroundColorStyles:i}}const ze=h({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Oe(e){return{elevationClasses:r(()=>{const a=M(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const oe=h({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:r(()=>{const n=M(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`rounded-${s}`);return i})}}const Tt=[null,"default","comfortable","compact"],Ae=h({density:{type:String,default:"default",validator:e=>Tt.includes(e)}},"density");function De(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:r(()=>`${t}--density-${e.density}`)}}const Rt=["elevated","flat","tonal","outlined","text","plain"];function $t(e,t){return v(lt,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ge=h({color:String,variant:{type:String,default:"elevated",validator:e=>Rt.includes(e)}},"variant");function Nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const a=r(()=>{const{variant:s}=be(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:i}=le(r(()=>{const{variant:s,color:l}=be(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:i,variantClasses:a}}const Me=h({divided:Boolean,...$e(),...$(),...Ae(),...ze(),...oe(),...N(),...H(),...Ge()},"VBtnGroup"),ke=V()({name:"VBtnGroup",props:Me(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=F(e),{densityClasses:i}=De(e),{borderClasses:s}=Ne(e),{elevationClasses:l}=Oe(e),{roundedClasses:c}=re(e);Be({VBtn:{height:"auto",color:E(e,"color"),density:E(e,"density"),flat:!0,variant:E(e,"variant")}}),L(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,i.value,l.value,c.value,e.class],style:e.style},a))}}),zt=h({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Ot=h({value:null,disabled:Boolean,selectedClass:String},"group-item");function At(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=G("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=ut();Pe(Symbol.for(`${t.description}:id`),i);const s=ct(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=E(e,"value"),c=r(()=>!!(s.disabled.value||e.disabled));s.register({id:i,value:l,disabled:c},n),q(()=>{s.unregister(i)});const o=r(()=>s.isSelected(i)),g=r(()=>o.value&&[s.selectedClass.value,e.selectedClass]);return K(o,y=>{n.emit("group:selected",{value:y})}),{id:i,isSelected:o,toggle:()=>s.select(i,!o.value),select:y=>s.select(i,y),selectedClass:g,value:l,disabled:c,group:s}}function Dt(e,t){let a=!1;const n=ot([]),i=Ve(e,"modelValue",[],u=>u==null?[]:He(n,dt(u)),u=>{const d=Mt(n,u);return e.multiple?d:d[0]}),s=G("useGroup");function l(u,d){const C=u,m=Symbol.for(`${t.description}:id`),S=vt(m,s==null?void 0:s.vnode).indexOf(d);S>-1?n.splice(S,0,C):n.push(C)}function c(u){if(a)return;o();const d=n.findIndex(C=>C.id===u);n.splice(d,1)}function o(){const u=n.find(d=>!d.disabled);u&&e.mandatory==="force"&&!i.value.length&&(i.value=[u.id])}rt(()=>{o()}),q(()=>{a=!0});function g(u,d){const C=n.find(m=>m.id===u);if(!(d&&(C!=null&&C.disabled)))if(e.multiple){const m=i.value.slice(),w=m.findIndex(f=>f===u),S=~w;if(d=d??!S,S&&e.mandatory&&m.length<=1||!S&&e.max!=null&&m.length+1>e.max)return;w<0&&d?m.push(u):w>=0&&!d&&m.splice(w,1),i.value=m}else{const m=i.value.includes(u);if(e.mandatory&&m)return;i.value=d??!m?[u]:[]}}function y(u){if(e.multiple,i.value.length){const d=i.value[0],C=n.findIndex(S=>S.id===d);let m=(C+u)%n.length,w=n[m];for(;w.disabled&&m!==C;)m=(m+u)%n.length,w=n[m];if(w.disabled)return;i.value=[n[m].id]}else{const d=n.find(C=>!C.disabled);d&&(i.value=[d.id])}}const k={register:l,unregister:c,selected:i,select:g,disabled:E(e,"disabled"),prev:()=>y(n.length-1),next:()=>y(1),isSelected:u=>i.value.includes(u),selectedClass:r(()=>e.selectedClass),items:r(()=>n),getItemIndex:u=>Gt(n,u)};return Pe(t,k),k}function Gt(e,t){const a=He(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function He(e,t){const a=[];return t.forEach(n=>{const i=e.find(l=>Le(n,l.value)),s=e[n];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function Mt(e,t){const a=[];return t.forEach(n=>{const i=e.findIndex(s=>s.id===n);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const Fe=Symbol.for("vuetify:v-btn-toggle"),Ht=h({...Me(),...zt()},"VBtnToggle");V()({name:"VBtnToggle",props:Ht(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:i,prev:s,select:l,selected:c}=Dt(e,Fe);return L(()=>{const o=ke.filterProps(e);return v(ke,ft({class:["v-btn-toggle",e.class]},o,{style:e.style}),{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a,{isSelected:n,next:i,prev:s,select:l,selected:c})]}})}),{next:i,prev:s,select:l}}});const Ft=["x-small","small","default","large","x-large"],ue=h({size:{type:[String,Number],default:"default"}},"size");function ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return Ee(()=>{let a,n;return X(Ft,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:b(e.size),height:b(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Wt=h({color:String,start:Boolean,end:Boolean,icon:ne,...$(),...ue(),...N({tag:"i"}),...H()},"VIcon"),ee=V()({name:"VIcon",props:Wt(),setup(e,t){let{attrs:a,slots:n}=t;const i=O(),{themeClasses:s}=F(e),{iconData:l}=mt(r(()=>i.value||e.icon)),{sizeClasses:c}=ce(e),{textColorClasses:o,textColorStyles:g}=Y(E(e,"color"));return L(()=>{var k,u;const y=(k=n.default)==null?void 0:k.call(n);return y&&(i.value=(u=gt(y).filter(d=>d.type===ht&&d.children&&typeof d.children=="string")[0])==null?void 0:u.children),v(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,c.value,o.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[c.value?void 0:{fontSize:b(e.size),height:b(e.size),width:b(e.size)},g.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[y]})}),{}}});function We(e,t){const a=O(),n=bt(!1);if(yt){const i=new IntersectionObserver(s=>{e==null||e(s,i),n.value=!!s.find(l=>l.isIntersecting)},t);q(()=>{i.disconnect()}),K(a,(s,l)=>{l&&(i.unobserve(l),n.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const jt=h({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...$(),...ue(),...N({tag:"div"}),...H()},"VProgressCircular"),Xt=V()({name:"VProgressCircular",props:jt(),setup(e,t){let{slots:a}=t;const n=20,i=2*Math.PI*n,s=O(),{themeClasses:l}=F(e),{sizeClasses:c,sizeStyles:o}=ce(e),{textColorClasses:g,textColorStyles:y}=Y(E(e,"color")),{textColorClasses:k,textColorStyles:u}=Y(E(e,"bgColor")),{intersectionRef:d,isIntersecting:C}=We(),{resizeRef:m,contentRect:w}=Et(),S=r(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),f=r(()=>Number(e.width)),p=r(()=>o.value?Number(e.size):w.value?w.value.width:Math.max(f.value,32)),B=r(()=>n/(1-f.value/p.value)*2),I=r(()=>f.value/p.value*B.value),z=r(()=>b((100-S.value)/100*i));return Ct(()=>{d.value=s.value,m.value=s.value}),L(()=>v(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,c.value,g.value,e.class],style:[o.value,y.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${B.value} ${B.value}`},[v("circle",{class:["v-progress-circular__underlay",k.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":I.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":I.value,"stroke-dasharray":i,"stroke-dashoffset":z.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),_e={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},je=h({location:String},"location");function Xe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=ie();return{locationStyles:r(()=>{if(!e.location)return{};const{side:s,align:l}=Bt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function c(g){return a?a(g):0}const o={};return s!=="center"&&(t?o[_e[s]]=`calc(100% - ${c(s)}px)`:o[s]=0),l!=="center"?t?o[_e[l]]=`calc(100% - ${c(l)}px)`:o[l]=0:(s==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),o})}}const Yt=h({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...$(),...je({location:"top"}),...oe(),...N(),...H()},"VProgressLinear"),Ut=V()({name:"VProgressLinear",props:Yt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Ve(e,"modelValue"),{isRtl:i,rtlClasses:s}=ie(),{themeClasses:l}=F(e),{locationStyles:c}=Xe(e),{textColorClasses:o,textColorStyles:g}=Y(e,"color"),{backgroundColorClasses:y,backgroundColorStyles:k}=Se(r(()=>e.bgColor||e.color)),{backgroundColorClasses:u,backgroundColorStyles:d}=Se(e,"color"),{roundedClasses:C}=re(e),{intersectionRef:m,isIntersecting:w}=We(),S=r(()=>parseInt(e.max,10)),f=r(()=>parseInt(e.height,10)),p=r(()=>parseFloat(e.bufferValue)/S.value*100),B=r(()=>parseFloat(n.value)/S.value*100),I=r(()=>i.value!==e.reverse),z=r(()=>e.indeterminate?"fade-transition":"slide-x-transition"),W=r(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function J(_){if(!m.value)return;const{left:T,right:Q,width:R}=m.value.getBoundingClientRect(),j=I.value?R-_.clientX+(Q-R):_.clientX-T;n.value=Math.round(j/R*S.value)}return L(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&w.value,"v-progress-linear--reverse":I.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,l.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?b(f.value):0,"--v-progress-linear-height":b(f.value),...c.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:B.value,onClick:e.clickable&&J},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...g.value,[I.value?"left":"right"]:b(-f.value),borderTop:`${b(f.value/2)} dotted`,opacity:W.value,top:`calc(50% - ${b(f.value/4)})`,width:b(100-p.value,"%"),"--v-progress-linear-stream-to":b(f.value*(I.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",y.value],style:[k.value,{opacity:W.value,width:b(e.stream?p.value:100,"%")}]},null),v(pt,{name:z.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>v("div",{key:_,class:["v-progress-linear__indeterminate",_,u.value],style:d.value},null))]):v("div",{class:["v-progress-linear__determinate",u.value],style:[d.value,{width:b(B.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:B.value,buffer:p.value})])]})),{}}}),qt=h({loading:[Boolean,String]},"loader");function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:r(()=>({[`${t}--loading`]:e.loading}))}}function yn(e,t){var n;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||v(Ut,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Jt=["static","relative","fixed","absolute","sticky"],Qt=h({position:{type:String,validator:e=>Jt.includes(e)}},"position");function Zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:r(()=>e.position?`${t}--${e.position}`:void 0)}}function en(){const e=G("useRoute");return r(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Cn(){var e,t;return(t=(e=G("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function tn(e,t){const a=St("RouterLink"),n=r(()=>!!(e.href||e.to)),i=r(()=>(n==null?void 0:n.value)||ye(t,"click")||ye(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:i,href:E(e,"href")};const s=e.to?a.useLink(e):void 0,l=en();return{isLink:n,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&r(()=>{var c,o,g;return e.exact?l.value?((g=s.isExactActive)==null?void 0:g.value)&&Le(s.route.value.query,l.value.query):(o=s.isExactActive)==null?void 0:o.value:(c=s.isActive)==null?void 0:c.value}),href:r(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const nn=h({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let te=!1;function pn(e,t){let a=!1,n,i;Ie&&(Te(()=>{window.addEventListener("popstate",s),n=e==null?void 0:e.beforeEach((l,c,o)=>{te?a?t(o):o():setTimeout(()=>a?t(o):o()),te=!0}),i=e==null?void 0:e.afterEach(()=>{te=!1})}),kt(()=>{window.removeEventListener("popstate",s),n==null||n(),i==null||i()}));function s(l){var c;(c=l.state)!=null&&c.replaced||(a=!0,setTimeout(()=>a=!1))}}function an(e,t){K(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Te(()=>{t(!0)})},{immediate:!0})}const ae=Symbol("rippleStop"),sn=80;function we(e,t){e.style.transform=t,e.style.webkitTransform=t}function se(e){return e.constructor.name==="TouchEvent"}function Ye(e){return e.constructor.name==="KeyboardEvent"}const ln=function(e,t){var k;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!Ye(e)){const u=t.getBoundingClientRect(),d=se(e)?e.touches[e.touches.length-1]:e;n=d.clientX-u.left,i=d.clientY-u.top}let s=0,l=.3;(k=t._ripple)!=null&&k.circle?(l=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=`${(t.clientWidth-s*2)/2}px`,o=`${(t.clientHeight-s*2)/2}px`,g=a.center?c:`${n-s}px`,y=a.center?o:`${i-s}px`;return{radius:s,scale:l,x:g,y,centerX:c,centerY:o}},U={show(e,t){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:l,x:c,y:o,centerX:g,centerY:y}=ln(e,t,a),k=`${s*2}px`;i.className="v-ripple__animation",i.style.width=k,i.style.height=k,t.appendChild(n);const u=window.getComputedStyle(t);u&&u.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),we(i,`translate(${c}, ${o}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),we(i,`translate(${g}, ${y}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var c;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((c=a.parentNode)==null?void 0:c.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function Ue(e){return typeof e>"u"||!!e}function A(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ae])){if(e[ae]=!0,se(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Ye(e),a._ripple.class&&(t.class=a._ripple.class),se(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{U.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},sn)}else U.show(e,a,t)}}function xe(e){e[ae]=!0}function x(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{x(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),U.hide(t)}}function qe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let D=!1;function Ke(e){!D&&(e.keyCode===Ce.enter||e.keyCode===Ce.space)&&(D=!0,A(e))}function Je(e){D=!1,x(e)}function Qe(e){D&&(D=!1,x(e))}function Ze(e,t,a){const{value:n,modifiers:i}=t,s=Ue(n);if(s||U.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,_t(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(i.stop){e.addEventListener("touchstart",xe,{passive:!0}),e.addEventListener("mousedown",xe);return}e.addEventListener("touchstart",A,{passive:!0}),e.addEventListener("touchend",x,{passive:!0}),e.addEventListener("touchmove",qe,{passive:!0}),e.addEventListener("touchcancel",x),e.addEventListener("mousedown",A),e.addEventListener("mouseup",x),e.addEventListener("mouseleave",x),e.addEventListener("keydown",Ke),e.addEventListener("keyup",Je),e.addEventListener("blur",Qe),e.addEventListener("dragstart",x,{passive:!0})}else!s&&a&&et(e)}function et(e){e.removeEventListener("mousedown",A),e.removeEventListener("touchstart",A),e.removeEventListener("touchend",x),e.removeEventListener("touchmove",qe),e.removeEventListener("touchcancel",x),e.removeEventListener("mouseup",x),e.removeEventListener("mouseleave",x),e.removeEventListener("keydown",Ke),e.removeEventListener("keyup",Je),e.removeEventListener("dragstart",x),e.removeEventListener("blur",Qe)}function on(e,t){Ze(e,t,!1)}function rn(e){delete e._ripple,et(e)}function un(e,t){if(t.value===t.oldValue)return;const a=Ue(t.oldValue);Ze(e,t,a)}const cn={mounted:on,unmounted:rn,updated:un},dn=h({active:{type:Boolean,default:void 0},symbol:{type:null,default:Fe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ne,appendIcon:ne,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...$e(),...$(),...Ae(),...Pt(),...ze(),...Ot(),...qt(),...je(),...Qt(),...oe(),...nn(),...ue(),...N({tag:"button"}),...H(),...Ge({variant:"elevated"})},"VBtn"),Sn=V()({name:"VBtn",directives:{Ripple:cn},props:dn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=F(e),{borderClasses:s}=Ne(e),{colorClasses:l,colorStyles:c,variantClasses:o}=Nt(e),{densityClasses:g}=De(e),{dimensionStyles:y}=Lt(e),{elevationClasses:k}=Oe(e),{loaderClasses:u}=Kt(e),{locationStyles:d}=Xe(e),{positionClasses:C}=Zt(e),{roundedClasses:m}=re(e),{sizeClasses:w,sizeStyles:S}=ce(e),f=At(e,e.symbol,!1),p=tn(e,a),B=r(()=>{var _;return e.active!==void 0?e.active:p.isLink.value?(_=p.isActive)==null?void 0:_.value:f==null?void 0:f.isSelected.value}),I=r(()=>(f==null?void 0:f.disabled.value)||e.disabled),z=r(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),W=r(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function J(_){var T;I.value||p.isLink.value&&(_.metaKey||_.ctrlKey||_.shiftKey||_.button!==0||a.target==="_blank")||((T=p.navigate)==null||T.call(p,_),f==null||f.toggle())}return an(p,f==null?void 0:f.select),L(()=>{var de,ve;const _=p.isLink.value?"a":e.tag,T=!!(e.prependIcon||n.prepend),Q=!!(e.appendIcon||n.append),R=!!(e.icon&&e.icon!==!0),j=(f==null?void 0:f.isSelected.value)&&(!p.isLink.value||((de=p.isActive)==null?void 0:de.value))||!f||((ve=p.isActive)==null?void 0:ve.value);return wt(v(_,{type:_==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":B.value,"v-btn--block":e.block,"v-btn--disabled":I.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,s.value,j?l.value:void 0,g.value,k.value,u.value,C.value,m.value,w.value,o.value,e.class],style:[j?c.value:void 0,y.value,d.value,S.value,e.style],disabled:I.value||void 0,href:p.href.value,onClick:J,value:W.value},{default:()=>{var fe;return[$t(!0,"v-btn"),!e.icon&&T&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(Z,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(ee,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&R?v(ee,{key:"content-icon",icon:e.icon},null):v(Z,{key:"content-defaults",disabled:!R,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var me;return[((me=n.default)==null?void 0:me.call(n))??e.text]}})]),!e.icon&&Q&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(Z,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(ee,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((fe=n.loader)==null?void 0:fe.call(n))??v(Xt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[xt("ripple"),!I.value&&e.ripple,null]])}),{group:f}}}),vn=h({fluid:{type:Boolean,default:!1},...$(),...N()},"VContainer"),kn=V()({name:"VContainer",props:vn(),setup(e,t){let{slots:a}=t;const{rtlClasses:n}=ie();return L(()=>v(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:e.style},a)),{}}});export{qt as A,Kt as B,Pt as C,je as D,Qt as E,Lt as F,Xe as G,Zt as H,Z as I,Nt as J,$t as K,yn as L,nn as M,tn as N,ce as O,Bt as P,mn as Q,cn as R,gn as S,hn as T,bn as U,Sn as V,pn as W,Ut as X,$ as a,ee as b,kn as c,$e as d,ze as e,oe as f,N as g,Se as h,Ne as i,Oe as j,re as k,Et as l,dn as m,Xt as n,Y as o,zt as p,Dt as q,Ae as r,De as s,Ot as t,L as u,At as v,Ge as w,Cn as x,pe as y,ue as z};