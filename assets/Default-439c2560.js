import{p as O,i as ge,a as at,b as Me,c as Be,s as E,o as ot,d as nt,e as v,f as re,r as L,h as q,j as Z,k as ce,l as lt,m as st,w as $,n as W,u as Pe,q as ut,t as j,v as i,x as J,y as it,C as rt,z as he,A as Ne,B as ye,D as ct,E as vt,F as dt,G as mt,T as ft,H as Ae,I as pe,J as ke,K as me,L as B,M as N,N as I,O as Oe,P as De,Q as gt,R as K,S as $e,_ as Ue,U as ht,V as le,W as ze,X as yt,Y as pt,Z as bt}from"./index-46ae011d.js";import{G as wt,R as de,a as Vt}from"./userData-2d13cd96.js";import{u as _t}from"./useAvatar-bbe88806.js";import{C as se,a as St}from"./canEditOrganisation-1e903dd6.js";import{G as ue}from"./group-d2a77946.js";import{m as It,V as xe,a as kt}from"./VToolbar-b4e51521.js";import{V as xt}from"./VSpacer-c7a99211.js";import{V as Tt}from"./VTextField-c09ca43d.js";import{u as He,m as Ct,V as Ye}from"./VBtn-457dcd6e.js";import{u as F,m as Q,a as be,b as We,c as Fe,d as Ge,e as Xe,f as fe,g as Ze,h as je,i as Et,t as Lt,V as Rt,j as Te}from"./VContainer-c5645db9.js";import{u as we,V as Ce,a as H,b as Mt}from"./VList-fe805c0f.js";import{V as qe,a as Bt}from"./VAvatar-e44c7487.js";import{V as Pt}from"./VDivider-242a7218.js";import{u as Nt}from"./scopeId-85721857.js";import{s as At}from"./index-26b71cef.js";const ie=Symbol.for("vuetify:layout"),Ke=Symbol.for("vuetify:layout-item"),Ee=1e3,Je=O({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ve=O({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ot(){const e=ge(ie);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function _e(e){const n=ge(ie);if(!n)throw new Error("[Vuetify] Could not find injected layout");const o=e.id??`layout-item-${at()}`,l=Me("useLayoutItem");Be(Ke,{id:o});const a=E(!1);ot(()=>a.value=!0),nt(()=>a.value=!1);const{layoutItemStyles:t,layoutItemScrimStyles:s}=n.register(l,{...e,active:v(()=>a.value?!1:e.active.value),id:o});return re(()=>n.unregister(o)),{layoutItemStyles:t,layoutRect:n.layoutRect,layoutItemScrimStyles:s}}const Dt=(e,n,o,l)=>{let a={top:0,left:0,right:0,bottom:0};const t=[{id:"",layer:{...a}}];for(const s of e){const m=n.get(s),p=o.get(s),d=l.get(s);if(!m||!p||!d)continue;const u={...a,[m.value]:parseInt(a[m.value],10)+(d.value?parseInt(p.value,10):0)};t.push({id:s,layer:u}),a=u}return t};function Qe(e){const n=ge(ie,null),o=v(()=>n?n.rootZIndex.value-100:Ee),l=L([]),a=q(new Map),t=q(new Map),s=q(new Map),m=q(new Map),p=q(new Map),{resizeRef:d,contentRect:u}=He(),w=v(()=>{const r=new Map,g=e.overlaps??[];for(const h of g.filter(S=>S.includes(":"))){const[S,V]=h.split(":");if(!l.value.includes(S)||!l.value.includes(V))continue;const R=a.get(S),D=a.get(V),U=t.get(S),Y=t.get(V);!R||!D||!U||!Y||(r.set(V,{position:R.value,amount:parseInt(U.value,10)}),r.set(S,{position:D.value,amount:-parseInt(Y.value,10)}))}return r}),f=v(()=>{const r=[...new Set([...s.values()].map(h=>h.value))].sort((h,S)=>h-S),g=[];for(const h of r){const S=l.value.filter(V=>{var R;return((R=s.get(V))==null?void 0:R.value)===h});g.push(...S)}return Dt(g,a,t,m)}),c=v(()=>!Array.from(p.values()).some(r=>r.value)),y=v(()=>f.value[f.value.length-1].layer),C=v(()=>({"--v-layout-left":Z(y.value.left),"--v-layout-right":Z(y.value.right),"--v-layout-top":Z(y.value.top),"--v-layout-bottom":Z(y.value.bottom),...c.value?void 0:{transition:"none"}})),k=v(()=>f.value.slice(1).map((r,g)=>{let{id:h}=r;const{layer:S}=f.value[g],V=t.get(h),R=a.get(h);return{id:h,...S,size:Number(V.value),position:R.value}})),_=r=>k.value.find(g=>g.id===r),x=Me("createLayout"),M=E(!1);ce(()=>{M.value=!0}),Be(ie,{register:(r,g)=>{let{id:h,order:S,position:V,layoutSize:R,elementSize:D,active:U,disableTransitions:Y,absolute:ee}=g;s.set(h,S),a.set(h,V),t.set(h,R),m.set(h,U),Y&&p.set(h,Y);const te=lt(Ke,x==null?void 0:x.vnode).indexOf(r);te>-1?l.value.splice(te,0,h):l.value.push(h);const ae=v(()=>k.value.findIndex(z=>z.id===h)),T=v(()=>o.value+f.value.length*2-ae.value*2),oe=v(()=>{const z=V.value==="left"||V.value==="right",G=V.value==="right",tt=V.value==="bottom",Ie={[V.value]:0,zIndex:T.value,transform:`translate${z?"X":"Y"}(${(U.value?0:-110)*(G||tt?-1:1)}%)`,position:ee.value||o.value!==Ee?"absolute":"fixed",...c.value?void 0:{transition:"none"}};if(!M.value)return Ie;const A=k.value[ae.value];if(!A)throw new Error(`[Vuetify] Could not find layout item "${h}"`);const ve=w.value.get(h);return ve&&(A[ve.position]+=ve.amount),{...Ie,height:z?`calc(100% - ${A.top}px - ${A.bottom}px)`:D.value?`${D.value}px`:void 0,left:G?void 0:`${A.left}px`,right:G?`${A.right}px`:void 0,top:V.value!=="bottom"?`${A.top}px`:void 0,bottom:V.value!=="top"?`${A.bottom}px`:void 0,width:z?D.value?`${D.value}px`:void 0:`calc(100% - ${A.left}px - ${A.right}px)`}}),ne=v(()=>({zIndex:T.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ne,zIndex:T}},unregister:r=>{s.delete(r),a.delete(r),t.delete(r),m.delete(r),p.delete(r),l.value=l.value.filter(g=>g!==r)},mainRect:y,mainStyles:C,getLayoutItem:_,items:k,layoutRect:u,rootZIndex:o});const P=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),b=v(()=>({zIndex:o.value,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:P,layoutStyles:b,getLayoutItem:_,items:k,layoutRect:u,layoutRef:d}}const $t=(e,n=void 0)=>e===void 0?!1:n===void 0?se(e,ue.GROUP_TYPE_CONVENTION).ManageUsers:se(e,ue.GROUP_TYPE_CONVENTION,n.ConventionUUID,n).ManageUsers,Ut=(e,n=void 0)=>{let o;return e===void 0?!1:(n===void 0?o=se(e,ue.GROUP_TYPE_CONVENTION):o=se(e,ue.GROUP_TYPE_CONVENTION,n.ConventionUUID,n),o.EditConvention||o.ManageViews||o.ViewRegistration||o.EditRegistration)};const zt=O({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ht(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:o}=n;let l=0;const a=L(null),t=E(0),s=E(0),m=E(0),p=E(!1),d=E(!1),u=v(()=>Number(e.scrollThreshold)),w=v(()=>st((u.value-t.value)/u.value||0)),f=()=>{const c=a.value;!c||o&&!o.value||(l=t.value,t.value="window"in c?c.pageYOffset:c.scrollTop,d.value=t.value<l,m.value=Math.abs(t.value-u.value))};return $(d,()=>{s.value=s.value||t.value}),$(p,()=>{s.value=0}),ce(()=>{$(()=>e.scrollTarget,c=>{var C;const y=c?document.querySelector(c):window;y&&y!==a.value&&((C=a.value)==null||C.removeEventListener("scroll",f),a.value=y,a.value.addEventListener("scroll",f,{passive:!0}))},{immediate:!0})}),re(()=>{var c;(c=a.value)==null||c.removeEventListener("scroll",f)}),o&&$(o,f,{immediate:!0}),{scrollThreshold:u,currentScroll:t,currentThreshold:m,isScrollActive:p,scrollRatio:w,isScrollingUp:d,savedScroll:s}}const Yt=O({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...It(),...Ve(),...zt(),height:{type:[Number,String],default:64}},"VAppBar"),Wt=W()({name:"VAppBar",props:Yt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const l=L(),a=Pe(e,"modelValue"),t=v(()=>{var x;const _=new Set(((x=e.scrollBehavior)==null?void 0:x.split(" "))??[]);return{hide:_.has("hide"),inverted:_.has("inverted"),collapse:_.has("collapse"),elevate:_.has("elevate"),fadeImage:_.has("fade-image")}}),s=v(()=>{const _=t.value;return _.hide||_.inverted||_.collapse||_.elevate||_.fadeImage||!a.value}),{currentScroll:m,scrollThreshold:p,isScrollingUp:d,scrollRatio:u}=Ht(e,{canScroll:s}),w=v(()=>e.collapse||t.value.collapse&&(t.value.inverted?u.value>0:u.value===0)),f=v(()=>e.flat||t.value.elevate&&(t.value.inverted?m.value>0:m.value===0)),c=v(()=>t.value.fadeImage?t.value.inverted?1-u.value:u.value:void 0),y=v(()=>{var M,P;if(t.value.hide&&t.value.inverted)return 0;const _=((M=l.value)==null?void 0:M.contentHeight)??0,x=((P=l.value)==null?void 0:P.extensionHeight)??0;return _+x});ut(v(()=>!!e.scrollBehavior),()=>{it(()=>{t.value.hide?t.value.inverted?a.value=m.value>p.value:a.value=d.value||m.value<p.value:a.value=!0})});const{ssrBootStyles:C}=we(),{layoutItemStyles:k}=_e({id:e.name,order:v(()=>parseInt(e.order,10)),position:j(e,"location"),layoutSize:y,elementSize:E(void 0),active:a,absolute:j(e,"absolute")});return F(()=>{const[_]=xe.filterProps(e);return i(xe,J({ref:l,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...k.value,"--v-toolbar-image-opacity":c.value,height:void 0,...C.value},e.style]},_,{collapse:w.value,flat:f.value}),o)}),{}}}),Ft=O({...Ct({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Gt=W()({name:"VAppBarNavIcon",props:Ft(),setup(e,n){let{slots:o}=n;return F(()=>i(Ye,J(e,{class:["v-app-bar-nav-icon"]}),o)),{}}});const Xt=O({...Q(),...Je()},"VLayout"),Zt=W()({name:"VLayout",props:Xt(),setup(e,n){let{slots:o}=n;const{layoutClasses:l,layoutStyles:a,getLayoutItem:t,items:s,layoutRef:m}=Qe(e);return F(()=>{var p;return i("div",{ref:m,class:[l.value,e.class],style:[a.value,e.style]},[(p=o.default)==null?void 0:p.call(o)])}),{getLayoutItem:t,items:s}}});const jt=O({scrollable:Boolean,...Q(),...be({tag:"main"})},"VMain"),et=W()({name:"VMain",props:jt(),setup(e,n){let{slots:o}=n;const{mainStyles:l}=Ot(),{ssrBootStyles:a}=we();return F(()=>i(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,a.value,e.style]},{default:()=>{var t,s;return[e.scrollable?i("div",{class:"v-main__scroller"},[(t=o.default)==null?void 0:t.call(o)]):(s=o.default)==null?void 0:s.call(o)]}})),{}}});function qt(e){let{rootEl:n,isSticky:o,layoutItemStyles:l}=e;const a=E(!1),t=E(0),s=v(()=>{const d=typeof a.value=="boolean"?"top":a.value;return[o.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[d]:Z(t.value)}:{top:l.value.top}]});ce(()=>{$(o,d=>{d?window.addEventListener("scroll",p,{passive:!0}):window.removeEventListener("scroll",p)},{immediate:!0})}),re(()=>{document.removeEventListener("scroll",p)});let m=0;function p(){const d=m>window.scrollY?"up":"down",u=n.value.getBoundingClientRect(),w=parseFloat(l.value.top??0),f=window.scrollY-Math.max(0,t.value-w),c=u.height+Math.max(t.value,w)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y"))||0;u.height<window.innerHeight-w?(a.value="top",t.value=w):d==="up"&&a.value==="bottom"||d==="down"&&a.value==="top"?(t.value=window.scrollY+u.top-y,a.value=!0):d==="down"&&c<=0?(t.value=0,a.value="bottom"):d==="up"&&f<=0&&(y?a.value!=="top"&&(t.value=-f+y+w,a.value="top"):(t.value=u.top+f,a.value="top")),m=window.scrollY}return{isStuck:a,stickyStyles:s}}const Kt=100,Jt=20;function Le(e){const n=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*n}function Re(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let n=0;for(let o=e.length-1;o>0;o--){if(e[o].t===e[o-1].t)continue;const l=Le(n),a=(e[o].d-e[o-1].d)/(e[o].t-e[o-1].t);n+=(a-l)*Math.abs(a),o===e.length-1&&(n*=.5)}return Le(n)*1e3}function Qt(){const e={};function n(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new rt(Jt))).push([a.timeStamp,t])})}function o(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function l(a){var d;const t=(d=e[a])==null?void 0:d.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const s=t[0],m=[],p=[];for(const u of t){if(s[0]-u[0]>Kt)break;m.push({t:u[0],d:u[1].clientX}),p.push({t:u[0],d:u[1].clientY})}return{x:Re(m),y:Re(p),get direction(){const{x:u,y:w}=this,[f,c]=[Math.abs(u),Math.abs(w)];return f>c&&u>=0?"right":f>c&&u<=0?"left":c>f&&w>=0?"down":c>f&&w<=0?"up":ea()}}}return{addMovement:n,endTouch:o,getVelocity:l}}function ea(){throw new Error}function ta(e){let{isActive:n,isTemporary:o,width:l,touchless:a,position:t}=e;ce(()=>{window.addEventListener("touchstart",_,{passive:!0}),window.addEventListener("touchmove",x,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),re(()=>{window.removeEventListener("touchstart",_),window.removeEventListener("touchmove",x),window.removeEventListener("touchend",M)});const s=v(()=>["left","right"].includes(t.value)),{addMovement:m,endTouch:p,getVelocity:d}=Qt();let u=!1;const w=E(!1),f=E(0),c=E(0);let y;function C(b,r){return(t.value==="left"?b:t.value==="right"?document.documentElement.clientWidth-b:t.value==="top"?b:t.value==="bottom"?document.documentElement.clientHeight-b:X())-(r?l.value:0)}function k(b){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const g=t.value==="left"?(b-c.value)/l.value:t.value==="right"?(document.documentElement.clientWidth-b-c.value)/l.value:t.value==="top"?(b-c.value)/l.value:t.value==="bottom"?(document.documentElement.clientHeight-b-c.value)/l.value:X();return r?Math.max(0,Math.min(1,g)):g}function _(b){if(a.value)return;const r=b.changedTouches[0].clientX,g=b.changedTouches[0].clientY,h=25,S=t.value==="left"?r<h:t.value==="right"?r>document.documentElement.clientWidth-h:t.value==="top"?g<h:t.value==="bottom"?g>document.documentElement.clientHeight-h:X(),V=n.value&&(t.value==="left"?r<l.value:t.value==="right"?r>document.documentElement.clientWidth-l.value:t.value==="top"?g<l.value:t.value==="bottom"?g>document.documentElement.clientHeight-l.value:X());(S||V||n.value&&o.value)&&(u=!0,y=[r,g],c.value=C(s.value?r:g,n.value),f.value=k(s.value?r:g),p(b),m(b))}function x(b){const r=b.changedTouches[0].clientX,g=b.changedTouches[0].clientY;if(u){if(!b.cancelable){u=!1;return}const S=Math.abs(r-y[0]),V=Math.abs(g-y[1]);(s.value?S>V&&S>3:V>S&&V>3)?(w.value=!0,u=!1):(s.value?V:S)>3&&(u=!1)}if(!w.value)return;b.preventDefault(),m(b);const h=k(s.value?r:g,!1);f.value=Math.max(0,Math.min(1,h)),h>1?c.value=C(s.value?r:g,!0):h<0&&(c.value=C(s.value?r:g,!1))}function M(b){if(u=!1,!w.value)return;m(b),w.value=!1;const r=d(b.changedTouches[0].identifier),g=Math.abs(r.x),h=Math.abs(r.y);(s.value?g>h&&g>400:h>g&&h>3)?n.value=r.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||X()):n.value=f.value>.5}const P=v(()=>w.value?{transform:t.value==="left"?`translateX(calc(-100% + ${f.value*l.value}px))`:t.value==="right"?`translateX(calc(100% - ${f.value*l.value}px))`:t.value==="top"?`translateY(calc(-100% + ${f.value*l.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${f.value*l.value}px))`:X(),transition:"none"}:void 0);return{isDragging:w,dragProgress:f,dragStyles:P}}function X(){throw new Error}const aa=["start","end","left","right","top","bottom"],oa=O({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>aa.includes(e)},sticky:Boolean,...We(),...Q(),...Fe(),...Ve(),...Ge(),...be({tag:"nav"}),...he()},"VNavigationDrawer"),na=W()({name:"VNavigationDrawer",props:oa(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,n){let{attrs:o,emit:l,slots:a}=n;const{isRtl:t}=Ne(),{themeClasses:s}=ye(e),{borderClasses:m}=Xe(e),{backgroundColorClasses:p,backgroundColorStyles:d}=fe(j(e,"color")),{elevationClasses:u}=Ze(e),{mobile:w}=ct(),{roundedClasses:f}=je(e),c=Et(),y=Pe(e,"modelValue",null,T=>!!T),{ssrBootStyles:C}=we(),{scopeId:k}=Nt(),_=L(),x=E(!1),M=v(()=>e.rail&&e.expandOnHover&&x.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),P=v(()=>Lt(e.location,t.value)),b=v(()=>!e.permanent&&(w.value||e.temporary)),r=v(()=>e.sticky&&!b.value&&P.value!=="bottom");e.expandOnHover&&e.rail!=null&&$(x,T=>l("update:rail",!T)),e.disableResizeWatcher||$(b,T=>!e.permanent&&vt(()=>y.value=!T)),!e.disableRouteWatcher&&c&&$(c.currentRoute,()=>b.value&&(y.value=!1)),$(()=>e.permanent,T=>{T&&(y.value=!0)}),dt(()=>{e.modelValue!=null||b.value||(y.value=e.permanent||!w.value)});const{isDragging:g,dragProgress:h,dragStyles:S}=ta({isActive:y,isTemporary:b,width:M,touchless:j(e,"touchless"),position:P}),V=v(()=>{const T=b.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):M.value;return g.value?T*h.value:T}),{layoutItemStyles:R,layoutItemScrimStyles:D}=_e({id:e.name,order:v(()=>parseInt(e.order,10)),position:P,layoutSize:V,elementSize:M,active:v(()=>y.value||g.value),disableTransitions:v(()=>g.value),absolute:v(()=>e.absolute||r.value&&typeof U.value!="string")}),{isStuck:U,stickyStyles:Y}=qt({rootEl:_,isSticky:r,layoutItemStyles:R}),ee=fe(v(()=>typeof e.scrim=="string"?e.scrim:null)),Se=v(()=>({...g.value?{opacity:h.value*.2,transition:"none"}:void 0,...D.value}));mt({VList:{bgColor:"transparent"}});function te(){x.value=!0}function ae(){x.value=!1}return F(()=>{const T=a.image||e.image;return i(Ae,null,[i(e.tag,J({ref:_,onMouseenter:te,onMouseleave:ae,class:["v-navigation-drawer",`v-navigation-drawer--${P.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":x.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":b.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":r.value},s.value,p.value,m.value,u.value,f.value,e.class],style:[d.value,R.value,S.value,C.value,Y.value,e.style]},k,o),{default:()=>{var oe,ne,z,G;return[T&&i("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(oe=a.image)==null?void 0:oe.call(a,{image:e.image}):i("img",{src:e.image,alt:""},null)]),a.prepend&&i("div",{class:"v-navigation-drawer__prepend"},[(ne=a.prepend)==null?void 0:ne.call(a)]),i("div",{class:"v-navigation-drawer__content"},[(z=a.default)==null?void 0:z.call(a)]),a.append&&i("div",{class:"v-navigation-drawer__append"},[(G=a.append)==null?void 0:G.call(a)])]}}),i(ft,{name:"fade-transition"},{default:()=>[b.value&&(g.value||y.value)&&!!e.scrim&&i("div",J({class:["v-navigation-drawer__scrim",ee.backgroundColorClasses.value],style:[Se.value,ee.backgroundColorStyles.value],onClick:()=>y.value=!1},k),null)]})])}),{isStuck:U}}}),la=pe({__name:"DashboardLayout",props:{user:{}},setup(e){const n=L(!1),o=L("Default Title"),l=L(""),a=_t(),t=L(ke(e.user)),s=L(a(t.value.UserUUID));$e.getInstance().on("user.profile.saved",f=>{t.value=ke(f)});const p=f=>{o.value=f},d=L(Ut(e.user)),u=L(St(e.user)),w=L($t(e.user));return(f,c)=>{const y=me("RouterLink"),C=me("RouterView");return B(),N(Zt,{class:"h-100"},{default:I(()=>[i(Wt,{color:"primary"},{default:I(()=>[i(kt,null,{default:I(()=>[Oe(De(o.value),1)]),_:1}),i(xt),i(Tt,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=k=>l.value=k),"prepend-inner-icon":"mdi:mdi-magnify",label:"Search",variant:"underlined","hide-details":"",clearable:!0,class:"d-none"},null,8,["modelValue"]),i(Gt,{variant:"text",onClick:c[1]||(c[1]=gt(k=>n.value=!n.value,["stop"]))})]),_:1}),i(na,{modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=k=>n.value=k),location:"right",temporary:!0},{default:I(()=>[i(Ce,null,{default:I(()=>[i(y,{to:{name:"Profile"}},{default:I(()=>[i(H,{title:t.value.DisplayName},{prepend:I(()=>[s.value?(B(),N(qe,{key:0,src:s.value,class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])):(B(),N(Rt,{key:1,icon:"mdi:mdi-account-circle",size:"x-large"}))]),_:1},8,["title"])]),_:1})]),_:1}),i(Pt),i(C,{name:"navigation"},{default:I(()=>[i(Ce,null,{default:I(()=>[i(y,{to:"/"},{default:I(()=>[i(H,{"prepend-icon":"mdi:mdi-view-dashboard-outline",title:"Home",value:"home"})]),_:1}),d.value||u.value||w.value?(B(),N(Mt,{key:0,value:"Admin"},{activator:I(({props:k})=>[i(H,J(k,{"prepend-icon":"mdi:mdi-security",title:"Admin"}),null,16)]),default:I(()=>[d.value?(B(),N(y,{key:0,to:"/admin/conventions"},{default:I(()=>[i(H,{"prepend-icon":"mdi:mdi-domain",title:"Conventions",value:"Conventions"})]),_:1})):K("",!0),u.value?(B(),N(y,{key:1,to:"/admin/organisations"},{default:I(()=>[i(H,{"prepend-icon":"mdi:mdi-store",title:"Organisations",value:"Organisations"})]),_:1})):K("",!0),w.value?(B(),N(y,{key:2,to:"/admin/groups"},{default:I(()=>[i(H,{"prepend-icon":"mdi:mdi-key-chain-variant",title:"Permissions",value:"Permissions"})]),_:1})):K("",!0)]),_:1})):K("",!0),i(y,{to:{name:"Profile"}},{default:I(()=>[i(H,{"prepend-icon":"mdi:mdi-account-circle",title:"Manage Account"})]),_:1}),i(y,{to:"/logout"},{default:I(()=>[i(H,{"prepend-icon":"mdi:mdi-logout",title:"Logout",value:"Logout"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(et,null,{default:I(()=>[i(C,{onPageTitle:p})]),_:1})]),_:1})}}});const sa=Ue(la,[["__scopeId","data-v-4867720e"]]),ua="/assets/scotiacon-logo-d965f8b6.svg",ia=e=>(yt("data-v-d536b3f1"),e=e(),pt(),e),ra=ia(()=>ze("h1",null,"Scotiacon Registration System",-1)),ca=pe({__name:"LoginLayout",setup(e){return(n,o)=>{const l=me("RouterView");return B(),ht(Ae,null,[i(Te,{class:"logo-container text-center"},{default:I(()=>[i(qe,{src:le(ua),class:"scotiacon-logo ma-auto"},null,8,["src"]),ra]),_:1}),i(Te,{class:"login-container text-center mb-0 rounded rounded-lg mb-md-10"},{default:I(()=>[i(Bt,null,{default:I(()=>[i(Ye,{class:"ma-2",color:"indigo",icon:"mdi:mdi-lock-outline"})]),_:1}),ze("h2",null,De(le(At).headingSignIn),1),i(l)]),_:1})],64)}}});const va=Ue(ca,[["__scopeId","data-v-d536b3f1"]]);const da=O({...Q(),...Je({fullHeight:!0}),...he()},"VApp"),ma=W()({name:"VApp",props:da(),setup(e,n){let{slots:o}=n;const l=ye(e),{layoutClasses:a,layoutStyles:t,getLayoutItem:s,items:m,layoutRef:p}=Qe(e),{rtlClasses:d}=Ne();return F(()=>{var u;return i("div",{ref:p,class:["v-application",l.themeClasses.value,a.value,d.value,e.class],style:[t.value,e.style]},[i("div",{class:"v-application__wrap"},[(u=o.default)==null?void 0:u.call(o)])])}),{getLayoutItem:s,items:m,theme:l}}});const fa=O({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...We(),...Q(),...Fe(),...Ve(),...Ge(),...be({tag:"footer"}),...he()},"VFooter"),ga=W()({name:"VFooter",props:fa(),setup(e,n){let{slots:o}=n;const{themeClasses:l}=ye(e),{backgroundColorClasses:a,backgroundColorStyles:t}=fe(j(e,"color")),{borderClasses:s}=Xe(e),{elevationClasses:m}=Ze(e),{roundedClasses:p}=je(e),d=E(32),{resizeRef:u}=He(c=>{c.length&&(d.value=c[0].target.clientHeight)}),w=v(()=>e.height==="auto"?d.value:parseInt(e.height,10)),{layoutItemStyles:f}=_e({id:e.name,order:v(()=>parseInt(e.order,10)),position:v(()=>"bottom"),layoutSize:w,elementSize:v(()=>e.height==="auto"?void 0:w.value),active:v(()=>e.app),absolute:j(e,"absolute")});return F(()=>i(e.tag,{ref:u,class:["v-footer",l.value,a.value,s.value,m.value,p.value,e.class],style:[t.value,e.app?f.value:{height:Z(e.height)},e.style]},o)),{}}}),Ra=pe({__name:"Default",emits:["pageTitle"],setup(e,{emit:n}){let o=wt();const l=bt.getInstance(),a=l.getTokenByService("GrazeAPI"),t=L(!1),s=L(!1),m=$e.getInstance();m.on("login",d=>{o=d,t.value=!0}),m.on("logout",()=>{o=void 0,t.value=!1}),m.on("tokenManager.tokenUpdated",()=>{t.value=!0,s.value=!0}),m.on("tokenManager.sessionExpired",()=>{t.value=!1,s.value=!1,de(),location.reload()}),a?o?a.AccessExpires<=Date.now()&&a.RefreshExpires>Date.now()?l.refreshToken(a):a.AccessExpires>Date.now()?(de(),t.value=!1,s.value=!0):(t.value=!0,s.value=!0):Vt().then(d=>{o=d,t.value=!0,s.value=!0}).catch(()=>{t.value=!1,s.value=!0}):(de(),t.value=!1,s.value=!0);const p=d=>{n("pageTitle",d)};return(d,u)=>(B(),N(ma,{class:"bg-image"},{default:I(()=>[s.value?(B(),N(et,{key:0},{default:I(()=>[t.value&&le(o)?(B(),N(sa,{key:0,user:le(o),onPageTitle:p},null,8,["user"])):(B(),N(va,{key:1}))]),_:1})):K("",!0),i(ga,null,{default:I(()=>[Oe(" Powered by Graze ")]),_:1})]),_:1}))}});export{Ra as default};
