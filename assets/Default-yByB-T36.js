import{p as L,r as p,s as S,c as f,a as re,w as A,o as ie,b as ue,d as U,u as ce,e as de,t as O,f as o,m as G,h as ve,i as F,j as me,k as H,l as M,n as V,q as _,v as r,x as J,y as K,z as ge,A as E,E as j,_ as Q,B as fe,C as x,D as W,F as pe,G as he,H as Ve,I as X,J as Z,K as ye,L as _e,T as ke}from"./index-LoOE9hv8.js";import{G as Ce,R as D,a as be}from"./userData-Awis3VLR.js";import{u as Te}from"./useAvatar-o26CnBMy.js";import{C as Ie}from"./canEditOrganisation-TQ_B8kvg.js";import{G as w}from"./group-7fhbY6WJ.js";import{C as R}from"./canDo-fxmVvZDs.js";import{m as Se,V as Y,a as Pe}from"./VToolbar-4vJ4uAXR.js";import{V as we}from"./scopeId-4Bs6C4cr.js";import{V as Re}from"./VTextField-ENRL7HUP.js";import{m as Le,V as ee,u as Ne}from"./VBtn--B1INWih.js";import{u as B,m as z,V as Ee,a as $,b as Ue,c as Be,d as Ae,e as Oe,f as xe,g as De,h as Me,i as Ge}from"./VContainer-V1weI7tX.js";import{m as ae,u as te,a as oe,c as le,V as Fe,b as se}from"./VNavigationDrawer-olcln0PY.js";import{u as ze,V as q,a as b,b as He}from"./VList-xkxCef6T.js";import{V as ne,a as Ye}from"./VAvatar-dy_Xuna0.js";import{V as $e}from"./VDivider-iY0VykCl.js";import{s as qe}from"./index-OKsbKlsK.js";import"./forwardRefs-Cfslt7Sh.js";import"./createSimpleFunctional-KxvM5Lpl.js";const Je=(e,l=void 0)=>e===void 0?!1:l===void 0?R(e,w.GROUP_TYPE_CONVENTION).ManageUsers:R(e,w.GROUP_TYPE_CONVENTION,l.ConventionUUID,l).ManageUsers,Ke=(e,l=void 0)=>{let a;return e===void 0?!1:(l===void 0?a=R(e,w.GROUP_TYPE_CONVENTION):a=R(e,w.GROUP_TYPE_CONVENTION,l.ConventionUUID,l),a.EditConvention||a.ManageViews||a.ViewRegistration||a.EditRegistration)},je=(e,l=void 0)=>{let a;return e===void 0?!1:(l===void 0?a=R(e,w.GROUP_TYPE_CONVENTION):a=R(e,w.GROUP_TYPE_CONVENTION,l.ConventionUUID,l),a.ConfigureLostAndFound||a.ConfigureProps||a.EditLostAndFound||a.EditProps||a.ViewLostAndFound||a.ViewProps)},Qe=L({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function We(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=l;let i=0;const s=p(null),t=S(0),n=S(0),v=S(0),m=S(!1),c=S(!1),d=f(()=>Number(e.scrollThreshold)),k=f(()=>re((d.value-t.value)/d.value||0)),y=()=>{const g=s.value;!g||a&&!a.value||(i=t.value,t.value="window"in g?g.pageYOffset:g.scrollTop,c.value=t.value<i,v.value=Math.abs(t.value-d.value))};return A(c,()=>{n.value=n.value||t.value}),A(m,()=>{n.value=0}),ie(()=>{A(()=>e.scrollTarget,g=>{var I;const T=g?document.querySelector(g):window;T&&T!==s.value&&((I=s.value)==null||I.removeEventListener("scroll",y),s.value=T,s.value.addEventListener("scroll",y,{passive:!0}))},{immediate:!0})}),ue(()=>{var g;(g=s.value)==null||g.removeEventListener("scroll",y)}),a&&A(a,y,{immediate:!0}),{scrollThreshold:d,currentScroll:t,currentThreshold:v,isScrollActive:m,scrollRatio:k,isScrollingUp:c,savedScroll:n}}const Xe=L({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Se(),...ae(),...Qe(),height:{type:[Number,String],default:64}},"VAppBar"),Ze=U()({name:"VAppBar",props:Xe(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const i=p(),s=ce(e,"modelValue"),t=f(()=>{var h;const u=new Set(((h=e.scrollBehavior)==null?void 0:h.split(" "))??[]);return{hide:u.has("hide"),inverted:u.has("inverted"),collapse:u.has("collapse"),elevate:u.has("elevate"),fadeImage:u.has("fade-image")}}),n=f(()=>{const u=t.value;return u.hide||u.inverted||u.collapse||u.elevate||u.fadeImage||!s.value}),{currentScroll:v,scrollThreshold:m,isScrollingUp:c,scrollRatio:d}=We(e,{canScroll:n}),k=f(()=>e.collapse||t.value.collapse&&(t.value.inverted?d.value>0:d.value===0)),y=f(()=>e.flat||t.value.elevate&&(t.value.inverted?v.value>0:v.value===0)),g=f(()=>t.value.fadeImage?t.value.inverted?1-d.value:d.value:void 0),T=f(()=>{var N,C;if(t.value.hide&&t.value.inverted)return 0;const u=((N=i.value)==null?void 0:N.contentHeight)??0,h=((C=i.value)==null?void 0:C.extensionHeight)??0;return u+h});de(f(()=>!!e.scrollBehavior),()=>{ve(()=>{t.value.hide?t.value.inverted?s.value=v.value>m.value:s.value=c.value||v.value<m.value:s.value=!0})});const{ssrBootStyles:I}=ze(),{layoutItemStyles:P}=te({id:e.name,order:f(()=>parseInt(e.order,10)),position:O(e,"location"),layoutSize:T,elementSize:S(void 0),active:s,absolute:O(e,"absolute")});return B(()=>{const u=Y.filterProps(e);return o(Y,G({ref:i,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":g.value,height:void 0,...I.value},e.style]},u,{collapse:k.value,flat:y.value}),a)}),{}}}),ea=L({...Le({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),aa=U()({name:"VAppBarNavIcon",props:ea(),setup(e,l){let{slots:a}=l;return B(()=>o(ee,G(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),ta=L({...z(),...oe()},"VLayout"),oa=U()({name:"VLayout",props:ta(),setup(e,l){let{slots:a}=l;const{layoutClasses:i,layoutStyles:s,getLayoutItem:t,items:n,layoutRef:v}=le(e);return B(()=>{var m;return o("div",{ref:v,class:[i.value,e.class],style:[s.value,e.style]},[(m=a.default)==null?void 0:m.call(a)])}),{getLayoutItem:t,items:n}}}),la=F({__name:"DashboardLayout",props:{user:{}},setup(e){const l=Te(),a=me(),i=p(!1),s=p("Default Title"),t=p(""),n=p(H(e.user)),v=p(l(n.value.UserUUID));j.getInstance().on("user.profile.saved",P=>{n.value=H(P)});const c=p(localStorage.getItem("theme")||"light");a.global.name.value=c.value;const d=()=>{c.value=="light"?c.value="dark":c.value="light",a.global.name.value=c.value,localStorage.setItem("theme",c.value)},k=P=>{s.value=P},y=p(Ke(e.user)),g=p(je(e.user)),T=p(Ie(e.user)),I=p(Je(e.user));return(P,u)=>{const h=M("RouterLink"),N=M("RouterView");return V(),_(oa,{class:"h-100"},{default:r(()=>[o(Ze,{color:"blue-darken-3"},{default:r(()=>[o(Pe,null,{default:r(()=>[J(K(s.value),1)]),_:1}),o(we),o(Re,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=C=>t.value=C),"prepend-inner-icon":"mdi:mdi-magnify",label:"Search",variant:"underlined","hide-details":"",clearable:!0,class:"d-none"},null,8,["modelValue"]),o(aa,{variant:"text",onClick:u[1]||(u[1]=ge(C=>i.value=!i.value,["stop"]))})]),_:1}),o(Fe,{modelValue:i.value,"onUpdate:modelValue":u[2]||(u[2]=C=>i.value=C),location:"right",temporary:!0},{default:r(()=>[o(q,null,{default:r(()=>[o(h,{to:{name:"Profile"}},{default:r(()=>[o(b,{title:n.value.DisplayName},{prepend:r(()=>[v.value?(V(),_(ne,{key:0,src:v.value,class:"rounded-circle mr-2",height:"32",width:"32"},null,8,["src"])):(V(),_(Ee,{key:1,icon:"mdi:mdi-account-circle",size:"x-large"}))]),_:1},8,["title"])]),_:1})]),_:1}),o($e),o(N,{name:"navigation"},{default:r(()=>[o(q,null,{default:r(()=>[o(h,{to:"/"},{default:r(()=>[o(b,{"prepend-icon":"mdi:mdi-view-dashboard-outline",title:"Home",value:"home"})]),_:1}),y.value||T.value||I.value?(V(),_(He,{key:0,value:"Admin"},{activator:r(({props:C})=>[o(b,G(C,{"prepend-icon":"mdi:mdi-security",title:"Admin"}),null,16)]),default:r(()=>[y.value||g.value?(V(),_(h,{key:0,to:"/admin/conventions"},{default:r(()=>[o(b,{"prepend-icon":"mdi:mdi-domain",title:"Conventions",value:"Conventions"})]),_:1})):E("",!0),T.value?(V(),_(h,{key:1,to:"/admin/organisations"},{default:r(()=>[o(b,{"prepend-icon":"mdi:mdi-store",title:"Organisations",value:"Organisations"})]),_:1})):E("",!0),I.value?(V(),_(h,{key:2,to:"/admin/groups"},{default:r(()=>[o(b,{"prepend-icon":"mdi:mdi-key-chain-variant",title:"Permissions",value:"Permissions"})]),_:1})):E("",!0)]),_:1})):E("",!0),o(h,{to:{name:"Profile"}},{default:r(()=>[o(b,{"prepend-icon":"mdi:mdi-account-circle",title:"Manage Account"})]),_:1}),o(b,{"prepend-icon":"mdi:mdi-theme-light-dark",onClick:d,title:`${c.value=="light"?"Dark":"Light"} Mode`},null,8,["title"]),o(h,{to:"/logout"},{default:r(()=>[o(b,{"prepend-icon":"mdi:mdi-logout",title:"Logout",value:"Logout"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(se,null,{default:r(()=>[o(N,{onPageTitle:k,"logged-in":!0})]),_:1})]),_:1})}}}),sa=Q(la,[["__scopeId","data-v-c85b2aa2"]]),na="/assets/scotiacon-logo-7K00JbC4.svg",ra=e=>(he("data-v-5faec46d"),e=e(),Ve(),e),ia=ra(()=>W("h1",null,"Scotiacon Registration System",-1)),ua=F({__name:"LoginLayout",setup(e){return(l,a)=>{const i=M("RouterView");return V(),fe(pe,null,[o($,{class:"logo-container text-center"},{default:r(()=>[o(ne,{src:x(na),class:"scotiacon-logo ma-auto"},null,8,["src"]),ia]),_:1}),o($,{class:"login-container text-center mb-0 rounded rounded-lg mb-md-10"},{default:r(()=>[o(Ye,null,{default:r(()=>[o(ee,{class:"ma-2",color:"indigo",icon:"mdi:mdi-lock-outline"})]),_:1}),W("h2",null,K(x(qe).headingSignIn),1),o(i,{"logged-in":!1})]),_:1})],64)}}}),ca=Q(ua,[["__scopeId","data-v-5faec46d"]]),da=L({...z(),...oe({fullHeight:!0}),...X()},"VApp"),va=U()({name:"VApp",props:da(),setup(e,l){let{slots:a}=l;const i=Z(e),{layoutClasses:s,getLayoutItem:t,items:n,layoutRef:v}=le(e),{rtlClasses:m}=ye();return B(()=>{var c;return o("div",{ref:v,class:["v-application",i.themeClasses.value,s.value,m.value,e.class],style:[e.style]},[o("div",{class:"v-application__wrap"},[(c=a.default)==null?void 0:c.call(a)])])}),{getLayoutItem:t,items:n,theme:i}}}),ma=L({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Ue(),...z(),...Be(),...ae(),...Ae(),...Oe({tag:"footer"}),...X()},"VFooter"),ga=U()({name:"VFooter",props:ma(),setup(e,l){let{slots:a}=l;const{themeClasses:i}=Z(e),{backgroundColorClasses:s,backgroundColorStyles:t}=xe(O(e,"color")),{borderClasses:n}=De(e),{elevationClasses:v}=Me(e),{roundedClasses:m}=Ge(e),c=S(32),{resizeRef:d}=Ne(g=>{g.length&&(c.value=g[0].target.clientHeight)}),k=f(()=>e.height==="auto"?c.value:parseInt(e.height,10)),{layoutItemStyles:y}=te({id:e.name,order:f(()=>parseInt(e.order,10)),position:f(()=>"bottom"),layoutSize:k,elementSize:f(()=>e.height==="auto"?void 0:k.value),active:f(()=>e.app),absolute:O(e,"absolute")});return B(()=>o(e.tag,{ref:d,class:["v-footer",i.value,s.value,n.value,v.value,m.value,e.class],style:[t.value,e.app?y.value:{height:_e(e.height)},e.style]},a)),{}}}),Ua=F({__name:"Default",emits:["pageTitle"],setup(e,{emit:l}){let a=Ce();const i=ke.getInstance(),s=i.getTokenByService("GrazeAPI"),t=p(!1),n=p(!1),v=l,m=j.getInstance();m.on("login",d=>{a=d,t.value=!0}),m.on("logout",()=>{a=void 0,t.value=!1}),m.on("tokenManager.tokenUpdated",()=>{t.value=!0,n.value=!0}),m.on("tokenManager.sessionExpired",()=>{t.value=!1,n.value=!1,D(),location.reload()}),s?a?s.AccessExpires<=Date.now()&&s.RefreshExpires>Date.now()?i.refreshToken(s):s.AccessExpires>Date.now()?(D(),t.value=!1,n.value=!0):(t.value=!0,n.value=!0):be().then(d=>{a=d,t.value=!0,n.value=!0}).catch(()=>{t.value=!1,n.value=!0}):(D(),t.value=!1,n.value=!0);const c=d=>{v("pageTitle",d)};return(d,k)=>(V(),_(va,{class:"bg-image"},{default:r(()=>[n.value?(V(),_(se,{key:0},{default:r(()=>[t.value&&x(a)?(V(),_(sa,{key:0,user:x(a),onPageTitle:c},null,8,["user"])):(V(),_(ca,{key:1}))]),_:1})):E("",!0),o(ga,null,{default:r(()=>[J(" Powered by Graze ")]),_:1})]),_:1}))}});export{Ua as default};
