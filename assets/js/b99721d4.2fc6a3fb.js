"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[5603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:289},a="289. Game of Life",l={unversionedId:"leetcode/medium/Game of Life",id:"leetcode/medium/Game of Life",title:"289. Game of Life",description:"Question",source:"@site/docs/leetcode/medium/289. Game of Life.md",sourceDirName:"leetcode/medium",slug:"/leetcode/medium/Game of Life",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Game of Life",tags:[],version:"current",sidebarPosition:289,frontMatter:{sidebar_position:289},sidebar:"lcSidebar",previous:{title:"287. Find the Duplicate Number",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Find the Duplicate Number"},next:{title:"[WIP] 316. Remove Duplicate Letters",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Remove Duplicate Letters"}},c={},u=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"289-game-of-life"},"289. Game of Life"),(0,i.kt)("h2",{id:"question"},"Question"),(0,i.kt)("p",null,'According to Wikipedia\'s article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."'),(0,i.kt)("p",null,"The board is made up of an m x n grid of cells, where each cell has an initial state: ",(0,i.kt)("strong",{parentName:"p"},"live")," (represented by a 1) or ",(0,i.kt)("strong",{parentName:"p"},"dead")," (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):"),(0,i.kt)("p",null,"Any live cell with fewer than two live neighbors dies as if caused by under-population.\nAny live cell with two or three live neighbors lives on to the next generation.\nAny live cell with more than three live neighbors dies, as if by over-population.\nAny dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.\nThe next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state."),(0,i.kt)("p",null,"Example 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0  1  0             0  0  0 \n0  0  1     ->      1  0  1\n1  1  1             0  1  1\n0  0  0             0  1  0\n\nInput: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]\nOutput: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]\n")),(0,i.kt)("p",null,"Example 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1  1    ->      1  1\n1  0            1  1\n\nInput: board = [[1,1],[1,0]]\nOutput: [[1,1],[1,1]]\n")),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"m == board.length"),(0,i.kt)("li",{parentName:"ul"},"n == board","[i]",".length"),(0,i.kt)("li",{parentName:"ul"},"1 <= m, n <= 25"),(0,i.kt)("li",{parentName:"ul"},"board","[i][j]"," is 0 or 1.")),(0,i.kt)("p",null,"Follow up:"),(0,i.kt)("p",null,"Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.\nIn this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Since it is neccesary to check the surroundings of each cell e.g. ","[i,j]",", we can have a reusable function to check ","[i-1,j-1]"," to ","[i+1,j+1]"," essentially a 3x3 grid with ","[i,j]"," in the middle."),(0,i.kt)("li",{parentName:"ol"},"However, it wouldn't work if the cell is on the left most / top most etc."),(0,i.kt)("li",{parentName:"ol"},"To make the neighbour checking function usable in all scenarios, we can add an extra layer outside of the given matrix. i.e. row size + 2, column size + 2. By default the newly added outer layer will have value of ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"                x  x  x  x  x\n1  2  3     ->  x  1  2  3  x \n4  5  6         x  4  5  6  x\n7  8  9         x  7  8  9  x\n                x  x  x  x  x\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Implement the checker function to check the surroundings, except the cell itself, and increment the count of ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," occurences."),(0,i.kt)("li",{parentName:"ol"},"Iterate through the expanded matrix starting from the ","[0,0]"," of original matrix (","[1,1]"," after expanding),all the way until the last cell."),(0,i.kt)("li",{parentName:"ol"},"If the cell is alive and has > 3 or < 2 living neighbours, kill it. "),(0,i.kt)("li",{parentName:"ol"},"If the cell is dead but has 3 living neighbours, revive it."),(0,i.kt)("li",{parentName:"ol"},"The updating of cell state needs to be done in a new matrix (not overwriting the existing). Since we are iterating the expanded matrix, the actual cell to be updated is ","[i-1,j-1]",".")),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int m, n;\n    vector<vector<int>> newBoard;\n    vector<vector<int>> expandedBoard;\n\n    void addOuter(vector<vector<int>>& board){\n        vector<vector<int>> converted (board.size()+2, vector<int> (board[0].size()+2,0));\n        \n        for(int i = 0;i < board.size(); i++){\n            for(int j = 0; j < board[0].size(); j++){\n                converted[i+1][j+1] = board[i][j];\n            }\n        }\n        expandedBoard = converted;\n    }\n    \n    int countLivingNeighbours(vector<vector<int>>& board, int i, int j){\n        int count = 0;\n        \n        for(int k = i - 1; k <= i + 1; k++){\n            for(int l = j - 1; l <= j + 1; l++){\n                if(!(k == i && l == j)){\n                    if (board[k][l] == 1) count++;\n                }\n            }\n        }\n        return count;\n    }\n    \n    void gameOfLife(vector<vector<int>>& board) {\n        newBoard = board;\n        addOuter(board);\n        for(int i = 1; i <= board.size() ; i++){\n            for(int j = 1; j <= board[0].size(); j++){\n                int live = 0;\n                if(expandedBoard[i][j] == 1){\n                    live = countLivingNeighbours(expandedBoard,i,j);\n                    if(live > 3 || live < 2) newBoard[i-1][j-1] = 0;\n                }else{\n                    live = countLivingNeighbours(expandedBoard,i,j);\n                    if(live == 3) newBoard[i-1][j-1] = 1;\n                }\n            }\n        }\n        board = newBoard;\n    }\n};\n")))}s.isMDXComponent=!0}}]);