(function(t){function e(e){for(var n,c,i=e[0],l=e[1],u=e[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);s&&s(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var s=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"3f3b":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("4de4"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("2f62");n["default"].use(a["a"]);var o=new a["a"].Store({state:{products:[{id:1,name:"iPhone X",category:"Phone",brand:"Apple"},{id:2,name:"iPhone XR",category:"Phone",brand:"Apple"},{id:3,name:"iPad",category:"Tablet",brand:"Apple"},{id:4,name:"Galaxy Tab A",category:"Tablet",brand:"Samsung"},{id:5,name:"iPad Pro 11",category:"Tablet",brand:"Apple"},{id:6,name:"iPhone 11",category:"Phone",brand:"Apple"},{id:7,name:"Galaxy Tab S4",category:"Tablet",brand:"Samsung"},{id:8,name:"iPhone 11 Pro Max",category:"Phone",brand:"Apple"},{id:9,name:"Galaxy A50",category:"Phone",brand:"Samsung"},{id:10,name:"Redmi Note 7",category:"Phone",brand:"Xiaomi"},{id:14,name:"Redmi Note 6 Pro",category:"Phone",brand:"Xiaomi"},{id:15,name:"Reno 2",category:"Phone",brand:"Oppo"},{id:16,name:"MediaPad M5 Lite",category:"Tablet",brand:"Xiaomi"},{id:17,name:"Macbook Air",category:"Notebook",brand:"Apple"}]},getters:{products:function(t){return t.products},getProductByID:function(t){return function(e){return t.products.filter((function(t){return t.id==e}))}}},mutations:{},actions:{}}),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],l={name:"app",data:function(){return{}}},u=l,s=(r("034f"),r("2877")),d=Object(s["a"])(u,c,i,!1,null,null,null),f=d.exports,p=r("b2d6"),b=r.n(p),h=r("4897"),g=r.n(h),y=(r("377f"),r("5c96")),m=r.n(y);g.a.use(b.a),n["default"].use(m.a,{locale:g.a});var v=r("8c4f"),O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Form"),r("ProductList")],1)},P=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ElCard",{staticClass:"table"},[r("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t._f("productFilter")(t.products,t.brand,t.category),"highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[r("el-table-column",{attrs:{property:"id",label:"id",width:"50"}}),r("el-table-column",{attrs:{type:"id",width:"25%"}}),r("el-table-column",{staticStyle:{width:"25%"},attrs:{property:"name",label:"Name"}}),r("el-table-column",{staticStyle:{width:"25%"},attrs:{property:"category",label:"Category"}}),r("el-table-column",{staticStyle:{width:"25%"},attrs:{property:"brand",label:"Brand"}})],1),r("el-alert",{attrs:{title:"Всего на странице отображено: ",type:"info",center:"",closable:!1}},[t._v(" "+t._s(this.listLength+" "+t.productLetter)+" ")])],1)},w=[],_=(r("a4d3"),r("4160"),r("a630"),r("e439"),r("dbb4"),r("b64b"),r("3ca3"),r("159b"),r("ade3"));function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){Object(_["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var C={data:function(){return{category:"",brand:"",payload:"",listLength:null}},created:function(){var t=this;Y.$on("setFilter",(function(e){t.brand=e.brand,t.category=e.category}))},mounted:function(){this.getLengthListProducts()},updated:function(){this.getLengthListProducts()},methods:{handleCurrentChange:function(t){this.$router.push("/products/".concat(t.id)),this.currentRow=t.id},getLengthListProducts:function(){this.listLength=Array.from(document.getElementsByClassName("el-table__row")).length}},computed:S({},Object(a["b"])(["products"]),{productLetter:function(){var t;return 1==this.listLength&&(t=" продукт"),this.listLength>1&&this.listLength<=4&&(t=" продукта"),this.listLength>=5&&(t=" продуктов"),t}})},x=C,k=(r("defe"),Object(s["a"])(x,j,w,!1,null,"38009543",null)),E=k.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ElCard",{staticClass:"form-card"},[r("el-select",{attrs:{placeholder:"Select brand"},on:{change:t.filterList},model:{value:t.brand,callback:function(e){t.brand=e},expression:"brand"}},t._l(t.filterBrand,(function(t){return r("el-option",{key:t.id,attrs:{label:t,value:t}})})),1),r("el-select",{attrs:{placeholder:"Select category"},on:{change:t.filterList},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}},t._l(t.filterCategory,(function(t){return r("el-option",{key:t.id,attrs:{label:t,value:t}})})),1),r("el-button",{attrs:{size:"small"},on:{click:t.clearFilter}},[t._v("Clear filter")])],1)},A=[];r("caad"),r("d81d");function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function $(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){Object(_["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var F={name:"Form",data:function(){return{brand:"",category:""}},computed:$({},Object(a["b"])(["products"]),{filterBrand:function(){var t=[];return this.products.map((function(e){t.includes(e.brand)||t.push(e.brand)})),t},filterCategory:function(){var t=[];return this.products.map((function(e){t.includes(e.category)||t.push(e.category)})),t}}),methods:{clearFilter:function(){this.brand="",this.category="",this.filterList()},filterList:function(){var t={brand:this.brand,category:this.category};Y.$emit("setFilter",t)}}},B=F,M=(r("755e"),Object(s["a"])(B,T,A,!1,null,"1b27d28a",null)),N=M.exports,R={name:"home",components:{ProductList:E,Form:N}},X=R,G=(r("8b71"),Object(s["a"])(X,O,P,!1,null,null,null)),H=G.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("el-card",{staticClass:"form-card"},[r("div",{staticClass:"clearfix flex",attrs:{slot:"header"},slot:"header"},[r("h3",[t._v("Name: "+t._s(t.product.name))]),r("el-button",{staticClass:"prevbtn",attrs:{type:"primary"},on:{click:t.goToHomePage}},[r("i",{staticClass:"el-icon-arrow-left el-icon-left"}),t._v(" Home Page ")])],1),r("div",{staticClass:"item"},[t._v(" Category: "+t._s(t.product.category)+" ")]),r("div",{staticClass:"item"},[t._v(" Brand: "+t._s(t.product.brand)+" ")])]):t._e()},J=[],z=r("3835"),q={name:"Product",props:{id:String},data:function(){return{product:null}},created:function(){var t=this.$store.getters.getProductByID(this.id),e=Object(z["a"])(t,1),r=Object.assign({},e[0]);this.product=r},methods:{goToHomePage:function(){this.$router.push("/")}},beforeDestroy:function(){this.product=null}},K=q,Q=(r("e903"),Object(s["a"])(K,I,J,!1,null,null,null)),U=Q.exports;n["default"].use(v["a"]);var V=new v["a"]({mode:"history",routes:[{path:"/",name:"home",component:H},{path:"/products/:id",name:"product",props:!0,component:U},{path:"*",beforeEnter:function(t,e,r){r("/")}}]});function W(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return""===r&&""!==e?t.filter((function(t){return t.brand===e})):""!==r&&""==e?t.filter((function(t){return t.category===r})):""!==r&&""!==e?t.filter((function(t){return t.brand===e&&t.category===r})):""===r&&""===e?t:void 0}r.d(e,"eventBus",(function(){return Y})),n["default"].config.productionTip=!1,n["default"].filter("productFilter",W);var Y=new n["default"];new n["default"]({router:V,store:o,render:function(t){return t(f)}}).$mount("#app")},"755e":function(t,e,r){"use strict";var n=r("d5c2"),a=r.n(n);a.a},"85ec":function(t,e,r){},"88d7":function(t,e,r){},"8b71":function(t,e,r){"use strict";var n=r("88d7"),a=r.n(n);a.a},d5c2:function(t,e,r){},dd8d:function(t,e,r){},defe:function(t,e,r){"use strict";var n=r("dd8d"),a=r.n(n);a.a},e903:function(t,e,r){"use strict";var n=r("3f3b"),a=r.n(n);a.a}});
//# sourceMappingURL=app.c19ffedb.js.map