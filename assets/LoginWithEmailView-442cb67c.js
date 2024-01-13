import{i as S,U as G,r as o,l as H,n as r,q as w,v as e,f as t,x as n,y as E,A as h,C as s,z as J,B as D,F as O,D as c,P as K,G as Q,H as X,_ as Y}from"./index-5fbc4a04.js";import{s as x}from"./index-26b71cef.js";import{S as U}from"./setupLogin-15fe6ccc.js";import{E as d}from"./emailFormVariant-e5e0aad4.js";import{a as k,V as A}from"./VRow-356306a1.js";import{V as B}from"./VTextField-06af936e.js";import{V as L}from"./VBtn-29079793.js";import{a as z}from"./VContainer-baf2d6aa.js";import{V as ee}from"./VForm-7b383824.js";import{G as ae}from"./userData-a2e78973.js";import{b as te,V as le,c as re,e as se}from"./VCard-90ba4dc6.js";import"./forwardRefs-ae13a64b.js";import"./VAvatar-4bb87187.js";import"./createSimpleFunctional-d7f549db.js";const C=p=>(Q("data-v-07d5624d"),p=p(),X(),p),oe={key:1,class:"ma-auto text-left"},ne={key:2,class:"ma-auto text-left"},ue={key:3,class:"ma-auto text-left"},ie=C(()=>c("br",null,null,-1)),de=C(()=>c("br",null,null,-1)),ce={class:"text-red-darken-1 font-weight-bold"},me=C(()=>c("br",null,null,-1)),ve=C(()=>c("br",null,null,-1)),fe=C(()=>c("br",null,null,-1)),pe=C(()=>c("span",{class:"text-red-darken-4"}," Please contact registration if you require further assistance. ",-1)),_e={class:"text-center mt-4"},ge=S({__name:"EmailLoginForm",props:{variant:{default:()=>d.COMBINED}},setup(p){const I=G(),_=K(),g=o(!0),F=o(!1),N=o(!1),y=o(!1),m=o(""),V=o(""),R=o(!1),v=o({required:a=>!!a||"Required.",min:a=>a.length>=8||"Min 8 characters",email:a=>!!a.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Valid email address required"}),u=o(""),i=o(!1),M=new URL(location.href).searchParams.get("token")||"";M!==""&&(g.value=!1,y.value=!0,_.validateAccount(M,p.variant).then(({created:a,tokens:l,user:b})=>{try{U(l,b,I,a)}catch(f){console.error(f)}}).catch(a=>{console.error(a),u.value=a.ErrorMessage}));const T=()=>(u.value="",!(v.value.required(m.value)!==!0||v.value.email(m.value)!==!0||v.value.required(V.value)!==!0||v.value.min(V.value)!==!0)),$=a=>{if(a.preventDefault(),!T())return;const b=new URL(location.href).searchParams.get("state");i.value=!0,_.oAuthLogin("internal",m.value,V.value,b||"").then(({created:f,tokens:Z,user:j})=>{U(Z,j,I,f)}).catch(()=>{u.value="Login failed, check credentials or register",i.value=!1})},q=a=>{a.preventDefault(),T()&&(i.value=!0,_.registerAccount(m.value,V.value).then(l=>{g.value=!1,l&&(N.value=!0)}).catch(()=>{u.value="Unable to register, address may be in use",i.value=!1}))},W=()=>{_.requestLoginLink(m.value).then(a=>{g.value=!1,a&&(F.value=!0)}).catch(()=>{u.value="A problem was encountered, please try again",i.value=!1})};return(a,l)=>{const b=H("router-link");return g.value?(r(),w(ee,{key:0,onSubmit:l[3]||(l[3]=J(()=>{},["stop"])),class:"ma-auto vForm",disabled:i.value},{default:e(()=>[t(A,null,{default:e(()=>[t(k,null,{default:e(()=>[t(B,{margin:"normal",required:"",id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:"",variant:"outlined",modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=f=>m.value=f),rules:[v.value.required,v.value.email],clearable:!0},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(A,null,{default:e(()=>[t(k,null,{default:e(()=>[t(B,{margin:"normal",required:"",name:"password",label:"Password",type:R.value?"text":"password",id:"password",autoComplete:"current-password",variant:"outlined",modelValue:V.value,"onUpdate:modelValue":l[1]||(l[1]=f=>V.value=f),"append-icon":R.value?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":l[2]||(l[2]=f=>R.value=!R.value),counter:"",hint:"At least 8 characters",rules:[v.value.required,v.value.min],clearable:!0},null,8,["type","modelValue","append-icon","rules"])]),_:1})]),_:1}),u.value?(r(),w(A,{key:0},{default:e(()=>[t(k,{class:"text-red-darken-1 font-weight-bold"},{default:e(()=>[n(E(u.value),1)]),_:1})]),_:1})):h("",!0),t(A,{justify:"space-between"},{default:e(()=>[a.variant===s(d).COMBINED||a.variant===s(d).REGISTER?(r(),w(k,{key:0,cols:"12",sm:"7"},{default:e(()=>[t(L,{onClick:q,color:"orange-darken-2",disabled:i.value},{default:e(()=>[n(" Create Account ")]),_:1},8,["disabled"])]),_:1})):h("",!0),a.variant===s(d).COMBINED||a.variant===s(d).LOGIN?(r(),w(k,{key:1,cols:"12",sm:"5"},{default:e(()=>[t(L,{onClick:$,color:"primary",disabled:i.value,type:"submit"},{default:e(()=>[n(" Sign In ")]),_:1},8,["disabled"])]),_:1})):h("",!0),a.variant===s(d).ADD_CREDENTIAL?(r(),w(k,{key:2,cols:"12",sm:"6",class:"flex-grow-0"},{default:e(()=>[t(L,{onClick:q,color:"orange-darken-2",disabled:i.value},{default:e(()=>[n(" Add Email ")]),_:1},8,["disabled"])]),_:1})):h("",!0)]),_:1}),a.variant===s(d).COMBINED||a.variant===s(d).LOGIN?(r(),w(z,{key:1},{default:e(()=>[t(A,null,{default:e(()=>[t(k,null,{default:e(()=>[t(L,{variant:"text",onClick:W},{default:e(()=>[n(E(s(x).buttonForgottenPassword),1)]),_:1})]),_:1})]),_:1})]),_:1})):h("",!0)]),_:1},8,["disabled"])):F.value?(r(),D("p",oe,E(s(x).messageResetEmail),1)):N.value?(r(),D("p",ne,E(s(x).messageVerifyNewAccountEmail),1)):y.value?(r(),D("p",ue,[n(E(s(x).messageVerifiedNewAccountMessage)+" ",1),u.value?(r(),D(O,{key:0},[ie,de,c("span",ce,[n(" An error occurred creating or recovering account:"),me,n(" "+E(u.value),1)]),ve,fe,pe,c("div",_e,[t(b,{to:"/"},{default:e(()=>[t(L,{color:"red"},{default:e(()=>[n("Close")]),_:1})]),_:1})])],64)):h("",!0)])):h("",!0)}}});const P=Y(ge,[["__scopeId","data-v-07d5624d"]]),he=c("h2",null,"Email",-1),Me=S({__name:"LoginWithEmailView",props:{variant:{default:()=>d.COMBINED}},emits:["pageTitle"],setup(p,{emit:I}){I("pageTitle","Email Login");const _=G(),g=ae(),N=new URL(location.href).searchParams.get("token")||"";return g&&p.variant!=="ADD_CREDENTIAL"&&!N&&(Date.now()-new Date(g.CreatedAt||"").getTime()>2e4?_.push("/"):_.push("/profile")),(y,m)=>y.variant=="ADD_CREDENTIAL"?(r(),w(z,{key:0,style:{"max-width":"550px"}},{default:e(()=>[t(se,null,{default:e(()=>[t(te,{class:"text-center"},{default:e(()=>[t(le,null,{default:e(()=>[n("Add an E-Mail Address")]),_:1})]),_:1}),t(re,null,{default:e(()=>[t(P,{variant:y.variant},null,8,["variant"])]),_:1})]),_:1})]),_:1})):(r(),D(O,{key:1},[he,t(P,{variant:y.variant},null,8,["variant"])],64))}});export{Me as default};
