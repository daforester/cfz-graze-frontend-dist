import{m as Pe,V as te}from"./VTextField-faed3f48.js";import{p as H,R as fe,d as Y,u as Q,S as Ce,c as I,r as U,ae as Ie,s as z,a0 as Te,w as q,m as _,f as i,X as De,aw as le,aI as Re,aJ as ne,F as N,h as Ee,a7 as Ae,ac as Be,a as ae,af as Me,t as Le,e as Fe,L as X,o as Oe,aK as Ke,aa as _e,au as Ue,ab as He,at as oe,av as $e,x as Ne,ap as ze,aD as ue}from"./index-11194c4b.js";import{f as me,u as qe}from"./forwardRefs-3b525372.js";import{m as je,e as We,V as Je,a as se}from"./VList-fa3ff560.js";import{m as Xe}from"./VAvatar-e05b6784.js";import{m as Ye,c as pe,e as ie,a as re,g as Ge}from"./SaveButton.vue_vue_type_script_setup_true_lang-4d8f433f.js";import{u as Qe}from"./scopeId-8366a0a7.js";import{u as G,A as he,m as ge,s as Ze,x as et,V as ce}from"./VContainer-914ec839.js";import{u as ye}from"./VBtn-22fc051a.js";import{a as tt}from"./VCheckbox-721fec0c.js";import{a as lt}from"./VChip-fdd8d311.js";const nt=H({id:String,...fe(Ye({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:pe}}),["absolute"])},"VMenu"),at=Y()({name:"VMenu",props:nt(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:t}=p;const u=Q(e,"modelValue"),{scopeId:c}=Qe(),f=Ce(),h=I(()=>e.id||`v-menu-${f}`),n=U(),l=Ie(ie,null),V=z(0);Te(ie,{register(){++V.value},unregister(){--V.value},closeParents(){setTimeout(()=>{V.value||(u.value=!1,l==null||l.closeParents())},40)}});async function P(r){var x,D,E;const v=r.relatedTarget,S=r.target;await De(),u.value&&v!==S&&((x=n.value)!=null&&x.contentEl)&&((D=n.value)!=null&&D.globalTop)&&![document,n.value.contentEl].includes(S)&&!n.value.contentEl.contains(S)&&((E=le(n.value.contentEl)[0])==null||E.focus())}q(u,r=>{r?(l==null||l.register(),document.addEventListener("focusin",P,{once:!0})):(l==null||l.unregister(),document.removeEventListener("focusin",P))});function C(){l==null||l.closeParents()}function o(r){var v,S,x;e.disabled||r.key==="Tab"&&(Re(le((v=n.value)==null?void 0:v.contentEl,!1),r.shiftKey?"prev":"next",E=>E.tabIndex>=0)||(u.value=!1,(x=(S=n.value)==null?void 0:S.activatorEl)==null||x.focus()))}function m(r){var S;if(e.disabled)return;const v=(S=n.value)==null?void 0:S.contentEl;v&&u.value?r.key==="ArrowDown"?(r.preventDefault(),ne(v,"next")):r.key==="ArrowUp"&&(r.preventDefault(),ne(v,"prev")):["ArrowDown","ArrowUp"].includes(r.key)&&(u.value=!0,r.preventDefault(),setTimeout(()=>setTimeout(()=>m(r))))}const w=I(()=>_({"aria-haspopup":"menu","aria-expanded":String(u.value),"aria-owns":h.value,onKeydown:m},e.activatorProps));return G(()=>{const[r]=re.filterProps(e);return i(re,_({ref:n,class:["v-menu",e.class],style:e.style},r,{modelValue:u.value,"onUpdate:modelValue":v=>u.value=v,absolute:!0,activatorProps:w.value,"onClick:outside":C,onKeydown:o},c),{activator:t.activator,default:function(){for(var v=arguments.length,S=new Array(v),x=0;x<v;x++)S[x]=arguments[x];return i(he,{root:"VMenu"},{default:()=>{var D;return[(D=t.default)==null?void 0:D.call(t,...S)]}})}})}),me({id:h,ΨopenChildren:V},n)}});const ot=H({renderless:Boolean,...ge()},"VVirtualScrollItem"),ut=Y()({name:"VVirtualScrollItem",inheritAttrs:!1,props:ot(),emits:{"update:height":e=>!0},setup(e,p){let{attrs:t,emit:u,slots:c}=p;const{resizeRef:f,contentRect:h}=ye(void 0,"border");q(()=>{var n;return(n=h.value)==null?void 0:n.height},n=>{n!=null&&u("update:height",n)}),G(()=>{var n,l;return e.renderless?i(N,null,[(n=c.default)==null?void 0:n.call(c,{itemRef:f})]):i("div",_({ref:f,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(l=c.default)==null?void 0:l.call(c)])})}}),de=-1,ve=1,st=H({itemHeight:{type:[Number,String],default:48}},"virtual");function it(e,p,t){const u=z(0),c=z(e.itemHeight),f=I({get:()=>parseInt(c.value??0,10),set(g){c.value=g}}),h=U(),{resizeRef:n,contentRect:l}=ye();Ee(()=>{n.value=h.value});const V=Ae(),P=new Map;let C=Array.from({length:p.value.length});const o=I(()=>{const g=(!l.value||h.value===document.documentElement?V.height.value:l.value.height)-((t==null?void 0:t.value)??0);return Math.ceil(g/f.value*1.7+1)});function m(g,y){f.value=Math.max(f.value,y),C[g]=y,P.set(p.value[g],y)}function w(g){return C.slice(0,g).reduce((y,T)=>y+(T||f.value),0)}function r(g){const y=p.value.length;let T=0,L=0;for(;L<g&&T<y;)L+=C[T++]||f.value;return T-1}let v=0;function S(){if(!h.value||!l.value)return;const g=l.value.height-56,y=h.value.scrollTop,T=y<v?de:ve,L=r(y+g/2),j=Math.round(o.value/3),O=L-j,W=u.value+j*2-1;T===de&&L<=W?u.value=ae(O,0,p.value.length):T===ve&&L>=W&&(u.value=ae(O,0,p.value.length-o.value)),v=y}function x(g){if(!h.value)return;const y=w(g);h.value.scrollTop=y}const D=I(()=>Math.min(p.value.length,u.value+o.value)),E=I(()=>p.value.slice(u.value,D.value).map((g,y)=>({raw:g,index:y+u.value}))),$=I(()=>w(u.value)),F=I(()=>w(p.value.length)-w(D.value));return q(()=>p.value.length,()=>{C=Be(p.value.length).map(()=>f.value),P.forEach((g,y)=>{const T=p.value.indexOf(y);T===-1?P.delete(y):C[T]=g})}),{containerRef:h,computedItems:E,itemHeight:f,paddingTop:$,paddingBottom:F,scrollToIndex:x,handleScroll:S,handleItemResize:m}}const rt=H({items:{type:Array,default:()=>[]},renderless:Boolean,...st(),...ge(),...Ze()},"VVirtualScroll"),ct=Y()({name:"VVirtualScroll",props:rt(),setup(e,p){let{slots:t}=p;const u=Me("VVirtualScroll"),{dimensionStyles:c}=et(e),{containerRef:f,handleScroll:h,handleItemResize:n,scrollToIndex:l,paddingTop:V,paddingBottom:P,computedItems:C}=it(e,Le(e,"items"));return Fe(()=>e.renderless,()=>{Oe(()=>{var o;f.value=Ge(u.vnode.el,!0),(o=f.value)==null||o.addEventListener("scroll",h)}),Ke(()=>{var o;(o=f.value)==null||o.removeEventListener("scroll",h)})}),G(()=>{const o=C.value.map(m=>i(ut,{key:m.index,renderless:e.renderless,"onUpdate:height":w=>n(m.index,w)},{default:w=>{var r;return(r=t.default)==null?void 0:r.call(t,{item:m.raw,index:m.index,...w})}}));return e.renderless?i(N,null,[i("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:X(V.value)}},null),o,i("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:X(P.value)}},null)]):i("div",{ref:f,class:["v-virtual-scroll",e.class],onScroll:h,style:[c.value,e.style]},[i("div",{class:"v-virtual-scroll__container",style:{paddingTop:X(V.value),paddingBottom:X(P.value)}},[o])])}),{scrollToIndex:l}}});function dt(e,p){const t=z(!1);let u;function c(n){cancelAnimationFrame(u),t.value=!0,u=requestAnimationFrame(()=>{u=requestAnimationFrame(()=>{t.value=!1})})}async function f(){await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>{if(t.value){const l=q(t,()=>{l(),n()})}else n()})}async function h(n){var P,C;if(n.key==="Tab"&&((P=p.value)==null||P.focus()),!["PageDown","PageUp","Home","End"].includes(n.key))return;const l=(C=e.value)==null?void 0:C.$el;if(!l)return;(n.key==="Home"||n.key==="End")&&l.scrollTo({top:n.key==="Home"?0:l.scrollHeight,behavior:"smooth"}),await f();const V=l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(n.key==="PageDown"||n.key==="Home"){const o=l.getBoundingClientRect().top;for(const m of V)if(m.getBoundingClientRect().top>=o){m.focus();break}}else{const o=l.getBoundingClientRect().bottom;for(const m of[...V].reverse())if(m.getBoundingClientRect().bottom<=o){m.focus();break}}}return{onListScroll:c,onListKeydown:h}}const vt=H({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:_e,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:Ue},itemColor:String,...je({itemChildren:!1})},"Select"),ft=H({...vt(),...fe(Pe({modelValue:null,role:"button"}),["validationValue","dirty","appendInnerIcon"]),...Xe({transition:{component:pe}})},"VSelect"),Pt=Y()({name:"VSelect",props:ft(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,p){let{slots:t}=p;const{t:u}=He(),c=U(),f=U(),h=U(),n=Q(e,"menu"),l=I({get:()=>n.value,set:a=>{var s;n.value&&!a&&((s=f.value)!=null&&s.ΨopenChildren)||(n.value=a)}}),{items:V,transformIn:P,transformOut:C}=We(e),o=Q(e,"modelValue",[],a=>P(a===null?[null]:ze(a)),a=>{const s=C(a);return e.multiple?s:s[0]??null}),m=qe(),w=I(()=>o.value.map(a=>V.value.find(s=>{const b=oe(s.raw,e.itemValue),K=oe(a.raw,e.itemValue);return b===void 0||K===void 0?!1:e.returnObject?e.valueComparator(b,K):e.valueComparator(s.value,a.value)})||a)),r=I(()=>w.value.map(a=>a.props.value)),v=z(!1),S=I(()=>l.value?e.closeText:e.openText);let x="",D;const E=I(()=>e.hideSelected?V.value.filter(a=>!w.value.some(s=>s===a)):V.value),$=I(()=>e.hideNoData&&!V.value.length||e.readonly||(m==null?void 0:m.isReadonly.value)),F=U(),{onListScroll:g,onListKeydown:y}=dt(F,c);function T(a){e.openOnClear&&(l.value=!0)}function L(){$.value||(l.value=!l.value)}function j(a){var d,R;if(!a.key||e.readonly||m!=null&&m.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(l.value=!0),["Escape","Tab"].includes(a.key)&&(l.value=!1),a.key==="Home"?(d=F.value)==null||d.focus("first"):a.key==="End"&&((R=F.value)==null||R.focus("last"));const s=1e3;function b(k){const M=k.key.length===1,A=!k.ctrlKey&&!k.metaKey&&!k.altKey;return M&&A}if(e.multiple||!b(a))return;const K=performance.now();K-D>s&&(x=""),x+=a.key.toLowerCase(),D=K;const J=V.value.find(k=>k.title.toLowerCase().startsWith(x));J!==void 0&&(o.value=[J])}function O(a){if(e.multiple){const s=r.value.findIndex(b=>e.valueComparator(b,a.value));if(s===-1)o.value=[...o.value,a];else{const b=[...o.value];b.splice(s,1),o.value=b}}else o.value=[a],l.value=!1}function W(a){var s;(s=F.value)!=null&&s.$el.contains(a.relatedTarget)||(l.value=!1)}function Ve(){var a;v.value&&((a=c.value)==null||a.focus())}function we(a){v.value=!0}function Se(a){if(a==null)o.value=[];else if(ue(c.value,":autofill")||ue(c.value,":-webkit-autofill")){const s=V.value.find(b=>b.title===a);s&&O(s)}else c.value&&(c.value.value="")}return q(l,()=>{if(!e.hideSelected&&l.value&&w.value.length){const a=E.value.findIndex(s=>w.value.some(b=>s.value===b.value));$e&&window.requestAnimationFrame(()=>{var s;a>=0&&((s=h.value)==null||s.scrollToIndex(a))})}}),G(()=>{const a=!!(e.chips||t.chip),s=!!(!e.hideNoData||E.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),b=o.value.length>0,[K]=te.filterProps(e),J=b||!v.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return i(te,_({ref:c},K,{modelValue:o.value.map(d=>d.props.value).join(", "),"onUpdate:modelValue":Se,focused:v.value,"onUpdate:focused":d=>v.value=d,validationValue:o.externalValue,dirty:b,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":o.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:J,"onClick:clear":T,"onMousedown:control":L,onBlur:W,onKeydown:j,"aria-label":u(S.value),title:u(S.value)}),{...t,default:()=>i(N,null,[i(at,_({ref:f,modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,activator:"parent",contentClass:"v-select__content",disabled:$.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ve},e.menuProps),{default:()=>[s&&i(Je,{ref:F,selected:r.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:d=>d.preventDefault(),onKeydown:y,onFocusin:we,onScrollPassive:g,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var d,R,k;return[(d=t["prepend-item"])==null?void 0:d.call(t),!E.value.length&&!e.hideNoData&&(((R=t["no-data"])==null?void 0:R.call(t))??i(se,{title:u(e.noDataText)},null)),i(ct,{ref:h,renderless:!0,items:E.value},{default:M=>{var ee;let{item:A,index:B,itemRef:xe}=M;const Z=_(A.props,{ref:xe,key:B,onClick:()=>O(A)});return((ee=t.item)==null?void 0:ee.call(t,{item:A,index:B,props:Z}))??i(se,Z,{prepend:be=>{let{isSelected:ke}=be;return i(N,null,[e.multiple&&!e.hideSelected?i(tt,{key:A.value,modelValue:ke,ripple:!1,tabindex:"-1"},null):void 0,A.props.prependIcon&&i(ce,{icon:A.props.prependIcon},null)])}})}}),(k=t["append-item"])==null?void 0:k.call(t)]}})]}),w.value.map((d,R)=>{var A;function k(B){B.stopPropagation(),B.preventDefault(),O(d)}const M={"onClick:close":k,onMousedown(B){B.preventDefault(),B.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return i("div",{key:d.value,class:"v-select__selection"},[a?t.chip?i(he,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:d.title}}},{default:()=>{var B;return[(B=t.chip)==null?void 0:B.call(t,{item:d,index:R,props:M})]}}):i(lt,_({key:"chip",closable:e.closableChips,size:"small",text:d.title},M),null):((A=t.selection)==null?void 0:A.call(t,{item:d,index:R}))??i("span",{class:"v-select__selection-text"},[d.title,e.multiple&&R<w.value.length-1&&i("span",{class:"v-select__selection-comma"},[Ne(",")])])])})]),"append-inner":function(){var M;for(var d=arguments.length,R=new Array(d),k=0;k<d;k++)R[k]=arguments[k];return i(N,null,[(M=t["append-inner"])==null?void 0:M.call(t,...R),e.menuIcon?i(ce,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),me({isFocused:v,menu:l,select:O},c)}}),Ct=e=>{window.isSecureContext&&navigator.clipboard&&navigator.clipboard.writeText(e)};export{Pt as V,at as a,ct as b,Ct as c,vt as m,dt as u};