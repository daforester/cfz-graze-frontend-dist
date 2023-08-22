import{d as ne,T as re}from"./FormRenderer.vue_vue_type_style_index_0_lang-f233df7e.js";import{I as ie,a4 as le,a0 as se,r as d,e as ue,K as l,R as U,H as I,L as g,M as t,v as o,N as i,Z as K,O as z,Q as F,U as h,$ as de,Y as me}from"./index-5caf7fc8.js";import{F as ce}from"./form-e2a93b7c.js";import{G as ve}from"./userData-6bfa3a60.js";import{p as fe}from"./performLoginCheck-163a6539.js";import{s as pe}from"./sortSubmissions-ed9e4490.js";import{c as ge}from"./canEditForm-52ba80b9.js";import{l as he}from"./VChip-83fc5961.js";import{e as x,b as S,V as j,a as L,c as N,d as A}from"./VCard-a8f9de0d.js";import{V as k}from"./VSpacer-af983f33.js";import{V as E}from"./VBtn-7f5c5dc2.js";import{j as H}from"./VContainer-c5e5ef57.js";import{V as Q,a as W,d as Z}from"./VList-b21dcb64.js";const _e={class:"formView"},ye=h("strong",null,"These ticket options will be removed",-1),Ue=h("br",null,null,-1),Te=h("strong",null,"These ticket options will be added",-1),Ie=h("p",null,[i(" If you do not wish to attend for the same days please "),h("span",{class:"text-red-darken-1 font-weight-bold"},"reject"),i(" this join request. ")],-1),ke=h("p",null,[i(" If you wish to adjust your choices to match the group leader's please "),h("span",{class:"text-green font-weight-bold"},"accept"),i(" this join request. ")],-1),Ge=ie({__name:"FormView",props:{formType:{default:"REGISTRATION"}},emits:["pageTitle"],setup(G,{emit:P}){const X=le(),C=se(),m=de(),_=me.getInstance(),f=d(),s=d(),B=d(),p=d(),q=d(),ee=ue(()=>{var n;if(s.value!==void 0){const r=s.value;return ge([r],((n=q.value)==null?void 0:n.Submissions)||[],r.Type)}return!1}),b=d(!1),y=ve(),T=d(!0),J=d(""),u=d(),V=d(!0),M=(n,r=!1)=>{const e=()=>{const a=sessionStorage.getItem("ajt_attempt");let c=he.parseInt(a||"0");c<2?(sessionStorage.setItem("ajt_attempt",(c+1).toString()),setTimeout(()=>{location.reload()},1e3)):(V.value=!1,sessionStorage.removeItem("ajt_attempt"),J.value="Invalid Token")};m.validateRegistrationInviteToken(w,r).then(a=>{a?(u.value=a,V.value=!1):e()}).catch(()=>{e()})},w=new URL(location.href).searchParams.get("token")||"";w!==""?M():(V.value=!1,T.value=!1);const te=()=>{M(w,!0)},oe=()=>{T.value=!1,_.emit("registration.group.join")},ae=()=>{C.push("/")},O=n=>n.Type===re.TICKET_TYPE_TICKET?n.RequiresAccommodation?"mdi:mdi-home":"mdi:mdi-ticket":n.RequiresAccommodation?"mdi:mdi-home-plus":"mdi:mdi-ticket-confirmation";fe(C);const R=n=>new Promise((r,e)=>{m.getConventionRegistrationGroup(n).then(a=>{a?(p.value=a,r(a)):e()}).catch(()=>{e()}),m.getRegistrationByConvention(n).then(a=>{a.Submissions.forEach((c,v)=>{var D;c.Form||(a.Submissions[v].Form=((D=s.value)==null?void 0:D.FormUUID)===c.FormUUID?c.Form:void 0)}),pe(a.Submissions),q.value=a})}),Y=()=>new Promise((n,r)=>{m.getConvention(X.params.convention.toString()).then(e=>{e?(f.value=e,R(e.ConventionUUID),m.getAvailableConventionExtras(e.ConventionUUID||"",!0).then(a=>(f.value||{Extras:[]}).Extras=a),m.getAvailableConventionForms(e.ConventionUUID||"",!0).then(a=>{var c;s.value=a.find(v=>v.Type===G.formType.toUpperCase()),!s.value&&G.formType.toUpperCase()=="ADDITIONAL"&&(s.value=a.find(v=>v.Type===ce.FORM_TYPE_UNSPECIFIED)),s.value?(y!=null&&y.UserUUID&&e.ConventionUUID&&m.getUserConventionSubmissions((y==null?void 0:y.UserUUID)||"",e.ConventionUUID||"").then(v=>{v&&(B.value=v.find(D=>{var $;return D.FormUUID===(($=s.value)==null?void 0:$.FormUUID)})),b.value=!0}).catch(()=>{b.value=!0}),P("pageTitle",`Convention Registration - ${((c=f.value)==null?void 0:c.Name)||"New Convention"}`)):w||C.push("/")}),n(e)):r()}).catch(()=>{r()})});return Y(),P("pageTitle","Convention Registration"),_.on("registration.group.leave",()=>{var n;m.leaveRegistrationGroup(((n=p.value)==null?void 0:n.Registration.RegistrationUUID)||"").then(r=>{var e;r&&R(((e=p.value)==null?void 0:e.Registration.ConventionUUID)||"").then(a=>{_.emit("registration.group.left",a)})})}),_.on("registration.group.join",()=>{var n;R(((n=f.value)==null?void 0:n.ConventionUUID)||"").then(()=>{Y().then(()=>{(!b.value||!s.value||!f.value||!p.value)&&C.push("/")})})}),_.on("registration.group.remove.member",n=>{m.leaveRegistrationGroup(n).then(r=>{var e;r&&R(((e=p.value)==null?void 0:e.Registration.ConventionUUID)||"").then(a=>{_.emit("registration.group.left",a)})})}),(n,r)=>(l(),U("div",_e,[V.value?(l(),U(I,{key:0},[],64)):J.value?(l(),g(H,{key:1},{default:t(()=>[o(x,null,{default:t(()=>[o(S,null,{default:t(()=>[o(j,null,{default:t(()=>[i(" Failed to join group ")]),_:1}),o(L,{class:"text-wrap"},{default:t(()=>[i(" You have not been able to join the group. ")]),_:1})]),_:1}),o(N,null,{default:t(()=>[i(" The link may have expired or already been used, request a new link from your group's leader. ")]),_:1}),o(A,null,{default:t(()=>[o(k),o(E,{color:"error",variant:"elevated",onClick:ae},{default:t(()=>[i("Okay")]),_:1}),o(k)]),_:1})]),_:1})]),_:1})):T.value&&u.value?(l(),g(H,{key:2},{default:t(()=>[u.value.Match?(l(),g(x,{key:0},{default:t(()=>[o(S,null,{default:t(()=>[o(j,null,{default:t(()=>[i(" Joined Group ")]),_:1}),o(L,{class:"text-wrap"},{default:t(()=>[i(" You have successfully linked your registration. The leader of your group will be responsible for deciding on your accommodation and days you're attending. If you are not happy with this you can leave the group and ask them to join you. Alternatively, if you're unable to agree on options you will need to find a different partner. ")]),_:1})]),_:1}),o(N,null,{default:t(()=>[i(" Your accommodation and ticket options that require accommodation will now be controlled by your group leader. ")]),_:1}),o(A,null,{default:t(()=>[o(k),o(E,{color:"error",variant:"elevated",onClick:oe},{default:t(()=>[i("Okay")]),_:1}),o(k)]),_:1})]),_:1})):(l(),g(x,{key:1},{default:t(()=>[o(S,null,{default:t(()=>[o(j,null,{default:t(()=>[i(" Join Group - Warning ")]),_:1}),o(L,{class:"text-wrap"},{default:t(()=>[i(" The leader of the sharing group you're joining has selected different ticket options for the accommodation. ")]),_:1})]),_:1}),o(N,null,{default:t(()=>[u.value&&u.value.MemberTickets.length?(l(),U(I,{key:0},[ye,Ue,o(Q,null,{default:t(()=>[(l(!0),U(I,null,K(u.value.MemberTickets,e=>(l(),g(W,{key:e.TicketUUID,"prepend-icon":O(e)},{default:t(()=>[o(Z,null,{default:t(()=>[i(z(e.Name),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})],64)):F("",!0),u.value&&u.value.LeaderTickets.length?(l(),U(I,{key:1},[Te,o(Q,null,{default:t(()=>[(l(!0),U(I,null,K(u.value.LeaderTickets,e=>(l(),g(W,{key:e.TicketUUID,"prepend-icon":O(e)},{default:t(()=>[o(Z,null,{default:t(()=>[i(z(e.Name),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})],64)):F("",!0),Ie,ke]),_:1}),o(A,null,{default:t(()=>[o(E,{color:"error",variant:"elevated",onClick:r[0]||(r[0]=e=>T.value=!1)},{default:t(()=>[i("Reject")]),_:1}),o(k),o(E,{color:"success",variant:"elevated",onClick:te},{default:t(()=>[i("Accept")]),_:1})]),_:1})]),_:1}))]),_:1})):(!T.value||!u.value)&&b.value&&s.value&&f.value&&p.value?(l(),g(ne,{key:3,modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=e=>s.value=e),convention:f.value,data:B.value,editable:ee.value,"registration-group":p.value},null,8,["modelValue","convention","data","editable","registration-group"])):F("",!0)]))}});export{Ge as _};
