import{m as h,u as $,n as F,A as J,_ as G}from"./useTokenManager--6o1YjKg.js";import{i as N,r as n,b as q,B as x,q as V,A as D,v as a,F as z,P as j,E as H,V as K,U as Y,n as f,f as o,x as m,y as Q,C as W}from"./index-vmJxP_6S.js";import{b as X}from"./SaveButton.vue_vue_type_script_setup_true_lang-mSEP4kJQ.js";import{c as I,V as A,n as Z}from"./VContainer-t53E0iNm.js";import{V as E,a as w,b as L,c as M,d as ee,e as O}from"./VCard-LfBsJpuf.js";import{a as te,V as ae}from"./VRow-3KgN8ntv.js";import{a as oe}from"./VTable-6OZOJ8dh.js";import"./useModel-YLOl1EDr.js";import"./ModelDialog.vue_vue_type_script_setup_true_lang-Di9kriF_.js";import"./forwardRefs-rAl81hJl.js";import"./VDialog-vjY7KnLn.js";import"./scopeId-OG0EVUxA.js";import"./createSimpleFunctional-KWKnP6dU.js";import"./VToolbar-FDDZHYhu.js";import"./date-1rFCglLs.js";import"./VList-5uZNI1Dk.js";import"./VDivider-jh7u8vON.js";import"./VAutocomplete-vQpvfPmZ.js";import"./VTextField-Xxtu1DqP.js";import"./form-cn6FKy98.js";import"./VCheckboxBtn-ycwRHZR1.js";import"./VChip-63fPxMq-.js";import"./userData-EsKF0Ofy.js";import"./canEditRegistrations-h0JDdjkF.js";import"./group-7fhbY6WJ.js";import"./canDo-6Xiop821.js";import"./ticket-hqexX1_U.js";import"./useStoreAPI-6UBJpXgz.js";import"./form-0fJbSFPv.js";import"./submission-40fey8Hx.js";import"./v4-yQnnJER4.js";import"./VDataTable-cAmVrnB8.js";import"./DeleteDialog.vue_vue_type_script_setup_true_lang--vch1Z3q.js";import"./SelectGroups.vue_vue_type_script_setup_true_lang-Vb4Bd7Bw.js";import"./VTextarea-fTe9U_oI.js";import"./useDisplayTransactions-1pXWu8Td.js";import"./VForm-i5JFUZKp.js";import"./VNavigationDrawer-BrkjlRX4.js";const ne=N({__name:"RunnerSocket",emits:["data","ready","updating","updated"],setup(P,{emit:T}){const S=j(),k=H.getInstance(),_=K(),y=Y(),u=T,g=n(),d=n(),c=n(),p=n(!1),U=n(!1),l=n(""),C=n(!1),s=h({mode:"host",wsUri:S.getRunnerSocketURL()}),r=F();k.on("badge_serial_update",t=>{const e={Command:"BADGE_SERIAL_UPDATE",Params:new Map,Data:JSON.stringify(t)};s.JSON(e)}),s.on("authenticated",()=>{i()}),s.on("auth_failed",()=>{p.value=!1}),s.on("convention_data",t=>{if(!t)return;const e=t;g.value=e.Convention,u("updated",e),u("ready")}),s.on("error",t=>{const e=t;l.value=`Error: ${$(e.Message)}`,C.value=!0,p.value||(U.value=!0)}),s.on("joined",()=>{p.value=!0;const t={Command:"GET_CURRENT_REGISTRATION",Params:new Map,Data:""};s.JSON(t),u("ready")}),s.on("kicked",()=>{y.push("/")}),s.on("open",()=>{const t=r.getTokenByService("GrazeAPI");s.send(`AUTH ${t==null?void 0:t.AccessToken}`)}),s.on("runner_data",t=>{if(!t)return;const e=t;if(!(!e.RunnerLayout||!e.Registration)){if(u("data",e),d.value=e.RunnerLayout,c.value=e.Registration,!g.value||e.RunnerLayout.ConventionUUID!==g.value.ConventionUUID){u("updating"),v(e.RunnerLayout.ConventionUUID);return}u("ready")}});const i=()=>{const t={Key:_.params.session||"",Mode:"runner",UserUUID:_.params.user||""},e={Command:"SET_MODE",Params:new Map,Data:JSON.stringify(t)};s.JSON(e)},v=t=>{const R={Command:"GET_CONVENTION_DATA",Params:new Map,Data:JSON.stringify({ConventionUUID:t})};s.JSON(R)};q(()=>{s.destroy()});const b=()=>{y.push("/")},B=()=>{location.reload()};return(t,e)=>(f(),x(z,null,[C.value?(f(),V(X,{key:0,modelValue:C.value,"onUpdate:modelValue":e[0]||(e[0]=R=>C.value=R),message:l.value,timeout:1e4},null,8,["modelValue","message"])):D("",!0),U.value?(f(),V(I,{key:1},{default:a(()=>[o(O,{"max-width":"620",class:"mx-auto",elevation:"10"},{default:a(()=>[o(E,{class:"bg-red-darken-4"},{default:a(()=>[o(w,null,{default:a(()=>[m(" Connection Failure ")]),_:1}),o(L,{style:{opacity:"0.8"}},{default:a(()=>[m(" Failed to establish connection to host ")]),_:1})]),_:1}),o(M,{class:"mt-4"},{default:a(()=>[m(Q(l.value),1)]),_:1}),o(ee,{class:"justify-space-between"},{default:a(()=>[o(A,{"prepend-icon":"mdi:mdi-home",variant:"flat",color:"primary",onClick:e[1]||(e[1]=R=>W(y).push("/"))},{default:a(()=>[m(" Dashboard ")]),_:1}),o(A,{"prepend-icon":"mdi:mdi-reload",variant:"flat",color:"success",onClick:B},{default:a(()=>[m(" Retry ")]),_:1})]),_:1})]),_:1})]),_:1})):D("",!0),p.value?(f(),V(I,{key:2,fluid:!0},{default:a(()=>[o(ae,null,{default:a(()=>[o(te,{class:"text-center"},{default:a(()=>[o(A,{"prepend-icon":"mdi:mdi-link-variant-remove",variant:"flat",color:"error",onClick:b,elevation:"10"},{default:a(()=>[m(" Disconnect ")]),_:1})]),_:1})]),_:1})]),_:1})):D("",!0)],64))}}),Ge=N({__name:"RunnerView",emits:["pageTitle"],setup(P,{emit:T}){T("pageTitle","Registration Runner");const k=n([]),_=n(),y=n([]),u=n([]),g=n([]),d=n({ID:0,AdminLayoutUUID:"",ConventionID:0,ConventionUUID:"",Name:"",RunnerLayoutUUID:"",Type:J.ADMIN_LAYOUT_PANELS,Panels:[]}),c=n(),p=n([]),U=n([]),l=n(!1),C=r=>{c.value=void 0,setTimeout(()=>{d.value=r.RunnerLayout,c.value=r.Registration},200)},s=r=>{k.value=r.Accommodations,_.value=r.Convention,y.value=r.Extras,u.value=r.Forms,g.value=r.Interests,p.value=r.Tickets,U.value=r.Venues,d.value&&(l.value=!0)};return(r,i)=>(f(),x("div",null,[l.value&&d.value&&_.value&&c.value?(f(),V(oe,{key:0},{default:a(()=>[o(G,{convention:_.value,tickets:p.value,accommodations:k.value,extras:y.value,venues:U.value,interests:g.value,forms:u.value,layout:d.value,"onUpdate:layout":i[0]||(i[0]=v=>d.value=v),modelValue:c.value,"onUpdate:modelValue":i[1]||(i[1]=v=>c.value=v)},null,8,["convention","tickets","accommodations","extras","venues","interests","forms","layout","modelValue"])]),_:1})):l.value?(f(),V(I,{key:1},{default:a(()=>[o(O,{"max-width":"620",class:"mx-auto",elevation:"10"},{default:a(()=>[o(E,{class:"bg-orange-darken-3"},{default:a(()=>[o(w,null,{default:a(()=>[m(" Awaiting Data ")]),_:1}),o(L,{style:{opacity:"0.9"}},{default:a(()=>[m(" Display will update as soon as host provides registration details ")]),_:1})]),_:1}),o(M,{class:"mt-4 text-center"},{default:a(()=>[o(Z,{indeterminate:!0,size:60,width:"8",color:"orange"})]),_:1})]),_:1})]),_:1})):D("",!0),o(ne,{onData:C,onReady:i[2]||(i[2]=v=>l.value=!0),onUpdating:i[3]||(i[3]=v=>l.value=!1),onUpdated:s})]))}});export{Ge as default};
