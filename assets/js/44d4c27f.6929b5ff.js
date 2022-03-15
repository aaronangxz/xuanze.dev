"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[2976],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:71},p="71. Simplify Path",s={unversionedId:"tutorial-extras/Simplify Path",id:"tutorial-extras/Simplify Path",title:"71. Simplify Path",description:"Question",source:"@site/docs/tutorial-extras/71. Simplify Path.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/Simplify Path",permalink:"/XZ-LeetCode-Journal/docs/tutorial-extras/Simplify Path",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/71. Simplify Path.md",tags:[],version:"current",sidebarPosition:71,frontMatter:{sidebar_position:71},sidebar:"tutorialSidebar",previous:{title:"[WIP] 61. Rotate List",permalink:"/XZ-LeetCode-Journal/docs/tutorial-extras/Rotate List"},next:{title:"1249. Minimum Remove to Make Valid Parentheses",permalink:"/XZ-LeetCode-Journal/docs/tutorial-extras/Minimum Remove to Make Valid Parentheses"}},u={},c=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"71-simplify-path"},"71. Simplify Path"),(0,i.kt)("h2",{id:"question"},"Question"),(0,i.kt)("p",null,"Given a string ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),", which is an ",(0,i.kt)("strong",{parentName:"p"},"absolute path")," (starting with a slash ",(0,i.kt)("inlineCode",{parentName:"p"},"'/'"),") to a file or directory in a Unix-style file system, convert it to the simplified ",(0,i.kt)("strong",{parentName:"p"},"canonical path"),"."),(0,i.kt)("p",null,"In a Unix-style file system, a period ",(0,i.kt)("inlineCode",{parentName:"p"},"'.'")," refers to the current directory, a double period ",(0,i.kt)("inlineCode",{parentName:"p"},"'..'")," refers to the directory up a level, and any multiple consecutive slashes (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"'//'"),") are treated as a single slash ",(0,i.kt)("inlineCode",{parentName:"p"},"'/'"),". For this problem, any other format of periods such as ",(0,i.kt)("inlineCode",{parentName:"p"},"'...'")," are treated as file/directory names."),(0,i.kt)("p",null,"The canonical path should have the following format:"),(0,i.kt)("p",null,"The path starts with a single slash ",(0,i.kt)("inlineCode",{parentName:"p"},"'/'"),".\nAny two directories are separated by a single slash ",(0,i.kt)("inlineCode",{parentName:"p"},"'/'"),".\nThe path does not end with a trailing ",(0,i.kt)("inlineCode",{parentName:"p"},"'/'"),".\nThe path only contains the directories on the path from the root directory to the target file or directory (i.e., no period ",(0,i.kt)("inlineCode",{parentName:"p"},"'.'")," or double period ",(0,i.kt)("inlineCode",{parentName:"p"},"'..'"),")\nReturn the simplified ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"canonical"))," path."),(0,i.kt)("p",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: path = "/home/"\nOutput: "/home"\nExplanation: Note that there is no trailing slash after the last directory name.\n')),(0,i.kt)("p",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: path = "/../"\nOutput: "/"\nExplanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.\n')),(0,i.kt)("p",null,"Example 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: path = "/home//foo/"\nOutput: "/home/foo"\nExplanation: In the canonical path, multiple consecutive slashes are replaced by a single one.\n')),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 <= path.length <= 3000"),(0,i.kt)("li",{parentName:"ul"},"path consists of English letters, digits, period '.', slash '/' or '_'."),(0,i.kt)("li",{parentName:"ul"},"path is a valid absolute Unix path.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Iterate through the ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," and look for directory names, i.e. those that are not ",(0,i.kt)("inlineCode",{parentName:"li"},"'/'")," and append into a string"),(0,i.kt)("li",{parentName:"ol"},"Once we found a ",(0,i.kt)("inlineCode",{parentName:"li"},"'/'"),", the string we appended just now will be one of the file directories name. If that's the case, push it onto the stack."),(0,i.kt)("li",{parentName:"ol"},"Else, if we encounter ",(0,i.kt)("inlineCode",{parentName:"li"},"'.'"),", we can ignore and proceed. If we encounter ",(0,i.kt)("inlineCode",{parentName:"li"},"'..'"),", we need to exit one level, which means we should pop off the top of the stack."),(0,i.kt)("li",{parentName:"ol"},"Because there isn't a ",(0,i.kt)("inlineCode",{parentName:"li"},"'/'")," at the end of ",(0,i.kt)("inlineCode",{parentName:"li"},"path"),", we need to check for one last time for the deepest level of file directory."),(0,i.kt)("li",{parentName:"ol"},"Append the final string by popping the stack, then iterate through the vector from the back to front (We need LILO here) and join each of the file directories with ",(0,i.kt)("inlineCode",{parentName:"li"},"'/'"),".")),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    string simplifyPath(string path) {\n        stack<string> pathS;\n        string curr;\n        \n        for(int i = 0; i < path.size(); i++){\n            if(path[i] != \'/\'){\n                curr += path[i];\n            }else{\n                if(curr.empty()) continue;\n                if(curr == "."){\n                    curr = "";\n                    continue;\n                }\n                if(curr == ".."){\n                    if(!pathS.empty()) pathS.pop();\n                    curr = "";\n                    continue;\n                }\n                pathS.push(curr);  \n                curr = "";\n            }\n        }\n        \n        if(!curr.empty()){\n            if(curr == ".."){\n                if(!pathS.empty()) pathS.pop();\n                curr = "";\n            } else if (curr == "."){\n                curr = "";\n            }else{\n                pathS.push(curr);  \n                curr = "";  \n            }\n        }\n        \n        vector<string> out;\n        string resp;\n        if(pathS.empty()) return "/";\n\n        while(!pathS.empty()){\n            out.push_back(pathS.top());\n            pathS.pop();\n        }\n        \n        for(int i = out.size() - 1; i >= 0; i--){\n            resp += "/" + out[i];\n        }\n        \n        return resp;\n    }\n};\n')))}d.isMDXComponent=!0}}]);