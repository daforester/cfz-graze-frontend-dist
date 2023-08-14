import{I as T,r as v,k as p,K as i,R as u,a0 as b,a5 as E,J as C,L as k,M as l,v as r,N as L,U as o,H as g,Q as A}from"./index-a3d4b6d2.js";import{G as w}from"./userData-fee5e2e3.js";import{S as R}from"./setupLogin-e4168b5b.js";import{E as V}from"./emailFormVariant-e5e0aad4.js";import{b as D,V as I,c as U,e as y}from"./VCard-1ae484d4.js";import{j as B}from"./VContainer-b93edaeb.js";import"./VAvatar-e8cfb064.js";const h=T({__name:"TelegramLoginForm",props:{mode:{},telegramLogin:{},redirectUrl:{default:""},requestAccess:{default:""},size:{default:""},userpic:{type:Boolean,default:!1},radius:{default:""}},emits:["callback"],setup(t,{emit:d}){const n=v(),a=e=>{d("callback",e)};return p(()=>{const e=document.createElement("script");e.async=!0,e.src="https://telegram.org/js/telegram-widget.js?22",e.setAttribute("data-size",t.size||""),e.setAttribute("data-userpic",t.userpic?"true":"false"),e.setAttribute("data-telegram-login",t.telegramLogin),e.setAttribute("data-request-access",t.requestAccess||""),t.radius&&e.setAttribute("data-radius",t.radius||""),t.mode==="callback"?(window.onTelegramAuth=a,e.setAttribute("data-onauth","window.onTelegramAuth(user)")):e.setAttribute("data-auth-url",t.redirectUrl||""),n.value.appendChild(e)}),(e,m)=>(i(),u("div",{ref_key:"telegram",ref:n},null,512))}}),M={class:"form-group row"},N={class:"col"},x=o("button",{class:"btn btn-danger form-control"}," Cancel ",-1),O=o("h2",null,"Telegram",-1),G={class:"form-group row"},q={class:"col"},z=o("button",{class:"btn btn-danger form-control"}," Cancel ",-1),Q=T({__name:"LoginWithTelegramView",props:{variant:{default:()=>V.COMBINED}},emits:["pageTitle"],setup(t,{emit:d}){d("pageTitle","Telegram Login");const n=b(),a=v(new Map),e=w(),m=E.getInstance();m.getLoginURLs(location.href.substring(0,location.href.length-9)).then(s=>{a.value=s});const f=s=>{m.oAuthLogin("telegram","","","",s).then(({tokens:_,user:c})=>{R(_,c,n)})};return e&&t.variant!=="ADD_CREDENTIAL"&&n.push("/"),(s,_)=>{const c=C("router-link");return s.variant=="ADD_CREDENTIAL"?(i(),k(B,{key:0,style:{"max-width":"550px"}},{default:l(()=>[r(y,null,{default:l(()=>[r(D,{class:"text-center"},{default:l(()=>[r(I,null,{default:l(()=>[L("Add a Telegram Account")]),_:1})]),_:1}),r(U,{class:"text-center"},{default:l(()=>[a.value.size>0?(i(),u(g,{key:0},[r(h,{mode:"callback","telegram-login":a.value.get("OAUTH_TELEGRAM_BOT")||"","redirect-url":a.value.get("OAUTH_TELEGRAM_REDIRECT"),"request-access":"write",userpic:!0,onCallback:f,variant:s.variant},null,8,["telegram-login","redirect-url","variant"]),o("div",M,[o("div",N,[r(c,{to:"/"},{default:l(()=>[x]),_:1})])])],64)):A("",!0)]),_:1})]),_:1})]),_:1})):(i(),u(g,{key:1},[O,a.value.size>0?(i(),u(g,{key:0},[r(h,{mode:"callback","telegram-login":a.value.get("OAUTH_TELEGRAM_BOT")||"","redirect-url":a.value.get("OAUTH_TELEGRAM_REDIRECT"),"request-access":"write",userpic:!0,onCallback:f,variant:s.variant},null,8,["telegram-login","redirect-url","variant"]),o("div",G,[o("div",q,[r(c,{to:"/"},{default:l(()=>[z]),_:1})])])],64)):A("",!0)],64))}}});export{Q as default};
