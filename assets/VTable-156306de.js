import{b as m,D as b,c as h,E as d,a as v}from"./VContainer-87d98084.js";import{p as c,z as f,n as u,B as g,v as t,j as T}from"./index-f94693a1.js";const x=c({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...m(),...b(),...h(),...f()},"VTable"),p=u()({name:"VTable",props:x(),setup(a,r){let{slots:e}=r;const{themeClasses:n}=g(a),{densityClasses:i}=d(a);return v(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},n.value,i.value,a.class],style:a.style},{default:()=>{var o,s,l;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:T(a.height)}},[t("table",null,[e.default()])]):(s=e.wrapper)==null?void 0:s.call(e),(l=e.bottom)==null?void 0:l.call(e)]}})),{}}});export{p as V,x as m};
