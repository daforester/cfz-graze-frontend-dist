import{I as J,a0 as B,a1 as le,M as V,N as M,O as a,v as e,r as U,K as W,w as Q,e as ne,W as X,a3 as ae,V as P,H as F,a4 as ie,P as A,Q as k,X as p,R as Te,a6 as we,S as j,ac as _e,E as oe}from"./index-a13ce8de.js";import{O as G,G as S}from"./group-d2a77946.js";import{P as ye}from"./permission-435f8ef2.js";import{j as te}from"./VContainer-0c059b3f.js";import{a as _,V as se}from"./VRow-2cb2b821.js";import{V as C,u as ue}from"./VCheckbox-a0248995.js";import{_ as be}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-b415ab61.js";import{_ as re}from"./ModelDialog.vue_vue_type_script_setup_true_lang-3ef7576a.js";import{V as Ne}from"./VTextField-10836387.js";import{V as ee,c as De}from"./copyToClipboard-da064ef6.js";import{u as L}from"./nil-d01db1aa.js";import{G as Ee,A as he}from"./userData-0449de80.js";import{u as Pe}from"./useAvatar-c8774adb.js";import{_ as Ge,l as Re}from"./SaveButton.vue_vue_type_script_setup_true_lang-8be1309b.js";import{V as Ce,a as ke,c as Se}from"./VList-b2cb02cf.js";import{V as x}from"./VBtn-7ab2e771.js";import{V as Me}from"./VAvatar-eeb24497.js";import{V as Ae}from"./VDialog-b17bbb4c.js";import{e as Ye,V as Le,a as xe,c as je,d as $e}from"./VCard-c97fb22d.js";import{V as de}from"./scopeId-c1a4fedb.js";import{a as We,V as Fe}from"./VTable-1546b86c.js";import{V as Be}from"./VToolbar-006434ff.js";import{v as K}from"./v4-a960c1f4.js";import"./forwardRefs-fbcb17e9.js";import"./VChip-30fbc5ca.js";import"./createSimpleFunctional-a6d88f38.js";import"./VDivider-9b43062a.js";const me=J({__name:"EditGroupPermissions",props:B({disabled:{type:Boolean}},{modelValue:{required:!0}}),emits:["update:modelValue"],setup(R){const v=le(R,"modelValue");return(f,r)=>(V(),M(te,null,{default:a(()=>[e(se,null,{default:a(()=>[e(_,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.EditConvention,"onUpdate:modelValue":r[0]||(r[0]=m=>v.value.EditConvention=m),label:"Edit Convention","hide-details":"",disabled:f.disabled},null,8,["modelValue","disabled"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.EditOrganisation,"onUpdate:modelValue":r[1]||(r[1]=m=>v.value.EditOrganisation=m),label:"Edit Organisation","hide-details":"",disabled:f.disabled},null,8,["modelValue","disabled"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.EditPaymentTransactions,"onUpdate:modelValue":r[2]||(r[2]=m=>v.value.EditPaymentTransactions=m),label:"Manage Registration Payments","hide-details":"",disabled:f.disabled},null,8,["modelValue","disabled"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.EditRegistration,"onUpdate:modelValue":r[3]||(r[3]=m=>v.value.EditRegistration=m),label:"Edit Registrations","hide-details":"",disabled:f.disabled},null,8,["modelValue","disabled"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.ManageUsers,"onUpdate:modelValue":r[4]||(r[4]=m=>v.value.ManageUsers=m),label:"Manage Users","hide-details":"",disabled:f.disabled},null,8,["modelValue","disabled"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.ManageViews,"onUpdate:modelValue":r[5]||(r[5]=m=>v.value.ManageViews=m),label:"Manage Views","hide-details":"",disabled:f.disabled},null,8,["modelValue","disabled"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.ViewPaymentTransactions,"onUpdate:modelValue":r[6]||(r[6]=m=>v.value.ViewPaymentTransactions=m),label:"View Payment Transactions","hide-details":"",disabled:f.disabled},null,8,["modelValue","disabled"])]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.ViewRegistration,"onUpdate:modelValue":r[7]||(r[7]=m=>v.value.ViewRegistration=m),label:"View Registrations","hide-details":"",disabled:f.disabled},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),_:1}))}}),ze=J({__name:"EditGroupDialog",props:B({conventions:{},organisations:{},group:{},title:{}},{modelValue:{type:Boolean,required:!0}}),emits:B(["update:group","save"],["update:modelValue"]),setup(R,{emit:v}){const f=R,r=ae(),{conventions:m,organisations:Y,title:y=""}=f,I=le(R,"modelValue"),d=ue(f,v,void 0,void 0,"group"),t=U(W(d.value)),c=U(null);t.value.OwnerType===G.OWNER_TYPE_CONVENTION?c.value=m.filter(i=>i.ConventionUUID==t.value.OwnerUUID).map(i=>i.ConventionUUID).join(""):t.value.OwnerType===G.OWNER_TYPE_ORGANISATION?c.value=Y.filter(i=>i.OrganisationUUID==t.value.OwnerUUID).map(i=>i.OrganisationUUID).join(""):(t.value.Type===S.GROUP_TYPE_SYSTEM||t.value.Type===S.GROUP_TYPE_ADMIN)&&(c.value=null),Q(d,()=>{t.value=W(d.value)});const b=U({ID:0,PermissionUUID:L,GroupID:0,GroupUUID:L,CheckIn:!1,EditConvention:!1,EditOrganisation:!1,EditPaymentTransactions:!1,EditRegistration:!1,ViewPaymentTransactions:!1,ViewRegistration:!1,ManageUsers:!1,ManageViews:!1});r.getPermission(S.GROUP_TYPE_SYSTEM,L).then(i=>{b.value=i,E()}).catch(()=>{});const N=()=>{t.value=W(d.value),E()},g=i=>{if(c.value==null)t.value.Type=S.GROUP_TYPE_ADMIN,t.value.OwnerType=null,t.value.OwnerID=null,t.value.OwnerUUID=null;else{const o=D.value.find(n=>c.value===n.OwnerUUID);o&&(o.OwnerType==G.OWNER_TYPE_ORGANISATION?t.value.Type=S.GROUP_TYPE_ORGANISATION:o.OwnerType==G.OWNER_TYPE_CONVENTION&&(t.value.Type=S.GROUP_TYPE_CONVENTION),t.value.OwnerType=o.OwnerType,t.value.OwnerID=o.OwnerID,t.value.OwnerUUID=o.OwnerUUID)}r.saveGroup(t.value).then(o=>{o&&i&&i("Group Saved").then(()=>{d.value=o,v("save",o)})}).catch(()=>{i&&i("Failed to Save Group")})},E=()=>{const i=D.value.find(o=>t.value.OwnerUUID===o.OwnerUUID);i?c.value=i.OwnerUUID:D.value.length>0&&(c.value=null)},D=ne(()=>{const i=[];return b.value.ManageUsers&&i.push({Label:"System Admin",OwnerID:null,OwnerUUID:null,OwnerType:null}),i.push(...m.map(o=>({Label:`${o.Name} (Convention)`,OwnerID:o.ID,OwnerUUID:o.ConventionUUID,OwnerType:G.OWNER_TYPE_CONVENTION}))),i.push(...Y.map(o=>({Label:`${o.Name} (Organisation)`,OwnerID:o.ID,OwnerUUID:o.OrganisationUUID,OwnerType:G.OWNER_TYPE_ORGANISATION}))),i});return E(),(i,o)=>(V(),M(re,{modelValue:I.value,"onUpdate:modelValue":o[3]||(o[3]=n=>I.value=n),onReset:N,onSave:g,title:X(y),color:"primary","show-close-action":!0,"show-reset-action":!0,"show-save-action":!0,fullscreen:!0,persistent:!0},{default:a(()=>[e(te,{class:"pa-0",fluid:!0},{default:a(()=>[e(se,null,{default:a(()=>[e(_,{cols:"12",md:"6"},{default:a(()=>[e(Ne,{modelValue:t.value.Name,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value.Name=n),label:"Name",variant:"outlined"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12",md:"6"},{default:a(()=>[e(ee,{modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=n=>c.value=n),label:"Owner",items:D.value,"item-title":"Label","item-value":"OwnerUUID",variant:"outlined"},null,8,["modelValue","items"])]),_:1}),e(_,{cols:"12"},{default:a(()=>[e(me,{modelValue:t.value.Permission,"onUpdate:modelValue":o[2]||(o[2]=n=>t.value.Permission=n),disabled:!1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),qe=p("p",null," Are you sure you wish to remove this user? If they have permissions from another group these will still be usable. To add the user back into the group you may need to provide them with a new invite link. ",-1),He={key:1},Ke=["href","onClick"],Qe=J({__name:"EditGroupMembersDialog",props:B({group:{},title:{}},{modelValue:{type:Boolean,required:!0}}),emits:B(["update:group","save"],["update:modelValue"]),setup(R,{emit:v}){const f=R,r=ae(),m=Pe(),{title:Y=""}=f,y=le(R,"modelValue"),I=ue(f,v,void 0,void 0,"group"),d=U(W(I.value));(d.value.Users==null||d.value.Users.length==0)&&r.getGroupMembers(d.value.GroupUUID).then(n=>{n&&(d.value.Users=n)}).catch(()=>{d.value.Users=[]});const t=U(""),c=()=>{r.getGroupInvite(d.value.GroupUUID).then(n=>{if(n){const T=new URL(location.href);T.searchParams.set("token",n),t.value=T.toString()}})};c(),Q(I,()=>{d.value=W(I.value)});const b=()=>{De(t.value),c()},N=U(!1),g=U(-1),E=U(""),D=()=>{g.value=-1,N.value=!1},i=n=>{g.value=n,N.value=!0},o=({callback:n})=>{if(!d.value.Users){n&&(n("Failed to Remove User"),setTimeout(D,2e3));return}E.value="",g.value<0||g.value>=d.value.Users.length?(n&&n("Invalid Convention"),setTimeout(D,2e3)):r.removeUserFromGroup(d.value.Users[g.value].UserUUID,d.value.GroupUUID).then(T=>{var O;T?((O=d.value.Users)==null||O.splice(g.value,1),n&&n("User Removed")):n&&n("Failed to Remove User"),setTimeout(D,2e3)}).catch(()=>{n&&(n("Failed to Remove User"),setTimeout(D,2e3))})};return(n,T)=>(V(),M(re,{modelValue:y.value,"onUpdate:modelValue":T[1]||(T[1]=O=>y.value=O),title:X(Y),color:"primary",fullscreen:!0,persistent:!0},{default:a(()=>[e(te,{class:"pa-0",fluid:!0},{default:a(()=>[d.value.Users&&d.value.Users.length?(V(),P(F,{key:0},[e(Ce,null,{default:a(()=>[(V(!0),P(F,null,ie(d.value.Users,(O,$)=>(V(),M(ke,{key:O.UserUUID},{append:a(()=>[e(x,{color:"red-darken-3",icon:"mdi:mdi-window-close",size:"x-small",onClick:z=>i($)},null,8,["onClick"])]),prepend:a(()=>[e(Me,{src:X(m)(O.UserUUID),class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])]),default:a(()=>[e(Se,null,{default:a(()=>[A(k(O.DisplayName)+" "+k(O.Handle?`(${O.Handle})`:""),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(Ae,{modelValue:N.value,"onUpdate:modelValue":T[0]||(T[0]=O=>N.value=O),width:"auto"},{default:a(()=>[e(Ye,null,{default:a(()=>[e(Le,null,{default:a(()=>[A(" Remove User from Group ")]),_:1}),e(xe,null,{default:a(()=>[A(" User will no longer have the permissions from this group. ")]),_:1}),e(je,null,{default:a(()=>[e(se,null,{default:a(()=>[e(_,null,{default:a(()=>[qe]),_:1})]),_:1})]),_:1}),e($e,null,{default:a(()=>[e(x,{color:"primary",onClick:D},{default:a(()=>[A("Cancel")]),_:1}),e(de),e(Ge,{color:"red-darken-3",label:"Remove User",onClick:o})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)):(V(),P("p",He," No members "))]),_:1})]),actions:a(()=>[e(x,{variant:"text"},{default:a(()=>[p("a",{href:t.value,onClick:Te(b,["prevent"])},"Invite URL",8,Ke)]),_:1})]),_:1},8,["modelValue","title"]))}}),Xe=p("h1",{class:"text-center mt-5"},"Processing Invite...",-1),Je={key:0,class:"text-center mt-5 text-red text-h5"},Ze={key:1,class:"text-center mt-5"},el=p("thead",null,[p("tr",null,[p("th",null,"Name"),p("th",{class:"d-none d-md-table-cell"}," Owner "),p("th",null,"Permissions"),p("th")])],-1),ll={class:"d-block d-md-none mt-2"},al=p("strong",null,"Owner",-1),tl=p("br",null,null,-1),sl=p("br",null,null,-1),ol={class:"d-none d-md-table-cell"},nl=p("br",null,null,-1),il=p("br",null,null,-1),ul=p("br",null,null,-1),Ml=J({__name:"GroupsView",emits:["pageTitle"],setup(R,{emit:v}){v("pageTitle","Manage Groups & Permissions");const f=ae(),r=Ee(),m=we(),Y=U(!1),y=U(),I=U(),d=U([]),t=U([]),c=U([]),b=U(!1),N=U(!1),g=U(!1),E=U(""),i=new URL(location.href).searchParams.get("token")||"",o=l=>{const u=()=>{const s=sessionStorage.getItem("gjt_attempt");let q=Re.parseInt(s||"0");q<2?(sessionStorage.setItem("gjt_attempt",(q+1).toString()),setTimeout(()=>{location.reload()},2e3)):(sessionStorage.removeItem("gjt_attempt"),localStorage.removeItem("gjt_token"),E.value="There was a problem with this token, it may have expired or already been used.",setTimeout(()=>{m.push("/")},5e3))};f.validateGroupInviteToken(l).then(s=>{s?(he(s),localStorage.removeItem("gjt_token"),sessionStorage.setItem("reload","true"),m.push("/")):u()}).catch(()=>{u()})};i!==""?(localStorage.setItem("gjt_token",location.href),o(i)):(Y.value=!0,(!r||!r.Groups.find(l=>l.Permission.ManageUsers))&&m.push("/")),Q(y,()=>{$(I.value,y.value)}),Q(I,()=>{$(I.value,y.value)});const n=l=>l.OwnerType===G.OWNER_TYPE_CONVENTION?d.value.filter(u=>u.ConventionUUID===l.OwnerUUID).map(u=>u.Name).join(""):l.OwnerType===G.OWNER_TYPE_ORGANISATION?c.value.filter(u=>u.OrganisationUUID===l.OwnerUUID).map(u=>u.Name).join(""):l.OwnerType===void 0||l.OwnerType===null?"System":"Unknown",T=l=>l.OwnerType===G.OWNER_TYPE_CONVENTION?"Convention":l.OwnerType===G.OWNER_TYPE_ORGANISATION?"Organisation":l.OwnerType===void 0||l.OwnerType===null?"Global":"Unknown",O=()=>{f.getPermissionAccessList(ye.PERMISSION_TYPE_MANAGE_USERS).then(l=>{d.value=l.Conventions,c.value=l.Organisations}).catch(()=>{})},$=(l=L,u=L)=>{f.getManageableGroups(l||L,u||L).then(s=>{s&&(t.value=s)}).catch(()=>{})},z=()=>{const l={ID:0,GroupUUID:K(),Type:S.GROUP_TYPE_CONVENTION,Name:"",MinimumNumbers:0,Permission:{ID:0,PermissionUUID:K(),GroupID:0,GroupUUID:K(),CheckIn:!1,EditConvention:!1,EditOrganisation:!1,EditPaymentTransactions:!1,EditRegistration:!1,ManageUsers:!1,ManageViews:!1,ViewPaymentTransactions:!1,ViewRegistration:!1},Users:[],OwnerID:null,OwnerType:null,OwnerUUID:null};return l.Permission.GroupUUID=l.GroupUUID,l},Z=U(z()),h=U(-1),w=U(z()),ve=ne(()=>h.value===-1?"New Group":"Edit Group"),pe=()=>{Z.value.GroupUUID=K(),w.value=Object.assign({},z()),h.value=-1,b.value=!0},Ue=l=>{h.value=t.value.indexOf(l),w.value=Object.assign({},l),N.value=!0},fe=l=>{h.value=t.value.indexOf(l),w.value=Object.assign({},l),b.value=!0},ce=l=>{h.value=t.value.indexOf(l),w.value=Object.assign({},l),g.value=!0},Ve=()=>{f.deleteGroup(w.value.GroupUUID).then(l=>{l&&(t.value.splice(h.value,1),Ie())})},Oe=()=>{b.value=!1,oe(()=>{w.value=Object.assign({},Z.value),h.value=-1})},Ie=()=>{g.value=!1,oe(()=>{w.value=Object.assign({},Z.value),h.value=-1})},ge=l=>{h.value>-1?Object.assign(t.value[h.value],l):t.value.push(l),Oe()};return O(),$(I.value,y.value),(l,u)=>(V(),P("div",null,[Y.value?(V(),P(F,{key:1},[e(Be,{color:"primary"},{default:a(()=>[e(ee,{label:"Organisation",modelValue:I.value,"onUpdate:modelValue":u[0]||(u[0]=s=>I.value=s),items:c.value,"item-value":"OrganisationUUID","item-title":"Name",clearable:!0,"hide-details":"",class:"mr-1"},null,8,["modelValue","items"]),e(ee,{label:"Convention",modelValue:y.value,"onUpdate:modelValue":u[1]||(u[1]=s=>y.value=s),items:d.value,"item-value":"ConventionUUID","item-title":"Name",clearable:!0,"hide-details":""},null,8,["modelValue","items"]),e(de),e(x,{dark:"",class:"mb-2","prepend-icon":"mdi:mdi-pencil",onClick:pe},{default:a(()=>[A(" New Group ")]),_:1}),e(be,{modelValue:g.value,"onUpdate:modelValue":u[2]||(u[2]=s=>g.value=s),onDelete:Ve},null,8,["modelValue"])]),_:1}),b.value?(V(),M(ze,{key:0,modelValue:b.value,"onUpdate:modelValue":u[3]||(u[3]=s=>b.value=s),group:w.value,"onUpdate:group":u[4]||(u[4]=s=>w.value=s),onSave:ge,title:ve.value,conventions:d.value,organisations:c.value},null,8,["modelValue","group","title","conventions","organisations"])):j("",!0),N.value?(V(),M(Qe,{key:1,modelValue:N.value,"onUpdate:modelValue":u[5]||(u[5]=s=>N.value=s),group:w.value,"onUpdate:group":u[6]||(u[6]=s=>w.value=s),title:`${w.value.Name}`},null,8,["modelValue","group","title"])):j("",!0),e(Fe,null,{default:a(()=>[el,p("tbody",null,[(V(!0),P(F,null,ie(t.value,(s,q)=>(V(),P("tr",{key:s.GroupUUID,class:_e(q%2?"bg-grey-lighten-4":"")},[p("td",null,[A(k(s.Name)+" ",1),p("p",ll,[al,tl,A(" "+k(n(s)),1),sl,p("small",null,"("+k(T(s))+")",1)])]),p("td",ol,[A(k(n(s)),1),nl,p("small",null,"("+k(T(s))+")",1)]),p("td",null,[s.Permission?(V(),M(me,{key:0,modelValue:s.Permission,"onUpdate:modelValue":H=>s.Permission=H,disabled:!0},null,8,["modelValue","onUpdate:modelValue"])):j("",!0)]),p("td",null,[e(x,{icon:"mdi:mdi-account-group",size:"x-small",color:"success",class:"mb-1",onClick:H=>Ue(s)},null,8,["onClick"]),il,s.Type!==X(S).GROUP_TYPE_SYSTEM?(V(),P(F,{key:0},[e(x,{icon:"mdi:mdi-pencil",size:"x-small",color:"primary",class:"mb-1",onClick:H=>fe(s)},null,8,["onClick"]),ul,e(x,{icon:"mdi:mdi-delete",size:"x-small",color:"error",class:"mb-1",onClick:H=>ce(s)},null,8,["onClick"])],64)):j("",!0)])],2))),128))])]),_:1})],64)):(V(),M(We,{key:0,elevation:"2",class:"pa-4"},{default:a(()=>[Xe,E.value?(V(),P("p",Je,k(E.value),1)):j("",!0),E.value?(V(),P("p",Ze,"Please contact your admin and request a new one")):j("",!0)]),_:1}))]))}});export{Ml as default};
