import{I as D,c as t,W as ee,l as U,a8 as te,a9 as ae,s as O,m as oe,Z as b,q as ne,N as l,b as c,f as h,g as a,y as o,T as _,A as k,F as v,B as y,G as p}from"./index-BK2R8M7z.js";import{a as W,d as S}from"./database-KrXFxb6r.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ie,D as T}from"./FileCabinet-4WE2zvG3.js";import{E as B}from"./Edit-QZ2ml7Ym.js";import{L as le}from"./LoadingFour-DvAA0m7R.js";import{D as re}from"./Delete-DmM-sNsw.js";const ce=D("audio-file",!0,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M8 44V4H31L40 14.5V44H8Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M32 14L26 16.9688V31.5",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("circle",{cx:"20.5",cy:"31.5",r:"5.5",fill:e.colors[3],stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),de=D("picture-one",!0,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M42 36L31 26L21 35L14 29L6 35",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),ue=D("upload",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("mask",{id:e.id+"04cec2fa",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"48",height:"48",style:{maskType:"alpha"}},[t("path",{d:"M48 0H0V48H48V0Z",fill:e.colors[2]},null)]),t("g",{mask:"url(#"+e.id+"04cec2fa)"},[t("path",{d:"M6 24.0083V42H42V24",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M33 15L24 6L15 15",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M23.9917 32V6",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])])}),_e={class:"dataspace-container"},ke={key:1},me={__name:"DatabaseDetail",setup(e){const{t:n}=ee(),j=U(!0),H=te(),z=ae(),w=H.params.databaseId,g=U({}),s=O({columns:[{name:n("workspace.databaseDetail.object_title"),dataIndex:"title",key:"title"},{title:n("workspace.databaseDetail.data_type"),key:"data_type",dataIndex:"data_type",width:"200px"},{title:n("workspace.databaseDetail.source_url"),key:"source_url",dataIndex:"source_url",width:"200px"},{title:n("common.create_time"),key:"create_time",dataIndex:"create_time",sorter:!0,sortDirections:["descend","ascend"],width:"200px"},{title:n("common.action"),key:"action",width:"80px"}],data:[],loading:!1,current:1,pageSize:10,total:0,pagination:oe(()=>({total:s.total,current:s.current,pageSize:s.pageSize})),handleTableChange:(r,i,f)=>{s.load({page_size:r.pageSize,page:r.current,sort_field:f.field,sort_order:f.order})},hoverRowOid:null,customRow:r=>({style:{cursor:"pointer"},onClick:async i=>{(i.target.classList.contains("ant-table-cell")||i.target.classList.contains("object-title"))&&await z.push(`/data/${w}/object/${r.oid}`)},onMouseenter:i=>{s.hoverRowOid=r.vid},onMouseleave:i=>{s.hoverRowOid=null}}),load:async r=>{s.loading=!0;const i=await W("list",{vid:w,...r});i.status==200?s.data=i.data.objects.map(f=>(f.create_time=new Date(f.create_time).toLocaleString(),f)):b.error(i.msg),s.total=i.data.total,s.pageSize=i.data.page_size,s.current=i.data.page,s.loading=!1}}),$=async()=>{await s.load({});const r=await S("get",{vid:w});r.status==200?(g.value=r.data,j.value=!1):b.error(r.msg)};ne(async()=>{await $()});const A=async()=>{await z.push(`/data/${w}/create`)},E=r=>{W("delete",{oid:r}).then(i=>{i.status===200?b.success(n("workspace.databaseDetail.delete_success")):b.error(n("workspace.databaseDetail.delete_failed")),s.load({})})},u=O({open:!1,form:{name:g.value.name},show:()=>{u.open=!0,u.form.name=g.value.name},ok:async()=>{const r=await S("update",{vid:w,...u.form});r.status==200?(b.success(n("common.save_success")),g.value.name=u.form.name,u.open=!1):b.error(r.msg)}});return(r,i)=>{const f=l("router-link"),I=l("a-breadcrumb-item"),F=l("a-breadcrumb"),M=l("a-col"),L=l("a-button"),V=l("a-tooltip"),P=l("a-input"),Z=l("a-form-item"),N=l("a-form"),q=l("a-modal"),G=l("a-flex"),C=l("a-typography-text"),x=l("a-tag"),X=l("a-typography-link"),J=l("a-popconfirm"),K=l("a-table"),Q=l("a-card"),Y=l("a-row");return c(),h("div",_e,[t(Y,{align:"center",gutter:[16,16]},{default:a(()=>[t(M,{xl:16,lg:18,md:20,sm:22,xs:24},{default:a(()=>[t(F,null,{default:a(()=>[t(I,null,{default:a(()=>[t(f,{to:"/data"},{default:a(()=>[t(o(ie)),_(" "+k(o(n)("components.layout.basicHeader.data_space")),1)]),_:1})]),_:1}),t(I,null,{default:a(()=>[t(o(T)),_(" "+k(g.value.name),1)]),_:1})]),_:1})]),_:1}),t(M,{xl:16,lg:18,md:20,sm:22,xs:24},{default:a(()=>[t(Q,{loading:j.value},{title:a(()=>[t(o(T)),_(" "+k(g.value.name),1)]),extra:a(()=>[t(G,{gap:"middle"},{default:a(()=>[t(V,{title:o(n)("workspace.databaseDetail.modify_database_info")},{default:a(()=>[t(L,{type:"text",size:"large",class:"title-edit-button",onClick:u.show},{icon:a(()=>[t(o(B))]),_:1},8,["onClick"])]),_:1},8,["title"]),t(q,{title:o(n)("workspace.databaseDetail.modify_database_info"),onOk:u.ok,"confirm-loading":u.createLoading,open:u.open,"onUpdate:open":i[1]||(i[1]=m=>u.open=m)},{default:a(()=>[t(N,{model:g.value,layout:"vertical"},{default:a(()=>[t(Z,{label:o(n)("workspace.dataSpace.database_name"),name:"name",rules:[{required:!0}]},{default:a(()=>[t(P,{value:u.form.name,"onUpdate:value":i[0]||(i[0]=m=>u.form.name=m)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["title","onOk","confirm-loading","open"]),t(V,{title:o(n)("workspace.databaseDetail.add_object")},{default:a(()=>[t(L,{type:"text",size:"large",onClick:A},{icon:a(()=>[t(o(ue))]),_:1})]),_:1},8,["title"])]),_:1})]),default:a(()=>[t(K,{loading:s.loading,customRow:s.customRow,columns:s.columns,"data-source":s.data,pagination:s.pagination,onChange:s.handleTableChange},{headerCell:a(({column:m})=>[m.key==="title"?(c(),h(v,{key:0},[_(k(o(n)("workspace.databaseDetail.object_title")),1)],64)):y("",!0)]),bodyCell:a(({column:m,record:d})=>{var R;return[m.key==="title"?(c(),h(v,{key:0},[d.status=="PR"?(c(),p(C,{key:0,disabled:""},{default:a(()=>[_(k(d.title)+" ",1),t(o(le),{spin:!0})]),_:2},1024)):(c(),p(C,{key:1,class:"object-title"},{default:a(()=>[_(k(d.title),1)]),_:2},1024))],64)):m.key==="data_type"?(c(),h("span",ke,[d.data_type.toUpperCase()=="TEXT"?(c(),p(x,{key:0,color:"blue"},{default:a(()=>[t(o(B)),_(" "+k(o(n)(`workspace.databaseDetail.data_type_${d.data_type.toUpperCase()}`)),1)]),_:2},1024)):y("",!0),d.data_type.toUpperCase()=="IMAGE"?(c(),p(x,{key:1,color:"green"},{default:a(()=>[t(o(de)),_(" "+k(o(n)(`workspace.databaseDetail.data_type_${d.data_type.toUpperCase()}`)),1)]),_:2},1024)):y("",!0),d.data_type.toUpperCase()=="AUDIO"?(c(),p(x,{key:2,color:"purple"},{default:a(()=>[t(o(ce)),_(" "+k(o(n)(`workspace.databaseDetail.data_type_${d.data_type.toUpperCase()}`)),1)]),_:2},1024)):y("",!0)])):m.key==="source_url"?(c(),h(v,{key:2},[((R=d.source_url)==null?void 0:R.length)>0?(c(),p(X,{key:0,href:d.source_url,target:"_blank"},{default:a(()=>[_(k(o(n)("workspace.databaseDetail.source_url")),1)]),_:2},1032,["href"])):(c(),p(C,{key:1,disabled:""},{default:a(()=>[_(k(o(n)("workspace.databaseDetail.source_url")),1)]),_:1}))],64)):m.key==="action"?(c(),h(v,{key:3},[d.status!="PR"?(c(),p(J,{key:0,placement:"leftTop",title:o(n)("workspace.databaseDetail.delete_confirm"),onConfirm:fe=>E(d.oid)},{default:a(()=>[t(L,{type:"text",danger:""},{icon:a(()=>[t(o(re))]),_:1})]),_:2},1032,["title","onConfirm"])):y("",!0)],64)):y("",!0)]}),_:1},8,["loading","customRow","columns","data-source","pagination","onChange"])]),_:1},8,["loading"])]),_:1})]),_:1})])}}},Le=se(me,[["__scopeId","data-v-943772ab"]]);export{Le as default};
