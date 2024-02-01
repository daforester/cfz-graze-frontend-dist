import{m as Q,e as de,u as L,R as mt,f as ce,V as _e,c as Be,d as Ee,h as yt,i as bt,b as pt,k as ht,p as xt,n as Pt,q as St,r as kt,L as wt}from"./VContainer-Mjx4hZYe.js";import{aw as Vt,p as I,I as Ae,d as E,J as Le,c as P,a7 as W,t as V,f as u,ai as O,ag as Fe,aj as It,a8 as $,ah as Tt,a6 as M,r as H,ax as Dt,u as G,af as te,K as Ct,aa as _t,s as Bt,ay as X,m as B,az as xe,Y as Pe,h as $e,a as re,aA as Et,L as j,aB as At,aC as Lt,aD as Oe,aE as oe,aF as ee,aG as Y,F as U,x as Se,z as ke,y as Ft,aH as ie,aI as Z,as as $t,w as Ot}from"./index-qMMSMCM7.js";import{b as Rt,c as Nt,d as Gt,e as Mt,u as Ht,V as N}from"./VBtn-_SrPDAHf.js";import{c as jt}from"./forwardRefs-VOG8AGQx.js";import{c as Re,u as zt}from"./SaveButton.vue_vue_type_script_setup_true_lang-iPzvmPLp.js";import{a as qt,m as Kt,u as Wt}from"./VAutocomplete-F5i5jSpp.js";import{V as fe}from"./VCheckboxBtn-s3UWZUBY.js";import{m as Ut,V as we}from"./VTable-yVihHPx4.js";import{V as Jt}from"./VDivider-iG52BNdP.js";function Ve(e,l,a){return Object.keys(e).filter(t=>Vt(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=s=>e[n](s,a(s)),t),{})}const J=Symbol.for("vuetify:v-expansion-panel"),Qt=["default","accordion","inset","popout"],Xt=I({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>Qt.includes(e)},readonly:Boolean,...Q(),...Rt(),...de(),...Ae()},"VExpansionPanels"),Ya=E()({name:"VExpansionPanels",props:Xt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;Nt(e,J);const{themeClasses:t}=Le(e),n=P(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return W({VExpansionPanel:{color:V(e,"color"),readonly:V(e,"readonly"),static:V(e,"static")}}),L(()=>u(e.tag,{class:["v-expansion-panels",t.value,n.value,e.class],style:e.style},a)),{}}}),Yt=I({...Q(),...Re()},"VExpansionPanelText"),Zt=E()({name:"VExpansionPanelText",props:Yt(),setup(e,l){let{slots:a}=l;const t=O(J);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:n,onAfterLeave:s}=zt(e,t.isSelected);return L(()=>u(jt,{onAfterLeave:s},{default:()=>{var d;return[Fe(u("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&n.value&&u("div",{class:"v-expansion-panel-text__wrapper"},[(d=a.default)==null?void 0:d.call(a)])]),[[It,t.isSelected.value]])]}})),{}}}),Ne=I({color:String,expandIcon:{type:$,default:"$expand"},collapseIcon:{type:$,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...Q()},"VExpansionPanelTitle"),ea=E()({name:"VExpansionPanelTitle",directives:{Ripple:mt},props:Ne(),setup(e,l){let{slots:a}=l;const t=O(J);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:n,backgroundColorStyles:s}=ce(e,"color"),d=P(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return L(()=>{var o;return Fe(u("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value,"v-expansion-panel-title--static":e.static},n.value,e.class],style:[s.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[u("span",{class:"v-expansion-panel-title__overlay"},null),(o=a.default)==null?void 0:o.call(a,d.value),!e.hideActions&&u("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(d.value):u(_e,{icon:t.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Tt("ripple"),e.ripple]])}),{}}}),ta=I({title:String,text:String,bgColor:String,...Q(),...Be(),...Gt(),...Re(),...Ee(),...de(),...Ne()},"VExpansionPanel"),Za=E()({name:"VExpansionPanel",props:ta(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:a}=l;const t=Mt(e,J),{backgroundColorClasses:n,backgroundColorStyles:s}=ce(e,"bgColor"),{elevationClasses:d}=yt(e),{roundedClasses:o}=bt(e),r=P(()=>(t==null?void 0:t.disabled.value)||e.disabled),f=P(()=>t.group.items.value.reduce((i,v,m)=>(t.group.selected.value.includes(v.id)&&i.push(m),i),[])),c=P(()=>{const i=t.group.items.value.findIndex(v=>v.id===t.id);return!t.isSelected.value&&f.value.some(v=>v-i===1)}),g=P(()=>{const i=t.group.items.value.findIndex(v=>v.id===t.id);return!t.isSelected.value&&f.value.some(v=>v-i===-1)});return M(J,t),W({VExpansionPanelText:{eager:V(e,"eager")},VExpansionPanelTitle:{readonly:V(e,"readonly")}}),L(()=>{const i=!!(a.text||e.text),v=!!(a.title||e.title);return u(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":c.value,"v-expansion-panel--after-active":g.value,"v-expansion-panel--disabled":r.value},o.value,n.value,e.class],style:[s.value,e.style]},{default:()=>{var m;return[u("div",{class:["v-expansion-panel__shadow",...d.value]},null),v&&u(ea,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),i&&u(Zt,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(m=a.default)==null?void 0:m.call(a)]}})}),{}}});function aa(){const e=H([]);Dt(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const la=I({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:$,default:"$first"},prevIcon:{type:$,default:"$prev"},nextIcon:{type:$,default:"$next"},lastIcon:{type:$,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...pt(),...Q(),...ht(),...Be(),...Ee(),...xt(),...de({tag:"nav"}),...Ae(),...Pt({variant:"text"})},"VPagination"),Ie=E()({name:"VPagination",props:la(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=G(e,"modelValue"),{t:s,n:d}=te(),{isRtl:o}=Ct(),{themeClasses:r}=Le(e),{width:f}=_t(),c=Bt(-1);W(void 0,{scoped:!0});const{resizeRef:g}=Ht(p=>{if(!p.length)return;const{target:S,contentRect:w}=p[0],D=S.querySelector(".v-pagination__list > *");if(!D)return;const _=w.width,R=D.offsetWidth+parseFloat(getComputedStyle(D).marginRight)*2;c.value=x(_,R)}),i=P(()=>parseInt(e.length,10)),v=P(()=>parseInt(e.start,10)),m=P(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):c.value>=0?c.value:x(f.value,58));function x(p,S){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((p-S*w)/S).toFixed(2)))}const y=P(()=>{if(i.value<=0||isNaN(i.value)||i.value>Number.MAX_SAFE_INTEGER)return[];if(m.value<=0)return[];if(m.value===1)return[n.value];if(i.value<=m.value)return X(i.value,v.value);const p=m.value%2===0,S=p?m.value/2:Math.floor(m.value/2),w=p?S:S+1,D=i.value-S;if(w-n.value>=0)return[...X(Math.max(1,m.value-1),v.value),e.ellipsis,i.value];if(n.value-D>=(p?1:0)){const _=m.value-1,R=i.value-_+v.value;return[v.value,e.ellipsis,...X(_,R)]}else{const _=Math.max(1,m.value-3),R=_===1?n.value:n.value-Math.ceil(_/2)+v.value;return[v.value,e.ellipsis,...X(_,R),e.ellipsis,i.value]}});function b(p,S,w){p.preventDefault(),n.value=S,w&&t(w,S)}const{refs:k,updateRef:T}=aa();W({VPaginationBtn:{color:V(e,"color"),border:V(e,"border"),density:V(e,"density"),size:V(e,"size"),variant:V(e,"variant"),rounded:V(e,"rounded"),elevation:V(e,"elevation")}});const h=P(()=>y.value.map((p,S)=>{const w=D=>T(D,S);if(typeof p=="string")return{isActive:!1,key:`ellipsis-${S}`,page:p,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const D=p===n.value;return{isActive:D,key:p,page:d(p),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:D?e.activeColor:e.color,ariaCurrent:D,ariaLabel:s(D?e.currentPageAriaLabel:e.pageAriaLabel,p),onClick:_=>b(_,p)}}}})),C=P(()=>{const p=!!e.disabled||n.value<=v.value,S=!!e.disabled||n.value>=v.value+i.value-1;return{first:e.showFirstLastPage?{icon:o.value?e.lastIcon:e.firstIcon,onClick:w=>b(w,v.value,"first"),disabled:p,ariaLabel:s(e.firstAriaLabel),ariaDisabled:p}:void 0,prev:{icon:o.value?e.nextIcon:e.prevIcon,onClick:w=>b(w,n.value-1,"prev"),disabled:p,ariaLabel:s(e.previousAriaLabel),ariaDisabled:p},next:{icon:o.value?e.prevIcon:e.nextIcon,onClick:w=>b(w,n.value+1,"next"),disabled:S,ariaLabel:s(e.nextAriaLabel),ariaDisabled:S},last:e.showFirstLastPage?{icon:o.value?e.firstIcon:e.lastIcon,onClick:w=>b(w,v.value+i.value-1,"last"),disabled:S,ariaLabel:s(e.lastAriaLabel),ariaDisabled:S}:void 0}});function F(){var S;const p=n.value-v.value;(S=k.value[p])==null||S.$el.focus()}function z(p){p.key===xe.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,Pe(F)):p.key===xe.right&&!e.disabled&&n.value<v.value+i.value-1&&(n.value=n.value+1,Pe(F))}return L(()=>u(e.tag,{ref:g,class:["v-pagination",r.value,e.class],style:e.style,role:"navigation","aria-label":s(e.ariaLabel),onKeydown:z,"data-test":"v-pagination-root"},{default:()=>[u("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&u("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(C.value.first):u(N,B({_as:"VPaginationBtn"},C.value.first),null)]),u("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(C.value.prev):u(N,B({_as:"VPaginationBtn"},C.value.prev),null)]),h.value.map((p,S)=>u("li",{key:p.key,class:["v-pagination__item",{"v-pagination__item--is-active":p.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(p):u(N,B({_as:"VPaginationBtn"},p.props),{default:()=>[p.page]})])),u("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(C.value.next):u(N,B({_as:"VPaginationBtn"},C.value.next),null)]),e.showFirstLastPage&&u("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(C.value.last):u(N,B({_as:"VPaginationBtn"},C.value.last),null)])])]})),{}}}),na=I({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Ge=Symbol.for("vuetify:data-table-pagination");function sa(e){const l=G(e,"page",void 0,t=>+(t??1)),a=G(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function ra(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=P(()=>a.value===-1?0:a.value*(l.value-1)),s=P(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),d=P(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));$e(()=>{l.value>d.value&&(l.value=d.value)});function o(i){a.value=i,l.value=1}function r(){l.value=re(l.value+1,1,d.value)}function f(){l.value=re(l.value-1,1,d.value)}function c(i){l.value=re(i,1,d.value)}const g={page:l,itemsPerPage:a,startIndex:n,stopIndex:s,pageCount:d,itemsLength:t,nextPage:r,prevPage:f,setPage:c,setItemsPerPage:o};return M(Ge,g),g}function oa(){const e=O(Ge);if(!e)throw new Error("Missing pagination!");return e}function ia(e){const{items:l,startIndex:a,stopIndex:t,itemsPerPage:n}=e;return{paginatedItems:P(()=>n.value<=0?l.value:l.value.slice(a.value,t.value))}}const Me=I({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Te=E()({name:"VDataTableFooter",props:Me(),setup(e,l){let{slots:a}=l;const{t}=te(),{page:n,pageCount:s,startIndex:d,stopIndex:o,itemsLength:r,itemsPerPage:f,setItemsPerPage:c}=oa(),g=P(()=>e.itemsPerPageOptions.map(i=>typeof i=="number"?{value:i,title:i===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(i)}:{...i,title:t(i.title)}));return L(()=>{var v;const i=Ie.filterProps(e);return u("div",{class:"v-data-table-footer"},[(v=a.prepend)==null?void 0:v.call(a),u("div",{class:"v-data-table-footer__items-per-page"},[u("span",null,[t(e.itemsPerPageText)]),u(qt,{items:g.value,modelValue:f.value,"onUpdate:modelValue":m=>c(Number(m)),density:"compact",variant:"outlined","hide-details":!0},null)]),u("div",{class:"v-data-table-footer__info"},[u("div",null,[t(e.pageText,r.value?d.value+1:0,o.value,r.value)])]),u("div",{class:"v-data-table-footer__pagination"},[u(Ie,B({modelValue:n.value,"onUpdate:modelValue":m=>n.value=m,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:s.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},i),null)])])}),{}}}),ve=Et({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return u(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:j(e.height),width:j(e.width),left:j(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),ua=I({headers:Array},"DataTable-header"),He=Symbol.for("vuetify:data-table-headers"),je={title:"",sortable:!1},da={...je,width:48};function ca(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let s=0;s<l.length;s++)if(l[s].priority>t){l.splice(s,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function ue(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)ue(a,l);return l}function ze(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&ze(a.children,l);return l}function fa(e){if(e.key){if(e.key==="data-table-group")return je;if(["data-table-expand","data-table-select"].includes(e.key))return da}}function ge(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>ge(a,l+1))):l}function va(e){let l=!1;function a(s){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s)if(d&&(s.fixed=!0),s.fixed)if(s.children)for(let o=s.children.length-1;o>=0;o--)a(s.children[o],!0);else l?isNaN(+s.width)&&Lt(`Multiple fixed columns should have a static width (key: ${s.key})`):s.lastFixed=!0,l=!0;else if(s.children)for(let o=s.children.length-1;o>=0;o--)a(s.children[o]);else l=!1}for(let s=e.length-1;s>=0;s--)a(e[s]);function t(s){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!s)return d;if(s.children){s.fixedOffset=d;for(const o of s.children)d=t(o,d)}else s.fixed&&(s.fixedOffset=d,d+=parseFloat(s.width||"0")||0);return d}let n=0;for(const s of e)n=t(s,n)}function ga(e,l){const a=[];let t=0;const n=ca(e);for(;n.size()>0;){let d=n.count();const o=[];let r=1;for(;d>0;){const{element:f,priority:c}=n.dequeue(),g=l-t-ge(f);if(o.push({...f,rowspan:g??1,colspan:f.children?ue(f).length:1}),f.children)for(const i of f.children){const v=c%1+r/Math.pow(10,t+2);n.enqueue(i,t+g+v)}r+=1,d-=1}t+=1,a.push(o)}return{columns:e.map(d=>ue(d)).flat(),headers:a}}function qe(e){const l=[];for(const a of e){const t={...fa(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),s=t.value??n??null,d={...t,key:n,value:s,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?qe(t.children):void 0};l.push(d)}return l}function ma(e,l){const a=H([]),t=H([]),n=H(),s=H();$e(()=>{var m,x,y;const r=(e.headers||Object.keys(e.items[0]??{}).map(b=>({key:b,title:At(b)}))).slice(),f=ze(r);(m=l==null?void 0:l.groupBy)!=null&&m.value.length&&!f.has("data-table-group")&&r.unshift({key:"data-table-group",title:"Group"}),(x=l==null?void 0:l.showSelect)!=null&&x.value&&!f.has("data-table-select")&&r.unshift({key:"data-table-select"}),(y=l==null?void 0:l.showExpand)!=null&&y.value&&!f.has("data-table-expand")&&r.push({key:"data-table-expand"});const c=qe(r);va(c);const g=Math.max(...c.map(b=>ge(b)))+1,i=ga(c,g);a.value=i.headers,t.value=i.columns;const v=i.headers.flat(1);n.value=v.reduce((b,k)=>(k.sortable&&k.key&&k.sort&&(b[k.key]=k.sort),b),{}),s.value=v.reduce((b,k)=>(k.key&&k.filter&&(b[k.key]=k.filter),b),{})});const d={headers:a,columns:t,sortFunctions:n,filterFunctions:s};return M(He,d),d}function ae(){const e=O(He);if(!e)throw new Error("Missing headers!");return e}const ya={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Ke={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return Ke.select({items:a,value:l,selected:t})}},We={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return We.select({items:a,value:l,selected:t})}},ba=I({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Oe}},"DataTable-select"),Ue=Symbol.for("vuetify:data-table-selection");function pa(e,l){let{allItems:a,currentPage:t}=l;const n=G(e,"modelValue",e.modelValue,y=>new Set(oe(y).map(b=>{var k;return((k=a.value.find(T=>e.valueComparator(b,T.value)))==null?void 0:k.value)??b})),y=>[...y.values()]),s=P(()=>a.value.filter(y=>y.selectable)),d=P(()=>t.value.filter(y=>y.selectable)),o=P(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ya;case"all":return We;case"page":default:return Ke}});function r(y){return oe(y).every(b=>n.value.has(b.value))}function f(y){return oe(y).some(b=>n.value.has(b.value))}function c(y,b){const k=o.value.select({items:y,value:b,selected:new Set(n.value)});n.value=k}function g(y){c([y],!r([y]))}function i(y){const b=o.value.selectAll({value:y,allItems:s.value,currentPage:d.value,selected:new Set(n.value)});n.value=b}const v=P(()=>n.value.size>0),m=P(()=>{const y=o.value.allSelected({allItems:s.value,currentPage:d.value});return!!y.length&&r(y)}),x={toggleSelect:g,select:c,selectAll:i,isSelected:r,isSomeSelected:f,someSelected:v,allSelected:m,showSelectAll:o.value.showSelectAll};return M(Ue,x),x}function le(){const e=O(Ue);if(!e)throw new Error("Missing selection!");return e}const ha=I({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Je=Symbol.for("vuetify:data-table-sort");function xa(e){const l=G(e,"sortBy"),a=V(e,"mustSort"),t=V(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function Pa(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,s=r=>{if(r.key==null)return;let f=l.value.map(g=>({...g}))??[];const c=f.find(g=>g.key===r.key);c?c.order==="desc"?a.value?c.order="asc":f=f.filter(g=>g.key!==r.key):c.order="desc":t.value?f=[...f,{key:r.key,order:"asc"}]:f=[{key:r.key,order:"asc"}],l.value=f,n&&(n.value=1)};function d(r){return!!l.value.find(f=>f.key===r.key)}const o={sortBy:l,toggleSort:s,isSorted:d};return M(Je,o),o}function Sa(){const e=O(Je);if(!e)throw new Error("Missing sort!");return e}function ka(e,l,a,t){const n=te();return{sortedItems:P(()=>a.value.length?wa(l.value,a.value,n.current.value,{...e.customKeySort,...t==null?void 0:t.value}):l.value)}}function wa(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((s,d)=>{for(let o=0;o<l.length;o++){const r=l[o].key,f=l[o].order??"asc";if(f===!1)continue;let c=ee(s.raw,r),g=ee(d.raw,r);if(f==="desc"&&([c,g]=[g,c]),t!=null&&t[r]){const i=t[r](c,g);if(!i)continue;return i}if(c instanceof Date&&g instanceof Date)return c.getTime()-g.getTime();if([c,g]=[c,g].map(i=>i!=null?i.toString().toLocaleLowerCase():i),c!==g)return Y(c)&&Y(g)?0:Y(c)?-1:Y(g)?1:!isNaN(c)&&!isNaN(g)?Number(c)-Number(g):n.compare(c,g)}return 0})}const Qe=I({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:$,default:"$sortAsc"},sortDescIcon:{type:$,default:"$sortDesc"},...St()},"VDataTableHeaders"),De=E()({name:"VDataTableHeaders",props:Qe(),setup(e,l){let{slots:a}=l;const{toggleSort:t,sortBy:n,isSorted:s}=Sa(),{someSelected:d,allSelected:o,selectAll:r,showSelectAll:f}=le(),{columns:c,headers:g}=ae(),{loaderClasses:i}=kt(e);function v(T,h){if(!(!e.sticky&&!T.fixed))return{position:"sticky",left:T.fixed?j(T.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${h})`:void 0}}function m(T){const h=n.value.find(C=>C.key===T.key);return h?h.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:x,backgroundColorStyles:y}=ce(e,"color"),b=P(()=>({headers:g.value,columns:c.value,toggleSort:t,isSorted:s,sortBy:n.value,someSelected:d.value,allSelected:o.value,selectAll:r,getSortIcon:m})),k=T=>{let{column:h,x:C,y:F}=T;const z=h.key==="data-table-select"||h.key==="data-table-expand";return u(ve,B({tag:"th",align:h.align,class:["v-data-table__th",{"v-data-table__th--sortable":h.sortable,"v-data-table__th--sorted":s(h),"v-data-table__th--fixed":h.fixed,"v-data-table__th--sticky":e.sticky},i.value],style:{width:j(h.width),minWidth:j(h.minWidth),...v(h,F)},colspan:h.colspan,rowspan:h.rowspan,onClick:h.sortable?()=>t(h):void 0,fixed:h.fixed,lastFixed:h.lastFixed,noPadding:z},h.headerProps),{default:()=>{var w;const p=`header.${h.key}`,S={column:h,selectAll:r,isSorted:s,toggleSort:t,sortBy:n.value,someSelected:d.value,allSelected:o.value,getSortIcon:m};return a[p]?a[p](S):h.key==="data-table-select"?((w=a["header.data-table-select"])==null?void 0:w.call(a,S))??(f&&u(fe,{modelValue:o.value,indeterminate:d.value&&!o.value,"onUpdate:modelValue":r},null)):u("div",{class:"v-data-table-header__content"},[u("span",null,[h.title]),h.sortable&&u(_e,{key:"icon",class:"v-data-table-header__sort-icon",icon:m(h)},null),e.multiSort&&s(h)&&u("div",{key:"badge",class:["v-data-table-header__sort-badge",...x.value],style:y.value},[n.value.findIndex(D=>D.key===h.key)+1])])}})};L(()=>u(U,null,[a.headers?a.headers(b.value):g.value.map((T,h)=>u("tr",null,[T.map((C,F)=>u(k,{column:C,x:F,y:h},null))])),e.loading&&u("tr",{class:"v-data-table-progress"},[u("th",{colspan:c.value.length},[u(wt,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),Va=I({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Xe=Symbol.for("vuetify:data-table-group");function Ia(e){return{groupBy:G(e,"groupBy")}}function Ta(e){const{groupBy:l,sortBy:a}=e,t=H(new Set),n=P(()=>l.value.map(f=>({...f,order:f.order??!1})).concat(a.value));function s(f){return t.value.has(f.id)}function d(f){const c=new Set(t.value);s(f)?c.delete(f.id):c.add(f.id),t.value=c}function o(f){function c(g){const i=[];for(const v of g.items)"type"in v&&v.type==="group"?i.push(...c(v)):i.push(v);return i}return c({type:"group",items:f,id:"dummy",key:"dummy",value:"dummy",depth:0})}const r={sortByWithGroups:n,toggleGroup:d,opened:t,groupBy:l,extractRows:o,isGroupOpen:s};return M(Xe,r),r}function Ye(){const e=O(Xe);if(!e)throw new Error("Missing group!");return e}function Da(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=ee(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function Ze(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=Da(e,l[0]),s=[],d=l.slice(1);return n.forEach((o,r)=>{const f=l[0],c=`${t}_${f}_${r}`;s.push({depth:a,id:c,key:f,value:r,items:d.length?Ze(o,d,a+1,c):o,type:"group"})}),s}function et(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...et(t.items,l))):a.push(t);return a}function Ca(e,l,a){return{flatItems:P(()=>{if(!l.value.length)return e.value;const n=Ze(e.value,l.value.map(s=>s.key));return et(n,a.value)})}}const _a=I({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Ba=E()({name:"VDataTableGroupHeaderRow",props:_a(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:s}=Ye(),{isSelected:d,isSomeSelected:o,select:r}=le(),{columns:f}=ae(),c=P(()=>s([e.item]));return()=>u("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[f.value.map(g=>{var i,v;if(g.key==="data-table-group"){const m=t(e.item)?"$expand":"$next",x=()=>n(e.item);return((i=a["data-table-group"])==null?void 0:i.call(a,{item:e.item,count:c.value.length,props:{icon:m,onClick:x}}))??u(ve,{class:"v-data-table-group-header-row__column"},{default:()=>[u(N,{size:"small",variant:"text",icon:m,onClick:x},null),u("span",null,[e.item.value]),u("span",null,[Se("("),c.value.length,Se(")")])]})}if(g.key==="data-table-select"){const m=d(c.value),x=o(c.value)&&!m,y=b=>r(c.value,b);return((v=a["data-table-select"])==null?void 0:v.call(a,{props:{modelValue:m,indeterminate:x,"onUpdate:modelValue":y}}))??u("td",null,[u(fe,{modelValue:m,indeterminate:x,"onUpdate:modelValue":y},null)])}return u("td",null,null)})])}}),Ea=I({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),tt=Symbol.for("vuetify:datatable:expanded");function Aa(e){const l=V(e,"expandOnClick"),a=G(e,"expanded",e.expanded,o=>new Set(o),o=>[...o.values()]);function t(o,r){const f=new Set(a.value);r?f.add(o.value):f.delete(o.value),a.value=f}function n(o){return a.value.has(o.value)}function s(o){t(o,!n(o))}const d={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:s};return M(tt,d),d}function at(){const e=O(tt);if(!e)throw new Error("foo");return e}const La=I({index:Number,item:Object,cellProps:[Object,Function],onClick:ie(),onContextmenu:ie(),onDblclick:ie()},"VDataTableRow"),Fa=E()({name:"VDataTableRow",props:La(),setup(e,l){let{slots:a}=l;const{isSelected:t,toggleSelect:n}=le(),{isExpanded:s,toggleExpand:d}=at(),{columns:o}=ae();L(()=>u("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&o.value.map((r,f)=>{const c=e.item,g=`item.${r.key}`,i={index:e.index,item:c.raw,internalItem:c,value:ee(c.columns,r.key),column:r,isSelected:t,toggleSelect:n,isExpanded:s,toggleExpand:d},v=typeof e.cellProps=="function"?e.cellProps({index:i.index,item:i.item,internalItem:i.internalItem,value:i.value,column:r}):e.cellProps,m=typeof r.cellProps=="function"?r.cellProps({index:i.index,item:i.item,internalItem:i.internalItem,value:i.value}):r.cellProps;return u(ve,B({align:r.align,fixed:r.fixed,fixedOffset:r.fixedOffset,lastFixed:r.lastFixed,noPadding:r.key==="data-table-select"||r.key==="data-table-expand",width:r.width},v,m),{default:()=>{var x,y;return a[g]?a[g](i):r.key==="data-table-select"?((x=a["item.data-table-select"])==null?void 0:x.call(a,i))??u(fe,{disabled:!c.selectable,modelValue:t([c]),onClick:ke(()=>n(c),["stop"])},null):r.key==="data-table-expand"?((y=a["item.data-table-expand"])==null?void 0:y.call(a,i))??u(N,{icon:s(c)?"$collapse":"$expand",size:"small",variant:"text",onClick:ke(()=>d(c),["stop"])},null):Ft(i.value)}})})]))}}),lt=I({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),Ce=E()({name:"VDataTableRows",inheritAttrs:!1,props:lt(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=ae(),{expandOnClick:s,toggleExpand:d,isExpanded:o}=at(),{isSelected:r,toggleSelect:f}=le(),{toggleGroup:c,isGroupOpen:g}=Ye(),{t:i}=te();return L(()=>{var v,m;return e.loading&&(!e.items.length||t.loading)?u("tr",{class:"v-data-table-rows-loading",key:"loading"},[u("td",{colspan:n.value.length},[((v=t.loading)==null?void 0:v.call(t))??i(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?u("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[u("td",{colspan:n.value.length},[((m=t["no-data"])==null?void 0:m.call(t))??i(e.noDataText)])]):u(U,null,[e.items.map((x,y)=>{var T;if(x.type==="group"){const h={index:y,item:x,columns:n.value,isExpanded:o,toggleExpand:d,isSelected:r,toggleSelect:f,toggleGroup:c,isGroupOpen:g};return t["group-header"]?t["group-header"](h):u(Ba,B({key:`group-header_${x.id}`,item:x},Ve(a,":group-header",()=>h)),t)}const b={index:y,item:x.raw,internalItem:x,columns:n.value,isExpanded:o,toggleExpand:d,isSelected:r,toggleSelect:f},k={...b,props:B({key:`item_${x.key??x.index}`,onClick:s.value?()=>{d(x)}:void 0,index:y,item:x,cellProps:e.cellProps},Ve(a,":row",()=>b),typeof e.rowProps=="function"?e.rowProps({item:b.item,index:b.index,internalItem:b.internalItem}):e.rowProps)};return u(U,{key:k.props.key},[t.item?t.item(k):u(Fa,k.props,t),o(x)&&((T=t["expanded-row"])==null?void 0:T.call(t,b))])})])}),{}}}),$a=I({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function Oa(e,l,a,t){const n=e.returnObject?l:Z(l,e.itemValue),s=Z(l,e.itemSelectable,!0),d=t.reduce((o,r)=>(r.key!=null&&(o[r.key]=Z(l,r.value)),o),{});return{type:"item",key:e.returnObject?Z(l,e.itemValue):n,index:a,value:n,selectable:s,columns:d,raw:l}}function Ra(e,l,a){return l.map((t,n)=>Oa(e,t,n,a))}function Na(e,l){return{items:P(()=>Ra(e,e.items,l.value))}}function Ga(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:s}=e;const d=$t("VDataTable"),o=P(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:s.value}));let r=null;Ot(o,()=>{Oe(r,o.value)||((r==null?void 0:r.search)!==o.value.search&&(l.value=1),d.emit("update:options",o.value),r=o.value)},{deep:!0,immediate:!0})}const Ma=I({...lt(),width:[String,Number],search:String,...Ea(),...Va(),...ua(),...$a(),...ba(),...ha(),...Qe(),...Ut()},"DataTable"),Ha=I({...na(),...Ma(),...Kt(),...Me()},"VDataTable"),el=E()({name:"VDataTable",props:Ha(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=Ia(e),{sortBy:s,multiSort:d,mustSort:o}=xa(e),{page:r,itemsPerPage:f}=sa(e),{columns:c,headers:g,sortFunctions:i,filterFunctions:v}=ma(e,{groupBy:n,showSelect:V(e,"showSelect"),showExpand:V(e,"showExpand")}),{items:m}=Na(e,c),x=V(e,"search"),{filteredItems:y}=Wt(e,m,x,{transform:q=>q.columns,customKeyFilter:v}),{toggleSort:b}=Pa({sortBy:s,multiSort:d,mustSort:o,page:r}),{sortByWithGroups:k,opened:T,extractRows:h,isGroupOpen:C,toggleGroup:F}=Ta({groupBy:n,sortBy:s}),{sortedItems:z}=ka(e,y,k,i),{flatItems:p}=Ca(z,n,T),S=P(()=>p.value.length),{startIndex:w,stopIndex:D,pageCount:_,setItemsPerPage:R}=ra({page:r,itemsPerPage:f,itemsLength:S}),{paginatedItems:ne}=ia({items:p,startIndex:w,stopIndex:D,itemsPerPage:f}),se=P(()=>h(ne.value)),{isSelected:nt,select:st,selectAll:rt,toggleSelect:ot,someSelected:it,allSelected:ut}=pa(e,{allItems:m,currentPage:se}),{isExpanded:dt,toggleExpand:ct}=Aa(e);Ga({page:r,itemsPerPage:f,sortBy:s,groupBy:n,search:x}),W({VDataTableRows:{hideNoData:V(e,"hideNoData"),noDataText:V(e,"noDataText"),loading:V(e,"loading"),loadingText:V(e,"loadingText")}});const A=P(()=>({page:r.value,itemsPerPage:f.value,sortBy:s.value,pageCount:_.value,toggleSort:b,setItemsPerPage:R,someSelected:it.value,allSelected:ut.value,isSelected:nt,select:st,selectAll:rt,toggleSelect:ot,isExpanded:dt,toggleExpand:ct,isGroupOpen:C,toggleGroup:F,items:se.value.map(q=>q.raw),internalItems:se.value,groupedItems:ne.value,columns:c.value,headers:g.value}));return L(()=>{const q=Te.filterProps(e),ft=De.filterProps(e),vt=Ce.filterProps(e),gt=we.filterProps(e);return u(we,B({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},gt),{top:()=>{var K;return(K=t.top)==null?void 0:K.call(t,A.value)},default:()=>{var K,me,ye,be,pe,he;return t.default?t.default(A.value):u(U,null,[(K=t.colgroup)==null?void 0:K.call(t,A.value),u("thead",null,[u(De,ft,t)]),(me=t.thead)==null?void 0:me.call(t,A.value),u("tbody",null,[(ye=t["body.prepend"])==null?void 0:ye.call(t,A.value),t.body?t.body(A.value):u(Ce,B(a,vt,{items:ne.value}),t),(be=t["body.append"])==null?void 0:be.call(t,A.value)]),(pe=t.tbody)==null?void 0:pe.call(t,A.value),(he=t.tfoot)==null?void 0:he.call(t,A.value)])},bottom:()=>t.bottom?t.bottom(A.value):u(U,null,[u(Jt,null,null),u(Te,q,{prepend:t["footer.prepend"]})])})}),{}}});export{Ya as V,Za as a,ea as b,Zt as c,el as d,Ie as e,Ma as f,Me as g,Ia as h,xa as i,sa as j,ma as k,Ta as l,na as m,ra as n,Ca as o,Pa as p,pa as q,Aa as r,Ga as s,Te as t,Na as u,De as v,Ce as w};
