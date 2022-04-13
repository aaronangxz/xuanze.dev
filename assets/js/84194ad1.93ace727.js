"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[1548],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1477:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:118},s="118. Pascal's Triangle",u={unversionedId:"easy/PascalsTriangle",id:"easy/PascalsTriangle",title:"118. Pascal's Triangle",description:"Question",source:"@site/docs/easy/118. PascalsTriangle.md",sourceDirName:"easy",slug:"/easy/PascalsTriangle",permalink:"/XZ-LeetCode-Journal/docs/easy/PascalsTriangle",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/master/docs/easy/118. PascalsTriangle.md",tags:[],version:"current",sidebarPosition:118,frontMatter:{sidebar_position:118},sidebar:"tutorialSidebar",previous:{title:"[WIP] 88. Merge Sorted Array",permalink:"/XZ-LeetCode-Journal/docs/easy/Merge Sorted Array"},next:{title:"125. Valid Palindrome",permalink:"/XZ-LeetCode-Journal/docs/easy/Valid Palindrome"}},c={},p=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"118-pascals-triangle"},"118. Pascal's Triangle"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"Given an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"numRows"),", return the first numRows of ",(0,a.kt)("strong",{parentName:"p"},"Pascal's triangle"),"."),(0,a.kt)("p",null,"In Pascal's triangle, each number is the sum of the two numbers directly above it."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: numRows = 5\nOutput: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]\n")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: numRows = 1\nOutput: [[1]]\n")),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 <= numRows <= 30\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create 2 vectors, one to store a single level of the pascal triangle, one to consolidate all levels."),(0,a.kt)("li",{parentName:"ol"},"Start from the top row to the bottom, it is known that level 1 will have 1 element, level 2 will have 2 elements etc."),(0,a.kt)("li",{parentName:"ol"},"The element on the left and right most are ",(0,a.kt)("strong",{parentName:"li"},"always")," ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ol"},"For other elements, it is the sum of the two elements on top (row - 1, index - 1) + (row - 1, index)"),(0,a.kt)("li",{parentName:"ol"},"After each level, push it into the consolidated vector.")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> generate(int numRows) {\n        vector<int> out;\n        vector<vector<int>> finalOut;\n\n        for(int lv = 0; lv < numRows; lv++){\n            for(int i = 0; i <= lv; i++){\n                if(i == 0 || i == lv) out.push_back(1);\n                else out.push_back(finalOut[lv - 1][i - 1] + finalOut[lv - 1][i]);\n            }\n            finalOut.push_back(out);\n            out.clear();\n        }\n        \n        return finalOut;\n    }\n};\n\n")))}f.isMDXComponent=!0}}]);