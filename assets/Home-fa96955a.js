import{I as j,a0 as pe,a1 as _e,J as ge,r as A,w as te,M as e,N as i,O as t,v as r,P as n,R as ye,Q as h,S,a2 as Se,X as p,a3 as oe,K as re,V as u,H as m,a4 as H,W as c,p as he,a5 as Te,n as ke,u as Ie,a as Ue,e as F,x as Z,L as ee,Y as Ee,Z as Ae,_ as me}from"./index-002c0d0a.js";import{G as ae}from"./userData-70a83d05.js";import{_ as be}from"./LoginView.vue_vue_type_script_setup_true_lang-334771f9.js";import{s as J}from"./index-26b71cef.js";import{F as P}from"./form-29fd1dbb.js";import{S as M,a as we}from"./submission-6136b51d.js";import{V as ve,u as Ce,a as De}from"./scopeId-0cfc5d7e.js";import{c as K}from"./canEditForm-0574b4b5.js";import{s as Pe}from"./sortSubmissions-8ed80f07.js";import{P as q,a as Ve,f as Re,h as ue,u as Oe}from"./useDisplayTransactions-4e721f8b.js";import{l as Ne}from"./stripe.esm-091597cd.js";import{_ as Me}from"./ModelDialog.vue_vue_type_script_setup_true_lang-ab139bc1.js";import{V as Fe}from"./VAlert-22243c52.js";import{V as $e}from"./VForm-05358ecf.js";import{V as W,a as G}from"./VRow-30728438.js";import{V as _,a as Le}from"./VBtn-199cce6f.js";import{j as ne,u as xe}from"./VContainer-0e74a37f.js";import{V as Ye,m as Be,a as ce}from"./SaveButton.vue_vue_type_script_setup_true_lang-e93a9368.js";import{V as ze}from"./VAvatar-43c7d142.js";import{V as Q,a as de,b as Ge,c as X,d as He,e as je}from"./VCard-22053035.js";import{f as qe}from"./forwardRefs-ea73fa43.js";import{V as We,a as Ke,c as Je,d as Qe}from"./VList-a0ad9d2d.js";import"./emailFormVariant-e5e0aad4.js";import"./LoginButton-4ad4deb0.js";import"./createSimpleFunctional-2394c988.js";import"./VDialog-7c1f58af.js";import"./VToolbar-92563208.js";import"./VDivider-37c62da9.js";const Xe=p("p",{class:"my-4"},[n(" Payments are non-refundable, please check our "),p("a",{target:"_blank",href:"https://www.scotiacon.org.uk/policies"},"policies"),n(" for further information. ")],-1),Ze=p("p",{class:"my-4"}," You must be over 18 to attend the convention and be able to produce valid ID matching the details on your registration. ",-1),et=p("p",{class:"my-4"}," If you are unable to provide valid ID when asked at the convention you will not be issued your attendee badge. ",-1),tt=p("p",{class:"my-4"}," Payments should be made by the authorised card holder only. ",-1),ot=p("p",{class:"my-4"},[n(" Please contact "),p("a",{href:"mailto:registration@scotiacon.org.uk"},"registration@scotiacon.org.uk"),n(" if you need any further assistance. ")],-1),at=p("div",{id:"link-authentication-element"},null,-1),nt=p("div",{id:"payment-element"},null,-1),st=j({__name:"StripePayment",props:pe({paymentTransactions:{},registration:{}},{modelValue:{type:Boolean,required:!0}}),emits:["update:modelValue"],setup(l){const T=_e(l,"modelValue"),k=oe(),U=ae(),d=ge(),a=A(),g=A(),b=A((U==null?void 0:U.Additional.Email)||""),V=A(!1),x=A("");let N;const $=A(!1);te(T,I=>{I&&k.stripePublicKey().then(async y=>{y&&(g.value=await Ne(y),await L(g.value))})});const Y=I=>{x.value=I,V.value=!0};async function L(I){var R;if(!I)return;const y=await k.stripePaymentIntent(((R=l.registration)==null?void 0:R.RegistrationUUID)||""),w={theme:"stripe"};d.current.value.dark&&(w.theme="night"),N=I.elements({clientSecret:y,appearance:w});const o=N.create("linkAuthentication",{defaultValues:{email:b.value}});o.mount("#link-authentication-element"),o.on("change",E=>{b.value=E.value.email});const v={layout:"tabs"};N.create("payment",v).mount("#payment-element")}async function B(I,y){if(!y)return;I.preventDefault(),$.value=!0;const w=new URL(location.href);w.pathname+="payment/stripe/processing";const{error:o}=await y.confirmPayment({elements:N,confirmParams:{return_url:w.toString(),receipt_email:b.value}});o.type==="card_error"||o.type==="validation_error"?Y(o.message):Y("An unexpected error occurred."),$.value=!1}return(I,y)=>(e(),i(Me,{modelValue:T.value,"onUpdate:modelValue":y[4]||(y[4]=w=>T.value=w),title:"Make a Payment",color:"blue-darken-4",fullscreen:"",persistent:""},{default:t(()=>[r(ne,{class:"pa-0"},{default:t(()=>[r(Fe,{class:"mb-2",closable:!0},{title:t(()=>[n(" Payment Information ")]),text:t(()=>[Xe,Ze,et,tt,ot]),_:1}),r($e,{ref_key:"paymentForm",ref:a,id:"payment-form",onSubmit:y[1]||(y[1]=ye(w=>B(w,g.value),["prevent"]))},{default:t(()=>[r(W,null,{default:t(()=>[r(G,null,{default:t(()=>[at]),_:1})]),_:1}),r(W,null,{default:t(()=>[r(G,null,{default:t(()=>[nt]),_:1})]),_:1}),r(W,null,{default:t(()=>[I.registration?(e(),i(G,{key:0,class:"font-weight-bold text-right"},{default:t(()=>[n(" Payment Amount: £"+h(I.registration.Total-I.registration.Paid),1)]),_:1})):S("",!0)]),_:1}),r(W,null,{default:t(()=>[r(G,{class:"text-right",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:t(()=>[r(_,{color:"error",class:"w-100",onClick:y[0]||(y[0]=w=>T.value=!1)},{default:t(()=>[n("Cancel")]),_:1})]),_:1}),r(ve),r(G,{class:"text-left",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:t(()=>[r(_,{type:"submit",color:"success",class:"w-100"},Se({default:t(()=>[n(" Pay Now ")]),_:2},[$.value?{name:"prepend",fn:t(()=>[r(Le,{size:"20",indeterminate:""})]),key:"0"}:void 0]),1024)]),_:1})]),_:1})]),_:1},512)]),_:1}),r(Ye,{modelValue:V.value,"onUpdate:modelValue":y[3]||(y[3]=w=>V.value=w)},{actions:t(()=>[r(_,{variant:"text",onClick:y[2]||(y[2]=w=>V.value=!1)},{default:t(()=>[n(" Close ")]),_:1})]),default:t(()=>[n(h(x.value)+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]))}}),lt={key:0},it={key:1,class:"v-row"},rt={key:0,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},ut={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},ct={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},dt={key:1,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},mt={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},vt={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},ft={class:"v-col v-col-2 align-self-end text-right py-1 text-no-wrap"},pt=p("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Total Charges ",-1),_t={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},gt=p("dt",{class:"v-col v-col-9 py-1 font-weight-bold"}," Current Payments ",-1),yt={class:"v-col v-col-3 align-self-end text-right py-1 text-no-wrap"},St=p("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Balance Due ",-1),ht={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},Tt=j({__name:"AttendeeTransactionList",props:{paymentTransactions:{},registration:{}},setup(l){const T=l,k=A(re(T.paymentTransactions));te(T,()=>{k.value=re(T.paymentTransactions)});const U=(d,a)=>d.Type===q.PAYMENT_TRANSACTION_TYPE_CHARGE&&a.Type!==q.PAYMENT_TRANSACTION_TYPE_CHARGE?-1:d.Type!==q.PAYMENT_TRANSACTION_TYPE_CHARGE&&a.Type===q.PAYMENT_TRANSACTION_TYPE_CHARGE||(d.UpdatedAt||0)>(a.UpdatedAt||0)?1:d.UpdatedAt===a.UpdatedAt?0:-1;return(d,a)=>d.registration.Total==0?(e(),u("p",lt," Your registration is currently being processed, payment information will appear here when ready. ")):(e(),u("dl",it,[(e(!0),u(m,null,H(k.value.sort(U),g=>{var b;return e(),u(m,{key:g.PaymentTransactionUUID},[g.Type===c(q).PAYMENT_TRANSACTION_TYPE_CHARGE?(e(),u("dt",rt,[p("div",ut,h(g.Description.split(":")[0]),1),p("div",ct,h(g.Description.split(":")[1]),1)])):(e(),u("dt",dt,[p("div",mt,h((b=c(Ve).find(V=>V.value===g.Type))==null?void 0:b.title),1),p("div",vt," [ "+h(c(Re)(g.UpdatedAt||""))+" ] "+h(g.Description),1)])),p("dd",ft," £"+h(g.Amount),1)],64)}),128)),pt,p("dd",_t," £"+h(d.registration.Total),1),gt,p("dd",yt," £"+h(d.registration.Paid),1),St,p("dd",ht," £"+h(d.registration.Total-d.registration.Paid),1)]))}});const kt=he({id:String,text:String,...Te(Be({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),It=ke()({name:"VTooltip",props:kt(),emits:{"update:modelValue":l=>!0},setup(l,T){let{slots:k}=T;const U=Ie(l,"modelValue"),{scopeId:d}=Ce(),a=Ue(),g=F(()=>l.id||`v-tooltip-${a}`),b=A(),V=F(()=>l.location.split(" ").length>1?l.location:l.location+" center"),x=F(()=>l.origin==="auto"||l.origin==="overlap"||l.origin.split(" ").length>1||l.location.split(" ").length>1?l.origin:l.origin+" center"),N=F(()=>l.transition?l.transition:U.value?"scale-transition":"fade-transition"),$=F(()=>Z({"aria-describedby":g.value},l.activatorProps));return xe(()=>{const[Y]=ce.filterProps(l);return r(ce,Z({ref:b,class:["v-tooltip",l.class],style:l.style,id:g.value},Y,{modelValue:U.value,"onUpdate:modelValue":L=>U.value=L,transition:N.value,absolute:!0,location:V.value,origin:x.value,persistent:!0,role:"tooltip",activatorProps:$.value,_disableGlobalStack:!0},d),{activator:k.activator,default:function(){var y;for(var L=arguments.length,B=new Array(L),I=0;I<L;I++)B[I]=arguments[I];return((y=k.default)==null?void 0:y.call(k,...B))??l.text}})}),qe({},b)}}),fe=l=>(Ee("data-v-df89e0bf"),l=l(),Ae(),l),Ut=["innerHTML"],Et={key:0},At={key:0,class:"font-weight-bold float-left pt-1 w-50"},bt={key:1,class:"pa-1"},wt={key:0,class:"font-weight-bold float-left pt-1 w-50"},Ct={key:1},Dt={class:"font-weight-bold float-left pt-1 w-50"},Pt={class:"text-red-darken-4"},Vt={key:1,class:"text-red-darken-4 mt-4"},Rt=fe(()=>p("strong",null,"There are forms above that require completion, please edit and save them.",-1)),Ot=[Rt],Nt=fe(()=>p("br",null,null,-1)),Mt=j({__name:"OpenConvention",props:{convention:{},forms:{default:()=>[]}},setup(l){const T=De(),k=oe(),{getPaymentTransactions:U}=Oe(),d=A(T.GetConventionLogoURL(l.convention.ConventionUUID)),a=A(),g=A([]),b=A([]),V=A([]),x=A(!1),N=A([]),$=F(()=>{var o;return K(l.forms,((o=a.value)==null?void 0:o.Submissions)||[],P.FORM_TYPE_REGISTRATION)}),Y=F(()=>{var o;return K(l.forms,((o=a.value)==null?void 0:o.Submissions)||[],P.FORM_TYPE_DEALER)}),L=F(()=>{var o;return K(l.forms,((o=a.value)==null?void 0:o.Submissions)||[],P.FORM_TYPE_ACCOMMODATION)}),B=F(()=>{var o;return K(l.forms,((o=a.value)==null?void 0:o.Submissions)||[],P.FORM_TYPE_ADDITIONAL)}),I=F(()=>{var o,v;return a.value&&((o=a.value)!=null&&o.Submissions)?!!((v=a.value)!=null&&v.Submissions.find(f=>{var R;return((R=f.Form)==null?void 0:R.Type)==P.FORM_TYPE_REGISTRATION&&(f.Status==M.SUBMISSION_STATUS_ACCEPTED||f.Status==M.SUBMISSION_STATUS_COMPLETED)})):!1}),y=async()=>{if(a.value&&"RegistrationUUID"in a.value){const o=await k.getRegistrationAllocationPeriods(a.value.RegistrationUUID);o&&(g.value=o,g.value.sort((v,f)=>v.DateStart>f.DateStart?1:-1).forEach(v=>{var R;const f=b.value.find(E=>{var C;return E.name===((C=v.Accommodation)==null?void 0:C.Name)});if(f){const E=f.periods.find(s=>s.start===v.DateEnd),C=f.periods.find(s=>s.end===v.DateStart);E?E.start=v.DateStart:C?C.end=v.DateEnd:f.periods.push({start:v.DateStart,end:v.DateEnd})}else b.value.push({name:((R=v.Accommodation)==null?void 0:R.Name)||"",periods:[{start:v.DateStart,end:v.DateEnd}]})}))}},w=()=>{k.getRegistrationByConvention(l.convention.ConventionUUID).then(o=>{var v;o&&(o.Submissions?(o.Submissions.forEach((f,R)=>{f.Form||(o.Submissions[R].Form=l.forms.find(E=>E.FormUUID===f.FormUUID))}),Pe(o.Submissions)):o.Submissions=[],a.value=o,y(),I.value&&U(((v=a.value)==null?void 0:v.RegistrationUUID)||"").then(f=>{V.value=f}))})};return te(()=>l.forms,()=>{w()}),w(),(o,v)=>{const f=ee("router-link"),R=ee("RouterLink");return e(),i(je,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:t(()=>[r(Ge,{class:"flex-1-1 align-content-start"},{default:t(()=>[d.value?(e(),i(ze,{key:0,src:d.value,title:o.convention.Name,class:"logo text-center"},null,8,["src","title"])):S("",!0),o.convention.Name?(e(),i(Q,{key:1,class:"text-center"},{default:t(()=>[n(h(o.convention.Name),1)]),_:1})):S("",!0),o.convention.Description?(e(),i(de,{key:2,class:"text-wrap subtitle"},{default:t(()=>[p("div",{innerHTML:o.convention.Description},null,8,Ut)]),_:1})):S("",!0)]),_:1}),r(X,null,{default:t(()=>{var E,C;return[a.value?(e(),u("dl",Et,[a.value.Reference?(e(),u("dt",At," Badge No: ")):S("",!0),a.value.Reference?(e(),u("dd",bt," #"+h(a.value.Reference),1)):S("",!0),(e(!0),u(m,null,H((E=a.value)==null?void 0:E.Submissions,(s,O)=>{var z,se,le,ie;return e(),u(m,{key:s.SubmissionUUID},[s.Form?(e(),u(m,{key:0},[s.Form?(e(),u("dt",wt,h(s.Form.Heading),1)):S("",!0),s.Form?(e(),u("dd",Ct,[r(It,{modelValue:N.value[O],"onUpdate:modelValue":D=>N.value[O]=D},{activator:t(({props:D})=>[r(_,Z(D,{color:"blue-darken-2",icon:"mdi:mdi-information",variant:"text",size:"xs",onClick:zt=>N.value[O]=!N.value[O]}),null,16,["onClick"])]),default:t(()=>[s.Status===c(M).SUBMISSION_STATUS_NULL?(e(),u(m,{key:0},[n(" There is an error with your submission, please contact the registration team for support. ")],64)):s.Status===c(M).SUBMISSION_STATUS_INCOMPLETE?(e(),u(m,{key:1},[n(" Something is missing on your submission which requires completing to be able to process your request. Please contact the registration team for further advice. ")],64)):s.Status===c(M).SUBMISSION_STATUS_OPEN?(e(),u(m,{key:2},[n(" Your submission has been received by our system but you may still make changes before the registration team begins processing it. ")],64)):s.Status===c(M).SUBMISSION_STATUS_LOCKED?(e(),u(m,{key:3},[n(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):s.Status===c(M).SUBMISSION_STATUS_ACCEPTED?(e(),u(m,{key:4},[n(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):s.Status===c(M).SUBMISSION_STATUS_COMPLETED?(e(),u(m,{key:5},[n(" Congratulations everything is complete. If you need to make changes please get in touch. ")],64)):s.Status===c(M).SUBMISSION_STATUS_REJECTED?(e(),u(m,{key:6},[n(" Your request has been rejected. The registration team will provide an explanation. ")],64)):s.Status===c(M).SUBMISSION_STATUS_INVALID?(e(),u(m,{key:7},[n(" Your request has been identified as having errors or being incomplete. Please contact the registration team for additional support. ")],64)):s.Status===c(M).SUBMISSION_STATUS_CANCELLED?(e(),u(m,{key:8},[n(" Your submission has been cancelled. This may be at your request or another reason. The registration team will be able to provide further details. ")],64)):(e(),u(m,{key:9},[n(" Please contact the registration team for support. ")],64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),n(" "+h(c(we)(s.Status))+" ",1),((z=s.Form)==null?void 0:z.Type)===c(P).FORM_TYPE_REGISTRATION?(e(),i(f,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:t(()=>{var D;return[(D=s.Form)!=null&&D.State.Edit&&$.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]}),_:2},1032,["to"])):((se=s.Form)==null?void 0:se.Type)===c(P).FORM_TYPE_ACCOMMODATION?(e(),i(f,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:t(()=>{var D;return[(D=s.Form)!=null&&D.State.Edit&&L.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]}),_:2},1032,["to"])):((le=s.Form)==null?void 0:le.Type)===c(P).FORM_TYPE_DEALER?(e(),i(f,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:t(()=>{var D;return[(D=s.Form)!=null&&D.State.Edit&&Y.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]}),_:2},1032,["to"])):((ie=s.Form)==null?void 0:ie.Type)===c(P).FORM_TYPE_ADDITIONAL?(e(),i(f,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:t(()=>{var D;return[(D=s.Form)!=null&&D.State.Edit&&B.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]}),_:2},1032,["to"])):S("",!0)])):S("",!0)],64)):S("",!0)],64)}),128)),((C=a.value)==null?void 0:C.Submissions.length)>=1?(e(!0),u(m,{key:2},H(o.forms,s=>{var O;return e(),u(m,{key:s.FormUUID},[(O=a.value)!=null&&O.Submissions.find(z=>z.FormUUID===s.FormUUID)?S("",!0):(e(),u(m,{key:0},[p("dt",Dt,h(s.Heading),1),p("dd",Pt,[n(" Requires Completion "),s.Type===c(P).FORM_TYPE_REGISTRATION?(e(),i(f,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:t(()=>[s.State.Edit&&$.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]),_:2},1032,["to"])):s.Type===c(P).FORM_TYPE_ACCOMMODATION?(e(),i(f,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:t(()=>[s.State.Edit&&L.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]),_:2},1032,["to"])):s.Type===c(P).FORM_TYPE_DEALER?(e(),i(f,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:t(()=>[s.State.Edit&&Y.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]),_:2},1032,["to"])):s.Type===c(P).FORM_TYPE_ADDITIONAL?(e(),i(f,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:t(()=>[s.State.Edit&&B.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]),_:2},1032,["to"])):S("",!0)])],64))],64)}),128)):S("",!0)])):S("",!0),a.value&&a.value.Submissions.length>=1&&o.forms.filter(s=>{var O;return!((O=a.value)!=null&&O.Submissions.find(z=>z.FormUUID==s.FormUUID))}).length?(e(),u("div",Vt,Ot)):S("",!0)]}),_:1}),b.value.length>0?(e(),u(m,{key:0},[r(Q,{class:"pb-0"},{default:t(()=>[n("Allocated Accommodation")]),_:1}),r(de,{class:"text-wrap"},{default:t(()=>[n("The following accommodation has been allocated to your registration. In some cases this may not have been your first choice.")]),_:1}),r(X,null,{default:t(()=>[r(We,{density:"compact"},{default:t(()=>[(e(!0),u(m,null,H(b.value,E=>(e(),i(Ke,{key:E.name},{default:t(()=>[r(Je,null,{default:t(()=>[n(h(E.name),1)]),_:2},1024),(e(!0),u(m,null,H(E.periods,C=>(e(),i(Qe,{key:C.start},{default:t(()=>[n(" ("+h(c(ue)(C.start))+" - "+h(c(ue)(C.end))+")",1),Nt]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1})],64)):S("",!0),I.value&&a.value?(e(),u(m,{key:1},[r(Q,{class:"pb-4"},{default:t(()=>[n("Payment Information")]),_:1}),r(X,null,{default:t(()=>[r(Tt,{"payment-transactions":V.value,registration:a.value},null,8,["payment-transactions","registration"])]),_:1})],64)):S("",!0),r(He,null,{default:t(()=>{var E,C;return[o.convention.DetailLink?(e(),i(_,{key:0,color:"orange",href:o.convention.DetailLink},{default:t(()=>[n(h(c(J).buttonDetails),1)]),_:1},8,["href"])):S("",!0),r(ve),$.value?(e(),u(m,{key:1},[(E=a.value)!=null&&E.Submissions.find(s=>{var O;return((O=s.Form)==null?void 0:O.Type)===c(P).FORM_TYPE_REGISTRATION})?(e(),i(R,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:t(()=>[r(_,{color:"primary"},{default:t(()=>[n(h(c(J).buttonViewRegistration),1)]),_:1})]),_:1},8,["to"])):(e(),u(m,{key:0},[(C=o.forms.find(s=>s.Type===c(P).FORM_TYPE_REGISTRATION))!=null&&C.State.New?(e(),i(R,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:t(()=>[r(_,{color:"primary"},{default:t(()=>[n(h(c(J).buttonRegister),1)]),_:1})]),_:1},8,["to"])):S("",!0)],64))],64)):I.value&&a.value&&a.value.Total>a.value.Paid?(e(),u(m,{key:2},[r(_,{color:"success",variant:"elevated",onClick:v[0]||(v[0]=s=>x.value=!0)},{default:t(()=>[n("Make Payment")]),_:1}),a.value?(e(),i(st,{key:0,"payment-transactions":V.value,registration:a.value,modelValue:x.value,"onUpdate:modelValue":v[1]||(v[1]=s=>x.value=s)},null,8,["payment-transactions","registration","modelValue"])):S("",!0)],64)):S("",!0)]}),_:1})]),_:1})}}});const Ft=me(Mt,[["__scopeId","data-v-df89e0bf"]]),$t=j({__name:"Conventions",setup(l){const T=oe(),k=A([]),U=A([]);return T.getOpenConventionsList().then(d=>{d&&(k.value=[...k.value,...d],T.getAvailableConventionForms(k.value.map(a=>a.ConventionUUID)).then(a=>{U.value=[...U.value,...a]}).catch(a=>{console.error(a)}))}),(d,a)=>(e(),i(ne,null,{default:t(()=>[r(W,{class:"justify-center"},{default:t(()=>[(e(!0),u(m,null,H(k.value,g=>(e(),i(G,{key:g.ConventionUUID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:t(()=>[r(Ft,{convention:g,forms:U.value.filter(b=>b.ConventionUUID===g.ConventionUUID)},null,8,["convention","forms"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),Lt={};function xt(l,T){return e(),u("div")}const Yt=me(Lt,[["render",xt]]),Bt=j({__name:"MainView",emits:["pageTitle"],setup(l,{emit:T}){T("pageTitle","Scotiacon Registration System"),sessionStorage.getItem("reload")==="true"&&(sessionStorage.removeItem("reload"),setTimeout(()=>{location.reload()},500));const U=localStorage.getItem("gjt_token"),d=localStorage.getItem("ajt_token");U?(localStorage.removeItem("gjt_token"),location.href=U):d&&(localStorage.removeItem("ajt_token"),location.href=d);const a=A(ae());return(g,b)=>{const V=ee("router-link");return e(),u(m,null,[a.value&&!a.value.Additional.Email?(e(),i(ne,{key:0,class:"bg-red-darken-4 text-center",fluid:!0},{default:t(()=>[n(" Please enter a Contact Email on the "),r(V,{to:"/profile",class:"text-white font-weight-bold"},{default:t(()=>[n("manage account page")]),_:1}),n(" to ensure we can contact you. ")]),_:1})):S("",!0),r($t),r(Yt)],64)}}}),So=j({__name:"Home",emits:["pageTitle"],setup(l,{emit:T}){const k=ae();return T("pageTitle","Telegram Login"),(U,d)=>(e(),u("div",null,[c(k)?(e(),i(Bt,{key:0,onPageTitle:d[0]||(d[0]=a=>T("pageTitle",a))})):(e(),i(be,{key:1}))]))}});export{So as default};
