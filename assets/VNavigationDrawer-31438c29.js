import{m as ie,e as se,u as re,b as ye,c as we,d as pe,g as be,f as te,h as Se,i as xe,n as Me,t as Ie}from"./VContainer-914ec839.js";import{u as ce}from"./VList-fa3ff560.js";import{ae as U,p as K,S as Ee,af as ve,a0 as de,s as P,a5 as ke,a4 as Te,c as d,b as J,r as fe,ag as Y,L as D,o as G,ah as Ve,d as me,f as k,w as _,ai as Re,I as Le,K as Ce,J as Be,t as ae,a7 as $e,u as Pe,X as ze,aj as He,a1 as Ne,m as ne,ak as Oe,F as Ye}from"./index-11194c4b.js";import{u as De}from"./VBtn-22fc051a.js";import{u as _e}from"./scopeId-8366a0a7.js";const j=Symbol.for("vuetify:layout"),ge=Symbol.for("vuetify:layout-item"),oe=1e3,ut=K({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),We=K({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Xe(){const e=U(j);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ae(e){const r=U(j);if(!r)throw new Error("[Vuetify] Could not find injected layout");const u=e.id??`layout-item-${Ee()}`,i=ve("useLayoutItem");de(ge,{id:u});const t=P(!1);ke(()=>t.value=!0),Te(()=>t.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:c}=r.register(i,{...e,active:d(()=>t.value?!1:e.active.value),id:u});return J(()=>r.unregister(u)),{layoutItemStyles:a,layoutRect:r.layoutRect,layoutItemScrimStyles:c}}const Ze=(e,r,u,i)=>{let t={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...t}}];for(const c of e){const b=r.get(c),S=u.get(c),w=i.get(c);if(!b||!S||!w)continue;const v={...t,[b.value]:parseInt(t[b.value],10)+(w.value?parseInt(S.value,10):0)};a.push({id:c,layer:v}),t=v}return a};function it(e){const r=U(j,null),u=d(()=>r?r.rootZIndex.value-100:oe),i=fe([]),t=Y(new Map),a=Y(new Map),c=Y(new Map),b=Y(new Map),S=Y(new Map),{resizeRef:w,contentRect:v}=De(),y=d(()=>{const n=new Map,o=e.overlaps??[];for(const l of o.filter(g=>g.includes(":"))){const[g,f]=l.split(":");if(!i.value.includes(g)||!i.value.includes(f))continue;const M=t.get(g),R=t.get(f),B=a.get(g),H=a.get(f);!M||!R||!B||!H||(n.set(f,{position:M.value,amount:parseInt(B.value,10)}),n.set(g,{position:R.value,amount:-parseInt(H.value,10)}))}return n}),m=d(()=>{const n=[...new Set([...c.values()].map(l=>l.value))].sort((l,g)=>l-g),o=[];for(const l of n){const g=i.value.filter(f=>{var M;return((M=c.get(f))==null?void 0:M.value)===l});o.push(...g)}return Ze(o,t,a,b)}),p=d(()=>!Array.from(S.values()).some(n=>n.value)),h=d(()=>m.value[m.value.length-1].layer),z=d(()=>({"--v-layout-left":D(h.value.left),"--v-layout-right":D(h.value.right),"--v-layout-top":D(h.value.top),"--v-layout-bottom":D(h.value.bottom),...p.value?void 0:{transition:"none"}})),E=d(()=>m.value.slice(1).map((n,o)=>{let{id:l}=n;const{layer:g}=m.value[o],f=a.get(l),M=t.get(l);return{id:l,...g,size:Number(f.value),position:M.value}})),L=n=>E.value.find(o=>o.id===n),I=ve("createLayout"),V=P(!1);G(()=>{V.value=!0}),de(j,{register:(n,o)=>{let{id:l,order:g,position:f,layoutSize:M,elementSize:R,active:B,disableTransitions:H,absolute:W}=o;c.set(l,g),t.set(l,f),a.set(l,M),b.set(l,B),H&&S.set(l,H);const X=Ve(ge,I==null?void 0:I.vnode).indexOf(n);X>-1?i.value.splice(X,0,l):i.value.push(l);const A=d(()=>E.value.findIndex($=>$.id===l)),x=d(()=>u.value+m.value.length*2-A.value*2),Z=d(()=>{const $=f.value==="left"||f.value==="right",N=f.value==="right",he=f.value==="bottom",ee={[f.value]:0,zIndex:x.value,transform:`translate${$?"X":"Y"}(${(B.value?0:-110)*(N||he?-1:1)}%)`,position:W.value||u.value!==oe?"absolute":"fixed",...p.value?void 0:{transition:"none"}};if(!V.value)return ee;const T=E.value[A.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${l}"`);const q=y.value.get(l);return q&&(T[q.position]+=q.amount),{...ee,height:$?`calc(100% - ${T.top}px - ${T.bottom}px)`:R.value?`${R.value}px`:void 0,left:N?void 0:`${T.left}px`,right:N?`${T.right}px`:void 0,top:f.value!=="bottom"?`${T.top}px`:void 0,bottom:f.value!=="top"?`${T.bottom}px`:void 0,width:$?R.value?`${R.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),F=d(()=>({zIndex:x.value-1}));return{layoutItemStyles:Z,layoutItemScrimStyles:F,zIndex:x}},unregister:n=>{c.delete(n),t.delete(n),a.delete(n),b.delete(n),S.delete(n),i.value=i.value.filter(o=>o!==n)},mainRect:h,mainStyles:z,getLayoutItem:L,items:E,layoutRect:v,rootZIndex:u});const C=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),s=d(()=>({zIndex:u.value,position:r?"relative":void 0,overflow:r?"hidden":void 0}));return{layoutClasses:C,layoutStyles:s,getLayoutItem:L,items:E,layoutRect:v,layoutRef:w}}const Fe=K({scrollable:Boolean,...ie(),...se({tag:"main"})},"VMain"),st=me()({name:"VMain",props:Fe(),setup(e,r){let{slots:u}=r;const{mainStyles:i}=Xe(),{ssrBootStyles:t}=ce();return re(()=>k(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[i.value,t.value,e.style]},{default:()=>{var a,c;return[e.scrollable?k("div",{class:"v-main__scroller"},[(a=u.default)==null?void 0:a.call(u)]):(c=u.default)==null?void 0:c.call(u)]}})),{}}});function je(e){let{rootEl:r,isSticky:u,layoutItemStyles:i}=e;const t=P(!1),a=P(0),c=d(()=>{const w=typeof t.value=="boolean"?"top":t.value;return[u.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[w]:D(a.value)}:{top:i.value.top}]});G(()=>{_(u,w=>{w?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),J(()=>{window.removeEventListener("scroll",S)});let b=0;function S(){const w=b>window.scrollY?"up":"down",v=r.value.getBoundingClientRect(),y=parseFloat(i.value.top??0),m=window.scrollY-Math.max(0,a.value-y),p=v.height+Math.max(a.value,y)-window.scrollY-window.innerHeight,h=parseFloat(getComputedStyle(r.value).getPropertyValue("--v-body-scroll-y"))||0;v.height<window.innerHeight-y?(t.value="top",a.value=y):w==="up"&&t.value==="bottom"||w==="down"&&t.value==="top"?(a.value=window.scrollY+v.top-h,t.value=!0):w==="down"&&p<=0?(a.value=0,t.value="bottom"):w==="up"&&m<=0&&(h?t.value!=="top"&&(a.value=-m+h+y,t.value="top"):(a.value=v.top+m,t.value="top")),b=window.scrollY}return{isStuck:t,stickyStyles:c}}const Ke=100,qe=20;function le(e){const r=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*r}function ue(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let u=e.length-1;u>0;u--){if(e[u].t===e[u-1].t)continue;const i=le(r),t=(e[u].d-e[u-1].d)/(e[u].t-e[u-1].t);r+=(t-i)*Math.abs(t),u===e.length-1&&(r*=.5)}return le(r)*1e3}function Ue(){const e={};function r(t){Array.from(t.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new Re(qe))).push([t.timeStamp,a])})}function u(t){Array.from(t.changedTouches).forEach(a=>{delete e[a.identifier]})}function i(t){var w;const a=(w=e[t])==null?void 0:w.values().reverse();if(!a)throw new Error(`No samples for touch id ${t}`);const c=a[0],b=[],S=[];for(const v of a){if(c[0]-v[0]>Ke)break;b.push({t:v[0],d:v[1].clientX}),S.push({t:v[0],d:v[1].clientY})}return{x:ue(b),y:ue(S),get direction(){const{x:v,y}=this,[m,p]=[Math.abs(v),Math.abs(y)];return m>p&&v>=0?"right":m>p&&v<=0?"left":p>m&&y>=0?"down":p>m&&y<=0?"up":Je()}}}return{addMovement:r,endTouch:u,getVelocity:i}}function Je(){throw new Error}function Ge(e){let{isActive:r,isTemporary:u,width:i,touchless:t,position:a}=e;G(()=>{window.addEventListener("touchstart",L,{passive:!0}),window.addEventListener("touchmove",I,{passive:!1}),window.addEventListener("touchend",V,{passive:!0})}),J(()=>{window.removeEventListener("touchstart",L),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",V)});const c=d(()=>["left","right"].includes(a.value)),{addMovement:b,endTouch:S,getVelocity:w}=Ue();let v=!1;const y=P(!1),m=P(0),p=P(0);let h;function z(s,n){return(a.value==="left"?s:a.value==="right"?document.documentElement.clientWidth-s:a.value==="top"?s:a.value==="bottom"?document.documentElement.clientHeight-s:O())-(n?i.value:0)}function E(s){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const o=a.value==="left"?(s-p.value)/i.value:a.value==="right"?(document.documentElement.clientWidth-s-p.value)/i.value:a.value==="top"?(s-p.value)/i.value:a.value==="bottom"?(document.documentElement.clientHeight-s-p.value)/i.value:O();return n?Math.max(0,Math.min(1,o)):o}function L(s){if(t.value)return;const n=s.changedTouches[0].clientX,o=s.changedTouches[0].clientY,l=25,g=a.value==="left"?n<l:a.value==="right"?n>document.documentElement.clientWidth-l:a.value==="top"?o<l:a.value==="bottom"?o>document.documentElement.clientHeight-l:O(),f=r.value&&(a.value==="left"?n<i.value:a.value==="right"?n>document.documentElement.clientWidth-i.value:a.value==="top"?o<i.value:a.value==="bottom"?o>document.documentElement.clientHeight-i.value:O());(g||f||r.value&&u.value)&&(v=!0,h=[n,o],p.value=z(c.value?n:o,r.value),m.value=E(c.value?n:o),S(s),b(s))}function I(s){const n=s.changedTouches[0].clientX,o=s.changedTouches[0].clientY;if(v){if(!s.cancelable){v=!1;return}const g=Math.abs(n-h[0]),f=Math.abs(o-h[1]);(c.value?g>f&&g>3:f>g&&f>3)?(y.value=!0,v=!1):(c.value?f:g)>3&&(v=!1)}if(!y.value)return;s.preventDefault(),b(s);const l=E(c.value?n:o,!1);m.value=Math.max(0,Math.min(1,l)),l>1?p.value=z(c.value?n:o,!0):l<0&&(p.value=z(c.value?n:o,!1))}function V(s){if(v=!1,!y.value)return;b(s),y.value=!1;const n=w(s.changedTouches[0].identifier),o=Math.abs(n.x),l=Math.abs(n.y);(c.value?o>l&&o>400:l>o&&l>3)?r.value=n.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||O()):r.value=m.value>.5}const C=d(()=>y.value?{transform:a.value==="left"?`translateX(calc(-100% + ${m.value*i.value}px))`:a.value==="right"?`translateX(calc(100% - ${m.value*i.value}px))`:a.value==="top"?`translateY(calc(-100% + ${m.value*i.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${m.value*i.value}px))`:O(),transition:"none"}:void 0);return{isDragging:y,dragProgress:m,dragStyles:C}}function O(){throw new Error}const Qe=["start","end","left","right","top","bottom"],et=K({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Qe.includes(e)},sticky:Boolean,...ye(),...ie(),...we(),...We(),...pe(),...se({tag:"nav"}),...Le()},"VNavigationDrawer"),rt=me()({name:"VNavigationDrawer",props:et(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:u,emit:i,slots:t}=r;const{isRtl:a}=Ce(),{themeClasses:c}=Be(e),{borderClasses:b}=be(e),{backgroundColorClasses:S,backgroundColorStyles:w}=te(ae(e,"color")),{elevationClasses:v}=Se(e),{mobile:y}=$e(),{roundedClasses:m}=xe(e),p=Me(),h=Pe(e,"modelValue",null,x=>!!x),{ssrBootStyles:z}=ce(),{scopeId:E}=_e(),L=fe(),I=P(!1),V=d(()=>e.rail&&e.expandOnHover&&I.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),C=d(()=>Ie(e.location,a.value)),s=d(()=>!e.permanent&&(y.value||e.temporary)),n=d(()=>e.sticky&&!s.value&&C.value!=="bottom");e.expandOnHover&&e.rail!=null&&_(I,x=>i("update:rail",!x)),e.disableResizeWatcher||_(s,x=>!e.permanent&&ze(()=>h.value=!x)),!e.disableRouteWatcher&&p&&_(p.currentRoute,()=>s.value&&(h.value=!1)),_(()=>e.permanent,x=>{x&&(h.value=!0)}),He(()=>{e.modelValue!=null||s.value||(h.value=e.permanent||!y.value)});const{isDragging:o,dragProgress:l,dragStyles:g}=Ge({isActive:h,isTemporary:s,width:V,touchless:ae(e,"touchless"),position:C}),f=d(()=>{const x=s.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):V.value;return o.value?x*l.value:x}),{layoutItemStyles:M,layoutItemScrimStyles:R}=Ae({id:e.name,order:d(()=>parseInt(e.order,10)),position:C,layoutSize:f,elementSize:V,active:d(()=>h.value||o.value),disableTransitions:d(()=>o.value),absolute:d(()=>e.absolute||n.value&&typeof B.value!="string")}),{isStuck:B,stickyStyles:H}=je({rootEl:L,isSticky:n,layoutItemStyles:M}),W=te(d(()=>typeof e.scrim=="string"?e.scrim:null)),Q=d(()=>({...o.value?{opacity:l.value*.2,transition:"none"}:void 0,...R.value}));Ne({VList:{bgColor:"transparent"}});function X(){I.value=!0}function A(){I.value=!1}return re(()=>{const x=t.image||e.image;return k(Ye,null,[k(e.tag,ne({ref:L,onMouseenter:X,onMouseleave:A,class:["v-navigation-drawer",`v-navigation-drawer--${C.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":I.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":s.value,"v-navigation-drawer--active":h.value,"v-navigation-drawer--sticky":n.value},c.value,S.value,b.value,v.value,m.value,e.class],style:[w.value,M.value,g.value,z.value,H.value,e.style]},E,u),{default:()=>{var Z,F,$,N;return[x&&k("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(Z=t.image)==null?void 0:Z.call(t,{image:e.image}):k("img",{src:e.image,alt:""},null)]),t.prepend&&k("div",{class:"v-navigation-drawer__prepend"},[(F=t.prepend)==null?void 0:F.call(t)]),k("div",{class:"v-navigation-drawer__content"},[($=t.default)==null?void 0:$.call(t)]),t.append&&k("div",{class:"v-navigation-drawer__append"},[(N=t.append)==null?void 0:N.call(t)])]}}),k(Oe,{name:"fade-transition"},{default:()=>[s.value&&(o.value||h.value)&&!!e.scrim&&k("div",ne({class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[Q.value,W.backgroundColorStyles.value],onClick:()=>h.value=!1},E),null)]})])}),{isStuck:B}}});export{rt as V,ut as a,st as b,it as c,We as m,Ae as u};