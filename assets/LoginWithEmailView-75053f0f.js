import{I as P,a0 as U,r as o,K as s,L as _,M as e,v as t,N as n,O as k,Q as f,S as r,P as Z,R as A,H as O,U as v,$ as H,V as K,W as Q,_ as J}from"./index-a3d4b6d2.js";import{s as N}from"./index-71069b21.js";import{S as B}from"./setupLogin-e4168b5b.js";import{E as u}from"./emailFormVariant-e5e0aad4.js";import{V as p,a as C}from"./VRow-b40759fd.js";import{V as S}from"./VTextField-bb67de36.js";import{V as D}from"./VBtn-77303f98.js";import{j as G}from"./VContainer-b93edaeb.js";import{V as X}from"./VForm-0ca13a7a.js";import{G as Y}from"./userData-fee5e2e3.js";import{b as ee,V as ae,c as te,e as le}from"./VCard-1ae484d4.js";import"./VAvatar-e8cfb064.js";const w=g=>(K("data-v-0036505c"),g=g(),Q(),g),se={key:1,class:"ma-auto text-left"},re={key:2,class:"ma-auto text-left"},oe={key:3,class:"ma-auto text-left"},ne=w(()=>v("br",null,null,-1)),ue=w(()=>v("br",null,null,-1)),ie={class:"text-red-darken-1 font-weight-bold"},de=w(()=>v("br",null,null,-1)),ce=w(()=>v("br",null,null,-1)),me=w(()=>v("br",null,null,-1)),ve=w(()=>v("span",{class:"text-red-darken-4"}," Please contact registration for further assistance. ",-1)),fe=P({__name:"EmailLoginForm",props:{variant:{default:()=>u.COMBINED}},setup(g){const L=U(),y=H(),b=o(!0),h=o(!1),R=o(!1),M=o(!1),V=o(""),E=o(""),I=o(!1),i=o({required:a=>!!a||"Required.",min:a=>a.length>=8||"Min 8 characters",email:a=>!!a.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||"Valid email address required"}),d=o(""),c=o(!1),F=new URL(location.href).searchParams.get("token")||"";F!==""&&(b.value=!1,M.value=!0,y.validateAccount(F).then(({tokens:a,user:l})=>{try{B(a,l,L)}catch(m){console.error(m)}}).catch(a=>{d.value=a.ErrorMessage}));const x=()=>(d.value="",!(i.value.required(V.value)!==!0||i.value.email(V.value)!==!0||i.value.required(E.value)!==!0||i.value.min(E.value)!==!0)),$=a=>{if(a.preventDefault(),!x())return;const m=new URL(location.href).searchParams.get("state");c.value=!0,y.oAuthLogin("internal",V.value,E.value,m||"").then(({tokens:z,user:j})=>{B(z,j,L)}).catch(()=>{d.value="Login failed, check credentials or register",c.value=!1})},T=a=>{a.preventDefault(),x()&&(c.value=!0,y.registerAccount(V.value,E.value).then(l=>{b.value=!1,l&&(R.value=!0)}).catch(()=>{d.value="Unable to register, address may be in use",c.value=!1}))},W=()=>{b.value=!1,h.value=!0};return(a,l)=>b.value?(s(),_(X,{key:0,onSubmit:l[3]||(l[3]=Z(()=>{},["stop"])),class:"ma-auto vForm",disabled:c.value},{default:e(()=>[t(C,null,{default:e(()=>[t(p,null,{default:e(()=>[t(S,{margin:"normal",required:"",id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:"",variant:"outlined",modelValue:V.value,"onUpdate:modelValue":l[0]||(l[0]=m=>V.value=m),rules:[i.value.required,i.value.email],clearable:!0},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(C,null,{default:e(()=>[t(p,null,{default:e(()=>[t(S,{margin:"normal",required:"",name:"password",label:"Password",type:I.value?"text":"password",id:"password",autoComplete:"current-password",variant:"outlined",modelValue:E.value,"onUpdate:modelValue":l[1]||(l[1]=m=>E.value=m),"append-icon":I.value?"mdi:mdi-eye-off":"mdi:mdi-eye","onClick:append":l[2]||(l[2]=m=>I.value=!I.value),counter:"",hint:"At least 8 characters",rules:[i.value.required,i.value.min],clearable:!0},null,8,["type","modelValue","append-icon","rules"])]),_:1})]),_:1}),d.value?(s(),_(C,{key:0},{default:e(()=>[t(p,{class:"text-red-darken-1 font-weight-bold"},{default:e(()=>[n(k(d.value),1)]),_:1})]),_:1})):f("",!0),t(C,{justify:"space-between"},{default:e(()=>[a.variant===r(u).COMBINED||a.variant===r(u).REGISTER?(s(),_(p,{key:0,cols:"12",sm:"6"},{default:e(()=>[t(D,{onClick:T,color:"orange-darken-2",disabled:c.value},{default:e(()=>[n(" Register ")]),_:1},8,["disabled"])]),_:1})):f("",!0),a.variant===r(u).COMBINED||a.variant===r(u).LOGIN?(s(),_(p,{key:1,cols:"12",sm:"6"},{default:e(()=>[t(D,{onClick:$,color:"primary",disabled:c.value,type:"submit"},{default:e(()=>[n(" Sign In ")]),_:1},8,["disabled"])]),_:1})):f("",!0),a.variant===r(u).ADD_CREDENTIAL?(s(),_(p,{key:2,cols:"12",sm:"6",class:"flex-grow-0"},{default:e(()=>[t(D,{onClick:T,color:"orange-darken-2",disabled:c.value},{default:e(()=>[n(" Add Email ")]),_:1},8,["disabled"])]),_:1})):f("",!0)]),_:1}),a.variant===r(u).COMBINED||a.variant===r(u).LOGIN?(s(),_(G,{key:1},{default:e(()=>[t(C,null,{default:e(()=>[t(p,null,{default:e(()=>[t(D,{variant:"text",onClick:W},{default:e(()=>[n(k(r(N).buttonForgottenPassword),1)]),_:1})]),_:1})]),_:1})]),_:1})):f("",!0)]),_:1},8,["disabled"])):h.value?(s(),A("p",se,k(r(N).messageResetEmail),1)):R.value?(s(),A("p",re,k(r(N).messageVerifyNewAccountEmail),1)):M.value?(s(),A("p",oe,[n(k(r(N).messageVerifiedNewAccountMessage)+" ",1),d.value?(s(),A(O,{key:0},[ne,ue,v("span",ie,[n(" An error occurred creating account:"),de,n(" "+k(d.value),1)]),ce,me,ve],64)):f("",!0)])):f("",!0)}});const q=J(fe,[["__scopeId","data-v-0036505c"]]),pe=v("h2",null,"Email",-1),Ne=P({__name:"LoginWithEmailView",props:{variant:{default:()=>u.COMBINED}},emits:["pageTitle"],setup(g,{emit:L}){L("pageTitle","Email Login");const y=U();return Y()&&g.variant!=="ADD_CREDENTIAL"&&y.push("/"),(h,R)=>h.variant=="ADD_CREDENTIAL"?(s(),_(G,{key:0,style:{"max-width":"550px"}},{default:e(()=>[t(le,null,{default:e(()=>[t(ee,{class:"text-center"},{default:e(()=>[t(ae,null,{default:e(()=>[n("Add an E-Mail Address")]),_:1})]),_:1}),t(te,null,{default:e(()=>[t(q,{variant:h.variant},null,8,["variant"])]),_:1})]),_:1})]),_:1})):(s(),A(O,{key:1},[pe,t(q,{variant:h.variant},null,8,["variant"])],64))}});export{Ne as default};
