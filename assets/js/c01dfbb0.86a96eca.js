"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[6087],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6637:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={displayed_sidebar:"notesSideBar"},o="Multi Threading",s={unversionedId:"notes/CS fundamentals/Multi Threading",id:"notes/CS fundamentals/Multi Threading",title:"Multi Threading",description:"Threads & Processes",source:"@site/docs/notes/CS fundamentals/Multi Threading.md",sourceDirName:"notes/CS fundamentals",slug:"/notes/CS fundamentals/Multi Threading",permalink:"/docs/notes/CS fundamentals/Multi Threading",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"GitHub Actions",permalink:"/docs/notes/CICD/GitHubActions"},next:{title:"Linked List",permalink:"/docs/notes/Data Structures/linkedlist"}},i={},u=[{value:"Threads &amp; Processes",id:"threads--processes",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"Counting semaphores",id:"counting-semaphores",level:3},{value:"Binary semaphores",id:"binary-semaphores",level:3},{value:"Mutex",id:"mutex",level:2},{value:"Deadlock",id:"deadlock",level:2},{value:"Conditions:",id:"conditions",level:3},{value:"How to handle",id:"how-to-handle",level:3},{value:"Task Scheduler",id:"task-scheduler",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"multi-threading"},"Multi Threading"),(0,n.kt)("h2",{id:"threads--processes"},"Threads & Processes"),(0,n.kt)("p",null,"Process - Program being executed"),(0,n.kt)("p",null,"Threads - Lightweight processes within a process"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Process"),(0,n.kt)("th",{parentName:"tr",align:null},"Threads"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Process is heavy weight or resource intensive."),(0,n.kt)("td",{parentName:"tr",align:null},"Thread is light weight, taking lesser resources than a process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Process switching needs interaction with operating system."),(0,n.kt)("td",{parentName:"tr",align:null},"Thread switching does not need to interact with operating system.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"In multiple processing environments, each process executes the same code but has its own memory and file resources."),(0,n.kt)("td",{parentName:"tr",align:null},"All threads can share same set of open files, child processes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"If one process is blocked, then no other process can execute until the first process is unblocked."),(0,n.kt)("td",{parentName:"tr",align:null},"While one thread is blocked and waiting, a second thread in the same task can run.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Multiple processes without using threads use more resources."),(0,n.kt)("td",{parentName:"tr",align:null},"Multiple threaded processes use fewer resources.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"In multiple processes each process operates independently of the others."),(0,n.kt)("td",{parentName:"tr",align:null},"One thread can read, write or change another thread's data.")))),(0,n.kt)("h2",{id:"semaphore"},"Semaphore"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"initialized with the number of resources present in the system and is used for process synchronization")),(0,n.kt)("h3",{id:"counting-semaphores"},"Counting semaphores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"initialized with the number of resources available."),(0,n.kt)("li",{parentName:"ul"},"whenever a process needs some resource, then the ",(0,n.kt)("inlineCode",{parentName:"li"},"wait()")," (SEMPEND) function is called and the value of the semaphore variable is decreased by one"),(0,n.kt)("li",{parentName:"ul"},"The process then uses the resource and after using the resource, the ",(0,n.kt)("inlineCode",{parentName:"li"},"signal()")," (SEMPOST) function is called and the value of the semaphore variable is increased by one"),(0,n.kt)("li",{parentName:"ul"},"when semaphore goes to 0 i.e all the resources are taken by the process and there is no resource left to be used, then if some other process wants to use resources then that process has to wait for its turn. ")),(0,n.kt)("h3",{id:"binary-semaphores"},"Binary semaphores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"value of the semaphore variable will be 0 or 1"),(0,n.kt)("li",{parentName:"ul"},"if some process wants to use some resource then the ",(0,n.kt)("inlineCode",{parentName:"li"},"wait()")," function is called and the value of the semaphore is changed to 0 from 1"),(0,n.kt)("li",{parentName:"ul"},"when it releases the resource then the ",(0,n.kt)("inlineCode",{parentName:"li"},"signal()")," function is called and the value of the semaphore variable is increased to 1"),(0,n.kt)("li",{parentName:"ul"},"If at a particular instant of time, the value of the semaphore variable is 0 and some other process wants to use the same resource then it has to wait for the release of the resource by the previous process."),(0,n.kt)("li",{parentName:"ul"},"similar to mutex but locking is not performed.")),(0,n.kt)("h2",{id:"mutex"},"Mutex"),(0,n.kt)("p",null,"Mutex - Mutual Exclusion Object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"give access to a resource to only one process at a time"),(0,n.kt)("li",{parentName:"ul"},"system will create a mutex object with a unique name or ID."),(0,n.kt)("li",{parentName:"ul"},"whenever the process wants to use that resource, then the process occupies a lock on the object. "),(0,n.kt)("li",{parentName:"ul"},"After locking, the process uses the resource and finally releases the mutex object.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Mutex"),(0,n.kt)("th",{parentName:"tr",align:null},"Semaphore"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"locking mechanism"),(0,n.kt)("td",{parentName:"tr",align:null},"signaling mechanism")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"integer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"no subtype"),(0,n.kt)("td",{parentName:"tr",align:null},"Counting, Binary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"only modified by current process"),(0,n.kt)("td",{parentName:"tr",align:null},"any process can modify values")))),(0,n.kt)("h2",{id:"deadlock"},"Deadlock"),(0,n.kt)("p",null,"A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Process 1 is holding ",(0,n.kt)("inlineCode",{parentName:"li"},"resource a")," and waiting for ",(0,n.kt)("inlineCode",{parentName:"li"},"resource b"),", but process 2 is holding ",(0,n.kt)("inlineCode",{parentName:"li"},"resource b")," but also waiting for ",(0,n.kt)("inlineCode",{parentName:"li"},"resource a"))),(0,n.kt)("h3",{id:"conditions"},"Conditions:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Condition"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Mutual Exclusion"),(0,n.kt)("td",{parentName:"tr",align:null},"Two or more resources are non-shareable (Only one process can use at a time)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hold and Wait"),(0,n.kt)("td",{parentName:"tr",align:null},"A process is holding at least one resource and waiting for resources")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"No Preemption"),(0,n.kt)("td",{parentName:"tr",align:null},"A resource cannot be taken from a process unless the process releases the resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Circular Wait"),(0,n.kt)("td",{parentName:"tr",align:null},"A set of processes are waiting for each other in circular form")))),(0,n.kt)("h3",{id:"how-to-handle"},"How to handle"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Prevention - Avoiding the conditions above"),(0,n.kt)("li",{parentName:"ol"},"Detection - Do preemption once it occurrs"),(0,n.kt)("li",{parentName:"ol"},"Ignore - If it happens very rarely, just reboot")),(0,n.kt)("h2",{id:"task-scheduler"},"Task Scheduler"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Preemptive"),(0,n.kt)("th",{parentName:"tr",align:null},"Non-preemptive"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Basic"),(0,n.kt)("td",{parentName:"tr",align:null},"Resource allocated to a process for a limited time"),(0,n.kt)("td",{parentName:"tr",align:null},"Resource allocated to a process until it completes or switches state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interrupt"),(0,n.kt)("td",{parentName:"tr",align:null},"Can be interrupted"),(0,n.kt)("td",{parentName:"tr",align:null},"Cannot be interrupted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Starvation"),(0,n.kt)("td",{parentName:"tr",align:null},"Low priority process may starve if high priority process is frequently in ready state"),(0,n.kt)("td",{parentName:"tr",align:null},"Process that uses CPU for a long time will starve those that use shorter time")))))}c.isMDXComponent=!0}}]);