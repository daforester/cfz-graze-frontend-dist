import{i as H,M as q,r,N as B,c as ue,n as u,q as C,P as j,W as L,k as ne,v as e,f as t,D as A,y as h,A as I,C as y,m as De,a1 as Ee,x as N,B as S,Q as fe,F as x,z as te,V as Me,U as $e}from"./index-_E2g8aMd.js";import{V as Ae,u as Oe}from"./debounce-_HaDGtYW.js";import{G as ye}from"./group-7fhbY6WJ.js";import{C as Ve}from"./canDo-gV3bmQ6J.js";import{G as _e}from"./userData-m4IiMhKP.js";import{_ as Z}from"./ModelDialog.vue_vue_type_script_setup_true_lang-NL4X0MzC.js";import{V as he}from"./VAutocomplete-StsylY9q.js";import{a as de,V as ie}from"./scopeId-uuYN91HV.js";import{V as z,a as D}from"./VRow-7qUJ1ZTX.js";import{V as se}from"./VTextField-U8DWsiID.js";import{V as re}from"./VTextarea--Z3Jh0JJ.js";import{V as Ne}from"./VForm-Ocjcyqf0.js";import{V as ke}from"./VFileInput-HjZ5Du48.js";import{V as me}from"./VAvatar-nUwPkGZo.js";import{a as ee,V as Ge}from"./VContainer-vukjNqWR.js";import{a as le,b as oe,c as ae,V as ve}from"./VDataTable-L--i2_pZ.js";import{V as Ue,a as Ce,c as Ie,d as ge}from"./VList--2DSItYj.js";import{V as Y}from"./VBtn-pFsmFC3J.js";import{h as Te}from"./date-1rFCglLs.js";import{a as Be}from"./VTable-wKFFYMLM.js";import{a as xe,c as we,V as Ye}from"./VWindowItem-tTpaGYSw.js";import{V as qe}from"./VToolbar-VyIhrFHH.js";import{e as Re}from"./VCard-Fx0lhiii.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-EiVriyTV.js";import"./forwardRefs-0Z834bs9.js";import"./VDialog--Ve6wtvi.js";import"./VSelect-mvJdPy12.js";import"./VCheckboxBtn-Cg89BP0_.js";import"./VChip-cUdMKRl0.js";import"./createSimpleFunctional-naz903Fx.js";import"./VDivider-jyxoZShc.js";var b=(o=>(o.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE="GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE",o.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE="GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE",o.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS="GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS",o))(b||{});const J=[{title:"Costume Prop Clearance",value:"GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE"},{title:"Costume Prop Type",value:"GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE"},{title:"Lost and Found Status",value:"GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS"}],Fe=(o,R)=>o===void 0?!1:Ve(o,ye.GROUP_TYPE_CONVENTION,R.ConventionUUID,R).EditProps,Se=(o,R)=>o===void 0?!1:Ve(o,ye.GROUP_TYPE_CONVENTION,R.ConventionUUID,R).ConfigureProps,K=H({__name:"UserSelect",props:q({clearable:{type:Boolean,default:!1},convention:{},hideDetails:{type:[Boolean,String]},hint:{default:""},label:{default:""},persistentHint:{type:Boolean,default:!1},variant:{default:"filled"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const R=j(),p=r([]),n=B(o,"modelValue");R.searchConventionUsers(o.convention.ConventionUUID).then(m=>{m&&(p.value=m.Users)});const d=ue(()=>{const m=p.value.map(s=>({DisplayName:`${s.Registrations&&s.Registrations.length>0&&s.Registrations[0].Reference?`#${s.Registrations[0].Reference}`:""} ${s.DisplayName}`,Reference:s.Registrations&&s.Registrations.length>0&&s.Registrations[0].Reference?s.Registrations[0].Reference:"",UserUUID:s.UserUUID})).sort((s,V)=>!s.Reference&&V.Reference?1:s.Reference&&!V.Reference||s.Reference.length<V.Reference.length?-1:s.Reference.length>V.Reference.length||s.DisplayName>V.DisplayName?1:s.DisplayName==V.DisplayName?0:-1);return m.unshift({DisplayName:"- Select Owner -",Reference:"",UserUUID:L}),m});return(m,s)=>(u(),C(he,{label:m.label,items:d.value,"item-title":"DisplayName","item-value":"UserUUID",variant:m.variant,"hide-details":m.hideDetails,"persistent-hint":m.persistentHint,modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=V=>n.value=V),hint:m.hint,clearable:m.clearable},null,8,["label","items","variant","hide-details","persistent-hint","modelValue","hint","clearable"]))}}),Pe=H({__name:"GenericEnumSelect",props:q({category:{},convention:{},label:{default:""},variant:{default:"filled"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const R=j(),p=r([]),n=B(o,"modelValue");R.getConventionGenericEnums(o.convention.ConventionUUID,o.category).then(m=>{m&&(p.value=m)});const d=ue(()=>{const m=p.value.map(s=>s).sort((s,V)=>s.Title>V.Title?1:s.Title==V.Title?0:-1);return m.unshift({ID:0,GenericEnumUUID:L,ConventionID:0,ConventionUUID:L,Category:o.category,Name:"",Title:`- Select ${o.label} -`,Description:""}),m});return(m,s)=>(u(),C(he,{label:m.label,items:d.value,"item-title":"Title","item-value":"GenericEnumUUID",variant:m.variant,"hide-details":"",modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=V=>n.value=V)},null,8,["label","items","variant","modelValue"]))}}),ze=["innerHTML"],He=["innerHTML"],je=H({__name:"EditCostumeProp",props:q({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},costumeProp:{required:!0},costumePropModifiers:{}}),emits:q(["new","update:costumeProp"],["update:modelValue","update:costumeProp"]),setup(o,{emit:R}){const p=B(o,"modelValue"),n=B(o,"costumeProp"),d=j(),m=de(),s=R,V=r(ne(n.value)),k=r(`${m.GetCostumePropImageURL(n.value.CostumePropUUID)}?${new Date().getTime()}`),P=r(),g=r(),a=r([]),v=r([]);d.getConventionGenericEnums(o.convention.ConventionUUID,b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(G=>{G&&(a.value=G)}),d.getConventionGenericEnums(o.convention.ConventionUUID,b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(G=>{G&&(v.value=G)});const i=()=>{},f=()=>{n.value=ne(V.value)},T=G=>{d.saveCostumeProp(n.value).then(w=>{w?(G&&G("Saved Costume Prop"),n.value.CostumePropUUID!=w.CostumePropUUID&&s("new",w),n.value=w,s("update:costumeProp",w),k.value?U(w.CostumePropUUID).then(()=>{setTimeout(()=>{p.value=!1},1e3)}).catch(()=>{G("Failed to Save Image")}):setTimeout(()=>{p.value=!1},1e3)):G&&G("Failed to Save Costume Prop")}).catch(()=>{G&&G("Failed to Save Costume Prop")})},$=ue(()=>!1),O=()=>{k.value=URL.createObjectURL(P.value.files[0])},U=async G=>{var F;const w=new FormData((F=g.value)==null?void 0:F.$el);if(w.get("Image")&&w.get("Image").size>0)return w.set("ConventionUUID",o.convention.ConventionUUID),w.set("CostumePropUUID",G),await m.SaveCostumePropImage(w)},_=G=>{if(!G)return"";let w=G;return w=w.replaceAll(`
`,"<br>"),w=w.replaceAll(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),w=w.replaceAll(/\[i](.*?)\[\/i]/g,"<em>$1</em>"),w};return(G,w)=>(u(),C(Z,De({modelValue:p.value,"onUpdate:modelValue":w[5]||(w[5]=F=>p.value=F),title:"Add Costume Prop","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0,onReset:f,onSave:T},{[Ee($.value&&"delete")]:i}),{default:e(()=>[t(ee,null,{default:e(()=>[t(z,null,{default:e(()=>[n.value.AddedBy?(u(),C(D,{key:0,cols:"12"},{default:e(()=>[A("strong",null,"Added By: "+h(n.value.AddedBy.DisplayName),1)]),_:1})):I("",!0),t(D,{cols:"12"},{default:e(()=>[t(K,{modelValue:n.value.OwnerUUID,"onUpdate:modelValue":w[0]||(w[0]=F=>n.value.OwnerUUID=F),convention:G.convention,label:"Owner",variant:"outlined","aria-required":"true",clearable:!0},null,8,["modelValue","convention"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(Pe,{modelValue:n.value.TypeUUID,"onUpdate:modelValue":w[1]||(w[1]=F=>n.value.TypeUUID=F),category:y(b).GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE,convention:G.convention,label:"Type",variant:"outlined"},null,8,["modelValue","category","convention"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(se,{modelValue:n.value.Description,"onUpdate:modelValue":w[2]||(w[2]=F=>n.value.Description=F),label:"Description",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(Pe,{modelValue:n.value.ClearanceUUID,"onUpdate:modelValue":w[3]||(w[3]=F=>n.value.ClearanceUUID=F),category:y(b).GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE,convention:G.convention,label:"Clearance",variant:"outlined"},null,8,["modelValue","category","convention"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(re,{modelValue:n.value.Remarks,"onUpdate:modelValue":w[4]||(w[4]=F=>n.value.Remarks=F),label:"Remarks / Information",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(Ne,{ref_key:"propImageForm",ref:g,enctype:"multipart/form-data"},{default:e(()=>[t(ke,{label:"Photograph",name:"Image",variant:"outlined",ref_key:"imageFileInput",ref:P,"prepend-icon":"mdi:mdi-camera",capture:"environment",accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp",onChange:O},null,512)]),_:1},512),k.value?(u(),C(me,{key:0,src:k.value,class:"border profileImage my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])):I("",!0)]),_:1}),n.value.ClearanceUUID!==""&&n.value.ClearanceUUID!==y(L)?(u(),C(D,{key:1,cols:"12"},{default:e(()=>{var F,Q;return[A("div",null,[A("strong",null,h((F=a.value.find(X=>X.GenericEnumUUID===n.value.ClearanceUUID))==null?void 0:F.Title),1)]),A("div",{innerHTML:_((Q=a.value.find(X=>X.GenericEnumUUID===n.value.ClearanceUUID))==null?void 0:Q.Description)},null,8,ze)]}),_:1})):I("",!0),n.value.TypeUUID!==""&&n.value.TypeUUID!==y(L)?(u(),C(D,{key:2,cols:"12"},{default:e(()=>{var F;return[A("div",{innerHTML:_((F=v.value.find(Q=>Q.GenericEnumUUID===n.value.TypeUUID))==null?void 0:F.Description)},null,8,He)]}),_:1})):I("",!0)]),_:1})]),_:1})]),_:1},16,["modelValue"]))}}),We=A("br",null,null,-1),Ke=A("p",null,[A("strong",null,"Description Formatting Guidance")],-1),Qe=A("dl",null,[A("dt",{class:"float-left mr-2"}," ** "),A("dd",null,[N(" Surround text with double asterisk to make text bold. E.g. **this is bold** = "),A("strong",null,"this is bold")]),A("dt",{class:"float-left mr-2"}," [i] "),A("dd",null,[N(" Surround text with [i] and [/i] to make text italic. E.g. [i]italic emphasis[/i] = "),A("em",null,"italic emphasis")])],-1),be=H({__name:"EditGenericEnum",props:q({convention:{},title:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},genericEnum:{required:!0},genericEnumModifiers:{}}),emits:q(["delete:genericEnum","new","update:genericEnum"],["update:modelValue","update:genericEnum"]),setup(o,{emit:R}){const p=B(o,"modelValue"),n=B(o,"genericEnum"),d=r(ne(n.value)),m=j(),s=R,V=r([]),k=r([]),P=i=>{m.deleteGenericEnum(d.value.GenericEnumUUID).then(f=>{var T,$;f?(i&&i(`Deleted ${(T=J.find(O=>O.value==d.value.Category))==null?void 0:T.title}`),s("delete:genericEnum",d.value),setTimeout(()=>{p.value=!1},1e3)):i&&i(`Failed to Delete ${($=J.find(O=>O.value==d.value.Category))==null?void 0:$.title}`)}).catch(()=>{var f;i&&i(`Failed to Delete ${(f=J.find(T=>T.value==d.value.Category))==null?void 0:f.title}`)})},g=ue(()=>d.value.GenericEnumUUID!=L),a=i=>{m.saveGenericEnum(d.value).then(f=>{var T,$;f?(i&&i(`Saved ${(T=J.find(O=>O.value==d.value.Category))==null?void 0:T.title}`),s("update:genericEnum",f),setTimeout(()=>{p.value=!1},1e3)):i&&i(`Failed to Save ${($=J.find(O=>O.value==d.value.Category))==null?void 0:$.title}`)}).catch(()=>{var f;i&&i(`Failed to Save ${(f=J.find(T=>T.value==d.value.Category))==null?void 0:f.title}`)})},v=()=>{d.value=ne(n.value)};return m.getConventionGenericEnums(o.convention.ConventionUUID,b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(i=>{i&&(V.value=i)}).catch(()=>{}),m.getConventionGenericEnums(o.convention.ConventionUUID,b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(i=>{i&&(k.value=i)}).catch(()=>{}),(i,f)=>(u(),C(Z,De({modelValue:p.value,"onUpdate:modelValue":f[3]||(f[3]=T=>p.value=T),title:i.title,"show-reset-action":!1,"show-save-action":!0,"show-delete-action":!1,"show-close-action":!0,"hide-extension":!0,fullscreen:!1,persistent:!0,scrollable:!0,onReset:v,onSave:a},{[Ee(g.value&&"delete")]:P}),{default:e(()=>[t(ee,null,{default:e(()=>[t(z,null,{default:e(()=>[t(D,{cols:"12"},{default:e(()=>[t(se,{modelValue:d.value.Name,"onUpdate:modelValue":f[0]||(f[0]=T=>d.value.Name=T),label:"Internal Name",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(se,{modelValue:d.value.Title,"onUpdate:modelValue":f[1]||(f[1]=T=>d.value.Title=T),label:"Display Title",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(re,{modelValue:d.value.Description,"onUpdate:modelValue":f[2]||(f[2]=T=>d.value.Description=T),label:"Description",variant:"outlined"},null,8,["modelValue"]),We,Ke,Qe]),_:1})]),_:1})]),_:1})]),_:1},16,["modelValue","title"]))}}),Je=H({__name:"ConfigCostumeProps",props:q({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const R=B(o,"modelValue"),p=j(),n=r(),d=r([]),m=r(!1),s=r([]),V=a=>{const v=()=>({ID:0,GenericEnumUUID:L,ConventionID:o.convention.ID,ConventionUUID:o.convention.ConventionUUID,Category:a,Name:"",Title:"",Description:""});n.value=v(),m.value=!0},k=a=>{n.value=a,m.value=!0},P=a=>{let v;switch(a.Category){case b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE:v=d.value.findIndex(i=>i.GenericEnumUUID==a.GenericEnumUUID),v>=0&&d.value.splice(v,1);break;case b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE:v=s.value.findIndex(i=>i.GenericEnumUUID==a.GenericEnumUUID),v>=0&&s.value.splice(v,1);break}},g=a=>{let v;switch(a.Category){case b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE:v=d.value.findIndex(i=>i.GenericEnumUUID==a.GenericEnumUUID),v>=0?d.value.splice(v,1,a):d.value.push(n.value);break;case b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE:v=s.value.findIndex(i=>i.GenericEnumUUID==a.GenericEnumUUID),v>=0?s.value.splice(v,1,a):s.value.push(n.value);break}};return p.getConventionGenericEnums(o.convention.ConventionUUID,b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(a=>{a&&(d.value=a)}),p.getConventionGenericEnums(o.convention.ConventionUUID,b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(a=>{a&&(s.value=a)}),(a,v)=>(u(),C(Z,{modelValue:R.value,"onUpdate:modelValue":v[4]||(v[4]=i=>R.value=i),title:"Configure Costume Props","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!0,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0},{default:e(()=>{var i;return[t(ve,null,{default:e(()=>[t(le,null,{default:e(()=>[t(oe,{color:"primary"},{default:e(()=>[N(" Clearance Options ")]),_:1}),t(ae,null,{default:e(()=>[t(Ue,null,{default:e(()=>[(u(!0),S(x,null,fe(d.value,f=>(u(),C(Ce,{key:f.GenericEnumUUID},{append:e(()=>[t(Y,{icon:"mdi:mdi-pencil-outline",color:"warning",size:"x-small",onClick:T=>k(f)},null,8,["onClick"])]),default:e(()=>[t(Ie,null,{default:e(()=>[A("strong",null,h(f.Name)+" - "+h(f.Title),1)]),_:2},1024),t(ge,null,{default:e(()=>[N(h(f.Description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(z,null,{default:e(()=>[t(D,{class:"text-right"},{default:e(()=>[t(Y,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:v[0]||(v[0]=f=>V(y(b).GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE))},{default:e(()=>[N(" Add Item ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(le,null,{default:e(()=>[t(oe,{color:"primary"},{default:e(()=>[N(" Item Types ")]),_:1}),t(ae,null,{default:e(()=>[t(Ue,null,{default:e(()=>[(u(!0),S(x,null,fe(s.value,f=>(u(),C(Ce,{key:f.GenericEnumUUID},{append:e(()=>[t(Y,{icon:"mdi:mdi-pencil-outline",color:"warning",size:"x-small",onClick:T=>k(f)},null,8,["onClick"])]),default:e(()=>[t(Ie,null,{default:e(()=>[A("strong",null,h(f.Name)+" - "+h(f.Title),1)]),_:2},1024),t(ge,null,{default:e(()=>[N(h(f.Description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(z,null,{default:e(()=>[t(D,{class:"text-right"},{default:e(()=>[t(Y,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:v[1]||(v[1]=f=>V(y(b).GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE))},{default:e(()=>[N(" Add Item ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),m.value&&n.value?(u(),C(be,{key:0,convention:a.convention,title:`Edit ${(i=y(J).find(f=>{var T;return f.value==((T=n.value)==null?void 0:T.Category)}))==null?void 0:i.title}`,modelValue:m.value,"onUpdate:modelValue":v[2]||(v[2]=f=>m.value=f),"generic-enum":n.value,"onUpdate:genericEnum":[v[3]||(v[3]=f=>n.value=f),g],"onDelete:genericEnum":P},null,8,["convention","title","modelValue","generic-enum"])):I("",!0)]}),_:1},8,["modelValue"]))}}),Xe=["href"],Ze=["innerHTML"],et=["innerHTML"],tt=H({__name:"ViewCostumeProp",props:q({convention:{},title:{default:"View Costume Prop"}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},costumeProp:{required:!0},costumePropModifiers:{}}),emits:["update:modelValue","update:costumeProp"],setup(o){const R=B(o,"modelValue"),p=B(o,"costumeProp"),n=j(),d=de(),m=r(`${d.GetCostumePropImageURL(p.value.CostumePropUUID)}?${new Date().getTime()}`),s=r([]),V=r([]);n.getConventionGenericEnums(o.convention.ConventionUUID,b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(P=>{P&&(s.value=P)}),n.getConventionGenericEnums(o.convention.ConventionUUID,b.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(P=>{P&&(V.value=P)});const k=P=>{if(!P)return"";let g=P;return g=g.replaceAll(`
`,"<br>"),g=g.replaceAll(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),g=g.replaceAll(/\[i](.*?)\[\/i]/g,"<em>$1</em>"),g};return(P,g)=>(u(),C(Z,{modelValue:R.value,"onUpdate:modelValue":g[0]||(g[0]=a=>R.value=a),title:P.title,"show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!1,persistent:!1,scrollable:!0},{default:e(()=>[t(ee,null,{default:e(()=>[t(z,null,{default:e(()=>[t(D,{cols:"12"},{default:e(()=>[m.value?(u(),S("a",{key:0,href:m.value,target:"_blank",style:{cursor:"zoom-in"}},[t(me,{src:m.value,class:"border my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])],8,Xe)):I("",!0)]),_:1}),t(D,{cols:"12"},{default:e(()=>[N(h(p.value.Remarks),1)]),_:1}),p.value.AddedBy?(u(),C(D,{key:0,class:"text-right",cols:"12"},{default:e(()=>[A("small",null,"Added By: "+h(p.value.AddedBy.DisplayName),1)]),_:1})):I("",!0),p.value.ClearanceUUID!==""&&p.value.ClearanceUUID!==y(L)?(u(),C(D,{key:1,cols:"12"},{default:e(()=>{var a,v;return[A("div",null,[A("strong",null,h((a=s.value.find(i=>i.GenericEnumUUID===p.value.ClearanceUUID))==null?void 0:a.Title),1)]),A("div",{innerHTML:k((v=s.value.find(i=>i.GenericEnumUUID===p.value.ClearanceUUID))==null?void 0:v.Description)},null,8,Ze)]}),_:1})):I("",!0),p.value.TypeUUID!==""&&p.value.TypeUUID!==y(L)?(u(),C(D,{key:2,cols:"12"},{default:e(()=>{var a;return[A("div",{innerHTML:k((a=V.value.find(v=>v.GenericEnumUUID===p.value.TypeUUID))==null?void 0:a.Description)},null,8,et)]}),_:1})):I("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),Le=(o,R)=>o===void 0?!1:Ve(o,ye.GROUP_TYPE_CONVENTION,R.ConventionUUID,R).ViewProps,nt=A("br",null,null,-1),lt=H({__name:"CostumePropsView",props:{convention:{}},setup(o){const R=j(),p=_e(),n=r(),d=r([]),m=r(1),s=r([]),V=r(!0),k=r(10),P=r(0),g=r([]),a=r(""),v=r(Le(p,o.convention)),i=r(Fe(p,o.convention)),f=r(Se(p,o.convention)),T=r(!1),$=r(!1),O=r(!1),U=r({}),_=Oe(()=>{a.value=Date.now().toString()}),G=()=>{n.value={ID:0,CostumePropUUID:L,ConventionID:o.convention.ID,ConventionUUID:o.convention.ConventionUUID,Description:"",HasPhoto:!1,Remarks:""},T.value=!0},w=c=>{n.value=c,T.value=!0},F=c=>{n.value=c,O.value=!0},Q=()=>{$.value=!0},X=r([{key:"owner",title:"Attendee",sortable:!1},{key:"type",title:"Type",sortable:!1},{key:"Clearance.Title",title:"Clearance",sortable:!1},{key:"actions",title:"",sortable:!1}]),ce=({page:c,itemsPerPage:l,sortBy:E})=>{V.value=!0,m.value=c,s.value=E;try{U.value.Limit=l,U.value.Offset=(c-1)*l;const W=a.value;R.searchConventionCostumeProps(o.convention.ConventionUUID,U.value).then(pe=>{pe&&W===a.value&&(P.value=pe.Total,d.value=pe.CostumeProps,V.value=!1)})}catch(W){console.error(W)}},M=c=>{const l=d.value.findIndex(E=>c.CostumePropUUID==E.CostumePropUUID);l>=0&&d.value.splice(l,1,c)};return(c,l)=>c.convention?(u(),S(x,{key:0},[t(ee,{fluid:!0,class:"px-1"},{default:e(()=>[i.value||f.value?(u(),C(z,{key:0},{default:e(()=>[f.value?(u(),C(D,{key:0,class:"flex-shrink-1 flex-grow-0"},{default:e(()=>[t(Y,{color:"primary","prepend-icon":"mdi:mdi-cog",onClick:Q},{default:e(()=>[N(" Config ")]),_:1})]),_:1})):I("",!0),t(ie),i.value?(u(),C(D,{key:1,class:"flex-shrink-1 flex-grow-0"},{default:e(()=>[t(Y,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:G},{default:e(()=>[N(" Record New Item ")]),_:1})]),_:1})):I("",!0)]),_:1})):I("",!0)]),_:1}),v.value||i.value?(u(),C(Ae,{key:0,page:m.value,"onUpdate:page":l[4]||(l[4]=E=>m.value=E),"items-per-page":k.value,"onUpdate:itemsPerPage":l[5]||(l[5]=E=>k.value=E),"sort-by":g.value,"onUpdate:sortBy":l[6]||(l[6]=E=>g.value=E),headers:X.value,"items-length":P.value,items:d.value,"item-value":"key",loading:V.value,search:a.value,"onUpdate:options":ce},{top:e(()=>[t(ve,{class:"mb-3"},{default:e(()=>[t(le,null,{default:e(()=>[t(oe,{color:"secondary",class:"font-weight-bold pb-0 pt-0"},{default:e(()=>[t(D,{class:"pa-0"},{default:e(()=>[N(" Search Criteria "),t(Ge,{class:"pl-5",icon:"mdi:mdi-credit-card-search-outline"})]),_:1}),t(D,{class:"d-none d-sm-block pa-0",cols:"0"},{default:e(()=>[t(K,{convention:c.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"plain",modelValue:U.value.OwnerUUID,"onUpdate:modelValue":[l[0]||(l[0]=E=>U.value.OwnerUUID=E),y(_)],onClick:l[1]||(l[1]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),t(ie),t(D,{class:"d-none d-md-block pa-0"})]),_:1}),t(ae,{class:"pt-2"},{default:e(()=>[t(z,null,{default:e(()=>[t(D,{cols:"12",lg:"6"},{default:e(()=>[t(K,{convention:c.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"outlined",modelValue:U.value.OwnerUUID,"onUpdate:modelValue":[l[2]||(l[2]=E=>U.value.OwnerUUID=E),y(_)],onClick:l[3]||(l[3]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),"item.owner":e(({item:E})=>[E.Owner?(u(),S(x,{key:0},[E.Owner.Registrations&&E.Owner.Registrations.length>0?(u(),S(x,{key:0},[N(" #"+h(E.Owner.Registrations[0].Reference),1)],64)):I("",!0),N(" "+h(E.Owner.DisplayName),1)],64)):I("",!0)]),"item.type":e(({item:E})=>[E.Type?(u(),S(x,{key:0},[N(h(E.Type.Title)+" ",1),nt],64)):I("",!0),A("small",null,h(E.Description),1)]),"item.actions":e(({item:E})=>[v.value?(u(),C(Y,{key:0,icon:"mdi:mdi-magnify",size:"x-small",color:"success",onClick:W=>F(E),class:"mr-2"},null,8,["onClick"])):I("",!0),i.value?(u(),C(Y,{key:1,icon:"mdi:mdi-pencil",size:"x-small",color:"warning",onClick:W=>w(E)},null,8,["onClick"])):I("",!0)]),_:1},8,["page","items-per-page","sort-by","headers","items-length","items","loading","search"])):I("",!0),T.value&&n.value?(u(),C(je,{key:1,convention:c.convention,modelValue:T.value,"onUpdate:modelValue":l[7]||(l[7]=E=>T.value=E),"costume-prop":n.value,"onUpdate:costumeProp":[l[8]||(l[8]=E=>n.value=E),M],onNew:y(_)},null,8,["convention","modelValue","costume-prop","onNew"])):I("",!0),O.value&&n.value?(u(),C(tt,{key:2,convention:c.convention,title:n.value.Description,modelValue:O.value,"onUpdate:modelValue":l[9]||(l[9]=E=>O.value=E),"costume-prop":n.value,"onUpdate:costumeProp":l[10]||(l[10]=E=>n.value=E)},null,8,["convention","title","modelValue","costume-prop"])):I("",!0),$.value?(u(),C(Je,{key:3,convention:c.convention,modelValue:$.value,"onUpdate:modelValue":l[11]||(l[11]=E=>$.value=E)},null,8,["convention","modelValue"])):I("",!0)],64)):I("",!0)}}),ot=A("strong",null,"Added By:",-1),at=A("strong",null,"Status:",-1),ut={key:0,class:"text-success"},it={key:1,class:"text-warning"},st={key:2,class:"text-error"},rt={key:3,class:"text-error"},dt=H({__name:"EditLostAndFound",props:q({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},lostAndFound:{required:!0},lostAndFoundModifiers:{}}),emits:q(["new","update:lostAndFound"],["update:modelValue","update:lostAndFound"]),setup(o,{emit:R}){const p=B(o,"modelValue"),n=B(o,"lostAndFound"),d=j(),m=de(),s=R,V=r(ne(n.value)),k=r(`${m.GetLostAndFoundImageURL(n.value.LostAndFoundUUID)}?${new Date().getTime()}`),P=r(),g=r(),a=()=>{},v=()=>{n.value=ne(V.value)},i=O=>{d.saveLostAndFound(n.value).then(U=>{U?(O&&O("Saved Costume Prop"),n.value.LostAndFoundUUID!=U.LostAndFoundUUID&&s("new",U),n.value=U,s("update:lostAndFound",U),k.value?$(U.LostAndFoundUUID).then(()=>{setTimeout(()=>{p.value=!1},1e3)}).catch(()=>{O("Failed to Save Image")}):setTimeout(()=>{p.value=!1},1e3)):O&&O("Failed to Save Costume Prop")}).catch(()=>{O&&O("Failed to Save Costume Prop")})},f=ue(()=>!1),T=()=>{k.value=URL.createObjectURL(P.value.files[0])},$=async O=>{var _;const U=new FormData((_=g.value)==null?void 0:_.$el);if(U.get("Image")&&U.get("Image").size>0)return U.set("ConventionUUID",o.convention.ConventionUUID),U.set("LostAndFoundUUID",O),await m.SaveLostAndFoundImage(U)};return(O,U)=>(u(),C(Z,De({modelValue:p.value,"onUpdate:modelValue":U[5]||(U[5]=_=>p.value=_),title:"Report Lost & Found","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0,onReset:v,onSave:i},{[Ee(f.value&&"delete")]:a}),{default:e(()=>[t(ee,null,{default:e(()=>[t(z,null,{default:e(()=>[n.value.AddedBy?(u(),C(D,{key:0,cols:"12"},{default:e(()=>[ot,N(" "+h(n.value.AddedBy.DisplayName),1)]),_:1})):I("",!0),n.value.AddedBy?(u(),C(D,{key:1,cols:"12"},{default:e(()=>[at,n.value.FoundByUUID&&n.value.OwnerUUID&&n.value.FoundByUUID!==y(L)&&n.value.OwnerUUID!==y(L)?(u(),S("span",ut," Returned ")):n.value.FoundByUUID&&n.value.FoundByUUID!==y(L)?(u(),S("span",it," Found ")):n.value.OwnerUUID&&n.value.OwnerUUID!==y(L)?(u(),S("span",st," Lost ")):(u(),S("span",rt," Unknown "))]),_:1})):I("",!0),t(D,{cols:"12"},{default:e(()=>[t(K,{modelValue:n.value.FoundByUUID,"onUpdate:modelValue":U[0]||(U[0]=_=>n.value.FoundByUUID=_),convention:O.convention,label:"Found By",variant:"outlined","persistent-hint":!0,hint:"If unknown enter yourself",clearable:!0},null,8,["modelValue","convention"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(K,{modelValue:n.value.OwnerUUID,"onUpdate:modelValue":U[1]||(U[1]=_=>n.value.OwnerUUID=_),convention:O.convention,label:"Claimant (Owner)",variant:"outlined","persistent-hint":!0,hint:"The person either reporting item missing or claiming it",clearable:!0},null,8,["modelValue","convention"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(se,{modelValue:n.value.Title,"onUpdate:modelValue":U[2]||(U[2]=_=>n.value.Title=_),label:"Title",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(re,{modelValue:n.value.Description,"onUpdate:modelValue":U[3]||(U[3]=_=>n.value.Description=_),label:"Description",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(re,{modelValue:n.value.Comments,"onUpdate:modelValue":U[4]||(U[4]=_=>n.value.Comments=_),label:"Comments",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(Ne,{ref_key:"propImageForm",ref:g,enctype:"multipart/form-data"},{default:e(()=>[t(ke,{label:"Photograph",name:"Image",variant:"outlined",ref_key:"imageFileInput",ref:P,"prepend-icon":"mdi:mdi-camera",capture:"environment",accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp",onChange:T},null,512)]),_:1},512),k.value?(u(),C(me,{key:0,src:k.value,class:"border profileImage my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])):I("",!0)]),_:1})]),_:1})]),_:1})]),_:1},16,["modelValue"]))}}),mt=H({__name:"ConfigLostAndFound",props:q({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const R=B(o,"modelValue"),p=j(),n=r(),d=r([]),m=r(!1),s=g=>{const a=()=>({ID:0,GenericEnumUUID:L,ConventionID:o.convention.ID,ConventionUUID:o.convention.ConventionUUID,Category:g,Name:"",Title:"",Description:""});n.value=a(),m.value=!0},V=g=>{n.value=g,m.value=!0},k=g=>{let a;switch(g.Category){case b.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS:a=d.value.findIndex(v=>v.GenericEnumUUID==g.GenericEnumUUID),a>=0&&d.value.splice(a,1);break}},P=g=>{let a;switch(g.Category){case b.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS:a=d.value.findIndex(v=>v.GenericEnumUUID==g.GenericEnumUUID),a>=0?d.value.splice(a,1,g):d.value.push(n.value);break}};return p.getConventionGenericEnums(o.convention.ConventionUUID,b.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS).then(g=>{g&&(d.value=g)}),(g,a)=>(u(),C(Z,{modelValue:R.value,"onUpdate:modelValue":a[3]||(a[3]=v=>R.value=v),title:"Configure Costume Props","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!0,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0},{default:e(()=>{var v;return[t(ve,null,{default:e(()=>[t(le,null,{default:e(()=>[t(oe,{color:"primary"},{default:e(()=>[N(" Item Status ")]),_:1}),t(ae,null,{default:e(()=>[t(Ue,null,{default:e(()=>[(u(!0),S(x,null,fe(d.value,i=>(u(),C(Ce,{key:i.GenericEnumUUID},{append:e(()=>[t(Y,{icon:"mdi:mdi-pencil-outline",color:"warning",size:"x-small",onClick:f=>V(i)},null,8,["onClick"])]),default:e(()=>[t(Ie,null,{default:e(()=>[A("strong",null,h(i.Name)+" - "+h(i.Title),1)]),_:2},1024),t(ge,null,{default:e(()=>[N(h(i.Description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(z,null,{default:e(()=>[t(D,{class:"text-right"},{default:e(()=>[t(Y,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:a[0]||(a[0]=i=>s(y(b).GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS))},{default:e(()=>[N(" Add Item ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),m.value&&n.value?(u(),C(be,{key:0,convention:g.convention,title:`Edit ${(v=y(J).find(i=>{var f;return i.value==((f=n.value)==null?void 0:f.Category)}))==null?void 0:v.title}`,modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=i=>m.value=i),"generic-enum":n.value,"onUpdate:genericEnum":[a[2]||(a[2]=i=>n.value=i),P],"onDelete:genericEnum":k},null,8,["convention","title","modelValue","generic-enum"])):I("",!0)]}),_:1},8,["modelValue"]))}}),vt=["href"],ct=H({__name:"ViewLostAndFound",props:q({title:{default:"View Costume Prop"}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},lostAndFound:{required:!0},lostAndFoundModifiers:{}}),emits:["update:modelValue","update:lostAndFound"],setup(o){const R=B(o,"modelValue"),p=B(o,"lostAndFound"),n=de(),d=r(`${n.GetLostAndFoundImageURL(p.value.LostAndFoundUUID)}?${new Date().getTime()}`);return(m,s)=>(u(),C(Z,{modelValue:R.value,"onUpdate:modelValue":s[0]||(s[0]=V=>R.value=V),title:m.title,"show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!1,persistent:!1,scrollable:!0},{default:e(()=>[t(ee,null,{default:e(()=>[t(z,null,{default:e(()=>[t(D,{cols:"12"},{default:e(()=>[d.value?(u(),S("a",{key:0,href:d.value,target:"_blank",style:{cursor:"zoom-in"}},[t(me,{src:d.value,class:"border my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])],8,vt)):I("",!0)]),_:1}),t(D,{cols:"12"},{default:e(()=>[N(h(p.value.Description),1)]),_:1}),t(D,{cols:"12"},{default:e(()=>[N(h(p.value.Comments),1)]),_:1}),p.value.AddedBy?(u(),C(D,{key:0,class:"text-right",cols:"12"},{default:e(()=>[A("small",null,"Added By: "+h(p.value.AddedBy.DisplayName),1)]),_:1})):I("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),pt=A("strong",null,"Reported:",-1),ft=A("br",null,null,-1),Ut=A("strong",null,"Updated:",-1),Ct=A("br",null,null,-1),It={key:0,class:"text-success"},gt={key:1,class:"text-warning"},Dt={key:2,class:"text-error"},Et={key:3,class:"text-error"},yt=H({__name:"LostAndFoundView",props:{convention:{}},setup(o){const R=j(),p=_e(),n=r(),d=r([]),m=r(1),s=r([]),V=r(!0),k=r(10),P=r(0),g=r([]),a=r(""),v=r(Le(p,o.convention)),i=r(Fe(p,o.convention)),f=r(Se(p,o.convention)),T=r(!1),$=r(!1),O=r(!1),U=r({}),_=Oe(()=>{a.value=Date.now().toString()}),G=()=>{n.value={ID:0,LostAndFoundUUID:L,ConventionID:o.convention.ID,ConventionUUID:o.convention.ConventionUUID,Title:"",Description:"",HasPhoto:!1,Comments:""},T.value=!0},w=M=>{n.value=M,T.value=!0},F=M=>{n.value=M,O.value=!0},Q=r([{key:"owner",title:"Owner",sortable:!1},{key:"finder",title:"Found By",sortable:!1},{key:"title",title:"Title",sortable:!1},{key:"status",title:"Status",sortable:!1},{key:"timestamps",title:"Date",sortable:!1},{key:"actions",title:"",sortable:!1}]),X=({page:M,itemsPerPage:c,sortBy:l})=>{V.value=!0,m.value=M,s.value=l;try{U.value.Limit=c,U.value.Offset=(M-1)*c;const E=a.value;R.searchConventionLostAndFound(o.convention.ConventionUUID,U.value).then(W=>{W&&E===a.value&&(P.value=W.Total,d.value=W.LostAndFound,V.value=!1)})}catch(E){console.error(E)}},ce=M=>{const c=d.value.findIndex(l=>M.LostAndFoundUUID==l.LostAndFoundUUID);c>=0&&d.value.splice(c,1,M)};return(M,c)=>M.convention?(u(),S(x,{key:0},[t(ee,{fluid:!0,class:"px-1"},{default:e(()=>[i.value||f.value?(u(),C(z,{key:0},{default:e(()=>[t(ie),i.value?(u(),C(D,{key:0,class:"flex-shrink-1 flex-grow-0"},{default:e(()=>[t(Y,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:G},{default:e(()=>[N(" Record New Item ")]),_:1})]),_:1})):I("",!0)]),_:1})):I("",!0)]),_:1}),v.value||i.value?(u(),C(Ae,{key:0,page:m.value,"onUpdate:page":c[8]||(c[8]=l=>m.value=l),"items-per-page":k.value,"onUpdate:itemsPerPage":c[9]||(c[9]=l=>k.value=l),"sort-by":g.value,"onUpdate:sortBy":c[10]||(c[10]=l=>g.value=l),headers:Q.value,"items-length":P.value,items:d.value,"item-value":"key",loading:V.value,search:a.value,"onUpdate:options":X},{top:e(()=>[t(ve,{class:"mb-3"},{default:e(()=>[t(le,null,{default:e(()=>[t(oe,{color:"secondary",class:"font-weight-bold pb-0 pt-0"},{default:e(()=>[t(D,{class:"pa-0"},{default:e(()=>[N(" Search Criteria "),t(Ge,{class:"pl-5",icon:"mdi:mdi-credit-card-search-outline"})]),_:1}),t(D,{class:"d-none d-sm-block pa-0 pr-4",cols:"0"},{default:e(()=>[t(K,{convention:M.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"plain",modelValue:U.value.OwnerUUID,"onUpdate:modelValue":[c[0]||(c[0]=l=>U.value.OwnerUUID=l),y(_)],onClick:c[1]||(c[1]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),t(D,{class:"d-none d-sm-block pa-0 pr-4",cols:"0"},{default:e(()=>[t(K,{convention:M.convention,label:"Finder",clearable:!0,"hide-details":"",variant:"plain",modelValue:U.value.FoundByUUID,"onUpdate:modelValue":[c[2]||(c[2]=l=>U.value.FoundByUUID=l),y(_)],onClick:c[3]||(c[3]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),t(ie),t(D,{class:"d-none d-md-block pa-0"})]),_:1}),t(ae,{class:"pt-2"},{default:e(()=>[t(z,null,{default:e(()=>[t(D,{cols:"12",lg:"6"},{default:e(()=>[t(K,{convention:M.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"outlined",modelValue:U.value.OwnerUUID,"onUpdate:modelValue":[c[4]||(c[4]=l=>U.value.OwnerUUID=l),y(_)],onClick:c[5]||(c[5]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),t(D,{cols:"12",lg:"6"},{default:e(()=>[t(K,{convention:M.convention,label:"Finder",clearable:!0,"hide-details":"",variant:"outlined",modelValue:U.value.FoundByUUID,"onUpdate:modelValue":[c[6]||(c[6]=l=>U.value.FoundByUUID=l),y(_)],onClick:c[7]||(c[7]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),"item.finder":e(({item:l})=>[l.FoundBy?(u(),S(x,{key:0},[l.FoundBy.Registrations&&l.FoundBy.Registrations.length>0?(u(),S(x,{key:0},[N(" #"+h(l.FoundBy.Registrations[0].Reference),1)],64)):I("",!0),N(" "+h(l.FoundBy.DisplayName),1)],64)):I("",!0)]),"item.owner":e(({item:l})=>[l.Owner?(u(),S(x,{key:0},[l.Owner.Registrations&&l.Owner.Registrations.length>0?(u(),S(x,{key:0},[N(" #"+h(l.Owner.Registrations[0].Reference),1)],64)):I("",!0),N(" "+h(l.Owner.DisplayName),1)],64)):I("",!0)]),"item.timestamps":e(({item:l})=>[pt,N(" "+h(y(Te)(l.CreatedAt,{withTime:!0,withYear:!0}))+" ",1),l.UpdatedAt!=l.CreatedAt?(u(),S(x,{key:0},[ft,Ut,N(" "+h(y(Te)(l.UpdatedAt,{withTime:!0,withYear:!0})),1)],64)):I("",!0)]),"item.title":e(({item:l})=>[A("strong",null,h(l.Title),1),Ct,A("small",null,h(l.Description),1)]),"item.status":e(({item:l})=>[l.FoundByUUID&&l.OwnerUUID&&l.FoundByUUID!==y(L)&&l.OwnerUUID!==y(L)?(u(),S("span",It," Returned ")):l.FoundByUUID&&l.FoundByUUID!==y(L)?(u(),S("span",gt," Found ")):l.OwnerUUID&&l.OwnerUUID!==y(L)?(u(),S("span",Dt," Lost ")):(u(),S("span",Et," Unknown "))]),"item.actions":e(({item:l})=>[v.value?(u(),C(Y,{key:0,icon:"mdi:mdi-magnify",size:"x-small",color:"success",onClick:E=>F(l),class:"mr-2"},null,8,["onClick"])):I("",!0),i.value?(u(),C(Y,{key:1,icon:"mdi:mdi-pencil",size:"x-small",color:"warning",onClick:E=>w(l)},null,8,["onClick"])):I("",!0)]),_:1},8,["page","items-per-page","sort-by","headers","items-length","items","loading","search"])):I("",!0),T.value&&n.value?(u(),C(dt,{key:1,convention:M.convention,modelValue:T.value,"onUpdate:modelValue":c[11]||(c[11]=l=>T.value=l),"lost-and-found":n.value,"onUpdate:lostAndFound":[c[12]||(c[12]=l=>n.value=l),ce],onNew:y(_)},null,8,["convention","modelValue","lost-and-found","onNew"])):I("",!0),O.value&&n.value?(u(),C(ct,{key:2,title:n.value.Title,modelValue:O.value,"onUpdate:modelValue":c[13]||(c[13]=l=>O.value=l),"lost-and-found":n.value,"onUpdate:lostAndFound":c[14]||(c[14]=l=>n.value=l)},null,8,["title","modelValue","lost-and-found"])):I("",!0),$.value?(u(),C(mt,{key:3,convention:M.convention,modelValue:$.value,"onUpdate:modelValue":c[15]||(c[15]=l=>$.value=l)},null,8,["convention","modelValue"])):I("",!0)],64)):I("",!0)}}),en=H({__name:"OperationsView",emits:["pageTitle"],setup(o,{emit:R}){var g;const p=j(),n=R,d=Me(),m=$e();_e(),n("pageTitle","Operations");const s=r(),V=r(["Costume Props","Lost and Found"]);let k=((g=d.params.convention)==null?void 0:g.toString())||"";const P=r();return k?p.getConvention(k).then(a=>{a&&(P.value=a)}).catch(()=>{m.push("/")}):m.push("/"),(a,v)=>(u(),C(Be,null,{default:e(()=>[t(qe,{color:"blue-darken-4"},{default:e(()=>[t(xe,{modelValue:s.value,"onUpdate:modelValue":v[0]||(v[0]=i=>s.value=i),items:V.value,"show-arrows":""},null,8,["modelValue","items"])]),_:1}),t(Ye,{modelValue:s.value,"onUpdate:modelValue":v[1]||(v[1]=i=>s.value=i),disabled:!0,touch:!1},{default:e(()=>[t(we,{value:"Costume Props"},{default:e(()=>[s.value=="Costume Props"?(u(),C(Re,{key:0,class:"pa-2"},{default:e(()=>[P.value?(u(),C(lt,{key:0,convention:P.value},null,8,["convention"])):I("",!0)]),_:1})):I("",!0)]),_:1}),t(we,{value:"Lost and Found"},{default:e(()=>[s.value=="Lost and Found"?(u(),C(Re,{key:0,class:"pa-2"},{default:e(()=>[P.value?(u(),C(yt,{key:0,convention:P.value},null,8,["convention"])):I("",!0)]),_:1})):I("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{en as default};