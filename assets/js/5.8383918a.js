(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{345:function(t,n,e){},381:function(t,n,e){"use strict";var i=e(345);e.n(i).a},397:function(t,n,e){"use strict";e.r(n);var i={name:"eg-map-center",data:function(){return{t2:{changingZoom:12,changingCenter:{lat:1.38,lng:103.8}},t3:{changingZoom:12,changingCenter:{lat:1.38,lng:103.8},changingWidth:200,changingHeight:200,i:0}}},computed:{changingSize:function(){return{width:this.t3.changingWidth+"px",height:this.t3.changingHeight+"px"}}},methods:{changeCenter:function(){this.t2.changingCenter={lat:1.38+.3*Math.random(),lng:103.8+.1*Math.random()},this.t3.changingCenter={lat:1.38+.3*Math.random(),lng:103.8+.1*Math.random()}},changeZoom:function(){this.t2.changingZoom=Math.floor(5+10*Math.random()),this.t3.changingZoom=Math.floor(5+10*Math.random())},changeSize:function(){var t=this;this.t3.i=(this.i+1)%2,this.t3.changingWidth=200+300*this.i,this.t3.changingHeight=200+150*Math.random(),this.$nextTick((function(){t.$refs.resizeMap1.resize(),t.$refs.resizeMap2.resizePreserveCenter()}))}}},a=(e(381),e(10)),s=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{attrs:{id:"test1"}},[e("h2",[t._v("Test 1")]),t._v(" "),t._m(0),t._v(" "),e("br"),e("br"),t._v(" "),e("gmap-map",{staticClass:"map-container",attrs:{center:{lat:1.38,lng:103.8},zoom:12}})],1),t._v(" "),e("div",{attrs:{id:"test2"}},[e("h2",[t._v("Test 2")]),t._v(" "),t._m(1),t._v(" "),e("br"),t._v(" "),e("button",{on:{click:t.changeCenter}},[t._v("Change Center")]),t._v(" \n    "),e("button",{on:{click:t.changeZoom}},[t._v("Change Zoom")]),t._v(" "),e("br"),e("br"),t._v(" "),e("gmap-map",{staticClass:"map-container",attrs:{center:t.t2.changingCenter,zoom:t.t2.changingZoom}})],1),t._v(" "),e("div",{attrs:{id:"test3"}},[e("h2",[t._v("Test 3")]),t._v(" "),t._m(2),t._v(" "),e("br"),t._v(" "),t._m(3),t._v(" "),e("br"),t._v(" "),e("button",{on:{click:t.changeSize}},[t._v("Change Size")]),t._v(" "),e("br"),e("br"),t._v(" "),e("div",{staticClass:"flex-test3-container"},[e("div",[t._m(4),t._v(" "),e("gmap-map",{ref:"resizeMap1",staticClass:"map-container",style:t.changingSize,attrs:{center:t.t3.changingCenter,zoom:t.t3.changingZoom}})],1),t._v(" "),e("div",[t._m(5),t._v(" "),e("gmap-map",{ref:"resizeMap2",staticClass:"map-container",style:t.changingSize,attrs:{center:t.t3.changingCenter,zoom:t.t3.changingZoom}})],1)])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("small",[n("strong",[this._v("Passes if:")]),this._v(" You can pan around this map without it being snapped back to the center")])},function(){var t=this.$createElement,n=this._self._c||t;return n("small",[n("strong",[this._v("Passes if:")]),this._v(" Clicking the button changes the center")])},function(){var t=this.$createElement,n=this._self._c||t;return n("small",[n("strong",[this._v("Passes if:")]),this._v(" Resize of (1) is artefact-free.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("small",[n("strong",[this._v("Passes if:")]),this._v(" Resize of (2) preserves the center")])},function(){var t=this.$createElement,n=this._self._c||t;return n("small",[n("strong",[this._v("1")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("small",[n("strong",[this._v("2")])])}],!1,null,"4154b32c",null);n.default=s.exports}}]);