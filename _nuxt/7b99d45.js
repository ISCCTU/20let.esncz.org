(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4],{364:function(t,e,n){t.exports=n.p+"img/woman-icon.7cf1f02.png"},365:function(t,e,n){"use strict";n.r(e);var r={name:"ContentfulImage",props:["asset","default"],computed:{url:function(){return this.asset?"".concat(this.asset.fields.file.url,"?fm=jpg&fl=progressive&f=faces&fit=thumb&w=180&h=180"):this.default||""}}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.url,width:"180",height:"180"}})}),[],!1,null,"2c9282c6",null);e.default=component.exports},380:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(38),n(39),n(10),n(147)),o=n(363),c=n.n(o),f={name:"TeamPage",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.env,n=Object(l.createClient)(),e.next=4,n.getEntries({content_type:"teamMember","fields.isHead":!0,order:"fields.order"});case 4:return r=e.sent,e.next=7,n.getEntries({content_type:"teamMember",order:"fields.order,fields.isHead"});case 7:return o=e.sent,e.abrupt("return",{heads:r.items,teams:c.a.groupBy(c.a.filter(o.items,"fields.team"),"fields.team")});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Team"}}},d=n(12),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"space-y-4 lg:space-y-8"},[r("ul",{staticClass:"flex flex-row flex-wrap justify-center"},t._l(t.heads,(function(head){return r("li",{staticClass:"\n          py-4 px-4 sm:px-8 flex flex-col items-center justify-between\n          font-bold w-1/2 sm:w-1/3 md:w-1/4\n    "},[r("ContentfulImage",{staticClass:"\n          w-full rounded-full\n          transition-transform duration-300 ease-in-out hover:scale-110\n        ",attrs:{asset:head.fields.photo,default:n(364)}}),t._v(" "),r("h2",{staticClass:"sm:text-lg text-primary dark:text-white text-center my-1"},[t._v(t._s(head.fields.name))]),t._v(" "),r("h3",{staticClass:"text-xs text-gray-600 dark:text-gray-400 text-center"},[t._v(t._s(head.fields.position))])],1)})),0),t._v(" "),r("div",{staticClass:"border-secondary border-b-4 my-4"}),t._v(" "),t._l(t.teams,(function(e,l){return r("div",[r("h2",{staticClass:"text-2xl text-center font-bold"},[t._v(t._s(l))]),t._v(" "),r("ul",{staticClass:"flex flex-row flex-wrap justify-center"},t._l(e,(function(e){return r("li",{staticClass:"\n        p-4 font-bold flex flex-col items-center justify-between\n        w-1/3 sm:w-1/5 md:w-1/6\n    "},[r("ContentfulImage",{staticClass:"\n            w-full rounded-full mx-4\n            transition-transform duration-300 ease-in-out hover:scale-110\n          ",attrs:{asset:e.fields.photo,default:n(364)}}),t._v(" "),r("h2",{staticClass:"text-primary dark:text-white text-center my-1"},[t._v(t._s(e.fields.name))]),t._v(" "),r("h3",{staticClass:"text-xs text-gray-600 dark:text-gray-400 text-center"},[t._v(t._s(e.fields.position))])],1)})),0)])}))],2)}),[],!1,null,"48f186aa",null);e.default=component.exports;installComponents(component,{ContentfulImage:n(365).default})}}]);