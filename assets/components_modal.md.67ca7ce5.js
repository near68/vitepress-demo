var t=Object.defineProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,e=(n,a,s)=>a in n?t(n,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[a]=s;import{r as o,o as l,c as p,a as c,w as u,V as r,d as i,b as k}from"./app.73143e3a.js";const d={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:o,withCtx:l,createVNode:p,openBlock:c,createBlock:u}=r,i=t("默认按钮"),k=t("主要按钮"),d=t("成功按钮"),b=t("信息按钮"),g=t("警告按钮"),m=t("危险按钮");return((t,o)=>{for(var l in o||(o={}))a.call(o,l)&&e(t,l,o[l]);if(n)for(var l of n(o))s.call(o,l)&&e(t,l,o[l]);return t})({render:function(t,n){const a=o("xl-button");return c(),u("div",null,[p(a,null,{default:l((()=>[i])),_:1}),p(a,{type:"primary"},{default:l((()=>[k])),_:1}),p(a,{type:"success"},{default:l((()=>[d])),_:1}),p(a,{type:"info"},{default:l((()=>[b])),_:1}),p(a,{type:"warning"},{default:l((()=>[g])),_:1}),p(a,{type:"danger"},{default:l((()=>[m])),_:1})])}},{})}()}},b='{"title":"Modal 对话框","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"Attributes","slug":"attributes"}],"relativePath":"components/modal.md","lastUpdated":1624505991968}',g=c("h1",{id:"modal-对话框"},"Modal 对话框",-1),m=c("p",null,"在保留当前页面状态的情况下，告知用户并承载相关操作。",-1),x=c("h2",{id:"基础用法"},"基础用法",-1),y=c("p",null,"Modal 弹出一个对话框，适合需要定制性更大的场景。",-1),f=c("div",{class:"language-vue"},[c("pre",null,[c("code",null,[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("template")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("xl-button")]),c("span",{class:"token punctuation"},">")]),i("默认按钮"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("xl-button")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("xl-button")]),i(),c("span",{class:"token attr-name"},"type"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("primary"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("主要按钮"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("xl-button")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("xl-button")]),i(),c("span",{class:"token attr-name"},"type"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("success"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("成功按钮"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("xl-button")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("xl-button")]),i(),c("span",{class:"token attr-name"},"type"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("info"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("信息按钮"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("xl-button")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("xl-button")]),i(),c("span",{class:"token attr-name"},"type"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("warning"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("警告按钮"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("xl-button")]),c("span",{class:"token punctuation"},">")]),i("\n  "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),i("xl-button")]),i(),c("span",{class:"token attr-name"},"type"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),i("danger"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),i("危险按钮"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("xl-button")]),c("span",{class:"token punctuation"},">")]),i("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),i("template")]),c("span",{class:"token punctuation"},">")]),i("\n")])])],-1),h=k('<h2 id="attributes">Attributes</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>visible</td><td>是否展示</td><td>boolean</td><td>true / false</td><td>normal</td></tr><tr><td>ok</td><td>确认触发函数</td><td>function</td><td>()=&gt;{}</td><td>—</td></tr><tr><td>cancel</td><td>取消触发函数</td><td>function</td><td>()=&gt;{}</td><td>—</td></tr></tbody></table>',2);d.render=function(t,n,a,s,e,r){const i=o("render-demo-0"),k=o("demo");return l(),p("div",null,[g,m,x,y,c(k,{sourceCode:'<template>\n  <xl-button>默认按钮</xl-button>\n  <xl-button type="primary">主要按钮</xl-button>\n  <xl-button type="success">成功按钮</xl-button>\n  <xl-button type="info">信息按钮</xl-button>\n  <xl-button type="warning">警告按钮</xl-button>\n  <xl-button type="danger">危险按钮</xl-button>\n</template>\n'},{highlight:u((()=>[f])),default:u((()=>[c(i)])),_:1}),h])};export default d;export{b as __pageData};
