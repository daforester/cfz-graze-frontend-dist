import{O as e,G as E}from"./group-7fhbY6WJ.js";import{W as l}from"./index-Coiqs0Ka.js";const P=(n,i)=>{n.CheckIn=n.CheckIn||i.CheckIn,n.EditConvention=n.EditConvention||i.EditConvention,n.EditOrganisation=n.EditOrganisation||i.EditOrganisation,n.EditPaymentTransactions=n.EditPaymentTransactions||i.EditPaymentTransactions,n.EditRegistration=n.EditRegistration||i.EditRegistration,n.ManageUsers=n.ManageUsers||i.ManageUsers,n.ManageViews=n.ManageViews||i.ManageViews,n.ViewPaymentTransactions=n.ViewPaymentTransactions||i.ViewPaymentTransactions,n.ViewRegistration=n.ViewRegistration||i.ViewRegistration,n.ConfigureLostAndFound=n.ConfigureLostAndFound||i.ConfigureLostAndFound,n.ConfigureProps=n.ConfigureProps||i.ConfigureProps,n.EditLostAndFound=n.EditLostAndFound||i.EditLostAndFound,n.EditProps=n.EditProps||i.EditProps,n.ViewLostAndFound=n.ViewLostAndFound||i.ViewLostAndFound,n.ViewProps=n.ViewProps||i.ViewProps},I=(n,i,a="",s=void 0)=>{const O=n.Groups;a==""&&(a=l);const f={ID:0,PermissionUUID:l,GroupID:0,GroupUUID:l,CheckIn:!1,EditConvention:!1,EditRegistration:!1,EditOrganisation:!1,EditPaymentTransactions:!1,ManageUsers:!1,ManageViews:!1,ViewPaymentTransactions:!1,ViewRegistration:!1,ConfigureProps:!1,EditProps:!1,ViewProps:!1,ConfigureLostAndFound:!1,EditLostAndFound:!1,ViewLostAndFound:!1},w=e.OWNER_TYPE_CONVENTION,t=e.OWNER_TYPE_ORGANISATION;return O&&O.length>0&&O.forEach(d=>{d.Permission!==null&&(d.OwnerType==w&&(d.Permission.EditOrganisation=!1),i==null?P(f,d.Permission):i==E.GROUP_TYPE_SYSTEM||i==E.GROUP_TYPE_ADMIN?d.OwnerType==null&&P(f,d.Permission):i==E.GROUP_TYPE_ORGANISATION?(d.OwnerType==null||d.OwnerType==t&&d.OwnerUUID!=null&&d.OwnerUUID==a)&&P(f,d.Permission):i==E.GROUP_TYPE_CONVENTION&&(d.OwnerType==null||d.OwnerType==t&&d.OwnerUUID!=null&&(d.OwnerUUID==(s==null?void 0:s.OrganisationUUID)||s===void 0&&a===l)||d.OwnerType==w&&d.OwnerUUID!=null&&(d.OwnerUUID==a||s===void 0&&a===l))&&P(f,d.Permission))}),f};export{I as C};
