webpackJsonp([0],{"4gTt":function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var u=l("cwO6");a.default={name:"Segment",data:function(){return{value:[],texts:[],valueTab:0,data:[]}},mounted:function(){this.data=u.data},methods:{handleChange:function(e,a){console.log("value",e,a),this.value=e,this.texts=a}}}},avPu:function(e,a){},cwO6:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.data=[{key:-1,value:"整体市场",children:[{key:1001,value:"微型轿车",children:[{key:2001,value:"A00"}]},{key:1002,value:"小型轿车",children:[{key:2002,value:"A0-L"},{key:2003,value:"A0-H"}]},{key:1003,value:"紧凑型轿车",children:[{key:2004,value:"A-L"},{key:2005,value:"A-M"},{key:2006,value:"A-H"},{key:2007,value:"A-S"}]},{key:1004,value:"中型轿车",children:[{key:2008,value:"B-L"},{key:2009,value:"B-M"},{key:2010,value:"B-H"}]},{key:1005,value:"中大型轿车",children:[{key:2011,value:"C-L"},{key:2012,value:"C-H"}]},{key:1006,value:"大型轿车",children:[{key:2013,value:"D"}]},{key:1007,value:"小型SUV",children:[{key:2014,value:"A0-SUV-L"},{key:2015,value:"A0-SUV-H"}]},{key:1008,value:"紧凑型SUV",children:[{key:2016,value:"A-SUV-L"},{key:2017,value:"A-SUV-M"},{key:2018,value:"A-SUV-H"}]},{key:1009,value:"中型SUV",children:[{key:2019,value:"B-SUV-L"},{key:2020,value:"B-SUV-M"},{key:2021,value:"B-SUV-H"}]},{key:1010,value:"中大型SUV",children:[{key:2022,value:"C-SUV-L"},{key:2023,value:"C-SUV-H"}]},{key:1011,value:"大型SUV",children:[{key:2024,value:"D-SUV"}]},{key:1012,value:"紧凑型MPV",children:[{key:2025,value:"A-MPV-L"},{key:2026,value:"A-MPV-H"}]},{key:1013,value:"中大型MPV",children:[{key:2027,value:"B-MPV-L"},{key:2028,value:"B-MPV-M"},{key:2029,value:"B-MPV-H"}]},{key:1014,value:"跑车",children:[{key:2030,value:"跑车"}]}]}]},emyW:function(e,a,l){"use strict";var u={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",[l("iw-cascader",{attrs:{texts:e.texts,data:e.data,"show-check-all":!0,"select-on-leaf":!1,"column-name":["level0","level1","level2"],title:"细分市场选择",placement:"bottom-start",size:"small"},on:{change:e.handleChange},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)},staticRenderFns:[]};a.a=u},uauh:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var u=l("4gTt"),t=l.n(u);for(var n in u)"default"!==n&&function(e){l.d(a,e,function(){return u[e]})}(n);var v=l("emyW");var c=function(e){l("avPu")},y=l("C7Lr")(t.a,v.a,!1,c,null,null);a.default=y.exports}});