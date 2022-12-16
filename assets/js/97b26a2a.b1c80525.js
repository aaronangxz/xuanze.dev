"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[3980],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(t),h=o,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:535},l="535. Encode and Decode TinyURL",a={unversionedId:"leetcode/medium/Encode and Decode TinyURL",id:"leetcode/medium/Encode and Decode TinyURL",title:"535. Encode and Decode TinyURL",description:"Question",source:"@site/docs/leetcode/medium/535. Encode and Decode TinyURL.md",sourceDirName:"leetcode/medium",slug:"/leetcode/medium/Encode and Decode TinyURL",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Encode and Decode TinyURL",draft:!1,tags:[],version:"current",sidebarPosition:535,frontMatter:{sidebar_position:535},sidebar:"lcSidebar",previous:{title:"[WIP] 316. Remove Duplicate Letters",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Remove Duplicate Letters"},next:{title:"695. Max Area of Island",permalink:"/XZ-LeetCode-Journal/docs/leetcode/medium/Max Area of Island"}},s={},d=[{value:"Question",id:"question",level:2},{value:"Approach",id:"approach",level:2},{value:"Encode",id:"encode",level:3},{value:"Decode",id:"decode",level:3},{value:"Solution",id:"solution",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"535-encode-and-decode-tinyurl"},"535. Encode and Decode TinyURL"),(0,o.kt)("h2",{id:"question"},"Question"),(0,o.kt)("p",null,"TinyURL is a URL shortening service where you enter a URL such as ",(0,o.kt)("inlineCode",{parentName:"p"},"https://leetcode.com/problems/design-tinyurl")," and it returns a short URL such as ",(0,o.kt)("inlineCode",{parentName:"p"},"http://tinyurl.com/4e9iAk"),". Design a class to encode a URL and decode a tiny URL."),(0,o.kt)("p",null,"There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL."),(0,o.kt)("p",null,"Implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Solution")," class:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Solution()")," Initializes the object of the system.\n",(0,o.kt)("inlineCode",{parentName:"p"},"String encode(String longUrl)")," Returns a tiny URL for the given ",(0,o.kt)("inlineCode",{parentName:"p"},"longUrl"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"String decode(String shortUrl)")," Returns the original long URL for the given ",(0,o.kt)("inlineCode",{parentName:"p"},"shortUrl"),". It is guaranteed that the given ",(0,o.kt)("inlineCode",{parentName:"p"},"shortUrl")," was encoded by the same object."),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: url = "https://leetcode.com/problems/design-tinyurl"\nOutput: "https://leetcode.com/problems/design-tinyurl"\n\nExplanation:\nSolution obj = new Solution();\nstring tiny = obj.encode(url); // returns the encoded tiny url.\nstring ans = obj.decode(tiny); // returns the original url after deconding it.\n')),(0,o.kt)("p",null,"Constraints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 <= url.length <= 104"),(0,o.kt)("li",{parentName:"ul"},"url is guranteed to be a valid URL.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"longToShort provides the map to retrieve encoded URL using long URL. shortToLong does the opposite."),(0,o.kt)("li",{parentName:"ol"},"baseUrl is the prefix we return each time after encoding."),(0,o.kt)("li",{parentName:"ol"},"usableStr are the available characters we generate as the suffix of URL.")),(0,o.kt)("h3",{id:"encode"},"Encode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, check if the key longUrl already exists. If yes, return with prefix."),(0,o.kt)("li",{parentName:"ol"},"If no, we need to do the actual encoding."),(0,o.kt)("li",{parentName:"ol"},"Generate a len 6 string from our usableStr, and check if this suffix exists in shortToLong. If yes, re-generate until it is a new string."),(0,o.kt)("li",{parentName:"ol"},"Save the pre-encoded and encoded URLs into both maps, and return encoded URL with prefix.")),(0,o.kt)("h3",{id:"decode"},"Decode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Retrieve from shortToLong map with the key shortUrl (Only the last 6 characters, i.e. the encoded string suffix).")),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'class Solution {\npublic:\n\n    string usableStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";\n    unordered_map<string, string> longToShort, shortToLong;\n    string baseUrl = "http://tinyurl.com/";\n    \n    // Encodes a URL to a shortened URL.\n    string encode(string longUrl) {\n        if (longToShort.count(longUrl)) return baseUrl + longToShort[longUrl];\n        \n        string encoded;\n\n        while(true){\n            encoded.clear();\n            //Encoded code is 6 chars\n            for(int i = 0; i < 6; i++){\n                encoded += usableStr[rand()%62];\n            }\n            \n            if(!shortToLong.count(encoded)) break;\n        }\n\n        longToShort[longUrl] = encoded;\n        shortToLong[encoded] = longUrl;\n              \n        return baseUrl + encoded;\n    }\n\n    // Decodes a shortened URL to its original URL.\n    string decode(string shortUrl) {\n        return shortToLong[shortUrl.substr(shortUrl.size() - 6)];\n    }\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type Codec struct {\n    longToShort map[string]string\n    shortToLong map[string]string\n    baseUrl string\n    usableStr string\n}\n\nfunc Constructor() Codec {\n    var c Codec\n    c.baseUrl = "http://tinyurl.com/"\n    c.usableStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"\n    c.longToShort = make(map[string]string)\n    c.shortToLong = make(map[string]string)\n    return c\n}\n\n// Encodes a URL to a shortened URL.\nfunc (this *Codec) encode(longUrl string) string {\n    _, isIn := this.longToShort[longUrl]\n    \n    if isIn{\n        return this.baseUrl + this.longToShort[longUrl]\n    }\n    \n    var encoded string\n    usableStrRune := []rune(this.usableStr)\n    \n    for {\n        encoded = "";\n        \n        for i:= 0; i < 6; i++{\n            encoded += string(usableStrRune[rand.Intn(1000) % 62])\n        }\n        \n        _, isIn := this.shortToLong[encoded]\n\n        if !isIn {\n            break;\n        }\n    }\n    \n    this.longToShort[longUrl] = encoded\n    this.shortToLong[encoded] = longUrl\n    \n    return this.baseUrl + encoded\n}\n\n// Decodes a shortened URL to its original URL.\nfunc (this *Codec) decode(shortUrl string) string {\n    shortUrlRune := []rune(shortUrl)\n    return this.shortToLong[string(shortUrlRune[len(shortUrlRune) - 6:])]\n}\n')))}u.isMDXComponent=!0}}]);