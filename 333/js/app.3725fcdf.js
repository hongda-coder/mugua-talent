(function(e){function t(t){for(var r,u,a=t[0],i=t[1],d=t[2],f=0,s=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(s.length)s.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},u={app:0},o={app:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-28ea558c":"0a309975","chunk-2d940cb2":"5e662a78","chunk-2f367144":"16cf586b","chunk-558c660a":"b0036403","chunk-5bfabfd6":"9ea9e85d","chunk-5dae674c":"0750ba27","chunk-60ef094e":"37160988","chunk-6eeeb992":"9846e5b8","chunk-74e98f1f":"65601ccd","chunk-79310bff":"bc1347cf","chunk-cc3bdc0a":"55ce687c","chunk-e0c65428":"d4bbe5d1"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-28ea558c":1,"chunk-2d940cb2":1,"chunk-2f367144":1,"chunk-558c660a":1,"chunk-5bfabfd6":1,"chunk-5dae674c":1,"chunk-60ef094e":1,"chunk-6eeeb992":1,"chunk-74e98f1f":1,"chunk-79310bff":1,"chunk-cc3bdc0a":1,"chunk-e0c65428":1};u[e]?t.push(u[e]):0!==u[e]&&n[e]&&t.push(u[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-28ea558c":"b008c43a","chunk-2d940cb2":"17e53ba6","chunk-2f367144":"353df244","chunk-558c660a":"d02b9baf","chunk-5bfabfd6":"f5ffe7a8","chunk-5dae674c":"9da8d648","chunk-60ef094e":"8f31a831","chunk-6eeeb992":"fd391057","chunk-74e98f1f":"e91e6576","chunk-79310bff":"0dea86cc","chunk-cc3bdc0a":"0e7ff2de","chunk-e0c65428":"74571340"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var d=c[a],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===o))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){d=s[a],f=d.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[e],l.parentNode.removeChild(l),n(c)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){u[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e);var s=new Error;d=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",s.name="ChunkLoadError",s.type=r,s.request=u,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=t,d=d.slice();for(var s=0;s<d.length;s++)t(d[s]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("6f44"),u=n.n(r);u.a},4260:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return u}));function r(e,t){return sessionStorage.setItem(e,t)}function u(e){return sessionStorage.getItem(e)}},"4ee2":function(e,t,n){},"52bb":function(e,t,n){"use strict";n.d(t,"n",(function(){return d})),n.d(t,"q",(function(){return f})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"p",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"m",(function(){return m})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return k})),n.d(t,"v",(function(){return g})),n.d(t,"i",(function(){return v})),n.d(t,"j",(function(){return w})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return j})),n.d(t,"o",(function(){return _})),n.d(t,"u",(function(){return O})),n.d(t,"e",(function(){return T})),n.d(t,"w",(function(){return E})),n.d(t,"x",(function(){return S})),n.d(t,"t",(function(){return P})),n.d(t,"a",(function(){return A})),n.d(t,"s",(function(){return L})),n.d(t,"r",(function(){return C})),n.d(t,"f",(function(){return x}));n("3a20");var r=n("82ae"),u=n.n(r),o=n("2ca7"),c=n("b810"),a=u.a.create({baseURL:"http://192.168.0.182:8002/api/",withCredentials:!0});a.interceptors.request.use((function(e){return e.headers["token"]=Object(c["a"])(),e}),(function(e){return console.log(e),Promise.reject(e)})),a.interceptors.response.use((function(e){var t=e.data;return 200!==t.status?(Object(o["Message"])({message:t.message||"服务器错误",type:"error",duration:2e3}),Promise.reject(new Error(t.status||"Error"))):t}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:2e3}),Promise.reject(e)}));var i=a;function d(e){return i({url:"user/register",method:"post",data:e})}function f(e){return i({url:"user/check",method:"post",data:e})}function s(e){return i({url:"user/login",method:"post",data:e})}function l(e){return i({url:"zpjob/JobList",method:"post",data:e})}function h(e){return i({url:"zpjob/FxUserDeliverResumeList",method:"post",data:e})}function p(e){return i({url:"zpjob/FXSsc_User_TaskList",method:"post",data:e})}function m(e){return i({url:"user/UserData",method:"post",data:e})}function b(e){return i({url:"user/UpdateCertificateimage",method:"post",data:e})}function k(e){return i({url:"zpjob/synthesize",method:"post",data:e})}function g(e){return i({url:"user/PostUpload",method:"post",data:e})}function v(e){return i({url:"Account/UpdateTel",method:"post",data:e})}function w(e){return i({url:"Account/UpdatePwd",method:"post",data:e})}function y(e){return i({url:"account/Bank_Add",method:"post",data:e})}function j(e){return i({url:"account/Bank_Select",method:"post",data:e})}function _(e){return i({url:"zpjob/getShareUrl",method:"post",data:e})}function O(e){return i({url:"account/Bank_Del",method:"post",data:e})}function T(e){return i({url:"account/DateiCount",method:"post",data:e})}function E(e){return i({url:"account/Bank_datei_Add",method:"post",data:e})}function S(e){return i({url:"account/Bank_datei_Select",method:"post",data:e})}function P(e){return i({url:"account/Transactionflow",method:"post",data:e})}function A(e){return i({url:"account/Transactionflow",method:"post",data:e})}function L(e){return i({url:"user/user_equal",method:"post",data:e})}function C(e){return i({url:"user/user_subordinate",method:"post",data:e})}function x(e){return i({url:"account/Task_Add",method:"post",data:e})}},"56d7":function(e,t,n){"use strict";n.r(t);n("d9a3"),n("c9db"),n("de3e"),n("618d");var r=n("0261"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"app",watch:{$route:function(e,t){this.currentRouter=e.path}},beforeMount:function(){this.currentRouter=this.$route.path}},a=c,i=(n("034f"),n("623f")),d=Object(i["a"])(a,u,o,!1,null,null,null),f=d.exports,s=(n("3a20"),n("1bee"));r["default"].use(s["a"]);var l=new s["a"]({linkActiveClass:"active",routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:function(){return n.e("chunk-2d940cb2").then(n.bind(null,"4b3f"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-79310bff").then(n.bind(null,"61d1"))}},{path:"/editor",name:"editor",component:function(){return n.e("chunk-6eeeb992").then(n.bind(null,"7206"))}},{path:"/home",redirect:"/home",component:function(){return n.e("chunk-e0c65428").then(n.bind(null,"57da"))},meta:{title:"首页"},children:[{path:"/home",name:"home",component:function(){return n.e("chunk-558c660a").then(n.bind(null,"5c28"))},meta:{title:"首页"}}]},{path:"personal",redirect:"/personal",component:function(){return n.e("chunk-e0c65428").then(n.bind(null,"57da"))},meta:{title:"个人信息"},children:[{path:"/personal",name:"personal",component:function(){return n.e("chunk-60ef094e").then(n.bind(null,"2099"))},meta:{title:"个人信息"}}]},{path:"task",redirect:"/task",component:function(){return n.e("chunk-e0c65428").then(n.bind(null,"57da"))},meta:{title:"任务管理"},children:[{path:"/task",name:"task",component:function(){return n.e("chunk-cc3bdc0a").then(n.bind(null,"b9b6"))},meta:{title:"任务管理"}}]},{path:"recommend",redirect:"/recommend",component:function(){return n.e("chunk-e0c65428").then(n.bind(null,"57da"))},meta:{title:"推荐管理"},children:[{path:"/recommend",name:"recommend",component:function(){return n.e("chunk-5bfabfd6").then(n.bind(null,"063a"))},meta:{title:"推荐管理"}}]},{path:"group",redirect:"/group",component:function(){return n.e("chunk-e0c65428").then(n.bind(null,"57da"))},meta:{title:"群主管理"},children:[{path:"/group",name:"group",component:function(){return n.e("chunk-5dae674c").then(n.bind(null,"a7d2"))},meta:{title:"群主管理"}}]},{path:"commission",redirect:"/commission",component:function(){return n.e("chunk-e0c65428").then(n.bind(null,"57da"))},meta:{title:"佣金管理"},children:[{path:"/commission",name:"commission",component:function(){return n.e("chunk-74e98f1f").then(n.bind(null,"a8d3"))},meta:{title:"佣金管理"}}]},{path:"withdraw",redirect:"/withdraw",component:function(){return n.e("chunk-e0c65428").then(n.bind(null,"57da"))},meta:{title:"提现"},children:[{path:"/withdraw",name:"withdraw",component:function(){return n.e("chunk-2f367144").then(n.bind(null,"5b77"))},meta:{title:"提现"}}]},{path:"safety",redirect:"/safety",component:function(){return n.e("chunk-e0c65428").then(n.bind(null,"57da"))},meta:{title:"安全中心"},children:[{path:"/safety",name:"safety",component:function(){return n.e("chunk-28ea558c").then(n.bind(null,"0353"))},meta:{title:"安全中心"}}]}]}),h=n("08c1"),p=n("b810"),m=n("4260"),b={token:Object(p["a"])(),address:"http://192.168.0.182",tel:Object(m["a"])()},k={SET_TOKEN:function(e,t){e.token=t},SET_TEL:function(e,t){e.tel=t}},g=n("52bb"),v={Login:function(e,t){var n=e.commit,r=t.loginuser,u=t.pwd;return new Promise((function(e,t){Object(g["h"])({loginuser:r,pwd:u}).then((function(t){n("SET_TOKEN",t.data.token),Object(p["c"])(t.data.token),n("SET_TEL",t.data.tel),Object(m["b"])("tel",t.data.tel),e(t)})).catch((function(e){t(e)}))}))}},w={token:function(e){return e.token},address:function(e){return e.address},tel:function(e){return e.tel}};r["default"].use(h["a"]);var y=new h["a"].Store({state:b,getters:w,mutations:k,actions:v}),j=y,_=n("2ca7"),O=n.n(_),T=n("959e"),E=n.n(T),S=n("e26a"),P=n.n(S);n("46c6"),n("a342"),n("4ee2");r["default"].use(P.a),r["default"].use(E.a),r["default"].use(O.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(f)},router:l,store:j}).$mount("#app")},"6f44":function(e,t,n){},a342:function(e,t,n){},b810:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n("e04f"),u=n.n(r),o="Admin-Token";function c(e){return u.a.set(o,e)}function a(){return u.a.get(o)}function i(){return u.a.remove(o)}}});
//# sourceMappingURL=app.3725fcdf.js.map