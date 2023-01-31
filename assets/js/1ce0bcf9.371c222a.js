"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[2233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const i={sidebar_position:36},o="[WIP] 36. Valid Sudoku",a={unversionedId:"leetcode/medium/Valid Sudoku",id:"leetcode/medium/Valid Sudoku",title:"[WIP] 36. Valid Sudoku",description:"Question",source:"@site/docs/leetcode/medium/36. Valid Sudoku.md",sourceDirName:"leetcode/medium",slug:"/leetcode/medium/Valid Sudoku",permalink:"/docs/leetcode/medium/Valid Sudoku",draft:!1,tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36},sidebar:"lcSidebar",previous:{title:"2200. Find All K-Distant Indices in an Array",permalink:"/docs/leetcode/easy/Find All K-Distant Indices in an Array"},next:{title:"46. Permutations",permalink:"/docs/leetcode/medium/Permutations"}},c={},u=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Solution",id:"solution",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wip-36-valid-sudoku"},"[WIP]"," 36. Valid Sudoku"),(0,l.kt)("h2",{id:"question"},"Question"),(0,l.kt)("p",null,"Determine if a ",(0,l.kt)("inlineCode",{parentName:"p"},"9 x 9")," Sudoku board is valid. Only the filled cells need to be validated ",(0,l.kt)("strong",{parentName:"p"},"according to the following rules"),":"),(0,l.kt)("p",null,"Each row must contain the digits ",(0,l.kt)("inlineCode",{parentName:"p"},"1-9")," without repetition.\nEach column must contain the digits ",(0,l.kt)("inlineCode",{parentName:"p"},"1-9")," without repetition.\nEach of the nine ",(0,l.kt)("inlineCode",{parentName:"p"},"3 x 3")," sub-boxes of the grid must contain the digits ",(0,l.kt)("inlineCode",{parentName:"p"},"1-9")," without repetition."),(0,l.kt)("p",null,"Note:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A Sudoku board (partially filled) could be valid but is not necessarily solvable."),(0,l.kt)("li",{parentName:"ul"},"Only the filled cells need to be validated according to the mentioned rules.")),(0,l.kt)("p",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: board = \n[["5","3",".",".","7",".",".",".","."]\n,["6",".",".","1","9","5",".",".","."]\n,[".","9","8",".",".",".",".","6","."]\n,["8",".",".",".","6",".",".",".","3"]\n,["4",".",".","8",".","3",".",".","1"]\n,["7",".",".",".","2",".",".",".","6"]\n,[".","6",".",".",".",".","2","8","."]\n,[".",".",".","4","1","9",".",".","5"]\n,[".",".",".",".","8",".",".","7","9"]]\nOutput: true\n')),(0,l.kt)("p",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Input: board = \n[["8","3",".",".","7",".",".",".","."]\n,["6",".",".","1","9","5",".",".","."]\n,[".","9","8",".",".",".",".","6","."]\n,["8",".",".",".","6",".",".",".","3"]\n,["4",".",".","8",".","3",".",".","1"]\n,["7",".",".",".","2",".",".",".","6"]\n,[".","6",".",".",".",".","2","8","."]\n,[".",".",".","4","1","9",".",".","5"]\n,[".",".",".",".","8",".",".","7","9"]]\nOutput: false\nExplanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8\'s in the top left 3x3 sub-box, it is invalid.\n')),(0,l.kt)("p",null,"Constraints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"board.length == 9"),(0,l.kt)("li",{parentName:"ul"},"board","[i]",".length == 9"),(0,l.kt)("li",{parentName:"ul"},"board","[i][j]"," is a digit 1-9 or '.'.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"approach"},"Approach"),(0,l.kt)("h2",{id:"solution"},"Solution"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n    bool isValidSudoku(vector<vector<char>>& board) {\n        unordered_map<char,int> cells;\n        \n        //check rows\n        for(int i = 0; i < 9; i++){\n            for(int j = 0; j < 9; j++){\n                if(board[i][j] != \'.\') cells[board[i][j]]++;\n                if(cells[board[i][j]] > 1) return false;\n            }\n            cells.clear();\n        }\n        \n        //check cols\n        for(int i = 0; i < 9; i++){\n            for(int j = 0; j < 9; j++){\n                if(board[j][i] != \'.\') cells[board[j][i]]++;\n                if(cells[board[j][i]] > 1) return false;\n            }\n            cells.clear();\n        }\n        \n        vector<vector<pair<int,int>>> cell;\n        vector<pair<int,int>> cell1 = {{0,0},{3,3}};\n        vector<pair<int,int>> cell2 = {{0,3},{3,6}};\n        vector<pair<int,int>> cell3 = {{0,6},{3,9}};\n        vector<pair<int,int>> cell4 = {{3,0},{6,3}};\n        vector<pair<int,int>> cell5 = {{3,3},{6,6}};\n        vector<pair<int,int>> cell6 = {{3,6},{6,9}};\n        vector<pair<int,int>> cell7 = {{6,0},{9,3}};\n        vector<pair<int,int>> cell8 = {{6,3},{9,6}};\n        vector<pair<int,int>> cell9 = {{6,6},{9,9}};\n\n        cell.push_back(cell1);\n        cell.push_back(cell2);\n        cell.push_back(cell3);\n        cell.push_back(cell4);\n        cell.push_back(cell5);\n        cell.push_back(cell6);\n        cell.push_back(cell7);\n        cell.push_back(cell8);\n        cell.push_back(cell9);\n\n        //check 3x3\n        int itr = 0;\n\n        while(itr < cell.size()){\n            int rStart = cell[itr][0].first;\n            int cStart = cell[itr][0].second;\n            int w = cell[itr][1].first;\n            int h = cell[itr][1].second;\n            cout << "rStart: " << rStart << " cStart: " << cStart << " w: " << w << " h: " << h << endl;\n            \n            for(int i = rStart; i < w; i++){\n                for(int j = cStart; j < h; j++){\n                    if(board[i][j] != \'.\'){\n                        cout << "checking: " << board[i][j] << " at" << i<< j << endl;\n                        cells[board[i][j]]++;\n                    } \n                    if(cells[board[i][j]] > 1){\n                        cout << "3 x 3 false: " << i << j << " count: " << cells[board[i][j]]<< endl;\n                        return false;\n                    } \n                }\n            }\n            cells.clear();\n            itr++;\n        }\n        return true;\n    }\n};\n')))}p.isMDXComponent=!0}}]);