import{I as S,a5 as O,r as o,L as H,M as r,N as w,O as e,v as t,P as n,Q as E,S as h,W as s,R as Q,V as D,H as G,X as c,a3 as X,Y,Z as J,_ as K}from"./index-4a0628fc.js";import{s as M}from"./index-26b71cef.js";import{S as U}from"./setupLogin-663ec560.js";import{E as d}from"./emailFormVariant-e5e0aad4.js";import{a as k,V as A}from"./VRow-dc0e3e18.js";import{V as B}from"./VTextField-7ad380ec.js";import{V as L}from"./VBtn-41e69288.js";import{j as W}from"./VContainer-6f41cbb0.js";import{V as ee}from"./VForm-426ee361.js";import{G as ae}from"./userData-209450bc.js";import{b as te,V as le,c as re,e as se}from"./VCard-110d151b.js";import"./forwardRefs-a66d512a.js";import"./VAvatar-8db0786b.js";import"./createSimpleFunctional-5d514360.js";const C=p=>(Y("data-v-07d5624d"),p=p(),J(),p),oe={key:1,class:"ma-auto text-left"},ne={key:2,class:"ma-auto text-left"},ue={key:3,class:"ma-auto text-left"},ie=C(()=>c("br",null,null,-1)),de=C(()=>c("br",null,null,-1)),ce={class:"text-red-darken-1 font-weight-bold"},me=C(()=>c("br",null,null,-1)),ve=C(()=>c("br",null,null,-1)),fe=C(()=>c("br",null,null,-1)),pe=C(()=>c("span",{class:"text-red-darken-4"}," Please contact registration if you require further assistance. ",-1)),_e={class:"text-center mt-4"},ge=S({__name:"EmailLoginForm",props:{variant:{default:()=>d.COMBINED}},setup(p){const I=O(),_=X(),g=o(!0),x=o(!1),N=o(!1),V=o(!1),m=o(""),y=o(""),R=o(!1),v=o({required:a=>!!a||"Required.",min:a=>a.length>=8||"Min 8 characters",email:a=>!!a.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Valid email address required"}),u=o(""),i=o(!1),F=new URL(location.href).searchParams.get("token")||"";F!==""&&(g.value=!1,V.value=!0,_.validateAccount(F,p.variant).then(({created:a,tokens:l,user:b})=>{try{U(l,b,I,a)}catch(f){console.error(f)}}).catch(a=>{console.error(a),u.value=a.ErrorMessage}));const T=()=>(u.value="",!(v.value.required(m.value)!==!0||v.value.email(m.value)!==!0||v.value.required(y.value)!==!0||v.value.min(y.value)!==!0)),$=a=>{if(a.preventDefault(),!T())return;const b=new URL(location.href).searchParams.get("state");i.value=!0,_.oAuthLogin("internal",m.value,y.value,b||"").then(({created:f,tokens:Z,user:j})=>{U(Z,j,I,f)}).catch(()=>{u.value="Login failed, check credentials or register",i.value=!1})},q=a=>{a.preventDefault(),T()&&(i.value=!0,_.registerAccount(m.value,y.value).then(l=>{g.value=!1,l&&(N.value=!0)}).catch(()=>{u.value="Unable to register, address may be in use",i.value=!1}))},z=()=>{_.requestLoginLink(m.value).then(a=>{g.value=!1,a&&(x.value=!0)}).catch(()=>{u.value="A problem was encountered, please try again",i.value=!1})};return(a,l)=>{const b=H("router-link");return g.value?(r(),w(ee,{key:0,onSubmit:l[3]||(l[3]=Q(()=>{},["stop"])),class:"ma-auto vForm",disabled:i.value},{default:e(()=>[t(A,null,{default:e(()=>[t(k,null,{default:e(()=>[t(B,{margin:"normal",required:"",id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:"",variant:"outlined",modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=f=>m.value=f),rules:[v.value.required,v.value.email],clearable:!0},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(A,null,{default:e(()=>[t(k,null,{default:e(()=>[t(B,{margin:"normal",required:"",name:"password",label:"Password",type:R.value?"text":"password",id:"password",autoComplete:"current-password",variant:"outlined",modelValue:y.value,"onUpdate:modelValue":l[1]||(l[1]=f=>y.value=f),"append-icon":R.value?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":l[2]||(l[2]=f=>R.value=!R.value),counter:"",hint:"At least 8 characters",rules:[v.value.required,v.value.min],clearable:!0},null,8,["type","modelValue","append-icon","rules"])]),_:1})]),_:1}),u.value?(r(),w(A,{key:0},{default:e(()=>[t(k,{class:"text-red-darken-1 font-weight-bold"},{default:e(()=>[n(E(u.value),1)]),_:1})]),_:1})):h("",!0),t(A,{justify:"space-between"},{default:e(()=>[a.variant===s(d).COMBINED||a.variant===s(d).REGISTER?(r(),w(k,{key:0,cols:"12",sm:"7"},{default:e(()=>[t(L,{onClick:q,color:"orange-darken-2",disabled:i.value},{default:e(()=>[n(" Create Account ")]),_:1},8,["disabled"])]),_:1})):h("",!0),a.variant===s(d).COMBINED||a.variant===s(d).LOGIN?(r(),w(k,{key:1,cols:"12",sm:"5"},{default:e(()=>[t(L,{onClick:$,color:"primary",disabled:i.value,type:"submit"},{default:e(()=>[n(" Sign In ")]),_:1},8,["disabled"])]),_:1})):h("",!0),a.variant===s(d).ADD_CREDENTIAL?(r(),w(k,{key:2,cols:"12",sm:"6",class:"flex-grow-0"},{default:e(()=>[t(L,{onClick:q,color:"orange-darken-2",disabled:i.value},{default:e(()=>[n(" Add Email ")]),_:1},8,["disabled"])]),_:1})):h("",!0)]),_:1}),a.variant===s(d).COMBINED||a.variant===s(d).LOGIN?(r(),w(W,{key:1},{default:e(()=>[t(A,null,{default:e(()=>[t(k,null,{default:e(()=>[t(L,{variant:"text",onClick:z},{default:e(()=>[n(E(s(M).buttonForgottenPassword),1)]),_:1})]),_:1})]),_:1})]),_:1})):h("",!0)]),_:1},8,["disabled"])):x.value?(r(),D("p",oe,E(s(M).messageResetEmail),1)):N.value?(r(),D("p",ne,E(s(M).messageVerifyNewAccountEmail),1)):V.value?(r(),D("p",ue,[n(E(s(M).messageVerifiedNewAccountMessage)+" ",1),u.value?(r(),D(G,{key:0},[ie,de,c("span",ce,[n(" An error occurred creating or recovering account:"),me,n(" "+E(u.value),1)]),ve,fe,pe,c("div",_e,[t(b,{to:"/"},{default:e(()=>[t(L,{color:"red"},{default:e(()=>[n("Close")]),_:1})]),_:1})])],64)):h("",!0)])):h("",!0)}}});const P=K(ge,[["__scopeId","data-v-07d5624d"]]),he=c("h2",null,"Email",-1),Fe=S({__name:"LoginWithEmailView",props:{variant:{default:()=>d.COMBINED}},emits:["pageTitle"],setup(p,{emit:I}){I("pageTitle","Email Login");const _=O(),g=ae(),N=new URL(location.href).searchParams.get("token")||"";return g&&p.variant!=="ADD_CREDENTIAL"&&!N&&(Date.now()-new Date(g.CreatedAt||"").getTime()>2e4?_.push("/"):_.push("/profile")),(V,m)=>V.variant=="ADD_CREDENTIAL"?(r(),w(W,{key:0,style:{"max-width":"550px"}},{default:e(()=>[t(se,null,{default:e(()=>[t(te,{class:"text-center"},{default:e(()=>[t(le,null,{default:e(()=>[n("Add an E-Mail Address")]),_:1})]),_:1}),t(re,null,{default:e(()=>[t(P,{variant:V.variant},null,8,["variant"])]),_:1})]),_:1})]),_:1})):(r(),D(G,{key:1},[he,t(P,{variant:V.variant},null,8,["variant"])],64))}});export{Fe as default};
