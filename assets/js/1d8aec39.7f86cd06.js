"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[9123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const l={sidebar_position:21},o="21. Merge Two Sorted Lists",s={unversionedId:"leetcode/easy/Merge Two Sorted Lists",id:"leetcode/easy/Merge Two Sorted Lists",title:"21. Merge Two Sorted Lists",description:"Question",source:"@site/docs/leetcode/easy/21. Merge Two Sorted Lists.md",sourceDirName:"leetcode/easy",slug:"/leetcode/easy/Merge Two Sorted Lists",permalink:"/docs/leetcode/easy/Merge Two Sorted Lists",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"lcSidebar",previous:{title:"20. Valid Parentheses",permalink:"/docs/leetcode/easy/Valid Parentheses"},next:{title:"53. Maximum Subarray",permalink:"/docs/leetcode/easy/Maximum Subarray"}},a={},p=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"21-merge-two-sorted-lists"},"21. Merge Two Sorted Lists"),(0,i.kt)("h2",{id:"question"},"Question"),(0,i.kt)("p",null,"You are given the heads of two sorted linked lists ",(0,i.kt)("inlineCode",{parentName:"p"},"list1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"list2"),"."),(0,i.kt)("p",null,"Merge the two lists in a one ",(0,i.kt)("strong",{parentName:"p"},"sorted")," list. The list should be made by splicing together the nodes of the first two lists."),(0,i.kt)("p",null,"Return the head of the merged linked list."),(0,i.kt)("p",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: list1 = [1,2,4], list2 = [1,3,4]\nOutput: [1,1,2,3,4,4]\n")),(0,i.kt)("p",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: list1 = [], list2 = []\nOutput: []\n")),(0,i.kt)("p",null,"Example 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: list1 = [], list2 = [0]\nOutput: [0]\n")),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- The number of nodes in both lists is in the range [0, 50].\n- -100 <= Node.val <= 100\n- Both list1 and list2 are sorted in non-decreasing order.\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If both Lists are empty, return empty. If any of them are empty, return the non empty one."),(0,i.kt)("li",{parentName:"ol"},"Create a new List node ",(0,i.kt)("inlineCode",{parentName:"li"},"head")," (to return later) and a copy ",(0,i.kt)("inlineCode",{parentName:"li"},"curr"),"."),(0,i.kt)("li",{parentName:"ol"},"Traverse the linked list until the end of either list, compare the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"list1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"list2"),", then link the smaller node to ",(0,i.kt)("inlineCode",{parentName:"li"},"curr"),"."),(0,i.kt)("li",{parentName:"ol"},"Move to the next node if the element from that list is used."),(0,i.kt)("li",{parentName:"ol"},"We might still have some leftovers nodes since we exited step 3 when either one of it runs out."),(0,i.kt)("li",{parentName:"ol"},"It is not necessary to traverse anymore, simply link the whole remaining list behind ",(0,i.kt)("inlineCode",{parentName:"li"},"curr"),".")),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"//Definition for singly-linked list.\ntype ListNode struct {\n    Val int\n    Next *ListNode\n}\n\nfunc mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {\n    if list1 == nil && list2 == nil{\n        return nil;\n    } else if list1 == nil{\n        return list2\n    }else if list2 == nil{\n        return list1;\n    }\n    \n    head := &ListNode{0,nil}\n    curr := head\n    \n    for {\n        if (list1 == nil || list2 == nil){\n            break\n        }\n        \n        if list1.Val < list2.Val{\n            curr.Next = list1\n            list1 = list1.Next\n        }else{\n            curr.Next = list2\n            list2 = list2.Next\n        }\n        curr = curr.Next\n    }\n    \n    if(list1 != nil){\n        curr.Next = list1\n    }else{\n        curr.Next = list2\n    }\n    return head.Next;\n}\n")))}d.isMDXComponent=!0}}]);