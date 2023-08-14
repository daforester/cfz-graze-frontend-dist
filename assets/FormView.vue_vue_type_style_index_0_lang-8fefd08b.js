import{c as oe}from"./FormRenderer.vue_vue_type_style_index_0_lang-9963ab9b.js";import{I as ne,a4 as ae,a0 as ie,r as c,e as re,K as l,R as U,L as m,M as e,v as t,N as i,H as I,Z as O,O as P,Q as D,U as f,$ as le,Y as se}from"./index-a3d4b6d2.js";import{T as ue}from"./filter-4ae901bc.js";import{G as de}from"./userData-fee5e2e3.js";import{p as ce}from"./performLoginCheck-e63f72de.js";import{c as me,s as fe}from"./sortSubmissions-34c92728.js";import{e as x,b as F,V as j,a as E,c as G,d as L}from"./VCard-1ae484d4.js";import{V as k}from"./VSpacer-7147092a.js";import{V as b}from"./VBtn-77303f98.js";import{j as $}from"./VContainer-b93edaeb.js";import{V as K,a as z,e as H}from"./VList-0d5d9b70.js";const ve={class:"formView"},pe=f("strong",null,"These ticket options will be removed",-1),ge=f("br",null,null,-1),he=f("strong",null,"These ticket options will be added",-1),_e=f("p",null,[i(" If you do not wish to attend for the same days please "),f("span",{class:"text-red-darken-1 font-weight-bold"},"reject"),i(" this join request. ")],-1),ye=f("p",null,[i(" If you wish to adjust your choices to match the group leader's please "),f("span",{class:"text-green font-weight-bold"},"accept"),i(" this join request. ")],-1),je=ne({__name:"FormView",props:{formType:{default:"REGISTRATION"}},emits:["pageTitle"],setup(Q,{emit:S}){const W=ae(),V=ie(),u=le(),v=se.getInstance(),p=c(),d=c(),N=c(),g=c(),A=c(),Z=re(()=>{var o;if(d.value!==void 0){const a=d.value;return me([a],((o=A.value)==null?void 0:o.Submissions)||[],a.Type)}return!1}),w=c(!1),h=de(),_=c(!0),B=c(""),s=c(),q=(o,a=!1)=>{u.validateRegistrationInviteToken(R,a).then(n=>{n&&(s.value=n)}).catch(()=>{B.value="Invalid Token"})},R=new URL(location.href).searchParams.get("token")||"";R!==""?q():_.value=!1;const X=()=>{q(R,!0)},ee=()=>{_.value=!1,v.emit("registration.group.join")},te=()=>{V.push("/")},J=o=>o.Type===ue.TICKET_TYPE_TICKET?o.RequiresAccommodation?"mdi:mdi-home":"mdi:mdi-ticket":o.RequiresAccommodation?"mdi:mdi-home-plus":"mdi:mdi-ticket-confirmation";ce(V);const T=o=>new Promise((a,n)=>{u.getConventionRegistrationGroup(o).then(r=>{r?(g.value=r,a(r)):n()}).catch(()=>{n()}),u.getRegistrationByConvention(o).then(r=>{r.Submissions.forEach((y,C)=>{var Y;y.Form||(r.Submissions[C].Form=((Y=d.value)==null?void 0:Y.FormUUID)===y.FormUUID?y.Form:void 0)}),fe(r.Submissions),A.value=r})}),M=()=>{u.getConvention(W.params.convention.toString()).then(o=>{o&&(p.value=o,T(o.ConventionUUID),u.getConventionExtras(o.ConventionUUID||"").then(a=>(p.value||{Extras:[]}).Extras=a),u.getAvailableConventionForms(o.ConventionUUID||"",!0).then(a=>{var n;d.value=a.find(r=>r.Type===Q.formType.toUpperCase()),d.value?(h!=null&&h.UserUUID&&o.ConventionUUID&&u.getUserConventionSubmissions((h==null?void 0:h.UserUUID)||"",o.ConventionUUID||"").then(r=>{r&&(N.value=r.find(y=>{var C;return y.FormUUID===((C=d.value)==null?void 0:C.FormUUID)})),w.value=!0}).catch(()=>{w.value=!0}),S("pageTitle",`Convention Registration - ${((n=p.value)==null?void 0:n.Name)||"New Convention"}`)):V.push("/")}))})};return M(),S("pageTitle","Convention Registration"),v.on("registration.group.leave",()=>{var o;u.leaveRegistrationGroup(((o=g.value)==null?void 0:o.Registration.RegistrationUUID)||"").then(a=>{var n;a&&T(((n=g.value)==null?void 0:n.Registration.ConventionUUID)||"").then(r=>{v.emit("registration.group.left",r)})})}),v.on("registration.group.join",()=>{var o;T(((o=p.value)==null?void 0:o.ConventionUUID)||""),M()}),v.on("registration.group.remove.member",o=>{u.leaveRegistrationGroup(o).then(a=>{var n;a&&T(((n=g.value)==null?void 0:n.Registration.ConventionUUID)||"").then(r=>{v.emit("registration.group.left",r)})})}),(o,a)=>(l(),U("div",ve,[B.value?(l(),m($,{key:0},{default:e(()=>[t(x,null,{default:e(()=>[t(F,null,{default:e(()=>[t(j,null,{default:e(()=>[i(" Failed to join group ")]),_:1}),t(E,{class:"text-wrap"},{default:e(()=>[i(" You have not been able to join the group. ")]),_:1})]),_:1}),t(G,null,{default:e(()=>[i(" The link may have expired or already been used, request a new link from your group's leader. ")]),_:1}),t(L,null,{default:e(()=>[t(k),t(b,{color:"error",variant:"elevated",onClick:te},{default:e(()=>[i("Okay")]),_:1}),t(k)]),_:1})]),_:1})]),_:1})):_.value&&s.value?(l(),m($,{key:1},{default:e(()=>[s.value.Match?(l(),m(x,{key:0},{default:e(()=>[t(F,null,{default:e(()=>[t(j,null,{default:e(()=>[i(" Joined Group ")]),_:1}),t(E,{class:"text-wrap"},{default:e(()=>[i(" You have successfully linked your registration. The leader of your group will be responsible for deciding on your accommodation and days you're attending. If you are not happy with this you can leave the group and ask them to join you. Alternatively, if you're unable to agree on options you will need to find a different partner. ")]),_:1})]),_:1}),t(G,null,{default:e(()=>[i(" Your accommodation and ticket options that require accommodation will now be controlled by your group leader. ")]),_:1}),t(L,null,{default:e(()=>[t(k),t(b,{color:"error",variant:"elevated",onClick:ee},{default:e(()=>[i("Okay")]),_:1}),t(k)]),_:1})]),_:1})):(l(),m(x,{key:1},{default:e(()=>[t(F,null,{default:e(()=>[t(j,null,{default:e(()=>[i(" Join Group - Warning ")]),_:1}),t(E,{class:"text-wrap"},{default:e(()=>[i(" The leader of the sharing group you're joining has selected different ticket options for the accommodation. ")]),_:1})]),_:1}),t(G,null,{default:e(()=>[s.value&&s.value.MemberTickets.length?(l(),U(I,{key:0},[pe,ge,t(K,null,{default:e(()=>[(l(!0),U(I,null,O(s.value.MemberTickets,n=>(l(),m(z,{key:n.TicketUUID,"prepend-icon":J(n)},{default:e(()=>[t(H,null,{default:e(()=>[i(P(n.Name),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})],64)):D("",!0),s.value&&s.value.LeaderTickets.length?(l(),U(I,{key:1},[he,t(K,null,{default:e(()=>[(l(!0),U(I,null,O(s.value.LeaderTickets,n=>(l(),m(z,{key:n.TicketUUID,"prepend-icon":J(n)},{default:e(()=>[t(H,null,{default:e(()=>[i(P(n.Name),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})],64)):D("",!0),_e,ye]),_:1}),t(L,null,{default:e(()=>[t(b,{color:"error",variant:"elevated",onClick:a[0]||(a[0]=n=>_.value=!1)},{default:e(()=>[i("Reject")]),_:1}),t(k),t(b,{color:"success",variant:"elevated",onClick:X},{default:e(()=>[i("Accept")]),_:1})]),_:1})]),_:1}))]),_:1})):(!_.value||!s.value)&&w.value&&d.value&&p.value&&g.value?(l(),m(oe,{key:2,modelValue:d.value,"onUpdate:modelValue":a[1]||(a[1]=n=>d.value=n),convention:p.value,data:N.value,editable:Z.value,"registration-group":g.value},null,8,["modelValue","convention","data","editable","registration-group"])):D("",!0)]))}});export{je as _};
