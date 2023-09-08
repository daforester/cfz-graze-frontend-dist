import{I as $,a0 as se,a1 as le,J as ie,r as w,w as J,M as e,N as a,O as t,v as i,P as l,R as re,Q as h,S as y,a2 as ue,X as d,a3 as Q,K as Z,V as u,H as C,a4 as H,W as k,e as z,L as K,Y as ce,Z as de,_ as ne}from"./index-c8934c69.js";import{G as W}from"./userData-380d8799.js";import{_ as me}from"./LoginView.vue_vue_type_script_setup_true_lang-4eb0f858.js";import{s as q}from"./index-26b71cef.js";import{F as E}from"./form-29fd1dbb.js";import{S as ee,a as ve}from"./submission-9dd916bb.js";import{V as ae,a as pe}from"./scopeId-b86724cd.js";import{c as B}from"./canEditForm-787038d8.js";import{s as fe}from"./sortSubmissions-8ed80f07.js";import{P as G,a as _e,f as ye,u as ge}from"./useDisplayTransactions-3c88a052.js";import{V as Te,l as he}from"./VAlert-a000f3d1.js";import{_ as ke}from"./ModelDialog.vue_vue_type_script_setup_true_lang-6c8a8dbe.js";import{V as Se}from"./VForm-3f144f97.js";import{V as N,a as V}from"./VRow-a63c9c32.js";import{V as p,a as Ie}from"./VBtn-10a69a8c.js";import{j as X}from"./VContainer-2aec0364.js";import{V as Ee}from"./SaveButton.vue_vue_type_script_setup_true_lang-39a65dfe.js";import{V as Ue}from"./VAvatar-5197daeb.js";import{V as te,a as Ce,b as we,c as oe,d as Ae,e as Re}from"./VCard-8ac0e08f.js";import"./emailFormVariant-e5e0aad4.js";import"./LoginButton-afc3eae1.js";import"./createSimpleFunctional-45a4b44c.js";import"./forwardRefs-b87e1eff.js";import"./VDialog-5693eabf.js";import"./VToolbar-95bb0b86.js";const De=d("p",{class:"my-4"},[l(" Payments are non-refundable, please check our "),d("a",{target:"_blank",href:"https://www.scotiacon.org.uk/policies"},"policies"),l(" for further information. ")],-1),Pe=d("p",{class:"my-4"}," You must be over 18 to attend the convention and be able to produce valid ID matching the details on your registration. ",-1),be=d("p",{class:"my-4"}," If you are unable to provide valid ID when asked at the convention you will not be issued your attendee badge. ",-1),Fe=d("p",{class:"my-4"}," Payments should be made by the authorised card holder only. ",-1),Ve=d("p",{class:"my-4"},[l(" Please contact "),d("a",{href:"mailto:registration@scotiacon.org.uk"},"registration@scotiacon.org.uk"),l(" if you need any further assistance. ")],-1),Oe=d("div",{id:"link-authentication-element"},null,-1),Me=d("div",{id:"payment-element"},null,-1),Ne=d("div",{id:"express-checkout-element"},null,-1),$e=$({__name:"StripePayment",props:se({paymentTransactions:{},registration:{}},{modelValue:{type:Boolean,required:!0}}),emits:["update:modelValue"],setup(v){const g=le(v,"modelValue"),S=Q(),I=W(),c=ie(),n=w(),f=w(),A=w((I==null?void 0:I.Additional.Email)||""),D=w(!1),x=w("");let b;const O=w(!1);J(g,m=>{m&&S.stripePublicKey().then(async r=>{r&&(f.value=await he(r),await P(f.value))})});const M=m=>{x.value=m,D.value=!0},o=()=>{const m=new URL(location.href);return m.pathname+="payment/stripe/processing",m.toString()};async function P(m){var Y,L,U;if(!m)return;const r=await S.stripePaymentIntent(((Y=v.registration)==null?void 0:Y.RegistrationUUID)||""),_={theme:"stripe"};c.current.value.dark&&(_.theme="night"),b=m.elements({clientSecret:r,appearance:_});const s=b.create("linkAuthentication",{defaultValues:{email:A.value}});s.mount("#link-authentication-element"),s.on("change",j=>{A.value=j.value.email});try{m.elements({mode:"payment",amount:(((L=v.registration)==null?void 0:L.Total)||0)-(((U=v.registration)==null?void 0:U.Paid)||0),currency:"gbp",appearance:_}).create("expressCheckout",{}).mount("#express-checkout-element")}catch{}const R={layout:"tabs"};b.create("payment",R).mount("#payment-element")}async function T(m,r){if(!r)return;m.preventDefault(),O.value=!0;const{error:_}=await r.confirmPayment({elements:b,confirmParams:{return_url:o(),receipt_email:A.value}});_.type==="card_error"||_.type==="validation_error"?M(_.message):M("An unexpected error occurred."),O.value=!1}return(m,r)=>(e(),a(ke,{modelValue:g.value,"onUpdate:modelValue":r[4]||(r[4]=_=>g.value=_),title:"Make a Payment",color:"blue-darken-4",fullscreen:"",persistent:""},{default:t(()=>[i(X,{class:"pa-0"},{default:t(()=>[i(Te,{class:"mb-2",closable:!0},{title:t(()=>[l(" Payment Information ")]),text:t(()=>[De,Pe,be,Fe,Ve]),_:1}),i(Se,{ref_key:"paymentForm",ref:n,id:"payment-form",onSubmit:r[1]||(r[1]=re(_=>T(_,f.value),["prevent"]))},{default:t(()=>[i(N,null,{default:t(()=>[i(V,null,{default:t(()=>[Oe]),_:1})]),_:1}),i(N,null,{default:t(()=>[i(V,null,{default:t(()=>[Me]),_:1})]),_:1}),i(N,null,{default:t(()=>[i(V,null,{default:t(()=>[Ne]),_:1})]),_:1}),i(N,null,{default:t(()=>[m.registration?(e(),a(V,{key:0,class:"font-weight-bold text-right"},{default:t(()=>[l(" Payment Amount: £"+h(m.registration.Total-m.registration.Paid),1)]),_:1})):y("",!0)]),_:1}),i(N,null,{default:t(()=>[i(V,{class:"text-right",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:t(()=>[i(p,{color:"error",class:"w-100",onClick:r[0]||(r[0]=_=>g.value=!1)},{default:t(()=>[l("Cancel")]),_:1})]),_:1}),i(ae),i(V,{class:"text-left",cols:"12",sm:"3",md:"2",lg:"2",xl:"1"},{default:t(()=>[i(p,{type:"submit",color:"success",class:"w-100"},ue({default:t(()=>[l(" Pay Now ")]),_:2},[O.value?{name:"prepend",fn:t(()=>[i(Ie,{size:"20",indeterminate:""})]),key:"0"}:void 0]),1024)]),_:1})]),_:1})]),_:1},512)]),_:1}),i(Ee,{modelValue:D.value,"onUpdate:modelValue":r[3]||(r[3]=_=>D.value=_)},{actions:t(()=>[i(p,{variant:"text",onClick:r[2]||(r[2]=_=>D.value=!1)},{default:t(()=>[l(" Close ")]),_:1})]),default:t(()=>[l(h(x.value)+" ",1)]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]))}}),xe={key:0},Ye={key:1,class:"v-row"},Le={key:0,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},ze={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},Ge={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},Be={key:1,class:"v-col v-col-10 py-1 v-row mx-0 pl-0"},He={class:"v-col v-col-12 v-col-sm-4 v-col-md-3 font-weight-bold pb-0 pr-0"},je={class:"v-col v-col-12 v-col-sm-8 v-col-md-9 font-italic pt-0 pt-sm-3 pb-sm-0 pl-sm-0"},qe={class:"v-col v-col-2 align-self-end text-right py-1 text-no-wrap"},Ke=d("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Total Charges ",-1),Je={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},Qe=d("dt",{class:"v-col v-col-9 py-1 font-weight-bold"}," Current Payments ",-1),We={class:"v-col v-col-3 align-self-end text-right py-1 text-no-wrap"},Xe=d("dt",{class:"v-col v-col-9 py-1 font-weight-bold totals"}," Balance Due ",-1),Ze={class:"v-col v-col-3 align-self-end text-right py-1 totals text-no-wrap"},et=$({__name:"AttendeeTransactionList",props:{paymentTransactions:{},registration:{}},setup(v){const g=v,S=w(Z(g.paymentTransactions));J(g,()=>{S.value=Z(g.paymentTransactions)});const I=(c,n)=>c.Type===G.PAYMENT_TRANSACTION_TYPE_CHARGE&&n.Type!==G.PAYMENT_TRANSACTION_TYPE_CHARGE?-1:c.Type!==G.PAYMENT_TRANSACTION_TYPE_CHARGE&&n.Type===G.PAYMENT_TRANSACTION_TYPE_CHARGE||(c.UpdatedAt||0)>(n.UpdatedAt||0)?1:c.UpdatedAt===n.UpdatedAt?0:-1;return(c,n)=>c.registration.Total==0?(e(),u("p",xe," Your registration is currently being processed, payment information will appear here when ready. ")):(e(),u("dl",Ye,[(e(!0),u(C,null,H(S.value.sort(I),f=>{var A;return e(),u(C,{key:f.PaymentTransactionUUID},[f.Type===k(G).PAYMENT_TRANSACTION_TYPE_CHARGE?(e(),u("dt",Le,[d("div",ze,h(f.Description.split(":")[0]),1),d("div",Ge,h(f.Description.split(":")[1]),1)])):(e(),u("dt",Be,[d("div",He,h((A=k(_e).find(D=>D.value===f.Type))==null?void 0:A.title),1),d("div",je," [ "+h(k(ye)(f.UpdatedAt||""))+" ] "+h(f.Description),1)])),d("dd",qe," £"+h(f.Amount),1)],64)}),128)),Ke,d("dd",Je," £"+h(c.registration.Total),1),Qe,d("dd",We," £"+h(c.registration.Paid),1),Xe,d("dd",Ze," £"+h(c.registration.Total-c.registration.Paid),1)]))}}),tt=v=>(ce("data-v-d218a137"),v=v(),de(),v),ot=["innerHTML"],nt={key:0},at={key:0,class:"font-weight-bold float-left pt-1 w-50"},st={key:1,class:"pa-1"},lt={key:0,class:"font-weight-bold float-left pt-1 w-50"},it={key:1},rt={class:"font-weight-bold float-left pt-1 w-50"},ut={class:"text-red-darken-4"},ct={key:1,class:"text-red-darken-4 mt-4"},dt=tt(()=>d("strong",null,"There are forms above that require completion, please edit and save them.",-1)),mt=[dt],vt=$({__name:"OpenConvention",props:{convention:{},forms:{default:()=>[]}},setup(v){const g=pe(),S=Q(),{getPaymentTransactions:I}=ge(),c=w(g.GetConventionLogoURL(v.convention.ConventionUUID)),n=w(),f=w([]),A=w(!1),D=z(()=>{var o;return B(v.forms,((o=n.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_REGISTRATION)}),x=z(()=>{var o;return B(v.forms,((o=n.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_DEALER)}),b=z(()=>{var o;return B(v.forms,((o=n.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_ACCOMMODATION)}),O=z(()=>{var o;return B(v.forms,((o=n.value)==null?void 0:o.Submissions)||[],E.FORM_TYPE_ADDITIONAL)}),M=z(()=>{var o,P;return n.value&&((o=n.value)!=null&&o.Submissions)?!!((P=n.value)!=null&&P.Submissions.find(T=>{var m;return((m=T.Form)==null?void 0:m.Type)==E.FORM_TYPE_REGISTRATION&&(T.Status==ee.SUBMISSION_STATUS_ACCEPTED||T.Status==ee.SUBMISSION_STATUS_CONFIRMED)})):!1});return J(()=>v.forms,()=>{S.getRegistrationByConvention(v.convention.ConventionUUID).then(o=>{var P;o&&(o.Submissions?(o.Submissions.forEach((T,m)=>{T.Form||(o.Submissions[m].Form=v.forms.find(r=>r.FormUUID===T.FormUUID))}),fe(o.Submissions)):o.Submissions=[],n.value=o,M.value&&I(((P=n.value)==null?void 0:P.RegistrationUUID)||"").then(T=>{f.value=T}))})}),(o,P)=>{const T=K("router-link"),m=K("RouterLink");return e(),a(Re,{class:"elevation-5 flex-1-0 d-flex flex-column"},{default:t(()=>[i(we,{class:"flex-1-1 align-content-start"},{default:t(()=>[c.value?(e(),a(Ue,{key:0,src:c.value,title:o.convention.Name,class:"logo text-center"},null,8,["src","title"])):y("",!0),o.convention.Name?(e(),a(te,{key:1,class:"text-center"},{default:t(()=>[l(h(o.convention.Name),1)]),_:1})):y("",!0),o.convention.Description?(e(),a(Ce,{key:2,class:"text-wrap subtitle"},{default:t(()=>[d("div",{innerHTML:o.convention.Description},null,8,ot)]),_:1})):y("",!0)]),_:1}),i(oe,null,{default:t(()=>{var r,_;return[n.value?(e(),u("dl",nt,[n.value.Reference?(e(),u("dt",at," Badge No: ")):y("",!0),n.value.Reference?(e(),u("dd",st," #"+h(n.value.Reference),1)):y("",!0),(e(!0),u(C,null,H((r=n.value)==null?void 0:r.Submissions,s=>{var R,F,Y,L;return e(),u(C,{key:s.SubmissionUUID},[s.Form?(e(),u(C,{key:0},[s.Form?(e(),u("dt",lt,h(s.Form.Heading),1)):y("",!0),s.Form?(e(),u("dd",it,[l(h(k(ve)(s.Status))+" ",1),((R=s.Form)==null?void 0:R.Type)===k(E).FORM_TYPE_REGISTRATION?(e(),a(T,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:t(()=>{var U;return[(U=s.Form)!=null&&U.State.Edit&&D.value?(e(),a(p,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[l(" Edit ")]),_:1})):(e(),a(p,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[l("View")]),_:1}))]}),_:2},1032,["to"])):((F=s.Form)==null?void 0:F.Type)===k(E).FORM_TYPE_ACCOMMODATION?(e(),a(T,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:t(()=>{var U;return[(U=s.Form)!=null&&U.State.Edit&&b.value?(e(),a(p,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[l(" Edit ")]),_:1})):(e(),a(p,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[l("View")]),_:1}))]}),_:2},1032,["to"])):((Y=s.Form)==null?void 0:Y.Type)===k(E).FORM_TYPE_DEALER?(e(),a(T,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:t(()=>{var U;return[(U=s.Form)!=null&&U.State.Edit&&x.value?(e(),a(p,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[l(" Edit ")]),_:1})):(e(),a(p,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[l("View")]),_:1}))]}),_:2},1032,["to"])):((L=s.Form)==null?void 0:L.Type)===k(E).FORM_TYPE_ADDITIONAL?(e(),a(T,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:t(()=>{var U;return[(U=s.Form)!=null&&U.State.Edit&&O.value?(e(),a(p,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[l(" Edit ")]),_:1})):(e(),a(p,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[l("View")]),_:1}))]}),_:2},1032,["to"])):y("",!0)])):y("",!0)],64)):y("",!0)],64)}),128)),((_=n.value)==null?void 0:_.Submissions.length)>=1?(e(!0),u(C,{key:2},H(o.forms,s=>{var R;return e(),u(C,{key:s.FormUUID},[(R=n.value)!=null&&R.Submissions.find(F=>F.FormUUID===s.FormUUID)?y("",!0):(e(),u(C,{key:0},[d("dt",rt,h(s.Heading),1),d("dd",ut,[l(" Requires Completion "),s.Type===k(E).FORM_TYPE_REGISTRATION?(e(),a(T,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/registration`},{default:t(()=>[s.State.Edit&&D.value?(e(),a(p,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[l(" Edit ")]),_:1})):(e(),a(p,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[l("View")]),_:1}))]),_:2},1032,["to"])):s.Type===k(E).FORM_TYPE_ACCOMMODATION?(e(),a(T,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/accommodation`},{default:t(()=>[s.State.Edit&&b.value?(e(),a(p,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[l(" Edit ")]),_:1})):(e(),a(p,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[l("View")]),_:1}))]),_:2},1032,["to"])):s.Type===k(E).FORM_TYPE_DEALER?(e(),a(T,{key:2,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/dealer`},{default:t(()=>[s.State.Edit&&x.value?(e(),a(p,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[l(" Edit ")]),_:1})):(e(),a(p,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[l("View")]),_:1}))]),_:2},1032,["to"])):s.Type===k(E).FORM_TYPE_ADDITIONAL?(e(),a(T,{key:3,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}/additional`},{default:t(()=>[s.State.Edit&&O.value?(e(),a(p,{key:0,size:"small",variant:"text",color:"success"},{default:t(()=>[l(" Edit ")]),_:1})):(e(),a(p,{key:1,size:"small",variant:"text",color:"warning"},{default:t(()=>[l("View")]),_:1}))]),_:2},1032,["to"])):y("",!0)])],64))],64)}),128)):y("",!0)])):y("",!0),n.value&&n.value.Submissions.length>=1&&o.forms.filter(s=>{var R;return!((R=n.value)!=null&&R.Submissions.find(F=>F.FormUUID==s.FormUUID))}).length?(e(),u("div",ct,mt)):y("",!0)]}),_:1}),M.value&&n.value?(e(),u(C,{key:0},[i(te,{class:"pb-4 text-center"},{default:t(()=>[l("Payment Information")]),_:1}),i(oe,null,{default:t(()=>[i(et,{"payment-transactions":f.value,registration:n.value},null,8,["payment-transactions","registration"])]),_:1})],64)):y("",!0),i(Ae,null,{default:t(()=>{var r,_;return[o.convention.DetailLink?(e(),a(p,{key:0,color:"orange",href:o.convention.DetailLink},{default:t(()=>[l(h(k(q).buttonDetails),1)]),_:1},8,["href"])):y("",!0),i(ae),D.value?(e(),u(C,{key:1},[(r=n.value)!=null&&r.Submissions.find(s=>{var R;return((R=s.Form)==null?void 0:R.Type)===k(E).FORM_TYPE_REGISTRATION})?(e(),a(m,{key:1,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:t(()=>[i(p,{color:"primary"},{default:t(()=>[l(h(k(q).buttonViewRegistration),1)]),_:1})]),_:1},8,["to"])):(e(),u(C,{key:0},[(_=o.forms.find(s=>s.Type===k(E).FORM_TYPE_REGISTRATION))!=null&&_.State.New?(e(),a(m,{key:0,to:`/register/${o.convention.Slug||o.convention.ConventionUUID}`},{default:t(()=>[i(p,{color:"primary"},{default:t(()=>[l(h(k(q).buttonRegister),1)]),_:1})]),_:1},8,["to"])):y("",!0)],64))],64)):M.value&&n.value&&n.value.Total>n.value.Paid?(e(),u(C,{key:2},[i(p,{color:"success",variant:"elevated",onClick:P[0]||(P[0]=s=>A.value=!0)},{default:t(()=>[l("Make Payment")]),_:1}),n.value?(e(),a($e,{key:0,"payment-transactions":f.value,registration:n.value,modelValue:A.value,"onUpdate:modelValue":P[1]||(P[1]=s=>A.value=s)},null,8,["payment-transactions","registration","modelValue"])):y("",!0)],64)):y("",!0)]}),_:1})]),_:1})}}});const pt=ne(vt,[["__scopeId","data-v-d218a137"]]),ft=$({__name:"Conventions",setup(v){const g=Q(),S=w([]),I=w([]);return g.getOpenConventionsList().then(c=>{c&&(S.value=[...S.value,...c],g.getAvailableConventionForms(S.value.map(n=>n.ConventionUUID)).then(n=>{I.value=[...I.value,...n]}).catch(n=>{console.error(n)}))}),(c,n)=>(e(),a(X,null,{default:t(()=>[i(N,{class:"justify-center"},{default:t(()=>[(e(!0),u(C,null,H(S.value,f=>(e(),a(V,{key:f.ConventionUUID,cols:"12",sm:"11",md:"11",lg:"8",xl:"6",class:"d-flex flex-column"},{default:t(()=>[i(pt,{convention:f,forms:I.value.filter(A=>A.ConventionUUID===f.ConventionUUID)},null,8,["convention","forms"])]),_:2},1024))),128))]),_:1})]),_:1}))}}),_t={};function yt(v,g){return e(),u("div")}const gt=ne(_t,[["render",yt]]),Tt=$({__name:"MainView",emits:["pageTitle"],setup(v,{emit:g}){g("pageTitle","Scotiacon Registration System"),sessionStorage.getItem("reload")==="true"&&(sessionStorage.removeItem("reload"),setTimeout(()=>{location.reload()},500));const I=localStorage.getItem("gjt_token"),c=localStorage.getItem("ajt_token");I?(localStorage.removeItem("gjt_token"),location.href=I):c&&(localStorage.removeItem("ajt_token"),location.href=c);const n=w(W());return(f,A)=>{const D=K("router-link");return e(),u(C,null,[n.value&&!n.value.Additional.Email?(e(),a(X,{key:0,class:"bg-red-darken-4 text-center",fluid:!0},{default:t(()=>[l(" Please enter a Contact Email on the "),i(D,{to:"/profile",class:"text-white font-weight-bold"},{default:t(()=>[l("manage account page")]),_:1}),l(" to ensure we can contact you. ")]),_:1})):y("",!0),i(ft),i(gt)],64)}}}),jt=$({__name:"Home",emits:["pageTitle"],setup(v,{emit:g}){const S=W();return g("pageTitle","Telegram Login"),(I,c)=>(e(),u("div",null,[k(S)?(e(),a(Tt,{key:0,onPageTitle:c[0]||(c[0]=n=>g("pageTitle",n))})):(e(),a(me,{key:1}))]))}});export{jt as default};
