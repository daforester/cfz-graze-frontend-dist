import{_ as i}from"./SaveButton.vue_vue_type_script_setup_true_lang-d157f340.js";import{V as a}from"./forwardRefs-a66d512a.js";import{V as w}from"./VDialog-febf7c08.js";import{V as h,a as A}from"./VToolbar-785c40db.js";import{V as B}from"./scopeId-212c7d8e.js";import{V as u}from"./VBtn-41e69288.js";import{c as g,d as D,e as x}from"./VCard-110d151b.js";import{I as R,a0 as p,a1 as T,M as o,N as s,O as e,v as l,P as n,Q as f,a8 as y,S as d,au as F,X as S}from"./index-4a0628fc.js";const L=S("template",{class:"d-none d-sm-inline"},[n("Delete")],-1),N=S("template",{class:"d-none d-sm-inline"},[n("Reset")],-1),X=R({__name:"ModelDialog",props:p({color:{type:String,required:!1,default:"primary"},fullscreen:{type:Boolean,required:!1,default:!1},modelValue:{type:Boolean,required:!0},onDelete:{type:Function,required:!1,default:void 0},onReset:{type:Function,required:!1,default:void 0},onSave:{type:Function,required:!1,default:void 0},title:{type:String,required:!1,default:""},cardClass:{type:String,required:!1,default:""},showCloseAction:{type:Boolean,required:!1,default:!1},showDeleteAction:{type:Boolean,required:!1,default:!1},showResetAction:{type:Boolean,required:!1,default:!1},showSaveAction:{type:Boolean,required:!1,default:!1},saveButtonLabel:{type:String,required:!1,default:"Save"},closeActionLabel:{type:String,required:!1,default:"Cancel"},persistent:{type:Boolean,required:!1,default:!1},retainFocus:{type:Boolean,required:!1,default:!0},scrollable:{type:Boolean,required:!1,default:!1}},{modelValue:{type:Boolean,required:!0}}),emits:p(["delete","reset","save"],["update:modelValue"]),setup(t,{emit:c}){const m=T(t,"modelValue"),V=()=>{m.value=!1},v=({callback:r})=>{c("delete",r)},k=()=>{c("reset")},C=({callback:r})=>{c("save",r)};return(r,q)=>(o(),s(w,{modelValue:m.value,"onUpdate:modelValue":q[0]||(q[0]=b=>m.value=b),scrollable:t.scrollable,"retain-focus":t.retainFocus,persistent:t.persistent,fullscreen:t.fullscreen},{default:e(()=>[l(x,null,{default:e(()=>[l(h,{color:t.color},{default:e(()=>[l(A,null,{default:e(()=>[n(f(t.title),1)]),_:1}),l(B),y(r.$slots,"toolbarButtons"),t.onDelete?(o(),s(a,{key:0},{default:e(()=>[l(i,{"prepend-icon":"mdi:mdi-delete",color:"white",onClick:v},{default:e(()=>[L]),_:1})]),_:1})):d("",!0),t.onReset?(o(),s(a,{key:1},{default:e(()=>[l(u,{"prepend-icon":"mdi:mdi-restore",onClick:k},{default:e(()=>[N]),_:1})]),_:1})):d("",!0),t.onSave?(o(),s(a,{key:2},{default:e(()=>[l(i,{"prepend-icon":"mdi:mdi-content-save-outline",color:"white",onClick:C},{default:e(()=>[n(f(t.saveButtonLabel),1)]),_:1})]),_:1})):d("",!0),l(a,null,{default:e(()=>[l(u,{icon:"mdi:mdi-window-close",onClick:V})]),_:1})]),_:3},8,["color"]),l(g,{class:F(t.cardClass)},{default:e(()=>[y(r.$slots,"default")]),_:3},8,["class"]),l(D,null,{default:e(()=>[t.showCloseAction?(o(),s(a,{key:0},{default:e(()=>[l(u,{color:"blue-darken-1",variant:"text",onClick:V},{default:e(()=>[n(f(t.closeActionLabel),1)]),_:1})]),_:1})):d("",!0),t.showDeleteAction?(o(),s(a,{key:1},{default:e(()=>[l(i,{color:"red-darken-1",variant:"text",onClick:v},{default:e(()=>[n(" Delete ")]),_:1})]),_:1})):d("",!0),t.showResetAction?(o(),s(a,{key:2},{default:e(()=>[l(u,{color:"blue-darken-1",variant:"text",onClick:k},{default:e(()=>[n(" Reset ")]),_:1})]),_:1})):d("",!0),l(B),y(r.$slots,"actions"),t.showSaveAction?(o(),s(a,{key:3},{default:e(()=>[l(i,{color:"green-darken-1",variant:"text",onClick:C},{default:e(()=>[n(f(t.saveButtonLabel),1)]),_:1})]),_:1})):d("",!0)]),_:3})]),_:3})]),_:3},8,["modelValue","scrollable","retain-focus","persistent","fullscreen"]))}});export{X as _};
