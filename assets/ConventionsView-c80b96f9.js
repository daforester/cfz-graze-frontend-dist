import{F as K}from"./form-aee596e2.js";import{P as Q}from"./permission-03f04c02.js";import{I as $,a1 as F,a2 as M,r as c,a3 as P,w as Y,K as s,L as p,M as e,S as V,v as t,$ as j,_ as G,J as Z,Q as C,N as I,O as A,R as E,a4 as W,Z as X,H as ee}from"./index-358e21fe.js";import{u as q}from"./useStoreAPI-5cd9813a.js";import{_ as te}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-6afb0c91.js";import{u as ae,V as ne}from"./VCheckbox-a37409f6.js";import{_ as oe}from"./ModelDialog.vue_vue_type_script_setup_true_lang-a56addc1.js";import{s as k}from"./index-71069b21.js";import{a as U,V as g}from"./VRow-6e91ea1f.js";import{a as z}from"./VAvatar-8e2d65d0.js";import{V as S}from"./VTextField-b350d9db.js";import{V as le}from"./VForm-63e5b20c.js";import{V as ie}from"./VFileInput-3ccfa307.js";import{n as H,V as T}from"./VContainer-76f61da9.js";import{G as O}from"./group-d2a77946.js";import{C as h,a as se}from"./canEditOrganisation-f68b643a.js";import{G as J}from"./userData-fc96ebc1.js";import{e as ue,V as re,a as de,c as B,b as me,d as ve}from"./VCard-7ba32c8b.js";import{v as ce}from"./v4-a960c1f4.js";import{u as fe}from"./VToolbar-8ebd3c67.js";import"./VChip-3b56a21c.js";import"./scopeId-c7a023b5.js";import"./index-d03f7181.js";import"./VDialog-701a49cc.js";import"./VCheckboxBtn-5e6f3b41.js";const pe=(d=void 0,a=void 0)=>d===void 0?!1:a===void 0?h(d,O.GROUP_TYPE_CONVENTION).EditConvention:h(d,O.GROUP_TYPE_CONVENTION,a.ConventionUUID,a).EditConvention,ge=(d,a)=>d===void 0?!1:h(d,O.GROUP_TYPE_CONVENTION,a.ConventionUUID,a).EditRegistration,_e=(d,a)=>d===void 0?!1:h(d,O.GROUP_TYPE_CONVENTION,a.ConventionUUID,a).ViewRegistration,Ce=$({__name:"EditConventionDialog",props:F({convention:{},title:{}},{modelValue:{type:Boolean,required:!0}}),emits:F(["update:convention","save"],["update:modelValue"]),setup(d,{emit:a}){const _=d,y=j(),m=q(),{title:N=""}=_,D=M(d,"modelValue"),r=ae(_,a,void 0,void 0,"convention"),n=c(P(r.value));Y(r,()=>{n.value=P(r.value)});const b=c(`${m.GetConventionLogoURL(n.value.ConventionUUID)}?${new Date().getTime()}`),x=c(),w=c(),L=()=>{b.value=URL.createObjectURL(x.value.files[0])},o=()=>{n.value=P(r.value)},i=async()=>{var l;const u=new FormData((l=w.value)==null?void 0:l.$el);if(u.get("Image")&&u.get("Image").size>0)return u.set("ConventionUUID",n.value.ConventionUUID),await m.SaveConventionLogo(u)},f=u=>{i(),y.saveConvention(n.value).then(l=>{l?u&&u("Convention Data Saved").then(()=>{r.value=l,a("save",l)}):u&&u("Failed to save")}).catch(()=>{u("Failed to save")})};return(u,l)=>(s(),p(oe,{modelValue:D.value,"onUpdate:modelValue":l[5]||(l[5]=v=>D.value=v),onReset:o,onSave:f,title:V(N),color:"primary","show-close-action":!0,"show-reset-action":!0,"show-save-action":!0},{default:e(()=>[t(H,{class:"pa-0",fluid:!0},{default:e(()=>[t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(z,{class:"imgLogo mx-auto",src:b.value||""},null,8,["src"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(S,{label:V(k).formLabelName,name:"Name",variant:"outlined",modelValue:n.value.Name,"onUpdate:modelValue":l[0]||(l[0]=v=>n.value.Name=v)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(S,{label:V(k).formLabelDescription,name:"Description",variant:"outlined",multiline:"true",modelValue:n.value.Description,"onUpdate:modelValue":l[1]||(l[1]=v=>n.value.Description=v)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(S,{label:V(k).formLabelDetailLink,name:"DetailLink",variant:"outlined",multiline:"true",modelValue:n.value.DetailLink,"onUpdate:modelValue":l[2]||(l[2]=v=>n.value.DetailLink=v)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(S,{label:V(k).formLabelSlug,name:"Slug",variant:"outlined",multiline:"true",modelValue:n.value.Slug,"onUpdate:modelValue":l[3]||(l[3]=v=>n.value.Slug=v)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(ne,{label:V(k).formConventionVisible,name:"Visible",modelValue:n.value.Visible,"onUpdate:modelValue":l[4]||(l[4]=v=>n.value.Visible=v)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(U,null,{default:e(()=>[t(g,null,{default:e(()=>[t(le,{ref_key:"conventionImageForm",ref:w,enctype:"multipart/form-data"},{default:e(()=>[t(ie,{label:V(k).formLabelLogo,name:"Image",variant:"outlined",ref_key:"imageFileInput",ref:x,accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp","hide-details":"",onChange:L},null,8,["label"])]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}});const Ve=G(Ce,[["__scopeId","data-v-58a92662"]]),Ue={key:0,class:"text-green"},De={key:1,class:"text-red"},Ie={key:0,class:"text-green"},ye={key:1,class:"text-red"},Ne=$({__name:"ConventionCard",props:F({open:{type:Boolean,default:!1}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(d){const a=M(d,"modelValue"),_=q(),y=J(),m=c(_.GetConventionLogoURL(a.value.ConventionUUID)),N=c(`
Are you sure you wish to delete this convention? All data relating to it will be
removed including all registrations and payment information. This action can
not be undone. To confirm type "I UNDERSTAND" in the box below.
`),D=c(!1),r=c(!1),n=c(pe(y,a.value)),b=c(ge(y,a.value)),x=c(_e(y,a.value)),w=()=>{r.value=!1,m.value=`${_.GetConventionLogoURL(a.value.ConventionUUID)}?ts=${Date.now()}`};return(L,o)=>{const i=Z("RouterLink");return s(),p(ue,null,{default:e(()=>[t(me,{class:"flex-1-1 align-content-start"},{default:e(()=>[m.value?(s(),p(z,{key:0,src:m.value,title:a.value.Name,class:"logo text-center"},null,8,["src","title"])):C("",!0),a.value.Name?(s(),p(re,{key:1},{default:e(()=>[I(A(a.value.Name),1)]),_:1})):C("",!0),a.value.Description?(s(),p(de,{key:2,class:"text-wrap text-black subtitle"},{default:e(()=>[I(A(a.value.Description),1)]),_:1})):C("",!0),t(B,{class:"px-0 pb-0"},{default:e(()=>[I(" Visibility:  "),a.value.Visible?(s(),E("span",Ue,"Visible")):(s(),E("span",De,"Hidden"))]),_:1}),t(B,{class:"px-0 pb-0"},{default:e(()=>[I(" Registration:  "),L.open?(s(),E("span",Ie,"Open")):(s(),E("span",ye,"Closed"))]),_:1})]),_:1}),t(ve,null,{default:e(()=>[t(U,{"no-gutters":""},{default:e(()=>[n.value?(s(),p(g,{key:0,class:"ma-1"},{default:e(()=>[t(T,{variant:"tonal",color:"primary",onClick:o[0]||(o[0]=f=>r.value=!0),width:"100%"},{default:e(()=>[I("Edit")]),_:1})]),_:1})):C("",!0),C("",!0),n.value?(s(),p(g,{key:2,class:"ma-1"},{default:e(()=>[t(i,{to:`/admin/conventions/${a.value.Slug?a.value.Slug:a.value.ConventionUUID}`},{default:e(()=>[t(T,{variant:"tonal",color:"red",width:"100%"},{default:e(()=>[I("Configuration")]),_:1})]),_:1},8,["to"])]),_:1})):C("",!0),x.value||b.value?(s(),p(g,{key:3,class:"ma-1"},{default:e(()=>[t(i,{to:`/admin/conventions/${a.value.Slug?a.value.Slug:a.value.ConventionUUID}/registrations`},{default:e(()=>[t(T,{variant:"tonal",color:"green",width:"100%"},{default:e(()=>[I("Registrations")]),_:1})]),_:1},8,["to"])]),_:1})):C("",!0)]),_:1})]),_:1}),r.value?(s(),p(Ve,{key:0,modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=f=>r.value=f),convention:a.value,"onUpdate:convention":o[2]||(o[2]=f=>a.value=f),onSave:w,title:`${a.value.Name} General Settings`},null,8,["modelValue","convention","title"])):C("",!0),D.value?(s(),p(te,{key:1,"confirmation-text":"I UNDERSTAND",message:N.value,title:"Delete Convention",subtitle:"A quick way to make enemies"},null,8,["message"])):C("",!0)]),_:1})}}});const be=G(Ne,[["__scopeId","data-v-a6abc8fd"]]),xe=$({__name:"ConventionsView",emits:["pageTitle"],setup(d,{emit:a}){var L;a("pageTitle","Conventions");const _=j(),y=J(),m=c([]),N=c([]),D=W();let r=((L=D.params.organisation)==null?void 0:L.toString())||"";const n=c();Y(D,()=>{var o,i;r!==((o=D.params.organisation)==null?void 0:o.toString())&&(r=((i=D.params.organisation)==null?void 0:i.toString())||"",b())});const b=()=>{r?_.getOrganisation(r).then(o=>{o&&(n.value=o,_.getConventionList(o.OrganisationUUID).then(i=>{i&&(m.value=i,x())}))}).catch(()=>{}):_.getPermissionAccessList(Q.PERMISSION_TYPE_NULL).then(o=>{o&&(m.value=o.Conventions,x())})},x=()=>{m.value.forEach(o=>{_.getConventionForms(o.ConventionUUID).then(i=>{i&&(N.value=[...N.value,...i])}).catch(i=>{console.error(i)})})},w=()=>{var o,i;if(n.value){const f={ID:0,ConventionUUID:ce(),OrganisationID:((o=n.value)==null?void 0:o.ID)||0,OrganisationUUID:((i=n.value)==null?void 0:i.OrganisationUUID)||fe,Name:"New Convention",Description:"",DetailLink:"",Logo:"",Slug:"",Accommodation:[],Tickets:[],Extras:[],Interests:[],Visible:!1};_.saveConvention(f).then(u=>{u&&m.value.push(u)})}};return b(),(o,i)=>(s(),p(H,null,{default:e(()=>[t(U,{class:"justify-center"},{default:e(()=>[(s(!0),E(ee,null,X(m.value,(f,u)=>(s(),p(g,{key:f.ID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:e(()=>{var l,v;return[t(be,{modelValue:m.value[u],"onUpdate:modelValue":R=>m.value[u]=R,class:"elevation-5 flex-1-0 d-flex flex-column","organisation-slug":((l=f.Organisation)==null?void 0:l.Slug)||((v=f.Organisation)==null?void 0:v.OrganisationUUID)||"",open:!!N.value.find(R=>R.ConventionUUID===f.ConventionUUID&&R.Type===V(K).FORM_TYPE_REGISTRATION&&R.State.New)},null,8,["modelValue","onUpdate:modelValue","organisation-slug","open"])]}),_:2},1024))),128))]),_:1}),t(U,null,{default:e(()=>[n.value&&V(se)(V(y),n.value)?(s(),p(g,{key:0,class:"text-right"},{default:e(()=>[t(T,{color:"primary",onClick:w},{default:e(()=>[I("New")]),_:1})]),_:1})):C("",!0)]),_:1})]),_:1}))}});const We=G(xe,[["__scopeId","data-v-d56a122a"]]);export{We as default};
