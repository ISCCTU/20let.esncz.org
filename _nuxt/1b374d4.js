(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8],{447:function(e,t,r){var content=r(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("c0beb1fc",content,!0,{sourceMap:!1})},451:function(e,t,r){"use strict";r(447)},452:function(e,t,r){var n=r(65)((function(i){return i[1]}));n.push([e.i,".nuxt-link-active[data-v-28c9aa10]{color:rgb(var(--color-accent))}nav .nuxt-link-active[data-v-28c9aa10]::after{content:var(--tw-content);background-color:rgb(var(--color-accent))}",""]),n.locals={},e.exports=n},457:function(e,t,r){"use strict";r.r(t);r(40),r(27),r(35),r(11),r(58),r(39),r(59);var n=r(18),o=r(160),c=r.n(o),l=r(162),f=r.n(l),d=r(75);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=function(e,t,r,n){return e.data&&e.data.target&&e.data.target.fields&&e.data.target.fields.file?r("img",{attrs:{src:e.data.target.fields.file.url,width:e.data.target.fields.file.details.image.width,height:e.data.target.fields.file.details.image.height,class:""}}):""},O={name:"Questions",components:{RichTextRenderer:c.a},props:{category:String,question:String},computed:y(y({},Object(d.b)("questions",["currentQuestions"])),Object(d.c)("questions",["categoriesSlugs","categories"])),created:function(){this.nodeRenderers={"embedded-asset-block":v}},methods:{slug:function(e){return f()(e)}}},w=(r(451),r(14)),component=Object(w.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("nav",[r("ul",{staticClass:"\n      font-medium text-gray-800  text-lg\n      flex flex-wrap flex-row justify-around md:justify-center items-center\n    "},e._l(e.categories,(function(g){return r("li",{staticClass:"\n          inline-block w-1/2 md:w-auto text-center group\n        "},[r("nuxt-link",{staticClass:"\n            inline-block p-1 md:p-4 hover:text-primary\n\n            relative\n            after:absolute\n            after:bottom-0 after:w-full after:h-1 after:bg-primary\n            after:left-0 after:right-0\n            group-last:after:rounded-r-full group-first:after:rounded-l-full\n         ",attrs:{to:{name:"faq-category",params:{category:g.slug}}}},[e._v(e._s(g.title)+"\n        ")])],1)})),0)]),e._v(" "),r("div",{staticClass:"max-w-2xl mx-auto py-4 md:py-8"},e._l(e.currentQuestions,(function(q){return r("div",{staticClass:"group"},[r("nuxt-link",{staticClass:"\n          text-lg p-4 block\n          flex flex-row items-center justify-between\n\n          group-odd:bg-gray-100 group-odd:hover:bg-gray-200 group-hover:bg-gray-100\n        ",class:{"text-primary ":e.question===q.sys.id},attrs:{to:{name:e.question===q.sys.id?"faq-category":"faq-category-question",params:{category:e.slug(q.fields.category),question:q.sys.id}},href:"#"}},[r("div",{staticClass:"w-5/6 text-sm sm:text-base"},[q.fields.question?r("RichTextRenderer",{attrs:{document:q.fields.question}}):e._e()],1),e._v(" "),e._v('/assets/svg/question-mark.svg"\n          :class="{\' black-to-secondary\': question === q.sys.id}"\n        >\n      ')]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.question===q.sys.id,expression:"question === q.sys.id"}],staticClass:"p-4 bg-gray-50\n          prose  mx-auto prose-img:my-2\n          w-5/6"},[q.fields.answer?r("RichTextRenderer",{attrs:{document:q.fields.answer,"node-renderers":e.nodeRenderers}}):e._e()],1)],1)})),0)])}),[],!1,null,"28c9aa10",null);t.default=component.exports;installComponents(component,{Nav:r(161).default})},468:function(e,t,r){var content=r(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("db88e7b6",content,!0,{sourceMap:!1})},494:function(e,t,r){"use strict";r(468)},495:function(e,t,r){var n=r(65)((function(i){return i[1]}));n.push([e.i,".nuxt-link-active[data-v-5e5ade7a]{color:rgb(var(--color-primary))}p[data-v-5e5ade7a]:empty{display:none}",""]),n.locals={},e.exports=n},507:function(e,t,r){"use strict";r.r(t);r(40),r(27),r(35),r(11),r(58),r(39),r(59);var n=r(4),o=r(18),c=(r(20),r(75));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={name:"FAQQuestionPage",transition:"none",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("questions",["activeQuestionTitle","activeCategoryTitle"])),head:function(){return{title:this.activeQuestionTitle}},fetch:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.route,n=e.error,(o=e.store).commit("questions/setActiveCategorySlug",r.params.category),o.commit("questions/setActiveQuestionId",r.params.question),o.getters["questions/activeQuestionTitle"]||n({statusCode:404,message:"Specified question not found."});case 4:case"end":return t.stop()}}),t)})))()}},d=f,m=(r(494),r(14)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("Questions",{attrs:{category:e.$route.params.category,question:e.$route.params.question}})}),[],!1,null,"5e5ade7a",null);t.default=component.exports;installComponents(component,{Questions:r(457).default})}}]);