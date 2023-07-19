import{s as b}from"./index-71069b21.js";import{u as w}from"./useGrazeAPI-56cf2147.js";import{v as K}from"./v4-a960c1f4.js";import{V as y,a as N}from"./VBtn-a6edf83f.js";import{V as $,b as x}from"./VToolbar-7ead17ed.js";import{V as E}from"./VSpacer-927b7221.js";import{V as F}from"./VSheet-4abfbe98.js";import{V as J}from"./VContainer-0c7a435b.js";import{a as P,V as h}from"./VRow-d9c691d3.js";import{V as C}from"./VTextField-68dc880d.js";import{c as q,e as z}from"./VCard-8ad9cd00.js";import{d as B,y as m,o as S,b as G,w as s,c as a,e as V,M as k,Y as O,Z as R,h as Y,k as Z,O as H,F as Q}from"./index-3b87d87f.js";import{V as W}from"./VAutocomplete-ab872d41.js";import{V as X}from"./VDialog-bab4737f.js";import{a as _,b as ee}from"./VList-2e0a3d0f.js";const A="00000000-0000-0000-0000-000000000000",ae=B({__name:"AddTag",props:{convention:{},organisation:{}},emits:["save","close"],setup(t,{emit:c}){const u=m(""),n=m("");typeof t.convention=="object"?(u.value=t.convention.ConventionUUID,n.value=t.convention.OrganisationUUID):u.value=t.convention||"",typeof t.organisation=="object"?n.value=t.organisation.OrganisationUUID:n.value.length===0&&(n.value=t.organisation||"");const d=m({ID:0,TagUUID:K(),ConventionID:0,ConventionUUID:u.value||A,OrganisationID:0,OrganisationUUID:n.value||A,Title:"",Key:""}),g=w(),p=()=>{g.saveTag(d.value).then(r=>{r&&(d.value=r,c("save",r),c("close"))})};return(r,i)=>(S(),G(z,null,{default:s(()=>[a(x,{dark:"",color:"primary"},{default:s(()=>[a(y,{icon:"",dark:"",onClick:i[0]||(i[0]=f=>c("close"))},{default:s(()=>[a(N,null,{default:s(()=>[V("mdi:mdi-close")]),_:1})]),_:1}),a($,null,{default:s(()=>[V("Add Tag")]),_:1}),a(E),a(F,null,{default:s(()=>[a(y,{variant:"text",onClick:p},{default:s(()=>[V(" Save ")]),_:1})]),_:1})]),_:1}),a(q,null,{default:s(()=>[a(J,{fluid:!0},{default:s(()=>[a(P,null,{default:s(()=>[a(h,{cols:"12"},{default:s(()=>[a(C,{label:k(b).formLabelDisplayName,type:"text",variant:"outlined",modelValue:d.value.Title,"onUpdate:modelValue":i[1]||(i[1]=f=>d.value.Title=f)},null,8,["label","modelValue"])]),_:1}),a(h,{cols:"12"},{default:s(()=>[a(C,{label:k(b).formLabelTagKey,type:"text",variant:"outlined",modelValue:d.value.Key,"onUpdate:modelValue":i[2]||(i[2]=f=>d.value.Key=f)},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),Ue=B({__name:"SelectTags",props:O({convention:{},organisation:{},chips:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},hint:{default:""},label:{},variant:{}},{modelValue:{required:!0}}),emits:O(["change"],["update:modelValue"]),setup(t,{emit:c}){const u=R(t,"modelValue"),n=m([]),d=w(),g=m([]),p=m([]),r=m(""),i=m(""),f=m(0),T=Y(()=>[...g.value,...p.value].map(l=>({title:l.Title,value:n.value.find(e=>e.TagUUID===l.TagUUID)||l})));typeof t.convention=="object"?(r.value=t.convention.ConventionUUID,i.value=t.convention.OrganisationUUID):r.value=t.convention||"",typeof t.organisation=="object"?i.value=t.organisation.OrganisationUUID:i.value.length===0&&(i.value=t.organisation||""),(async()=>{const o=[];r.value&&o.push(d.getConventionTags(r.value)),i.value&&o.push(d.getOrganisationTags(i.value));const l=await Promise.all(o);if(r.value&&i.value?(p.value=l[0].sort((e,v)=>e.Title.localeCompare(v.Title)),g.value=l[1].sort((e,v)=>e.Title.localeCompare(v.Title))):r.value&&l.length==1?p.value=l[0].sort((e,v)=>e.Title.localeCompare(v.Title)):i.value&&l.length==1&&(g.value=l[0].sort((e,v)=>e.Title.localeCompare(v.Title))),Array.isArray(u.value))f.value=2,T.value.forEach(e=>{Array.isArray(u.value)&&u.value.find(D=>D.TagUUID===e.value.TagUUID)&&n.value.push(e.value)});else if(typeof u.value=="string"){f.value=1;try{const e=JSON.parse(u.value);T.value.forEach(v=>{e.find(j=>j.TagUUID===v.value.TagUUID)&&n.value.push(v.value)})}catch{}}})();const U=m(!1),L=()=>{U.value=!0},M=o=>{o.ConventionUUID.length>0?p.value.push(o):o.OrganisationUUID.length>0&&g.value.push(o),n.value.push(o),I()},I=()=>{switch(f.value){default:case 2:{u.value=n.value,c("change");break}case 1:{u.value=JSON.stringify(n.value),c("change");break}}};return Z(n,I),(o,l)=>(S(),H(Q,null,[a(W,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=e=>n.value=e),chips:o.chips,multiple:"",label:o.label||"Tags",variant:o.variant||"solo",hint:o.hint,"persistent-hint":!0,clearable:o.clearable,items:T.value,"item-title":"title","item-value":"value"},{"prepend-item":s(()=>[a(_,{title:"New Tag",onClick:l[0]||(l[0]=e=>L())},{prepend:s(()=>[a(N,{icon:"mdi:mdi-plus"})]),_:1}),a(ee,{class:"mt-2"})]),_:1},8,["modelValue","chips","label","variant","hint","clearable","items"]),a(X,{modelValue:U.value,"onUpdate:modelValue":l[3]||(l[3]=e=>U.value=e),scrollable:!0},{default:s(()=>[a(ae,{convention:o.convention,organisation:o.organisation,onClose:l[2]||(l[2]=e=>U.value=!1),onSave:M},null,8,["convention","organisation"])]),_:1},8,["modelValue"])],64))}});export{A as N,Ue as _};