"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[6826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,d=c["".concat(s,".").concat(h)]||c[h]||g[h]||a;return n?o.createElement(d,l(l({ref:t},u),{},{components:n})):o.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={slug:"keep-script-running-on-ssh-and-how-to-kill-it",title:"How to keep a Go script running on SSH plus how to kill it",authors:["xuanze"],tags:["go","ssh","vm","server"]},l=void 0,i={permalink:"/blog/keep-script-running-on-ssh-and-how-to-kill-it",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/sol-deploy/blog/2022-11-08-keep-script-running-on-ssh-and-how-to-kill-it.mdx",source:"@site/blog/2022-11-08-keep-script-running-on-ssh-and-how-to-kill-it.mdx",title:"How to keep a Go script running on SSH plus how to kill it",description:"Introduction",date:"2022-11-08T00:00:00.000Z",formattedDate:"November 8, 2022",tags:[{label:"go",permalink:"/blog/tags/go"},{label:"ssh",permalink:"/blog/tags/ssh"},{label:"vm",permalink:"/blog/tags/vm"},{label:"server",permalink:"/blog/tags/server"}],readingTime:1.855,hasTruncateMarker:!0,authors:[{name:"Ang Xuan Ze",title:"Noob coder",url:"https://github.com/aaronangxz",imageURL:"https://github.com/aaronangxz.png",key:"xuanze"}],frontMatter:{slug:"keep-script-running-on-ssh-and-how-to-kill-it",title:"How to keep a Go script running on SSH plus how to kill it",authors:["xuanze"],tags:["go","ssh","vm","server"]},prevItem:{title:"How to read from SQL tables with unknown fields",permalink:"/blog/how-to-read-from-sql-tables-with-unknown-fields"},nextItem:{title:"Trick to keep empty folders on git",permalink:"/blog/trick-to-keep-empty-folders-git"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"How",id:"how",level:2},{value:"Clone the repo",id:"clone-the-repo",level:3},{value:"Start running, but..",id:"start-running-but",level:3},{value:"Find the process id",id:"find-the-process-id",level:3},{value:"Kill it",id:"kill-it",level:3},{value:"Bonus",id:"bonus",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"If you want to host some ever-running script, what option do you have?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run on your laptop, and never sleep / off it (??)"),(0,r.kt)("li",{parentName:"ol"},"Get a Raspberry Pi (ugh.. overkill)"),(0,r.kt)("li",{parentName:"ol"},"Pay a few dollars to host it somewhere (few dollars to host somethings so small.. worth?)"),(0,r.kt)("li",{parentName:"ol"},"Ask your friend to run on his/her laptop and never off it.")),(0,r.kt)("p",null,"Option 3 seems to be the best option if you manage to convince."),(0,r.kt)("p",null,"Fortunately I have the opportunity of abusing my personal VM at work.\nI mean, not abusing, it's somewhat related to work too. I'm sure."),(0,r.kt)("h2",{id:"how"},"How"),(0,r.kt)("p",null,"These are roughly the steps I took:"),(0,r.kt)("h3",{id:"clone-the-repo"},"Clone the repo"),(0,r.kt)("p",null,"Clone the repo into the VM. My path is ",(0,r.kt)("inlineCode",{parentName:"p"},"~/xuanbot"),"."),(0,r.kt)("h3",{id:"start-running-but"},"Start running, but.."),(0,r.kt)("p",null,"We cannot just run it with the usual ",(0,r.kt)("inlineCode",{parentName:"p"},"go run main.go"),", because if we do that, the process will hang up when we exit the ssh conenction."),(0,r.kt)("p",null,"Instead, we can do"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ nohup go run main.go &\n\nxuanze.ang@n36-172-051:~/xuanbot$ nohup go run main.go &\n[1] 670740\nxuanze.ang@n36-172-051:~/xuanbot$ nohup: ignoring input and appending output to 'nohup.out'\n")),(0,r.kt)("p",null,"At this point, the process is running."),(0,r.kt)("h3",{id:"find-the-process-id"},"Find the process id"),(0,r.kt)("p",null,"Next, we need to know what is the process id of our task."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ps -ef | grep go\n\nxuanze.ang@n36-172-051:~/xuanbot$ nohup: ignoring input and appending output to 'nohup.out'\nps -ef | grep go\nroot        1411       1  0 Nov07 ?        00:01:56 /etc/sysop/mongoosev3-agent/mongoosev3-agent\nroot        3888    1411  0 Nov07 ?        00:00:36 /etc/sysop/mongoosev3-agent/plugin/driver/driver\nroot        3896    1411  0 Nov07 ?        00:00:07 /etc/sysop/mongoosev3-agent/plugin/journal_watcher/journal_watcher\nroot        3945    1411  0 Nov07 ?        00:01:02 /etc/sysop/mongoosev3-agent/plugin/collector/collector\nroot        4016    1411  0 Nov07 ?        00:00:49 /etc/sysop/mongoosev3-agent/plugin/baseline/baseline\nxuanze.+  670740  670583  0 11:32 pts/0    00:00:00 go run main.go\nxuanze.+  670844  670740 99 11:32 pts/0    00:00:37 /tmp/go-build2256816827/b001/exe/main\nxuanze.+  671173  670583  0 11:32 pts/0    00:00:00 grep go\n")),(0,r.kt)("p",null,"We can see that our build is running as pid ",(0,r.kt)("inlineCode",{parentName:"p"},"670844")," for 37 seconds now."),(0,r.kt)("h3",{id:"kill-it"},"Kill it"),(0,r.kt)("p",null,"Since we have enough information now, kill it!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kill 670844\n")),(0,r.kt)("p",null,"Process should now be killed and removed from the list. Done!"),(0,r.kt)("h2",{id:"bonus"},"Bonus"),(0,r.kt)("p",null,"Useful command to move a file from local to ssh machine."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scp <origin file path> <name>@<host>:<destination file path>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ scp /Users/xz/file.txt xuanze.ang@1.1.1.1/home/xuanze.ang\nfile.txt                           100%   11KB  47.6KB/s   00:00\n")))}c.isMDXComponent=!0}}]);