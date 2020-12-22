'use strict';
const OPT = {
    "user" : "admin", //后台密码
    "password" : "yourSelfPwd", //后台密码
    "siteDomain" : "blog.gezhong.vip",// 域名(不带https 也不带/)
    "siteName" : "CF workers blog",//博客名称
    "siteDescription":"A Blog Powered By Cloudflare Workers and KV",//博客描述
    "keyWords":"cloudflare,KV,workers,blog",//关键字
    "cacheZoneId":"cc868e8edce4027ad4a735741111111",//清理缓存用 cf区域 ID
    "cacheToken":"LNxRWH-MPMIGnp8qhyT8FUsjDRN6tdOnmaaaaaaa",//清理缓存用 cf API token
	
    "pageSize" : 5,//每页文章数
    "recentlySize" : 6,//最近文章数
    "readMoreLength":150,//阅读更多截取长度	
    "cacheTime" : 60*60*24*2, //网页缓存时长(秒),建议=文章更新频率
    "themeURL" : "https://raw.githubusercontent.com/gdtool/cloudflare-workers-blog/master/themes/default/", // 模板地址,以 "/"" 结尾
    "html404" : `<b>404</b>`,//404页面代码
    "codeBeforHead":``,//其他代码,显示在</head>前
    "codeBeforBody":``,//其他代码,显示在</body>前
    "commentCode":``,//评论区代码
    "otherCodeA":``,//模板开发用的其他自定义变量
    "otherCodeB":``,//
    "otherCodeC":``,//
    "otherCodeD":``,//
    "otherCodeE":``,//
    "copyRight" :`Powered by <a href="https://www.cloudflare.com">Cloudflare</a> & <a href="https://blog.gezhong.vip">CF-Blog </a>`,//自定义版权信息,建议保留大公无私的 Coudflare 和 作者 的链接
"robots":`User-agent: *
Disallow: /admin`//robots.txt设置
};
!function(t){var e={};function r(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";async function i(t,e,r){let i=await u("index"),s=await a(t,e),g=await l(t,e),d=await n(t,e),h=await c(t,e),w=await async function(t,e,r){let i=await u("articleList.html"),a=await u("articleListNewer.html"),l=await u("articleListOlder.html"),n=await u("articleListItem.html"),c=await u("articleListItemImg.html"),s=await u("articleListItemTags.html"),g=await u("articleListItemCategory.html"),d=await async function(t,e,r=OPT.pageSize){t=decodeURI(t),e=e<=1?1:e;let i=await o("SYSTEM_INDEX_LIST",!0),a=[];for(var l=0,n=i.length;l<n;l++)(i[l].tags.indexOf(t)>-1||i[l].category.indexOf(t)>-1)&&a.push(i[l]);a=m(a,"id");let c=!(a.length>r*e),s=[];for(l=(e-1)*r,n=Math.min(e*r,a.length);l<n;l++)s.push(a[l]);return s=m(s,"id"),[s,c]}(e,r),h=d[0],w=d[1];1==r&&(l="");w&&(a="");a=a.r("articleListNewer.url","/"+t+"/"+e+"/"+(r+1)).r("articleListNewer.title","下一页"),l=l.r("articleListOlder.url","/"+t+"/"+e+"/"+(r-1)).r("articleListOlder.title","上一页");let f="\n";for(var y=0,S=h.length;y<S;y++){let t="\n";for(var T=0,p=h[y].tags.length;T<p;T++)t+=s.r("articleListItemTags.title",h[y].tags[T]).r("articleListItemTags.url","/tags/"+h[y].tags[T]);let e="\n";for(var I=0,L=h[y].category.length;I<L;I++)e+=g.r("articleListItemCategory.title",h[y].category[I]).r("articleListItemCategory.url","/category/"+h[y].category[I]);f+=n.r("articleListItem.title",h[y].title).r("articleListItem.contentText",h[y].contentText.substr(0,OPT.readMoreLength)+"... ").r("articleListItem.createDate",h[y].createDate.substr(0,10)).r("articleListItem.url","/article/"+h[y].id+"/"+h[y].link+".html").r("articleListItem.id",h[y].id).r("articleListItem.link",h[y].link).r("articleListItem.img",h[y].img).r("articleListItemTags.html",t).r("articleListItemCategory.html",e).r("articleListItemImg.html",c.r("articleListItemImg.img",h[y].img).r("articleListItemImg.title",h[y].title).r("articleListItemImg.url","/article/"+h[y].id+"/"+h[y].link+".html"))}return i.r("articleListNewer.html",a).r("articleListOlder.html",l).r("articleListItem.html",f)}(t,e,r);return i.r("widgetMenu.html",s).r("widgetCategory.html",g).r("widgetTags.html",d).r("widgetRecently.html",h).r("articleList.html",w)}async function a(t,e){if("saveToKV"!=t)return await o("SYSTEM_CACHE_HtmlWidgetMenu");let r=await u("widgetMenu.html"),i=await u("widgetMenuItem.html"),a=await o("SYSTEM_VALUE_WidgetMenu",!0),l="";for(var n=0,c=a.length;n<c;n++)l+=i.r("widgetMenuItem.title",a[n].title).r("widgetMenuItem.url",a[n].url)+"\n";let s=r.r("widgetMenuItem.html",l);return await g("SYSTEM_CACHE_HtmlWidgetMenu",s),s}async function l(t,e){if("saveToKV"!=t)return await o("SYSTEM_CACHE_HtmlWidgetCategory");let r=await u("widgetCategory.html"),i=await u("widgetCategoryItem.html"),a=await o("SYSTEM_VALUE_WidgetCategory",!0),l="";for(var n=0,c=a.length;n<c;n++)l+=i.r("widgetCategoryItem.title",a[n]).r("widgetCategoryItem.url","/category/"+a[n])+"\n";let s=r.r("widgetCategoryItem.html",l);return await g("SYSTEM_CACHE_HtmlWidgetCategory",s),s}async function n(t,e){if("saveToKV"!=t)return await o("SYSTEM_CACHE_HtmlWidgetTags");let r=await u("widgetTags.html"),i=await u("widgetTagsItem.html"),a=await o("SYSTEM_VALUE_WidgetTags",!0),l="";for(var n=0,c=a.length;n<c;n++)l+=i.r("widgetTagsItem.title",a[n]).r("widgetTagsItem.url","/tags/"+a[n])+"\n";let s=r.r("widgetTagsItem.html",l);return await g("SYSTEM_CACHE_HtmlWidgetTags",s),s}async function c(t,e){if("saveToKV"!=t)return await o("SYSTEM_CACHE_HtmlWidgetRecently");let r=await u("widgetRecently.html"),i=await u("widgetRecentlyItem.html"),a=(await s(1,OPT.recentlySize))[0],l="\n";for(var n=0,c=a.length;n<c;n++)l+=i.r("widgetRecentlyItem.title",a[n].title).r("widgetRecentlyItem.url","/article/"+a[n].id+"/"+a[n].link+".html").r("widgetRecentlyItem.img",a[n].img)+"\n";let m=r.r("widgetRecentlyItem.html",l);return await g("SYSTEM_CACHE_HtmlWidgetRecently",m),m}async function s(t,e=OPT.pageSize){t=t<=1?1:t;let r=await o("SYSTEM_INDEX_LIST",!0),i=!(r.length>e*t),a=[];for(var l=(t-1)*e,n=Math.min(t*e,r.length);l<n;l++)a.push(r[l]);return a=m(a,"id"),[a,i]}async function o(t,e=!1){console.log("------------KV读取---------------------:",t,e);let r=await CFBLOG.get(t);if(!e)return null==r?"":r;try{return null==r?[]:JSON.parse(r)}catch(t){return[]}}async function g(t,e){return null!=e&&null!=e&&("object"==typeof e&&(e=JSON.stringify(e)),await CFBLOG.put(t,e))}async function u(t){return t=t.replace(".html",""),(await fetch(OPT.themeURL+t+".html",{cf:{cacheTtl:600}})).text()}function m(t,e,r=!0){return t.sort((function(t,i){var a=t[e],l=i[e];return r?a>l?-1:a<l?1:0:a<l?-1:a>l?1:0}))}function d(t){if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!=typeof e||!e)}catch(t){return!1}}async function h(t){const{headers:e}=t,r=e.get("content-type")||"";if(r.includes("application/json")){let e=JSON.stringify(await t.json()),r=JSON.parse(e),a={category:[]};for(var i=0;i<r.length;i++)"tags"==r[i].name?a[r[i].name]=r[i].value.split(","):r[i].name.includes("category")?a.category.push(r[i].value):a[r[i].name]=r[i].value;return a}if(r.includes("application/text"))return await t.text();if(r.includes("text/html"))return await t.text();if(r.includes("form")){const e=await t.formData(),r={};for(const t of e.entries())r[t[0]]=t[1];return JSON.stringify(r)}{const e=await t.blob();return URL.createObjectURL(e)}}addEventListener("fetch",t=>{t.respondWith(async function(t){let e=t.request,r=new URL(t.request.url),w=r.pathname.trim("/").split("/");if("admin"==w[0]&&!function(t){const e=t.headers.get("Authorization");if(!e||!/^Basic [A-Za-z0-9._~+/-]+=*$/i.test(e))return!1;const[r,i]=function(t){try{return atob(t.split(" ").pop()).split(":")}catch(t){return[]}}(e);return r===OPT.user&&i===OPT.password}(t.request))return new Response("Unauthorized",{headers:{"WWW-Authenticate":'Basic realm="cfblog"',"Access-Control-Allow-Origin":"*"},status:401});if(console.log(r.pathname),"/robots.txt"==r.pathname)return new Response(OPT.robots,{headers:{"content-type":"text/plain;charset=UTF-8"},status:200});if("/favicon.ico"==r.pathname)return new Response("404",{headers:{"content-type":"text/plain;charset=UTF-8"},status:404});let f="",y="",S="";0==w.length||""==w[0]?(f="page",y="1"):(f=w[0],y=void 0===w[1]?1:w[1],S=void 0===w[2]?1:w[2]);const T=caches.default,p="https://"+OPT.siteDomain+"/"+f+"/"+y+"/"+S,I=new Request(p,e);let L=await T.match(I);if(L)return L;let O=await async function(t){let e=new URL(t.url).pathname.trim("/").split("/"),r="",w="",f="";0==e.length||""==e[0]?(r="page",w="1"):(r=e[0],w=void 0===e[1]?1:e[1],f=void 0===e[2]?1:e[2]);if("page"==r&&parseInt(w)>0)return await async function(t,e){let r=await u("index"),i=await a(t,e),o=await l(t,e),g=await n(t,e),m=await c(t,e),d=await async function(t,e){let r=await u("articleList.html"),i=await u("articleListNewer.html"),a=await u("articleListOlder.html"),l=await u("articleListItem.html"),n=await u("articleListItemImg.html"),c=await u("articleListItemTags.html"),o=await u("articleListItemCategory.html"),g=await s(e),m=g[0],d=g[1];1==e&&(a="");d&&(i="");i=i.r("articleListNewer.url","/page/"+(e+1)).r("articleListNewer.title","下一页"),a=a.r("articleListOlder.url","/page/"+(e-1)).r("articleListOlder.title","上一页");let h="\n";for(var w=0,f=m.length;w<f;w++){let t="\n";for(var y=0,S=m[w].tags.length;y<S;y++)t+=c.r("articleListItemTags.title",m[w].tags[y]).r("articleListItemTags.url","/tags/"+m[w].tags[y]);let e="\n";for(var T=0,p=m[w].category.length;T<p;T++)e+=o.r("articleListItemCategory.title",m[w].category[T]).r("articleListItemCategory.url","/category/"+m[w].category[T]);h+=l.r("articleListItem.title",m[w].title).r("articleListItem.contentText",m[w].contentText.substr(0,OPT.readMoreLength)+"... ").r("articleListItem.createDate",m[w].createDate.substr(0,10)).r("articleListItem.url","/article/"+m[w].id+"/"+m[w].link+".html").r("articleListItem.id",m[w].id).r("articleListItem.link",m[w].link).r("articleListItem.img",m[w].img).r("articleListItemTags.html",t).r("articleListItemCategory.html",e).r("articleListItemImg.html",n.r("articleListItemImg.img",m[w].img).r("articleListItemImg.title",m[w].title).r("articleListItemImg.url","/article/"+m[w].id+"/"+m[w].link+".html"))}return r.r("articleListNewer.html",i).r("articleListOlder.html",a).r("articleListItem.html",h)}(0,e);return r.r("widgetMenu.html",i).r("widgetCategory.html",o).r("widgetTags.html",g).r("widgetRecently.html",m).r("articleList.html",d)}(r,parseInt(w));if("category"==r&&w.length>0)return await i(r,w,parseInt(f));if("tags"==r&&w.length>0)return await i(r,w,parseInt(f));if("article"==r&&w.length>0)return await async function(t,e){let r=await u("index"),i=await a(t,e),s=await l(t,e),g=await n(t,e),m=await c(t,e),d=await async function(t){let e=await u("articleSingle.html"),r=await u("articleSingleNewer.html"),i=await u("articleSingleOlder.html"),a=(await u("articleSingleComment.html"),await u("articleSingleArticle.html")),l=await u("articleSingleArticleTags.html"),n=await u("articleSingleArticleCategory.html"),c=await async function(t){t=("00000"+parseInt(t)).substr(-6);let e=await o("SYSTEM_INDEX_LIST",!0),r=-1;for(var i=0,a=e.length;i<a;i++)if(e[i].id==t){r=i;break}let l=await o(t,!0);return null==l||0===l.length?[void 0,void 0,void 0]:[e[r-1],l,e[r+1]]}(t),s=c[1],g=c[0],m=c[2];if(void 0===s)return OPT.html404;i=void 0===g?"":i.r("articleSingleOlder.url","/article/"+g.id+"/"+g.link+".html").r("articleSingleOlder.title",g.title);r=void 0===m?"":r.r("articleSingleNewer.url","/article/"+m.id+"/"+m.link+".html").r("articleSingleNewer.title",m.title);let d="\n",h="\n";for(var w=0,f=s.tags.length;w<f;w++)h+=l.r("articleSingleArticleTags.title",s.tags[w]).r("articleSingleArticleTags.url","/tags/"+s.tags[w]);let y="\n";for(var S=0,T=s.category.length;S<T;S++)y+=n.r("articleSingleArticleCategory.title",s.category[S]).r("articleSingleArticleCategory.url","/category/"+s.category[S]);return d+=a.r("articleSingleArticle.title",s.title).r("articleSingleArticle.contentHtml",s.contentHtml).r("articleSingleArticle.contentText",s.contentText.substr(0,OPT.readMoreLength)+"... ").r("articleSingleArticle.contentMD",s.contentMD).r("articleSingleArticle.createDate",s.createDate.substr(0,10)).r("articleSingleArticle.url","/article/"+s.id+"/"+s.link+".html").r("articleSingleArticle.id",s.id).r("articleSingleArticle.link",s.link).r("articleSingleArticle.img",s.img).r("articleSingleArticleTags.html",h).r("articleSingleArticleCategory.html",y),e.r("articleSingleNewer.html",r).r("articleSingleOlder.html",i).r("articleSingleArticle.html",d).r("articleSingleComment.html",OPT.commentCode)}(e);return r.r("widgetMenu.html",i).r("widgetCategory.html",s).r("widgetTags.html",g).r("widgetRecently.html",m).r("articleSingle.html",d)}(r,w);if("search"!=r)return"admin"==r?async function(t,e){new URL(t.url);if(1==e.length||"list"==e[1]){let t=await u("admin/index"),e=await o("SYSTEM_VALUE_WidgetCategory",!0),r=await o("SYSTEM_VALUE_WidgetMenu",!0);return t.r("categoryJson",JSON.stringify(e)).r("menuJson",JSON.stringify(r))}if("publish"==e[1]){let t=await o("SYSTEM_INDEX_LIST",!0),e=[];for(var r=0;r<t.length;r++)if("object"==typeof t[r].tags)for(var i=0;i<t[r].tags.length;i++)-1==e.indexOf(t[r].tags[i])&&e.push(t[r].tags[i]);return await g("SYSTEM_VALUE_WidgetTags",JSON.stringify(e)),await c("saveToKV",1),await l("saveToKV",1),await a("saveToKV",1),await n("saveToKV",1),await async function(t=OPT.cacheZoneId,e=OPT.cacheToken){if(null==t||null==e||t.length<5||e.length<5)return!1;let r=await fetch(`https://api.cloudflare.com/client/v4/zones/${t}/purge_cache`,{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:'{"purge_everything":true}'});return(await r.json()).success}()?'{"msg":"published ,purge Cache true","rst":true}':'{"msg":"published ,buuuuuuuuuuuut purge Cache false !!!!!!","rst":true}'}if("getList"==e[1]){let t=void 0===e[2]?1:parseInt(e[2]),r=await s(t,20);return JSON.stringify(r[0])}if("edit"==e[1]){let t=e[2],r=await u("admin/edit"),i=await o("SYSTEM_VALUE_WidgetCategory",!0),a=await o(t);return r.r("categoryJson",JSON.stringify(i)).r("articleJson",a)}if("saveConfig"==e[1]){const e=await h(t);let r=e.WidgetCategory,i=e.WidgetMenu;return d(r)&&d(i)?(await g("SYSTEM_VALUE_WidgetCategory",r),await g("SYSTEM_VALUE_WidgetMenu",i),'{"msg":"saved","rst":true}'):'{"msg":"Not a JSON object","rst":false}'}if("saveAddNew"==e[1]){const e=await h(t);let r=e.title,i=e.img,a=e.link,l=e.createDate,n=e.category,c=e.tags,s=e["content-markdown-doc"],u=e["content-html-code"],m="",d="";if(r.length>0&&l.length>0&&n.length>0&&s.length>0&&u.length>0){d=await async function(){let t=await o("SYSTEM_INDEX_NUM");return""===t||null==t?(await g("SYSTEM_INDEX_NUM",1),"000001"):(await g("SYSTEM_INDEX_NUM",parseInt(t)+1),("00000"+(parseInt(t)+1)).substr(-6))}(),m=u.replace(/<\/?[^>]*>/g,"").trim().substring(0,OPT.readMoreLength);let t={id:d,title:r,img:i,link:a,createDate:l,category:n,tags:c,contentMD:s,contentHtml:u,contentText:m};await g(d,JSON.stringify(t));let e={id:d,title:r,img:i,link:a,createDate:l,category:n,tags:c,contentText:m},h=await o("SYSTEM_INDEX_LIST",!0),w=[];return w.push(e),w=w.concat(h),await g("SYSTEM_INDEX_LIST",JSON.stringify(w)),'{"msg":"added OK","rst":true,"id":"'+d+'"}'}return'{"msg":"信息不全","rst":false}'}if("delete"==e[1]){let t=e[2];if(6==t.length){await CFBLOG.delete(t);let e=await o("SYSTEM_INDEX_LIST",!0);for(r=0;r<e.length;r++)t==e[r].id&&e.splice(r,1);return await g("SYSTEM_INDEX_LIST",JSON.stringify(e)),'{"msg":"Delete ('+t+')  OK","rst":true,"id":"'+t+'"}'}return'{"msg":"Delete  false ","rst":false,"id":"'+t+'"}'}if("saveEdit"==e[1]){const e=await h(t);let i=e.title,a=e.img,l=e.link,n=e.createDate,c=e.category,s=e.tags,u=e["content-markdown-doc"],d=e["content-html-code"],w="",f=e.id;if(i.length>0&&n.length>0&&c.length>0&&u.length>0&&d.length>0){w=d.replace(/<\/?[^>]*>/g,"").trim().substring(0,OPT.readMoreLength);let t={id:f,title:i,img:a,link:l,createDate:n,category:c,tags:s,contentMD:u,contentHtml:d,contentText:w};await g(f,JSON.stringify(t));let e={id:f,title:i,img:a,link:l,createDate:n,category:c,tags:s,contentText:w},h=await o("SYSTEM_INDEX_LIST",!0);for(r=0;r<h.length;r++)f==h[r].id&&h.splice(r,1);return h.push(e),h=m(h,"id"),await g("SYSTEM_INDEX_LIST",JSON.stringify(h)),'{"msg":"Edit OK","rst":true,"id":"'+f+'"}'}return'{"msg":"信息不全","rst":false}'}return'{"msg":"some errors","rst":false}'}(t,e):OPT.html404;return OPT.html404}(t.request);O=O.r("opt.siteName",OPT.siteName).r("opt.siteDescription",OPT.siteDescription).r("opt.copyRight",OPT.copyRight).r("opt.codeBeforHead",OPT.codeBeforHead).r("opt.codeBeforBody",OPT.codeBeforBody).r("opt.commentCode",OPT.commentCode).r("opt.keyWords",OPT.keyWords).r("opt.otherCodeA",OPT.otherCodeA).r("opt.otherCodeB",OPT.otherCodeB).r("opt.otherCodeC",OPT.otherCodeC).r("opt.otherCodeD",OPT.otherCodeD).r("opt.otherCodeE",OPT.otherCodeE),L=new Response(O,{headers:{"content-type":"text/html;charset=UTF-8"},status:200}),"admin"==f?L.headers.set("Cache-Control","no-store"):(L.headers.set("Cache-Control","public, max-age="+OPT.cacheTime),t.waitUntil(T.put(p,L.clone())));return L}(t))}),String.prototype.trim=function(t){return t?this.replace(new RegExp("^\\"+t+"+|\\"+t+"+$","g"),""):this.replace(/^\s+|\s+$/g,"")},String.prototype.r=function(t,e){return this.replace(new RegExp("\x3c!--{"+t+"}--\x3e","g"),e)}}]);
