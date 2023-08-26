import{I as S,a1 as O,r as o,L as r,M as w,N as a,v as t,O as i,P as y,R as g,V as s,Q as H,U as A,H as G,W as v,a0 as Q,X,Y,_ as J}from"./index-46ae011d.js";import{s as N}from"./index-26b71cef.js";import{S as q}from"./setupLogin-e5f6a9a0.js";import{E as d}from"./emailFormVariant-e5e0aad4.js";import{V as h,a as C}from"./VRow-82a84da7.js";import{V as B}from"./VTextField-c09ca43d.js";import{V as R}from"./VBtn-457dcd6e.js";import{j as W}from"./VContainer-c5645db9.js";import{V as K}from"./VForm-e0389ba0.js";import{G as ee}from"./userData-2d13cd96.js";import{b as ae,V as te,c as le,e as re}from"./VCard-0107bf1d.js";import"./VAvatar-e44c7487.js";const b=V=>(X("data-v-af7dd702"),V=V(),Y(),V),se={key:1,class:"ma-auto text-left"},oe={key:2,class:"ma-auto text-left"},ne={key:3,class:"ma-auto text-left"},ue=b(()=>v("br",null,null,-1)),ie=b(()=>v("br",null,null,-1)),de={class:"text-red-darken-1 font-weight-bold"},ce=b(()=>v("br",null,null,-1)),me=b(()=>v("br",null,null,-1)),fe=b(()=>v("br",null,null,-1)),ve=b(()=>v("span",{class:"text-red-darken-4"}," Please contact registration for further assistance. ",-1)),pe=S({__name:"EmailLoginForm",props:{variant:{default:()=>d.COMBINED}},setup(V){const L=O(),p=Q(),_=o(!0),M=o(!1),D=o(!1),k=o(!1),c=o(""),E=o(""),I=o(!1),m=o({required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",email:e=>!!e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Valid email address required"}),n=o(""),u=o(!1),T=new URL(location.href).searchParams.get("token")||"";T!==""&&(_.value=!1,k.value=!0,p.validateAccount(T).then(({created:e,tokens:l,user:f})=>{try{q(l,f,L,e)}catch(F){console.error(F)}}).catch(e=>{n.value=e.ErrorMessage}));const x=()=>(n.value="",!(m.value.required(c.value)!==!0||m.value.email(c.value)!==!0||m.value.required(E.value)!==!0||m.value.min(E.value)!==!0)),$=e=>{if(e.preventDefault(),!x())return;const f=new URL(location.href).searchParams.get("state");u.value=!0,p.oAuthLogin("internal",c.value,E.value,f||"").then(({created:F,tokens:j,user:Z})=>{q(j,Z,L,F)}).catch(()=>{n.value="Login failed, check credentials or register",u.value=!1})},U=e=>{e.preventDefault(),x()&&(u.value=!0,p.registerAccount(c.value,E.value).then(l=>{_.value=!1,l&&(D.value=!0)}).catch(()=>{n.value="Unable to register, address may be in use",u.value=!1}))},z=()=>{p.requestLoginLink(c.value).then(e=>{_.value=!1,e&&(M.value=!0)}).catch(()=>{n.value="A problem was encountered, please try again",u.value=!1})};return(e,l)=>_.value?(r(),w(K,{key:0,onSubmit:l[3]||(l[3]=H(()=>{},["stop"])),class:"ma-auto vForm",disabled:u.value},{default:a(()=>[t(C,null,{default:a(()=>[t(h,null,{default:a(()=>[t(B,{margin:"normal",required:"",id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:"",variant:"outlined",modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=f=>c.value=f),rules:[m.value.required,m.value.email],clearable:!0},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(C,null,{default:a(()=>[t(h,null,{default:a(()=>[t(B,{margin:"normal",required:"",name:"password",label:"Password",type:I.value?"text":"password",id:"password",autoComplete:"current-password",variant:"outlined",modelValue:E.value,"onUpdate:modelValue":l[1]||(l[1]=f=>E.value=f),"append-icon":I.value?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":l[2]||(l[2]=f=>I.value=!I.value),counter:"",hint:"At least 8 characters",rules:[m.value.required,m.value.min],clearable:!0},null,8,["type","modelValue","append-icon","rules"])]),_:1})]),_:1}),n.value?(r(),w(C,{key:0},{default:a(()=>[t(h,{class:"text-red-darken-1 font-weight-bold"},{default:a(()=>[i(y(n.value),1)]),_:1})]),_:1})):g("",!0),t(C,{justify:"space-between"},{default:a(()=>[e.variant===s(d).COMBINED||e.variant===s(d).REGISTER?(r(),w(h,{key:0,cols:"12",sm:"6"},{default:a(()=>[t(R,{onClick:U,color:"orange-darken-2",disabled:u.value},{default:a(()=>[i(" Create Account ")]),_:1},8,["disabled"])]),_:1})):g("",!0),e.variant===s(d).COMBINED||e.variant===s(d).LOGIN?(r(),w(h,{key:1,cols:"12",sm:"6"},{default:a(()=>[t(R,{onClick:$,color:"primary",disabled:u.value,type:"submit"},{default:a(()=>[i(" Sign In ")]),_:1},8,["disabled"])]),_:1})):g("",!0),e.variant===s(d).ADD_CREDENTIAL?(r(),w(h,{key:2,cols:"12",sm:"6",class:"flex-grow-0"},{default:a(()=>[t(R,{onClick:U,color:"orange-darken-2",disabled:u.value},{default:a(()=>[i(" Add Email ")]),_:1},8,["disabled"])]),_:1})):g("",!0)]),_:1}),e.variant===s(d).COMBINED||e.variant===s(d).LOGIN?(r(),w(W,{key:1},{default:a(()=>[t(C,null,{default:a(()=>[t(h,null,{default:a(()=>[t(R,{variant:"text",onClick:z},{default:a(()=>[i(y(s(N).buttonForgottenPassword),1)]),_:1})]),_:1})]),_:1})]),_:1})):g("",!0)]),_:1},8,["disabled"])):M.value?(r(),A("p",se,y(s(N).messageResetEmail),1)):D.value?(r(),A("p",oe,y(s(N).messageVerifyNewAccountEmail),1)):k.value?(r(),A("p",ne,[i(y(s(N).messageVerifiedNewAccountMessage)+" ",1),n.value?(r(),A(G,{key:0},[ue,ie,v("span",de,[i(" An error occurred creating or recovering account:"),ce,i(" "+y(n.value),1)]),me,fe,ve],64)):g("",!0)])):g("",!0)}});const P=J(pe,[["__scopeId","data-v-af7dd702"]]),_e=v("h2",null,"Email",-1),Ne=S({__name:"LoginWithEmailView",props:{variant:{default:()=>d.COMBINED}},emits:["pageTitle"],setup(V,{emit:L}){L("pageTitle","Email Login");const p=O(),_=ee(),D=new URL(location.href).searchParams.get("token")||"";return _&&V.variant!=="ADD_CREDENTIAL"&&!D&&(Date.now()-new Date(_.CreatedAt||"").getTime()>2e4?p.push("/"):p.push("/profile")),(k,c)=>k.variant=="ADD_CREDENTIAL"?(r(),w(W,{key:0,style:{"max-width":"550px"}},{default:a(()=>[t(re,null,{default:a(()=>[t(ae,{class:"text-center"},{default:a(()=>[t(te,null,{default:a(()=>[i("Add an E-Mail Address")]),_:1})]),_:1}),t(le,null,{default:a(()=>[t(P,{variant:k.variant},null,8,["variant"])]),_:1})]),_:1})]),_:1})):(r(),A(G,{key:1},[_e,t(P,{variant:k.variant},null,8,["variant"])],64))}});export{Ne as default};
