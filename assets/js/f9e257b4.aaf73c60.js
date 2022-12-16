"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[6545],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1539:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={displayed_sidebar:"notesSideBar"},i="Go",l={unversionedId:"notes/Languages/Go/Go",id:"notes/Languages/Go/Go",title:"Go",description:"Iota",source:"@site/docs/notes/Languages/Go/Go.md",sourceDirName:"notes/Languages/Go",slug:"/notes/Languages/Go/",permalink:"/docs/notes/Languages/Go/",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"Scaling",permalink:"/docs/notes/Infrastructure/Scaling"},next:{title:"Go Concurrency",permalink:"/docs/notes/Languages/Go/GoConcurrency"}},s={},c=[{value:"Iota",id:"iota",level:3},{value:"Loops",id:"loops",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Function headers",id:"function-headers",level:3},{value:"Reflect",id:"reflect",level:3},{value:"Pointers",id:"pointers",level:3},{value:"Minimum &amp; Maximum Integer",id:"minimum--maximum-integer",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"go"},"Go"),(0,r.kt)("h3",{id:"iota"},"Iota"),(0,r.kt)("p",null,"The use of ",(0,r.kt)("inlineCode",{parentName:"p"},"iota")," indicates the start, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," of that enum."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    Red int = iota\n    Orange\n    Yellow\n    Green\n    Blue\n    Indigo\n    Violet\n)\n")),(0,r.kt)("p",null,"The actual values will be 0 ~ 6."),(0,r.kt)("p",null,"To skip enum,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    _ int = iota\n    Orange\n    Yellow\n    Green\n    Blue\n    Indigo\n    Violet\n)\n")),(0,r.kt)("p",null,"The actual values will be 1 ~ 6."),(0,r.kt)("p",null,"For bitmask,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"const (\n    read   = 1 << iota // 00000001 = 1\n    write              // 00000010 = 2\n    remove             // 00000100 = 4\n)\n\nconst (\n    _  = 1 << (iota * 10) // ignore the first value\n    KB                    // decimal:       1024 -> binary 00000000000000000000010000000000\n    MB                    // decimal:    1048576 -> binary 00000000000100000000000000000000\n    GB                    // decimal: 1073741824 -> binary 01000000000000000000000000000000\n)\n")),(0,r.kt)("h3",{id:"loops"},"Loops"),(0,r.kt)("p",null,"There is no while loop in Go."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"//Range loop using only index\nfor i := range a {}\n\n//Range loop using both index and elements\nfor i, obj := range a{}\n\n//Range loop using only elements\nfor _, obj := range a{}\n\n//Infinite while loop\nfor{}\n\n//While loop with exit condition\nfor a != nil{}\n")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("p",null,"An interface type is defined as a set of method signatures. A value of interface type can hold any value that implements those methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"//Function that takes in any data type\nfunc Do(a interface{})\n\n//Struct that can be any other struct\ntype Do interface{\n    thing string\n}\n")),(0,r.kt)("h3",{id:"function-headers"},"Function headers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func (a *A) DoSomething (b interface{},c ...interface{}) d interface{}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(a *int)")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"DoSomething")," is a method of object ",(0,r.kt)("inlineCode",{parentName:"p"},"A")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"b interface{}")," : which takes in any data type as the function parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"b")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"c ...interface{}")," : and also takes in an optional parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," of any data type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"d interface{}")," : then returns ",(0,r.kt)("inlineCode",{parentName:"p"},"d")),(0,r.kt)("h3",{id:"reflect"},"Reflect"),(0,r.kt)("h3",{id:"pointers"},"Pointers"),(0,r.kt)("p",null,"To update a slice within a function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"//Append\nfunc update(s []string, a string){\n    *s = append(*s, a)\n}\n\n//Slice off\nfunc sliceFirstElement(s []string){\n    *s = (*s)[:1]\n}\n\n//Swapping slice elements can be done directly because the slice passed inside still points to the same address as the slice outside of the function\nfunc swap(s []string){\n    tmp := s[0]\n    s[0] = s[1]\n    s[1] = tmp\n}\n")),(0,r.kt)("h3",{id:"minimum--maximum-integer"},"Minimum & Maximum Integer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"    var mi32 int64 = math.MinInt32\n    var mi64 int64 = math.MinInt64\n    var i32 uint64 = math.MaxInt32\n    var ui32 uint64 = math.MaxUint32\n    var i64 uint64 = math.MaxInt64\n    var ui64 uint64 = math.MaxUint64\n")))}u.isMDXComponent=!0}}]);