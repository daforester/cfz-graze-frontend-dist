import{m as xe,o as Ce,u as O,V as Y,a as K,g as N,p as Te,q as ce,l as ne,b as oe,r as ke,s as we,h as ze,t as Ve,v as Pe}from"./VContainer-J74wRNt1.js";import{f as Be,c as Ie,s as Re,d as ae,M as Ee}from"./forwardRefs-UNyd8QBJ.js";import{p as A,a8 as _e,d as X,r as W,c as b,f as m,F as Me,m as q,a9 as le,aa as $e,K as re,ab as He,s as I,ac as Oe,w as ve,ad as Ae,a as Xe,u as Ye,t as E,a7 as We,L as U,ae as Fe,af as de,I as Le,J as Ge,ag as De,a6 as je,ah as fe,ai as qe,aj as Ue,ak as Ke,W as Ne}from"./index-ytQigX2-.js";import{m as Je,u as Qe}from"./SaveButton.vue_vue_type_script_setup_true_lang-R_iujN6l.js";import{u as Ze}from"./VList-Bntkr_k3.js";const he=Symbol.for("vuetify:v-tabs"),pe=A({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},..._e(xe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),et=X()({name:"VTab",props:pe(),setup(e,o){let{slots:t,attrs:n}=o;const{textColorClasses:v,textColorStyles:c}=Ce(e,"sliderColor"),a=W(),u=W(),l=b(()=>e.direction==="horizontal"),i=b(()=>{var d,S;return((S=(d=a.value)==null?void 0:d.group)==null?void 0:S.isSelected.value)??!1});function g(d){var T,r;let{value:S}=d;if(S){const P=(r=(T=a.value)==null?void 0:T.$el.parentElement)==null?void 0:r.querySelector(".v-tab--selected .v-tab__slider"),B=u.value;if(!P||!B)return;const _=getComputedStyle(P).color,C=P.getBoundingClientRect(),w=B.getBoundingClientRect(),h=l.value?"x":"y",y=l.value?"X":"Y",x=l.value?"right":"bottom",z=l.value?"width":"height",F=C[h],M=w[h],R=F>M?C[x]-w[x]:C[h]-w[h],L=Math.sign(R)>0?l.value?"right":"bottom":Math.sign(R)<0?l.value?"left":"top":"center",G=(Math.abs(R)+(Math.sign(R)<0?C[z]:w[z]))/Math.max(C[z],w[z])||0,k=C[z]/w[z]||0,$=1.5;Ie(B,{backgroundColor:[_,"currentcolor"],transform:[`translate${y}(${R}px) scale${y}(${k})`,`translate${y}(${R/$}px) scale${y}(${(G-1)/$+1})`,"none"],transformOrigin:Array(3).fill(L)},{duration:225,easing:Re})}}return O(()=>{const d=Y.filterProps(e);return m(Y,q({symbol:he,ref:a,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1},d,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":g}),{...t,default:()=>{var S;return m(Me,null,[((S=t.default)==null?void 0:S.call(t))??e.text,!e.hideSlider&&m("div",{ref:u,class:["v-tab__slider",v.value],style:c.value},null)])}})}),Be({},a)}});function se(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function ie(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:v,currentScrollOffset:c,isHorizontal:a}=e;const u=a?o.clientWidth:o.clientHeight,l=a?o.offsetLeft:o.offsetTop,i=v&&a?n-l-u:l,g=t+c,d=u+i,S=u*.4;return i<=c?c=Math.max(i-S,0):g<=d&&(c=Math.min(c-(g-d-S),n-t)),c}function tt(e){let{selectedElement:o,containerSize:t,contentSize:n,isRtl:v,isHorizontal:c}=e;const a=c?o.clientWidth:o.clientHeight,u=c?o.offsetLeft:o.offsetTop,l=v&&c?n-u-a/2-t/2:u+a/2-t/2;return Math.min(n-t,Math.max(0,l))}const nt=Symbol.for("vuetify:v-slide-group"),me=A({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:nt},nextIcon:{type:le,default:"$next"},prevIcon:{type:le,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...K(),...$e(),...N(),...Te({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ue=X()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{isRtl:n}=re(),{displayClasses:v,mobile:c}=He(e),a=ce(e,e.symbol),u=I(!1),l=I(0),i=I(0),g=I(0),d=b(()=>e.direction==="horizontal"),{resizeRef:S,contentRect:T}=ne(),{resizeRef:r,contentRect:P}=ne(),B=b(()=>a.selected.value.length?a.items.value.findIndex(s=>s.id===a.selected.value[0]):-1),_=b(()=>a.selected.value.length?a.items.value.findIndex(s=>s.id===a.selected.value[a.selected.value.length-1]):-1);if(Oe){let s=-1;ve(()=>[a.selected.value,T.value,P.value,d.value],()=>{cancelAnimationFrame(s),s=requestAnimationFrame(()=>{if(T.value&&P.value){const f=d.value?"width":"height";i.value=T.value[f],g.value=P.value[f],u.value=i.value+1<g.value}if(B.value>=0&&r.value){const f=r.value.children[_.value];B.value===0||!u.value?l.value=0:e.centerActive?l.value=tt({selectedElement:f,containerSize:i.value,contentSize:g.value,isRtl:n.value,isHorizontal:d.value}):u.value&&(l.value=ie({selectedElement:f,containerSize:i.value,contentSize:g.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:d.value}))}})})}const C=I(!1);let w=0,h=0;function y(s){const f=d.value?"clientX":"clientY";h=(n.value&&d.value?-1:1)*l.value,w=s.touches[0][f],C.value=!0}function x(s){if(!u.value)return;const f=d.value?"clientX":"clientY",V=n.value&&d.value?-1:1;l.value=V*(h+w-s.touches[0][f])}function z(s){const f=g.value-i.value;l.value<0||!u.value?l.value=0:l.value>=f&&(l.value=f),C.value=!1}function F(){S.value&&(S.value[d.value?"scrollLeft":"scrollTop"]=0)}const M=I(!1);function R(s){if(M.value=!0,!(!u.value||!r.value)){for(const f of s.composedPath())for(const V of r.value.children)if(V===f){l.value=ie({selectedElement:V,containerSize:i.value,contentSize:g.value,isRtl:n.value,currentScrollOffset:l.value,isHorizontal:d.value});return}}}function L(s){M.value=!1}function J(s){var f;!M.value&&!(s.relatedTarget&&((f=r.value)!=null&&f.contains(s.relatedTarget)))&&k()}function G(s){r.value&&(d.value?s.key==="ArrowRight"?k(n.value?"prev":"next"):s.key==="ArrowLeft"&&k(n.value?"next":"prev"):s.key==="ArrowDown"?k("next"):s.key==="ArrowUp"&&k("prev"),s.key==="Home"?k("first"):s.key==="End"&&k("last"))}function k(s){var f,V,p,ee,te;if(r.value)if(!s)(f=Ae(r.value)[0])==null||f.focus();else if(s==="next"){const H=(V=r.value.querySelector(":focus"))==null?void 0:V.nextElementSibling;H?H.focus():k("first")}else if(s==="prev"){const H=(p=r.value.querySelector(":focus"))==null?void 0:p.previousElementSibling;H?H.focus():k("last")}else s==="first"?(ee=r.value.firstElementChild)==null||ee.focus():s==="last"&&((te=r.value.lastElementChild)==null||te.focus())}function $(s){const f=l.value+(s==="prev"?-1:1)*i.value;l.value=Xe(f,0,g.value-i.value)}const Se=b(()=>{let s=l.value>g.value-i.value?-(g.value-i.value)+se(g.value-i.value-l.value):-l.value;l.value<=0&&(s=se(-l.value));const f=n.value&&d.value?-1:1;return{transform:`translate${d.value?"X":"Y"}(${f*s}px)`,transition:C.value?"none":"",willChange:C.value?"transform":""}}),D=b(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),j=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!c.value;case!0:return u.value||Math.abs(l.value)>0;case"mobile":return c.value||u.value||Math.abs(l.value)>0;default:return!c.value&&(u.value||Math.abs(l.value)>0)}}),Q=b(()=>Math.abs(l.value)>0),Z=b(()=>g.value>Math.abs(l.value)+i.value);return O(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":j.value,"v-slide-group--is-overflowing":u.value},v.value,e.class],style:e.style,tabindex:M.value||a.selected.value.length?-1:0,onFocus:J},{default:()=>{var s,f,V;return[j.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Q.value}],onClick:()=>Q.value&&$("prev")},[((s=t.prev)==null?void 0:s.call(t,D.value))??m(ae,null,{default:()=>[m(oe,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:S,class:"v-slide-group__container",onScroll:F},[m("div",{ref:r,class:"v-slide-group__content",style:Se.value,onTouchstartPassive:y,onTouchmovePassive:x,onTouchendPassive:z,onFocusin:R,onFocusout:L,onKeydown:G},[(f=t.default)==null?void 0:f.call(t,D.value)])]),j.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Z.value}],onClick:()=>Z.value&&$("next")},[((V=t.next)==null?void 0:V.call(t,D.value))??m(ae,null,{default:()=>[m(oe,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:$,scrollOffset:l,focus:k}}});function ot(e){return e?e.map(o=>Fe(o)?o:{text:o,value:o}):[]}const at=A({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...me({mandatory:"force"}),...ke(),...N()},"VTabs"),St=X()({name:"VTabs",props:at(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=Ye(e,"modelValue"),v=b(()=>ot(e.items)),{densityClasses:c}=we(e),{backgroundColorClasses:a,backgroundColorStyles:u}=ze(E(e,"bgColor"));return We({VTab:{color:E(e,"color"),direction:E(e,"direction"),stacked:E(e,"stacked"),fixed:E(e,"fixedTabs"),sliderColor:E(e,"sliderColor"),hideSlider:E(e,"hideSlider")}}),O(()=>{const l=ue.filterProps(e);return m(ue,q(l,{modelValue:n.value,"onUpdate:modelValue":i=>n.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},c.value,a.value,e.class],style:[{"--v-tabs-height":U(e.height)},u.value,e.style],role:"tablist",symbol:he}),{default:()=>[t.default?t.default():v.value.map(i=>m(et,q(i,{key:i.text}),null))]})}),{}}}),lt=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:v}=e,c=.5,a=16;e.offsetX=t-o,e.offsetY=v-n,Math.abs(e.offsetY)<c*Math.abs(e.offsetX)&&(e.left&&t<o-a&&e.left(e),e.right&&t>o+a&&e.right(e)),Math.abs(e.offsetX)<c*Math.abs(e.offsetY)&&(e.up&&v<n-a&&e.up(e),e.down&&v>n+a&&e.down(e))};function st(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function it(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),lt(o)}function ut(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function ct(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>st(t,o),touchend:t=>it(t,o),touchmove:t=>ut(t,o)}}function rt(e,o){var u;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,v=(t==null?void 0:t.options)??{passive:!0},c=(u=o.instance)==null?void 0:u.$.uid;if(!n||!c)return;const a=ct(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[c]=a,de(a).forEach(l=>{n.addEventListener(l,a[l],v)})}function vt(e,o){var c,a;const t=(c=o.value)!=null&&c.parent?e.parentElement:e,n=(a=o.instance)==null?void 0:a.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const v=t._touchHandlers[n];de(v).forEach(u=>{t.removeEventListener(u,v[u])}),delete t._touchHandlers[n]}const ge={mounted:rt,unmounted:vt},ye=Symbol.for("vuetify:v-window"),be=Symbol.for("vuetify:v-window-group"),dt=A({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...K(),...N(),...Le()},"VWindow"),xt=X()({name:"VWindow",directives:{Touch:ge},props:dt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=Ge(e),{isRtl:v}=re(),{t:c}=De(),a=ce(e,be),u=W(),l=b(()=>v.value?!e.reverse:e.reverse),i=I(!1),g=b(()=>{const h=e.direction==="vertical"?"y":"x",x=(l.value?!i.value:i.value)?"-reverse":"";return`v-window-${h}${x}-transition`}),d=I(0),S=W(void 0),T=b(()=>a.items.value.findIndex(h=>a.selected.value.includes(h.id)));ve(T,(h,y)=>{const x=a.items.value.length,z=x-1;x<=2?i.value=h<y:h===z&&y===0?i.value=!0:h===0&&y===z?i.value=!1:i.value=h<y}),je(ye,{transition:g,isReversed:i,transitionCount:d,transitionHeight:S,rootRef:u});const r=b(()=>e.continuous||T.value!==0),P=b(()=>e.continuous||T.value!==a.items.value.length-1);function B(){r.value&&a.prev()}function _(){P.value&&a.next()}const C=b(()=>{const h=[],y={icon:v.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:a.prev,"aria-label":c("$vuetify.carousel.prev")};h.push(r.value?t.prev?t.prev({props:y}):m(Y,y,null):m("div",null,null));const x={icon:v.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:a.next,"aria-label":c("$vuetify.carousel.next")};return h.push(P.value?t.next?t.next({props:x}):m(Y,x,null):m("div",null,null)),h}),w=b(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?B():_()},right:()=>{l.value?_():B()},start:y=>{let{originalEvent:x}=y;x.stopPropagation()}},...e.touch===!0?{}:e.touch});return O(()=>fe(m(e.tag,{ref:u,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var h,y;return[m("div",{class:"v-window__container",style:{height:S.value}},[(h=t.default)==null?void 0:h.call(t,{group:a}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[C.value])]),(y=t.additional)==null?void 0:y.call(t,{group:a})]}}),[[qe("touch"),w.value]])),{group:a}}}),ft=A({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...K(),...Ve(),...Je()},"VWindowItem"),Ct=X()({name:"VWindowItem",directives:{Touch:ge},props:ft(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=Ue(ye),v=Pe(e,be),{isBooted:c}=Ze();if(!n||!v)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=I(!1),u=b(()=>c.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!a.value||!n||(a.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function i(){var r;a.value||!n||(a.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=U((r=n.rootRef.value)==null?void 0:r.clientHeight)),n.transitionCount.value+=1)}function g(){l()}function d(r){a.value&&Ne(()=>{!u.value||!a.value||!n||(n.transitionHeight.value=U(r.clientHeight))})}const S=b(()=>{const r=n.isReversed.value?e.reverseTransition:e.transition;return u.value?{name:typeof r!="string"?n.transition.value:r,onBeforeEnter:i,onAfterEnter:l,onEnterCancelled:g,onBeforeLeave:i,onAfterLeave:l,onLeaveCancelled:g,onEnter:d}:!1}),{hasContent:T}=Qe(e,v.isSelected);return O(()=>m(Ee,{transition:S.value,disabled:!c.value},{default:()=>{var r;return[fe(m("div",{class:["v-window-item",v.selectedClass.value,e.class],style:e.style},[T.value&&((r=t.default)==null?void 0:r.call(t))]),[[Ke,v.isSelected.value]])]}})),{groupItem:v}}});export{xt as V,St as a,et as b,Ct as c};