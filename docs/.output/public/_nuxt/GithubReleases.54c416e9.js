import"./app.config.4114fca6.js";import{u as o}from"./asyncData.2775b491.js";import{h as i}from"./entry.2d43dc03.js";import{u}from"./useGithub.916c5979.js";import{f as m,ae as p}from"./runtime-core.esm-bundler.6894272a.js";import"./index.d2b0cb5e.js";import"./DocsAsideTree.08d70919.js";import"./cookie.5bbb58d5.js";import"./useDocus.edcbeab5.js";import"./Container.f1017aa2.js";import"./query.c3f7607a.js";const R=m({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(r){const{fetchReleases:a}=u(),{data:s,refresh:e,pending:t}=await o(`github-releases-${i(r.query)}`,()=>a(r.query));return{releases:s,refresh:e,pending:t}},render({releases:r,refresh:a,pending:s}){var t;const e=p();return(t=e==null?void 0:e.default)==null?void 0:t.call(e,{releases:r,refresh:a,pending:s})}});export{R as default};
