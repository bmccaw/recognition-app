(this.webpackJsonprecognition=this.webpackJsonprecognition||[]).push([[0],{24:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),i=n(15),s=n.n(i),o=(n(24),n(4)),u=n(2),j=n.n(u),p=n(3),d=n(5),l=n(9),b=n(13),m=n(6),f=n.p+"static/media/gratitude.0135e22c.jpg",x=n.p+"static/media/gamechanger.8fb66372.jpg",h=n.p+"static/media/cheersforpeers.81a4914b.jpg",O=n.p+"static/media/raisetheroof.d804c118.jpg";function g(){var e=Object(d.a)(['\n  color: #bf1650;\n  ::before {\n    display: inline;\n    content: "\u26a0 ";\n  }\n']);return g=function(){return e},e}function y(){var e=Object(d.a)(["\n  width: 70px;\n  height: auto;\n"]);return y=function(){return e},e}function v(){var e=Object(d.a)(["\n  grid-column: 2 / 4;\n  grid-row: 1 / 3;\n"]);return v=function(){return e},e}function N(){var e=Object(d.a)(["\n  grid-column: 1;\n  grid-row: 1 / 5;\n"]);return N=function(){return e},e}function z(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n"]);return z=function(){return e},e}function k(){var e=Object(d.a)(["\n  text-align: center;\n"]);return k=function(){return e},e}function G(){var e=Object(d.a)(["\n  margin: 20px;\n"]);return G=function(){return e},e}var W=m.a.div(G()),Z=m.a.h1(k()),F=m.a.form(z()),w=m.a.div(N()),R=m.a.div(v()),S=m.a.img(y()),Y=m.a.p(g());function T(){var e=Object(l.b)(),t=e.register,n=e.handleSubmit,c=e.errors;return Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"YjQ4a2syZzc5bGFjNDUxa3RjdGRrc3ZvNzoxOTc0NnNsN3A2cmtyYWp1MWpxcGczZm1haXFpNGkxaHNoaDkzZmFrdWp0aW5ybHZhYWVy",e.next=3,fetch("https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/users/",{method:"GET",mode:"no-cors",headers:{Authorization:"Bearer ".concat("YjQ4a2syZzc5bGFjNDUxa3RjdGRrc3ZvNzoxOTc0NnNsN3A2cmtyYWp1MWpxcGczZm1haXFpNGkxaHNoaDkzZmFrdWp0aW5ybHZhYWVy")}});case 3:t=e.sent,console.log(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.jsxs)(W,{children:[Object(r.jsx)(Z,{children:"Workgrid Rockstar!"}),Object(r.jsxs)(F,{onSubmit:n((function(e){function t(){return(t=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"YjQ4a2syZzc5bGFjNDUxa3RjdGRrc3ZvNzoxOTc0NnNsN3A2cmtyYWp1MWpxcGczZm1haXFpNGkxaHNoaDkzZmFrdWp0aW5ybHZhYWVy",e.next=3,fetch("https://yfvnkbux6j.execute-api.us-east-1.amazonaws.com/users/2/recognize",{method:"POST",mode:"no-cors",headers:{Authorization:"Bearer ".concat("YjQ4a2syZzc5bGFjNDUxa3RjdGRrc3ZvNzoxOTc0NnNsN3A2cmtyYWp1MWpxcGczZm1haXFpNGkxaHNoaDkzZmFrdWp0aW5ybHZhYWVy"),"Content-Type":"application/json"},body:JSON.stringify({text:"You did a great job!",imageUrl:"http://clipartmag.com/images/congrats-smiley-faces-25.jpg",level:10})});case 3:t=e.sent,console.log(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log(e),function(){t.apply(this,arguments)}()})),children:[Object(r.jsxs)(w,{children:[Object(r.jsx)("p",{children:"Who would you like to recognize?"}),Object(r.jsx)("input",{type:"text",placeholder:"Recipient Email",name:"RecipientEmail",ref:t({required:"This input is required.",pattern:/^\S+@\S+$/i})}),Object(r.jsx)(b.a,{errors:c,name:"RecipientEmail",render:function(e){var t=e.messages;return console.log("messages",t),t?Object.entries(t).map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.jsx)(Y,{children:a},n)})):null}}),Object(r.jsx)("p",{children:"Tell us why you think they are a rockstar..."}),Object(r.jsx)("textarea",{name:"text",placeholder:"Add a message...",ref:t({required:"This input is required."})}),Object(r.jsx)(b.a,{errors:c,name:"text",render:function(e){var t=e.messages;return console.log("messages",t),t?Object.entries(t).map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.jsx)(Y,{children:a},n)})):null}})]}),Object(r.jsxs)(R,{children:[Object(r.jsx)("p",{children:"Select your gift level..."}),Object(r.jsx)("input",{type:"radio",id:"Starbucks",name:"level",value:"5",ref:t({required:!0})}),Object(r.jsx)(S,{src:f}),Object(r.jsx)("label",{for:"5",children:"Gratitude: $5 Starbucks Gift Card"}),Object(r.jsx)("p",{}),Object(r.jsx)("input",{type:"radio",id:"Starbucks",name:"level",value:"10",ref:t({required:!0})}),Object(r.jsx)(S,{src:h}),Object(r.jsx)("label",{for:"10",children:"Cheers for Peers: $10 Starbucks Gift Card"}),Object(r.jsx)("p",{}),Object(r.jsx)("input",{type:"radio",id:"Amazon",name:"level",value:"20",ref:t({required:!0})}),Object(r.jsx)(S,{src:x}),Object(r.jsx)("label",{for:"20",children:"Game Changer: $20 Amazon Gift Card"}),Object(r.jsx)("p",{}),Object(r.jsx)("input",{type:"radio",id:"Amazon",name:"level",value:"25",ref:t({required:!0})}),Object(r.jsx)(S,{src:O}),Object(r.jsx)("label",{for:"25",children:"Raise the Roof: $25 Amazon Gift Card"}),Object(r.jsx)("p",{}),Object(r.jsx)("input",{type:"submit"})]})]})]})}var A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),A()}},[[28,1,2]]]);
//# sourceMappingURL=main.9ea714b8.chunk.js.map