import{aZ as U,p as g,b as Y,r as O,ao as Ve,f as q,w as K,aQ as ge,aG as et,n as E,a_ as tt,G as Be,e as u,j as h,aW as P,a7 as G,aO as Ie,a$ as he,S as be,v,H as nt,z as H,B as M,t as I,a as at,c as Ee,i as st,h as it,u as Pe,k as lt,am as ot,ah as rt,l as ut,x as ct,ac as ne,b0 as dt,b1 as vt,b2 as ft,s as mt,aU as gt,y as ht,A as ie,T as bt,a9 as yt,b3 as ye,E as Le,aF as Ct,b4 as pt,b5 as Ce,aa as St,ad as _t}from"./index-09b2497b.js";const Te=["top","bottom"],kt=["start","end","left","right"];function wt(e,t){let[a,n]=e.split(" ");return n||(n=U(Te,a)?"start":U(kt,a)?"top":"center"),{side:pe(a,t),align:pe(n,t)}}function pe(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function cn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function dn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function vn(e){return{side:e.align,align:e.side}}function fn(e){return U(Te,e.side)?"y":"x"}const R=g({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function L(e){const t=Y("useRender");t.render=e}function xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=O(),n=O();if(Ve){const i=new ResizeObserver(s=>{e==null||e(s,i),s.length&&(t==="content"?n.value=s[0].contentRect:n.value=s[0].target.getBoundingClientRect())});q(()=>{i.disconnect()}),K(a,(s,l)=>{l&&(i.unobserve(ge(l)),n.value=void 0),s&&i.observe(ge(s))},{flush:"post"})}return{resizeRef:a,contentRect:et(n)}}const N=g({tag:{type:String,default:"div"}},"tag"),Vt=g({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Z=E(!1)({name:"VDefaultsProvider",props:Vt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:i,reset:s,root:l,scoped:c}=tt(e);return Be(n,{reset:s,root:l,scoped:c,disabled:i}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}}),Bt=g({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function It(e){return{dimensionStyles:u(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}const $e=g({border:[Boolean,Number,String]},"border");function Re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:u(()=>{const n=G(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`border-${s}`);return i})}}function le(e){return Ie(()=>{const t=[],a={};return e.value.background&&(he(e.value.background)?a.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(he(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function j(e,t){const a=u(()=>({text:G(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=le(a);return{textColorClasses:n,textColorStyles:i}}function Se(e,t){const a=u(()=>({background:G(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=le(a);return{backgroundColorClasses:n,backgroundColorStyles:i}}const Ne=g({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function ze(e){return{elevationClasses:u(()=>{const a=G(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const oe=g({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:u(()=>{const n=G(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`rounded-${s}`);return i})}}const Et=[null,"default","comfortable","compact"],Oe=g({density:{type:String,default:"default",validator:e=>Et.includes(e)}},"density");function Ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:u(()=>`${t}--density-${e.density}`)}}const Pt=["elevated","flat","tonal","outlined","text","plain"];function Lt(e,t){return v(nt,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const De=g({color:String,variant:{type:String,default:"elevated",validator:e=>Pt.includes(e)}},"variant");function Tt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const a=u(()=>{const{variant:s}=be(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:i}=le(u(()=>{const{variant:s,color:l}=be(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:i,variantClasses:a}}const Ge=g({divided:Boolean,...$e(),...R(),...Oe(),...Ne(),...oe(),...N(),...H(),...De()},"VBtnGroup"),_e=E()({name:"VBtnGroup",props:Ge(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=M(e),{densityClasses:i}=Ae(e),{borderClasses:s}=Re(e),{elevationClasses:l}=ze(e),{roundedClasses:c}=re(e);Be({VBtn:{height:"auto",color:I(e,"color"),density:I(e,"density"),flat:!0,variant:I(e,"variant")}}),L(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,i.value,l.value,c.value,e.class],style:e.style},a))}}),$t=g({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Rt=g({value:null,disabled:Boolean,selectedClass:String},"group-item");function Nt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=Y("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=at();Ee(Symbol.for(`${t.description}:id`),i);const s=st(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=I(e,"value"),c=u(()=>s.disabled.value||e.disabled);s.register({id:i,value:l,disabled:c},n),q(()=>{s.unregister(i)});const o=u(()=>s.isSelected(i)),b=u(()=>o.value&&[s.selectedClass.value,e.selectedClass]);return K(o,y=>{n.emit("group:selected",{value:y})}),{id:i,isSelected:o,toggle:()=>s.select(i,!o.value),select:y=>s.select(i,y),selectedClass:b,value:l,disabled:c,group:s}}function zt(e,t){let a=!1;const n=it([]),i=Pe(e,"modelValue",[],r=>r==null?[]:He(n,rt(r)),r=>{const d=At(n,r);return e.multiple?d:d[0]}),s=Y("useGroup");function l(r,d){const C=r,m=Symbol.for(`${t.description}:id`),S=ut(m,s==null?void 0:s.vnode).indexOf(d);S>-1?n.splice(S,0,C):n.push(C)}function c(r){if(a)return;o();const d=n.findIndex(C=>C.id===r);n.splice(d,1)}function o(){const r=n.find(d=>!d.disabled);r&&e.mandatory==="force"&&!i.value.length&&(i.value=[r.id])}lt(()=>{o()}),q(()=>{a=!0});function b(r,d){const C=n.find(m=>m.id===r);if(!(d&&(C!=null&&C.disabled)))if(e.multiple){const m=i.value.slice(),w=m.findIndex(f=>f===r),S=~w;if(d=d??!S,S&&e.mandatory&&m.length<=1||!S&&e.max!=null&&m.length+1>e.max)return;w<0&&d?m.push(r):w>=0&&!d&&m.splice(w,1),i.value=m}else{const m=i.value.includes(r);if(e.mandatory&&m)return;i.value=d??!m?[r]:[]}}function y(r){if(e.multiple,i.value.length){const d=i.value[0],C=n.findIndex(S=>S.id===d);let m=(C+r)%n.length,w=n[m];for(;w.disabled&&m!==C;)m=(m+r)%n.length,w=n[m];if(w.disabled)return;i.value=[n[m].id]}else{const d=n.find(C=>!C.disabled);d&&(i.value=[d.id])}}const _={register:l,unregister:c,selected:i,select:b,disabled:I(e,"disabled"),prev:()=>y(n.length-1),next:()=>y(1),isSelected:r=>i.value.includes(r),selectedClass:u(()=>e.selectedClass),items:u(()=>n),getItemIndex:r=>Ot(n,r)};return Ee(t,_),_}function Ot(e,t){const a=He(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function He(e,t){const a=[];return t.forEach(n=>{const i=e.find(l=>ot(n,l.value)),s=e[n];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function At(e,t){const a=[];return t.forEach(n=>{const i=e.findIndex(s=>s.id===n);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const Me=Symbol.for("vuetify:v-btn-toggle"),Dt=g({...Ge(),...$t()},"VBtnToggle");E()({name:"VBtnToggle",props:Dt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:i,prev:s,select:l,selected:c}=zt(e,Me);return L(()=>{const[o]=_e.filterProps(e);return v(_e,ct({class:["v-btn-toggle",e.class]},o,{style:e.style}),{default:()=>{var b;return[(b=a.default)==null?void 0:b.call(a,{isSelected:n,next:i,prev:s,select:l,selected:c})]}})}),{next:i,prev:s,select:l}}});const Gt=["x-small","small","default","large","x-large"],ue=g({size:{type:[String,Number],default:"default"}},"size");function ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return Ie(()=>{let a,n;return U(Gt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:h(e.size),height:h(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Ht=g({color:String,start:Boolean,end:Boolean,icon:ne,...R(),...ue(),...N({tag:"i"}),...H()},"VIcon"),ee=E()({name:"VIcon",props:Ht(),setup(e,t){let{attrs:a,slots:n}=t;const i=O(),{themeClasses:s}=M(e),{iconData:l}=dt(u(()=>i.value||e.icon)),{sizeClasses:c}=ce(e),{textColorClasses:o,textColorStyles:b}=j(I(e,"color"));return L(()=>{var _,r;const y=(_=n.default)==null?void 0:_.call(n);return y&&(i.value=(r=vt(y).filter(d=>d.type===ft&&d.children&&typeof d.children=="string")[0])==null?void 0:r.children),v(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,c.value,o.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[c.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},b.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[y]})}),{}}});function We(e,t){const a=O(),n=mt(!1);if(gt){const i=new IntersectionObserver(s=>{e==null||e(s,i),n.value=!!s.find(l=>l.isIntersecting)},t);q(()=>{i.disconnect()}),K(a,(s,l)=>{l&&(i.unobserve(l),n.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const Mt=g({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...R(),...ue(),...N({tag:"div"}),...H()},"VProgressCircular"),Wt=E()({name:"VProgressCircular",props:Mt(),setup(e,t){let{slots:a}=t;const n=20,i=2*Math.PI*n,s=O(),{themeClasses:l}=M(e),{sizeClasses:c,sizeStyles:o}=ce(e),{textColorClasses:b,textColorStyles:y}=j(I(e,"color")),{textColorClasses:_,textColorStyles:r}=j(I(e,"bgColor")),{intersectionRef:d,isIntersecting:C}=We(),{resizeRef:m,contentRect:w}=xt(),S=u(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),f=u(()=>Number(e.width)),p=u(()=>o.value?Number(e.size):w.value?w.value.width:Math.max(f.value,32)),B=u(()=>n/(1-f.value/p.value)*2),V=u(()=>f.value/p.value*B.value),z=u(()=>h((100-S.value)/100*i));return ht(()=>{d.value=s.value,m.value=s.value}),L(()=>v(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,c.value,b.value,e.class],style:[o.value,y.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${B.value} ${B.value}`},[v("circle",{class:["v-progress-circular__underlay",_.value],style:r.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":z.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}});const ke={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Fe=g({location:String},"location");function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=ie();return{locationStyles:u(()=>{if(!e.location)return{};const{side:s,align:l}=wt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function c(b){return a?a(b):0}const o={};return s!=="center"&&(t?o[ke[s]]=`calc(100% - ${c(s)}px)`:o[s]=0),l!=="center"?t?o[ke[l]]=`calc(100% - ${c(l)}px)`:o[l]=0:(s==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),o})}}const Ft=g({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...R(),...Fe({location:"top"}),...oe(),...N(),...H()},"VProgressLinear"),Ut=E()({name:"VProgressLinear",props:Ft(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Pe(e,"modelValue"),{isRtl:i,rtlClasses:s}=ie(),{themeClasses:l}=M(e),{locationStyles:c}=Ue(e),{textColorClasses:o,textColorStyles:b}=j(e,"color"),{backgroundColorClasses:y,backgroundColorStyles:_}=Se(u(()=>e.bgColor||e.color)),{backgroundColorClasses:r,backgroundColorStyles:d}=Se(e,"color"),{roundedClasses:C}=re(e),{intersectionRef:m,isIntersecting:w}=We(),S=u(()=>parseInt(e.max,10)),f=u(()=>parseInt(e.height,10)),p=u(()=>parseFloat(e.bufferValue)/S.value*100),B=u(()=>parseFloat(n.value)/S.value*100),V=u(()=>i.value!==e.reverse),z=u(()=>e.indeterminate?"fade-transition":"slide-x-transition"),W=u(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function J(k){if(!m.value)return;const{left:T,right:Q,width:$}=m.value.getBoundingClientRect(),F=V.value?$-k.clientX+(Q-$):k.clientX-T;n.value=Math.round(F/$*S.value)}return L(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&w.value,"v-progress-linear--reverse":V.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,l.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(f.value):0,"--v-progress-linear-height":h(f.value),...c.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:B.value,onClick:e.clickable&&J},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...b.value,[V.value?"left":"right"]:h(-f.value),borderTop:`${h(f.value/2)} dotted`,opacity:W.value,top:`calc(50% - ${h(f.value/4)})`,width:h(100-p.value,"%"),"--v-progress-linear-stream-to":h(f.value*(V.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",y.value],style:[_.value,{opacity:W.value,width:h(e.stream?p.value:100,"%")}]},null),v(bt,{name:z.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(k=>v("div",{key:k,class:["v-progress-linear__indeterminate",k,r.value],style:d.value},null))]):v("div",{class:["v-progress-linear__determinate",r.value],style:[d.value,{width:h(B.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:B.value,buffer:p.value})])]})),{}}}),jt=g({loading:[Boolean,String]},"loader");function Xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:u(()=>({[`${t}--loading`]:e.loading}))}}function mn(e,t){var n;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||v(Ut,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Yt=["static","relative","fixed","absolute","sticky"],qt=g({position:{type:String,validator:e=>Yt.includes(e)}},"position");function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:u(()=>e.position?`${t}--${e.position}`:void 0)}}function gn(){var e,t;return(t=(e=Y("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Jt(e,t){const a=yt("RouterLink"),n=u(()=>!!(e.href||e.to)),i=u(()=>(n==null?void 0:n.value)||ye(t,"click")||ye(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:i,href:I(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&u(()=>{var l,c;return e.exact?(l=s.isExactActive)==null?void 0:l.value:(c=s.isActive)==null?void 0:c.value}),href:u(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Qt=g({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let te=!1;function hn(e,t){let a=!1,n,i;Ve&&(Le(()=>{window.addEventListener("popstate",s),n=e==null?void 0:e.beforeEach((l,c,o)=>{te?a?t(o):o():setTimeout(()=>a?t(o):o()),te=!0}),i=e==null?void 0:e.afterEach(()=>{te=!1})}),Ct(()=>{window.removeEventListener("popstate",s),n==null||n(),i==null||i()}));function s(l){var c;(c=l.state)!=null&&c.replaced||(a=!0,setTimeout(()=>a=!1))}}function Zt(e,t){K(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&Le(()=>{t(!0)})},{immediate:!0})}const ae=Symbol("rippleStop"),en=80;function we(e,t){e.style.transform=t,e.style.webkitTransform=t}function se(e){return e.constructor.name==="TouchEvent"}function je(e){return e.constructor.name==="KeyboardEvent"}const tn=function(e,t){var _;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!je(e)){const r=t.getBoundingClientRect(),d=se(e)?e.touches[e.touches.length-1]:e;n=d.clientX-r.left,i=d.clientY-r.top}let s=0,l=.3;(_=t._ripple)!=null&&_.circle?(l=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=`${(t.clientWidth-s*2)/2}px`,o=`${(t.clientHeight-s*2)/2}px`,b=a.center?c:`${n-s}px`,y=a.center?o:`${i-s}px`;return{radius:s,scale:l,x:b,y,centerX:c,centerY:o}},X={show(e,t){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:l,x:c,y:o,centerX:b,centerY:y}=tn(e,t,a),_=`${s*2}px`;i.className="v-ripple__animation",i.style.width=_,i.style.height=_,t.appendChild(n);const r=window.getComputedStyle(t);r&&r.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),we(i,`translate(${c}, ${o}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),we(i,`translate(${b}, ${y}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var c;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((c=a.parentNode)==null?void 0:c.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function Xe(e){return typeof e>"u"||!!e}function A(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ae])){if(e[ae]=!0,se(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||je(e),a._ripple.class&&(t.class=a._ripple.class),se(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{X.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},en)}else X.show(e,a,t)}}function xe(e){e[ae]=!0}function x(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{x(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),X.hide(t)}}function Ye(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let D=!1;function qe(e){!D&&(e.keyCode===Ce.enter||e.keyCode===Ce.space)&&(D=!0,A(e))}function Ke(e){D=!1,x(e)}function Je(e){D&&(D=!1,x(e))}function Qe(e,t,a){const{value:n,modifiers:i}=t,s=Xe(n);if(s||X.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,pt(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(i.stop){e.addEventListener("touchstart",xe,{passive:!0}),e.addEventListener("mousedown",xe);return}e.addEventListener("touchstart",A,{passive:!0}),e.addEventListener("touchend",x,{passive:!0}),e.addEventListener("touchmove",Ye,{passive:!0}),e.addEventListener("touchcancel",x),e.addEventListener("mousedown",A),e.addEventListener("mouseup",x),e.addEventListener("mouseleave",x),e.addEventListener("keydown",qe),e.addEventListener("keyup",Ke),e.addEventListener("blur",Je),e.addEventListener("dragstart",x,{passive:!0})}else!s&&a&&Ze(e)}function Ze(e){e.removeEventListener("mousedown",A),e.removeEventListener("touchstart",A),e.removeEventListener("touchend",x),e.removeEventListener("touchmove",Ye),e.removeEventListener("touchcancel",x),e.removeEventListener("mouseup",x),e.removeEventListener("mouseleave",x),e.removeEventListener("keydown",qe),e.removeEventListener("keyup",Ke),e.removeEventListener("dragstart",x),e.removeEventListener("blur",Je)}function nn(e,t){Qe(e,t,!1)}function an(e){delete e._ripple,Ze(e)}function sn(e,t){if(t.value===t.oldValue)return;const a=Xe(t.oldValue);Qe(e,t,a)}const ln={mounted:nn,unmounted:an,updated:sn},on=g({active:{type:Boolean,default:void 0},symbol:{type:null,default:Me},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ne,appendIcon:ne,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...$e(),...R(),...Oe(),...Bt(),...Ne(),...Rt(),...jt(),...Fe(),...qt(),...oe(),...Qt(),...ue(),...N({tag:"button"}),...H(),...De({variant:"elevated"})},"VBtn"),bn=E()({name:"VBtn",directives:{Ripple:ln},props:on(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=M(e),{borderClasses:s}=Re(e),{colorClasses:l,colorStyles:c,variantClasses:o}=Tt(e),{densityClasses:b}=Ae(e),{dimensionStyles:y}=It(e),{elevationClasses:_}=ze(e),{loaderClasses:r}=Xt(e),{locationStyles:d}=Ue(e),{positionClasses:C}=Kt(e),{roundedClasses:m}=re(e),{sizeClasses:w,sizeStyles:S}=ce(e),f=Nt(e,e.symbol,!1),p=Jt(e,a),B=u(()=>{var k;return e.active!==void 0?e.active:p.isLink.value?(k=p.isActive)==null?void 0:k.value:f==null?void 0:f.isSelected.value}),V=u(()=>(f==null?void 0:f.disabled.value)||e.disabled),z=u(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),W=u(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function J(k){var T;V.value||p.isLink.value&&(k.metaKey||k.ctrlKey||k.shiftKey||k.button!==0||a.target==="_blank")||((T=p.navigate)==null||T.call(p,k),f==null||f.toggle())}return Zt(p,f==null?void 0:f.select),L(()=>{var de,ve;const k=p.isLink.value?"a":e.tag,T=!!(e.prependIcon||n.prepend),Q=!!(e.appendIcon||n.append),$=!!(e.icon&&e.icon!==!0),F=(f==null?void 0:f.isSelected.value)&&(!p.isLink.value||((de=p.isActive)==null?void 0:de.value))||!f||((ve=p.isActive)==null?void 0:ve.value);return St(v(k,{type:k==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":B.value,"v-btn--block":e.block,"v-btn--disabled":V.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,s.value,F?l.value:void 0,b.value,_.value,r.value,C.value,m.value,w.value,o.value,e.class],style:[F?c.value:void 0,y.value,d.value,S.value,e.style],disabled:V.value||void 0,href:p.href.value,onClick:J,value:W.value},{default:()=>{var fe;return[Lt(!0,"v-btn"),!e.icon&&T&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(Z,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(ee,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&$?v(ee,{key:"content-icon",icon:e.icon},null):v(Z,{key:"content-defaults",disabled:!$,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var me;return[((me=n.default)==null?void 0:me.call(n))??e.text]}})]),!e.icon&&Q&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(Z,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(ee,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((fe=n.loader)==null?void 0:fe.call(n))??v(Wt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[_t("ripple"),!V.value&&e.ripple,null]])}),{}}});const rn=g({fluid:{type:Boolean,default:!1},...R(),...N()},"VContainer"),yn=E()({name:"VContainer",props:rn(),setup(e,t){let{slots:a}=t;const{rtlClasses:n}=ie();return L(()=>v(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:e.style},a)),{}}});export{jt as A,Xt as B,j as C,Oe as D,Ae as E,De as F,Z as G,Qt as H,Jt as I,Tt as J,Lt as K,mn as L,wt as M,cn as N,dn as O,vn as P,fn as Q,ln as R,hn as S,Wt as T,ue as U,bn as V,ce as W,L as a,R as b,N as c,$e as d,Ne as e,oe as f,Re as g,Se as h,ze as i,re as j,gn as k,ee as l,on as m,yn as n,$t as o,zt as p,Rt as q,Nt as r,Bt as s,pe as t,xt as u,Fe as v,qt as w,It as x,Ue as y,Kt as z};