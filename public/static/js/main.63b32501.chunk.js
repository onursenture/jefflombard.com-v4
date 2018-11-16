(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,r,a){"use strict";a.r(r);var n=a(0),t=a.n(n),c=a(44),o=a.n(c),l=(a(66),a(45)),m=a(46),i=a(57),s=a(47),u=a(58),f=a(114),N=a(113),_=a(56),b=a(12),p=a(112),d=a(15),E="/Users/jeff/projects/jefflombard.com-v4/src/src/components/Menu.js",j=function(e){return t.a.createElement("div",{className:"nav-menu",__source:{fileName:E,lineNumber:6}},t.a.createElement("div",{__source:{fileName:E,lineNumber:7}},e.items.map(function(e){return t.a.createElement("li",{key:e.path,__source:{fileName:E,lineNumber:10}},t.a.createElement(p.a,{to:e.path,__source:{fileName:E,lineNumber:11}},e.label))})),t.a.createElement(d.Hidden,{xs:!0,__source:{fileName:E,lineNumber:16}},t.a.createElement("div",{className:"line",__source:{fileName:E,lineNumber:17}}),t.a.createElement("div",{className:"text-section",__source:{fileName:E,lineNumber:18}},t.a.createElement("p",{__source:{fileName:E,lineNumber:19}},t.a.createElement("span",{className:"bold",__source:{fileName:E,lineNumber:20}},"Jeff Lombard")),t.a.createElement("p",{__source:{fileName:E,lineNumber:22}},"jefflombardjr(at)"),t.a.createElement("p",{__source:{fileName:E,lineNumber:23}},"gmail(dot)com")),t.a.createElement("div",{className:"text-section",__source:{fileName:E,lineNumber:25}},t.a.createElement("p",{__source:{fileName:E,lineNumber:26}},t.a.createElement("span",{className:"bold",__source:{fileName:E,lineNumber:27}},"Location")),t.a.createElement("p",{__source:{fileName:E,lineNumber:29}},"Philadelphia, PA"))))},v=a(14),h=a(53),w=a(11),g=a.n(w),k="/Users/jeff/projects/jefflombard.com-v4/src/src/scenes/Books.js";function y(){var e=Object(v.a)(["\n      {\n        books{\n          id\n          content\n          date\n        }\n      }\n    "]);return y=function(){return e},e}var O=function(e){return t.a.createElement(b.Query,{query:g()(y()),__source:{fileName:k,lineNumber:7}},function(e){var r=e.loading,a=e.error,n=e.data;return r?t.a.createElement("p",{__source:{fileName:k,lineNumber:19}},"Loading..."):a?t.a.createElement("p",{__source:{fileName:k,lineNumber:20}},"Error :("):n.books.map(function(e){var r=e.id,a=e.content,n=e.date;return t.a.createElement("div",{key:r,__source:{fileName:k,lineNumber:23}},t.a.createElement(h.Markup,{content:a,__source:{fileName:k,lineNumber:24}}),t.a.createElement("p",{__source:{fileName:k,lineNumber:25}},"id: ".concat(r,", ").concat(n)))})})},U="/Users/jeff/projects/jefflombard.com-v4/src/src/scenes/Home.js",x=function(e){return t.a.createElement("div",{className:"home",__source:{fileName:U,lineNumber:4}},t.a.createElement("h1",{className:"home-header",__source:{fileName:U,lineNumber:5}},"Jeff Lombard"))},L="/Users/jeff/projects/jefflombard.com-v4/src/src/scenes/Projects.js";function q(){var e=Object(v.a)(["\n      {\n        projects{\n          id\n        }\n      }\n    "]);return q=function(){return e},e}var J=function(e){return t.a.createElement(b.Query,{query:g()(q()),__source:{fileName:L,lineNumber:6}},function(e){var r=e.loading,a=e.error,n=e.data;return r?t.a.createElement("p",{__source:{fileName:L,lineNumber:16}},"Loading..."):a?t.a.createElement("p",{__source:{fileName:L,lineNumber:17}},"Error :("):n.projects.map(function(e){var r=e.id;return t.a.createElement("div",{key:r,__source:{fileName:L,lineNumber:20}},t.a.createElement("p",{__source:{fileName:L,lineNumber:21}},"id: ".concat(r)))})})},P="/Users/jeff/projects/jefflombard.com-v4/src/src/scenes/Writing.js";function A(){var e=Object(v.a)(["\n      {\n        posts{\n          id\n        }\n      }\n    "]);return A=function(){return e},e}var B=function(e){return t.a.createElement(b.Query,{query:g()(A()),__source:{fileName:P,lineNumber:6}},function(e){var r=e.loading,a=e.error,n=e.data;return r?t.a.createElement("p",{__source:{fileName:P,lineNumber:16}},"Loading..."):a?t.a.createElement("p",{__source:{fileName:P,lineNumber:17}},"Error :("):n.posts.map(function(e){var r=e.id;return t.a.createElement("div",{key:r,__source:{fileName:P,lineNumber:20}},t.a.createElement("p",{__source:{fileName:P,lineNumber:21}},"id: ".concat(r)))})})},C="/Users/jeff/projects/jefflombard.com-v4/src/src/App.js",Q=new _.a({uri:"http://localhost:5000/graphql"}),W=function(e){function r(){return Object(l.a)(this,r),Object(i.a)(this,Object(s.a)(r).apply(this,arguments))}return Object(u.a)(r,e),Object(m.a)(r,[{key:"render",value:function(){return t.a.createElement(b.ApolloProvider,{client:Q,__source:{fileName:C,lineNumber:28}},t.a.createElement(f.a,{__source:{fileName:C,lineNumber:29}},t.a.createElement("div",{className:"main",__source:{fileName:C,lineNumber:30}},t.a.createElement(d.Row,{__source:{fileName:C,lineNumber:31}},t.a.createElement(d.Col,{sm:3,__source:{fileName:C,lineNumber:32}},t.a.createElement(j,{items:[{path:"/",label:"home"},{path:"/projects/",label:"projects"},{path:"/books",label:"books"},{path:"/writing",label:"writing"}],__source:{fileName:C,lineNumber:33}})),t.a.createElement(d.Col,{sm:9,__source:{fileName:C,lineNumber:35}},t.a.createElement(N.a,{path:"/",exact:!0,component:x,__source:{fileName:C,lineNumber:36}}),t.a.createElement(N.a,{path:"/projects/",component:J,__source:{fileName:C,lineNumber:37}}),t.a.createElement(N.a,{path:"/books",component:O,__source:{fileName:C,lineNumber:38}}),t.a.createElement(N.a,{path:"/writing",component:B,__source:{fileName:C,lineNumber:39}}))))))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(t.a.createElement(W,{__source:{fileName:"/Users/jeff/projects/jefflombard.com-v4/src/src/index.js",lineNumber:7}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,r,a){e.exports=a(109)},66:function(e,r,a){}},[[61,2,1]]]);
//# sourceMappingURL=main.63b32501.chunk.js.map