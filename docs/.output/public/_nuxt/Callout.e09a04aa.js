import p from"./ContentSlot.7e1a494f.js";import{v as d,_}from"./DocsAsideTree.08d70919.js";import{f,r as l,q as v,x as h,E as s,G as t,y as r,u as c,a9 as y}from"./runtime-core.esm-bundler.6894272a.js";/* empty css                    */import{a as g}from"./Container.f1017aa2.js";import"./app.config.4114fca6.js";import"./index.d2b0cb5e.js";import"./cookie.5bbb58d5.js";import"./useDocus.edcbeab5.js";const C={class:"summary"},V={class:"content"},w=f({__name:"Callout",props:{type:{type:String,default:"info",validator(o){return["info","success","warning","danger","primary"].includes(o)}},modelValue:{required:!1,default:()=>l(!1)}},emits:["update:modelValue"],setup(o,{emit:i}){const e=l(o.modelValue),u=()=>{e.value=!e.value,i("update:modelValue",e.value)};return(a,x)=>{const n=p,m=_;return v(),h("div",{class:r(["callout",[o.type]])},[s("span",{class:"preview",onClick:u},[s("span",C,[t(n,{use:a.$slots.summary},null,8,["use"])]),t(m,{name:"heroicons-outline:chevron-right",class:r(["icon",[c(e)&&"rotate"]])},null,8,["class"])]),y(s("div",V,[t(n,{use:a.$slots.content},null,8,["use"])],512),[[d,c(e)]])],2)}}}),D=g(w,[["__scopeId","data-v-37e0bf51"]]);export{D as default};
