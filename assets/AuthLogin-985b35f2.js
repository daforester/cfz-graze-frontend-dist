import{I as h,a7 as f,r as d,a6 as g,M as _,V as A,X as r,Q as E,ax as D,H as L,a3 as k}from"./index-76396b5b.js";import{G as v}from"./userData-38a248e7.js";import{S as B}from"./setupLogin-7977f1eb.js";import{E as I}from"./emailFormVariant-e5e0aad4.js";const P=r("p",null,"Authorising...",-1),S=h({__name:"AuthLogin",props:{variant:{default:()=>I.COMBINED}},setup(n){const c=f(),a=d(c.params.method),u=k(),e=new URL(location.href),t=g(),i=e.searchParams.get("code")||"",m=e.searchParams.get("token")||"",l=e.searchParams.get("state")||"";return u.oAuthLogin(a.value,i,m,l).then(({created:s,tokens:o,user:p})=>{B(o,p,t,s)}),v()&&n.variant!=="ADD_CREDENTIAL"&&t.push("/"),(s,o)=>(_(),A(L,null,[r("p",null,E(D(a.value)),1),P],64))}});export{S as default};