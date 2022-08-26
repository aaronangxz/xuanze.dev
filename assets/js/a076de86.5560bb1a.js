"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[5907],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2225},l="2225. Find Players With Zero or One Losses",s={unversionedId:"leetcode/medium/Find Players With Zero or One Losses",id:"leetcode/medium/Find Players With Zero or One Losses",title:"2225. Find Players With Zero or One Losses",description:"Question",source:"@site/docs/leetcode/medium/2225. Find Players With Zero or One Losses.md",sourceDirName:"leetcode/medium",slug:"/leetcode/medium/Find Players With Zero or One Losses",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Find Players With Zero or One Losses",tags:[],version:"current",sidebarPosition:2225,frontMatter:{sidebar_position:2225},sidebar:"lcSidebar",previous:{title:"1663. Smallest String With A Given Numeric Value",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Smallest String With A Given Numeric Value"},next:{title:"[WIP] 895. Maximum Frequency Stack",permalink:"/XZ-LeetCode-Journal/docs/leetcode/hard/Maximum Frequency Stack"}},i={},p=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2225-find-players-with-zero-or-one-losses"},"2225. Find Players With Zero or One Losses"),(0,a.kt)("h2",{id:"question"},"Question"),(0,a.kt)("p",null,"You are given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"matches")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"matches[i] = [winneri, loseri]")," indicates that the player winneri defeated player ",(0,a.kt)("inlineCode",{parentName:"p"},"loseri")," in a match."),(0,a.kt)("p",null,"Return a list ",(0,a.kt)("inlineCode",{parentName:"p"},"answer")," of size ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," where:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"answer[0]")," is a list of all players that have not lost any matches.\n",(0,a.kt)("inlineCode",{parentName:"p"},"answer[1]")," is a list of all players that have lost exactly one match.\nThe values in the two lists should be returned in increasing order."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("p",null,"You should only consider the players that have played ",(0,a.kt)("strong",{parentName:"p"},"at least one")," match.\nThe testcases will be generated such that no two matches will have the ",(0,a.kt)("strong",{parentName:"p"},"same")," outcome."),(0,a.kt)("p",null,"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]\nOutput: [[1,2,10],[4,5,7,8]]\nExplanation:\nPlayers 1, 2, and 10 have not lost any matches.\nPlayers 4, 5, 7, and 8 each have lost one match.\nPlayers 3, 6, and 9 each have lost two matches.\nThus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].\n")),(0,a.kt)("p",null,"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: matches = [[2,3],[1,3],[5,4],[6,4]]\nOutput: [[1,2,5,6],[]]\nExplanation:\nPlayers 1, 2, 5, and 6 have not lost any matches.\nPlayers 3 and 4 each have lost two matches.\nThus, answer[0] = [1,2,5,6] and answer[1] = [].\n")),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 <= matches.length <= 105"),(0,a.kt)("li",{parentName:"ul"},"matches","[i]",".length == 2"),(0,a.kt)("li",{parentName:"ul"},"1 <= winneri, loseri <= 105"),(0,a.kt)("li",{parentName:"ul"},"winneri != loseri"),(0,a.kt)("li",{parentName:"ul"},"All matches","[i]"," are unique.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Iterate through all the matches record, and put into the win/lose hash maps."),(0,a.kt)("li",{parentName:"ol"},"Filter out the players that never lose (Not in lose map)."),(0,a.kt)("li",{parentName:"ol"},"Filter out the players that lost exactly once (Value = 1 in map)."),(0,a.kt)("li",{parentName:"ol"},"Sort results and return.")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> findWinners(vector<vector<int>>& matches) {\n        unordered_map<int, int> win;\n        unordered_map<int, int> lose;\n        vector<int> wResp;\n        vector<int> lResp;\n        \n        for(auto m: matches){\n            win[m[0]]++;\n            lose[m[1]]++;\n         }\n        \n        for(auto w: win){\n            if(w.first && !lose[w.first]) wResp.push_back(w.first);\n        }\n        \n        for(auto l: lose){\n            if (l.second == 1) lResp.push_back(l.first);\n        }\n        \n        sort(wResp.begin(),wResp.end());\n        sort(lResp.begin(),lResp.end());\n        \n        return {wResp,lResp};\n    }\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func findWinners(matches [][]int) [][]int {\n    win := make(map[int]int)\n    lose := make(map[int]int)\n    \n    winResp := []int{}\n    loseResp := []int{}\n    \n    for _, m := range matches{\n        win[m[0]]++\n        lose[m[1]]++\n    }\n    \n    for k, m := range win{\n        if _, exists := lose[k]; !exists && m > 0{\n            winResp = append(winResp,k)\n        }\n    }\n    \n    for k, m := range lose{\n        if m == 1{\n            loseResp = append(loseResp,k)\n        }\n    }\n    \n    sort.Ints(winResp)\n    sort.Ints(loseResp)\n\n    return [][]int{winResp,loseResp}\n}\n")))}u.isMDXComponent=!0}}]);