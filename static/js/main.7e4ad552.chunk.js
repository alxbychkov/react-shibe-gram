(this["webpackJsonpreact-shibe-gram"]=this["webpackJsonpreact-shibe-gram"]||[]).push([[0],{3:function(e,t,a){e.exports={header:"Header_header__1UinG",logo:"Header_logo__1t4ye",logo__text:"Header_logo__text__3BsI5",logo__text__title:"Header_logo__text__title__3-4n7",logo__text__subtitle:"Header_logo__text__subtitle__NsIzx",user:"Header_user__cJvbK",favorite__icon:"Header_favorite__icon__1iFrG",active:"Header_active__hbzMY"}},34:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),i=a(13),n=a.n(i),s=(a(34),a(4)),_=a(3),o=a.n(_),l=a.p+"static/media/logo.3bea42b7.png",d=a(1);var u=function(e){var t=e.onFilter,a=r.a.useState(!1),c=Object(s.a)(a,2),i=c[0],n=c[1];return Object(d.jsxs)("header",{className:o.a.header,children:[Object(d.jsxs)("div",{className:o.a.logo,children:[Object(d.jsx)("img",{width:80,height:80,src:l,alt:"logo"}),Object(d.jsxs)("div",{className:o.a.logo__text,children:[Object(d.jsx)("p",{className:o.a.logo__text__title,children:"REACT SHIBEGRAM"}),Object(d.jsx)("p",{className:o.a.logo__text__subtitle,children:"\u0410\u043b\u044c\u0431\u043e\u043c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439"})]})]}),Object(d.jsx)("div",{className:o.a.user,children:Object(d.jsx)("div",{className:"".concat(o.a.favorite__icon," ").concat(i?o.a.active:""),onClick:function(){n(!i),t(!i)}})})]})},j=a(5),b=a(17),f=a.n(b),v=a(27),p=a(6),O=a.n(p);var h=function(e){var t=r.a.useState(e.inFavorite),a=Object(s.a)(t,2),c=a[0],i=a[1];return Object(d.jsxs)("div",{className:O.a.card__item,children:[Object(d.jsxs)("div",{className:O.a.card__item__image,children:[Object(d.jsx)("div",{className:"".concat(O.a.card__item__btn__favorite," ").concat(c?O.a.active:""),onClick:function(){e.onFavorite(e.image),i(!c)}}),e.filtered||Object(d.jsx)("div",{className:O.a.card__item__btn__delete,onClick:function(){e.onDelete(e.image)}}),Object(d.jsx)("img",{width:182,height:182,src:e.image,alt:e.image})]}),Object(d.jsx)("div",{className:O.a.card__item__title,children:e.image.split("/")[4]})]})},m=a(28),x=function(){return Object(d.jsx)(m.a,{speed:2,width:210,height:204,viewBox:"0 0 210 204",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:Object(d.jsx)("rect",{x:"14",y:"10",rx:"40",ry:"40",width:"182",height:"182"})})},g=a.p+"static/media/sad.4a49f629.gif",N=a.p+"static/media/empty.92a0fd27.png",y=a(8),E="SET_FAVORITE",w="DELETE_PICTURE",S="LOAD_DATA";function C(e){return{type:S,payload:e}}var I=a(29),T=a.n(I);var k=function(e){var t=e.filtered,a=r.a.useState(!0),c=Object(s.a)(a,2),i=c[0],n=c[1],_=Object(y.b)(),o=Object(y.c)((function(e){return e.pictures}));r.a.useEffect((function(){function e(){return(e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://cors-anywhere.herokuapp.com/https://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true");case 3:t=e.sent,n(!1),_(C(t.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[_]);var l=function(e){_(function(e){return{type:E,payload:e}}(e))},u=function(e){-1!==o.favorites.indexOf(e)&&l(e),_(function(e){return{type:w,payload:e}}(e))};return Object(d.jsx)("div",{className:"content",children:o["".concat(t?"favorites":"pictures")].length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"content__head",children:Object(d.jsx)("h2",{className:"content__title",children:t?"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435":"\u0412\u0441\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"})}),Object(d.jsx)("div",{className:"pictures__wrapper",children:i?Object(j.a)(Array(20)).map((function(e,t){return Object(d.jsx)(x,{},t)})):o["".concat(t?"favorites":"pictures")].map((function(e,a){return Object(d.jsx)(h,{image:e,inFavorite:!!o.favorites.find((function(t){return t===e})),onFavorite:function(e){return l(e)},onDelete:function(e){return u(e)},filtered:t},a+e)}))})]}):Object(d.jsxs)("div",{className:"pictures__empty",children:[Object(d.jsx)("h2",{className:"content__title",children:t?"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442..":"Ooops.."}),Object(d.jsx)("div",{className:"gif",children:Object(d.jsx)("img",{src:t?N:g,alt:"no_data"})})]})})};var D=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(u,{onFilter:function(){c(!a)}}),Object(d.jsx)(k,{filtered:a})]})},F={pictures:[""],favorites:function(){try{var e=localStorage.getItem("favorites");return e?JSON.parse(e):[]}catch(t){return console.error(t),[]}}()},H=a(10),A=a(7),R=Object(H.a)({pictures:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(A.a)(Object(A.a)({},e),{},{favorites:Object(j.a)(e.favorites).find((function(e){return e===t.payload}))?Object(j.a)(e.favorites).filter((function(e){return e!==t.payload})):[].concat(Object(j.a)(e.favorites),[t.payload])});case w:return Object(A.a)(Object(A.a)({},e),{},{pictures:Object(j.a)(e.pictures).filter((function(e){return e!==t.payload}))});case S:return Object(A.a)(Object(A.a)({},e),{},{pictures:t.payload});default:return e}}}),J=Object(H.c)(R,Object(H.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));J.subscribe((function(){var e,t=J.getState();(null===(e=t.pictures)||void 0===e?void 0:e.favorites)&&function(e){try{localStorage.setItem("favorites",JSON.stringify(e))}catch(t){console.error(t)}}(t.pictures.favorites)})),n.a.render(Object(d.jsx)(y.a,{store:J,children:Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(D,{})})}),document.getElementById("root"))},6:function(e,t,a){e.exports={card__item:"Card_card__item__1bZkN",card__item__btn__delete:"Card_card__item__btn__delete__24M8G",card__item__btn__favorite:"Card_card__item__btn__favorite__1cVVn",active:"Card_active__20WpT",card__item__image:"Card_card__item__image__3oEsw",card__item__title:"Card_card__item__title__I1Xy1"}}},[[59,1,2]]]);
//# sourceMappingURL=main.7e4ad552.chunk.js.map