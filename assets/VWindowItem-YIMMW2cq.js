import{m as xe,V as X,b as Ce,c as ce,u as ne,d as Te,e as ke}from"./VBtn-NKGAx7eO.js";import{j as we,u as O,m as K,e as N,V as oe,k as Ve,l as ze,f as Pe}from"./VContainer-dtNRpZTo.js";import{f as Re,a as Be,s as Ie,b as ae}from"./forwardRefs-zMgvZe6i.js";import{p as A,R as Ee,d as Y,r as F,c as y,f as m,F as _e,m as q,a8 as le,a9 as Me,K as re,aa as $e,s as B,ab as He,w as ve,ac as Oe,a as Ae,u as Ye,t as E,a7 as Xe,L as U,ad as Fe,ae as de,I as We,J as Le,af as Ge,a6 as je,ag as fe,ah as De,ai as qe,aj as Ue,Y as Ke}from"./index-Zh94YIQM.js";import{c as Ne,u as Je}from"./SaveButton.vue_vue_type_script_setup_true_lang-3AkOjpzJ.js";import{u as Qe}from"./VList-1ShD6sIP.js";import{M as Ze}from"./VAvatar-jae2E3Ms.js";const he=Symbol.for("vuetify:v-tabs"),pe=A({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Ee(xe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),et=Y()({name:"VTab",props:pe(),setup(e,o){let{slots:t,attrs:n}=o;const{textColorClasses:v,textColorStyles:c}=we(e,"sliderColor"),a=F(),u=F(),l=y(()=>e.direction==="horizontal"),i=y(()=>{var d,S;return((S=(d=a.value)==null?void 0:d.group)==null?void 0:S.isSelected.value)??!1});function g(d){var T,r;let{value:S}=d;if(S){const P=(r=(T=a.value)==null?void 0:T.$el.parentElement)==null?void 0:r.querySelector(".v-tab--selected .v-tab__slider"),R=u.value;if(!P||!R)return;const _=getComputedStyle(P).color,C=P.getBoundingClientRect(),w=R.getBoundingClientRect(),h=l.value?"x":"y",b=l.value?"X":"Y",x=l.value?"right":"bottom",V=l.value?"width":"height",W=C[h],M=w[h],I=W>M?C[x]-w[x]:C[h]-w[h],L=Math.sign(I)>0?l.value?"right":"bottom":Math.sign(I)<0?l.value?"left":"top":"center",G=(Math.abs(I)+(Math.sign(I)<0?C[V]:w[V]))/Math.max(C[V],w[V])||0,k=C[V]/w[V]||0,$=1.5;Be(R,{backgroundColor:[_,"currentcolor"],transform:[`translate${b}(${I}px) scale${b}(${k})`,`translate${b}(${I/$}px) scale${b}(${(G-1)/$+1})`,"none"],transformOrigin:Array(3).fill(L)},{duration:225,easing:Ie})}}return O(()=>{const d=X.filterProps(e);return m(X,q({symbol:he,ref:a,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},d,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":g}),{...t,default:()=>{var S;return m(_e,null,[((S=t.default)==null?void 0:S.call(t))??e.text,!e.hideSlider&&m("div",{ref:u,class:["v-tab__slider",v.value],style:c.value},null)])}})}),Re({},a)}});function se(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function ie(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:v,currentScrollOffset:c,isHorizontal:a}=e;const u=a?o.clientWidth:o.clientHeight,l=a?o.offsetLeft:o.offsetTop,i=v&&a?n-l-u:l,g=t+c,d=u+i,S=u*.4;return i<=c?c=Math.max(i-S,0):g<=d&&(c=Math.min(c-(g-d-S),n-t)),c}function tt(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:v,isHorizontal:c}=e;const a=c?o.clientWidth:o.clientHeight,u=c?o.offsetLeft:o.offsetTop,l=v&&c?n-u-a/2-t/2:u+a/2-t/2;return Math.min(n-t,Math.max(0,l))}const nt=Symbol.for("vuetify:v-slide-group"),me=A({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:nt},nextIcon:{type:le,default:"$next"},prevIcon:{type:le,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...K(),...Me(),...N(),...Ce({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ue=Y()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{isRtl:n}=re(),{displayClasses:v,mobile:c}=$e(e),a=ce(e,e.symbol),u=B(!1),l=B(0),i=B(0),g=B(0),d=y(()=>e.direction==="horizontal"),{resizeRef:S,contentRect:T}=ne(),{resizeRef:r,contentRect:P}=ne(),R=y(()=>a.selected.value.length?a.items.value.findIndex(s=>s.id===a.selected.value[0]):-1),_=y(()=>a.selected.value.length?a.items.value.findIndex(s=>s.id===a.selected.value[a.selected.value.length-1]):-1);if(He){let s=-1;ve(()=>[a.selected.value,T.value,P.value,d.value],()=>{cancelAnimationFrame(s),s=requestAnimationFrame(()=>{if(T.value&&P.value){const f=d.value?"width":"height";i.value=T.value[f],g.value=P.value[f],u.value=i.value+1<g.value}if(R.value>=0&&r.value){const f=r.value.children[_.value];R.value===0||!u.value?l.value=0:e.centerActive?l.value=tt({selectedElement:f,containerSize:i.value,contentSize:g.value,isRtl:n.value,isHorizontal:d.value}):u.value&&(l.value=ie({selectedElement:f,containerSize:i.value,contentSize:g.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:d.value}))}})})}const C=B(!1);let w=0,h=0;function b(s){const f=d.value?"clientX":"clientY";h=(n.value&&d.value?-1:1)*l.value,w=s.touches[0][f],C.value=!0}function x(s){if(!u.value)return;const f=d.value?"clientX":"clientY",z=n.value&&d.value?-1:1;l.value=z*(h+w-s.touches[0][f])}function V(s){const f=g.value-i.value;l.value<0||!u.value?l.value=0:l.value>=f&&(l.value=f),C.value=!1}function W(){S.value&&(S.value[d.value?"scrollLeft":"scrollTop"]=0)}const M=B(!1);function I(s){if(M.value=!0,!(!u.value||!r.value)){for(const f of s.composedPath())for(const z of r.value.children)if(z===f){l.value=ie({selectedElement:z,containerSize:i.value,contentSize:g.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:d.value});return}}}function L(s){M.value=!1}function J(s){var f;!M.value&&!(s.relatedTarget&&((f=r.value)!=null&&f.contains(s.relatedTarget)))&&k()}function G(s){r.value&&(d.value?s.key==="ArrowRight"?k(n.value?"prev":"next"):s.key==="ArrowLeft"&&k(n.value?"next":"prev"):s.key==="ArrowDown"?k("next"):s.key==="ArrowUp"&&k("prev"),s.key==="Home"?k("first"):s.key==="End"&&k("last"))}function k(s){var f,z,p,ee,te;if(r.value)if(!s)(f=Oe(r.value)[0])==null||f.focus();else if(s==="next"){const H=(z=r.value.querySelector(":focus"))==null?void 0:z.nextElementSibling;H?H.focus():k("first")}else if(s==="prev"){const H=(p=r.value.querySelector(":focus"))==null?void 0:p.previousElementSibling;H?H.focus():k("last")}else s==="first"?(ee=r.value.firstElementChild)==null||ee.focus():s==="last"&&((te=r.value.lastElementChild)==null||te.focus())}function $(s){const f=l.value+(s==="prev"?-1:1)*i.value;l.value=Ae(f,0,g.value-i.value)}const Se=y(()=>{let s=l.value>g.value-i.value?-(g.value-i.value)+se(g.value-i.value-l.value):-l.value;l.value<=0&&(s=se(-l.value));const f=n.value&&d.value?-1:1;return{transform:`translate${d.value?"X":"Y"}(${f*s}px)`,transition:C.value?"none":"",willChange:C.value?"transform":""}}),j=y(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),D=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!c.value;case!0:return u.value||Math.abs(l.value)>0;case"mobile":return c.value||u.value||Math.abs(l.value)>0;default:return!c.value&&(u.value||Math.abs(l.value)>0)}}),Q=y(()=>Math.abs(l.value)>0),Z=y(()=>g.value>Math.abs(l.value)+i.value);return O(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":D.value,"v-slide-group--is-overflowing":u.value},v.value,e.class],style:e.style,tabindex:M.value||a.selected.value.length?-1:0,onFocus:J},{default:()=>{var s,f,z;return[D.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Q.value}],onClick:()=>Q.value&&$("prev")},[((s=t.prev)==null?void 0:s.call(t,j.value))??m(ae,null,{default:()=>[m(oe,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:S,class:"v-slide-group__container",onScroll:W},[m("div",{ref:r,class:"v-slide-group__content",style:Se.value,onTouchstartPassive:b,onTouchmovePassive:x,onTouchendPassive:V,onFocusin:I,onFocusout:L,onKeydown:G},[(f=t.default)==null?void 0:f.call(t,j.value)])]),D.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Z.value}],onClick:()=>Z.value&&$("next")},[((z=t.next)==null?void 0:z.call(t,j.value))??m(ae,null,{default:()=>[m(oe,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:$,scrollOffset:l,focus:k}}});function ot(e){return e?e.map(o=>Fe(o)?o:{text:o,value:o}):[]}const at=A({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...me({mandatory:"force"}),...Ve(),...N()},"VTabs"),Ct=Y()({name:"VTabs",props:at(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=Ye(e,"modelValue"),v=y(()=>ot(e.items)),{densityClasses:c}=ze(e),{backgroundColorClasses:a,backgroundColorStyles:u}=Pe(E(e,"bgColor"));return Xe({VTab:{color:E(e,"color"),direction:E(e,"direction"),stacked:E(e,"stacked"),fixed:E(e,"fixedTabs"),sliderColor:E(e,"sliderColor"),hideSlider:E(e,"hideSlider")}}),O(()=>{const l=ue.filterProps(e);return m(ue,q(l,{modelValue:n.value,"onUpdate:modelValue":i=>n.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},c.value,a.value,e.class],style:[{"--v-tabs-height":U(e.height)},u.value,e.style],role:"tablist",symbol:he}),{default:()=>[t.default?t.default():v.value.map(i=>m(et,q(i,{key:i.text}),null))]})}),{}}}),lt=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:v}=e,c=.5,a=16;e.offsetX=t-o,e.offsetY=v-n,Math.abs(e.offsetY)<c*Math.abs(e.offsetX)&&(e.left&&t<o-a&&e.left(e),e.right&&t>o+a&&e.right(e)),Math.abs(e.offsetX)<c*Math.abs(e.offsetY)&&(e.up&&v<n-a&&e.up(e),e.down&&v>n+a&&e.down(e))};function st(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function it(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),lt(o)}function ut(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function ct(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>st(t,o),touchend:t=>it(t,o),touchmove:t=>ut(t,o)}}function rt(e,o){var u;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,v=(t==null?void 0:t.options)??{passive:!0},c=(u=o.instance)==null?void 0:u.$.uid;if(!n||!c)return;const a=ct(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[c]=a,de(a).forEach(l=>{n.addEventListener(l,a[l],v)})}function vt(e,o){var c,a;const t=(c=o.value)!=null&&c.parent?e.parentElement:e,n=(a=o.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const v=t._touchHandlers[n];de(v).forEach(u=>{t.removeEventListener(u,v[u])}),delete t._touchHandlers[n]}const ge={mounted:rt,unmounted:vt},be=Symbol.for("vuetify:v-window"),ye=Symbol.for("vuetify:v-window-group"),dt=A({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...K(),...N(),...We()},"VWindow"),Tt=Y()({name:"VWindow",directives:{Touch:ge},props:dt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=Le(e),{isRtl:v}=re(),{t:c}=Ge(),a=ce(e,ye),u=F(),l=y(()=>v.value?!e.reverse:e.reverse),i=B(!1),g=y(()=>{const h=e.direction==="vertical"?"y":"x",x=(l.value?!i.value:i.value)?"-reverse":"";return`v-window-${h}${x}-transition`}),d=B(0),S=F(void 0),T=y(()=>a.items.value.findIndex(h=>a.selected.value.includes(h.id)));ve(T,(h,b)=>{const x=a.items.value.length,V=x-1;x<=2?i.value=h<b:h===V&&b===0?i.value=!0:h===0&&b===V?i.value=!1:i.value=h<b}),je(be,{transition:g,isReversed:i,transitionCount:d,transitionHeight:S,rootRef:u});const r=y(()=>e.continuous||T.value!==0),P=y(()=>e.continuous||T.value!==a.items.value.length-1);function R(){r.value&&a.prev()}function _(){P.value&&a.next()}const C=y(()=>{const h=[],b={icon:v.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:a.prev,"aria-label":c("$vuetify.carousel.prev")};h.push(r.value?t.prev?t.prev({props:b}):m(X,b,null):m("div",null,null));const x={icon:v.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:a.next,"aria-label":c("$vuetify.carousel.next")};return h.push(P.value?t.next?t.next({props:x}):m(X,x,null):m("div",null,null)),h}),w=y(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?R():_()},right:()=>{l.value?_():R()},start:b=>{let{originalEvent:x}=b;x.stopPropagation()}},...e.touch===!0?{}:e.touch});return O(()=>fe(m(e.tag,{ref:u,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var h,b;return[m("div",{class:"v-window__container",style:{height:S.value}},[(h=t.default)==null?void 0:h.call(t,{group:a}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[C.value])]),(b=t.additional)==null?void 0:b.call(t,{group:a})]}}),[[De("touch"),w.value]])),{group:a}}}),ft=A({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...K(),...Te(),...Ne()},"VWindowItem"),kt=Y()({name:"VWindowItem",directives:{Touch:ge},props:ft(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=qe(be),v=ke(e,ye),{isBooted:c}=Qe();if(!n||!v)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=B(!1),u=y(()=>c.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!a.value||!n||(a.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function i(){var r;a.value||!n||(a.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=U((r=n.rootRef.value)==null?void 0:r.clientHeight)),n.transitionCount.value+=1)}function g(){l()}function d(r){a.value&&Ke(()=>{!u.value||!a.value||!n||(n.transitionHeight.value=U(r.clientHeight))})}const S=y(()=>{const r=n.isReversed.value?e.reverseTransition:e.transition;return u.value?{name:typeof r!="string"?n.transition.value:r,onBeforeEnter:i,onAfterEnter:l,onEnterCancelled:g,onBeforeLeave:i,onAfterLeave:l,onLeaveCancelled:g,onEnter:d}:!1}),{hasContent:T}=Je(e,v.isSelected);return O(()=>m(Ze,{transition:S.value,disabled:!c.value},{default:()=>{var r;return[fe(m("div",{class:["v-window-item",v.selectedClass.value,e.class],style:e.style},[T.value&&((r=t.default)==null?void 0:r.call(t))]),[[Ue,v.isSelected.value]])]}})),{groupItem:v}}});export{Tt as V,Ct as a,et as b,kt as c};
