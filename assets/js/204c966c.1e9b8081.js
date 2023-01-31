"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[5743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>A,kt:()=>u});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},A=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),g=s(r),h=i,u=g["".concat(c,".").concat(h)]||g[h]||w[h]||o;return r?n.createElement(u,a(a({ref:t},A),{},{components:r})):n.createElement(u,a({ref:t},A))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={slug:"interviewing-with-matrixport",title:"Interviewing with MatrixPort (Backend Software Engineer)",authors:["xuanze"],tags:["interviews"]},a=void 0,l={permalink:"/blog/interviewing-with-matrixport",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/sol-deploy/blog/2022-09-02-interviewing-with-matrixport.mdx",source:"@site/blog/2022-09-02-interviewing-with-matrixport.mdx",title:"Interviewing with MatrixPort (Backend Software Engineer)",description:"MatrixPort",date:"2022-09-02T00:00:00.000Z",formattedDate:"September 2, 2022",tags:[{label:"interviews",permalink:"/blog/tags/interviews"}],readingTime:.865,hasTruncateMarker:!0,authors:[{name:"Ang Xuan Ze",title:"Noob coder",url:"https://github.com/aaronangxz",imageURL:"https://github.com/aaronangxz.png",key:"xuanze"}],frontMatter:{slug:"interviewing-with-matrixport",title:"Interviewing with MatrixPort (Backend Software Engineer)",authors:["xuanze"],tags:["interviews"]},prevItem:{title:"Interviewing with OKX (Backend Software Engineer)",permalink:"/blog/interviewing-with-okx"},nextItem:{title:"Interviewing with TikTok (Testing Software Engineer)",permalink:"/blog/interviewing-with-tiktok"}},c={authorsImageUrls:[void 0]},s=[{value:"Introduction",id:"introduction",level:2},{value:"TLDR",id:"tldr",level:2}],A={toc:s};function g(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},A,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MatrixPort",src:r(6337).Z,width:"528",height:"95"})),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Matrixport is a very promosing SG company with a fresh $100M funding from Series-C last year.\nAnd they also have plans to go public in the next few years. The exchange under MatrixPort is called bit.com.\nHowever, note that all interviews were conducted in Chinese."),(0,i.kt)("h2",{id:"tldr"},"TLDR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Overall Experience: Good\nDifficulty: Medium -> Medium-Hard\nReceived Offer: No\n")))}g.isMDXComponent=!0},6337:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);