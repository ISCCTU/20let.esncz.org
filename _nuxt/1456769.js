(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5,7],{432:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o}));var r=n(434),l=r.DateTime,o=r.Duration,d=r.Settings;d.defaultLocale="en-US",d.defaultZone="Europe/Prague"},446:function(e,t,n){"use strict";n.r(t);var r=n(29),l=(n(55),n(432)),o={name:"Countdown",props:{endTime:l.a|String},data:function(){return{timer:null,rest:null}},created:function(){this.tick()},destroyed:function(){this.timer&&clearTimeout(this.timer)},methods:{tick:function(){Object(r.a)(this.endTime)===Object(r.a)("")&&(this.endTime=l.a.fromISO(this.endTime)),this.rest=this.endTime.diffNow(["days","hours","minutes","seconds"]),setTimeout(this.tick,1e3)}}},d=n(11),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.rest?n("span",[e._v("\n  "+e._s(e.rest.toHuman({listStyle:"long",unitDisplay:"long",maximumFractionDigits:0}))+"\n")]):e._e()}),[],!1,null,"5528e6f8",null);t.default=component.exports},447:function(e,t,n){"use strict";n.r(t);var r=n(6),l=(n(31),n(54),n(154)),o=n(432),d={name:"Announcements",data:function(){return{announcements:[]}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.createClient)(),t.next=3,n.getEntries({content_type:"announcement",order:"-sys.createdAt","fields.content[exists]":!0,limit:10});case 3:r=t.sent,e.announcements=r.items.map((function(e){var t=o.a.fromISO(e.sys.updatedAt);return e.fields.dateRel=t.toRelative(),e.fields.dateLocal=t.toLocaleString(o.a.DATETIME_SHORT),e}));case 5:case"end":return t.stop()}}),t)})))()}},c=n(11),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.announcements.length?n("div",[e._m(0),e._v(" "),n("div",{staticClass:"\n    columns-[12rem] md:columns-[16rem] gap-2\n  "},e._l(e.announcements,(function(a){return n("div",{staticClass:"\n        mb-2 flex flex-col justify-between bg-gray-100 rounded\n        break-inside-avoid-column\n        dark:bg-gray-800 group\n      "},[a.fields.content?n("div",{staticClass:"\n          prose prose-sm md:prose-base dark:prose-invert overflow-hidden relative\n          p-2\n          transition-all\n        ",class:{"group-hover:blur-sm max-h-40":a.fields.link},domProps:{innerHTML:e._s(e.$md.render(a.fields.content))}}):e._e(),e._v(" "),n("div",{staticClass:"flex flex-row items-center"},e._l(a.fields.photos,(function(p){return n("div",[n("img",{attrs:{src:p.fields.file.url+"?w=320",width:p.fields.file.details.image.width,height:p.fields.file.details.image.height,loading:"lazy"}})])})),0),e._v(" "),n("div",{staticClass:"flex flex-row justify-between items-center text-gray-600 py-2 px-2"},[n("a",{staticClass:"\n          flex flex-row items-center gap-x-1\n          hover:underline text-primary dark:text-white text-sm group-hover:text-secondary\n        ",class:{invisible:!a.fields.link},attrs:{href:a.fields.link}},[n("svg",{staticClass:"h-3 w-3",attrs:{viewBox:"0 0 194.818 194.818","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M185.818 2.161h-57.04c-4.971 0-9 4.029-9 9s4.029 9 9 9h35.312l-86.3 86.3a9 9 0 0 0 6.364 15.364 8.975 8.975 0 0 0 6.364-2.636l86.3-86.3v35.313c0 4.971 4.029 9 9 9s9-4.029 9-9v-57.04a9 9 0 0 0-9-9.001z",fill:"currentColor"}}),e._v(" "),n("path",{attrs:{d:"M149 77.201a9 9 0 0 0-9 9v88.456H18v-122h93.778c4.971 0 9-4.029 9-9s-4.029-9-9-9H9a9 9 0 0 0-9 9v140a9 9 0 0 0 9 9h140a9 9 0 0 0 9-9V86.201a9 9 0 0 0-9-9z",fill:"currentColor"}})]),e._v("\n          Go to Message\n        ")]),e._v(" "),n("time",{staticClass:"text-xs",attrs:{title:a.fields.dateLocal}},[e._v(e._s(a.fields.dateRel))])])])})),0)]):e._e()}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-row items-center my-6"},[n("div",{staticClass:"flex-grow h-1 bg-secondary rounded-full"}),e._v(" "),n("h2",{staticClass:"text-xl md:text-3xl font-bold text-primary dark:text-white mx-4"},[e._v("Announcements")]),e._v(" "),n("div",{staticClass:"flex-grow h-1 bg-secondary rounded-full"})])}],!1,null,null,null);t.default=component.exports},475:function(e,t,n){"use strict";n.r(t);var r=n(6),l=(n(54),n(24),n(72),n(31),n(432)),o=n(154),d=n(433),c=n.n(d),f={name:"IndexPage",asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(o.createClient)(),e.next=3,t.getEntries({content_type:"event",order:"fields.when",select:"sys.id,fields.when,fields.title,fields.length"});case 3:return n=e.sent.items,e.abrupt("return",{startTime:n[0].fields.when,events:n});case 5:case"end":return e.stop()}}),e)})))()},computed:{showCountdown:function(){return l.a.now()<this.startTime},currentEventIndex:function(){var e=this;return c.a.findLastIndex(this.events,(function(t,i){return t.fields.when<=e.now}))},currentEvent:function(){var e=this.currentEventIndex>=0?this.events[this.currentEventIndex]:void 0;if(e)return e.fields.end?e.fields.end>this.now?e:void 0:e},nextEvent:function(){var e=this.currentEventIndex>=0?this.events[this.currentEventIndex+1]:null;return e||(this.now<this.startTime?this.events[0]:void 0)},now:function(){return l.a.now()}},created:function(){this.startTime=l.a.fromISO(this.startTime),this.events=this.events.map((function(e){return e.fields.when=l.a.fromISO(e.fields.when),e.fields.end=e.fields.length?e.fields.when.plus(l.b.fromObject({minutes:e.fields.length})):void 0,e.fields.from=e.fields.when.toFormat("t").replace(":00",""),e.fields.till=e.fields.end?e.fields.end.toFormat("t").replace(":00",""):"",e}))}},m=n(11),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showCountdown?n("div",{staticClass:"\n      text-center text-2xl sm:text-4xl text-primary dark:text-white\n      font-bold my-10 sm:my-20 block\n    "},[e._v("\n    Brno gonna be dobrý in "),n("br"),e._v(" "),n("Countdown",{attrs:{"end-time":e.startTime}})],1):e._e(),e._v(" "),e.currentEvent?n("nuxt-link",{staticClass:"\n      text-center text-2xl sm:text-4xl text-primary dark:text-white\n      font-bold my-10 sm:my-20 block hover:underline\n    ",attrs:{to:{name:"event-id",params:{id:e.currentEvent.sys.id}}}},[e._v("\n    right now: "+e._s(e.currentEvent.fields.title)+"\n    "),e.currentEvent.fields.till?[e._v("till "+e._s(e.currentEvent.fields.till))]:e._e()],2):e._e(),e._v(" "),e.nextEvent?n("nuxt-link",{staticClass:"\n      text-center text-lg dark:text-white\n      font-bold my-10 sm:my-20 block hover:underline\n    ",attrs:{to:{name:"event-id",params:{id:e.nextEvent.sys.id}}}},[e._v("\n    next: "+e._s(e.nextEvent.fields.title)+" from "+e._s(e.nextEvent.fields.from)+"\n  ")]):e._e(),e._v(" "),n("Announcements")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Countdown:n(446).default,Announcements:n(447).default})}}]);