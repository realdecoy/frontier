import i from"./ProseCodeCopyButton.1eec7dbb.js";import{f as m,r as u,q as n,x as a,J as p,D as d,P as f,G as c,y as g}from"./runtime-core.esm-bundler.6894272a.js";/* empty css                      */import{a as v}from"./Container.f1017aa2.js";import"./DocsAsideTree.08d70919.js";import"./app.config.4114fca6.js";import"./index.d2b0cb5e.js";import"./cookie.5bbb58d5.js";import"./useDocus.edcbeab5.js";import"./index.889aa611.js";const y={key:0,class:"filename"},h=m({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const o=u(!1);return(s,t)=>{const r=i;return n(),a("div",{class:g([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=l=>o.value=!0),onMouseleave:t[1]||(t[1]=l=>o.value=!1)},[e.filename?(n(),a("span",y,p(e.filename),1)):d("",!0),f(s.$slots,"default",{},void 0,!0),c(r,{show:o.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),M=v(h,[["__scopeId","data-v-0f086f28"]]);export{M as default};