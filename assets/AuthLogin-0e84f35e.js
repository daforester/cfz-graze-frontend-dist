import{i as h,V as f,r as d,U as g,n as _,B as A,D as r,y as D,ax as E,F as B,P as L}from"./index-5fbc4a04.js";import{G as P}from"./userData-a2e78973.js";import{S as k}from"./setupLogin-15fe6ccc.js";import{E as v}from"./emailFormVariant-e5e0aad4.js";const R=r("p",null,"Authorising...",-1),N=h({__name:"AuthLogin",props:{variant:{default:()=>v.COMBINED}},setup(n){const c=f(),t=d(c.params.method),u=L(),e=new URL(location.href),a=g(),i=e.searchParams.get("code")||"",m=e.searchParams.get("token")||"",l=e.searchParams.get("state")||"";return u.oAuthLogin(t.value,i,m,l).then(({created:s,tokens:o,user:p})=>{k(o,p,a,s)}),P()&&n.variant!=="ADD_CREDENTIAL"&&a.push("/"),(s,o)=>(_(),A(B,null,[r("p",null,D(E(t.value)),1),R],64))}});export{N as default};
