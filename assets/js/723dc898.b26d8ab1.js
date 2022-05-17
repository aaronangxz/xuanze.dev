"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[8162],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3003:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:99},u="99. Recover Binary Search Tree",p={unversionedId:"medium/Recover Binary Search Tree",id:"medium/Recover Binary Search Tree",title:"99. Recover Binary Search Tree",description:"Question",source:"@site/docs/medium/99. Recover Binary Search Tree.md",sourceDirName:"medium",slug:"/medium/Recover Binary Search Tree",permalink:"/XZ-LeetCode-Journal/docs/medium/Recover Binary Search Tree",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/master/docs/medium/99. Recover Binary Search Tree.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"[WIP] 74. Search a 2D Matrix",permalink:"/XZ-LeetCode-Journal/docs/medium/Search a 2D Matrix"},next:{title:"230. Kth Smallest Element in a BST",permalink:"/XZ-LeetCode-Journal/docs/medium/Kth Smallest Element in a BST"}},s={},c=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],d={toc:c};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"99-recover-binary-search-tree"},"99. Recover Binary Search Tree"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"You are given the root of a binary search tree (BST), where the values of ",(0,a.kt)("strong",{parentName:"p"},"exactly")," two nodes of the tree were swapped by mistake. ",(0,a.kt)("em",{parentName:"p"},"Recover the tree without changing its structure"),"."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"99.1",src:n(9014).Z,width:"422",height:"302"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [1,3,null,null,2]\nOutput: [3,1,null,null,2]\nExplanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.\n")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"99.2",src:n(5550).Z,width:"581",height:"302"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [3,1,4,null,null,2]\nOutput: [2,1,4,null,null,3]\nExplanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.\n")),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ","[2, 1000]","."),(0,a.kt)("li",{parentName:"ul"},"-2^31 <= Node.val <= 2^31 - 1")),(0,a.kt)("p",null,"Follow up: A solution using O(n) space is pretty straight-forward. Could you devise a constant O(1) space solution?"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Traverse to the left most node."),(0,a.kt)("li",{parentName:"ol"},"Store the left most node as ",(0,a.kt)("inlineCode",{parentName:"li"},"prevNode"),", this is the node that we will be using for comparision."),(0,a.kt)("li",{parentName:"ol"},"Perform in-order traversal, when the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"prevNode")," is greater than the value of the current node, and",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If we have previously found another wrongly arranged node, and that node is greater than current node, we will update the 1st node to swap as the current node."),(0,a.kt)("li",{parentName:"ul"},"Else, update the 1st node to swap as the current node, and the 2nd node to swap as the previous node."))),(0,a.kt)("li",{parentName:"ol"},"After the in-order is complete, swap the values of 2 nodes.")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* prevNode = NULL;\n    TreeNode* toSwap1 = NULL;\n    TreeNode* toSwap2 = NULL;\n    \n    void recoverTree(TreeNode* root) {\n        //Travers in-order\n        inOrder(root);\n        \n        //Swap values of wrongly arrange nodes\n        int tmp =toSwap1->val;\n        toSwap1->val = toSwap2->val;\n        toSwap2->val = tmp;\n    }\n    \n    void inOrder(TreeNode* root) {\n        if(root == NULL) return;\n        inOrder (root->left);\n        \n        //Only enter from second smallest node onwards so we can compare\n        //If the previous node value is larger than current value (violates BST)\n        if(prevNode != NULL && prevNode->val > root->val){\n            //Only enter if one node is already found to be wrongly arranged\n            //If that node is larger than the current node\n            if(toSwap2 != NULL && toSwap2->val > root->val){\n                //we swap this node and the previous found node instead\n                toSwap1 = root;\n            }else{\n                //otherwise we swap with the previous node\n                toSwap1 = root;\n                toSwap2 = prevNode; \n            }\n        }\n        \n        //store the previous node during traversal\n        prevNode = root;\n        inOrder (root->right);\n    }\n};\n")))}h.isMDXComponent=!0},9014:function(e,t,n){t.Z=n.p+"assets/images/99.1-468304bd17e0a79639e0fe00c57fb81b.jpeg"},5550:function(e,t,n){t.Z=n.p+"assets/images/99.2-841022f565329418b898001c57b5c337.jpeg"}}]);