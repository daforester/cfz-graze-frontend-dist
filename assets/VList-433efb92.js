import{s as O,k as Ue,e as f,aG as We,p as A,z as Q,n as M,B as X,t as C,j as ae,v,i as N,c as R,aH as T,r as P,u as le,f as ve,b as qe,a as ze,ak as Je,ac as x,aa as fe,ab as Qe,aI as se,w as Xe,aJ as Ye,ad as Ze,H as ie,x as re,am as et,al as I,aK as me,G as tt,aE as nt}from"./index-0053efbb.js";import{b as at}from"./VTextField-24ce0553.js";import{b as F,C as ye,a as G,c as j,G as z,d as ge,D as he,s as Se,e as pe,f as be,H as lt,F as Ce,R as st,I as it,g as ke,J as rt,E as Ve,x as Ie,i as we,j as Pe,K as ot,l as oe,h as ut}from"./VContainer-a0296722.js";import{M as ct}from"./index-0122c441.js";import{c as Ae,b as ue}from"./VAvatar-634e3165.js";function dt(){const e=O(!1);return Ue(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:f(()=>e.value?void 0:{transition:"none !important"}),isBooted:We(e)}}const vt=A({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...F(),...Q()},"VDivider"),ft=M()({name:"VDivider",props:vt(),setup(e,l){let{attrs:t}=l;const{themeClasses:n}=X(e),{textColorClasses:s,textColorStyles:a}=ye(C(e,"color")),i=f(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=ae(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=ae(e.thickness)),r});return G(()=>v("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,s.value,e.class],style:[i.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const J=Symbol.for("vuetify:list");function Le(){const e=N(J,{hasPrepend:O(!1),updateHasPrepend:()=>null}),l={hasPrepend:O(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return R(J,l),e}function Be(){return N(J,null)}const mt={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},xe={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},yt={open:xe.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},Y=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=T(n),e&&!s){const i=Array.from(a.entries()).reduce((r,p)=>{let[S,m]=p;return m==="on"?[...r,S]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},Oe=e=>{const l=Y(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=T(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},gt=e=>{const l=Y(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=T(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},ht=e=>{const l=Oe(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=T(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},St=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=T(n);const p=new Map(a),S=[n];for(;S.length;){const o=S.shift();a.set(o,s?"on":"off"),i.has(o)&&S.push(...i.get(o))}let m=r.get(n);for(;m;){const o=i.get(m),u=o.every(d=>a.get(d)==="on"),c=o.every(d=>!a.has(d)||a.get(d)==="off");a.set(m,u?"on":c?"off":"indeterminate"),m=r.get(m)}return e&&!s&&Array.from(a.entries()).reduce((u,c)=>{let[d,y]=c;return y==="on"?[...u,d]:u},[]).length===0?p:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},D=Symbol.for("vuetify:nested"),Me={id:O(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:P(new Set),selected:P(new Map),selectedValues:P([])}},pt=A({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),bt=e=>{let l=!1;const t=P(new Map),n=P(new Map),s=le(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return ht(e.mandatory);case"leaf":return gt(e.mandatory);case"independent":return Y(e.mandatory);case"single-independent":return Oe(e.mandatory);case"classic":default:return St(e.mandatory)}}),i=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return yt;case"single":return mt;case"multiple":default:return xe}}),r=le(e,"selected",e.selected,o=>a.value.in(o,t.value,n.value),o=>a.value.out(o,t.value,n.value));ve(()=>{l=!0});function p(o){const u=[];let c=o;for(;c!=null;)u.unshift(c),c=n.value.get(c);return u}const S=qe("nested"),m={id:O(),root:{opened:s,selected:r,selectedValues:f(()=>{const o=[];for(const[u,c]of r.value.entries())c==="on"&&o.push(u);return o}),register:(o,u,c)=>{u&&o!==u&&n.value.set(o,u),c&&t.value.set(o,[]),u!=null&&t.value.set(u,[...t.value.get(u)||[],o])},unregister:o=>{if(l)return;t.value.delete(o);const u=n.value.get(o);if(u){const c=t.value.get(u)??[];t.value.set(u,c.filter(d=>d!==o))}n.value.delete(o),s.value.delete(o)},open:(o,u,c)=>{S.emit("click:open",{id:o,value:u,path:p(o),event:c});const d=i.value.open({id:o,value:u,opened:new Set(s.value),children:t.value,parents:n.value,event:c});d&&(s.value=d)},openOnSelect:(o,u,c)=>{const d=i.value.select({id:o,value:u,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:c});d&&(s.value=d)},select:(o,u,c)=>{S.emit("click:select",{id:o,value:u,path:p(o),event:c});const d=a.value.select({id:o,value:u,selected:new Map(r.value),children:t.value,parents:n.value,event:c});d&&(r.value=d),m.root.openOnSelect(o,u,c)},children:t,parents:n}};return R(D,m),m.root},Te=(e,l)=>{const t=N(D,Me),n=Symbol(ze()),s=f(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:f(()=>t.root.opened.value.has(s.value)),parent:f(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:f(()=>t.root.selected.value.get(T(s.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),ve(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&R(D,a),a},Ct=()=>{const e=N(D,Me);R(D,{...e,isGroupActivator:!0})},kt=Je({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return Ct(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Vt=A({activeColor:String,baseColor:String,color:String,collapseIcon:{type:x,default:"$collapse"},expandIcon:{type:x,default:"$expand"},prependIcon:x,appendIcon:x,fluid:Boolean,subgroup:Boolean,title:String,value:null,...F(),...j()},"VListGroup"),ce=M()({name:"VListGroup",props:Vt(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=Te(C(e,"value"),!0),i=f(()=>`v-list-group--id-${String(a.value)}`),r=Be(),{isBooted:p}=dt();function S(c){s(!n.value,c)}const m=f(()=>({onClick:S,class:"v-list-group__header",id:i.value})),o=f(()=>n.value?e.collapseIcon:e.expandIcon),u=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&o.value,appendIcon:e.appendIcon||!e.subgroup&&o.value,title:e.title,value:e.value}}));return G(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(z,{defaults:u.value},{default:()=>[v(kt,null,{default:()=>[t.activator({props:m.value,isOpen:n.value})]})]}),v(ct,{transition:{component:at},disabled:!p.value},{default:()=>{var c;return[fe(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(c=t.default)==null?void 0:c.call(t)]),[[Qe,n.value]])]}})]})),{}}});const It=Ae("v-list-item-subtitle"),wt=Ae("v-list-item-title"),Pt=A({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:x,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:x,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:se(),onClickOnce:se(),...ge(),...F(),...he(),...Se(),...pe(),...be(),...lt(),...j(),...Q(),...Ce({variant:"text"})},"VListItem"),de=M()({name:"VListItem",directives:{Ripple:st},props:Pt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=it(e,t),i=f(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:p,isIndeterminate:S,isGroupActivator:m,root:o,parent:u,openOnSelect:c}=Te(i,!1),d=Be(),y=f(()=>{var h;return e.active!==!1&&(e.active||((h=a.isActive)==null?void 0:h.value)||p.value)}),g=f(()=>e.link!==!1&&a.isLink.value),V=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),B=f(()=>e.rounded||e.nav),L=f(()=>e.color??e.activeColor),E=f(()=>({color:y.value?L.value??e.baseColor:e.baseColor,variant:e.variant}));Xe(()=>{var h;return(h=a.isActive)==null?void 0:h.value},h=>{h&&u.value!=null&&o.open(u.value,!0),h&&c(h)},{immediate:!0});const{themeClasses:H}=X(e),{borderClasses:K}=ke(e),{colorClasses:U,colorStyles:w,variantClasses:b}=rt(E),{densityClasses:_}=Ve(e),{dimensionStyles:$e}=Ie(e),{elevationClasses:Ne}=we(e),{roundedClasses:Re}=Pe(B),je=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),W=f(()=>({isActive:y.value,select:r,isSelected:p.value,isIndeterminate:S.value}));function Z(h){var $;s("click",h),!(m||!V.value)&&(($=a.navigate)==null||$.call(a,h),e.value!=null&&r(!p.value,h))}function Ee(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),Z(h))}return G(()=>{const h=g.value?"a":e.tag,$=n.title||e.title,He=n.subtitle||e.subtitle,ee=!!(e.appendAvatar||e.appendIcon),Ke=!!(ee||n.append),te=!!(e.prependAvatar||e.prependIcon),q=!!(te||n.prepend);return d==null||d.updateHasPrepend(q),e.activeColor&&Ye("active-color",["color","base-color"]),fe(v(h,{class:["v-list-item",{"v-list-item--active":y.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!q&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&y.value},H.value,K.value,U.value,_.value,Ne.value,je.value,Re.value,b.value,e.class],style:[w.value,$e.value,e.style],href:a.href.value,tabindex:V.value?d?-2:0:void 0,onClick:Z,onKeydown:V.value&&!g.value&&Ee},{default:()=>{var ne;return[ot(V.value||y.value,"v-list-item"),q&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(z,{key:"prepend-defaults",disabled:!te,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=n.prepend)==null?void 0:k.call(n,W.value)]}}):v(ie,null,[e.prependAvatar&&v(ue,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(oe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),v("div",{class:"v-list-item__content","data-no-activator":""},[$&&v(wt,{key:"title"},{default:()=>{var k;return[((k=n.title)==null?void 0:k.call(n,{title:e.title}))??e.title]}}),He&&v(It,{key:"subtitle"},{default:()=>{var k;return[((k=n.subtitle)==null?void 0:k.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ne=n.default)==null?void 0:ne.call(n,W.value)]),Ke&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(z,{key:"append-defaults",disabled:!ee,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=n.append)==null?void 0:k.call(n,W.value)]}}):v(ie,null,[e.appendIcon&&v(oe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(ue,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[Ze("ripple"),V.value&&e.ripple]])}),{}}}),At=A({color:String,inset:Boolean,sticky:Boolean,title:String,...F(),...j()},"VListSubheader"),Lt=M()({name:"VListSubheader",props:At(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=ye(C(e,"color"));return G(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&v("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Bt=A({items:Array},"VListChildren"),De=M()({name:"VListChildren",props:Bt(),setup(e,l){let{slots:t}=l;return Le(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var c,d;let{children:i,props:r,type:p,raw:S}=a;if(p==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:r}))??v(ft,r,null);if(p==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:r}))??v(Lt,r,null);const m={subtitle:t.subtitle?y=>{var g;return(g=t.subtitle)==null?void 0:g.call(t,{...y,item:S})}:void 0,prepend:t.prepend?y=>{var g;return(g=t.prepend)==null?void 0:g.call(t,{...y,item:S})}:void 0,append:t.append?y=>{var g;return(g=t.append)==null?void 0:g.call(t,{...y,item:S})}:void 0,title:t.title?y=>{var g;return(g=t.title)==null?void 0:g.call(t,{...y,item:S})}:void 0},[o,u]=ce.filterProps(r);return i?v(ce,re({value:r==null?void 0:r.value},o),{activator:y=>{let{props:g}=y;return t.header?t.header({props:{...r,...g}}):v(de,re(r,g),m)},default:()=>v(De,{items:i},t)}):t.item?t.item({props:r}):v(de,r,m)}))}}}),xt=A({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"list-items");function Fe(e,l){const t=I(l,e.itemTitle,l),n=e.returnObject?l:I(l,e.itemValue,t),s=I(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?me(l,["children"])[1]:l:void 0:I(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?Ge(e,s):void 0,raw:l}}function Ge(e,l){const t=[];for(const n of l)t.push(Fe(e,n));return t}function jt(e){const l=f(()=>Ge(e,e.items));return Ot(l,t=>Fe(e,t))}function Ot(e,l){function t(s){return s.filter(a=>a!==null||e.value.some(i=>i.value===null)).map(a=>e.value.find(r=>et(a,r.value))??l(a))}function n(s){return s.map(a=>{let{value:i}=a;return i})}return{items:e,transformIn:t,transformOut:n}}function Mt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Tt(e,l){const t=I(l,e.itemType,"item"),n=Mt(l)?l:I(l,e.itemTitle),s=I(l,e.itemValue,void 0),a=I(l,e.itemChildren),i=e.itemProps===!0?me(l,["children"])[1]:I(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?_e(e,a):void 0,raw:l}}function _e(e,l){const t=[];for(const n of l)t.push(Tt(e,n));return t}function Dt(e){return{items:f(()=>_e(e,e.items))}}const Ft=A({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...pt({selectStrategy:"single-leaf",openStrategy:"list"}),...ge(),...F(),...he(),...Se(),...pe(),itemType:{type:String,default:"type"},...xt(),...be(),...j(),...Q(),...Ce({variant:"text"})},"VList"),Et=M()({name:"VList",props:Ft(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Dt(e),{themeClasses:s}=X(e),{backgroundColorClasses:a,backgroundColorStyles:i}=ut(C(e,"bgColor")),{borderClasses:r}=ke(e),{densityClasses:p}=Ve(e),{dimensionStyles:S}=Ie(e),{elevationClasses:m}=we(e),{roundedClasses:o}=Pe(e),{open:u,select:c}=bt(e),d=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),y=C(e,"activeColor"),g=C(e,"baseColor"),V=C(e,"color");Le(),tt({VListGroup:{activeColor:y,baseColor:g,color:V},VListItem:{activeClass:C(e,"activeClass"),activeColor:y,baseColor:g,color:V,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),variant:C(e,"variant")}});const B=O(!1),L=P();function E(b){B.value=!0}function H(b){B.value=!1}function K(b){var _;!B.value&&!(b.relatedTarget&&((_=L.value)!=null&&_.contains(b.relatedTarget)))&&w()}function U(b){if(L.value){if(b.key==="ArrowDown")w("next");else if(b.key==="ArrowUp")w("prev");else if(b.key==="Home")w("first");else if(b.key==="End")w("last");else return;b.preventDefault()}}function w(b){if(L.value)return nt(L.value,b)}return G(()=>v(e.tag,{ref:L,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,a.value,r.value,p.value,m.value,d.value,o.value,e.class],style:[i.value,S.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:E,onFocusout:H,onFocus:K,onKeydown:U},{default:()=>[v(De,{items:n.value},t)]})),{open:u,select:c,focus:w}}});export{Et as V,de as a,ft as b,ce as c,It as d,wt as e,jt as f,xt as m,dt as u};
