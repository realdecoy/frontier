import{w as i,b as a}from"./app.config.4114fca6.js";import{f as n,h,j as e}from"./runtime-core.esm-bundler.6894272a.js";const p=n({props:{src:{type:[String,Object],default:null}},setup(s){const r=t=>t&&t.startsWith("/")&&!t.startsWith("//")?i(t,a().app.baseURL):t;return{imgSrc:h(()=>{let t=s.src;try{t=JSON.parse(t)}catch{t=s.src}return typeof t=="string"?r(s.src):{light:r(t.light),dark:r(t.dark)}})}},render({imgSrc:s}){if(typeof s=="string")return e("img",{src:s,...this.$attrs});const r=[];return s.light&&r.push(e("img",{src:s.light,class:["dark-img"],...this.$attrs})),s.dark&&r.push(e("img",{src:s.dark,class:["light-img"],...this.$attrs})),r}});export{p as _};
