(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{394:function(e,t,n){"use strict";n.r(t);var a={name:"eg-basic-marker-shape",data:function(){return{center:{lat:10,lng:10},markers:[{position:{lat:10,lng:10}},{position:{lat:11,lng:11}}],shape:{coords:[10,10,10,15,15,15,15,10],type:"poly"}}}},r=n(10),i=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Only the dark dots in the middle of the marker are clickable")]),e._v(" "),n("gmap-map",{staticStyle:{width:"100%",height:"500px"},attrs:{center:e.center,zoom:7}},e._l(e.markers,(function(t){return n("gmap-marker",{attrs:{position:t.position,clickable:!0,draggable:!0,shape:e.shape},on:{click:function(n){e.center=t.position}}})})),1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);