import{d as g,V as a}from"./VCheckboxBtn-tgO8Tg-B.js";import{m as A,u as F,a as u}from"./VTextField-ENRL7HUP.js";import{p as I,R as B,d as R,u as U,S as M,c as D,aM as N,f as l,m as r}from"./index-LoOE9hv8.js";import{u as S}from"./VContainer-V1weI7tX.js";const $=I({...A(),...B(g(),["inline"])},"VCheckbox"),E=R()({name:"VCheckbox",inheritAttrs:!1,props:$(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:c,slots:t}=d;const o=U(e,"modelValue"),{isFocused:n,focus:i,blur:m}=F(e),p=M(),V=D(()=>e.id||`checkbox-${p}`);return S(()=>{const[b,f]=N(c),k=u.filterProps(e),v=a.filterProps(e);return l(u,r({class:["v-checkbox",e.class]},b,k,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,id:V.value,focused:n.value,style:e.style}),{...t,default:s=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C}=s;return l(a,r(v,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},f,{modelValue:o.value,"onUpdate:modelValue":y=>o.value=y,onFocus:i,onBlur:m}),t)}})}),{}}});export{E as V};
