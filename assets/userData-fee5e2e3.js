<<<<<<<< HEAD:assets/userData-f7b1d407.js
import{$ as d}from"./index-ac2a9356.js";let t,o;const l=d(),U=()=>{localStorage.removeItem("user"),t=void 0},i=e=>{const s={User:e,UpdatedAt:new Date().getTime()};localStorage.setItem("user",JSON.stringify(s)),t?(t.Additional=e.Additional,t.Credentials=e.Credentials,t.Data=e.Data,t.DisplayName=e.DisplayName,t.Groups=e.Groups,t.Handle=e.Handle,t.Tags=e.Tags):t=e,o=s.UpdatedAt},n=()=>{if(t&&o)return o<new Date().getTime()-60*1e3&&c().then(()=>{}).catch(()=>{}),t;try{const e=JSON.parse(localStorage.getItem("user")||"");if(typeof e=="object")return t=e.User,o=e.UpdatedAt,t}catch{}},f=e=>{const s=n();if(s){if(!s.Groups)s.Groups=[e];else{const a=s.Groups.findIndex(r=>r.GroupUUID===e.GroupUUID);a>=0?s.Groups[a]=e:s.Groups.push(e)}i(s)}},c=()=>new Promise((e,s)=>{l.whoAmI().then(a=>{if(a){i(a);const r=n();r?e(r):s()}else s()}).catch(()=>{s()})});export{f as A,n as G,U as R,i as S,c as a};
========
import{$ as d}from"./index-a3d4b6d2.js";let t,o;const l=d(),U=()=>{localStorage.removeItem("user"),t=void 0},i=e=>{const s={User:e,UpdatedAt:new Date().getTime()};localStorage.setItem("user",JSON.stringify(s)),t?(t.Additional=e.Additional,t.Credentials=e.Credentials,t.Data=e.Data,t.DisplayName=e.DisplayName,t.Groups=e.Groups,t.Handle=e.Handle,t.Tags=e.Tags):t=e,o=s.UpdatedAt},n=()=>{if(t&&o)return o<new Date().getTime()-60*1e3&&c().then(()=>{}).catch(()=>{}),t;try{const e=JSON.parse(localStorage.getItem("user")||"");if(typeof e=="object")return t=e.User,o=e.UpdatedAt,t}catch{}},f=e=>{const s=n();if(s){if(!s.Groups)s.Groups=[e];else{const a=s.Groups.findIndex(r=>r.GroupUUID===e.GroupUUID);a>=0?s.Groups[a]=e:s.Groups.push(e)}i(s)}},c=()=>new Promise((e,s)=>{l.whoAmI().then(a=>{if(a){i(a);const r=n();r?e(r):s()}else s()}).catch(()=>{s()})});export{f as A,n as G,U as R,i as S,c as a};
>>>>>>>> 6629c17a57089169cb29ac674fa4b709225238e7:assets/userData-fee5e2e3.js
