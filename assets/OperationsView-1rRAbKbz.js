import{i as H,M as q,r as s,N as B,c as ue,n as a,q as C,P as j,W as L,k as ne,v as e,f as t,D as A,y as O,A as I,C as y,m as De,a1 as Ee,x as h,B as b,Q as fe,F as x,z as te,V as Se,U as Le}from"./index-BD7ibzFp.js";import{V as Re,u as Ae}from"./debounce-MX7Xkg8P.js";import{C as Pe,a as Oe,b as he}from"./canConfigureProps-skyZl3SJ.js";import{G as ye}from"./userData-DNm_Tz8s.js";import{_ as Z}from"./ModelDialog.vue_vue_type_script_setup_true_lang-2QIkL-rA.js";import{V as ke}from"./VAutocomplete-xlp5ZeWO.js";import{a as de,V as ie}from"./scopeId-P5ETwLO0.js";import{V as z,a as D}from"./VRow-RkEwmUN-.js";import{V as se}from"./VTextField-CWx-2kjN.js";import{V as re}from"./VTextarea-1LAMzIMB.js";import{V as Ne}from"./VForm-84IzhZP4.js";import{V as Ge}from"./VFileInput--KvyPaoR.js";import{V as me}from"./VAvatar-1tWckwvs.js";import{a as ee,V as Fe}from"./VContainer-59qX0LuM.js";import{a as le,b as oe,c as ae,V as ve}from"./VDataTable-W4eDlRKH.js";import{V as Ue,a as Ce,c as Ie,d as ge}from"./VList-KL5jmi9i.js";import{V as Y}from"./VBtn-i1b665JG.js";import{h as Ve}from"./date-1rFCglLs.js";import{a as Me}from"./VTable-ygZSY0dS.js";import{a as $e,c as _e,V as Be}from"./VWindowItem-mCAoS7mI.js";import{V as xe}from"./VToolbar-Cq0nze2_.js";import{e as Te}from"./VCard-iaDXVIhj.js";import"./group-7fhbY6WJ.js";import"./canDo-jN9hGz-l.js";import"./SaveButton.vue_vue_type_script_setup_true_lang-eHtr2ZSt.js";import"./forwardRefs-V3oX-JQ5.js";import"./VDialog-HNFO8hFz.js";import"./VSelect-l0mvoSj-.js";import"./VCheckboxBtn-YFA4cTQ6.js";import"./VChip-MMeuZ91u.js";import"./createSimpleFunctional-ai2AlHs_.js";import"./VDivider-OwLAsOyP.js";var S=(r=>(r.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE="GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE",r.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE="GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE",r.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS="GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS",r))(S||{});const J=[{title:"Costume Prop Clearance",value:"GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE"},{title:"Costume Prop Type",value:"GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE"},{title:"Lost and Found Status",value:"GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS"}],K=H({__name:"UserSelect",props:q({clearable:{type:Boolean,default:!1},convention:{},hideDetails:{type:[Boolean,String]},hint:{default:""},label:{default:""},persistentHint:{type:Boolean,default:!1},variant:{default:"filled"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const N=j(),p=s([]),n=B(r,"modelValue");N.searchConventionUsers(r.convention.ConventionUUID).then(m=>{m&&(p.value=m.Users)});const d=ue(()=>{const m=p.value.map(i=>({DisplayName:`${i.Registrations&&i.Registrations.length>0&&i.Registrations[0].Reference?`#${i.Registrations[0].Reference}`:""} ${i.DisplayName}`,Reference:i.Registrations&&i.Registrations.length>0&&i.Registrations[0].Reference?i.Registrations[0].Reference:"",UserUUID:i.UserUUID})).sort((i,V)=>!i.Reference&&V.Reference?1:i.Reference&&!V.Reference||i.Reference.length<V.Reference.length?-1:i.Reference.length>V.Reference.length||i.DisplayName>V.DisplayName?1:i.DisplayName==V.DisplayName?0:-1);return m.unshift({DisplayName:"- Select Owner -",Reference:"",UserUUID:L}),m});return(m,i)=>(a(),C(ke,{label:m.label,items:d.value,"item-title":"DisplayName","item-value":"UserUUID",variant:m.variant,"hide-details":m.hideDetails,"persistent-hint":m.persistentHint,modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=V=>n.value=V),hint:m.hint,clearable:m.clearable},null,8,["label","items","variant","hide-details","persistent-hint","modelValue","hint","clearable"]))}}),we=H({__name:"GenericEnumSelect",props:q({category:{},convention:{},label:{default:""},variant:{default:"filled"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const N=j(),p=s([]),n=B(r,"modelValue");N.getConventionGenericEnums(r.convention.ConventionUUID,r.category).then(m=>{m&&(p.value=m)});const d=ue(()=>{const m=p.value.map(i=>i).sort((i,V)=>i.Title>V.Title?1:i.Title==V.Title?0:-1);return m.unshift({ID:0,GenericEnumUUID:L,ConventionID:0,ConventionUUID:L,Category:r.category,Name:"",Title:`- Select ${r.label} -`,Description:""}),m});return(m,i)=>(a(),C(ke,{label:m.label,items:d.value,"item-title":"Title","item-value":"GenericEnumUUID",variant:m.variant,"hide-details":"",modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=V=>n.value=V)},null,8,["label","items","variant","modelValue"]))}}),Ye=["innerHTML"],qe=["innerHTML"],ze=H({__name:"EditCostumeProp",props:q({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},costumeProp:{required:!0},costumePropModifiers:{}}),emits:q(["new","update:costumeProp"],["update:modelValue","update:costumeProp"]),setup(r,{emit:N}){const p=B(r,"modelValue"),n=B(r,"costumeProp"),d=j(),m=de(),i=N,V=s(ne(n.value)),k=s(`${m.GetCostumePropImageURL(n.value.CostumePropUUID)}?${new Date().getTime()}`),R=s(),g=s(),o=s([]),v=s([]);d.getConventionGenericEnums(r.convention.ConventionUUID,S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(G=>{G&&(o.value=G)}),d.getConventionGenericEnums(r.convention.ConventionUUID,S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(G=>{G&&(v.value=G)});const u=()=>{},f=()=>{n.value=ne(V.value)},T=G=>{d.saveCostumeProp(n.value).then(w=>{w?(G&&G("Saved Costume Prop"),n.value.CostumePropUUID!=w.CostumePropUUID&&i("new",w),n.value=w,i("update:costumeProp",w),k.value?U(w.CostumePropUUID).then(()=>{setTimeout(()=>{p.value=!1},1e3)}).catch(()=>{G("Failed to Save Image")}):setTimeout(()=>{p.value=!1},1e3)):G&&G("Failed to Save Costume Prop")}).catch(()=>{G&&G("Failed to Save Costume Prop")})},$=ue(()=>!1),P=()=>{k.value=URL.createObjectURL(R.value.files[0])},U=async G=>{var F;const w=new FormData((F=g.value)==null?void 0:F.$el);if(w.get("Image")&&w.get("Image").size>0)return w.set("ConventionUUID",r.convention.ConventionUUID),w.set("CostumePropUUID",G),await m.SaveCostumePropImage(w)},_=G=>{if(!G)return"";let w=G;return w=w.replaceAll(`
`,"<br>"),w=w.replaceAll(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),w=w.replaceAll(/\[i](.*?)\[\/i]/g,"<em>$1</em>"),w};return(G,w)=>(a(),C(Z,De({modelValue:p.value,"onUpdate:modelValue":w[5]||(w[5]=F=>p.value=F),title:"Add Costume Prop","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0,onReset:f,onSave:T},{[Ee($.value&&"delete")]:u}),{default:e(()=>[t(ee,null,{default:e(()=>[t(z,null,{default:e(()=>[n.value.AddedBy?(a(),C(D,{key:0,cols:"12"},{default:e(()=>[A("strong",null,"Added By: "+O(n.value.AddedBy.DisplayName),1)]),_:1})):I("",!0),t(D,{cols:"12"},{default:e(()=>[t(K,{modelValue:n.value.OwnerUUID,"onUpdate:modelValue":w[0]||(w[0]=F=>n.value.OwnerUUID=F),convention:G.convention,label:"Owner",variant:"outlined","aria-required":"true",clearable:!0},null,8,["modelValue","convention"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(we,{modelValue:n.value.TypeUUID,"onUpdate:modelValue":w[1]||(w[1]=F=>n.value.TypeUUID=F),category:y(S).GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE,convention:G.convention,label:"Type",variant:"outlined"},null,8,["modelValue","category","convention"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(se,{modelValue:n.value.Description,"onUpdate:modelValue":w[2]||(w[2]=F=>n.value.Description=F),label:"Description",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(we,{modelValue:n.value.ClearanceUUID,"onUpdate:modelValue":w[3]||(w[3]=F=>n.value.ClearanceUUID=F),category:y(S).GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE,convention:G.convention,label:"Clearance",variant:"outlined"},null,8,["modelValue","category","convention"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(re,{modelValue:n.value.Remarks,"onUpdate:modelValue":w[4]||(w[4]=F=>n.value.Remarks=F),label:"Remarks / Information",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(Ne,{ref_key:"propImageForm",ref:g,enctype:"multipart/form-data"},{default:e(()=>[t(Ge,{label:"Photograph",name:"Image",variant:"outlined",ref_key:"imageFileInput",ref:R,"prepend-icon":"mdi:mdi-camera",capture:"environment",accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp",onChange:P},null,512)]),_:1},512),k.value?(a(),C(me,{key:0,src:k.value,class:"border profileImage my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])):I("",!0)]),_:1}),n.value.ClearanceUUID!==""&&n.value.ClearanceUUID!==y(L)?(a(),C(D,{key:1,cols:"12"},{default:e(()=>{var F,Q;return[A("div",null,[A("strong",null,O((F=o.value.find(X=>X.GenericEnumUUID===n.value.ClearanceUUID))==null?void 0:F.Title),1)]),A("div",{innerHTML:_((Q=o.value.find(X=>X.GenericEnumUUID===n.value.ClearanceUUID))==null?void 0:Q.Description)},null,8,Ye)]}),_:1})):I("",!0),n.value.TypeUUID!==""&&n.value.TypeUUID!==y(L)?(a(),C(D,{key:2,cols:"12"},{default:e(()=>{var F;return[A("div",{innerHTML:_((F=v.value.find(Q=>Q.GenericEnumUUID===n.value.TypeUUID))==null?void 0:F.Description)},null,8,qe)]}),_:1})):I("",!0)]),_:1})]),_:1})]),_:1},16,["modelValue"]))}}),He=A("br",null,null,-1),je=A("p",null,[A("strong",null,"Description Formatting Guidance")],-1),We=A("dl",null,[A("dt",{class:"float-left mr-2"}," ** "),A("dd",null,[h(" Surround text with double asterisk to make text bold. E.g. **this is bold** = "),A("strong",null,"this is bold")]),A("dt",{class:"float-left mr-2"}," [i] "),A("dd",null,[h(" Surround text with [i] and [/i] to make text italic. E.g. [i]italic emphasis[/i] = "),A("em",null,"italic emphasis")])],-1),be=H({__name:"EditGenericEnum",props:q({convention:{},title:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},genericEnum:{required:!0},genericEnumModifiers:{}}),emits:q(["delete:genericEnum","new","update:genericEnum"],["update:modelValue","update:genericEnum"]),setup(r,{emit:N}){const p=B(r,"modelValue"),n=B(r,"genericEnum"),d=s(ne(n.value)),m=j(),i=N,V=s([]),k=s([]),R=u=>{m.deleteGenericEnum(d.value.GenericEnumUUID).then(f=>{var T,$;f?(u&&u(`Deleted ${(T=J.find(P=>P.value==d.value.Category))==null?void 0:T.title}`),i("delete:genericEnum",d.value),setTimeout(()=>{p.value=!1},1e3)):u&&u(`Failed to Delete ${($=J.find(P=>P.value==d.value.Category))==null?void 0:$.title}`)}).catch(()=>{var f;u&&u(`Failed to Delete ${(f=J.find(T=>T.value==d.value.Category))==null?void 0:f.title}`)})},g=ue(()=>d.value.GenericEnumUUID!=L),o=u=>{m.saveGenericEnum(d.value).then(f=>{var T,$;f?(u&&u(`Saved ${(T=J.find(P=>P.value==d.value.Category))==null?void 0:T.title}`),i("update:genericEnum",f),setTimeout(()=>{p.value=!1},1e3)):u&&u(`Failed to Save ${($=J.find(P=>P.value==d.value.Category))==null?void 0:$.title}`)}).catch(()=>{var f;u&&u(`Failed to Save ${(f=J.find(T=>T.value==d.value.Category))==null?void 0:f.title}`)})},v=()=>{d.value=ne(n.value)};return m.getConventionGenericEnums(r.convention.ConventionUUID,S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(u=>{u&&(V.value=u)}).catch(()=>{}),m.getConventionGenericEnums(r.convention.ConventionUUID,S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(u=>{u&&(k.value=u)}).catch(()=>{}),(u,f)=>(a(),C(Z,De({modelValue:p.value,"onUpdate:modelValue":f[3]||(f[3]=T=>p.value=T),title:u.title,"show-reset-action":!1,"show-save-action":!0,"show-delete-action":!1,"show-close-action":!0,"hide-extension":!0,fullscreen:!1,persistent:!0,scrollable:!0,onReset:v,onSave:o},{[Ee(g.value&&"delete")]:R}),{default:e(()=>[t(ee,null,{default:e(()=>[t(z,null,{default:e(()=>[t(D,{cols:"12"},{default:e(()=>[t(se,{modelValue:d.value.Name,"onUpdate:modelValue":f[0]||(f[0]=T=>d.value.Name=T),label:"Internal Name",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(se,{modelValue:d.value.Title,"onUpdate:modelValue":f[1]||(f[1]=T=>d.value.Title=T),label:"Display Title",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(re,{modelValue:d.value.Description,"onUpdate:modelValue":f[2]||(f[2]=T=>d.value.Description=T),label:"Description",variant:"outlined"},null,8,["modelValue"]),He,je,We]),_:1})]),_:1})]),_:1})]),_:1},16,["modelValue","title"]))}}),Ke=H({__name:"ConfigCostumeProps",props:q({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const N=B(r,"modelValue"),p=j(),n=s(),d=s([]),m=s(!1),i=s([]),V=o=>{const v=()=>({ID:0,GenericEnumUUID:L,ConventionID:r.convention.ID,ConventionUUID:r.convention.ConventionUUID,Category:o,Name:"",Title:"",Description:""});n.value=v(),m.value=!0},k=o=>{n.value=o,m.value=!0},R=o=>{let v;switch(o.Category){case S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE:v=d.value.findIndex(u=>u.GenericEnumUUID==o.GenericEnumUUID),v>=0&&d.value.splice(v,1);break;case S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE:v=i.value.findIndex(u=>u.GenericEnumUUID==o.GenericEnumUUID),v>=0&&i.value.splice(v,1);break}},g=o=>{let v;switch(o.Category){case S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE:v=d.value.findIndex(u=>u.GenericEnumUUID==o.GenericEnumUUID),v>=0?d.value.splice(v,1,o):d.value.push(n.value);break;case S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE:v=i.value.findIndex(u=>u.GenericEnumUUID==o.GenericEnumUUID),v>=0?i.value.splice(v,1,o):i.value.push(n.value);break}};return p.getConventionGenericEnums(r.convention.ConventionUUID,S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(o=>{o&&(d.value=o)}),p.getConventionGenericEnums(r.convention.ConventionUUID,S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(o=>{o&&(i.value=o)}),(o,v)=>(a(),C(Z,{modelValue:N.value,"onUpdate:modelValue":v[4]||(v[4]=u=>N.value=u),title:"Configure Costume Props","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!0,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0},{default:e(()=>{var u;return[t(ve,null,{default:e(()=>[t(le,null,{default:e(()=>[t(oe,{color:"primary"},{default:e(()=>[h(" Clearance Options ")]),_:1}),t(ae,null,{default:e(()=>[t(Ue,null,{default:e(()=>[(a(!0),b(x,null,fe(d.value,f=>(a(),C(Ce,{key:f.GenericEnumUUID},{append:e(()=>[t(Y,{icon:"mdi:mdi-pencil-outline",color:"warning",size:"x-small",onClick:T=>k(f)},null,8,["onClick"])]),default:e(()=>[t(Ie,null,{default:e(()=>[A("strong",null,O(f.Name)+" - "+O(f.Title),1)]),_:2},1024),t(ge,null,{default:e(()=>[h(O(f.Description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(z,null,{default:e(()=>[t(D,{class:"text-right"},{default:e(()=>[t(Y,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:v[0]||(v[0]=f=>V(y(S).GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE))},{default:e(()=>[h(" Add Item ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(le,null,{default:e(()=>[t(oe,{color:"primary"},{default:e(()=>[h(" Item Types ")]),_:1}),t(ae,null,{default:e(()=>[t(Ue,null,{default:e(()=>[(a(!0),b(x,null,fe(i.value,f=>(a(),C(Ce,{key:f.GenericEnumUUID},{append:e(()=>[t(Y,{icon:"mdi:mdi-pencil-outline",color:"warning",size:"x-small",onClick:T=>k(f)},null,8,["onClick"])]),default:e(()=>[t(Ie,null,{default:e(()=>[A("strong",null,O(f.Name)+" - "+O(f.Title),1)]),_:2},1024),t(ge,null,{default:e(()=>[h(O(f.Description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(z,null,{default:e(()=>[t(D,{class:"text-right"},{default:e(()=>[t(Y,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:v[1]||(v[1]=f=>V(y(S).GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE))},{default:e(()=>[h(" Add Item ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),m.value&&n.value?(a(),C(be,{key:0,convention:o.convention,title:`Edit ${(u=y(J).find(f=>{var T;return f.value==((T=n.value)==null?void 0:T.Category)}))==null?void 0:u.title}`,modelValue:m.value,"onUpdate:modelValue":v[2]||(v[2]=f=>m.value=f),"generic-enum":n.value,"onUpdate:genericEnum":[v[3]||(v[3]=f=>n.value=f),g],"onDelete:genericEnum":R},null,8,["convention","title","modelValue","generic-enum"])):I("",!0)]}),_:1},8,["modelValue"]))}}),Qe=["href"],Je=["innerHTML"],Xe=["innerHTML"],Ze=H({__name:"ViewCostumeProp",props:q({convention:{},title:{default:"View Costume Prop"}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},costumeProp:{required:!0},costumePropModifiers:{}}),emits:["update:modelValue","update:costumeProp"],setup(r){const N=B(r,"modelValue"),p=B(r,"costumeProp"),n=j(),d=de(),m=s(`${d.GetCostumePropImageURL(p.value.CostumePropUUID)}?${new Date().getTime()}`),i=s([]),V=s([]);n.getConventionGenericEnums(r.convention.ConventionUUID,S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_CLEARANCE).then(R=>{R&&(i.value=R)}),n.getConventionGenericEnums(r.convention.ConventionUUID,S.GENERIC_ENUM_CATEGORY_COSTUME_PROP_TYPE).then(R=>{R&&(V.value=R)});const k=R=>{if(!R)return"";let g=R;return g=g.replaceAll(`
`,"<br>"),g=g.replaceAll(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),g=g.replaceAll(/\[i](.*?)\[\/i]/g,"<em>$1</em>"),g};return(R,g)=>(a(),C(Z,{modelValue:N.value,"onUpdate:modelValue":g[0]||(g[0]=o=>N.value=o),title:R.title,"show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!1,persistent:!1,scrollable:!0},{default:e(()=>[t(ee,null,{default:e(()=>[t(z,null,{default:e(()=>[t(D,{cols:"12"},{default:e(()=>[m.value?(a(),b("a",{key:0,href:m.value,target:"_blank",style:{cursor:"zoom-in"}},[t(me,{src:m.value,class:"border my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])],8,Qe)):I("",!0)]),_:1}),t(D,{cols:"12"},{default:e(()=>[h(O(p.value.Remarks),1)]),_:1}),p.value.AddedBy?(a(),C(D,{key:0,class:"text-right",cols:"12"},{default:e(()=>[A("small",null,"Added By: "+O(p.value.AddedBy.DisplayName),1)]),_:1})):I("",!0),p.value.ClearanceUUID!==""&&p.value.ClearanceUUID!==y(L)?(a(),C(D,{key:1,cols:"12"},{default:e(()=>{var o,v;return[A("div",null,[A("strong",null,O((o=i.value.find(u=>u.GenericEnumUUID===p.value.ClearanceUUID))==null?void 0:o.Title),1)]),A("div",{innerHTML:k((v=i.value.find(u=>u.GenericEnumUUID===p.value.ClearanceUUID))==null?void 0:v.Description)},null,8,Je)]}),_:1})):I("",!0),p.value.TypeUUID!==""&&p.value.TypeUUID!==y(L)?(a(),C(D,{key:2,cols:"12"},{default:e(()=>{var o;return[A("div",{innerHTML:k((o=V.value.find(v=>v.GenericEnumUUID===p.value.TypeUUID))==null?void 0:o.Description)},null,8,Xe)]}),_:1})):I("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),et=A("br",null,null,-1),tt=H({__name:"CostumePropsView",props:{convention:{}},setup(r){const N=j(),p=ye(),n=s(),d=s([]),m=s(1),i=s([]),V=s(!0),k=s(10),R=s(0),g=s([]),o=s(""),v=s(Pe(p,r.convention)),u=s(Oe(p,r.convention)),f=s(he(p,r.convention)),T=s(!1),$=s(!1),P=s(!1),U=s({}),_=Ae(()=>{o.value=Date.now().toString()}),G=()=>{n.value={ID:0,CostumePropUUID:L,ConventionID:r.convention.ID,ConventionUUID:r.convention.ConventionUUID,Description:"",HasPhoto:!1,Remarks:""},T.value=!0},w=c=>{n.value=c,T.value=!0},F=c=>{n.value=c,P.value=!0},Q=()=>{$.value=!0},X=s([{key:"owner",title:"Attendee",sortable:!1},{key:"type",title:"Type",sortable:!1},{key:"Clearance.Title",title:"Clearance",sortable:!1},{key:"actions",title:"",sortable:!1}]),ce=({page:c,itemsPerPage:l,sortBy:E})=>{V.value=!0,m.value=c,i.value=E;try{U.value.Limit=l,U.value.Offset=(c-1)*l;const W=o.value;N.searchConventionCostumeProps(r.convention.ConventionUUID,U.value).then(pe=>{pe&&W===o.value&&(R.value=pe.Total,d.value=pe.CostumeProps,V.value=!1)})}catch(W){console.error(W)}},M=c=>{const l=d.value.findIndex(E=>c.CostumePropUUID==E.CostumePropUUID);l>=0&&d.value.splice(l,1,c)};return(c,l)=>c.convention?(a(),b(x,{key:0},[t(ee,{fluid:!0,class:"px-1"},{default:e(()=>[u.value||f.value?(a(),C(z,{key:0},{default:e(()=>[f.value?(a(),C(D,{key:0,class:"flex-shrink-1 flex-grow-0"},{default:e(()=>[t(Y,{color:"primary","prepend-icon":"mdi:mdi-cog",onClick:Q},{default:e(()=>[h(" Config ")]),_:1})]),_:1})):I("",!0),t(ie),u.value?(a(),C(D,{key:1,class:"flex-shrink-1 flex-grow-0"},{default:e(()=>[t(Y,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:G},{default:e(()=>[h(" Record New Item ")]),_:1})]),_:1})):I("",!0)]),_:1})):I("",!0)]),_:1}),v.value||u.value?(a(),C(Re,{key:0,page:m.value,"onUpdate:page":l[4]||(l[4]=E=>m.value=E),"items-per-page":k.value,"onUpdate:itemsPerPage":l[5]||(l[5]=E=>k.value=E),"sort-by":g.value,"onUpdate:sortBy":l[6]||(l[6]=E=>g.value=E),headers:X.value,"items-length":R.value,items:d.value,"item-value":"key",loading:V.value,search:o.value,"onUpdate:options":ce},{top:e(()=>[t(ve,{class:"mb-3"},{default:e(()=>[t(le,null,{default:e(()=>[t(oe,{color:"secondary",class:"font-weight-bold pb-0 pt-0"},{default:e(()=>[t(D,{class:"pa-0"},{default:e(()=>[h(" Search Criteria "),t(Fe,{class:"pl-5",icon:"mdi:mdi-credit-card-search-outline"})]),_:1}),t(D,{class:"d-none d-sm-block pa-0",cols:"0"},{default:e(()=>[t(K,{convention:c.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"plain",modelValue:U.value.OwnerUUID,"onUpdate:modelValue":[l[0]||(l[0]=E=>U.value.OwnerUUID=E),y(_)],onClick:l[1]||(l[1]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),t(ie),t(D,{class:"d-none d-md-block pa-0"})]),_:1}),t(ae,{class:"pt-2"},{default:e(()=>[t(z,null,{default:e(()=>[t(D,{cols:"12",lg:"6"},{default:e(()=>[t(K,{convention:c.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"outlined",modelValue:U.value.OwnerUUID,"onUpdate:modelValue":[l[2]||(l[2]=E=>U.value.OwnerUUID=E),y(_)],onClick:l[3]||(l[3]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),"item.owner":e(({item:E})=>[E.Owner?(a(),b(x,{key:0},[E.Owner.Registrations&&E.Owner.Registrations.length>0?(a(),b(x,{key:0},[h(" #"+O(E.Owner.Registrations[0].Reference),1)],64)):I("",!0),h(" "+O(E.Owner.DisplayName),1)],64)):I("",!0)]),"item.type":e(({item:E})=>[E.Type?(a(),b(x,{key:0},[h(O(E.Type.Title)+" ",1),et],64)):I("",!0),A("small",null,O(E.Description),1)]),"item.actions":e(({item:E})=>[v.value?(a(),C(Y,{key:0,icon:"mdi:mdi-magnify",size:"x-small",color:"success",onClick:W=>F(E),class:"mr-2"},null,8,["onClick"])):I("",!0),u.value?(a(),C(Y,{key:1,icon:"mdi:mdi-pencil",size:"x-small",color:"warning",onClick:W=>w(E)},null,8,["onClick"])):I("",!0)]),_:1},8,["page","items-per-page","sort-by","headers","items-length","items","loading","search"])):I("",!0),T.value&&n.value?(a(),C(ze,{key:1,convention:c.convention,modelValue:T.value,"onUpdate:modelValue":l[7]||(l[7]=E=>T.value=E),"costume-prop":n.value,"onUpdate:costumeProp":[l[8]||(l[8]=E=>n.value=E),M],onNew:y(_)},null,8,["convention","modelValue","costume-prop","onNew"])):I("",!0),P.value&&n.value?(a(),C(Ze,{key:2,convention:c.convention,title:n.value.Description,modelValue:P.value,"onUpdate:modelValue":l[9]||(l[9]=E=>P.value=E),"costume-prop":n.value,"onUpdate:costumeProp":l[10]||(l[10]=E=>n.value=E)},null,8,["convention","title","modelValue","costume-prop"])):I("",!0),$.value?(a(),C(Ke,{key:3,convention:c.convention,modelValue:$.value,"onUpdate:modelValue":l[11]||(l[11]=E=>$.value=E)},null,8,["convention","modelValue"])):I("",!0)],64)):I("",!0)}}),nt=A("strong",null,"Added By:",-1),lt=A("strong",null,"Status:",-1),ot={key:0,class:"text-success"},at={key:1,class:"text-warning"},ut={key:2,class:"text-error"},it={key:3,class:"text-error"},st=H({__name:"EditLostAndFound",props:q({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},lostAndFound:{required:!0},lostAndFoundModifiers:{}}),emits:q(["new","update:lostAndFound"],["update:modelValue","update:lostAndFound"]),setup(r,{emit:N}){const p=B(r,"modelValue"),n=B(r,"lostAndFound"),d=j(),m=de(),i=N,V=s(ne(n.value)),k=s(`${m.GetLostAndFoundImageURL(n.value.LostAndFoundUUID)}?${new Date().getTime()}`),R=s(),g=s(),o=()=>{},v=()=>{n.value=ne(V.value)},u=P=>{d.saveLostAndFound(n.value).then(U=>{U?(P&&P("Saved Costume Prop"),n.value.LostAndFoundUUID!=U.LostAndFoundUUID&&i("new",U),n.value=U,i("update:lostAndFound",U),k.value?$(U.LostAndFoundUUID).then(()=>{setTimeout(()=>{p.value=!1},1e3)}).catch(()=>{P("Failed to Save Image")}):setTimeout(()=>{p.value=!1},1e3)):P&&P("Failed to Save Costume Prop")}).catch(()=>{P&&P("Failed to Save Costume Prop")})},f=ue(()=>!1),T=()=>{k.value=URL.createObjectURL(R.value.files[0])},$=async P=>{var _;const U=new FormData((_=g.value)==null?void 0:_.$el);if(U.get("Image")&&U.get("Image").size>0)return U.set("ConventionUUID",r.convention.ConventionUUID),U.set("LostAndFoundUUID",P),await m.SaveLostAndFoundImage(U)};return(P,U)=>(a(),C(Z,De({modelValue:p.value,"onUpdate:modelValue":U[5]||(U[5]=_=>p.value=_),title:"Report Lost & Found","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0,onReset:v,onSave:u},{[Ee(f.value&&"delete")]:o}),{default:e(()=>[t(ee,null,{default:e(()=>[t(z,null,{default:e(()=>[n.value.AddedBy?(a(),C(D,{key:0,cols:"12"},{default:e(()=>[nt,h(" "+O(n.value.AddedBy.DisplayName),1)]),_:1})):I("",!0),n.value.AddedBy?(a(),C(D,{key:1,cols:"12"},{default:e(()=>[lt,n.value.FoundByUUID&&n.value.OwnerUUID&&n.value.FoundByUUID!==y(L)&&n.value.OwnerUUID!==y(L)?(a(),b("span",ot," Returned ")):n.value.FoundByUUID&&n.value.FoundByUUID!==y(L)?(a(),b("span",at," Found ")):n.value.OwnerUUID&&n.value.OwnerUUID!==y(L)?(a(),b("span",ut," Lost ")):(a(),b("span",it," Unknown "))]),_:1})):I("",!0),t(D,{cols:"12"},{default:e(()=>[t(K,{modelValue:n.value.FoundByUUID,"onUpdate:modelValue":U[0]||(U[0]=_=>n.value.FoundByUUID=_),convention:P.convention,label:"Found By",variant:"outlined","persistent-hint":!0,hint:"If unknown enter yourself",clearable:!0},null,8,["modelValue","convention"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(K,{modelValue:n.value.OwnerUUID,"onUpdate:modelValue":U[1]||(U[1]=_=>n.value.OwnerUUID=_),convention:P.convention,label:"Claimant (Owner)",variant:"outlined","persistent-hint":!0,hint:"The person either reporting item missing or claiming it",clearable:!0},null,8,["modelValue","convention"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(se,{modelValue:n.value.Title,"onUpdate:modelValue":U[2]||(U[2]=_=>n.value.Title=_),label:"Title",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(re,{modelValue:n.value.Description,"onUpdate:modelValue":U[3]||(U[3]=_=>n.value.Description=_),label:"Description",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(re,{modelValue:n.value.Comments,"onUpdate:modelValue":U[4]||(U[4]=_=>n.value.Comments=_),label:"Comments",variant:"outlined","hide-details":""},null,8,["modelValue"])]),_:1}),t(D,{cols:"12"},{default:e(()=>[t(Ne,{ref_key:"propImageForm",ref:g,enctype:"multipart/form-data"},{default:e(()=>[t(Ge,{label:"Photograph",name:"Image",variant:"outlined",ref_key:"imageFileInput",ref:R,"prepend-icon":"mdi:mdi-camera",capture:"environment",accept:"image/avif, image/bmp, image/gif, image/jpeg, image/png, image/webp",onChange:T},null,512)]),_:1},512),k.value?(a(),C(me,{key:0,src:k.value,class:"border profileImage my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])):I("",!0)]),_:1})]),_:1})]),_:1})]),_:1},16,["modelValue"]))}}),rt=H({__name:"ConfigLostAndFound",props:q({convention:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(r){const N=B(r,"modelValue"),p=j(),n=s(),d=s([]),m=s(!1),i=g=>{const o=()=>({ID:0,GenericEnumUUID:L,ConventionID:r.convention.ID,ConventionUUID:r.convention.ConventionUUID,Category:g,Name:"",Title:"",Description:""});n.value=o(),m.value=!0},V=g=>{n.value=g,m.value=!0},k=g=>{let o;switch(g.Category){case S.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS:o=d.value.findIndex(v=>v.GenericEnumUUID==g.GenericEnumUUID),o>=0&&d.value.splice(o,1);break}},R=g=>{let o;switch(g.Category){case S.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS:o=d.value.findIndex(v=>v.GenericEnumUUID==g.GenericEnumUUID),o>=0?d.value.splice(o,1,g):d.value.push(n.value);break}};return p.getConventionGenericEnums(r.convention.ConventionUUID,S.GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS).then(g=>{g&&(d.value=g)}),(g,o)=>(a(),C(Z,{modelValue:N.value,"onUpdate:modelValue":o[3]||(o[3]=v=>N.value=v),title:"Configure Costume Props","show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!0,"hide-extension":!0,fullscreen:!0,persistent:!0,scrollable:!0},{default:e(()=>{var v;return[t(ve,null,{default:e(()=>[t(le,null,{default:e(()=>[t(oe,{color:"primary"},{default:e(()=>[h(" Item Status ")]),_:1}),t(ae,null,{default:e(()=>[t(Ue,null,{default:e(()=>[(a(!0),b(x,null,fe(d.value,u=>(a(),C(Ce,{key:u.GenericEnumUUID},{append:e(()=>[t(Y,{icon:"mdi:mdi-pencil-outline",color:"warning",size:"x-small",onClick:f=>V(u)},null,8,["onClick"])]),default:e(()=>[t(Ie,null,{default:e(()=>[A("strong",null,O(u.Name)+" - "+O(u.Title),1)]),_:2},1024),t(ge,null,{default:e(()=>[h(O(u.Description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(z,null,{default:e(()=>[t(D,{class:"text-right"},{default:e(()=>[t(Y,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:o[0]||(o[0]=u=>i(y(S).GENERIC_ENUM_CATEGORY_LOST_AND_FOUND_STATUS))},{default:e(()=>[h(" Add Item ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),m.value&&n.value?(a(),C(be,{key:0,convention:g.convention,title:`Edit ${(v=y(J).find(u=>{var f;return u.value==((f=n.value)==null?void 0:f.Category)}))==null?void 0:v.title}`,modelValue:m.value,"onUpdate:modelValue":o[1]||(o[1]=u=>m.value=u),"generic-enum":n.value,"onUpdate:genericEnum":[o[2]||(o[2]=u=>n.value=u),R],"onDelete:genericEnum":k},null,8,["convention","title","modelValue","generic-enum"])):I("",!0)]}),_:1},8,["modelValue"]))}}),dt=["href"],mt=H({__name:"ViewLostAndFound",props:q({title:{default:"View Costume Prop"}},{modelValue:{type:Boolean,required:!0},modelModifiers:{},lostAndFound:{required:!0},lostAndFoundModifiers:{}}),emits:["update:modelValue","update:lostAndFound"],setup(r){const N=B(r,"modelValue"),p=B(r,"lostAndFound"),n=de(),d=s(`${n.GetLostAndFoundImageURL(p.value.LostAndFoundUUID)}?${new Date().getTime()}`);return(m,i)=>(a(),C(Z,{modelValue:N.value,"onUpdate:modelValue":i[0]||(i[0]=V=>N.value=V),title:m.title,"show-reset-action":!1,"show-save-action":!1,"show-delete-action":!1,"show-close-action":!1,"hide-extension":!0,fullscreen:!1,persistent:!1,scrollable:!0},{default:e(()=>[t(ee,null,{default:e(()=>[t(z,null,{default:e(()=>[t(D,{cols:"12"},{default:e(()=>[d.value?(a(),b("a",{key:0,href:d.value,target:"_blank",style:{cursor:"zoom-in"}},[t(me,{src:d.value,class:"border my-0 mx-auto","max-height":"400","max-width":"400",ref:"imageDisplay",cover:!1},null,8,["src"])],8,dt)):I("",!0)]),_:1}),t(D,{cols:"12"},{default:e(()=>[h(O(p.value.Description),1)]),_:1}),t(D,{cols:"12"},{default:e(()=>[h(O(p.value.Comments),1)]),_:1}),p.value.AddedBy?(a(),C(D,{key:0,class:"text-right",cols:"12"},{default:e(()=>[A("small",null,"Added By: "+O(p.value.AddedBy.DisplayName),1)]),_:1})):I("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue","title"]))}}),vt=A("strong",null,"Reported:",-1),ct=A("br",null,null,-1),pt=A("strong",null,"Updated:",-1),ft=A("br",null,null,-1),Ut={key:0,class:"text-success"},Ct={key:1,class:"text-warning"},It={key:2,class:"text-error"},gt={key:3,class:"text-error"},Dt=H({__name:"LostAndFoundView",props:{convention:{}},setup(r){const N=j(),p=ye(),n=s(),d=s([]),m=s(1),i=s([]),V=s(!0),k=s(10),R=s(0),g=s([]),o=s(""),v=s(Pe(p,r.convention)),u=s(Oe(p,r.convention)),f=s(he(p,r.convention)),T=s(!1),$=s(!1),P=s(!1),U=s({}),_=Ae(()=>{o.value=Date.now().toString()}),G=()=>{n.value={ID:0,LostAndFoundUUID:L,ConventionID:r.convention.ID,ConventionUUID:r.convention.ConventionUUID,Title:"",Description:"",HasPhoto:!1,Comments:""},T.value=!0},w=M=>{n.value=M,T.value=!0},F=M=>{n.value=M,P.value=!0},Q=s([{key:"owner",title:"Owner",sortable:!1},{key:"finder",title:"Found By",sortable:!1},{key:"title",title:"Title",sortable:!1},{key:"status",title:"Status",sortable:!1},{key:"timestamps",title:"Date",sortable:!1},{key:"actions",title:"",sortable:!1}]),X=({page:M,itemsPerPage:c,sortBy:l})=>{V.value=!0,m.value=M,i.value=l;try{U.value.Limit=c,U.value.Offset=(M-1)*c;const E=o.value;N.searchConventionLostAndFound(r.convention.ConventionUUID,U.value).then(W=>{W&&E===o.value&&(R.value=W.Total,d.value=W.LostAndFound,V.value=!1)})}catch(E){console.error(E)}},ce=M=>{const c=d.value.findIndex(l=>M.LostAndFoundUUID==l.LostAndFoundUUID);c>=0&&d.value.splice(c,1,M)};return(M,c)=>M.convention?(a(),b(x,{key:0},[t(ee,{fluid:!0,class:"px-1"},{default:e(()=>[u.value||f.value?(a(),C(z,{key:0},{default:e(()=>[t(ie),u.value?(a(),C(D,{key:0,class:"flex-shrink-1 flex-grow-0"},{default:e(()=>[t(Y,{color:"success","prepend-icon":"mdi:mdi-plus",onClick:G},{default:e(()=>[h(" Record New Item ")]),_:1})]),_:1})):I("",!0)]),_:1})):I("",!0)]),_:1}),v.value||u.value?(a(),C(Re,{key:0,page:m.value,"onUpdate:page":c[8]||(c[8]=l=>m.value=l),"items-per-page":k.value,"onUpdate:itemsPerPage":c[9]||(c[9]=l=>k.value=l),"sort-by":g.value,"onUpdate:sortBy":c[10]||(c[10]=l=>g.value=l),headers:Q.value,"items-length":R.value,items:d.value,"item-value":"key",loading:V.value,search:o.value,"onUpdate:options":X},{top:e(()=>[t(ve,{class:"mb-3"},{default:e(()=>[t(le,null,{default:e(()=>[t(oe,{color:"secondary",class:"font-weight-bold pb-0 pt-0"},{default:e(()=>[t(D,{class:"pa-0"},{default:e(()=>[h(" Search Criteria "),t(Fe,{class:"pl-5",icon:"mdi:mdi-credit-card-search-outline"})]),_:1}),t(D,{class:"d-none d-sm-block pa-0 pr-4",cols:"0"},{default:e(()=>[t(K,{convention:M.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"plain",modelValue:U.value.OwnerUUID,"onUpdate:modelValue":[c[0]||(c[0]=l=>U.value.OwnerUUID=l),y(_)],onClick:c[1]||(c[1]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),t(D,{class:"d-none d-sm-block pa-0 pr-4",cols:"0"},{default:e(()=>[t(K,{convention:M.convention,label:"Finder",clearable:!0,"hide-details":"",variant:"plain",modelValue:U.value.FoundByUUID,"onUpdate:modelValue":[c[2]||(c[2]=l=>U.value.FoundByUUID=l),y(_)],onClick:c[3]||(c[3]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),t(ie),t(D,{class:"d-none d-md-block pa-0"})]),_:1}),t(ae,{class:"pt-2"},{default:e(()=>[t(z,null,{default:e(()=>[t(D,{cols:"12",lg:"6"},{default:e(()=>[t(K,{convention:M.convention,label:"Owner",clearable:!0,"hide-details":"",variant:"outlined",modelValue:U.value.OwnerUUID,"onUpdate:modelValue":[c[4]||(c[4]=l=>U.value.OwnerUUID=l),y(_)],onClick:c[5]||(c[5]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1}),t(D,{cols:"12",lg:"6"},{default:e(()=>[t(K,{convention:M.convention,label:"Finder",clearable:!0,"hide-details":"",variant:"outlined",modelValue:U.value.FoundByUUID,"onUpdate:modelValue":[c[6]||(c[6]=l=>U.value.FoundByUUID=l),y(_)],onClick:c[7]||(c[7]=te(()=>{},["stop"])),"onClick:clear":y(_),onInput:y(_)},null,8,["convention","modelValue","onClick:clear","onInput","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),"item.finder":e(({item:l})=>[l.FoundBy?(a(),b(x,{key:0},[l.FoundBy.Registrations&&l.FoundBy.Registrations.length>0?(a(),b(x,{key:0},[h(" #"+O(l.FoundBy.Registrations[0].Reference),1)],64)):I("",!0),h(" "+O(l.FoundBy.DisplayName),1)],64)):I("",!0)]),"item.owner":e(({item:l})=>[l.Owner?(a(),b(x,{key:0},[l.Owner.Registrations&&l.Owner.Registrations.length>0?(a(),b(x,{key:0},[h(" #"+O(l.Owner.Registrations[0].Reference),1)],64)):I("",!0),h(" "+O(l.Owner.DisplayName),1)],64)):I("",!0)]),"item.timestamps":e(({item:l})=>[vt,h(" "+O(y(Ve)(l.CreatedAt,{withTime:!0,withYear:!0}))+" ",1),l.UpdatedAt!=l.CreatedAt?(a(),b(x,{key:0},[ct,pt,h(" "+O(y(Ve)(l.UpdatedAt,{withTime:!0,withYear:!0})),1)],64)):I("",!0)]),"item.title":e(({item:l})=>[A("strong",null,O(l.Title),1),ft,A("small",null,O(l.Description),1)]),"item.status":e(({item:l})=>[l.FoundByUUID&&l.OwnerUUID&&l.FoundByUUID!==y(L)&&l.OwnerUUID!==y(L)?(a(),b("span",Ut," Returned ")):l.FoundByUUID&&l.FoundByUUID!==y(L)?(a(),b("span",Ct," Found ")):l.OwnerUUID&&l.OwnerUUID!==y(L)?(a(),b("span",It," Lost ")):(a(),b("span",gt," Unknown "))]),"item.actions":e(({item:l})=>[v.value?(a(),C(Y,{key:0,icon:"mdi:mdi-magnify",size:"x-small",color:"success",onClick:E=>F(l),class:"mr-2"},null,8,["onClick"])):I("",!0),u.value?(a(),C(Y,{key:1,icon:"mdi:mdi-pencil",size:"x-small",color:"warning",onClick:E=>w(l)},null,8,["onClick"])):I("",!0)]),_:1},8,["page","items-per-page","sort-by","headers","items-length","items","loading","search"])):I("",!0),T.value&&n.value?(a(),C(st,{key:1,convention:M.convention,modelValue:T.value,"onUpdate:modelValue":c[11]||(c[11]=l=>T.value=l),"lost-and-found":n.value,"onUpdate:lostAndFound":[c[12]||(c[12]=l=>n.value=l),ce],onNew:y(_)},null,8,["convention","modelValue","lost-and-found","onNew"])):I("",!0),P.value&&n.value?(a(),C(mt,{key:2,title:n.value.Title,modelValue:P.value,"onUpdate:modelValue":c[13]||(c[13]=l=>P.value=l),"lost-and-found":n.value,"onUpdate:lostAndFound":c[14]||(c[14]=l=>n.value=l)},null,8,["title","modelValue","lost-and-found"])):I("",!0),$.value?(a(),C(rt,{key:3,convention:M.convention,modelValue:$.value,"onUpdate:modelValue":c[15]||(c[15]=l=>$.value=l)},null,8,["convention","modelValue"])):I("",!0)],64)):I("",!0)}}),Zt=H({__name:"OperationsView",emits:["pageTitle"],setup(r,{emit:N}){var g;const p=j(),n=N,d=Se(),m=Le();ye(),n("pageTitle","Operations");const i=s(),V=s(["Costume Props","Lost and Found"]);let k=((g=d.params.convention)==null?void 0:g.toString())||"";const R=s();return k?p.getConvention(k).then(o=>{o&&(R.value=o)}).catch(()=>{m.push("/")}):m.push("/"),(o,v)=>(a(),C(Me,null,{default:e(()=>[t(xe,{color:"blue-darken-4"},{default:e(()=>[t($e,{modelValue:i.value,"onUpdate:modelValue":v[0]||(v[0]=u=>i.value=u),items:V.value,"show-arrows":""},null,8,["modelValue","items"])]),_:1}),t(Be,{modelValue:i.value,"onUpdate:modelValue":v[1]||(v[1]=u=>i.value=u),disabled:!0,touch:!1},{default:e(()=>[t(_e,{value:"Costume Props"},{default:e(()=>[i.value=="Costume Props"?(a(),C(Te,{key:0,class:"pa-2"},{default:e(()=>[R.value?(a(),C(tt,{key:0,convention:R.value},null,8,["convention"])):I("",!0)]),_:1})):I("",!0)]),_:1}),t(_e,{value:"Lost and Found"},{default:e(()=>[i.value=="Lost and Found"?(a(),C(Te,{key:0,class:"pa-2"},{default:e(()=>[R.value?(a(),C(Dt,{key:0,convention:R.value},null,8,["convention"])):I("",!0)]),_:1})):I("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{Zt as default};
