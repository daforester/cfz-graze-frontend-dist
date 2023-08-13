import{I as b,a1 as X,a2 as oe,r as T,a3 as j,K as n,L as D,M as m,$ as ee,v as s,S as Y,a8 as G,Z as E,Q as h,e as H,R as v,H as y,O as V,_ as te,U as L,N as R,a4 as ie,a0 as ue}from"./index-f94693a1.js";import{_ as se}from"./ModelDialog.vue_vue_type_script_setup_true_lang-dc16435b.js";import{_ as Z,f as re,g as de,h as me,e as ce,i as ve,d as Ue}from"./VWindowItem-2ecf545d.js";import{c as Ie,T as _e}from"./filter-add2be90.js";import{a as x,V as M}from"./VRow-de457797.js";import{V as K}from"./VTextField-a2e123d3.js";import{V as $}from"./VSelect-da94dd5c.js";import{n as z,V as ae}from"./VContainer-87d98084.js";import{v as B}from"./v4-a960c1f4.js";import{u as fe,V as Te}from"./VToolbar-e4b1ee93.js";import{V as De}from"./VAvatar-484efd8f.js";import{e as pe}from"./VCard-199140ec.js";import"./VChip-6919e701.js";import"./scopeId-55d54b09.js";import"./index-60fb9ccb.js";import"./VDialog-c5b03adc.js";import"./VCheckboxBtn-bb52576f.js";import"./VTable-156306de.js";import"./VToolbarItems-5547f83b.js";import"./VList-769824d9.js";var le=(i=>(i.ADMIN_LAYOUT_PANELS="ADMIN_LAYOUT_PANELS",i.ADMIN_LAYOUT_TABLE="ADMIN_LAYOUT_TABLE",i))(le||{});const Se=[{title:"Panel Layout",value:"ADMIN_LAYOUT_PANELS"},{title:"Table Layout",value:"ADMIN_LAYOUT_TABLE"}];var ne=(i=>(i.LAYOUT_ITEM_SOURCE_FORM="LAYOUT_ITEM_SOURCE_FORM",i.LAYOUT_ITEM_SOURCE_META="LAYOUT_ITEM_SOURCE_META",i.LAYOUT_ITEM_SOURCE_USER="LAYOUT_ITEM_SOURCE_USER",i))(ne||{});const Ae=[{title:"Form Field Submission Data",value:"LAYOUT_ITEM_SOURCE_FORM"},{title:"Miscellaneous Data",value:"LAYOUT_ITEM_SOURCE_META"},{title:"User Profile Data",value:"LAYOUT_ITEM_SOURCE_USER"}],ye=[{title:"Submission Date",value:"META_DATA_SOURCE_SUBMISSION_DATE"},{title:"Submission Status",value:"META_DATA_SOURCE_SUBMISSION_STATUS"}],Ee=[{title:"Display Name",value:"USER_DATA_SOURCE_DISPLAY_NAME"},{title:"Handle",value:"USER_DATA_SOURCE_HANDLE"},{title:"Avatar",value:"USER_DATA_SOURCE_AVATAR"},{title:"First Name",value:"USER_DATA_SOURCE_FIRST_NAME"},{title:"Last Name",value:"USER_DATA_SOURCE_LAST_NAME"},{title:"Date of Birth",value:"USER_DATA_SOURCE_DATE_OF_BIRTH"},{title:"Email Address",value:"USER_DATA_SOURCE_EMAIL"},{title:"Telegram Username",value:"USER_DATA_SOURCE_TELEGRAM"}],ke=b({__name:"EditAdminLayout",props:X({title:{default:""},layout:{}},{modelValue:{type:Boolean,required:!0}}),emits:X(["save"],["update:modelValue"]),setup(i,{emit:p}){const e=oe(i,"modelValue"),o=T(j(i.layout)),l=T([]),t=ee(),r=({callback:c})=>{const d=()=>{c&&c("Failed to Save Layout")},u=()=>{c&&c("Layout Saved")};t.saveAdminLayout(o.value).then(k=>{k?(u(),p("save",k)):d()}).catch(()=>{d()})},f=()=>({ID:0,LayoutPanelUUID:B(),AdminLayoutID:o.value.ID,AdminLayoutUUID:o.value.AdminLayoutUUID,Name:"",Order:o.value.Panels.length+1,Items:[]}),O=c=>()=>({ID:0,LayoutItemUUID:B(),LayoutPanelID:c.ID,LayoutPanelUUID:c.LayoutPanelUUID,Label:"",SourceType:ne.LAYOUT_ITEM_SOURCE_FORM,SectionFieldID:void 0,SectionFieldUUID:void 0,SectionField:void 0,MetaField:void 0,UserField:void 0,Align:"",Order:c.Items.length+1}),w=c=>{const d=l.value.find(u=>u.value===c.SectionFieldUUID);d&&(c.SectionFieldID=d.object.ID,c.SectionField=d.object)};return t.getConventionForms(i.layout.ConventionUUID).then(c=>{c.forEach(d=>d.Sections.forEach(u=>u.Fields&&l.value.push(...u.Fields.map(k=>{var g;return{title:`${d.Name} - ${u.Name} - ${(g=k.Field)==null?void 0:g.Name}`,value:k.SectionFieldUUID,object:k}})))),l.value.sort(Ie("title"))}),(c,d)=>(n(),D(se,{modelValue:e.value,"onUpdate:modelValue":d[3]||(d[3]=u=>e.value=u),onSave:r,title:c.title,color:"primary"},{default:m(()=>[s(z,{class:"px-0 mx-0",fluid:!0},{default:m(()=>[s(x,null,{default:m(()=>[s(M,{cols:"12",sm:"6"},{default:m(()=>[s(K,{modelValue:o.value.Name,"onUpdate:modelValue":d[0]||(d[0]=u=>o.value.Name=u),label:"Name",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),s(M,{cols:"12",sm:"6"},{default:m(()=>[s($,{modelValue:o.value.Type,"onUpdate:modelValue":d[1]||(d[1]=u=>o.value.Type=u),label:"Layout Type",items:Y(Se),"item-title":"title","item-value":"value",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),s(Z,{modelValue:o.value.Panels,"onUpdate:modelValue":d[2]||(d[2]=u=>o.value.Panels=u),"new-item":f,closeable:!1,title:"Panels",label:"Name","slot-name-prefix":"panel"},G({_:2},[E(o.value.Panels,(u,k)=>({name:`panel_${k}`,fn:m(()=>[s(z,{class:"px-0 mx-0",fluid:!0},{default:m(()=>[s(x,null,{default:m(()=>[s(M,{cols:"12",sm:"6"},{default:m(()=>[s(K,{modelValue:u.Name,"onUpdate:modelValue":U=>u.Name=U,label:"Name",variant:"outlined","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024),s(Z,{modelValue:u.Items,"onUpdate:modelValue":U=>u.Items=U,"new-item":O(u),closeable:!1,title:"Items",label:"Label","slot-name-prefix":"item"},G({_:2},[E(u.Items,(U,g)=>({name:`item_${g}`,fn:m(()=>[s(z,{class:"px-0 mx-0",fluid:!0},{default:m(()=>[s(x,null,{default:m(()=>[s(M,{cols:"12",sm:"6"},{default:m(()=>[s(K,{modelValue:U.Label,"onUpdate:modelValue":S=>U.Label=S,label:"Name",variant:"outlined","hide-details":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),s(x,null,{default:m(()=>[s(M,{cols:"12",sm:"6"},{default:m(()=>[s($,{modelValue:U.SourceType,"onUpdate:modelValue":S=>U.SourceType=S,label:"Source Type",items:Y(Ae),"item-title":"title","item-value":"value",variant:"outlined","hide-details":""},null,8,["modelValue","onUpdate:modelValue","items"])]),_:2},1024),s(M,{cols:"12",sm:"6"},{default:m(()=>[U.SourceType==="LAYOUT_ITEM_SOURCE_FORM"?(n(),D($,{key:0,modelValue:U.SectionFieldUUID,"onUpdate:modelValue":S=>U.SectionFieldUUID=S,label:"Form Data",items:l.value,"item-title":"title","item-value":"value",variant:"outlined","hide-details":"",onBlur:S=>w(U)},null,8,["modelValue","onUpdate:modelValue","items","onBlur"])):U.SourceType==="LAYOUT_ITEM_SOURCE_META"?(n(),D($,{key:1,modelValue:U.MetaField,"onUpdate:modelValue":S=>U.MetaField=S,label:"Miscellaneous Data",items:Y(ye),"item-title":"title","item-value":"value",variant:"outlined","hide-details":""},null,8,["modelValue","onUpdate:modelValue","items"])):U.SourceType==="LAYOUT_ITEM_SOURCE_USER"?(n(),D($,{key:2,modelValue:U.UserField,"onUpdate:modelValue":S=>U.UserField=S,label:"User Profile Data",items:Y(Ee),"item-title":"title","item-value":"value",variant:"outlined","hide-details":""},null,8,["modelValue","onUpdate:modelValue","items"])):h("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)])}))]),1032,["modelValue","onUpdate:modelValue","new-item"])])}))]),1032,["modelValue"])]),_:1},8,["modelValue","title"]))}}),Ce={key:0,class:"accommodationList"},he=b({__name:"DataTableItemAccommodation",props:{accommodations:{default:()=>[]},value:{default:""}},setup(i){const p=H(()=>{if(!i.value)return[];const e=JSON.parse(i.value),o=i.accommodations.filter(l=>e.includes(l.AccommodationUUID)).sort((l,t)=>{const r=e.findIndex(O=>O===l.AccommodationUUID),f=e.findIndex(O=>O===t.AccommodationUUID);return r>f?1:-1});return j(o)});return(e,o)=>e.value?(n(),v("ol",Ce,[(n(!0),v(y,null,E(p.value,l=>(n(),v("li",{key:l.AccommodationUUID},V(l.Name),1))),128))])):h("",!0)}});const Ve=te(he,[["__scopeId","data-v-1ba5f67a"]]),Oe={key:0,class:"addonList"},Le={key:0},Re=b({__name:"DataTableItemExtras",props:{extras:{default:()=>[]},value:{default:""}},setup(i){const p=H(()=>{if(!i.value)return;const e=JSON.parse(i.value),o=Object.keys(e),l=j(i.extras);return l.forEach(t=>{t.Options=t.Options.filter(r=>o.includes(r.OptionUUID)?(r.Choices=r.Choices.filter(f=>f.TagUUID===e[r.OptionUUID].choiceId),e[r.OptionUUID].checked):!1)}),l.filter(t=>t.Options.length>0),l});return(e,o)=>e.value?(n(),v("ul",Oe,[(n(!0),v(y,null,E(p.value,l=>(n(),v("li",{key:l.ExtraUUID},[L("strong",null,V(l.Name),1),L("ul",null,[(n(!0),v(y,null,E(l.Options,t=>(n(),v("li",{key:t.OptionUUID},[R(V(t.Name)+" ",1),t.Choices.length==1?(n(),v("small",Le,"("+V(t.Choices[0].Title)+")",1)):h("",!0)]))),128))])]))),128))])):h("",!0)}});const ge=te(Re,[["__scopeId","data-v-4ed6842b"]]),Ne={key:0},be=b({__name:"DataTableItemInterests",props:{interests:{default:()=>[]},value:{default:""}},setup(i){const p=H(()=>{if(!i.value)return;const e=JSON.parse(i.value);return Object.entries(e).filter(([,o])=>o).map(([o,l])=>i.interests.find(t=>t.InterestUUID===o)).filter(o=>o!==void 0)});return(e,o)=>e.value?(n(),v("ul",Ne,[(n(!0),v(y,null,E(p.value,l=>(n(),v("li",{key:l.InterestUUID},V(l.Name),1))),128))])):h("",!0)}}),Fe=L("br",null,null,-1),Me=L("small",null,"Options:",-1),we=L("br",null,null,-1),Pe=L("small",null,"Addons:",-1),$e=b({__name:"DataTableItemTicket",props:{tickets:{default:()=>[]},value:{default:""}},setup(i){const p=H(()=>{if(!i.value)return;let e={Ticket:[],AddonsChecked:[],ComponentsChecked:[]};try{e=JSON.parse(i.value),"ticket"in e&&(e.Ticket=e.ticket),"addonsChecked"in e&&(e.AddonsChecked=e.addonsChecked),"componentsChecked"in e&&(e.ComponentsChecked=e.componentsChecked)}catch{}return e.Ticket.filter(o=>{const l=i.tickets.find(t=>t.TicketUUID===o);return!(!l||l.Type!==_e.TICKET_TYPE_TICKET)}).map(o=>{const l=i.tickets.find(r=>r.TicketUUID===o),t=j(l);return t.TicketComponents=l.TicketComponents.filter(r=>e.ComponentsChecked.includes(r.TicketUUID)),t.AddonTickets=l.AddonTickets.filter(r=>e.AddonsChecked.includes(r.TicketUUID)),t})});return(e,o)=>e.value?(n(!0),v(y,{key:0},E(p.value,l=>(n(),v("div",{key:l.TicketUUID},[L("strong",null,V(l.Name),1),l.TicketComponents.length>0?(n(),v(y,{key:0},[Fe,Me,R("  "),(n(!0),v(y,null,E(l.TicketComponents,t=>(n(),v(y,{key:t.TicketUUID},[L("small",null,V(t.Name),1),R("  ")],64))),128))],64)):h("",!0),l.AddonTickets.length>0?(n(),v(y,{key:1},[we,Pe,R("  "),(n(!0),v(y,null,E(l.AddonTickets,t=>(n(),v("small",{key:t.TicketUUID},[R("("),L("em",null,V(t.Name),1),R(")")]))),128))],64)):h("",!0)]))),128)):h("",!0)}}),Ye=b({__name:"RegListRow",props:{header:{},accommodations:{},extras:{},item:{},interests:{},tickets:{},venues:{}},setup(i){const p=e=>{console.log(e)};return(e,o)=>e.header.key=="actions"?(n(),D(ae,{key:0,size:"small",class:"me-2",icon:"mdi:mdi-pencil",variant:"plain",onClick:o[0]||(o[0]=l=>p(e.item.raw))})):e.header.type==="ACCOMMODATION"&&e.accommodations.length>0?(n(),D(Ve,{key:1,value:e.item.raw[e.header.key],accommodations:e.accommodations},null,8,["value","accommodations"])):e.header.type==="EXTRAS"&&e.extras.length>0?(n(),D(ge,{key:2,value:e.item.raw[e.header.key],extras:e.extras},null,8,["value","extras"])):e.header.type==="INTERESTS"&&e.interests.length>0?(n(),D(be,{key:3,value:e.item.raw[e.header.key],interests:e.interests},null,8,["value","interests"])):e.header.type==="TICKET"&&e.tickets.length>0?(n(),D($e,{key:4,value:e.item.raw[e.header.key],tickets:e.tickets},null,8,["value","tickets"])):(n(),v(y,{key:5},[R(V(e.item.raw[e.header.key]),1)],64))}}),ut=b({__name:"RegistrationsView",emits:["pageTitle"],setup(i,{emit:p}){var Q;p("pageTitle","Registration Manager");const e=ie(),o=ue();let l=((Q=e.params.convention)==null?void 0:Q.toString())||"";const t=T({ID:0,ConventionUUID:B(),OrganisationID:0,OrganisationUUID:fe,Name:"New Convention",Description:"",DetailLink:"",Logo:"",Slug:"",Accommodation:[],Tickets:[],Extras:[],Interests:[],Visible:!1}),r=ee(),f=T({ID:0,AdminLayoutUUID:B(),ConventionID:t.value.ID,ConventionUUID:t.value.ConventionUUID,Name:"Registration Table",Type:le.ADMIN_LAYOUT_TABLE,Panels:[]}),O=T([]),w=T([]),c=T([]),d=T(!1),u=T(""),k=T([]),U=T([]),g=T([]),S=T([]),W=T([]),q=async()=>{O.value=[],w.value=[],c.value=[];try{const a=await r.getConventionAdminLayoutByName(t.value.ConventionUUID,"Registration Table");a?f.value=a:(f.value.ConventionID=t.value.ID,f.value.ConventionUUID=t.value.ConventionUUID)}catch{f.value.ConventionID=t.value.ID,f.value.ConventionUUID=t.value.ConventionUUID}try{const a=await r.getConventionSubmissions(t.value.ConventionUUID);if(!a)return;w.value=a}catch{return}try{const a=await r.getConventionForms(t.value.ConventionUUID);if(!a)return;O.value=a}catch{return}try{const a=await r.getConventionAccommodation(t.value.ConventionUUID);if(!a)return;k.value=a}catch{return}try{const a=await r.getConventionVenues(t.value.ConventionUUID);if(!a)return;W.value=a}catch{return}try{const a=await r.getConventionExtras(t.value.ConventionUUID);if(!a)return;U.value=a}catch{return}try{const a=await r.getConventionInterests(t.value.ConventionUUID);if(!a)return;g.value=a}catch{return}try{const a=await r.getConventionTickets(t.value.ConventionUUID);if(!a)return;S.value=a}catch{return}f.value.Panels.forEach(a=>{a.Items.forEach(_=>{(_.SectionField==null||_.SectionField.Field==null)&&O.value.find(I=>{I.Sections.find(A=>{if(A.Fields){const C=A.Fields.find(F=>F.SectionFieldUUID===_.SectionFieldUUID);if(C)return _.SectionField=C,!0}})})})}),f.value.Panels.length>0&&f.value.Panels.forEach(a=>{const _={uuid:B(),order:a.Order,name:a.Name,headers:[],items:[]},I={key:"actions",title:"Actions",align:"start",sortable:!1,type:""};_.headers=a.Items.map(A=>{var C,F,N,P;return{key:A.LayoutItemUUID,title:A.Label||((F=(C=A.SectionField)==null?void 0:C.Field)==null?void 0:F.Label)||"",align:A.Align==="end"?"end":"start",sortable:!0,type:((P=(N=A.SectionField)==null?void 0:N.Field)==null?void 0:P.Type)||""}}),_.headers.push(I),_.items=w.value.map(A=>{const C={};return _.headers.forEach(F=>{var P;const N=a.Items.find(J=>J.LayoutItemUUID===F.key);N&&N.SectionField&&(C[N.LayoutItemUUID]=((P=A.Data.find(J=>J.SectionFieldUUID===N.SectionFieldUUID))==null?void 0:P.Data)||"")}),C}),c.value.push(_)}),(u.value==null||u.value=="")&&c.value.length>0&&(u.value=c.value[0].uuid)};return l?r.getConvention(l).then(a=>{a&&(t.value=a,q())}).catch(()=>{o.push("/")}):o.push("/"),(a,_)=>(n(),D(Ue,null,{default:m(()=>[s(Te,{color:"blue-darken-4"},{default:m(()=>[s(re,{modelValue:u.value,"onUpdate:modelValue":_[0]||(_[0]=I=>u.value=I),"show-arrows":""},{default:m(()=>[(n(!0),v(y,null,E(c.value,I=>(n(),D(de,{key:I.uuid,value:I.uuid},{default:m(()=>[R(V(I.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),s(De),s(ae,{icon:"mdi:mdi-cog-outline",onClick:_[1]||(_[1]=I=>d.value=!0)})]),_:1}),s(ve,{modelValue:u.value,"onUpdate:modelValue":_[2]||(_[2]=I=>u.value=I)},{default:m(()=>[(n(!0),v(y,null,E(c.value,I=>(n(),D(me,{key:I.uuid,value:I.uuid},{default:m(()=>[I.uuid===u.value?(n(),D(pe,{key:0,class:"pa-2"},{default:m(()=>[s(Y(ce),{headers:I.headers,items:I.items,itemsPerPage:"50","item-value":"LayoutItemUUID"},G({_:2},[E(I.headers,A=>({name:`item.${A.key}`,fn:m(({item:C})=>[s(Ye,{header:A,item:C,accommodations:k.value,extras:U.value,interests:g.value,tickets:S.value,venues:W.value},null,8,["header","item","accommodations","extras","interests","tickets","venues"])])}))]),1032,["headers","items"])]),_:2},1024)):h("",!0)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),d.value?(n(),D(ke,{key:0,title:"Edit Layout",modelValue:d.value,"onUpdate:modelValue":_[3]||(_[3]=I=>d.value=I),layout:f.value,onSave:_[4]||(_[4]=I=>{d.value=!1,q()})},null,8,["modelValue","layout"])):h("",!0)]),_:1}))}});export{ut as default};
