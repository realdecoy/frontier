import{_ as T,a as b}from"./Container.f1017aa2.js";import{u as q,l as k,p as S}from"./app.config.4114fca6.js";import{T as g}from"./DocsAsideTree.08d70919.js";import{r as I}from"./asyncData.2775b491.js";import{u as L}from"./cookie.5bbb58d5.js";import{f as M,r as p,O as A,aj as N,q as u,x as l,y as B,F as E,E as e,D as v,G as x,C,J as R,n as U,M as z,N as D}from"./runtime-core.esm-bundler.6894272a.js";/* empty css                               */import"./index.d2b0cb5e.js";import"./useDocus.edcbeab5.js";import"./entry.2d43dc03.js";import"./query.c3f7607a.js";const i=a=>(z("data-v-572e7d1a"),a=a(),D(),a),F=i(()=>e("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),H=i(()=>e("span",null,"Preview mode enabled",-1)),V={key:0},j=i(()=>e("div",{id:"__preview_background"},null,-1)),O=i(()=>e("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),Z=i(()=>e("p",null,"Initializing the preview...",-1)),G={key:0},J=i(()=>e("div",{id:"__preview_background"},null,-1)),$={id:"__preview_loader"},K=M({__name:"ContentPreviewMode",props:{previewToken:{type:Object,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(a){const s=a,_=["__nuxt_preview","__preview_enabled"],P=q(),w=p(!0),m=p(!1),o=p(!1),n=p("");let t;const f=async()=>{L("previewToken").value="",k().query.preview="",await S(k().path),U(()=>{I()}),w.value=!1,n.value="",document.body.classList.remove(..._)},h=async c=>{const r=await s.syncPreview(c);if(o.value!==!0){if(!r){setTimeout(()=>h(c),1e3);return}o.value=!0,P.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&t.disconnect()}};return A(async()=>{t=(await T(()=>import("./index.e2533f77.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken.value}});let r;t.on("connect",()=>{r=setTimeout(()=>{o.value||(r=setTimeout(()=>{n.value="Preview sync timed out",o.value=!1},3e4),t.emit("draft:requestSync"))},3e4)});const y=()=>{r&&(clearInterval(r),r=null)};t.on("draft:sync",d=>{if(y(),!d){s.requestPreviewSyncAPI(),t.once("draft:ready",()=>{t.emit("draft:requestSync")});return}h(d)}),t.on("draft:unauthorized",()=>{y(),n.value="Unauthorized preview token",o.value=!1}),t.on("disconnect",()=>{y()}),document.body.classList.add(..._),t.on("draft:update",d=>{m.value=!0,s.syncPreview(d),m.value=!1})}),N(()=>{document.body.classList.remove(..._)}),(c,r)=>(u(),l("div",null,[w.value?(u(),l("div",{key:0,id:"__nuxt_preview",class:B({__preview_ready:o.value,__preview_refreshing:m.value})},[o.value?(u(),l(E,{key:0},[F,H,e("button",{onClick:f}," Close ")],64)):v("",!0)],2)):v("",!0),x(g,{name:"preview-loading"},{default:C(()=>[w.value&&!o.value&&!n.value?(u(),l("div",V,[j,e("div",{id:"__preview_loader"},[O,Z,e("button",{onClick:f}," Cancel ")])])):v("",!0)]),_:1}),x(g,{name:"preview-loading"},{default:C(()=>[n.value?(u(),l("div",G,[J,e("div",$,[e("p",null,R(n.value),1),e("button",{onClick:f}," Exit preview ")])])):v("",!0)]),_:1})]))}}),se=b(K,[["__scopeId","data-v-572e7d1a"]]);export{se as default};
