import{s as O,k as He,e as f,aJ as Ke,i as G,c as N,aK as _,r as A,p as L,u as te,f as ue,b as Ue,a as qe,an as ze,af as M,n as T,t as C,v,ad as ce,ae as Je,aL as ne,z as de,w as We,B as ve,aM as Qe,ag as Xe,H as ae,x as le,ap as Ye,ao as w,aN as fe,G as Ze,aH as et}from"./index-fb88fab6.js";import{a as tt}from"./forwardRefs-e40dd366.js";import{m as R,a as $,u as j,z as J,b as me,o as ye,q as ge,c as pe,d as he,A as nt,y as Se,R as at,B as lt,e as be,C as st,p as Ce,v as ke,g as Ve,h as we,D as it,V as se,n as rt,f as ot}from"./VContainer-43a98e03.js";import{M as ut,c as Ie,a as ie}from"./VAvatar-cb25eb61.js";import{V as ct}from"./VDivider-8f7b272d.js";function dt(){const e=O(!1);return He(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:f(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ke(e)}}const W=Symbol.for("vuetify:list");function Ae(){const e=G(W,{hasPrepend:O(!1),updateHasPrepend:()=>null}),l={hasPrepend:O(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return N(W,l),e}function Pe(){return G(W,null)}const vt={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},Le={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},ft={open:Le.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},Q=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=_(n),e&&!s){const i=Array.from(a.entries()).reduce((r,S)=>{let[h,m]=S;return m==="on"?[...r,h]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},Be=e=>{const l=Q(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=_(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},mt=e=>{const l=Q(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=_(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},yt=e=>{const l=Be(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=_(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},gt=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=_(n);const S=new Map(a),h=[n];for(;h.length;){const o=h.shift();a.set(o,s?"on":"off"),i.has(o)&&h.push(...i.get(o))}let m=r.get(n);for(;m;){const o=i.get(m),u=o.every(d=>a.get(d)==="on"),c=o.every(d=>!a.has(d)||a.get(d)==="off");a.set(m,u?"on":c?"off":"indeterminate"),m=r.get(m)}return e&&!s&&Array.from(a.entries()).reduce((u,c)=>{let[d,y]=c;return y==="on"?[...u,d]:u},[]).length===0?S:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},x=Symbol.for("vuetify:nested"),Me={id:O(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:A(new Set),selected:A(new Map),selectedValues:A([])}},pt=L({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),ht=e=>{let l=!1;const t=A(new Map),n=A(new Map),s=te(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return yt(e.mandatory);case"leaf":return mt(e.mandatory);case"independent":return Q(e.mandatory);case"single-independent":return Be(e.mandatory);case"classic":default:return gt(e.mandatory)}}),i=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ft;case"single":return vt;case"multiple":default:return Le}}),r=te(e,"selected",e.selected,o=>a.value.in(o,t.value,n.value),o=>a.value.out(o,t.value,n.value));ue(()=>{l=!0});function S(o){const u=[];let c=o;for(;c!=null;)u.unshift(c),c=n.value.get(c);return u}const h=Ue("nested"),m={id:O(),root:{opened:s,selected:r,selectedValues:f(()=>{const o=[];for(const[u,c]of r.value.entries())c==="on"&&o.push(u);return o}),register:(o,u,c)=>{u&&o!==u&&n.value.set(o,u),c&&t.value.set(o,[]),u!=null&&t.value.set(u,[...t.value.get(u)||[],o])},unregister:o=>{if(l)return;t.value.delete(o);const u=n.value.get(o);if(u){const c=t.value.get(u)??[];t.value.set(u,c.filter(d=>d!==o))}n.value.delete(o),s.value.delete(o)},open:(o,u,c)=>{h.emit("click:open",{id:o,value:u,path:S(o),event:c});const d=i.value.open({id:o,value:u,opened:new Set(s.value),children:t.value,parents:n.value,event:c});d&&(s.value=d)},openOnSelect:(o,u,c)=>{const d=i.value.select({id:o,value:u,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:c});d&&(s.value=d)},select:(o,u,c)=>{h.emit("click:select",{id:o,value:u,path:S(o),event:c});const d=a.value.select({id:o,value:u,selected:new Map(r.value),children:t.value,parents:n.value,event:c});d&&(r.value=d),m.root.openOnSelect(o,u,c)},children:t,parents:n}};return N(x,m),m.root},Oe=(e,l)=>{const t=G(x,Me),n=Symbol(qe()),s=f(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:f(()=>t.root.opened.value.has(s.value)),parent:f(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:f(()=>t.root.selected.value.get(_(s.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),ue(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&N(x,a),a},St=()=>{const e=G(x,Me);N(x,{...e,isGroupActivator:!0})},bt=ze({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return St(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Ct=L({activeColor:String,baseColor:String,color:String,collapseIcon:{type:M,default:"$collapse"},expandIcon:{type:M,default:"$expand"},prependIcon:M,appendIcon:M,fluid:Boolean,subgroup:Boolean,title:String,value:null,...R(),...$()},"VListGroup"),re=T()({name:"VListGroup",props:Ct(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=Oe(C(e,"value"),!0),i=f(()=>`v-list-group--id-${String(a.value)}`),r=Pe(),{isBooted:S}=dt();function h(c){s(!n.value,c)}const m=f(()=>({onClick:h,class:"v-list-group__header",id:i.value})),o=f(()=>n.value?e.collapseIcon:e.expandIcon),u=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&o.value,appendIcon:e.appendIcon||!e.subgroup&&o.value,title:e.title,value:e.value}}));return j(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(J,{defaults:u.value},{default:()=>[v(bt,null,{default:()=>[t.activator({props:m.value,isOpen:n.value})]})]}),v(ut,{transition:{component:tt},disabled:!S.value},{default:()=>{var c;return[ce(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(c=t.default)==null?void 0:c.call(t)]),[[Je,n.value]])]}})]})),{}}});const kt=Ie("v-list-item-subtitle"),Vt=Ie("v-list-item-title"),wt=L({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:M,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:ne(),onClickOnce:ne(),...me(),...R(),...ye(),...ge(),...pe(),...he(),...nt(),...$(),...de(),...Se({variant:"text"})},"VListItem"),oe=T()({name:"VListItem",directives:{Ripple:at},props:wt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=lt(e,t),i=f(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:S,isIndeterminate:h,isGroupActivator:m,root:o,parent:u,openOnSelect:c}=Oe(i,!1),d=Pe(),y=f(()=>{var p;return e.active!==!1&&(e.active||((p=a.isActive)==null?void 0:p.value)||S.value)}),g=f(()=>e.link!==!1&&a.isLink.value),V=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),B=f(()=>e.rounded||e.nav),P=f(()=>e.color??e.activeColor),E=f(()=>({color:y.value?P.value??e.baseColor:e.baseColor,variant:e.variant}));We(()=>{var p;return(p=a.isActive)==null?void 0:p.value},p=>{p&&u.value!=null&&o.open(u.value,!0),p&&c(p)},{immediate:!0});const{themeClasses:H}=ve(e),{borderClasses:K}=be(e),{colorClasses:U,colorStyles:I,variantClasses:b}=st(E),{densityClasses:F}=Ce(e),{dimensionStyles:De}=ke(e),{elevationClasses:Ge}=Ve(e),{roundedClasses:Ne}=we(B),Re=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),q=f(()=>({isActive:y.value,select:r,isSelected:S.value,isIndeterminate:h.value}));function X(p){var D;s("click",p),!(m||!V.value)&&((D=a.navigate)==null||D.call(a,p),e.value!=null&&r(!S.value,p))}function $e(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),X(p))}return j(()=>{const p=g.value?"a":e.tag,D=n.title||e.title,je=n.subtitle||e.subtitle,Y=!!(e.appendAvatar||e.appendIcon),Ee=!!(Y||n.append),Z=!!(e.prependAvatar||e.prependIcon),z=!!(Z||n.prepend);return d==null||d.updateHasPrepend(z),e.activeColor&&Qe("active-color",["color","base-color"]),ce(v(p,{class:["v-list-item",{"v-list-item--active":y.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!z&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&y.value},H.value,K.value,U.value,F.value,Ge.value,Re.value,Ne.value,b.value,e.class],style:[I.value,De.value,e.style],href:a.href.value,tabindex:V.value?d?-2:0:void 0,onClick:X,onKeydown:V.value&&!g.value&&$e},{default:()=>{var ee;return[it(V.value||y.value,"v-list-item"),z&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(J,{key:"prepend-defaults",disabled:!Z,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=n.prepend)==null?void 0:k.call(n,q.value)]}}):v(ae,null,[e.prependAvatar&&v(ie,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(se,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[D&&v(Vt,{key:"title"},{default:()=>{var k;return[((k=n.title)==null?void 0:k.call(n,{title:e.title}))??e.title]}}),je&&v(kt,{key:"subtitle"},{default:()=>{var k;return[((k=n.subtitle)==null?void 0:k.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ee=n.default)==null?void 0:ee.call(n,q.value)]),Ee&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(J,{key:"append-defaults",disabled:!Y,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=n.append)==null?void 0:k.call(n,q.value)]}}):v(ae,null,[e.appendIcon&&v(se,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(ie,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[Xe("ripple"),V.value&&e.ripple]])}),{}}}),It=L({color:String,inset:Boolean,sticky:Boolean,title:String,...R(),...$()},"VListSubheader"),At=T()({name:"VListSubheader",props:It(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=rt(C(e,"color"));return j(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&v("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Pt=L({items:Array},"VListChildren"),_e=T()({name:"VListChildren",props:Pt(),setup(e,l){let{slots:t}=l;return Ae(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var c,d;let{children:i,props:r,type:S,raw:h}=a;if(S==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:r}))??v(ct,r,null);if(S==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:r}))??v(At,r,null);const m={subtitle:t.subtitle?y=>{var g;return(g=t.subtitle)==null?void 0:g.call(t,{...y,item:h})}:void 0,prepend:t.prepend?y=>{var g;return(g=t.prepend)==null?void 0:g.call(t,{...y,item:h})}:void 0,append:t.append?y=>{var g;return(g=t.append)==null?void 0:g.call(t,{...y,item:h})}:void 0,title:t.title?y=>{var g;return(g=t.title)==null?void 0:g.call(t,{...y,item:h})}:void 0},[o,u]=re.filterProps(r);return i?v(re,le({value:r==null?void 0:r.value},o),{activator:y=>{let{props:g}=y;return t.header?t.header({props:{...r,...g}}):v(oe,le(r,g),m)},default:()=>v(_e,{items:i},t)}):t.item?t.item({props:r}):v(oe,r,m)}))}}}),Lt=L({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"list-items");function xe(e,l){const t=w(l,e.itemTitle,l),n=e.returnObject?l:w(l,e.itemValue,t),s=w(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?fe(l,["children"])[1]:l:void 0:w(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?Te(e,s):void 0,raw:l}}function Te(e,l){const t=[];for(const n of l)t.push(xe(e,n));return t}function Rt(e){const l=f(()=>Te(e,e.items));return Bt(l,t=>xe(e,t))}function Bt(e,l){function t(s){return s.filter(a=>a!==null||e.value.some(i=>i.value===null)).map(a=>e.value.find(r=>Ye(a,r.value))??l(a))}function n(s){return s.map(a=>{let{value:i}=a;return i})}return{items:e,transformIn:t,transformOut:n}}function Mt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ot(e,l){const t=w(l,e.itemType,"item"),n=Mt(l)?l:w(l,e.itemTitle),s=w(l,e.itemValue,void 0),a=w(l,e.itemChildren),i=e.itemProps===!0?fe(l,["children"])[1]:w(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?Fe(e,a):void 0,raw:l}}function Fe(e,l){const t=[];for(const n of l)t.push(Ot(e,n));return t}function _t(e){return{items:f(()=>Fe(e,e.items))}}const xt=L({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...pt({selectStrategy:"single-leaf",openStrategy:"list"}),...me(),...R(),...ye(),...ge(),...pe(),itemType:{type:String,default:"type"},...Lt(),...he(),...$(),...de(),...Se({variant:"text"})},"VList"),$t=T()({name:"VList",props:xt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=_t(e),{themeClasses:s}=ve(e),{backgroundColorClasses:a,backgroundColorStyles:i}=ot(C(e,"bgColor")),{borderClasses:r}=be(e),{densityClasses:S}=Ce(e),{dimensionStyles:h}=ke(e),{elevationClasses:m}=Ve(e),{roundedClasses:o}=we(e),{open:u,select:c}=ht(e),d=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),y=C(e,"activeColor"),g=C(e,"baseColor"),V=C(e,"color");Ae(),Ze({VListGroup:{activeColor:y,baseColor:g,color:V},VListItem:{activeClass:C(e,"activeClass"),activeColor:y,baseColor:g,color:V,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),variant:C(e,"variant")}});const B=O(!1),P=A();function E(b){B.value=!0}function H(b){B.value=!1}function K(b){var F;!B.value&&!(b.relatedTarget&&((F=P.value)!=null&&F.contains(b.relatedTarget)))&&I()}function U(b){if(P.value){if(b.key==="ArrowDown")I("next");else if(b.key==="ArrowUp")I("prev");else if(b.key==="Home")I("first");else if(b.key==="End")I("last");else return;b.preventDefault()}}function I(b){if(P.value)return et(P.value,b)}return j(()=>v(e.tag,{ref:P,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,a.value,r.value,S.value,m.value,d.value,o.value,e.class],style:[i.value,h.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:E,onFocusout:H,onFocus:K,onKeydown:U},{default:()=>[v(_e,{items:n.value},t)]})),{open:u,select:c,focus:I}}});export{$t as V,oe as a,re as b,kt as c,Vt as d,Rt as e,Lt as m,dt as u};
