"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[6023],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={displayed_sidebar:"notesSideBar"},l="Load Balancer",o={unversionedId:"notes/System Design/LoadBalancer",id:"notes/System Design/LoadBalancer",title:"Load Balancer",description:"Categories",source:"@site/docs/notes/System Design/LoadBalancer.md",sourceDirName:"notes/System Design",slug:"/notes/System Design/LoadBalancer",permalink:"/XZ-LeetCode-Journal/docs/notes/System Design/LoadBalancer",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"Failure Handling",permalink:"/XZ-LeetCode-Journal/docs/notes/System Design/FailureHandling"},next:{title:"Random ID Generator",permalink:"/XZ-LeetCode-Journal/docs/notes/System Design/RandomIdGenerator"}},s={},d=[{value:"Categories",id:"categories",level:2},{value:"Layer 4 (L4) Load Balancer",id:"layer-4-l4-load-balancer",level:3},{value:"Layer 7 (L7) Load Balancer",id:"layer-7-l7-load-balancer",level:3},{value:"Global Server Load Balancing (GSLB)",id:"global-server-load-balancing-gslb",level:3},{value:"Static Algorithms",id:"static-algorithms",level:2},{value:"Round Robin",id:"round-robin",level:3},{value:"Weighted Round Robin",id:"weighted-round-robin",level:3},{value:"Source IP Hash",id:"source-ip-hash",level:3},{value:"URL Hash",id:"url-hash",level:3},{value:"Randomized algorithm",id:"randomized-algorithm",level:3},{value:"Dynamic Algorithms",id:"dynamic-algorithms",level:2},{value:"Least Connection",id:"least-connection",level:3},{value:"Weighted Least Connection",id:"weighted-least-connection",level:3},{value:"Least Response Time",id:"least-response-time",level:3}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"load-balancer"},"Load Balancer"),(0,n.kt)("h2",{id:"categories"},"Categories"),(0,n.kt)("h3",{id:"layer-4-l4-load-balancer"},"Layer 4 (L4) Load Balancer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A.K.A Network Load Balancing"),(0,n.kt)("li",{parentName:"ul"},"Happens on Transport Layer"),(0,n.kt)("li",{parentName:"ul"},"Decision will be based on the TCP or UDP ports that packets use along with their source and destination IP addresses."),(0,n.kt)("li",{parentName:"ul"},"Performs Network Address Translation (NAT) on the request packet."),(0,n.kt)("li",{parentName:"ul"},"Maximizes the utilization and availability by distributing the traffic across IP addresses, switches, and routers.")),(0,n.kt)("h3",{id:"layer-7-l7-load-balancer"},"Layer 7 (L7) Load Balancer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A.K.A Application Load Balancer / HTTP(S) Load Balancer"),(0,n.kt)("li",{parentName:"ul"},"Happens on Application Layer"),(0,n.kt)("li",{parentName:"ul"},"Uses information such as HTTP header, cookies, uniform resource identifier, SSL session ID, and HTML form data to decide the routing request across the servers.  ")),(0,n.kt)("h3",{id:"global-server-load-balancing-gslb"},"Global Server Load Balancing (GSLB)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Distribute across servers globally"),(0,n.kt)("li",{parentName:"ul"},"DNS load balancing / CDN caching")),(0,n.kt)("h2",{id:"static-algorithms"},"Static Algorithms"),(0,n.kt)("h3",{id:"round-robin"},"Round Robin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Distributed across the servers in a sequential or rotational manner"),(0,n.kt)("li",{parentName:"ul"},"Doesn\u2019t consider the load already on a server so there is a risk that one of the servers receives a lot of requests and becomes overloaded")),(0,n.kt)("h3",{id:"weighted-round-robin"},"Weighted Round Robin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Similar to round robin, plus each of the resources in a list is provided a weighted score"),(0,n.kt)("li",{parentName:"ul"},"Some of the servers get a bigger share of the overall request. ")),(0,n.kt)("h3",{id:"source-ip-hash"},"Source IP Hash"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Request is sent to the server based on the client\u2019s IP address.")),(0,n.kt)("h3",{id:"url-hash"},"URL Hash"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Request is sent to the server based on the client\u2019s URL."),(0,n.kt)("li",{parentName:"ul"},"Cache the hash value and subsequent requests will map to the same server.")),(0,n.kt)("h3",{id:"randomized-algorithm"},"Randomized algorithm"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Maps requests to a random destination."),(0,n.kt)("li",{parentName:"ul"},"Works well with server cluster with similar configurations.")),(0,n.kt)("h2",{id:"dynamic-algorithms"},"Dynamic Algorithms"),(0,n.kt)("h3",{id:"least-connection"},"Least Connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Request will be directed to the server with the fewest number of requests or active connections."),(0,n.kt)("li",{parentName:"ul"},"Load balancer needs to do some additional computing to identify the server with the least number of connections."),(0,n.kt)("li",{parentName:"ul"},"Most useful when there is a huge number of persistent connections in the traffic unevenly distributed between the servers.")),(0,n.kt)("h3",{id:"weighted-least-connection"},"Weighted Least Connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Request will be directed to the server with the fewest number of requests or active connections and relative capacity of server."),(0,n.kt)("li",{parentName:"ul"},"Server are weighted based on processing capabilities")),(0,n.kt)("h3",{id:"least-response-time"},"Least Response Time"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Request is forwarded to the server with the fewest active connections and the least average response time.")))}u.isMDXComponent=!0}}]);