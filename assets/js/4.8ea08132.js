(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{344:function(e,t,n){},380:function(e,t,n){"use strict";var r=n(344);n.n(r).a},396:function(e,t,n){"use strict";n.r(t);var r={name:"eg-map-center-twoway",data:function(){return{reportedMapCenter:{lat:1.32,lng:103.8},mapCenter:null,pov:{pitch:0,heading:0}}},created:function(){this.sync()},methods:{updateCenter:function(e){this.reportedMapCenter={lat:e.lat(),lng:e.lng()}},sync:function(){this.mapCenter=this.reportedMapCenter}}},a=(n(380),n(10)),i=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Test 1")]),e._v(" "),e._m(0),e._v(" "),n("div",[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:e.reportedMapCenter.lat,expression:"reportedMapCenter.lat",modifiers:{number:!0,lazy:!0}}],attrs:{type:"number",step:"0.00001"},domProps:{value:e.reportedMapCenter.lat},on:{change:[function(t){e.$set(e.reportedMapCenter,"lat",e._n(t.target.value))},e.sync],blur:function(t){return e.$forceUpdate()}}}),e._v("\n     \n    "),e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:e.reportedMapCenter.lng,expression:"reportedMapCenter.lng",modifiers:{number:!0,lazy:!0}}],attrs:{type:"number",step:"0.00001"},domProps:{value:e.reportedMapCenter.lng},on:{change:[function(t){e.$set(e.reportedMapCenter,"lng",e._n(t.target.value))},e.sync],blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"flex-container"},[n("div",[n("gmap-map",{ref:"map",staticClass:"map-container",attrs:{center:e.mapCenter,zoom:12},on:{center_changed:e.updateCenter,idle:e.sync}})],1),e._v(" "),n("div",[n("gmap-street-view-panorama",{ref:"pano",staticClass:"map-container",attrs:{position:e.mapCenter,pov:e.pov},on:{position_changed:e.updateCenter}})],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("You can pan around this map, and the center is updated.")]),this._v(" "),t("li",[this._v("When you edit the lat/lng the map center is updated")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("small",[t("strong",[this._v("Lat:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("small",[t("strong",[this._v("Lng:")])])}],!1,null,"148c83fb",null);t.default=i.exports}}]);