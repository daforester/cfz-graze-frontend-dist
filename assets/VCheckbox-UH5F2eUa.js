import{c as r,a2 as W,p as x,an as $,aw as Y,I as Z,d as F,u as S,S as w,a0 as p,aS as ee,a1 as le,t as d,f as v,s as T,r as te,aM as E,m as h,al as ae,ao as ne,F as oe,ac as ue,ax as U,aL as re,X as ce,R as L}from"./index-3pnlNSkI.js";import{m as O,k as se,u as A,R as ie,V as de,r as ve,q as fe,f as me}from"./VContainer-T0wDGrh1.js";import{c as Ve,b as ye,u as be,a as M}from"./VTextField-jPMt_IAp.js";const xe=(e,u,s=()=>e[t],l=c=>{u(`update:${t}`,c);const o=W();o!==null&&o.proxy!==null&&o.proxy.$forceUpdate()},t="modelValue")=>r({get(){return s()},set(c){return l(c)}}),j=Symbol.for("vuetify:selection-control-group"),H=x({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:$,trueIcon:$,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Y},...O(),...se(),...Z()},"SelectionControlGroup"),Ce=x({...H({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Pe=F()({name:"VSelectionControlGroup",props:Ce(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:s}=u;const l=S(e,"modelValue"),t=w(),c=r(()=>e.id||`v-selection-control-group-${t}`),o=r(()=>e.name||c.value),a=new Set;return p(j,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),ee(()=>{a.delete(n)})}}),le({[e.defaultsTarget]:{color:d(e,"color"),disabled:d(e,"disabled"),density:d(e,"density"),error:d(e,"error"),inline:d(e,"inline"),modelValue:l,multiple:r(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:o,falseIcon:d(e,"falseIcon"),trueIcon:d(e,"trueIcon"),readonly:d(e,"readonly"),ripple:d(e,"ripple"),type:d(e,"type"),valueComparator:d(e,"valueComparator")}}),A(()=>{var n;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=s.default)==null?void 0:n.call(s)])}),{}}}),N=x({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...O(),...H()},"VSelectionControl");function ke(e){const u=ue(j,void 0),{densityClasses:s}=ve(e),l=S(e,"modelValue"),t=r(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),c=r(()=>e.falseValue!==void 0?e.falseValue:!1),o=r(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=r({get(){const m=u?u.modelValue.value:l.value;return o.value?U(m).some(i=>e.valueComparator(i,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const i=m?t.value:c.value;let f=i;o.value&&(f=m?[...U(l.value),i]:U(l.value).filter(y=>!e.valueComparator(y,t.value))),u?u.modelValue.value=f:l.value=f}}),{textColorClasses:n,textColorStyles:V}=fe(r(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:b,backgroundColorStyles:C}=me(r(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),I=r(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:s,trueValue:t,falseValue:c,model:a,textColorClasses:n,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:C,icon:I}}const _=F()({name:"VSelectionControl",directives:{Ripple:ie},inheritAttrs:!1,props:N(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:s,slots:l}=u;const{group:t,densityClasses:c,icon:o,model:a,textColorClasses:n,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:C,trueValue:I}=ke(e),m=w(),i=r(()=>e.id||`input-${m}`),f=T(!1),y=T(!1),k=te();t==null||t.onForceUpdate(()=>{k.value&&(k.value.checked=a.value)});function P(g){f.value=!0,re(g.target,":focus-visible")!==!1&&(y.value=!0)}function B(){f.value=!1,y.value=!1}function z(g){e.readonly&&t&&ce(()=>t.forceUpdate()),a.value=g.target.checked}return A(()=>{var G,R;const g=l.label?l.label({label:e.label,props:{for:i.value}}):e.label,[J,K]=E(s),D=v("input",h({ref:k,checked:a.value,disabled:!!(e.readonly||e.disabled),id:i.value,onBlur:B,onFocus:P,onInput:z,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:I.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},K),null);return v("div",h({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},c.value,e.class]},J,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",n.value],style:V.value},[(G=l.default)==null?void 0:G.call(l,{backgroundColorClasses:b,backgroundColorStyles:C}),ae(v("div",{class:["v-selection-control__input"]},[((R=l.input)==null?void 0:R.call(l,{model:a,textColorClasses:n,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:C,inputNode:D,icon:o.value,props:{onFocus:P,onBlur:B,id:i.value}}))??v(oe,null,[o.value&&v(de,{key:"icon",icon:o.value},null),D])]),[[ne("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),g&&v(Ve,{for:i.value,clickable:!0,onClick:Q=>Q.stopPropagation()},{default:()=>[g]})])}),{isFocused:f,input:k}}}),X=x({indeterminate:Boolean,indeterminateIcon:{type:$,default:"$checkboxIndeterminate"},...N({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),q=F()({name:"VCheckboxBtn",props:X(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:s}=u;const l=S(e,"indeterminate"),t=S(e,"modelValue");function c(n){l.value&&(l.value=!1)}const o=r(()=>l.value?e.indeterminateIcon:e.falseIcon),a=r(()=>l.value?e.indeterminateIcon:e.trueIcon);return A(()=>{const n=L(_.filterProps(e),["modelValue"]);return v(_,h(n,{modelValue:t.value,"onUpdate:modelValue":[V=>t.value=V,c],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:o.value,trueIcon:a.value,"aria-checked":l.value?"mixed":void 0}),s)}),{}}}),ge=x({...ye(),...L(X(),["inline"])},"VCheckbox"),Be=F()({name:"VCheckbox",inheritAttrs:!1,props:ge(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,u){let{attrs:s,slots:l}=u;const t=S(e,"modelValue"),{isFocused:c,focus:o,blur:a}=be(e),n=w(),V=r(()=>e.id||`checkbox-${n}`);return A(()=>{const[b,C]=E(s),I=M.filterProps(e),m=q.filterProps(e);return v(M,h({class:["v-checkbox",e.class]},b,I,{modelValue:t.value,"onUpdate:modelValue":i=>t.value=i,id:V.value,focused:c.value,style:e.style}),{...l,default:i=>{let{id:f,messagesId:y,isDisabled:k,isReadonly:P}=i;return v(q,h(m,{id:f.value,"aria-describedby":y.value,disabled:k.value,readonly:P.value},C,{modelValue:t.value,"onUpdate:modelValue":B=>t.value=B,onFocus:o,onBlur:a}),l)}})}),{}}});export{Be as V,q as a,_ as b,H as c,Pe as d,N as m,xe as u};
