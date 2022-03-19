"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[9682],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},351:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:1592},c="1592. Rearrange Spaces Between Words",l={unversionedId:"tutorial-basics/Rearrange Spaces Between Words",id:"tutorial-basics/Rearrange Spaces Between Words",title:"1592. Rearrange Spaces Between Words",description:"Question",source:"@site/docs/tutorial-basics/1592. Rearrange Spaces Between Words.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Rearrange Spaces Between Words",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Rearrange Spaces Between Words",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/docs/tutorial-basics/1592. Rearrange Spaces Between Words.md",tags:[],version:"current",sidebarPosition:1592,frontMatter:{sidebar_position:1592},sidebar:"tutorialSidebar",previous:{title:"392. Is Subsequence",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Is Subsequence"},next:{title:"1732. Find the Highest Altitude",permalink:"/XZ-LeetCode-Journal/docs/tutorial-basics/Find the Highest Altitude"}},p={},u=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1592-rearrange-spaces-between-words"},"1592. Rearrange Spaces Between Words"),(0,o.kt)("h2",{id:"question"},"Question"),(0,o.kt)("p",null,"You are given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," ",(0,o.kt)("strong",{parentName:"p"},"contains at least one word"),"."),(0,o.kt)("p",null,"Rearrange the spaces so that there is an ",(0,o.kt)("strong",{parentName:"p"},"equal")," number of spaces between every pair of adjacent words and that number is ",(0,o.kt)("strong",{parentName:"p"},"maximized"),". If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,o.kt)("p",null,"Return the string after rearranging the spaces."),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: text = "  this   is  a sentence "\nOutput: "this   is   a   sentence"\nExplanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.\n')),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: text = " practice   makes   perfect"\nOutput: "practice   makes   perfect "\nExplanation: There are a total of 7 spaces and 3 words. 7 / (3-1) = 3 spaces plus 1 extra space. We place this extra space at the end of the string.\n')),(0,o.kt)("p",null,"Constraints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- 1 <= text.length <= 100\n- text consists of lowercase English letters and ' '.\n- text contains at least one word.\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First count the total number of spaces and at the same time retrieve the individual words."),(0,o.kt)("li",{parentName:"ol"},"If there is no space at all, directly return the input ",(0,o.kt)("inlineCode",{parentName:"li"},"text"),"."),(0,o.kt)("li",{parentName:"ol"},"If there are multiple words, calculate the spaces needed in between each word by ",(0,o.kt)("inlineCode",{parentName:"li"},"<number of spaces> / number of words"),"."),(0,o.kt)("li",{parentName:"ol"},"If there is a remainder, keep track of ",(0,o.kt)("inlineCode",{parentName:"li"},"<number of spaces> % number of words"),", these are the spaces we need to append to the end."),(0,o.kt)("li",{parentName:"ol"},"If there is only one word, spaces need to be appended behind as well, we can directly set the number of spaces as the remainder."),(0,o.kt)("li",{parentName:"ol"},"Construct the string and add the spaces in between accordingly."),(0,o.kt)("li",{parentName:"ol"},"Append the remaining number of spaces if any.")),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    string reorderSpaces(string text) {\n        int spaceCount = 0;\n        string word = "";\n        vector<string> words;\n        \n        for(int i = 0; i < text.size(); i++){\n            if(text[i] == \' \'){\n                spaceCount ++;\n                if(!word.empty()){\n                    words.push_back(word);\n                    word.clear();\n                    continue;\n                } \n            } \n            else word += text[i];\n            \n            if(i == text.size() -1 && !word.empty()) words.push_back(word);              \n        }\n        \n        int each, rem;\n        if(spaceCount == 0) return text;\n        if(words.size()- 1 != 0){\n            each = spaceCount/(words.size()-1);\n            rem = spaceCount%(words.size()-1);\n        }else{\n            rem = spaceCount;\n        }\n        \n        string out;\n        for(int i = 0; i < words.size(); i++){\n            out += words[i];\n            if (each != 0 && i != words.size() - 1){\n                for(int j = 1; j <= each; j++){\n                    out += " ";\n                } \n            }\n        }\n        \n        if(rem != 0){\n            while(rem > 0){\n                out += " ";\n                rem--;\n            }\n        }\n        return out;\n    }\n};\n')))}m.isMDXComponent=!0}}]);