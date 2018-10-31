/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=112},113:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},114:function(t,e,n){"use strict";var r=n(33);n.n(r).a},115:function(t,e,n){(t.exports=n(59)(!1)).push([t.i,"\n.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0\n}\n.__nuxt-error-page .error{max-width:450px\n}\n.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px\n}\n.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px\n}\n.__nuxt-error-page a{color:#7f828b!important;text-decoration:none\n}\n.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px\n}",""])},127:function(t,e,n){"use strict";var r=n(34);n.n(r).a},128:function(t,e,n){(t.exports=n(59)(!1)).push([t.i,"\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999\n}",""])},129:function(t,e,n){"use strict";n.r(e);n(61),n(66),n(69);var r=n(19),o=n.n(r),i=(n(44),n(30),n(95),n(3)),a=n.n(i),s=(n(96),n(97),n(73),n(32),n(74),n(55),n(101),n(108),n(0)),u=(n(47),n(112)),c=u.keys();function p(t){var e=u(t);return e.default||e}var l={},f=!0,h=!1,d=void 0;try{for(var m,v=c[Symbol.iterator]();!(f=(m=v.next()).done);f=!0){var x=m.value;l[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=p(x)}}catch(t){h=!0,d=t}finally{try{f||null==v.return||v.return()}finally{if(h)throw d}}var y=l,g=n(20),b=n.n(g),w=n(78),_=n.n(w),C=n(49),k=function(){return Promise.all([n.e(2),n.e(5),n.e(3)]).then(n.bind(null,153)).then(function(t){return t.default||t})};s.a.use(C.a),window.history.scrollRestoration="manual";var $=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var S=n(79),R=n.n(S).a,E={name:"nuxt-child",functional:!0,props:["keepAlive","keepAliveProps"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var i=n,a=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=a[u]||s,p={};j.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var l={};T.forEach(function(t){"function"==typeof c[t]&&(l[t]=c[t].bind(i))});var f=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(i,t)};var h=[t("router-view",r)];return void 0!==o.keepAlive&&(h=[t("keep-alive",{props:o.keepAliveProps},h)]),t("transition",{props:p,on:l},h)}},j=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],T=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],M={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},A={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},O=(n(114),n(18)),N=Object(O.a)(A,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);N.options.__file="nuxt-error.vue";var P=N.exports,U=(n(116),n(117),n(118),n(120),n(122),n(123),n(126),function(){return{}});function L(t,e){var n=t.options.data||U;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),b()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function q(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function D(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function H(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function I(t){return Promise.all(H(t,function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[o]=q(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function B(t){return z.apply(this,arguments)}function z(){return(z=a()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:return t.abrupt("return",b()({},e,{meta:D(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function J(t,e){return K.apply(this,arguments)}function K(){return(K=a()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var i=o()(n);if("number"==typeof t||"undefined"!==i&&"object"!==i||(r=n||{},n=t,i=o()(n),t=302),"object"===i&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=tt(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,B(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,B(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function V(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function Q(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function F(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?X:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p,l=i[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(p=s(l[f]),!e[u].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===f?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!e[u].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";for(;null!=(n=G.exec(t));){var u=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var l=t[i],f=n[2],h=n[3],d=n[4],m=n[5],v=n[6],x=n[7];a&&(r.push(a),a="");var y=null!=f&&null!=l&&l!==f,g="+"===v||"*"===v,b="?"===v||"*"===v,w=n[2]||s,_=d||m;r.push({name:h||o++,prefix:f||"",delimiter:w,optional:b,repeat:g,partial:y,asterisk:!!x,pattern:_?Z(_):x?".*":"[^"+Y(w)+"]+?"})}}i<t.length&&(a+=t.substr(i));a&&r.push(a);return r}(t,e))}function W(t,e){var n={},r=b()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var G=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function X(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Y(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function tt(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,i=t.split("/"),a=(n?n+"://":"//")+i.shift(),s=i.filter(Boolean).join("/");return 2===(i=s.split("#")).length&&(s=i[0],o=i[1]),a+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(a+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),a+=o?"#"+o:""}var et={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||F(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:E,NuxtError:P}},nt={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.a.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},rt=(n(127),Object(O.a)(nt,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,null,null,null));rt.options.__file="nuxt-loading.vue";var ot=rt.exports,it=Object(O.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,null,null,null);it.options.__file="default.vue";var at={_default:it.exports},st={head:{meta:[{hid:"charset",charset:"utf-8"},{hid:"viewport",name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"V-Sensor"},{hid:"author",name:"author",content:"test"},{hid:"description",name:"description",content:"test"},{hid:"theme-color",name:"theme-color",content:"#3B8070"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"V-Sensor"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"V-Sensor"},{hid:"og:description",name:"og:description",property:"og:description",content:"test"}],link:[{rel:"manifest",href:"/_nuxt/manifest.8b69c830.json"},{rel:"shortcut icon",href:"/_nuxt/icons/icon_64.aSmkHMdoUMc.png"},{rel:"apple-touch-icon",href:"/_nuxt/icons/icon_512.aSmkHMdoUMc.png",sizes:"512x512"}],style:[],script:[],title:"V-Sensor",htmlAttrs:{lang:"en"}},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),i=t("transition",{props:{name:"layout",mode:"out-in"}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,i])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&at["_"+t]||(t="default"),this.layoutName=t,this.layout=at["_"+t],this.layout},loadLayout:function(t){return t&&at["_"+t]||(t="default"),Promise.resolve(at["_"+t])}},components:{NuxtLoading:ot}},ut=n(50),ct=n.n(ut),pt=function(t,e){return lt.apply(this,arguments)};function lt(){return(lt=a()(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n((r={accessibleIcons:!0,iconProperty:"$icon",icons:{64:"/_nuxt/icons/icon_64.aSmkHMdoUMc.png",120:"/_nuxt/icons/icon_120.aSmkHMdoUMc.png",144:"/_nuxt/icons/icon_144.aSmkHMdoUMc.png",152:"/_nuxt/icons/icon_152.aSmkHMdoUMc.png",192:"/_nuxt/icons/icon_192.aSmkHMdoUMc.png",384:"/_nuxt/icons/icon_384.aSmkHMdoUMc.png",512:"/_nuxt/icons/icon_512.aSmkHMdoUMc.png"}}).iconProperty.replace("$",""),ft(r.icons));case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var ft=function(t){return function(e){return t[e]||""}};s.a.component(R.name,R),s.a.component(E.name,E),s.a.component(M.name,M),s.a.component(et.name,et),s.a.use(_.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var ht={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function dt(){return(dt=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new C.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:$,routes:[{path:"/",component:k,name:"index"}],fallback:!1});case 2:return n=t.sent,r=b()({router:n,nuxt:{defaultTransition:ht,transitions:[ht],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},ht,{name:t}):Object.assign({},ht,t):ht}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},st),o=e?e.next:function(t){return r.router.push(t)},e?i=n.resolve(e.url).route:(a=Q(n.options.base),i=n.resolve(a).route),t.next=8,J(r,{route:i,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof pt){t.next=12;break}return t.next=12,pt(r.context,u);case 12:if("function"!=typeof ct.a){t.next=16;break}return t.next=16,ct()(r.context,u);case 16:t.next=19;break;case 19:return t.abrupt("return",{app:r,router:n});case 20:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var mt,vt,xt=[],yt=window.__NUXT__||{};function gt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function bt(t,e,n){return wt.apply(this,arguments)}function wt(){return(wt=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!mt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?W(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,I(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return a._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},i=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:i,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function _t(t,e){return yt.serverRendered&&e&&L(t,e),t._Ctor=t,t}function Ct(t,e,n){var r=this,o=[],i=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y[t]&&(i=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y[t])}),!i)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():V(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function kt(t,e,n){return $t.apply(this,arguments)}function $t(){return($t=a()(regeneratorRuntime.mark(function t(e,n,r){var o,i,a,u,c,p,l,f,h,d,m,v,x,y,g,b,w=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return xt=e===n?[]:D(n,o=[]).map(function(t,e){return F(n.matched[o[e]].path)(n.params)}),i=!1,a=function(t){n.path===t.path&&w.$loading.finish&&w.$loading.finish(),n.path!==t.path&&w.$loading.pause&&w.$loading.pause(),i||(i=!0,r(t))},t.next=7,J(mt,{route:e,from:n,next:a.bind(this)});case 7:if(this._dateLastError=mt.nuxt.dateErr,this._hadError=!!mt.nuxt.err,(c=D(e,u=[])).length){t.next=25;break}return t.next=14,Ct.call(this,c,mt.context);case 14:if(!i){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof P.layout?P.layout(mt.context):P.layout);case 18:return p=t.sent,t.next=21,Ct.call(this,c,mt.context,p);case 21:if(!i){t.next=23;break}return t.abrupt("return");case 23:return mt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(gt(c,e,n)),t.prev=27,t.next=30,Ct.call(this,c,mt.context);case 30:if(!i){t.next=32;break}return t.abrupt("return");case 32:if(!mt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(l=c[0].options.layout)&&(l=l(mt.context)),t.next=38,this.loadLayout(l);case 38:return l=t.sent,t.next=41,Ct.call(this,c,mt.context,l);case 41:if(!i){t.next=43;break}return t.abrupt("return");case 43:if(!mt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,h=!0,d=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(h=(x=v.next()).done){t.next=64;break}if("function"==typeof(y=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,y.options.validate(mt.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,m=t.t0;case 70:t.prev=70,t.prev=71,h||null==v.return||v.return();case 73:if(t.prev=73,!d){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=F(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,w._pathChanged&&w._queryChanged||t._path!==xt[n])t._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return w._diffQuery[t]}))}if(!w._hadError&&w._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],i=t.options.asyncData&&"function"==typeof t.options.asyncData,a=!!t.options.fetch,s=i&&a?30:45;if(i){var c=V(t.options.asyncData,mt.context).then(function(e){L(t,e),w.$loading.increase&&w.$loading.increase(s)});o.push(c)}if(w.$loading.manual=!1===t.options.loading,a){var p=t.options.fetch(mt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){w.$loading.increase&&w.$loading.increase(s)}),o.push(p)}return Promise.all(o)}));case 89:i||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return xt=[],g=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||g||500,_=t.t2,s.a.config.errorHandler&&s.a.config.errorHandler(_),"function"==typeof(b=P.layout)&&(b=b(mt.context)),t.next=108,this.loadLayout(b);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var _},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function St(t,e){H(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function Rt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?P.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(mt.context)),this.setLayout(e)}function Et(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=D(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),Rt.call(n,t)})}function jt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),vt.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Tt(){return(Tt=a()(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return mt=e.app,vt=e.router,t.next=4,Promise.all((c=void 0,c=Q((u=vt).options.base,u.options.mode),H(u.match(c),function(){var t=a()(regeneratorRuntime.mark(function t(e,n,r,o,i){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return a=_t(q(e),yt.data?yt.data[i]:null),r.components[o]=a,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,i){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.a(mt),o=yt.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),i=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){jt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(gt(n,vt.currentRoute)),xt=vt.currentRoute.matched.map(function(t){return F(t.path)(vt.currentRoute.params)})),r.$loading={},yt.error&&r.error(yt.error),vt.beforeEach(bt.bind(r)),vt.beforeEach(kt.bind(r)),vt.afterEach(St),vt.afterEach(Et.bind(r)),!yt.serverRendered){t.next=22;break}return i(),t.abrupt("return");case 22:kt.call(r,vt.currentRoute,vt.currentRoute,function(t){if(!t)return St(vt.currentRoute,vt.currentRoute),Rt.call(r,vt.currentRoute),void i();vt.push(t,function(){return i()},function(t){if(!t)return i();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return dt.apply(this,arguments)}().then(function(t){return Tt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},19:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},20:function(t,e,n){var r=n(113);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}},3:function(t,e){function n(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,u,"next",t)}function u(t){n(a,o,i,s,u,"throw",t)}s(void 0)})}}},33:function(t,e,n){var r=n(115);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(60).default)("45b1ddea",r,!0,{sourceMap:!1})},34:function(t,e,n){var r=n(128);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(60).default)("fd547dac",r,!0,{sourceMap:!1})},50:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(t){window.$sw=t}).catch(function(t){console.error("Service worker registration failed:",t)}):console.warn("Service workers are not supported.")},59:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},60:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return d});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,p=function(){},l=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,n,o){c=n,l=o||{};var a=r(t,e);return m(a),function(e){for(var n=[],o=0;o<a.length;o++){var s=a[o];(u=i[s.id]).refs--,n.push(u)}e?m(a=r(t,e)):a=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}}function m(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(x(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(x(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function x(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(c)return p;r.parentNode.removeChild(r)}if(h){var o=u++;r=s||(s=v()),e=b.bind(null,r,o,!1),n=b.bind(null,r,o,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);l.ssrId&&t.setAttribute(f,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var y,g=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function b(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},79:function(t,e,n){"use strict";var r={name:"no-ssr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,i=r(),a=i.default,s=i.placeholder;return n._isMounted?a:(n.$once("hook:mounted",function(){n.$forceUpdate()}),t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||s))}};t.exports=r},88:function(t,e,n){t.exports=n(129)}},[[88,4,1]]]);