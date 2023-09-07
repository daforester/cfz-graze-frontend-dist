import{n as v,aY as _,T as x,ac as w,p as R,aZ as P}from"./index-fb88fab6.js";class y{constructor(a){let{x:s,y:n,width:r,height:i}=a;this.x=s,this.y=n,this.width=r,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function E(o,a){return{x:{before:Math.max(0,a.left-o.left),after:Math.max(0,o.right-a.right)},y:{before:Math.max(0,a.top-o.top),after:Math.max(0,o.bottom-a.bottom)}}}function B(o){const a=o.getBoundingClientRect(),s=getComputedStyle(o),n=s.transform;if(n){let r,i,t,e,f;if(n.startsWith("matrix3d("))r=n.slice(9,-1).split(/, /),i=+r[0],t=+r[5],e=+r[12],f=+r[13];else if(n.startsWith("matrix("))r=n.slice(7,-1).split(/, /),i=+r[0],t=+r[3],e=+r[4],f=+r[5];else return new y(a);const l=s.transformOrigin,u=a.x-e-(1-i)*parseFloat(l),d=a.y-f-(1-t)*parseFloat(l.slice(l.indexOf(" ")+1)),h=i?a.width/i:o.offsetWidth+1,g=t?a.height/t:o.offsetHeight+1;return new y({x:u,y:d,width:h,height:g})}else return new y(a)}function L(o,a,s){if(typeof o.animate>"u")return{finished:Promise.resolve()};let n;try{n=o.animate(a,s)}catch{return{finished:Promise.resolve()}}return typeof n.finished>"u"&&(n.finished=new Promise(r=>{n.onfinish=()=>{r(n)}})),n}const A="cubic-bezier(0.4, 0, 0.2, 1)",W="cubic-bezier(0.0, 0, 0.2, 1)",C="cubic-bezier(0.4, 0, 1, 1)",T=R({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function c(o,a,s){return v()({name:o,props:T({mode:s,origin:a}),setup(n,r){let{slots:i}=r;const t={onBeforeEnter(e){n.origin&&(e.style.transformOrigin=n.origin)},onLeave(e){if(n.leaveAbsolute){const{offsetTop:f,offsetLeft:l,offsetWidth:u,offsetHeight:d}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${f}px`,e.style.left=`${l}px`,e.style.width=`${u}px`,e.style.height=`${d}px`}n.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(n.leaveAbsolute&&(e!=null&&e._transitionInitialStyles)){const{position:f,top:l,left:u,width:d,height:h}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=f||"",e.style.top=l||"",e.style.left=u||"",e.style.width=d||"",e.style.height=h||""}}};return()=>{const e=n.group?_:x;return w(e,{name:n.disabled?"":o,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:t},i.default)}}})}function b(o,a){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return v()({name:o,props:{mode:{type:String,default:s},disabled:Boolean},setup(n,r){let{slots:i}=r;return()=>w(x,{name:n.disabled?"":o,css:!n.disabled,...n.disabled?{}:a},i.default)}})}function S(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const s=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=P(`offset-${s}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[s]:t.style[s]}},onEnter(t){const e=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const f=`${t[n]}px`;t.style[s]="0",t.offsetHeight,t.style.transition=e.transition,o&&t._parent&&t._parent.classList.add(o),requestAnimationFrame(()=>{t.style[s]=f})},onAfterEnter:i,onEnterCancelled:i,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[s]:t.style[s]},t.style.overflow="hidden",t.style[s]=`${t[n]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[s]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(t){o&&t._parent&&t._parent.classList.remove(o),i(t)}function i(t){const e=t._initialStyle[s];t.style.overflow=t._initialStyle.overflow,e!=null&&(t.style[s]=e),delete t._initialStyle}}c("fab-transition","center center","out-in");c("dialog-bottom-transition");c("dialog-top-transition");const F=c("fade-transition"),$=c("scale-transition");c("scroll-x-transition");c("scroll-x-reverse-transition");c("scroll-y-transition");c("scroll-y-reverse-transition");c("slide-x-transition");c("slide-x-reverse-transition");const z=c("slide-y-transition");c("slide-y-reverse-transition");const V=b("expand-transition",S()),D=b("expand-x-transition",S("",!0)),p=Symbol("Forwarded refs");function m(o,a){let s=o;for(;s;){const n=Reflect.getOwnPropertyDescriptor(s,a);if(n)return n;s=Object.getPrototypeOf(s)}}function H(o){for(var a=arguments.length,s=new Array(a>1?a-1:0),n=1;n<a;n++)s[n-1]=arguments[n];return o[p]=s,new Proxy(o,{get(r,i){if(Reflect.has(r,i))return Reflect.get(r,i);if(!(typeof i=="symbol"||i.startsWith("__"))){for(const t of s)if(t.value&&Reflect.has(t.value,i)){const e=Reflect.get(t.value,i);return typeof e=="function"?e.bind(t.value):e}}},has(r,i){if(Reflect.has(r,i))return!0;if(typeof i=="symbol"||i.startsWith("__"))return!1;for(const t of s)if(t.value&&Reflect.has(t.value,i))return!0;return!1},set(r,i,t){if(Reflect.has(r,i))return Reflect.set(r,i,t);if(typeof i=="symbol"||i.startsWith("__"))return!1;for(const e of s)if(e.value&&Reflect.has(e.value,i))return Reflect.set(e.value,i,t);return!1},getOwnPropertyDescriptor(r,i){var e;const t=Reflect.getOwnPropertyDescriptor(r,i);if(t)return t;if(!(typeof i=="symbol"||i.startsWith("__"))){for(const f of s){if(!f.value)continue;const l=m(f.value,i)??("_"in f.value?m((e=f.value._)==null?void 0:e.setupState,i):void 0);if(l)return l}for(const f of s){const l=f.value&&f.value[p];if(!l)continue;const u=l.slice();for(;u.length;){const d=u.shift(),h=m(d.value,i);if(h)return h;const g=d.value&&d.value[p];g&&u.push(...g)}}}}})}export{y as B,$ as V,V as a,L as b,F as c,D as d,W as e,H as f,C as g,E as h,z as i,B as n,A as s};
