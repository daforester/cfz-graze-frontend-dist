import{m as X,f as Y,g as Z,h as $,i as ee,j as ae,k as te,u as oe,p as re,l as le,n as se,o as ue,q as ne,r as de,s as ce,t as B,v as I,w as k}from"./VDataTable-y5W8Ywz7.js";import{p as ie,d as me,c as b,t as r,a6 as pe,a7 as ve,f as l,F as ge,m as P}from"./index-uf-W6DN6.js";import{V as F}from"./VTable-t8o8XWbY.js";import{u as be}from"./VContainer-2sy_nEr4.js";const Pe=ie({itemsLength:{type:[Number,String],required:!0},...X(),...Y(),...Z()},"VDataTableServer"),he=me()({name:"VDataTableServer",props:Pe(),emits:{"update:modelValue":a=>!0,"update:page":a=>!0,"update:itemsPerPage":a=>!0,"update:sortBy":a=>!0,"update:options":a=>!0,"update:expanded":a=>!0,"update:groupBy":a=>!0},setup(a,i){let{attrs:n,slots:e}=i;const{groupBy:o}=$(a),{sortBy:s,multiSort:m,mustSort:p}=ee(a),{page:d,itemsPerPage:v}=ae(a),G=b(()=>parseInt(a.itemsLength,10)),{columns:f,headers:R}=te(a,{groupBy:o,showSelect:r(a,"showSelect"),showExpand:r(a,"showExpand")}),{items:c}=oe(a,f),{toggleSort:y}=re({sortBy:s,multiSort:m,mustSort:p,page:d}),{opened:E,isGroupOpen:N,toggleGroup:H,extractRows:_}=le({groupBy:o,sortBy:s}),{pageCount:C,setItemsPerPage:L}=se({page:d,itemsPerPage:v,itemsLength:G}),{flatItems:T}=ue(c,o,E),{isSelected:q,select:O,selectAll:j,toggleSelect:A,someSelected:W,allSelected:z}=ne(a,{allItems:c,currentPage:c}),{isExpanded:J,toggleExpand:K}=de(a),S=b(()=>_(c.value));ce({page:d,itemsPerPage:v,sortBy:s,groupBy:o,search:r(a,"search")}),pe("v-data-table",{toggleSort:y,sortBy:s}),ve({VDataTableRows:{hideNoData:r(a,"hideNoData"),noDataText:r(a,"noDataText"),loading:r(a,"loading"),loadingText:r(a,"loadingText")}});const t=b(()=>({page:d.value,itemsPerPage:v.value,sortBy:s.value,pageCount:C.value,toggleSort:y,setItemsPerPage:L,someSelected:W.value,allSelected:z.value,isSelected:q,select:O,selectAll:j,toggleSelect:A,isExpanded:J,toggleExpand:K,isGroupOpen:N,toggleGroup:H,items:S.value.map(g=>g.raw),internalItems:S.value,groupedItems:T.value,columns:f.value,headers:R.value}));be(()=>{const g=B.filterProps(a),M=I.filterProps(a),Q=k.filterProps(a),U=F.filterProps(a);return l(F,P({class:["v-data-table",{"v-data-table--loading":a.loading},a.class],style:a.style},U),{top:()=>{var u;return(u=e.top)==null?void 0:u.call(e,t.value)},default:()=>{var u,h,D,x,V,w;return e.default?e.default(t.value):l(ge,null,[(u=e.colgroup)==null?void 0:u.call(e,t.value),l("thead",{class:"v-data-table__thead",role:"rowgroup"},[l(I,P(M,{sticky:a.fixedHeader}),e)]),(h=e.thead)==null?void 0:h.call(e,t.value),l("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(D=e["body.prepend"])==null?void 0:D.call(e,t.value),e.body?e.body(t.value):l(k,P(n,Q,{items:T.value}),e),(x=e["body.append"])==null?void 0:x.call(e,t.value)]),(V=e.tbody)==null?void 0:V.call(e,t.value),(w=e.tfoot)==null?void 0:w.call(e,t.value)])},bottom:()=>e.bottom?e.bottom(t.value):l(B,g,{prepend:e["footer.prepend"]})})})}}),De=(a,i=500,n=!1)=>{let e;return(...o)=>{const m=function(){e=void 0,n||a.apply(void 0,o)},p=n&&!e;clearTimeout(e),e=setTimeout(m,i),p&&a.apply(void 0,o)}};export{he as V,De as u};
