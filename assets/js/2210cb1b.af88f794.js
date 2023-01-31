"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[628],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var u=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);n&&(u=u.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,u)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,u,r=function(e,n){if(null==e)return{};var t,u,r={},i=Object.keys(e);for(u=0;u<i.length;u++)t=i[u],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(u=0;u<i.length;u++)t=i[u],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=u.createContext({}),c=function(e){var n=u.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return u.createElement(l.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return u.createElement(u.Fragment,{},n)}},q=u.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),q=r,p=d["".concat(l,".").concat(q)]||d[q]||f[q]||i;return t?u.createElement(p,a(a({ref:n},s),{},{components:t})):u.createElement(p,a({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=q;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return u.createElement.apply(null,a)}return u.createElement.apply(null,t)}q.displayName="MDXCreateElement"},5296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var u=t(7462),r=(t(7294),t(3905));const i={id:"queues",sidebar_position:1,displayed_sidebar:"notesSideBar"},a="Queues",o={unversionedId:"notes/Data Structures/queues",id:"notes/Data Structures/queues",title:"Queues",description:"Introduction",source:"@site/docs/notes/Data Structures/Queues.md",sourceDirName:"notes/Data Structures",slug:"/notes/Data Structures/queues",permalink:"/docs/notes/Data Structures/queues",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"queues",sidebar_position:1,displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"Linked List",permalink:"/docs/notes/Data Structures/linkedlist"},next:{title:"Stacks",permalink:"/docs/notes/Data Structures/stacks"}},l={},c=[{value:"Introduction",id:"introduction",level:3},{value:"Complexities",id:"complexities",level:3},{value:"Time Complexity",id:"time-complexity",level:4},{value:"Write",id:"write",level:5},{value:"Access",id:"access",level:5},{value:"Implementation",id:"implementation",level:3},{value:"Go with Linked List",id:"go-with-linked-list",level:4},{value:"Go with Slice",id:"go-with-slice",level:4}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,u.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"queues"},"Queues"),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A queue is an abstract data structure that contains a collection of elements. Queue implements the ",(0,r.kt)("strong",{parentName:"p"},"FIFO")," mechanism\ni.e. the element that is pushed at the front is popped out first. Some of the principle operations in the stack are \u2212"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enqueue")," - This adds a data value to the back of the queue"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dequeue")," - This removes the data value from the front of the queue"),(0,r.kt)("h3",{id:"complexities"},"Complexities"),(0,r.kt)("h4",{id:"time-complexity"},"Time Complexity"),(0,r.kt)("h5",{id:"write"},"Write"),(0,r.kt)("p",null,"O(1)"),(0,r.kt)("h5",{id:"access"},"Access"),(0,r.kt)("p",null,"O(1)"),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("h4",{id:"go-with-linked-list"},"Go with Linked List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\ntype Node struct{\n    data interface{}\n    next *Node\n}\n\nfunc NewNode(d interface{}) *Node{\n    return &Node{\n        d,\n        nil,\n    }\n}\n\ntype Queue struct{\n    head *Node\n    tail *Node\n    count int\n}\n\nfunc (q *Queue) New() *Queue{\n    return &Queue{\n        nil,\n        nil,\n        0,\n    }\n}\n\nfunc (q *Queue) size() int{\n    return q.count\n}\n\nfunc (q *Queue) enqueue(d interface{}){\n    n := NewNode(d)\n    if q.head == nil{\n        q.head = n\n    }else{\n        q.tail.next = n\n    }\n    q.count ++\n    q.tail = n\n}\n\nfunc (q *Queue) dequeue() interface{}{\n    if q.head == nil{\n        return nil\n    }\n\n    n := q.head\n    q.head = q.head.next\n\n    if q.head == nil{\n        q.tail = nil\n    }\n    q.count--\n    return n.data\n}\n\nfunc (q *Queue) front() interface{}{\n    return q.head\n}\n\nfunc (q *Queue) back() interface{}{\n    return q.tail\n}\n\nfunc main() {\n    var q Queue\n    queue := q.New()\n    queue.enqueue(1)\n    queue.enqueue(2)\n    queue.enqueue(3)\n    fmt.Println("Front:", queue.front())\n    fmt.Println("Back:", queue.back())\n    fmt.Println("Size:", queue.size())\n    fmt.Println(queue.dequeue())\n    fmt.Println("Front:", queue.front())\n    fmt.Println("Back:", queue.back())\n    fmt.Println("Size:", queue.size())\n    fmt.Println(queue.dequeue())\n    fmt.Println("Size:", queue.size())\n    fmt.Println(queue.dequeue())\n    fmt.Println("Size:", queue.size())\n    fmt.Println(queue.dequeue())\n    fmt.Println("Size:", queue.size())\n    fmt.Println(queue.dequeue())\n    fmt.Println("Size:", queue.size())\n}\n')),(0,r.kt)("h4",{id:"go-with-slice"},"Go with Slice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Queue []interface{}\n\nfunc (q *Queue) size() int{\n    return len(*q)\n}\n\nfunc (q *Queue) enqueue(d interface{}){\n    *q = append(*q,d)\n}\n\nfunc (q *Queue) dequeue() interface{}{\n    if len(*q) == 0{\n        return nil\n    }\n    head := (*q)[0]\n    *q = (*q)[1:]\n    return head\n}\n\nfunc (q *Queue) front() interface{}{\n    return (*q)[0]\n}\n\nfunc (q *Queue) back() interface{}{\n    index := len(*q)-1\n    return (*q)[index]\n}\n\nfunc main() {\n    var queue Queue\n    queue.enqueue(1)\n    queue.enqueue(2)\n    queue.enqueue(3)\n    fmt.Println("Front:", queue.front())\n    fmt.Println("Back:", queue.back())\n    fmt.Println("Size:", queue.size())\n    fmt.Println(queue.dequeue())\n    fmt.Println("Front:", queue.front())\n    fmt.Println("Back:", queue.back())\n    fmt.Println("Size:", queue.size())\n    fmt.Println(queue.dequeue())\n    fmt.Println("Size:", queue.size())\n    fmt.Println(queue.dequeue())\n    fmt.Println("Size:", queue.size())\n    fmt.Println(queue.dequeue())\n    fmt.Println("Size:", queue.size())\n    fmt.Println(queue.dequeue())\n    fmt.Println("Size:", queue.size())\n}\n')))}d.isMDXComponent=!0}}]);