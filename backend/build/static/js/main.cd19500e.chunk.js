(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(21),i=c.n(r),o=(c(60),c(22)),j=(c(61),c(7)),l=c(3),d=(c(62),c(5)),u=function(e){var t=e.click,c=Object(d.c)((function(e){return e.cart})).cartItems;return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("div",{className:"",children:Object(n.jsx)("h2",{children:"TrollBasket"})}),Object(n.jsxs)("ul",{className:"navbar__links",children:[Object(n.jsx)("li",{children:Object(n.jsxs)(j.b,{to:"/cart",className:"cart__link",children:[Object(n.jsx)("i",{className:"fas fa-shopping-cart"}),Object(n.jsxs)("span",{children:["Cart ",Object(n.jsx)("span",{className:"cartlogo__badge",children:c.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(n.jsx)("li",{children:Object(n.jsx)(j.b,{to:"/",children:"Shop"})})]}),Object(n.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})]})},b=(c(68),function(e){var t=e.show,c=e.click,a=["sidedrawer"],s=Object(d.c)((function(e){return e.cart})).cartItems;return t&&a.push("show"),Object(n.jsx)("div",{className:a.join(" "),children:Object(n.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(n.jsx)("li",{children:Object(n.jsxs)(j.b,{to:"/cart",children:[Object(n.jsx)("i",{className:"fas fa-shopping-cart"}),Object(n.jsxs)("span",{children:["Cart"," ",Object(n.jsx)("span",{className:"sidedrawer__cartbadge",children:s.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(n.jsx)("li",{children:Object(n.jsx)(j.b,{to:"/",children:"Shop"})})]})})}),h=(c(69),function(e){var t=e.click;return e.show&&Object(n.jsx)("div",{className:"backdrop",onClick:t})}),O=(c(70),c(49)),p=c.n(O),x=c(50),m=c.n(x),f=c(51),v=c.n(f),_=c(43),g=c.n(_),y=c(44),N=c.n(y),k=c(46),S=c.n(k),C=c(47),I=c.n(C),T=c(48),E=c.n(T),w=c(45),D=c.n(w),P=(c(71),c(17)),R=c.n(P),U=c(24),A="GET_PRODUCTS_REQUEST",L="GET_PRODUCTS_SUCCESS",F="GET_PRODUCTS_FAIL",q="GET_PRODUCT_DETAILS_REQUEST",G="GET_PRODUCT_DETAILS_SUCCESS",B="GET_PRODUCT_DETAILS_FAIL",M="GET_PRODUCT_DETAILS_RESET",H=c(25),J=c.n(H),W=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.cart})).cartItems,c=Object(a.useState)(null),s=Object(o.a)(c,2),r=(s[0],s[1]),i=Object(d.c)((function(e){return e.getProducts})),j=i.products,l=void 0===j?[]:j,u=i.loading,b=i.error;return console.log(l,"product"),Object(a.useEffect)((function(){e(function(){var e=Object(U.a)(R.a.mark((function e(t){var c,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:A}),e.next=4,J.a.get("/api/products");case 4:c=e.sent,n=c.data,t({type:L,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:F,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(n.jsxs)("div",{className:"homescreen",children:[Object(n.jsx)("h2",{className:"homescreen__title"}),Object(n.jsxs)("div",{class:"flex-container",children:[Object(n.jsxs)("div",{className:"location",children:[" ",Object(n.jsx)(g.a,{color:"primary",id:"lagos"})," Lagos ",Object(n.jsx)(N.a,{})," "]}),Object(n.jsxs)("div",{id:"order",children:[Object(n.jsx)(D.a,{id:"purple"})," My Orders"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(S.a,{id:"cart"}),"Cart",Object(n.jsx)("span",{id:"span",children:t.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(I.a,{id:"search"})," ",Object(n.jsx)("input",{className:"input",placeholder:"Search MechBuy",type:"search",onChange:function(e){return function(e){var t=e.target.value;r(t)}(e)}})]}),Object(n.jsx)("div",{className:"imagebackground",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"h3",children:"Having any issues with your order? "}),Object(n.jsx)("button",{id:"button",children:"  Contact"})]})}),Object(n.jsxs)("div",{className:"recomendation",children:[Object(n.jsxs)("div",{children:[" ",Object(n.jsx)(E.a,{id:"icon4"})," Product Categories"]}),Object(n.jsxs)("div",{children:[" ",Object(n.jsx)(p.a,{id:"icon"})," Popular  Product"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{id:"icon2"})," Recommended Products"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(v.a,{id:"icon3"})," Shop"]})]}),Object(n.jsx)("div",{className:"homescreen__products",children:u?Object(n.jsx)("h2",{children:"Loading..."}):b?Object(n.jsx)("h2",{children:b}):Object(n.jsx)("div",{children:"This si omidora"})})]})},$=(c(91),"ADD_TO_CART"),z="REMOVE_FROM_CART",Q=function(e,t){return function(){var c=Object(U.a)(R.a.mark((function c(n,a){var s,r;return R.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,J.a.get("/api/products/".concat(e));case 2:s=c.sent,r=s.data,n({type:$,payload:{product:r._id,name:r.name,imageUrl:r.imageUrl,price:r.price,countInStock:r.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(a().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},V=function(e){var t=e.match,c=e.history,s=Object(a.useState)(1),r=Object(o.a)(s,2),i=r[0],j=(r[1],Object(d.b)()),l=Object(d.c)((function(e){return e.getProductDetails})),u=l.loading,b=l.error,h=l.product;Object(a.useEffect)((function(){var e;h&&t.params.id!==h._id&&j((e=t.params.id,function(){var t=Object(U.a)(R.a.mark((function t(c){var n,a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:q}),t.next=4,J.a.get("/api/products/".concat(e));case 4:n=t.sent,a=n.data,c({type:G,payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:B,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[j,t,h]);return Object(n.jsx)("div",{className:"productscreen",children:u?Object(n.jsx)("h2",{children:"Loading..."}):b?Object(n.jsx)("h2",{children:b}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("div",{className:"info",children:Object(n.jsx)("img",{src:h.imageUrl,alt:h.name})}),Object(n.jsxs)("div",{className:"left__info",children:[Object(n.jsx)("p",{className:"info_name",children:h.name}),Object(n.jsx)("p",{className:"info_name",children:h.description}),Object(n.jsx)("p",{className:"info_name",children:Object(n.jsxs)("b",{children:[" \u20a6",h.price,"/price"]})}),Object(n.jsx)("p",{className:"info_name",children:"Review and Ratings"}),Object(n.jsxs)("div",{className:"rating",children:[Object(n.jsx)("span",{class:"fa fa-star checked"}),Object(n.jsx)("span",{class:"fa fa-star checked"}),Object(n.jsx)("span",{class:"fa fa-star checked"}),Object(n.jsx)("span",{class:"fa fa-star checked"})]}),Object(n.jsx)("p",{className:"info_name",children:"This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!!"}),Object(n.jsx)("p",{className:"info_name",children:"Segun Arinze"}),Object(n.jsx)("button",{type:"button",id:"button1",onClick:function(){j(Q(h._id,i)),c.push("/cart")},children:"Add To Cart"}),Object(n.jsx)("button",{type:"button",id:"button2",children:"WishList"})]})]})})})},Y=(c(92),c(28)),K=(c(93),function(e){var t=e.item,c=e.qtyChangeHandler,a=e.removeHandler;return Object(n.jsxs)("div",{className:"cartitem",children:[Object(n.jsx)("div",{className:"cartitem__image",children:Object(n.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(n.jsx)(j.b,{to:"/product/".concat(t.product),className:"cartItem__name",children:Object(n.jsx)("p",{children:t.name})}),Object(n.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(n.jsx)("select",{value:t.qty,onChange:function(e){return c(t.product,e.target.value)},className:"cartItem__select",children:Object(Y.a)(Array(t.countInStock).keys()).map((function(e){return Object(n.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(n.jsx)("button",{className:"cartItem__deleteBtn",onClick:function(){return a(t.product)},children:Object(n.jsx)("i",{className:"fas fa-trash"})})]})}),X=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.cart})).cartItems;Object(a.useEffect)((function(){}),[]);var c=function(t,c){e(Q(t,c))},s=function(t){e(function(e){return function(t,c){t({type:z,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))},r=function(){return t.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("div",{className:"",children:0===t.length?Object(n.jsxs)("div",{children:["Your Cart Is Empty ",Object(n.jsx)(j.b,{to:"/",children:"Go Back"})]}):t.map((function(e){return Object(n.jsx)(K,{item:e,qtyChangeHandler:c,removeHandler:s},e.product)}))}),Object(n.jsxs)("div",{className:"cart_subtotal",children:[Object(n.jsxs)("div",{className:"cart_left",children:[Object(n.jsxs)("p",{children:["Subtotal  ",Object(n.jsxs)("span",{id:"getCartCount",children:["$",r()]})]}),Object(n.jsxs)("p",{children:["Total     ",Object(n.jsxs)("span",{id:"getCartCounts",children:["$",r()]})]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Proceed To Checkout"})})]})]})})},Z=(c(94),function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("nav",{class:"nav",children:[Object(n.jsxs)("a",{href:"#",class:"nav__link",children:[Object(n.jsx)("i",{class:"material-icons nav__icon",children:"home"}),Object(n.jsx)("span",{class:"nav__text",children:"Home"})]}),Object(n.jsxs)("a",{href:"#",class:"nav__link nav__link--active",children:[Object(n.jsx)("i",{class:"material-icons nav__icon",children:"shop"}),Object(n.jsx)("span",{class:"nav__text",children:"Buy"})]}),Object(n.jsxs)("a",{href:"#",class:"nav__link",children:[Object(n.jsx)("i",{class:"material-icons nav__icon",children:"devices"}),Object(n.jsx)("span",{class:"nav__text",children:"Deals"})]}),Object(n.jsxs)("a",{href:"#",class:"nav__link",children:[Object(n.jsx)("i",{class:"material-icons nav__icon",children:"lock"}),Object(n.jsx)("span",{class:"nav__text",children:"Wallet"})]}),Object(n.jsxs)("a",{href:"#",class:"nav__link",children:[Object(n.jsx)("i",{class:"material-icons nav__icon",children:"settings"}),Object(n.jsx)("span",{class:"nav__text",children:"More"})]})]})})});var ee=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.jsxs)(j.a,{children:[Object(n.jsx)(u,{click:function(){return s(!0)}}),Object(n.jsx)(b,{show:c,click:function(){return s(!1)}}),Object(n.jsx)(h,{show:c,click:function(){return s(!1)}}),Object(n.jsx)("main",{className:"app",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:W}),Object(n.jsx)(l.a,{exact:!0,path:"/product/:id",component:V}),Object(n.jsx)(l.a,{exact:!0,path:"/cart",component:X})]})}),Object(n.jsx)(Z,{})]})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},ce=c(19),ne=c(52),ae=c(53),se=c(20),re={cartItems:[]},ie=Object(ce.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:var c=t.payload,n=e.cartItems.find((function(e){return e.product===c.product}));return n?Object(se.a)(Object(se.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===n.product?c:e}))}):Object(se.a)(Object(se.a)({},e),{},{cartItems:[].concat(Object(Y.a)(e.cartItems),[c])});case z:return Object(se.a)(Object(se.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loading:!0,products:[]};case L:return{products:t.payload,loading:!1};case F:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{loading:!0};case G:return{loading:!1,product:t.payload};case B:return{loading:!1,error:t.payload};case M:return{product:{}};default:return e}}}),oe=[ne.a],je={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},le=Object(ce.createStore)(ie,je,Object(ae.composeWithDevTools)(ce.applyMiddleware.apply(void 0,oe)));i.a.render(Object(n.jsx)(d.a,{store:le,children:Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(ee,{})})}),document.getElementById("root")),te()}},[[96,1,2]]]);
//# sourceMappingURL=main.cd19500e.chunk.js.map