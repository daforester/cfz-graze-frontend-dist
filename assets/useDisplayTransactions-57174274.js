import{P as s}from"./index-5fbc4a04.js";var C=(t=>(t.PAYMENT_TRANSACTION_SOURCE_NULL="",t.PAYMENT_TRANSACTION_SOURCE_BANK="PAYMENT_TRANSACTION_SOURCE_BANK",t.PAYMENT_TRANSACTION_SOURCE_CASH="PAYMENT_TRANSACTION_SOURCE_CASH",t.PAYMENT_TRANSACTION_SOURCE_REGISTRATION="PAYMENT_TRANSACTION_SOURCE_REGISTRATION",t.PAYMENT_TRANSACTION_SOURCE_MANUAL_ENTRY="PAYMENT_TRANSACTION_SOURCE_MANUAL_ENTRY",t.PAYMENT_TRANSACTION_SOURCE_PAYPAL="PAYMENT_TRANSACTION_SOURCE_PAYPAL",t.PAYMENT_TRANSACTION_SOURCE_STRIPE="PAYMENT_TRANSACTION_SOURCE_STRIPE",t.PAYMENT_TRANSACTION_SOURCE_SUM_UP="PAYMENT_TRANSACTION_SOURCE_SUM_UP",t))(C||{}),R=(t=>(t.PAYMENT_TRANSACTION_TYPE_NULL="",t.PAYMENT_TRANSACTION_TYPE_CHARGE="PAYMENT_TRANSACTION_TYPE_CHARGE",t.PAYMENT_TRANSACTION_TYPE_ADJUSTMENT="PAYMENT_TRANSACTION_TYPE_ADJUSTMENT",t.PAYMENT_TRANSACTION_TYPE_PAYMENT="PAYMENT_TRANSACTION_TYPE_PAYMENT",t.PAYMENT_TRANSACTION_TYPE_REFUND="PAYMENT_TRANSACTION_TYPE_REFUND",t))(R||{});const o=[{title:"Adjustment",value:"PAYMENT_TRANSACTION_TYPE_ADJUSTMENT",icon:"mdi:mdi-cash-off"},{title:"Charge",value:"PAYMENT_TRANSACTION_TYPE_CHARGE",icon:"mdi:mdi-cash-plus"},{title:"Payment",value:"PAYMENT_TRANSACTION_TYPE_PAYMENT",icon:"mdi:mdi-bank-transfer-in"},{title:"Refund",value:"PAYMENT_TRANSACTION_TYPE_REFUND",icon:"mdi:mdi-credit-card-refund"}],P=[{title:"Bank Transfer",value:"PAYMENT_TRANSACTION_SOURCE_BANK",icon:"mdi:mdi-bank"},{title:"Cash",value:"PAYMENT_TRANSACTION_SOURCE_CASH",icon:"mdi:mdi-cash"},{title:"Registration",value:"PAYMENT_TRANSACTION_SOURCE_REGISTRATION",icon:"mdi:mdi-form-select"},{title:"Manual Entry",value:"PAYMENT_TRANSACTION_SOURCE_MANUAL_ENTRY",icon:"mdi:mdi-pencil"},{title:"PayPal",value:"PAYMENT_TRANSACTION_SOURCE_PAYPAL",icon:"fa:fab-paypal"},{title:"Stripe",value:"PAYMENT_TRANSACTION_SOURCE_STRIPE",icon:"mdi:fab-stripe"},{title:"Sum Up",value:"PAYMENT_TRANSACTION_SOURCE_SUM_UP",icon:"mdi:mdi-alpha-s-box"}],Y=[{title:"Bank Transfer",value:"PAYMENT_TRANSACTION_SOURCE_BANK",icon:"mdi:mdi-bank"},{title:"Cash",value:"PAYMENT_TRANSACTION_SOURCE_CASH",icon:"mdi:mdi-cash"},{title:"Manual Entry",value:"PAYMENT_TRANSACTION_SOURCE_MANUAL_ENTRY",icon:"mdi:mdi-pencil"}],c=t=>(typeof t=="string"&&(t=new Date(t)),`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`),n=t=>(typeof t=="string"&&(t=new Date(t)),`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`),I=(t,a={withDay:!0,withYear:!1})=>{typeof t=="string"&&(t=new Date(t));const _=t.toLocaleString("default",{weekday:"long"}),i=`${t.getDate()}${l(t.getDate())}`,e=t.toLocaleString("default",{month:"long"}),A=t.toLocaleString("default",{year:"numeric"});return`${a.withDay?_:""} ${i} ${e} ${a.withYear?A:""}`},l=t=>{if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},S=s(),M=()=>{const t=e=>e.map(A=>{var T,r,E;return{PaymentTransactionUUID:A.PaymentTransactionUUID,Description:A.Description,Amount:`£${A.Amount}`,Source:((T=P.find(N=>N.value===A.Source))==null?void 0:T.title)||"",Type:((r=o.find(N=>N.value===A.Type))==null?void 0:r.title)||"",Admin:((E=A.Admin)==null?void 0:E.DisplayName)||"System",AdminUUID:A.AdminUUID,Data:A.Data,CreatedAt:n(A.CreatedAt||""),DeletedAt:n(A.DeletedAt||""),UpdatedAt:n(A.UpdatedAt||""),PaymentTransaction:A}});return{convertTransactions:t,getPaymentTransactions:async e=>(await S.getRegistrationPaymentTransactions(e)).PaymentTransactions,getPaymentTransactionsDisplay:async e=>{const A=await S.getRegistrationPaymentTransactions(e);return t(A.PaymentTransactions)},totalCharges:e=>e.length?e.filter(A=>A.Type===R.PAYMENT_TRANSACTION_TYPE_CHARGE).map(A=>A.Amount).reduce((A,T)=>(parseInt((A*100).toString())+parseInt((T*100).toString()))/100):0}};export{R as P,o as a,c as b,Y as c,C as d,n as f,I as h,M as u};
