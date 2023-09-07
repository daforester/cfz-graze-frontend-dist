import{e as Pe,V as te}from"./VTextField-a6eabbb5.js";import{p as U,aq as fe,n as J,u as X,a as Ce,e as I,r as K,i as Ie,s as z,c as Te,w as N,x as _,v as s,E as De,as as le,aG as Re,aH as ne,H as $,y as Ee,D as Ae,aj as Be,m as ae,b as Me,t as Le,q as Oe,j as Y,k as Fe,aI as He,af as _e,ap as Ke,ah as Ue,ao as oe,ar as qe,P as $e,ak as ze,aD as ue}from"./index-eaf01d62.js";import{f as me,u as Ne}from"./forwardRefs-a43295a4.js";import{m as je,e as We,V as Ge,a as ie}from"./VList-3dc02ca9.js";import{m as Ye}from"./VAvatar-b6b4172e.js";import{a as Je,b as pe,e as se,c as re,g as Qe}from"./SaveButton.vue_vue_type_script_setup_true_lang-2c9f3665.js";import{u as Xe}from"./scopeId-de1a1300.js";import{u as Q,z as he,m as ge,q as Ze,v as et,V as ce}from"./VContainer-365f3b52.js";import{u as ye}from"./VBtn-b8d52f73.js";import{a as tt}from"./VCheckbox-13ac0b04.js";import{a as lt}from"./VChip-79c291fc.js";const nt=U({id:String,...fe(Je({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:pe}}),["absolute"])},"VMenu"),at=J()({name:"VMenu",props:nt(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:t}=p;const u=X(e,"modelValue"),{scopeId:c}=Xe(),f=Ce(),h=I(()=>e.id||`v-menu-${f}`),n=K(),l=Ie(se,null),V=z(0);Te(se,{register(){++V.value},unregister(){--V.value},closeParents(){setTimeout(()=>{V.value||(u.value=!1,l==null||l.closeParents())},40)}});async function P(r){var b,D,E;const v=r.relatedTarget,S=r.target;await De(),u.value&&v!==S&&((b=n.value)!=null&&b.contentEl)&&((D=n.value)!=null&&D.globalTop)&&![document,n.value.contentEl].includes(S)&&!n.value.contentEl.contains(S)&&((E=le(n.value.contentEl)[0])==null||E.focus())}N(u,r=>{r?(l==null||l.register(),document.addEventListener("focusin",P,{once:!0})):(l==null||l.unregister(),document.removeEventListener("focusin",P))});function C(){l==null||l.closeParents()}function o(r){var v,S,b;e.disabled||r.key==="Tab"&&(Re(le((v=n.value)==null?void 0:v.contentEl,!1),r.shiftKey?"prev":"next",E=>E.tabIndex>=0)||(u.value=!1,(b=(S=n.value)==null?void 0:S.activatorEl)==null||b.focus()))}function m(r){var S;if(e.disabled)return;const v=(S=n.value)==null?void 0:S.contentEl;v&&u.value?r.key==="ArrowDown"?(r.preventDefault(),ne(v,"next")):r.key==="ArrowUp"&&(r.preventDefault(),ne(v,"prev")):["ArrowDown","ArrowUp"].includes(r.key)&&(u.value=!0,r.preventDefault(),setTimeout(()=>setTimeout(()=>m(r))))}const w=I(()=>_({"aria-haspopup":"menu","aria-expanded":String(u.value),"aria-owns":h.value,onKeydown:m},e.activatorProps));return Q(()=>{const[r]=re.filterProps(e);return s(re,_({ref:n,class:["v-menu",e.class],style:e.style},r,{modelValue:u.value,"onUpdate:modelValue":v=>u.value=v,absolute:!0,activatorProps:w.value,"onClick:outside":C,onKeydown:o},c),{activator:t.activator,default:function(){for(var v=arguments.length,S=new Array(v),b=0;b<v;b++)S[b]=arguments[b];return s(he,{root:"VMenu"},{default:()=>{var D;return[(D=t.default)==null?void 0:D.call(t,...S)]}})}})}),me({id:h,ΨopenChildren:V},n)}});const ot=U({renderless:Boolean,...ge()},"VVirtualScrollItem"),ut=J()({name:"VVirtualScrollItem",inheritAttrs:!1,props:ot(),emits:{"update:height":e=>!0},setup(e,p){let{attrs:t,emit:u,slots:c}=p;const{resizeRef:f,contentRect:h}=ye(void 0,"border");N(()=>{var n;return(n=h.value)==null?void 0:n.height},n=>{n!=null&&u("update:height",n)}),Q(()=>{var n,l;return e.renderless?s($,null,[(n=c.default)==null?void 0:n.call(c,{itemRef:f})]):s("div",_({ref:f,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(l=c.default)==null?void 0:l.call(c)])})}}),de=-1,ve=1,it=U({itemHeight:{type:[Number,String],default:48}},"virtual");function st(e,p,t){const u=z(0),c=z(e.itemHeight),f=I({get:()=>parseInt(c.value??0,10),set(g){c.value=g}}),h=K(),{resizeRef:n,contentRect:l}=ye();Ee(()=>{n.value=h.value});const V=Ae(),P=new Map;let C=Array.from({length:p.value.length});const o=I(()=>{const g=(!l.value||h.value===document.documentElement?V.height.value:l.value.height)-((t==null?void 0:t.value)??0);return Math.ceil(g/f.value*1.7+1)});function m(g,y){f.value=Math.max(f.value,y),C[g]=y,P.set(p.value[g],y)}function w(g){return C.slice(0,g).reduce((y,T)=>y+(T||f.value),0)}function r(g){const y=p.value.length;let T=0,L=0;for(;L<g&&T<y;)L+=C[T++]||f.value;return T-1}let v=0;function S(){if(!h.value||!l.value)return;const g=l.value.height-56,y=h.value.scrollTop,T=y<v?de:ve,L=r(y+g/2),j=Math.round(o.value/3),F=L-j,W=u.value+j*2-1;T===de&&L<=W?u.value=ae(F,0,p.value.length):T===ve&&L>=W&&(u.value=ae(F,0,p.value.length-o.value)),v=y}function b(g){if(!h.value)return;const y=w(g);h.value.scrollTop=y}const D=I(()=>Math.min(p.value.length,u.value+o.value)),E=I(()=>p.value.slice(u.value,D.value).map((g,y)=>({raw:g,index:y+u.value}))),q=I(()=>w(u.value)),O=I(()=>w(p.value.length)-w(D.value));return N(()=>p.value.length,()=>{C=Be(p.value.length).map(()=>f.value),P.forEach((g,y)=>{const T=p.value.indexOf(y);T===-1?P.delete(y):C[T]=g})}),{containerRef:h,computedItems:E,itemHeight:f,paddingTop:q,paddingBottom:O,scrollToIndex:b,handleScroll:S,handleItemResize:m}}const rt=U({items:{type:Array,default:()=>[]},renderless:Boolean,...it(),...ge(),...Ze()},"VVirtualScroll"),ct=J()({name:"VVirtualScroll",props:rt(),setup(e,p){let{slots:t}=p;const u=Me("VVirtualScroll"),{dimensionStyles:c}=et(e),{containerRef:f,handleScroll:h,handleItemResize:n,scrollToIndex:l,paddingTop:V,paddingBottom:P,computedItems:C}=st(e,Le(e,"items"));return Oe(()=>e.renderless,()=>{Fe(()=>{var o;f.value=Qe(u.vnode.el,!0),(o=f.value)==null||o.addEventListener("scroll",h)}),He(()=>{var o;(o=f.value)==null||o.removeEventListener("scroll",h)})}),Q(()=>{const o=C.value.map(m=>s(ut,{key:m.index,renderless:e.renderless,"onUpdate:height":w=>n(m.index,w)},{default:w=>{var r;return(r=t.default)==null?void 0:r.call(t,{item:m.raw,index:m.index,...w})}}));return e.renderless?s($,null,[s("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:Y(V.value)}},null),o,s("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:Y(P.value)}},null)]):s("div",{ref:f,class:["v-virtual-scroll",e.class],onScroll:h,style:[c.value,e.style]},[s("div",{class:"v-virtual-scroll__container",style:{paddingTop:Y(V.value),paddingBottom:Y(P.value)}},[o])])}),{scrollToIndex:l}}});function dt(e,p){const t=z(!1);let u;function c(n){cancelAnimationFrame(u),t.value=!0,u=requestAnimationFrame(()=>{u=requestAnimationFrame(()=>{t.value=!1})})}async function f(){await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>{if(t.value){const l=N(t,()=>{l(),n()})}else n()})}async function h(n){var P,C;if(n.key==="Tab"&&((P=p.value)==null||P.focus()),!["PageDown","PageUp","Home","End"].includes(n.key))return;const l=(C=e.value)==null?void 0:C.$el;if(!l)return;(n.key==="Home"||n.key==="End")&&l.scrollTo({top:n.key==="Home"?0:l.scrollHeight,behavior:"smooth"}),await f();const V=l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(n.key==="PageDown"||n.key==="Home"){const o=l.getBoundingClientRect().top;for(const m of V)if(m.getBoundingClientRect().top>=o){m.focus();break}}else{const o=l.getBoundingClientRect().bottom;for(const m of[...V].reverse())if(m.getBoundingClientRect().bottom<=o){m.focus();break}}}return{onListScroll:c,onListKeydown:h}}const vt=U({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:_e,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:Ke},itemColor:String,...je({itemChildren:!1})},"Select"),ft=U({...vt(),...fe(Pe({modelValue:null,role:"button"}),["validationValue","dirty","appendInnerIcon"]),...Ye({transition:{component:pe}})},"VSelect"),Pt=J()({name:"VSelect",props:ft(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,p){let{slots:t}=p;const{t:u}=Ue(),c=K(),f=K(),h=K(),n=X(e,"menu"),l=I({get:()=>n.value,set:a=>{var i;n.value&&!a&&((i=f.value)!=null&&i.ΨopenChildren)||(n.value=a)}}),{items:V,transformIn:P,transformOut:C}=We(e),o=X(e,"modelValue",[],a=>P(a===null?[null]:ze(a)),a=>{const i=C(a);return e.multiple?i:i[0]??null}),m=Ne(),w=I(()=>o.value.map(a=>V.value.find(i=>{const k=oe(i.raw,e.itemValue),H=oe(a.raw,e.itemValue);return k===void 0||H===void 0?!1:e.returnObject?e.valueComparator(k,H):e.valueComparator(i.value,a.value)})||a)),r=I(()=>w.value.map(a=>a.props.value)),v=z(!1),S=I(()=>l.value?e.closeText:e.openText);let b="",D;const E=I(()=>e.hideSelected?V.value.filter(a=>!w.value.some(i=>i===a)):V.value),q=I(()=>e.hideNoData&&!V.value.length||e.readonly||(m==null?void 0:m.isReadonly.value)),O=K(),{onListScroll:g,onListKeydown:y}=dt(O,c);function T(a){e.openOnClear&&(l.value=!0)}function L(){q.value||(l.value=!l.value)}function j(a){var d,R;if(!a.key||e.readonly||m!=null&&m.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(l.value=!0),["Escape","Tab"].includes(a.key)&&(l.value=!1),a.key==="Home"?(d=O.value)==null||d.focus("first"):a.key==="End"&&((R=O.value)==null||R.focus("last"));const i=1e3;function k(x){const M=x.key.length===1,A=!x.ctrlKey&&!x.metaKey&&!x.altKey;return M&&A}if(e.multiple||!k(a))return;const H=performance.now();H-D>i&&(b=""),b+=a.key.toLowerCase(),D=H;const G=V.value.find(x=>x.title.toLowerCase().startsWith(b));G!==void 0&&(o.value=[G])}function F(a){if(e.multiple){const i=r.value.findIndex(k=>e.valueComparator(k,a.value));if(i===-1)o.value=[...o.value,a];else{const k=[...o.value];k.splice(i,1),o.value=k}}else o.value=[a],l.value=!1}function W(a){var i;(i=O.value)!=null&&i.$el.contains(a.relatedTarget)||(l.value=!1)}function Ve(){var a;v.value&&((a=c.value)==null||a.focus())}function we(a){v.value=!0}function Se(a){if(a==null)o.value=[];else if(ue(c.value,":autofill")||ue(c.value,":-webkit-autofill")){const i=V.value.find(k=>k.title===a);i&&F(i)}else c.value&&(c.value.value="")}return N(l,()=>{if(!e.hideSelected&&l.value&&w.value.length){const a=E.value.findIndex(i=>w.value.some(k=>i.value===k.value));qe&&window.requestAnimationFrame(()=>{var i;a>=0&&((i=h.value)==null||i.scrollToIndex(a))})}}),Q(()=>{const a=!!(e.chips||t.chip),i=!!(!e.hideNoData||E.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),k=o.value.length>0,[H]=te.filterProps(e),G=k||!v.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(te,_({ref:c},H,{modelValue:o.value.map(d=>d.props.value).join(", "),"onUpdate:modelValue":Se,focused:v.value,"onUpdate:focused":d=>v.value=d,validationValue:o.externalValue,dirty:k,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":o.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:G,"onClick:clear":T,"onMousedown:control":L,onBlur:W,onKeydown:j,"aria-label":u(S.value),title:u(S.value)}),{...t,default:()=>s($,null,[s(at,_({ref:f,modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,activator:"parent",contentClass:"v-select__content",disabled:q.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ve},e.menuProps),{default:()=>[i&&s(Ge,{ref:O,selected:r.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:d=>d.preventDefault(),onKeydown:y,onFocusin:we,onScrollPassive:g,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var d,R,x;return[(d=t["prepend-item"])==null?void 0:d.call(t),!E.value.length&&!e.hideNoData&&(((R=t["no-data"])==null?void 0:R.call(t))??s(ie,{title:u(e.noDataText)},null)),s(ct,{ref:h,renderless:!0,items:E.value},{default:M=>{var ee;let{item:A,index:B,itemRef:be}=M;const Z=_(A.props,{ref:be,key:B,onClick:()=>F(A)});return((ee=t.item)==null?void 0:ee.call(t,{item:A,index:B,props:Z}))??s(ie,Z,{prepend:ke=>{let{isSelected:xe}=ke;return s($,null,[e.multiple&&!e.hideSelected?s(tt,{key:A.value,modelValue:xe,ripple:!1,tabindex:"-1"},null):void 0,A.props.prependIcon&&s(ce,{icon:A.props.prependIcon},null)])}})}}),(x=t["append-item"])==null?void 0:x.call(t)]}})]}),w.value.map((d,R)=>{var A;function x(B){B.stopPropagation(),B.preventDefault(),F(d)}const M={"onClick:close":x,onMousedown(B){B.preventDefault(),B.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:d.value,class:"v-select__selection"},[a?t.chip?s(he,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:d.title}}},{default:()=>{var B;return[(B=t.chip)==null?void 0:B.call(t,{item:d,index:R,props:M})]}}):s(lt,_({key:"chip",closable:e.closableChips,size:"small",text:d.title},M),null):((A=t.selection)==null?void 0:A.call(t,{item:d,index:R}))??s("span",{class:"v-select__selection-text"},[d.title,e.multiple&&R<w.value.length-1&&s("span",{class:"v-select__selection-comma"},[$e(",")])])])})]),"append-inner":function(){var M;for(var d=arguments.length,R=new Array(d),x=0;x<d;x++)R[x]=arguments[x];return s($,null,[(M=t["append-inner"])==null?void 0:M.call(t,...R),e.menuIcon?s(ce,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),me({isFocused:v,menu:l,select:F},c)}}),Ct=e=>{window.isSecureContext&&navigator.clipboard&&navigator.clipboard.writeText(e)};export{Pt as V,at as a,ct as b,Ct as c,vt as m,dt as u};
