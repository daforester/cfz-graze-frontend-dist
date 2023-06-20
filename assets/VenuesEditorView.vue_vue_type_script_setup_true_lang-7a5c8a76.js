import{s as y}from"./index-ba0d422e.js";import{C as q,a as K,b as X,c as Y,V as H}from"./VExpansionPanel-4bec7d8e.js";import{a as I,V as p}from"./VRow-590b9d1d.js";import{V as b}from"./VTextField-9e75a076.js";import{V as J}from"./VSelect-b8e4dddb.js";import{V as N,a as Q}from"./VBtn-10f35354.js";import{d as S,X as k,Y as O,o as v,b as E,w as l,c as e,L as x,y as C,R as G,N as _,F as D,f as m,G as V,e as c,K as L,O as w,k as W}from"./index-b32d0632.js";import{u as F}from"./useGrazeAPI-87ce7f3a.js";import{_ as A}from"./SaveButton.vue_vue_type_script_setup_true_lang-216cfed7.js";import{V as j}from"./VContainer-06a40627.js";import{V as Z}from"./VDialog-5f6dc991.js";import{V as ee}from"./VTable-3a613a03.js";import{e as le,c as ae}from"./VCard-90d591b1.js";import{b as te,V as oe}from"./VToolbar-1f53d858.js";import{V as ue}from"./VSpacer-592d841d.js";import{V as ne,a as $}from"./VSheet-3052b4fb.js";import{V as z}from"./VTextarea-6864b1a2.js";import{v as B}from"./v4-a960c1f4.js";const se=S({__name:"VenueRoomCost",props:{modelValue:{required:!0}},emits:k(["deleted"],["update:modelValue"]),setup(R,{emit:U}){const d=O(R,"modelValue"),r=[{title:"Per Room",value:"PER_ROOM"},{title:"Per Person",value:"PER_PERSON"}],n=()=>{U("deleted")};return(a,s)=>(v(),E(I,{dense:""},{default:l(()=>[e(p,{cols:"12",sm:"4",md:"2",lg:"2"},{default:l(()=>[e(b,{label:x(y).formLabelDateStart,type:"date",variant:"outlined",modelValue:d.value.DateStart,"onUpdate:modelValue":s[0]||(s[0]=i=>d.value.DateStart=i)},null,8,["label","modelValue"])]),_:1}),e(p,{cols:"12",sm:"4",md:"2",lg:"2"},{default:l(()=>[e(b,{label:x(y).formLabelDateEnd,type:"date",variant:"outlined",modelValue:d.value.DateEnd,"onUpdate:modelValue":s[1]||(s[1]=i=>d.value.DateEnd=i)},null,8,["label","modelValue"])]),_:1}),e(p,{cols:"6",sm:"4",md:"2",lg:"2"},{default:l(()=>[e(b,{label:x(y).formLabelAvailability,type:"number",variant:"outlined",modelValue:d.value.Availability,"onUpdate:modelValue":s[2]||(s[2]=i=>d.value.Availability=i),modelModifiers:{number:!0}},null,8,["label","modelValue"])]),_:1}),e(p,{cols:"6",sm:"4",md:"2",lg:"2"},{default:l(()=>[e(b,{label:x(y).formLabelPrice,type:"number","prepend-inner-icon":"mdi:mdi-currency-gbp",variant:"outlined",modelValue:d.value.Price,"onUpdate:modelValue":s[3]||(s[3]=i=>d.value.Price=i),modelModifiers:{number:!0}},null,8,["label","modelValue"])]),_:1}),e(p,{cols:"6",sm:"4",md:"3",lg:"3"},{default:l(()=>[e(J,{label:x(y).formLabelPriceType,variant:"outlined",modelValue:d.value.Type,"onUpdate:modelValue":s[4]||(s[4]=i=>d.value.Type=i),items:r,"item-value":"value","item-title":"title"},null,8,["label","modelValue"])]),_:1}),e(p,{cols:"6",sm:"4",md:"1",class:"text-right"},{default:l(()=>[e(N,{color:"red",icon:"mdi:mdi-minus",onClick:n})]),_:1})]),_:1}))}}),de=m("strong",null,"Capacity:",-1),ie=m("thead",null,[m("tr",null,[m("th",null,"Date"),m("th",null,"Price"),m("th",null,"Availability")])],-1),me={class:"d-flex flex-wrap justify-space-between",style:{gap:"1rem"}},re=m("h4",null," Availability & Costs (To Organisation) ",-1),ve=S({__name:"VenueRoom",props:{modelValue:{required:!0}},emits:k(["deleted"],["update:modelValue"]),setup(R,{emit:U}){const d=F(),r=C(y),n=O(R,"modelValue"),a=C(G(n.value)),s=C(!1),i=u=>{switch(u.Type){case q.PER_PERSON:return r.value.enumPER_PERSON;case q.PER_ROOM:return r.value.enumPER_ROOM}return"Unknown"},g=()=>{a.value.Costs||(a.value.Costs=[]),a.value.Costs.push({ID:0,CostUUID:B(),Availability:0,DateStart:"",DateEnd:"",Price:0,Type:"PER_ROOM"})},M=u=>{a.value.Costs.splice(u,1)},P=({callback:u})=>{const t=()=>{u&&u("Failed to Delete Room")},o=()=>{u&&u("Room Deleted")};d.deleteRoom(a.value.RoomUUID).then(f=>{f?(o(),U("deleted",a.value)):t()}).catch(()=>{t()})},T=()=>{d.saveRoom(a.value).then(()=>{n.value=a.value,s.value=!1})};return(u,t)=>(v(),_(D,null,[e(j,{fluid:"",class:"pa-1 pa-sm-2"},{default:l(()=>[m("h4",null,V(a.value.Name),1),m("p",null,V(a.value.Notes),1),m("p",null,[de,c(" "+V(a.value.MinimumCapacity)+" ",1),a.value.MinimumCapacity!=a.value.MaximumCapacity?(v(),_(D,{key:0},[c(" - "+V(a.value.MaximumCapacity),1)],64)):L("",!0)]),e(ee,{density:"compact"},{default:l(()=>[ie,m("tbody",null,[(v(!0),_(D,null,w(a.value.Costs,o=>(v(),_("tr",{key:`venue-room-${a.value.ID}-cost-${o.ID}`},[m("td",null,V(o.DateStart)+" - "+V(o.DateEnd),1),m("td",null,V(r.value.currencySymbol)+V(o.Price)+" "+V(i(o)),1),m("td",null,V(o.Availability),1)]))),128))])]),_:1}),m("div",me,[e(N,{color:"primary","prepend-icon":"mdi:mdi-playlist-edit",onClick:t[0]||(t[0]=o=>s.value=!0)},{default:l(()=>[c("Edit Room")]),_:1}),e(A,{color:"red-darken-3","prepend-icon":"mdi:mdi-minus",onClick:P},{default:l(()=>[c("Delete Room")]),_:1})])]),_:1}),e(Z,{scrollable:"",modelValue:s.value,"onUpdate:modelValue":t[6]||(t[6]=o=>s.value=o),width:"auto"},{default:l(()=>[e(le,null,{default:l(()=>[e(te,{dark:"",color:"primary"},{default:l(()=>[e(N,{icon:"",dark:"",onClick:t[1]||(t[1]=o=>s.value=!1)},{default:l(()=>[e(Q,null,{default:l(()=>[c("mdi:mdi-close")]),_:1})]),_:1}),e(oe,null,{default:l(()=>[c("Room Details ("+V(a.value.Name)+")",1)]),_:1}),e(ue),e(ne,null,{default:l(()=>[e(N,{variant:"text",onClick:T},{default:l(()=>[c(" Save ")]),_:1})]),_:1})]),_:1}),e(ae,null,{default:l(()=>[e($,null,{default:l(()=>[e(I,null,{default:l(()=>[e(p,{cols:"12"},{default:l(()=>[e(b,{label:r.value.formLabelName,type:"text",variant:"outlined",modelValue:a.value.Name,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value.Name=o)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(I,null,{default:l(()=>[e(p,null,{default:l(()=>[e(z,{label:r.value.formLabelNotes,variant:"outlined",modelValue:a.value.Notes,"onUpdate:modelValue":t[3]||(t[3]=o=>a.value.Notes=o)},null,8,["label","modelValue"])]),_:1})]),_:1}),e(I,null,{default:l(()=>[e(p,{cols:"12",sm:"6"},{default:l(()=>[e(b,{type:"number",label:r.value.formLabelMinimumCapacity,variant:"outlined",modelValue:a.value.MinimumCapacity,"onUpdate:modelValue":t[4]||(t[4]=o=>a.value.MinimumCapacity=o),modelModifiers:{number:!0}},null,8,["label","modelValue"])]),_:1}),e(p,{cols:"12",sm:"6"},{default:l(()=>[e(b,{type:"number",label:r.value.formLabelMaximumCapacity,variant:"outlined",modelValue:a.value.MaximumCapacity,"onUpdate:modelValue":t[5]||(t[5]=o=>a.value.MaximumCapacity=o),modelModifiers:{number:!0}},null,8,["label","modelValue"])]),_:1})]),_:1}),e(I,null,{default:l(()=>[e(p,null,{default:l(()=>[re]),_:1})]),_:1}),(v(!0),_(D,null,w(a.value.Costs,(o,f)=>(v(),_(D,{key:`venue-room-${a.value.ID}-cost-${o.ID}`},[a.value.Costs&&a.value.Costs[f]?(v(),E(se,{key:0,modelValue:a.value.Costs[f],"onUpdate:modelValue":h=>a.value.Costs[f]=h,onDeleted:h=>M(f)},null,8,["modelValue","onUpdate:modelValue","onDeleted"])):L("",!0)],64))),128)),e(N,{color:"primary","prepend-icon":"mdi:mdi-plus",onClick:g},{default:l(()=>[c("Add Row")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),pe=m("h3",null,"Rooms",-1),Ve=S({__name:"Venue",props:{modelValue:{required:!0}},emits:k(["deleted"],["update:modelValue"]),setup(R,{emit:U}){const d=F(),r=O(R,"modelValue"),n=C(G(r.value)),a=C([]),s=C(!1),i=C(!1);d.getVenueRooms(n.value.VenueUUID).then(u=>{a.value=u}),W(n.value,()=>{i.value=!0});const g=({callback:u})=>{s.value=!0,d.saveVenue(n.value).then(()=>{s.value=!1,i.value=!1,r.value=n.value,u&&u("Venue Saved")}).catch(()=>{s.value=!1,u&&u("Failed to Saved Venue")})},M=({callback:u})=>{s.value=!0,d.deleteVenue(n.value.VenueUUID).then(t=>{s.value=!1,t?u&&(u("Venue Deleted"),U("deleted")):u&&u("Failed to Delete Venue")}).catch(()=>{u&&(u("Failed to Delete Venue"),s.value=!1)})},P=()=>{const u={ID:0,RoomUUID:B(),VenueID:n.value.ID,VenueUUID:n.value.VenueUUID,Order:a.value.length+1,Name:"New Room",Notes:"",MaximumCapacity:1,MinimumCapacity:1,Costs:[]};d.saveRoom(u).then(t=>{t&&a.value.push(t)})},T=(u,t)=>{d.deleteRoom(a.value[t].RoomUUID).then(o=>{o&&a.value.splice(t,1)})};return(u,t)=>(v(),E(K,null,{default:l(()=>[e(X,null,{default:l(()=>[c(V(n.value.Name),1)]),_:1}),e(Y,null,{default:l(()=>[e(I,{"no-gutters":""},{default:l(()=>[e(p,{cols:"12"},{default:l(()=>[e(b,{label:x(y).formLabelName,name:"name",variant:"outlined",modelValue:n.value.Name,"onUpdate:modelValue":t[0]||(t[0]=o=>n.value.Name=o)},null,8,["label","modelValue"])]),_:1}),e(p,{cols:"12"},{default:l(()=>[e(z,{label:x(y).formLabelDescription,name:"description",variant:"outlined",modelValue:n.value.Description,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value.Description=o)},null,8,["label","modelValue"])]),_:1}),e(p,{class:"text-right",cols:"12"},{default:l(()=>[e(A,{class:"mr-2",color:"red-darken-3",label:"Delete",onClick:M}),e(A,{enabled:i.value,timeout:"7",onClick:g},null,8,["enabled"])]),_:1})]),_:1}),pe,(v(!0),_(D,null,w(a.value,(o,f)=>(v(),E($,{variant:"elevation",elevation:"6",key:`venue-room-${o.ID}`},{default:l(()=>[a.value&&a.value[f]?(v(),E(ve,{key:0,modelValue:a.value[f],"onUpdate:modelValue":h=>a.value[f]=h,onDeleted:h=>T(h,f)},null,8,["modelValue","onUpdate:modelValue","onDeleted"])):L("",!0)]),_:2},1024))),128)),e($,{class:"ma-2"},{default:l(()=>[e(N,{color:"primary","prepend-icon":"mdi:mdi-plus",onClick:P},{default:l(()=>[c("Add Room")]),_:1})]),_:1})]),_:1})]),_:1}))}}),fe=m("h3",null,"Venues",-1),ce=m("p",null," Venues and the rooms they supply to the organisation, this is internal data not seen by attendees. ",-1),_e=m("p",null," Attendee options are configured via the accommodation tab. ",-1),ke=S({__name:"VenuesEditorView",props:{modelValue:{required:!0}},emits:k(["close","pageTitle","refresh"],["update:modelValue"]),setup(R,{emit:U}){const d=F(),r=O(R,"modelValue");U("pageTitle","Venues");const n=C([]);d.getConventionVenues(r.value.ConventionUUID).then(i=>{n.value=i});const a=()=>{const i={ID:0,VenueUUID:B(),ConventionID:r.value.ID,ConventionUUID:r.value.ConventionUUID,Order:n.value.length+1,Name:"New Venue",Description:"",Rooms:[]};d.saveVenue(i).then(g=>{g&&n.value.push(g)})},s=i=>{n.value.splice(i,1)};return(i,g)=>(v(),_(D,null,[e(j,{fluid:"",class:"px-0"},{default:l(()=>[e(I,null,{default:l(()=>[e(p,null,{default:l(()=>[fe]),_:1})]),_:1})]),_:1}),ce,_e,e($,null,{default:l(()=>[e(H,{variant:"accordion"},{default:l(()=>[(v(!0),_(D,null,w(n.value,(M,P)=>(v(),E(Ve,{key:`venues-${M.ID}`,modelValue:n.value[P],"onUpdate:modelValue":T=>n.value[P]=T,onDeleted:s},null,8,["modelValue","onUpdate:modelValue"]))),128))]),_:1}),e($,{class:"pa-2"},{default:l(()=>[e(N,{color:"primary",onClick:a},{default:l(()=>[c("Add Venue")]),_:1})]),_:1})]),_:1})],64))}});export{ke as _};
