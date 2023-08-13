import{j as ce,k as Ve,l as we,V as te}from"./VTextField-a2e123d3.js";import{p as F,an as de,n as G,u as X,a as ke,e as b,r as H,i as Pe,s as K,c as Se,w as W,x as O,v as o,aF as le,H as _,y as Ce,D as be,ag as xe,m as ne,b as Ie,t as De,q as Te,j,k as Re,aG as Ae,ac as Be,am as Me,ae as Le,N as Oe,ah as Fe}from"./index-f94693a1.js";import{m as Ee,f as He,V as _e,a as ae}from"./VList-769824d9.js";import{m as Ke}from"./index-60fb9ccb.js";import{b as Ue,c as ve,f as oe,d as ue,g as ze,a as Ne}from"./VChip-6919e701.js";import{u as $e}from"./scopeId-55d54b09.js";import{a as Y,G as fe,b as me,u as pe,s as qe,x as je,l as se}from"./VContainer-87d98084.js";import{V as Ge}from"./VCheckboxBtn-bb52576f.js";const We=F({id:String,...de(Ue({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:ve}}),["absolute"])},"VMenu"),Ye=G()({name:"VMenu",props:We(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:t}=m;const u=X(e,"modelValue"),{scopeId:p}=$e(),v=ke(),f=b(()=>e.id||`v-menu-${v}`),l=H(),n=Pe(oe,null),P=K(0);Se(oe,{register(){++P.value},unregister(){--P.value},closeParents(){setTimeout(()=>{P.value||(u.value=!1,n==null||n.closeParents())},40)}}),W(u,c=>{c?n==null||n.register():n==null||n.unregister()});function S(){n==null||n.closeParents()}function r(c){var d,k;e.disabled||c.key==="Tab"&&(u.value=!1,(k=(d=l.value)==null?void 0:d.activatorEl)==null||k.focus())}function s(c){var k;if(e.disabled)return;const d=(k=l.value)==null?void 0:k.contentEl;d&&u.value?c.key==="ArrowDown"?(c.preventDefault(),le(d,"next")):c.key==="ArrowUp"&&(c.preventDefault(),le(d,"prev")):["ArrowDown","ArrowUp"].includes(c.key)&&(u.value=!0,c.preventDefault(),setTimeout(()=>setTimeout(()=>s(c))))}const y=b(()=>O({"aria-haspopup":"menu","aria-expanded":String(u.value),"aria-owns":f.value,onKeydown:s},e.activatorProps));return Y(()=>{const[c]=ue.filterProps(e);return o(ue,O({ref:l,class:["v-menu",e.class],style:e.style},c,{modelValue:u.value,"onUpdate:modelValue":d=>u.value=d,absolute:!0,activatorProps:y.value,"onClick:outside":S,onKeydown:r},p),{activator:t.activator,default:function(){for(var d=arguments.length,k=new Array(d),R=0;R<d;R++)k[R]=arguments[R];return o(fe,{root:"VMenu"},{default:()=>{var M;return[(M=t.default)==null?void 0:M.call(t,...k)]}})}})}),ce({id:f,ΨopenChildren:P},l)}});const Je=F({renderless:Boolean,...me()},"VVirtualScrollItem"),Qe=G()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Je(),emits:{"update:height":e=>!0},setup(e,m){let{attrs:t,emit:u,slots:p}=m;const{resizeRef:v,contentRect:f}=pe(void 0,"border");W(()=>{var l;return(l=f.value)==null?void 0:l.height},l=>{l!=null&&u("update:height",l)}),Y(()=>{var l,n;return e.renderless?o(_,null,[(l=p.default)==null?void 0:l.call(p,{itemRef:v})]):o("div",O({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(n=p.default)==null?void 0:n.call(p)])})}}),ie=-1,re=1,Xe=F({itemHeight:{type:[Number,String],default:48}},"virtual");function Ze(e,m,t){const u=K(0),p=K(e.itemHeight),v=b({get:()=>parseInt(p.value??0,10),set(h){p.value=h}}),f=H(),{resizeRef:l,contentRect:n}=pe();Ce(()=>{l.value=f.value});const P=be(),S=new Map;let r=Array.from({length:m.value.length});const s=b(()=>{const h=(!n.value||f.value===document.documentElement?P.height.value:n.value.height)-((t==null?void 0:t.value)??0);return Math.ceil(h/v.value*1.7+1)});function y(h,g){v.value=Math.max(v.value,g),r[h]=g,S.set(m.value[h],g)}function c(h){return r.slice(0,h).reduce((g,C)=>g+(C||v.value),0)}function d(h){const g=m.value.length;let C=0,T=0;for(;T<h&&C<g;)T+=r[C++]||v.value;return C-1}let k=0;function R(){if(!f.value||!n.value)return;const h=n.value.height-56,g=f.value.scrollTop,C=g<k?ie:re,T=d(g+h/2),U=Math.round(s.value/3),z=T-U,N=u.value+U*2-1;C===ie&&T<=N?u.value=ne(z,0,m.value.length):C===re&&T>=N&&(u.value=ne(z,0,m.value.length-s.value)),k=g}function M(h){if(!f.value)return;const g=c(h);f.value.scrollTop=g}const E=b(()=>Math.min(m.value.length,u.value+s.value)),L=b(()=>m.value.slice(u.value,E.value).map((h,g)=>({raw:h,index:g+u.value}))),J=b(()=>c(u.value)),Q=b(()=>c(m.value.length)-c(E.value));return W(()=>m.value.length,()=>{r=xe(m.value.length).map(()=>v.value),S.forEach((h,g)=>{const C=m.value.indexOf(g);C===-1?S.delete(g):r[C]=h})}),{containerRef:f,computedItems:L,itemHeight:v,paddingTop:J,paddingBottom:Q,scrollToIndex:M,handleScroll:R,handleItemResize:y}}const et=F({items:{type:Array,default:()=>[]},renderless:Boolean,...Xe(),...me(),...qe()},"VVirtualScroll"),tt=G()({name:"VVirtualScroll",props:et(),setup(e,m){let{slots:t}=m;const u=Ie("VVirtualScroll"),{dimensionStyles:p}=je(e),{containerRef:v,handleScroll:f,handleItemResize:l,scrollToIndex:n,paddingTop:P,paddingBottom:S,computedItems:r}=Ze(e,De(e,"items"));return Te(()=>e.renderless,()=>{Re(()=>{var s;v.value=ze(u.vnode.el,!0),(s=v.value)==null||s.addEventListener("scroll",f)}),Ae(()=>{var s;(s=v.value)==null||s.removeEventListener("scroll",f)})}),Y(()=>{const s=r.value.map(y=>o(Qe,{key:y.index,renderless:e.renderless,"onUpdate:height":c=>l(y.index,c)},{default:c=>{var d;return(d=t.default)==null?void 0:d.call(t,{item:y.raw,index:y.index,...c})}}));return e.renderless?o(_,null,[o("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:j(P.value)}},null),s,o("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:j(S.value)}},null)]):o("div",{ref:v,class:["v-virtual-scroll",e.class],onScroll:f,style:[p.value,e.style]},[o("div",{class:"v-virtual-scroll__container",style:{paddingTop:j(P.value),paddingBottom:j(S.value)}},[s])])}),{scrollToIndex:n}}});function lt(e,m){const t=K(!1);let u;function p(l){cancelAnimationFrame(u),t.value=!0,u=requestAnimationFrame(()=>{u=requestAnimationFrame(()=>{t.value=!1})})}async function v(){await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>requestAnimationFrame(l)),await new Promise(l=>{if(t.value){const n=W(t,()=>{n(),l()})}else l()})}async function f(l){var S,r;if(l.key==="Tab"&&((S=m.value)==null||S.focus()),!["PageDown","PageUp","Home","End"].includes(l.key))return;const n=(r=e.value)==null?void 0:r.$el;if(!n)return;(l.key==="Home"||l.key==="End")&&n.scrollTo({top:l.key==="Home"?0:n.scrollHeight,behavior:"smooth"}),await v();const P=n.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(l.key==="PageDown"||l.key==="Home"){const s=n.getBoundingClientRect().top;for(const y of P)if(y.getBoundingClientRect().top>=s){y.focus();break}}else{const s=n.getBoundingClientRect().bottom;for(const y of[...P].reverse())if(y.getBoundingClientRect().bottom<=s){y.focus();break}}}return{onListScroll:p,onListKeydown:f}}const nt=F({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:Be,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:Me},...Ee({itemChildren:!1})},"Select"),at=F({...nt(),...de(Ve({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Ke({transition:{component:ve}})},"VSelect"),ft=G()({name:"VSelect",props:at(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,m){let{slots:t}=m;const{t:u}=Le(),p=H(),v=H(),f=X(e,"menu"),l=b({get:()=>f.value,set:a=>{var V;f.value&&!a&&((V=v.value)!=null&&V.ΨopenChildren)||(f.value=a)}}),{items:n,transformIn:P,transformOut:S}=He(e),r=X(e,"modelValue",[],a=>P(a===null?[null]:Fe(a)),a=>{const V=S(a);return e.multiple?V:V[0]??null}),s=we(),y=b(()=>r.value.map(a=>n.value.find(V=>e.valueComparator(V.value,a.value))||a)),c=b(()=>y.value.map(a=>a.props.value)),d=K(!1);let k="",R;const M=b(()=>e.hideSelected?n.value.filter(a=>!y.value.some(V=>V===a)):n.value),E=b(()=>e.hideNoData&&!n.value.length||e.readonly||(s==null?void 0:s.isReadonly.value)),L=H(),{onListScroll:J,onListKeydown:Q}=lt(L,p);function h(a){e.openOnClear&&(l.value=!0)}function g(){E.value||(l.value=!l.value)}function C(a){var i,x;if(e.readonly||s!=null&&s.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(l.value=!0),["Escape","Tab"].includes(a.key)&&(l.value=!1),a.key==="Home"?(i=L.value)==null||i.focus("first"):a.key==="End"&&((x=L.value)==null||x.focus("last"));const V=1e3;function A(w){const B=w.key.length===1,I=!w.ctrlKey&&!w.metaKey&&!w.altKey;return B&&I}if(e.multiple||!A(a))return;const $=performance.now();$-R>V&&(k=""),k+=a.key.toLowerCase(),R=$;const q=n.value.find(w=>w.title.toLowerCase().startsWith(k));q!==void 0&&(r.value=[q])}function T(a){if(e.multiple){const V=c.value.findIndex(A=>e.valueComparator(A,a.value));if(V===-1)r.value=[...r.value,a];else{const A=[...r.value];A.splice(V,1),r.value=A}}else r.value=[a],l.value=!1}function U(a){var V;(V=L.value)!=null&&V.$el.contains(a.relatedTarget)||(l.value=!1)}function z(){var a;d.value&&((a=p.value)==null||a.focus())}function N(a){d.value=!0}return Y(()=>{const a=!!(e.chips||t.chip),V=!!(!e.hideNoData||M.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),A=r.value.length>0,[$]=te.filterProps(e),q=A||!d.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return o(te,O({ref:p},$,{modelValue:r.value.map(i=>i.props.value).join(", "),"onUpdate:modelValue":i=>{i==null&&(r.value=[])},focused:d.value,"onUpdate:focused":i=>d.value=i,validationValue:r.externalValue,dirty:A,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":r.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,readonly:!0,placeholder:q,"onClick:clear":h,"onMousedown:control":g,onBlur:U,onKeydown:C}),{...t,default:()=>o(_,null,[o(Ye,O({ref:v,modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,activator:"parent",contentClass:"v-select__content",disabled:E.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:z},e.menuProps),{default:()=>[V&&o(_e,{ref:L,selected:c.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:i=>i.preventDefault(),onKeydown:Q,onFocusin:N,onScrollPassive:J,tabindex:"-1"},{default:()=>{var i,x,w;return[(i=t["prepend-item"])==null?void 0:i.call(t),!M.value.length&&!e.hideNoData&&(((x=t["no-data"])==null?void 0:x.call(t))??o(ae,{title:u(e.noDataText)},null)),o(tt,{renderless:!0,items:M.value},{default:B=>{var ee;let{item:I,index:D,itemRef:he}=B;const Z=O(I.props,{ref:he,key:D,onClick:()=>T(I)});return((ee=t.item)==null?void 0:ee.call(t,{item:I,index:D,props:Z}))??o(ae,Z,{prepend:ge=>{let{isSelected:ye}=ge;return o(_,null,[e.multiple&&!e.hideSelected?o(Ge,{key:I.value,modelValue:ye,ripple:!1,tabindex:"-1"},null):void 0,I.props.prependIcon&&o(se,{icon:I.props.prependIcon},null)])}})}}),(w=t["append-item"])==null?void 0:w.call(t)]}})]}),y.value.map((i,x)=>{var I;function w(D){D.stopPropagation(),D.preventDefault(),T(i)}const B={"onClick:close":w,onMousedown(D){D.preventDefault(),D.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return o("div",{key:i.value,class:"v-select__selection"},[a?t.chip?o(fe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>{var D;return[(D=t.chip)==null?void 0:D.call(t,{item:i,index:x,props:B})]}}):o(Ne,O({key:"chip",closable:e.closableChips,size:"small",text:i.title},B),null):((I=t.selection)==null?void 0:I.call(t,{item:i,index:x}))??o("span",{class:"v-select__selection-text"},[i.title,e.multiple&&x<y.value.length-1&&o("span",{class:"v-select__selection-comma"},[Oe(",")])])])})]),"append-inner":function(){var B;for(var i=arguments.length,x=new Array(i),w=0;w<i;w++)x[w]=arguments[w];return o(_,null,[(B=t["append-inner"])==null?void 0:B.call(t,...x),e.menuIcon?o(se,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),ce({isFocused:d,menu:l,select:T},p)}});export{ft as V,Ye as a,tt as b,nt as m,lt as u};
