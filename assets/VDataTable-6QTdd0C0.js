import{au as bt,i as ht,M as Pe,N as xt,r as A,c as P,w as ce,n as Pt,q as St,P as kt,p as V,I as Ee,d as F,J as Fe,a1 as K,t as I,f as v,ag as N,ae as Le,ah as wt,a6 as $,af as It,a0 as U,av as Vt,u as M,ad as te,K as Tt,a8 as Dt,s as Ct,aw as Q,m as E,ax as Se,X as ke,h as _e,aq as Oe,a as oe,ay as Bt,L as H,az as At,aA as Et,aB as $e,aC as re,aD as ee,aE as Y,F as W,x as we,z as Ie,y as Ft,aF as ie,aG as Z}from"./index-7PbpbQ3m.js";import{V as Lt,m as _t,u as Ot}from"./VAutocomplete-vJhkE555.js";import{m as X,e as de,u as _,R as $t,f as ve,V as Ne,c as Ge,d as Re,h as Nt,i as Gt,b as Rt,k as Mt,p as Ut,n as Ht,q as jt,r as zt,L as qt}from"./VContainer-pCmVzKO1.js";import{b as Kt,c as Wt,d as Jt,e as Xt,u as Qt,V as R}from"./VBtn-MMZykxrf.js";import{c as Yt}from"./forwardRefs-pxT7n5Zw.js";import{c as Me,u as Zt}from"./SaveButton.vue_vue_type_script_setup_true_lang-g3iElhOr.js";import{V as ea}from"./VSelect-47zr9-87.js";import{V as fe}from"./VCheckboxBtn-PVZYqgwb.js";import{m as ta,V as Ve}from"./VTable-kRywbN3P.js";import{V as aa}from"./VDivider-dEOj_3dR.js";function Te(e,l,a){return Object.keys(e).filter(t=>bt(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=s=>e[n](s,a(s)),t),{})}const ol=ht({__name:"SelectGroups",props:Pe({convention:{},organisation:{},chips:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},hint:{default:""},label:{},variant:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:Pe(["change"],["update:modelValue"]),setup(e,{emit:l}){const a=xt(e,"modelValue"),t=l,n=A([]),s=kt(),i=A([]),r=A([]),o=A(""),c=A(""),d=A(0),m=P(()=>[...i.value,...r.value].map(g=>({title:g.Name,value:n.value.find(p=>p.GroupUUID===g.GroupUUID)||g})));return typeof e.convention=="object"?(o.value=e.convention.ConventionUUID,c.value=e.convention.OrganisationUUID):o.value=e.convention||"",typeof e.organisation=="object"?c.value=e.organisation.OrganisationUUID:c.value.length===0&&(c.value=e.organisation||""),(async()=>{const f=[];o.value&&f.push(s.getConventionGroups(o.value)),c.value&&f.push(s.getOrganisationGroups(c.value));const g=await Promise.all(f);if(o.value&&c.value?(r.value=g[0].sort((p,y)=>p.Name.localeCompare(y.Name)),i.value=g[1].sort((p,y)=>p.Name.localeCompare(y.Name))):o.value&&g.length==1?r.value=g[0].sort((p,y)=>p.Name.localeCompare(y.Name)):c.value&&g.length==1&&(i.value=g[0].sort((p,y)=>p.Name.localeCompare(y.Name))),Array.isArray(a.value))d.value=2,m.value.forEach(p=>{Array.isArray(a.value)&&a.value.find(b=>b.GroupUUID===p.value.GroupUUID)&&n.value.push(p.value)});else if(typeof a.value=="string"){d.value=1;try{const p=JSON.parse(a.value);m.value.forEach(y=>{p.find(k=>k.GroupUUID===y.value.GroupUUID)&&n.value.push(y.value)})}catch{}}})(),ce(n,()=>{switch(d.value){default:case 2:{a.value=n.value,t("change");break}case 1:{a.value=JSON.stringify(n.value),t("change");break}}}),(f,g)=>(Pt(),St(Lt,{modelValue:n.value,"onUpdate:modelValue":g[0]||(g[0]=p=>n.value=p),chips:f.chips,multiple:"",label:f.label||"Tags",variant:f.variant||"solo",hint:f.hint,"persistent-hint":!0,clearable:f.clearable,items:m.value,"item-title":"title","item-value":"value"},null,8,["modelValue","chips","label","variant","hint","clearable","items"]))}}),J=Symbol.for("vuetify:v-expansion-panel"),la=["default","accordion","inset","popout"],na=V({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>la.includes(e)},readonly:Boolean,...X(),...Kt(),...de(),...Ee()},"VExpansionPanels"),rl=F()({name:"VExpansionPanels",props:na(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;Wt(e,J);const{themeClasses:t}=Fe(e),n=P(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return K({VExpansionPanel:{color:I(e,"color"),readonly:I(e,"readonly"),static:I(e,"static")}}),_(()=>v(e.tag,{class:["v-expansion-panels",t.value,n.value,e.class],style:e.style},a)),{}}}),sa=V({...X(),...Me()},"VExpansionPanelText"),oa=F()({name:"VExpansionPanelText",props:sa(),setup(e,l){let{slots:a}=l;const t=N(J);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:n,onAfterLeave:s}=Zt(e,t.isSelected);return _(()=>v(Yt,{onAfterLeave:s},{default:()=>{var i;return[Le(v("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&n.value&&v("div",{class:"v-expansion-panel-text__wrapper"},[(i=a.default)==null?void 0:i.call(a)])]),[[wt,t.isSelected.value]])]}})),{}}}),Ue=V({color:String,expandIcon:{type:$,default:"$expand"},collapseIcon:{type:$,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...X()},"VExpansionPanelTitle"),ra=F()({name:"VExpansionPanelTitle",directives:{Ripple:$t},props:Ue(),setup(e,l){let{slots:a}=l;const t=N(J);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:n,backgroundColorStyles:s}=ve(e,"color"),i=P(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return _(()=>{var r;return Le(v("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value,"v-expansion-panel-title--static":e.static},n.value,e.class],style:[s.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[v("span",{class:"v-expansion-panel-title__overlay"},null),(r=a.default)==null?void 0:r.call(a,i.value),!e.hideActions&&v("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(i.value):v(Ne,{icon:t.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[It("ripple"),e.ripple]])}),{}}}),ia=V({title:String,text:String,bgColor:String,...X(),...Ge(),...Jt(),...Me(),...Re(),...de(),...Ue()},"VExpansionPanel"),il=F()({name:"VExpansionPanel",props:ia(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:a}=l;const t=Xt(e,J),{backgroundColorClasses:n,backgroundColorStyles:s}=ve(e,"bgColor"),{elevationClasses:i}=Nt(e),{roundedClasses:r}=Gt(e),o=P(()=>(t==null?void 0:t.disabled.value)||e.disabled),c=P(()=>t.group.items.value.reduce((u,f,g)=>(t.group.selected.value.includes(f.id)&&u.push(g),u),[])),d=P(()=>{const u=t.group.items.value.findIndex(f=>f.id===t.id);return!t.isSelected.value&&c.value.some(f=>f-u===1)}),m=P(()=>{const u=t.group.items.value.findIndex(f=>f.id===t.id);return!t.isSelected.value&&c.value.some(f=>f-u===-1)});return U(J,t),K({VExpansionPanelText:{eager:I(e,"eager")},VExpansionPanelTitle:{readonly:I(e,"readonly")}}),_(()=>{const u=!!(a.text||e.text),f=!!(a.title||e.title);return v(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":d.value,"v-expansion-panel--after-active":m.value,"v-expansion-panel--disabled":o.value},r.value,n.value,e.class],style:[s.value,e.style]},{default:()=>{var g;return[v("div",{class:["v-expansion-panel__shadow",...i.value]},null),f&&v(ra,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),u&&v(oa,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(g=a.default)==null?void 0:g.call(a)]}})}),{}}});function ua(){const e=A([]);Vt(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const ca=V({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:$,default:"$first"},prevIcon:{type:$,default:"$prev"},nextIcon:{type:$,default:"$next"},lastIcon:{type:$,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Rt(),...X(),...Mt(),...Ge(),...Re(),...Ut(),...de({tag:"nav"}),...Ee(),...Ht({variant:"text"})},"VPagination"),De=F()({name:"VPagination",props:ca(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=M(e,"modelValue"),{t:s,n:i}=te(),{isRtl:r}=Tt(),{themeClasses:o}=Fe(e),{width:c}=Dt(),d=Ct(-1);K(void 0,{scoped:!0});const{resizeRef:m}=Qt(h=>{if(!h.length)return;const{target:S,contentRect:w}=h[0],D=S.querySelector(".v-pagination__list > *");if(!D)return;const B=w.width,G=D.offsetWidth+parseFloat(getComputedStyle(D).marginRight)*2;d.value=p(B,G)}),u=P(()=>parseInt(e.length,10)),f=P(()=>parseInt(e.start,10)),g=P(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):d.value>=0?d.value:p(c.value,58));function p(h,S){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((h-S*w)/S).toFixed(2)))}const y=P(()=>{if(u.value<=0||isNaN(u.value)||u.value>Number.MAX_SAFE_INTEGER)return[];if(g.value<=0)return[];if(g.value===1)return[n.value];if(u.value<=g.value)return Q(u.value,f.value);const h=g.value%2===0,S=h?g.value/2:Math.floor(g.value/2),w=h?S:S+1,D=u.value-S;if(w-n.value>=0)return[...Q(Math.max(1,g.value-1),f.value),e.ellipsis,u.value];if(n.value-D>=(h?1:0)){const B=g.value-1,G=u.value-B+f.value;return[f.value,e.ellipsis,...Q(B,G)]}else{const B=Math.max(1,g.value-3),G=B===1?n.value:n.value-Math.ceil(B/2)+f.value;return[f.value,e.ellipsis,...Q(B,G),e.ellipsis,u.value]}});function b(h,S,w){h.preventDefault(),n.value=S,w&&t(w,S)}const{refs:k,updateRef:T}=ua();K({VPaginationBtn:{color:I(e,"color"),border:I(e,"border"),density:I(e,"density"),size:I(e,"size"),variant:I(e,"variant"),rounded:I(e,"rounded"),elevation:I(e,"elevation")}});const x=P(()=>y.value.map((h,S)=>{const w=D=>T(D,S);if(typeof h=="string")return{isActive:!1,key:`ellipsis-${S}`,page:h,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const D=h===n.value;return{isActive:D,key:h,page:i(h),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:D?e.activeColor:e.color,"aria-current":D,"aria-label":s(D?e.currentPageAriaLabel:e.pageAriaLabel,h),onClick:B=>b(B,h)}}}})),C=P(()=>{const h=!!e.disabled||n.value<=f.value,S=!!e.disabled||n.value>=f.value+u.value-1;return{first:e.showFirstLastPage?{icon:r.value?e.lastIcon:e.firstIcon,onClick:w=>b(w,f.value,"first"),disabled:h,"aria-label":s(e.firstAriaLabel),"aria-disabled":h}:void 0,prev:{icon:r.value?e.nextIcon:e.prevIcon,onClick:w=>b(w,n.value-1,"prev"),disabled:h,"aria-label":s(e.previousAriaLabel),"aria-disabled":h},next:{icon:r.value?e.prevIcon:e.nextIcon,onClick:w=>b(w,n.value+1,"next"),disabled:S,"aria-label":s(e.nextAriaLabel),"aria-disabled":S},last:e.showFirstLastPage?{icon:r.value?e.firstIcon:e.lastIcon,onClick:w=>b(w,f.value+u.value-1,"last"),disabled:S,"aria-label":s(e.lastAriaLabel),"aria-disabled":S}:void 0}});function O(){var S;const h=n.value-f.value;(S=k.value[h])==null||S.$el.focus()}function j(h){h.key===Se.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,ke(O)):h.key===Se.right&&!e.disabled&&n.value<f.value+u.value-1&&(n.value=n.value+1,ke(O))}return _(()=>v(e.tag,{ref:m,class:["v-pagination",o.value,e.class],style:e.style,role:"navigation","aria-label":s(e.ariaLabel),onKeydown:j,"data-test":"v-pagination-root"},{default:()=>[v("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&v("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(C.value.first):v(R,E({_as:"VPaginationBtn"},C.value.first),null)]),v("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(C.value.prev):v(R,E({_as:"VPaginationBtn"},C.value.prev),null)]),x.value.map((h,S)=>v("li",{key:h.key,class:["v-pagination__item",{"v-pagination__item--is-active":h.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(h):v(R,E({_as:"VPaginationBtn"},h.props),{default:()=>[h.page]})])),v("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(C.value.next):v(R,E({_as:"VPaginationBtn"},C.value.next),null)]),e.showFirstLastPage&&v("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(C.value.last):v(R,E({_as:"VPaginationBtn"},C.value.last),null)])])]})),{}}}),da=V({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),He=Symbol.for("vuetify:data-table-pagination");function va(e){const l=M(e,"page",void 0,t=>+(t??1)),a=M(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function fa(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=P(()=>a.value===-1?0:a.value*(l.value-1)),s=P(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),i=P(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));_e(()=>{l.value>i.value&&(l.value=i.value)});function r(u){a.value=u,l.value=1}function o(){l.value=oe(l.value+1,1,i.value)}function c(){l.value=oe(l.value-1,1,i.value)}function d(u){l.value=oe(u,1,i.value)}const m={page:l,itemsPerPage:a,startIndex:n,stopIndex:s,pageCount:i,itemsLength:t,nextPage:o,prevPage:c,setPage:d,setItemsPerPage:r};return U(He,m),m}function ga(){const e=N(He);if(!e)throw new Error("Missing pagination!");return e}function ma(e){const l=Oe("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:s}=e,i=P(()=>s.value<=0?a.value:a.value.slice(t.value,n.value));return ce(i,r=>{l.emit("update:currentItems",r)}),{paginatedItems:i}}const je=V({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Ce=F()({name:"VDataTableFooter",props:je(),setup(e,l){let{slots:a}=l;const{t}=te(),{page:n,pageCount:s,startIndex:i,stopIndex:r,itemsLength:o,itemsPerPage:c,setItemsPerPage:d}=ga(),m=P(()=>e.itemsPerPageOptions.map(u=>typeof u=="number"?{value:u,title:u===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(u)}:{...u,title:t(u.title)}));return _(()=>{var f;const u=De.filterProps(e);return v("div",{class:"v-data-table-footer"},[(f=a.prepend)==null?void 0:f.call(a),v("div",{class:"v-data-table-footer__items-per-page"},[v("span",null,[t(e.itemsPerPageText)]),v(ea,{items:m.value,modelValue:c.value,"onUpdate:modelValue":g=>d(Number(g)),density:"compact",variant:"outlined","hide-details":!0},null)]),v("div",{class:"v-data-table-footer__info"},[v("div",null,[t(e.pageText,o.value?i.value+1:0,r.value,o.value)])]),v("div",{class:"v-data-table-footer__pagination"},[v(De,E({modelValue:n.value,"onUpdate:modelValue":g=>n.value=g,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:s.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},u),null)])])}),{}}}),ge=Bt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return v(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:H(e.height),width:H(e.width),left:H(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),pa=V({headers:Array},"DataTable-header"),ze=Symbol.for("vuetify:data-table-headers"),qe={title:"",sortable:!1},ya={...qe,width:48};function ba(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let s=0;s<l.length;s++)if(l[s].priority>t){l.splice(s,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function ue(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)ue(a,l);return l}function Ke(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&Ke(a.children,l);return l}function ha(e){if(e.key){if(e.key==="data-table-group")return qe;if(["data-table-expand","data-table-select"].includes(e.key))return ya}}function me(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>me(a,l+1))):l}function xa(e){let l=!1;function a(s){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s)if(i&&(s.fixed=!0),s.fixed)if(s.children)for(let r=s.children.length-1;r>=0;r--)a(s.children[r],!0);else l?isNaN(+s.width)&&Et(`Multiple fixed columns should have a static width (key: ${s.key})`):s.lastFixed=!0,l=!0;else if(s.children)for(let r=s.children.length-1;r>=0;r--)a(s.children[r]);else l=!1}for(let s=e.length-1;s>=0;s--)a(e[s]);function t(s){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!s)return i;if(s.children){s.fixedOffset=i;for(const r of s.children)i=t(r,i)}else s.fixed&&(s.fixedOffset=i,i+=parseFloat(s.width||"0")||0);return i}let n=0;for(const s of e)n=t(s,n)}function Pa(e,l){const a=[];let t=0;const n=ba(e);for(;n.size()>0;){let i=n.count();const r=[];let o=1;for(;i>0;){const{element:c,priority:d}=n.dequeue(),m=l-t-me(c);if(r.push({...c,rowspan:m??1,colspan:c.children?ue(c).length:1}),c.children)for(const u of c.children){const f=d%1+o/Math.pow(10,t+2);n.enqueue(u,t+m+f)}o+=1,i-=1}t+=1,a.push(r)}return{columns:e.map(i=>ue(i)).flat(),headers:a}}function We(e){const l=[];for(const a of e){const t={...ha(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),s=t.value??n??null,i={...t,key:n,value:s,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?We(t.children):void 0};l.push(i)}return l}function Sa(e,l){const a=A([]),t=A([]),n=A(),s=A();_e(()=>{var g,p,y;const o=(e.headers||Object.keys(e.items[0]??{}).map(b=>({key:b,title:At(b)}))).slice(),c=Ke(o);(g=l==null?void 0:l.groupBy)!=null&&g.value.length&&!c.has("data-table-group")&&o.unshift({key:"data-table-group",title:"Group"}),(p=l==null?void 0:l.showSelect)!=null&&p.value&&!c.has("data-table-select")&&o.unshift({key:"data-table-select"}),(y=l==null?void 0:l.showExpand)!=null&&y.value&&!c.has("data-table-expand")&&o.push({key:"data-table-expand"});const d=We(o);xa(d);const m=Math.max(...d.map(b=>me(b)))+1,u=Pa(d,m);a.value=u.headers,t.value=u.columns;const f=u.headers.flat(1);n.value=f.reduce((b,k)=>(k.sortable&&k.key&&k.sort&&(b[k.key]=k.sort),b),{}),s.value=f.reduce((b,k)=>(k.key&&k.filter&&(b[k.key]=k.filter),b),{})});const i={headers:a,columns:t,sortFunctions:n,filterFunctions:s};return U(ze,i),i}function ae(){const e=N(ze);if(!e)throw new Error("Missing headers!");return e}const ka={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Je={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return Je.select({items:a,value:l,selected:t})}},Xe={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return Xe.select({items:a,value:l,selected:t})}},wa=V({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:$e}},"DataTable-select"),Qe=Symbol.for("vuetify:data-table-selection");function Ia(e,l){let{allItems:a,currentPage:t}=l;const n=M(e,"modelValue",e.modelValue,y=>new Set(re(y).map(b=>{var k;return((k=a.value.find(T=>e.valueComparator(b,T.value)))==null?void 0:k.value)??b})),y=>[...y.values()]),s=P(()=>a.value.filter(y=>y.selectable)),i=P(()=>t.value.filter(y=>y.selectable)),r=P(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ka;case"all":return Xe;case"page":default:return Je}});function o(y){return re(y).every(b=>n.value.has(b.value))}function c(y){return re(y).some(b=>n.value.has(b.value))}function d(y,b){const k=r.value.select({items:y,value:b,selected:new Set(n.value)});n.value=k}function m(y){d([y],!o([y]))}function u(y){const b=r.value.selectAll({value:y,allItems:s.value,currentPage:i.value,selected:new Set(n.value)});n.value=b}const f=P(()=>n.value.size>0),g=P(()=>{const y=r.value.allSelected({allItems:s.value,currentPage:i.value});return!!y.length&&o(y)}),p={toggleSelect:m,select:d,selectAll:u,isSelected:o,isSomeSelected:c,someSelected:f,allSelected:g,showSelectAll:r.value.showSelectAll};return U(Qe,p),p}function le(){const e=N(Qe);if(!e)throw new Error("Missing selection!");return e}const Va=V({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Ye=Symbol.for("vuetify:data-table-sort");function Ta(e){const l=M(e,"sortBy"),a=I(e,"mustSort"),t=I(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function Da(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,s=o=>{if(o.key==null)return;let c=l.value.map(m=>({...m}))??[];const d=c.find(m=>m.key===o.key);d?d.order==="desc"?a.value?d.order="asc":c=c.filter(m=>m.key!==o.key):d.order="desc":t.value?c=[...c,{key:o.key,order:"asc"}]:c=[{key:o.key,order:"asc"}],l.value=c,n&&(n.value=1)};function i(o){return!!l.value.find(c=>c.key===o.key)}const r={sortBy:l,toggleSort:s,isSorted:i};return U(Ye,r),r}function Ca(){const e=N(Ye);if(!e)throw new Error("Missing sort!");return e}function Ba(e,l,a,t){const n=te();return{sortedItems:P(()=>a.value.length?Aa(l.value,a.value,n.current.value,{...e.customKeySort,...t==null?void 0:t.value}):l.value)}}function Aa(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((s,i)=>{for(let r=0;r<l.length;r++){const o=l[r].key,c=l[r].order??"asc";if(c===!1)continue;let d=ee(s.raw,o),m=ee(i.raw,o);if(c==="desc"&&([d,m]=[m,d]),t!=null&&t[o]){const u=t[o](d,m);if(!u)continue;return u}if(d instanceof Date&&m instanceof Date)return d.getTime()-m.getTime();if([d,m]=[d,m].map(u=>u!=null?u.toString().toLocaleLowerCase():u),d!==m)return Y(d)&&Y(m)?0:Y(d)?-1:Y(m)?1:!isNaN(d)&&!isNaN(m)?Number(d)-Number(m):n.compare(d,m)}return 0})}const Ze=V({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:$,default:"$sortAsc"},sortDescIcon:{type:$,default:"$sortDesc"},...jt()},"VDataTableHeaders"),Be=F()({name:"VDataTableHeaders",props:Ze(),setup(e,l){let{slots:a}=l;const{toggleSort:t,sortBy:n,isSorted:s}=Ca(),{someSelected:i,allSelected:r,selectAll:o,showSelectAll:c}=le(),{columns:d,headers:m}=ae(),{loaderClasses:u}=zt(e);function f(T,x){if(!(!e.sticky&&!T.fixed))return{position:"sticky",left:T.fixed?H(T.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${x})`:void 0}}function g(T){const x=n.value.find(C=>C.key===T.key);return x?x.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:p,backgroundColorStyles:y}=ve(e,"color"),b=P(()=>({headers:m.value,columns:d.value,toggleSort:t,isSorted:s,sortBy:n.value,someSelected:i.value,allSelected:r.value,selectAll:o,getSortIcon:g})),k=T=>{let{column:x,x:C,y:O}=T;const j=x.key==="data-table-select"||x.key==="data-table-expand";return v(ge,E({tag:"th",align:x.align,class:["v-data-table__th",{"v-data-table__th--sortable":x.sortable,"v-data-table__th--sorted":s(x),"v-data-table__th--fixed":x.fixed,"v-data-table__th--sticky":e.sticky},u.value],style:{width:H(x.width),minWidth:H(x.minWidth),...f(x,O)},colspan:x.colspan,rowspan:x.rowspan,onClick:x.sortable?()=>t(x):void 0,fixed:x.fixed,lastFixed:x.lastFixed,noPadding:j},x.headerProps),{default:()=>{var w;const h=`header.${x.key}`,S={column:x,selectAll:o,isSorted:s,toggleSort:t,sortBy:n.value,someSelected:i.value,allSelected:r.value,getSortIcon:g};return a[h]?a[h](S):x.key==="data-table-select"?((w=a["header.data-table-select"])==null?void 0:w.call(a,S))??(c&&v(fe,{modelValue:r.value,indeterminate:i.value&&!r.value,"onUpdate:modelValue":o},null)):v("div",{class:"v-data-table-header__content"},[v("span",null,[x.title]),x.sortable&&v(Ne,{key:"icon",class:"v-data-table-header__sort-icon",icon:g(x)},null),e.multiSort&&s(x)&&v("div",{key:"badge",class:["v-data-table-header__sort-badge",...p.value],style:y.value},[n.value.findIndex(D=>D.key===x.key)+1])])}})};_(()=>v(W,null,[a.headers?a.headers(b.value):m.value.map((T,x)=>v("tr",null,[T.map((C,O)=>v(k,{column:C,x:O,y:x},null))])),e.loading&&v("tr",{class:"v-data-table-progress"},[v("th",{colspan:d.value.length},[v(qt,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),Ea=V({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),et=Symbol.for("vuetify:data-table-group");function Fa(e){return{groupBy:M(e,"groupBy")}}function La(e){const{groupBy:l,sortBy:a}=e,t=A(new Set),n=P(()=>l.value.map(c=>({...c,order:c.order??!1})).concat(a.value));function s(c){return t.value.has(c.id)}function i(c){const d=new Set(t.value);s(c)?d.delete(c.id):d.add(c.id),t.value=d}function r(c){function d(m){const u=[];for(const f of m.items)"type"in f&&f.type==="group"?u.push(...d(f)):u.push(f);return u}return d({type:"group",items:c,id:"dummy",key:"dummy",value:"dummy",depth:0})}const o={sortByWithGroups:n,toggleGroup:i,opened:t,groupBy:l,extractRows:r,isGroupOpen:s};return U(et,o),o}function tt(){const e=N(et);if(!e)throw new Error("Missing group!");return e}function _a(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=ee(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function at(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=_a(e,l[0]),s=[],i=l.slice(1);return n.forEach((r,o)=>{const c=l[0],d=`${t}_${c}_${o}`;s.push({depth:a,id:d,key:c,value:o,items:i.length?at(r,i,a+1,d):r,type:"group"})}),s}function lt(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...lt(t.items,l))):a.push(t);return a}function Oa(e,l,a){return{flatItems:P(()=>{if(!l.value.length)return e.value;const n=at(e.value,l.value.map(s=>s.key));return lt(n,a.value)})}}const $a=V({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Na=F()({name:"VDataTableGroupHeaderRow",props:$a(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:s}=tt(),{isSelected:i,isSomeSelected:r,select:o}=le(),{columns:c}=ae(),d=P(()=>s([e.item]));return()=>v("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map(m=>{var u,f;if(m.key==="data-table-group"){const g=t(e.item)?"$expand":"$next",p=()=>n(e.item);return((u=a["data-table-group"])==null?void 0:u.call(a,{item:e.item,count:d.value.length,props:{icon:g,onClick:p}}))??v(ge,{class:"v-data-table-group-header-row__column"},{default:()=>[v(R,{size:"small",variant:"text",icon:g,onClick:p},null),v("span",null,[e.item.value]),v("span",null,[we("("),d.value.length,we(")")])]})}if(m.key==="data-table-select"){const g=i(d.value),p=r(d.value)&&!g,y=b=>o(d.value,b);return((f=a["data-table-select"])==null?void 0:f.call(a,{props:{modelValue:g,indeterminate:p,"onUpdate:modelValue":y}}))??v("td",null,[v(fe,{modelValue:g,indeterminate:p,"onUpdate:modelValue":y},null)])}return v("td",null,null)})])}}),Ga=V({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),nt=Symbol.for("vuetify:datatable:expanded");function Ra(e){const l=I(e,"expandOnClick"),a=M(e,"expanded",e.expanded,r=>new Set(r),r=>[...r.values()]);function t(r,o){const c=new Set(a.value);o?c.add(r.value):c.delete(r.value),a.value=c}function n(r){return a.value.has(r.value)}function s(r){t(r,!n(r))}const i={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:s};return U(nt,i),i}function st(){const e=N(nt);if(!e)throw new Error("foo");return e}const Ma=V({index:Number,item:Object,cellProps:[Object,Function],onClick:ie(),onContextmenu:ie(),onDblclick:ie()},"VDataTableRow"),Ua=F()({name:"VDataTableRow",props:Ma(),setup(e,l){let{slots:a}=l;const{isSelected:t,toggleSelect:n}=le(),{isExpanded:s,toggleExpand:i}=st(),{columns:r}=ae();_(()=>v("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&r.value.map((o,c)=>{const d=e.item,m=`item.${o.key}`,u={index:e.index,item:d.raw,internalItem:d,value:ee(d.columns,o.key),column:o,isSelected:t,toggleSelect:n,isExpanded:s,toggleExpand:i},f=typeof e.cellProps=="function"?e.cellProps({index:u.index,item:u.item,internalItem:u.internalItem,value:u.value,column:o}):e.cellProps,g=typeof o.cellProps=="function"?o.cellProps({index:u.index,item:u.item,internalItem:u.internalItem,value:u.value}):o.cellProps;return v(ge,E({align:o.align,fixed:o.fixed,fixedOffset:o.fixedOffset,lastFixed:o.lastFixed,noPadding:o.key==="data-table-select"||o.key==="data-table-expand",width:o.width},f,g),{default:()=>{var p,y;return a[m]?a[m](u):o.key==="data-table-select"?((p=a["item.data-table-select"])==null?void 0:p.call(a,u))??v(fe,{disabled:!d.selectable,modelValue:t([d]),onClick:Ie(()=>n(d),["stop"])},null):o.key==="data-table-expand"?((y=a["item.data-table-expand"])==null?void 0:y.call(a,u))??v(R,{icon:s(d)?"$collapse":"$expand",size:"small",variant:"text",onClick:Ie(()=>i(d),["stop"])},null):Ft(u.value)}})})]))}}),ot=V({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),Ae=F()({name:"VDataTableRows",inheritAttrs:!1,props:ot(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=ae(),{expandOnClick:s,toggleExpand:i,isExpanded:r}=st(),{isSelected:o,toggleSelect:c}=le(),{toggleGroup:d,isGroupOpen:m}=tt(),{t:u}=te();return _(()=>{var f,g;return e.loading&&(!e.items.length||t.loading)?v("tr",{class:"v-data-table-rows-loading",key:"loading"},[v("td",{colspan:n.value.length},[((f=t.loading)==null?void 0:f.call(t))??u(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?v("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[v("td",{colspan:n.value.length},[((g=t["no-data"])==null?void 0:g.call(t))??u(e.noDataText)])]):v(W,null,[e.items.map((p,y)=>{var T;if(p.type==="group"){const x={index:y,item:p,columns:n.value,isExpanded:r,toggleExpand:i,isSelected:o,toggleSelect:c,toggleGroup:d,isGroupOpen:m};return t["group-header"]?t["group-header"](x):v(Na,E({key:`group-header_${p.id}`,item:p},Te(a,":group-header",()=>x)),t)}const b={index:y,item:p.raw,internalItem:p,columns:n.value,isExpanded:r,toggleExpand:i,isSelected:o,toggleSelect:c},k={...b,props:E({key:`item_${p.key??p.index}`,onClick:s.value?()=>{i(p)}:void 0,index:y,item:p,cellProps:e.cellProps},Te(a,":row",()=>b),typeof e.rowProps=="function"?e.rowProps({item:b.item,index:b.index,internalItem:b.internalItem}):e.rowProps)};return v(W,{key:k.props.key},[t.item?t.item(k):v(Ua,k.props,t),r(p)&&((T=t["expanded-row"])==null?void 0:T.call(t,b))])})])}),{}}}),Ha=V({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function ja(e,l,a,t){const n=e.returnObject?l:Z(l,e.itemValue),s=Z(l,e.itemSelectable,!0),i=t.reduce((r,o)=>(o.key!=null&&(r[o.key]=Z(l,o.value)),r),{});return{type:"item",key:e.returnObject?Z(l,e.itemValue):n,index:a,value:n,selectable:s,columns:i,raw:l}}function za(e,l,a){return l.map((t,n)=>ja(e,t,n,a))}function qa(e,l){return{items:P(()=>za(e,e.items,l.value))}}function Ka(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:s}=e;const i=Oe("VDataTable"),r=P(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:s.value}));let o=null;ce(r,()=>{$e(o,r.value)||((o==null?void 0:o.search)!==r.value.search&&(l.value=1),i.emit("update:options",r.value),o=r.value)},{deep:!0,immediate:!0})}const Wa=V({...ot(),width:[String,Number],search:String,...Ga(),...Ea(),...pa(),...Ha(),...wa(),...Va(),...Ze(),...ta()},"DataTable"),Ja=V({...da(),...Wa(),..._t(),...je()},"VDataTable"),ul=F()({name:"VDataTable",props:Ja(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=Fa(e),{sortBy:s,multiSort:i,mustSort:r}=Ta(e),{page:o,itemsPerPage:c}=va(e),{columns:d,headers:m,sortFunctions:u,filterFunctions:f}=Sa(e,{groupBy:n,showSelect:I(e,"showSelect"),showExpand:I(e,"showExpand")}),{items:g}=qa(e,d),p=I(e,"search"),{filteredItems:y}=Ot(e,g,p,{transform:z=>z.columns,customKeyFilter:f}),{toggleSort:b}=Da({sortBy:s,multiSort:i,mustSort:r,page:o}),{sortByWithGroups:k,opened:T,extractRows:x,isGroupOpen:C,toggleGroup:O}=La({groupBy:n,sortBy:s}),{sortedItems:j}=Ba(e,y,k,u),{flatItems:h}=Oa(j,n,T),S=P(()=>h.value.length),{startIndex:w,stopIndex:D,pageCount:B,setItemsPerPage:G}=fa({page:o,itemsPerPage:c,itemsLength:S}),{paginatedItems:ne}=ma({items:h,startIndex:w,stopIndex:D,itemsPerPage:c}),se=P(()=>x(ne.value)),{isSelected:rt,select:it,selectAll:ut,toggleSelect:ct,someSelected:dt,allSelected:vt}=Ia(e,{allItems:g,currentPage:se}),{isExpanded:ft,toggleExpand:gt}=Ra(e);Ka({page:o,itemsPerPage:c,sortBy:s,groupBy:n,search:p}),K({VDataTableRows:{hideNoData:I(e,"hideNoData"),noDataText:I(e,"noDataText"),loading:I(e,"loading"),loadingText:I(e,"loadingText")}});const L=P(()=>({page:o.value,itemsPerPage:c.value,sortBy:s.value,pageCount:B.value,toggleSort:b,setItemsPerPage:G,someSelected:dt.value,allSelected:vt.value,isSelected:rt,select:it,selectAll:ut,toggleSelect:ct,isExpanded:ft,toggleExpand:gt,isGroupOpen:C,toggleGroup:O,items:se.value.map(z=>z.raw),internalItems:se.value,groupedItems:ne.value,columns:d.value,headers:m.value}));return _(()=>{const z=Ce.filterProps(e),mt=Be.filterProps(e),pt=Ae.filterProps(e),yt=Ve.filterProps(e);return v(Ve,E({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},yt),{top:()=>{var q;return(q=t.top)==null?void 0:q.call(t,L.value)},default:()=>{var q,pe,ye,be,he,xe;return t.default?t.default(L.value):v(W,null,[(q=t.colgroup)==null?void 0:q.call(t,L.value),v("thead",null,[v(Be,mt,t)]),(pe=t.thead)==null?void 0:pe.call(t,L.value),v("tbody",null,[(ye=t["body.prepend"])==null?void 0:ye.call(t,L.value),t.body?t.body(L.value):v(Ae,E(a,pt,{items:ne.value}),t),(be=t["body.append"])==null?void 0:be.call(t,L.value)]),(he=t.tbody)==null?void 0:he.call(t,L.value),(xe=t.tfoot)==null?void 0:xe.call(t,L.value)])},bottom:()=>t.bottom?t.bottom(L.value):v(W,null,[v(aa,null,null),v(Ce,z,{prepend:t["footer.prepend"]})])})}),{}}});export{rl as V,ol as _,il as a,ra as b,oa as c,ul as d,Wa as e,je as f,Fa as g,Ta as h,va as i,Sa as j,La as k,fa as l,da as m,Oa as n,Ia as o,Da as p,Ra as q,Ka as r,Ce as s,Be as t,qa as u,Ae as v,De as w};
