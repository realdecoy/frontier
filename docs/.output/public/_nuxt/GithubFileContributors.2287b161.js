import"./app.config.4114fca6.js";import{u as a}from"./asyncData.2775b491.js";import{h as s}from"./entry.2d43dc03.js";import{u as n}from"./useGithub.916c5979.js";import{f as m,t as f,a as c,ae as p}from"./runtime-core.esm-bundler.6894272a.js";import"./index.d2b0cb5e.js";import"./DocsAsideTree.08d70919.js";import"./cookie.5bbb58d5.js";import"./useDocus.edcbeab5.js";import"./Container.f1017aa2.js";import"./query.c3f7607a.js";const j=m({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(e){const o=f(e.query,"source"),{fetchFileContributors:i}=n();c(o,()=>{r&&r()});const{data:t,refresh:r,pending:u}=await a(`github-file-contributors-${s(e.query)}`,()=>i(e.query));return{contributors:t,refresh:r,pending:u}},render({contributors:e,refresh:o,pending:i}){var r;const t=p();return(r=t==null?void 0:t.default)==null?void 0:r.call(t,{contributors:e,refresh:o,pending:i})}});export{j as default};
