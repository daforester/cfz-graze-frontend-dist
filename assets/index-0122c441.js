<<<<<<<< HEAD:assets/index-0122c441.js
import{p as d,aT as p,x as l,T as I,aU as T}from"./index-0053efbb.js";const h=d({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),O=(e,n)=>{let{slots:s}=n;const{transition:t,disabled:o,...c}=e,{component:r=I,...i}=typeof t=="object"?t:{};return p(r,l(typeof t=="string"?{name:o?"":t}:i,c,{disabled:o}),s)};function _(e,n){if(!T)return;const s=n.modifiers||{},t=n.value,{handler:o,options:c}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var f;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const a=(f=e._observe)==null?void 0:f[n.instance.$.uid];if(!a)return;const u=i.some(b=>b.isIntersecting);o&&(!s.quiet||a.init)&&(!s.once||u||a.init)&&o(u,i,v),u&&s.once?m(e,n):a.init=!0},c);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function m(e,n){var t;const s=(t=e._observe)==null?void 0:t[n.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const g={mounted:_,unmounted:m},P=g;export{P as I,O as M,h as m};
========
import{p as d,aS as p,x as l,T as I,aT as T}from"./index-4b048e5a.js";const h=d({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),O=(e,n)=>{let{slots:s}=n;const{transition:t,disabled:o,...c}=e,{component:r=I,...i}=typeof t=="object"?t:{};return p(r,l(typeof t=="string"?{name:o?"":t}:i,c,{disabled:o}),s)};function _(e,n){if(!T)return;const s=n.modifiers||{},t=n.value,{handler:o,options:c}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var f;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const a=(f=e._observe)==null?void 0:f[n.instance.$.uid];if(!a)return;const u=i.some(b=>b.isIntersecting);o&&(!s.quiet||a.init)&&(!s.once||u||a.init)&&o(u,i,v),u&&s.once?m(e,n):a.init=!0},c);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function m(e,n){var t;const s=(t=e._observe)==null?void 0:t[n.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const g={mounted:_,unmounted:m},P=g;export{P as I,O as M,h as m};
>>>>>>>> 5ff3a488d8c347669cf0f272e0213490217eeb82:assets/index-0b213796.js
