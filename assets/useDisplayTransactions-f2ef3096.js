import{a3 as E}from"./index-202566ef.js";var S=(t=>(t.PAYMENT_TRANSACTION_SOURCE_NULL="",t.PAYMENT_TRANSACTION_SOURCE_BANK="PAYMENT_TRANSACTION_SOURCE_BANK",t.PAYMENT_TRANSACTION_SOURCE_CASH="PAYMENT_TRANSACTION_SOURCE_CASH",t.PAYMENT_TRANSACTION_SOURCE_REGISTRATION="PAYMENT_TRANSACTION_SOURCE_REGISTRATION",t.PAYMENT_TRANSACTION_SOURCE_MANUAL_ENTRY="PAYMENT_TRANSACTION_SOURCE_MANUAL_ENTRY",t.PAYMENT_TRANSACTION_SOURCE_PAYPAL="PAYMENT_TRANSACTION_SOURCE_PAYPAL",t.PAYMENT_TRANSACTION_SOURCE_STRIPE="PAYMENT_TRANSACTION_SOURCE_STRIPE",t.PAYMENT_TRANSACTION_SOURCE_SUM_UP="PAYMENT_TRANSACTION_SOURCE_SUM_UP",t))(S||{}),r=(t=>(t.PAYMENT_TRANSACTION_TYPE_NULL="",t.PAYMENT_TRANSACTION_TYPE_CHARGE="PAYMENT_TRANSACTION_TYPE_CHARGE",t.PAYMENT_TRANSACTION_TYPE_ADJUSTMENT="PAYMENT_TRANSACTION_TYPE_ADJUSTMENT",t.PAYMENT_TRANSACTION_TYPE_PAYMENT="PAYMENT_TRANSACTION_TYPE_PAYMENT",t.PAYMENT_TRANSACTION_TYPE_REFUND="PAYMENT_TRANSACTION_TYPE_REFUND",t))(r||{});const R=[{title:"Adjustment",value:"PAYMENT_TRANSACTION_TYPE_ADJUSTMENT",icon:"mdi:mdi-cash-off"},{title:"Charge",value:"PAYMENT_TRANSACTION_TYPE_CHARGE",icon:"mdi:mdi-cash-plus"},{title:"Payment",value:"PAYMENT_TRANSACTION_TYPE_PAYMENT",icon:"mdi:mdi-bank-transfer-in"},{title:"Refund",value:"PAYMENT_TRANSACTION_TYPE_REFUND",icon:"mdi:mdi-credit-card-refund"}],s=[{title:"Bank Transfer",value:"PAYMENT_TRANSACTION_SOURCE_BANK",icon:"mdi:mdi-bank"},{title:"Cash",value:"PAYMENT_TRANSACTION_SOURCE_CASH",icon:"mdi:mdi-cash"},{title:"Registration",value:"PAYMENT_TRANSACTION_SOURCE_REGISTRATION",icon:"mdi:mdi-form-select"},{title:"Manual Entry",value:"PAYMENT_TRANSACTION_SOURCE_MANUAL_ENTRY",icon:"mdi:mdi-pencil"},{title:"PayPal",value:"PAYMENT_TRANSACTION_SOURCE_PAYPAL",icon:"fa:fab-paypal"},{title:"Stripe",value:"PAYMENT_TRANSACTION_SOURCE_STRIPE",icon:"mdi:fab-stripe"},{title:"Sum Up",value:"PAYMENT_TRANSACTION_SOURCE_SUM_UP",icon:"mdi:mdi-alpha-s-box"}],Y=[{title:"Bank Transfer",value:"PAYMENT_TRANSACTION_SOURCE_BANK",icon:"mdi:mdi-bank"},{title:"Cash",value:"PAYMENT_TRANSACTION_SOURCE_CASH",icon:"mdi:mdi-cash"},{title:"Manual Entry",value:"PAYMENT_TRANSACTION_SOURCE_MANUAL_ENTRY",icon:"mdi:mdi-pencil"}],I=t=>(typeof t=="string"&&(t=new Date(t)),`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")} ${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`),a=t=>(typeof t=="string"&&(t=new Date(t)),`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`),M=t=>(typeof t=="string"&&(t=new Date(t)),`${t.toLocaleString("default",{weekday:"long"})} ${t.getDate()}${C(t.getDate())} ${t.toLocaleString("default",{month:"long"})}`),C=t=>{if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},i=E(),c=()=>{const t=T=>T.map(A=>{var e,n,_;return{PaymentTransactionUUID:A.PaymentTransactionUUID,Description:A.Description,Amount:`£${A.Amount}`,Source:((e=s.find(N=>N.value===A.Source))==null?void 0:e.title)||"",Type:((n=R.find(N=>N.value===A.Type))==null?void 0:n.title)||"",Admin:((_=A.Admin)==null?void 0:_.DisplayName)||"System",AdminUUID:A.AdminUUID,Data:A.Data,CreatedAt:a(A.CreatedAt||""),DeletedAt:a(A.DeletedAt||""),UpdatedAt:a(A.UpdatedAt||""),PaymentTransaction:A}});return{convertTransactions:t,getPaymentTransactions:async T=>(await i.getRegistrationPaymentTransactions(T)).PaymentTransactions,getPaymentTransactionsDisplay:async T=>{const A=await i.getRegistrationPaymentTransactions(T);return t(A.PaymentTransactions)},totalCharges:T=>T.length?T.filter(A=>A.Type===r.PAYMENT_TRANSACTION_TYPE_CHARGE).map(A=>A.Amount).reduce((A,e)=>(parseInt((A*100).toString())+parseInt((e*100).toString()))/100):0}};export{r as P,R as a,I as b,Y as c,S as d,a as f,M as h,c as u};