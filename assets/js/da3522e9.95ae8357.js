"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[6402],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=i(r),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,s[1]=u;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={displayed_sidebar:"notesSideBar"},s="Kafka",u={unversionedId:"notes/Infrastructure/MessageQueue/Kafka",id:"notes/Infrastructure/MessageQueue/Kafka",title:"Kafka",description:"Consumer Group",source:"@site/docs/notes/Infrastructure/MessageQueue/Kafka.md",sourceDirName:"notes/Infrastructure/MessageQueue",slug:"/notes/Infrastructure/MessageQueue/Kafka",permalink:"/docs/notes/Infrastructure/MessageQueue/Kafka",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"notesSideBar"},sidebar:"notesSideBar",previous:{title:"Redis",permalink:"/docs/notes/Infrastructure/Database/Redis"},next:{title:"Scaling",permalink:"/docs/notes/Infrastructure/Scaling"}},c={},i=[{value:"Consumer Group",id:"consumer-group",level:2}],l={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kafka"},"Kafka"),(0,o.kt)("h2",{id:"consumer-group"},"Consumer Group"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consumers in a consumer group will not read duplicated messages from the same topic"),(0,o.kt)("li",{parentName:"ul"},"If we want the consumers to do so, we can add more partition in the topic, 1:1 to consumers"),(0,o.kt)("li",{parentName:"ul"},"Offsets record in topics, to save which consumer group has consumed which record")))}p.isMDXComponent=!0}}]);