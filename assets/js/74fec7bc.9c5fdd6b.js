"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[9225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:20,tags:["Demo","Getting started"]},o="20. Valid Parentheses",s={unversionedId:"leetcode/easy/Valid Parentheses",id:"leetcode/easy/Valid Parentheses",title:"20. Valid Parentheses",description:"Question",source:"@site/docs/leetcode/easy/20.Valid Parentheses.md",sourceDirName:"leetcode/easy",slug:"/leetcode/easy/Valid Parentheses",permalink:"/docs/leetcode/easy/Valid Parentheses",draft:!1,tags:[{label:"Demo",permalink:"/docs/tags/demo"},{label:"Getting started",permalink:"/docs/tags/getting-started"}],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,tags:["Demo","Getting started"]},sidebar:"lcSidebar",previous:{title:"1. Two Sum",permalink:"/docs/leetcode/easy/Two Sum"},next:{title:"21. Merge Two Sorted Lists",permalink:"/docs/leetcode/easy/Merge Two Sorted Lists"}},l={},p=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"20-valid-parentheses"},"20. Valid Parentheses"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"Given a string s containing just the characters ",(0,a.kt)("inlineCode",{parentName:"p"},"'('"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"')'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'{'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'}'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'['")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"']'"),", determine if the input string is valid."),(0,a.kt)("p",null,"An input string is valid if:"),(0,a.kt)("p",null,"Open brackets must be closed by the same type of brackets.\nOpen brackets must be closed in the correct order."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "()"\nOutput: true\n')),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "()[]{}"\nOutput: true\n')),(0,a.kt)("p",null,"Example 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "(]"\nOutput: false\n')),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 <= s.length <= 104\ns consists of parentheses only '()[]{}'.\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If there is only a single paranthesis in the input, it is ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," for sure."),(0,a.kt)("li",{parentName:"ol"},"Check the input for open / close parenthesis i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"'('"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"'{'"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"'['")),(0,a.kt)("li",{parentName:"ol"},"If any of these 3 are found, add the corresponding closing parenthesis to the stack."),(0,a.kt)("li",{parentName:"ol"},"When we found any none-opening paranthesis, check if it is indeed the one on top of the stack. If yes, pop it from the stack."),(0,a.kt)("li",{parentName:"ol"},"There is a case when we found a close paranthesis before any opening paranthesis, hence it is ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," too."),(0,a.kt)("li",{parentName:"ol"},"After interating the whole string, by right the stack should be empty by now. If it is not, some parenthesis was not closed, hence ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool isValid(string s) {\n        if(s.size() == 1) return false;\n        stack<char> par;\n        \n        for(int i = 0; i < s.size(); i++){\n            if(s[i] == '('){ \n                par.push(')');\n            }else if(s[i] == '['){\n                par.push(']');\n            }else if( s[i] == '{'){\n                par.push('}');\n            }else{\n                if(par.empty()) return false;\n                if(s[i] == par.top()){\n                    par.pop();\n                    continue;\n                }\n                return false;\n            }\n        }\n        \n        if(!par.empty()) return false;\n        return true;\n    }\n};\n")))}u.isMDXComponent=!0}}]);