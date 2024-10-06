import{i as V,r as y,q as _,v as n,R as x,P as T,n as t,f as l,B as o,x as e,F as i,y as f,A as g,D as a}from"./index-ytQigX2-.js";import{l as C}from"./stripe.esm-sevhGlMX.js";import{c as D,n as I,V as S}from"./VContainer-J74wRNt1.js";import{V as k,a as v}from"./VRow-7N7PEiUi.js";import{V as B}from"./VAlert-nXXrHtjr.js";import"./createSimpleFunctional-k3ND2Zcb.js";const R=a("br",null,null,-1),N=a("p",{class:"my-4"},"Thank you for submitting your payment, you will receive an email shortly confirming receipt.",-1),q=a("p",{class:"my-4"},"The main dashboard will shortly update showing your payment.",-1),A=a("p",{class:"my-4"},"Thank you for submitting your payment, the payment is currently being processed.",-1),E=a("p",{class:"my-4"}," If the payment processing is successful the main dashboard will shortly update showing your payment. You will also receive an email confirming receipt. ",-1),F=a("p",{class:"my-4"},"Thank you for submitting your payment, however the payment has failed.",-1),z=a("p",{class:"my-4"},[e(" Please try again and check your payment details, if the payment has been blocked you may need to contact your bank. If you continue to experience problems please email "),a("a",{href:"mailto:registration@scotiacon.org.uk"},"registration@scotiacon.org.uk"),e(" for additional support and provide the ID below. ")],-1),G={key:0},H=a("strong",null,"Payment ID:",-1),K=a("p",{class:"my-4"},"Thank you for submitting your payment, however the payment has failed.",-1),L=a("p",{class:"my-4"},[e(" Please try again and check your payment details, if the payment has been blocked you may need to contact your bank. If you continue to experience problems please email "),a("a",{href:"mailto:registration@scotiacon.org.uk"},"registration@scotiacon.org.uk"),e(" for additional support and provide the ID below. ")],-1),M={key:0},O=a("strong",null,"Payment ID:",-1),$=V({__name:"PaymentProcessingView",emits:["pageTitle"],setup(U,{emit:P}){const b=x(),w=T();P("pageTitle","Payment Processing");const d=y(),s=y(""),u=y(""),p=()=>{b.push({name:"Home"})};w.stripePublicKey().then(async r=>{r&&(d.value=await C(r),await h(d.value))});async function h(r){if(!r)return;const m=new URLSearchParams(window.location.search).get("payment_intent_client_secret");if(!m)return;const{paymentIntent:c}=await r.retrievePaymentIntent(m);u.value=(c==null?void 0:c.id)||"",s.value=(c==null?void 0:c.status)||"",s.value==="processing"&&setTimeout(()=>{h(r)},2e3)}return(r,m)=>(t(),_(D,null,{default:n(()=>[l(B,{closable:!0,"onClick:close":p},{title:n(()=>[s.value==""?(t(),o(i,{key:0},[e(" Retrieving Payment Status ")],64)):s.value=="succeeded"?(t(),o(i,{key:1},[e(" Payment Succeeded ")],64)):s.value=="processing"?(t(),o(i,{key:2},[e(" Payment Processing ")],64)):s.value=="requires_payment_method"?(t(),o(i,{key:3},[e(" Payment Failed ")],64)):(t(),o(i,{key:4},[e(" Payment Error ")],64))]),text:n(()=>[s.value==""?(t(),_(k,{key:0},{default:n(()=>[l(v,{class:"text-center"},{default:n(()=>[l(I,{color:"primary",indeterminate:"",size:175,width:12,class:"font-weight-bold my-4"},{default:n(()=>[e(" Processing"),R,e("Payment ")]),_:1})]),_:1})]),_:1})):s.value=="succeeded"?(t(),o(i,{key:1},[N,q],64)):s.value=="processing"?(t(),o(i,{key:2},[A,E],64)):s.value=="requires_payment_method"?(t(),o(i,{key:3},[F,z,u.value?(t(),o("p",G,[H,e(" RPM-"+f(u.value),1)])):g("",!0)],64)):(t(),o(i,{key:4},[K,L,u.value?(t(),o("p",M,[O,e(" GE-"+f(u.value),1)])):g("",!0)],64))]),default:n(()=>[l(k,null,{default:n(()=>[l(v,{class:"text-center"},{default:n(()=>[l(S,{onClick:p,variant:"flat",color:"success"},{default:n(()=>[e("Okay")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{$ as default};