import{i as p,r as L,n as o,B as w,q as r,v as e,f as a,C as u,A as s,F as c,P as h,U as T}from"./index-3pnlNSkI.js";import{E as n}from"./emailFormVariant-1EY2p0cn.js";import{L as i}from"./LoginButton-rC2eWXJb.js";import{a as m,V as f}from"./VRow-5NYyfmN0.js";import{G as B}from"./userData-fC5YdmZv.js";import{a as O}from"./VContainer-T0wDGrh1.js";const E=p({__name:"LoginButtons",props:{showAmazonLogin:{type:Boolean,default:!1},showEmailLogin:{type:Boolean,default:!1},showFaceBookLogin:{type:Boolean,default:!1},showGoogleLogin:{type:Boolean,default:!1},showInstagramLogin:{type:Boolean,default:!1},showMicrosoftLogin:{type:Boolean,default:!1},showSteamLogin:{type:Boolean,default:!1},showTelegramLogin:{type:Boolean,default:!1},showTwitchLogin:{type:Boolean,default:!1},showTwitterLogin:{type:Boolean,default:!1}},setup(g){const l=L(new Map);return h().getLoginURLs().then(t=>{t&&(l.value=t)}),(t,d)=>(o(),w(c,null,[t.showEmailLogin?(o(),r(f,{key:0,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"internal",url:l.value.get("AUTH_INTERNAL_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),t.showAmazonLogin?(o(),r(f,{key:1,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"amazon",url:l.value.get("OAUTH_AMAZON_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),t.showFaceBookLogin?(o(),r(f,{key:2,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"facebook",url:l.value.get("OAUTH_FACEBOOK_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),t.showGoogleLogin?(o(),r(f,{key:3,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"google",url:l.value.get("OAUTH_GOOGLE_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),t.showInstagramLogin?(o(),r(f,{key:4,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"instagram",url:l.value.get("OAUTH_INSTAGRAM_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),t.showMicrosoftLogin?(o(),r(f,{key:5,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"microsoft",url:l.value.get("OAUTH_MICROSOFT_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),t.showSteamLogin?(o(),r(f,{key:6,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"steam",url:l.value.get("OAUTH_STEAM_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),t.showTelegramLogin?(o(),r(f,{key:7,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"telegram",url:l.value.get("OAUTH_TELEGRAM_REDIRECT")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),t.showTwitchLogin?(o(),r(f,{key:8,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"twitch",url:l.value.get("OAUTH_TWITCH_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0),t.showTwitterLogin?(o(),r(f,{key:9,dense:!0},{default:e(()=>[a(m,null,{default:e(()=>[a(i,{source:"twitter",url:l.value.get("OAUTH_TWITTER_URL")||"",params:{variant:u(n).COMBINED}},null,8,["url","params"])]),_:1})]),_:1})):s("",!0)],64))}}),k=p({__name:"LoginView",emits:["pageTitle"],setup(g,{emit:l}){l("pageTitle","Login");const t=T();return B()&&t.push("/"),(v,A)=>(o(),r(O,{style:{"max-width":"250px"}},{default:e(()=>[a(E,{showEmailLogin:!0,showTelegramLogin:!0})]),_:1}))}});export{k as _};
