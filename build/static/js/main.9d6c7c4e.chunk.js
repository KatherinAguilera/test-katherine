(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),s=(t(7),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),p=function(){return r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Past Trials")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"How It Works")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Log In / Sign Up")))},d=function(){return r.a.createElement("section",{className:"container-hero"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Rule of Thumb."),r.a.createElement("div",{className:"menu"},r.a.createElement(p,null))),r.a.createElement("div",{className:"votos"},r.a.createElement("div",{className:"opinion"},r.a.createElement("p",null,"Whats your opinion on"),r.a.createElement("h2",null,"Pope Francis"),r.a.createElement("p",null," He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true peadophile punishing pontiff? (thumbs up)"),r.a.createElement("a",{href:"#Home"},"More information"),r.a.createElement("p",null,"Whats Your Verdict?")),r.a.createElement("div",{className:"icons"},r.a.createElement("div",{className:"like"},r.a.createElement("i",{class:"far fa-thumbs-up"})),r.a.createElement("div",{className:"dislike"},r.a.createElement("i",{class:"far fa-thumbs-down"})))),r.a.createElement("div",{className:"info"},"Closing in ",r.a.createElement("strong",null,"22 days")))},E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.percentUp,a=100-e,t={width:e+"%"},n={width:a+"%"};return r.a.createElement("div",{className:"percent-bar"},r.a.createElement("div",{className:"percent-bar-up",style:t},e,"%"),r.a.createElement("div",{className:"percent-bar-down",style:n},a,"%"))}}]),a}(n.Component),h=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(){t.setState(function(e){var a=e.percentUp+2;return a>100&&(a=100),a<0&&(a=0),console.log("newValue:",a),{percentUp:a}})},t.state={percentUp:parseFloat(t.props.percentUp)||0,voteEnabled:!0},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e={backgroundImage:"url("+this.props.image+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100%",width:"100%"},a=this.state.percentUp>=100;return r.a.createElement("section",{className:"person"},r.a.createElement("div",{style:e},r.a.createElement("div",{className:"description"},r.a.createElement("div",{className:"name"},r.a.createElement("h3",{className:"text"},this.props.name||"Kanye West"),r.a.createElement("p",{className:"text"},r.a.createElement("strong",null,"1 month ago")," in business"),r.a.createElement("p",{className:"text-p"},"Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero."),r.a.createElement("div",{className:"votes-count"},r.a.createElement("div",{className:""},r.a.createElement("i",{class:"far fa-thumbs-up"})),r.a.createElement("div",{className:""},r.a.createElement("i",{class:"far fa-thumbs-down"})),r.a.createElement("button",{type:"button",className:"btn",disabled:a,href:"/",onClick:this.handleChange},"Vote Now ",this.isDisabled)))),r.a.createElement(E,{name:this.props.name,percentUp:this.state.percentUp})))}}]),a}(n.Component),b=function(){return r.a.createElement("section",{className:"counted"},r.a.createElement("div",null,"Speak out. Be heard.",r.a.createElement("h3",null,"Be counted")),r.a.createElement("div",{className:"counted-r"},r.a.createElement("p",null,"Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It\u2019s easy: You share your opinion, we analyze and put the data in a public report.")))},f=function(){return r.a.createElement("footer",{className:"container-f"},r.a.createElement("div",{className:"suscription"},r.a.createElement("p",null,"Is there anyone else you would want us to add?")),r.a.createElement("div",{className:"suscription-b"},r.a.createElement("button",null,"Submit a name")))},v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("main",null,r.a.createElement(b,null),r.a.createElement("div",{className:"voto"},"Votes"),r.a.createElement("section",{className:"persons"},r.a.createElement(h,{name:"Kanye West",image:"kanye-west.jpg",percentUp:"64"}),r.a.createElement(h,{name:"Mark Zuckerberg",image:"mark-zuckerberg.jpg",percentUp:"10"}),r.a.createElement(h,{name:"Cristina Fern\xe1ndez de Kitchner",image:"kristina-fernandez-de-kitchner.jpg",percentUp:"4"}),r.a.createElement(h,{name:"Malala Yousafzai",image:"malala-yousafzai.jpg",percentUp:"97"}))),r.a.createElement(f,null))}}]),a}(n.Component);c.a.render(r.a.createElement(v,null),document.getElementById("app"))},7:function(e,a,t){},9:function(e,a,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.9d6c7c4e.chunk.js.map