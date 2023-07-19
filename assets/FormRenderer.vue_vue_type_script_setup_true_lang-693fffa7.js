import{d as C,Y as $,Z as k,y as V,S as E,o as n,b as c,w as m,c as D,O as r,G as I,L as l,P as h,F as f,H as q}from"./index-3b87d87f.js";import{s as y,_ as B}from"./FormField.vue_vue_type_script_setup_true_lang-9565e55e.js";import{_ as H}from"./SaveButton.vue_vue_type_script_setup_true_lang-2cc97945.js";import{u as M}from"./useGrazeAPI-56cf2147.js";import{G}from"./userData-d733b0cf.js";import{v}from"./v4-a960c1f4.js";import{V as L}from"./VContainer-0c7a435b.js";import{a as F,V as g}from"./VRow-d9c691d3.js";import{V as R}from"./VForm-adafacda.js";const x={key:0,class:"my-2"},N={key:1,class:"my-2"},P={key:0,class:"my-2"},z={key:1,class:"my-2"},W=C({__name:"FormRenderer",props:$({admin:{type:Boolean,default:!1},convention:{},data:{},editable:{type:Boolean,default:!0},preview:{type:Boolean,default:!1}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(u){const o=k(u,"modelValue");y(o.value.Sections),o.value.Sections.forEach(e=>{e.Fields&&y(e.Fields)});const p=V(),d=G(),b=M(),S=V((()=>{if(u.data!==void 0){const i=E(u.data);return o.value.Sections.forEach(t=>{t.Fields&&t.Fields.forEach(a=>{const s=u.data.Data.find(U=>U.SectionFieldUUID===a.SectionFieldUUID&&U.SectionFieldUUID==a.SectionFieldUUID);if(s)a.Value=s.Data;else{const U={ID:0,SubmissionDataUUID:v(),SubmissionID:u.data.ID,SubmissionUUID:u.data.SubmissionUUID,SectionID:t.ID,SectionUUID:t.SectionUUID,SectionFieldID:a.ID,SectionFieldUUID:a.SectionFieldUUID,Data:a.Value};i.Data.push(U)}})}),i}const e={ID:0,SubmissionUUID:v(),FormID:o.value.ID,FormUUID:o.value.FormUUID,UserID:(d==null?void 0:d.ID)||0,UserUUID:(d==null?void 0:d.UserUUID)||"",Data:[]};return e.Data=o.value.Sections.map(i=>i.Fields?i.Fields.map(t=>({ID:0,SubmissionDataUUID:v(),SubmissionID:e.ID,SubmissionUUID:e.SubmissionUUID,SectionID:i.ID,SectionUUID:i.SectionUUID,SectionFieldID:t.ID,SectionFieldUUID:t.SectionFieldUUID,Data:t.Value})):[]).flat(),e})()),_=(e,i,t)=>{const a=S.value.Data.find(s=>s.SectionUUID===e&&s.SectionFieldUUID===i);a&&(a.Data=t)},w=({callback:e})=>{var i;(i=p.value)==null||i.validate().then(t=>{t.valid?b.saveSubmission(S.value).then(a=>{a?(S.value=a,e&&e("Saved")):e&&e("Failed to process request")}).catch(()=>{e&&e("Failed to process request")}):e&&e("Errors in form detected, please review and try again.")})};return(e,i)=>(n(),c(L,null,{default:m(()=>[D(R,{ref_key:"formValidator",ref:p,onSubmit:i[0]||(i[0]=q(()=>{},["prevent"]))},{default:m(()=>[o.value.Heading?(n(),r("h2",x,I(o.value.Heading),1)):l("",!0),o.value.Description?(n(),r("p",N,I(o.value.Description),1)):l("",!0),(n(!0),r(f,null,h(o.value.Sections,t=>(n(),r(f,{key:`section_${o.value.ID}.${t.ID}`},[t.Heading?(n(),r("h3",P,I(t.Heading),1)):l("",!0),t.Description?(n(),r("p",z,I(t.Description),1)):l("",!0),t.Fields?(n(!0),r(f,{key:2},h(t.Fields,a=>(n(),r(f,{key:`field_${o.value.ID}.${t.ID}.${a.ID}`},[a.Field?(n(),c(F,{key:0},{default:m(()=>[D(g,null,{default:m(()=>[D(B,{field:a.Field,modelValue:a.Value,"onUpdate:modelValue":s=>a.Value=s,admin:e.admin,convention:e.convention,required:a.Required,"min-length":a.MinLength,"max-length":a.MaxLength,"persistent-hint":!0,disabled:!e.editable,onChange:s=>_(t.SectionUUID,a.SectionFieldUUID,a.Value)},null,8,["field","modelValue","onUpdate:modelValue","admin","convention","required","min-length","max-length","disabled","onChange"])]),_:2},1024)]),_:2},1024)):l("",!0)],64))),128)):l("",!0)],64))),128)),e.editable&&!e.preview?(n(),c(F,{key:2},{default:m(()=>[D(g,null,{default:m(()=>[D(H,{onClick:w,type:"submit"})]),_:1})]),_:1})):l("",!0)]),_:1},512)]),_:1}))}});export{W as _};