import{F as K}from"./form-aee596e2.js";import{P as Q}from"./permission-03f04c02.js";import{I as G,a1 as $,a2 as M,r as c,a3 as P,w as Y,K as s,L as p,M as e,S as V,v as t,$ as q,_ as A,J as Z,Q as C,N as I,O as B,R as E,a4 as W,Z as X,H as ee}from"./index-0053efbb.js";import{u as j}from"./useStoreAPI-890438a7.js";import{_ as te}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-dd372cd7.js";import{u as ne,V as ae}from"./VCheckbox-f706cfd8.js";import{_ as oe}from"./ModelDialog.vue_vue_type_script_setup_true_lang-411e07a9.js";import{s as k}from"./index-71069b21.js";import{a as U,V as g}from"./VRow-db174dd7.js";import{a as z}from"./VAvatar-634e3165.js";import{V as T}from"./VTextField-24ce0553.js";import{V as le}from"./VForm-bea246b4.js";import{V as ie}from"./VFileInput-2142c154.js";import{n as H,V as O}from"./VContainer-a0296722.js";import{G as S}from"./group-d2a77946.js";import{C as h,a as se}from"./canEditOrganisation-331e4751.js";import{G as J}from"./userData-6e245b37.js";import{e as ue,V as re,c as F,b as de,d as me}from"./VCard-e5b57135.js";import{v as ve}from"./v4-a960c1f4.js";import{u as ce}from"./VToolbar-ea9a1703.js";import"./VChip-f09649e1.js";import"./scopeId-ed5cb66e.js";import"./index-0122c441.js";import"./VDialog-9f9d4d99.js";import"./VCheckboxBtn-68680ed4.js";const fe=(d=void 0,n=void 0)=>d===void 0?!1:n===void 0?h(d,S.GROUP_TYPE_CONVENTION).EditConvention:h(d,S.GROUP_TYPE_CONVENTION,n.ConventionUUID,n).EditConvention,pe=(d,n)=>d===void 0?!1:h(d,S.GROUP_TYPE_CONVENTION,n.ConventionUUID,n).EditRegistration,ge=(d,n)=>d===void 0?!1:h(d,S.GROUP_TYPE_CONVENTION,n.ConventionUUID,n).ViewRegistration,_e=G({__name:"EditConventionDialog",props:$({convention:{},title:{}},{modelValue:{type:Boolean,required:!0}}),emits:$(["update:convention","save"],["update:modelValue"]),setup(d,{emit:n}){const _=d,y=q(),m=j(),{title:N=""}=_,D=M(d,"modelValue"),r=ne(_,n,void 0,void 0,"convention"),a=c(P(r.value));Y(r,()=>{a.value=P(r.value)});const x=c(`${m.GetConventionLogoURL(a.value.ConventionUUID)}?${new Date().getTime()}`),L=c(),w=c(),b=()=>{x.value=URL.createObjectURL(L.value.files[0])},o=()=>{a.value=P(r.value)},i=async()=>{var l;const u=new FormData((l=w.value)==null?void 0:l.$el);if(u.get("Image")&&u.get("Image").size>0)return u.set("ConventionUUID",a.value.ConventionUUID),await m.SaveConventionLogo(u)},f=u=>{i(),y.saveConvention(a.value).then(l=>{l?u&&u("Convention Data Saved").then(()=>{r.value=l,n("save",l)}):u&&u("Failed to save")}).catch(()=>{u("Failed to save")})};return(u,l)=>(s(),p(oe,{modelValue:D.value,"onUpdate:modelValue":l[5]||(l[5]=v=>D.value=v),onReset:o,onSave:f,title:V(N),color:"primary","show-close-action":!0,"show-reset-action":!0,"show-save-action":!0},{default:e(()=>[t(H,{class:"pa-0",fluid:!0},{default:e(()=>[t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(z,{class:"imgLogo mx-auto",src:x.value||""},null,8,["src"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(T,{label:V(k).formLabelName,name:"Name",variant:"outlined",modelValue:a.value.Name,"onUpdate:modelValue":l[0]||(l[0]=v=>a.value.Name=v)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(T,{label:V(k).formLabelDescription,name:"Description",variant:"outlined",multiline:"true",modelValue:a.value.Description,"onUpdate:modelValue":l[1]||(l[1]=v=>a.value.Description=v)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(T,{label:V(k).formLabelDetailLink,name:"DetailLink",variant:"outlined",multiline:"true",modelValue:a.value.DetailLink,"onUpdate:modelValue":l[2]||(l[2]=v=>a.value.DetailLink=v)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(T,{label:V(k).formLabelSlug,name:"Slug",variant:"outlined",multiline:"true",modelValue:a.value.Slug,"onUpdate:modelValue":l[3]||(l[3]=v=>a.value.Slug=v)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(ae,{label:V(k).formConventionVisible,name:"Visible",modelValue:a.value.Visible,"onUpdate:modelValue":l[4]||(l[4]=v=>a.value.Visible=v)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(le,{ref_key:"conventionImageForm",ref:w,enctype:"multipart/form-data"},{default:e(()=>[t(ie,{label:V(k).formLabelLogo,name:"Image",variant:"outlined",ref_key:"imageFileInput",ref:L,accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp","hide-details":"",onChange:b},null,8,["label"])]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}});const Ce=A(_e,[["__scopeId","data-v-58a92662"]]),Ve={key:0,class:"text-green"},Ue={key:1,class:"text-red"},De={key:0,class:"text-green"},Ie={key:1,class:"text-red"},ye=G({__name:"ConventionCard",props:$({open:{type:Boolean,default:!1}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(d){const n=M(d,"modelValue"),_=j(),y=J(),m=c(_.GetConventionLogoURL(n.value.ConventionUUID)),N=c(`
Are you sure you wish to delete this convention? All data relating to it will be
removed including all registrations and payment information. This action can
not be undone. To confirm type "I UNDERSTAND" in the box below.
`),D=c(!1),r=c(!1),a=c(fe(y,n.value)),x=c(pe(y,n.value)),L=c(ge(y,n.value)),w=()=>{r.value=!1,m.value=`${_.GetConventionLogoURL(n.value.ConventionUUID)}?ts=${Date.now()}`};return(b,o)=>{const i=Z("RouterLink");return s(),p(ue,null,{default:e(()=>[t(de,{class:"flex-1-1 align-content-start"},{default:e(()=>[m.value?(s(),p(z,{key:0,src:m.value,title:n.value.Name,class:"logo text-center"},null,8,["src","title"])):C("",!0),n.value.Name?(s(),p(re,{key:1},{default:e(()=>[I(B(n.value.Name),1)]),_:1})):C("",!0),n.value.Description?(s(),p(F,{key:2,class:"pa-0 flex-1-0"},{default:e(()=>[I(B(n.value.Description),1)]),_:1})):C("",!0),t(F,{class:"px-0 pb-0"},{default:e(()=>[I(" Visibility:  "),n.value.Visible?(s(),E("span",Ve,"Visible")):(s(),E("span",Ue,"Hidden"))]),_:1}),t(F,{class:"px-0 pb-0"},{default:e(()=>[I(" Registration:  "),b.open?(s(),E("span",De,"Open")):(s(),E("span",Ie,"Closed"))]),_:1})]),_:1}),t(me,null,{default:e(()=>[t(U,{"no-gutters":""},{default:e(()=>[a.value?(s(),p(g,{key:0,class:"ma-1"},{default:e(()=>[t(O,{variant:"tonal",color:"primary",onClick:o[0]||(o[0]=f=>r.value=!0),width:"100%"},{default:e(()=>[I("Edit")]),_:1})]),_:1})):C("",!0),C("",!0),a.value?(s(),p(g,{key:2,class:"ma-1"},{default:e(()=>[t(i,{to:`/admin/conventions/${n.value.Slug?n.value.Slug:n.value.ConventionUUID}`},{default:e(()=>[t(O,{variant:"tonal",color:"red",width:"100%"},{default:e(()=>[I("Configuration")]),_:1})]),_:1},8,["to"])]),_:1})):C("",!0),L.value||x.value?(s(),p(g,{key:3,class:"ma-1"},{default:e(()=>[t(i,{to:`/admin/conventions/${n.value.Slug?n.value.Slug:n.value.ConventionUUID}/registrations`},{default:e(()=>[t(O,{variant:"tonal",color:"green",width:"100%"},{default:e(()=>[I("Registrations")]),_:1})]),_:1},8,["to"])]),_:1})):C("",!0)]),_:1})]),_:1}),r.value?(s(),p(Ce,{key:0,modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=f=>r.value=f),convention:n.value,"onUpdate:convention":o[2]||(o[2]=f=>n.value=f),onSave:w,title:`${n.value.Name} General Settings`},null,8,["modelValue","convention","title"])):C("",!0),D.value?(s(),p(te,{key:1,"confirmation-text":"I UNDERSTAND",message:N.value,title:"Delete Convention",subtitle:"A quick way to make enemies"},null,8,["message"])):C("",!0)]),_:1})}}});const Ne=A(ye,[["__scopeId","data-v-956f1716"]]),xe=G({__name:"ConventionsView",emits:["pageTitle"],setup(d,{emit:n}){var b;n("pageTitle","Conventions");const _=q(),y=J(),m=c([]),N=c([]),D=W();let r=((b=D.params.organisation)==null?void 0:b.toString())||"";const a=c();Y(D,()=>{var o,i;r!==((o=D.params.organisation)==null?void 0:o.toString())&&(r=((i=D.params.organisation)==null?void 0:i.toString())||"",x())});const x=()=>{r?_.getOrganisation(r).then(o=>{o&&(a.value=o,_.getConventionList(o.OrganisationUUID).then(i=>{i&&(m.value=i,L())}))}).catch(()=>{}):_.getPermissionAccessList(Q.PERMISSION_TYPE_NULL).then(o=>{o&&(m.value=o.Conventions,L())})},L=()=>{m.value.forEach(o=>{_.getConventionForms(o.ConventionUUID).then(i=>{i&&(N.value=[...N.value,...i])}).catch(i=>{console.error(i)})})},w=()=>{var o,i;if(a.value){const f={ID:0,ConventionUUID:ve(),OrganisationID:((o=a.value)==null?void 0:o.ID)||0,OrganisationUUID:((i=a.value)==null?void 0:i.OrganisationUUID)||ce,Name:"New Convention",Description:"",DetailLink:"",Logo:"",Slug:"",Accommodation:[],Tickets:[],Extras:[],Interests:[],Visible:!1};_.saveConvention(f).then(u=>{u&&m.value.push(u)})}};return x(),(o,i)=>(s(),p(H,null,{default:e(()=>[t(U,null,{default:e(()=>[(s(!0),E(ee,null,X(m.value,(f,u)=>(s(),p(g,{key:f.ID,cols:"12",sm:"6",md:"4",lg:"3",class:"d-flex flex-column"},{default:e(()=>{var l,v;return[t(Ne,{modelValue:m.value[u],"onUpdate:modelValue":R=>m.value[u]=R,class:"elevation-5 flex-1-0 d-flex flex-column","organisation-slug":((l=f.Organisation)==null?void 0:l.Slug)||((v=f.Organisation)==null?void 0:v.OrganisationUUID)||"",open:!!N.value.find(R=>R.ConventionUUID===f.ConventionUUID&&R.Type===V(K).FORM_TYPE_REGISTRATION&&R.State.New)},null,8,["modelValue","onUpdate:modelValue","organisation-slug","open"])]}),_:2},1024))),128))]),_:1}),t(U,null,{default:e(()=>[a.value&&V(se)(V(y),a.value)?(s(),p(g,{key:0,class:"text-right"},{default:e(()=>[t(O,{color:"primary",onClick:w},{default:e(()=>[I("New")]),_:1})]),_:1})):C("",!0)]),_:1})]),_:1}))}});const Ze=A(xe,[["__scopeId","data-v-c861c470"]]);export{Ze as default};