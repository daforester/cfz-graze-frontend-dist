import{p as Y,a as Z,x as ee,h as y,y as m,s as te,ah as ae,j as ne,k as x,l as le,af as oe,c as l,m as R,F as S,a8 as z,a9 as ue,at as ie,z as b,ag as re,i as se,I as ce}from"./index-b32d0632.js";import{m as de,b as fe,u as ve,c as A,f as me,d as xe,e as ge,g as he}from"./VTextField-9e75a076.js";import{I as we}from"./index-e2b2a832.js";import{u as Ve}from"./rounded-e5358215.js";const ye=Y({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...de(),...fe()},"VTextarea"),ke=Z()({name:"VTextarea",directives:{Intersect:we},inheritAttrs:!1,props:ye(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,_){let{attrs:F,emit:M,slots:i}=_;const o=ee(e,"modelValue"),{isFocused:f,focus:G,blur:D}=ve(e),E=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),U=y(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function O(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const B=m(),g=m(),H=te(""),h=m(),j=y(()=>e.persistentPlaceholder||f.value||e.active);function C(){var t;h.value!==document.activeElement&&((t=h.value)==null||t.focus()),f.value||G()}function $(t){C(),M("click:control",t)}function p(t){M("mousedown:control",t)}function q(t){t.stopPropagation(),C(),b(()=>{o.value="",re(e["onClick:clear"],t)})}function J(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];b(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=m(),w=m(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ae(()=>{e.autoGrow||(w.value=+e.rows)});function d(){e.autoGrow&&b(()=>{if(!c.value||!g.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(g.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,V=parseFloat(t.lineHeight),I=Math.max(parseFloat(e.rows)*V+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*V+a||1/0,s=ce(u??0,I,k);w.value=Math.floor((s-a)/V),H.value=se(s)})}ne(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),le(()=>{r==null||r.disconnect()}),Ve(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=oe(F),[{modelValue:V,...I}]=A.filterProps(e),[k]=me(e);return l(A,R({ref:B,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":P.value},e.class],style:e.style},a,I,{centerAffix:w.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{isDisabled:v,isDirty:N,isReadonly:K,isValid:L}=s;return l(xe,R({ref:g,style:{"--v-textarea-control-height":H.value},onClick:$,onMousedown:p,"onClick:clear":q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},k,{active:j.value||N.value,centerAffix:w.value===1&&!P.value,dirty:N.value||e.dirty,disabled:v.value,focused:f.value,error:L.value===!1}),{...i,default:Q=>{let{props:{class:T,...W}}=Q;return l(S,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),z(l("textarea",R({ref:h,class:T,value:o.value,onInput:J,autofocus:e.autofocus,readonly:K.value,disabled:v.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:D},W,u),null),[[ue("intersect"),{handler:O},null,{once:!0}]]),e.autoGrow&&z(l("textarea",{class:[T,"v-textarea__sizer"],"onUpdate:modelValue":X=>o.value=X,ref:c,readonly:!0,"aria-hidden":"true"},null),[[ie,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var v;return l(S,null,[(v=i.details)==null?void 0:v.call(i,s),t&&l(S,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:E.value,max:U.value},i.counter)])])}:void 0})}),he({},B,g,h)}});export{ke as V};
