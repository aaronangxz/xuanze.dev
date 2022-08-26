"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[8148],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1929},i="1929. Concatenation of Array",l={unversionedId:"leetcode/easy/Concatenation of Array",id:"leetcode/easy/Concatenation of Array",title:"1929. Concatenation of Array",description:"Question",source:"@site/docs/leetcode/easy/1929. Concatenation of Array.md",sourceDirName:"leetcode/easy",slug:"/leetcode/easy/Concatenation of Array",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Concatenation of Array",tags:[],version:"current",sidebarPosition:1929,frontMatter:{sidebar_position:1929},sidebar:"lcSidebar",previous:{title:"1732. Find the Highest Altitude",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Find the Highest Altitude"},next:{title:"2200. Find All K-Distant Indices in an Array",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Find All K-Distant Indices in an Array"}},s={},p=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1929-concatenation-of-array"},"1929. Concatenation of Array"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"Given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," of length ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", you want to create an array ",(0,a.kt)("inlineCode",{parentName:"p"},"ans")," of length ",(0,a.kt)("inlineCode",{parentName:"p"},"2n")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"ans[i] == nums[i]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ans[i + n] == nums[i]")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"0 <= i < n")," (0-indexed)."),(0,a.kt)("p",null,"Specifically, ",(0,a.kt)("inlineCode",{parentName:"p"},"ans")," is the concatenation of two ",(0,a.kt)("inlineCode",{parentName:"p"},"nums")," arrays."),(0,a.kt)("p",null,"Return the array ",(0,a.kt)("inlineCode",{parentName:"p"},"ans"),"."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,2,1]\nOutput: [1,2,1,1,2,1]\nExplanation: The array ans is formed as follows:\n- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]\n- ans = [1,2,1,1,2,1]\n")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,3,2,1]\nOutput: [1,3,2,1,1,3,2,1]\nExplanation: The array ans is formed as follows:\n- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]\n- ans = [1,3,2,1,1,3,2,1]\n")),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- n == nums.length\n- 1 <= n <= 1000\n- 1 <= nums[i] <= 1000\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Append the vector again to the back of the original vector.")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> getConcatenation(vector<int>& nums) {\n        int size = nums.size();\n        for(int i = 0; i < size; i++){\n            nums.push_back(nums[i]);\n        }\n        return nums;\n    }\n};\n")))}c.isMDXComponent=!0}}]);