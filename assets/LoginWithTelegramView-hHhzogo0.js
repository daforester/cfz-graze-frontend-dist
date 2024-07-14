import{i as L,r as g,o as U,B as u,n as c,X as B,q as x,v as l,F as h,f as o,D as r,A as E,U as I,l as M,x as N,y as v,C as T}from"./index-jpwoycOT.js";import{G as O}from"./userData-NBW68mQP.js";import{S as q}from"./setupLogin-hmmIQ6Z7.js";import{E as G}from"./emailFormVariant-1EY2p0cn.js";import{_ as z}from"./ModelDialog.vue_vue_type_script_setup_true_lang-TGG3h5Ci.js";import{s as C}from"./index-2XRRB2DS.js";import{c as F}from"./VContainer-wQPgRTsO.js";import{V as H,a as S,c as j,e as $}from"./VCard-49k5as40.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-0wst6Rjw.js";import"./forwardRefs-xq07cB8L.js";import"./scopeId-x6fAlrLD.js";import"./createSimpleFunctional-65wKh7Kr.js";import"./VDialog-_glEGXcK.js";import"./VToolbar-jg8rlMMi.js";const k=L({__name:"TelegramLoginForm",props:{mode:{},telegramLogin:{},redirectUrl:{default:""},requestAccess:{default:""},size:{default:""},userpic:{type:Boolean,default:!1},radius:{default:""}},emits:["callback"],setup(a,{emit:f}){const b=f,n=g(),s=e=>{b("callback",e)};return U(()=>{const e=document.createElement("script");e.async=!0,e.src="https://telegram.org/js/telegram-widget.js?22",e.setAttribute("data-size",a.size||""),e.setAttribute("data-userpic",a.userpic?"true":"false"),e.setAttribute("data-telegram-login",a.telegramLogin),e.setAttribute("data-request-access",a.requestAccess||""),a.radius&&e.setAttribute("data-radius",a.radius||""),a.mode==="callback"?(window.onTelegramAuth=s,e.setAttribute("data-onauth","window.onTelegramAuth(user)")):e.setAttribute("data-auth-url",a.redirectUrl||""),n.value.appendChild(e)}),(e,p)=>(c(),u("div",{ref_key:"telegram",ref:n},null,512))}}),P={class:"form-group row"},W={class:"col"},X=r("button",{class:"btn btn-danger form-control"}," Cancel ",-1),J=r("h2",null,"Telegram",-1),K={class:"form-group row"},Q={class:"col"},Y=r("button",{class:"btn btn-danger form-control"}," Cancel ",-1),Z={class:"my-2"},ee={class:"my-2"},te={class:"my-2"},_e=L({__name:"LoginWithTelegramView",props:{variant:{default:()=>G.COMBINED}},emits:["pageTitle"],setup(a,{emit:f}){f("pageTitle","Telegram Login");const n=I(),s=g(new Map),e=O(),p=g(),w=B.getInstance();w.getLoginURLs(location.href.substring(0,location.href.length-9)).then(t=>{s.value=t});const m=g(!1);e&&a.variant!=="ADD_CREDENTIAL"&&(Date.now()-new Date(e.CreatedAt||"").getTime()>2e4?n.push("/"):n.push("/profile"));const _=(t,d=!1)=>{p.value=t,w.oAuthLogin("telegram","","","",d,t).then(i=>{const{created:A,tokens:D,user:R}=i;q(D,R,n,A)}).catch(i=>{i.ResponseCode==404?m.value=!0:console.error(i)})},V=t=>{_(p.value,!0),t&&(t("Account Created"),setTimeout(()=>{m.value=!1},1e3))},y=()=>{n.back()};return(t,d)=>{const i=M("router-link");return c(),u("div",null,[t.variant=="ADD_CREDENTIAL"?(c(),x(F,{key:0,style:{"max-width":"550px"}},{default:l(()=>[o($,null,{default:l(()=>[o(H,{class:"text-center"},{default:l(()=>[o(S,null,{default:l(()=>[N("Add a Telegram Account")]),_:1})]),_:1}),o(j,{class:"text-center"},{default:l(()=>[s.value.size>0?(c(),u(h,{key:0},[o(k,{mode:"callback","telegram-login":s.value.get("OAUTH_TELEGRAM_BOT")||"","redirect-url":s.value.get("OAUTH_TELEGRAM_REDIRECT"),"request-access":"write",userpic:!0,onCallback:_,variant:t.variant},null,8,["telegram-login","redirect-url","variant"]),r("div",P,[r("div",W,[o(i,{to:"/"},{default:l(()=>[X]),_:1})])])],64)):E("",!0)]),_:1})]),_:1})]),_:1})):(c(),u(h,{key:1},[J,s.value.size>0?(c(),u(h,{key:0},[o(k,{mode:"callback","telegram-login":s.value.get("OAUTH_TELEGRAM_BOT")||"","redirect-url":s.value.get("OAUTH_TELEGRAM_REDIRECT"),"request-access":"write",userpic:!0,onCallback:_,variant:t.variant},null,8,["telegram-login","redirect-url","variant"]),r("div",K,[r("div",Q,[o(i,{to:"/"},{default:l(()=>[Y]),_:1})])])],64)):E("",!0)],64)),o(z,{modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=A=>m.value=A),"show-save-action":!0,"show-reset-action":!1,"show-close-action":!0,"show-delete-action":!1,title:"Create new account","hide-extension":!0,"save-button-label":"Create Account",onSave:V,onClose:y},{default:l(()=>[r("p",Z,v(T(C).messageCreateTelegramAccount1),1),r("p",ee,v(T(C).messageCreateTelegramAccount2),1),r("p",te,v(T(C).messageCreateTelegramAccount3),1)]),_:1},8,["modelValue"])])}}});export{_e as default};