"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={displayed_sidebar:"notesSideBar"},a="Merge Sort",l={unversionedId:"notes/Algorithms/Sorting/MergeSort",id:"notes/Algorithms/Sorting/MergeSort",title:"Merge Sort",description:"The Merge Sort algorithm is a sorting algorithm that is considered as an example of the divide and conquer strategy. So, in this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner.",source:"@site/docs/notes/Algorithms/Sorting/MergeSort.md",sourceDirName:"notes/Algorithms/Sorting",slug:"/notes/Algorithms/Sorting/MergeSort",permalink:"/XZ-LeetCode-Journal/docs/notes/Algorithms/Sorting/MergeSort",tags:[],version:"current",frontMatter:{displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"Insertion Sort",permalink:"/XZ-LeetCode-Journal/docs/notes/Algorithms/Sorting/InsertionSort"},next:{title:"Overview",permalink:"/XZ-LeetCode-Journal/docs/notes/Algorithms/Sorting/OverView"}},s={},p=[{value:"Complexities",id:"complexities",level:3},{value:"Time Complexity",id:"time-complexity",level:4},{value:"Space Complexity",id:"space-complexity",level:4},{value:"Implementation",id:"implementation",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"merge-sort"},"Merge Sort"),(0,i.kt)("p",null,"The Merge Sort algorithm is a sorting algorithm that is considered as an example of the divide and conquer strategy. So, in this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner. "),(0,i.kt)("p",null,"We can think of it as a recursive algorithm that continuously splits the array in half until it cannot be further divided. This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion. "),(0,i.kt)("p",null,"If the array has multiple elements, we split the array into halves and recursively invoke the merge sort on each of the halves. Finally, when both the halves are sorted, the merge operation is applied. "),(0,i.kt)("p",null,"Merge operation is the process of taking two smaller sorted arrays and combining them to eventually make a larger one."),(0,i.kt)("h3",{id:"complexities"},"Complexities"),(0,i.kt)("h4",{id:"time-complexity"},"Time Complexity"),(0,i.kt)("p",null,"O(n logn) - Merge sort always divides the array into two halves O(logn) and takes linear time to merge two halves O(n)."),(0,i.kt)("h4",{id:"space-complexity"},"Space Complexity"),(0,i.kt)("p",null,"O(n) - In merge sort all elements are copied into an auxiliary array "),(0,i.kt)("h4",{id:"implementation"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func merge(left, right []int)[]int{\n    output := make([]int,len(left)+len(right))\n    idx := 0\n    i,j := 0,0\n\n    for i < len(left) && j < len(right){\n        if left[i] < right[j]{\n            output[idx] = left[i]\n            i++\n        }else{\n            output[idx] = right[j]\n            j++\n        }\n        idx++\n    }\n\n    for i < len(left){\n        output[idx] = left[i]\n        i++\n        idx++\n    }\n\n    for j < len(right){\n        output[idx] = right[j]\n        j++\n        idx++\n    }\n    return output\n}\n\nfunc mergeSort(s[]int)[]int{\n    if len(s) < 2{\n        return s\n    }\n    mid := len(s)/2\n    return merge(mergeSort(s[:mid]),mergeSort(s[mid:]))\n}\n")))}m.isMDXComponent=!0}}]);