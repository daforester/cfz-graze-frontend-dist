import{p as $,n as h,a1 as N,a as L,x as R,q,y as r,k as b,j as A,c as l,m as S,d as w,X as E,Y as F,o as B,b as O,w as m,e as y,G as T,N as U,a0 as j,$ as P,ap as D,F as G}from"./index-4e57ad5f.js";import{a as X,V as C}from"./VOverlay-6f181e38.js";import{g as Y}from"./VTextField-d80e5d7c.js";import{j as H,k as J,l as K,n as Q,o as W,p as Z,q as _,V as I,r as x,a as ee}from"./VBtn-dc312c62.js";import{c as ae,h as se,u as te,V as oe}from"./rounded-541c4a17.js";import{u as le}from"./scopeId-4600f886.js";const ne=$({multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...H({location:"bottom"}),...J(),...ae(),...K(),...h(),...N(X({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),ie=L()({name:"VSnackbar",props:ne(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const t=R(e,"modelValue"),{locationStyles:o}=Q(e),{positionClasses:i}=W(e),{scopeId:u}=le(),{themeClasses:v}=q(e),{colorClasses:k,colorStyles:g,variantClasses:a}=Z(e),{roundedClasses:c}=se(e),f=r();b(t,p),b(()=>e.timeout,p),A(()=>{t.value&&p()});let V=-1;function p(){window.clearTimeout(V);const d=Number(e.timeout);!t.value||d===-1||(V=window.setTimeout(()=>{t.value=!1},d))}function M(){window.clearTimeout(V)}return te(()=>{const[d]=C.filterProps(e);return l(C,S({ref:f,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},i.value,e.class],style:e.style},d,{modelValue:t.value,"onUpdate:modelValue":z=>t.value=z,contentProps:S({class:["v-snackbar__wrapper",v.value,k.value,c.value,a.value],style:[o.value,g.value],onPointerenter:M,onPointerleave:p},d.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},u),{default:()=>[_(!1,"v-snackbar"),s.default&&l("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[s.default()]),s.actions&&l(oe,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[l("div",{class:"v-snackbar__actions"},[s.actions()])]})],activator:s.activator})}),Y({},f)}}),re=w({__name:"SnackMessage",props:E({message:{},timeout:{}},{modelValue:{type:Boolean,required:!0}}),emits:["update:modelValue"],setup(e){const n=F(e,"modelValue");return e.timeout&&setTimeout(()=>{n.value=!1},e.timeout*1e3),(s,t)=>(B(),O(ie,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o)},{actions:m(()=>[l(I,{color:"grey",variant:"text",onClick:t[0]||(t[0]=o=>n.value=!1)},{default:m(()=>[y(" Close ")]),_:1})]),default:m(()=>[y(T(s.message)+" ",1)]),_:1},8,["modelValue"]))}}),pe=w({__name:"SaveButton",props:{appendIcon:{default:""},class:{default:""},color:{default:"green"},enabled:{type:Boolean,default:!0},icon:{default:""},label:{default:"Save"},message:{default:""},prependIcon:{default:""},size:{default:"default"},timeout:{default:0},type:{default:"button"},usePopup:{type:Boolean,default:!0}},emits:["click"],setup(e,{emit:n}){const s=e,t=r(s.class||""),o=r(!1),i=r(!1),u=r(s.message||"Saved"),v=r(s.message||"Saved");b(s,()=>{v.value!==s.message&&(u.value=s.message||"Saved",v.value=s.message||"Saved")});const k=(a="")=>{a.length>0&&(u.value=a),o.value=!1,s.usePopup&&(i.value=!0,s.timeout&&setTimeout(()=>{i.value=!1},parseInt((s.timeout||0).toString())*1e3))},g=a=>{o.value=!0,n("click",{callback:k,event:a})};return(a,c)=>(B(),U(G,null,[l(I,{"append-icon":a.appendIcon||"",class:D(t.value),color:a.color||"green",disabled:!a.enabled||o.value,icon:a.icon||!1,"prepend-icon":a.prependIcon||"",size:a.size||"default",type:a.type,onClick:g},j({default:m(()=>[a.icon?P(a.$slots,"default",{key:1},()=>[l(ee,{icon:a.icon},null,8,["icon"])]):P(a.$slots,"default",{key:0},()=>[y(T(a.label),1)])]),_:2},[o.value?{name:"prepend",fn:m(()=>[l(x,{size:"20",indeterminate:""})]),key:"0"}:void 0]),1032,["append-icon","class","color","disabled","icon","prepend-icon","size","type"]),l(re,{modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=f=>i.value=f),message:u.value||"Saved",timeout:7},null,8,["modelValue","message"])],64))}});export{pe as _};
