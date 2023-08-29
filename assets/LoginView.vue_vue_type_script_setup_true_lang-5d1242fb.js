import{I as g,r as L,M as o,V as w,N as r,O as e,v as a,W as u,S as s,H as h,a1 as c,a2 as T}from"./index-d1ed2f9f.js";import{E as n}from"./emailFormVariant-e5e0aad4.js";import{L as i}from"./LoginButton-ae7b1195.js";import{V as m,a as f}from"./VRow-91a32c7c.js";import{G as B}from"./userData-1cbb769d.js";import{j as O}from"./VContainer-9e55c7f5.js";const E=g({__name:"LoginButtons",props:{showAmazonLogin:{type:Boolean,default:!1},showEmailLogin:{type:Boolean,default:!1},showFaceBookLogin:{type:Boolean,default:!1},showGoogleLogin:{type:Boolean,default:!1},showInstagramLogin:{type:Boolean,default:!1},showMicrosoftLogin:{type:Boolean,default:!1},showSteamLogin:{type:Boolean,default:!1},showTelegramLogin:{type:Boolean,default:!1},showTwitchLogin:{type:Boolean,default:!1},showTwitterLogin:{type:Boolean,default:!1}},setup(_){const t=L(new Map);return c().getLoginURLs().then(l=>{l&&(t.value=l)}),(l,d)=>(o(),w(h,null,[l.showEmailLogin?(o(),r(f,{key:0,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"internal",url:t.value.get("AUTH_INTERNAL_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),l.showAmazonLogin?(o(),r(f,{key:1,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"amazon",url:t.value.get("OAUTH_AMAZON_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),l.showFaceBookLogin?(o(),r(f,{key:2,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"facebook",url:t.value.get("OAUTH_FACEBOOK_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),l.showGoogleLogin?(o(),r(f,{key:3,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"google",url:t.value.get("OAUTH_GOOGLE_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),l.showInstagramLogin?(o(),r(f,{key:4,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"instagram",url:t.value.get("OAUTH_INSTAGRAM_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),l.showMicrosoftLogin?(o(),r(f,{key:5,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"microsoft",url:t.value.get("OAUTH_MICROSOFT_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),l.showSteamLogin?(o(),r(f,{key:6,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"steam",url:t.value.get("OAUTH_STEAM_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),l.showTelegramLogin?(o(),r(f,{key:7,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"telegram",url:t.value.get("OAUTH_TELEGRAM_REDIRECT")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),l.showTwitchLogin?(o(),r(f,{key:8,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"twitch",url:t.value.get("OAUTH_TWITCH_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),l.showTwitterLogin?(o(),r(f,{key:9,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"twitter",url:t.value.get("OAUTH_TWITTER_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0)],64))}}),R=g({__name:"LoginView",emits:["pageTitle"],setup(_,{emit:t}){t("pageTitle","Login");const p=T();return B()&&p.push("/"),(d,v)=>(o(),r(O,{style:{"max-width":"250px"}},{default:e(()=>[a(E,{showEmailLogin:!0,showTelegramLogin:!0})]),_:1}))}});export{R as _};