import{_ as b}from"./SaveButton.vue_vue_type_script_setup_true_lang-XwgmqhHQ.js";import{a as T,b as k,c as _,d as g,e as D}from"./VCard-UBndLqMu.js";import{V as m,a as f}from"./VRow-4hZPCLCj.js";import{V as M}from"./VTextField-zmwrwrSh.js";import{V as w}from"./VBtn-8g6jCFa3.js";import{V as x}from"./VDialog-bqt7TMed.js";import{i as B,M as V,N,r as A,n as o,q as s,v as t,f as a,x as u,y as p,A as n,D as h}from"./index-QFnvUixi.js";const E=["innerHTML"],F=B({__name:"DeleteDialog",props:V({confirmationText:{default:""},message:{default:"Are you sure you wish to delete this item?"},subtitle:{default:""},title:{default:"Delete Item"}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:V(["delete"],["update:modelValue"]),setup(C,{emit:c}){const v=c,d=N(C,"modelValue"),i=A(""),y=({callback:e})=>{v("delete",e)};return(e,l)=>(o(),s(x,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=r=>d.value=r),"max-width":"500px"},{default:t(()=>[a(D,null,{default:t(()=>[e.title?(o(),s(T,{key:0},{default:t(()=>[u(p(e.title),1)]),_:1})):n("",!0),e.subtitle?(o(),s(k,{key:1},{default:t(()=>[u(p(e.subtitle),1)]),_:1})):n("",!0),a(_,null,{default:t(()=>[e.message?(o(),s(m,{key:0},{default:t(()=>[a(f,null,{default:t(()=>[h("div",{innerHTML:e.message},null,8,E)]),_:1})]),_:1})):n("",!0),e.confirmationText?(o(),s(m,{key:1},{default:t(()=>[a(f,null,{default:t(()=>[a(M,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=r=>i.value=r),variant:"outlined",placeholder:"Enter text here",label:"Confirmation"},null,8,["modelValue"])]),_:1})]),_:1})):n("",!0)]),_:1}),a(g,{class:"justify-space-between"},{default:t(()=>[a(w,{color:"primary",onClick:l[1]||(l[1]=r=>d.value=!1)},{default:t(()=>[u("Cancel")]),_:1}),a(b,{color:"red-darken-3",label:"Delete",enabled:i.value==e.confirmationText||!e.confirmationText,onClick:y},null,8,["enabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});export{F as _};
