webpackJsonp([1],{226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(117);t.default=function(e){return{path:"list/:id",getComponent:function(t,r){n.e(4,function(t){var l=n(164).default,o=n(134).default;(0,u.injectReducer)(e,{key:"list",reducer:o}),r(null,l)})}}}},227:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.NotFound=void 0;var r=n(2),l=u(r),o=n(69),c=function(e){return e.preventDefault(),o.browserHistory.goBack()},a=l.default.createElement("div",null,l.default.createElement("h4",null,"Page not found!"),l.default.createElement("p",null,l.default.createElement("a",{href:"#",onClick:c},"← Back"))),f=t.NotFound=function(){return a};t.default=f},228:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(227),l=u(r);t.default={path:"*",component:l.default}},233:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(117);t.default=function(e){return{path:"/part",getComponent:function(t,r){n.e(3,function(t){var l=n(165).default,o=n(135).default;(0,u.injectReducer)(e,{key:"part",reducer:o}),r(null,l)})}}}},235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(117);t.default=function(e){return{path:"/recent",getComponent:function(t,r){n.e(5,function(t){var l=n(166).default,o=n(136).default;(0,u.injectReducer)(e,{key:"recent",reducer:o}),r(null,l)})}}}}});