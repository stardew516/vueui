webpackJsonp([15],{10:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{border:{type:[Number,String],default:0}},data:function(){return{}},watch:{},methods:{}}},121:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("panel",[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("微型按钮")]),t._v(" "),a("btn",{attrs:{value:"btn-min",belongs:"btn btn-min",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-min btn-success",belongs:"btn btn-min btn-success",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-min btn-warn",belongs:"btn btn-min btn-warn",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-min btn-danger",belongs:"btn btn-min btn-danger",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-min btn-empty",belongs:"btn btn-min btn-empty",callback:t.callback}})],1),t._v(" "),a("panel",[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("小型按钮")]),t._v(" "),a("btn",{attrs:{value:"btn-small",belongs:"btn btn-small",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-small btn-success",belongs:"btn btn-small btn-success",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-small btn-warn",belongs:"btn btn-small btn-warn",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-small btn-danger",belongs:"btn btn-small btn-danger",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-small btn-empty",belongs:"btn btn-small btn-empty",callback:t.callback}})],1),t._v(" "),a("panel",[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("标准按钮")]),t._v(" "),a("btn",{attrs:{value:"btn",belongs:"btn",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn btn-success",belongs:"btn btn-success",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn btn-warn",belongs:"btn btn-warn",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn btn-danger",belongs:"btn btn-danger",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn btn-empty",belongs:"btn btn-empty",callback:t.callback}})],1),t._v(" "),a("panel",[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("大型按钮")]),t._v(" "),a("btn",{attrs:{value:"btn-large",belongs:"btn btn-large",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-large btn-success",belongs:"btn btn-large btn-success",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-large btn-warn",belongs:"btn btn-large btn-warn",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-large btn-danger",belongs:"btn btn-large btn-danger",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn-large btn-empty",belongs:"btn btn-large btn-empty",callback:t.callback}})],1),t._v(" "),a("panel",[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("加载按钮")]),t._v(" "),a("btn",{attrs:{value:"btn btn-loading",belongs:"btn btn-loading",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn btn-success btn-loading",belongs:"btn btn-success btn-loading",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn btn-warn btn-loading",belongs:"btn btn-warn btn-loading",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn btn-danger btn-loading",belongs:"btn btn-danger btn-loading",callback:t.callback}}),t._v(" "),a("btn",{attrs:{value:"btn btn-empty btn-loading",belongs:"btn btn-empty btn-loading",callback:t.callback}})],1)],1)},staticRenderFns:[]}},128:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("button",{class:t.belongs,attrs:{disabled:t.btnDisable},on:{click:function(n){t.btnClick()}}},[t.btnActive?a("i",{staticClass:"iconfont icon-loading",class:{active:t.btnActive}}):t._e(),t._v(t._s(t.value)+"\n")])},staticRenderFns:[]}},170:function(t,n){},177:function(t,n){},193:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{value:{type:String,default:"按钮"},belongs:{typy:String,default:"btn"},disable:{type:Boolean,default:!1},active:{type:Boolean,twoWay:!0,default:!1},callback:{type:Function,default:function(){return function(){}}}},data:function(){return{btnActive:this.active,btnDisable:this.disable,loading:this.belongs}},watch:{active:function(){this.btnActive=this.active},disable:function(){this.btnDisable=this.disable}},methods:{btnClick:function(){if(!this.disable){console.log(this.loading,this.loading.indexOf("btn-loading")),this.loading.indexOf("btn-loading")>=0&&(this.btnActive=!0);var t=this;this.callback(function(){t.btnActive=!1})}}}}},2:function(t,n,a){a(4);var l=a(0)(a(6),a(3),"data-v-12f6e127",null);t.exports=l.exports},215:function(t,n,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var e=a(49),b=l(e),s=a(7),c=l(s);n.default={components:{Btn:b.default,Panel:c.default},data:function(){return{active:!0}},methods:{callback:function(t){setTimeout(function(){console.log(111,"回调结束"),t&&t(),this.disable=!1,this.active=!1}.bind(this),3e3),console.log("callback",this.active)}}}},22:function(t,n,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}var e=a(1),b=l(e),s=a(71),c=l(s),i=a(5),o=l(i);b.default.config.productionTip=!1,new b.default({el:"#buttons",router:o.default,template:"<Buttons/>",components:{Buttons:c.default}})},240:function(t,n,a){t.exports=a(22)},3:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div")},staticRenderFns:[]}},4:function(t,n){},49:function(t,n,a){a(177);var l=a(0)(a(193),a(128),"data-v-905e65d4",null);t.exports=l.exports},5:function(t,n,a){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var e=a(1),b=l(e),s=a(11),c=l(s),i=a(2),o=l(i);b.default.use(c.default),n.default=new c.default({routes:[{path:"/",name:"Index",component:o.default}]})},6:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},7:function(t,n,a){a(9);var l=a(0)(a(10),a(8),"data-v-2a884d4e",null);t.exports=l.exports},71:function(t,n,a){a(170);var l=a(0)(a(215),a(121),"data-v-68b91650",null);t.exports=l.exports},8:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"panel"},[t._t("title"),t._v(" "),a("div",{staticClass:"info",style:{"border-width":t.border}},[t._t("default")],2)],2)},staticRenderFns:[]}},9:function(t,n){}},[240]);
//# sourceMappingURL=buttons.65e7801d3051837bc2cb.js.map