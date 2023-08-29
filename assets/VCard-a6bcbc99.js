import{m as y,u as b,o as h,z as g,b as q,q as G,c as H,k as N,r as $,s as J,d as K,A as Q,a as U,y as W,R as X,e as Y,C as Z,p as ee,v as ae,g as te,l as ne,w as de,x as ie,h as se,B as le,L as ce,D as re}from"./VContainer-9e55c7f5.js";import{n as f,G as ue,v as n,p as P,ad as u,z as ve,B as oe,e as A,ab as me,ae as ke}from"./index-d1ed2f9f.js";import{c as C,a as I,V as ge}from"./VAvatar-2f0c5fe1.js";const ye=f()({name:"VCardActions",props:y(),setup(e,i){let{slots:t}=i;return ue({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),be=C("v-card-subtitle"),fe=C("v-card-title"),Ce=P({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...y(),...h()},"VCardItem"),pe=f()({name:"VCardItem",props:Ce(),setup(e,i){let{slots:t}=i;return b(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||t.append),m=!!(e.title||t.title),k=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(g,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(I,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(fe,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),k&&n(be,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(g,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(I,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ve=C("v-card-text"),Ae=P({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...q(),...y(),...h(),...G(),...H(),...N(),...$(),...J(),...K(),...Q(),...U(),...ve(),...W({variant:"elevated"})},"VCard"),Se=f()({name:"VCard",directives:{Ripple:X},props:Ae(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=oe(e),{borderClasses:s}=Y(e),{colorClasses:o,colorStyles:m,variantClasses:k}=Z(e),{densityClasses:l}=ee(e),{dimensionStyles:d}=ae(e),{elevationClasses:S}=te(e),{loaderClasses:x}=ne(e),{locationStyles:B}=de(e),{positionClasses:D}=ie(e),{roundedClasses:L}=se(e),c=le(e,t),T=A(()=>e.link!==!1&&c.isLink.value),r=A(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return b(()=>{const _=T.value?"a":e.tag,R=!!(a.title||e.title),w=!!(a.subtitle||e.subtitle),z=R||w,E=!!(a.append||e.appendAvatar||e.appendIcon),F=!!(a.prepend||e.prependAvatar||e.prependIcon),M=!!(a.image||e.image),O=z||F||E,j=!!(a.text||e.text);return me(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,s.value,o.value,l.value,S.value,x.value,D.value,L.value,k.value,e.class],style:[m.value,d.value,B.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[M&&n("div",{key:"image",class:"v-card__image"},[a.image?n(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(ce,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),O&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),j&&n(Ve,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(ye,null,{default:a.actions}),re(r.value,"v-card")]}}),[[ke("ripple"),r.value&&e.ripple]])}),{}}});export{fe as V,be as a,pe as b,Ve as c,ye as d,Se as e};