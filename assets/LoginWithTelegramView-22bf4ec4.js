import{I as f,r as h,k as p,K as c,R as u,a9 as _,a4 as b,J as T,H as d,v as g,U as o,M as L,Q as k}from"./index-4b048e5a.js";import{G as v}from"./userData-713a4a5a.js";import{S as w}from"./setupLogin-13636908.js";const C=f({__name:"TelegramLoginForm",props:{mode:{},telegramLogin:{},redirectUrl:{default:""},requestAccess:{default:""},size:{default:""},userpic:{type:Boolean,default:!1},radius:{default:""}},emits:["callback"],setup(t,{emit:n}){const r=h(),a=e=>{n("callback",e)};return p(()=>{const e=document.createElement("script");e.async=!0,e.src="https://telegram.org/js/telegram-widget.js?22",e.setAttribute("data-size",t.size||""),e.setAttribute("data-userpic",t.userpic?"true":"false"),e.setAttribute("data-telegram-login",t.telegramLogin),e.setAttribute("data-request-access",t.requestAccess||""),t.radius&&e.setAttribute("data-radius",t.radius||""),t.mode==="callback"?(window.onTelegramAuth=a,e.setAttribute("data-onauth","window.onTelegramAuth(user)")):e.setAttribute("data-auth-url",t.redirectUrl||""),r.value.appendChild(e)}),(e,l)=>(c(),u("div",{ref_key:"telegram",ref:r},null,512))}}),E=o("h2",null,"Telegram",-1),R={class:"form-group row"},U={class:"col"},B=o("button",{class:"btn btn-danger form-control"}," Cancel ",-1),y=f({__name:"LoginWithTelegramView",emits:["pageTitle"],setup(t,{emit:n}){n("pageTitle","Telegram Login");const r=_(),a=h(new Map),e=v(),l=b.getInstance();l.getLoginURLs(location.href.substring(0,location.href.length-9)).then(s=>{a.value=s});const A=s=>{l.oAuthLogin("telegram","","","",s).then(({tokens:m,user:i})=>{w(m,i,r)})};return e&&r.push("/"),(s,m)=>{const i=T("router-link");return c(),u(d,null,[E,a.value.size>0?(c(),u(d,{key:0},[g(C,{mode:"callback","telegram-login":a.value.get("OAUTH_TELEGRAM_BOT")||"","redirect-url":a.value.get("OAUTH_TELEGRAM_REDIRECT"),"request-access":"write",userpic:!0,onCallback:A},null,8,["telegram-login","redirect-url"]),o("div",R,[o("div",U,[g(i,{to:"/"},{default:L(()=>[B]),_:1})])])],64)):k("",!0)],64)}}});export{y as default};
