import{d as b,b7 as E,aj as S,a7 as R,p as _,b8 as T,u as F,c as x,s as W,r as w,w as A,a0 as M,t as $,ac as L}from"./index-3pnlNSkI.js";class v{constructor(a){let{x:r,y:n,width:o,height:e}=a;this.x=r,this.y=n,this.width=o,this.height=e}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function j(s,a){return{x:{before:Math.max(0,a.left-s.left),after:Math.max(0,s.right-a.right)},y:{before:Math.max(0,a.top-s.top),after:Math.max(0,s.bottom-a.bottom)}}}function D(s){return Array.isArray(s)?new v({x:s[0],y:s[1],width:0,height:0}):s.getBoundingClientRect()}function H(s){const a=s.getBoundingClientRect(),r=getComputedStyle(s),n=r.transform;if(n){let o,e,t,i,u;if(n.startsWith("matrix3d("))o=n.slice(9,-1).split(/, /),e=+o[0],t=+o[5],i=+o[12],u=+o[13];else if(n.startsWith("matrix("))o=n.slice(7,-1).split(/, /),e=+o[0],t=+o[3],i=+o[4],u=+o[5];else return new v(a);const h=r.transformOrigin,l=a.x-i-(1-e)*parseFloat(h),f=a.y-u-(1-t)*parseFloat(h.slice(h.indexOf(" ")+1)),c=e?a.width/e:s.offsetWidth+1,d=t?a.height/t:s.offsetHeight+1;return new v({x:l,y:f,width:c,height:d})}else return new v(a)}function I(s,a,r){if(typeof s.animate>"u")return{finished:Promise.resolve()};let n;try{n=s.animate(a,r)}catch{return{finished:Promise.resolve()}}return typeof n.finished>"u"&&(n.finished=new Promise(o=>{n.onfinish=()=>{o(n)}})),n}const q="cubic-bezier(0.4, 0, 0.2, 1)",G="cubic-bezier(0.0, 0, 0.2, 1)",J="cubic-bezier(0.4, 0, 1, 1)",C=_({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function g(s,a,r){return b()({name:s,props:C({mode:r,origin:a}),setup(n,o){let{slots:e}=o;const t={onBeforeEnter(i){n.origin&&(i.style.transformOrigin=n.origin)},onLeave(i){if(n.leaveAbsolute){const{offsetTop:u,offsetLeft:h,offsetWidth:l,offsetHeight:f}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=`${u}px`,i.style.left=`${h}px`,i.style.width=`${l}px`,i.style.height=`${f}px`}n.hideOnLeave&&i.style.setProperty("display","none","important")},onAfterLeave(i){if(n.leaveAbsolute&&(i!=null&&i._transitionInitialStyles)){const{position:u,top:h,left:l,width:f,height:c}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=u||"",i.style.top=h||"",i.style.left=l||"",i.style.width=f||"",i.style.height=c||""}}};return()=>{const i=n.group?E:S;return R(i,{name:n.disabled?"":s,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:t},e.default)}}})}function V(s,a){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return b()({name:s,props:{mode:{type:String,default:r},disabled:Boolean},setup(n,o){let{slots:e}=o;return()=>R(S,{name:n.disabled?"":s,css:!n.disabled,...n.disabled?{}:a},e.default)}})}function B(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=T(`offset-${r}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[r]:t.style[r]}},onEnter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const u=`${t[n]}px`;t.style[r]="0",t.offsetHeight,t.style.transition=i.transition,s&&t._parent&&t._parent.classList.add(s),requestAnimationFrame(()=>{t.style[r]=u})},onAfterEnter:e,onEnterCancelled:e,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[r]:t.style[r]},t.style.overflow="hidden",t.style[r]=`${t[n]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[r]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(t){s&&t._parent&&t._parent.classList.remove(s),e(t)}function e(t){const i=t._initialStyle[r];t.style.overflow=t._initialStyle.overflow,i!=null&&(t.style[r]=i),delete t._initialStyle}}g("fab-transition","center center","out-in");g("dialog-bottom-transition");g("dialog-top-transition");const K=g("fade-transition"),N=g("scale-transition");g("scroll-x-transition");g("scroll-x-reverse-transition");g("scroll-y-transition");g("scroll-y-reverse-transition");g("slide-x-transition");g("slide-x-reverse-transition");const X=g("slide-y-transition");g("slide-y-reverse-transition");const Y=V("expand-transition",B()),Q=V("expand-x-transition",B("",!0)),P=Symbol.for("vuetify:form"),U=_({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function Z(s){const a=F(s,"modelValue"),r=x(()=>s.disabled),n=x(()=>s.readonly),o=W(!1),e=w([]),t=w([]);async function i(){const l=[];let f=!0;t.value=[],o.value=!0;for(const c of e.value){const d=await c.validate();if(d.length>0&&(f=!1,l.push({id:c.id,errorMessages:d})),!f&&s.fastFail)break}return t.value=l,o.value=!1,{valid:f,errors:t.value}}function u(){e.value.forEach(l=>l.reset())}function h(){e.value.forEach(l=>l.resetValidation())}return A(e,()=>{let l=0,f=0;const c=[];for(const d of e.value)d.isValid===!1?(f++,c.push({id:d.id,errorMessages:d.errorMessages})):d.isValid===!0&&l++;t.value=c,a.value=f>0?!1:l===e.value.length?!0:null},{deep:!0}),M(P,{register:l=>{let{id:f,validate:c,reset:d,resetValidation:m}=l;e.value.some(O=>O.id===f),e.value.push({id:f,validate:c,reset:d,resetValidation:m,isValid:null,errorMessages:[]})},unregister:l=>{e.value=e.value.filter(f=>f.id!==l)},update:(l,f,c)=>{const d=e.value.find(m=>m.id===l);d&&(d.isValid=f,d.errorMessages=c)},isDisabled:r,isReadonly:n,isValidating:o,isValid:a,items:e,validateOn:$(s,"validateOn")}),{errors:t,isDisabled:r,isReadonly:n,isValidating:o,isValid:a,items:e,validate:i,reset:u,resetValidation:h}}function k(){return L(P,null)}const y=Symbol("Forwarded refs");function p(s,a){let r=s;for(;r;){const n=Reflect.getOwnPropertyDescriptor(r,a);if(n)return n;r=Object.getPrototypeOf(r)}}function tt(s){for(var a=arguments.length,r=new Array(a>1?a-1:0),n=1;n<a;n++)r[n-1]=arguments[n];return s[y]=r,new Proxy(s,{get(o,e){if(Reflect.has(o,e))return Reflect.get(o,e);if(!(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))){for(const t of r)if(t.value&&Reflect.has(t.value,e)){const i=Reflect.get(t.value,e);return typeof i=="function"?i.bind(t.value):i}}},has(o,e){if(Reflect.has(o,e))return!0;if(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))return!1;for(const t of r)if(t.value&&Reflect.has(t.value,e))return!0;return!1},set(o,e,t){if(Reflect.has(o,e))return Reflect.set(o,e,t);if(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))return!1;for(const i of r)if(i.value&&Reflect.has(i.value,e))return Reflect.set(i.value,e,t);return!1},getOwnPropertyDescriptor(o,e){var i;const t=Reflect.getOwnPropertyDescriptor(o,e);if(t)return t;if(!(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))){for(const u of r){if(!u.value)continue;const h=p(u.value,e)??("_"in u.value?p((i=u.value._)==null?void 0:i.setupState,e):void 0);if(h)return h}for(const u of r){const h=u.value&&u.value[y];if(!h)continue;const l=h.slice();for(;l.length;){const f=l.shift(),c=p(f.value,e);if(c)return c;const d=f.value&&f.value[y];d&&l.push(...d)}}}}})}export{v as B,N as V,Y as a,I as b,K as c,Q as d,G as e,tt as f,J as g,D as h,j as i,Z as j,X as k,U as m,H as n,q as s,k as u};
