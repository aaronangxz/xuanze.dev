"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[9081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={displayed_sidebar:"notesSideBar"},a="Heap Sort",s={unversionedId:"notes/Algorithms/Sorting/HeapSort",id:"notes/Algorithms/Sorting/HeapSort",title:"Heap Sort",description:"Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements.",source:"@site/docs/notes/Algorithms/Sorting/HeapSort.md",sourceDirName:"notes/Algorithms/Sorting",slug:"/notes/Algorithms/Sorting/HeapSort",permalink:"/docs/notes/Algorithms/Sorting/HeapSort",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"Bubble Sort",permalink:"/docs/notes/Algorithms/Sorting/BubbleSort"},next:{title:"Insertion Sort",permalink:"/docs/notes/Algorithms/Sorting/InsertionSort"}},l={},p=[{value:"Complexities",id:"complexities",level:3},{value:"Time Complexity",id:"time-complexity",level:4},{value:"Space Complexity",id:"space-complexity",level:4},{value:"Implementation",id:"implementation",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"heap-sort"},"Heap Sort"),(0,i.kt)("p",null,"Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements."),(0,i.kt)("h3",{id:"complexities"},"Complexities"),(0,i.kt)("h4",{id:"time-complexity"},"Time Complexity"),(0,i.kt)("p",null,"O(nlogn) - heapify O(logn), build heap O(n)"),(0,i.kt)("h4",{id:"space-complexity"},"Space Complexity"),(0,i.kt)("p",null,"O(1)"),(0,i.kt)("h4",{id:"implementation"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func heapify(s[]int, size,index int){\n    largest := index\n    l := 2 * i + 1\n    r := 2 * i + 2\n\n    if l < size && s[l] > s[largest]{\n        largest = l\n    }\n\n    if r < size && s[r] > s[largest]{\n        largest = r\n    }\n\n    if largest != i{\n        swap(s[largest],s[i])\n        heapify(s,len(s),largest)\n    }\n}\n\nfunc heapSort(s []int) {\n    for i := len(s)/2 -1; i >=0; i++{\n        heapify(s,len(s),i)\n    }\n\n    for i := len(s)-1; i >=0; i--{\n        swap(s[0],s[i])\n        heapify(s[:i],i,0)\n    }\n}\n")))}m.isMDXComponent=!0}}]);