import{i as h,r as f,B as d,D as r,y as g,ar as _,F as A,V as D,P as E,U as B,n as L}from"./index-QFnvUixi.js";import{G as P}from"./userData-haNlX5Yt.js";import{S as k}from"./setupLogin-KerraWUF.js";import{E as v}from"./emailFormVariant-1EY2p0cn.js";const R=r("p",null,"Authorising...",-1),S=h({__name:"AuthLogin",props:{variant:{default:()=>v.COMBINED}},setup(n){const c=D(),t=f(c.params.method),u=E(),e=new URL(location.href),a=B(),i=e.searchParams.get("code")||"",m=e.searchParams.get("token")||"",l=e.searchParams.get("state")||"";return u.oAuthLogin(t.value,i,m,l).then(({created:s,tokens:o,user:p})=>{k(o,p,a,s)}),P()&&n.variant!=="ADD_CREDENTIAL"&&a.push("/"),(s,o)=>(L(),d(A,null,[r("p",null,g(_(t.value)),1),R],64))}});export{S as default};
