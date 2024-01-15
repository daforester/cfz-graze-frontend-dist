import{F as K}from"./form-0fJbSFPv.js";import{P as W}from"./permission-TSqmE8kt.js";import{i as G,M as h,N as q,r as d,k as F,w as j,n as r,q as f,v as e,f as t,C as I,P as M,_ as B,l as X,A as U,y as Z,x as w,D as ee,B as E,V as te,Q as oe,F as ne}from"./index-QFnvUixi.js";import{a as H}from"./scopeId-RaTpg9w0.js";import{_ as ae}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-bx4vERZk.js";import{u as le,V as ie}from"./VCheckbox-wrNIblia.js";import{_ as se}from"./ModelDialog.vue_vue_type_script_setup_true_lang-HU0bod_Y.js";import{s as R}from"./index-OKsbKlsK.js";import{a as z}from"./VContainer-A7hlFbOe.js";import{V as y,a as V}from"./VRow-4hZPCLCj.js";import{V as Q}from"./VAvatar-VDw91Fpp.js";import{V as P}from"./VTextField-zmwrwrSh.js";import{V as ue}from"./VTextarea-JRAI9SIK.js";import{V as re}from"./VForm-eKSZXNkZ.js";import{V as me}from"./VFileInput-4uFVwGss.js";import{G as $}from"./group-7fhbY6WJ.js";import{C as A}from"./canDo-yWCfI_4r.js";import{C as de}from"./canEditRegistrations-A1ez9bSf.js";import{G as J}from"./userData-haNlX5Yt.js";import{V as ve,a as fe,b as ce,c as Y,d as pe,e as ge}from"./VCard-UBndLqMu.js";import{V as O}from"./VBtn-8g6jCFa3.js";import{C as Ve}from"./canEditOrganisation-ZPJwatCb.js";import{v as Ce}from"./v4-yQnnJER4.js";import{u as _e}from"./nil-rxyd0N8M.js";import"./createSimpleFunctional-TCG58VNE.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-XwgmqhHQ.js";import"./forwardRefs-579yJ9E6.js";import"./VDialog-bqt7TMed.js";import"./VToolbar-nqHzU5Q1.js";import"./VChip-LAsDL85F.js";const De=(c=void 0,p=void 0)=>c===void 0?!1:p===void 0?A(c,$.GROUP_TYPE_CONVENTION).EditConvention:A(c,$.GROUP_TYPE_CONVENTION,p.ConventionUUID,p).EditConvention,Ue=(c,p)=>c===void 0?!1:A(c,$.GROUP_TYPE_CONVENTION,p.ConventionUUID,p).ViewRegistration,Ie=G({__name:"EditConventionDialog",props:h({convention:{},title:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:h(["update:convention","delete","save"],["update:modelValue"]),setup(c,{emit:p}){const k=c,N=M(),a=H(),{title:v=""}=k,C=p,_=q(c,"modelValue"),g=le(k,C,void 0,void 0,"convention"),n=d(F(g.value));j(g,()=>{n.value=F(g.value)});const D=d(`${a.GetConventionLogoURL(n.value.ConventionUUID)}?${new Date().getTime()}`),L=d(),x=d(),S=()=>{D.value=URL.createObjectURL(L.value.files[0])},T=()=>{C("delete")},i=()=>{n.value=F(g.value)},l=async()=>{var o;const u=new FormData((o=x.value)==null?void 0:o.$el);if(u.get("Image")&&u.get("Image").size>0)return u.set("ConventionUUID",n.value.ConventionUUID),await a.SaveConventionLogo(u)},s=u=>{l(),N.saveConvention(n.value).then(o=>{o?u&&u("Convention Data Saved").then(()=>{g.value=o,C("save",o)}):u&&u("Failed to save")}).catch(()=>{u("Failed to save")})};return(u,o)=>(r(),f(se,{modelValue:_.value,"onUpdate:modelValue":o[5]||(o[5]=m=>_.value=m),onDelete:T,onReset:i,onSave:s,title:I(v),color:"primary","show-close-action":!0,"show-delete-action":!0,"show-reset-action":!0,"show-save-action":!0,fullscreen:!0,persistent:!0},{default:e(()=>[t(z,{class:"pa-0",fluid:!0},{default:e(()=>[t(y,null,{default:e(()=>[t(V,null,{default:e(()=>[t(Q,{class:"imgLogo mx-auto",src:D.value||""},null,8,["src"])]),_:1})]),_:1}),t(y,null,{default:e(()=>[t(V,null,{default:e(()=>[t(P,{label:I(R).formLabelName,name:"Name",variant:"outlined",modelValue:n.value.Name,"onUpdate:modelValue":o[0]||(o[0]=m=>n.value.Name=m)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(y,null,{default:e(()=>[t(V,null,{default:e(()=>[t(ue,{label:I(R).formLabelDescription,name:"Description",variant:"outlined",multiline:"true",modelValue:n.value.Description,"onUpdate:modelValue":o[1]||(o[1]=m=>n.value.Description=m)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(y,null,{default:e(()=>[t(V,null,{default:e(()=>[t(P,{label:I(R).formLabelDetailLink,name:"DetailLink",variant:"outlined",multiline:"true",modelValue:n.value.DetailLink,"onUpdate:modelValue":o[2]||(o[2]=m=>n.value.DetailLink=m)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(y,null,{default:e(()=>[t(V,null,{default:e(()=>[t(P,{label:I(R).formLabelSlug,name:"Slug",variant:"outlined",multiline:"true",modelValue:n.value.Slug,"onUpdate:modelValue":o[3]||(o[3]=m=>n.value.Slug=m)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(y,null,{default:e(()=>[t(V,null,{default:e(()=>[t(ie,{label:I(R).formConventionVisible,name:"Visible",modelValue:n.value.Visible,"onUpdate:modelValue":o[4]||(o[4]=m=>n.value.Visible=m)},null,8,["label","modelValue"])]),_:1})]),_:1}),t(y,null,{default:e(()=>[t(V,null,{default:e(()=>[t(re,{ref_key:"conventionImageForm",ref:x,enctype:"multipart/form-data"},{default:e(()=>[t(me,{label:I(R).formLabelLogo,name:"Image",variant:"outlined",ref_key:"imageFileInput",ref:L,accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp","hide-details":"",onChange:S},null,8,["label"])]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),ye=B(Ie,[["__scopeId","data-v-319537e0"]]),Ne=["innerHTML"],Le={key:0,class:"text-green"},we={key:1,class:"text-red"},xe={key:0,class:"text-green"},Te={key:1,class:"text-red"},be=G({__name:"ConventionCard",props:h({open:{type:Boolean,default:!1}},{modelValue:{required:!0},modelModifiers:{}}),emits:h(["delete"],["update:modelValue"]),setup(c,{emit:p}){const k=M(),N=p,a=q(c,"modelValue"),v=H(),C=J(),_=d(v.GetConventionLogoURL(a.value.ConventionUUID)),g=d(`
Are you sure you wish to delete this convention? All data relating to it will be
removed including all registrations and payment information. This action can
not be undone. To confirm type "I UNDERSTAND" in the box below.
`),n=d(!1),D=d(!1),L=d(De(C,a.value)),x=d(de(C,a.value)),S=d(Ue(C,a.value)),T=()=>{D.value=!1,_.value=`${v.GetConventionLogoURL(a.value.ConventionUUID)}?ts=${Date.now()}`},i=l=>{k.deleteConvention(a.value.ConventionUUID).then(s=>{s?l&&(l("Convention Deleted"),N("delete")):l&&l("Failed to Delete Convention"),setTimeout(()=>{n.value=!1},2e3)}).catch(()=>{l&&(l("Failed to Delete Organisation"),n.value=!1)})};return(l,s)=>{const u=X("RouterLink");return r(),f(ge,null,{default:e(()=>[t(ve,{class:"flex-1-1 align-content-start"},{default:e(()=>[_.value?(r(),f(Q,{key:0,src:_.value,title:a.value.Name,class:"logo text-center"},null,8,["src","title"])):U("",!0),a.value.Name?(r(),f(fe,{key:1},{default:e(()=>[w(Z(a.value.Name),1)]),_:1})):U("",!0),a.value.Description?(r(),f(ce,{key:2,class:"text-wrap subtitle"},{default:e(()=>[ee("div",{innerHTML:a.value.Description},null,8,Ne)]),_:1})):U("",!0),t(Y,{class:"px-0 pb-0"},{default:e(()=>[w(" Visibility:  "),a.value.Visible?(r(),E("span",Le,"Visible")):(r(),E("span",we,"Hidden"))]),_:1}),t(Y,{class:"px-0 pb-0"},{default:e(()=>[w(" Registration:  "),l.open?(r(),E("span",xe,"Open")):(r(),E("span",Te,"Closed"))]),_:1})]),_:1}),t(pe,null,{default:e(()=>[t(y,{"no-gutters":""},{default:e(()=>[L.value?(r(),f(V,{key:0,class:"ma-1"},{default:e(()=>[t(O,{variant:"tonal",color:"primary",onClick:s[0]||(s[0]=o=>D.value=!0),width:"100%"},{default:e(()=>[w("Edit")]),_:1})]),_:1})):U("",!0),U("",!0),L.value?(r(),f(V,{key:2,class:"ma-1"},{default:e(()=>[t(u,{to:`/admin/conventions/${a.value.Slug?a.value.Slug:a.value.ConventionUUID}`},{default:e(()=>[t(O,{variant:"tonal",color:"red",width:"100%"},{default:e(()=>[w("Configuration")]),_:1})]),_:1},8,["to"])]),_:1})):U("",!0),S.value||x.value?(r(),f(V,{key:3,class:"ma-1"},{default:e(()=>[t(u,{to:`/admin/conventions/${a.value.Slug?a.value.Slug:a.value.ConventionUUID}/registrations`},{default:e(()=>[t(O,{variant:"tonal",color:"green",width:"100%"},{default:e(()=>[w("Registrations")]),_:1})]),_:1},8,["to"])]),_:1})):U("",!0)]),_:1})]),_:1}),D.value?(r(),f(ye,{key:0,modelValue:D.value,"onUpdate:modelValue":s[1]||(s[1]=o=>D.value=o),convention:a.value,"onUpdate:convention":s[2]||(s[2]=o=>a.value=o),onDelete:s[3]||(s[3]=o=>n.value=!0),onSave:T,title:`${a.value.Name} General Settings`},null,8,["modelValue","convention","title"])):U("",!0),n.value?(r(),f(ae,{key:1,modelValue:n.value,"onUpdate:modelValue":s[4]||(s[4]=o=>n.value=o),"confirmation-text":"I UNDERSTAND",message:g.value,title:"Delete Convention",subtitle:"A quick way to make enemies",onDelete:i},null,8,["modelValue","message"])):U("",!0)]),_:1})}}}),Re=B(be,[["__scopeId","data-v-1d5a45f3"]]),ke=G({__name:"ConventionsView",emits:["pageTitle"],setup(c,{emit:p}){var T;p("pageTitle","Conventions");const N=M(),a=J(),v=d([]),C=d([]),_=te();let g=((T=_.params.organisation)==null?void 0:T.toString())||"";const n=d();j(_,()=>{var i,l;g!==((i=_.params.organisation)==null?void 0:i.toString())&&(g=((l=_.params.organisation)==null?void 0:l.toString())||"",D())});const D=()=>{g?N.getOrganisation(g).then(i=>{i&&(n.value=i,N.getConventionList(i.OrganisationUUID).then(l=>{l&&(v.value=l,L())}))}).catch(()=>{}):N.getPermissionAccessList(W.PERMISSION_TYPE_NULL).then(i=>{i&&(v.value=i.Conventions,L())})},L=()=>{v.value.forEach(i=>{N.getConventionForms(i.ConventionUUID).then(l=>{l&&(C.value=[...C.value,...l])}).catch(l=>{console.error(l)})})},x=()=>{var i,l;if(n.value){const s={ID:0,ConventionUUID:Ce(),OrganisationID:((i=n.value)==null?void 0:i.ID)||0,OrganisationUUID:((l=n.value)==null?void 0:l.OrganisationUUID)||_e,Name:"New Convention",Description:"",DetailLink:"",Logo:"",Slug:"",Accommodation:[],Tickets:[],Extras:[],Interests:[],Visible:!1};N.saveConvention(s).then(u=>{u&&v.value.push(u)})}},S=i=>{v.value.splice(i,1)};return D(),(i,l)=>(r(),f(z,null,{default:e(()=>[t(y,{class:"justify-center"},{default:e(()=>[(r(!0),E(ne,null,oe(v.value,(s,u)=>(r(),f(V,{key:s.ID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:e(()=>{var o,m;return[t(Re,{modelValue:v.value[u],"onUpdate:modelValue":b=>v.value[u]=b,class:"elevation-5 flex-1-0 d-flex flex-column","organisation-slug":((o=s.Organisation)==null?void 0:o.Slug)||((m=s.Organisation)==null?void 0:m.OrganisationUUID)||"",open:!!C.value.find(b=>b.ConventionUUID===s.ConventionUUID&&b.Type===I(K).FORM_TYPE_REGISTRATION&&b.State.New),onDelete:b=>S(u)},null,8,["modelValue","onUpdate:modelValue","organisation-slug","open","onDelete"])]}),_:2},1024))),128))]),_:1}),t(y,null,{default:e(()=>[n.value&&I(Ve)(I(a),n.value)?(r(),f(V,{key:0,class:"text-right"},{default:e(()=>[t(O,{color:"primary",onClick:x},{default:e(()=>[w("New")]),_:1})]),_:1})):U("",!0)]),_:1})]),_:1}))}}),ut=B(ke,[["__scopeId","data-v-f6915eaa"]]);export{ut as default};
