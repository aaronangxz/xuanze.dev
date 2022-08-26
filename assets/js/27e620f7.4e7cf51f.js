"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[1733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={slug:"how-long-is-a-second",title:"How long is a second?",authors:["xuanze"],tags:["projects","go"]},i=void 0,l={permalink:"/XZ-LeetCode-Journal/blog/how-long-is-a-second",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/sol-deploy/blog/2022-06-17-how-long-is-a-second.mdx",source:"@site/blog/2022-06-17-how-long-is-a-second.mdx",title:"How long is a second?",description:"Introduction",date:"2022-06-17T00:00:00.000Z",formattedDate:"June 17, 2022",tags:[{label:"projects",permalink:"/XZ-LeetCode-Journal/blog/tags/projects"},{label:"go",permalink:"/XZ-LeetCode-Journal/blog/tags/go"}],readingTime:.675,truncated:!0,authors:[{name:"Ang Xuan Ze",title:"Noob coder",url:"https://github.com/aaronangxz",imageURL:"https://github.com/aaronangxz.png",key:"xuanze"}],frontMatter:{slug:"how-long-is-a-second",title:"How long is a second?",authors:["xuanze"],tags:["projects","go"]},prevItem:{title:"Interviewing with Grab (Backend Software Engineer)",permalink:"/XZ-LeetCode-Journal/blog/interviewing-with-grab"},nextItem:{title:"Redis SET or HASH",permalink:"/XZ-LeetCode-Journal/blog/redis-set-or-hash"}},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What Happened",id:"what-happened",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"What the hell am I talking about? You might say. Well yea it sounded crazy but ",(0,r.kt)("strong",{parentName:"p"},"how long is a second")," exactly?!"),(0,r.kt)("h2",{id:"what-happened"},"What Happened"),(0,r.kt)("p",null,"As I was writing some unit tests for my shiny Redis Set implementation, somethign weird caught my attention."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TestSendPotentialUsers | Successful | Written 80687641:-18230398344540846 to potential_user set\n")),(0,r.kt)("h1",{id:"excuse-me"},(0,r.kt)("em",{parentName:"h1"},"Excuse me?")),(0,r.kt)("p",null,"For context, the Redis key was constructed using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'toWrite := fmt.Sprint(u, ":", time.Now().Unix()-common.ONE_MONTH-common.ONE_DAY)\n')),(0,r.kt)("p",null,"After some digging around, I realised that in my ",(0,r.kt)("inlineCode",{parentName:"p"},"common.ONE_HOUR"),":\n",(0,r.kt)("img",{alt:"PascalTriangleAnimated",src:n(6764).Z,width:"1626",height:"718"})),(0,r.kt)("p",null,"Why didn't I think of that, it is in milliseconds!\nAnd my ",(0,r.kt)("inlineCode",{parentName:"p"},"common.ONE_MONTH-common.ONE_DAY")," will effectively become 18144000000000000 - 6048000000000000 \ud83e\udd23"),(0,r.kt)("p",null,"One quick fix is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    ONE_HOUR  = int64(60*time.Minute) / int64(1*time.Second)\n")),(0,r.kt)("p",null,"And noice, it finally makese sense now."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TestSendPotentialUsers | Successful | Written 93737927:1637229666 to potential_user set\n")))}p.isMDXComponent=!0},6764:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/how-long-is-a-second-4a0aab75a3dade9cb3217caf24b85542.png"}}]);