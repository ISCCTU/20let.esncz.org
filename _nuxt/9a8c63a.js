(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7],{450:function(t,e,r){var content=r(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("48ae7d00",content,!0,{sourceMap:!1})},454:function(t,e,r){t.exports=r.p+"img/question-mark.de99217.svg"},455:function(t,e,r){"use strict";r(450)},456:function(t,e,r){var n=r(64)((function(i){return i[1]}));n.push([t.i,".nuxt-link-active[data-v-55ce5297]{--tw-text-opacity:1;color:rgb(249 0 147 / var(--tw-text-opacity))}nav .nuxt-link-active[data-v-55ce5297]::after{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(249 0 147 / var(--tw-bg-opacity))}",""]),n.locals={},t.exports=n},460:function(t,e,r){"use strict";r.r(e);r(40),r(28),r(36),r(11),r(57),r(39),r(58);var n=r(4),o=r(18),c=(r(20),r(24),r(66),r(161)),l=r.n(c),d=r(163),f=r.n(d),y=r(75);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=function(t,e,r,n){return t.data&&t.data.target&&t.data.target.fields&&t.data.target.fields.file?r("img",{attrs:{src:t.data.target.fields.file.url,width:t.data.target.fields.file.details.image.width,height:t.data.target.fields.file.details.image.height,class:""}}):""},w={name:"Questions",components:{RichTextRenderer:l.a},props:{category:String,question:String},computed:v(v({},Object(y.b)("questions",["currentQuestions"])),Object(y.c)("questions",["categoriesSlugs","categories"])),created:function(){this.nodeRenderers={"embedded-asset-block":h}},methods:{slug:function(t){return f()(t)}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.category){e.next=3;break}return e.abrupt("return",t.$router.replace({name:"faq-category",params:{category:"general"}}));case 3:case"end":return e.stop()}}),e)})))()}},x=(r(455),r(12)),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("nav",[n("ul",{staticClass:"\n      font-medium text-gray-800 dark:text-gray-100 text-lg\n      flex flex-wrap flex-row justify-around md:justify-center items-center\n    "},t._l(t.categories,(function(g){return n("li",{staticClass:"\n          inline-block w-1/2 md:w-auto text-center group\n        "},[n("nuxt-link",{staticClass:"\n            inline-block p-1 md:p-4 hover:text-primary dark:hover:text-secondary\n\n            relative\n            after:absolute\n            after:bottom-0 after:w-full after:h-1 after:bg-primary\n            after:left-0 after:right-0\n            group-last:after:rounded-r-full group-first:after:rounded-l-full\n         ",attrs:{to:{name:"faq-category",params:{category:g.slug}}}},[t._v(t._s(g.title)+"\n        ")])],1)})),0)]),t._v(" "),n("div",{staticClass:"max-w-2xl mx-auto py-4 md:py-8"},t._l(t.currentQuestions,(function(q){return n("div",{staticClass:"group"},[n("nuxt-link",{staticClass:"\n          text-lg p-4 block\n          flex flex-row items-center justify-between\n\n          group-odd:bg-gray-100 group-odd:hover:bg-gray-200 group-hover:bg-gray-100\n          dark:group-odd:bg-gray-800 dark:group-hover:bg-gray-800 dark:group-odd:hover:bg-gray-700\n        ",class:{"text-primary dark:text-secondary":t.question===q.sys.id},attrs:{to:{name:t.question===q.sys.id?"faq-category":"faq-category-question",params:{category:t.slug(q.fields.category),question:q.sys.id}},href:"#"}},[n("div",{staticClass:"w-5/6 text-sm sm:text-base"},[q.fields.question?n("RichTextRenderer",{attrs:{document:q.fields.question}}):t._e()],1),t._v(" "),n("img",{staticClass:"h-6 w-6 black-to-primary dark:black-to-white",class:{"dark:black-to-secondary black-to-secondary":t.question===q.sys.id},attrs:{alt:"Question","aria-hidden":"true",src:r(454)}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.question===q.sys.id,expression:"question === q.sys.id"}],staticClass:"p-4 bg-gray-50 dark:bg-gray-800 prose dark:prose-invert mx-auto prose-img:my-2"},[q.fields.answer?n("RichTextRenderer",{attrs:{document:q.fields.answer,"node-renderers":t.nodeRenderers}}):t._e()],1)],1)})),0)])}),[],!1,null,"55ce5297",null);e.default=component.exports;installComponents(component,{Nav:r(162).default})},469:function(t,e,r){var content=r(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("6ae5a44d",content,!0,{sourceMap:!1})},500:function(t,e,r){"use strict";r(469)},501:function(t,e,r){var n=r(64)((function(i){return i[1]}));n.push([t.i,".nuxt-link-active[data-v-dccaf712]{color:rgb(var(--color-primary))}.dark .nuxt-link-active[data-v-dccaf712]{--tw-text-opacity:1;color:rgb(249 0 147 / var(--tw-text-opacity))}p[data-v-dccaf712]:empty{display:none}",""]),n.locals={},t.exports=n},512:function(t,e,r){"use strict";r.r(e);r(40),r(28),r(36),r(11),r(57),r(39),r(58);var n=r(18),o=r(75);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"FAQQuestionPage",transition:"none",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("questions",["activeQuestionTitle","activeCategoryTitle"])),beforeCreate:function(){this.$store.commit("questions/setActiveCategorySlug",this.$route.params.category),this.$store.commit("questions/setActiveQuestionId",this.$route.params.question)},head:function(){return{title:this.activeQuestionTitle||"".concat(this.activeCategoryTitle," FAQ")}}},d=l,f=(r(500),r(12)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Questions",{attrs:{category:t.$route.params.category,question:t.$route.params.question}})}),[],!1,null,"dccaf712",null);e.default=component.exports;installComponents(component,{Questions:r(460).default})}}]);