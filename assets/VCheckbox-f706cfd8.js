import{e as m,aD as I,p as A,an as F,n as U,u as $,a as B,ax as D,v as n,x as c}from"./index-0053efbb.js";import{d as M,V as d}from"./VCheckboxBtn-68680ed4.js";import{m as R,u as _,f as i}from"./VTextField-24ce0553.js";import{a as j}from"./VContainer-a0296722.js";const K=(e,u,r=()=>e[t],a=s=>{u(`update:${t}`,s);const o=I();o!==null&&o.proxy!==null&&o.proxy.$forceUpdate()},t="modelValue")=>m({get(){return r()},set(s){return a(s)}});const q=A({...R(),...F(M(),["inline"])},"VCheckbox"),L=U()({name:"VCheckbox",inheritAttrs:!1,props:q(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,u){let{attrs:r,slots:a}=u;const t=$(e,"modelValue"),{isFocused:s,focus:o,blur:p}=_(e),V=B(),f=m(()=>e.id||`checkbox-${V}`);return j(()=>{const[x,b]=D(r),[k,w]=i.filterProps(e),[v,z]=d.filterProps(e);return n(i,c({class:["v-checkbox",e.class]},x,k,{modelValue:t.value,"onUpdate:modelValue":l=>t.value=l,id:f.value,focused:s.value,style:e.style}),{...a,default:l=>{let{id:h,messagesId:C,isDisabled:P,isReadonly:y}=l;return n(d,c(v,{id:h.value,"aria-describedby":C.value,disabled:P.value,readonly:y.value},b,{modelValue:t.value,"onUpdate:modelValue":g=>t.value=g,onFocus:o,onBlur:p}),a)}})}),{}}});export{L as V,K as u};
