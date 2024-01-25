import{i as Z,M as z,N as ae,n as c,q as A,v as a,f as e,r as f,k as B,w as J,c as ie,C as K,P as te,B as P,F as W,Q as ue,x as Y,D as p,z as we,y as M,A as j,U as _e,X as ne,a2 as be}from"./index-qxDaNdmW.js";import{O as G,G as S}from"./group-7fhbY6WJ.js";import{P as ye}from"./permission-TSqmE8kt.js";import{a as T,V as oe}from"./VRow-0joQ6avW.js";import{V as C}from"./VCheckbox-EZb59K9e.js";import{a as se}from"./VContainer--8Yh9_lo.js";import{_ as Ne}from"./DeleteDialog.vue_vue_type_script_setup_true_lang-DJwH6NBJ.js";import{u as re}from"./VCheckboxBtn-MjxQbhxv.js";import{_ as de}from"./ModelDialog.vue_vue_type_script_setup_true_lang-0j3wsUwb.js";import{V as De}from"./VTextField-v1w0WjcD.js";import{V as le}from"./VSelect-ZPOVRhSp.js";import{u as L}from"./nil-rxyd0N8M.js";import{G as he,A as Ee}from"./userData-1XvFSlIL.js";import{u as Pe}from"./useAvatar-VJmtYWxh.js";import{_ as Ge,l as Ce}from"./SaveButton.vue_vue_type_script_setup_true_lang-njbZoRnY.js";import{c as Re}from"./copyToClipboard-aCoRGJiH.js";import{V as ke,a as Me,c as Se}from"./VList-_DRPJpxf.js";import{V as Ae}from"./VDialog-VbNTGXMC.js";import{e as Ye,a as Le,b as xe,c as $e,d as je}from"./VCard-czP0Tocg.js";import{V as x}from"./VBtn-Z2Y_q0bw.js";import{V as me}from"./scopeId-BXLb_qM2.js";import{V as Fe}from"./VAvatar-5eNdf9u8.js";import{a as Be,V as We}from"./VTable-Os2sskrs.js";import{V as ze}from"./VToolbar-g1R_CXgH.js";import{v as X}from"./v4-yQnnJER4.js";import"./forwardRefs-pvmbbguz.js";import"./VChip-P7Hrmz26.js";import"./createSimpleFunctional-EIemeP1T.js";import"./VDivider--iWefNez.js";const ve=Z({__name:"EditGroupPermissions",props:z({disabled:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(R){const v=ae(R,"modelValue");return(V,i)=>(c(),A(se,null,{default:a(()=>[e(oe,null,{default:a(()=>[e(T,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.CheckIn,"onUpdate:modelValue":i[0]||(i[0]=m=>v.value.CheckIn=m),label:"Check In","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(T,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.EditConvention,"onUpdate:modelValue":i[1]||(i[1]=m=>v.value.EditConvention=m),label:"Edit Convention","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(T,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.EditOrganisation,"onUpdate:modelValue":i[2]||(i[2]=m=>v.value.EditOrganisation=m),label:"Edit Organisation","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(T,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.EditPaymentTransactions,"onUpdate:modelValue":i[3]||(i[3]=m=>v.value.EditPaymentTransactions=m),label:"Manage Registration Payments","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(T,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.EditRegistration,"onUpdate:modelValue":i[4]||(i[4]=m=>v.value.EditRegistration=m),label:"Edit Registrations","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(T,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.ManageUsers,"onUpdate:modelValue":i[5]||(i[5]=m=>v.value.ManageUsers=m),label:"Manage Users","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(T,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.ManageViews,"onUpdate:modelValue":i[6]||(i[6]=m=>v.value.ManageViews=m),label:"Manage Views","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(T,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.ViewPaymentTransactions,"onUpdate:modelValue":i[7]||(i[7]=m=>v.value.ViewPaymentTransactions=m),label:"View Payment Transactions","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1}),e(T,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(C,{modelValue:v.value.ViewRegistration,"onUpdate:modelValue":i[8]||(i[8]=m=>v.value.ViewRegistration=m),label:"View Registrations","hide-details":"",disabled:V.disabled},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),_:1}))}}),qe=Z({__name:"EditGroupDialog",props:z({conventions:{},organisations:{},group:{},title:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:z(["update:group","save"],["update:modelValue"]),setup(R,{emit:v}){const V=R,i=te(),{conventions:m,organisations:k,title:$=""}=V,w=v,I=ae(R,"modelValue"),d=re(V,w,void 0,void 0,"group"),t=f(B(d.value)),U=f(null);t.value.OwnerType===G.OWNER_TYPE_CONVENTION?U.value=m.filter(u=>u.ConventionUUID==t.value.OwnerUUID).map(u=>u.ConventionUUID).join(""):t.value.OwnerType===G.OWNER_TYPE_ORGANISATION?U.value=k.filter(u=>u.OrganisationUUID==t.value.OwnerUUID).map(u=>u.OrganisationUUID).join(""):(t.value.Type===S.GROUP_TYPE_SYSTEM||t.value.Type===S.GROUP_TYPE_ADMIN)&&(U.value=null),J(d,()=>{t.value=B(d.value)});const y=f({ID:0,PermissionUUID:L,GroupID:0,GroupUUID:L,CheckIn:!1,EditConvention:!1,EditOrganisation:!1,EditPaymentTransactions:!1,EditRegistration:!1,ViewPaymentTransactions:!1,ViewRegistration:!1,ManageUsers:!1,ManageViews:!1});i.getPermission(S.GROUP_TYPE_SYSTEM,L).then(u=>{y.value=u,h()}).catch(()=>{});const N=()=>{t.value=B(d.value),h()},g=u=>{if(U.value==null)t.value.Type=S.GROUP_TYPE_ADMIN,t.value.OwnerType=null,t.value.OwnerID=null,t.value.OwnerUUID=null;else{const s=D.value.find(n=>U.value===n.OwnerUUID);s&&(s.OwnerType==G.OWNER_TYPE_ORGANISATION?t.value.Type=S.GROUP_TYPE_ORGANISATION:s.OwnerType==G.OWNER_TYPE_CONVENTION&&(t.value.Type=S.GROUP_TYPE_CONVENTION),t.value.OwnerType=s.OwnerType,t.value.OwnerID=s.OwnerID,t.value.OwnerUUID=s.OwnerUUID)}i.saveGroup(t.value).then(s=>{s&&u&&u("Group Saved").then(()=>{d.value=s,w("save",s)})}).catch(()=>{u&&u("Failed to Save Group")})},h=()=>{const u=D.value.find(s=>t.value.OwnerUUID===s.OwnerUUID);u?U.value=u.OwnerUUID:D.value.length>0&&(U.value=null)},D=ie(()=>{const u=[];return y.value.ManageUsers&&u.push({Label:"System Admin",OwnerID:null,OwnerUUID:null,OwnerType:null}),u.push(...m.map(s=>({Label:`${s.Name} (Convention)`,OwnerID:s.ID,OwnerUUID:s.ConventionUUID,OwnerType:G.OWNER_TYPE_CONVENTION}))),u.push(...k.map(s=>({Label:`${s.Name} (Organisation)`,OwnerID:s.ID,OwnerUUID:s.OrganisationUUID,OwnerType:G.OWNER_TYPE_ORGANISATION}))),u});return h(),(u,s)=>(c(),A(de,{modelValue:I.value,"onUpdate:modelValue":s[3]||(s[3]=n=>I.value=n),onReset:N,onSave:g,title:K($),color:"primary","show-close-action":!0,"show-reset-action":!0,"show-save-action":!0,fullscreen:!0,persistent:!0},{default:a(()=>[e(se,{class:"pa-0",fluid:!0},{default:a(()=>[e(oe,null,{default:a(()=>[e(T,{cols:"12",md:"6"},{default:a(()=>[e(De,{modelValue:t.value.Name,"onUpdate:modelValue":s[0]||(s[0]=n=>t.value.Name=n),label:"Name",variant:"outlined"},null,8,["modelValue"])]),_:1}),e(T,{cols:"12",md:"6"},{default:a(()=>[e(le,{modelValue:U.value,"onUpdate:modelValue":s[1]||(s[1]=n=>U.value=n),label:"Owner",items:D.value,"item-title":"Label","item-value":"OwnerUUID",variant:"outlined"},null,8,["modelValue","items"])]),_:1}),e(T,{cols:"12"},{default:a(()=>[e(ve,{modelValue:t.value.Permission,"onUpdate:modelValue":s[2]||(s[2]=n=>t.value.Permission=n),disabled:!1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),He=p("p",null," Are you sure you wish to remove this user? If they have permissions from another group these will still be usable. To add the user back into the group you may need to provide them with a new invite link. ",-1),Qe={key:1},Xe=["href"],Je=Z({__name:"EditGroupMembersDialog",props:z({group:{},title:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:z(["update:group","save"],["update:modelValue"]),setup(R,{emit:v}){const V=R,i=te(),m=Pe(),{title:k=""}=V,$=v,w=ae(R,"modelValue"),I=re(V,$,void 0,void 0,"group"),d=f(B(I.value));(d.value.Users==null||d.value.Users.length==0)&&i.getGroupMembers(d.value.GroupUUID).then(n=>{n&&(d.value.Users=n)}).catch(()=>{d.value.Users=[]});const t=f(""),U=()=>{i.getGroupInvite(d.value.GroupUUID).then(n=>{if(n){const _=new URL(location.href);_.searchParams.set("token",n),t.value=_.toString()}})};U(),J(I,()=>{d.value=B(I.value)});const y=()=>{Re(t.value),U()},N=f(!1),g=f(-1),h=f(""),D=()=>{g.value=-1,N.value=!1},u=n=>{g.value=n,N.value=!0},s=({callback:n})=>{if(!d.value.Users){n&&(n("Failed to Remove User"),setTimeout(D,2e3));return}h.value="",g.value<0||g.value>=d.value.Users.length?(n&&n("Invalid Convention"),setTimeout(D,2e3)):i.removeUserFromGroup(d.value.Users[g.value].UserUUID,d.value.GroupUUID).then(_=>{var O;_?((O=d.value.Users)==null||O.splice(g.value,1),n&&n("User Removed")):n&&n("Failed to Remove User"),setTimeout(D,2e3)}).catch(()=>{n&&(n("Failed to Remove User"),setTimeout(D,2e3))})};return(n,_)=>(c(),A(de,{modelValue:w.value,"onUpdate:modelValue":_[1]||(_[1]=O=>w.value=O),title:K(k),color:"primary",fullscreen:!0,persistent:!0},{default:a(()=>[e(se,{class:"pa-0",fluid:!0},{default:a(()=>[d.value.Users&&d.value.Users.length?(c(),P(W,{key:0},[e(ke,null,{default:a(()=>[(c(!0),P(W,null,ue(d.value.Users,(O,F)=>(c(),A(Me,{key:O.UserUUID},{append:a(()=>[e(x,{color:"red-darken-3",icon:"mdi:mdi-window-close",size:"x-small",onClick:q=>u(F)},null,8,["onClick"])]),prepend:a(()=>[e(Fe,{src:K(m)(O.UserUUID),class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])]),default:a(()=>[e(Se,null,{default:a(()=>[Y(M(O.DisplayName)+" "+M(O.Handle?`(${O.Handle})`:""),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(Ae,{modelValue:N.value,"onUpdate:modelValue":_[0]||(_[0]=O=>N.value=O),width:"auto"},{default:a(()=>[e(Ye,null,{default:a(()=>[e(Le,null,{default:a(()=>[Y(" Remove User from Group ")]),_:1}),e(xe,null,{default:a(()=>[Y(" User will no longer have the permissions from this group. ")]),_:1}),e($e,null,{default:a(()=>[e(oe,null,{default:a(()=>[e(T,null,{default:a(()=>[He]),_:1})]),_:1})]),_:1}),e(je,null,{default:a(()=>[e(x,{color:"primary",onClick:D},{default:a(()=>[Y("Cancel")]),_:1}),e(me),e(Ge,{color:"red-darken-3",label:"Remove User",onClick:s})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)):(c(),P("p",Qe," No members "))]),_:1})]),actions:a(()=>[e(x,{variant:"text"},{default:a(()=>[p("a",{href:t.value,onClick:we(y,["prevent"])},"Invite URL",8,Xe)]),_:1})]),_:1},8,["modelValue","title"]))}}),Ke=p("h1",{class:"text-center mt-5"},"Processing Invite...",-1),Ze={key:0,class:"text-center mt-5 text-red text-h5"},el={key:1,class:"text-center mt-5"},ll=p("thead",null,[p("tr",null,[p("th",null,"Name"),p("th",{class:"d-none d-md-table-cell"}," Owner "),p("th",null,"Permissions"),p("th")])],-1),al={class:"d-block d-md-none mt-2"},tl=p("strong",null,"Owner",-1),ol=p("br",null,null,-1),sl=p("br",null,null,-1),nl={class:"d-none d-md-table-cell"},il=p("br",null,null,-1),ul=p("br",null,null,-1),rl=p("br",null,null,-1),Ll=Z({__name:"GroupsView",emits:["pageTitle"],setup(R,{emit:v}){v("pageTitle","Manage Groups & Permissions");const i=te(),m=he(),k=_e(),$=f(!1),w=f(),I=f(),d=f([]),t=f([]),U=f([]),y=f(!1),N=f(!1),g=f(!1),h=f(""),u=new URL(location.href).searchParams.get("token")||"",s=l=>{const r=()=>{const o=sessionStorage.getItem("gjt_attempt");let H=Ce.parseInt(o||"0");H<2?(sessionStorage.setItem("gjt_attempt",(H+1).toString()),setTimeout(()=>{location.reload()},2e3)):(sessionStorage.removeItem("gjt_attempt"),localStorage.removeItem("gjt_token"),h.value="There was a problem with this token, it may have expired or already been used.",setTimeout(()=>{k.push("/")},5e3))};i.validateGroupInviteToken(l).then(o=>{o?(Ee(o),localStorage.removeItem("gjt_token"),sessionStorage.setItem("reload","true"),k.push("/")):r()}).catch(()=>{r()})};u!==""?(localStorage.setItem("gjt_token",location.href),s(u)):($.value=!0,(!m||!m.Groups.find(l=>l.Permission.ManageUsers))&&k.push("/")),J(w,()=>{F(I.value,w.value)}),J(I,()=>{F(I.value,w.value)});const n=l=>l.OwnerType===G.OWNER_TYPE_CONVENTION?d.value.filter(r=>r.ConventionUUID===l.OwnerUUID).map(r=>r.Name).join(""):l.OwnerType===G.OWNER_TYPE_ORGANISATION?U.value.filter(r=>r.OrganisationUUID===l.OwnerUUID).map(r=>r.Name).join(""):l.OwnerType===void 0||l.OwnerType===null?"System":"Unknown",_=l=>l.OwnerType===G.OWNER_TYPE_CONVENTION?"Convention":l.OwnerType===G.OWNER_TYPE_ORGANISATION?"Organisation":l.OwnerType===void 0||l.OwnerType===null?"Global":"Unknown",O=()=>{i.getPermissionAccessList(ye.PERMISSION_TYPE_MANAGE_USERS).then(l=>{d.value=l.Conventions,U.value=l.Organisations}).catch(()=>{})},F=(l=L,r=L)=>{i.getManageableGroups(l||L,r||L).then(o=>{o&&(t.value=o)}).catch(()=>{})},q=()=>{const l={ID:0,GroupUUID:X(),Type:S.GROUP_TYPE_CONVENTION,Name:"",MinimumNumbers:0,Permission:{ID:0,PermissionUUID:X(),GroupID:0,GroupUUID:X(),CheckIn:!1,EditConvention:!1,EditOrganisation:!1,EditPaymentTransactions:!1,EditRegistration:!1,ManageUsers:!1,ManageViews:!1,ViewPaymentTransactions:!1,ViewRegistration:!1},Users:[],OwnerID:null,OwnerType:null,OwnerUUID:null};return l.Permission.GroupUUID=l.GroupUUID,l},ee=f(q()),E=f(-1),b=f(q()),pe=ie(()=>E.value===-1?"New Group":"Edit Group"),fe=()=>{ee.value.GroupUUID=X(),b.value=Object.assign({},q()),E.value=-1,y.value=!0},Ue=l=>{E.value=t.value.indexOf(l),b.value=Object.assign({},l),N.value=!0},ce=l=>{E.value=t.value.indexOf(l),b.value=Object.assign({},l),y.value=!0},Ve=l=>{E.value=t.value.indexOf(l),b.value=Object.assign({},l),g.value=!0},Oe=()=>{i.deleteGroup(b.value.GroupUUID).then(l=>{l&&(t.value.splice(E.value,1),ge())})},Ie=()=>{y.value=!1,ne(()=>{b.value=Object.assign({},ee.value),E.value=-1})},ge=()=>{g.value=!1,ne(()=>{b.value=Object.assign({},ee.value),E.value=-1})},Te=l=>{E.value>-1?Object.assign(t.value[E.value],l):t.value.push(l),Ie()};return O(),F(I.value,w.value),(l,r)=>(c(),P("div",null,[$.value?(c(),P(W,{key:1},[e(ze,{color:"primary"},{default:a(()=>[e(le,{label:"Organisation",modelValue:I.value,"onUpdate:modelValue":r[0]||(r[0]=o=>I.value=o),items:U.value,"item-value":"OrganisationUUID","item-title":"Name",clearable:!0,"hide-details":"",class:"mr-1"},null,8,["modelValue","items"]),e(le,{label:"Convention",modelValue:w.value,"onUpdate:modelValue":r[1]||(r[1]=o=>w.value=o),items:d.value,"item-value":"ConventionUUID","item-title":"Name",clearable:!0,"hide-details":""},null,8,["modelValue","items"]),e(me),e(x,{dark:"",class:"mb-2","prepend-icon":"mdi:mdi-pencil",onClick:fe},{default:a(()=>[Y(" New Group ")]),_:1}),e(Ne,{modelValue:g.value,"onUpdate:modelValue":r[2]||(r[2]=o=>g.value=o),onDelete:Oe},null,8,["modelValue"])]),_:1}),y.value?(c(),A(qe,{key:0,modelValue:y.value,"onUpdate:modelValue":r[3]||(r[3]=o=>y.value=o),group:b.value,"onUpdate:group":r[4]||(r[4]=o=>b.value=o),onSave:Te,title:pe.value,conventions:d.value,organisations:U.value},null,8,["modelValue","group","title","conventions","organisations"])):j("",!0),N.value?(c(),A(Je,{key:1,modelValue:N.value,"onUpdate:modelValue":r[5]||(r[5]=o=>N.value=o),group:b.value,"onUpdate:group":r[6]||(r[6]=o=>b.value=o),title:`${b.value.Name}`},null,8,["modelValue","group","title"])):j("",!0),e(We,null,{default:a(()=>[ll,p("tbody",null,[(c(!0),P(W,null,ue(t.value,(o,H)=>(c(),P("tr",{key:o.GroupUUID,class:be(H%2?"bg-grey-lighten-4":"")},[p("td",null,[Y(M(o.Name)+" ",1),p("p",al,[tl,ol,Y(" "+M(n(o)),1),sl,p("small",null,"("+M(_(o))+")",1)])]),p("td",nl,[Y(M(n(o)),1),il,p("small",null,"("+M(_(o))+")",1)]),p("td",null,[o.Permission?(c(),A(ve,{key:0,modelValue:o.Permission,"onUpdate:modelValue":Q=>o.Permission=Q,disabled:!0},null,8,["modelValue","onUpdate:modelValue"])):j("",!0)]),p("td",null,[e(x,{icon:"mdi:mdi-account-group",size:"x-small",color:"success",class:"mb-1",onClick:Q=>Ue(o)},null,8,["onClick"]),ul,o.Type!==K(S).GROUP_TYPE_SYSTEM?(c(),P(W,{key:0},[e(x,{icon:"mdi:mdi-pencil",size:"x-small",color:"primary",class:"mb-1",onClick:Q=>ce(o)},null,8,["onClick"]),rl,e(x,{icon:"mdi:mdi-delete",size:"x-small",color:"error",class:"mb-1",onClick:Q=>Ve(o)},null,8,["onClick"])],64)):j("",!0)])],2))),128))])]),_:1})],64)):(c(),A(Be,{key:0,elevation:"2",class:"pa-4"},{default:a(()=>[Ke,h.value?(c(),P("p",Ze,M(h.value),1)):j("",!0),h.value?(c(),P("p",el,"Please contact your admin and request a new one")):j("",!0)]),_:1}))]))}});export{Ll as default};