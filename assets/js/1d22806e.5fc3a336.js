"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[7779],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3470:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={displayed_sidebar:"notesSideBar"},l="Go Concurrency",c={unversionedId:"notes/Languages/Go/GoConcurrency",id:"notes/Languages/Go/GoConcurrency",title:"Go Concurrency",description:"What is the difference between concurrency and parallelism",source:"@site/docs/notes/Languages/Go/GoConcurrency.md",sourceDirName:"notes/Languages/Go",slug:"/notes/Languages/Go/GoConcurrency",permalink:"/XZ-LeetCode-Journal/docs/notes/Languages/Go/GoConcurrency",tags:[],version:"current",frontMatter:{displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"Go",permalink:"/XZ-LeetCode-Journal/docs/notes/Languages/Go/"},next:{title:"HTTP",permalink:"/XZ-LeetCode-Journal/docs/notes/Networking/HTTP"}},i={},s=[{value:"Goroutine",id:"goroutine",level:2},{value:"Channels",id:"channels",level:2},{value:"Select",id:"select",level:2}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-concurrency"},"Go Concurrency"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"What is the difference between concurrency and parallelism")),(0,a.kt)("p",null,"Concurrency is two lines of customers ordering from a single cashier (lines take turns ordering); "),(0,a.kt)("p",null,"Parallelism is two lines of customers ordering from two cashiers (each line gets its own cashier)"),(0,a.kt)("h2",{id:"goroutine"},"Goroutine"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Independently executing function, launched by a go statement"),(0,a.kt)("li",{parentName:"ul"},"Has its own call stack, which grows and shrinks as required"),(0,a.kt)("li",{parentName:"ul"},"Very cheap"),(0,a.kt)("li",{parentName:"ul"},"Not a thread (",(0,a.kt)("inlineCode",{parentName:"li"},"a very cheap thread"),")"),(0,a.kt)("li",{parentName:"ul"},"There might be only one thread in a program with thousands of goroutines"),(0,a.kt)("li",{parentName:"ul"},"Goroutines are multiplexed dynamically onto threads as needed to keep all the goroutines running")),(0,a.kt)("h2",{id:"channels"},"Channels"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provides a connection between two goroutines, allowing them to communicate")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    // Declaring and initializing.\n    var c chan int\n    c = make(chan int)\n    // or\n    c := make(chan int)\n    // Sending on a channel.\n    c <- 1\n    // Receiving from a channel.\n    // The "arrow" indicates the direction of data flow.\n    value = <-c\n')),(0,a.kt)("h2",{id:"select"},"Select"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provides another way to handle multiple channels"),(0,a.kt)("li",{parentName:"ul"},"It's like a switch, but each case is a communication"),(0,a.kt)("li",{parentName:"ul"},"All channels are evaluated"),(0,a.kt)("li",{parentName:"ul"},"Selection blocks until one communication can proceed"),(0,a.kt)("li",{parentName:"ul"},"If multiple can proceed, select chooses pseudo-randomly"),(0,a.kt)("li",{parentName:"ul"},"A default clause, if present, executes immediately if no channel is ready")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'select {\n    case v1 := <-c1:\n        fmt.Printf("received %v from c1\\n", v1)\n    case v2 := <-c2:\n        fmt.Printf("received %v from c2\\n", v1)\n    case c3 <- 23:\n        fmt.Printf("sent %v to c3\\n", 23)\n    default:\n        fmt.Printf("no one was ready to communicate\\n")\n    }\n')))}p.isMDXComponent=!0}}]);