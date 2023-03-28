"use strict";(self.webpackChunkleetcode_notes=self.webpackChunkleetcode_notes||[]).push([[463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"how-to-read-from-sql-tables-with-unknown-fields",title:"How to read from SQL tables with unknown fields",authors:["xuanze"],tags:["go","database","gorm","mysql"]},l=void 0,i={permalink:"/blog/how-to-read-from-sql-tables-with-unknown-fields",editUrl:"https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/sol-deploy/blog/2023-01-19-how-to-read-from-sql-tables-with-unknown-fields.mdx",source:"@site/blog/2023-01-19-how-to-read-from-sql-tables-with-unknown-fields.mdx",title:"How to read from SQL tables with unknown fields",description:"Introduction",date:"2023-01-19T00:00:00.000Z",formattedDate:"January 19, 2023",tags:[{label:"go",permalink:"/blog/tags/go"},{label:"database",permalink:"/blog/tags/database"},{label:"gorm",permalink:"/blog/tags/gorm"},{label:"mysql",permalink:"/blog/tags/mysql"}],readingTime:4.62,hasTruncateMarker:!0,authors:[{name:"Ang Xuan Ze",title:"Noob coder",url:"https://github.com/aaronangxz",imageURL:"https://github.com/aaronangxz.png",key:"xuanze"}],frontMatter:{slug:"how-to-read-from-sql-tables-with-unknown-fields",title:"How to read from SQL tables with unknown fields",authors:["xuanze"],tags:["go","database","gorm","mysql"]},prevItem:{title:"Delete Redis keys that matches pattern",permalink:"/blog/delete-redis-keys-that-matches-pattern"},nextItem:{title:"Git Permission denied after updating to OSX Ventura",permalink:"/blog/git-permission-denied-osx-ventura"}},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Problem",id:"problem",level:2},{value:"How",id:"how",level:2},{value:"Full Code",id:"full-code",level:3},{value:"Reference",id:"reference",level:5}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Executing a SQL query using gorm is pretty trivial. Normally this is what I'd do:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Write a proto struct that matches the DB table schema"),(0,a.kt)("li",{parentName:"ol"},"Run query using gorm and ",(0,a.kt)("inlineCode",{parentName:"li"},"Scan")," into the struct")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var auditDb *pb.DataInjectionAuditLogDb\nif err := orm.DataHelperDbInstance(g.c).Raw(q).Scan(&auditDb).Error; err != nil {\n    hlog.CtxErrorf(g.c, err.Error())\n    return nil, err\n}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Done")),(0,a.kt)("p",null,"However, what if we do not know the schema, or it is virtually impossible to create a struct for all of them?"),(0,a.kt)("p",null,"Huh?!"),(0,a.kt)("h2",{id:"problem"},"Problem"),(0,a.kt)("p",null,"In my recent project of building an internal data injection tool, this exact issue arisen and a task that I deemed EZPZ wasn't that straightforward after all."),(0,a.kt)("p",null,"Specifically, I have to execute a raw query that the user passes to front end, execute it in the test environment DB and return the results."),(0,a.kt)("p",null,"It is impossible to have structs for all hundreds of tables hard-coded in the back end, it will be a pain if the schema changes too."),(0,a.kt)("p",null,"Thankfully, after some digging and googling, there is a solution!"),(0,a.kt)("h2",{id:"how"},"How"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Execute the query as per normal, BUT we don't ",(0,a.kt)("inlineCode",{parentName:"li"},"Scan")," it to a struct. Instead, We retrieve the ",(0,a.kt)("inlineCode",{parentName:"li"},"Rows")," as such")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    r, err := orm.DbInstance(e.c).Raw(e.req.GetQuery()).Rows()\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Once we have the rows, retrieve the corresponding columns")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    cols, err := r.Columns()\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Our objective now is to construct a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"<table column>:<table field>")," maps, just like a JSON.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a map of ",(0,a.kt)("inlineCode",{parentName:"p"},"interface")," type, since we do not know what will the data type be."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    genericMap := make([]map[string]interface{}, 0)\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"While for each column, we will put it into a slice of ",(0,a.kt)("inlineCode",{parentName:"li"},"interface"),". We initialize the slice with a fixed length because at this point of time, it is known to us.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    colItems := make([]interface{}, len(cols))\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Iterate through every row. While at it, ",(0,a.kt)("inlineCode",{parentName:"li"},"Scan")," them into the column slice ",(0,a.kt)("inlineCode",{parentName:"li"},"colItems")," we had just now.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"}," for r.Next() {\n        colItem := make(map[string]interface{}, len(cols))\n\n        for i, _ := range colItems {\n            colItems[i] = new(interface{})\n        }\n\n        if err := r.Scan(colItems...); err != nil {\n            hlog.CtxErrorf(e.c, err.Error())\n            return nil, err\n        }\n    ...\n}\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Now, we can finally save those columns. However, because all of these are ",(0,a.kt)("inlineCode",{parentName:"li"},"interface")," type, we need to case it back to ",(0,a.kt)("inlineCode",{parentName:"li"},"bytes"),", which is ",(0,a.kt)("inlineCode",{parentName:"li"},"[]uint8"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    var row []string\n        for i, col := range cols {\n            colItem[col] = *colItems[i].(*interface{})\n\n            if colItem[col] == nil {\n                //when column is empty (no data)\n                row = append(row, "")\n            } else {\n                //otherwise cast into uint8 slice (byte array) then cast as string\n                row = append(row, string(colItem[col].([]uint8)))\n            }\n        ...\n    }\n')),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"While at it, we also take the chance to save the table column names as a slice itself. This is to make things easier for FE. But we do not want to collect it over and over again (It will be the same for every row), we stop when we have collected all once.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    //Collect the field names on the first run\n    if len(keys) < len(colItems) {\n        keys = append(keys, col)\n    }\n")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Finally, we append all of these into our slices")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"    res = append(res, &pb.TableRows{TableData: row})\n    genericMap = append(genericMap, colItem)\n")),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Well, that's it! By running ",(0,a.kt)("inlineCode",{parentName:"li"},'"SELECT * FROM app_lgt_dp_screen_main_metrics_rt_day LIMIT 1"'),", the outcome will be such:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "table_fields": [\n            "p_date",\n            "stats_date",\n            "stats_hour",\n            "is_in_island",\n            "is_cod",\n            "provider_id",\n            "stats_time",\n            "provider_name",\n            "create_add_cnt",\n            "create_sub_cnt",\n            "return_and_refund_cnt",\n            "shipped_cnt",\n            "create_to_ship_duration",\n            "pickup_cnt",\n            "ship_to_pickup_duration",\n            "need_pickup_cnt",\n            "ontime_pickup_cnt",\n            "first_attempt_ontime_pickup_cnt",\n            "delivery_cnt",\n            "create_to_delivery_duration",\n            "pickup_to_delivery_duration",\n            "need_delivery_cnt",\n            "ontime_delivery_cnt",\n            "first_attempt_ontime_delivery_cnt",\n            "finish_delivery_failed_cnt",\n            "finish_cnt"\n        ],\n        "table_rows": [\n            {\n                "table_data": [\n                    "2022-08-02",\n                    "2022-08-03",\n                    "16",\n                    "0",\n                    "0",\n                    "6611815070777213442",\n                    "2022-08-09 00:00:00",\n                    "JNE Express",\n                    "19",\n                    "9",\n                    "0",\n                    "9",\n                    "483426",\n                    "1",\n                    "469683",\n                    "5",\n                    "3",\n                    "3",\n                    "5",\n                    "627845",\n                    "447646",\n                    "8",\n                    "0",\n                    "2",\n                    "10",\n                    "9"\n                ]\n            }\n        ]\n    },\n    "error": null\n}\n')),(0,a.kt)("p",null,"Another day, another interesting problem solved :')"),(0,a.kt)("h3",{id:"full-code"},"Full Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type ExecuteRawQuery struct {\n    c   context.Context\n    ctx *app.RequestContext\n    req *pb.ExecuteRawQueryRequest\n}\n\nfunc New(c context.Context, ctx *app.RequestContext) *ExecuteRawQuery {\n    e := new(ExecuteRawQuery)\n    e.c = c\n    e.ctx = ctx\n    hlog.CtxInfof(e.c, "ExecuteRawQuery | Initialized")\n    return e\n}\n\nfunc (e *ExecuteRawQuery) ExecuteRawQueryImpl() (*pb.ExecuteRawQueryResponse, error) {\n    e.req = new(pb.ExecuteRawQueryRequest)\n    if err := e.ctx.Bind(e.req); err != nil {\n        hlog.CtxErrorf(e.c, err.Error())\n        return nil, err\n    }\n\n    r, err := orm.DbInstance(e.c).Raw(e.req.GetQuery()).Rows()\n    if err != nil {\n        hlog.CtxErrorf(e.c, err.Error())\n        return nil, err\n    }\n\n    cols, err := r.Columns()\n    if err != nil {\n        hlog.CtxErrorf(e.c, err.Error())\n        return nil, err\n    }\n\n    var (\n        res  []*pb.TableRows\n        keys []string\n    )\n\n    //Create a list of string maps. i.e. <table column> : <table field> (JSON like)\n    //Interface type because at this point we don\'t know anything about the columns / fields data type\n    //We know how many columns we have tho\n    genericMap := make([]map[string]interface{}, 0)\n    colItems := make([]interface{}, len(cols))\n\n    for r.Next() {\n        colItem := make(map[string]interface{}, len(cols))\n\n        for i, _ := range colItems {\n            colItems[i] = new(interface{})\n        }\n\n        if err := r.Scan(colItems...); err != nil {\n            hlog.CtxErrorf(e.c, err.Error())\n            return nil, err\n        }\n\n        var row []string\n        for i, col := range cols {\n            colItem[col] = *colItems[i].(*interface{})\n\n            if colItem[col] == nil {\n                //when column is empty (no data)\n                row = append(row, "")\n            } else {\n                //otherwise cast into uint8 slice (byte array) then cast as string\n                row = append(row, string(colItem[col].([]uint8)))\n            }\n\n            //Collect the field names on the first run\n            if len(keys) < len(colItems) {\n                keys = append(keys, col)\n            }\n        }\n        res = append(res, &pb.TableRows{TableData: row})\n        genericMap = append(genericMap, colItem)\n    }\n\n    if err := r.Close(); err != nil {\n        hlog.CtxErrorf(e.c, err.Error())\n        return nil, err\n    }\n\n    hlog.CtxInfof(e.c, "ExecuteRawQueryImpl | Success | %v rows", len(res))\n    return &pb.ExecuteRawQueryResponse{\n        TableFields: keys,\n        TableRows:   res,\n    }, err\n}\n')),(0,a.kt)("h5",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.farrellit.net/2018/08/12/golang-sql-unknown-rows.html"},"farrellit.net - Golang SQL Results from Unknown Rows")))}u.isMDXComponent=!0}}]);