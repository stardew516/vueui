webpackJsonp([1],{10:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{border:{type:[Number,String],default:0}},data:function(){return{}},watch:{},methods:{}}},101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"folder"},[t._t("default")],2)},staticRenderFns:[]}},109:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"common"},[n("panel",[n("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("普通折叠")]),t._v(" "),n("folder",t._l(t.common,function(e,o){return n("folder-item",{key:o,attrs:{title:e.title}},[n("div",{attrs:{slot:"content"},slot:"content"},t._l(e.content,function(e,o){return n("p",{key:o},[t._v(t._s(e))])}))])}))],1)],1),t._v(" "),n("panel",[n("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v("手风琴折叠")]),t._v(" "),n("folder",{attrs:{accordion:"true"},on:{"folder-accordion":t.folderAccordion}},t._l(t.accordion,function(e,o){return n("folder-item",{key:o,attrs:{unfolder:o===t.selIdx?t.unfolder:!t.unfolder,title:e.title}},[n("div",{attrs:{slot:"content"},slot:"content"},t._l(e.content,function(e,o){return n("p",{key:o},[t._v(t._s(e))])}))])}))],1)],1)},staticRenderFns:[]}},113:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"folder-item"},[n("div",{staticClass:"folder-title",class:{active:t.nofolder},on:{click:t.open}},[n("i",{staticClass:"icon-right folder-icon",class:{unfolder:t.nofolder}}),t._v("\n    "+t._s(t.title)+"\n    "),n("div",{class:{halo:t.titleBg}})]),t._v(" "),n("div",{staticClass:"folder-content",class:{hide:!t.nofolder}},[n("div",{staticClass:"inner-content"},[t._t("content",[t._v("\n        "+t._s(t.content)+"\n      ")])],2)])])},staticRenderFns:[]}},150:function(t,e){},158:function(t,e){},162:function(t,e){},195:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{accordion:{type:[Boolean,String],default:!1}},mounted:function(){if(this.accordion)for(var t=this,e=this.$el.getElementsByClassName("folder-title"),n=0,o=e.length;n<o;n++)!function(n,o){e[n].addEventListener("click",function(){t.$emit("folder-accordion",n)})}(n)}}},196:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{unfolder:{type:Boolean,default:!1},title:{type:String,default:""},content:{type:String,default:""}},data:function(){return{titleBg:!1,nofolder:this.unfolder}},watch:{unfolder:function(t){this.nofolder=t}},methods:{open:function(){this.titleBg=!0,this.nofolder=!this.nofolder,setTimeout(function(){this.titleBg=!1}.bind(this),300)}}}},2:function(t,e,n){n(4);var o=n(0)(n(6),n(3),"data-v-12f6e127",null);t.exports=o.exports},218:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=n(51),r=o(l),i=n(52),s=o(i),c=n(7),d=o(c);e.default={components:{Folder:r.default,FolderItem:s.default,Panel:d.default},methods:{folderAccordion:function(t){this.selIdx=t}},data:function(){return{selIdx:-1,unfolder:!0,common:[{title:"用人之道",content:["去过庙的人都知道，一进庙门，首先是弥陀佛，笑脸迎客，而在他的北面，则是黑口黑脸的韦陀。但相传在很久以前，他们并不在同一个庙里，而是分别掌管不同的庙。弥乐佛热情快乐，所以来的人非常多，但他什么都不在乎，丢三拉四，没有好好的管理账务，所以依然入不敷出。而韦陀虽然管账是一把好手，但成天阴着个脸，太过严肃，搞得人越来越少，最后香火断绝。","佛祖在查香火的时候发现了这个问题，就将他们俩放在同一个庙里，由弥乐佛负责公关，笑迎八方客，于是香火大旺。而韦陀铁面无私，锱珠必较，则让他负责财务，严格把关。在两人的分工合作中，庙里一派欣欣向荣景象。"]},{title:"所长无用",content:["有个鲁国人擅长编草鞋，他妻子擅长织白绢。他想迁到越国去。友人对他说：“你到越国去，一定会贫穷的。”“为什么？”“草鞋，是用来穿着走路的，但越国人习惯于赤足走路；白绢，是用来做帽子的，但越国人习惯于披头散发。凭着你的长处，到用不到你的地方去，这样，要使自己不贫穷，难道可能吗？”"]},{title:"袋鼠与笼子",content:["一天动物园管理员发现袋鼠从笼子里跑出来了，于是开会讨论，一致认为是笼子的高度过低。所以他们决定将笼子的高度由原来的10米加高到20米。结果第二天他们发现袋鼠还是跑到外面来，所以他们又决定再将高度加高到30米。","没想到隔天居然又看到袋鼠全跑到外面，于是管理员们大为紧张，决定一不做二不休，将笼子的高度加高到100米。","一天长颈鹿和几只袋鼠们在闲聊，“你们看，这些人会不会再继续加高你们的笼子？长颈鹿问。“很难说。袋鼠说∶“如果他们再继续忘记关门的话！"]},{title:"扁鹊的医术",content:["魏文王问名医扁鹊说：“你们家兄弟三人，都精于医术，到底哪一位最好呢？","扁鹊答：“长兄最好，中兄次之，我最差。","文王再问：“那么为什么你最出名呢？","扁鹊答：“长兄治病，是治病于病情发作之前。由于一般人不知道他事先能铲除病因，所以他的名气无法传出去；中兄治病，是治病于病情初起时。一般人以为他只能治轻微的小病，所以他的名气只及本乡里。而我是治病于病情严重之时。一般人都看到我在经脉上穿针管放血、在皮肤上敷药等大手术，所以以为我的医术高明，名气因此响遍全国。"]},{title:"曲突徒薪",content:["有位客人到某人家里做客，看见主人家的灶上烟囱是直的，旁边又有很多木材。客人告诉主人说，烟囱要改曲，木材须移去，否则将来可能会有火灾，主人听了没有作任何表示。","不久主人家里果然失火，四周的邻居赶紧跑来救火，最后火被扑灭了，于是主人烹羊宰牛，宴请四邻，以酬谢他们救火的功劳，但并没有请当初建议他将木材移走，烟囱改曲的人。","有人对主人说：“如果当初听了那位先生的话，今天也不用准备筵席，而且没有火灾的损失，现在论功行赏，原先给你建议的人没有被感恩，而救火的人却是座上客，真是很奇怪的事呢！主人顿时省悟，赶紧去邀请当初给予建议的那个客人来吃酒。"]}],accordion:[{title:"养牛之道",content:["我们旅行到乡间，看到一位老农把喂牛的草料铲到一间小茅屋的屋檐上，不免感到奇怪，于是就问道：","“老公公，你为什么不把喂牛的草放在地上，让它吃?”","老农说：“这种草草质不好，我要是放在地上它就不屑一顾;但是我放到让它勉强可够得着的屋檐上，它会努力去吃，直到把全部草料吃个精光。"]},{title:"爱人之心",content:["这是发生在英国的一个真实故事。","有位孤独的老人，无儿无女，又体弱多病。他决定搬到养老院去。老人宣布出售他漂亮的住宅。购买者闻讯蜂拥而至。住宅底价8万英镑，但人们很快就将它炒到了10万英镑。价钱还在不断攀升。老人深陷在沙发里，满目忧郁，是的，要不是健康情形不行，他是不会卖掉这栋陪他度过大半生的住宅的。","一个衣着朴素的青年来到老人眼前，弯下腰，低声说：“先生，我也好想买这栋住宅，可我只有1万英镑。可是，如果您把住宅卖给我，我保证会让您依旧生活在这里，和我一起喝茶，读报，散步，天天都快快乐乐的——相信我，我会用整颗心来照顾您!”","老人颔首微笑，把住宅以1万英镑的价钱卖给了他。"]},{title:"窗",content:["有个太太多年来不断抱怨对面的太太很懒惰，“那个女人的衣服永远洗不干净，看，她晾在外院子里的衣服，总是有斑点，我真的不知道，她怎么连洗衣服都洗成那个样子......”","直到有一天，有个明察秋毫的朋友到她家，才发现不是对面的太太衣服洗不干净。细心的朋友拿了一块抹布，把这个太太的窗户上的灰渍抹掉，说：“看，这不就干净了吗？”","原来，是自己家的窗户脏了。"]},{title:"机会 ",content:["A在合资公司做白领，觉得自己满腔抱负没有得到上级的赏识，经常想：如果有一天能见到老总，有机会展示一下自己的才干就好了!!","A的同事B，也有同样的想法，他更进一步，去打听老总上下班的时间，算好他大概会在何时进电梯，他也在这个时候去坐电梯，希望能遇到老总，有机会可以打个招呼。","他们的同事C更进一步。他详细了解老总的奋斗历程，弄清老总毕业的学校，人际风格，关心的问题，精心设计了几句简单却有份量的开场白，在算好的时间去乘坐电梯，跟老总打过几次招呼后，终于有一天跟老总长谈了一次，不久就争取到了更好的职位。"]},{title:"三个金人",content:["曾经有个小国到中国来，进贡了三个一模一样的金人，金碧辉煌，把皇帝高兴坏了。可是这小国不厚道，同时出一道题目：这三个金人哪个最有价值?","皇帝想了许多的办法，请来珠宝匠检查，称重量，看做工，都是一模一样的。怎么办?使者还等着回去汇报呢。泱泱大国，不会连这个小事都不懂吧?","最后，有一位退位的老大臣说他有办法。","皇帝将使者请到大殿，老臣胸有成足地拿着三根稻草，插入第一个金人的耳朵里，这稻草从另一边耳朵出来了。第二个金人的稻草从嘴巴里直接掉出来，而第三个金人，稻草进去后掉进了肚子，什么响动也没有。老臣说：第三个金人最有价值!使者默默无语，答案正确。 "]}]}}}},243:function(t,e,n){t.exports=n(25)},25:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var l=n(1),r=o(l),i=n(74),s=o(i),c=n(5),d=o(c);r.default.config.productionTip=!1,new r.default({el:"#folder",router:d.default,template:"<Folder/>",components:{Folder:s.default}})},3:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},4:function(t,e){},5:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=n(1),r=o(l),i=n(11),s=o(i),c=n(2),d=o(c);r.default.use(s.default),e.default=new s.default({routes:[{path:"/",name:"Index",component:d.default}]})},51:function(t,e,n){n(150);var o=n(0)(n(195),n(101),"data-v-1ebbfe2e",null);t.exports=o.exports},52:function(t,e,n){n(162);var o=n(0)(n(196),n(113),"data-v-4ca28e1c",null);t.exports=o.exports},6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},7:function(t,e,n){n(9);var o=n(0)(n(10),n(8),"data-v-2a884d4e",null);t.exports=o.exports},74:function(t,e,n){n(158);var o=n(0)(n(218),n(109),null,null);t.exports=o.exports},8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[t._t("title"),t._v(" "),n("div",{staticClass:"info",style:{"border-width":t.border}},[t._t("default")],2)],2)},staticRenderFns:[]}},9:function(t,e){}},[243]);
//# sourceMappingURL=folder.e75c432682574bb46566.js.map