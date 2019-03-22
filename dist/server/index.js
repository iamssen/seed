!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=25)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var r=n(19),a=n(0),o=n.n(a),c=n(20),l=n(7),i=n(6),u=n(2),s=n(21),m=n.n(s);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return p}),n.d(t,"b",function(){return v});var d=Object(a.createContext)();function p(e){var t=e.initialState,n=e.children,s=e.currentLocale,p=e.currentTimezone,v=Object(c.useLocale)(s,{cookieKey:u.a.locale}),b=v.locale,E=v.updateLocale,y=Object(i.useTimezone)(p,u.a.timezone),h=y.timezone,S=y.updateTimezone,O=function(e){var t=f(Object(a.useState)(e),2),n=t[0],r=t[1],o=m()().location,c=f(Object(a.useState)(o),2),l=c[0],i=c[1];return Object(a.useEffect)(function(){l.pathname!==o.pathname&&(i(o),r(null))},[o]),{initialState:n}}(t).initialState;return o.a.createElement(l.IntlProvider,{locale:b.slice(0,2),messages:r[b]},o.a.createElement(d.Provider,{value:{initialState:O,locale:b,timezone:h,updateLocale:E,updateTimezone:S}},n))}function v(){return Object(a.useContext)(d)}d.Consumer},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u});var r=n(12),a=n(17),o=n.n(a),c=n(18),l=n.n(c),i={locale:"locale",timezone:"timezone"},u=["en-US","ko-KR"];Object(r.addLocaleData)(o.a),Object(r.addLocaleData)(l.a)},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),c=n(1);function l(){var e=Object(c.b)(),t=e.locale,n=e.updateLocale;return o.b.map(function(e){return a.a.createElement("button",{key:e,className:e===t?"active":"",onClick:function(){return n(e)}},e)})}function i(e){var t=e.routeStore;return a.a.createElement(a.a.Fragment,null,t.getAllRoutes())}var u=n(3);function s(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.NavLink,{to:"/",exact:!0},"HOME"),a.a.createElement(u.NavLink,{to:"/translation-sample"},"TRANSLATION"),a.a.createElement(u.NavLink,{to:"/timezone-sample"},"TIMEZONE"))}var m=n(6);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(){var e=Object(c.b)(),t=e.timezone,n=e.updateTimezone,o=f(Object(r.useState)(t.zoneName),2),l=o[0],i=o[1],u=Object(r.useCallback)(function(e){var t=e.target.value;i(t),m.timezoneMap.has(t)&&n(t)},[n]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{list:"timezones","aria-invalid":!m.timezoneMap.has(l),value:l,onChange:u}),a.a.createElement("datalist",{id:"timezones"},m.timezoneList.map(function(e){return a.a.createElement("option",{key:e.zoneName,value:e.zoneName})})))}n(27);function p(e){var t=e.routeStore;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"header"},a.a.createElement(s,null),a.a.createElement("div",{className:"header-space"}),a.a.createElement(l,null),a.a.createElement(d,null)),a.a.createElement("div",{className:"body"},a.a.createElement(i,{routeStore:t})))}var v=new(n(22).SyncRouteStore)([{path:"/",exact:!0,component:n(28).default},{path:"/translation-sample",component:n(29).default},{path:"/timezone-sample",component:n(30).default}]),b=n(8),E=n(9),y=n(10),h=n(23),S=n.n(h);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function j(e,t){var n=e.cookies[o.a.locale]||e.acceptsLanguages.apply(e,x(o.b))||o.b[0],r=e.cookies[o.a.timezone]||"Asia/Seoul",l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}({locale:n},t),i=Object(E.renderToString)(a.a.createElement(y.StaticRouter,{location:e.url,context:{}},a.a.createElement(c.a,{initialState:l,currentLocale:n,currentTimezone:r},a.a.createElement(p,{routeStore:v}))));return Object(b.render)(S.a,{base:"/",body:i,initialState:JSON.stringify(l)})}n.d(t,"a",function(){return j})},function(e,t){e.exports=require("moment-timezone")},function(e,t){e.exports=require("use-timezone")},function(e,t){e.exports=require("use-react-intl")},function(e,t){e.exports=require("ejs")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("react-intl")},function(e,t){e.exports=require("react-devdoc")},function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(0),o=n.n(a),c=n(9),l=n(10),i=n(3);function u(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.Route,{exact:!0,path:"/showcase",component:n(33).default}),o.a.createElement(i.Route,{path:"/showcase/sample",component:n(37).default}))}function s(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.Link,{to:"/showcase"},"Home"),o.a.createElement(i.Link,{to:"/showcase/sample"},"Samle"))}n(36);function m(){return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(u,null))}var f=n(24),d=n.n(f);function p(e,t){t.send(function(e){var t=Object(c.renderToString)(o.a.createElement(l.StaticRouter,{location:e.url,context:{}},o.a.createElement(m,null)));return Object(r.render)(d.a,{base:"/",body:t})}(e))}n.d(t,"requestHandler",function(){return p})},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-intl/locale-data/en")},function(e,t){e.exports=require("react-intl/locale-data/ko")},function(e){e.exports={"en-US":{"sample.text":"THIS IS TRANSLATION TEXT ({locale})"},"ko-KR":{"sample.text":"이것은 다국어 문자열 입니다 ({locale})"}}},function(e,t){e.exports=require("use-locale")},function(e,t){e.exports=require("use-react-router")},function(e,t){e.exports=require("react-router-store")},function(e,t){e.exports='<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=UTF-8>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <% if (locals.base) { %>\n      <base href="<%- locals.base %>"/>\n    <% } %>\n    <link rel="stylesheet" type="text/css" href="vendor.css"/>\n    <link rel="stylesheet" type="text/css" href="style.css"/>\n    <title>Seed</title>\n    <% if (locals.initialState) { %>\n      <script>\n        window.__INITIAL_STATE__ = <%- locals.initialState.replace(/</g, \'\\\\u003c\'); %>\n      <\/script>\n    <% } %>\n  </head>\n  \n  <body>\n    <div id="app"><%- (locals.body || \'\') %></div>\n  </body>\n  \n  <script src="vendor.js"><\/script>\n  <script src="style.js"><\/script>\n  \x3c!-- And if you use css themes you need require add their js files. --\x3e\n  <script src="<%- (locals.body ? \'app\' : \'html-app\') %>.js"><\/script>\n</html>'},function(e,t){e.exports='<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=UTF-8>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <% if (locals.base) { %>\n      <base href="<%- locals.base %>"/>\n    <% } %>\n    <link rel="stylesheet" type="text/css" href="vendor.css"/>\n    <link rel="stylesheet" type="text/css" href="style.css"/>\n    <title>Showcase</title>\n  </head>\n  \n  <body>\n    <div id="app"><%- (locals.body || \'\') %></div>\n  </body>\n  \n  <script src="vendor.js"><\/script>\n  <script src="style.js"><\/script>\n  \x3c!-- And if you use css themes you need require add their js files. --\x3e\n  <script src="<%- (locals.body ? \'showcase\' : \'html-showcase\') %>.js"><\/script>\n</html>'},function(e,t,n){"use strict";n.r(t);var r=n(11),a=n.n(r),o=n(15),c=n.n(o),l=n(16),i=n.n(l),u=n(5),s=n.n(u),m=Number(process.env.PORT||4100),f=i()();f.use(a.a.urlencoded({extended:!1})),f.use(a.a.json()),f.use(c()()),f.get("/",n(26).requestHandler),f.get("/translation-sample",n(31).requestHandler),f.get("/timezone-sample",n(32).requestHandler),f.get("/showcase",n(14).requestHandler),f.get("/showcase/*",n(14).requestHandler),f.listen(m,function(){console.log("SSR server started ".concat(m," [").concat(s()().format("HH:mm:ss"),"]"))})},function(e,t,n){"use strict";n.r(t),n.d(t,"requestHandler",function(){return a});var r=n(4);function a(e,t){t.send(Object(r.a)(e,{sample:{testString:"SERVER SIDE RENDERING INITIAL STATE"}}))}},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n(1),a=n(0),o=n.n(a);function c(){var e=Object(r.b)().initialState,t=Object(a.useMemo)(function(){return e&&e.sample?e.sample.testString:"LOCAL VALUE"},[]);return o.a.createElement("div",null,"THIS TEXT IS FROM ",t)}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var r=n(1),a=n(0),o=n.n(a),c=n(7);function l(){var e=Object(r.b)().locale,t=Object(c.useIntl)().formatMessage;return o.a.createElement("div",null,t({id:"sample.text"},{locale:e}))}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var r=n(1),a=n(5),o=n.n(a),c=n(0),l=n.n(c),i="LLLL";function u(){var e=Object(r.b)(),t=e.locale,n=e.timezone;return l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"TIME OF LOCAL COMPUTER"),l.a.createElement("td",null,o()().locale(t).format(i))),l.a.createElement("tr",null,l.a.createElement("th",null,'TIME OF CURRENT TIMEZONE "',n.zoneName,'"'),l.a.createElement("td",null,o.a.tz(n.zoneName).locale(t).format(i))),l.a.createElement("tr",null,l.a.createElement("th",null,'TIME OF "Asia/Singapore"'),l.a.createElement("td",null,o.a.tz("Asia/Singapore").locale(t).format(i))))))}},function(e,t,n){"use strict";n.r(t),n.d(t,"requestHandler",function(){return a});var r=n(4);function a(e,t){t.send(Object(r.a)(e,{sample:{testString:"THIS TEXT IS FROM SERVER SIDE RENDERING INITIAL STATE"}}))}},function(e,t,n){"use strict";n.r(t),n.d(t,"requestHandler",function(){return a});var r=n(4);function a(e,t){t.send(Object(r.a)(e,{}))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);t.default=function(){return a.a.createElement("div",null,"Showcase Main")}},function(e,t){e.exports="# Sample\n\n- sample\n- sample\n- sample\n\n```typescript jsx\nimport React, { Component } from 'react';\n\nexport function Component() {\n  return (\n    <div>Hello?</div>\n  );\n} \n```"},function(e,t){e.exports="import React from 'react';\n\nexport function Sample() {\n  return (\n    <div>\n      Sample...??\n    </div>\n  );\n}"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13);function c(){return a.a.createElement("div",null,"Sample...??")}t.default=function(){return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(o.Markdown,{text:n(34)}),a.a.createElement(c,null),a.a.createElement(o.CodeBlock,{value:n(35),language:"typescript jsx"})))}}]));