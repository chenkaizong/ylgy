(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"011d":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={uButton:n("d01c").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}}),n("v-uni-view",{staticClass:"action-area"},[n("u-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickGame.apply(void 0,arguments)}}},[e._v("开始")])],1),n("v-uni-view",{staticClass:"preload"},[e.game?n("PreLoadingImg",{attrs:{name:e.game},on:{onLoaded:function(t){arguments[0]=t=e.$handleEvent(t),e.afterPreLoaded.apply(void 0,arguments)}}}):e._e()],1)],1)},a=[]},"07bd":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3fa99dd0], uni-scroll-view[data-v-3fa99dd0], uni-swiper-item[data-v-3fa99dd0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-line-progress[data-v-3fa99dd0]{align-items:stretch;position:relative;display:flex;flex-direction:row;flex:1;overflow:hidden;border-radius:100px}.u-line-progress__background[data-v-3fa99dd0]{background-color:#ececec;border-radius:100px;flex:1}.u-line-progress__line[data-v-3fa99dd0]{position:absolute;top:0;left:0;bottom:0;align-items:center;display:flex;flex-direction:row;color:#fff;border-radius:100px;transition:width .5s ease;justify-content:flex-end}.u-line-progress__text[data-v-3fa99dd0]{font-size:10px;align-items:center;text-align:right;color:#fff;margin-right:5px;-webkit-transform:scale(.9);transform:scale(.9)}',""]),e.exports=t},"0c2d":function(e,t,n){var r={"./ylgy/preload.json":"f097"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="0c2d"},1971:function(e,t,n){var r=n("68d0");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("99e6dade",r,!0,{sourceMap:!1,shadowMode:!1})},"1ca4":function(e,t,n){"use strict";var r=n("1971"),i=n.n(r);i.a},"23ac":function(e,t,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("ade3"));n("d81d"),n("d3b7"),n("3ca3"),n("ddb0");var a=r(n("6931")),o=(0,i.default)({props:{name:{type:String,default:""}},data:function(){return{percentage:0}},mounted:function(){},methods:{preloadImages:function(e){var t=this,n=e.map((function(n){return new Promise((function(r,i){var o=new Image;o.onload=function(){t.percentage=Math.floor(t.percentage+100/e.length),r()},o.onerror=function(){return i()},o.src=a.default.VUE_APP_STATIC_URL+n}))}));Promise.all(n).then((function(){t.percentage=100,setTimeout((function(){t.$emit("onLoaded")}),500)})).catch((function(){console.error("Error occurred while loading images")}))}}},"mounted",(function(){this.percentage=0;var e=n("0c2d")("./"+this.name+"/preload.json");this.preloadImages(e)}));t.default=o},2557:function(e,t,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("ae41")),a={name:"u-line-progress",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{lineWidth:0}},watch:{percentage:function(e){this.resizeProgressWidth()}},computed:{progressStyle:function(){var e={};return e.width=this.lineWidth,e.backgroundColor=this.activeColor,e.height=uni.$u.addUnit(this.height),e},innserPercentage:function(){return uni.$u.range(0,100,this.percentage)}},mounted:function(){this.init()},methods:{init:function(){var e=this;uni.$u.sleep(20).then((function(){e.resizeProgressWidth()}))},getProgressWidth:function(){return this.$uGetRect(".u-line-progress__background")},resizeProgressWidth:function(){var e=this;this.getProgressWidth().then((function(t){var n=t.width;e.lineWidth=n*e.innserPercentage/100+"px"}))}}};t.default=a},"2a28":function(e,t,n){"use strict";n.r(t);var r=n("23ac"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},"54e4":function(e,t,n){var r=n("07bd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("38cda52a",r,!0,{sourceMap:!1,shadowMode:!1})},"68d0":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-10a754a2]{display:flex;flex-direction:column;align-items:center;justify-content:space-around;height:100%}.logo[data-v-10a754a2]{height:%?200?%;width:%?200?%}.action-area[data-v-10a754a2]{display:flex;justify-content:center}.preload[data-v-10a754a2]{height:%?30?%;width:%?300?%}',""]),e.exports=t},"7de7":function(e,t,n){"use strict";var r=n("54e4"),i=n.n(r);i.a},"90c8":function(e,t,n){"use strict";n.r(t);var r=n("92b4"),i=n("f51f");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("7de7");var o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"3fa99dd0",null,!1,r["a"],void 0);t["default"]=s.exports},9295:function(e,t,n){"use strict";n.r(t);var r=n("e37a1"),i=n("2a28");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);var o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"23b52810",null,!1,r["a"],void 0);t["default"]=s.exports},"92b4":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-line-progress",style:[e.$u.addStyle(e.customStyle)]},[n("v-uni-view",{ref:"u-line-progress__background",staticClass:"u-line-progress__background",style:[{backgroundColor:e.inactiveColor,height:e.$u.addUnit(e.height)}]}),n("v-uni-view",{staticClass:"u-line-progress__line",style:[e.progressStyle]},[e._t("default",[e.showText&&e.percentage>=10?n("v-uni-text",{staticClass:"u-line-progress__text"},[e._v(e._s(e.innserPercentage+"%"))]):e._e()])],2)],1)},i=[]},a26c:function(e,t,n){"use strict";n.r(t);var r=n("011d"),i=n("cdec");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("1ca4");var o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"10a754a2",null,!1,r["a"],void 0);t["default"]=s.exports},ad84:function(e,t,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("9295")),a={components:{PreLoadingImg:i.default},data:function(){return{game:""}},onLoad:function(){},methods:{onClickGame:function(){this.game="ylgy"},afterPreLoaded:function(){console.log("成功"),this.game="",this.$navTo("/pages/ylgy/ylgy")}}};t.default=a},ae41:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var r={props:{activeColor:{type:String,default:uni.$u.props.lineProgress.activeColor},inactiveColor:{type:String,default:uni.$u.props.lineProgress.color},percentage:{type:[String,Number],default:uni.$u.props.lineProgress.inactiveColor},showText:{type:Boolean,default:uni.$u.props.lineProgress.showText},height:{type:[String,Number],default:uni.$u.props.lineProgress.height}}};t.default=r},cdec:function(e,t,n){"use strict";n.r(t);var r=n("ad84"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},e37a1:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={uLineProgress:n("90c8").default},i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"loading"},[t("u-line-progress",{attrs:{percentage:this.percentage,activeColor:"red",height:10}})],1)},a=[]},f097:function(e){e.exports=JSON.parse('["/ylgy/grass.png","/ylgy/bottom.png","/ylgy/item.png"]')},f51f:function(e,t,n){"use strict";n.r(t);var r=n("2557"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a}}]);