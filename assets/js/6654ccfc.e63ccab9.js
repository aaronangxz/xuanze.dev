"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[4888],{3905:(A,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>p});var n=o(7294);function t(A,e,o){return e in A?Object.defineProperty(A,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):A[e]=o,A}function r(A,e){var o=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),o.push.apply(o,n)}return o}function i(A){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){t(A,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(o,e))}))}return A}function a(A,e){if(null==A)return{};var o,n,t=function(A,e){if(null==A)return{};var o,n,t={},r=Object.keys(A);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(t[o]=A[o]);return t}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(t[o]=A[o])}return t}var u=n.createContext({}),l=function(A){var e=n.useContext(u),o=e;return A&&(o="function"==typeof A?A(e):i(i({},e),A)),o},c=function(A){var e=l(A.components);return n.createElement(u.Provider,{value:e},A.children)},g="mdxType",d={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},U=n.forwardRef((function(A,e){var o=A.components,t=A.mdxType,r=A.originalType,u=A.parentName,c=a(A,["components","mdxType","originalType","parentName"]),g=l(o),U=t,p=g["".concat(u,".").concat(U)]||g[U]||d[U]||r;return o?n.createElement(p,i(i({ref:e},c),{},{components:o})):n.createElement(p,i({ref:e},c))}));function p(A,e){var o=arguments,t=e&&e.mdxType;if("string"==typeof A||t){var r=o.length,i=new Array(r);i[0]=U;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=A,a[g]="string"==typeof A?A:t,i[1]=a;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}U.displayName="MDXCreateElement"},1501:(A,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(7462),t=(o(7294),o(3905));const r={slug:"interviewing-with-okx",title:"Interviewing with OKX (Backend Software Engineer)",authors:["xuanze"],tags:["interviews"]},i=void 0,a={permalink:"/blog/interviewing-with-okx",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/sol-deploy/blog/2022-09-06-interviewing-with-okx.mdx",source:"@site/blog/2022-09-06-interviewing-with-okx.mdx",title:"Interviewing with OKX (Backend Software Engineer)",description:"OKX",date:"2022-09-06T00:00:00.000Z",formattedDate:"September 6, 2022",tags:[{label:"interviews",permalink:"/blog/tags/interviews"}],readingTime:.445,hasTruncateMarker:!0,authors:[{name:"Ang Xuan Ze",title:"Noob coder",url:"https://github.com/aaronangxz",imageURL:"https://github.com/aaronangxz.png",key:"xuanze"}],frontMatter:{slug:"interviewing-with-okx",title:"Interviewing with OKX (Backend Software Engineer)",authors:["xuanze"],tags:["interviews"]},prevItem:{title:"Trick to keep empty folders on git",permalink:"/blog/trick-to-keep-empty-folders-git"},nextItem:{title:"Interviewing with MatrixPort (Backend Software Engineer)",permalink:"/blog/interviewing-with-matrixport"}},u={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"TLDR",id:"tldr",level:2},{value:"First Round (Senior)",id:"first-round-senior",level:2}],c={toc:l};function g(A){let{components:e,...r}=A;return(0,t.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"OKX",src:o(8457).Z,width:"640",height:"320"})),(0,t.kt)("h2",{id:"introduction"},"Introduction"),(0,t.kt)("p",null,"OKX is a large-ish crypto exchange that is hiring in Singapore. However, they do not have\npresence in SG and US."),(0,t.kt)("h2",{id:"tldr"},"TLDR"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Overall Experience: Okay\nDifficulty: Hard\nReceived Offer: No\n")),(0,t.kt)("h2",{id:"first-round-senior"},"First Round (Senior)"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Talk about hash map implementation"),(0,t.kt)("li",{parentName:"ul"},"Hash function, probing, collisions"),(0,t.kt)("li",{parentName:"ul"},"If a hashmap only has a few buckets populated, what can we optimize"),(0,t.kt)("li",{parentName:"ul"},"Error handling"),(0,t.kt)("li",{parentName:"ul"},"How is error handling being done"),(0,t.kt)("li",{parentName:"ul"},"Benefits of catching exceptions"),(0,t.kt)("li",{parentName:"ul"},"Coding "),(0,t.kt)("li",{parentName:"ul"},"\ud83d\udd34 ",(0,t.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/strong-password-checker/"},"420. Strong Password Checker"))))}g.isMDXComponent=!0},8457:(A,e,o)=>{o.d(e,{Z:()=>n});const n="data:image/jpeg;base64,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oQVCCoQVCCoQ7MFQgqIgqIgqIgqIgqIgqIgpYKhBURBURBURBURBURBURBdmCoQVEQVEQVEQVEQVEQVEQX+GP//aAAwDAQACAAMAAAAQ8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888MMMMMMMMMMMMU8MMMI888skMMc8oEMMM088osMMY888888888888U8888o8888U8888oU888U88o888o888888888888U8888o8888U8888oU888U88o888o8888wwww8888U8888o4wwwQwww8sYwwwYwwg4wwk8888sMMcU888U8888s8884kMMc88MMMMc884MMMM88888888U888U88888888oU888888888888o888888888888U888U88888888oU888888888888o888888880888U888U88888888sU888888884888o8888888888888888U8888oMMMM088s8oU88skMMY888o888888888888U8888o8888U8888oU888U88o888o888888888888U8888o8888U8888oU888U88o888o888888888888U8wwwg8888c8888sU888c88o088s88888888888888c88s8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888/8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAwEBPxBIP//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8QSD//xAAoEAABAwMDAwUBAQEAAAAAAAABAFHwESDBIaHxMDGxQEFhcZFQgZD/2gAIAQEAAT8Q/wCQAVIa8egCtBoAo3lRvKjeVG8qN5Ubyo3lRvKjeVG8qN5Ubyo3lRvKjeVG8qN5Ubyo3lRvKjeVG8oAXYawOvYgmhB9wdChiADQdqkDYYVMADroAaAAaUCjeVG8qN5Ubyo3lRvK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"}}]);