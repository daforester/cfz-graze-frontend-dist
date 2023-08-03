import{m as W,e as X,u as Y,f as B,g as Z,h as ee,i as le,j as te}from"./VTextField-b5ed3798.js";import{p as ne,ah as ae,n as oe,ae as ue,u as ie,e as s,aw as x,r as h,w as se,ax as re,v as o,x as C,H as g,E as ce,ay as de}from"./index-4b048e5a.js";import{a as fe}from"./VChip-20429996.js";import{a as ve}from"./VContainer-e3d76a37.js";const me=ne({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...W({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ae(e).every(f=>f!=null&&typeof f=="object")},...X({clearable:!0})},"VFileInput"),Ve=oe()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:$,emit:V,slots:n}=f;const{t:k}=ue(),a=ie(e,"modelValue"),{isFocused:v,focus:M,blur:N}=Y(e),I=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),F=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),S=s(()=>x(F.value,I.value)),p=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${x(r,I.value)})`:t})),j=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?k(e.counterSizeString,l,S.value):k(e.counterString,l)}),P=h(),b=h(),u=h(),D=s(()=>v.value||e.active),w=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;u.value!==document.activeElement&&((l=u.value)==null||l.focus()),v.value||M()}function E(l){z(l)}function U(l){V("mousedown:control",l)}function z(l){var t;(t=u.value)==null||t.click(),V("click:control",l)}function H(l){l.stopPropagation(),y(),ce(()=>{a.value=[],de(e["onClick:clear"],l)})}return se(a,l=>{(!Array.isArray(l)||!l.length)&&u.value&&(u.value.value="")}),ve(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,L]=re($),[{modelValue:pe,...O}]=B.filterProps(e),[T]=Z(e);return o(B,C({ref:P,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-text-field--plain-underlined":w.value},e.class],style:e.style,"onClick:prepend":E},r,O,{centerAffix:!w.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:R,isReadonly:_,isValid:q}=c;return o(ee,C({ref:b,"prepend-icon":e.prependIcon,onMousedown:U,onClick:z,"onClick:clear":H,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},T,{id:m.value,active:D.value||R.value,dirty:R.value,disabled:d.value,focused:v.value,error:q.value===!1}),{...n,default:G=>{var A;let{props:{class:J,...K}}=G;return o(g,null,[o("input",C({ref:u,type:"file",readonly:_.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:i=>{i.stopPropagation(),y()},onChange:i=>{if(!i.target)return;const Q=i.target;a.value=[...Q.files??[]]},onFocus:y,onBlur:N},K,L),null),o("div",{class:J},[!!((A=a.value)!=null&&A.length)&&(n.selection?n.selection({fileNames:p.value,totalBytes:F.value,totalBytesReadable:S.value}):e.chips?p.value.map(i=>o(fe,{key:i,size:"small",color:e.color},{default:()=>[i]})):p.value.join(", "))])])}})},details:t?c=>{var m,d;return o(g,null,[(m=n.details)==null?void 0:m.call(n,c),l&&o(g,null,[o("span",null,null),o(le,{active:!!((d=a.value)!=null&&d.length),value:j.value},n.counter)])])}:void 0})}),te({},P,b,u)}});export{Ve as V};
