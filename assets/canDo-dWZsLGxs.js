import{O as e,G as l}from"./group-7fhbY6WJ.js";import{W as E}from"./index-Zh94YIQM.js";const f=(n,d)=>{n.CheckIn=n.CheckIn||d.CheckIn,n.EditConvention=n.EditConvention||d.EditConvention,n.EditOrganisation=n.EditOrganisation||d.EditOrganisation,n.EditPaymentTransactions=n.EditPaymentTransactions||d.EditPaymentTransactions,n.EditRegistration=n.EditRegistration||d.EditRegistration,n.ManageUsers=n.ManageUsers||d.ManageUsers,n.ManageViews=n.ManageViews||d.ManageViews,n.ViewPaymentTransactions=n.ViewPaymentTransactions||d.ViewPaymentTransactions,n.ViewRegistration=n.ViewRegistration||d.ViewRegistration,n.ConfigureLostAndFound=n.ConfigureLostAndFound||d.ConfigureLostAndFound,n.ConfigureProps=n.ConfigureProps||d.ConfigureProps,n.EditLostAndFound=n.EditLostAndFound||d.EditLostAndFound,n.EditProps=n.EditProps||d.EditProps,n.ViewLostAndFound=n.ViewLostAndFound||d.ViewLostAndFound,n.ViewProps=n.ViewProps||d.ViewProps},I=(n,d,P="",s=void 0)=>{const O=n.Groups;P==""&&(P=E);const a={ID:0,PermissionUUID:E,GroupID:0,GroupUUID:E,CheckIn:!1,EditConvention:!1,EditRegistration:!1,EditOrganisation:!1,EditPaymentTransactions:!1,ManageUsers:!1,ManageViews:!1,ViewPaymentTransactions:!1,ViewRegistration:!1,ConfigureProps:!1,EditProps:!1,ViewProps:!1,ConfigureLostAndFound:!1,EditLostAndFound:!1,ViewLostAndFound:!1},w=e.OWNER_TYPE_CONVENTION,t=e.OWNER_TYPE_ORGANISATION;return O&&O.length>0&&O.forEach(i=>{i.OwnerType==w&&(i.Permission.EditOrganisation=!1),d==null?f(a,i.Permission):d==l.GROUP_TYPE_SYSTEM||d==l.GROUP_TYPE_ADMIN?i.OwnerType==null&&f(a,i.Permission):d==l.GROUP_TYPE_ORGANISATION?(i.OwnerType==null||i.OwnerType==t&&i.OwnerUUID!=null&&i.OwnerUUID==P)&&f(a,i.Permission):d==l.GROUP_TYPE_CONVENTION&&(i.OwnerType==null||i.OwnerType==t&&i.OwnerUUID!=null&&(i.OwnerUUID==(s==null?void 0:s.OrganisationUUID)||s===void 0&&P===E)||i.OwnerType==w&&i.OwnerUUID!=null&&(i.OwnerUUID==P||s===void 0&&P===E))&&f(a,i.Permission)}),a};export{I as C};
