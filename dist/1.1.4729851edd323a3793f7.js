webpackJsonp([1],{

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reducers = __webpack_require__(264);
	
	exports.default = function (store) {
	  return {
	    path: '/part',
	    getComponent: function getComponent(nextState, next) {
	      __webpack_require__.e/* nsure */(2, function (require) {
	        /*  These modules are lazily evaluated using require hook, and
	        will not loaded until the router invokes this callback. */
	        var Part = __webpack_require__(328).default;
	        var partReducer = __webpack_require__(329).default;
	        (0, _reducers.injectReducer)(store, {
	          key: 'part',
	          reducer: partReducer
	        });
	        next(null, Part);
	      });
	    }
	  };
	};

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reducers = __webpack_require__(264);
	
	exports.default = function (store) {
	  return {
	    path: 'list/:id',
	    getComponent: function getComponent(nextState, next) {
	      __webpack_require__.e/* nsure */(3, function (require) {
	        /*  These modules are lazily evaluated using require hook, and
	         will not loaded until the router invokes this callback. */
	        var List = __webpack_require__(396).default;
	        var listReducer = __webpack_require__(397).default;
	        (0, _reducers.injectReducer)(store, {
	          key: 'list',
	          reducer: listReducer
	        });
	
	        next(null, List);
	      });
	    }
	  };
	};

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NotFound = __webpack_require__(400);
	
	var _NotFound2 = _interopRequireDefault(_NotFound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  path: '*',
	  component: _NotFound2.default
	};

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NotFound = undefined;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(196);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var goBack = function goBack(e) {
	  e.preventDefault();
	  return _reactRouter.browserHistory.goBack();
	};
	
	var NotFound = exports.NotFound = function NotFound() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h4',
	      null,
	      'Page not found!'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      _react2.default.createElement(
	        'a',
	        { href: '#', onClick: goBack },
	        '\u2190 Back'
	      )
	    )
	  );
	};
	
	exports.default = NotFound;

/***/ }

});
//# sourceMappingURL=1.1.4729851edd323a3793f7.js.map