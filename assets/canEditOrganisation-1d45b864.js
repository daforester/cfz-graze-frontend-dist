import{O as R,G as E}from"./group-d2a77946.js";import{u as f}from"./nil-d01db1aa.js";const e=(n,s)=>{n.EditConvention=n.EditConvention||s.EditConvention,n.EditOrganisation=n.EditOrganisation||s.EditOrganisation,n.EditRegistration=n.EditRegistration||s.EditRegistration,n.ManageUsers=n.ManageUsers||s.ManageUsers,n.ManageViews=n.ManageViews||s.ManageViews,n.ViewRegistration=n.ViewRegistration||s.ViewRegistration},U=(n,s,a="",l=void 0)=>{const d=n.Groups;a==""&&(a=f);const O={ID:0,PermissionUUID:f,GroupID:0,GroupUUID:f,EditConvention:!1,EditRegistration:!1,EditOrganisation:!1,ManageUsers:!1,ManageViews:!1,ViewRegistration:!1},P=R.OWNER_TYPE_CONVENTION,w=R.OWNER_TYPE_ORGANISATION;return d&&d.length>0&&d.forEach(i=>{i.OwnerType==P&&(i.Permission.EditOrganisation=!1),s==null?e(O,i.Permission):s==E.GROUP_TYPE_SYSTEM||s==E.GROUP_TYPE_ADMIN?i.OwnerType==null&&e(O,i.Permission):s==E.GROUP_TYPE_ORGANISATION?(i.OwnerType==null||i.OwnerType==w&&i.OwnerUUID!=null&&i.OwnerUUID==a)&&e(O,i.Permission):s==E.GROUP_TYPE_CONVENTION&&(i.OwnerType==null||i.OwnerType==w&&i.OwnerUUID!=null&&(i.OwnerUUID==(l==null?void 0:l.OrganisationUUID)||l===void 0&&a===f)||i.OwnerType==P&&i.OwnerUUID!=null&&(i.OwnerUUID==a||l===void 0&&a===f))&&e(O,i.Permission)}),O},_=(n=void 0,s=void 0)=>n===void 0?!1:s===void 0?U(n,E.GROUP_TYPE_ORGANISATION).EditConvention:U(n,E.GROUP_TYPE_ORGANISATION,s.OrganisationUUID).EditConvention;export{U as C,_ as a};
