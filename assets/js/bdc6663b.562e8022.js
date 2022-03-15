"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[9686],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,c=u(n,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:e},c),{},{components:t})):r.createElement(f,i({ref:e},c))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=n,u.mdxType="string"==typeof n?n:a,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2135:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],u={sidebar_position:1929},s="1929. Concatenation of Array",l={unversionedId:"tutorial-basics/Concatenation of Array",id:"tutorial-basics/Concatenation of Array",title:"1929. Concatenation of Array",description:"Question",source:"@site/docs/tutorial-basics/1929. Concatenation of Array.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Concatenation of Array",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Concatenation of Array",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/1929. Concatenation of Array.md",tags:[],version:"current",sidebarPosition:1929,frontMatter:{sidebar_position:1929},sidebar:"tutorialSidebar",previous:{title:"1732. Find the Highest Altitude",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Find the Highest Altitude"},next:{title:"2200. Find All K-Distant Indices in an Array",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Find All K-Distant Indices in an Array"}},c={},p=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],m={toc:p};function d(n){var e=n.components,t=(0,a.Z)(n,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1929-concatenation-of-array"},"1929. Concatenation of Array"),(0,o.kt)("h2",{id:"question"},"Question"),(0,o.kt)("p",null,"Given an integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," of length ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),", you want to create an array ",(0,o.kt)("inlineCode",{parentName:"p"},"ans")," of length ",(0,o.kt)("inlineCode",{parentName:"p"},"2n")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"ans[i] == nums[i]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ans[i + n] == nums[i]")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"0 <= i < n")," (0-indexed)."),(0,o.kt)("p",null,"Specifically, ",(0,o.kt)("inlineCode",{parentName:"p"},"ans")," is the concatenation of two ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," arrays."),(0,o.kt)("p",null,"Return the array ",(0,o.kt)("inlineCode",{parentName:"p"},"ans"),"."),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,2,1]\nOutput: [1,2,1,1,2,1]\nExplanation: The array ans is formed as follows:\n- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]\n- ans = [1,2,1,1,2,1]\n")),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,3,2,1]\nOutput: [1,3,2,1,1,3,2,1]\nExplanation: The array ans is formed as follows:\n- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]\n- ans = [1,3,2,1,1,3,2,1]\n")),(0,o.kt)("p",null,"Constraints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- n == nums.length\n- 1 <= n <= 1000\n- 1 <= nums[i] <= 1000\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Append the vector again to the back of the original vector.")),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> getConcatenation(vector<int>& nums) {\n        int size = nums.size();\n        for(int i = 0; i < size; i++){\n            nums.push_back(nums[i]);\n        }\n        return nums;\n    }\n};\n")))}d.isMDXComponent=!0}}]);