(this["webpackJsonpreact-pokedex"]=this["webpackJsonpreact-pokedex"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(11),n(1)),u=n.n(s),l=n(3),i=n(2);function m(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(!0),m=Object(i.a)(s,2),p=m[0],f=m[1],d=function(){var t=Object(l.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.pokemon.url);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,o(a),f(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),p?r.a.createElement("h3",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(c.id,".png"),width:100,alt:""}),r.a.createElement("h4",null,r.a.createElement("b",null,e.pokemon.name)),r.a.createElement("p",null,"Id: ",c.order),r.a.createElement("p",null,"Type: ",c.types[0].type.name)))}function p(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),p=s[0],f=s[1],d=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=150");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,f(n.results),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),n?r.a.createElement("h3",null,"Loading..."):r.a.createElement("div",{className:"container"},p.map((function(e){return r.a.createElement(m,{pokemon:e})})))}function f(){return r.a.createElement("div",{className:"title-bar"},r.a.createElement("h3",null,"PokeDex"))}n(13);var d=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f,null),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.deb6bb20.chunk.js.map