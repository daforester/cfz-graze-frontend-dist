import{O as t,G as P}from"./group-d2a77946.js";import{u as E}from"./nil-d01db1aa.js";const e=(i,a)=>{i.CheckIn=i.CheckIn||a.CheckIn,i.EditConvention=i.EditConvention||a.EditConvention,i.EditOrganisation=i.EditOrganisation||a.EditOrganisation,i.EditPaymentTransactions=i.EditPaymentTransactions||a.EditPaymentTransactions,i.EditRegistration=i.EditRegistration||a.EditRegistration,i.ManageUsers=i.ManageUsers||a.ManageUsers,i.ManageViews=i.ManageViews||a.ManageViews,i.ViewPaymentTransactions=i.ViewPaymentTransactions||a.ViewPaymentTransactions,i.ViewRegistration=i.ViewRegistration||a.ViewRegistration},U=(i,a,O="",l=void 0)=>{const f=i.Groups;O==""&&(O=E);const s={ID:0,PermissionUUID:E,GroupID:0,GroupUUID:E,CheckIn:!1,EditConvention:!1,EditRegistration:!1,EditOrganisation:!1,EditPaymentTransactions:!1,ManageUsers:!1,ManageViews:!1,ViewPaymentTransactions:!1,ViewRegistration:!1},w=t.OWNER_TYPE_CONVENTION,d=t.OWNER_TYPE_ORGANISATION;return f&&f.length>0&&f.forEach(n=>{n.OwnerType==w&&(n.Permission.EditOrganisation=!1),a==null?e(s,n.Permission):a==P.GROUP_TYPE_SYSTEM||a==P.GROUP_TYPE_ADMIN?n.OwnerType==null&&e(s,n.Permission):a==P.GROUP_TYPE_ORGANISATION?(n.OwnerType==null||n.OwnerType==d&&n.OwnerUUID!=null&&n.OwnerUUID==O)&&e(s,n.Permission):a==P.GROUP_TYPE_CONVENTION&&(n.OwnerType==null||n.OwnerType==d&&n.OwnerUUID!=null&&(n.OwnerUUID==(l==null?void 0:l.OrganisationUUID)||l===void 0&&O===E)||n.OwnerType==w&&n.OwnerUUID!=null&&(n.OwnerUUID==O||l===void 0&&O===E))&&e(s,n.Permission)}),s};export{U as C};