(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{232:function(e,l,t){"use strict";t.r(l);var a=t(2),n=t(10),r=t(175),c=t.n(r),u=t(0),o=t.n(u),i=t(25);function m(){var e=Object(n.b)().locale;return o.a.createElement("div",null,e)}l.default=function(){var e=Object(n.b)(),l=e.initialState,t=e.locale,r=e.timezone,b=Object(u.useMemo)(function(){return l&&l.sample?l.sample.testString:"Initial Value"},[]),p=a.b(Object(u.useState)(null),2),s=p[0],E=p[1],L=Object(u.useCallback)(function(){if(!s){var e=document.createElement("div");document.body.appendChild(e),E(e)}},[s]);return o.a.createElement("div",null,o.a.createElement("br",null),b,o.a.createElement("br",null),o.a.createElement("ul",null,o.a.createElement("li",null,"Local: ",c()().locale(t).format("LLLL")),o.a.createElement("li",null,"Current: ",c.a.tz(r.zoneName).locale(t).format("LLLL")),o.a.createElement("li",null,"Asia/Singapore: ",c.a.tz("Asia/Singapore").locale(t).format("LLLL"))),o.a.createElement("br",null),o.a.createElement("button",{onClick:L},"Open portal"),o.a.createElement("br",null),s?Object(i.createPortal)(o.a.createElement(m,null),s):null)}}}]);