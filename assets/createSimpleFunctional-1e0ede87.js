import{m as l}from"./VContainer-c68f9610.js";import{n as s,ax as g,b0 as i,ae as c}from"./index-cc6e673d.js";function d(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",m=arguments.length>2?arguments[2]:void 0;return s()({name:m??g(i(a.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...l()},setup(e,u){let{slots:t}=u;return()=>{var n;return c(e.tag,{class:[a,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}})}export{d as c};