"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[3964],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(m,p(p({ref:t},u),{},{components:n})):o.createElement(m,p({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5990:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),p=["components"],i={sidebar_position:946,tags:["Stack"]},s="946. Validate Stack Sequences",l={unversionedId:"tutorial-extras/Validate Stack Sequences",id:"tutorial-extras/Validate Stack Sequences",title:"946. Validate Stack Sequences",description:"Question",source:"@site/docs/tutorial-extras/946. Validate Stack Sequences.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/Validate Stack Sequences",permalink:"/XZ-LeetCode-Journal/docs/tutorial-extras/Validate Stack Sequences",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/master/docs/tutorial-extras/946. Validate Stack Sequences.md",tags:[{label:"Stack",permalink:"/XZ-LeetCode-Journal/docs/tags/stack"}],version:"current",sidebarPosition:946,frontMatter:{sidebar_position:946,tags:["Stack"]},sidebar:"tutorialSidebar",previous:{title:"[WIP] 856. Score of Parentheses",permalink:"/XZ-LeetCode-Journal/docs/tutorial-extras/Score of Parentheses"},next:{title:"[WIP] 1007. Minimum Domino Rotations For Equal Row",permalink:"/XZ-LeetCode-Journal/docs/tutorial-extras/Minimum Domino Rotations For Equal Row"}},u={},c=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"946-validate-stack-sequences"},"946. Validate Stack Sequences"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"Given two integer arrays ",(0,a.kt)("inlineCode",{parentName:"p"},"pushed")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"popped")," each with distinct values, return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if this could have been the result of a sequence of push and pop operations on an initially empty stack, or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]\nOutput: true\nExplanation: We might do the following sequence:\npush(1), push(2), push(3), push(4),\npop() -> 4,\npush(5),\npop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1\n")),(0,a.kt)("p",null,"Tracking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pushed[0] => 1\nstack = {1}\ntop != popped[0] => 4\n\npushed[1] => 2\nstack = {1,2}\ntop != popped[0] => 4\n\npushed[2] => 3\nstack = {1,2,3}\ntop != popped[0] => 4\n\npushed[3] => 4\nstack = {1,2,3,4}\ntop == popped[0] => 4, hence pop top. stack = {1,2,3}\ncheck the next in popped\ntop != popped[1] => 5\n\npushed[4] => 5\nstack = {1,2,3,5}\ntop == popped[1] => 5, hence pop top. stack = {1,2,3}\ntop == popped[2] => 3, hence pop top. stack = {1,2}\ntop == popped[3] => 2, hence pop top. stack = {1}\ntop == popped[4] => 1, hence pop top. stack = {}\n\nstack is empty, return true\n")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]\nOutput: false\nExplanation: 1 cannot be popped before 2.\n")),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 <= pushed.length <= 1000\n0 <= pushed[i] <= 1000\nAll the elements of pushed are unique.\npopped.length == pushed.length\npopped is a permutation of pushed.\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Iterate through ",(0,a.kt)("inlineCode",{parentName:"li"},"pushed")," and push onto stack."),(0,a.kt)("li",{parentName:"ol"},"At the same time, check if the top of the stack is equals to elements in ",(0,a.kt)("inlineCode",{parentName:"li"},"popped"),"."),(0,a.kt)("li",{parentName:"ol"},"If yes, that means it is a valid stack, so we can pop the top and check the next index in ",(0,a.kt)("inlineCode",{parentName:"li"},"popped"),". Stop when either there is no more items in stack or it does not match ",(0,a.kt)("inlineCode",{parentName:"li"},"popped"),"."),(0,a.kt)("li",{parentName:"ol"},"Continue the same for the next element in ",(0,a.kt)("inlineCode",{parentName:"li"},"pushed"),"."),(0,a.kt)("li",{parentName:"ol"},"After checking every element in ",(0,a.kt)("inlineCode",{parentName:"li"},"pushed"),", if there is still remaining items in the stack that means this is not a valid stack sequence.")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {\n        stack<int> s;\n        int j = 0;\n        \n        for(int i = 0; i < pushed.size(); i++){\n            s.push(pushed[i]);\n            \n            while(!s.empty() && s.top() == popped[j]){\n                s.pop();\n                j++;\n            }\n        }\n        return s.empty();\n    }\n};\n")))}h.isMDXComponent=!0}}]);