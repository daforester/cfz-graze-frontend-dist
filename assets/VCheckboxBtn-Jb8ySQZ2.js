import{m as _,k as L,u as F,R as X,V as z,l as J,j as Q,f as W}from"./VContainer-idBlWw-g.js";import{p as I,a4 as B,aB as Y,I as Z,d as A,u as S,S as O,c as o,ab as p,aU as ee,a9 as le,t as r,f as d,s as T,r as ae,aK as te,m as P,ae as ne,af as oe,F as ue,ag as re,aC as x,aO as ie,X as ce,R as se}from"./index-4xYgdkuk.js";import{b as de}from"./VTextField-ozhsr0ft.js";const j=Symbol.for("vuetify:selection-control-group"),E=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Y},..._(),...L(),...Z()},"SelectionControlGroup"),ve=I({...E({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),be=A()({name:"VSelectionControlGroup",props:ve(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"modelValue"),t=O(),v=o(()=>e.id||`v-selection-control-group-${t}`),i=o(()=>e.name||v.value),a=new Set;return p(j,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),ee(()=>{a.delete(n)})}}),le({[e.defaultsTarget]:{color:r(e,"color"),disabled:r(e,"disabled"),density:r(e,"density"),error:r(e,"error"),inline:r(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:i,falseIcon:r(e,"falseIcon"),trueIcon:r(e,"trueIcon"),readonly:r(e,"readonly"),ripple:r(e,"ripple"),type:r(e,"type"),valueComparator:r(e,"valueComparator")}}),F(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}}),M=I({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,..._(),...E()},"VSelectionControl");function fe(e){const u=re(j,void 0),{densityClasses:c}=J(e),l=S(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=o(()=>e.falseValue!==void 0?e.falseValue:!1),i=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const m=u?u.modelValue.value:l.value;return i.value?x(m).some(s=>e.valueComparator(s,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const s=m?t.value:v.value;let f=s;i.value&&(f=m?[...x(l.value),s]:x(l.value).filter(V=>!e.valueComparator(V,t.value))),u?u.modelValue.value=f:l.value=f}}),{textColorClasses:n,textColorStyles:y}=Q(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:b,backgroundColorStyles:k}=W(o(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),h=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:c,trueValue:t,falseValue:v,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:b,backgroundColorStyles:k,icon:h}}const $=A()({name:"VSelectionControl",directives:{Ripple:X},inheritAttrs:!1,props:M(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:c,slots:l}=u;const{group:t,densityClasses:v,icon:i,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:b,backgroundColorStyles:k,trueValue:h}=fe(e),m=O(),s=o(()=>e.id||`input-${m}`),f=T(!1),V=T(!1),g=ae();t==null||t.onForceUpdate(()=>{g.value&&(g.value.checked=a.value)});function G(C){f.value=!0,ie(C.target,":focus-visible")!==!1&&(V.value=!0)}function U(){f.value=!1,V.value=!1}function N(C){e.readonly&&t&&ce(()=>t.forceUpdate()),a.value=C.target.checked}return F(()=>{var D,R;const C=l.label?l.label({label:e.label,props:{for:s.value}}):e.label,[q,H]=te(c),w=d("input",P({ref:g,checked:a.value,disabled:!!(e.readonly||e.disabled),id:s.value,onBlur:U,onFocus:G,onInput:N,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},H),null);return d("div",P({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":V.value,"v-selection-control--inline":e.inline},v.value,e.class]},q,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:y.value},[(D=l.default)==null?void 0:D.call(l,{backgroundColorClasses:b,backgroundColorStyles:k}),ne(d("div",{class:["v-selection-control__input"]},[((R=l.input)==null?void 0:R.call(l,{model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:b,backgroundColorStyles:k,inputNode:w,icon:i.value,props:{onFocus:G,onBlur:U,id:s.value}}))??d(ue,null,[i.value&&d(z,{key:"icon",icon:i.value},null),w])]),[[oe("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),C&&d(de,{for:s.value,clickable:!0,onClick:K=>K.stopPropagation()},{default:()=>[C]})])}),{isFocused:f,input:g}}}),me=I({indeterminate:Boolean,indeterminateIcon:{type:B,default:"$checkboxIndeterminate"},...M({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ke=A()({name:"VCheckboxBtn",props:me(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"indeterminate"),t=S(e,"modelValue");function v(n){l.value&&(l.value=!1)}const i=o(()=>l.value?e.indeterminateIcon:e.falseIcon),a=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return F(()=>{const n=se($.filterProps(e),["modelValue"]);return d($,P(n,{modelValue:t.value,"onUpdate:modelValue":[y=>t.value=y,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:a.value,"aria-checked":l.value?"mixed":void 0}),c)}),{}}});export{ke as V,$ as a,E as b,be as c,me as d,M as m};
