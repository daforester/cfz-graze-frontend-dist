import{p as A,i as fe,a as Qe,b as Ee,c as Re,s as x,o as et,d as tt,e as c,f as re,r as B,h as q,j as Z,k as ce,l as at,m as ot,w as D,n as W,u as Be,q as nt,t as j,v as s,x as K,y as lt,C as st,z as ge,A as Me,B as he,D as ut,E as it,F as rt,G as ct,T as vt,H as Pe,I as ye,J as de,K as P,L as O,M as I,N as Ne,O as Oe,P as dt,Q as ne,_ as Ae,R as mt,S as le,U as $e,V as ft,W as gt,X as ht,Y as yt}from"./index-f94693a1.js";import{G as pt,R as bt,a as wt}from"./userData-92c980ee.js";import{u as St}from"./useAvatar-d63adcdd.js";import{C as se,a as Vt}from"./canEditOrganisation-229656eb.js";import{G as ue}from"./group-d2a77946.js";import{m as _t,V as Ie,a as It}from"./VToolbar-e4b1ee93.js";import{V as Tt,a as De,b as kt}from"./VAvatar-484efd8f.js";import{V as xt}from"./VTextField-a2e123d3.js";import{u as ze,a as F,m as Ct,V as He,b as J,c as pe,d as Ue,e as Ye,f as We,g as Fe,h as me,i as Ge,j as Xe,k as Lt,t as Et,l as Rt,n as Te}from"./VContainer-87d98084.js";import{u as be,V as ke,a as U,b as Bt,c as Mt}from"./VList-769824d9.js";import{u as Pt}from"./scopeId-55d54b09.js";import{s as Nt}from"./index-71069b21.js";import"./useStoreAPI-ef19dea0.js";import"./index-60fb9ccb.js";const ie=Symbol.for("vuetify:layout"),Ze=Symbol.for("vuetify:layout-item"),xe=1e3,je=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),we=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ot(){const e=fe(ie);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Se(e){const n=fe(ie);if(!n)throw new Error("[Vuetify] Could not find injected layout");const o=e.id??`layout-item-${Qe()}`,l=Ee("useLayoutItem");Re(Ze,{id:o});const a=x(!1);et(()=>a.value=!0),tt(()=>a.value=!1);const{layoutItemStyles:t,layoutItemScrimStyles:u}=n.register(l,{...e,active:c(()=>a.value?!1:e.active.value),id:o});return re(()=>n.unregister(o)),{layoutItemStyles:t,layoutRect:n.layoutRect,layoutItemScrimStyles:u}}const At=(e,n,o,l)=>{let a={top:0,left:0,right:0,bottom:0};const t=[{id:"",layer:{...a}}];for(const u of e){const f=n.get(u),d=o.get(u),p=l.get(u);if(!f||!d||!p)continue;const i={...a,[f.value]:parseInt(a[f.value],10)+(p.value?parseInt(d.value,10):0)};t.push({id:u,layer:i}),a=i}return t};function qe(e){const n=fe(ie,null),o=c(()=>n?n.rootZIndex.value-100:xe),l=B([]),a=q(new Map),t=q(new Map),u=q(new Map),f=q(new Map),d=q(new Map),{resizeRef:p,contentRect:i}=ze(),b=c(()=>{const r=new Map,g=e.overlaps??[];for(const h of g.filter(_=>_.includes(":"))){const[_,S]=h.split(":");if(!l.value.includes(_)||!l.value.includes(S))continue;const L=a.get(_),$=a.get(S),z=t.get(_),Y=t.get(S);!L||!$||!z||!Y||(r.set(S,{position:L.value,amount:parseInt(z.value,10)}),r.set(_,{position:$.value,amount:-parseInt(Y.value,10)}))}return r}),v=c(()=>{const r=[...new Set([...u.values()].map(h=>h.value))].sort((h,_)=>h-_),g=[];for(const h of r){const _=l.value.filter(S=>{var L;return((L=u.get(S))==null?void 0:L.value)===h});g.push(..._)}return At(g,a,t,f)}),m=c(()=>!Array.from(d.values()).some(r=>r.value)),y=c(()=>v.value[v.value.length-1].layer),E=c(()=>({"--v-layout-left":Z(y.value.left),"--v-layout-right":Z(y.value.right),"--v-layout-top":Z(y.value.top),"--v-layout-bottom":Z(y.value.bottom),...m.value?void 0:{transition:"none"}})),C=c(()=>v.value.slice(1).map((r,g)=>{let{id:h}=r;const{layer:_}=v.value[g],S=t.get(h),L=a.get(h);return{id:h,..._,size:Number(S.value),position:L.value}})),V=r=>C.value.find(g=>g.id===r),T=Ee("createLayout"),R=x(!1);ce(()=>{R.value=!0}),Re(ie,{register:(r,g)=>{let{id:h,order:_,position:S,layoutSize:L,elementSize:$,active:z,disableTransitions:Y,absolute:Q}=g;u.set(h,_),a.set(h,S),t.set(h,L),f.set(h,z),Y&&d.set(h,Y);const ee=at(Ze,T==null?void 0:T.vnode).indexOf(r);ee>-1?l.value.splice(ee,0,h):l.value.push(h);const te=c(()=>C.value.findIndex(H=>H.id===h)),k=c(()=>o.value+v.value.length*2-te.value*2),ae=c(()=>{const H=S.value==="left"||S.value==="right",G=S.value==="right",Je=S.value==="bottom",_e={[S.value]:0,zIndex:k.value,transform:`translate${H?"X":"Y"}(${(z.value?0:-110)*(G||Je?-1:1)}%)`,position:Q.value||o.value!==xe?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!R.value)return _e;const N=C.value[te.value];if(!N)throw new Error(`[Vuetify] Could not find layout item "${h}"`);const ve=b.value.get(h);return ve&&(N[ve.position]+=ve.amount),{..._e,height:H?`calc(100% - ${N.top}px - ${N.bottom}px)`:$.value?`${$.value}px`:void 0,left:G?void 0:`${N.left}px`,right:G?`${N.right}px`:void 0,top:S.value!=="bottom"?`${N.top}px`:void 0,bottom:S.value!=="top"?`${N.bottom}px`:void 0,width:H?$.value?`${$.value}px`:void 0:`calc(100% - ${N.left}px - ${N.right}px)`}}),oe=c(()=>({zIndex:k.value-1}));return{layoutItemStyles:ae,layoutItemScrimStyles:oe,zIndex:k}},unregister:r=>{u.delete(r),a.delete(r),t.delete(r),f.delete(r),d.delete(r),l.value=l.value.filter(g=>g!==r)},mainRect:y,mainStyles:E,getLayoutItem:V,items:C,layoutRect:i,rootZIndex:o});const M=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),w=c(()=>({zIndex:o.value,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:M,layoutStyles:w,getLayoutItem:V,items:C,layoutRect:i,layoutRef:p}}const $t=(e,n=void 0)=>e===void 0?!1:n===void 0?se(e,ue.GROUP_TYPE_CONVENTION).ManageUsers:se(e,ue.GROUP_TYPE_CONVENTION,n.ConventionUUID,n).ManageUsers,Dt=(e,n=void 0)=>{let o;return e===void 0?!1:(n===void 0?o=se(e,ue.GROUP_TYPE_CONVENTION):o=se(e,ue.GROUP_TYPE_CONVENTION,n.ConventionUUID,n),o.EditConvention||o.ManageViews||o.ViewRegistration||o.EditRegistration)};const zt=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ht(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:o}=n;let l=0;const a=B(null),t=x(0),u=x(0),f=x(0),d=x(!1),p=x(!1),i=c(()=>Number(e.scrollThreshold)),b=c(()=>ot((i.value-t.value)/i.value||0)),v=()=>{const m=a.value;!m||o&&!o.value||(l=t.value,t.value="window"in m?m.pageYOffset:m.scrollTop,p.value=t.value<l,f.value=Math.abs(t.value-i.value))};return D(p,()=>{u.value=u.value||t.value}),D(d,()=>{u.value=0}),ce(()=>{D(()=>e.scrollTarget,m=>{var E;const y=m?document.querySelector(m):window;y&&y!==a.value&&((E=a.value)==null||E.removeEventListener("scroll",v),a.value=y,a.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),re(()=>{var m;(m=a.value)==null||m.removeEventListener("scroll",v)}),o&&D(o,v,{immediate:!0}),{scrollThreshold:i,currentScroll:t,currentThreshold:f,isScrollActive:d,scrollRatio:b,isScrollingUp:p,savedScroll:u}}const Ut=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},..._t(),...we(),...zt(),height:{type:[Number,String],default:64}},"VAppBar"),Yt=W()({name:"VAppBar",props:Ut(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const l=B(),a=Be(e,"modelValue"),t=c(()=>{var T;const V=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:V.has("hide"),inverted:V.has("inverted"),collapse:V.has("collapse"),elevate:V.has("elevate"),fadeImage:V.has("fade-image")}}),u=c(()=>{const V=t.value;return V.hide||V.inverted||V.collapse||V.elevate||V.fadeImage||!a.value}),{currentScroll:f,scrollThreshold:d,isScrollingUp:p,scrollRatio:i}=Ht(e,{canScroll:u}),b=c(()=>e.collapse||t.value.collapse&&(t.value.inverted?i.value>0:i.value===0)),v=c(()=>e.flat||t.value.elevate&&(t.value.inverted?f.value>0:f.value===0)),m=c(()=>t.value.fadeImage?t.value.inverted?1-i.value:i.value:void 0),y=c(()=>{var R,M;if(t.value.hide&&t.value.inverted)return 0;const V=((R=l.value)==null?void 0:R.contentHeight)??0,T=((M=l.value)==null?void 0:M.extensionHeight)??0;return V+T});nt(c(()=>!!e.scrollBehavior),()=>{lt(()=>{t.value.hide?t.value.inverted?a.value=f.value>d.value:a.value=p.value||f.value<d.value:a.value=!0})});const{ssrBootStyles:E}=be(),{layoutItemStyles:C}=Se({id:e.name,order:c(()=>parseInt(e.order,10)),position:j(e,"location"),layoutSize:y,elementSize:x(void 0),active:a,absolute:j(e,"absolute")});return F(()=>{const[V]=Ie.filterProps(e);return s(Ie,K({ref:l,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":m.value,height:void 0,...E.value},e.style]},V,{collapse:b.value,flat:v.value}),o)}),{}}}),Wt=A({...Ct({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ft=W()({name:"VAppBarNavIcon",props:Wt(),setup(e,n){let{slots:o}=n;return F(()=>s(He,K(e,{class:["v-app-bar-nav-icon"]}),o)),{}}});const Gt=A({...J(),...je()},"VLayout"),Xt=W()({name:"VLayout",props:Gt(),setup(e,n){let{slots:o}=n;const{layoutClasses:l,layoutStyles:a,getLayoutItem:t,items:u,layoutRef:f}=qe(e);return F(()=>{var d;return s("div",{ref:f,class:[l.value,e.class],style:[a.value,e.style]},[(d=o.default)==null?void 0:d.call(o)])}),{getLayoutItem:t,items:u}}});const Zt=A({scrollable:Boolean,...J(),...pe({tag:"main"})},"VMain"),Ke=W()({name:"VMain",props:Zt(),setup(e,n){let{slots:o}=n;const{mainStyles:l}=Ot(),{ssrBootStyles:a}=be();return F(()=>s(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,a.value,e.style]},{default:()=>{var t,u;return[e.scrollable?s("div",{class:"v-main__scroller"},[(t=o.default)==null?void 0:t.call(o)]):(u=o.default)==null?void 0:u.call(o)]}})),{}}});function jt(e){let{rootEl:n,isSticky:o,layoutItemStyles:l}=e;const a=x(!1),t=x(0),u=c(()=>{const p=typeof a.value=="boolean"?"top":a.value;return[o.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[p]:Z(t.value)}:{top:l.value.top}]});ce(()=>{D(o,p=>{p?window.addEventListener("scroll",d,{passive:!0}):window.removeEventListener("scroll",d)},{immediate:!0})}),re(()=>{document.removeEventListener("scroll",d)});let f=0;function d(){const p=f>window.scrollY?"up":"down",i=n.value.getBoundingClientRect(),b=parseFloat(l.value.top??0),v=window.scrollY-Math.max(0,t.value-b),m=i.height+Math.max(t.value,b)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y"))||0;i.height<window.innerHeight-b?(a.value="top",t.value=b):p==="up"&&a.value==="bottom"||p==="down"&&a.value==="top"?(t.value=window.scrollY+i.top-y,a.value=!0):p==="down"&&m<=0?(t.value=0,a.value="bottom"):p==="up"&&v<=0&&(y?a.value!=="top"&&(t.value=-v+y+b,a.value="top"):(t.value=i.top+v,a.value="top")),f=window.scrollY}return{isStuck:a,stickyStyles:u}}const qt=100,Kt=20;function Ce(e){const n=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*n}function Le(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let n=0;for(let o=e.length-1;o>0;o--){if(e[o].t===e[o-1].t)continue;const l=Ce(n),a=(e[o].d-e[o-1].d)/(e[o].t-e[o-1].t);n+=(a-l)*Math.abs(a),o===e.length-1&&(n*=.5)}return Ce(n)*1e3}function Jt(){const e={};function n(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new st(Kt))).push([a.timeStamp,t])})}function o(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function l(a){var p;const t=(p=e[a])==null?void 0:p.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const u=t[0],f=[],d=[];for(const i of t){if(u[0]-i[0]>qt)break;f.push({t:i[0],d:i[1].clientX}),d.push({t:i[0],d:i[1].clientY})}return{x:Le(f),y:Le(d),get direction(){const{x:i,y:b}=this,[v,m]=[Math.abs(i),Math.abs(b)];return v>m&&i>=0?"right":v>m&&i<=0?"left":m>v&&b>=0?"down":m>v&&b<=0?"up":Qt()}}}return{addMovement:n,endTouch:o,getVelocity:l}}function Qt(){throw new Error}function ea(e){let{isActive:n,isTemporary:o,width:l,touchless:a,position:t}=e;ce(()=>{window.addEventListener("touchstart",V,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",R,{passive:!0})}),re(()=>{window.removeEventListener("touchstart",V),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",R)});const u=c(()=>["left","right"].includes(t.value)),{addMovement:f,endTouch:d,getVelocity:p}=Jt();let i=!1;const b=x(!1),v=x(0),m=x(0);let y;function E(w,r){return(t.value==="left"?w:t.value==="right"?document.documentElement.clientWidth-w:t.value==="top"?w:t.value==="bottom"?document.documentElement.clientHeight-w:X())-(r?l.value:0)}function C(w){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const g=t.value==="left"?(w-m.value)/l.value:t.value==="right"?(document.documentElement.clientWidth-w-m.value)/l.value:t.value==="top"?(w-m.value)/l.value:t.value==="bottom"?(document.documentElement.clientHeight-w-m.value)/l.value:X();return r?Math.max(0,Math.min(1,g)):g}function V(w){if(a.value)return;const r=w.changedTouches[0].clientX,g=w.changedTouches[0].clientY,h=25,_=t.value==="left"?r<h:t.value==="right"?r>document.documentElement.clientWidth-h:t.value==="top"?g<h:t.value==="bottom"?g>document.documentElement.clientHeight-h:X(),S=n.value&&(t.value==="left"?r<l.value:t.value==="right"?r>document.documentElement.clientWidth-l.value:t.value==="top"?g<l.value:t.value==="bottom"?g>document.documentElement.clientHeight-l.value:X());(_||S||n.value&&o.value)&&(i=!0,y=[r,g],m.value=E(u.value?r:g,n.value),v.value=C(u.value?r:g),d(w),f(w))}function T(w){const r=w.changedTouches[0].clientX,g=w.changedTouches[0].clientY;if(i){if(!w.cancelable){i=!1;return}const _=Math.abs(r-y[0]),S=Math.abs(g-y[1]);(u.value?_>S&&_>3:S>_&&S>3)?(b.value=!0,i=!1):(u.value?S:_)>3&&(i=!1)}if(!b.value)return;w.preventDefault(),f(w);const h=C(u.value?r:g,!1);v.value=Math.max(0,Math.min(1,h)),h>1?m.value=E(u.value?r:g,!0):h<0&&(m.value=E(u.value?r:g,!1))}function R(w){if(i=!1,!b.value)return;f(w),b.value=!1;const r=p(w.changedTouches[0].identifier),g=Math.abs(r.x),h=Math.abs(r.y);(u.value?g>h&&g>400:h>g&&h>3)?n.value=r.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||X()):n.value=v.value>.5}const M=c(()=>b.value?{transform:t.value==="left"?`translateX(calc(-100% + ${v.value*l.value}px))`:t.value==="right"?`translateX(calc(100% - ${v.value*l.value}px))`:t.value==="top"?`translateY(calc(-100% + ${v.value*l.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${v.value*l.value}px))`:X(),transition:"none"}:void 0);return{isDragging:b,dragProgress:v,dragStyles:M}}function X(){throw new Error}const ta=["start","end","left","right","top","bottom"],aa=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ta.includes(e)},sticky:Boolean,...Ue(),...J(),...Ye(),...we(),...We(),...pe({tag:"nav"}),...ge()},"VNavigationDrawer"),oa=W()({name:"VNavigationDrawer",props:aa(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,n){let{attrs:o,emit:l,slots:a}=n;const{isRtl:t}=Me(),{themeClasses:u}=he(e),{borderClasses:f}=Fe(e),{backgroundColorClasses:d,backgroundColorStyles:p}=me(j(e,"color")),{elevationClasses:i}=Ge(e),{mobile:b}=ut(),{roundedClasses:v}=Xe(e),m=Lt(),y=Be(e,"modelValue",null,k=>!!k),{ssrBootStyles:E}=be(),{scopeId:C}=Pt(),V=B(),T=x(!1),R=c(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),M=c(()=>Et(e.location,t.value)),w=c(()=>!e.permanent&&(b.value||e.temporary)),r=c(()=>e.sticky&&!w.value&&M.value!=="bottom");e.expandOnHover&&e.rail!=null&&D(T,k=>l("update:rail",!k)),e.disableResizeWatcher||D(w,k=>!e.permanent&&it(()=>y.value=!k)),!e.disableRouteWatcher&&m&&D(m.currentRoute,()=>w.value&&(y.value=!1)),D(()=>e.permanent,k=>{k&&(y.value=!0)}),rt(()=>{e.modelValue!=null||w.value||(y.value=e.permanent||!b.value)});const{isDragging:g,dragProgress:h,dragStyles:_}=ea({isActive:y,isTemporary:w,width:R,touchless:j(e,"touchless"),position:M}),S=c(()=>{const k=w.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):R.value;return g.value?k*h.value:k}),{layoutItemStyles:L,layoutItemScrimStyles:$}=Se({id:e.name,order:c(()=>parseInt(e.order,10)),position:M,layoutSize:S,elementSize:R,active:c(()=>y.value||g.value),disableTransitions:c(()=>g.value),absolute:c(()=>e.absolute||r.value&&typeof z.value!="string")}),{isStuck:z,stickyStyles:Y}=jt({rootEl:V,isSticky:r,layoutItemStyles:L}),Q=me(c(()=>typeof e.scrim=="string"?e.scrim:null)),Ve=c(()=>({...g.value?{opacity:h.value*.2,transition:"none"}:void 0,...$.value}));ct({VList:{bgColor:"transparent"}});function ee(){T.value=!0}function te(){T.value=!1}return F(()=>{const k=a.image||e.image;return s(Pe,null,[s(e.tag,K({ref:V,onMouseenter:ee,onMouseleave:te,class:["v-navigation-drawer",`v-navigation-drawer--${M.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":w.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":r.value},u.value,d.value,f.value,i.value,v.value,e.class],style:[p.value,L.value,_.value,E.value,Y.value,e.style]},C,o),{default:()=>{var ae,oe,H,G;return[k&&s("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(ae=a.image)==null?void 0:ae.call(a,{image:e.image}):s("img",{src:e.image,alt:""},null)]),a.prepend&&s("div",{class:"v-navigation-drawer__prepend"},[(oe=a.prepend)==null?void 0:oe.call(a)]),s("div",{class:"v-navigation-drawer__content"},[(H=a.default)==null?void 0:H.call(a)]),a.append&&s("div",{class:"v-navigation-drawer__append"},[(G=a.append)==null?void 0:G.call(a)])]}}),s(vt,{name:"fade-transition"},{default:()=>[w.value&&(g.value||y.value)&&!!e.scrim&&s("div",K({class:["v-navigation-drawer__scrim",Q.backgroundColorClasses.value],style:[Ve.value,Q.backgroundColorStyles.value],onClick:()=>y.value=!1},C),null)]})])}),{isStuck:z}}}),na=ye({__name:"DashboardLayout",props:{user:{}},setup(e){const n=B(!1),o=B("Default Title"),l=B(""),a=St(),t=B(a(e.user.UserUUID)),u=i=>{o.value=i},f=B(Dt(e.user)),d=B(Vt(e.user)),p=B($t(e.user));return(i,b)=>{const v=de("RouterLink"),m=de("RouterView");return P(),O(Xt,{class:"h-100"},{default:I(()=>[s(Yt,{color:"primary"},{default:I(()=>[s(It,null,{default:I(()=>[Ne(Oe(o.value),1)]),_:1}),s(Tt),s(xt,{modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=y=>l.value=y),"prepend-inner-icon":"mdi:mdi-magnify",label:"Search",variant:"underlined","hide-details":"",clearable:!0,class:"d-none"},null,8,["modelValue"]),s(Ft,{variant:"text",onClick:b[1]||(b[1]=dt(y=>n.value=!n.value,["stop"]))})]),_:1}),s(oa,{modelValue:n.value,"onUpdate:modelValue":b[2]||(b[2]=y=>n.value=y),location:"right",temporary:!0},{default:I(()=>[s(ke,null,{default:I(()=>[s(v,{to:{name:"Profile"}},{default:I(()=>[s(U,{title:i.user.DisplayName},{prepend:I(()=>[t.value?(P(),O(De,{key:0,src:t.value,class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])):(P(),O(Rt,{key:1,icon:"mdi:mdi-account-circle",size:"x-large"}))]),_:1},8,["title"])]),_:1})]),_:1}),s(Bt),s(m,{name:"navigation"},{default:I(()=>[s(ke,null,{default:I(()=>[s(v,{to:"/"},{default:I(()=>[s(U,{"prepend-icon":"mdi:mdi-view-dashboard-outline",title:"Home",value:"home"})]),_:1}),f.value||d.value||p.value?(P(),O(Mt,{key:0,value:"Admin"},{activator:I(({props:y})=>[s(U,K(y,{"prepend-icon":"mdi:mdi-security",title:"Admin"}),null,16)]),default:I(()=>[f.value?(P(),O(v,{key:0,to:"/admin/conventions"},{default:I(()=>[s(U,{"prepend-icon":"mdi:mdi-domain",title:"Conventions",value:"Conventions"})]),_:1})):ne("",!0),d.value?(P(),O(v,{key:1,to:"/admin/organisations"},{default:I(()=>[s(U,{"prepend-icon":"mdi:mdi-store",title:"Organisations",value:"Organisations"})]),_:1})):ne("",!0),p.value?(P(),O(v,{key:2,to:"/admin/groups"},{default:I(()=>[s(U,{"prepend-icon":"mdi:mdi-key-chain-variant",title:"Permissions",value:"Permissions"})]),_:1})):ne("",!0)]),_:1})):ne("",!0),s(v,{to:{name:"Profile"}},{default:I(()=>[s(U,{"prepend-icon":"mdi:mdi-account-circle",title:"Manage Account"})]),_:1}),s(v,{to:"/logout"},{default:I(()=>[s(U,{"prepend-icon":"mdi:mdi-logout",title:"Logout",value:"Logout"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(Ke,null,{default:I(()=>[s(m,{onPageTitle:u})]),_:1})]),_:1})}}});const la=Ae(na,[["__scopeId","data-v-5e293191"]]),sa="/assets/scotiacon-logo-d965f8b6.svg",ua=e=>(ft("data-v-7c552d38"),e=e(),gt(),e),ia=ua(()=>$e("h1",null,"Scotiacon Registration System",-1)),ra=ye({__name:"LoginLayout",setup(e){return(n,o)=>{const l=de("RouterView");return P(),mt(Pe,null,[s(Te,{class:"logo-container text-center"},{default:I(()=>[s(De,{src:le(sa),class:"scotiacon-logo ma-auto"},null,8,["src"]),ia]),_:1}),s(Te,{class:"login-container text-center mb-0 rounded rounded-lg mb-md-10"},{default:I(()=>[s(kt,null,{default:I(()=>[s(He,{class:"ma-2",color:"indigo",icon:"mdi:mdi-lock-outline"})]),_:1}),$e("h1",null,Oe(le(Nt).headingSignIn),1),s(l)]),_:1})],64)}}});const ca=Ae(ra,[["__scopeId","data-v-7c552d38"]]);const va=A({...J(),...je({fullHeight:!0}),...ge()},"VApp"),da=W()({name:"VApp",props:va(),setup(e,n){let{slots:o}=n;const l=he(e),{layoutClasses:a,layoutStyles:t,getLayoutItem:u,items:f,layoutRef:d}=qe(e),{rtlClasses:p}=Me();return F(()=>{var i;return s("div",{ref:d,class:["v-application",l.themeClasses.value,a.value,p.value,e.class],style:[t.value,e.style]},[s("div",{class:"v-application__wrap"},[(i=o.default)==null?void 0:i.call(o)])])}),{getLayoutItem:u,items:f,theme:l}}});const ma=A({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Ue(),...J(),...Ye(),...we(),...We(),...pe({tag:"footer"}),...ge()},"VFooter"),fa=W()({name:"VFooter",props:ma(),setup(e,n){let{slots:o}=n;const{themeClasses:l}=he(e),{backgroundColorClasses:a,backgroundColorStyles:t}=me(j(e,"color")),{borderClasses:u}=Fe(e),{elevationClasses:f}=Ge(e),{roundedClasses:d}=Xe(e),p=x(32),{resizeRef:i}=ze(m=>{m.length&&(p.value=m[0].target.clientHeight)}),b=c(()=>e.height==="auto"?p.value:parseInt(e.height,10)),{layoutItemStyles:v}=Se({id:e.name,order:c(()=>parseInt(e.order,10)),position:c(()=>"bottom"),layoutSize:b,elementSize:c(()=>e.height==="auto"?void 0:b.value),active:c(()=>e.app),absolute:j(e,"absolute")});return F(()=>s(e.tag,{ref:i,class:["v-footer",l.value,a.value,u.value,f.value,d.value,e.class],style:[t.value,e.app?v.value:{height:Z(e.height)},e.style]},o)),{}}}),La=ye({__name:"Default",emits:["pageTitle"],setup(e,{emit:n}){let o=pt();const a=ht.getInstance().getTokenByService("GrazeAPI"),t=B(!1),u=yt.getInstance();u.on("login",d=>{o=d,t.value=!0}),u.on("logout",()=>{o=void 0,t.value=!1}),a?o?t.value=!0:wt().then(d=>{o=d,t.value=!0}).catch(()=>{t.value=!1}):(bt(),t.value=!1);const f=d=>{n("pageTitle",d)};return(d,p)=>(P(),O(da,{class:"bg-image"},{default:I(()=>[s(Ke,null,{default:I(()=>[t.value&&le(o)?(P(),O(la,{key:0,user:le(o),onPageTitle:f},null,8,["user"])):(P(),O(ca,{key:1}))]),_:1}),s(fa,null,{default:I(()=>[Ne(" Powered by Graze ")]),_:1})]),_:1}))}});export{La as default};
