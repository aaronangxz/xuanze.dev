"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[3671],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>d});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=t.createContext({}),u=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},s=function(e){var a=u(e.components);return t.createElement(m.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(m,".").concat(d)]||p[d]||c[d]||o;return n?t.createElement(g,l(l({ref:a},s),{},{components:n})):t.createElement(g,l({ref:a},s))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},898:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(7462),r=(n(7294),n(3905));const o={sidebar_position:53,tags:["Dynamic Programming","Kadane\u2019s Algorithm"]},l="53. Maximum Subarray",i={unversionedId:"leetcode/easy/Maximum Subarray",id:"leetcode/easy/Maximum Subarray",title:"53. Maximum Subarray",description:"Question",source:"@site/docs/leetcode/easy/53. Maximum Subarray.md",sourceDirName:"leetcode/easy",slug:"/leetcode/easy/Maximum Subarray",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Maximum Subarray",tags:[{label:"Dynamic Programming",permalink:"/XZ-LeetCode-Journal/docs/tags/dynamic-programming"},{label:"Kadane\u2019s Algorithm",permalink:"/XZ-LeetCode-Journal/docs/tags/kadanes-algorithm"}],version:"current",sidebarPosition:53,frontMatter:{sidebar_position:53,tags:["Dynamic Programming","Kadane\u2019s Algorithm"]},sidebar:"lcSidebar",previous:{title:"21. Merge Two Sorted Lists",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Merge Two Sorted Lists"},next:{title:"83. Remove Duplicates from Sorted List",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Remove Duplicates from Sorted List"}},m={},u=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],s={toc:u};function c(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"53-maximum-subarray"},"53. Maximum Subarray"),(0,r.kt)("h2",{id:"question"},"Question"),(0,r.kt)("p",null,"Given an integer array ",(0,r.kt)("inlineCode",{parentName:"p"},"nums"),", find the contiguous subarray (containing at least one number) which has the largest sum and return its sum."),(0,r.kt)("p",null,"A subarray is a contiguous part of an array."),(0,r.kt)("p",null,"Example 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: [4,-1,2,1] has the largest sum = 6.\n")),(0,r.kt)("p",null,"Tracking:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"At nums[0] => -2\nlocal_max = max(-2, 0 + -2 = -2) = -2, global_max = -2\n\nAt nums[1] => 1\nlocal_max = max(1, -2 + 1 = -1) = 1, global_max = 1\n\nAt nums[2] => -3\nlocal_max = max(-3, 1 + -3 = -2) = -2, global_max = 1\n\n***** Start of contiguous sub array *****\nThis is where the global_max increases\n\nAt nums[3] => 4\nlocal_max = max(4, -2 + 4 = 2) = 4, global_max = 4\n\nAt nums[4] => -1\nlocal_max = max(-1, 4 + -1 = 3) = 3, global_max = 4\n\nAt nums[5] => 2\nlocal_max = max(2, 3 + 2 = 5) = 5, global_max = 5\n\nAt nums[6] => 1\nlocal_max = max(1, 5 + 1 = 6) = 6, global_max = 6\n\n***** End of contiguous sub array *****\nThis is where the local_max decreases\n\nAt nums[7] => -5\nlocal_max = max(-5, 6 + -5 = 1) = 1, global_max = 6\n\nAt nums[8] => 4\nlocal_max = max(4, 1 + 4 = 5) = 5, global_max = 6\n")),(0,r.kt)("p",null,"Example 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [1]\nOutput: 1\n")),(0,r.kt)("p",null,"Example 3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [5,4,-1,7,8]\nOutput: 23\n")),(0,r.kt)("p",null,"Constraints:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- 1 <= nums.length <= 105\n- -104 <= nums[i] <= 104\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"approach"},"Approach"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using Kadane\u2019s Algorithm - Nice article here ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d"},"Kadane\u2019s Algorithm \u2014 (Dynamic Programming) \u2014 How and Why does it Work?")),(0,r.kt)("li",{parentName:"ol"},"While iterating through the array, calculate the current max and save as ",(0,r.kt)("inlineCode",{parentName:"li"},"local_max"),"."),(0,r.kt)("li",{parentName:"ol"},"After which, update the maximum ",(0,r.kt)("inlineCode",{parentName:"li"},"global_max")," when ",(0,r.kt)("inlineCode",{parentName:"li"},"local_max")," is greater, this is the greatest sum of the contiguous sub array.")),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int local_max = 0;\n        int global_max = INT_MIN;\n        \n        for(int i = 0; i < nums.size(); i++){\n            local_max = max(nums[i], local_max + nums[i]);\n            global_max = local_max > global_max ? local_max : global_max;\n        }\n        return global_max;\n    }\n};\n")))}c.isMDXComponent=!0}}]);