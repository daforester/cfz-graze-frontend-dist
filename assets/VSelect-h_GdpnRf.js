import{c as Ie,V as re}from"./VTextField-tLuyuF-u.js";import{p as z,R as ge,d as Q,u as oe,S as Ae,c as D,r as U,ag as De,s as M,ab as Re,w as B,m as O,f,X as ye,a8 as ie,aR as Ee,aS as ce,F as W,a6 as Fe,h as de,aT as Ve,a as ne,aU as Me,a7 as we,aq as Oe,t as Be,e as Le,L as J,o as _e,a4 as Ue,ad as He,aM as Ke,x as Ne,aC as qe,aO as fe}from"./index-uFyvbd2S.js";import{f as Se,u as ze}from"./forwardRefs-c5tVShlW.js";import{m as $e,e as je,V as We,a as ve}from"./VList-HWYLex1s.js";import{m as Xe,a as Ye}from"./VAvatar-9mnmABeV.js";import{m as Ge,b as be,c as me,V as pe,g as Je}from"./VOverlay-8-6bXeJF.js";import{u as Qe}from"./scopeId-ieYvGwnd.js";import{u as Z,A as Pe,m as ke,s as Ze,x as et,V as he}from"./VContainer-tk_mTwVf.js";import{u as Te}from"./VBtn-t3mvRlEh.js";import{V as tt}from"./VCheckboxBtn-APaX_RWb.js";import{a as lt}from"./VChip-R10tf1pg.js";const nt=z({id:String,...ge(Ge({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:be}}),["absolute"])},"VMenu"),at=Q()({name:"VMenu",props:nt(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:n}=v;const r=oe(e,"modelValue"),{scopeId:s}=Qe(),m=Ae(),V=D(()=>e.id||`v-menu-${m}`),o=U(),l=De(me,null),y=M(0);Re(me,{register(){++y.value},unregister(){--y.value},closeParents(){setTimeout(()=>{y.value||(r.value=!1,l==null||l.closeParents())},40)}});async function A(d){var g,E,k;const u=d.relatedTarget,h=d.target;await ye(),r.value&&u!==h&&((g=o.value)!=null&&g.contentEl)&&((E=o.value)!=null&&E.globalTop)&&![document,o.value.contentEl].includes(h)&&!o.value.contentEl.contains(h)&&((k=ie(o.value.contentEl)[0])==null||k.focus())}B(r,d=>{d?(l==null||l.register(),document.addEventListener("focusin",A,{once:!0})):(l==null||l.unregister(),document.removeEventListener("focusin",A))});function R(){l==null||l.closeParents()}function c(d){var u,h,g;e.disabled||d.key==="Tab"&&(Ee(ie((u=o.value)==null?void 0:u.contentEl,!1),d.shiftKey?"prev":"next",k=>k.tabIndex>=0)||(r.value=!1,(g=(h=o.value)==null?void 0:h.activatorEl)==null||g.focus()))}function b(d){var h;if(e.disabled)return;const u=(h=o.value)==null?void 0:h.contentEl;u&&r.value?d.key==="ArrowDown"?(d.preventDefault(),ce(u,"next")):d.key==="ArrowUp"&&(d.preventDefault(),ce(u,"prev")):["ArrowDown","ArrowUp"].includes(d.key)&&(r.value=!0,d.preventDefault(),setTimeout(()=>setTimeout(()=>b(d))))}const P=D(()=>O({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":V.value,onKeydown:b},e.activatorProps));return Z(()=>{const d=pe.filterProps(e);return f(pe,O({ref:o,class:["v-menu",e.class],style:e.style},d,{modelValue:r.value,"onUpdate:modelValue":u=>r.value=u,absolute:!0,activatorProps:P.value,"onClick:outside":R,onKeydown:c},s),{activator:n.activator,default:function(){for(var u=arguments.length,h=new Array(u),g=0;g<u;g++)h[g]=arguments[g];return f(Pe,{root:"VMenu"},{default:()=>{var E;return[(E=n.default)==null?void 0:E.call(n,...h)]}})}})}),Se({id:V,ΨopenChildren:y},o)}}),ot=z({renderless:Boolean,...ke()},"VVirtualScrollItem"),ut=Q()({name:"VVirtualScrollItem",inheritAttrs:!1,props:ot(),emits:{"update:height":e=>!0},setup(e,v){let{attrs:n,emit:r,slots:s}=v;const{resizeRef:m,contentRect:V}=Te(void 0,"border");B(()=>{var o;return(o=V.value)==null?void 0:o.height},o=>{o!=null&&r("update:height",o)}),Z(()=>{var o,l;return e.renderless?f(W,null,[(o=s.default)==null?void 0:o.call(s,{itemRef:m})]):f("div",O({ref:m,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(l=s.default)==null?void 0:l.call(s)])})}}),st=-1,rt=1,ae=100,it=z({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function ct(e,v){const n=Fe(),r=M(0);de(()=>{r.value=parseFloat(e.itemHeight||0)});const s=M(0),m=M(Math.ceil((parseInt(e.height)||n.height.value)/(r.value||16))||1),V=M(0),o=M(0),l=U(),y=U();let A=0;const{resizeRef:R,contentRect:c}=Te();de(()=>{R.value=l.value});const b=D(()=>{var t;return l.value===document.documentElement?n.height.value:((t=c.value)==null?void 0:t.height)||parseInt(e.height)||0}),P=D(()=>!!(l.value&&y.value&&b.value&&r.value));let d=Array.from({length:v.value.length}),u=Array.from({length:v.value.length});const h=M(0);let g=-1;function E(t){return d[t]||r.value}const k=Me(()=>{const t=performance.now();u[0]=0;const i=v.value.length;for(let T=1;T<=i-1;T++)u[T]=(u[T-1]||0)+E(T-1);h.value=Math.max(h.value,performance.now()-t)},h),$=B(P,t=>{t&&($(),A=y.value.offsetTop,k.immediate(),L(),~g&&ye(()=>{we&&window.requestAnimationFrame(()=>{G(g),g=-1})}))});B(b,(t,i)=>{i&&L()}),Ve(()=>{k.clear()});function ee(t,i){const T=d[t],C=r.value;r.value=C?Math.min(r.value,i):i,(T!==i||C!==r.value)&&(d[t]=i,k())}function x(t){return t=ne(t,0,v.value.length-1),u[t]||0}function X(t){return dt(u,t)}let H=0,K=0,j=0;function te(){if(!l.value||!y.value)return;const t=l.value.scrollTop,i=performance.now();i-j>500?(K=Math.sign(t-H),A=y.value.offsetTop):K=t-H,H=t,j=i,L()}function N(){!l.value||!y.value||(K=0,j=0,L())}let Y=-1;function L(){cancelAnimationFrame(Y),Y=requestAnimationFrame(le)}function le(){if(!l.value||!b.value)return;const t=H-A,i=Math.sign(K),T=Math.max(0,t-ae),C=ne(X(T),0,v.value.length),p=t+b.value+ae,w=ne(X(p)+1,C+1,v.value.length);if((i!==st||C<s.value)&&(i!==rt||w>m.value)){const S=x(s.value)-x(C),F=x(w)-x(m.value);Math.max(S,F)>ae?(s.value=C,m.value=w):(C<=0&&(s.value=C),w>=v.value.length&&(m.value=w))}V.value=x(s.value),o.value=x(v.value.length)-x(m.value)}function G(t){const i=x(t);!l.value||t&&!i?g=t:l.value.scrollTop=i}const a=D(()=>v.value.slice(s.value,m.value).map((t,i)=>({raw:t,index:i+s.value})));return B(v,()=>{d=Array.from({length:v.value.length}),u=Array.from({length:v.value.length}),k.immediate(),L()},{deep:!0}),{containerRef:l,markerRef:y,computedItems:a,paddingTop:V,paddingBottom:o,scrollToIndex:G,handleScroll:te,handleScrollend:N,handleItemResize:ee}}function dt(e,v){let n=e.length-1,r=0,s=0,m=null,V=-1;if(e[n]<v)return n;for(;r<=n;)if(s=r+n>>1,m=e[s],m>v)n=s-1;else if(m<v)V=s,r=s+1;else return m===v?s:r;return V}const ft=z({items:{type:Array,default:()=>[]},renderless:Boolean,...it(),...ke(),...Ze()},"VVirtualScroll"),vt=Q()({name:"VVirtualScroll",props:ft(),setup(e,v){let{slots:n}=v;const r=Oe("VVirtualScroll"),{dimensionStyles:s}=et(e),{containerRef:m,markerRef:V,handleScroll:o,handleScrollend:l,handleItemResize:y,scrollToIndex:A,paddingTop:R,paddingBottom:c,computedItems:b}=ct(e,Be(e,"items"));return Le(()=>e.renderless,()=>{function P(){var h,g;const u=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";m.value===document.documentElement?(document[u]("scroll",o,{passive:!0}),document[u]("scrollend",l)):((h=m.value)==null||h[u]("scroll",o,{passive:!0}),(g=m.value)==null||g[u]("scrollend",l))}_e(()=>{m.value=Je(r.vnode.el,!0),P(!0)}),Ve(P)}),Z(()=>{const P=b.value.map(d=>f(ut,{key:d.index,renderless:e.renderless,"onUpdate:height":u=>y(d.index,u)},{default:u=>{var h;return(h=n.default)==null?void 0:h.call(n,{item:d.raw,index:d.index,...u})}}));return e.renderless?f(W,null,[f("div",{ref:V,class:"v-virtual-scroll__spacer",style:{paddingTop:J(R.value)}},null),P,f("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:J(c.value)}},null)]):f("div",{ref:m,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:l,style:[s.value,e.style]},[f("div",{ref:V,class:"v-virtual-scroll__container",style:{paddingTop:J(R.value),paddingBottom:J(c.value)}},[P])])}),{scrollToIndex:A}}});function mt(e,v){const n=M(!1);let r;function s(o){cancelAnimationFrame(r),n.value=!0,r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{n.value=!1})})}async function m(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(n.value){const l=B(n,()=>{l(),o()})}else o()})}async function V(o){var A,R;if(o.key==="Tab"&&((A=v.value)==null||A.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const l=(R=e.value)==null?void 0:R.$el;if(!l)return;(o.key==="Home"||o.key==="End")&&l.scrollTo({top:o.key==="Home"?0:l.scrollHeight,behavior:"smooth"}),await m();const y=l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const c=l.getBoundingClientRect().top;for(const b of y)if(b.getBoundingClientRect().top>=c){b.focus();break}}else{const c=l.getBoundingClientRect().bottom;for(const b of[...y].reverse())if(b.getBoundingClientRect().bottom<=c){b.focus();break}}}return{onListScroll:s,onListKeydown:V}}const pt=z({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:Ue,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...$e({itemChildren:!1})},"Select"),ht=z({...pt(),...ge(Ie({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Xe({transition:{component:be}})},"VSelect"),It=Q()({name:"VSelect",props:ht(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,v){let{slots:n}=v;const{t:r}=He(),s=U(),m=U(),V=U(),o=oe(e,"menu"),l=D({get:()=>o.value,set:a=>{var t;o.value&&!a&&((t=m.value)!=null&&t.ΨopenChildren)||(o.value=a)}}),{items:y,transformIn:A,transformOut:R}=je(e),c=oe(e,"modelValue",[],a=>A(a===null?[null]:qe(a)),a=>{const t=R(a);return e.multiple?t:t[0]??null}),b=D(()=>typeof e.counterValue=="function"?e.counterValue(c.value):typeof e.counterValue=="number"?e.counterValue:c.value.length),P=ze(),d=D(()=>c.value.map(a=>a.value)),u=M(!1),h=D(()=>l.value?e.closeText:e.openText);let g="",E;const k=D(()=>e.hideSelected?y.value.filter(a=>!c.value.some(t=>t===a)):y.value),$=D(()=>e.hideNoData&&!k.value.length||e.readonly||(P==null?void 0:P.isReadonly.value)),ee=D(()=>{var a;return{...e.menuProps,activatorProps:{...((a=e.menuProps)==null?void 0:a.activatorProps)||{},"aria-haspopup":"listbox"}}}),x=U(),{onListScroll:X,onListKeydown:H}=mt(x,s);function K(a){e.openOnClear&&(l.value=!0)}function j(){$.value||(l.value=!l.value)}function te(a){var p,w;if(!a.key||e.readonly||P!=null&&P.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(l.value=!0),["Escape","Tab"].includes(a.key)&&(l.value=!1),a.key==="Home"?(p=x.value)==null||p.focus("first"):a.key==="End"&&((w=x.value)==null||w.focus("last"));const t=1e3;function i(S){const F=S.key.length===1,I=!S.ctrlKey&&!S.metaKey&&!S.altKey;return F&&I}if(e.multiple||!i(a))return;const T=performance.now();T-E>t&&(g=""),g+=a.key.toLowerCase(),E=T;const C=y.value.find(S=>S.title.toLowerCase().startsWith(g));C!==void 0&&(c.value=[C])}function N(a){if(e.multiple){const t=c.value.findIndex(i=>e.valueComparator(i.value,a.value));if(t===-1)c.value=[...c.value,a];else{const i=[...c.value];i.splice(t,1),c.value=i}}else c.value=[a],l.value=!1}function Y(a){var t;(t=x.value)!=null&&t.$el.contains(a.relatedTarget)||(l.value=!1)}function L(){var a;u.value&&((a=s.value)==null||a.focus())}function le(a){u.value=!0}function G(a){if(a==null)c.value=[];else if(fe(s.value,":autofill")||fe(s.value,":-webkit-autofill")){const t=y.value.find(i=>i.title===a);t&&N(t)}else s.value&&(s.value.value="")}return B(l,()=>{if(!e.hideSelected&&l.value&&c.value.length){const a=k.value.findIndex(t=>c.value.some(i=>e.valueComparator(i.value,t.value)));we&&window.requestAnimationFrame(()=>{var t;a>=0&&((t=V.value)==null||t.scrollToIndex(a))})}}),B(k,(a,t)=>{u.value&&(!a.length&&e.hideNoData&&(l.value=!1),!t.length&&a.length&&(l.value=!0))}),Z(()=>{const a=!!(e.chips||n.chip),t=!!(!e.hideNoData||k.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),i=c.value.length>0,T=re.filterProps(e),C=i||!u.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return f(re,O({ref:s},T,{modelValue:c.value.map(p=>p.props.value).join(", "),"onUpdate:modelValue":G,focused:u.value,"onUpdate:focused":p=>u.value=p,validationValue:c.externalValue,counterValue:b.value,dirty:i,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":c.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:C,"onClick:clear":K,"onMousedown:control":j,onBlur:Y,onKeydown:te,"aria-label":r(h.value),title:r(h.value)}),{...n,default:()=>f(W,null,[f(at,O({ref:m,modelValue:l.value,"onUpdate:modelValue":p=>l.value=p,activator:"parent",contentClass:"v-select__content",disabled:$.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:L},ee.value),{default:()=>[t&&f(We,{ref:x,selected:d.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:p=>p.preventDefault(),onKeydown:H,onFocusin:le,onScrollPassive:X,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},{default:()=>{var p,w,S;return[(p=n["prepend-item"])==null?void 0:p.call(n),!k.value.length&&!e.hideNoData&&(((w=n["no-data"])==null?void 0:w.call(n))??f(ve,{title:r(e.noDataText)},null)),f(vt,{ref:V,renderless:!0,items:k.value},{default:F=>{var se;let{item:I,index:q,itemRef:_}=F;const ue=O(I.props,{ref:_,key:q,onClick:()=>N(I)});return((se=n.item)==null?void 0:se.call(n,{item:I,index:q,props:ue}))??f(ve,O(ue,{role:"option"}),{prepend:xe=>{let{isSelected:Ce}=xe;return f(W,null,[e.multiple&&!e.hideSelected?f(tt,{key:I.value,modelValue:Ce,ripple:!1,tabindex:"-1"},null):void 0,I.props.prependAvatar&&f(Ye,{image:I.props.prependAvatar},null),I.props.prependIcon&&f(he,{icon:I.props.prependIcon},null)])}})}}),(S=n["append-item"])==null?void 0:S.call(n)]}})]}),c.value.map((p,w)=>{function S(_){_.stopPropagation(),_.preventDefault(),N(p)}const F={"onClick:close":S,onMousedown(_){_.preventDefault(),_.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},I=a?!!n.chip:!!n.selection,q=I?Ke(a?n.chip({item:p,index:w,props:F}):n.selection({item:p,index:w})):void 0;if(!(I&&!q))return f("div",{key:p.value,class:"v-select__selection"},[a?n.chip?f(Pe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:p.title}}},{default:()=>[q]}):f(lt,O({key:"chip",closable:e.closableChips,size:"small",text:p.title,disabled:p.props.disabled},F),null):q??f("span",{class:"v-select__selection-text"},[p.title,e.multiple&&w<c.value.length-1&&f("span",{class:"v-select__selection-comma"},[Ne(",")])])])})]),"append-inner":function(){var F;for(var p=arguments.length,w=new Array(p),S=0;S<p;S++)w[S]=arguments[S];return f(W,null,[(F=n["append-inner"])==null?void 0:F.call(n,...w),e.menuIcon?f(he,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Se({isFocused:u,menu:l,select:N},s)}});export{It as V,at as a,vt as b,pt as m,mt as u};
