import{I as Z,a1 as W,a2 as X,K as V,L as $,M as t,v as e,r as v,a3 as F,w as K,e as oe,S as Q,$ as ee,R as y,H as x,Z as ne,N as k,O as C,U as d,P as ge,a0 as we,Q as q,ar as _e,E as te}from"./index-0763f85f.js";import{O as G,G as M}from"./group-d2a77946.js";import{P as Te}from"./permission-03f04c02.js";import{j as le}from"./VContainer-8dba7b61.js";import{V as h,a as ae}from"./VRow-615fcf64.js";import{V as L,u as se}from"./VCheckbox-71d9be25.js";import{_ as Ne}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-26a61335.js";import{_ as ue}from"./ModelDialog.vue_vue_type_script_setup_true_lang-b4808fd1.js";import{V as De}from"./VTextField-34d35d71.js";import{V as J,c as be}from"./copyToClipboard-b7517336.js";import{u as A,V as Ee}from"./VToolbar-2098b57a.js";import{G as ye,A as Ge}from"./userData-7015bd9c.js";import{u as he}from"./useAvatar-449e9ae2.js";import{_ as Re}from"./VChip-a24b5795.js";import{V as Pe,a as Ce,d as Me}from"./VList-87ac8eea.js";import{V as Y}from"./VBtn-6482839e.js";import{V as ke}from"./VAvatar-900f64d1.js";import{V as Se}from"./VDialog-c6a4433b.js";import{e as Ae,V as Ye,a as Le,c as xe,d as $e}from"./VCard-dae25dea.js";import{V as ie}from"./VSpacer-1491010a.js";import{V as je}from"./VTable-549cf978.js";import{v as H}from"./v4-a960c1f4.js";import"./scopeId-1820581b.js";import"./useStoreAPI-80c70d2c.js";import"./VDivider-2ee7dc1b.js";const re=Z({__name:"EditGroupPermissions",props:W({disabled:{type:Boolean}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(P){const p=X(P,"modelValue");return(c,m)=>(V(),$(le,null,{default:t(()=>[e(ae,null,{default:t(()=>[e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(L,{modelValue:p.value.EditConvention,"onUpdate:modelValue":m[0]||(m[0]=U=>p.value.EditConvention=U),label:"Edit Convention","hide-details":"",disabled:c.disabled},null,8,["modelValue","disabled"])]),_:1}),e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(L,{modelValue:p.value.EditOrganisation,"onUpdate:modelValue":m[1]||(m[1]=U=>p.value.EditOrganisation=U),label:"Edit Organisation","hide-details":"",disabled:c.disabled},null,8,["modelValue","disabled"])]),_:1}),e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(L,{modelValue:p.value.EditRegistration,"onUpdate:modelValue":m[2]||(m[2]=U=>p.value.EditRegistration=U),label:"Edit Registrations","hide-details":"",disabled:c.disabled},null,8,["modelValue","disabled"])]),_:1}),e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(L,{modelValue:p.value.ManageUsers,"onUpdate:modelValue":m[3]||(m[3]=U=>p.value.ManageUsers=U),label:"Manage Users","hide-details":"",disabled:c.disabled},null,8,["modelValue","disabled"])]),_:1}),e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(L,{modelValue:p.value.ManageViews,"onUpdate:modelValue":m[4]||(m[4]=U=>p.value.ManageViews=U),label:"Manage Views","hide-details":"",disabled:c.disabled},null,8,["modelValue","disabled"])]),_:1}),e(h,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(L,{modelValue:p.value.ViewRegistration,"onUpdate:modelValue":m[5]||(m[5]=U=>p.value.ViewRegistration=U),label:"View Registrations","hide-details":"",disabled:c.disabled},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),_:1}))}}),Fe=Z({__name:"EditGroupDialog",props:W({conventions:{},organisations:{},group:{},title:{}},{modelValue:{type:Boolean,required:!0}}),emits:W(["update:group","save"],["update:modelValue"]),setup(P,{emit:p}){const c=P,m=ee(),{conventions:U,organisations:S,title:_=""}=c,I=X(P,"modelValue"),i=se(c,p,void 0,void 0,"group"),a=v(F(i.value)),f=v(null);a.value.OwnerType===G.OWNER_TYPE_CONVENTION?f.value=U.filter(u=>u.ConventionUUID==a.value.OwnerUUID).map(u=>u.ConventionUUID).join(""):a.value.OwnerType===G.OWNER_TYPE_ORGANISATION?f.value=S.filter(u=>u.OrganisationUUID==a.value.OwnerUUID).map(u=>u.OrganisationUUID).join(""):(a.value.Type===M.GROUP_TYPE_SYSTEM||a.value.Type===M.GROUP_TYPE_ADMIN)&&(f.value=null),K(i,()=>{a.value=F(i.value)});const T=v({ID:0,PermissionUUID:A,GroupID:0,GroupUUID:A,EditConvention:!1,EditOrganisation:!1,EditRegistration:!1,ViewRegistration:!1,ManageUsers:!1,ManageViews:!1});m.getPermission(M.GROUP_TYPE_SYSTEM,A).then(u=>{T.value=u,R()}).catch(()=>{});const N=()=>{a.value=F(i.value),R()},g=u=>{if(f.value==null)a.value.Type=M.GROUP_TYPE_ADMIN,a.value.OwnerType=null,a.value.OwnerID=null,a.value.OwnerUUID=null;else{const o=D.value.find(n=>f.value===n.OwnerUUID);o&&(o.OwnerType==G.OWNER_TYPE_ORGANISATION?a.value.Type=M.GROUP_TYPE_ORGANISATION:o.OwnerType==G.OWNER_TYPE_CONVENTION&&(a.value.Type=M.GROUP_TYPE_CONVENTION),a.value.OwnerType=o.OwnerType,a.value.OwnerID=o.OwnerID,a.value.OwnerUUID=o.OwnerUUID)}m.saveGroup(a.value).then(o=>{o&&u&&u("Group Saved").then(()=>{i.value=o,p("save",o)})}).catch(()=>{u&&u("Failed to Save Group")})},R=()=>{const u=D.value.find(o=>a.value.OwnerUUID===o.OwnerUUID);u?f.value=u.OwnerUUID:D.value.length>0&&(f.value=null)},D=oe(()=>{const u=[];return T.value.ManageUsers&&u.push({Label:"System Admin",OwnerID:null,OwnerUUID:null,OwnerType:null}),u.push(...U.map(o=>({Label:`${o.Name} (Convention)`,OwnerID:o.ID,OwnerUUID:o.ConventionUUID,OwnerType:G.OWNER_TYPE_CONVENTION}))),u.push(...S.map(o=>({Label:`${o.Name} (Organisation)`,OwnerID:o.ID,OwnerUUID:o.OrganisationUUID,OwnerType:G.OWNER_TYPE_ORGANISATION}))),u});return R(),(u,o)=>(V(),$(ue,{modelValue:I.value,"onUpdate:modelValue":o[3]||(o[3]=n=>I.value=n),onReset:N,onSave:g,title:Q(_),color:"primary","show-close-action":!0,"show-reset-action":!0,"show-save-action":!0},{default:t(()=>[e(le,{class:"pa-0",fluid:!0},{default:t(()=>[e(ae,null,{default:t(()=>[e(h,{cols:"12",md:"6"},{default:t(()=>[e(De,{modelValue:a.value.Name,"onUpdate:modelValue":o[0]||(o[0]=n=>a.value.Name=n),label:"Name",variant:"outlined"},null,8,["modelValue"])]),_:1}),e(h,{cols:"12",md:"6"},{default:t(()=>[e(J,{modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=n=>f.value=n),label:"Owner",items:D.value,"item-title":"Label","item-value":"OwnerUUID",variant:"outlined"},null,8,["modelValue","items"])]),_:1}),e(h,{cols:"12"},{default:t(()=>[e(re,{modelValue:a.value.Permission,"onUpdate:modelValue":o[2]||(o[2]=n=>a.value.Permission=n),disabled:!1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),We=d("p",null," Are you sure you wish to remove this user? If they have permissions from another group these will still be usable. To add the user back into the group you may need to provide them with a new invite link. ",-1),Be={key:1},ze=["href","onClick"],qe=Z({__name:"EditGroupMembersDialog",props:W({group:{},title:{}},{modelValue:{type:Boolean,required:!0}}),emits:W(["update:group","save"],["update:modelValue"]),setup(P,{emit:p}){const c=P,m=ee(),U=he(),{title:S=""}=c,_=X(P,"modelValue"),I=se(c,p,void 0,void 0,"group"),i=v(F(I.value));(i.value.Users==null||i.value.Users.length==0)&&m.getGroupMembers(i.value.GroupUUID).then(n=>{n&&(i.value.Users=n)}).catch(()=>{i.value.Users=[]});const a=v(""),f=()=>{m.getGroupInvite(i.value.GroupUUID).then(n=>{if(n){const b=new URL(location.href);b.searchParams.set("token",n),a.value=b.toString()}})};f(),K(I,()=>{i.value=F(I.value)});const T=()=>{be(a.value),f()},N=v(!1),g=v(-1),R=v(""),D=()=>{g.value=-1,N.value=!1},u=n=>{g.value=n,N.value=!0},o=({callback:n})=>{if(!i.value.Users){n&&(n("Failed to Remove User"),setTimeout(D,2e3));return}R.value="",g.value<0||g.value>=i.value.Users.length?(n&&n("Invalid Convention"),setTimeout(D,2e3)):m.removeUserFromGroup(i.value.Users[g.value].UserUUID,i.value.GroupUUID).then(b=>{var O;b?((O=i.value.Users)==null||O.splice(g.value,1),n&&n("User Removed")):n&&n("Failed to Remove User"),setTimeout(D,2e3)}).catch(()=>{n&&(n("Failed to Remove User"),setTimeout(D,2e3))})};return(n,b)=>(V(),$(ue,{modelValue:_.value,"onUpdate:modelValue":b[1]||(b[1]=O=>_.value=O),title:Q(S),color:"primary"},{default:t(()=>[e(le,{class:"pa-0",fluid:!0},{default:t(()=>[i.value.Users&&i.value.Users.length?(V(),y(x,{key:0},[e(Pe,null,{default:t(()=>[(V(!0),y(x,null,ne(i.value.Users,(O,j)=>(V(),$(Ce,{key:O.UserUUID},{append:t(()=>[e(Y,{color:"red-darken-3",icon:"mdi:mdi-window-close",size:"x-small",onClick:B=>u(j)},null,8,["onClick"])]),prepend:t(()=>[e(ke,{src:Q(U)(O.UserUUID),class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])]),default:t(()=>[e(Me,null,{default:t(()=>[k(C(O.DisplayName)+" "+C(O.Handle?`(${O.Handle})`:""),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(Se,{modelValue:N.value,"onUpdate:modelValue":b[0]||(b[0]=O=>N.value=O),width:"auto"},{default:t(()=>[e(Ae,null,{default:t(()=>[e(Ye,null,{default:t(()=>[k(" Remove User from Group ")]),_:1}),e(Le,null,{default:t(()=>[k(" User will no longer have the permissions from this group. ")]),_:1}),e(xe,null,{default:t(()=>[e(ae,null,{default:t(()=>[e(h,null,{default:t(()=>[We]),_:1})]),_:1})]),_:1}),e($e,null,{default:t(()=>[e(Y,{color:"primary",onClick:D},{default:t(()=>[k("Cancel")]),_:1}),e(ie),e(Re,{color:"red-darken-3",label:"Remove User",onClick:o})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)):(V(),y("p",Be," No members "))]),_:1})]),actions:t(()=>[e(Y,{variant:"text"},{default:t(()=>[d("a",{href:a.value,onClick:ge(T,["prevent"])},"Invite URL",8,ze)]),_:1})]),_:1},8,["modelValue","title"]))}}),He=d("h1",{class:"text-center mt-5"},"Processing Invite...",-1),Ke={key:0,class:"text-center mt-5 text-red text-h5"},Qe=d("p",{class:"text-center mt-5"},"Please contact your admin and request a new one",-1),Ze=d("thead",null,[d("tr",null,[d("th",null,"Name"),d("th",{class:"d-none d-md-table-cell"}," Owner "),d("th",null,"Permissions"),d("th")])],-1),Je={class:"d-block d-md-none mt-2"},Xe=d("strong",null,"Owner",-1),el=d("br",null,null,-1),ll=d("br",null,null,-1),al={class:"d-none d-md-table-cell"},tl=d("br",null,null,-1),ol=d("br",null,null,-1),nl=d("br",null,null,-1),Rl=Z({__name:"GroupsView",emits:["pageTitle"],setup(P,{emit:p}){p("pageTitle","Manage Groups & Permissions");const c=ee(),m=ye(),U=we();(!m||!m.Groups.find(l=>l.Permission.ManageUsers))&&U.push("/");const S=v(!0),_=v(),I=v(),i=v([]),a=v([]),f=v([]),T=v(!1),N=v(!1),g=v(!1),R=v(""),u=new URL(location.href).searchParams.get("token")||"";u!==""&&(S.value=!1,c.validateGroupInviteToken(u).then(l=>{l&&(Ge(l),U.push("/"))}).catch(()=>{R.value="Invalid Token"})),K(_,()=>{O(I.value,_.value)}),K(I,()=>{O(I.value,_.value)});const o=l=>l.OwnerType===G.OWNER_TYPE_CONVENTION?i.value.filter(r=>r.ConventionUUID===l.OwnerUUID).map(r=>r.Name).join(""):l.OwnerType===G.OWNER_TYPE_ORGANISATION?f.value.filter(r=>r.OrganisationUUID===l.OwnerUUID).map(r=>r.Name).join(""):l.OwnerType===void 0||l.OwnerType===null?"System":"Unknown",n=l=>l.OwnerType===G.OWNER_TYPE_CONVENTION?"Convention":l.OwnerType===G.OWNER_TYPE_ORGANISATION?"Organisation":l.OwnerType===void 0||l.OwnerType===null?"Global":"Unknown",b=()=>{c.getPermissionAccessList(Te.PERMISSION_TYPE_MANAGE_USERS).then(l=>{i.value=l.Conventions,f.value=l.Organisations}).catch(()=>{})},O=(l=A,r=A)=>{c.getManageableGroups(l||A,r||A).then(s=>{s&&(a.value=s)}).catch(()=>{})},j=()=>{const l={ID:0,GroupUUID:H(),Type:M.GROUP_TYPE_CONVENTION,Name:"",MinimumNumbers:0,Permission:{ID:0,PermissionUUID:H(),GroupID:0,GroupUUID:H(),EditConvention:!1,EditOrganisation:!1,EditRegistration:!1,ManageUsers:!1,ManageViews:!1,ViewRegistration:!1},Users:[],OwnerID:null,OwnerType:null,OwnerUUID:null};return l.Permission.GroupUUID=l.GroupUUID,l},B=v(j()),E=v(-1),w=v(j()),de=oe(()=>E.value===-1?"New Group":"Edit Group"),me=()=>{B.value.GroupUUID=H(),w.value=Object.assign({},j()),E.value=-1,T.value=!0},ve=l=>{E.value=a.value.indexOf(l),w.value=Object.assign({},l),N.value=!0},pe=l=>{E.value=a.value.indexOf(l),w.value=Object.assign({},l),T.value=!0},Ue=l=>{E.value=a.value.indexOf(l),w.value=Object.assign({},l),g.value=!0},fe=()=>{c.deleteGroup(w.value.GroupUUID).then(l=>{l&&(a.value.splice(E.value,1),Oe())})},ce=()=>{T.value=!1,te(()=>{w.value=Object.assign({},B.value),E.value=-1})},Oe=()=>{g.value=!1,te(()=>{w.value=Object.assign({},B.value),E.value=-1})},Ve=l=>{E.value>-1?Object.assign(a.value[E.value],l):a.value.push(l),ce()};return b(),O(I.value,_.value),(l,r)=>(V(),y("div",null,[S.value?(V(),y(x,{key:1},[e(Ee,{color:"primary"},{default:t(()=>[e(J,{label:"Organisation",modelValue:I.value,"onUpdate:modelValue":r[0]||(r[0]=s=>I.value=s),items:f.value,"item-value":"OrganisationUUID","item-title":"Name",clearable:!0,"hide-details":"",class:"mr-1"},null,8,["modelValue","items"]),e(J,{label:"Convention",modelValue:_.value,"onUpdate:modelValue":r[1]||(r[1]=s=>_.value=s),items:i.value,"item-value":"ConventionUUID","item-title":"Name",clearable:!0,"hide-details":""},null,8,["modelValue","items"]),e(ie),e(Y,{dark:"",class:"mb-2","prepend-icon":"mdi:mdi-pencil",onClick:me},{default:t(()=>[k(" New Group ")]),_:1}),e(Ne,{modelValue:g.value,"onUpdate:modelValue":r[2]||(r[2]=s=>g.value=s),onDelete:fe},null,8,["modelValue"])]),_:1}),T.value?(V(),$(Fe,{key:0,modelValue:T.value,"onUpdate:modelValue":r[3]||(r[3]=s=>T.value=s),group:w.value,"onUpdate:group":r[4]||(r[4]=s=>w.value=s),onSave:Ve,title:de.value,conventions:i.value,organisations:f.value},null,8,["modelValue","group","title","conventions","organisations"])):q("",!0),N.value?(V(),$(qe,{key:1,modelValue:N.value,"onUpdate:modelValue":r[5]||(r[5]=s=>N.value=s),group:w.value,"onUpdate:group":r[6]||(r[6]=s=>w.value=s),title:`${w.value.Name}`},null,8,["modelValue","group","title"])):q("",!0),e(je,null,{default:t(()=>[Ze,d("tbody",null,[(V(!0),y(x,null,ne(a.value,(s,Ie)=>(V(),y("tr",{key:s.GroupUUID,class:_e(Ie%2?"bg-grey-lighten-4":"")},[d("td",null,[k(C(s.Name)+" ",1),d("p",Je,[Xe,el,k(" "+C(o(s)),1),ll,d("small",null,"("+C(n(s))+")",1)])]),d("td",al,[k(C(o(s)),1),tl,d("small",null,"("+C(n(s))+")",1)]),d("td",null,[e(re,{modelValue:s.Permission,"onUpdate:modelValue":z=>s.Permission=z,disabled:!0},null,8,["modelValue","onUpdate:modelValue"])]),d("td",null,[e(Y,{icon:"mdi:mdi-account-group",size:"x-small",color:"success",class:"mb-1",onClick:z=>ve(s)},null,8,["onClick"]),ol,s.Type!==Q(M).GROUP_TYPE_SYSTEM?(V(),y(x,{key:0},[e(Y,{icon:"mdi:mdi-pencil",size:"x-small",color:"primary",class:"mb-1",onClick:z=>pe(s)},null,8,["onClick"]),nl,e(Y,{icon:"mdi:mdi-delete",size:"x-small",color:"error",class:"mb-1",onClick:z=>Ue(s)},null,8,["onClick"])],64)):q("",!0)])],2))),128))])]),_:1})],64)):(V(),y(x,{key:0},[He,R.value?(V(),y("p",Ke,C(R.value),1)):q("",!0),Qe],64))]))}});export{Rl as default};
