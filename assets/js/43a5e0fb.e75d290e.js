"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[4561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,tags:["Hash Table"]},i="1. Two Sum",l={unversionedId:"leetcode/easy/Two Sum",id:"leetcode/easy/Two Sum",title:"1. Two Sum",description:"Question",source:"@site/docs/leetcode/easy/1. Two Sum.md",sourceDirName:"leetcode/easy",slug:"/leetcode/easy/Two Sum",permalink:"/docs/leetcode/easy/Two Sum",draft:!1,tags:[{label:"Hash Table",permalink:"/docs/tags/hash-table"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Hash Table"]},sidebar:"lcSidebar",next:{title:"20. Valid Parentheses",permalink:"/docs/leetcode/easy/Valid Parentheses"}},u={},s=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-two-sum"},"1. Two Sum"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"Given an array of integers ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),", return indices of the two numbers such that they add up to ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,a.kt)("p",null,"You may assume that each input would have ",(0,a.kt)("strong",{parentName:"p"},"exactly one solution"),", and you may not use the same element twice."),(0,a.kt)("p",null,"You can return the answer in any order."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].\n")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [3,2,4], target = 6\nOutput: [1,2]\n")),(0,a.kt)("p",null,"Example 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [3,3], target = 6\nOutput: [0,1]\n")),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2 <= nums.length <= 104\n-109 <= nums[i] <= 109\n-109 <= target <= 109\nOnly one valid answer exists.\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a hash table with int pairs, which the key would be the number in ",(0,a.kt)("inlineCode",{parentName:"li"},"nums"),", value would be the index of this number in ",(0,a.kt)("inlineCode",{parentName:"li"},"nums"),"."),(0,a.kt)("li",{parentName:"ol"},"Iterate through ",(0,a.kt)("inlineCode",{parentName:"li"},"nums"),", and check if (",(0,a.kt)("inlineCode",{parentName:"li"},"target")," minus current number) exists in map as a key."),(0,a.kt)("li",{parentName:"ol"},"If not, insert pair into map."),(0,a.kt)("li",{parentName:"ol"},"If yes, that means we have found the two numbers that adds up to ",(0,a.kt)("inlineCode",{parentName:"li"},"target"),"."),(0,a.kt)("li",{parentName:"ol"},"Return result will be <index found in map, index of current element>.")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        unordered_map<int,int> m;\n        vector<int> out;\n        \n        for(int i = 0; i < nums.size(); i++){\n            if(m.count(target - nums[i])){\n                out.push_back(m[target - nums[i]]);\n                out.push_back(i);\n            }else{\n                m[nums[i]] = i;\n            }\n        }\n        return out;\n    }\n};\n\n")))}c.isMDXComponent=!0}}]);