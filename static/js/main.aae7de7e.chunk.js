(this["webpackJsonpmonstors-rolodex"]=this["webpackJsonpmonstors-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var r=t(0),a=t(1),n=t.n(a),s=t(3),h=t.n(s),o=(t(13),t(4)),i=t(5),d=t(7),l=t(6),j=(t(14),t(15),t(16),function(e){return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{src:e.character.image,className:"card-image",alt:"character"}),Object(r.jsxs)("h2",{children:[" ",e.character.name]}),e.character.house&&Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("strong",{children:"House :"})," ",e.character.house]}),e.character.species&&Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Species : "})," ",e.character.species]}),e.character.ancestry&&Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Ancestry :"})," ",e.character.ancestry]}),e.character.wand&&e.character.wand.length&&e.character.wand.core&&e.character.wand.wood&&Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("strong",{children:"Wand :"})," ",e.character.wand.length,"' long ",e.character.wand.wood," wood with ",e.character.wand.core," core "]}),e.character.patronus&&Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("strong",{children:"Patronus :"})," ",e.character.patronus]})]})}),u=function(e){return console.log(e),Object(r.jsx)("div",{className:"card-list",children:e.characters.map((function(e){return Object(r.jsx)(j,{character:e},e.name)}))})},b=(t(17),function(e){var c=e.placeholder,t=e.handleChange;return Object(r.jsx)("input",{className:"search",type:"search",placeholder:c,onChange:t})}),p=function(e){Object(d.a)(t,e);var c=Object(l.a)(t);function t(){var e;return Object(o.a)(this,t),(e=c.call(this)).handleChange=function(c){e.setState({searchField:c.target.value})},e.state={characters:[],searchField:""},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,c=e.characters,t=e.searchField,a=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:" HP Rolodex "}),Object(r.jsx)(b,{placeholder:"search HP characters",handleChange:this.handleChange}),Object(r.jsx)(u,{characters:a})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://hp-api.herokuapp.com/api/characters").then((function(e){return e.json()})).then((function(c){return e.setState({characters:c})}))}}]),t}(a.Component),O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(c){var t=c.getCLS,r=c.getFID,a=c.getFCP,n=c.getLCP,s=c.getTTFB;t(e),r(e),a(e),n(e),s(e)}))};h.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.aae7de7e.chunk.js.map