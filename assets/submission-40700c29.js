var e=(S=>(S.SUBMISSION_STATUS_NULL="",S.SUBMISSION_STATUS_INCOMPLETE="SUBMISSION_STATUS_INCOMPLETE",S.SUBMISSION_STATUS_OPEN="SUBMISSION_STATUS_OPEN",S.SUBMISSION_STATUS_LOCKED="SUBMISSION_STATUS_LOCKED",S.SUBMISSION_STATUS_ACCEPTED="SUBMISSION_STATUS_ACCEPTED",S.SUBMISSION_STATUS_COMPLETED="SUBMISSION_STATUS_COMPLETED",S.SUBMISSION_STATUS_REJECTED="SUBMISSION_STATUS_REJECTED",S.SUBMISSION_STATUS_INVALID="SUBMISSION_STATUS_INVALID",S.SUBMISSION_STATUS_CANCELLED="SUBMISSION_STATUS_CANCELLED",S))(e||{});const T=[{title:"Open",value:"SUBMISSION_STATUS_OPEN",icon:"mdi:mdi-pencil"},{title:"Locked",value:"SUBMISSION_STATUS_LOCKED",icon:"mdi:mdi-pencil-lock"},{title:"Accepted",value:"SUBMISSION_STATUS_ACCEPTED",icon:"mdi:mdi-check"},{title:"Cancelled",value:"SUBMISSION_STATUS_CANCELLED",icon:"mdi:mdi-window-close"},{title:"Completed",value:"SUBMISSION_STATUS_COMPLETED",icon:"mdi:mdi-email-check"},{title:"Rejected",value:"SUBMISSION_STATUS_REJECTED",icon:"mdi:mdi-close-box"},{title:"Incomplete",value:"SUBMISSION_STATUS_INCOMPLETE",icon:"mdi:mdi-format-indent-increase"},{title:"Invalid",value:"SUBMISSION_STATUS_INVALID",icon:"mdi:mdi-alert-circle"}],I=S=>{switch(S){case"SUBMISSION_STATUS_ACCEPTED":return"Processing";case"SUBMISSION_STATUS_CANCELLED":return"Cancelled";case"SUBMISSION_STATUS_COMPLETED":return"Completed";case"SUBMISSION_STATUS_INCOMPLETE":return"Incomplete";case"SUBMISSION_STATUS_INVALID":return"Invalid";case"SUBMISSION_STATUS_LOCKED":return"Processing";case"":return"Unknown";case"SUBMISSION_STATUS_OPEN":return"Received";case"SUBMISSION_STATUS_REJECTED":return"Rejected"}},U=S=>{switch(S){case"SUBMISSION_STATUS_ACCEPTED":return"Accepted";case"SUBMISSION_STATUS_CANCELLED":return"Cancelled";case"SUBMISSION_STATUS_COMPLETED":return"Completed";case"SUBMISSION_STATUS_INCOMPLETE":return"Incomplete";case"SUBMISSION_STATUS_INVALID":return"Invalid";case"SUBMISSION_STATUS_LOCKED":return"Locked";case"":return"Unknown";case"SUBMISSION_STATUS_OPEN":return"Open";case"SUBMISSION_STATUS_REJECTED":return"Rejected"}},_=S=>{switch(S){case"SUBMISSION_STATUS_ACCEPTED":return"text-orange";case"SUBMISSION_STATUS_CANCELLED":return"text-blue";case"SUBMISSION_STATUS_COMPLETED":return"text-green";case"SUBMISSION_STATUS_INCOMPLETE":return"text-purple";case"SUBMISSION_STATUS_INVALID":return"text-purple";case"SUBMISSION_STATUS_LOCKED":return"text-orange";case"":return"text-red";case"SUBMISSION_STATUS_OPEN":return"text-black";case"SUBMISSION_STATUS_REJECTED":return"text-red"}};export{e as S,I as a,_ as b,U as c,T as d};