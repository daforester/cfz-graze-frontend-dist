import{I as p,a4 as h,r as f,a0 as d,K as g,R as _,U as r,O as A,as as E,H as D,$ as L}from"./index-a3d4b6d2.js";import{G as R}from"./userData-fee5e2e3.js";import{S as k}from"./setupLogin-e4168b5b.js";import{E as v}from"./emailFormVariant-e5e0aad4.js";const B=r("p",null,"Authorising...",-1),S=p({__name:"AuthLogin",props:{variant:{default:()=>v.COMBINED}},setup(n){const c=h(),t=f(c.params.method),u=L(),e=new URL(location.href),a=d(),i=e.searchParams.get("code")||"",m=e.searchParams.get("token")||"",l=e.searchParams.get("state")||"";return u.oAuthLogin(t.value,i,m,l).then(({tokens:s,user:o})=>{k(s,o,a)}),R()&&n.variant!=="ADD_CREDENTIAL"&&a.push("/"),(s,o)=>(g(),_(D,null,[r("p",null,A(E(t.value)),1),B],64))}});export{S as default};
