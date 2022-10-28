"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[4680],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),k=r,m=c["".concat(l,".").concat(k)]||c[k]||p[k]||a;return t?i.createElement(m,o(o({ref:n},u),{},{components:t})):i.createElement(m,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const a={sidebar_position:2200},o="2200. Find All K-Distant Indices in an Array",s={unversionedId:"leetcode/easy/Find All K-Distant Indices in an Array",id:"leetcode/easy/Find All K-Distant Indices in an Array",title:"2200. Find All K-Distant Indices in an Array",description:"Question",source:"@site/docs/leetcode/easy/2200. Find All K-Distant Indices in an Array.md",sourceDirName:"leetcode/easy",slug:"/leetcode/easy/Find All K-Distant Indices in an Array",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Find All K-Distant Indices in an Array",draft:!1,tags:[],version:"current",sidebarPosition:2200,frontMatter:{sidebar_position:2200},sidebar:"lcSidebar",previous:{title:"1929. Concatenation of Array",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Concatenation of Array"},next:{title:"[WIP] 36. Valid Sudoku",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Valid Sudoku"}},l={},d=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],u={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2200-find-all-k-distant-indices-in-an-array"},"2200. Find All K-Distant Indices in an Array"),(0,r.kt)("h2",{id:"question"},"Question"),(0,r.kt)("p",null,"You are given a ",(0,r.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," and two integers ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),". A ",(0,r.kt)("strong",{parentName:"p"},"k-distant index")," is an index ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," for which there exists at least one index ",(0,r.kt)("inlineCode",{parentName:"p"},"j")," such that ",(0,r.kt)("inlineCode",{parentName:"p"},"|i - j|")," <= k and ",(0,r.kt)("inlineCode",{parentName:"p"},"nums[j] == key"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Return a list of all k-distant indices sorted in ",(0,r.kt)("strong",{parentName:"em"},"increasing order"),".")),(0,r.kt)("p",null,"Example 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1\nOutput: [1,2,3,4,5,6]\nExplanation: Here, nums[2] == key and nums[5] == key.\n- For index 0, |0 - 2| > k and |0 - 5| > k, so there is no j where |0 - j| <= k and nums[j] == key. Thus, 0 is not a k-distant index.\n- For index 1, |1 - 2| <= k and nums[2] == key, so 1 is a k-distant index.\n- For index 2, |2 - 2| <= k and nums[2] == key, so 2 is a k-distant index.\n- For index 3, |3 - 2| <= k and nums[2] == key, so 3 is a k-distant index.\n- For index 4, |4 - 5| <= k and nums[5] == key, so 4 is a k-distant index.\n- For index 5, |5 - 5| <= k and nums[5] == key, so 5 is a k-distant index.\n- For index 6, |6 - 5| <= k and nums[5] == key, so 6 is a k-distant index.\nThus, we return [1,2,3,4,5,6] which is sorted in increasing order. \n")),(0,r.kt)("p",null,"Example 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: nums = [2,2,2,2,2], key = 2, k = 2\nOutput: [0,1,2,3,4]\nExplanation: For all indices i in nums, there exists some index j such that |i - j| <= k and nums[j] == key, so every index is a k-distant index. \nHence, we return [0,1,2,3,4].\n")),(0,r.kt)("p",null,"Constraints:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1 <= nums.length <= 1000\n1 <= nums[i] <= 1000\nkey is an integer from the array nums.\n1 <= k <= nums.length\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"approach"},"Approach"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, we have to identify the indexes of ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"nums")," array, and save into a vector."),(0,r.kt)("li",{parentName:"ol"},"Iterate through the input vector"),(0,r.kt)("li",{parentName:"ol"},"If the absolute value of iterator ",(0,r.kt)("inlineCode",{parentName:"li"},"i")," - one of the ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," indexes is <= ",(0,r.kt)("inlineCode",{parentName:"li"},"k"),", it satisfies the requirement and should be place in the ouput vector."),(0,r.kt)("li",{parentName:"ol"},"As soon as one of the ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," satisfies, stop and proceed to the next index.")),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> findKDistantIndices(vector<int>& nums, int key, int k) {\n        //get index of key\n        vector<int> keyIdx;\n        vector<int> idx;\n        \n        for(int i = 0; i < nums.size(); i++){\n            if(nums[i] == key) keyIdx.push_back(i);\n        }\n        \n        for(int i = 0; i < nums.size(); i++){\n            for(int j = 0; j < keyIdx.size(); j++){\n                if(abs(i - keyIdx[j]) <= k){\n                    idx.push_back(i);\n                    break;\n                } \n        }\n    }\n        return idx;\n    }\n};\n")))}p.isMDXComponent=!0}}]);