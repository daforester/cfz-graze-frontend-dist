import{a3 as d}from"./index-76396b5b.js";let t,r;const l=d(),U=()=>{localStorage.removeItem("user"),t=void 0},i=e=>{const s={User:e,UpdatedAt:new Date().getTime()};localStorage.setItem("user",JSON.stringify(s)),t?(t.Additional=e.Additional,t.Credentials=e.Credentials,t.Data=e.Data,t.DisplayName=e.DisplayName,t.Groups=e.Groups,t.Handle=e.Handle,t.Tags=e.Tags):t=e,r=s.UpdatedAt},n=()=>{if(t&&r)return r<Date.now()-60*1e3&&c().then(()=>{}).catch(()=>{}),t;try{const e=JSON.parse(localStorage.getItem("user")||"");if(typeof e=="object")return t=e.User,r=e.UpdatedAt,t}catch{}},f=e=>{const s=n();if(s){if(!s.Groups)s.Groups=[e];else{const a=s.Groups.findIndex(o=>o.GroupUUID===e.GroupUUID);a>=0?s.Groups[a]=e:s.Groups.push(e)}i(s)}},c=()=>new Promise((e,s)=>{l.whoAmI().then(a=>{if(a){i(a);const o=n();o?e(o):s()}else s()}).catch(()=>{s()})});export{f as A,n as G,U as R,i as S,c as a};