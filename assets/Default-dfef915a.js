import{p as D,i as ge,a as at,b as Re,c as Be,s as M,o as ot,d as nt,e as v,f as re,r as L,h as q,j as Z,k as ce,l as lt,m as st,w as U,n as W,u as Pe,q as ut,t as j,v as u,x as J,y as it,C as rt,z as he,A as Ne,B as ye,D as ct,E as vt,F as dt,G as mt,T as ft,H as Ae,I as pe,J as gt,K as ke,L as me,M as B,N,O as I,P as De,Q as Oe,R as ht,S as K,U as $e,_ as Ue,V as yt,W as le,X as ze,Y as pt,Z as bt,$ as wt}from"./index-4a0628fc.js";import{G as _t,R as de,a as Vt}from"./userData-209450bc.js";import{u as St}from"./useAvatar-ccae4180.js";import{C as se,a as It}from"./canEditOrganisation-8fe33599.js";import{G as ue}from"./group-d2a77946.js";import{m as kt,V as Te,a as Tt}from"./VToolbar-785c40db.js";import{u as xt,V as Ct}from"./scopeId-212c7d8e.js";import{V as Et}from"./VTextField-7ad380ec.js";import{u as He,m as Lt,V as Ye}from"./VBtn-41e69288.js";import{u as F,m as Q,a as be,b as We,c as Fe,d as Ge,e as Xe,f as fe,g as Ze,h as je,i as Mt,t as Rt,V as Bt,j as xe}from"./VContainer-6f41cbb0.js";import{u as we,V as Ce,a as $,b as Pt}from"./VList-bdf38fd7.js";import{V as qe,a as Nt}from"./VAvatar-8db0786b.js";import{V as At}from"./VDivider-2f3546a9.js";import{s as Dt}from"./index-26b71cef.js";import"./nil-d01db1aa.js";import"./forwardRefs-a66d512a.js";import"./createSimpleFunctional-5d514360.js";const ie=Symbol.for("vuetify:layout"),Ke=Symbol.for("vuetify:layout-item"),Ee=1e3,Je=D({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),_e=D({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ot(){const e=ge(ie);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ve(e){const l=ge(ie);if(!l)throw new Error("[Vuetify] Could not find injected layout");const o=e.id??`layout-item-${at()}`,n=Re("useLayoutItem");Be(Ke,{id:o});const a=M(!1);ot(()=>a.value=!0),nt(()=>a.value=!1);const{layoutItemStyles:t,layoutItemScrimStyles:s}=l.register(n,{...e,active:v(()=>a.value?!1:e.active.value),id:o});return re(()=>l.unregister(o)),{layoutItemStyles:t,layoutRect:l.layoutRect,layoutItemScrimStyles:s}}const $t=(e,l,o,n)=>{let a={top:0,left:0,right:0,bottom:0};const t=[{id:"",layer:{...a}}];for(const s of e){const d=l.get(s),p=o.get(s),r=n.get(s);if(!d||!p||!r)continue;const i={...a,[d.value]:parseInt(a[d.value],10)+(r.value?parseInt(p.value,10):0)};t.push({id:s,layer:i}),a=i}return t};function Qe(e){const l=ge(ie,null),o=v(()=>l?l.rootZIndex.value-100:Ee),n=L([]),a=q(new Map),t=q(new Map),s=q(new Map),d=q(new Map),p=q(new Map),{resizeRef:r,contentRect:i}=He(),_=v(()=>{const c=new Map,f=e.overlaps??[];for(const g of f.filter(S=>S.includes(":"))){const[S,V]=g.split(":");if(!n.value.includes(S)||!n.value.includes(V))continue;const R=a.get(S),O=a.get(V),z=t.get(S),Y=t.get(V);!R||!O||!z||!Y||(c.set(V,{position:R.value,amount:parseInt(z.value,10)}),c.set(S,{position:O.value,amount:-parseInt(Y.value,10)}))}return c}),h=v(()=>{const c=[...new Set([...s.values()].map(g=>g.value))].sort((g,S)=>g-S),f=[];for(const g of c){const S=n.value.filter(V=>{var R;return((R=s.get(V))==null?void 0:R.value)===g});f.push(...S)}return $t(f,a,t,d)}),m=v(()=>!Array.from(p.values()).some(c=>c.value)),b=v(()=>h.value[h.value.length-1].layer),C=v(()=>({"--v-layout-left":Z(b.value.left),"--v-layout-right":Z(b.value.right),"--v-layout-top":Z(b.value.top),"--v-layout-bottom":Z(b.value.bottom),...m.value?void 0:{transition:"none"}})),k=v(()=>h.value.slice(1).map((c,f)=>{let{id:g}=c;const{layer:S}=h.value[f],V=t.get(g),R=a.get(g);return{id:g,...S,size:Number(V.value),position:R.value}})),w=c=>k.value.find(f=>f.id===c),T=Re("createLayout"),x=M(!1);ce(()=>{x.value=!0}),Be(ie,{register:(c,f)=>{let{id:g,order:S,position:V,layoutSize:R,elementSize:O,active:z,disableTransitions:Y,absolute:ee}=f;s.set(g,S),a.set(g,V),t.set(g,R),d.set(g,z),Y&&p.set(g,Y);const te=lt(Ke,T==null?void 0:T.vnode).indexOf(c);te>-1?n.value.splice(te,0,g):n.value.push(g);const ae=v(()=>k.value.findIndex(H=>H.id===g)),E=v(()=>o.value+h.value.length*2-ae.value*2),oe=v(()=>{const H=V.value==="left"||V.value==="right",G=V.value==="right",tt=V.value==="bottom",Ie={[V.value]:0,zIndex:E.value,transform:`translate${H?"X":"Y"}(${(z.value?0:-110)*(G||tt?-1:1)}%)`,position:ee.value||o.value!==Ee?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!x.value)return Ie;const A=k.value[ae.value];if(!A)throw new Error(`[Vuetify] Could not find layout item "${g}"`);const ve=_.value.get(g);return ve&&(A[ve.position]+=ve.amount),{...Ie,height:H?`calc(100% - ${A.top}px - ${A.bottom}px)`:O.value?`${O.value}px`:void 0,left:G?void 0:`${A.left}px`,right:G?`${A.right}px`:void 0,top:V.value!=="bottom"?`${A.top}px`:void 0,bottom:V.value!=="top"?`${A.bottom}px`:void 0,width:H?O.value?`${O.value}px`:void 0:`calc(100% - ${A.left}px - ${A.right}px)`}}),ne=v(()=>({zIndex:E.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ne,zIndex:E}},unregister:c=>{s.delete(c),a.delete(c),t.delete(c),d.delete(c),p.delete(c),n.value=n.value.filter(f=>f!==c)},mainRect:b,mainStyles:C,getLayoutItem:w,items:k,layoutRect:i,rootZIndex:o});const P=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),y=v(()=>({zIndex:o.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:P,layoutStyles:y,getLayoutItem:w,items:k,layoutRect:i,layoutRef:r}}const Ut=(e,l=void 0)=>e===void 0?!1:l===void 0?se(e,ue.GROUP_TYPE_CONVENTION).ManageUsers:se(e,ue.GROUP_TYPE_CONVENTION,l.ConventionUUID,l).ManageUsers,zt=(e,l=void 0)=>{let o;return e===void 0?!1:(l===void 0?o=se(e,ue.GROUP_TYPE_CONVENTION):o=se(e,ue.GROUP_TYPE_CONVENTION,l.ConventionUUID,l),o.EditConvention||o.ManageViews||o.ViewRegistration||o.EditRegistration)};const Ht=D({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Yt(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:o}=l;let n=0;const a=L(null),t=M(0),s=M(0),d=M(0),p=M(!1),r=M(!1),i=v(()=>Number(e.scrollThreshold)),_=v(()=>st((i.value-t.value)/i.value||0)),h=()=>{const m=a.value;!m||o&&!o.value||(n=t.value,t.value="window"in m?m.pageYOffset:m.scrollTop,r.value=t.value<n,d.value=Math.abs(t.value-i.value))};return U(r,()=>{s.value=s.value||t.value}),U(p,()=>{s.value=0}),ce(()=>{U(()=>e.scrollTarget,m=>{var C;const b=m?document.querySelector(m):window;b&&b!==a.value&&((C=a.value)==null||C.removeEventListener("scroll",h),a.value=b,a.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),re(()=>{var m;(m=a.value)==null||m.removeEventListener("scroll",h)}),o&&U(o,h,{immediate:!0}),{scrollThreshold:i,currentScroll:t,currentThreshold:d,isScrollActive:p,scrollRatio:_,isScrollingUp:r,savedScroll:s}}const Wt=D({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...kt(),..._e(),...Ht(),height:{type:[Number,String],default:64}},"VAppBar"),Ft=W()({name:"VAppBar",props:Wt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:o}=l;const n=L(),a=Pe(e,"modelValue"),t=v(()=>{var T;const w=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:w.has("hide"),inverted:w.has("inverted"),collapse:w.has("collapse"),elevate:w.has("elevate"),fadeImage:w.has("fade-image")}}),s=v(()=>{const w=t.value;return w.hide||w.inverted||w.collapse||w.elevate||w.fadeImage||!a.value}),{currentScroll:d,scrollThreshold:p,isScrollingUp:r,scrollRatio:i}=Yt(e,{canScroll:s}),_=v(()=>e.collapse||t.value.collapse&&(t.value.inverted?i.value>0:i.value===0)),h=v(()=>e.flat||t.value.elevate&&(t.value.inverted?d.value>0:d.value===0)),m=v(()=>t.value.fadeImage?t.value.inverted?1-i.value:i.value:void 0),b=v(()=>{var x,P;if(t.value.hide&&t.value.inverted)return 0;const w=((x=n.value)==null?void 0:x.contentHeight)??0,T=((P=n.value)==null?void 0:P.extensionHeight)??0;return w+T});ut(v(()=>!!e.scrollBehavior),()=>{it(()=>{t.value.hide?t.value.inverted?a.value=d.value>p.value:a.value=r.value||d.value<p.value:a.value=!0})});const{ssrBootStyles:C}=we(),{layoutItemStyles:k}=Ve({id:e.name,order:v(()=>parseInt(e.order,10)),position:j(e,"location"),layoutSize:b,elementSize:M(void 0),active:a,absolute:j(e,"absolute")});return F(()=>{const[w]=Te.filterProps(e);return u(Te,J({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...k.value,"--v-toolbar-image-opacity":m.value,height:void 0,...C.value},e.style]},w,{collapse:_.value,flat:h.value}),o)}),{}}}),Gt=D({...Lt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Xt=W()({name:"VAppBarNavIcon",props:Gt(),setup(e,l){let{slots:o}=l;return F(()=>u(Ye,J(e,{class:["v-app-bar-nav-icon"]}),o)),{}}});const Zt=D({...Q(),...Je()},"VLayout"),jt=W()({name:"VLayout",props:Zt(),setup(e,l){let{slots:o}=l;const{layoutClasses:n,layoutStyles:a,getLayoutItem:t,items:s,layoutRef:d}=Qe(e);return F(()=>{var p;return u("div",{ref:d,class:[n.value,e.class],style:[a.value,e.style]},[(p=o.default)==null?void 0:p.call(o)])}),{getLayoutItem:t,items:s}}});const qt=D({scrollable:Boolean,...Q(),...be({tag:"main"})},"VMain"),et=W()({name:"VMain",props:qt(),setup(e,l){let{slots:o}=l;const{mainStyles:n}=Ot(),{ssrBootStyles:a}=we();return F(()=>u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,a.value,e.style]},{default:()=>{var t,s;return[e.scrollable?u("div",{class:"v-main__scroller"},[(t=o.default)==null?void 0:t.call(o)]):(s=o.default)==null?void 0:s.call(o)]}})),{}}});function Kt(e){let{rootEl:l,isSticky:o,layoutItemStyles:n}=e;const a=M(!1),t=M(0),s=v(()=>{const r=typeof a.value=="boolean"?"top":a.value;return[o.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[r]:Z(t.value)}:{top:n.value.top}]});ce(()=>{U(o,r=>{r?window.addEventListener("scroll",p,{passive:!0}):window.removeEventListener("scroll",p)},{immediate:!0})}),re(()=>{window.removeEventListener("scroll",p)});let d=0;function p(){const r=d>window.scrollY?"up":"down",i=l.value.getBoundingClientRect(),_=parseFloat(n.value.top??0),h=window.scrollY-Math.max(0,t.value-_),m=i.height+Math.max(t.value,_)-window.scrollY-window.innerHeight,b=parseFloat(getComputedStyle(l.value).getPropertyValue("--v-body-scroll-y"))||0;i.height<window.innerHeight-_?(a.value="top",t.value=_):r==="up"&&a.value==="bottom"||r==="down"&&a.value==="top"?(t.value=window.scrollY+i.top-b,a.value=!0):r==="down"&&m<=0?(t.value=0,a.value="bottom"):r==="up"&&h<=0&&(b?a.value!=="top"&&(t.value=-h+b+_,a.value="top"):(t.value=i.top+h,a.value="top")),d=window.scrollY}return{isStuck:a,stickyStyles:s}}const Jt=100,Qt=20;function Le(e){const l=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*l}function Me(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let l=0;for(let o=e.length-1;o>0;o--){if(e[o].t===e[o-1].t)continue;const n=Le(l),a=(e[o].d-e[o-1].d)/(e[o].t-e[o-1].t);l+=(a-n)*Math.abs(a),o===e.length-1&&(l*=.5)}return Le(l)*1e3}function ea(){const e={};function l(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new rt(Qt))).push([a.timeStamp,t])})}function o(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function n(a){var r;const t=(r=e[a])==null?void 0:r.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const s=t[0],d=[],p=[];for(const i of t){if(s[0]-i[0]>Jt)break;d.push({t:i[0],d:i[1].clientX}),p.push({t:i[0],d:i[1].clientY})}return{x:Me(d),y:Me(p),get direction(){const{x:i,y:_}=this,[h,m]=[Math.abs(i),Math.abs(_)];return h>m&&i>=0?"right":h>m&&i<=0?"left":m>h&&_>=0?"down":m>h&&_<=0?"up":ta()}}}return{addMovement:l,endTouch:o,getVelocity:n}}function ta(){throw new Error}function aa(e){let{isActive:l,isTemporary:o,width:n,touchless:a,position:t}=e;ce(()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",x,{passive:!0})}),re(()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",x)});const s=v(()=>["left","right"].includes(t.value)),{addMovement:d,endTouch:p,getVelocity:r}=ea();let i=!1;const _=M(!1),h=M(0),m=M(0);let b;function C(y,c){return(t.value==="left"?y:t.value==="right"?document.documentElement.clientWidth-y:t.value==="top"?y:t.value==="bottom"?document.documentElement.clientHeight-y:X())-(c?n.value:0)}function k(y){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const f=t.value==="left"?(y-m.value)/n.value:t.value==="right"?(document.documentElement.clientWidth-y-m.value)/n.value:t.value==="top"?(y-m.value)/n.value:t.value==="bottom"?(document.documentElement.clientHeight-y-m.value)/n.value:X();return c?Math.max(0,Math.min(1,f)):f}function w(y){if(a.value)return;const c=y.changedTouches[0].clientX,f=y.changedTouches[0].clientY,g=25,S=t.value==="left"?c<g:t.value==="right"?c>document.documentElement.clientWidth-g:t.value==="top"?f<g:t.value==="bottom"?f>document.documentElement.clientHeight-g:X(),V=l.value&&(t.value==="left"?c<n.value:t.value==="right"?c>document.documentElement.clientWidth-n.value:t.value==="top"?f<n.value:t.value==="bottom"?f>document.documentElement.clientHeight-n.value:X());(S||V||l.value&&o.value)&&(i=!0,b=[c,f],m.value=C(s.value?c:f,l.value),h.value=k(s.value?c:f),p(y),d(y))}function T(y){const c=y.changedTouches[0].clientX,f=y.changedTouches[0].clientY;if(i){if(!y.cancelable){i=!1;return}const S=Math.abs(c-b[0]),V=Math.abs(f-b[1]);(s.value?S>V&&S>3:V>S&&V>3)?(_.value=!0,i=!1):(s.value?V:S)>3&&(i=!1)}if(!_.value)return;y.preventDefault(),d(y);const g=k(s.value?c:f,!1);h.value=Math.max(0,Math.min(1,g)),g>1?m.value=C(s.value?c:f,!0):g<0&&(m.value=C(s.value?c:f,!1))}function x(y){if(i=!1,!_.value)return;d(y),_.value=!1;const c=r(y.changedTouches[0].identifier),f=Math.abs(c.x),g=Math.abs(c.y);(s.value?f>g&&f>400:g>f&&g>3)?l.value=c.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||X()):l.value=h.value>.5}const P=v(()=>_.value?{transform:t.value==="left"?`translateX(calc(-100% + ${h.value*n.value}px))`:t.value==="right"?`translateX(calc(100% - ${h.value*n.value}px))`:t.value==="top"?`translateY(calc(-100% + ${h.value*n.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${h.value*n.value}px))`:X(),transition:"none"}:void 0);return{isDragging:_,dragProgress:h,dragStyles:P}}function X(){throw new Error}const oa=["start","end","left","right","top","bottom"],na=D({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>oa.includes(e)},sticky:Boolean,...We(),...Q(),...Fe(),..._e(),...Ge(),...be({tag:"nav"}),...he()},"VNavigationDrawer"),la=W()({name:"VNavigationDrawer",props:na(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,l){let{attrs:o,emit:n,slots:a}=l;const{isRtl:t}=Ne(),{themeClasses:s}=ye(e),{borderClasses:d}=Xe(e),{backgroundColorClasses:p,backgroundColorStyles:r}=fe(j(e,"color")),{elevationClasses:i}=Ze(e),{mobile:_}=ct(),{roundedClasses:h}=je(e),m=Mt(),b=Pe(e,"modelValue",null,E=>!!E),{ssrBootStyles:C}=we(),{scopeId:k}=xt(),w=L(),T=M(!1),x=v(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),P=v(()=>Rt(e.location,t.value)),y=v(()=>!e.permanent&&(_.value||e.temporary)),c=v(()=>e.sticky&&!y.value&&P.value!=="bottom");e.expandOnHover&&e.rail!=null&&U(T,E=>n("update:rail",!E)),e.disableResizeWatcher||U(y,E=>!e.permanent&&vt(()=>b.value=!E)),!e.disableRouteWatcher&&m&&U(m.currentRoute,()=>y.value&&(b.value=!1)),U(()=>e.permanent,E=>{E&&(b.value=!0)}),dt(()=>{e.modelValue!=null||y.value||(b.value=e.permanent||!_.value)});const{isDragging:f,dragProgress:g,dragStyles:S}=aa({isActive:b,isTemporary:y,width:x,touchless:j(e,"touchless"),position:P}),V=v(()=>{const E=y.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):x.value;return f.value?E*g.value:E}),{layoutItemStyles:R,layoutItemScrimStyles:O}=Ve({id:e.name,order:v(()=>parseInt(e.order,10)),position:P,layoutSize:V,elementSize:x,active:v(()=>b.value||f.value),disableTransitions:v(()=>f.value),absolute:v(()=>e.absolute||c.value&&typeof z.value!="string")}),{isStuck:z,stickyStyles:Y}=Kt({rootEl:w,isSticky:c,layoutItemStyles:R}),ee=fe(v(()=>typeof e.scrim=="string"?e.scrim:null)),Se=v(()=>({...f.value?{opacity:g.value*.2,transition:"none"}:void 0,...O.value}));mt({VList:{bgColor:"transparent"}});function te(){T.value=!0}function ae(){T.value=!1}return F(()=>{const E=a.image||e.image;return u(Ae,null,[u(e.tag,J({ref:w,onMouseenter:te,onMouseleave:ae,class:["v-navigation-drawer",`v-navigation-drawer--${P.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":y.value,"v-navigation-drawer--active":b.value,"v-navigation-drawer--sticky":c.value},s.value,p.value,d.value,i.value,h.value,e.class],style:[r.value,R.value,S.value,C.value,Y.value,e.style]},k,o),{default:()=>{var oe,ne,H,G;return[E&&u("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(oe=a.image)==null?void 0:oe.call(a,{image:e.image}):u("img",{src:e.image,alt:""},null)]),a.prepend&&u("div",{class:"v-navigation-drawer__prepend"},[(ne=a.prepend)==null?void 0:ne.call(a)]),u("div",{class:"v-navigation-drawer__content"},[(H=a.default)==null?void 0:H.call(a)]),a.append&&u("div",{class:"v-navigation-drawer__append"},[(G=a.append)==null?void 0:G.call(a)])]}}),u(ft,{name:"fade-transition"},{default:()=>[y.value&&(f.value||b.value)&&!!e.scrim&&u("div",J({class:["v-navigation-drawer__scrim",ee.backgroundColorClasses.value],style:[Se.value,ee.backgroundColorStyles.value],onClick:()=>b.value=!1},k),null)]})])}),{isStuck:z}}}),sa=pe({__name:"DashboardLayout",props:{user:{}},setup(e){const l=St(),o=gt(),n=L(!1),a=L("Default Title"),t=L(""),s=L(ke(e.user)),d=L(l(s.value.UserUUID));$e.getInstance().on("user.profile.saved",C=>{s.value=ke(C)});const r=L(localStorage.getItem("theme")||"light");o.global.name.value=r.value;const i=()=>{r.value=="light"?r.value="dark":r.value="light",o.global.name.value=r.value,localStorage.setItem("theme",r.value)},_=C=>{a.value=C},h=L(zt(e.user)),m=L(It(e.user)),b=L(Ut(e.user));return(C,k)=>{const w=me("RouterLink"),T=me("RouterView");return B(),N(jt,{class:"h-100"},{default:I(()=>[u(Ft,{color:"blue-darken-3"},{default:I(()=>[u(Tt,null,{default:I(()=>[De(Oe(a.value),1)]),_:1}),u(Ct),u(Et,{modelValue:t.value,"onUpdate:modelValue":k[0]||(k[0]=x=>t.value=x),"prepend-inner-icon":"mdi:mdi-magnify",label:"Search",variant:"underlined","hide-details":"",clearable:!0,class:"d-none"},null,8,["modelValue"]),u(Xt,{variant:"text",onClick:k[1]||(k[1]=ht(x=>n.value=!n.value,["stop"]))})]),_:1}),u(la,{modelValue:n.value,"onUpdate:modelValue":k[2]||(k[2]=x=>n.value=x),location:"right",temporary:!0},{default:I(()=>[u(Ce,null,{default:I(()=>[u(w,{to:{name:"Profile"}},{default:I(()=>[u($,{title:s.value.DisplayName},{prepend:I(()=>[d.value?(B(),N(qe,{key:0,src:d.value,class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])):(B(),N(Bt,{key:1,icon:"mdi:mdi-account-circle",size:"x-large"}))]),_:1},8,["title"])]),_:1})]),_:1}),u(At),u(T,{name:"navigation"},{default:I(()=>[u(Ce,null,{default:I(()=>[u(w,{to:"/"},{default:I(()=>[u($,{"prepend-icon":"mdi:mdi-view-dashboard-outline",title:"Home",value:"home"})]),_:1}),h.value||m.value||b.value?(B(),N(Pt,{key:0,value:"Admin"},{activator:I(({props:x})=>[u($,J(x,{"prepend-icon":"mdi:mdi-security",title:"Admin"}),null,16)]),default:I(()=>[h.value?(B(),N(w,{key:0,to:"/admin/conventions"},{default:I(()=>[u($,{"prepend-icon":"mdi:mdi-domain",title:"Conventions",value:"Conventions"})]),_:1})):K("",!0),m.value?(B(),N(w,{key:1,to:"/admin/organisations"},{default:I(()=>[u($,{"prepend-icon":"mdi:mdi-store",title:"Organisations",value:"Organisations"})]),_:1})):K("",!0),b.value?(B(),N(w,{key:2,to:"/admin/groups"},{default:I(()=>[u($,{"prepend-icon":"mdi:mdi-key-chain-variant",title:"Permissions",value:"Permissions"})]),_:1})):K("",!0)]),_:1})):K("",!0),u(w,{to:{name:"Profile"}},{default:I(()=>[u($,{"prepend-icon":"mdi:mdi-account-circle",title:"Manage Account"})]),_:1}),u($,{"prepend-icon":"mdi:mdi-theme-light-dark",onClick:i,title:`${r.value=="light"?"Dark":"Light"} Mode`},null,8,["title"]),u(w,{to:"/logout"},{default:I(()=>[u($,{"prepend-icon":"mdi:mdi-logout",title:"Logout",value:"Logout"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),u(et,null,{default:I(()=>[u(T,{onPageTitle:_})]),_:1})]),_:1})}}});const ua=Ue(sa,[["__scopeId","data-v-1c6b3ea7"]]),ia="/assets/scotiacon-logo-d965f8b6.svg",ra=e=>(pt("data-v-d536b3f1"),e=e(),bt(),e),ca=ra(()=>ze("h1",null,"Scotiacon Registration System",-1)),va=pe({__name:"LoginLayout",setup(e){return(l,o)=>{const n=me("RouterView");return B(),yt(Ae,null,[u(xe,{class:"logo-container text-center"},{default:I(()=>[u(qe,{src:le(ia),class:"scotiacon-logo ma-auto"},null,8,["src"]),ca]),_:1}),u(xe,{class:"login-container text-center mb-0 rounded rounded-lg mb-md-10"},{default:I(()=>[u(Nt,null,{default:I(()=>[u(Ye,{class:"ma-2",color:"indigo",icon:"mdi:mdi-lock-outline"})]),_:1}),ze("h2",null,Oe(le(Dt).headingSignIn),1),u(n)]),_:1})],64)}}});const da=Ue(va,[["__scopeId","data-v-d536b3f1"]]);const ma=D({...Q(),...Je({fullHeight:!0}),...he()},"VApp"),fa=W()({name:"VApp",props:ma(),setup(e,l){let{slots:o}=l;const n=ye(e),{layoutClasses:a,layoutStyles:t,getLayoutItem:s,items:d,layoutRef:p}=Qe(e),{rtlClasses:r}=Ne();return F(()=>{var i;return u("div",{ref:p,class:["v-application",n.themeClasses.value,a.value,r.value,e.class],style:[t.value,e.style]},[u("div",{class:"v-application__wrap"},[(i=o.default)==null?void 0:i.call(o)])])}),{getLayoutItem:s,items:d,theme:n}}});const ga=D({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...We(),...Q(),...Fe(),..._e(),...Ge(),...be({tag:"footer"}),...he()},"VFooter"),ha=W()({name:"VFooter",props:ga(),setup(e,l){let{slots:o}=l;const{themeClasses:n}=ye(e),{backgroundColorClasses:a,backgroundColorStyles:t}=fe(j(e,"color")),{borderClasses:s}=Xe(e),{elevationClasses:d}=Ze(e),{roundedClasses:p}=je(e),r=M(32),{resizeRef:i}=He(m=>{m.length&&(r.value=m[0].target.clientHeight)}),_=v(()=>e.height==="auto"?r.value:parseInt(e.height,10)),{layoutItemStyles:h}=Ve({id:e.name,order:v(()=>parseInt(e.order,10)),position:v(()=>"bottom"),layoutSize:_,elementSize:v(()=>e.height==="auto"?void 0:_.value),active:v(()=>e.app),absolute:j(e,"absolute")});return F(()=>u(e.tag,{ref:i,class:["v-footer",n.value,a.value,s.value,d.value,p.value,e.class],style:[t.value,e.app?h.value:{height:Z(e.height)},e.style]},o)),{}}}),Pa=pe({__name:"Default",emits:["pageTitle"],setup(e,{emit:l}){let o=_t();const n=wt.getInstance(),a=n.getTokenByService("GrazeAPI"),t=L(!1),s=L(!1),d=$e.getInstance();d.on("login",r=>{o=r,t.value=!0}),d.on("logout",()=>{o=void 0,t.value=!1}),d.on("tokenManager.tokenUpdated",()=>{t.value=!0,s.value=!0}),d.on("tokenManager.sessionExpired",()=>{t.value=!1,s.value=!1,de(),location.reload()}),a?o?a.AccessExpires<=Date.now()&&a.RefreshExpires>Date.now()?n.refreshToken(a):a.AccessExpires>Date.now()?(de(),t.value=!1,s.value=!0):(t.value=!0,s.value=!0):Vt().then(r=>{o=r,t.value=!0,s.value=!0}).catch(()=>{t.value=!1,s.value=!0}):(de(),t.value=!1,s.value=!0);const p=r=>{l("pageTitle",r)};return(r,i)=>(B(),N(fa,{class:"bg-image"},{default:I(()=>[s.value?(B(),N(et,{key:0},{default:I(()=>[t.value&&le(o)?(B(),N(ua,{key:0,user:le(o),onPageTitle:p},null,8,["user"])):(B(),N(da,{key:1}))]),_:1})):K("",!0),u(ha,null,{default:I(()=>[De(" Powered by Graze ")]),_:1})]),_:1}))}});export{Pa as default};
