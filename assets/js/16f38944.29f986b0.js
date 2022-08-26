"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={displayed_sidebar:"notesSideBar"},l="Selection Sort",c={unversionedId:"notes/Algorithms/Sorting/SelectionSort",id:"notes/Algorithms/Sorting/SelectionSort",title:"Selection Sort",description:"Selection sort is not stable.",source:"@site/docs/notes/Algorithms/Sorting/SelectionSort.md",sourceDirName:"notes/Algorithms/Sorting",slug:"/notes/Algorithms/Sorting/SelectionSort",permalink:"/XZ-LeetCode-Journal/docs/notes/Algorithms/Sorting/SelectionSort",tags:[],version:"current",frontMatter:{displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"Quick Sort",permalink:"/XZ-LeetCode-Journal/docs/notes/Algorithms/Sorting/QuickSort"},next:{title:"In-Order Traversal",permalink:"/XZ-LeetCode-Journal/docs/notes/Algorithms/Tree/InOrder"}},a={},s=[{value:"Complexities",id:"complexities",level:3},{value:"Time Complexity",id:"time-complexity",level:4},{value:"Space Complexity",id:"space-complexity",level:4},{value:"Implementation",id:"implementation",level:4}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"selection-sort"},"Selection Sort"),(0,o.kt)("p",null,"Selection sort is ",(0,o.kt)("strong",{parentName:"p"},"not stable"),"."),(0,o.kt)("h3",{id:"complexities"},"Complexities"),(0,o.kt)("h4",{id:"time-complexity"},"Time Complexity"),(0,o.kt)("p",null,"O(N^2) - One loop to select an element, another loop to compare it with the rest of the elements"),(0,o.kt)("h4",{id:"space-complexity"},"Space Complexity"),(0,o.kt)("p",null,"O(1)"),(0,o.kt)("h4",{id:"implementation"},"Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func selectionSort(slice []int) {\n    for i := 0; i < len(slice); i++ {\n        min := i\n        for j := i + 1; j < len(slice); j++ {\n            if slice[j] < slice[min] {\n                swap(&slice[j], &slice[min])\n                min = j\n            }\n        }\n    }\n}\n\nfunc main(){\n    d := []int{33, 1, 5, 8, 22, 1, 55, 5, 99, 123, 90, 456, 333, 890, 1000, 999}\n    fmt.Println("Before:", d)\n    selectionSort(d)\n    fmt.Println("After:", d)\n}\n')))}m.isMDXComponent=!0}}]);