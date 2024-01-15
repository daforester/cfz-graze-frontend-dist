import{d as ne,T as re}from"./FormRenderer.vue_vue_type_style_index_0_lang-8e6b4db1.js";import{i as ie,V as le,U as se,r as d,c as ue,n as l,B as I,F as k,q as g,v as t,f as o,x as i,Q as K,y as z,A as j,D as h,P as de,E as me}from"./index-11194c4b.js";import{F as ce}from"./form-3a7bf7fd.js";import{G as ve}from"./userData-81072e08.js";import{p as fe}from"./performLoginCheck-7dffceb2.js";import{s as pe}from"./sortSubmissions-4bc1d48e.js";import{c as ge}from"./canEditForm-0574b4b5.js";import{l as he}from"./SaveButton.vue_vue_type_script_setup_true_lang-4d8f433f.js";import{e as F,b as x,V as E,a as A,c as L,d as G}from"./VCard-befc170e.js";import{V as U}from"./scopeId-8366a0a7.js";import{V as S}from"./VBtn-22fc051a.js";import{a as Q}from"./VContainer-914ec839.js";import{V as W,a as H,c as X}from"./VList-fa3ff560.js";const _e={class:"formView"},ye=h("strong",null,"These ticket options will be removed",-1),Ie=h("br",null,null,-1),Te=h("strong",null,"These ticket options will be added",-1),ke=h("p",null,[i(" If you do not wish to attend for the same days please "),h("span",{class:"text-red-darken-1 font-weight-bold"},"reject"),i(" this join request. ")],-1),Ue=h("p",null,[i(" If you wish to adjust your choices to match the group leader's please "),h("span",{class:"text-green font-weight-bold"},"accept"),i(" this join request. ")],-1),Ne=ie({__name:"FormView",props:{formType:{default:"REGISTRATION"}},emits:["pageTitle"],setup(N,{emit:B}){const Z=le(),C=se(),m=de(),_=me.getInstance(),f=d(),s=d(),P=d(),p=d(),q=d(),ee=ue(()=>{var n;if(s.value!==void 0){const r=s.value;return ge([r],((n=q.value)==null?void 0:n.Submissions)||[],r.Type)}return!1}),b=d(!1),y=ve(),T=d(!0),J=d(""),u=d(),V=d(!0),O=(n,r=!1)=>{const e=()=>{const a=sessionStorage.getItem("ajt_attempt");let c=he.parseInt(a||"0");c<2?(sessionStorage.setItem("ajt_attempt",(c+1).toString()),setTimeout(()=>{location.reload()},1e3)):(V.value=!1,sessionStorage.removeItem("ajt_attempt"),localStorage.removeItem("ajt_token"),J.value="Invalid Token")};m.validateRegistrationInviteToken(w,r).then(a=>{a?(u.value=a,V.value=!1,sessionStorage.removeItem("ajt_attempt"),localStorage.removeItem("ajt_token")):e()}).catch(()=>{e()})},w=new URL(location.href).searchParams.get("token")||"";w!==""?(localStorage.setItem("ajt_token",location.href),O()):(V.value=!1,T.value=!1);const te=()=>{O(w,!0)},oe=()=>{T.value=!1,_.emit("registration.group.join")},ae=()=>{C.push("/")},M=n=>n.Type===re.TICKET_TYPE_TICKET?n.RequiresAccommodation?"mdi:mdi-home":"mdi:mdi-ticket":n.RequiresAccommodation?"mdi:mdi-home-plus":"mdi:mdi-ticket-confirmation";fe(C);const D=n=>new Promise((r,e)=>{m.getConventionRegistrationGroup(n).then(a=>{a?(p.value=a,r(a)):e()}).catch(()=>{e()}),m.getRegistrationByConvention(n).then(a=>{a.Submissions.forEach((c,v)=>{var R;c.Form||(a.Submissions[v].Form=((R=s.value)==null?void 0:R.FormUUID)===c.FormUUID?c.Form:void 0)}),pe(a.Submissions),q.value=a})}),Y=()=>new Promise((n,r)=>{m.getConvention(Z.params.convention.toString()).then(e=>{e?(f.value=e,D(e.ConventionUUID),m.getAvailableConventionExtras(e.ConventionUUID||"",!0).then(a=>(f.value||{Extras:[]}).Extras=a),m.getAvailableConventionForms(e.ConventionUUID||"",!0).then(a=>{var c;s.value=a.find(v=>v.Type===N.formType.toUpperCase()),!s.value&&N.formType.toUpperCase()=="ADDITIONAL"&&(s.value=a.find(v=>v.Type===ce.FORM_TYPE_ADDITIONAL)),s.value?(y!=null&&y.UserUUID&&e.ConventionUUID&&m.getUserConventionSubmissions((y==null?void 0:y.UserUUID)||"",e.ConventionUUID||"").then(v=>{v&&(P.value=v.find(R=>{var $;return R.FormUUID===(($=s.value)==null?void 0:$.FormUUID)})),b.value=!0}).catch(()=>{b.value=!0}),B("pageTitle",`Convention Registration - ${((c=f.value)==null?void 0:c.Name)||"New Convention"}`)):w||C.push("/")}),n(e)):r()}).catch(()=>{r()})});return Y(),B("pageTitle","Convention Registration"),_.on("registration.group.leave",()=>{var n;m.leaveRegistrationGroup(((n=p.value)==null?void 0:n.Registration.RegistrationUUID)||"").then(r=>{var e;r&&D(((e=p.value)==null?void 0:e.Registration.ConventionUUID)||"").then(a=>{_.emit("registration.group.left",a)})})}),_.on("registration.group.join",()=>{var n;D(((n=f.value)==null?void 0:n.ConventionUUID)||"").then(()=>{Y().then(()=>{(!b.value||!s.value||!f.value||!p.value)&&C.push("/")})})}),_.on("registration.group.remove.member",n=>{m.leaveRegistrationGroup(n).then(r=>{var e;r&&D(((e=p.value)==null?void 0:e.Registration.ConventionUUID)||"").then(a=>{_.emit("registration.group.left",a)})})}),(n,r)=>(l(),I("div",_e,[V.value?(l(),I(k,{key:0},[],64)):J.value?(l(),g(Q,{key:1},{default:t(()=>[o(F,null,{default:t(()=>[o(x,null,{default:t(()=>[o(E,null,{default:t(()=>[i(" Failed to join group ")]),_:1}),o(A,{class:"text-wrap"},{default:t(()=>[i(" You have not been able to join the group. ")]),_:1})]),_:1}),o(L,null,{default:t(()=>[i(" The link may have expired or already been used, request a new link from your group's leader. ")]),_:1}),o(G,null,{default:t(()=>[o(U),o(S,{color:"error",variant:"elevated",onClick:ae},{default:t(()=>[i("Okay")]),_:1}),o(U)]),_:1})]),_:1})]),_:1})):T.value&&u.value?(l(),g(Q,{key:2},{default:t(()=>[u.value.Match?(l(),g(F,{key:0},{default:t(()=>[o(x,null,{default:t(()=>[o(E,null,{default:t(()=>[i(" Joined Group ")]),_:1}),o(A,{class:"text-wrap"},{default:t(()=>[i(" You have successfully linked your registration. The leader of your group will be responsible for deciding on your accommodation and days you're attending. If you are not happy with this you can leave the group and ask them to join you. Alternatively, if you're unable to agree on options you will need to find a different partner. ")]),_:1})]),_:1}),o(L,null,{default:t(()=>[i(" Your accommodation and ticket options that require accommodation will now be controlled by your group leader. ")]),_:1}),o(G,null,{default:t(()=>[o(U),o(S,{color:"error",variant:"elevated",onClick:oe},{default:t(()=>[i("Okay")]),_:1}),o(U)]),_:1})]),_:1})):(l(),g(F,{key:1},{default:t(()=>[o(x,null,{default:t(()=>[o(E,null,{default:t(()=>[i(" Join Group - Warning ")]),_:1}),o(A,{class:"text-wrap"},{default:t(()=>[i(" The leader of the sharing group you're joining has selected different ticket options for the accommodation. ")]),_:1})]),_:1}),o(L,null,{default:t(()=>[u.value&&u.value.MemberTickets.length?(l(),I(k,{key:0},[ye,Ie,o(W,null,{default:t(()=>[(l(!0),I(k,null,K(u.value.MemberTickets,e=>(l(),g(H,{key:e.TicketUUID,"prepend-icon":M(e)},{default:t(()=>[o(X,null,{default:t(()=>[i(z(e.Name),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})],64)):j("",!0),u.value&&u.value.LeaderTickets.length?(l(),I(k,{key:1},[Te,o(W,null,{default:t(()=>[(l(!0),I(k,null,K(u.value.LeaderTickets,e=>(l(),g(H,{key:e.TicketUUID,"prepend-icon":M(e)},{default:t(()=>[o(X,null,{default:t(()=>[i(z(e.Name),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})],64)):j("",!0),ke,Ue]),_:1}),o(G,null,{default:t(()=>[o(S,{color:"error",variant:"elevated",onClick:r[0]||(r[0]=e=>T.value=!1)},{default:t(()=>[i("Reject")]),_:1}),o(U),o(S,{color:"success",variant:"elevated",onClick:te},{default:t(()=>[i("Accept")]),_:1})]),_:1})]),_:1}))]),_:1})):(!T.value||!u.value)&&b.value&&s.value&&f.value&&p.value?(l(),g(ne,{key:3,modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=e=>s.value=e),convention:f.value,data:P.value,editable:ee.value,"registration-group":p.value},null,8,["modelValue","convention","data","editable","registration-group"])):j("",!0)]))}});export{Ne as _};