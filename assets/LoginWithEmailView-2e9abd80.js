import{I as P,a0 as U,r as o,K as s,L as g,M as a,v as t,N as i,O as k,Q as p,S as r,P as Z,R as A,H as O,U as v,$ as H,V as K,W as Q,_ as J}from"./index-39564366.js";import{s as N}from"./index-71069b21.js";import{S as q}from"./setupLogin-7b335dc3.js";import{E as d}from"./emailFormVariant-e5e0aad4.js";import{V as _,a as C}from"./VRow-8bb5a658.js";import{V as B}from"./VTextField-e08162c9.js";import{V as D}from"./VBtn-d4c4fc40.js";import{j as G}from"./VContainer-b18898cf.js";import{V as X}from"./VForm-b77ea077.js";import{G as Y}from"./userData-a0033275.js";import{b as ee,V as ae,c as te,e as le}from"./VCard-d31936d9.js";import"./VAvatar-2e5c2884.js";const w=h=>(K("data-v-68dd3ba9"),h=h(),Q(),h),se={key:1,class:"ma-auto text-left"},re={key:2,class:"ma-auto text-left"},oe={key:3,class:"ma-auto text-left"},ne=w(()=>v("br",null,null,-1)),ue=w(()=>v("br",null,null,-1)),ie={class:"text-red-darken-1 font-weight-bold"},de=w(()=>v("br",null,null,-1)),ce=w(()=>v("br",null,null,-1)),me=w(()=>v("br",null,null,-1)),ve=w(()=>v("span",{class:"text-red-darken-4"}," Please contact registration for further assistance. ",-1)),fe=P({__name:"EmailLoginForm",props:{variant:{default:()=>d.COMBINED}},setup(h){const L=U(),V=H(),y=o(!0),E=o(!1),R=o(!1),M=o(!1),f=o(""),b=o(""),I=o(!1),c=o({required:e=>!!e||"Required.",min:e=>e.length>=8||"Min 8 characters",email:e=>!!e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Valid email address required"}),n=o(""),u=o(!1),F=new URL(location.href).searchParams.get("token")||"";F!==""&&(y.value=!1,M.value=!0,V.validateAccount(F).then(({tokens:e,user:l})=>{try{q(e,l,L)}catch(m){console.error(m)}}).catch(e=>{n.value=e.ErrorMessage}));const x=()=>(n.value="",!(c.value.required(f.value)!==!0||c.value.email(f.value)!==!0||c.value.required(b.value)!==!0||c.value.min(b.value)!==!0)),$=e=>{if(e.preventDefault(),!x())return;const m=new URL(location.href).searchParams.get("state");u.value=!0,V.oAuthLogin("internal",f.value,b.value,m||"").then(({tokens:z,user:j})=>{q(z,j,L)}).catch(()=>{n.value="Login failed, check credentials or register",u.value=!1})},T=e=>{e.preventDefault(),x()&&(u.value=!0,V.registerAccount(f.value,b.value).then(l=>{y.value=!1,l&&(R.value=!0)}).catch(()=>{n.value="Unable to register, address may be in use",u.value=!1}))},W=()=>{V.requestLoginLink(f.value).then(e=>{y.value=!1,e&&(E.value=!0)}).catch(()=>{n.value="A problem was encountered, please try again",u.value=!1})};return(e,l)=>y.value?(s(),g(X,{key:0,onSubmit:l[3]||(l[3]=Z(()=>{},["stop"])),class:"ma-auto vForm",disabled:u.value},{default:a(()=>[t(C,null,{default:a(()=>[t(_,null,{default:a(()=>[t(B,{margin:"normal",required:"",id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:"",variant:"outlined",modelValue:f.value,"onUpdate:modelValue":l[0]||(l[0]=m=>f.value=m),rules:[c.value.required,c.value.email],clearable:!0},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(C,null,{default:a(()=>[t(_,null,{default:a(()=>[t(B,{margin:"normal",required:"",name:"password",label:"Password",type:I.value?"text":"password",id:"password",autoComplete:"current-password",variant:"outlined",modelValue:b.value,"onUpdate:modelValue":l[1]||(l[1]=m=>b.value=m),"append-icon":I.value?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":l[2]||(l[2]=m=>I.value=!I.value),counter:"",hint:"At least 8 characters",rules:[c.value.required,c.value.min],clearable:!0},null,8,["type","modelValue","append-icon","rules"])]),_:1})]),_:1}),n.value?(s(),g(C,{key:0},{default:a(()=>[t(_,{class:"text-red-darken-1 font-weight-bold"},{default:a(()=>[i(k(n.value),1)]),_:1})]),_:1})):p("",!0),t(C,{justify:"space-between"},{default:a(()=>[e.variant===r(d).COMBINED||e.variant===r(d).REGISTER?(s(),g(_,{key:0,cols:"12",sm:"6"},{default:a(()=>[t(D,{onClick:T,color:"orange-darken-2",disabled:u.value},{default:a(()=>[i(" Register ")]),_:1},8,["disabled"])]),_:1})):p("",!0),e.variant===r(d).COMBINED||e.variant===r(d).LOGIN?(s(),g(_,{key:1,cols:"12",sm:"6"},{default:a(()=>[t(D,{onClick:$,color:"primary",disabled:u.value,type:"submit"},{default:a(()=>[i(" Sign In ")]),_:1},8,["disabled"])]),_:1})):p("",!0),e.variant===r(d).ADD_CREDENTIAL?(s(),g(_,{key:2,cols:"12",sm:"6",class:"flex-grow-0"},{default:a(()=>[t(D,{onClick:T,color:"orange-darken-2",disabled:u.value},{default:a(()=>[i(" Add Email ")]),_:1},8,["disabled"])]),_:1})):p("",!0)]),_:1}),e.variant===r(d).COMBINED||e.variant===r(d).LOGIN?(s(),g(G,{key:1},{default:a(()=>[t(C,null,{default:a(()=>[t(_,null,{default:a(()=>[t(D,{variant:"text",onClick:W},{default:a(()=>[i(k(r(N).buttonForgottenPassword),1)]),_:1})]),_:1})]),_:1})]),_:1})):p("",!0)]),_:1},8,["disabled"])):E.value?(s(),A("p",se,k(r(N).messageResetEmail),1)):R.value?(s(),A("p",re,k(r(N).messageVerifyNewAccountEmail),1)):M.value?(s(),A("p",oe,[i(k(r(N).messageVerifiedNewAccountMessage)+" ",1),n.value?(s(),A(O,{key:0},[ne,ue,v("span",ie,[i(" An error occurred creating account:"),de,i(" "+k(n.value),1)]),ce,me,ve],64)):p("",!0)])):p("",!0)}});const S=J(fe,[["__scopeId","data-v-68dd3ba9"]]),pe=v("h2",null,"Email",-1),Ne=P({__name:"LoginWithEmailView",props:{variant:{default:()=>d.COMBINED}},emits:["pageTitle"],setup(h,{emit:L}){L("pageTitle","Email Login");const V=U();return Y()&&h.variant!=="ADD_CREDENTIAL"&&V.push("/"),(E,R)=>E.variant=="ADD_CREDENTIAL"?(s(),g(G,{key:0,style:{"max-width":"550px"}},{default:a(()=>[t(le,null,{default:a(()=>[t(ee,{class:"text-center"},{default:a(()=>[t(ae,null,{default:a(()=>[i("Add an E-Mail Address")]),_:1})]),_:1}),t(te,null,{default:a(()=>[t(S,{variant:E.variant},null,8,["variant"])]),_:1})]),_:1})]),_:1})):(s(),A(O,{key:1},[pe,t(S,{variant:E.variant},null,8,["variant"])],64))}});export{Ne as default};