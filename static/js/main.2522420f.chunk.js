(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(3),i=n.n(a),o=n(4),s=n(5),j=n(6),d=n(9),b=n(8),l=n(7),u=n.n(l),h=n(0),O=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{className:u.a.section,children:[Object(h.jsx)("h2",{children:t}),n]})},f=(n(15),function(e){var t=e.option,n=e.onLeaveFeedback;return Object(h.jsx)("button",{type:"button",onClick:function(){return n(t)},children:t})}),p=(n(16),function(e){var t=e.message;return Object(h.jsx)("h3",{children:t})}),x=(n(17),function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage,i=0===r;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Statistics"}),i?Object(h.jsx)(p,{message:"No feedback given"}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Good:",t]}),Object(h.jsxs)("p",{children:["Neutral:",n]}),Object(h.jsxs)("p",{children:["Bad:",c]}),Object(h.jsxs)("p",{children:["Total:",r]}),Object(h.jsxs)("p",{children:["Positive feedback:",a,"%"]})]})]})}),v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.good,c=t.neutral,r=t.bad,a=n+c+r,i=(n/a*100).toFixed(1);return Object(h.jsxs)(O,{title:"Please leave feedback",children:[Object.keys(this.state).map((function(t){return Object(h.jsx)(f,{option:t,onLeaveFeedback:e.handleIncrement},t)})),Object(h.jsx)(x,{good:n,neutral:c,bad:r,total:a,positivePercentage:i})]})}}]),n}(c.Component);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={section:"Section_section__1oAMV"}}},[[18,1,2]]]);
//# sourceMappingURL=main.2522420f.chunk.js.map