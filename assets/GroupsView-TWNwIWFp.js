import{i as ee,M as Q,N as te,n as I,q as F,v as l,f as e,r as f,k as z,w as X,U as k,c as ie,C as q,P as oe,O as be,x as R,B as h,F as H,Q as de,D as U,z as Te,y as S,A as x,R as Ee,W as ue,a0 as _e}from"./index-uf-W6DN6.js";import{O as y,G as L}from"./group-7fhbY6WJ.js";import{P as Pe}from"./permission-7wLhDNXq.js";import{a as g,V as Z}from"./VRow-eLkatwpR.js";import{V as T}from"./VCheckbox-vR7-FBDw.js";import{c as se,V as Y}from"./VContainer-2sy_nEr4.js";import{_ as ye}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-GwsoAVCi.js";import{u as re}from"./useModel-mffGx9TW.js";import{_ as me}from"./ModelDialog.vue_vue_type_script_setup_true_lang-KLVVfX_1.js";import{V as Ne}from"./VTextField-ZJGYhGyo.js";import{a as ae}from"./VAutocomplete-DZZEIYSr.js";import{G as De,A as Ce}from"./userData-oM0nVGaY.js";import{u as he}from"./useAvatar-XlMMgrV-.js";import{a as Ge,_ as Re,l as ke}from"./SaveButton.vue_vue_type_script_setup_true_lang-5rk4mYxD.js";import{c as Me}from"./copyToClipboard-aCoRGJiH.js";import{_ as Ae}from"./UserSelect.vue_vue_type_script_setup_true_lang-ROXrHomB.js";import{V as Se,a as Le,c as Fe}from"./VList-oZAXx34_.js";import{V as Ye}from"./VDialog-g__bXPYQ.js";import{e as $e,a as je,b as We,c as xe,d as Be}from"./VCard-t8wSoW0W.js";import{V as ve}from"./scopeId-wkF6-vqq.js";import{V as ze}from"./forwardRefs-w-N7tpJJ.js";import{a as qe,V as He}from"./VTable-t8o8XWbY.js";import{V as Qe}from"./VToolbar-gGWmpizE.js";import{v as K}from"./v4-yQnnJER4.js";import"./VCheckboxBtn-gdpCWtVp.js";import"./form-cmwM_rcy.js";import"./VChip-qjwqBTVv.js";import"./useStoreAPI-r2R3yZ56.js";import"./createSimpleFunctional-WqbEzGpX.js";import"./VDivider-naLWhv0n.js";const pe=ee({__name:"EditGroupPermissions",props:Q({disabled:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(M){const n=te(M,"modelValue");return(V,a)=>(I(),F(se,null,{default:l(()=>[e(Z,null,{default:l(()=>[e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.CheckIn,"onUpdate:modelValue":a[0]||(a[0]=s=>n.value.CheckIn=s),label:"Check In","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.EditConvention,"onUpdate:modelValue":a[1]||(a[1]=s=>n.value.EditConvention=s),label:"Edit Convention","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.EditOrganisation,"onUpdate:modelValue":a[2]||(a[2]=s=>n.value.EditOrganisation=s),label:"Edit Organisation","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.EditPaymentTransactions,"onUpdate:modelValue":a[3]||(a[3]=s=>n.value.EditPaymentTransactions=s),label:"Manage Registration Payments","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.EditRegistration,"onUpdate:modelValue":a[4]||(a[4]=s=>n.value.EditRegistration=s),label:"Edit Registrations","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.ManageUsers,"onUpdate:modelValue":a[5]||(a[5]=s=>n.value.ManageUsers=s),label:"Manage Users","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.ManageViews,"onUpdate:modelValue":a[6]||(a[6]=s=>n.value.ManageViews=s),label:"Manage Views","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.ViewPaymentTransactions,"onUpdate:modelValue":a[7]||(a[7]=s=>n.value.ViewPaymentTransactions=s),label:"View Payment Transactions","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.ViewRegistration,"onUpdate:modelValue":a[8]||(a[8]=s=>n.value.ViewRegistration=s),label:"View Registrations","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.ConfigureLostAndFound,"onUpdate:modelValue":a[9]||(a[9]=s=>n.value.ConfigureLostAndFound=s),label:"Configure Lost and Found","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.EditLostAndFound,"onUpdate:modelValue":a[10]||(a[10]=s=>n.value.EditLostAndFound=s),label:"Edit Lost and Found","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.ViewLostAndFound,"onUpdate:modelValue":a[11]||(a[11]=s=>n.value.ViewLostAndFound=s),label:"View Lost and Found","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.ConfigureProps,"onUpdate:modelValue":a[12]||(a[12]=s=>n.value.ConfigureProps=s),label:"Configure Props","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.EditProps,"onUpdate:modelValue":a[13]||(a[13]=s=>n.value.EditProps=s),label:"Edit Props","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(g,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(T,{modelValue:n.value.ViewProps,"onUpdate:modelValue":a[14]||(a[14]=s=>n.value.ViewProps=s),label:"View Props","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),_:1}))}}),Je=ee({__name:"EditGroupDialog",props:Q({conventions:{},organisations:{},group:{},title:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:Q(["update:group","save"],["update:modelValue"]),setup(M,{emit:n}){const V=M,a=oe(),{conventions:s,organisations:A,title:$=""}=V,P=n,_=te(M,"modelValue"),m=re(V,P,void 0,void 0,"group"),o=f(z(m.value)),c=f(null);o.value.OwnerType===y.OWNER_TYPE_CONVENTION?c.value=s.filter(i=>i.ConventionUUID==o.value.OwnerUUID).map(i=>i.ConventionUUID).join(""):o.value.OwnerType===y.OWNER_TYPE_ORGANISATION?c.value=A.filter(i=>i.OrganisationUUID==o.value.OwnerUUID).map(i=>i.OrganisationUUID).join(""):(o.value.Type===L.GROUP_TYPE_SYSTEM||o.value.Type===L.GROUP_TYPE_ADMIN)&&(c.value=null),X(m,()=>{o.value=z(m.value)});const b=f({ID:0,PermissionUUID:k,GroupID:0,GroupUUID:k,CheckIn:!1,EditConvention:!1,EditOrganisation:!1,EditPaymentTransactions:!1,EditRegistration:!1,ViewPaymentTransactions:!1,ViewRegistration:!1,ManageUsers:!1,ManageViews:!1,ConfigureProps:!1,EditProps:!1,ViewProps:!1,ConfigureLostAndFound:!1,EditLostAndFound:!1,ViewLostAndFound:!1});a.getPermission(L.GROUP_TYPE_SYSTEM,k).then(i=>{b.value=i,D()}).catch(()=>{});const N=()=>{o.value=z(m.value),D()},G=i=>{if(c.value==null)o.value.Type=L.GROUP_TYPE_ADMIN,o.value.OwnerType=null,o.value.OwnerID=null,o.value.OwnerUUID=null;else{const d=C.value.find(O=>c.value===O.OwnerUUID);d&&(d.OwnerType==y.OWNER_TYPE_ORGANISATION?o.value.Type=L.GROUP_TYPE_ORGANISATION:d.OwnerType==y.OWNER_TYPE_CONVENTION&&(o.value.Type=L.GROUP_TYPE_CONVENTION),o.value.OwnerType=d.OwnerType,o.value.OwnerID=d.OwnerID,o.value.OwnerUUID=d.OwnerUUID)}a.saveGroup(o.value).then(d=>{d&&i&&i("Group Saved").then(()=>{m.value=d,P("save",d)})}).catch(()=>{i&&i("Failed to Save Group")})},D=()=>{const i=C.value.find(d=>o.value.OwnerUUID===d.OwnerUUID);i?c.value=i.OwnerUUID:C.value.length>0&&(c.value=null)},C=ie(()=>{const i=[];return b.value.ManageUsers&&i.push({Label:"System Admin",OwnerID:null,OwnerUUID:null,OwnerType:null}),i.push(...s.map(d=>({Label:`${d.Name} (Convention)`,OwnerID:d.ID,OwnerUUID:d.ConventionUUID,OwnerType:y.OWNER_TYPE_CONVENTION}))),i.push(...A.map(d=>({Label:`${d.Name} (Organisation)`,OwnerID:d.ID,OwnerUUID:d.OrganisationUUID,OwnerType:y.OWNER_TYPE_ORGANISATION}))),i});return D(),(i,d)=>(I(),F(me,{modelValue:_.value,"onUpdate:modelValue":d[3]||(d[3]=O=>_.value=O),onReset:N,onSave:G,title:q($),color:"primary","show-close-action":!0,"show-reset-action":!0,"show-save-action":!0,fullscreen:!0,persistent:!0},{default:l(()=>[e(se,{class:"pa-0",fluid:!0},{default:l(()=>[e(Z,null,{default:l(()=>[e(g,{cols:"12",md:"6"},{default:l(()=>[e(Ne,{modelValue:o.value.Name,"onUpdate:modelValue":d[0]||(d[0]=O=>o.value.Name=O),label:"Name",variant:"outlined"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",md:"6"},{default:l(()=>[e(ae,{modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=O=>c.value=O),label:"Owner",items:C.value,"item-title":"Label","item-value":"OwnerUUID",variant:"outlined"},null,8,["modelValue","items"])]),_:1}),e(g,{cols:"12"},{default:l(()=>[e(pe,{modelValue:o.value.Permission,"onUpdate:modelValue":d[2]||(d[2]=O=>o.value.Permission=O),disabled:!1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),Ke=U("p",null," Are you sure you wish to remove this user? If they have permissions from another group these will still be usable. To add the user back into the group you may need to provide them with a new invite link. ",-1),Xe={key:1},Ze=["href"],el=ee({__name:"EditGroupMembersDialog",props:Q({group:{},title:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:Q(["update:group","save"],["update:modelValue"]),setup(M,{emit:n}){const V=M,a=oe(),s=he(),{title:A=""}=V,$=n,P=te(M,"modelValue"),_=re(V,$,void 0,void 0,"group"),m=f(z(_.value)),o=f(""),c=f(!1),b=f(k);(m.value.Users==null||m.value.Users.length==0)&&a.getGroupMembers(m.value.GroupUUID).then(r=>{r&&(m.value.Users=r)}).catch(()=>{m.value.Users=[]});const N=f(""),G=()=>{a.getGroupInvite(m.value.GroupUUID).then(r=>{if(r){const w=new URL(location.href);w.searchParams.set("token",r),N.value=w.toString()}})};G(),X(_,()=>{m.value=z(_.value)});const D=()=>{Me(N.value),G()},C=f(!1),i=f(-1),d=f(""),O=()=>{i.value=-1,C.value=!1},J=r=>{i.value=r,C.value=!0},le=()=>{(!b.value||b.value===k)&&(o.value="Invalid User",c.value=!0),a.addUserToGroup(b.value,m.value.GroupUUID).then(r=>{r?(m.value=r,o.value="User added to group",c.value=!0):(o.value="Error adding user to group",c.value=!0)}).catch(r=>{o.value="Error adding user to group: "+r,c.value=!0})},B=({callback:r})=>{if(!m.value.Users){r&&(r("Failed to Remove User"),setTimeout(O,2e3));return}d.value="",i.value<0||i.value>=m.value.Users.length?(r&&r("Invalid Convention"),setTimeout(O,2e3)):a.removeUserFromGroup(m.value.Users[i.value].UserUUID,m.value.GroupUUID).then(w=>{var v;w?((v=m.value.Users)==null||v.splice(i.value,1),r&&r("User Removed")):r&&r("Failed to Remove User"),setTimeout(O,2e3)}).catch(()=>{r&&(r("Failed to Remove User"),setTimeout(O,2e3))})};return(r,w)=>(I(),F(me,{modelValue:P.value,"onUpdate:modelValue":w[3]||(w[3]=v=>P.value=v),title:q(A),color:"primary",fullscreen:!0,persistent:!0},be({default:l(()=>[e(se,{class:"pa-0",fluid:!0},{default:l(()=>[m.value.Users&&m.value.Users.length?(I(),h(H,{key:0},[e(Se,null,{default:l(()=>[(I(!0),h(H,null,de(m.value.Users,(v,E)=>(I(),F(Le,{key:v.UserUUID},{append:l(()=>[e(Y,{color:"red-darken-3",icon:"mdi:mdi-window-close",size:"x-small",onClick:ne=>J(E)},null,8,["onClick"])]),prepend:l(()=>[e(ze,{src:q(s)(v.UserUUID),class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])]),default:l(()=>[e(Fe,null,{default:l(()=>[R(S(v.DisplayName)+" "+S(v.Handle?`(${v.Handle})`:""),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(Ye,{modelValue:C.value,"onUpdate:modelValue":w[2]||(w[2]=v=>C.value=v),width:"auto"},{default:l(()=>[e($e,null,{default:l(()=>[e(je,null,{default:l(()=>[R(" Remove User from Group ")]),_:1}),e(We,null,{default:l(()=>[R(" User will no longer have the permissions from this group. ")]),_:1}),e(xe,null,{default:l(()=>[e(Z,null,{default:l(()=>[e(g,null,{default:l(()=>[Ke]),_:1})]),_:1})]),_:1}),e(Be,null,{default:l(()=>[e(Y,{color:"primary",onClick:O},{default:l(()=>[R("Cancel")]),_:1}),e(ve),e(Re,{color:"red-darken-3",label:"Remove User",onClick:B})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)):(I(),h("p",Xe," No members "))]),_:1})]),actions:l(()=>[e(Y,{variant:"text"},{default:l(()=>[U("a",{href:N.value,onClick:Te(D,["prevent"])},"Invite URL",8,Ze)]),_:1})]),_:2},[r.group.OwnerType===q(y).OWNER_TYPE_CONVENTION&&r.group.OwnerUUID?{name:"extension",fn:l(()=>[e(Z,null,{default:l(()=>[e(g,null,{default:l(()=>[e(Ae,{modelValue:b.value,"onUpdate:modelValue":w[0]||(w[0]=v=>b.value=v),convention:r.group.OwnerUUID,"null-label":"- Select User -",variant:"plain"},null,8,["modelValue","convention"])]),_:1}),e(g,{class:"pt-5"},{default:l(()=>[e(Y,{onClick:le,variant:"flat",class:"mt-2",color:"success","prepend-icon":"mdi:mdi-account-plus"},{default:l(()=>[R(" Add User ")]),_:1})]),_:1})]),_:1}),e(Ge,{message:o.value,modelValue:c.value,"onUpdate:modelValue":w[1]||(w[1]=v=>c.value=v)},null,8,["message","modelValue"])]),key:"0"}:void 0]),1032,["modelValue","title"]))}}),ll=U("h1",{class:"text-center mt-5"},"Processing Invite...",-1),al={key:0,class:"text-center mt-5 text-red text-h5"},tl={key:1,class:"text-center mt-5"},ol=U("thead",null,[U("tr",null,[U("th",null,"Name"),U("th",{class:"d-none d-md-table-cell"}," Owner "),U("th",null,"Permissions"),U("th")])],-1),sl={class:"d-block d-md-none mt-2"},nl=U("strong",null,"Owner",-1),ul=U("br",null,null,-1),il=U("br",null,null,-1),dl={class:"d-none d-md-table-cell"},rl=U("br",null,null,-1),ml=U("br",null,null,-1),vl=U("br",null,null,-1),Wl=ee({__name:"GroupsView",emits:["pageTitle"],setup(M,{emit:n}){n("pageTitle","Manage Groups & Permissions");const a=oe(),s=De(),A=Ee(),$=f(!1),P=f(),_=f(),m=f([]),o=f([]),c=f([]),b=f(!1),N=f(!1),G=f(!1),D=f(""),i=new URL(location.href).searchParams.get("token")||"",d=t=>{const p=()=>{const u=sessionStorage.getItem("gjt_attempt");let j=ke.parseInt(u||"0");j<2?(sessionStorage.setItem("gjt_attempt",(j+1).toString()),setTimeout(()=>{location.reload()},2e3)):(sessionStorage.removeItem("gjt_attempt"),localStorage.removeItem("gjt_token"),D.value="There was a problem with this token, it may have expired or already been used.",setTimeout(()=>{A.push("/")},5e3))};a.validateGroupInviteToken(t).then(u=>{u?(Ce(u),localStorage.removeItem("gjt_token"),sessionStorage.setItem("reload","true"),A.push("/")):p()}).catch(()=>{p()})};i!==""?(localStorage.setItem("gjt_token",location.href),d(i)):($.value=!0,(!s||!s.Groups.find(t=>t.Permission.ManageUsers))&&A.push("/")),X(P,()=>{B(_.value,P.value)}),X(_,()=>{B(_.value,P.value)});const O=t=>t.OwnerType===y.OWNER_TYPE_CONVENTION?m.value.filter(p=>p.ConventionUUID===t.OwnerUUID).map(p=>p.Name).join(""):t.OwnerType===y.OWNER_TYPE_ORGANISATION?c.value.filter(p=>p.OrganisationUUID===t.OwnerUUID).map(p=>p.Name).join(""):t.OwnerType===void 0||t.OwnerType===null?"System":"Unknown",J=t=>t.OwnerType===y.OWNER_TYPE_CONVENTION?"Convention":t.OwnerType===y.OWNER_TYPE_ORGANISATION?"Organisation":t.OwnerType===void 0||t.OwnerType===null?"Global":"Unknown",le=()=>{a.getPermissionAccessList(Pe.PERMISSION_TYPE_MANAGE_USERS).then(t=>{m.value=t.Conventions,c.value=t.Organisations}).catch(()=>{})},B=(t=k,p=k)=>{a.getManageableGroups(t||k,p||k).then(u=>{u&&(o.value=u.sort((j,W)=>j.Name>W.Name?1:-1))}).catch(()=>{})},r=()=>{const t={ID:0,GroupUUID:K(),Type:L.GROUP_TYPE_CONVENTION,Name:"",MinimumNumbers:0,Permission:{ID:0,PermissionUUID:K(),GroupID:0,GroupUUID:K(),CheckIn:!1,EditConvention:!1,EditOrganisation:!1,EditPaymentTransactions:!1,EditRegistration:!1,ManageUsers:!1,ManageViews:!1,ViewPaymentTransactions:!1,ViewRegistration:!1,ConfigureProps:!1,EditProps:!1,ViewProps:!1,ConfigureLostAndFound:!1,EditLostAndFound:!1,ViewLostAndFound:!1},Users:[],OwnerID:null,OwnerType:null,OwnerUUID:null};return t.Permission.GroupUUID=t.GroupUUID,t},w=f(r()),v=f(-1),E=f(r()),ne=ie(()=>v.value===-1?"New Group":"Edit Group"),fe=()=>{w.value.GroupUUID=K(),E.value=Object.assign({},r()),v.value=-1,b.value=!0},Ue=t=>{v.value=o.value.indexOf(t),E.value=Object.assign({},t),N.value=!0},Ve=t=>{v.value=o.value.indexOf(t),E.value=Object.assign({},t),b.value=!0},ce=t=>{v.value=o.value.indexOf(t),E.value=Object.assign({},t),G.value=!0},ge=()=>{a.deleteGroup(E.value.GroupUUID).then(t=>{t&&(o.value.splice(v.value,1),Ie())})},Oe=()=>{b.value=!1,ue(()=>{E.value=Object.assign({},w.value),v.value=-1})},Ie=()=>{G.value=!1,ue(()=>{E.value=Object.assign({},w.value),v.value=-1})},we=t=>{v.value>-1?Object.assign(o.value[v.value],t):o.value.push(t),Oe()};return le(),B(_.value,P.value),(t,p)=>(I(),h("div",null,[$.value?(I(),h(H,{key:1},[e(Qe,{color:"primary"},{default:l(()=>[e(ae,{label:"Organisation",modelValue:_.value,"onUpdate:modelValue":p[0]||(p[0]=u=>_.value=u),items:c.value,"item-value":"OrganisationUUID","item-title":"Name",clearable:!0,"hide-details":"",class:"mr-1"},null,8,["modelValue","items"]),e(ae,{label:"Convention",modelValue:P.value,"onUpdate:modelValue":p[1]||(p[1]=u=>P.value=u),items:m.value,"item-value":"ConventionUUID","item-title":"Name",clearable:!0,"hide-details":""},null,8,["modelValue","items"]),e(ve),e(Y,{dark:"",class:"mb-2","prepend-icon":"mdi:mdi-pencil",onClick:fe},{default:l(()=>[R(" New Group ")]),_:1}),e(ye,{modelValue:G.value,"onUpdate:modelValue":p[2]||(p[2]=u=>G.value=u),onDelete:ge},null,8,["modelValue"])]),_:1}),b.value?(I(),F(Je,{key:0,modelValue:b.value,"onUpdate:modelValue":p[3]||(p[3]=u=>b.value=u),group:E.value,"onUpdate:group":p[4]||(p[4]=u=>E.value=u),onSave:we,title:ne.value,conventions:m.value,organisations:c.value},null,8,["modelValue","group","title","conventions","organisations"])):x("",!0),N.value?(I(),F(el,{key:1,modelValue:N.value,"onUpdate:modelValue":p[5]||(p[5]=u=>N.value=u),group:E.value,"onUpdate:group":p[6]||(p[6]=u=>E.value=u),title:`${E.value.Name}`},null,8,["modelValue","group","title"])):x("",!0),e(He,null,{default:l(()=>[ol,U("tbody",null,[(I(!0),h(H,null,de(o.value,(u,j)=>(I(),h("tr",{key:u.GroupUUID,class:_e(j%2?"bg-grey-lighten-4":"")},[U("td",null,[R(S(u.Name)+" ",1),U("p",sl,[nl,ul,R(" "+S(O(u)),1),il,U("small",null,"("+S(J(u))+")",1)])]),U("td",dl,[R(S(O(u)),1),rl,U("small",null,"("+S(J(u))+")",1)]),U("td",null,[u.Permission?(I(),F(pe,{key:0,modelValue:u.Permission,"onUpdate:modelValue":W=>u.Permission=W,disabled:!0},null,8,["modelValue","onUpdate:modelValue"])):x("",!0)]),U("td",null,[e(Y,{icon:"mdi:mdi-account-group",size:"x-small",color:"success",class:"mb-1",onClick:W=>Ue(u)},null,8,["onClick"]),ml,u.Type!==q(L).GROUP_TYPE_SYSTEM?(I(),h(H,{key:0},[e(Y,{icon:"mdi:mdi-pencil",size:"x-small",color:"primary",class:"mb-1",onClick:W=>Ve(u)},null,8,["onClick"]),vl,e(Y,{icon:"mdi:mdi-delete",size:"x-small",color:"error",class:"mb-1",onClick:W=>ce(u)},null,8,["onClick"])],64)):x("",!0)])],2))),128))])]),_:1})],64)):(I(),F(qe,{key:0,elevation:"2",class:"pa-4"},{default:l(()=>[ll,D.value?(I(),h("p",al,S(D.value),1)):x("",!0),D.value?(I(),h("p",tl,"Please contact your admin and request a new one")):x("",!0)]),_:1}))]))}});export{Wl as default};
