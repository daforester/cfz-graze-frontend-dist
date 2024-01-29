import{i as j,M as _e,N as ye,j as Se,r as w,w as oe,n as e,q as l,v as t,x as a,f as r,z as he,y as h,A as S,O as Te,D as _,P as ae,k as ce,B as u,F as f,Q as q,C as c,p as ke,R as Ie,d as Ue,u as Ee,S as Ae,c as N,m as ee,l as te,G as De,H as we,_ as fe}from"./index-CA7cWJ0i.js";import{G as ne}from"./userData-cBh5uw3z.js";import{_ as be}from"./LoginView.vue_vue_type_script_setup_true_lang-skRPZQpO.js";import{s as Q}from"./index-OKsbKlsK.js";import{F as D}from"./form-0fJbSFPv.js";import{S as M,a as Pe}from"./submission-40fey8Hx.js";import{V as pe,u as Ce,a as Ve}from"./scopeId-fVmH7TDV.js";import{c as W}from"./canEditForm-viF788U5.js";import{s as Re}from"./sortSubmissions-NKScr9xj.js";import{P as K,a as Oe,f as Fe,h as de,u as Me}from"./useDisplayTransactions-dTwom-QA.js";import{l as Ne}from"./stripe.esm-sevhGlMX.js";import{_ as $e}from"./ModelDialog.vue_vue_type_script_setup_true_lang-fSZ_-83r.js";import{a as se,u as Le}from"./VContainer-VR4Zw7hl.js";import{V as Ye}from"./VAlert--sShak5M.js";import{V as xe}from"./VForm-ycv2b7t4.js";import{V as J,a as H}from"./VRow-lBXInVI7.js";import{V as v,a as Be}from"./VBtn-T-w1le_5.js";import{V as ze,m as Ge,a as me}from"./SaveButton.vue_vue_type_script_setup_true_lang-3ZokBwW0.js";import{V as He,a as X,b as ve,c as Z,d as qe,e as je}from"./VCard-zjiF5lvP.js";import{V as We}from"./VAvatar-xCek4TCs.js";import{f as Ke}from"./forwardRefs-EQrCdMX8.js";import{V as Je,a as Qe,c as Xe,d as Ze}from"./VList-dSWr7mDP.js";import"./emailFormVariant-1EY2p0cn.js";import"./LoginButton-ZePhoAEn.js";import"./createSimpleFunctional-xkT6QeOP.js";import"./VDialog-fb_rBMaW.js";import"./VToolbar-jJqNrc9I.js";import"./VDivider-HL4n43AZ.js";const et=_("p",{class:"my-4"},[a(" Payments are non-refundable, please check our "),_("a",{target:"_blank",href:"https://www.scotiacon.org.uk/policies"},"policies"),a(" for further information. ")],-1),tt=_("p",{class:"my-4"}," You must be over 18 to attend the convention and be able to produce valid ID matching the details on your registration. ",-1),ot=_("p",{class:"my-4"}," If you are unable to provide valid ID when asked at the convention you will not be issued your attendee badge. ",-1),at=_("p",{class:"my-4"}," Payments should be made by the authorised card holder only. ",-1),nt=_("p",{class:"my-4"},[a(" Please contact "),_("a",{href:"mailto:registration@scotiacon.org.uk"},"registration@scotiacon.org.uk"),a(" if you need any further assistance. ")],-1),st=_("div",{id:"link-authentication-element"},null,-1),lt=_("div",{id:"payment-element"},null,-1),it=j({__name:"StripePayment",props:_e({paymentTransactions:{},registration:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const I=ye(i,"modelValue"),T=ae(),U=ne(),p=Se(),n=w(),m=w(),E=w((U==null?void 0:U.Additional.Email)||""),V=w(!1),$=w("");let F;const L=w(!1);oe(I,k=>{k&&T.stripePublicKey().then(async g=>{g&&(m.value=await Ne(g),await x(m.value))})});const B=k=>{$.value=k,V.value=!0};async function x(k){var d;if(!k)return;const g=await T.stripePaymentIntent(((d=i.registration)==null?void 0:d.RegistrationUUID)||""),P={theme:"stripe"};p.current.value.dark&&(P.theme="night"),F=k.elements({clientSecret:g,appearance:P});const Y=F.create("linkAuthentication",{defaultValues:{email:E.value}});Y.mount("#link-authentication-element"),Y.on("change",O=>{E.value=O.value.email});const o={layout:"tabs"};F.create("payment",o).mount("#payment-element")}async function z(k,g){if(!g)return;k.preventDefault(),L.value=!0;const P=new URL(location.href);P.pathname+="payment/stripe/processing";const{error:Y}=await g.confirmPayment({elements:F,confirmParams:{return_url:P.toString(),receipt_email:E.value}});Y.type==="card_error"||Y.type==="validation_error"?B(Y.message):B("An unexpected error occurred."),L.value=!1}return(k,g)=>(e(),l($e,{modelValue:I.value,"onUpdate:modelValue":g[4]||(g[4]=P=>I.value=P),title:"Make a Payment",color:"blue-darken-4",fullscreen:"",persistent:""},{default:t(()=>[r(se,{class:"pa-0"},{default:t(()=>[r(Ye,{class:"mb-2",closable:!0},{title:t(()=>[a(" Payment Information ")]),text:t(()=>[et,tt,ot,at,nt]),_:1}),r(xe,{ref_key:"paymentForm",ref:n,id:"payment-form",onSubmit:g[1]||(g[1]=he(P=>z(P,m.value),["prevent"]))},{default:t(()=>[r(J,null,{default:t(()=>[r(H,null,{default:t(()=>[st]),_:1})]),_:1}),r(J,null,{default:t(()=>[r(H,null,{default:t(()=>[lt]),_:1})]),_:1}),r(J,null,{default:t(()=>[k.registration?(e(),l(H,{key:0,class:"font-weight-bold text-right"},{default:t(()=>[a(" Payment Amount: £"+h(k.registration.Total-k.registration.Paid),1)]),_:1})):S("",!0)]),_:1}),r(J,null,{default:t(()=>[r(H,{class:"text-right",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:t(()=>[r(v,{color:"error",class:"w-100",onClick:g[0]||(g[0]=P=>I.value=!1)},{default:t(()=>[a("Cancel")]),_:1})]),_:1}),r(pe),r(H,{class:"text-left",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:t(()=>[r(v,{type:"submit",color:"success",class:"w-100"},Te({default:t(()=>[a(" Pay Now ")]),_:2},[L.value?{name:"prepend",fn:t(()=>[r(Be,{size:"20",indeterminate:""})]),key:"0"}:void 0]),1024)]),_:1})]),_:1})]),_:1},512)]),_:1}),r(ze,{modelValue:V.value,"onUpdate:modelValue":g[3]||(g[3]=P=>V.value=P)},{actions:t(()=>[r(v,{variant:"text",onClick:g[2]||(g[2]=P=>V.value=!1)},{default:t(()=>[a(" Close ")]),_:1})]),default:t(()=>[a(h($.value)+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]))}}),rt={key:0},ut={key:1,class:"v-row"},ct={key:0,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},dt={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},mt={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},vt={key:1,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},ft={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},pt={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},gt={class:"v-col v-col-2 align-self-end text-right py-1 text-no-wrap"},_t=_("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Total Charges ",-1),yt={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},St=_("dt",{class:"v-col v-col-9 py-1 font-weight-bold"}," Current Payments ",-1),ht={class:"v-col v-col-3 align-self-end text-right py-1 text-no-wrap"},Tt=_("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Balance Due ",-1),kt={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},It=j({__name:"AttendeeTransactionList",props:{paymentTransactions:{},registration:{}},setup(i){const I=i,T=w(ce(I.paymentTransactions));oe(I,()=>{T.value=ce(I.paymentTransactions)});const U=(p,n)=>p.Type===K.PAYMENT_TRANSACTION_TYPE_CHARGE&&n.Type!==K.PAYMENT_TRANSACTION_TYPE_CHARGE?-1:p.Type!==K.PAYMENT_TRANSACTION_TYPE_CHARGE&&n.Type===K.PAYMENT_TRANSACTION_TYPE_CHARGE||(p.UpdatedAt||0)>(n.UpdatedAt||0)?1:p.UpdatedAt===n.UpdatedAt?0:-1;return(p,n)=>p.registration.Total==0?(e(),u("p",rt," Your registration is currently being processed, payment information will appear here when ready. ")):(e(),u("dl",ut,[(e(!0),u(f,null,q(T.value.sort(U),m=>{var E;return e(),u(f,{key:m.PaymentTransactionUUID},[m.Type===c(K).PAYMENT_TRANSACTION_TYPE_CHARGE?(e(),u("dt",ct,[_("div",dt,h(m.Description.split(":")[0]),1),_("div",mt,h(m.Description.split(":")[1]),1)])):(e(),u("dt",vt,[_("div",ft,h((E=c(Oe).find(V=>V.value===m.Type))==null?void 0:E.title),1),_("div",pt," [ "+h(c(Fe)(m.UpdatedAt||""))+" ] "+h(m.Description),1)])),_("dd",gt," £"+h(m.Amount),1)],64)}),128)),_t,_("dd",yt," £"+h(p.registration.Total),1),St,_("dd",ht," £"+h(p.registration.Paid),1),Tt,_("dd",kt," £"+h(p.registration.Total-p.registration.Paid),1)]))}}),Ut=ke({id:String,text:String,...Ie(Ge({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),Et=Ue()({name:"VTooltip",props:Ut(),emits:{"update:modelValue":i=>!0},setup(i,I){let{slots:T}=I;const U=Ee(i,"modelValue"),{scopeId:p}=Ce(),n=Ae(),m=N(()=>i.id||`v-tooltip-${n}`),E=w(),V=N(()=>i.location.split(" ").length>1?i.location:i.location+" center"),$=N(()=>i.origin==="auto"||i.origin==="overlap"||i.origin.split(" ").length>1||i.location.split(" ").length>1?i.origin:i.origin+" center"),F=N(()=>i.transition?i.transition:U.value?"scale-transition":"fade-transition"),L=N(()=>ee({"aria-describedby":m.value},i.activatorProps));return Le(()=>{const B=me.filterProps(i);return r(me,ee({ref:E,class:["v-tooltip",i.class],style:i.style,id:m.value},B,{modelValue:U.value,"onUpdate:modelValue":x=>U.value=x,transition:F.value,absolute:!0,location:V.value,origin:$.value,persistent:!0,role:"tooltip",activatorProps:L.value,_disableGlobalStack:!0},p),{activator:T.activator,default:function(){var g;for(var x=arguments.length,z=new Array(x),k=0;k<x;k++)z[k]=arguments[k];return((g=T.default)==null?void 0:g.call(T,...z))??i.text}})}),Ke({},E)}}),ge=i=>(De("data-v-eaed28b9"),i=i(),we(),i),At=["innerHTML"],Dt={key:0},wt={key:0,class:"font-weight-bold float-left pt-1 w-50"},bt={key:1,class:"pa-1"},Pt={key:0,class:"font-weight-bold float-left pt-1 w-50"},Ct={key:1},Vt={class:"font-weight-bold float-left pt-1 w-50"},Rt={class:"text-red-darken-4"},Ot={key:1,class:"text-red-darken-4 mt-4"},Ft=ge(()=>_("strong",null,"There are forms above that require completion, please edit and save them.",-1)),Mt=[Ft],Nt=ge(()=>_("br",null,null,-1)),$t=j({__name:"OpenConvention",props:{convention:{},forms:{default:()=>[]}},setup(i){const I=Ve(),T=ae(),{getPaymentTransactions:U}=Me(),p=w(I.GetConventionLogoURL(i.convention.ConventionUUID)),n=w(),m=w([]),E=w([]),V=w([]),$=w(!1),F=w([]),L=N(()=>{var o;return W(i.forms,((o=n.value)==null?void 0:o.Submissions)||[],D.FORM_TYPE_REGISTRATION)}),B=N(()=>{var o;return W(i.forms,((o=n.value)==null?void 0:o.Submissions)||[],D.FORM_TYPE_DEALER)}),x=N(()=>{var o;return W(i.forms,((o=n.value)==null?void 0:o.Submissions)||[],D.FORM_TYPE_BADGE)}),z=N(()=>{var o;return W(i.forms,((o=n.value)==null?void 0:o.Submissions)||[],D.FORM_TYPE_ACCOMMODATION)}),k=N(()=>{var o;return W(i.forms,((o=n.value)==null?void 0:o.Submissions)||[],D.FORM_TYPE_ADDITIONAL)}),g=N(()=>{var o,y;return n.value&&((o=n.value)!=null&&o.Submissions)?!!((y=n.value)!=null&&y.Submissions.find(d=>{var O;return((O=d.Form)==null?void 0:O.Type)==D.FORM_TYPE_REGISTRATION&&(d.Status==M.SUBMISSION_STATUS_ACCEPTED||d.Status==M.SUBMISSION_STATUS_COMPLETED)})):!1}),P=async()=>{n.value&&"RegistrationUUID"in n.value&&T.getRegistrationAllocationPeriods(n.value.RegistrationUUID).then(o=>{o&&(E.value=[],m.value=o,m.value.sort((y,d)=>y.DateStart>d.DateStart?1:-1).forEach(y=>{var O;const d=E.value.find(b=>{var C;return b.name===((C=y.Accommodation)==null?void 0:C.Name)});if(d){const b=d.periods.find(s=>s.start===y.DateEnd),C=d.periods.find(s=>s.end===y.DateStart);b?b.start=y.DateStart:C?C.end=y.DateEnd:d.periods.push({start:y.DateStart,end:y.DateEnd})}else E.value.push({name:((O=y.Accommodation)==null?void 0:O.Name)||"",periods:[{start:y.DateStart,end:y.DateEnd}]})}))}).catch(()=>{})},Y=()=>{T.getRegistrationByConvention(i.convention.ConventionUUID).then(o=>{var y;o&&(o.Submissions?(o.Submissions.forEach((d,O)=>{d.Form||(o.Submissions[O].Form=i.forms.find(b=>b.FormUUID===d.FormUUID))}),Re(o.Submissions)):o.Submissions=[],n.value=o,P(),g.value&&U(((y=n.value)==null?void 0:y.RegistrationUUID)||"").then(d=>{V.value=d}))})};return oe(()=>i.forms,()=>{Y()}),Y(),(o,y)=>{const d=te("router-link"),O=te("RouterLink");return e(),l(je,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:t(()=>[r(He,{class:"flex-1-1 align-content-start"},{default:t(()=>[p.value?(e(),l(We,{key:0,src:p.value,title:o.convention.Name,class:"logo text-center"},null,8,["src","title"])):S("",!0),o.convention.Name?(e(),l(X,{key:1,class:"text-center"},{default:t(()=>[a(h(o.convention.Name),1)]),_:1})):S("",!0),o.convention.Description?(e(),l(ve,{key:2,class:"text-wrap subtitle"},{default:t(()=>[_("div",{innerHTML:o.convention.Description},null,8,At)]),_:1})):S("",!0)]),_:1}),r(Z,null,{default:t(()=>{var b,C;return[n.value?(e(),u("dl",Dt,[n.value.Reference?(e(),u("dt",wt," Badge No: ")):S("",!0),n.value.Reference?(e(),u("dd",bt," #"+h(n.value.Reference),1)):S("",!0),(e(!0),u(f,null,q((b=n.value)==null?void 0:b.Submissions,(s,R)=>{var G,le,ie,re,ue;return e(),u(f,{key:s.SubmissionUUID},[s.Form?(e(),u(f,{key:0},[s.Form?(e(),u("dt",Pt,h(s.Form.Heading),1)):S("",!0),s.Form?(e(),u("dd",Ct,[r(Et,{modelValue:F.value[R],"onUpdate:modelValue":A=>F.value[R]=A},{activator:t(({props:A})=>[r(v,ee(A,{color:"blue-darken-2",icon:"mdi:mdi-information",variant:"text",size:"xs",onClick:Ht=>F.value[R]=!F.value[R]}),null,16,["onClick"])]),default:t(()=>[s.Status===c(M).SUBMISSION_STATUS_NULL?(e(),u(f,{key:0},[a(" There is an error with your submission, please contact the registration team for support. ")],64)):s.Status===c(M).SUBMISSION_STATUS_INCOMPLETE?(e(),u(f,{key:1},[a(" Something is missing on your submission which requires completing to be able to process your request. Please contact the registration team for further advice. ")],64)):s.Status===c(M).SUBMISSION_STATUS_OPEN?(e(),u(f,{key:2},[a(" Your submission has been received by our system but you may still make changes before the registration team begins processing it. ")],64)):s.Status===c(M).SUBMISSION_STATUS_LOCKED?(e(),u(f,{key:3},[a(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):s.Status===c(M).SUBMISSION_STATUS_ACCEPTED?(e(),u(f,{key:4},[a(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):s.Status===c(M).SUBMISSION_STATUS_COMPLETED?(e(),u(f,{key:5},[a(" Congratulations everything is complete. If you need to make changes please get in touch. ")],64)):s.Status===c(M).SUBMISSION_STATUS_REJECTED?(e(),u(f,{key:6},[a(" Your request has been rejected. The registration team will provide an explanation. ")],64)):s.Status===c(M).SUBMISSION_STATUS_INVALID?(e(),u(f,{key:7},[a(" Your request has been identified as having errors or being incomplete. Please contact the registration team for additional support. ")],64)):s.Status===c(M).SUBMISSION_STATUS_CANCELLED?(e(),u(f,{key:8},[a(" Your submission has been cancelled. This may be at your request or another reason. The registration team will be able to provide further details. ")],64)):(e(),u(f,{key:9},[a(" Please contact the registration team for support. ")],64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),a(" "+h(c(Pe)(s.Status))+" ",1),((G=s.Form)==null?void 0:G.Type)===c(D).FORM_TYPE_REGISTRATION?(e(),l(d,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:t(()=>{var A;return[(A=s.Form)!=null&&A.State.Edit&&L.value?(e(),l(v,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[a(" Edit ")]),_:1})):(e(),l(v,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[a("View")]),_:1}))]}),_:2},1032,["to"])):((le=s.Form)==null?void 0:le.Type)===c(D).FORM_TYPE_ACCOMMODATION?(e(),l(d,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:t(()=>{var A;return[(A=s.Form)!=null&&A.State.Edit&&z.value?(e(),l(v,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[a(" Edit ")]),_:1})):(e(),l(v,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[a("View")]),_:1}))]}),_:2},1032,["to"])):((ie=s.Form)==null?void 0:ie.Type)===c(D).FORM_TYPE_DEALER?(e(),l(d,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:t(()=>{var A;return[(A=s.Form)!=null&&A.State.Edit&&B.value?(e(),l(v,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[a(" Edit ")]),_:1})):(e(),l(v,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[a("View")]),_:1}))]}),_:2},1032,["to"])):((re=s.Form)==null?void 0:re.Type)===c(D).FORM_TYPE_BADGE?(e(),l(d,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/badge`},{default:t(()=>{var A;return[(A=s.Form)!=null&&A.State.Edit&&k.value?(e(),l(v,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[a(" Edit ")]),_:1})):(e(),l(v,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[a("View")]),_:1}))]}),_:2},1032,["to"])):((ue=s.Form)==null?void 0:ue.Type)===c(D).FORM_TYPE_ADDITIONAL?(e(),l(d,{key:4,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:t(()=>{var A;return[(A=s.Form)!=null&&A.State.Edit&&k.value?(e(),l(v,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[a(" Edit ")]),_:1})):(e(),l(v,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[a("View")]),_:1}))]}),_:2},1032,["to"])):S("",!0)])):S("",!0)],64)):S("",!0)],64)}),128)),((C=n.value)==null?void 0:C.Submissions.length)>=1?(e(!0),u(f,{key:2},q(o.forms,s=>{var R;return e(),u(f,{key:s.FormUUID},[(R=n.value)!=null&&R.Submissions.find(G=>G.FormUUID===s.FormUUID)?S("",!0):(e(),u(f,{key:0},[_("dt",Vt,h(s.Heading),1),_("dd",Rt,[a(" Requires Completion "),s.Type===c(D).FORM_TYPE_REGISTRATION?(e(),l(d,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:t(()=>[s.State.Edit&&L.value?(e(),l(v,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[a(" Edit ")]),_:1})):(e(),l(v,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[a("View")]),_:1}))]),_:2},1032,["to"])):s.Type===c(D).FORM_TYPE_ACCOMMODATION?(e(),l(d,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:t(()=>[s.State.Edit&&z.value?(e(),l(v,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[a(" Edit ")]),_:1})):(e(),l(v,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[a("View")]),_:1}))]),_:2},1032,["to"])):s.Type===c(D).FORM_TYPE_DEALER?(e(),l(d,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:t(()=>[s.State.Edit&&B.value?(e(),l(v,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[a(" Edit ")]),_:1})):(e(),l(v,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[a("View")]),_:1}))]),_:2},1032,["to"])):s.Type===c(D).FORM_TYPE_BADGE?(e(),l(d,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/badge`},{default:t(()=>[s.State.Edit&&x.value?(e(),l(v,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[a(" Edit ")]),_:1})):(e(),l(v,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[a("View")]),_:1}))]),_:2},1032,["to"])):s.Type===c(D).FORM_TYPE_ADDITIONAL?(e(),l(d,{key:4,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:t(()=>[s.State.Edit&&k.value?(e(),l(v,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[a(" Edit ")]),_:1})):(e(),l(v,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[a("View")]),_:1}))]),_:2},1032,["to"])):S("",!0)])],64))],64)}),128)):S("",!0)])):S("",!0),n.value&&n.value.Submissions.length>=1&&o.forms.filter(s=>{var R;return!((R=n.value)!=null&&R.Submissions.find(G=>G.FormUUID==s.FormUUID))}).length>0?(e(),u("div",Ot,Mt)):S("",!0)]}),_:1}),E.value.length>0?(e(),u(f,{key:0},[r(X,{class:"pb-0"},{default:t(()=>[a("Allocated Accommodation")]),_:1}),r(ve,{class:"text-wrap"},{default:t(()=>[a("The following accommodation has been allocated to your registration. In some cases this may not have been your first choice.")]),_:1}),r(Z,null,{default:t(()=>[r(Je,{density:"compact"},{default:t(()=>[(e(!0),u(f,null,q(E.value,b=>(e(),l(Qe,{key:b.name},{default:t(()=>[r(Xe,null,{default:t(()=>[a(h(b.name),1)]),_:2},1024),(e(!0),u(f,null,q(b.periods,C=>(e(),l(Ze,{key:C.start},{default:t(()=>[a(" ("+h(c(de)(C.start))+" - "+h(c(de)(C.end))+")",1),Nt]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1})],64)):S("",!0),g.value&&n.value?(e(),u(f,{key:1},[r(X,{class:"pb-4"},{default:t(()=>[a("Payment Information")]),_:1}),r(Z,null,{default:t(()=>[r(It,{"payment-transactions":V.value,registration:n.value},null,8,["payment-transactions","registration"])]),_:1})],64)):S("",!0),r(qe,null,{default:t(()=>{var b,C;return[o.convention.DetailLink?(e(),l(v,{key:0,color:"orange",href:o.convention.DetailLink},{default:t(()=>[a(h(c(Q).buttonDetails),1)]),_:1},8,["href"])):S("",!0),r(pe),L.value?(e(),u(f,{key:1},[(b=n.value)!=null&&b.Submissions.find(s=>{var R;return((R=s.Form)==null?void 0:R.Type)===c(D).FORM_TYPE_REGISTRATION})?(e(),l(O,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:t(()=>[r(v,{color:"primary"},{default:t(()=>[a(h(c(Q).buttonViewRegistration),1)]),_:1})]),_:1},8,["to"])):(e(),u(f,{key:0},[(C=o.forms.find(s=>s.Type===c(D).FORM_TYPE_REGISTRATION))!=null&&C.State.New?(e(),l(O,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:t(()=>[r(v,{color:"primary"},{default:t(()=>[a(h(c(Q).buttonRegister),1)]),_:1})]),_:1},8,["to"])):S("",!0)],64))],64)):g.value&&n.value&&n.value.Total>n.value.Paid?(e(),u(f,{key:2},[r(v,{color:"success",variant:"elevated",onClick:y[0]||(y[0]=s=>$.value=!0)},{default:t(()=>[a("Make Payment")]),_:1}),n.value?(e(),l(it,{key:0,"payment-transactions":V.value,registration:n.value,modelValue:$.value,"onUpdate:modelValue":y[1]||(y[1]=s=>$.value=s)},null,8,["payment-transactions","registration","modelValue"])):S("",!0)],64)):S("",!0)]}),_:1})]),_:1})}}}),Lt=fe($t,[["__scopeId","data-v-eaed28b9"]]),Yt=j({__name:"Conventions",setup(i){const I=ae(),T=w([]),U=w([]);return I.getOpenConventionsList().then(p=>{p&&(T.value=[...T.value,...p],I.getAvailableConventionForms(T.value.map(n=>n.ConventionUUID)).then(n=>{U.value=[...U.value,...n]}).catch(n=>{console.error(n)}))}),(p,n)=>(e(),l(se,null,{default:t(()=>[r(J,{class:"justify-center"},{default:t(()=>[(e(!0),u(f,null,q(T.value,m=>(e(),l(H,{key:m.ConventionUUID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:t(()=>[r(Lt,{convention:m,forms:U.value.filter(E=>E.ConventionUUID===m.ConventionUUID)},null,8,["convention","forms"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),xt={};function Bt(i,I){return e(),u("div")}const zt=fe(xt,[["render",Bt]]),Gt=j({__name:"MainView",emits:["pageTitle"],setup(i,{emit:I}){I("pageTitle","Scotiacon Registration System"),sessionStorage.getItem("reload")==="true"&&(sessionStorage.removeItem("reload"),setTimeout(()=>{location.reload()},500));const p=localStorage.getItem("gjt_token"),n=localStorage.getItem("ajt_token");p?(localStorage.removeItem("gjt_token"),location.href=p):n&&(localStorage.removeItem("ajt_token"),location.href=n);const m=w(ne());return(E,V)=>{const $=te("router-link");return e(),u(f,null,[m.value&&(!m.value.Additional||!m.value.Additional.Email)?(e(),l(se,{key:0,class:"bg-red-darken-4 text-center",fluid:!0},{default:t(()=>[a(" Please enter a Contact Email on the "),r($,{to:"/profile",class:"text-white font-weight-bold"},{default:t(()=>[a("manage account page")]),_:1}),a(" to ensure we can contact you. ")]),_:1})):S("",!0),r(Yt),r(zt)],64)}}}),To=j({__name:"Home",props:{loggedIn:{type:Boolean}},emits:["pageTitle"],setup(i,{emit:I}){const T=ne(),U=I;return U("pageTitle","Telegram Login"),(p,n)=>(e(),u("div",null,[p.loggedIn&&c(T)?(e(),l(Gt,{key:0,onPageTitle:n[0]||(n[0]=m=>U("pageTitle",m))})):(e(),l(be,{key:1}))]))}});export{To as default};
