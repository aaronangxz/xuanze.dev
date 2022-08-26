"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[2458],{3905:(t,n,e)=>{e.d(n,{Zo:()=>u,kt:()=>k});var r=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var p=r.createContext({}),m=function(t){var n=r.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},u=function(t){var n=m(t.components);return r.createElement(p.Provider,{value:n},t.children)},g={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=m(e),k=a,N=d["".concat(p,".").concat(k)]||d[k]||g[k]||l;return e?r.createElement(N,i(i({ref:n},u),{},{components:e})):r.createElement(N,i({ref:n},u))}));function k(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var l=e.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=e[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},2994:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=e(7462),a=(e(7294),e(3905));const l={displayed_sidebar:"notesSideBar"},i="Overview",o={unversionedId:"notes/Algorithms/Sorting/OverView",id:"notes/Algorithms/Sorting/OverView",title:"Overview",description:"| Algorithm\t|  Best Time Complexity\t| Worst Time Complexity | Average Time Complexity | Space Complexity | Stable? |",source:"@site/docs/notes/Algorithms/Sorting/OverView.md",sourceDirName:"notes/Algorithms/Sorting",slug:"/notes/Algorithms/Sorting/OverView",permalink:"/XZ-LeetCode-Journal/docs/notes/Algorithms/Sorting/OverView",tags:[],version:"current",frontMatter:{displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"Merge Sort",permalink:"/XZ-LeetCode-Journal/docs/notes/Algorithms/Sorting/MergeSort"},next:{title:"Quick Sort",permalink:"/XZ-LeetCode-Journal/docs/notes/Algorithms/Sorting/QuickSort"}},p={},m=[],u={toc:m};function g(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Algorithm"),(0,a.kt)("th",{parentName:"tr",align:null},"Best Time Complexity"),(0,a.kt)("th",{parentName:"tr",align:null},"Worst Time Complexity"),(0,a.kt)("th",{parentName:"tr",align:null},"Average Time Complexity"),(0,a.kt)("th",{parentName:"tr",align:null},"Space Complexity"),(0,a.kt)("th",{parentName:"tr",align:null},"Stable?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Selection Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,a.kt)("td",{parentName:"tr",align:null},"N")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bubble Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Insertion Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Heap Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,a.kt)("td",{parentName:"tr",align:null},"N")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Quick Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"N")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Merge Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bucket Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n +k)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n +k)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Radix Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(nk)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(nk)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(nk)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n + k)"),(0,a.kt)("td",{parentName:"tr",align:null},"N")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Count Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n +k)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n +k)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n +k)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(k)"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Shell Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,a.kt)("td",{parentName:"tr",align:null},"N")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tim Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8((n log(n))^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O((n log n (n))^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tree Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n^2)"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cube Sort"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9(n)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03b8(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n log(n))"),(0,a.kt)("td",{parentName:"tr",align:null},"O(n)"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")))))}g.isMDXComponent=!0}}]);