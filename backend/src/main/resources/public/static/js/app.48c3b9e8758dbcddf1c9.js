webpackJsonp([1],{"1/oy":function(t,n){},"9M+g":function(t,n){},GfHa:function(t,n){},Id91:function(t,n){},Jmt5:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")({name:"App"},r,!1,function(t){e("s347")},null,null).exports,s=e("/ocq"),i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mb-5"},[e("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),e("b-navbar-brand",{attrs:{to:{name:"navbar"}}},[t._v("AccountApp")]),t._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"#"}},[t._v("Dashboard")])],1),t._v(" "),e("b-navbar-nav",[e("b-nav-item-dropdown",{attrs:{text:"Account",right:""}},[e("b-dropdown-item",{attrs:{to:{name:"view"}}},[t._v("Get Accounts")]),t._v(" "),e("b-dropdown-item",{attrs:{href:"#"}},[t._v("Add Account")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var u=e("VU/8")({name:"navbar"},i,!1,function(t){e("Q8G1")},"data-v-61500b53",null).exports,c=e("mtWM"),l=e.n(c);window.onload=function(){var t=this;l.a.get("/backend/all").then(function(n){t.items=n.data}).catch(function(n){t.errors.push(n)})};var f={name:"view",components:{navbar:u},data:function(){return{items:items}}},p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("navbar"),this._v(" "),n("b-table",{attrs:{striped:"",hover:"",outlined:"",dark:"",items:this.items,onl:""}})],1)},staticRenderFns:[]};var m=e("VU/8")(f,p,!1,function(t){e("RGC/")},"data-v-3ce08e0a",null).exports,v={name:"add",components:{navbar:u},data:function(){return{form:{fn:"",ln:"",an:""},thisresponse:""}},methods:{onSubmit:function(t){var n=this;t.preventDefault(),l.a.post("/backend/add",{firstname:this.form.fn,lastname:this.form.ln,accountno:this.form.an}).then(function(t){n.thisresponse=t}).catch(function(t){n.errors.push(t)})},onReset:function(t){t.preventDefault(),this.form.fn="",this.form.ln="",this.form.an=""}}},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("navbar"),t._v(" "),e("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[e("b-form-group",{attrs:{horizontal:"",id:"InputGroup1",label:"First Name:","label-for":"Input1"}},[e("b-form-input",{staticClass:"w-50",attrs:{id:"Input1",type:"text",required:"",placeholder:"Enter first name"},model:{value:t.form.fn,callback:function(n){t.$set(t.form,"fn",n)},expression:"form.fn"}})],1),t._v(" "),e("b-form-group",{attrs:{horizontal:"",id:"InputGroup2",label:"Last Name:","label-for":"Input2"}},[e("b-form-input",{staticClass:"w-50",attrs:{id:"Input2",type:"text",required:"",placeholder:"Enter last name"},model:{value:t.form.ln,callback:function(n){t.$set(t.form,"ln",n)},expression:"form.ln"}})],1),t._v(" "),e("b-form-group",{attrs:{horizontal:"",id:"InputGroup3",label:"Account No:","label-for":"Input3"}},[e("b-form-input",{staticClass:"w-50",attrs:{id:"Input3",type:"text",required:"",placeholder:"Enter Account No"},model:{value:t.form.an,callback:function(n){t.$set(t.form,"an",n)},expression:"form.an"}})],1),t._v(" "),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1),t._v(" "),e("h2",[t._v(t._s(t.thisresponse))])],1)},staticRenderFns:[]};var b=e("VU/8")(v,d,!1,function(t){e("do0q")},"data-v-68bc337e",null).exports;a.a.use(s.a);var h=new s.a({routes:[{path:"/",name:"navbar",component:u},{path:"/view",name:"view",component:m},{path:"/add",name:"add",component:b}]}),_=e("e6fC");e("Jmt5"),e("9M+g");a.a.config.productionTip=!1,a.a.use(_.a),new a.a({el:"#app",router:h,components:{App:o},template:"<App/>"})},Q8G1:function(t,n){},"RGC/":function(t,n){},do0q:function(t,n){},s347:function(t,n){},zj2Q:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.48c3b9e8758dbcddf1c9.js.map