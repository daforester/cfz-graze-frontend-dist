import{c as I}from"./createSimpleFunctional-1e18b869.js";import{m as $,o as D,q as L,c as p,r as w,s as F,d as R,a as j,y as E,A as O,p as q,v as M,g as N,w as G,x as H,h as J,n as K,B as Q,V as U,z as d}from"./VContainer-2dbb1f7c.js";import{p as W,ah as X,z as Y,n as Z,u as ee,e as o,B as te,t as ae,aj as le,v as a,x as ne}from"./index-df2ebec6.js";import{V as se}from"./VBtn-3780ed9a.js";const oe=I("v-alert-title"),re=["success","info","warning","error"],ie=W({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:X,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...$(),...D(),...L(),...p(),...w(),...F(),...R(),...j(),...Y(),...E({variant:"flat"})},"VAlert"),me=Z()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:t}=v;const r=ee(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=te(e),{colorClasses:k,colorStyles:b,variantClasses:V}=O(y),{densityClasses:P}=q(e),{dimensionStyles:C}=M(e),{elevationClasses:g}=N(e),{locationStyles:x}=G(e),{positionClasses:S}=H(e),{roundedClasses:_}=J(e),{textColorClasses:B,textColorStyles:h}=K(ae(e,"borderColor")),{t:A}=le(),i=o(()=>({"aria-label":A(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(t.prepend||n.value),T=!!(t.title||e.title),z=!!(t.close||e.closable);return r.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,k.value,P.value,g.value,S.value,_.value,V.value,e.class],style:[b.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[Q(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",B.value],style:h.value},null),s&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},t.prepend):a(U,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[T&&a(oe,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),((c=t.text)==null?void 0:c.call(t))??e.text,(u=t.default)==null?void 0:u.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),z&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=t.close)==null?void 0:l.call(t,{props:i.value})]}}):a(se,ne({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{me as V,oe as a};
