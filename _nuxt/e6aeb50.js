(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{369:function(t,e,n){"use strict";n.r(e);n(57);var o=n(359),r=o.DateTime;o.Duration;o.Settings.defaultLocale="en-US",r.defaultZone="en-US";var c={name:"Countdown",props:{endTime:r},data:function(){return{timer:null,rest:null}},created:function(){this.tick()},destroyed:function(){this.timer&&clearTimeout(this.timer)},methods:{tick:function(){this.rest=this.endTime.diffNow(["days","hours","minutes","seconds"]),setTimeout(this.tick,1e3)}}},l=n(12),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.rest?n("span",[t._v("\n  "+t._s(t.rest.toHuman({listStyle:"long",unitDisplay:"long",maximumFractionDigits:0}))+"\n")]):t._e()}),[],!1,null,"4be88a35",null);e.default=component.exports}}]);