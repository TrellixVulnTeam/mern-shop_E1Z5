(this.webpackJsonpmycms=this.webpackJsonpmycms||[]).push([[0],{107:function(e,t,r){},108:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r(24),n=r.n(c),s=r(7),i=r(40),o=r(67),l="PRODUCTS_FETCH",j="PRODUCTS_SUCCESS",d="PRODUCTS_FAILURE",u="PRODUCT_DETAILS_FETCH",p="PRODUCT_DETAILS_SUCCESS",h="PRODUCT_DETAILS_FAILURE",b=r(13),O="USER_LOG_REQUEST",x="USER_LOG_SUCCESS",m="USER_LOG_FAILURE",f="USER_LOG_LOGOUT",g="USER_REG_REQUEST",y="USER_REG_SUCCESS",v="USER_REG_FAILURE",S="USER_PROFILE_REQUEST",I="USER_PROFILE_SUCCESS",E="USER_PROFILE_FAILURE",C="USER_UPDATE_REQUEST",R="USER_UPDATE_SUCCESS",w="USER_UPDATE_FAILURE",_=r(34),P="CART_ADD_ITEMS",A="CART_REMOVE_ITEMS",L="CART_SHIPPING_ADDRESS",U="CART_PAYMENT_METHOD",k=r(68),T="ORDER_REQUEST",D="ORDER_SUCCESS",N="ORDER_FAILURE",G="ORDER_DETAIL_REQUEST",M="ORDER_DETAIL_SUCCESS",F="ORDER_DETAIL_FAILURE",$="ORDER_PAY_REQUEST",q="ORDER_PAY_SUCCESS",J="ORDER_PAY_FAILURE",B="ORDER_PAY_RESET",Y="MY_ORDER_REQUEST",Q="MY_ORDER_SUCCESS",z="MY_ORDER_FAILURE",H="MY_ORDER_RESET",V=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,W=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],X=localStorage.getItem("shippingAdress")?JSON.parse(localStorage.getItem("shippingAdress")):{},K=localStorage.getItem("paymentMethod")?JSON.parse(localStorage.getItem("paymentMethod")):{},Z=Object(i.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return{loading:!0,products:t.payload};case j:return{loading:!1,products:t.payload};case d:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{},reviews:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{loading:!0,product:t.payload};case p:return{loading:!1,product:t.payload};case h:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:var r=t.payload,a=e.cartItems.find((function(e){return e.product===r.product}));return a?Object(b.a)(Object(b.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===a.product?r:e}))}):Object(b.a)(Object(b.a)({},e),{},{cartItems:[].concat(Object(_.a)(e.cartItems),[r])});case A:return Object(b.a)(Object(b.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case L:return Object(b.a)(Object(b.a)({},e),{},{shippingAdress:t.payload});case U:return Object(b.a)(Object(b.a)({},e),{},{paymentMethod:t.payload});default:return e}},userReg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{loading:!0};case y:return{loading:!1,userInfo:t.payload};case v:return{error:t.payload};default:return e}},userLog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0};case x:return{loading:!1,userInfo:t.payload};case m:return{loading:!1,error:t.payload};case f:return{};default:return e}},userProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case I:return{loading:!1,user:t.payload};case E:return{loading:!1,error:t.payload};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{loading:!0};case R:return{loading:!1,success:!0,userInfo:t.payload};case w:return{loading:!1,error:t.payload};default:return e}},createOrder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case D:return{loading:!1,success:!0,order:t.payload};case N:return{loading:!1,error:t.payload};default:return e}},orderDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orderItems:[],loading:!0,shippingAdress:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case M:return{loading:!1,order:t.payload};case F:return{loading:!1,error:t.payload};default:return e}},orderPay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return{loading:!0};case q:return{loading:!1,success:!0};case J:return{loading:!1,error:t.payload};case B:return{};default:return e}},myOrderList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{myOrder:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{loading:!0};case Q:return{loading:!1,myOrder:t.payload};case z:return{loading:!1,error:t.payload};case H:return{myOrder:[]};default:return e}}}),ee={cart:{cartItems:W,shippingAdress:X,paymentMethod:K},userLog:{userInfo:V}},te=[o.a],re=Object(i.createStore)(Z,ee,Object(k.composeWithDevTools)(i.applyMiddleware.apply(void 0,te))),ae=r(11),ce=r(10),ne=(r(82),r(113)),se=r(120),ie=r(48),oe=r(122),le=r(118),je=r(8),de=r.n(je),ue=r(15),pe=r(16),he=r.n(pe),be=r(1),Oe=function(){var e=Object(s.c)((function(e){return e.userLog})).userInfo,t=Object(s.b)();return Object(be.jsx)(se.a,{bg:"dark",expand:"lg",variant:"dark",collapseOnSelect:!0,children:Object(be.jsxs)(ne.a,{children:[Object(be.jsx)(ie.a,{as:ae.b,to:"/",children:Object(be.jsx)(se.a.Brand,{children:"E-shop"})}),Object(be.jsx)(se.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(be.jsxs)(se.a.Collapse,{id:"basic-navbar-nav",children:[Object(be.jsx)(ie.a,{as:ae.b,to:"/cart",children:"Cart"}),Object(be.jsx)(oe.a,{className:"mr-auto ml-auto",children:e?Object(be.jsxs)(le.a,{title:e.name,children:[Object(be.jsx)(le.a.Item,{children:Object(be.jsx)(ie.a,{as:ae.b,to:"/profile",children:"Profile"})}),Object(be.jsx)(le.a.Item,{onClick:function(){t((function(e){localStorage.removeItem("userInfo"),e({type:f})}))},children:"logout"})]}):Object(be.jsx)(ie.a,{as:ae.b,to:"/login",children:Object(be.jsx)("i",{className:"fas fa-user",children:"\xa0 Signin"})})})]})]})})},xe=r(114),me=r(72),fe=function(){return Object(be.jsx)("footer",{children:Object(be.jsx)(ne.a,{children:Object(be.jsx)(xe.a,{children:Object(be.jsx)(me.a,{md:12,children:Object(be.jsx)("span",{children:Object(be.jsx)("p",{className:"text-center",children:"Copyright@ 2020"})})})})})})},ge=r(123),ye=function(e){var t=e.rating;e.reviews;return Object(be.jsxs)("div",{children:[Object(be.jsx)("span",{style:{color:"yellow"},children:Object(be.jsx)("i",{className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half":"fas fa-star"})}),Object(be.jsx)("span",{style:{color:"yellow"},children:Object(be.jsx)("i",{className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half":"fas fa-star"})}),Object(be.jsx)("span",{style:{color:"yellow"},children:Object(be.jsx)("i",{className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half":"fas fa-star"})}),Object(be.jsx)("span",{style:{color:"yellow"},children:Object(be.jsx)("i",{className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half":"fas fa-star"})}),Object(be.jsx)("span",{style:{color:"yellow"},children:Object(be.jsx)("i",{className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half":"fas fa-star"})})]})},ve=function(e){var t=e.product;return Object(be.jsx)("div",{children:Object(be.jsxs)(ge.a,{className:"m-2 p-3 rounded",style:{width:"18rem",height:"25rem"},children:[Object(be.jsx)(ie.a,{as:ae.b,to:"/product/".concat(t._id),children:Object(be.jsx)(ge.a.Img,{src:t.image,variant:"top",style:{width:"15rem",height:"11rem"}})}),Object(be.jsx)(ie.a,{as:ae.b,to:"/product/".concat(t._id),children:Object(be.jsxs)(ge.a.Body,{children:[Object(be.jsx)(ge.a.Title,{as:"div",children:Object(be.jsx)("strong",{children:t.title})}),Object(be.jsx)(ge.a.Title,{as:"div",children:Object(be.jsx)(ye,{rating:t.rating,reviews:t.reviews})}),Object(be.jsxs)(ge.a.Text,{children:["$ ",t.price]})]})})]})})},Se=r(115),Ie=function(){return Object(be.jsx)("div",{className:"text-center mt-5",children:Object(be.jsx)(Se.a,{animation:"border"})})},Ee=r(121),Ce=function(e){var t=e.variant,r=e.message;return Object(be.jsx)(Ee.a,{variant:t,children:r})},Re=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.productList})),r=t.loading,c=t.error,n=t.products;return Object(a.useEffect)((function(){e(function(){var e=Object(ue.a)(de.a.mark((function e(t){var r,a;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:l}),e.next=4,he.a.get("/products");case 4:r=e.sent,a=r.data,t({type:j,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:d,payload:e.t0.response&&e.t0.response.data?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(be.jsx)("div",{children:r?Object(be.jsx)(Ie,{}):c?Object(be.jsx)(Ce,{variant:"danger",message:c}):Object(be.jsx)(xe.a,{children:n.map((function(e){return Object(be.jsx)(me.a,{sm:3,children:Object(be.jsx)(ve,{product:e})},e._id)}))})})},we=r(9),_e=r(116),Pe=r(73),Ae=r(119),Le=r(71),Ue=function(e){var t=e.match,r=e.history,c=Object(s.b)(),n=Object(s.c)((function(e){return e.productDetails})),i=n.loading,o=n.error,l=n.product;Object(a.useEffect)((function(){var e;c((e=t.params.id,function(){var t=Object(ue.a)(de.a.mark((function t(r){var a,c;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:u}),t.next=4,he.a.get("/products/product/".concat(e));case 4:a=t.sent,c=a.data,r({type:p,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:h,payload:t.t0.response&&t.t0.response.data?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[t,c]);var j=Object(a.useState)(1),d=Object(we.a)(j,2),b=d[0],O=d[1];return Object(be.jsx)("div",{children:i?Object(be.jsx)(Ie,{}):o?Object(be.jsx)(Ce,{variant:"danger",message:o}):Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{md:6,className:"mt-3",children:Object(be.jsx)(_e.a,{style:{width:"75%"},fluid:!0,src:l.image})}),Object(be.jsxs)(me.a,{md:3,children:[Object(be.jsxs)(Pe.a,{className:"my-3 text-light",children:[Object(be.jsx)("h3",{children:l.title}),Object(be.jsx)(ye,{rating:l.rating})]}),Object(be.jsx)(Pe.a,{className:"text-light",children:l.description}),Object(be.jsxs)(Pe.a,{className:"text-light",children:["Price: ",l.price," $"]})]}),Object(be.jsxs)(me.a,{children:[Object(be.jsxs)(Pe.a,{className:"my-5 text-light",children:["Status: ",l.countInStock," In Stock"]}),l.countInStock>0&&Object(be.jsx)(Pe.a,{children:Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{children:"QTY"}),Object(be.jsx)(Ae.a.Control,{as:"select",value:b,onChange:function(e){return O(Number(e.target.value))},children:Object(_.a)(Array(l.countInStock).keys()).map((function(e){return Object(be.jsx)("option",{style:{color:"black"},value:e+1,children:e+1},e+1)}))})]})}),Object(be.jsx)(Pe.a,{children:Object(be.jsx)(Le.a,{type:"button",onClick:function(){r.push("/cart/".concat(t.params.id,"?qty=").concat(b))},children:"Add to Cart"})})]})]})})},ke=r(117),Te=function(e,t){return function(){var r=Object(ue.a)(de.a.mark((function r(a,c){var n,s;return de.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,he()("/products/product/".concat(e));case 2:n=r.sent,s=n.data,a({type:P,payload:{product:s._id,title:s.title,image:s.image,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(c().cart.cartItems));case 6:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},De=function(e){var t=e.match,r=e.location,c=e.history,n=t.params.id,i=r.search?Number(r.search.split("=")[1]):1,o=Object(s.b)();Object(a.useEffect)((function(){n&&o(Te(n,i))}),[o,i,n]);var l=Object(s.c)((function(e){return e.cart})).cartItems,j=function(e){o(function(e){return function(t,r){t({type:A,payload:e}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems))}}(e))};return Object(be.jsxs)(xe.a,{children:[Object(be.jsxs)(me.a,{md:8,children:[Object(be.jsx)("h2",{children:"Shopping Cart"}),0===l.length?Object(be.jsxs)("h5",{children:["your cart is empty!! ",Object(be.jsx)(ie.a,{as:ae.b,to:"/",children:"Go back"})]}):Object(be.jsx)(ke.a,{variant:"flush",children:l.map((function(e,t){return Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{md:2,children:Object(be.jsx)(_e.a,{src:e.image,fluid:!0,rounded:!0})}),Object(be.jsx)(me.a,{md:3,children:Object(be.jsx)(ae.b,{to:"/product/".concat(e.product),children:e.title})}),Object(be.jsx)(me.a,{md:2,children:e.price}),Object(be.jsx)(me.a,{md:2,children:Object(be.jsx)(Ae.a.Control,{as:"select",value:e.qty,onChange:function(t){return o(Te(e.product,Number(t.target.value)))},children:Object(_.a)(Array(e.countInStock).keys()).map((function(e){return Object(be.jsx)("option",{style:{color:"black"},value:e+1,children:e+1},e+1)}))})}),Object(be.jsx)(me.a,{md:2,children:Object(be.jsx)(Le.a,{type:"button",onClick:function(){return j(e.product)},children:Object(be.jsx)("i",{className:"fas fa-trash"})})})]},t)}))})]}),Object(be.jsxs)(me.a,{md:4,className:"mt-4",children:[Object(be.jsx)(ge.a,{children:Object(be.jsxs)(ke.a,{variant:"flush",children:[Object(be.jsx)(Pe.a,{children:Object(be.jsxs)("h2",{children:["Subtotal ( ",l.reduce((function(e,t){return e+t.qty}),0)," ) Items "]})}),Object(be.jsxs)(Pe.a,{children:["$",l.reduce((function(e,t){return e+t.qty*t.price}),0).toFixed(2)]})]})}),Object(be.jsx)(ge.a,{}),Object(be.jsx)(Le.a,{type:"button",onClick:function(){c.push("/login?redirect=shipping")},disabled:0===l.length,children:"Proceed Checkout"})]})]})},Ne=function(e){var t=e.children;return Object(be.jsx)(ne.a,{children:Object(be.jsx)(xe.a,{className:"justify-content-md-center",children:Object(be.jsx)(me.a,{xs:12,md:6,children:t})})})},Ge=function(e){var t=e.location,r=e.history,c=Object(a.useState)(""),n=Object(we.a)(c,2),i=n[0],o=n[1],l=Object(a.useState)(""),j=Object(we.a)(l,2),d=j[0],u=j[1],p=Object(a.useState)(""),h=Object(we.a)(p,2),b=h[0],O=h[1],m=Object(a.useState)(""),f=Object(we.a)(m,2),S=f[0],I=f[1],E=Object(a.useState)(""),C=Object(we.a)(E,2),R=C[0],w=C[1],_=t.search?t.search.split("=")[1]:"/",P=Object(s.b)(),A=Object(s.c)((function(e){return e.userReg})),L=A.loading,U=A.error,k=A.userInfo;Object(a.useEffect)((function(){k&&r.push(_)}),[r,k,_]);return Object(be.jsx)("div",{children:Object(be.jsxs)(Ne,{children:[Object(be.jsx)("h2",{children:"Register"}),U&&Object(be.jsx)("h2",{children:U}),L&&Object(be.jsx)("h2",{children:"Loading..."}),Object(be.jsxs)(Ae.a,{onSubmit:function(e){e.preventDefault(),b!==S&&w("password not matched!"),P(function(e,t,r){return function(){var a=Object(ue.a)(de.a.mark((function a(c){var n,s;return de.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c({type:g}),a.next=4,he.a.post("users/create",{name:e,email:t,password:r});case 4:n=a.sent,s=n.data,c({type:y,payload:s}),c({type:x,payload:s}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),c({type:v,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(i,d,b))},children:[Object(be.jsxs)(Ae.a.Group,{controlId:"name",children:[Object(be.jsx)(Ae.a.Label,{children:"Name "}),Object(be.jsx)(Ae.a.Control,{type:"text",placeholder:"your name",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(be.jsxs)(Ae.a.Group,{controlId:"email",children:[Object(be.jsx)(Ae.a.Label,{children:"Email "}),Object(be.jsx)(Ae.a.Control,{type:"email",placeholder:"email",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(be.jsxs)(Ae.a.Group,{controlId:"password",children:[Object(be.jsx)(Ae.a.Label,{children:"Password "}),Object(be.jsx)(Ae.a.Control,{type:"password",placeholder:"password",value:b,onChange:function(e){return O(e.target.value)}})]}),Object(be.jsxs)(Ae.a.Group,{controlId:"confirmpassword",children:[Object(be.jsx)(Ae.a.Label,{children:"Re-enter Password "}),Object(be.jsx)(Ae.a.Control,{type:"password",placeholder:"confirm password",value:S,onChange:function(e){return I(e.target.value)}}),R&&Object(be.jsx)("h5",{children:R})]}),Object(be.jsx)(Le.a,{type:"submit",children:"Register"})]}),Object(be.jsx)(xe.a,{children:Object(be.jsxs)(me.a,{children:["Already Registered User?",Object(be.jsx)(ae.b,{to:_?"login?redirect=".concat(_):"/login",children:"Login"})]})})]})})},Me=function(e){var t=e.location,r=e.history,c=Object(a.useState)(""),n=Object(we.a)(c,2),i=n[0],o=n[1],l=Object(a.useState)(""),j=Object(we.a)(l,2),d=j[0],u=j[1],p=t.search?t.search.split("=")[1]:"/",h=Object(s.b)(),b=Object(s.c)((function(e){return e.userLog})),f=b.loading,g=b.error,y=b.userInfo;Object(a.useEffect)((function(){y&&r.push(p)}),[r,y,p]);return console.log(d),Object(be.jsx)("div",{children:Object(be.jsxs)(Ne,{children:[Object(be.jsx)("h2",{children:"Sign In"}),g&&Object(be.jsx)("h2",{children:g}),f&&Object(be.jsx)("h2",{children:"Loading..."}),Object(be.jsxs)(Ae.a,{onSubmit:function(e){e.preventDefault(),h(function(e,t){return function(){var r=Object(ue.a)(de.a.mark((function r(a){var c,n,s;return de.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:O}),c={headers:{"Content-Type":"application/json"}},r.next=5,he.a.post("/users/login",{email:e,password:t},c);case 5:n=r.sent,s=n.data,a({type:x,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),a({type:m,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}(i,d))},children:[Object(be.jsxs)(Ae.a.Group,{controlId:"email",children:[Object(be.jsx)(Ae.a.Label,{children:"Email "}),Object(be.jsx)(Ae.a.Control,{type:"email",placeholder:"email",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(be.jsxs)(Ae.a.Group,{controlId:"password",children:[Object(be.jsx)(Ae.a.Label,{children:"Password "}),Object(be.jsx)(Ae.a.Control,{type:"password",placeholder:"password",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(be.jsx)(Le.a,{type:"submit",children:"Login"})]}),Object(be.jsx)(xe.a,{children:Object(be.jsxs)(me.a,{children:["New User ?",Object(be.jsx)(ae.b,{to:p?"register?redirect=".concat(p):"/register",children:"Register"})]})})]})})},Fe=function(e){var t=e.history,r=Object(a.useState)(""),c=Object(we.a)(r,2),n=c[0],i=c[1],o=Object(a.useState)(""),l=Object(we.a)(o,2),j=l[0],d=l[1],u=Object(a.useState)(""),p=Object(we.a)(u,2),h=p[0],b=p[1],O=Object(a.useState)(""),x=Object(we.a)(O,2),m=x[0],f=x[1],g=Object(a.useState)(""),y=Object(we.a)(g,2),v=y[0],_=y[1],P=Object(s.b)(),A=Object(s.c)((function(e){return e.userProfile})),L=A.loading,U=A.error,k=A.user,T=Object(s.c)((function(e){return e.userLog})).userInfo,D=Object(s.c)((function(e){return e.userUpdate})).success;console.log(D),Object(a.useEffect)((function(){T?k.name?(i(k.name),d(k.email)):(P(function(){var e=Object(ue.a)(de.a.mark((function e(t,r){var a,c,n,s,i;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:S}),a=r(),c=a.userLog.userInfo,n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},e.next=6,he.a.get("/users/profile/",n);case 6:s=e.sent,i=s.data,t({type:I,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:E,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}()),_("profile update successful!")):t.push("/login")}),[t,k,T,P]);return Object(be.jsx)("div",{children:Object(be.jsx)(ne.a,{children:Object(be.jsxs)(xe.a,{children:[Object(be.jsxs)(me.a,{md:3,children:[Object(be.jsx)("h2",{children:"Edit Profile"}),U&&Object(be.jsx)(Ce,{variant:"danger",message:U}),L&&Object(be.jsx)(Ie,{}),D&&Object(be.jsx)(Ce,{variant:"success",message:v}),Object(be.jsxs)(Ae.a,{onSubmit:function(e){e.preventDefault(),P(function(e){return function(){var t=Object(ue.a)(de.a.mark((function t(r,a){var c,n,s,i,o;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:C}),c=a(),n=c.userLog.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}},t.next=6,he.a.put("/users/profile",e,s);case 6:i=t.sent,o=i.data,r({type:R,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:w,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}({id:k._id,name:n,email:j,password:h}))},children:[Object(be.jsxs)(Ae.a.Group,{controlId:"name",children:[Object(be.jsx)(Ae.a.Label,{children:"Name "}),Object(be.jsx)(Ae.a.Control,{type:"text",placeholder:"your name",value:n,onChange:function(e){return i(e.target.value)}})]}),Object(be.jsxs)(Ae.a.Group,{controlId:"email",children:[Object(be.jsx)(Ae.a.Label,{children:"Email "}),Object(be.jsx)(Ae.a.Control,{type:"email",placeholder:"email",value:j,onChange:function(e){return d(e.target.value)}})]}),Object(be.jsxs)(Ae.a.Group,{controlId:"password",children:[Object(be.jsx)(Ae.a.Label,{children:"Password "}),Object(be.jsx)(Ae.a.Control,{type:"password",placeholder:"password",value:h,onChange:function(e){return b(e.target.value)}})]}),Object(be.jsxs)(Ae.a.Group,{controlId:"confirmpassword",children:[Object(be.jsx)(Ae.a.Label,{children:"Re-enter Password "}),Object(be.jsx)(Ae.a.Control,{type:"password",placeholder:"confirm password",value:m,onChange:function(e){return f(e.target.value)}})]}),Object(be.jsx)(Le.a,{type:"submit",children:"Update"})]})]}),Object(be.jsx)(me.a,{md:9,children:Object(be.jsx)("h2",{children:"My Orders"})})]})})})},$e=r(43),qe=function(e){var t=e.history,r=Object(s.b)(),c=Object(a.useState)([]),n=Object(we.a)(c,2),i=n[0],o=n[1];function l(e){o(Object(b.a)(Object(b.a)({},i),{},Object($e.a)({},e.target.name,e.target.value)))}return Object(be.jsx)(ne.a,{children:Object(be.jsxs)(xe.a,{children:[Object(be.jsxs)(me.a,{md:3,children:[Object(be.jsx)("h2",{children:"Shipping Adress"}),Object(be.jsxs)(Ae.a,{onSubmit:function(e){var a;e.preventDefault(),r((a=i,function(e){e({type:L,payload:a}),localStorage.setItem("shippingAdress",JSON.stringify(a))})),t.push("/payment")},children:[Object(be.jsxs)(Ae.a.Group,{controlId:"adress",children:[Object(be.jsx)(Ae.a.Label,{children:"Adress "}),Object(be.jsx)(Ae.a.Control,{type:"text",placeholder:"sussex road Bridge",name:"adress",onChange:l,required:!0})]}),Object(be.jsxs)(Ae.a.Group,{controlId:"city",children:[Object(be.jsx)(Ae.a.Label,{children:"City "}),Object(be.jsx)(Ae.a.Control,{type:"text",placeholder:"city",name:"city",onChange:l,required:!0})]}),Object(be.jsxs)(Ae.a.Group,{controlId:"postalcode",children:[Object(be.jsx)(Ae.a.Label,{children:"Postal-Code "}),Object(be.jsx)(Ae.a.Control,{type:"number",placeholder:"postalcode",name:"postalcode",onChange:l,required:!0})]}),Object(be.jsxs)(Ae.a.Group,{controlId:"country",children:[Object(be.jsx)(Ae.a.Label,{children:"Country "}),Object(be.jsx)(Ae.a.Control,{type:"text",placeholder:"country",name:"country",onChange:l,required:!0})]}),Object(be.jsx)(Le.a,{type:"submit",children:"Continue"})]})]}),Object(be.jsx)(me.a,{md:9,className:"px-3",children:Object(be.jsx)("h2",{children:"Suggested Products"})})]})})},Je=function(e){var t=e.history,r=Object(s.b)(),c=Object(s.c)((function(e){return e.cart})),n=Object(a.useState)("paypal"),i=Object(we.a)(n,2),o=i[0],l=i[1];return c.shippingAdress||t.push("/shipping"),Object(be.jsxs)("div",{children:[Object(be.jsx)("h1",{children:"Payment Method"}),Object(be.jsxs)(Ae.a,{onSubmit:function(e){var a;e.preventDefault(),r((a=o,function(e){e({type:U,payload:a}),localStorage.setItem("paymentMethod",JSON.stringify(a))})),t.push("/checkout")},children:[Object(be.jsxs)(Ae.a.Group,{children:[Object(be.jsx)(Ae.a.Label,{as:"legend",children:"Select a Payment Method"}),Object(be.jsx)(Ae.a.Check,{type:"checkbox",label:"Paypal",id:"paypal",value:o,name:"paymethod",onChange:function(e){return l(e.target.value)},checked:!0})]}),Object(be.jsx)(Le.a,{type:"submit",children:"Continue"})]})]})},Be=function(e){var t=e.history,r=Object(s.b)(),c=Object(s.c)((function(e){return e.cart})),n=c.shippingAdress,i=n.adress,o=n.city,l=n.postalcode,j=n.country,d=Object(s.c)((function(e){return e.createOrder})),u=d.order,p=d.success,h=d.error,b=function(e){return Math.round(100*e/100).toFixed(2)};return c.itemPrice=b(c.cartItems.reduce((function(e,t){return e+Number(t.price)*Number(t.qty)}),0)),c.shippingPrice=b(c.cartItems>100?0:5),c.taxPrice=b(.15*c.itemPrice),c.totalPrice=b(Number(c.itemPrice)+Number(c.shippingPrice)+Number(c.taxPrice)),Object(a.useEffect)((function(){p&&t.push("/order/".concat(u._id))}),[t,p]),Object(be.jsx)("div",{children:Object(be.jsxs)(xe.a,{children:[Object(be.jsxs)(me.a,{md:8,children:[Object(be.jsxs)(ke.a,{variant:"flush",children:[Object(be.jsxs)(ke.a.Item,{children:[Object(be.jsx)("h2",{children:"Shipping"}),Object(be.jsxs)("p",{children:[Object(be.jsx)("strong",{children:"Adress"}),i,", ",o,",  ",l,",  ",j]})]}),Object(be.jsxs)(ke.a.Item,{children:[Object(be.jsx)("h2",{children:"Payment Method"}),Object(be.jsx)("p",{children:Object(be.jsx)("strong",{children:c.paymentMethod})})]})]}),Object(be.jsxs)(ke.a,{variant:"flush",children:[Object(be.jsx)(ke.a.Item,{children:Object(be.jsx)("h2",{children:"Order Items"})}),0===c.cartItems.length?Object(be.jsx)("h3",{children:"your Order list is empty!"}):Object(be.jsx)(ke.a.Item,{children:c.cartItems.map((function(e,t){return Object(be.jsx)(ke.a.Item,{children:Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{md:1,children:Object(be.jsx)(_e.a,{src:e.image,alt:e.title,fluid:!0})}),Object(be.jsx)(me.a,{children:Object(be.jsx)(ae.b,{to:"/products/product/".concat(e.product),children:e.title})}),Object(be.jsxs)(me.a,{md:4,children:[e.qty," X $ ",e.price," = $ ",e.qty*e.price]})]})},t)}))})]})]}),Object(be.jsx)(me.a,{md:4,children:Object(be.jsx)(ge.a,{children:Object(be.jsxs)(ke.a,{variant:"flush",children:[Object(be.jsx)(ke.a.Item,{children:Object(be.jsx)("h2",{children:"Order Summary"})}),Object(be.jsxs)(ke.a.Item,{children:[Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{children:"Items"}),Object(be.jsxs)(me.a,{children:["$ ",c.itemPrice]})]}),Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{children:"Shipping"}),Object(be.jsxs)(me.a,{children:["$ ",c.shippingPrice]})]}),Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{children:"Tax"}),Object(be.jsxs)(me.a,{children:["$ ",c.taxPrice]})]}),Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{children:"Total"}),Object(be.jsxs)(me.a,{children:["$ ",c.totalPrice]})]})]}),Object(be.jsx)(ke.a.Item,{children:h&&Object(be.jsx)("h5",{children:h})}),Object(be.jsx)(Le.a,{variant:"success",type:"button",onClick:function(){r(function(e){return function(){var t=Object(ue.a)(de.a.mark((function t(r,a){var c,n,s,i,o;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:T}),c=a(),n=c.userLog.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.token)}},t.next=6,he.a.post("/order",e,s);case 6:i=t.sent,o=i.data,r({type:D,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:N,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}({orderItems:c.cartItems,shippingAdress:c.shippingAdress,paymentMethod:c.paymentMethod,itemPrice:c.itemPrice,shippingPrice:c.shippingPrice,taxPrice:c.taxPrice,totalPrice:c.totalPrice})),p&&t.push("/order/".concat(u._id))},disabled:0===c.cartItems,children:"Checkout"})]})})})]})})},Ye=r(74),Qe=function(e){var t=e.match,r=Object(a.useState)(!1),c=Object(we.a)(r,2),n=c[0],i=c[1],o=t.params.id,l=Object(s.b)(),j=Object(s.c)((function(e){return e.orderDetails})),d=j.order,u=j.loading,p=j.error,h=Object(s.c)((function(e){return e.orderPay})),b=h.loading,O=h.success;Object(a.useEffect)((function(){var e,t=function(){var e=Object(ue.a)(de.a.mark((function e(){var t,r,a;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he.a.get("/config/paypal");case 2:t=e.sent,r=t.data,(a=document.createElement("script")).type="text/javascript",a.src="https://www.paypal.com/sdk/js?client-id=".concat(r),a.async=!0,a.onload=function(){i(!0)},document.body.appendChild(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!d||O?(l((e=o,function(){var t=Object(ue.a)(de.a.mark((function t(r,a){var c,n,s,i,o;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:G}),c=a(),n=c.userLog.userInfo,s={headers:{Authorization:"Bearer ".concat(n.token)}},t.next=6,he.a.get("/order/".concat(e),s);case 6:i=t.sent,o=i.data,r({type:M,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:F,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}())),l({type:B})):d.isPaid||(window.paypal?i(!0):t())}),[l,o,d,O,b]);return u?Object(be.jsx)(Ie,{}):p?Object(be.jsx)(Ce,{variant:"danger",message:p}):Object(be.jsxs)("div",{children:[Object(be.jsxs)("h2",{children:["Order: ",d._id]}),Object(be.jsxs)(xe.a,{children:[Object(be.jsxs)(me.a,{md:8,children:[Object(be.jsxs)(ke.a,{variant:"flush",children:[Object(be.jsxs)(ke.a.Item,{children:[Object(be.jsx)("h2",{children:"Shipping"}),Object(be.jsx)("p",{children:Object(be.jsx)("strong",{children:d.user.name})}),Object(be.jsx)("p",{children:Object(be.jsx)("strong",{children:d.user.email})}),Object(be.jsxs)("p",{children:[Object(be.jsx)("strong",{children:"Adress: "}),d.shippingAdress.adress,", ",d.shippingAdress.city,",  ",d.shippingAdress.postalcode,",  ",d.shippingAdress.country]}),d.isDelivered?Object(be.jsx)(Ce,{variant:"success",message:d.paidAt}):Object(be.jsx)(Ce,{variant:"danger",message:"Not Delivered"})]}),Object(be.jsxs)(ke.a.Item,{children:[Object(be.jsx)("h2",{children:"Payment Method"}),Object(be.jsx)("p",{children:Object(be.jsx)("strong",{children:d.paymentMethod})}),d.isPaid?Object(be.jsx)(Ce,{variant:"success",message:d.paidAt}):Object(be.jsx)(Ce,{variant:"danger",message:"Not Paid"})]})]}),Object(be.jsxs)(ke.a,{variant:"flush",children:[Object(be.jsx)(ke.a.Item,{children:Object(be.jsx)("h2",{children:"Order Items"})}),0===d.orderItems.length?Object(be.jsx)("h3",{children:"your Order list is empty!"}):Object(be.jsx)(ke.a.Item,{children:d.orderItems.map((function(e,t){return Object(be.jsx)(ke.a.Item,{children:Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{md:1,children:Object(be.jsx)(_e.a,{src:e.image,alt:e.title,fluid:!0})}),Object(be.jsx)(me.a,{children:Object(be.jsx)(ie.a,{as:ae.b,to:"/products/product/".concat(e.product),children:e.title})})]})},t)}))})]})]}),Object(be.jsxs)(me.a,{md:4,children:[Object(be.jsx)(ge.a,{children:Object(be.jsxs)(ke.a,{variant:"flush",children:[Object(be.jsx)(ke.a.Item,{children:Object(be.jsx)("h2",{children:"Order Summary"})}),Object(be.jsxs)(ke.a.Item,{children:[Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{children:"Items"}),Object(be.jsxs)(me.a,{children:["$ ",d.itemPrice]})]}),Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{children:"Shipping"}),Object(be.jsxs)(me.a,{children:["$ ",d.shippingPrice]})]}),Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{children:"Tax"}),Object(be.jsxs)(me.a,{children:["$ ",d.taxPrice]})]}),Object(be.jsxs)(xe.a,{children:[Object(be.jsx)(me.a,{children:"Total"}),Object(be.jsxs)(me.a,{children:["$ ",d.totalPrice]})]})]}),Object(be.jsx)(ke.a.Item,{children:p&&Object(be.jsx)(Ce,{variant:"danger",message:p})})]})}),!d.isPaid&&Object(be.jsxs)(ke.a.Item,{children:[b&&Object(be.jsx)(Ie,{}),n?Object(be.jsx)(Ye.PayPalButton,{amount:Number(d.totalPrice),onSuccess:function(e){l(function(e,t){return function(){var t=Object(ue.a)(de.a.mark((function t(r,a){var c,n,s,i,o;return de.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:$}),c=a(),n=c.userLog.userInfo,s={headers:{Authorization:"Bearer ".concat(n.token)}},t.next=6,he.a.put("/order/".concat(e,"/pay"),s);case 6:i=t.sent,o=i.data,r({type:q,payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r({type:J,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,r){return t.apply(this,arguments)}}()}(o))}}):Object(be.jsx)(Ie,{})]})]})]})]})};var ze=function(){return Object(be.jsxs)(ae.a,{children:[Object(be.jsx)(Oe,{}),Object(be.jsxs)(ne.a,{children:[Object(be.jsx)(ce.a,{path:"/",exact:!0,component:Re}),Object(be.jsx)(ce.a,{path:"/register",component:Ge}),Object(be.jsx)(ce.a,{path:"/profile",component:Fe}),Object(be.jsx)(ce.a,{path:"/login",component:Me}),Object(be.jsx)(ce.a,{path:"/product/:id",component:Ue}),Object(be.jsx)(ce.a,{path:"/cart/:id?",component:De}),Object(be.jsx)(ce.a,{path:"/shipping",component:qe}),Object(be.jsx)(ce.a,{path:"/payment",component:Je}),Object(be.jsx)(ce.a,{path:"/checkout",component:Be}),Object(be.jsx)(ce.a,{path:"/order/:id",component:Qe})]}),Object(be.jsx)(fe,{})]})};r(107);n.a.render(Object(be.jsx)(s.a,{store:re,children:Object(be.jsx)(ze,{})}),document.getElementById("root"))},82:function(e,t,r){}},[[108,1,2]]]);
//# sourceMappingURL=main.8ddb462c.chunk.js.map