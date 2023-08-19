import{I as S,a0 as O,r as o,K as r,L as g,M as a,v as t,N as i,O as E,Q as p,S as s,P as H,R as C,H as G,U as f,$ as K,V as Q,W as J,_ as X}from"./index-47b38593.js";import{s as N}from"./index-71069b21.js";import{S as q}from"./setupLogin-5aa7c4ef.js";import{E as d}from"./emailFormVariant-e5e0aad4.js";import{V as _,a as L}from"./VRow-ad199818.js";import{V as B}from"./VTextField-4794d7b3.js";import{V as D}from"./VBtn-26d83237.js";import{j as $}from"./VContainer-f9016dbe.js";import{V as Y}from"./VForm-03262e42.js";import{G as ee}from"./userData-d8838e10.js";import{b as ae,V as te,c as le,e as re}from"./VCard-e0e6bd0f.js";import"./VAvatar-704da092.js";const y=h=>(Q("data-v-4075b2db"),h=h(),J(),h),se={key:1,class:"ma-auto text-left"},oe={key:2,class:"ma-auto text-left"},ne={key:3,class:"ma-auto text-left"},ue=y(()=>f("br",null,null,-1)),ie=y(()=>f("br",null,null,-1)),de={class:"text-red-darken-1 font-weight-bold"},ce=y(()=>f("br",null,null,-1)),me=y(()=>f("br",null,null,-1)),ve=y(()=>f("br",null,null,-1)),fe=y(()=>f("span",{class:"text-red-darken-4"}," Please contact registration for further assistance. ",-1)),pe=S({__name:"EmailLoginForm",props:{variant:{default:()=>d.COMBINED}},setup(h){const A=O(),b=K(),V=o(!0),M=o(!1),R=o(!1),k=o(!1),c=o(""),w=o(""),I=o(!1),m=o({required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",email:e=>!!e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Valid email address required"}),n=o(""),u=o(!1),x=new URL(location.href).searchParams.get("token")||"";x!==""&&(V.value=!1,k.value=!0,b.validateAccount(x).then(({created:e,tokens:l,user:v})=>{try{q(l,v,A,e)}catch(F){console.error(F)}}).catch(e=>{n.value=e.ErrorMessage}));const T=()=>(n.value="",!(m.value.required(c.value)!==!0||m.value.email(c.value)!==!0||m.value.required(w.value)!==!0||m.value.min(w.value)!==!0)),W=e=>{if(e.preventDefault(),!T())return;const v=new URL(location.href).searchParams.get("state");u.value=!0,b.oAuthLogin("internal",c.value,w.value,v||"").then(({created:F,tokens:j,user:Z})=>{q(j,Z,A,F)}).catch(()=>{n.value="Login failed, check credentials or register",u.value=!1})},U=e=>{e.preventDefault(),T()&&(u.value=!0,b.registerAccount(c.value,w.value).then(l=>{V.value=!1,l&&(R.value=!0)}).catch(()=>{n.value="Unable to register, address may be in use",u.value=!1}))},z=()=>{b.requestLoginLink(c.value).then(e=>{V.value=!1,e&&(M.value=!0)}).catch(()=>{n.value="A problem was encountered, please try again",u.value=!1})};return(e,l)=>V.value?(r(),g(Y,{key:0,onSubmit:l[3]||(l[3]=H(()=>{},["stop"])),class:"ma-auto vForm",disabled:u.value},{default:a(()=>[t(L,null,{default:a(()=>[t(_,null,{default:a(()=>[t(B,{margin:"normal",required:"",id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:"",variant:"outlined",modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=v=>c.value=v),rules:[m.value.required,m.value.email],clearable:!0},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(L,null,{default:a(()=>[t(_,null,{default:a(()=>[t(B,{margin:"normal",required:"",name:"password",label:"Password",type:I.value?"text":"password",id:"password",autoComplete:"current-password",variant:"outlined",modelValue:w.value,"onUpdate:modelValue":l[1]||(l[1]=v=>w.value=v),"append-icon":I.value?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":l[2]||(l[2]=v=>I.value=!I.value),counter:"",hint:"At least 8 characters",rules:[m.value.required,m.value.min],clearable:!0},null,8,["type","modelValue","append-icon","rules"])]),_:1})]),_:1}),n.value?(r(),g(L,{key:0},{default:a(()=>[t(_,{class:"text-red-darken-1 font-weight-bold"},{default:a(()=>[i(E(n.value),1)]),_:1})]),_:1})):p("",!0),t(L,{justify:"space-between"},{default:a(()=>[e.variant===s(d).COMBINED||e.variant===s(d).REGISTER?(r(),g(_,{key:0,cols:"12",sm:"6"},{default:a(()=>[t(D,{onClick:U,color:"orange-darken-2",disabled:u.value},{default:a(()=>[i(" Register ")]),_:1},8,["disabled"])]),_:1})):p("",!0),e.variant===s(d).COMBINED||e.variant===s(d).LOGIN?(r(),g(_,{key:1,cols:"12",sm:"6"},{default:a(()=>[t(D,{onClick:W,color:"primary",disabled:u.value,type:"submit"},{default:a(()=>[i(" Sign In ")]),_:1},8,["disabled"])]),_:1})):p("",!0),e.variant===s(d).ADD_CREDENTIAL?(r(),g(_,{key:2,cols:"12",sm:"6",class:"flex-grow-0"},{default:a(()=>[t(D,{onClick:U,color:"orange-darken-2",disabled:u.value},{default:a(()=>[i(" Add Email ")]),_:1},8,["disabled"])]),_:1})):p("",!0)]),_:1}),e.variant===s(d).COMBINED||e.variant===s(d).LOGIN?(r(),g($,{key:1},{default:a(()=>[t(L,null,{default:a(()=>[t(_,null,{default:a(()=>[t(D,{variant:"text",onClick:z},{default:a(()=>[i(E(s(N).buttonForgottenPassword),1)]),_:1})]),_:1})]),_:1})]),_:1})):p("",!0)]),_:1},8,["disabled"])):M.value?(r(),C("p",se,E(s(N).messageResetEmail),1)):R.value?(r(),C("p",oe,E(s(N).messageVerifyNewAccountEmail),1)):k.value?(r(),C("p",ne,[i(E(s(N).messageVerifiedNewAccountMessage)+" ",1),n.value?(r(),C(G,{key:0},[ue,ie,f("span",de,[i(" An error occurred creating or recovering account:"),ce,i(" "+E(n.value),1)]),me,ve,fe],64)):p("",!0)])):p("",!0)}});const P=X(pe,[["__scopeId","data-v-4075b2db"]]),_e=f("h2",null,"Email",-1),Ne=S({__name:"LoginWithEmailView",props:{variant:{default:()=>d.COMBINED}},emits:["pageTitle"],setup(h,{emit:A}){A("pageTitle","Email Login");const b=O(),V=ee(),R=new URL(location.href).searchParams.get("token")||"";return V&&h.variant!=="ADD_CREDENTIAL"&&!R&&b.push("/"),(k,c)=>k.variant=="ADD_CREDENTIAL"?(r(),g($,{key:0,style:{"max-width":"550px"}},{default:a(()=>[t(re,null,{default:a(()=>[t(ae,{class:"text-center"},{default:a(()=>[t(te,null,{default:a(()=>[i("Add an E-Mail Address")]),_:1})]),_:1}),t(le,null,{default:a(()=>[t(P,{variant:k.variant},null,8,["variant"])]),_:1})]),_:1})]),_:1})):(r(),C(G,{key:1},[_e,t(P,{variant:k.variant},null,8,["variant"])],64))}});export{Ne as default};
