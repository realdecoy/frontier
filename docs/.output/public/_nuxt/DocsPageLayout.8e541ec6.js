import G from"./DocsAside.44ffd29b.js";import J from"./ProseCodeInline.dca1a534.js";import R from"./Alert.443f6167.js";import U from"./DocsPageBottom.a96d3867.js";import K from"./DocsPrevNext.adb795e8.js";import{_ as Q}from"./DocsAsideTree.08d70919.js";import W from"./DocsToc.03cf2013.js";import{b as X,a as Y}from"./Container.f1017aa2.js";import{d as Z,c as oo,u as to}from"./useDocus.edcbeab5.js";import{l as eo}from"./app.config.4114fca6.js";import{f as no,h as d,r as I,O as so,o as ao,q as i,B as $,C as g,u as e,x,G as r,D as y,E as p,P as ro,L as k,J as co,F as lo,y as f,M as io,N as po}from"./runtime-core.esm-bundler.6894272a.js";/* empty css                           *//* empty css                      */import"./cookie.5bbb58d5.js";import"./index.d2b0cb5e.js";import"./ContentSlot.7e1a494f.js";/* empty css                  */import"./ProseA.c8de8b63.js";/* empty css                   */import"./EditOnLink.vue.21b8aa9d.js";/* empty css                           *//* empty css                         */import"./DocsTocLinks.c11364e4.js";/* empty css                         *//* empty css                    */const uo=u=>(io("data-v-64504251"),u=u(),po(),u),_o={key:1,class:"toc"},mo={class:"toc-wrapper"},fo=uo(()=>p("span",{class:"title"},"Table of Contents",-1)),vo=no({__name:"DocsPageLayout",setup(u){const{page:s,navigation:V}=Z(),{config:v}=oo(),A=eo(),M=(o,t=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[o])<"u"?s.value[o]:t},T=d(()=>{var o,t,n;return!s.value||((n=(t=(o=s.value)==null?void 0:o.body)==null?void 0:t.children)==null?void 0:n.length)>0}),C=d(()=>{var o,t,n,_,m;return((o=s.value)==null?void 0:o.toc)!==!1&&((m=(_=(n=(t=s.value)==null?void 0:t.body)==null?void 0:n.toc)==null?void 0:_.links)==null?void 0:m.length)>=2}),E=d(()=>{var o,t;return((o=s.value)==null?void 0:o.aside)!==!1&&((t=V.value)==null?void 0:t.length)>0}),F=d(()=>M("bottom",!0)),c=I(!1),a=I(null),h=()=>A.path.split("/").slice(0,2).join("/"),l=to("asideScroll",()=>{var o;return{parentPath:h(),scrollTop:((o=a.value)==null?void 0:o.scrollTop)||0}});function P(){a.value&&(a.value.scrollHeight===0&&setTimeout(P,0),a.value.scrollTop=l.value.scrollTop)}return so(()=>{l.value.parentPath!==h()?(l.value.parentPath=h(),l.value.scrollTop=0):P()}),ao(()=>{a.value&&(l.value.scrollTop=a.value.scrollTop)}),(o,t)=>{var S,b,B,D,N,w;const n=G,_=J,m=R,H=U,L=K,O=Q,j=W,q=X;return i(),$(q,{fluid:(b=(S=e(v))==null?void 0:S.main)==null?void 0:b.fluid,padded:(D=(B=e(v))==null?void 0:B.main)==null?void 0:D.padded,class:f(["docs-page-content",{fluid:(w=(N=e(v))==null?void 0:N.main)==null?void 0:w.fluid}])},{default:g(()=>[e(E)?(i(),x("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):y("",!0),p("article",{class:f(["page-body",{"with-toc":e(C)}])},[e(T)?ro(o.$slots,"default",{key:0},void 0,!0):(i(),$(m,{key:1,type:"info"},{default:g(()=>[k(" Start writing in "),r(_,null,{default:g(()=>[k("content/"+co(e(s)._file),1)]),_:1}),k(" to see this page taking shape. ")]),_:1})),e(T)&&e(s)&&e(F)?(i(),x(lo,{key:2},[r(H),r(L)],64)):y("",!0)],2),e(C)?(i(),x("div",_o,[p("div",mo,[p("button",{onClick:t[0]||(t[0]=z=>c.value=!e(c))},[fo,r(O,{name:"heroicons-outline:chevron-right",class:f(["icon",[e(c)&&"rotate"]])},null,8,["class"])]),p("div",{class:f(["docs-toc-wrapper",[e(c)&&"opened"]])},[r(j,{onMove:t[1]||(t[1]=z=>c.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}}),qo=Y(vo,[["__scopeId","data-v-64504251"]]);export{qo as default};
