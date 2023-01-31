"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[5934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={slug:"how-to-read-from-sql-tables-with-unknown-fields",title:"How to read from SQL tables with unknown fields",authors:["xuanze"],tags:["go","database","gorm","mysql"]},l=void 0,i={permalink:"/blog/how-to-read-from-sql-tables-with-unknown-fields",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/sol-deploy/blog/2023-01-19-how-to-read-from-sql-tables-with-unknown-fields.mdx",source:"@site/blog/2023-01-19-how-to-read-from-sql-tables-with-unknown-fields.mdx",title:"How to read from SQL tables with unknown fields",description:"Introduction",date:"2023-01-19T00:00:00.000Z",formattedDate:"January 19, 2023",tags:[{label:"go",permalink:"/blog/tags/go"},{label:"database",permalink:"/blog/tags/database"},{label:"gorm",permalink:"/blog/tags/gorm"},{label:"mysql",permalink:"/blog/tags/mysql"}],readingTime:4.62,hasTruncateMarker:!0,authors:[{name:"Ang Xuan Ze",title:"Noob coder",url:"https://github.com/aaronangxz",imageURL:"https://github.com/aaronangxz.png",key:"xuanze"}],frontMatter:{slug:"how-to-read-from-sql-tables-with-unknown-fields",title:"How to read from SQL tables with unknown fields",authors:["xuanze"],tags:["go","database","gorm","mysql"]},nextItem:{title:"How to keep a Go script running on SSH plus how to kill it",permalink:"/blog/keep-script-running-on-ssh-and-how-to-kill-it"}},s={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Executing a SQL query using gorm is pretty trivial. Normally this is what I'd do:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write a proto struct that matches the DB table schema"),(0,o.kt)("li",{parentName:"ol"},"Run query using gorm and ",(0,o.kt)("inlineCode",{parentName:"li"},"Scan")," into the struct")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"var auditDb *pb.DataInjectionAuditLogDb\nif err := orm.DataHelperDbInstance(g.c).Raw(q).Scan(&auditDb).Error; err != nil {\n    hlog.CtxErrorf(g.c, err.Error())\n    return nil, err\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Done")),(0,o.kt)("p",null,"However, what if we do not know the schema, or it is virtually impossible to create a struct for all of them?"),(0,o.kt)("p",null,"Huh?!"))}p.isMDXComponent=!0}}]);