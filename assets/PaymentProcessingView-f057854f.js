import{I as V,a5 as x,r as y,M as t,N as _,O as n,v as l,V as o,P as e,H as r,Q as f,S as g,X as a,a3 as T}from"./index-ac2c1e26.js";import{l as C,V as I}from"./VAlert-ff13ab42.js";import{V as k,a as v}from"./VRow-f773e40f.js";import{a as S,V as D}from"./VBtn-4d5e0f12.js";import{j as B}from"./VContainer-8cf176bc.js";import"./createSimpleFunctional-dae4261b.js";const N=a("br",null,null,-1),R=a("p",{class:"my-4"},"Thank you for submitting your payment, you will receive an email shortly confirming receipt.",-1),E=a("p",{class:"my-4"},"The main dashboard will shortly update showing your payment.",-1),H=a("p",{class:"my-4"},"Thank you for submitting your payment, the payment is currently being processed.",-1),q=a("p",{class:"my-4"}," If the payment processing is successful the main dashboard will shortly update showing your payment. You will also receive an email confirming receipt. ",-1),z=a("p",{class:"my-4"},"Thank you for submitting your payment, however the payment has failed.",-1),A=a("p",{class:"my-4"},[e(" Please try again and check your payment details, if the payment has been blocked you may need to contact your bank. If you continue to experience problems please email "),a("a",{href:"mailto:registration@scotiacon.org.uk"},"registration@scotiacon.org.uk"),e(" for additional support and provide the ID below. ")],-1),F={key:0},G=a("strong",null,"Payment ID:",-1),M=a("p",{class:"my-4"},"Thank you for submitting your payment, however the payment has failed.",-1),O=a("p",{class:"my-4"},[e(" Please try again and check your payment details, if the payment has been blocked you may need to contact your bank. If you continue to experience problems please email "),a("a",{href:"mailto:registration@scotiacon.org.uk"},"registration@scotiacon.org.uk"),e(" for additional support and provide the ID below. ")],-1),j={key:0},K=a("strong",null,"Payment ID:",-1),Z=V({__name:"PaymentProcessingView",emits:["pageTitle"],setup(L,{emit:P}){const b=x(),w=T();P("pageTitle","Payment Processing");const d=y(),s=y(""),u=y(""),p=()=>{b.push({name:"Home"})};w.stripePublicKey().then(async i=>{i&&(d.value=await C(i),await h(d.value))});async function h(i){if(!i)return;const m=new URLSearchParams(window.location.search).get("payment_intent_client_secret");if(!m)return;const{paymentIntent:c}=await i.retrievePaymentIntent(m);u.value=(c==null?void 0:c.id)||"",s.value=(c==null?void 0:c.status)||"",s.value==="processing"&&setTimeout(()=>{h(i)},2e3)}return(i,m)=>(t(),_(B,null,{default:n(()=>[l(I,{closable:!0,"onClick:close":p},{title:n(()=>[s.value==""?(t(),o(r,{key:0},[e(" Retrieving Payment Status ")],64)):s.value=="succeeded"?(t(),o(r,{key:1},[e(" Payment Succeeded ")],64)):s.value=="processing"?(t(),o(r,{key:2},[e(" Payment Processing ")],64)):s.value=="requires_payment_method"?(t(),o(r,{key:3},[e(" Payment Failed ")],64)):(t(),o(r,{key:4},[e(" Payment Error ")],64))]),text:n(()=>[s.value==""?(t(),_(k,{key:0},{default:n(()=>[l(v,{class:"text-center"},{default:n(()=>[l(S,{color:"primary",indeterminate:"",size:175,width:12,class:"font-weight-bold my-4"},{default:n(()=>[e(" Processing"),N,e("Payment ")]),_:1})]),_:1})]),_:1})):s.value=="succeeded"?(t(),o(r,{key:1},[R,E],64)):s.value=="processing"?(t(),o(r,{key:2},[H,q],64)):s.value=="requires_payment_method"?(t(),o(r,{key:3},[z,A,u.value?(t(),o("p",F,[G,e(" RPM-"+f(u.value),1)])):g("",!0)],64)):(t(),o(r,{key:4},[M,O,u.value?(t(),o("p",j,[K,e(" GE-"+f(u.value),1)])):g("",!0)],64))]),default:n(()=>[l(k,null,{default:n(()=>[l(v,{class:"text-center"},{default:n(()=>[l(D,{onClick:p,variant:"flat",color:"success"},{default:n(()=>[e("Okay")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{Z as default};
