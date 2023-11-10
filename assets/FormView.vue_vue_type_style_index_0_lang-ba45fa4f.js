import{d as ne,T as re}from"./FormRenderer.vue_vue_type_style_index_0_lang-3eebd1cd.js";import{I as le,a7 as ie,a6 as se,r as d,e as ue,M as i,V as I,H as k,N as g,O as t,v as o,P as l,a4 as K,Q as z,S as j,X as h,a3 as de,U as ce}from"./index-4ff65b9c.js";import{F as me}from"./form-29fd1dbb.js";import{G as ve}from"./userData-fa5149d5.js";import{p as pe}from"./performLoginCheck-2564c6bc.js";import{s as fe}from"./sortSubmissions-8ed80f07.js";import{c as ge}from"./canEditForm-0574b4b5.js";import{l as he}from"./SaveButton.vue_vue_type_script_setup_true_lang-d163c39c.js";import{e as x,b as F,V as E,a as A,c as L,d as N}from"./VCard-5c6ae364.js";import{V as U}from"./scopeId-98a14222.js";import{V as S}from"./VBtn-bf9a91a4.js";import{j as H}from"./VContainer-71dc89c5.js";import{V as Q,a as W,c as X}from"./VList-7455e8f7.js";const _e={class:"formView"},ye=h("strong",null,"These ticket options will be removed",-1),Ie=h("br",null,null,-1),Te=h("strong",null,"These ticket options will be added",-1),ke=h("p",null,[l(" If you do not wish to attend for the same days please "),h("span",{class:"text-red-darken-1 font-weight-bold"},"reject"),l(" this join request. ")],-1),Ue=h("p",null,[l(" If you wish to adjust your choices to match the group leader's please "),h("span",{class:"text-green font-weight-bold"},"accept"),l(" this join request. ")],-1),Ge=le({__name:"FormView",props:{formType:{default:"REGISTRATION"}},emits:["pageTitle"],setup(G,{emit:P}){const Z=ie(),C=se(),c=de(),_=ce.getInstance(),p=d(),s=d(),B=d(),f=d(),O=d(),ee=ue(()=>{var n;if(s.value!==void 0){const r=s.value;return ge([r],((n=O.value)==null?void 0:n.Submissions)||[],r.Type)}return!1}),b=d(!1),y=ve(),T=d(!0),q=d(""),u=d(),V=d(!0),J=(n,r=!1)=>{const e=()=>{const a=sessionStorage.getItem("ajt_attempt");let m=he.parseInt(a||"0");m<2?(console.log("next attempt"),sessionStorage.setItem("ajt_attempt",(m+1).toString()),setTimeout(()=>{location.reload()},1e3)):(console.log("given up"),V.value=!1,sessionStorage.removeItem("ajt_attempt"),localStorage.removeItem("ajt_token"),q.value="Invalid Token")};c.validateRegistrationInviteToken(w,r).then(a=>{a?(console.log("success"),u.value=a,V.value=!1,sessionStorage.removeItem("ajt_attempt"),localStorage.removeItem("ajt_token")):(console.log("error"),e())}).catch(()=>{console.log("real error"),e()})},w=new URL(location.href).searchParams.get("token")||"";w!==""?(localStorage.setItem("ajt_token",location.href),J()):(V.value=!1,T.value=!1);const te=()=>{J(w,!0)},oe=()=>{T.value=!1,_.emit("registration.group.join")},ae=()=>{C.push("/")},M=n=>n.Type===re.TICKET_TYPE_TICKET?n.RequiresAccommodation?"mdi:mdi-home":"mdi:mdi-ticket":n.RequiresAccommodation?"mdi:mdi-home-plus":"mdi:mdi-ticket-confirmation";pe(C);const D=n=>new Promise((r,e)=>{c.getConventionRegistrationGroup(n).then(a=>{a?(f.value=a,r(a)):e()}).catch(()=>{e()}),c.getRegistrationByConvention(n).then(a=>{a.Submissions.forEach((m,v)=>{var R;m.Form||(a.Submissions[v].Form=((R=s.value)==null?void 0:R.FormUUID)===m.FormUUID?m.Form:void 0)}),fe(a.Submissions),O.value=a})}),Y=()=>new Promise((n,r)=>{c.getConvention(Z.params.convention.toString()).then(e=>{e?(p.value=e,D(e.ConventionUUID),c.getAvailableConventionExtras(e.ConventionUUID||"",!0).then(a=>(p.value||{Extras:[]}).Extras=a),c.getAvailableConventionForms(e.ConventionUUID||"",!0).then(a=>{var m;s.value=a.find(v=>v.Type===G.formType.toUpperCase()),!s.value&&G.formType.toUpperCase()=="ADDITIONAL"&&(s.value=a.find(v=>v.Type===me.FORM_TYPE_ADDITIONAL)),s.value?(y!=null&&y.UserUUID&&e.ConventionUUID&&c.getUserConventionSubmissions((y==null?void 0:y.UserUUID)||"",e.ConventionUUID||"").then(v=>{v&&(B.value=v.find(R=>{var $;return R.FormUUID===(($=s.value)==null?void 0:$.FormUUID)})),b.value=!0}).catch(()=>{b.value=!0}),P("pageTitle",`Convention Registration - ${((m=p.value)==null?void 0:m.Name)||"New Convention"}`)):w||C.push("/")}),n(e)):r()}).catch(()=>{r()})});return Y(),P("pageTitle","Convention Registration"),_.on("registration.group.leave",()=>{var n;c.leaveRegistrationGroup(((n=f.value)==null?void 0:n.Registration.RegistrationUUID)||"").then(r=>{var e;r&&D(((e=f.value)==null?void 0:e.Registration.ConventionUUID)||"").then(a=>{_.emit("registration.group.left",a)})})}),_.on("registration.group.join",()=>{var n;D(((n=p.value)==null?void 0:n.ConventionUUID)||"").then(()=>{Y().then(()=>{(!b.value||!s.value||!p.value||!f.value)&&C.push("/")})})}),_.on("registration.group.remove.member",n=>{c.leaveRegistrationGroup(n).then(r=>{var e;r&&D(((e=f.value)==null?void 0:e.Registration.ConventionUUID)||"").then(a=>{_.emit("registration.group.left",a)})})}),(n,r)=>(i(),I("div",_e,[V.value?(i(),I(k,{key:0},[],64)):q.value?(i(),g(H,{key:1},{default:t(()=>[o(x,null,{default:t(()=>[o(F,null,{default:t(()=>[o(E,null,{default:t(()=>[l(" Failed to join group ")]),_:1}),o(A,{class:"text-wrap"},{default:t(()=>[l(" You have not been able to join the group. ")]),_:1})]),_:1}),o(L,null,{default:t(()=>[l(" The link may have expired or already been used, request a new link from your group's leader. ")]),_:1}),o(N,null,{default:t(()=>[o(U),o(S,{color:"error",variant:"elevated",onClick:ae},{default:t(()=>[l("Okay")]),_:1}),o(U)]),_:1})]),_:1})]),_:1})):T.value&&u.value?(i(),g(H,{key:2},{default:t(()=>[u.value.Match?(i(),g(x,{key:0},{default:t(()=>[o(F,null,{default:t(()=>[o(E,null,{default:t(()=>[l(" Joined Group ")]),_:1}),o(A,{class:"text-wrap"},{default:t(()=>[l(" You have successfully linked your registration. The leader of your group will be responsible for deciding on your accommodation and days you're attending. If you are not happy with this you can leave the group and ask them to join you. Alternatively, if you're unable to agree on options you will need to find a different partner. ")]),_:1})]),_:1}),o(L,null,{default:t(()=>[l(" Your accommodation and ticket options that require accommodation will now be controlled by your group leader. ")]),_:1}),o(N,null,{default:t(()=>[o(U),o(S,{color:"error",variant:"elevated",onClick:oe},{default:t(()=>[l("Okay")]),_:1}),o(U)]),_:1})]),_:1})):(i(),g(x,{key:1},{default:t(()=>[o(F,null,{default:t(()=>[o(E,null,{default:t(()=>[l(" Join Group - Warning ")]),_:1}),o(A,{class:"text-wrap"},{default:t(()=>[l(" The leader of the sharing group you're joining has selected different ticket options for the accommodation. ")]),_:1})]),_:1}),o(L,null,{default:t(()=>[u.value&&u.value.MemberTickets.length?(i(),I(k,{key:0},[ye,Ie,o(Q,null,{default:t(()=>[(i(!0),I(k,null,K(u.value.MemberTickets,e=>(i(),g(W,{key:e.TicketUUID,"prepend-icon":M(e)},{default:t(()=>[o(X,null,{default:t(()=>[l(z(e.Name),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})],64)):j("",!0),u.value&&u.value.LeaderTickets.length?(i(),I(k,{key:1},[Te,o(Q,null,{default:t(()=>[(i(!0),I(k,null,K(u.value.LeaderTickets,e=>(i(),g(W,{key:e.TicketUUID,"prepend-icon":M(e)},{default:t(()=>[o(X,null,{default:t(()=>[l(z(e.Name),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})],64)):j("",!0),ke,Ue]),_:1}),o(N,null,{default:t(()=>[o(S,{color:"error",variant:"elevated",onClick:r[0]||(r[0]=e=>T.value=!1)},{default:t(()=>[l("Reject")]),_:1}),o(U),o(S,{color:"success",variant:"elevated",onClick:te},{default:t(()=>[l("Accept")]),_:1})]),_:1})]),_:1}))]),_:1})):(!T.value||!u.value)&&b.value&&s.value&&p.value&&f.value?(i(),g(ne,{key:3,modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=e=>s.value=e),convention:p.value,data:B.value,editable:ee.value,"registration-group":f.value},null,8,["modelValue","convention","data","editable","registration-group"])):j("",!0)]))}});export{Ge as _};
