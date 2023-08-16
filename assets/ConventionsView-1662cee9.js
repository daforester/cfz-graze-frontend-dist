import{F as J}from"./form-e2a93b7c.js";import{P as K}from"./permission-03f04c02.js";import{I as $,a1 as F,a2 as B,r as f,a3 as h,w as M,K as s,L as p,M as e,S as U,v as t,$ as Y,_ as G,J as Q,Q as C,N as b,O as Z,U as W,R as T,a4 as X,Z as ee,H as te}from"./index-acea51ac.js";import{u as j}from"./useStoreAPI-17c562ae.js";import{_ as ae}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-fcaea353.js";import{u as oe,V as ne}from"./VCheckbox-1c1ea56e.js";import{_ as le}from"./ModelDialog.vue_vue_type_script_setup_true_lang-db637950.js";import{s as R}from"./index-71069b21.js";import{a as D,V as _}from"./VRow-0430d55e.js";import{V as H}from"./VAvatar-33305e30.js";import{V as P}from"./VTextField-d272a7fc.js";import{V as ie}from"./VTextarea-33c594ee.js";import{V as se}from"./VForm-f3ef703b.js";import{V as ue}from"./VFileInput-6b20f43c.js";import{j as q}from"./VContainer-2bf64696.js";import{G as S}from"./group-d2a77946.js";import{C as O,a as re}from"./canEditOrganisation-673ba5d6.js";import{G as z}from"./userData-95280594.js";import{e as de,V as me,a as ve,c as A,b as ce,d as fe}from"./VCard-a5519cb4.js";import{V as E}from"./VBtn-90585e18.js";import{v as pe}from"./v4-a960c1f4.js";import{u as ge}from"./VToolbar-7d3e3979.js";import"./VChip-7960de3d.js";import"./scopeId-a20591ba.js";import"./VDialog-a7e1d605.js";import"./VSpacer-79faa933.js";const _e=(m=void 0,a=void 0)=>m===void 0?!1:a===void 0?O(m,S.GROUP_TYPE_CONVENTION).EditConvention:O(m,S.GROUP_TYPE_CONVENTION,a.ConventionUUID,a).EditConvention,Ve=(m,a)=>m===void 0?!1:O(m,S.GROUP_TYPE_CONVENTION,a.ConventionUUID,a).EditRegistration,Ce=(m,a)=>m===void 0?!1:O(m,S.GROUP_TYPE_CONVENTION,a.ConventionUUID,a).ViewRegistration,Ue=$({__name:"EditConventionDialog",props:F({convention:{},title:{}},{modelValue:{type:Boolean,required:!0}}),emits:F(["update:convention","delete","save"],["update:modelValue"]),setup(m,{emit:a}){const V=m,I=Y(),v=j(),{title:y=""}=V,g=B(m,"modelValue"),r=oe(V,a,void 0,void 0,"convention"),n=f(h(r.value));M(r,()=>{n.value=h(r.value)});const N=f(`${v.GetConventionLogoURL(n.value.ConventionUUID)}?${new Date().getTime()}`),x=f(),w=f(),k=()=>{N.value=URL.createObjectURL(x.value.files[0])},o=()=>{a("delete")},i=()=>{n.value=h(r.value)},d=async()=>{var l;const c=new FormData((l=w.value)==null?void 0:l.$el);if(c.get("Image")&&c.get("Image").size>0)return c.set("ConventionUUID",n.value.ConventionUUID),await v.SaveConventionLogo(c)},L=c=>{d(),I.saveConvention(n.value).then(l=>{l?c&&c("Convention Data Saved").then(()=>{r.value=l,a("save",l)}):c&&c("Failed to save")}).catch(()=>{c("Failed to save")})};return(c,l)=>(s(),p(le,{modelValue:g.value,"onUpdate:modelValue":l[5]||(l[5]=u=>g.value=u),onDelete:o,onReset:i,onSave:L,title:U(y),color:"primary","show-close-action":!0,"show-delete-action":!0,"show-reset-action":!0,"show-save-action":!0},{default:e(()=>[t(q,{class:"pa-0",fluid:!0},{default:e(()=>[t(D,null,{default:e(()=>[t(_,null,{default:e(()=>[t(H,{class:"imgLogo mx-auto",src:N.value||""},null,8,["src"])]),_:1})]),_:1}),t(D,null,{default:e(()=>[t(_,null,{default:e(()=>[t(P,{label:U(R).formLabelName,name:"Name",variant:"outlined",modelValue:n.value.Name,"onUpdate:modelValue":l[0]||(l[0]=u=>n.value.Name=u)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(D,null,{default:e(()=>[t(_,null,{default:e(()=>[t(ie,{label:U(R).formLabelDescription,name:"Description",variant:"outlined",multiline:"true",modelValue:n.value.Description,"onUpdate:modelValue":l[1]||(l[1]=u=>n.value.Description=u)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(D,null,{default:e(()=>[t(_,null,{default:e(()=>[t(P,{label:U(R).formLabelDetailLink,name:"DetailLink",variant:"outlined",multiline:"true",modelValue:n.value.DetailLink,"onUpdate:modelValue":l[2]||(l[2]=u=>n.value.DetailLink=u)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(D,null,{default:e(()=>[t(_,null,{default:e(()=>[t(P,{label:U(R).formLabelSlug,name:"Slug",variant:"outlined",multiline:"true",modelValue:n.value.Slug,"onUpdate:modelValue":l[3]||(l[3]=u=>n.value.Slug=u)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(D,null,{default:e(()=>[t(_,null,{default:e(()=>[t(ne,{label:U(R).formConventionVisible,name:"Visible",modelValue:n.value.Visible,"onUpdate:modelValue":l[4]||(l[4]=u=>n.value.Visible=u)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(D,null,{default:e(()=>[t(_,null,{default:e(()=>[t(se,{ref_key:"conventionImageForm",ref:w,enctype:"multipart/form-data"},{default:e(()=>[t(ue,{label:U(R).formLabelLogo,name:"Image",variant:"outlined",ref_key:"imageFileInput",ref:x,accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp","hide-details":"",onChange:k},null,8,["label"])]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}});const De=G(Ue,[["__scopeId","data-v-e3056f75"]]),Ie=["innerHTML"],ye={key:0,class:"text-green"},Ne={key:1,class:"text-red"},xe={key:0,class:"text-green"},Le={key:1,class:"text-red"},be=$({__name:"ConventionCard",props:F({open:{type:Boolean,default:!1}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(m){const a=B(m,"modelValue"),V=j(),I=z(),v=f(V.GetConventionLogoURL(a.value.ConventionUUID)),y=f(`
Are you sure you wish to delete this convention? All data relating to it will be
removed including all registrations and payment information. This action can
not be undone. To confirm type "I UNDERSTAND" in the box below.
`),g=f(!1),r=f(!1),n=f(_e(I,a.value)),N=f(Ve(I,a.value)),x=f(Ce(I,a.value)),w=()=>{r.value=!1,v.value=`${V.GetConventionLogoURL(a.value.ConventionUUID)}?ts=${Date.now()}`};return(k,o)=>{const i=Q("RouterLink");return s(),p(de,null,{default:e(()=>[t(ce,{class:"flex-1-1 align-content-start"},{default:e(()=>[v.value?(s(),p(H,{key:0,src:v.value,title:a.value.Name,class:"logo text-center"},null,8,["src","title"])):C("",!0),a.value.Name?(s(),p(me,{key:1},{default:e(()=>[b(Z(a.value.Name),1)]),_:1})):C("",!0),a.value.Description?(s(),p(ve,{key:2,class:"text-wrap text-black subtitle"},{default:e(()=>[W("div",{innerHTML:a.value.Description},null,8,Ie)]),_:1})):C("",!0),t(A,{class:"px-0 pb-0"},{default:e(()=>[b(" Visibility:  "),a.value.Visible?(s(),T("span",ye,"Visible")):(s(),T("span",Ne,"Hidden"))]),_:1}),t(A,{class:"px-0 pb-0"},{default:e(()=>[b(" Registration:  "),k.open?(s(),T("span",xe,"Open")):(s(),T("span",Le,"Closed"))]),_:1})]),_:1}),t(fe,null,{default:e(()=>[t(D,{"no-gutters":""},{default:e(()=>[n.value?(s(),p(_,{key:0,class:"ma-1"},{default:e(()=>[t(E,{variant:"tonal",color:"primary",onClick:o[0]||(o[0]=d=>r.value=!0),width:"100%"},{default:e(()=>[b("Edit")]),_:1})]),_:1})):C("",!0),C("",!0),n.value?(s(),p(_,{key:2,class:"ma-1"},{default:e(()=>[t(i,{to:`/admin/conventions/${a.value.Slug?a.value.Slug:a.value.ConventionUUID}`},{default:e(()=>[t(E,{variant:"tonal",color:"red",width:"100%"},{default:e(()=>[b("Configuration")]),_:1})]),_:1},8,["to"])]),_:1})):C("",!0),x.value||N.value?(s(),p(_,{key:3,class:"ma-1"},{default:e(()=>[t(i,{to:`/admin/conventions/${a.value.Slug?a.value.Slug:a.value.ConventionUUID}/registrations`},{default:e(()=>[t(E,{variant:"tonal",color:"green",width:"100%"},{default:e(()=>[b("Registrations")]),_:1})]),_:1},8,["to"])]),_:1})):C("",!0)]),_:1})]),_:1}),r.value?(s(),p(De,{key:0,modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=d=>r.value=d),convention:a.value,"onUpdate:convention":o[2]||(o[2]=d=>a.value=d),onDelete:o[3]||(o[3]=d=>g.value=!0),onSave:w,title:`${a.value.Name} General Settings`},null,8,["modelValue","convention","title"])):C("",!0),g.value?(s(),p(ae,{key:1,modelValue:g.value,"onUpdate:modelValue":o[4]||(o[4]=d=>g.value=d),"confirmation-text":"I UNDERSTAND",message:y.value,title:"Delete Convention",subtitle:"A quick way to make enemies"},null,8,["modelValue","message"])):C("",!0)]),_:1})}}});const we=G(be,[["__scopeId","data-v-d5e47636"]]),ke=$({__name:"ConventionsView",emits:["pageTitle"],setup(m,{emit:a}){var k;a("pageTitle","Conventions");const V=Y(),I=z(),v=f([]),y=f([]),g=X();let r=((k=g.params.organisation)==null?void 0:k.toString())||"";const n=f();M(g,()=>{var o,i;r!==((o=g.params.organisation)==null?void 0:o.toString())&&(r=((i=g.params.organisation)==null?void 0:i.toString())||"",N())});const N=()=>{r?V.getOrganisation(r).then(o=>{o&&(n.value=o,V.getConventionList(o.OrganisationUUID).then(i=>{i&&(v.value=i,x())}))}).catch(()=>{}):V.getPermissionAccessList(K.PERMISSION_TYPE_NULL).then(o=>{o&&(v.value=o.Conventions,x())})},x=()=>{v.value.forEach(o=>{V.getConventionForms(o.ConventionUUID).then(i=>{i&&(y.value=[...y.value,...i])}).catch(i=>{console.error(i)})})},w=()=>{var o,i;if(n.value){const d={ID:0,ConventionUUID:pe(),OrganisationID:((o=n.value)==null?void 0:o.ID)||0,OrganisationUUID:((i=n.value)==null?void 0:i.OrganisationUUID)||ge,Name:"New Convention",Description:"",DetailLink:"",Logo:"",Slug:"",Accommodation:[],Tickets:[],Extras:[],Interests:[],Visible:!1};V.saveConvention(d).then(L=>{L&&v.value.push(L)})}};return N(),(o,i)=>(s(),p(q,null,{default:e(()=>[t(D,{class:"justify-center"},{default:e(()=>[(s(!0),T(te,null,ee(v.value,(d,L)=>(s(),p(_,{key:d.ID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:e(()=>{var c,l;return[t(we,{modelValue:v.value[L],"onUpdate:modelValue":u=>v.value[L]=u,class:"elevation-5 flex-1-0 d-flex flex-column","organisation-slug":((c=d.Organisation)==null?void 0:c.Slug)||((l=d.Organisation)==null?void 0:l.OrganisationUUID)||"",open:!!y.value.find(u=>u.ConventionUUID===d.ConventionUUID&&u.Type===U(J).FORM_TYPE_REGISTRATION&&u.State.New)},null,8,["modelValue","onUpdate:modelValue","organisation-slug","open"])]}),_:2},1024))),128))]),_:1}),t(D,null,{default:e(()=>[n.value&&U(re)(U(I),n.value)?(s(),p(_,{key:0,class:"text-right"},{default:e(()=>[t(E,{color:"primary",onClick:w},{default:e(()=>[b("New")]),_:1})]),_:1})):C("",!0)]),_:1})]),_:1}))}});const at=G(ke,[["__scopeId","data-v-d56a122a"]]);export{at as default};
