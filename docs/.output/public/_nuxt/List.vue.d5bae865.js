import{_ as r,u as l}from"./DocsAsideTree.08d70919.js";import u from"./ContentSlot.7e1a494f.js";import{f as p,ae as m,h as _,j as e}from"./runtime-core.esm-bundler.6894272a.js";const f={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=p({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:n=>["primary","info","success","warning","danger"].includes(n)}},setup(n){const t=m(),{flatUnwrap:i,unwrap:s}=l(),a=_(()=>n.icon||f[n.type]);return()=>{const c=i((t.default&&t.default())??[],["ul"]).map(o=>s(o,["li"]));return e("ul",c.map(o=>e("li",[e("span",{class:`list-icon ${n.type}`},e(r,{name:a.value,class:"icon"})),e("span",e(u,{use:()=>o}))])))}}});export{g as _};
