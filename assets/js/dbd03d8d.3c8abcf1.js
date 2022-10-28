"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[4405],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:868,tags:["Bit Manipulation"]},o="868. Binary Gap",p={unversionedId:"leetcode/easy/Binary Gap",id:"leetcode/easy/Binary Gap",title:"868. Binary Gap",description:"Question",source:"@site/docs/leetcode/easy/868. Binary Gap.md",sourceDirName:"leetcode/easy",slug:"/leetcode/easy/Binary Gap",permalink:"/docs/leetcode/easy/Binary Gap",draft:!1,tags:[{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:868,frontMatter:{sidebar_position:868,tags:["Bit Manipulation"]},sidebar:"lcSidebar",previous:{title:"392. Is Subsequence",permalink:"/docs/leetcode/easy/Is Subsequence"},next:{title:"1592. Rearrange Spaces Between Words",permalink:"/docs/leetcode/easy/Rearrange Spaces Between Words"}},l={},s=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"868-binary-gap"},"868. Binary Gap"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"Given a positive integer ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", find and return the longest distance between any two ",(0,a.kt)("strong",{parentName:"p"},"adjacent")," ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"'s in the binary representation of ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),". If there are no two adjacent ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"'s, return ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"Two 1's are ",(0,a.kt)("strong",{parentName:"p"},"adjacent")," if there are only ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"'s separating them (possibly no ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"'s). The distance between two ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"'s is the absolute difference between their bit positions. For example, the two ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"'s in ",(0,a.kt)("inlineCode",{parentName:"p"},'"1001"')," have a distance of 3."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: n = 22\nOutput: 2\nExplanation: 22 in binary is "10110".\nThe first adjacent pair of 1\'s is "10110" with a distance of 2.\nThe second adjacent pair of 1\'s is "10110" with a distance of 1.\nThe answer is the largest of these two distances, which is 2.\nNote that "10110" is not a valid pair since there is a 1 separating the two 1\'s underlined.\n')),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: n = 8\nOutput: 0\nExplanation: 8 in binary is "1000".\nThere are not any adjacent pairs of 1\'s in the binary representation of 8, so we return 0.\n')),(0,a.kt)("p",null,"Example 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: n = 5\nOutput: 2\nExplanation: 5 in binary is "101".\n')),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1 <= n <= 109\n\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, convert the input ",(0,a.kt)("inlineCode",{parentName:"li"},"n")," into bit. We can check each of the bits, by shifting it to the left until the end of ",(0,a.kt)("inlineCode",{parentName:"li"},"n"),"."),(0,a.kt)("li",{parentName:"ol"},"Reverse the string of bits just now, and we will have the bit representation of ",(0,a.kt)("inlineCode",{parentName:"li"},"n"),"."),(0,a.kt)("li",{parentName:"ol"},"Iterate through the bits, look for the first occurence of ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," and compare the distance between it and the next ",(0,a.kt)("inlineCode",{parentName:"li"},"i"),".")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    int binaryGap(int n) {\n        string bin;\n        \n        while(n){\n            if(n & 1){\n                bin += "1";\n            }else{\n                bin += "0";\n            }\n            n >>= 1;\n        }\n        \n        reverse(bin.begin(),bin.end());\n        \n        int dist = 0;\n        int prev = -1;\n        \n        for(int i = 0; i < bin.size(); i++){\n            if(bin[i] == \'1\'){\n                if (prev == -1) prev = i;\n                else{\n                    dist = max(dist,i - prev);\n                    prev = i;\n                } \n            }\n        }\n        return dist;\n    }\n};\n\n')))}u.isMDXComponent=!0}}]);