"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[1381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:287},a="287. Find the Duplicate Number",l={unversionedId:"leetcode/medium/Find the Duplicate Number",id:"leetcode/medium/Find the Duplicate Number",title:"287. Find the Duplicate Number",description:"Question",source:"@site/docs/leetcode/medium/287. Find the Duplicate Number.md",sourceDirName:"leetcode/medium",slug:"/leetcode/medium/Find the Duplicate Number",permalink:"/docs/leetcode/medium/Find the Duplicate Number",draft:!1,tags:[],version:"current",sidebarPosition:287,frontMatter:{sidebar_position:287},sidebar:"lcSidebar",previous:{title:"230. Kth Smallest Element in a BST",permalink:"/docs/leetcode/medium/Kth Smallest Element in a BST"},next:{title:"289. Game of Life",permalink:"/docs/leetcode/medium/Game of Life"}},u={},p=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"287-find-the-duplicate-number"},"287. Find the Duplicate Number"),(0,i.kt)("h2",{id:"question"},"Question"),(0,i.kt)("p",null,"Given an array of integers ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," containing ",(0,i.kt)("inlineCode",{parentName:"p"},"n + 1")," integers where each integer is in the range ",(0,i.kt)("inlineCode",{parentName:"p"},"[1, n]")," inclusive."),(0,i.kt)("p",null,"There is only one repeated number in ",(0,i.kt)("inlineCode",{parentName:"p"},"nums"),", return this repeated number."),(0,i.kt)("p",null,"You must solve the problem without modifying the array ",(0,i.kt)("inlineCode",{parentName:"p"},"nums")," and uses only constant extra space."),(0,i.kt)("p",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [1,3,4,2,2]\nOutput: 2\n")),(0,i.kt)("p",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums = [3,1,3,4,2]\nOutput: 3\n")),(0,i.kt)("p",null,"Constraints:\n1 <= n <= 105\nnums.length == n + 1\n1 <= nums","[i]"," <= n\nAll the integers in nums appear only once except for precisely one integer which appears two or more times."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"//NOT THE BEST SOLUTION, PURE BRUT FORCE\nclass Solution {\npublic:\n    int findDuplicate(vector<int>& nums) {\n        unordered_map<int,int> m;\n        int out;\n        for(auto n : nums){\n            m[n]++;\n        }\n        for(auto mE: m){\n            if(mE.second > 1) out= mE.first;\n        }\n        return out;\n    }\n};\n")))}m.isMDXComponent=!0}}]);