var WeixinApi=(function(){function l(o,n){n=n||{};var m=function(p){WeixinJSBridge.invoke("shareTimeline",{appid:p.appId?p.appId:"",img_url:p.imgUrl,link:p.link,desc:p.title,title:p.desc,img_width:"120",img_height:"120"},function(q){switch(q.err_msg){case"share_timeline:cancel":n.cancel&&n.cancel(q);break;case"share_timeline:confirm":case"share_timeline:ok":n.confirm&&n.confirm(q);break;case"share_timeline:fail":default:n.fail&&n.fail(q);break}n.all&&n.all(q)})};WeixinJSBridge.on("menu:share:timeline",function(p){if(n.async&&n.ready){window._wx_loadedCb_=n.dataLoaded||new Function();if(window._wx_loadedCb_.toString().indexOf("_wx_loadedCb_")>0){window._wx_loadedCb_=new Function()}n.dataLoaded=function(q){window._wx_loadedCb_(q);m(q)};n.ready&&n.ready(p)}else{n.ready&&n.ready(p);m(o)}})}function k(o,n){n=n||{};var m=function(p){WeixinJSBridge.invoke("sendAppMessage",{appid:p.appId?p.appId:"",img_url:p.imgUrl,link:p.link,desc:p.desc,title:p.title,img_width:"120",img_height:"120"},function(q){switch(q.err_msg){case"send_app_msg:cancel":n.cancel&&n.cancel(q);break;case"send_app_msg:confirm":case"send_app_msg:ok":n.confirm&&n.confirm(q);break;case"send_app_msg:fail":default:n.fail&&n.fail(q);break}n.all&&n.all(q)})};WeixinJSBridge.on("menu:share:appmessage",function(p){if(n.async&&n.ready){window._wx_loadedCb_=n.dataLoaded||new Function();if(window._wx_loadedCb_.toString().indexOf("_wx_loadedCb_")>0){window._wx_loadedCb_=new Function()}n.dataLoaded=function(q){window._wx_loadedCb_(q);m(q)};n.ready&&n.ready(p)}else{n.ready&&n.ready(p);m(o)}})}function h(o,n){n=n||{};var m=function(p){WeixinJSBridge.invoke("shareWeibo",{content:p.desc,url:p.link},function(q){switch(q.err_msg){case"share_weibo:cancel":n.cancel&&n.cancel(q);break;case"share_weibo:confirm":case"share_weibo:ok":n.confirm&&n.confirm(q);break;case"share_weibo:fail":default:n.fail&&n.fail(q);break}n.all&&n.all(q)})};WeixinJSBridge.on("menu:share:weibo",function(p){if(n.async&&n.ready){window._wx_loadedCb_=n.dataLoaded||new Function();if(window._wx_loadedCb_.toString().indexOf("_wx_loadedCb_")>0){window._wx_loadedCb_=new Function()}n.dataLoaded=function(q){window._wx_loadedCb_(q);m(q)};n.ready&&n.ready(p)}else{n.ready&&n.ready(p);m(o)}})}function d(m,n){n=n||{};WeixinJSBridge.invoke("addContact",{webtype:"1",username:m},function(p){var o=!p.err_msg||"add_contact:ok"==p.err_msg||"add_contact:added"==p.err_msg;if(o){n.success&&n.success(p)}else{n.fail&&n.fail(p)}})}function b(m,n){if(!m||!n||n.length==0){return}WeixinJSBridge.invoke("imagePreview",{current:m,urls:n})}function c(){WeixinJSBridge.call("showOptionMenu")}function j(){WeixinJSBridge.call("hideOptionMenu")}function i(){WeixinJSBridge.call("showToolbar")}function f(){WeixinJSBridge.call("hideToolbar")}function e(m){if(m&&typeof m=="function"){WeixinJSBridge.invoke("getNetworkType",{},function(n){m(n.err_msg)})}}function g(){WeixinJSBridge.call("closeWindow")}function a(o){if(o&&typeof o=="function"){var m=this;var n=function(){o(m)};if(typeof window.WeixinJSBridge=="undefined"){if(document.addEventListener){document.addEventListener("WeixinJSBridgeReady",n,false)}else{if(document.attachEvent){document.attachEvent("WeixinJSBridgeReady",n);document.attachEvent("onWeixinJSBridgeReady",n)}}}else{n()}}}return{version:"1.9",ready:a,shareToTimeline:l,shareToWeibo:h,shareToFriend:k,addContact:d,showOptionMenu:c,hideOptionMenu:j,showToolbar:i,hideToolbar:f,getNetworkType:e,imagePreview:b,closeWindow:g}})();
