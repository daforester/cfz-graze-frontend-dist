import{I as H,a0 as fe,a1 as pe,J as _e,r as A,w as ee,M as e,N as i,O as t,v as r,P as n,R as ye,Q as h,S,a2 as ge,X as p,a3 as te,K as ie,V as u,H as v,a4 as G,W as d,p as Se,a5 as he,n as Te,u as ke,a as Ie,e as M,x as X,L as Z,Y as Ue,Z as Ee,_ as de}from"./index-df2ebec6.js";import{G as oe}from"./userData-7664683d.js";import{_ as Ae}from"./LoginView.vue_vue_type_script_setup_true_lang-615e438d.js";import{s as K}from"./index-26b71cef.js";import{F as D}from"./form-29fd1dbb.js";import{S as N,a as be}from"./submission-6136b51d.js";import{V as me,u as we,a as Ce}from"./scopeId-01795715.js";import{c as W}from"./canEditForm-0574b4b5.js";import{s as De}from"./sortSubmissions-8ed80f07.js";import{P as j,a as Pe,f as Ve,h as re,u as Re}from"./useDisplayTransactions-1614fb3d.js";import{l as Oe}from"./stripe.esm-091597cd.js";import{_ as Ne}from"./ModelDialog.vue_vue_type_script_setup_true_lang-3149a9db.js";import{V as Me}from"./VAlert-b7dfa7db.js";import{V as Fe}from"./VForm-4219ea8b.js";import{V as q,a as z}from"./VRow-045c58a9.js";import{V as _,a as $e}from"./VBtn-3780ed9a.js";import{j as ae,u as Le}from"./VContainer-2dbb1f7c.js";import{V as xe,m as Ye,a as ue}from"./SaveButton.vue_vue_type_script_setup_true_lang-1e677bd5.js";import{V as Be}from"./VAvatar-fec3d5ca.js";import{V as J,a as ce,b as ze,c as Q,d as Ge,e as He}from"./VCard-12b7be65.js";import{f as je}from"./forwardRefs-60dd28ac.js";import{V as qe,a as We,c as Ke,d as Je}from"./VList-16e42e8b.js";import"./emailFormVariant-e5e0aad4.js";import"./LoginButton-3be1133a.js";import"./createSimpleFunctional-1e18b869.js";import"./VDialog-06e8a6a7.js";import"./VToolbar-32980ce1.js";import"./VDivider-3dc55804.js";const Qe=p("p",{class:"my-4"},[n(" Payments are non-refundable, please check our "),p("a",{target:"_blank",href:"https://www.scotiacon.org.uk/policies"},"policies"),n(" for further information. ")],-1),Xe=p("p",{class:"my-4"}," You must be over 18 to attend the convention and be able to produce valid ID matching the details on your registration. ",-1),Ze=p("p",{class:"my-4"}," If you are unable to provide valid ID when asked at the convention you will not be issued your attendee badge. ",-1),et=p("p",{class:"my-4"}," Payments should be made by the authorised card holder only. ",-1),tt=p("p",{class:"my-4"},[n(" Please contact "),p("a",{href:"mailto:registration@scotiacon.org.uk"},"registration@scotiacon.org.uk"),n(" if you need any further assistance. ")],-1),ot=p("div",{id:"link-authentication-element"},null,-1),at=p("div",{id:"payment-element"},null,-1),nt=H({__name:"StripePayment",props:fe({paymentTransactions:{},registration:{}},{modelValue:{type:Boolean,required:!0}}),emits:["update:modelValue"],setup(l){const T=pe(l,"modelValue"),k=te(),U=oe(),m=_e(),a=A(),y=A(),b=A((U==null?void 0:U.Additional.Email)||""),P=A(!1),L=A("");let R;const F=A(!1);ee(T,I=>{I&&k.stripePublicKey().then(async g=>{g&&(y.value=await Oe(g),await $(y.value))})});const x=I=>{L.value=I,P.value=!0};async function $(I){var E;if(!I)return;const g=await k.stripePaymentIntent(((E=l.registration)==null?void 0:E.RegistrationUUID)||""),o={theme:"stripe"};m.current.value.dark&&(o.theme="night"),R=I.elements({clientSecret:g,appearance:o});const c=R.create("linkAuthentication",{defaultValues:{email:b.value}});c.mount("#link-authentication-element"),c.on("change",w=>{b.value=w.value.email});const f={layout:"tabs"};R.create("payment",f).mount("#payment-element")}async function Y(I,g){if(!g)return;I.preventDefault(),F.value=!0;const o=new URL(location.href);o.pathname+="payment/stripe/processing";const{error:c}=await g.confirmPayment({elements:R,confirmParams:{return_url:o.toString(),receipt_email:b.value}});c.type==="card_error"||c.type==="validation_error"?x(c.message):x("An unexpected error occurred."),F.value=!1}return(I,g)=>(e(),i(Ne,{modelValue:T.value,"onUpdate:modelValue":g[4]||(g[4]=o=>T.value=o),title:"Make a Payment",color:"blue-darken-4",fullscreen:"",persistent:""},{default:t(()=>[r(ae,{class:"pa-0"},{default:t(()=>[r(Me,{class:"mb-2",closable:!0},{title:t(()=>[n(" Payment Information ")]),text:t(()=>[Qe,Xe,Ze,et,tt]),_:1}),r(Fe,{ref_key:"paymentForm",ref:a,id:"payment-form",onSubmit:g[1]||(g[1]=ye(o=>Y(o,y.value),["prevent"]))},{default:t(()=>[r(q,null,{default:t(()=>[r(z,null,{default:t(()=>[ot]),_:1})]),_:1}),r(q,null,{default:t(()=>[r(z,null,{default:t(()=>[at]),_:1})]),_:1}),r(q,null,{default:t(()=>[I.registration?(e(),i(z,{key:0,class:"font-weight-bold text-right"},{default:t(()=>[n(" Payment Amount: £"+h(I.registration.Total-I.registration.Paid),1)]),_:1})):S("",!0)]),_:1}),r(q,null,{default:t(()=>[r(z,{class:"text-right",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:t(()=>[r(_,{color:"error",class:"w-100",onClick:g[0]||(g[0]=o=>T.value=!1)},{default:t(()=>[n("Cancel")]),_:1})]),_:1}),r(me),r(z,{class:"text-left",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:t(()=>[r(_,{type:"submit",color:"success",class:"w-100"},ge({default:t(()=>[n(" Pay Now ")]),_:2},[F.value?{name:"prepend",fn:t(()=>[r($e,{size:"20",indeterminate:""})]),key:"0"}:void 0]),1024)]),_:1})]),_:1})]),_:1},512)]),_:1}),r(xe,{modelValue:P.value,"onUpdate:modelValue":g[3]||(g[3]=o=>P.value=o)},{actions:t(()=>[r(_,{variant:"text",onClick:g[2]||(g[2]=o=>P.value=!1)},{default:t(()=>[n(" Close ")]),_:1})]),default:t(()=>[n(h(L.value)+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]))}}),st={key:0},lt={key:1,class:"v-row"},it={key:0,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},rt={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},ut={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},ct={key:1,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},dt={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},mt={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},vt={class:"v-col v-col-2 align-self-end text-right py-1 text-no-wrap"},ft=p("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Total Charges ",-1),pt={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},_t=p("dt",{class:"v-col v-col-9 py-1 font-weight-bold"}," Current Payments ",-1),yt={class:"v-col v-col-3 align-self-end text-right py-1 text-no-wrap"},gt=p("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Balance Due ",-1),St={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},ht=H({__name:"AttendeeTransactionList",props:{paymentTransactions:{},registration:{}},setup(l){const T=l,k=A(ie(T.paymentTransactions));ee(T,()=>{k.value=ie(T.paymentTransactions)});const U=(m,a)=>m.Type===j.PAYMENT_TRANSACTION_TYPE_CHARGE&&a.Type!==j.PAYMENT_TRANSACTION_TYPE_CHARGE?-1:m.Type!==j.PAYMENT_TRANSACTION_TYPE_CHARGE&&a.Type===j.PAYMENT_TRANSACTION_TYPE_CHARGE||(m.UpdatedAt||0)>(a.UpdatedAt||0)?1:m.UpdatedAt===a.UpdatedAt?0:-1;return(m,a)=>m.registration.Total==0?(e(),u("p",st," Your registration is currently being processed, payment information will appear here when ready. ")):(e(),u("dl",lt,[(e(!0),u(v,null,G(k.value.sort(U),y=>{var b;return e(),u(v,{key:y.PaymentTransactionUUID},[y.Type===d(j).PAYMENT_TRANSACTION_TYPE_CHARGE?(e(),u("dt",it,[p("div",rt,h(y.Description.split(":")[0]),1),p("div",ut,h(y.Description.split(":")[1]),1)])):(e(),u("dt",ct,[p("div",dt,h((b=d(Pe).find(P=>P.value===y.Type))==null?void 0:b.title),1),p("div",mt," [ "+h(d(Ve)(y.UpdatedAt||""))+" ] "+h(y.Description),1)])),p("dd",vt," £"+h(y.Amount),1)],64)}),128)),ft,p("dd",pt," £"+h(m.registration.Total),1),_t,p("dd",yt," £"+h(m.registration.Paid),1),gt,p("dd",St," £"+h(m.registration.Total-m.registration.Paid),1)]))}});const Tt=Se({id:String,text:String,...he(Ye({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),kt=Te()({name:"VTooltip",props:Tt(),emits:{"update:modelValue":l=>!0},setup(l,T){let{slots:k}=T;const U=ke(l,"modelValue"),{scopeId:m}=we(),a=Ie(),y=M(()=>l.id||`v-tooltip-${a}`),b=A(),P=M(()=>l.location.split(" ").length>1?l.location:l.location+" center"),L=M(()=>l.origin==="auto"||l.origin==="overlap"||l.origin.split(" ").length>1||l.location.split(" ").length>1?l.origin:l.origin+" center"),R=M(()=>l.transition?l.transition:U.value?"scale-transition":"fade-transition"),F=M(()=>X({"aria-describedby":y.value},l.activatorProps));return Le(()=>{const[x]=ue.filterProps(l);return r(ue,X({ref:b,class:["v-tooltip",l.class],style:l.style,id:y.value},x,{modelValue:U.value,"onUpdate:modelValue":$=>U.value=$,transition:R.value,absolute:!0,location:P.value,origin:L.value,persistent:!0,role:"tooltip",activatorProps:F.value,_disableGlobalStack:!0},m),{activator:k.activator,default:function(){var g;for(var $=arguments.length,Y=new Array($),I=0;I<$;I++)Y[I]=arguments[I];return((g=k.default)==null?void 0:g.call(k,...Y))??l.text}})}),je({},b)}}),ve=l=>(Ue("data-v-b1b78484"),l=l(),Ee(),l),It=["innerHTML"],Ut={key:0},Et={key:0,class:"font-weight-bold float-left pt-1 w-50"},At={key:1,class:"pa-1"},bt={key:0,class:"font-weight-bold float-left pt-1 w-50"},wt={key:1},Ct={class:"font-weight-bold float-left pt-1 w-50"},Dt={class:"text-red-darken-4"},Pt={key:1,class:"text-red-darken-4 mt-4"},Vt=ve(()=>p("strong",null,"There are forms above that require completion, please edit and save them.",-1)),Rt=[Vt],Ot=ve(()=>p("br",null,null,-1)),Nt=H({__name:"OpenConvention",props:{convention:{},forms:{default:()=>[]}},setup(l){const T=Ce(),k=te(),{getPaymentTransactions:U}=Re(),m=A(T.GetConventionLogoURL(l.convention.ConventionUUID)),a=A(),y=A([]),b=A([]),P=A([]),L=A(!1),R=A([]),F=M(()=>{var o;return W(l.forms,((o=a.value)==null?void 0:o.Submissions)||[],D.FORM_TYPE_REGISTRATION)}),x=M(()=>{var o;return W(l.forms,((o=a.value)==null?void 0:o.Submissions)||[],D.FORM_TYPE_DEALER)}),$=M(()=>{var o;return W(l.forms,((o=a.value)==null?void 0:o.Submissions)||[],D.FORM_TYPE_ACCOMMODATION)}),Y=M(()=>{var o;return W(l.forms,((o=a.value)==null?void 0:o.Submissions)||[],D.FORM_TYPE_ADDITIONAL)}),I=M(()=>{var o,c;return a.value&&((o=a.value)!=null&&o.Submissions)?!!((c=a.value)!=null&&c.Submissions.find(f=>{var O;return((O=f.Form)==null?void 0:O.Type)==D.FORM_TYPE_REGISTRATION&&(f.Status==N.SUBMISSION_STATUS_ACCEPTED||f.Status==N.SUBMISSION_STATUS_COMPLETED)})):!1}),g=async()=>{if(a.value&&"RegistrationUUID"in a.value){const o=await k.getRegistrationAllocationPeriods(a.value.RegistrationUUID);o&&(y.value=o,y.value.sort((c,f)=>c.DateStart>f.DateStart?1:-1).forEach(c=>{var O;const f=b.value.find(E=>{var w;return E.name===((w=c.Accommodation)==null?void 0:w.Name)});if(f){const E=f.periods.find(s=>s.start===c.DateEnd),w=f.periods.find(s=>s.end===c.DateStart);E?E.start=c.DateStart:w?w.end=c.DateEnd:f.periods.push({start:c.DateStart,end:c.DateEnd})}else b.value.push({name:((O=c.Accommodation)==null?void 0:O.Name)||"",periods:[{start:c.DateStart,end:c.DateEnd}]})}))}};return ee(()=>l.forms,()=>{k.getRegistrationByConvention(l.convention.ConventionUUID).then(o=>{var c;o&&(o.Submissions?(o.Submissions.forEach((f,O)=>{f.Form||(o.Submissions[O].Form=l.forms.find(E=>E.FormUUID===f.FormUUID))}),De(o.Submissions)):o.Submissions=[],a.value=o,g(),I.value&&U(((c=a.value)==null?void 0:c.RegistrationUUID)||"").then(f=>{P.value=f}))})}),(o,c)=>{const f=Z("router-link"),O=Z("RouterLink");return e(),i(He,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:t(()=>[r(ze,{class:"flex-1-1 align-content-start"},{default:t(()=>[m.value?(e(),i(Be,{key:0,src:m.value,title:o.convention.Name,class:"logo text-center"},null,8,["src","title"])):S("",!0),o.convention.Name?(e(),i(J,{key:1,class:"text-center"},{default:t(()=>[n(h(o.convention.Name),1)]),_:1})):S("",!0),o.convention.Description?(e(),i(ce,{key:2,class:"text-wrap subtitle"},{default:t(()=>[p("div",{innerHTML:o.convention.Description},null,8,It)]),_:1})):S("",!0)]),_:1}),r(Q,null,{default:t(()=>{var E,w;return[a.value?(e(),u("dl",Ut,[a.value.Reference?(e(),u("dt",Et," Badge No: ")):S("",!0),a.value.Reference?(e(),u("dd",At," #"+h(a.value.Reference),1)):S("",!0),(e(!0),u(v,null,G((E=a.value)==null?void 0:E.Submissions,(s,V)=>{var B,ne,se,le;return e(),u(v,{key:s.SubmissionUUID},[s.Form?(e(),u(v,{key:0},[s.Form?(e(),u("dt",bt,h(s.Form.Heading),1)):S("",!0),s.Form?(e(),u("dd",wt,[r(kt,{modelValue:R.value[V],"onUpdate:modelValue":C=>R.value[V]=C},{activator:t(({props:C})=>[r(_,X(C,{color:"blue-darken-2",icon:"mdi:mdi-information",variant:"text",size:"xs",onClick:Bt=>R.value[V]=!R.value[V]}),null,16,["onClick"])]),default:t(()=>[s.Status===d(N).SUBMISSION_STATUS_NULL?(e(),u(v,{key:0},[n(" There is an error with your submission, please contact the registration team for support. ")],64)):s.Status===d(N).SUBMISSION_STATUS_INCOMPLETE?(e(),u(v,{key:1},[n(" Something is missing on your submission which requires completing to be able to process your request. Please contact the registration team for further advice. ")],64)):s.Status===d(N).SUBMISSION_STATUS_OPEN?(e(),u(v,{key:2},[n(" Your submission has been received by our system but you may still make changes before the registration team begins processing it. ")],64)):s.Status===d(N).SUBMISSION_STATUS_LOCKED?(e(),u(v,{key:3},[n(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):s.Status===d(N).SUBMISSION_STATUS_ACCEPTED?(e(),u(v,{key:4},[n(" We have locked your submission to prevent further changes whilst we process it. If you need to change something please get in touch. ")],64)):s.Status===d(N).SUBMISSION_STATUS_COMPLETED?(e(),u(v,{key:5},[n(" Congratulations everything is complete. If you need to make changes please get in touch. ")],64)):s.Status===d(N).SUBMISSION_STATUS_REJECTED?(e(),u(v,{key:6},[n(" Your request has been rejected. The registration team will provide an explanation. ")],64)):s.Status===d(N).SUBMISSION_STATUS_INVALID?(e(),u(v,{key:7},[n(" Your request has been identified as having errors or being incomplete. Please contact the registration team for additional support. ")],64)):s.Status===d(N).SUBMISSION_STATUS_CANCELLED?(e(),u(v,{key:8},[n(" Your submission has been cancelled. This may be at your request or another reason. The registration team will be able to provide further details. ")],64)):(e(),u(v,{key:9},[n(" Please contact the registration team for support. ")],64))]),_:2},1032,["modelValue","onUpdate:modelValue"]),n(" "+h(d(be)(s.Status))+" ",1),((B=s.Form)==null?void 0:B.Type)===d(D).FORM_TYPE_REGISTRATION?(e(),i(f,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:t(()=>{var C;return[(C=s.Form)!=null&&C.State.Edit&&F.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]}),_:2},1032,["to"])):((ne=s.Form)==null?void 0:ne.Type)===d(D).FORM_TYPE_ACCOMMODATION?(e(),i(f,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:t(()=>{var C;return[(C=s.Form)!=null&&C.State.Edit&&$.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]}),_:2},1032,["to"])):((se=s.Form)==null?void 0:se.Type)===d(D).FORM_TYPE_DEALER?(e(),i(f,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:t(()=>{var C;return[(C=s.Form)!=null&&C.State.Edit&&x.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]}),_:2},1032,["to"])):((le=s.Form)==null?void 0:le.Type)===d(D).FORM_TYPE_ADDITIONAL?(e(),i(f,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:t(()=>{var C;return[(C=s.Form)!=null&&C.State.Edit&&Y.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]}),_:2},1032,["to"])):S("",!0)])):S("",!0)],64)):S("",!0)],64)}),128)),((w=a.value)==null?void 0:w.Submissions.length)>=1?(e(!0),u(v,{key:2},G(o.forms,s=>{var V;return e(),u(v,{key:s.FormUUID},[(V=a.value)!=null&&V.Submissions.find(B=>B.FormUUID===s.FormUUID)?S("",!0):(e(),u(v,{key:0},[p("dt",Ct,h(s.Heading),1),p("dd",Dt,[n(" Requires Completion "),s.Type===d(D).FORM_TYPE_REGISTRATION?(e(),i(f,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:t(()=>[s.State.Edit&&F.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]),_:2},1032,["to"])):s.Type===d(D).FORM_TYPE_ACCOMMODATION?(e(),i(f,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:t(()=>[s.State.Edit&&$.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]),_:2},1032,["to"])):s.Type===d(D).FORM_TYPE_DEALER?(e(),i(f,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:t(()=>[s.State.Edit&&x.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]),_:2},1032,["to"])):s.Type===d(D).FORM_TYPE_ADDITIONAL?(e(),i(f,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:t(()=>[s.State.Edit&&Y.value?(e(),i(_,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[n(" Edit ")]),_:1})):(e(),i(_,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[n("View")]),_:1}))]),_:2},1032,["to"])):S("",!0)])],64))],64)}),128)):S("",!0)])):S("",!0),a.value&&a.value.Submissions.length>=1&&o.forms.filter(s=>{var V;return!((V=a.value)!=null&&V.Submissions.find(B=>B.FormUUID==s.FormUUID))}).length?(e(),u("div",Pt,Rt)):S("",!0)]}),_:1}),b.value.length>0?(e(),u(v,{key:0},[r(J,{class:"pb-0"},{default:t(()=>[n("Allocated Accommodation")]),_:1}),r(ce,{class:"text-wrap"},{default:t(()=>[n("The following accommodation has been allocated to your registration. In some cases this may not have been your first choice.")]),_:1}),r(Q,null,{default:t(()=>[r(qe,{density:"compact"},{default:t(()=>[(e(!0),u(v,null,G(b.value,E=>(e(),i(We,{key:E.name},{default:t(()=>[r(Ke,null,{default:t(()=>[n(h(E.name),1)]),_:2},1024),(e(!0),u(v,null,G(E.periods,w=>(e(),i(Je,{key:w.start},{default:t(()=>[n(" ("+h(d(re)(w.start))+" - "+h(d(re)(w.end))+")",1),Ot]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1})],64)):S("",!0),I.value&&a.value?(e(),u(v,{key:1},[r(J,{class:"pb-4"},{default:t(()=>[n("Payment Information")]),_:1}),r(Q,null,{default:t(()=>[r(ht,{"payment-transactions":P.value,registration:a.value},null,8,["payment-transactions","registration"])]),_:1})],64)):S("",!0),r(Ge,null,{default:t(()=>{var E,w;return[o.convention.DetailLink?(e(),i(_,{key:0,color:"orange",href:o.convention.DetailLink},{default:t(()=>[n(h(d(K).buttonDetails),1)]),_:1},8,["href"])):S("",!0),r(me),F.value?(e(),u(v,{key:1},[(E=a.value)!=null&&E.Submissions.find(s=>{var V;return((V=s.Form)==null?void 0:V.Type)===d(D).FORM_TYPE_REGISTRATION})?(e(),i(O,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:t(()=>[r(_,{color:"primary"},{default:t(()=>[n(h(d(K).buttonViewRegistration),1)]),_:1})]),_:1},8,["to"])):(e(),u(v,{key:0},[(w=o.forms.find(s=>s.Type===d(D).FORM_TYPE_REGISTRATION))!=null&&w.State.New?(e(),i(O,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:t(()=>[r(_,{color:"primary"},{default:t(()=>[n(h(d(K).buttonRegister),1)]),_:1})]),_:1},8,["to"])):S("",!0)],64))],64)):I.value&&a.value&&a.value.Total>a.value.Paid?(e(),u(v,{key:2},[r(_,{color:"success",variant:"elevated",onClick:c[0]||(c[0]=s=>L.value=!0)},{default:t(()=>[n("Make Payment")]),_:1}),a.value?(e(),i(nt,{key:0,"payment-transactions":P.value,registration:a.value,modelValue:L.value,"onUpdate:modelValue":c[1]||(c[1]=s=>L.value=s)},null,8,["payment-transactions","registration","modelValue"])):S("",!0)],64)):S("",!0)]}),_:1})]),_:1})}}});const Mt=de(Nt,[["__scopeId","data-v-b1b78484"]]),Ft=H({__name:"Conventions",setup(l){const T=te(),k=A([]),U=A([]);return T.getOpenConventionsList().then(m=>{m&&(k.value=[...k.value,...m],T.getAvailableConventionForms(k.value.map(a=>a.ConventionUUID)).then(a=>{U.value=[...U.value,...a]}).catch(a=>{console.error(a)}))}),(m,a)=>(e(),i(ae,null,{default:t(()=>[r(q,{class:"justify-center"},{default:t(()=>[(e(!0),u(v,null,G(k.value,y=>(e(),i(z,{key:y.ConventionUUID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:t(()=>[r(Mt,{convention:y,forms:U.value.filter(b=>b.ConventionUUID===y.ConventionUUID)},null,8,["convention","forms"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),$t={};function Lt(l,T){return e(),u("div")}const xt=de($t,[["render",Lt]]),Yt=H({__name:"MainView",emits:["pageTitle"],setup(l,{emit:T}){T("pageTitle","Scotiacon Registration System"),sessionStorage.getItem("reload")==="true"&&(sessionStorage.removeItem("reload"),setTimeout(()=>{location.reload()},500));const U=localStorage.getItem("gjt_token"),m=localStorage.getItem("ajt_token");U?(localStorage.removeItem("gjt_token"),location.href=U):m&&(localStorage.removeItem("ajt_token"),location.href=m);const a=A(oe());return(y,b)=>{const P=Z("router-link");return e(),u(v,null,[a.value&&!a.value.Additional.Email?(e(),i(ae,{key:0,class:"bg-red-darken-4 text-center",fluid:!0},{default:t(()=>[n(" Please enter a Contact Email on the "),r(P,{to:"/profile",class:"text-white font-weight-bold"},{default:t(()=>[n("manage account page")]),_:1}),n(" to ensure we can contact you. ")]),_:1})):S("",!0),r(Ft),r(xt)],64)}}}),go=H({__name:"Home",emits:["pageTitle"],setup(l,{emit:T}){const k=oe();return T("pageTitle","Telegram Login"),(U,m)=>(e(),u("div",null,[d(k)?(e(),i(Yt,{key:0,onPageTitle:m[0]||(m[0]=a=>T("pageTitle",a))})):(e(),i(Ae,{key:1}))]))}});export{go as default};
