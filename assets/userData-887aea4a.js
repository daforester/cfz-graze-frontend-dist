let e;const a=()=>{localStorage.removeItem("user"),e=void 0},t=r=>{localStorage.setItem("user",JSON.stringify(r)),e=r},o=()=>{if(e)return e;try{if(e=JSON.parse(localStorage.getItem("user")||""),typeof e=="object")return e}catch{}},c=r=>{const s=o();s&&(s.Groups?s.Groups.push(r):s.Groups=[r],t(s))};export{c as A,o as G,a as R,t as S};
