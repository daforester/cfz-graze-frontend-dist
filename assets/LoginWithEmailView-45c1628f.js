import{d as P,D as z,y as o,o as r,b as h,w as a,c as t,e as m,G as w,K as f,L as s,H as W,N as C,F as U,f as v,S as Z,U as j,_ as H}from"./index-f1ea5b8b.js";import{s as A}from"./index-ba0d422e.js";import{S}from"./setupLogin-f37cc8a9.js";import{E as n}from"./emailFormVariant-e5e0aad4.js";import{u as K}from"./useGrazeAPI-97da0a64.js";import{V as p,a as E}from"./VRow-2a087599.js";import{V as q}from"./VTextField-7b52105e.js";import{V as I}from"./VBtn-532d6dc7.js";import{V as J}from"./VContainer-019b6c12.js";import{V as Q}from"./VForm-bb06a491.js";import"./userData-d733b0cf.js";import"./rounded-7a8c6c32.js";import"./index-5ec5e460.js";import"./index-cd60e2ec.js";const b=V=>(Z("data-v-44baadd1"),V=V(),j(),V),X={key:1,class:"ma-auto text-left"},Y={key:2,class:"ma-auto text-left"},ee={key:3,class:"ma-auto text-left"},ae=b(()=>v("br",null,null,-1)),te=b(()=>v("br",null,null,-1)),le={class:"text-red-darken-1 font-weight-bold"},se=b(()=>v("br",null,null,-1)),re=b(()=>v("br",null,null,-1)),oe=b(()=>v("br",null,null,-1)),ne=b(()=>v("span",{class:"text-red-darken-4"}," Please contact registration for further assistance. ",-1)),ue=P({__name:"EmailLoginForm",props:{variant:{default:()=>n.COMBINED}},setup(V){const L=z(),k=K(),y=o(!0),F=o(!1),R=o(!1),M=o(!1),_=o(""),g=o(""),N=o(!1),u=o({required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",email:e=>!!e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Valid email address required"}),i=o(""),d=o(!1),x=new URL(location.href).searchParams.get("token")||"";x!==""&&(y.value=!1,M.value=!0,k.validateAccount(x).then(({tokens:e,user:l})=>{try{S(e,l,L)}catch(c){console.error(c)}}).catch(e=>{i.value=e.ErrorMessage}));const D=()=>(i.value="",!(u.value.required(_.value)!==!0||u.value.email(_.value)!==!0||u.value.required(g.value)!==!0||u.value.min(g.value)!==!0)),O=e=>{if(e.preventDefault(),!D())return;const c=new URL(location.href).searchParams.get("state");d.value=!0,k.oAuthLogin("internal",_.value,g.value,c||"").then(({tokens:G,user:$})=>{S(G,$,L)}).catch(()=>{i.value="Invalid Login",d.value=!1})},B=e=>{e.preventDefault(),D()&&(d.value=!0,k.registerAccount(_.value,g.value).then(l=>{y.value=!1,l&&(R.value=!0)}).catch(()=>{i.value="Unable to register, address may be in use",d.value=!1}))},T=()=>{y.value=!1,F.value=!0};return(e,l)=>y.value?(r(),h(Q,{key:0,onSubmit:l[3]||(l[3]=W(()=>{},["stop"])),class:"ma-auto vForm",disabled:d.value},{default:a(()=>[t(E,null,{default:a(()=>[t(p,null,{default:a(()=>[t(q,{margin:"normal",required:"",id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:"",variant:"outlined",modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=c=>_.value=c),rules:[u.value.required,u.value.email],clearable:!0},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(E,null,{default:a(()=>[t(p,null,{default:a(()=>[t(q,{margin:"normal",required:"",name:"password",label:"Password",type:N.value?"text":"password",id:"password",autoComplete:"current-password",variant:"outlined",modelValue:g.value,"onUpdate:modelValue":l[1]||(l[1]=c=>g.value=c),"append-icon":N.value?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":l[2]||(l[2]=c=>N.value=!N.value),counter:"",hint:"At least 8 characters",rules:[u.value.required,u.value.min],clearable:!0},null,8,["type","modelValue","append-icon","rules"])]),_:1})]),_:1}),i.value?(r(),h(E,{key:0},{default:a(()=>[t(p,{class:"text-red-darken-1 font-weight-bold"},{default:a(()=>[m(w(i.value),1)]),_:1})]),_:1})):f("",!0),t(E,{justify:"space-between"},{default:a(()=>[e.variant===s(n).COMBINED||e.variant===s(n).REGISTER?(r(),h(p,{key:0,class:"flex-grow-0"},{default:a(()=>[t(I,{onClick:B,color:"orange-darken-2",disabled:d.value},{default:a(()=>[m(" Register ")]),_:1},8,["disabled"])]),_:1})):f("",!0),e.variant===s(n).COMBINED||e.variant===s(n).LOGIN?(r(),h(p,{key:1,class:"flex-grow-0"},{default:a(()=>[t(I,{onClick:O,color:"primary",disabled:d.value},{default:a(()=>[m(" Sign In ")]),_:1},8,["disabled"])]),_:1})):f("",!0),e.variant===s(n).ADD_CREDENTIAL?(r(),h(p,{key:2,class:"flex-grow-0"},{default:a(()=>[t(I,{onClick:B,color:"orange-darken-2",disabled:d.value},{default:a(()=>[m(" Add Email ")]),_:1},8,["disabled"])]),_:1})):f("",!0)]),_:1}),e.variant===s(n).COMBINED||e.variant===s(n).LOGIN?(r(),h(J,{key:1},{default:a(()=>[t(E,null,{default:a(()=>[t(p,null,{default:a(()=>[t(I,{variant:"text",onClick:T},{default:a(()=>[m(w(s(A).buttonForgottenPassword),1)]),_:1})]),_:1})]),_:1})]),_:1})):f("",!0)]),_:1},8,["disabled"])):F.value?(r(),C("p",X,w(s(A).messageResetEmail),1)):R.value?(r(),C("p",Y,w(s(A).messageVerifyNewAccountEmail),1)):M.value?(r(),C("p",ee,[m(w(s(A).messageVerifiedNewAccountMessage)+" ",1),i.value?(r(),C(U,{key:0},[ae,te,v("span",le,[m(" An error occurred creating account:"),se,m(" "+w(i.value),1)]),re,oe,ne],64)):f("",!0)])):f("",!0)}});const ie=H(ue,[["__scopeId","data-v-44baadd1"]]),de=v("h2",null,"Email",-1),Le=P({__name:"LoginWithEmailView",props:{variant:{default:()=>n.COMBINED}},emits:["pageTitle"],setup(V,{emit:L}){return L("pageTitle","Email Login"),(k,y)=>(r(),C(U,null,[de,t(ie,{variant:k.variant},null,8,["variant"])],64))}});export{Le as default};