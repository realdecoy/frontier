import"./app.config.4114fca6.js";import{u as i}from"./asyncData.2775b491.js";import{h as a}from"./entry.2d43dc03.js";import{u as s}from"./useGithub.916c5979.js";import{f as u,ae as p}from"./runtime-core.esm-bundler.6894272a.js";import"./index.d2b0cb5e.js";import"./DocsAsideTree.08d70919.js";import"./cookie.5bbb58d5.js";import"./useDocus.edcbeab5.js";import"./Container.f1017aa2.js";import"./query.c3f7607a.js";const G=u({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(r){const{fetchCommits:m}=s(),{data:o,pending:t,refresh:e}=await i(`github-commits-${a(r.query)}`,()=>m(r.query));return{commits:o,pending:t,refresh:e}},render({commits:r,pending:m,refresh:o}){var e;const t=p();return(e=t==null?void 0:t.default)==null?void 0:e.call(t,{commits:r,pending:m,refresh:o})}});export{G as default};
