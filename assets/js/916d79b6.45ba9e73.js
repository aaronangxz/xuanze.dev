"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[5033],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,f=m["".concat(u,".").concat(k)]||m[k]||p[k]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8060:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:895,tags:["Hash Table","Stack"]},u="[WIP] 895. Maximum Frequency Stack",c={unversionedId:"hard/Maximum Frequency Stack",id:"hard/Maximum Frequency Stack",title:"[WIP] 895. Maximum Frequency Stack",description:"Question",source:"@site/docs/hard/895. Maximum Frequency Stack.md",sourceDirName:"hard",slug:"/hard/Maximum Frequency Stack",permalink:"/XZ-LeetCode-Journal/docs/hard/Maximum Frequency Stack",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/master/docs/hard/895. Maximum Frequency Stack.md",tags:[{label:"Hash Table",permalink:"/XZ-LeetCode-Journal/docs/tags/hash-table"},{label:"Stack",permalink:"/XZ-LeetCode-Journal/docs/tags/stack"}],version:"current",sidebarPosition:895,frontMatter:{sidebar_position:895,tags:["Hash Table","Stack"]},sidebar:"tutorialSidebar",previous:{title:"1663. Smallest String With A Given Numeric Value",permalink:"/XZ-LeetCode-Journal/docs/medium/Smallest String With A Given Numeric Value"}},s={},p=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],m={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wip-895-maximum-frequency-stack"},"[WIP]"," 895. Maximum Frequency Stack"),(0,o.kt)("h2",{id:"question"},"Question"),(0,o.kt)("p",null,"Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack."),(0,o.kt)("p",null,"Implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"FreqStack")," class:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FreqStack()")," constructs an empty frequency stack."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"void push(int val)")," pushes an integer ",(0,o.kt)("inlineCode",{parentName:"li"},"val")," onto the top of the stack."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int pop()")," removes and returns the most frequent element in the stack.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.")))),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input\n["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]\n[[], [5], [7], [5], [7], [4], [5], [], [], [], []]\nOutput\n[null, null, null, null, null, null, null, 5, 7, 5, 4]\n\nExplanation\nFreqStack freqStack = new FreqStack();\nfreqStack.push(5); // The stack is [5]\nfreqStack.push(7); // The stack is [5,7]\nfreqStack.push(5); // The stack is [5,7,5]\nfreqStack.push(7); // The stack is [5,7,5,7]\nfreqStack.push(4); // The stack is [5,7,5,7,4]\nfreqStack.push(5); // The stack is [5,7,5,7,4,5]\nfreqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].\nfreqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].\nfreqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].\nfreqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].\n')),(0,o.kt)("p",null,"Constraints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0 <= val <= 109\nAt most 2 * 104 calls will be made to push and pop.\nIt is guaranteed that there will be at least one element in the stack before calling pop.\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class FreqStack {\npublic:\n    unordered_map<int, int> freq;\n    unordered_map<int, stack<int>> m;\n    int maxfreq = 0;\n    \n    FreqStack() {\n        \n    }\n    \n    void push(int val) {\n        maxfreq = max(maxfreq, ++freq[val]);\n        m[freq[val]].push(val);\n    }\n    \n    int pop() {\n                \n        int x = m[maxfreq].top();\n        m[maxfreq].pop();\n        if (!m[freq[x]--].size()) maxfreq--;\n        return x;\n    }\n};\n\n/**\n * Your FreqStack object will be instantiated and called as such:\n * FreqStack* obj = new FreqStack();\n * obj->push(val);\n * int param_2 = obj->pop();\n */\n")))}k.isMDXComponent=!0}}]);