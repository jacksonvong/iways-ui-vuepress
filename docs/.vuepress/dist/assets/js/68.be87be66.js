(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{535:function(e,t,a){"use strict";a.r(t);var l=a(379),n={name:"Manfbrand",data:function(){return{value:[],texts:[],selectedFilter:1,showLetter:!1,data:[]}},mounted:function(){this.data=l.a[0]},methods:{handleFilterChange:function(e,t){this.selectedFilter=e,1===e?(this.showLetter=!1,this.data=l.a[0]):(this.showLetter=!0,this.data=l.a[1])},handleChange:function(e,t){console.log("value",e,t),this.value=e,this.texts=t},reset:function(){console.log("reset"),this.value=[]}}},s=a(0),i=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("iw-submodel",{staticStyle:{width:"110px"},attrs:{data:e.data,multiple:!1,"show-search":!0,"show-letter":e.showLetter,filters:[{key:1,value:"细分市场"},{key:2,value:"品牌"}],"selected-filter":e.selectedFilter,title:"车型",size:"mini",placement:"bottomLeft"},on:{filterChange:e.handleFilterChange,change:e.handleChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),a("iw-button",{attrs:{size:"mini"},on:{click:e.reset}},[e._v("重置")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);