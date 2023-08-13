import{b as y,a as f,D as h,G as k,d as M,s as O,e as J,A as K,v as N,w as $,f as q,H as Q,c as U,F as W,R as X,g as Y,J as Z,E as ee,x as ae,i as te,B as ne,y as de,z as ie,j as se,I as le,L as ce,K as re}from"./VContainer-87d98084.js";import{n as b,G as ue,v as n,p as P,ac as u,z as ve,B as oe,e as A,aa as me,ad as ge}from"./index-f94693a1.js";import{c as C,b as V,a as ke}from"./VAvatar-484efd8f.js";const ye=b()({name:"VCardActions",props:y(),setup(e,i){let{slots:t}=i;return ue({VBtn:{variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=C("v-card-subtitle"),be=C("v-card-title"),Ce=P({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...y(),...h()},"VCardItem"),pe=b()({name:"VCardItem",props:Ce(),setup(e,i){let{slots:t}=i;return f(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||t.append),m=!!(e.title||t.title),g=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(be,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),g&&n(fe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ie=C("v-card-text"),Ae=P({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...M(),...y(),...h(),...O(),...J(),...K(),...N(),...$(),...q(),...Q(),...U(),...ve(),...W({variant:"elevated"})},"VCard"),Se=b()({name:"VCard",directives:{Ripple:X},props:Ae(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=oe(e),{borderClasses:s}=Y(e),{colorClasses:o,colorStyles:m,variantClasses:g}=Z(e),{densityClasses:l}=ee(e),{dimensionStyles:d}=ae(e),{elevationClasses:S}=te(e),{loaderClasses:x}=ne(e),{locationStyles:B}=de(e),{positionClasses:D}=ie(e),{roundedClasses:L}=se(e),c=le(e,t),T=A(()=>e.link!==!1&&c.isLink.value),r=A(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const _=T.value?"a":e.tag,R=!!(a.title||e.title),E=!!(a.subtitle||e.subtitle),F=R||E,j=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),z=!!(a.image||e.image),G=F||w||j,H=!!(a.text||e.text);return me(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,s.value,o.value,l.value,S.value,x.value,D.value,L.value,g.value,e.class],style:[m.value,d.value,B.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[z&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ke,{key:"image-img",cover:!0,src:e.image},null)]),n(ce,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),G&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(Ie,{key:"text"},{default:()=>{var I;return[((I=a.text)==null?void 0:I.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(ye,null,{default:a.actions}),re(r.value,"v-card")]}}),[[ge("ripple"),r.value&&e.ripple]])}),{}}});export{be as V,fe as a,pe as b,Ie as c,ye as d,Se as e};
