(window.webpackJsonp=window.webpackJsonp||[]).push([[13,10],{448:function(e,t,n){e.exports=n.p+"img/place.caa78d7.svg"},456:function(e,t,n){"use strict";n.r(t);var l={name:"YoutubeVideo",props:["id","title"]},r=n(14),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("iframe",{staticClass:"w-full aspect-video",attrs:{src:"https://www.youtube.com/embed/"+e.id,title:e.title||"Youtube Video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})}),[],!1,null,"2261167c",null);t.default=component.exports},504:function(e,t,n){"use strict";n.r(t);var l=n(4),r=(n(20),n(76),n(121),n(160)),o={name:"EventDetailPage",components:{RichTextRenderer:n.n(r).a},data:function(){return{nodeRenderers:{"embedded-asset-block":function(e,t,n,l){return"".concat(e," ").concat(t)},hyperlink:function(e,t,n,l){return e.data.uri.startsWith("https://www.youtube.com/embed/")?n("iframe",{key:t,attrs:{frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",src:e.data.uri,class:"aspect-video w-full"}}):n("a",{key:t,attrs:{href:e.data.uri}},l(e.content,t,n,l))}},event:null}},head:function(){return{title:this.event&&this.event.fields.title}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push({name:"schedule"})}},computed:{photo:function(){return this.event&&this.event.fields.photo||this.place&&this.place.fields.photo||this.event&&this.event.fields.place&&this.event.fields.place.fields.photo},place:function(){var e=this.event.fields.place;if(e)return e.fields.parent?e.fields.parent:e}},fetch:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.commit("events/setEventInDetailId",e.$route.params.id);case 2:if(e.event=e.$store.getters["events/eventInDetail"],e.event){t.next=5;break}throw new Error({statusCode:404,message:"Specified event not found."});case 5:case"end":return t.stop()}}),t)})))()}},c=n(14),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return e.event?l("article",[l("button",{staticClass:"bg-primary text-white uppercase\n    p-2 my-2 text-center rounded block w-full font-bold",on:{click:e.goBack}},[e._v("\n    < back to schedule\n  ")]),e._v(" "),l("h1",{staticClass:"py-4 mb-4 border-b-4 border-secondary text-primary\n      font-bold flex flex-col sm:flex-row justify-between items-center"},[l("span",{staticClass:"text-4xl"},[e._v(e._s(e.event.fields.title))]),e._v(" "),l("span",{staticClass:"text-3xl"},[e._v("\n      "+e._s(e.event.fields.dayName)+", "+e._s(e.event.fields.from)+" "),e.event.fields.till?[e._v("– "+e._s(e.event.fields.till))]:e._e()],2)]),e._v(" "),l("div",{staticClass:"flex flex-col-reverse md:flex-row justify-between gap-x-4"},[e.event.fields.youtube?l("YoutubeVideo",{attrs:{id:e.event.fields.youtube,title:e.event.fields.title}}):e._e(),e._v(" "),e.event.fields.description?l("RichTextRenderer",{attrs:{document:e.event.fields.description,nodeRenderers:e.nodeRenderers}}):e._e()],1),e._v(" "),l("div",{staticClass:"w-auto md:w-1/3 flex-row-reverse md:flex-col items-center"},[e.photo?l("img",{staticClass:"w-1/2 md:w-full mx-auto",attrs:{height:e.photo.fields.file.details.image.height,src:e.photo.fields.file.url,width:e.photo.fields.file.details.image.width,alt:e.event.fields.title}}):e._e(),e._v(" "),e.place&&e.place.fields.title?l("nuxt-link",{staticClass:"my-4 gap-2 flex flex-row items-center justify-center p-2 rounded border border-primary",attrs:{to:{name:"map",hash:"#"+e.place.sys.id}}},[l("img",{staticClass:"h-8 w-8",attrs:{alt:"This place",src:n(448)}}),e._v(" "),l("span",{staticClass:"text-lg font-bold"},[e.event.fields.place&&e.event.fields.place.fields.parent?l("span",{staticClass:"block"},[e._v("\n            "+e._s(e.event.fields.place.fields.title)+"\n          ")]):e._e(),e._v("\n          "+e._s(e.place.fields.title)+"\n        ")])]):e._e()],1)]):e._e()}),[],!1,null,"29b9c3ec",null);t.default=component.exports;installComponents(component,{YoutubeVideo:n(456).default})}}]);