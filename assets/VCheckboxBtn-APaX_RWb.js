import{m as O,k as X,u as F,R as z,V as J,l as Q,j as W,f as Y}from"./VContainer-tk_mTwVf.js";import{p as I,a4 as B,aB as Z,I as p,d as A,u as S,S as j,c as o,ab as ee,aT as le,a9 as ae,t as i,f as d,s as $,r as te,aK as ne,m as P,ae as oe,af as ue,F as ie,ag as re,aC as x,aO as ce,X as se,R as de}from"./index-uFyvbd2S.js";import{b as ve}from"./VTextField-tLuyuF-u.js";const E=Symbol.for("vuetify:selection-control-group"),M=I({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:B,trueIcon:B,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Z},...O(),...X(),...p()},"SelectionControlGroup"),fe=I({...M({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),ke=A()({name:"VSelectionControlGroup",props:fe(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"modelValue"),t=j(),v=o(()=>e.id||`v-selection-control-group-${t}`),r=o(()=>e.name||v.value),a=new Set;return ee(E,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),le(()=>{a.delete(n)})}}),ae({[e.defaultsTarget]:{color:i(e,"color"),disabled:i(e,"disabled"),density:i(e,"density"),error:i(e,"error"),inline:i(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:r,falseIcon:i(e,"falseIcon"),trueIcon:i(e,"trueIcon"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),type:i(e,"type"),valueComparator:i(e,"valueComparator")}}),F(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}}),N=I({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...O(),...M()},"VSelectionControl");function me(e){const u=re(E,void 0),{densityClasses:c}=Q(e),l=S(e,"modelValue"),t=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=o(()=>e.falseValue!==void 0?e.falseValue:!1),r=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=o({get(){const f=u?u.modelValue.value:l.value;return r.value?x(f).some(s=>e.valueComparator(s,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const s=f?t.value:v.value;let m=s;r.value&&(m=f?[...x(l.value),s]:x(l.value).filter(b=>!e.valueComparator(b,t.value))),u?u.modelValue.value=m:l.value=m}}),{textColorClasses:n,textColorStyles:y}=W(o(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:V,backgroundColorStyles:k}=Y(o(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),h=o(()=>a.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:c,trueValue:t,falseValue:v,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:V,backgroundColorStyles:k,icon:h}}const _=A()({name:"VSelectionControl",directives:{Ripple:z},inheritAttrs:!1,props:N(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:c,slots:l}=u;const{group:t,densityClasses:v,icon:r,model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:V,backgroundColorStyles:k,trueValue:h}=me(e),f=j(),s=$(!1),m=$(!1),b=te(),g=o(()=>e.id||`input-${f}`),G=o(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{b.value&&(b.value.checked=a.value)});function T(C){G.value&&(s.value=!0,ce(C.target,":focus-visible")!==!1&&(m.value=!0))}function w(){s.value=!1,m.value=!1}function q(C){G.value&&(e.readonly&&t&&se(()=>t.forceUpdate()),a.value=C.target.checked)}return F(()=>{var R,U;const C=l.label?l.label({label:e.label,props:{for:g.value}}):e.label,[H,K]=ne(c),D=d("input",P({ref:b,checked:a.value,disabled:!!e.disabled,id:g.value,onBlur:w,onFocus:T,onInput:q,"aria-disabled":!!e.disabled,type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},K),null);return d("div",P({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},v.value,e.class]},H,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:y.value},[(R=l.default)==null?void 0:R.call(l,{backgroundColorClasses:V,backgroundColorStyles:k}),oe(d("div",{class:["v-selection-control__input"]},[((U=l.input)==null?void 0:U.call(l,{model:a,textColorClasses:n,textColorStyles:y,backgroundColorClasses:V,backgroundColorStyles:k,inputNode:D,icon:r.value,props:{onFocus:T,onBlur:w,id:g.value}}))??d(ie,null,[r.value&&d(J,{key:"icon",icon:r.value},null),D])]),[[ue("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),C&&d(ve,{for:g.value,clickable:!0,onClick:L=>L.stopPropagation()},{default:()=>[C]})])}),{isFocused:s,input:b}}}),ye=I({indeterminate:Boolean,indeterminateIcon:{type:B,default:"$checkboxIndeterminate"},...N({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ge=A()({name:"VCheckboxBtn",props:ye(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:c}=u;const l=S(e,"indeterminate"),t=S(e,"modelValue");function v(n){l.value&&(l.value=!1)}const r=o(()=>l.value?e.indeterminateIcon:e.falseIcon),a=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return F(()=>{const n=de(_.filterProps(e),["modelValue"]);return d(_,P(n,{modelValue:t.value,"onUpdate:modelValue":[y=>t.value=y,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:r.value,trueIcon:a.value,"aria-checked":l.value?"mixed":void 0}),c)}),{}}});export{ge as V,_ as a,M as b,ke as c,ye as d,N as m};
