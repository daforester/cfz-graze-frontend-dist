import{I as R,r as U,e as E,w as $,J as A,K as e,L as n,M as o,v as d,Q as l,N as m,O as k,U as L,R as c,Z as N,H as F,S as g,$ as b,_ as P}from"./index-1bfe9050.js";import{G as z}from"./userData-7eeb1e02.js";import{_ as B}from"./LoginView.vue_vue_type_script_setup_true_lang-5951ebc9.js";import{s as M}from"./index-71069b21.js";import{F as y}from"./form-e2a93b7c.js";import{S as G}from"./submission-56c4c4f1.js";import{u as Y}from"./useStoreAPI-04682e12.js";import{c as O}from"./canEditForm-52ba80b9.js";import{s as H}from"./sortSubmissions-ed9e4490.js";import{V as j}from"./VAvatar-7b52e793.js";import{V as J,a as K,b as Q,c as Z,d as q,e as W}from"./VCard-c5ceef9f.js";import{V as p}from"./VBtn-3351eeaa.js";import{V as X}from"./VSpacer-c9f440e0.js";import{V as ee,a as te}from"./VRow-00b8d84b.js";import{j as oe}from"./VContainer-51ce664a.js";import"./emailFormVariant-e5e0aad4.js";import"./LoginButton-669f36a9.js";const ne=["innerHTML"],ae={key:0,class:"font-weight-bold float-left pt-1 w-50"},re={key:1,class:"pa-1"},se={key:0,class:"font-weight-bold float-left pt-1 w-50"},ie={key:1},le=R({__name:"OpenConvention",props:{convention:{},forms:{default:()=>[]}},setup(s){const u=Y(),f=b(),_=U(u.GetConventionLogoURL(s.convention.ConventionUUID)),a=U(),i=E(()=>{var t;return O(s.forms,((t=a.value)==null?void 0:t.Submissions)||[],y.FORM_TYPE_REGISTRATION)}),C=E(()=>{var t;return O(s.forms,((t=a.value)==null?void 0:t.Submissions)||[],y.FORM_TYPE_DEALER)}),I=E(()=>{var t;return O(s.forms,((t=a.value)==null?void 0:t.Submissions)||[],y.FORM_TYPE_ACCOMMODATION)});return $(()=>s.forms,()=>{f.getRegistrationByConvention(s.convention.ConventionUUID).then(t=>{t&&(t.Submissions?(t.Submissions.forEach((V,T)=>{V.Form||(t.Submissions[T].Form=s.forms.find(D=>D.FormUUID===V.FormUUID))}),H(t.Submissions)):t.Submissions=[],a.value=t)})}),(t,V)=>{const T=A("router-link"),D=A("RouterLink");return e(),n(W,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:o(()=>[d(Q,{class:"flex-1-1 align-content-start"},{default:o(()=>[_.value?(e(),n(j,{key:0,src:_.value,title:t.convention.Name,class:"logo text-center"},null,8,["src","title"])):l("",!0),t.convention.Name?(e(),n(J,{key:1,class:"text-center"},{default:o(()=>[m(k(t.convention.Name),1)]),_:1})):l("",!0),t.convention.Description?(e(),n(K,{key:2,class:"text-wrap text-black subtitle"},{default:o(()=>[L("div",{innerHTML:t.convention.Description},null,8,ne)]),_:1})):l("",!0)]),_:1}),d(Z,null,{default:o(()=>{var S;return[L("dl",null,[a.value&&a.value.Reference?(e(),c("dt",ae," Badge No: ")):l("",!0),a.value&&a.value.Reference?(e(),c("dd",re," #"+k(a.value.Reference),1)):l("",!0),(e(!0),c(F,null,N((S=a.value)==null?void 0:S.Submissions,r=>{var h,w,x;return e(),c(F,{key:r.SubmissionUUID},[r.Form?(e(),c(F,{key:0},[r.Form?(e(),c("dt",se,k(r.Form.Heading),1)):l("",!0),r.Form?(e(),c("dd",ie,[m(k(g(G)(r.Status))+" ",1),((h=r.Form)==null?void 0:h.Type)===g(y).FORM_TYPE_REGISTRATION?(e(),n(T,{key:0,to:`/register/${t.convention.ConventionUUID}/registration`},{default:o(()=>{var v;return[(v=r.Form)!=null&&v.State.Edit&&i.value?(e(),n(p,{key:0,size:"small",variant:"text",color:"success"},{default:o(()=>[m(" Edit ")]),_:1})):(e(),n(p,{key:1,size:"small",variant:"text",color:"warning"},{default:o(()=>[m("View")]),_:1}))]}),_:2},1032,["to"])):((w=r.Form)==null?void 0:w.Type)===g(y).FORM_TYPE_ACCOMMODATION?(e(),n(T,{key:1,to:`/register/${t.convention.ConventionUUID}/accommodation`},{default:o(()=>{var v;return[(v=r.Form)!=null&&v.State.Edit&&I.value?(e(),n(p,{key:0,size:"small",variant:"text",color:"success"},{default:o(()=>[m(" Edit ")]),_:1})):(e(),n(p,{key:1,size:"small",variant:"text",color:"warning"},{default:o(()=>[m("View")]),_:1}))]}),_:2},1032,["to"])):((x=r.Form)==null?void 0:x.Type)===g(y).FORM_TYPE_DEALER?(e(),n(T,{key:2,to:`/register/${t.convention.ConventionUUID}/dealer`},{default:o(()=>{var v;return[(v=r.Form)!=null&&v.State.Edit&&C.value?(e(),n(p,{key:0,size:"small",variant:"text",color:"success"},{default:o(()=>[m(" Edit ")]),_:1})):(e(),n(p,{key:1,size:"small",variant:"text",color:"warning"},{default:o(()=>[m("View")]),_:1}))]}),_:2},1032,["to"])):l("",!0)])):l("",!0)],64)):l("",!0)],64)}),128))])]}),_:1}),d(q,null,{default:o(()=>{var S;return[t.convention.DetailLink?(e(),n(p,{key:0,color:"orange",href:t.convention.DetailLink},{default:o(()=>[m(k(g(M).buttonDetails),1)]),_:1},8,["href"])):l("",!0),d(X),i.value&&((S=t.forms.find(r=>r.Type===g(y).FORM_TYPE_REGISTRATION))!=null&&S.State.New)?(e(),n(D,{key:1,to:`/register/${t.convention.Slug}`},{default:o(()=>[d(p,{color:"primary"},{default:o(()=>[m(k(g(M).buttonRegister),1)]),_:1})]),_:1},8,["to"])):l("",!0)]}),_:1})]),_:1})}}});const ce=P(le,[["__scopeId","data-v-9ecd2f1e"]]),ue=R({__name:"Conventions",setup(s){const u=b(),f=U([]),_=U([]);return u.getOpenConventionsList().then(a=>{a&&(f.value=[...f.value,...a],u.getAvailableConventionForms(f.value.map(i=>i.ConventionUUID)).then(i=>{_.value=[..._.value,...i]}).catch(i=>{console.error(i)}))}),(a,i)=>(e(),n(oe,null,{default:o(()=>[d(te,{class:"justify-center"},{default:o(()=>[(e(!0),c(F,null,N(f.value,C=>(e(),n(ee,{key:C.ConventionUUID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:o(()=>[d(ce,{convention:C,forms:_.value.filter(I=>I.ConventionUUID===C.ConventionUUID)},null,8,["convention","forms"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),me={};function fe(s,u){return e(),c("div")}const de=P(me,[["render",fe]]),_e=R({__name:"MainView",emits:["pageTitle"],setup(s,{emit:u}){return u("pageTitle","Scotiacon Registration System"),(f,_)=>(e(),c(F,null,[d(ue),d(de)],64))}}),we=R({__name:"Home",emits:["pageTitle"],setup(s,{emit:u}){const f=z();return u("pageTitle","Telegram Login"),(_,a)=>(e(),c("div",null,[g(f)?(e(),n(_e,{key:0,onPageTitle:a[0]||(a[0]=i=>u("pageTitle",i))})):(e(),n(B,{key:1}))]))}});export{we as default};
