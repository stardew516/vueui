webpackJsonp([12],{10:function(t,e){},12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{first:{type:Boolean,default:!1},link:{type:String,default:"#"},target:{type:String,default:""},iconShow:{type:Boolean,default:!0},iconPic:{type:String,default:""},textShow:{type:Boolean,default:!0},textContent:{type:String,default:""},right:{type:Boolean,default:!0}},methods:{translateToPage:function(t){console.log(t),this.$emit("item-tap",t)}}}},126:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=n(8),i=function(t){return t&&t.__esModule?t:{default:t}}(c);e.default={components:{Cell:i.default},data:function(){return{first:!0,cell:[{link:"https://stardew516.github.io/",pic:"icon-beauty",content:"我是一个iconfont的cell"},{pic:"https://avatars0.githubusercontent.com/u/15061629",content:"我是pic类型的cell"},{iconShow:!1,pic:"https://avatars0.githubusercontent.com/u/15061629",content:"我没有icon"},{pic:"https://avatars0.githubusercontent.com/u/15061629",content:"我没有右侧箭头",right:!1}]}},methods:{transPage:function(t){window.location.href=t}}}},14:function(t,e,n){"use strict";function c(t){return t&&t.__esModule?t:{default:t}}var i=n(1),l=c(i),o=n(43),a=c(o),s=n(5),r=c(s);l.default.config.productionTip=!1,new l.default({el:"#cell",router:r.default,template:"<Cell/>",components:{Cell:a.default}})},140:function(t,e,n){t.exports=n(14)},2:function(t,e,n){n(4);var c=n(0)(n(6),n(3),"data-v-12f6e127",null);t.exports=c.exports},3:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},4:function(t,e){},43:function(t,e,n){n(96);var c=n(0)(n(126),n(67),"data-v-517cf01b",null);t.exports=c.exports},5:function(t,e,n){"use strict";function c(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),l=c(i),o=n(7),a=c(o),s=n(2),r=c(s);l.default.use(a.default),e.default=new a.default({routes:[{path:"/",name:"Index",component:r.default}]})},6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},67:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("标准")]),t._v(" "),n("cell",{attrs:{"icon-pic":t.cell[0].pic,"text-content":t.cell[0].content,link:t.cell[0].link,first:t.first},on:{"item-tap":t.transPage}}),t._v(" "),n("cell",{attrs:{"icon-pic":t.cell[1].pic,"text-content":t.cell[1].content,link:t.cell[1].link},on:{"item-tap":t.transPage}}),t._v(" "),n("div",{staticClass:"divder"}),t._v(" "),n("p",[t._v("无icon")]),t._v(" "),n("cell",{attrs:{"icon-show":t.cell[2].iconShow,"icon-pic":t.cell[2].pic,"text-content":t.cell[2].content,link:t.cell[2].link,first:t.first},on:{"item-tap":t.transPage}}),t._v(" "),n("div",{staticClass:"divder"}),t._v(" "),n("p",[t._v("无箭头")]),t._v(" "),n("cell",{attrs:{right:t.cell[3].right,"icon-pic":t.cell[3].pic,"text-content":t.cell[3].content,link:t.cell[3].link,first:t.first},on:{"item-tap":t.transPage}})],1)},staticRenderFns:[]}},8:function(t,e,n){n(10);var c=n(0)(n(12),n(9),"data-v-169a9ec6",null);t.exports=c.exports},9:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell",class:{"cell-first":!!t.first},attrs:{target:t.target},on:{click:function(e){t.translateToPage(t.link)}}},[t.iconShow&&t.iconPic.indexOf(".")<0?n("span",{staticClass:"cell-icon",class:t.iconPic}):t._e(),t._v(" "),t.iconShow&&t.iconPic.indexOf(".")>=0?n("img",{staticClass:"cell-img",attrs:{src:t.iconPic}}):t._e(),t._v(" "),t.textShow?n("span",{staticClass:"cell-text"},[t._v(t._s(t.textContent))]):t._e(),t._v(" "),t.right?n("span",{staticClass:"cell-right icon-right"}):t._e()])},staticRenderFns:[]}},96:function(t,e){}},[140]);
//# sourceMappingURL=cell.7fcf277463d927bdcf3e.js.map