<<<<<<<< HEAD:assets/canEditOrganisation-229656eb.js
import{O as w,G as E}from"./group-d2a77946.js";import{u as d}from"./VToolbar-e4b1ee93.js";const e=(n,s)=>{n.EditConvention=n.EditConvention||s.EditConvention,n.EditOrganisation=n.EditOrganisation||s.EditOrganisation,n.EditRegistration=n.EditRegistration||s.EditRegistration,n.ManageUsers=n.ManageUsers||s.ManageUsers,n.ManageViews=n.ManageViews||s.ManageViews,n.ViewRegistration=n.ViewRegistration||s.ViewRegistration},R=(n,s,a="",l=void 0)=>{const U=n.Groups;a==""&&(a=d);const O={ID:0,PermissionUUID:d,GroupID:0,GroupUUID:d,EditConvention:!1,EditRegistration:!1,EditOrganisation:!1,ManageUsers:!1,ManageViews:!1,ViewRegistration:!1},f=w.OWNER_TYPE_CONVENTION,P=w.OWNER_TYPE_ORGANISATION;return U.forEach(i=>{i.OwnerType==f&&(i.Permission.EditOrganisation=!1),s==null?e(O,i.Permission):s==E.GROUP_TYPE_SYSTEM||s==E.GROUP_TYPE_ADMIN?i.OwnerType==null&&e(O,i.Permission):s==E.GROUP_TYPE_ORGANISATION?(i.OwnerType==null||i.OwnerType==P&&i.OwnerUUID!=null&&i.OwnerUUID==a)&&e(O,i.Permission):s==E.GROUP_TYPE_CONVENTION&&(i.OwnerType==null||i.OwnerType==P&&i.OwnerUUID!=null&&(i.OwnerUUID==(l==null?void 0:l.OrganisationUUID)||l===void 0&&a===d)||i.OwnerType==f&&i.OwnerUUID!=null&&(i.OwnerUUID==a||l===void 0&&a===d))&&e(O,i.Permission)}),O},_=(n=void 0,s=void 0)=>n===void 0?!1:s===void 0?R(n,E.GROUP_TYPE_ORGANISATION).EditConvention:R(n,E.GROUP_TYPE_ORGANISATION,s.OrganisationUUID).EditConvention;export{R as C,_ as a};
========
import{O as w,G as E}from"./group-d2a77946.js";import{u as d}from"./VToolbar-8ebd3c67.js";const e=(n,s)=>{n.EditConvention=n.EditConvention||s.EditConvention,n.EditOrganisation=n.EditOrganisation||s.EditOrganisation,n.EditRegistration=n.EditRegistration||s.EditRegistration,n.ManageUsers=n.ManageUsers||s.ManageUsers,n.ManageViews=n.ManageViews||s.ManageViews,n.ViewRegistration=n.ViewRegistration||s.ViewRegistration},R=(n,s,a="",l=void 0)=>{const U=n.Groups;a==""&&(a=d);const O={ID:0,PermissionUUID:d,GroupID:0,GroupUUID:d,EditConvention:!1,EditRegistration:!1,EditOrganisation:!1,ManageUsers:!1,ManageViews:!1,ViewRegistration:!1},f=w.OWNER_TYPE_CONVENTION,P=w.OWNER_TYPE_ORGANISATION;return U.forEach(i=>{i.OwnerType==f&&(i.Permission.EditOrganisation=!1),s==null?e(O,i.Permission):s==E.GROUP_TYPE_SYSTEM||s==E.GROUP_TYPE_ADMIN?i.OwnerType==null&&e(O,i.Permission):s==E.GROUP_TYPE_ORGANISATION?(i.OwnerType==null||i.OwnerType==P&&i.OwnerUUID!=null&&i.OwnerUUID==a)&&e(O,i.Permission):s==E.GROUP_TYPE_CONVENTION&&(i.OwnerType==null||i.OwnerType==P&&i.OwnerUUID!=null&&(i.OwnerUUID==(l==null?void 0:l.OrganisationUUID)||l===void 0&&a===d)||i.OwnerType==f&&i.OwnerUUID!=null&&(i.OwnerUUID==a||l===void 0&&a===d))&&e(O,i.Permission)}),O},_=(n=void 0,s=void 0)=>n===void 0?!1:s===void 0?R(n,E.GROUP_TYPE_ORGANISATION).EditConvention:R(n,E.GROUP_TYPE_ORGANISATION,s.OrganisationUUID).EditConvention;export{R as C,_ as a};
>>>>>>>> 06d630c5c72ef68f7325c4ebee577742bf9a278d:assets/canEditOrganisation-f68b643a.js
