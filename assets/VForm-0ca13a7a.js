<<<<<<<< HEAD:assets/VForm-23153780.js
import{m as p,u as v}from"./VContainer-3aa9fa00.js";import{v as b,w as F,j as V}from"./VTextField-b92e7f71.js";import{p as y,n as h,r as R,v as P}from"./index-ac2a9356.js";const k=y({...p(),...b()},"VForm"),S=h()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,i){let{slots:n,emit:f}=i;const a=F(r),s=R();function u(t){t.preventDefault(),a.reset()}function l(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),f("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return v(()=>{var t;return P("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,s)}});export{S as V};
========
import{m as p,u as v}from"./VContainer-b93edaeb.js";import{v as b,w as F,j as V}from"./VTextField-bb67de36.js";import{p as y,n as h,r as R,v as P}from"./index-a3d4b6d2.js";const k=y({...p(),...b()},"VForm"),S=h()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,i){let{slots:n,emit:f}=i;const a=F(r),s=R();function u(t){t.preventDefault(),a.reset()}function l(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),f("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return v(()=>{var t;return P("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,s)}});export{S as V};
>>>>>>>> 6629c17a57089169cb29ac674fa4b709225238e7:assets/VForm-0ca13a7a.js
