(this.webpackJsonprecognition=this.webpackJsonprecognition||[]).push([[0],{39:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n(24),s=n.n(a),o=n(12),i=n(3),u=(n(39),n(10)),j=n(2),l=n.n(j),d=n(5),b=n(8),h=n(11),p=n(31),x=n.p+"static/media/gratitude.0135e22c.jpg",f=n.p+"static/media/cheersforpeers.81a4914b.jpg",O=n.p+"static/media/gamechanger.8fb66372.jpg",m=n.p+"static/media/raisetheroof.d804c118.jpg";function g(){var e=Object(u.a)(["\n  width: 70px;\n  height: auto;\n"]);return g=function(){return e},e}function v(){var e=Object(u.a)(["\n  grid-column: 2 / 4;\n  grid-row: 1 / 3;\n"]);return v=function(){return e},e}function k(){var e=Object(u.a)(["\n  grid-column: 1;\n  grid-row: 1 / 5;\n"]);return k=function(){return e},e}function y(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n"]);return y=function(){return e},e}var w=h.a.form(y()),C=h.a.div(k()),S=h.a.div(v()),R=h.a.img(g()),z=function(){var e=Object(p.a)(),t=e.register,n=e.handleSubmit,a=Object(c.useState)([]),s=Object(b.a)(a,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/users/",{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n),i(n),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)(w,{onSubmit:n((function(e){console.log(e);var t,n=e.userId,r=parseInt(e.level,10),c="https://bmccaw.github.io/recognition-app/";switch(r){case 5:t="".concat(c,"gratitude.jpg");break;case 10:t="".concat(c,"cheersforpeers.jpg");break;case 20:t="".concat(c,"gamechanger.jpg");break;case 25:t="".concat(c,"raisetheroof.jpg");break;default:console.log("Unknown level ",r)}fetch("https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/users/".concat(n,"/recognize"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e.text,imageUrl:t,level:r})}).then((function(e){if(console.log(e),console.log("response.status: ",e.status),console.log("response.ok: ",e.ok),!e.ok)return e.json();alert("Recognition sent!")})).then((function(e){console.log("data:",e),e&&e.message&&alert(e.message)})).catch((function(e){console.log(e),alert("Error sending recognition!")}))})),children:[Object(r.jsxs)(C,{children:[Object(r.jsx)("h2",{children:"Add Recognition"}),Object(r.jsx)("p",{children:"Who would you like to recognize?"}),Object(r.jsx)("select",{name:"userId",id:"userId",ref:t({required:"This input is required."}),children:o.map((function(e){return Object(r.jsx)("option",{name:"user",value:e.id,children:e.name},e.id)}))}),Object(r.jsx)("p",{children:"Tell us why you think they are a rockstar..."}),Object(r.jsx)("textarea",{name:"text",placeholder:"Add a message...",ref:t({required:"This input is required."})})]}),Object(r.jsxs)(S,{children:[Object(r.jsx)("p",{children:"Select your gift level..."}),Object(r.jsx)("input",{type:"radio",id:"Starbucks",name:"level",value:"5",ref:t({required:!0})}),Object(r.jsx)(R,{src:x}),Object(r.jsx)("label",{for:"5",children:"Gratitude: $5 Starbucks Gift Card"}),Object(r.jsx)("p",{}),Object(r.jsx)("input",{type:"radio",id:"Starbucks",name:"level",value:"10",ref:t({required:!0})}),Object(r.jsx)(R,{src:f}),Object(r.jsx)("label",{for:"10",children:"Cheers for Peers: $10 Starbucks Gift Card"}),Object(r.jsx)("p",{}),Object(r.jsx)("input",{type:"radio",id:"Amazon",name:"level",value:"20",ref:t({required:!0})}),Object(r.jsx)(R,{src:O}),Object(r.jsx)("label",{for:"20",children:"Game Changer: $20 Amazon Gift Card"}),Object(r.jsx)("p",{}),Object(r.jsx)("input",{type:"radio",id:"Amazon",name:"level",value:"25",ref:t({required:!0})}),Object(r.jsx)(R,{src:m}),Object(r.jsx)("label",{for:"25",children:"Raise the Roof: $25 Amazon Gift Card"}),Object(r.jsx)("p",{}),Object(r.jsx)("input",{type:"submit"})]})]})},G=n(28),T=n(29),E=n(33),N=n(32),q=n(30),F=n.n(q),A=function(e){Object(E.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(G.a)(this,n),(r=t.call(this,e)).state={wordCloud:[]},r}return Object(T.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(){return(n=Object(d.a)(l.a.mark((function e(){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/wordCloudStats/",{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,t.setState({wordCloud:r}),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)},t=this,function(){return n.apply(this,arguments)}().then((function(){F()(r.refs["my-canvas"],{list:r.state.wordCloud,gridSize:8,weightFactor:8,fontFamily:"Hiragino Mincho Pro, serif",color:"random-dark",rotateRatio:0,backgroundColor:"#f0f0f0"})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Your Company Recognition Word Cloud"}),Object(r.jsx)("canvas",{ref:"my-canvas"})]})}}]),n}(c.Component),I=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/superfans/",{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log("superfans",n),a(n),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Superfans!"}),Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Rank"}),Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Gratitude"}),Object(r.jsx)("th",{children:"Cheers for Peers"}),Object(r.jsx)("th",{children:"Game Changer"}),Object(r.jsx)("th",{children:"Raise The Roof!"})]})}),Object(r.jsx)("tbody",{children:n.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.rank}),Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.level5}),Object(r.jsx)("td",{children:e.level10}),Object(r.jsx)("td",{children:e.level20}),Object(r.jsx)("td",{children:e.level25})]},e.rank)}))})]})]})},P=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/history/",{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log("history",n),a(n),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Recent Recognition"}),Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Submitted By"}),Object(r.jsx)("th",{children:"Gift Level"}),Object(r.jsx)("th",{children:"Text"})]})}),Object(r.jsx)("tbody",{children:n.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.submittedBy}),Object(r.jsx)("td",{children:e.level}),Object(r.jsx)("td",{children:e.text})]},e.id)}))})]})]})};function B(){var e=Object(u.a)(["\n  text-align: center;\n"]);return B=function(){return e},e}function W(){var e=Object(u.a)(["\n  margin: 20px;\n"]);return W=function(){return e},e}var $=h.a.div(W()),J=h.a.h1(B());var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},D=(n(47),Object(r.jsx)(o.a,{children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/recognition-app",component:function(){return Object(r.jsxs)($,{children:[Object(r.jsx)(J,{children:"Workgrid Rockstar!"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(o.b,{to:"/",className:"link",children:"Recognize"})," | ",Object(r.jsx)(o.b,{to:"/recognition-app/superfans",className:"link",children:"Superfans"})," | ",Object(r.jsx)(o.b,{to:"/recognition-app/history",className:"link",children:"Recent Recognition"})," | ",Object(r.jsx)(o.b,{to:"/recognition-app/wordcloud",className:"link",children:"Company Wordmap"})]}),Object(r.jsx)("div",{children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/recognition-app",exact:!0,component:z}),Object(r.jsx)(i.b,{path:"/recognition-app/superfans",exact:!0,component:I}),Object(r.jsx)(i.b,{path:"/recognition-app/history",exact:!0,component:P}),Object(r.jsx)(i.b,{path:"/recognition-app/wordcloud",exact:!0,component:A})]})})]})}}),Object(r.jsx)(i.a,{from:"/",to:"/recognition-app"})]})}));s.a.render(D,document.getElementById("root")),L()}},[[48,1,2]]]);
//# sourceMappingURL=main.e46a5879.chunk.js.map