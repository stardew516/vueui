webpackJsonp([10],{109:function(t,n){},115:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{initVal:{type:[Number,String],default:0},min:{type:[Number,String],default:0},max:{type:[Number,String],default:99999},increase:{type:[Number,String],default:1},name:{type:String,default:"inputName"},arrow:{type:[Boolean,String],default:!1}},data:function(){return{inputVal:parseInt(this.initVal,10)<parseInt(this.min,10)?this.min:parseInt(this.initVal,10)>parseInt(this.max,10)?this.max:this.initVal}},methods:{add:function(){parseInt(this.inputVal,10)<=parseInt(this.max,10)-parseInt(this.increase,10)?this.inputVal=parseInt(this.inputVal,10)+parseInt(this.increase,10):this.inputVal=parseInt(this.max,10)},minus:function(){parseInt(this.inputVal,10)>parseInt(this.min,10)+parseInt(this.increase,10)?this.inputVal=parseInt(this.inputVal,10)-parseInt(this.increase,10):this.inputVal=parseInt(this.min,10)},valid:function(){/^[0]+[0-9]*$/gi.test(this.inputVal)&&(this.inputVal=parseInt(this.inputVal,10)),/^[1-9]+[0-9]*$/gi.test(this.inputVal)||(this.inputVal=(this.inputVal+"").replace(/[^0-9]/gi,"")),parseInt(this.inputVal,10)>parseInt(this.max,10)?this.inputVal=parseInt(this.max,10):(""===this.inputVal||parseInt(this.inputVal,10)<parseInt(this.min,10))&&(this.inputVal=parseInt(this.min,10))}}}},129:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(32),a=function(t){return t&&t.__esModule?t:{default:t}}(i);n.default={components:{InputNum:a.default}}},143:function(t,n,e){t.exports=e(17)},17:function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=e(1),s=i(a),u=e(46),r=i(u),l=e(5),p=i(l);s.default.config.productionTip=!1,new s.default({el:"#inputNum",router:p.default,template:"<InputNum/>",components:{InputNum:r.default}})},2:function(t,n,e){e(4);var i=e(0)(e(6),e(3),"data-v-12f6e127",null);t.exports=i.exports},3:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div")},staticRenderFns:[]}},32:function(t,n,e){e(109);var i=e(0)(e(115),e(80),"data-v-cb3d3fd2",null);t.exports=i.exports},4:function(t,n){},46:function(t,n,e){e(85);var i=e(0)(e(129),e(56),"data-v-00e3b095",null);t.exports=i.exports},5:function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var a=e(1),s=i(a),u=e(7),r=i(u),l=e(2),p=i(l);s.default.use(r.default),n.default=new r.default({routes:[{path:"/",name:"Index",component:p.default}]})},56:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("input-num",{attrs:{name:"price","init-val":"5",max:"10",min:"2",increase:"3"}}),t._v(" "),e("input-num"),t._v(" "),e("input-num",{attrs:{"init-val":"500",max:"100",min:"20",increase:"3"}}),t._v(" "),e("input-num",{attrs:{arrow:"true",name:"price","init-val":"5",max:"10",min:"2",increase:"3"}}),t._v(" "),e("input-num",{attrs:{arrow:"true"}}),t._v(" "),e("input-num",{attrs:{arrow:"true","init-val":"500",max:"100",min:"20",increase:"3"}})],1)},staticRenderFns:[]}},6:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},80:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"input-num-box clearfix",attrs:{"init-val":t.initVal,max:t.max,min:t.min,increase:t.increase}},[t.arrow?e("div",[e("span",{staticClass:"minus arrow-down icon-down",class:{gray:Number(t.inputVal)<=Number(t.min)},on:{click:t.minus}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],staticClass:"input-number",attrs:{name:t.name,type:"text",value:"0"},domProps:{value:t.inputVal},on:{keyup:t.valid,input:function(n){n.target.composing||(t.inputVal=n.target.value)}}}),t._v(" "),e("span",{staticClass:"add arrow-up icon-up",class:{gray:Number(t.inputVal)>=Number(t.max)},on:{click:t.add}})]):t._e(),t._v(" "),t.arrow?t._e():e("div",[e("span",{staticClass:"minus icon-minus",class:{gray:Number(t.inputVal)<=Number(t.min)},on:{click:t.minus}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],staticClass:"input-number",attrs:{name:t.name,type:"text",value:"0"},domProps:{value:t.inputVal},on:{keyup:t.valid,input:function(n){n.target.composing||(t.inputVal=n.target.value)}}}),t._v(" "),e("span",{staticClass:"add icon-plus",class:{gray:Number(t.inputVal)>=Number(t.max)},on:{click:t.add}})])])},staticRenderFns:[]}},85:function(t,n){}},[143]);
//# sourceMappingURL=inputNum.2b516ea3f3bda5846f8c.js.map