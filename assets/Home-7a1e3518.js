import{I,r as F,e as E,w as $,J as h,K as t,L as n,M as o,v as m,Q as _,N as l,O as C,U as N,R as g,Z as L,H as U,S as p,$ as M,_ as P}from"./index-20575454.js";import{G as z}from"./userData-c770c90e.js";import{_ as G}from"./LoginView.vue_vue_type_script_setup_true_lang-fe1cb6ab.js";import{s as b}from"./index-71069b21.js";import{F as y}from"./form-aee596e2.js";import{S as Y}from"./submission-56c4c4f1.js";import{u as B}from"./useStoreAPI-6d4649c1.js";import{c as O,s as H}from"./sortSubmissions-34c92728.js";import{V as j}from"./VAvatar-445759b3.js";import{V as J,a as K,b as Q,c as Z,d as q,e as W}from"./VCard-3294ec8e.js";import{V as v}from"./VBtn-af46d364.js";import{V as X}from"./VSpacer-5e634145.js";import{V as ee,a as te}from"./VRow-56adce3a.js";import{j as oe}from"./VContainer-f9c5abe7.js";import"./emailFormVariant-e5e0aad4.js";import"./LoginButton-6eb55ac7.js";const ne={key:0,class:"font-weight-bold float-left pt-1 w-50"},ae=I({__name:"OpenConvention",props:{convention:{},forms:{default:()=>[]}},setup(s){const u=B(),c=M(),f=F(u.GetConventionLogoURL(s.convention.ConventionUUID)),r=F(),i=E(()=>{var e;return O(s.forms,((e=r.value)==null?void 0:e.Submissions)||[],y.FORM_TYPE_REGISTRATION)}),T=E(()=>{var e;return O(s.forms,((e=r.value)==null?void 0:e.Submissions)||[],y.FORM_TYPE_DEALER)}),R=E(()=>{var e;return O(s.forms,((e=r.value)==null?void 0:e.Submissions)||[],y.FORM_TYPE_ACCOMMODATION)});return $(()=>s.forms,()=>{c.getRegistrationByConvention(s.convention.ConventionUUID).then(e=>{e&&(e.Submissions?(e.Submissions.forEach((V,k)=>{V.Form||(e.Submissions[k].Form=s.forms.find(D=>D.FormUUID===V.FormUUID))}),H(e.Submissions)):e.Submissions=[],r.value=e)})}),(e,V)=>{const k=h("router-link"),D=h("RouterLink");return t(),n(W,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:o(()=>[m(Q,{class:"flex-1-1 align-content-start"},{default:o(()=>[f.value?(t(),n(j,{key:0,src:f.value,title:e.convention.Name,class:"logo text-center"},null,8,["src","title"])):_("",!0),e.convention.Name?(t(),n(J,{key:1,class:"text-center"},{default:o(()=>[l(C(e.convention.Name),1)]),_:1})):_("",!0),e.convention.Description?(t(),n(K,{key:2,class:"text-wrap text-black subtitle"},{default:o(()=>[l(C(e.convention.Description),1)]),_:1})):_("",!0)]),_:1}),m(Z,null,{default:o(()=>{var S;return[N("dl",null,[(t(!0),g(U,null,L((S=r.value)==null?void 0:S.Submissions,a=>{var x,A,w;return t(),g(U,{key:a.SubmissionUUID},[a.Form?(t(),g(U,{key:0},[a.Form?(t(),g("dt",ne,C(a.Form.Heading),1)):_("",!0),N("dd",null,[l(C(p(Y)(a.Status))+" ",1),((x=a.Form)==null?void 0:x.Type)===p(y).FORM_TYPE_REGISTRATION?(t(),n(k,{key:0,to:`/register/${e.convention.ConventionUUID}/registration`},{default:o(()=>{var d;return[(d=a.Form)!=null&&d.State.Edit&&i.value?(t(),n(v,{key:0,size:"small",variant:"text",color:"success"},{default:o(()=>[l(" Edit ")]),_:1})):(t(),n(v,{key:1,size:"small",variant:"text",color:"warning"},{default:o(()=>[l("View")]),_:1}))]}),_:2},1032,["to"])):((A=a.Form)==null?void 0:A.Type)===p(y).FORM_TYPE_ACCOMMODATION?(t(),n(k,{key:1,to:`/register/${e.convention.ConventionUUID}/accommodation`},{default:o(()=>{var d;return[(d=a.Form)!=null&&d.State.Edit&&R.value?(t(),n(v,{key:0,size:"small",variant:"text",color:"success"},{default:o(()=>[l(" Edit ")]),_:1})):(t(),n(v,{key:1,size:"small",variant:"text",color:"warning"},{default:o(()=>[l("View")]),_:1}))]}),_:2},1032,["to"])):((w=a.Form)==null?void 0:w.Type)===p(y).FORM_TYPE_DEALER?(t(),n(k,{key:2,to:`/register/${e.convention.ConventionUUID}/dealer`},{default:o(()=>{var d;return[(d=a.Form)!=null&&d.State.Edit&&T.value?(t(),n(v,{key:0,size:"small",variant:"text",color:"success"},{default:o(()=>[l(" Edit ")]),_:1})):(t(),n(v,{key:1,size:"small",variant:"text",color:"warning"},{default:o(()=>[l("View")]),_:1}))]}),_:2},1032,["to"])):_("",!0)])],64)):_("",!0)],64)}),128))])]}),_:1}),m(q,null,{default:o(()=>{var S;return[e.convention.DetailLink?(t(),n(v,{key:0,color:"orange",href:e.convention.DetailLink},{default:o(()=>[l(C(p(b).buttonDetails),1)]),_:1},8,["href"])):_("",!0),m(X),i.value&&((S=e.forms.find(a=>a.Type===p(y).FORM_TYPE_REGISTRATION))!=null&&S.State.New)?(t(),n(D,{key:1,to:`/register/${e.convention.Slug}`},{default:o(()=>[m(v,{color:"primary"},{default:o(()=>[l(C(p(b).buttonRegister),1)]),_:1})]),_:1},8,["to"])):_("",!0)]}),_:1})]),_:1})}}});const re=P(ae,[["__scopeId","data-v-561088ae"]]),se=I({__name:"Conventions",setup(s){const u=M(),c=F([]),f=F([]);return u.getOpenConventionsList().then(r=>{r&&(c.value=[...c.value,...r],u.getAvailableConventionForms(c.value.map(i=>i.ConventionUUID)).then(i=>{f.value=[...f.value,...i]}).catch(i=>{console.error(i)}))}),(r,i)=>(t(),n(oe,null,{default:o(()=>[m(te,{class:"justify-center"},{default:o(()=>[(t(!0),g(U,null,L(c.value,T=>(t(),n(ee,{key:T.ConventionUUID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:o(()=>[m(re,{convention:T,forms:f.value.filter(R=>R.ConventionUUID===T.ConventionUUID)},null,8,["convention","forms"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),ie={};function le(s,u){return t(),g("div")}const ue=P(ie,[["render",le]]),ce=I({__name:"MainView",emits:["pageTitle"],setup(s,{emit:u}){return u("pageTitle","Scotiacon Registration System"),(c,f)=>(t(),g(U,null,[m(se),m(ue)],64))}}),Ve=I({__name:"Home",emits:["pageTitle"],setup(s,{emit:u}){const c=z();return u("pageTitle","Telegram Login"),(f,r)=>(t(),g("div",null,[p(c)?(t(),n(ce,{key:0,onPageTitle:r[0]||(r[0]=i=>u("pageTitle",i))})):(t(),n(G,{key:1}))]))}});export{Ve as default};