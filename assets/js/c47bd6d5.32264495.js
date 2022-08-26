"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[65],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:83,tags:["Linked List"]},l="83. Remove Duplicates from Sorted List",i={unversionedId:"leetcode/easy/Remove Duplicates from Sorted List",id:"leetcode/easy/Remove Duplicates from Sorted List",title:"83. Remove Duplicates from Sorted List",description:"Question",source:"@site/docs/leetcode/easy/83. Remove Duplicates from Sorted List.md",sourceDirName:"leetcode/easy",slug:"/leetcode/easy/Remove Duplicates from Sorted List",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Remove Duplicates from Sorted List",tags:[{label:"Linked List",permalink:"/XZ-LeetCode-Journal/docs/tags/linked-list"}],version:"current",sidebarPosition:83,frontMatter:{sidebar_position:83,tags:["Linked List"]},sidebar:"lcSidebar",previous:{title:"53. Maximum Subarray",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Maximum Subarray"},next:{title:"[WIP] 88. Merge Sorted Array",permalink:"/XZ-LeetCode-Journal/docs/leetcode/easy/Merge Sorted Array"}},s={},u=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"83-remove-duplicates-from-sorted-list"},"83. Remove Duplicates from Sorted List"),(0,o.kt)("h2",{id:"question"},"Question"),(0,o.kt)("p",null,"Given the ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," of a sorted linked list, ",(0,o.kt)("em",{parentName:"p"},"delete all duplicates")," such that each element appears only once. Return the linked list ",(0,o.kt)("strong",{parentName:"p"},"sorted")," as well."),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: head = [1,1,2]\nOutput: [1,2]\n")),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: head = [1,1,2,3,3]\nOutput: [1,2,3]\n")),(0,o.kt)("p",null,"Constraints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"The number of nodes in the list is in the range [0, 300].\n-100 <= Node.val <= 100\nThe list is guaranteed to be sorted in ascending order.\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the ",(0,o.kt)("inlineCode",{parentName:"li"},"head")," is empty, return."),(0,o.kt)("li",{parentName:"ol"},"Traverse the nodes, and compae its values to the next node."),(0,o.kt)("li",{parentName:"ol"},"If the values are the same, save the next->next node for later."),(0,o.kt)("li",{parentName:"ol"},"Delete the next node (since it is a duplicate)."),(0,o.kt)("li",{parentName:"ol"},"Link the node saved just now to the next of current node."),(0,o.kt)("li",{parentName:"ol"},"Only move one node forward if there is no deletion of nodes.")),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* deleteDuplicates(ListNode* head) {\n        if(head == NULL) return head;\n        \n        ListNode* curr = head;\n        ListNode* next = NULL;\n\n        while(curr -> next != NULL){\n            if(curr->val == curr->next->val){\n                next = curr->next->next;\n                delete curr->next;\n                curr->next = next;\n            }else{\n                curr = curr->next;\n            }\n        }\n        return head;\n    }\n};\n")))}p.isMDXComponent=!0}}]);