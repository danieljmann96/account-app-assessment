webpackJsonp([1],{"1/oy":function(t,n){},"9M+g":function(t,n){},GfHa:function(t,n){},ITGm:function(t,n){},Id91:function(t,n){},Jmt5:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")({name:"App"},r,!1,function(t){e("s347")},null,null).exports,s=e("/ocq"),i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mb-5"},[e("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),e("b-navbar-brand",{attrs:{to:{name:"navbar"}}},[t._v("AccountApp")]),t._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"#"}},[t._v("Dashboard")])],1),t._v(" "),e("b-navbar-nav",[e("b-nav-item-dropdown",{attrs:{text:"Account",right:""}},[e("b-dropdown-item",{attrs:{to:{name:"view"}}},[t._v("Get Accounts")]),t._v(" "),e("b-dropdown-item",{attrs:{to:{name:"add"}}},[t._v("Add Account")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=e("VU/8")({name:"navbar"},i,!1,function(t){e("ITGm")},"data-v-0f0db3de",null).exports,u=e("mtWM"),p=e.n(u);window.onload=function(){var t=this;p.a.get("/backend/all").then(function(n){t.items=n.data}).catch(function(n){t.errors.push(n)})};var l={name:"view",components:{navbar:c},data:function(){return{items:items}}},m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("navbar"),this._v(" "),n("b-table",{attrs:{striped:"",hover:"",outlined:"",dark:"",items:this.items,onl:""}})],1)},staticRenderFns:[]};var d=e("VU/8")(l,m,!1,function(t){e("eRvJ")},"data-v-15d496b3",null).exports,f={name:"add",components:{navbar:c},data:function(){return{form:{fn:"",ln:"",an:""},thisresponse:""}},methods:{onSubmit:function(t){var n=this;t.preventDefault();var e=new URLSearchParams;e.append("firstname",this.form.fn),e.append("lastname",this.form.ln),e.append("accountno",this.form.an),p.a.post("/backend/add",e).then(function(t){n.thisresponse=t.data}).catch(function(t){n.errors.push(t)})},onReset:function(t){t.preventDefault(),this.form.fn="",this.form.ln="",this.form.an="",this.thisresponse=""}}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("navbar"),t._v(" "),e("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[e("b-form-group",{attrs:{horizontal:"",id:"InputGroup1",label:"First Name:","label-for":"Input1"}},[e("b-form-input",{staticClass:"w-50",attrs:{id:"Input1",type:"text",required:"",placeholder:"Enter first name"},model:{value:t.form.fn,callback:function(n){t.$set(t.form,"fn",n)},expression:"form.fn"}})],1),t._v(" "),e("b-form-group",{attrs:{horizontal:"",id:"InputGroup2",label:"Last Name:","label-for":"Input2"}},[e("b-form-input",{staticClass:"w-50",attrs:{id:"Input2",type:"text",required:"",placeholder:"Enter last name"},model:{value:t.form.ln,callback:function(n){t.$set(t.form,"ln",n)},expression:"form.ln"}})],1),t._v(" "),e("b-form-group",{attrs:{horizontal:"",id:"InputGroup3",label:"Account No:","label-for":"Input3"}},[e("b-form-input",{staticClass:"w-50",attrs:{id:"Input3",type:"text",required:"",placeholder:"Enter Account No"},model:{value:t.form.an,callback:function(n){t.$set(t.form,"an",n)},expression:"form.an"}})],1),t._v(" "),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),e("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1),t._v(" "),e("h2",[t._v(t._s(t.thisresponse))])],1)},staticRenderFns:[]};var b=e("VU/8")(f,v,!1,function(t){e("trwS")},"data-v-5732705d",null).exports;a.a.use(s.a);var h=new s.a({routes:[{path:"/",name:"navbar",component:c},{path:"/view",name:"view",component:d},{path:"/add",name:"add",component:b}]}),_=e("e6fC"),w=(e("Jmt5"),e("9M+g"),e("U0v6"));a.a.config.productionTip=!1,a.a.use(_.a),a.a.component("font-awesome-icon",w.FontAwesomeIcon),new a.a({el:"#app",router:h,components:{App:o},template:"<App/>"})},eRvJ:function(t,n){},s347:function(t,n){},trwS:function(t,n){},zj2Q:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.d748a09f65873874b839.js.map