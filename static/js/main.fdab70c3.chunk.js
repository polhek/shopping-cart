(this["webpackJsonpshopping-cart-react"]=this["webpackJsonpshopping-cart-react"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),o=c.n(r),s=c(28),a=c.n(s),i=(c(34),c(23)),j=c(26),l=c(7),d=(c(35),c(36),c(13)),u=c(4),h=c(19),b=function(e){var t=e.id,c=e.name,r=e.price,o=(e.stock,e.count),s=e.url,a=e.removeFromCart;return Object(n.jsxs)("div",{className:"cartItem",children:[Object(n.jsx)("img",{className:"cartImg",alt:c,src:s}),Object(n.jsx)("h4",{children:c}),Object(n.jsx)("p",{children:"3"}),Object(n.jsxs)("p",{children:[r*o,"$"]}),Object(n.jsx)("button",{onClick:function(){return a(t)},children:Object(n.jsx)(h.b,{})})]})},O=function(e){var t=e.cart,c=e.totalCost,r=e.removeFromCart,o=e.checkout;return Object(n.jsxs)("div",{className:"dropdown",children:[Object(n.jsx)("div",{children:t.map((function(e){return Object(n.jsx)(b,{removeFromCart:r,id:e.id,name:e.name,price:e.price,stock:e.stock,count:e.count,url:e.url},e.name)}))}),Object(n.jsxs)("div",{className:"totalCost",children:[Object(n.jsx)("button",{onClick:function(){return o()},children:Object(n.jsx)("h4",{children:"Checkout and pay"})}),Object(n.jsxs)("h3",{children:["Total cost: ",c," $"]})]})]})},p=function(e){var t=e.stockCount,c=e.cart,o=e.totalCost,s=e.removeFromCart,a=e.checkout,i=Object(r.useState)(!1),j=Object(l.a)(i,2),u=j[0],b=j[1],p={color:"white",listStyle:"none",marginRight:"35px",cursor:"pointer",textDecoration:"none"};return Object(n.jsxs)("nav",{children:[Object(n.jsx)("h1",{className:"brand-logo",children:"Shopping cart"}),Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)(d.b,{style:p,to:"/",children:Object(n.jsx)("li",{children:"Home"})}),Object(n.jsx)(d.b,{style:p,to:"/about",children:Object(n.jsx)("li",{children:"About"})}),Object(n.jsx)(d.b,{style:p,to:"/shop",children:Object(n.jsx)("li",{children:"Shop"})})]}),Object(n.jsxs)("div",{className:"cart-right",children:[Object(n.jsx)("button",{className:"cartButton",onClick:function(){return b(!u)},children:Object(n.jsxs)("h3",{children:[Object(n.jsx)(h.a,{className:"cart"}),Object(n.jsx)("span",{className:"checkout",children:t})]})}),u&&Object(n.jsx)(O,{checkout:a,cart:c,totalCost:o,removeFromCart:s},"1")]})]})},m=function(){var e=Object(r.useState)(new Date),t=Object(l.a)(e,2),c=t[0],o=t[1],s=Object(r.useState)(""),a=Object(l.a)(s,2),i=a[0],j=a[1];Object(r.useEffect)((function(){var e=setInterval((function(){u()}),3e4);return function(){return clearInterval(e)}}),[]);var u=function(){o(new Date),console.log(c)};Object(r.useEffect)((function(){!function(){var e=c.getHours(),t=c.getMinutes(),n=c.getDay();t<10&&(t="0".concat(t));var r="".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n],", ").concat(e,":").concat(t);j(r)}()}),[c]);return Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Do you know what really grinds my gears?"}),Object(n.jsxs)("div",{className:"text",children:[Object(n.jsx)("p",{children:"It's"}),Object(n.jsx)("p",{className:"clock",children:i}),Object(n.jsx)("p",{children:"and noone is buying in our shop!"}),Object(n.jsx)(d.b,{style:{color:"white",listStyle:"none",marginRight:"35px",cursor:"pointer",textDecoration:"none"},to:"/shop",children:Object(n.jsx)("button",{className:"shop-button",children:Object(n.jsx)("h1",{children:"Shop now!"})})})]})]})})},x=function(e){var t=e.id,c=e.name,o=e.price,s=e.stock,a=e.count,i=e.url,j=e.addItemCart,d=Object(r.useState)(a),u=Object(l.a)(d,2),h=u[0],b=u[1];return Object(n.jsxs)("div",{className:"shopItem",children:[Object(n.jsx)("img",{src:i,alt:c}),Object(n.jsxs)("div",{className:"itemInfo",children:[Object(n.jsx)("h2",{className:"shopText",children:c}),Object(n.jsxs)("h2",{className:"shopText",children:[o,"$"]})]}),Object(n.jsx)("div",{className:"stock",children:Object(n.jsxs)("h3",{className:"shopText",children:["In Stock: ",s]})}),Object(n.jsxs)("div",{className:"addItems",children:[Object(n.jsx)("button",{onClick:function(){h>0&&b((function(e){return e-1}))},children:"-"}),Object(n.jsx)("h4",{children:h}),Object(n.jsx)("button",{onClick:function(){h<s&&b((function(e){return e+1}))},children:"+"})]}),Object(n.jsx)("div",{className:"addToCart",children:Object(n.jsx)("button",{onClick:function(){return function(e,t,c,n,r,o){j({id:e,name:t,price:c,stock:n,count:h,url:o}),b(0)}(t,c,o,s,0,i)},children:"Add to cart"})})]})},f=function(e){var t=e.stock,c=e.addItemCart;return Object(n.jsxs)("div",{className:"shop",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Shop your items"})}),Object(n.jsx)("div",{className:"shopItemContainer",children:t.map((function(e){return Object(n.jsx)(x,{id:e.id,name:e.name,price:e.price,stock:e.stock,count:e.count,url:e.logoURL,addItemCart:c},e.id)}))})]})},g=c(45),v=c(44),k=c(46),y=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],o=t[1],s=Object(r.useState)(""),a=Object(l.a)(s,2),i=a[0],j=a[1];Object(r.useEffect)((function(){d()}),[]);var d=function(){var e=40*Math.random(),t=30*Math.random()+20;console.log(t),o(t),j(e)};return Object(n.jsxs)("div",{className:"aboutus",children:[Object(n.jsxs)("div",{className:"about",children:[Object(n.jsx)("h2",{children:"About Us"}),Object(n.jsx)("p",{children:"We are a locally owned and operated hardware and building supply store. Our goal is to serve our customers and the greater Random Valley, Random City, community. Shopping cart and Shopping Supply offers a huge selection of interior and exterior paints, power tools, lawn and garden products, plumbing, heating, and electrical supplies. Whether you're a homeowner, DIYer, contractor, builder, or landscaper, we have exactly what you need. Our staff has the experience and knowledge to answer any questions you may have about our products and your home improvement projects. Keep checking back for updates!"}),Object(n.jsx)("h3",{children:"Contact us"}),Object(n.jsxs)("p",{children:["Phone number: ",Object(n.jsx)("a",{href:"tel:004321943214",children:"+ (432) 194 3214"})]}),Object(n.jsxs)("p",{children:["Random mail: ",Object(n.jsx)("a",{href:"mailto: abc@example.com",children:"dfsdfsd@sdfdsf.com"})]})]}),Object(n.jsxs)("div",{className:"google-map",children:[Object(n.jsx)("h3",{children:"Location"}),Object(n.jsxs)(g.a,{center:[c,i],zoom:5,children:[Object(n.jsx)(v.a,{position:[c,i]}),Object(n.jsx)(k.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]})]})]})},C=[{id:0,name:"Leaf Blower",price:250,stock:24,count:0,logoURL:"/shopping-cart/images/1.png"},{id:1,name:"Generator",price:1299,stock:12,count:0,logoURL:"/shopping-cart/images/2.png"},{id:2,name:"Log Splitter",price:2133,stock:5,count:0,logoURL:"/shopping-cart/images/3.png"},{id:3,name:"Lawn Mower",price:250,stock:24,count:0,logoURL:"/shopping-cart/images/4.png"},{id:4,name:"Chainsaw",price:344,stock:16,count:0,logoURL:"/shopping-cart/images/5.png"}];var N=function(){var e=Object(r.useState)(C),t=Object(l.a)(e,2),c=t[0],o=t[1],s=Object(r.useState)([]),a=Object(l.a)(s,2),h=a[0],b=a[1],O=Object(r.useState)(0),x=Object(l.a)(O,2),g=x[0],v=x[1],k=Object(r.useState)(0),N=Object(l.a)(k,2),S=N[0],w=N[1];Object(r.useEffect)((function(){R(h),I()}),[h,c]);var I=function(){var e=h.reduce((function(e,t){return e+t.count*t.price}),0);v(e)},R=function(e){var t=e.reduce((function(e,t){return e+t.count}),0);w(t)};return Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{class:"container SVG",children:[Object(n.jsx)(p,{stockCount:S,cart:h,totalCost:g,removeFromCart:function(e){var t=c.findIndex((function(t){return t.id===e})),n=h.findIndex((function(t){return t.id===e})),r=c[t];r.stock=h[n].count+r.stock,console.log(r);var o=h.filter((function(t){return t.id!==e}));b(o)},checkout:function(){h.length>0&&(v(0),b([]),alert("You bought items"))}}),Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{path:"/about",children:Object(n.jsx)(y,{})}),Object(n.jsx)(u.a,{path:"/shop",children:Object(n.jsx)(f,{stock:c,addItemCart:function(e){var t=Object(j.a)(c),n=t.findIndex((function(t){return t.id===e.id}));t[n]=Object(i.a)(Object(i.a)({},t[n]),{},{stock:e.stock-e.count}),function(e){var t=h,c=t.findIndex((function(t){return t.name===e.name}));c>-1?t[c].count+=e.count:t=[].concat(Object(j.a)(t),[e]),b(t)}(e),o(t)}})}),Object(n.jsx)(u.a,{exact:!0,path:"",children:Object(n.jsx)(m,{})})]})]})})};a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.fdab70c3.chunk.js.map