import{S as r}from"./submission-WqULzQVB.js";const s=(a,u,e)=>{const t=a.find(S=>S.Type===e);if(!t)return!1;if(t.State.Edit){const S=u.find(U=>U.FormUUID===t.FormUUID);return S?S.Status==r.SUBMISSION_STATUS_NULL||S.Status==r.SUBMISSION_STATUS_OPEN||S.Status==r.SUBMISSION_STATUS_OPEN_2||S.Status==r.SUBMISSION_STATUS_INCOMPLETE:!0}return t.State.New?!u.find(U=>U.FormUUID===t.FormUUID):!1};export{s as c};