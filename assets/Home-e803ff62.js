import{I,r as S,e as E,w as $,J as h,K as e,L as n,M as o,v as m,Q as _,N as l,O as C,U as N,R as g,Z as M,H as F,S as p,$ as b,_ as P}from"./index-358e21fe.js";import{G as z}from"./userData-fc96ebc1.js";import{_ as G}from"./LoginView.vue_vue_type_script_setup_true_lang-bfafc0ac.js";import{s as L}from"./index-71069b21.js";import{F as y}from"./form-aee596e2.js";import{S as Y}from"./submission-56c4c4f1.js";import{u as B}from"./useStoreAPI-5cd9813a.js";import{c as O,s as H}from"./sortSubmissions-34c92728.js";import{a as j,V as J}from"./VAvatar-8e2d65d0.js";import{V as K,a as Q,b as Z,c as q,d as W,e as X}from"./VCard-7ba32c8b.js";import{V as v,n as ee}from"./VContainer-76f61da9.js";import{V as te,a as oe}from"./VRow-6e91ea1f.js";import"./emailFormVariant-e5e0aad4.js";import"./LoginButton-94dc0339.js";import"./index-d03f7181.js";const ne={key:0,class:"font-weight-bold float-left pt-1 w-50"},ae=I({__name:"OpenConvention",props:{convention:{},forms:{default:()=>[]}},setup(s){const c=B(),u=b(),f=S(c.GetConventionLogoURL(s.convention.ConventionUUID)),r=S(),i=E(()=>{var t;return O(s.forms,((t=r.value)==null?void 0:t.Submissions)||[],y.FORM_TYPE_REGISTRATION)}),T=E(()=>{var t;return O(s.forms,((t=r.value)==null?void 0:t.Submissions)||[],y.FORM_TYPE_DEALER)}),R=E(()=>{var t;return O(s.forms,((t=r.value)==null?void 0:t.Submissions)||[],y.FORM_TYPE_ACCOMMODATION)});return $(()=>s.forms,()=>{u.getRegistrationByConvention(s.convention.ConventionUUID).then(t=>{t.Submissions.forEach((V,k)=>{V.Form||(t.Submissions[k].Form=s.forms.find(D=>D.FormUUID===V.FormUUID))}),H(t.Submissions),r.value=t})}),(t,V)=>{const k=h("router-link"),D=h("RouterLink");return e(),n(X,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:o(()=>[m(Z,{class:"flex-1-1 align-content-start"},{default:o(()=>[f.value?(e(),n(j,{key:0,src:f.value,title:t.convention.Name,class:"logo text-center"},null,8,["src","title"])):_("",!0),t.convention.Name?(e(),n(K,{key:1,class:"text-center"},{default:o(()=>[l(C(t.convention.Name),1)]),_:1})):_("",!0),t.convention.Description?(e(),n(Q,{key:2,class:"text-wrap text-black subtitle"},{default:o(()=>[l(C(t.convention.Description),1)]),_:1})):_("",!0)]),_:1}),m(q,null,{default:o(()=>{var U;return[N("dl",null,[(e(!0),g(F,null,M((U=r.value)==null?void 0:U.Submissions,a=>{var x,A,w;return e(),g(F,{key:a.SubmissionUUID},[a.Form?(e(),g(F,{key:0},[a.Form?(e(),g("dt",ne,C(a.Form.Heading),1)):_("",!0),N("dd",null,[l(C(p(Y)(a.Status))+" ",1),((x=a.Form)==null?void 0:x.Type)===p(y).FORM_TYPE_REGISTRATION?(e(),n(k,{key:0,to:`/register/${t.convention.ConventionUUID}/registration`},{default:o(()=>{var d;return[(d=a.Form)!=null&&d.State.Edit&&i.value?(e(),n(v,{key:0,size:"small",variant:"text",color:"success"},{default:o(()=>[l(" Edit ")]),_:1})):(e(),n(v,{key:1,size:"small",variant:"text",color:"warning"},{default:o(()=>[l("View")]),_:1}))]}),_:2},1032,["to"])):((A=a.Form)==null?void 0:A.Type)===p(y).FORM_TYPE_ACCOMMODATION?(e(),n(k,{key:1,to:`/register/${t.convention.ConventionUUID}/accommodation`},{default:o(()=>{var d;return[(d=a.Form)!=null&&d.State.Edit&&R.value?(e(),n(v,{key:0,size:"small",variant:"text",color:"success"},{default:o(()=>[l(" Edit ")]),_:1})):(e(),n(v,{key:1,size:"small",variant:"text",color:"warning"},{default:o(()=>[l("View")]),_:1}))]}),_:2},1032,["to"])):((w=a.Form)==null?void 0:w.Type)===p(y).FORM_TYPE_DEALER?(e(),n(k,{key:2,to:`/register/${t.convention.ConventionUUID}/dealer`},{default:o(()=>{var d;return[(d=a.Form)!=null&&d.State.Edit&&T.value?(e(),n(v,{key:0,size:"small",variant:"text",color:"success"},{default:o(()=>[l(" Edit ")]),_:1})):(e(),n(v,{key:1,size:"small",variant:"text",color:"warning"},{default:o(()=>[l("View")]),_:1}))]}),_:2},1032,["to"])):_("",!0)])],64)):_("",!0)],64)}),128))])]}),_:1}),m(W,null,{default:o(()=>{var U;return[t.convention.DetailLink?(e(),n(v,{key:0,color:"orange",href:t.convention.DetailLink},{default:o(()=>[l(C(p(L).buttonDetails),1)]),_:1},8,["href"])):_("",!0),m(J),i.value&&((U=t.forms.find(a=>a.Type===p(y).FORM_TYPE_REGISTRATION))!=null&&U.State.New)?(e(),n(D,{key:1,to:`/register/${t.convention.Slug}`},{default:o(()=>[m(v,{color:"primary"},{default:o(()=>[l(C(p(L).buttonRegister),1)]),_:1})]),_:1},8,["to"])):_("",!0)]}),_:1})]),_:1})}}});const re=P(ae,[["__scopeId","data-v-51f848a6"]]),se=I({__name:"Conventions",setup(s){const c=b(),u=S([]),f=S([]);return c.getOpenConventionsList().then(r=>{r&&(u.value=[...u.value,...r],c.getAvailableConventionForms(u.value.map(i=>i.ConventionUUID)).then(i=>{f.value=[...f.value,...i]}).catch(i=>{console.error(i)}))}),(r,i)=>(e(),n(ee,null,{default:o(()=>[m(oe,{class:"justify-center"},{default:o(()=>[(e(!0),g(F,null,M(u.value,T=>(e(),n(te,{key:T.ConventionUUID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:o(()=>[m(re,{convention:T,forms:f.value.filter(R=>R.ConventionUUID===T.ConventionUUID)},null,8,["convention","forms"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),ie={};function le(s,c){return e(),g("div")}const ce=P(ie,[["render",le]]),ue=I({__name:"MainView",emits:["pageTitle"],setup(s,{emit:c}){return c("pageTitle","Scotiacon Registration System"),(u,f)=>(e(),g(F,null,[m(se),m(ce)],64))}}),Re=I({__name:"Home",emits:["pageTitle"],setup(s,{emit:c}){const u=z();return c("pageTitle","Telegram Login"),(f,r)=>(e(),g("div",null,[p(u)?(e(),n(ue,{key:0,onPageTitle:r[0]||(r[0]=i=>c("pageTitle",i))})):(e(),n(G,{key:1}))]))}});export{Re as default};
