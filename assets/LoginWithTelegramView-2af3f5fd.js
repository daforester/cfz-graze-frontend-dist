import{d as f,y as h,j as A,o as i,O as c,D as _,X as b,r as p,F as g,c as m,f as o,w as T,L}from"./index-3b87d87f.js";import{S as k}from"./setupLogin-8c3f97eb.js";import"./userData-d733b0cf.js";const w=f({__name:"TelegramLoginForm",props:{mode:{},telegramLogin:{},redirectUrl:{default:""},requestAccess:{default:""},size:{default:""},userpic:{type:Boolean,default:!1},radius:{default:""}},emits:["callback"],setup(t,{emit:l}){const r=h(),a=e=>{l("callback",e)};return A(()=>{const e=document.createElement("script");e.async=!0,e.src="https://telegram.org/js/telegram-widget.js?22",e.setAttribute("data-size",t.size||""),e.setAttribute("data-userpic",t.userpic?"true":"false"),e.setAttribute("data-telegram-login",t.telegramLogin),e.setAttribute("data-request-access",t.requestAccess||""),t.radius&&e.setAttribute("data-radius",t.radius||""),t.mode==="callback"?(window.onTelegramAuth=a,e.setAttribute("data-onauth","window.onTelegramAuth(user)")):e.setAttribute("data-auth-url",t.redirectUrl||""),r.value.appendChild(e)}),(e,u)=>(i(),c("div",{ref_key:"telegram",ref:r},null,512))}}),v=o("h2",null,"Telegram",-1),C={class:"form-group row"},E={class:"col"},R=o("button",{class:"btn btn-danger form-control"}," Cancel ",-1),q=f({__name:"LoginWithTelegramView",emits:["pageTitle"],setup(t,{emit:l}){l("pageTitle","Telegram Login");const r=_(),a=h(new Map),e=b.getInstance();e.getLoginURLs(location.href.substring(0,location.href.length-9)).then(s=>{a.value=s});const u=s=>{e.oAuthLogin("telegram","","","",s).then(({tokens:d,user:n})=>{k(d,n,r)})};return(s,d)=>{const n=p("router-link");return i(),c(g,null,[v,a.value.size>0?(i(),c(g,{key:0},[m(w,{mode:"callback","telegram-login":a.value.get("OAUTH_TELEGRAM_BOT")||"","redirect-url":a.value.get("OAUTH_TELEGRAM_REDIRECT"),"request-access":"write",userpic:!0,onCallback:u},null,8,["telegram-login","redirect-url"]),o("div",C,[o("div",E,[m(n,{to:"/login"},{default:T(()=>[R]),_:1})])])],64)):L("",!0)],64)}}});export{q as default};
