import{c as z}from"./createSimpleFunctional-f10RSA8c.js";import{m as D,k as L,s as $,c as p,v as w,w as F,d as R,e as j,n as E,B as O,l as J,x as M,h as N,y as q,z as G,i as H,j as K,C as Q,V as U,A as d}from"./VContainer-dtNRpZTo.js";import{p as W,a8 as X,I as Y,d as Z,u as ee,c as o,J as ae,t as te,af as le,f as t,m as ne}from"./index-Zh94YIQM.js";import{V as se}from"./VBtn-NKGAx7eO.js";const oe=z("v-alert-title"),re=["success","info","warning","error"],ie=W({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:X,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...D(),...L(),...$(),...p(),...w(),...F(),...R(),...j(),...Y(),...E({variant:"flat"})},"VAlert"),me=Z()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const r=ee(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=ae(e),{colorClasses:k,colorStyles:b,variantClasses:V}=O(y),{densityClasses:P}=J(e),{dimensionStyles:C}=M(e),{elevationClasses:g}=N(e),{locationStyles:x}=q(e),{positionClasses:S}=G(e),{roundedClasses:_}=H(e),{textColorClasses:B,textColorStyles:h}=K(te(e,"borderColor")),{t:A}=le(),i=o(()=>({"aria-label":A(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),I=!!(a.title||e.title),T=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,k.value,P.value,g.value,S.value,_.value,V.value,e.class],style:[b.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[Q(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",B.value],style:h.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(U,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[I&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),T&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(se,ne({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{me as V,oe as a};
