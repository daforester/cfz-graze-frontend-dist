import{p as R,r as p,s as P,c as f,a as re,w as U,o as ue,b as ie,d as L,u as ce,e as de,t as N,f as t,m as M,h as ve,i as G,j as me,k as H,l as O,n as h,q as y,v as r,x as J,y as K,z as ge,A as w,E as j,_ as Q,B as fe,C as E,D as W,F as pe,G as he,H as Ve,I as X,J as Z,K as ye,L as _e,T as ke}from"./index-uFyvbd2S.js";import{G as be,R as D,a as Se}from"./userData-Xyn3bacM.js";import{u as Ce}from"./useAvatar-4lmjpsDG.js";import{C as Ie}from"./canEditOrganisation-pymJEzkf.js";import{G as A}from"./group-7fhbY6WJ.js";import{C as x}from"./canDo-8w-iwWYc.js";import{m as Te,V as Y,a as Pe}from"./VToolbar-OZCoY-LI.js";import{V as Re}from"./VSpacer-InMYvqvu.js";import{V as we}from"./VTextField-tLuyuF-u.js";import{m as Le,V as ee,u as Be}from"./VBtn-t3mvRlEh.js";import{u as B,m as z,V as Ue,a as $,b as Ne,c as Ee,d as Ae,e as xe,f as De,g as Oe,h as Me,i as Ge}from"./VContainer-tk_mTwVf.js";import{m as ae,u as te,a as oe,c as le,V as ze,b as se}from"./VNavigationDrawer-gPtG0lQh.js";import{u as Fe,V as q,a as S,b as He}from"./VList-HWYLex1s.js";import{V as ne,a as Ye}from"./VAvatar-9mnmABeV.js";import{V as $e}from"./VDivider-XB5IgAQR.js";import{s as qe}from"./index-OKsbKlsK.js";import"./nil-rxyd0N8M.js";import"./forwardRefs-c5tVShlW.js";import"./createSimpleFunctional-Ji95S3AL.js";import"./scopeId-ieYvGwnd.js";const Je=(e,n=void 0)=>e===void 0?!1:n===void 0?x(e,A.GROUP_TYPE_CONVENTION).ManageUsers:x(e,A.GROUP_TYPE_CONVENTION,n.ConventionUUID,n).ManageUsers,Ke=(e,n=void 0)=>{let o;return e===void 0?!1:(n===void 0?o=x(e,A.GROUP_TYPE_CONVENTION):o=x(e,A.GROUP_TYPE_CONVENTION,n.ConventionUUID,n),o.EditConvention||o.ManageViews||o.ViewRegistration||o.EditRegistration)},je=R({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Qe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:o}=n;let u=0;const l=p(null),a=P(0),s=P(0),v=P(0),m=P(!1),c=P(!1),d=f(()=>Number(e.scrollThreshold)),_=f(()=>re((d.value-a.value)/d.value||0)),V=()=>{const g=l.value;!g||o&&!o.value||(u=a.value,a.value="window"in g?g.pageYOffset:g.scrollTop,c.value=a.value<u,v.value=Math.abs(a.value-d.value))};return U(c,()=>{s.value=s.value||a.value}),U(m,()=>{s.value=0}),ue(()=>{U(()=>e.scrollTarget,g=>{var k;const C=g?document.querySelector(g):window;C&&C!==l.value&&((k=l.value)==null||k.removeEventListener("scroll",V),l.value=C,l.value.addEventListener("scroll",V,{passive:!0}))},{immediate:!0})}),ie(()=>{var g;(g=l.value)==null||g.removeEventListener("scroll",V)}),o&&U(o,V,{immediate:!0}),{scrollThreshold:d,currentScroll:a,currentThreshold:v,isScrollActive:m,scrollRatio:_,isScrollingUp:c,savedScroll:s}}const We=R({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Te(),...ae(),...je(),height:{type:[Number,String],default:64}},"VAppBar"),Xe=L()({name:"VAppBar",props:We(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const u=p(),l=ce(e,"modelValue"),a=f(()=>{var T;const i=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:i.has("hide"),inverted:i.has("inverted"),collapse:i.has("collapse"),elevate:i.has("elevate"),fadeImage:i.has("fade-image")}}),s=f(()=>{const i=a.value;return i.hide||i.inverted||i.collapse||i.elevate||i.fadeImage||!l.value}),{currentScroll:v,scrollThreshold:m,isScrollingUp:c,scrollRatio:d}=Qe(e,{canScroll:s}),_=f(()=>e.collapse||a.value.collapse&&(a.value.inverted?d.value>0:d.value===0)),V=f(()=>e.flat||a.value.elevate&&(a.value.inverted?v.value>0:v.value===0)),g=f(()=>a.value.fadeImage?a.value.inverted?1-d.value:d.value:void 0),C=f(()=>{var b,F;if(a.value.hide&&a.value.inverted)return 0;const i=((b=u.value)==null?void 0:b.contentHeight)??0,T=((F=u.value)==null?void 0:F.extensionHeight)??0;return i+T});de(f(()=>!!e.scrollBehavior),()=>{ve(()=>{a.value.hide?a.value.inverted?l.value=v.value>m.value:l.value=c.value||v.value<m.value:l.value=!0})});const{ssrBootStyles:k}=Fe(),{layoutItemStyles:I}=te({id:e.name,order:f(()=>parseInt(e.order,10)),position:N(e,"location"),layoutSize:C,elementSize:P(void 0),active:l,absolute:N(e,"absolute")});return B(()=>{const i=Y.filterProps(e);return t(Y,M({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...I.value,"--v-toolbar-image-opacity":g.value,height:void 0,...k.value},e.style]},i,{collapse:_.value,flat:V.value}),o)}),{}}}),Ze=R({...Le({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ea=L()({name:"VAppBarNavIcon",props:Ze(),setup(e,n){let{slots:o}=n;return B(()=>t(ee,M(e,{class:["v-app-bar-nav-icon"]}),o)),{}}}),aa=R({...z(),...oe()},"VLayout"),ta=L()({name:"VLayout",props:aa(),setup(e,n){let{slots:o}=n;const{layoutClasses:u,layoutStyles:l,getLayoutItem:a,items:s,layoutRef:v}=le(e);return B(()=>{var m;return t("div",{ref:v,class:[u.value,e.class],style:[l.value,e.style]},[(m=o.default)==null?void 0:m.call(o)])}),{getLayoutItem:a,items:s}}}),oa=G({__name:"DashboardLayout",props:{user:{}},setup(e){const n=Ce(),o=me(),u=p(!1),l=p("Default Title"),a=p(""),s=p(H(e.user)),v=p(n(s.value.UserUUID));j.getInstance().on("user.profile.saved",k=>{s.value=H(k)});const c=p(localStorage.getItem("theme")||"light");o.global.name.value=c.value;const d=()=>{c.value=="light"?c.value="dark":c.value="light",o.global.name.value=c.value,localStorage.setItem("theme",c.value)},_=k=>{l.value=k},V=p(Ke(e.user)),g=p(Ie(e.user)),C=p(Je(e.user));return(k,I)=>{const i=O("RouterLink"),T=O("RouterView");return h(),y(ta,{class:"h-100"},{default:r(()=>[t(Xe,{color:"blue-darken-3"},{default:r(()=>[t(Pe,null,{default:r(()=>[J(K(l.value),1)]),_:1}),t(Re),t(we,{modelValue:a.value,"onUpdate:modelValue":I[0]||(I[0]=b=>a.value=b),"prepend-inner-icon":"mdi:mdi-magnify",label:"Search",variant:"underlined","hide-details":"",clearable:!0,class:"d-none"},null,8,["modelValue"]),t(ea,{variant:"text",onClick:I[1]||(I[1]=ge(b=>u.value=!u.value,["stop"]))})]),_:1}),t(ze,{modelValue:u.value,"onUpdate:modelValue":I[2]||(I[2]=b=>u.value=b),location:"right",temporary:!0},{default:r(()=>[t(q,null,{default:r(()=>[t(i,{to:{name:"Profile"}},{default:r(()=>[t(S,{title:s.value.DisplayName},{prepend:r(()=>[v.value?(h(),y(ne,{key:0,src:v.value,class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])):(h(),y(Ue,{key:1,icon:"mdi:mdi-account-circle",size:"x-large"}))]),_:1},8,["title"])]),_:1})]),_:1}),t($e),t(T,{name:"navigation"},{default:r(()=>[t(q,null,{default:r(()=>[t(i,{to:"/"},{default:r(()=>[t(S,{"prepend-icon":"mdi:mdi-view-dashboard-outline",title:"Home",value:"home"})]),_:1}),V.value||g.value||C.value?(h(),y(He,{key:0,value:"Admin"},{activator:r(({props:b})=>[t(S,M(b,{"prepend-icon":"mdi:mdi-security",title:"Admin"}),null,16)]),default:r(()=>[V.value?(h(),y(i,{key:0,to:"/admin/conventions"},{default:r(()=>[t(S,{"prepend-icon":"mdi:mdi-domain",title:"Conventions",value:"Conventions"})]),_:1})):w("",!0),g.value?(h(),y(i,{key:1,to:"/admin/organisations"},{default:r(()=>[t(S,{"prepend-icon":"mdi:mdi-store",title:"Organisations",value:"Organisations"})]),_:1})):w("",!0),C.value?(h(),y(i,{key:2,to:"/admin/groups"},{default:r(()=>[t(S,{"prepend-icon":"mdi:mdi-key-chain-variant",title:"Permissions",value:"Permissions"})]),_:1})):w("",!0)]),_:1})):w("",!0),t(i,{to:{name:"Profile"}},{default:r(()=>[t(S,{"prepend-icon":"mdi:mdi-account-circle",title:"Manage Account"})]),_:1}),t(S,{"prepend-icon":"mdi:mdi-theme-light-dark",onClick:d,title:`${c.value=="light"?"Dark":"Light"} Mode`},null,8,["title"]),t(i,{to:"/logout"},{default:r(()=>[t(S,{"prepend-icon":"mdi:mdi-logout",title:"Logout",value:"Logout"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(se,null,{default:r(()=>[t(T,{onPageTitle:_,"logged-in":!0})]),_:1})]),_:1})}}}),la=Q(oa,[["__scopeId","data-v-f313e5f1"]]),sa="/assets/scotiacon-logo-7K00JbC4.svg",na=e=>(he("data-v-5faec46d"),e=e(),Ve(),e),ra=na(()=>W("h1",null,"Scotiacon Registration System",-1)),ua=G({__name:"LoginLayout",setup(e){return(n,o)=>{const u=O("RouterView");return h(),fe(pe,null,[t($,{class:"logo-container text-center"},{default:r(()=>[t(ne,{src:E(sa),class:"scotiacon-logo ma-auto"},null,8,["src"]),ra]),_:1}),t($,{class:"login-container text-center mb-0 rounded rounded-lg mb-md-10"},{default:r(()=>[t(Ye,null,{default:r(()=>[t(ee,{class:"ma-2",color:"indigo",icon:"mdi:mdi-lock-outline"})]),_:1}),W("h2",null,K(E(qe).headingSignIn),1),t(u,{"logged-in":!1})]),_:1})],64)}}}),ia=Q(ua,[["__scopeId","data-v-5faec46d"]]),ca=R({...z(),...oe({fullHeight:!0}),...X()},"VApp"),da=L()({name:"VApp",props:ca(),setup(e,n){let{slots:o}=n;const u=Z(e),{layoutClasses:l,getLayoutItem:a,items:s,layoutRef:v}=le(e),{rtlClasses:m}=ye();return B(()=>{var c;return t("div",{ref:v,class:["v-application",u.themeClasses.value,l.value,m.value,e.class],style:[e.style]},[t("div",{class:"v-application__wrap"},[(c=o.default)==null?void 0:c.call(o)])])}),{getLayoutItem:a,items:s,theme:u}}}),va=R({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Ne(),...z(),...Ee(),...ae(),...Ae(),...xe({tag:"footer"}),...X()},"VFooter"),ma=L()({name:"VFooter",props:va(),setup(e,n){let{slots:o}=n;const{themeClasses:u}=Z(e),{backgroundColorClasses:l,backgroundColorStyles:a}=De(N(e,"color")),{borderClasses:s}=Oe(e),{elevationClasses:v}=Me(e),{roundedClasses:m}=Ge(e),c=P(32),{resizeRef:d}=Be(g=>{g.length&&(c.value=g[0].target.clientHeight)}),_=f(()=>e.height==="auto"?c.value:parseInt(e.height,10)),{layoutItemStyles:V}=te({id:e.name,order:f(()=>parseInt(e.order,10)),position:f(()=>"bottom"),layoutSize:_,elementSize:f(()=>e.height==="auto"?void 0:_.value),active:f(()=>e.app),absolute:N(e,"absolute")});return B(()=>t(e.tag,{ref:d,class:["v-footer",u.value,l.value,s.value,v.value,m.value,e.class],style:[a.value,e.app?V.value:{height:_e(e.height)},e.style]},o)),{}}}),Ea=G({__name:"Default",emits:["pageTitle"],setup(e,{emit:n}){let o=be();const u=ke.getInstance(),l=u.getTokenByService("GrazeAPI"),a=p(!1),s=p(!1),v=n,m=j.getInstance();m.on("login",d=>{o=d,a.value=!0}),m.on("logout",()=>{o=void 0,a.value=!1}),m.on("tokenManager.tokenUpdated",()=>{a.value=!0,s.value=!0}),m.on("tokenManager.sessionExpired",()=>{a.value=!1,s.value=!1,D(),location.reload()}),l?o?l.AccessExpires<=Date.now()&&l.RefreshExpires>Date.now()?u.refreshToken(l):l.AccessExpires>Date.now()?(D(),a.value=!1,s.value=!0):(a.value=!0,s.value=!0):Se().then(d=>{o=d,a.value=!0,s.value=!0}).catch(()=>{a.value=!1,s.value=!0}):(D(),a.value=!1,s.value=!0);const c=d=>{v("pageTitle",d)};return(d,_)=>(h(),y(da,{class:"bg-image"},{default:r(()=>[s.value?(h(),y(se,{key:0},{default:r(()=>[a.value&&E(o)?(h(),y(la,{key:0,user:E(o),onPageTitle:c},null,8,["user"])):(h(),y(ia,{key:1}))]),_:1})):w("",!0),t(ma,null,{default:r(()=>[J(" Powered by Graze ")]),_:1})]),_:1}))}});export{Ea as default};
