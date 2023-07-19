import{u as y}from"./useGrazeAPI-56cf2147.js";import{d as k,y as c,W as N,r as L,o as C,b as D,w as e,c as t,e as s,O as A,P as b,M as R,G as B,F as E,U as F,V as O,f as h,_ as P}from"./index-3b87d87f.js";import{_ as $}from"./SaveButton.vue_vue_type_script_setup_true_lang-2cc97945.js";import{V as v,a as V}from"./VRow-d9c691d3.js";import{V as g}from"./VBtn-a6edf83f.js";import{a as z,c as G,V as q}from"./VList-2e0a3d0f.js";import{e as M,V as W,a as j,c as H,d as J}from"./VCard-8ad9cd00.js";import{V as K}from"./VTextField-68dc880d.js";import{V as Q}from"./VDialog-bab4737f.js";import{V as X}from"./VContainer-0c7a435b.js";import{v as Y}from"./v4-a960c1f4.js";import"./rounded-17dcc806.js";import"./scopeId-18ae8779.js";import"./index-2c63a4b0.js";import"./index-8f54dc39.js";import"./ssrBoot-c4fed021.js";import"./createSimpleFunctional-edf77cb9.js";import"./VAvatar-6c484f22.js";import"./VImg-9438445f.js";const I=r=>(F("data-v-25dd8c39"),r=r(),O(),r),Z=I(()=>h("h3",null,"Conventions",-1)),ee=I(()=>h("p",null,' Are you sure you wish to delete this convention? All data relating to it will be removed including all registrations and payment information. This action can not be undone. To confirm type "I UNDERSTAND" in the box below. ',-1)),te=k({__name:"ConventionsView",emits:["pageTitle"],setup(r,{emit:w}){w("pageTitle","Conventions");const u=y(),l=c([]),_=N().params.organisation.toString(),d=c(!1),i=c(-1),m=c("");u.getConventionList(_).then(o=>{l.value=o});const T=()=>{u.getOrganisation(_).then(o=>{if(o){const a={ID:0,ConventionUUID:Y(),OrganisationID:o.ID,OrganisationUUID:o.OrganisationUUID,Name:"New Convention",Description:"",DetailLink:"",Logo:"",Slug:"",Accommodation:[],Tickets:[],Extras:[],Interests:[],Visible:!1};u.saveConvention(a).then(f=>{f&&l.value.push(f)})}})},p=()=>{i.value=-1,d.value=!1},U=o=>{i.value=o,d.value=!0},x=({callback:o})=>{m.value="",i.value<0||i.value>=l.value.length?(o&&o("Invalid Convention"),setTimeout(p,2e3)):u.deleteConvention(l.value[i.value].ConventionUUID).then(a=>{a?(l.value.splice(i.value,1),o&&o("Convention Deleted")):o&&o("Failed to Delete Convention"),setTimeout(p,2e3)}).catch(()=>{o&&(o("Failed to Delete Convention"),setTimeout(p,2e3))})};return(o,a)=>{const f=L("RouterLink");return C(),D(X,{fluid:!0,class:"px-0"},{default:e(()=>[t(V,null,{default:e(()=>[t(v,null,{default:e(()=>[Z]),_:1}),t(v,{class:"text-right"},{default:e(()=>[t(g,{color:"primary",onClick:T},{default:e(()=>[s("New")]),_:1})]),_:1})]),_:1}),t(q,null,{default:e(()=>[(C(!0),A(E,null,b(l.value,(n,S)=>(C(),D(z,{key:n.ID,"prepend-icon":"mdi:mdi-group"},{append:e(()=>[t(g,{color:"red-darken-3",icon:"mdi:mdi-window-close",size:"x-small",onClick:ne=>U(S)},null,8,["onClick"])]),default:e(()=>[t(G,null,{default:e(()=>[t(f,{to:`/dashboard/admin/${R(_)}/convention/${n.Slug?n.Slug:n.ConventionUUID}`,value:n.ID,class:"d-block"},{default:e(()=>[s(B(n.Name),1)]),_:2},1032,["to","value"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(Q,{modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=n=>d.value=n),width:"auto"},{default:e(()=>[t(M,null,{default:e(()=>[t(W,null,{default:e(()=>[s(" Delete Convention ")]),_:1}),t(j,null,{default:e(()=>[s(" A quick way to make enemies ")]),_:1}),t(H,null,{default:e(()=>[t(V,null,{default:e(()=>[t(v,null,{default:e(()=>[ee]),_:1})]),_:1}),t(V,null,{default:e(()=>[t(v,null,{default:e(()=>[t(K,{modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=n=>m.value=n),variant:"outlined",placeholder:"Enter text here",label:"Confirmation"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(J,null,{default:e(()=>[t($,{color:"red-darken-3",label:"Delete",enabled:m.value=="I UNDERSTAND",onClick:x},null,8,["enabled"]),t(g,{color:"primary",onClick:p},{default:e(()=>[s("Cancel")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});const we=P(te,[["__scopeId","data-v-25dd8c39"]]);export{we as default};
