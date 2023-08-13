<<<<<<<< HEAD:assets/LoginView.vue_vue_type_script_setup_true_lang-dac38bf1.js
import{I as f,r as d,K as t,R as L,L as u,M as e,v as l,S as m,Q as n,H as p,$ as w}from"./index-f94693a1.js";import{E as h}from"./emailFormVariant-e5e0aad4.js";import{L as r}from"./LoginButton-9f31ec8f.js";import{V as s,a as i}from"./VRow-de457797.js";import{n as T}from"./VContainer-87d98084.js";const c=f({__name:"LoginButtons",props:{showAmazonLogin:{type:Boolean,default:!1},showEmailLogin:{type:Boolean,default:!1},showFaceBookLogin:{type:Boolean,default:!1},showGoogleLogin:{type:Boolean,default:!1},showInstagramLogin:{type:Boolean,default:!1},showMicrosoftLogin:{type:Boolean,default:!1},showSteamLogin:{type:Boolean,default:!1},showTelegramLogin:{type:Boolean,default:!1},showTwitchLogin:{type:Boolean,default:!1},showTwitterLogin:{type:Boolean,default:!1}},setup(g){const a=d(new Map);return w().getLoginURLs().then(o=>{o&&(a.value=o)}),(o,y)=>(t(),L(p,null,[o.showEmailLogin?(t(),u(i,{key:0,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"internal",url:a.value.get("AUTH_INTERNAL_URL")||"",params:{variant:m(h).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):n("",!0),o.showAmazonLogin?(t(),u(i,{key:1,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"amazon",url:a.value.get("OAUTH_AMAZON_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showFaceBookLogin?(t(),u(i,{key:2,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"facebook",url:a.value.get("OAUTH_FACEBOOK_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showGoogleLogin?(t(),u(i,{key:3,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"google",url:a.value.get("OAUTH_GOOGLE_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showInstagramLogin?(t(),u(i,{key:4,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"instagram",url:a.value.get("OAUTH_INSTAGRAM_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showMicrosoftLogin?(t(),u(i,{key:5,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"microsoft",url:a.value.get("OAUTH_MICROSOFT_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showSteamLogin?(t(),u(i,{key:6,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"steam",url:a.value.get("OAUTH_STEAM_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showTelegramLogin?(t(),u(i,{key:7,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"telegram",url:a.value.get("OAUTH_TELEGRAM_REDIRECT")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showTwitchLogin?(t(),u(i,{key:8,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"twitch",url:a.value.get("OAUTH_TWITCH_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showTwitterLogin?(t(),u(i,{key:9,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"twitter",url:a.value.get("OAUTH_TWITTER_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0)],64))}}),k=f({__name:"LoginView",emits:["pageTitle"],setup(g,{emit:a}){return a("pageTitle","Login"),(_,o)=>(t(),u(T,{style:{"max-width":"250px"}},{default:e(()=>[l(c,{showEmailLogin:!0,showTelegramLogin:!0})]),_:1}))}});export{k as _};
========
import{I as f,r as d,K as t,R as L,L as u,M as e,v as l,S as m,Q as n,H as p,$ as w}from"./index-358e21fe.js";import{E as h}from"./emailFormVariant-e5e0aad4.js";import{L as r}from"./LoginButton-94dc0339.js";import{V as s,a as i}from"./VRow-6e91ea1f.js";import{n as T}from"./VContainer-76f61da9.js";const c=f({__name:"LoginButtons",props:{showAmazonLogin:{type:Boolean,default:!1},showEmailLogin:{type:Boolean,default:!1},showFaceBookLogin:{type:Boolean,default:!1},showGoogleLogin:{type:Boolean,default:!1},showInstagramLogin:{type:Boolean,default:!1},showMicrosoftLogin:{type:Boolean,default:!1},showSteamLogin:{type:Boolean,default:!1},showTelegramLogin:{type:Boolean,default:!1},showTwitchLogin:{type:Boolean,default:!1},showTwitterLogin:{type:Boolean,default:!1}},setup(g){const a=d(new Map);return w().getLoginURLs().then(o=>{o&&(a.value=o)}),(o,y)=>(t(),L(p,null,[o.showEmailLogin?(t(),u(i,{key:0,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"internal",url:a.value.get("AUTH_INTERNAL_URL")||"",params:{variant:m(h).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):n("",!0),o.showAmazonLogin?(t(),u(i,{key:1,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"amazon",url:a.value.get("OAUTH_AMAZON_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showFaceBookLogin?(t(),u(i,{key:2,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"facebook",url:a.value.get("OAUTH_FACEBOOK_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showGoogleLogin?(t(),u(i,{key:3,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"google",url:a.value.get("OAUTH_GOOGLE_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showInstagramLogin?(t(),u(i,{key:4,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"instagram",url:a.value.get("OAUTH_INSTAGRAM_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showMicrosoftLogin?(t(),u(i,{key:5,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"microsoft",url:a.value.get("OAUTH_MICROSOFT_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showSteamLogin?(t(),u(i,{key:6,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"steam",url:a.value.get("OAUTH_STEAM_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showTelegramLogin?(t(),u(i,{key:7,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"telegram",url:a.value.get("OAUTH_TELEGRAM_REDIRECT")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showTwitchLogin?(t(),u(i,{key:8,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"twitch",url:a.value.get("OAUTH_TWITCH_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0),o.showTwitterLogin?(t(),u(i,{key:9,dense:!0},{default:e(()=>[l(s,null,{default:e(()=>[l(r,{source:"twitter",url:a.value.get("OAUTH_TWITTER_URL")||""},null,8,["url"])]),_:1})]),_:1})):n("",!0)],64))}}),k=f({__name:"LoginView",emits:["pageTitle"],setup(g,{emit:a}){return a("pageTitle","Login"),(_,o)=>(t(),u(T,{style:{"max-width":"250px"}},{default:e(()=>[l(c,{showEmailLogin:!0,showTelegramLogin:!0})]),_:1}))}});export{k as _};
>>>>>>>> 06d630c5c72ef68f7325c4ebee577742bf9a278d:assets/LoginView.vue_vue_type_script_setup_true_lang-bfafc0ac.js