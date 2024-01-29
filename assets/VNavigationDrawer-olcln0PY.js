import{m as re,e as ce,u as ve,b as pe,c as we,d as be,g as Se,f as ne,h as xe,i as Me,o as Ie,t as Ee}from"./VContainer-V1weI7tX.js";import{u as de}from"./VList-xkxCef6T.js";import{p as K,ai as Q,c as d,r as me,ar as D,L as _,as as fe,s as $,o as ee,a6 as ge,at as ke,S as Te,am as Re,al as Ce,b as te,d as ye,f as k,w as W,au as Le,a9 as Ve,I as Be,K as Pe,J as $e,t as oe,aa as ze,u as He,e as G,a5 as Oe,a7 as Ye,m as le,av as Ne,F as De,Y as _e}from"./index-LoOE9hv8.js";import{u as We}from"./VBtn--B1INWih.js";import{u as Ae}from"./scopeId-4Bs6C4cr.js";const q=Symbol.for("vuetify:layout"),he=Symbol.for("vuetify:layout-item"),ue=1e3,st=K({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Xe=K({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ze(){const e=Q(q);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Fe(e){const s=Q(q);if(!s)throw new Error("[Vuetify] Could not find injected layout");const l=e.id??`layout-item-${Te()}`,u=fe("useLayoutItem");ge(he,{id:l});const t=$(!1);Re(()=>t.value=!0),Ce(()=>t.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:r}=s.register(u,{...e,active:d(()=>t.value?!1:e.active.value),id:l});return te(()=>s.unregister(l)),{layoutItemStyles:a,layoutRect:s.layoutRect,layoutItemScrimStyles:r}}const qe=(e,s,l,u)=>{let t={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...t}}];for(const r of e){const p=s.get(r),b=l.get(r),y=u.get(r);if(!p||!b||!y)continue;const v={...t,[p.value]:parseInt(t[p.value],10)+(y.value?parseInt(b.value,10):0)};a.push({id:r,layer:v}),t=v}return a};function rt(e){const s=Q(q,null),l=d(()=>s?s.rootZIndex.value-100:ue),u=me([]),t=D(new Map),a=D(new Map),r=D(new Map),p=D(new Map),b=D(new Map),{resizeRef:y,contentRect:v}=We(),h=d(()=>{const n=new Map,i=e.overlaps??[];for(const o of i.filter(g=>g.includes(":"))){const[g,f]=o.split(":");if(!u.value.includes(g)||!u.value.includes(f))continue;const I=t.get(g),R=t.get(f),H=a.get(g),B=a.get(f);!I||!R||!H||!B||(n.set(f,{position:I.value,amount:parseInt(H.value,10)}),n.set(g,{position:R.value,amount:-parseInt(B.value,10)}))}return n}),m=d(()=>{const n=[...new Set([...r.values()].map(o=>o.value))].sort((o,g)=>o-g),i=[];for(const o of n){const g=u.value.filter(f=>{var I;return((I=r.get(f))==null?void 0:I.value)===o});i.push(...g)}return qe(i,t,a,p)}),w=d(()=>!Array.from(b.values()).some(n=>n.value)),S=d(()=>m.value[m.value.length-1].layer),x=d(()=>({"--v-layout-left":_(S.value.left),"--v-layout-right":_(S.value.right),"--v-layout-top":_(S.value.top),"--v-layout-bottom":_(S.value.bottom),...w.value?void 0:{transition:"none"}})),T=d(()=>m.value.slice(1).map((n,i)=>{let{id:o}=n;const{layer:g}=m.value[i],f=a.get(o),I=t.get(o);return{id:o,...g,size:Number(f.value),position:I.value}})),V=n=>T.value.find(i=>i.id===n),L=fe("createLayout"),E=$(!1);ee(()=>{E.value=!0}),ge(q,{register:(n,i)=>{let{id:o,order:g,position:f,layoutSize:I,elementSize:R,active:H,disableTransitions:B,absolute:j}=i;r.set(o,g),t.set(o,f),a.set(o,I),p.set(o,H),B&&b.set(o,B);const A=ke(he,L==null?void 0:L.vnode).indexOf(n);A>-1?u.value.splice(A,0,o):u.value.push(o);const X=d(()=>T.value.findIndex(P=>P.id===o)),N=d(()=>l.value+m.value.length*2-X.value*2),M=d(()=>{const P=f.value==="left"||f.value==="right",O=f.value==="right",F=f.value==="bottom",ae={[f.value]:0,zIndex:N.value,transform:`translate${P?"X":"Y"}(${(H.value?0:-110)*(O||F?-1:1)}%)`,position:j.value||l.value!==ue?"absolute":"fixed",...w.value?void 0:{transition:"none"}};if(!E.value)return ae;const C=T.value[X.value];if(!C)throw new Error(`[Vuetify] Could not find layout item "${o}"`);const J=h.value.get(o);return J&&(C[J.position]+=J.amount),{...ae,height:P?`calc(100% - ${C.top}px - ${C.bottom}px)`:R.value?`${R.value}px`:void 0,left:O?void 0:`${C.left}px`,right:O?`${C.right}px`:void 0,top:f.value!=="bottom"?`${C.top}px`:void 0,bottom:f.value!=="top"?`${C.bottom}px`:void 0,width:P?R.value?`${R.value}px`:void 0:`calc(100% - ${C.left}px - ${C.right}px)`}}),Z=d(()=>({zIndex:N.value-1}));return{layoutItemStyles:M,layoutItemScrimStyles:Z,zIndex:N}},unregister:n=>{r.delete(n),t.delete(n),a.delete(n),p.delete(n),b.delete(n),u.value=u.value.filter(i=>i!==n)},mainRect:S,mainStyles:x,getLayoutItem:V,items:T,layoutRect:v,rootZIndex:l});const z=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),c=d(()=>({zIndex:s?l.value:void 0,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:z,layoutStyles:c,getLayoutItem:V,items:T,layoutRect:v,layoutRef:y}}const Ke=K({scrollable:Boolean,...re(),...ce({tag:"main"})},"VMain"),ct=ye()({name:"VMain",props:Ke(),setup(e,s){let{slots:l}=s;const{mainStyles:u}=Ze(),{ssrBootStyles:t}=de();return ve(()=>k(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[u.value,t.value,e.style]},{default:()=>{var a,r;return[e.scrollable?k("div",{class:"v-main__scroller"},[(a=l.default)==null?void 0:a.call(l)]):(r=l.default)==null?void 0:r.call(l)]}})),{}}});function je(e){let{rootEl:s,isSticky:l,layoutItemStyles:u}=e;const t=$(!1),a=$(0),r=d(()=>{const y=typeof t.value=="boolean"?"top":t.value;return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[y]:_(a.value)}:{top:u.value.top}]});ee(()=>{W(l,y=>{y?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),te(()=>{window.removeEventListener("scroll",b)});let p=0;function b(){const y=p>window.scrollY?"up":"down",v=s.value.getBoundingClientRect(),h=parseFloat(u.value.top??0),m=window.scrollY-Math.max(0,a.value-h),w=v.height+Math.max(a.value,h)-window.scrollY-window.innerHeight,S=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;v.height<window.innerHeight-h?(t.value="top",a.value=h):y==="up"&&t.value==="bottom"||y==="down"&&t.value==="top"?(a.value=window.scrollY+v.top-S,t.value=!0):y==="down"&&w<=0?(a.value=0,t.value="bottom"):y==="up"&&m<=0&&(S?t.value!=="top"&&(a.value=-m+S+h,t.value="top"):(a.value=v.top+m,t.value="top")),p=window.scrollY}return{isStuck:t,stickyStyles:r}}const Ue=100,Je=20;function ie(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function se(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let l=e.length-1;l>0;l--){if(e[l].t===e[l-1].t)continue;const u=ie(s),t=(e[l].d-e[l-1].d)/(e[l].t-e[l-1].t);s+=(t-u)*Math.abs(t),l===e.length-1&&(s*=.5)}return ie(s)*1e3}function Ge(){const e={};function s(t){Array.from(t.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new Le(Je))).push([t.timeStamp,a])})}function l(t){Array.from(t.changedTouches).forEach(a=>{delete e[a.identifier]})}function u(t){var y;const a=(y=e[t])==null?void 0:y.values().reverse();if(!a)throw new Error(`No samples for touch id ${t}`);const r=a[0],p=[],b=[];for(const v of a){if(r[0]-v[0]>Ue)break;p.push({t:v[0],d:v[1].clientX}),b.push({t:v[0],d:v[1].clientY})}return{x:se(p),y:se(b),get direction(){const{x:v,y:h}=this,[m,w]=[Math.abs(v),Math.abs(h)];return m>w&&v>=0?"right":m>w&&v<=0?"left":w>m&&h>=0?"down":w>m&&h<=0?"up":Qe()}}}return{addMovement:s,endTouch:l,getVelocity:u}}function Qe(){throw new Error}function et(e){let{isActive:s,isTemporary:l,width:u,touchless:t,position:a}=e;ee(()=>{window.addEventListener("touchstart",V,{passive:!0}),window.addEventListener("touchmove",L,{passive:!1}),window.addEventListener("touchend",E,{passive:!0})}),te(()=>{window.removeEventListener("touchstart",V),window.removeEventListener("touchmove",L),window.removeEventListener("touchend",E)});const r=d(()=>["left","right"].includes(a.value)),{addMovement:p,endTouch:b,getVelocity:y}=Ge();let v=!1;const h=$(!1),m=$(0),w=$(0);let S;function x(c,n){return(a.value==="left"?c:a.value==="right"?document.documentElement.clientWidth-c:a.value==="top"?c:a.value==="bottom"?document.documentElement.clientHeight-c:Y())-(n?u.value:0)}function T(c){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const i=a.value==="left"?(c-w.value)/u.value:a.value==="right"?(document.documentElement.clientWidth-c-w.value)/u.value:a.value==="top"?(c-w.value)/u.value:a.value==="bottom"?(document.documentElement.clientHeight-c-w.value)/u.value:Y();return n?Math.max(0,Math.min(1,i)):i}function V(c){if(t.value)return;const n=c.changedTouches[0].clientX,i=c.changedTouches[0].clientY,o=25,g=a.value==="left"?n<o:a.value==="right"?n>document.documentElement.clientWidth-o:a.value==="top"?i<o:a.value==="bottom"?i>document.documentElement.clientHeight-o:Y(),f=s.value&&(a.value==="left"?n<u.value:a.value==="right"?n>document.documentElement.clientWidth-u.value:a.value==="top"?i<u.value:a.value==="bottom"?i>document.documentElement.clientHeight-u.value:Y());(g||f||s.value&&l.value)&&(v=!0,S=[n,i],w.value=x(r.value?n:i,s.value),m.value=T(r.value?n:i),b(c),p(c))}function L(c){const n=c.changedTouches[0].clientX,i=c.changedTouches[0].clientY;if(v){if(!c.cancelable){v=!1;return}const g=Math.abs(n-S[0]),f=Math.abs(i-S[1]);(r.value?g>f&&g>3:f>g&&f>3)?(h.value=!0,v=!1):(r.value?f:g)>3&&(v=!1)}if(!h.value)return;c.preventDefault(),p(c);const o=T(r.value?n:i,!1);m.value=Math.max(0,Math.min(1,o)),o>1?w.value=x(r.value?n:i,!0):o<0&&(w.value=x(r.value?n:i,!1))}function E(c){if(v=!1,!h.value)return;p(c),h.value=!1;const n=y(c.changedTouches[0].identifier),i=Math.abs(n.x),o=Math.abs(n.y);(r.value?i>o&&i>400:o>i&&o>3)?s.value=n.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||Y()):s.value=m.value>.5}const z=d(()=>h.value?{transform:a.value==="left"?`translateX(calc(-100% + ${m.value*u.value}px))`:a.value==="right"?`translateX(calc(100% - ${m.value*u.value}px))`:a.value==="top"?`translateY(calc(-100% + ${m.value*u.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${m.value*u.value}px))`:Y(),transition:"none"}:void 0);return{isDragging:h,dragProgress:m,dragStyles:z}}function Y(){throw new Error}const tt=["start","end","left","right","top","bottom"],at=K({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>tt.includes(e)},sticky:Boolean,...pe(),...re(),...Ve(),...we(),...Xe(),...be(),...ce({tag:"nav"}),...Be()},"VNavigationDrawer"),vt=ye()({name:"VNavigationDrawer",props:at(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:l,emit:u,slots:t}=s;const{isRtl:a}=Pe(),{themeClasses:r}=$e(e),{borderClasses:p}=Se(e),{backgroundColorClasses:b,backgroundColorStyles:y}=ne(oe(e,"color")),{elevationClasses:v}=xe(e),{displayClasses:h,mobile:m}=ze(e),{roundedClasses:w}=Me(e),S=Ie(),x=He(e,"modelValue",null,M=>!!M),{ssrBootStyles:T}=de(),{scopeId:V}=Ae(),L=me(),E=$(!1),z=d(()=>e.rail&&e.expandOnHover&&E.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),c=d(()=>Ee(e.location,a.value)),n=d(()=>!e.permanent&&(m.value||e.temporary)),i=d(()=>e.sticky&&!n.value&&c.value!=="bottom");G(()=>e.expandOnHover&&e.rail!=null,()=>{W(E,M=>u("update:rail",!M))}),G(()=>!e.disableResizeWatcher,()=>{W(n,M=>!e.permanent&&_e(()=>x.value=!M))}),G(()=>!e.disableRouteWatcher&&!!S,()=>{W(S.currentRoute,()=>n.value&&(x.value=!1))}),W(()=>e.permanent,M=>{M&&(x.value=!0)}),Oe(()=>{e.modelValue!=null||n.value||(x.value=e.permanent||!m.value)});const{isDragging:o,dragProgress:g,dragStyles:f}=et({isActive:x,isTemporary:n,width:z,touchless:oe(e,"touchless"),position:c}),I=d(()=>{const M=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):z.value;return o.value?M*g.value:M}),{layoutItemStyles:R,layoutItemScrimStyles:H}=Fe({id:e.name,order:d(()=>parseInt(e.order,10)),position:c,layoutSize:I,elementSize:z,active:d(()=>x.value||o.value),disableTransitions:d(()=>o.value),absolute:d(()=>e.absolute||i.value&&typeof B.value!="string")}),{isStuck:B,stickyStyles:j}=je({rootEl:L,isSticky:i,layoutItemStyles:R}),U=ne(d(()=>typeof e.scrim=="string"?e.scrim:null)),A=d(()=>({...o.value?{opacity:g.value*.2,transition:"none"}:void 0,...H.value}));Ye({VList:{bgColor:"transparent"}});function X(){E.value=!0}function N(){E.value=!1}return ve(()=>{const M=t.image||e.image;return k(De,null,[k(e.tag,le({ref:L,onMouseenter:X,onMouseleave:N,class:["v-navigation-drawer",`v-navigation-drawer--${c.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":E.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":x.value,"v-navigation-drawer--sticky":i.value},r.value,b.value,p.value,h.value,v.value,w.value,e.class],style:[y.value,R.value,f.value,T.value,j.value,e.style]},V,l),{default:()=>{var Z,P,O,F;return[M&&k("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(Z=t.image)==null?void 0:Z.call(t,{image:e.image}):k("img",{src:e.image,alt:""},null)]),t.prepend&&k("div",{class:"v-navigation-drawer__prepend"},[(P=t.prepend)==null?void 0:P.call(t)]),k("div",{class:"v-navigation-drawer__content"},[(O=t.default)==null?void 0:O.call(t)]),t.append&&k("div",{class:"v-navigation-drawer__append"},[(F=t.append)==null?void 0:F.call(t)])]}}),k(Ne,{name:"fade-transition"},{default:()=>[n.value&&(o.value||x.value)&&!!e.scrim&&k("div",le({class:["v-navigation-drawer__scrim",U.backgroundColorClasses.value],style:[A.value,U.backgroundColorStyles.value],onClick:()=>x.value=!1},V),null)]})])}),{isStuck:B}}});export{vt as V,st as a,ct as b,rt as c,Xe as m,Fe as u};
