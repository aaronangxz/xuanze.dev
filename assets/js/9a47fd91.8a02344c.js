"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[5677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,p=function(e,t){if(null==e)return{};var n,o,p={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=p,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,r=new Array(a);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,r[1]=i;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),p=(n(7294),n(3905));const a={sidebar_position:946,tags:["Stack"]},r="946. Validate Stack Sequences",i={unversionedId:"leetcode/medium/Validate Stack Sequences",id:"leetcode/medium/Validate Stack Sequences",title:"946. Validate Stack Sequences",description:"Question",source:"@site/docs/leetcode/medium/946. Validate Stack Sequences.md",sourceDirName:"leetcode/medium",slug:"/leetcode/medium/Validate Stack Sequences",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Validate Stack Sequences",tags:[{label:"Stack",permalink:"/XZ-LeetCode-Journal/docs/tags/stack"}],version:"current",sidebarPosition:946,frontMatter:{sidebar_position:946,tags:["Stack"]},sidebar:"lcSidebar",previous:{title:"[WIP] 856. Score of Parentheses",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Score of Parentheses"},next:{title:"[WIP] 1007. Minimum Domino Rotations For Equal Row",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Minimum Domino Rotations For Equal Row"}},l={},s=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"946-validate-stack-sequences"},"946. Validate Stack Sequences"),(0,p.kt)("h2",{id:"question"},"Question"),(0,p.kt)("p",null,"Given two integer arrays ",(0,p.kt)("inlineCode",{parentName:"p"},"pushed")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"popped")," each with distinct values, return ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," if this could have been the result of a sequence of push and pop operations on an initially empty stack, or ",(0,p.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,p.kt)("p",null,"Example 1:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]\nOutput: true\nExplanation: We might do the following sequence:\npush(1), push(2), push(3), push(4),\npop() -> 4,\npush(5),\npop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1\n")),(0,p.kt)("p",null,"Tracking"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pushed[0] => 1\nstack = {1}\ntop != popped[0] => 4\n\npushed[1] => 2\nstack = {1,2}\ntop != popped[0] => 4\n\npushed[2] => 3\nstack = {1,2,3}\ntop != popped[0] => 4\n\npushed[3] => 4\nstack = {1,2,3,4}\ntop == popped[0] => 4, hence pop top. stack = {1,2,3}\ncheck the next in popped\ntop != popped[1] => 5\n\npushed[4] => 5\nstack = {1,2,3,5}\ntop == popped[1] => 5, hence pop top. stack = {1,2,3}\ntop == popped[2] => 3, hence pop top. stack = {1,2}\ntop == popped[3] => 2, hence pop top. stack = {1}\ntop == popped[4] => 1, hence pop top. stack = {}\n\nstack is empty, return true\n")),(0,p.kt)("p",null,"Example 2:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]\nOutput: false\nExplanation: 1 cannot be popped before 2.\n")),(0,p.kt)("p",null,"Constraints:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"1 <= pushed.length <= 1000\n0 <= pushed[i] <= 1000\nAll the elements of pushed are unique.\npopped.length == pushed.length\npopped is a permutation of pushed.\n")),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"approach"},"Approach"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Iterate through ",(0,p.kt)("inlineCode",{parentName:"li"},"pushed")," and push onto stack."),(0,p.kt)("li",{parentName:"ol"},"At the same time, check if the top of the stack is equals to elements in ",(0,p.kt)("inlineCode",{parentName:"li"},"popped"),"."),(0,p.kt)("li",{parentName:"ol"},"If yes, that means it is a valid stack, so we can pop the top and check the next index in ",(0,p.kt)("inlineCode",{parentName:"li"},"popped"),". Stop when either there is no more items in stack or it does not match ",(0,p.kt)("inlineCode",{parentName:"li"},"popped"),"."),(0,p.kt)("li",{parentName:"ol"},"Continue the same for the next element in ",(0,p.kt)("inlineCode",{parentName:"li"},"pushed"),"."),(0,p.kt)("li",{parentName:"ol"},"After checking every element in ",(0,p.kt)("inlineCode",{parentName:"li"},"pushed"),", if there is still remaining items in the stack that means this is not a valid stack sequence.")),(0,p.kt)("h2",{id:"solution"},"Solution"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {\n        stack<int> s;\n        int j = 0;\n        \n        for(int i = 0; i < pushed.size(); i++){\n            s.push(pushed[i]);\n            \n            while(!s.empty() && s.top() == popped[j]){\n                s.pop();\n                j++;\n            }\n        }\n        return s.empty();\n    }\n};\n")))}u.isMDXComponent=!0}}]);