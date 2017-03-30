/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-unused-vars */

var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (e) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(_x, _x2, _x3) {
  var _again = true;_function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var assign = __webpack_require__(1);

function autoBind(object) {
  var proto = object.constructor.prototype;

  var names = Object.getOwnPropertyNames(proto).filter(function (key) {
    return key != 'constructor' && key != 'render' && typeof proto[key] == 'function';
  });

  names.push('setState');
  names.forEach(function (key) {
    object[key] = object[key].bind(object);
  });

  return object;
}

var ReactClass = function (_React$Component) {
  _inherits(ReactClass, _React$Component);

  function ReactClass(props) {
    _classCallCheck(this, ReactClass);

    _get(Object.getPrototypeOf(ReactClass.prototype), 'constructor', this).call(this, props);
    autoBind(this);
  }

  _createClass(ReactClass, [{
    key: 'prepareProps',
    value: function prepareProps(thisProps) {

      var props = assign({}, thisProps);

      props.style = this.prepareStyle(props);
      props.className = this.prepareClassName(props);

      return props;
    }
  }, {
    key: 'prepareClassName',
    value: function prepareClassName(props) {
      var className = props.className || '';

      var defaultProps = this.constructor.defaultProps;

      if (defaultProps && defaultProps.defaultClassName != null) {
        className += ' ' + defaultProps.defaultClassName;
      }

      return className;
    }
  }, {
    key: 'prepareStyle',
    value: function prepareStyle(props) {
      var defaultStyle;

      if (this.constructor.defaultProps) {
        defaultStyle = this.constructor.defaultProps.defaultStyle;
      }

      return assign({}, defaultStyle, props.style);
    }
  }]);

  return ReactClass;
}(React.Component);

module.exports = ReactClass;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: !0 });exports.default = function () {
  for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
    a[_key] = arguments[_key];
  }return a.filter(function (b) {
    return !!b;
  }).join(' ');
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: !0 });exports.default = function (a) {
  return function (b, c) {
    var d = b ? '-' + b : '',
        e = c ? '--' + c : '';return '' + a + d + e;
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

// Generated by CoffeeScript 1.7.1
(function () {
  var getNanoSeconds, hrtime, loadTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = exports.Flex = undefined;

var _Flex = __webpack_require__(42);

Object.defineProperty(exports, 'Flex', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Flex).default;
  }
});

var _Item = __webpack_require__(43);

Object.defineProperty(exports, 'Item', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Item).default;
  }
});

var _Flex2 = _interopRequireDefault(_Flex);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  Flex: _Flex2.default,
  Item: _Item2.default
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var now = __webpack_require__(7),
    root = typeof window === 'undefined' ? global : window,
    vendors = ['moz', 'webkit'],
    suffix = 'AnimationFrame',
    raf = root['request' + suffix],
    caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
      id = 0,
      queue = [],
      frameDuration = 1000 / 60;

  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = now(),
          next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };

  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
module.exports.cancel = function () {
  caf.apply(root, arguments);
};
module.exports.polyfill = function () {
  root.requestAnimationFrame = raf;
  root.cancelAnimationFrame = caf;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var notEmpty = function notEmpty(v) {
  return !!v;
};

exports.default = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(notEmpty).join(' ');
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// currently used to initiate the velocity style object to 0


exports.__esModule = true;
exports['default'] = mapToZero;

function mapToZero(obj) {
  var ret = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = 0;
    }
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// usage assumption: currentStyle values have already been rendered but it says
// nothing of whether currentStyle is stale (see unreadPropStyle)


exports.__esModule = true;
exports['default'] = shouldStopAnimation;

function shouldStopAnimation(currentStyle, style, currentVelocity) {
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }

    if (currentVelocity[key] !== 0) {
      return false;
    }

    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
    // stepper will have already taken care of rounding precision errors, so
    // won't have such thing as 0.9999 !=== 1
    if (currentStyle[key] !== styleValue) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the


exports.__esModule = true;
exports["default"] = stepper;

var reusedTuple = [0, 0];

function stepper(secondPerFrame, x, v, destX, k, b, precision) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}

module.exports = exports["default"];
// array reference around.

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}



exports.__esModule = true;
exports['default'] = stripStyle;

function stripStyle(style) {
  var ret = {};
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }
    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotifyResize = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactClass = __webpack_require__(2);

var _reactClass2 = _interopRequireDefault(_reactClass);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var notifyResizeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  overflow: 'hidden',
  display: 'block',
  pointerEvents: 'none',
  opacity: 0
};

var expandToolStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto'
};

var contractToolStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto'
};

var contractToolInnerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '200%',
  height: '200%'
};

var NotifyResize = function (_Component) {
  _inherits(NotifyResize, _Component);

  function NotifyResize(props) {
    _classCallCheck(this, NotifyResize);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NotifyResize).call(this, props));

    _this.state = {
      notifyResizeWidth: 0,
      notifyResizeHeight: 0,

      expandToolWidth: 0,
      expandToolHeight: 0,

      contractToolWidth: 0,
      contractToolHeight: 0
    };

    return _this;
  }

  _createClass(NotifyResize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof this.props.onMount === 'function') {
        this.props.onMount(this);
      }

      this.resetResizeTool();

      if (this.props.notifyOnMount) {
        var _notifyResizeSize = this.notifyResizeSize;
        var width = _notifyResizeSize.notifyResizeWidth;
        var height = _notifyResizeSize.notifyResizeHeight;

        this.onResize({ width: width, height: height });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        ref: 'notifyResize',
        style: notifyResizeStyle,
        onScroll: this.checkResize
      }, this.renderExpandTool(), this.renderContractTool());
    }
  }, {
    key: 'renderExpandTool',
    value: function renderExpandTool() {
      return _react2.default.createElement('div', {
        ref: 'expandTool',
        className: 'expandTool',
        style: expandToolStyle
      }, _react2.default.createElement('div', {
        ref: 'expandToolInner',
        className: 'expandToolInner',
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: this.state.expandToolWidth,
          height: this.state.expandToolHeight
        }
      }));
    }
  }, {
    key: 'renderContractTool',
    value: function renderContractTool() {
      return _react2.default.createElement('div', {
        ref: 'contractTool',
        className: 'contractTool',
        style: contractToolStyle,
        onScroll: this.checkResize
      }, _react2.default.createElement('div', { ref: 'contractInner', style: contractToolInnerStyle }));
    }
  }, {
    key: 'resetResizeTool',
    value: function resetResizeTool() {
      this.setDimensions();
      this.scrollToBottomExpandTool();
    }
  }, {
    key: 'setDimensions',
    value: function setDimensions() {
      var _notifyResizeSize2 = this.notifyResizeSize = this.getDimensions();

      var notifyResizeWidth = _notifyResizeSize2.notifyResizeWidth;
      var notifyResizeHeight = _notifyResizeSize2.notifyResizeHeight;

      // Resize tool will be bigger than it's parent by 1 pixel in each direction

      this.setState({
        notifyResizeWidth: notifyResizeWidth,
        notifyResizeHeight: notifyResizeHeight,
        expandToolWidth: notifyResizeWidth + 1,
        expandToolHeight: notifyResizeHeight + 1
      });
    }
  }, {
    key: 'getDimensions',
    value: function getDimensions() {
      var notifyResize = this.refs.notifyResize;
      var node = notifyResize.parentElement || notifyResize;

      var size = void 0;

      if (typeof this.props.measureSize == 'function') {
        size = this.props.measureSize(node, notifyResize);
      } else {
        size = {
          width: node.offsetWidth,
          height: node.offsetHeight
        };
      }

      return {
        notifyResizeWidth: size.width,
        notifyResizeHeight: size.height
      };
    }
  }, {
    key: 'scrollToBottomExpandTool',
    value: function scrollToBottomExpandTool() {
      var _this2 = this;

      // so the scroll moves when element resizes

      if (this.refs.notifyResize) {
        setTimeout(function () {
          // scroll to bottom
          var expandTool = _this2.refs.expandTool;

          if (expandTool) {
            expandTool.scrollTop = expandTool.scrollHeight;
            expandTool.scrollLeft = expandTool.scrollWidth;
          }

          var contractTool = _this2.refs.contractTool;
          if (contractTool) {
            contractTool.scrollTop = contractTool.scrollHeight;
            contractTool.scrollLeft = contractTool.scrollWidth;
          }
        }, 0);
      }
    }
  }, {
    key: 'checkResize',
    value: function checkResize() {
      var _getDimensions = this.getDimensions();

      var notifyResizeWidth = _getDimensions.notifyResizeWidth;
      var notifyResizeHeight = _getDimensions.notifyResizeHeight;

      if (notifyResizeWidth !== this.state.notifyResizeWidth || notifyResizeHeight !== this.state.notifyResizeHeight) {
        // reset resizeToolDimensions
        this.onResize({
          width: notifyResizeWidth,
          height: notifyResizeHeight
        });
        this.resetResizeTool();
      }
    }
  }, {
    key: 'onResize',
    value: function onResize(_ref) {
      var width = _ref.width;
      var height = _ref.height;

      if (typeof this.props.onResize === 'function') {
        this.props.onResize({ width: width, height: height });
      }
    }
  }]);

  return NotifyResize;
}(_reactClass2.default);

NotifyResize.propTypes = {
  onResize: _react.PropTypes.func,
  onMount: _react.PropTypes.func,
  notifyOnMount: _react.PropTypes.bool
};

var notifyResize = function notifyResize(Component) {
  return function (_Component2) {
    _inherits(NotifyResizeWrapper, _Component2);

    function NotifyResizeWrapper() {
      _classCallCheck(this, NotifyResizeWrapper);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(NotifyResizeWrapper).apply(this, arguments));
    }

    _createClass(NotifyResizeWrapper, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var component = this.component = this.refs.component;

        // check if they are mounted
        if (!this.notifyResize) {
          console.warn('For notifyResize to work you must render resizeTool from {props.resizeTool}');
        }
      }
    }, {
      key: 'onNotifyResizeMount',
      value: function onNotifyResizeMount(notifier) {
        this.notifyResize = notifier;
      }
    }, {
      key: 'render',
      value: function render() {

        var resizeTool = _react2.default.createElement(NotifyResize, {
          onResize: this.onResize,
          onMount: this.onNotifyResizeMount,

          notifyOnMount: this.props.notifyOnMount
        });

        return _react2.default.createElement(Component, _extends({ ref: 'component' }, this.props, { resizeTool: resizeTool }));
      }
    }, {
      key: 'onResize',
      value: function onResize() {
        if (typeof this.props.onResize === 'function') {
          var _props;

          (_props = this.props).onResize.apply(_props, arguments);
        }

        if (typeof this.refs.component.onResize === 'function') {
          var _refs$component;

          (_refs$component = this.refs.component).onResize.apply(_refs$component, arguments);
        }
      }
    }]);

    return NotifyResizeWrapper;
  }(Component);
};

exports.default = notifyResize;
exports.NotifyResize = NotifyResize;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var el;

module.exports = function () {

	if (!el && !!global.document) {
		el = global.document.createElement('div');
	}

	if (!el) {
		el = { style: {} };
	}

	return el;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toUpperFirst = __webpack_require__(18);
var prefixes = ["ms", "Moz", "Webkit", "O"];

var el = __webpack_require__(16);

var ELEMENT;
var PREFIX;

module.exports = function (key) {

	if (PREFIX !== undefined) {
		return PREFIX;
	}

	ELEMENT = ELEMENT || el();

	var i = 0;
	var len = prefixes.length;
	var tmp;
	var prefix;

	for (; i < len; i++) {
		prefix = prefixes[i];
		tmp = prefix + toUpperFirst(key);

		if (typeof ELEMENT.style[tmp] != 'undefined') {
			return PREFIX = prefix;
		}
	}

	return PREFIX;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
		return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var text = __webpack_require__(71);
exports.title = (React.createElement("h1", { id: "title", className: "header", style: { backgroundImage: "https://leahhanvey.files.wordpress.com/2015/07/ubc-header-official.png", color: "white", fontWeight: 'bold' } }, text.title));
exports.course = (React.createElement("h1", { id: "course", className: "header", style: { backgroundColor: "#012144", color: "white", fontWeight: 200, font: "arial", allowFontScaling: false, fontFamily: "arial", display: "block", border: 0, margin: 0 } }, text.course));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37).Buffer))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  delete props.display;
  delete props.wrap;
  delete props.row;
  delete props.column;
  delete props.alignItems;
  delete props.alignSelf;
  delete props.alignContent;
  delete props.justifyContent;
  delete props.flex;
  delete props.flexGrow;
  delete props.flexFlow;
  delete props.flexShrink;
  delete props.flexBasis;
  delete props.inline;
  delete props.wrap;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _join = __webpack_require__(10);

var _join2 = _interopRequireDefault(_join);

var _props2flex = __webpack_require__(45);

var _props2flex2 = _interopRequireDefault(_props2flex);

var _prefix = __webpack_require__(44);

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PREFIX = _prefix2.default;

exports.default = function (props) {

  var column = !!props.column;
  var row = !column && !!props.row;
  var reverse = props.reverse ? '-reverse' : '';

  var flex = (0, _props2flex2.default)(props);

  var flexGrow = props.flexGrow;
  var flexShrink = props.flexShrink;
  var flexBasis = props.flexBasis;
  var display = props.inline ? 'inline-flex' : props.display;

  var className = (0, _join2.default)(props.className, props.alignItems ? PREFIX + '--align-items-' + props.alignItems : null, props.alignContent ? PREFIX + '--align-content-' + props.alignContent : null, props.justifyContent ? PREFIX + '--justify-content-' + props.justifyContent : null, props.wrap ? PREFIX + '--wrap' : null, props.alignSelf ? PREFIX + '--align-self-' + props.alignSelf : null, row ? PREFIX + '--row' + reverse : null, column ? PREFIX + '--column' + reverse : null,

  // more like flex item related
  flex != null ? PREFIX + '--flex-' + flex : null, flexGrow != null ? PREFIX + '--flex-grow-' + flexGrow : null, flexShrink != null ? PREFIX + '--flex-shrink-' + flexShrink : null, flexBasis != null ? PREFIX + '--flex-basis-' + flexBasis : null, display != null ? PREFIX + '--display-' + display : null);

  return className;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = {
  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};
module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'alignItems': 1,
  'justifyContent': 1,
  'flex': 1,
  'flexFlow': 1,
  'flexGrow': 1,
  'flexShrink': 1,
  'flexBasis': 1,
  'flexDirection': 1,
  'flexWrap': 1,
  'alignContent': 1,
  'alignSelf': 1,

  'userSelect': 1,
  'transform': 1,
  'transition': 1,
  'transformOrigin': 1,
  'transformStyle': 1,
  'transitionProperty': 1,
  'transitionDuration': 1,
  'transitionTimingFunction': 1,
  'transitionDelay': 1,
  'borderImage': 1,
  'borderImageSlice': 1,
  'boxShadow': 1,
  'backgroundClip': 1,
  'backfaceVisibility': 1,
  'perspective': 1,
  'perspectiveOrigin': 1,
  'animation': 1,
  'animationDuration': 1,
  'animationName': 1,
  'animationDelay': 1,
  'animationDirection': 1,
  'animationIterationCount': 1,
  'animationTimingFunction': 1,
  'animationPlayState': 1,
  'animationFillMode': 1,
  'appearance': 1
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: !0 });var _objectAssign = __webpack_require__(1),
    _objectAssign2 = _interopRequireDefault(_objectAssign);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }return Array.from(arr);
}var filter = function filter(a) {
  return Object.keys(a).reduce(function (b, c) {
    var d = a[c];return void 0 !== d && (b[c] = d), b;
  }, {});
};exports.default = function (a) {
  for (var _len = arguments.length, b = Array(1 < _len ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    b[_key - 1] = arguments[_key];
  }return _objectAssign2.default.apply(void 0, [a].concat(_toConsumableArray(b.map(filter))));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: !0 });exports.default = { top: 1, bottom: 1, left: 1, right: 1 };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(67);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(0));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["react-json-editor"] = factory(require("react"));else root["react-json-editor"] = factory(root["react"]);
})(undefined, function (__WEBPACK_EXTERNAL_MODULE_2__) {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.loaded = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			/*
   The MIT License (MIT)
   	Copyright (c) 2015 The Australian National University
   	Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
   	The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
   	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.
   */

			'use strict';

			module.exports = __webpack_require__(1);

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var React = __webpack_require__(2);
			var $ = React.DOM;

			var ou = __webpack_require__(3);

			var fields = __webpack_require__(4);
			var normalise = __webpack_require__(17);
			var validator = __webpack_require__(18);

			module.exports = React.createClass({
				displayName: 'Form',

				getInitialState: function getInitialState() {
					var values = this.props.values;
					var errors = this.validate(this.props.schema, values, context(this.props));
					return { values: values,
						output: values,
						errors: errors };
				},
				componentWillReceiveProps: function componentWillReceiveProps(props) {
					var values = props.values || this.state.values;
					var output = props.values || this.state.output;
					this.setState({
						values: values,
						output: output,
						errors: this.validate(props.schema, output, context(props))
					});
				},
				setValue: function setValue(path, raw, parsed) {
					var schema = this.props.schema;
					var ctx = context(this.props);
					var values = normalise(ou.setIn(this.state.values, path, raw), schema, ctx);
					var output = normalise(ou.setIn(this.state.output, path, parsed), schema, ctx);
					var errors = this.validate(schema, output, ctx);

					if (this.props.submitOnChange) {
						this.props.onSubmit(output, null, errors);
					}

					this.setState({
						values: values,
						output: output,
						errors: errors
					});
				},
				getValue: function getValue(path) {
					return ou.getIn(this.state.values, path);
				},
				getErrors: function getErrors(path) {
					return this.state.errors[makeKey(path)];
				},
				validate: function validate(schema, values, context) {
					var validate = this.props.validate || validator;
					return hashedErrors(validate(schema, values, context));
				},
				preventSubmit: function preventSubmit(event) {
					event.preventDefault();
				},
				handleSubmit: function handleSubmit(event) {
					this.props.onSubmit(this.state.output, event.target.value, this.state.errors);
				},
				handleKeyPress: function handleKeyPress(event) {
					if (event.keyCode === 13 && this.props.enterKeySubmits) {
						this.props.onSubmit(this.state.output, this.props.enterKeySubmits);
					}
				},
				renderButtons: function renderButtons() {
					var submit = this.handleSubmit;

					if (typeof this.props.buttons === 'function') {
						return this.props.buttons(submit);;
					} else {
						var buttons = (this.props.buttons || ['Cancel', 'Submit']).map(function (value) {
							return $.input({ type: 'submit',
								key: value,
								value: value,
								onClick: submit });
						});
						return $.p(null, buttons);
					}
				},
				render: function render() {
					var renderedFields = fields.make(fields, {
						schema: this.props.schema,
						context: context(this.props),
						fieldWrapper: this.props.fieldWrapper,
						sectionWrapper: this.props.sectionWrapper,
						handlers: this.props.handlers,
						hints: this.props.hints,
						path: [],
						update: this.setValue,
						getValue: this.getValue,
						getErrors: this.getErrors
					});

					return $.form({ onSubmit: this.preventSubmit,
						onKeyPress: this.handleKeyPress,
						className: this.props.className
					}, this.props.extraButtons ? this.renderButtons() : $.span(), renderedFields, this.renderButtons());
				}
			});

			function hashedErrors(errors) {
				var result = {};
				var i, entry;
				for (i = 0; i < errors.length; ++i) {
					entry = errors[i];
					result[makeKey(entry.path)] = entry.errors;
				}
				return result;
			}

			function makeKey(path) {
				return path.join('_');
			}

			function context(props) {
				return props.context || props.schema;
			}

			/***/
		},
		/* 2 */
		/***/function (module, exports) {

			module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

			/*
   The MIT License (MIT)
   Copyright (c) 2014 The Australian National University
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.
   */

			'use strict';

			var isNat = function isNat(x) {
				return typeof x == 'number' && x >= 0 && x % 1 == 0;
			};

			var object = function object() {
				var args = Array.prototype.slice.call(arguments);
				var result = [];
				var i;

				for (i = 0; i + 1 < args.length; i += 2) {
					if (!isNat(args[i])) result = {};
				}for (i = 0; i + 1 < args.length; i += 2) {
					result[args[i]] = args[i + 1];
				}return result;
			};

			var merge = function merge() {
				var args = Array.prototype.slice.call(arguments);
				var result = args.every(Array.isArray) ? [] : {};
				var i, obj, key;
				for (i in args) {
					obj = args[i];
					for (key in obj) {
						result[key] = obj[key];
					}
				}
				return result;
			};

			var getIn = function getIn(root, path) {
				if (path.length == 0 || root == undefined) return root;else return getIn(root[path[0]], path.slice(1));
			};

			var setIn = function setIn(root, path, value) {
				if (path.length == 0) return value;else {
					var child = root == null ? null : root[path[0]];
					var value = setIn(child || [], path.slice(1), value);
					return merge(root, object(path[0], value));
				}
			};

			var without = function without(obj) {
				var args = [].slice.call(arguments);
				var result = Array.isArray(obj) ? [] : {};

				for (var key in obj) {
					if (args.indexOf(key) < 0) result[key] = obj[key];
				}return result;
			};

			var prune = function prune(root) {
				var result, isArray, key, val;

				if (root == null || root === '') result = null;else if (root.constructor === Array || root.constructor === Object) {
					isArray = Array.isArray(root);
					result = isArray ? [] : {};
					for (key in root) {
						val = prune(root[key]);
						if (val != null) {
							if (isArray) result.push(val);else result[key] = val;
						}
					}

					if (Object.keys(result).length == 0) result = null;
				} else result = root;

				return result;
			};

			var split = function split(pred, obj) {
				var good = {};
				var bad = {};

				for (key in obj) {
					var val = obj[key];
					if (pred(key, val)) good[key] = val;else bad[key] = val;
				}

				return [good, bad];
			};

			var map = function map(fn, obj) {
				var output = {};
				var key;

				for (key in obj) {
					output[key] = fn(obj[key]);
				}return output;
			};

			var mapKeys = function mapKeys(fn, obj) {
				var output = {};
				var key;

				for (key in obj) {
					output[fn(key)] = obj[key];
				}return output;
			};

			module.exports = {
				object: object,
				merge: merge,
				without: without,
				getIn: getIn,
				setIn: setIn,
				prune: prune,
				split: split,
				map: map,
				mapKeys: mapKeys
			};

			/***/
		},
		/* 4 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			module.exports = {
				CheckBox: __webpack_require__(5),
				FileField: __webpack_require__(6),
				InputField: __webpack_require__(11),
				UserDefinedField: __webpack_require__(14),
				Selection: __webpack_require__(15),
				make: __webpack_require__(16)
			};

			/***/
		},
		/* 5 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var React = __webpack_require__(2);
			var $ = React.DOM;

			var CheckBox = React.createClass({
				displayName: 'CheckBox',

				handleChange: function handleChange(event) {
					var val = event.target.checked ? true : null;
					this.props.update(this.props.path, val, val);
				},
				render: function render() {
					return $.input({
						name: this.props.label,
						type: "checkbox",
						checked: this.props.value || false,
						onChange: this.handleChange,
						disabled: this.props.disabled });
				}
			});

			module.exports = CheckBox;

			/***/
		},
		/* 6 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var React = __webpack_require__(2);
			var $ = React.DOM;

			var ou = __webpack_require__(3);

			var types = __webpack_require__(7);
			var wrapped = __webpack_require__(10);

			var FileField = React.createClass({
				displayName: 'FileField',

				loadFile: function loadFile(event) {
					var reader = new FileReader();
					var file = event.target.files[0];
					var val = ou.merge(this.props.getValue(this.props.path), {
						name: file.name,
						type: file.type,
						size: file.size
					});

					this.props.update(this.props.path, val, val);

					reader.onload = function (event) {
						val.data = event.target.result;
						this.props.update(this.props.path, val, val);
					}.bind(this);

					if (file) {
						if (this.props.mode === 'dataURL') {
							reader.readAsDataURL(file);
						} else {
							reader.readAsText(file);
						}
					}
				},
				render: function render() {
					var fields = this.props.fields || {};
					var value = this.props.value || {};
					var list = [$.input({ key: "input", type: "file", onChange: this.loadFile }), $.dl({ key: "fileProperties" }, $.dt(null, "Name"), $.dd(null, value.name || '-'), $.dt(null, "Size"), $.dd(null, value.size || '-'), $.dt(null, "Type"), $.dd(null, value.type || '-'))];

					return wrapped.section(this.props, list.concat(types.object(fields, this.props)));
				}
			});

			module.exports = FileField;

			/***/
		},
		/* 7 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var ou = __webpack_require__(3);

			var _alternative = __webpack_require__(8);

			var types = {
				alternative: function alternative(fields, props) {
					var s = _alternative.schema(props.getValue(props.path), props.schema, props.context);

					return types.object(fields, ou.merge(props, { schema: s }));
				},
				array: function array(fields, props) {
					var move = function move(props, i, n) {
						return function (to) {
							if (!canMoveUp(i, n) && !canMoveDown(i, n)) return;
							var newList = props.getValue(props.path);
							var value = newList.splice(to, 1);

							newList.splice(i, 0, value[0]);
							props.update(props.path, newList, newList);
						};
					};
					var canMoveUp = function canMoveUp(i, n) {
						return i > 0 && i < n - 1;
					};
					var moveUp = function moveUp(props, i, n) {
						return function () {
							if (!canMoveUp(i, n)) return;
							var newList = props.getValue(props.path);
							var value = newList.splice(i, 1);

							newList.splice(i - 1, 0, value[0]);
							props.update(props.path, newList, newList);
						};
					};

					var canMoveDown = function canMoveDown(i, n) {
						return n > 1 && i < n - 2;
					};
					var moveDown = function moveDown(props, i, n) {
						return function () {
							if (!canMoveDown(i, n)) return;
							var newList = props.getValue(props.path);
							var value = newList.splice(i, 1);

							newList.splice(i + 1, 0, value[0]);
							props.update(props.path, newList, newList);
						};
					};

					var canRemoveItem = function canRemoveItem(i, n) {
						return i < n;
					};

					var removeItem = function removeItem(props, i, n) {
						return function () {
							if (!canRemoveItem(i, n)) return;

							var newList = props.getValue(props.path);
							newList.splice(i, 1);
							props.update(props.path, newList, newList);
						};
					};

					var n = (props.getValue(props.path) || []).length + 1;
					var list = [];
					for (var i = 0; i < n; ++i) {
						list.push(fields.make(fields, ou.merge(props, {
							schema: props.schema.items,
							path: props.path.concat(i),
							move: move(props, i, n),
							moveUp: moveUp(props, i, n),
							moveDown: moveDown(props, i, n),
							canMoveUp: canMoveUp(i, n),
							canMoveDown: canMoveDown(i, n),
							removeItem: removeItem(props, i, n),
							canRemoveItem: canRemoveItem(i, n)
						})));
					}

					return list;
				},
				object: function object(fields, props) {
					var keys = fullOrdering(props.schema['x-ordering'], props.schema.properties);

					return keys.map(function (key) {
						return fields.make(fields, ou.merge(props, {
							schema: props.schema.properties[key],
							path: props.path.concat(key)
						}));
					});
				}
			};

			module.exports = types;

			function fullOrdering(list, obj) {
				var keys = Object.keys(obj || {});
				var result = [];
				var i, k;

				for (i in list || []) {
					k = list[i];
					if (keys.indexOf(k) >= 0) {
						result.push(k);
					}
				}

				for (i in keys) {
					k = keys[i];
					if (result.indexOf(k) < 0) {
						result.push(k);
					}
				}

				return result;
			}

			/***/
		},
		/* 8 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var ou = __webpack_require__(3);
			var resolve = __webpack_require__(9);

			exports.schema = function (value, schema, context) {
				var selector, options, selected;

				selector = ou.getIn(schema, ['x-hints', 'form', 'selector']);
				if (!selector) {
					return;
				}

				var dereferenced = schema.oneOf.map(function (alt) {
					return resolve(alt, context);
				});

				options = dereferenced.map(function (alt) {
					return ou.getIn(alt, ['properties', selector, 'enum', 0]) || "";
				});

				selected = (value || {})[selector] || options[0];

				return ou.merge(ou.setIn(dereferenced[options.indexOf(selected)], ['properties', selector], ou.merge(ou.getIn(schema, ['properties', selector]), { enum: options })), { type: 'object' });
			};

			/***/
		},
		/* 9 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var ou = __webpack_require__(3);

			module.exports = function (schema, context) {
				var reference = schema['$ref'];

				if (reference) {
					if (!reference.match(/^#(\/([a-zA-Z_][a-zA-Z_0-9]*|[0-9]+))*$/)) {
						throw new Error('reference ' + reference + ' has unsupported format');
					}

					return ou.merge(ou.getIn(context, reference.split('/').slice(1)), without(schema, '$ref'));
				} else {
					return schema;
				}
			};

			function without(obj) {
				var args = [].slice.call(arguments);
				var result = Array.isArray(obj) ? [] : {};

				for (var key in obj) {
					if (args.indexOf(key) < 0) {
						result[key] = obj[key];
					}
				}

				return result;
			}

			/***/
		},
		/* 10 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var React = __webpack_require__(2);
			var $ = React.DOM;

			var ou = __webpack_require__(3);

			var errorClass = function errorClass(errors) {
				if (!errors || errors.length === 0) {
					return '';
				}

				return 'error';
			};

			var makeTitle = function makeTitle(description, errors) {
				var parts = [];
				if (description && description.length > 0) {
					parts.push(description);
				}
				if (errors && errors.length > 0) {
					parts.push(errors.join('\n'));
				}
				return parts.join('\n\n');
			};

			var FieldWrapper = React.createClass({ displayName: "FieldWrapper",
				render: function render() {
					var classes = [].concat(errorClass(this.props.errors) || [], 'form-element', this.props.classes || []);

					return $.div({
						className: classes.join(' '),
						key: this.props.label,
						title: makeTitle(this.props.description, this.props.errors)
					}, $.label({
						htmlFor: this.props.label
					}, this.props.title), this.props.children);
				}
			});

			var SectionWrapper = React.createClass({ displayName: "SectionWrapper",
				render: function render() {
					var level = this.props.path.length;
					var classes = [].concat('form-section', level > 0 ? 'form-subsection' : [], this.props.classes || []);
					var legendClasses = [].concat(errorClass(this.props.errors) || [], 'form-section-title');

					return $.fieldset({
						className: classes.join(' '),
						key: this.props.label
					}, $.legend({
						className: legendClasses.join(' '),
						title: makeTitle(this.props.description, this.props.errors)
					}, this.props.title), this.props.children);
				}
			});

			var propsForWrapper = function propsForWrapper(props, section) {
				var propsFW = {
					key: props.key,
					label: props.label,
					path: props.path,
					errors: props.errors,
					classes: ou.getIn(props.schema, ['x-hints', 'form', 'classes']),
					title: props.schema.title,
					type: props.schema.type,
					description: props.schema.description,
					schema: props.schema
				};

				if (section && props.isArrayItem) {
					if (props.isArrayItem) {
						var vals = props.getValue(props.path);
						var title = props.title;
						if (vals) {
							var itemHeaderKey = ou.getIn(props.schema, ['x-hints', 'itemHeader', "property"]);
							var itemHeader = itemHeaderKey && vals[itemHeaderKey] || vals.title || vals.name;
							title = title && itemHeader ? title + " - " + itemHeader : itemHeader || title;
						}

						propsFW = ou.merge(propsFW, {
							title: title || propsFW.title,
							move: props.move,
							moveUp: props.moveUp,
							moveDown: props.moveDown,
							canMoveUp: props.canMoveUp,
							canMoveDown: props.canMoveDown,
							removeItem: props.removeItem,
							canRemoveItem: props.canRemoveItem
						});
					}

					propsFW = ou.merge(propsFW, {
						isArrayItem: props.isArrayItem
					});
				}

				return propsFW;
			};

			exports.section = function (props, fields) {
				if (React.isValidElement(props.sectionWrapper)) {
					return React.cloneElement(props.sectionWrapper, propsForWrapper(props, true), fields);
				}
				return React.createElement(props.sectionWrapper || SectionWrapper, propsForWrapper(props, true), fields);
			};

			exports.field = function (props, field) {
				if (React.isValidElement(props.fieldWrapper)) {
					return React.cloneElement(props.fieldWrapper, propsForWrapper(props), field);
				}
				return React.createElement(props.fieldWrapper || FieldWrapper, propsForWrapper(props), field);
			};

			/***/
		},
		/* 11 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var React = __webpack_require__(2);
			var $ = React.DOM;

			var normalizer = __webpack_require__(12);
			var parser = __webpack_require__(13);

			var InputField = React.createClass({
				displayName: 'InputField',

				normalize: function normalize(text) {
					return normalizer[this.props.type](text);
				},
				parse: function parse(text) {
					return parser[this.props.type](text);
				},
				handleChange: function handleChange(event) {
					var text = this.normalize(event.target.value);
					this.props.update(this.props.path, text, this.parse(text));
				},
				handleKeyPress: function handleKeyPress(event) {
					if (event.keyCode === 13) {
						event.preventDefault();
					}
				},
				render: function render() {
					return $.input({
						type: "text",
						disabled: this.props.disabled,
						hidden: this.props.hidden,
						name: this.props.label,
						value: this.props.value || '',
						onKeyPress: this.handleKeyPress,
						onChange: this.handleChange });
				}
			});

			module.exports = InputField;

			/***/
		},
		/* 12 */
		/***/function (module, exports) {

			'use strict';

			exports.string = function (text) {
				return text.replace(/\s+/g, ' ').replace(/^ /, '').replace(/\u00ad/g, '');
			};

			exports.integer = function (text) {
				return text.replace(/[^-\d]/g, '').replace(/(.)-/g, '$1');
			};

			exports.number = function (text) {
				return text.replace(/[^-\.e\d]/ig, '').replace(/(e[^e]*)e/ig, '$1').replace(/([e.][^.]*)\./ig, '$1').replace(/([^e])-/ig, '$1').replace(/(e-?\d\d\d)\d/ig, '$1');
			};

			/***/
		},
		/* 13 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var normalizer = __webpack_require__(12);

			exports.string = function (text) {
				return normalizer.string(text);
			};

			exports.integer = function (text) {
				return text ? parseInt(normalizer.integer(text)) : null;
			};

			exports.number = function (text) {
				return text ? parseFloat(normalizer.number(text)) : null;
			};

			/***/
		},
		/* 14 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var React = __webpack_require__(2);

			var normalizer = __webpack_require__(12);
			var parser = __webpack_require__(13);

			var UserDefinedField = React.createClass({
				displayName: 'UserDefinedField',

				normalize: function normalize(text) {
					var n = normalizer[this.props.type];
					return n ? n(text) : text;
				},
				parse: function parse(text) {
					var p = parser[this.props.type];
					return p ? p(text) : text;
				},
				handleChange: function handleChange(value) {
					var text = this.normalize(value);
					this.props.update(this.props.path, text, this.parse(text));
				},
				handleKeyPress: function handleKeyPress(event) {
					if (event.keyCode === 13) {
						event.preventDefault();
					}
				},
				render: function render() {
					return React.createElement(this.props.component, {
						name: this.props.label,
						schema: this.props.schema,
						value: this.props.value || '',
						onKeyPress: this.handleKeyPress,
						onChange: this.handleChange
					});
				}
			});

			module.exports = UserDefinedField;

			/***/
		},
		/* 15 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var React = __webpack_require__(2);
			var $ = React.DOM;

			var normalizer = __webpack_require__(12);
			var parser = __webpack_require__(13);

			var Selection = React.createClass({
				displayName: 'Selection',

				normalize: function normalize(text) {
					// XXXXX: assume string in case type isn't set
					var type = this.props.type || 'string';

					return normalizer[type](text);
				},
				parse: function parse(text) {
					// XXXXX: assume string in case type isn't set
					var type = this.props.type || 'string';

					return parser[type](text);
				},
				handleChange: function handleChange(event) {
					var val = this.normalize(event.target.value);
					this.props.update(this.props.path, val, this.parse(val));
				},
				render: function render() {
					var names = this.props.names;

					return $.select({
						name: this.props.label,
						value: this.props.value || this.props.values[0],
						onChange: this.handleChange,
						disabled: this.props.disabled
					}, this.props.values.map(function (opt, i) {
						return $.option({ key: opt, value: opt }, names[i] || opt);
					}));
				}
			});

			module.exports = Selection;

			/***/
		},
		/* 16 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var React = __webpack_require__(2);

			var ou = __webpack_require__(3);

			var resolve = __webpack_require__(9);
			var types = __webpack_require__(7);
			var wrapped = __webpack_require__(10);

			module.exports = function (fields, props) {
				var schema = resolve(props.schema, props.context);
				var hints = schema['x-hints'] || {};
				var inputComponent = ou.getIn(hints, ['form', 'inputComponent']);
				var disabled = ou.getIn(hints, ['form', 'disabled']);
				var hidden = ou.getIn(hints, ['form', 'hidden']);
				var key = makeKey(props.path);

				props = ou.merge(props, {
					schema: schema,
					key: key,
					label: key,
					value: props.getValue(props.path),
					errors: props.getErrors(props.path),
					type: schema.type,
					disabled: disabled,
					hidden: hidden
				});

				if (props.moveUp !== undefined) {
					if (props.isArrayItem) {
						delete props.isArrayItem;
						delete props.canMoveUp;
						delete props.canMoveDown;
						delete props.move;
						delete props.moveUp;
						delete props.moveDown;
					} else {
						props.isArrayItem = true;
					}
				}

				if (inputComponent) {
					props = ou.merge(props, { component: props.handlers[inputComponent] });
					return wrapped.field(props, React.createElement(fields.UserDefinedField, props));
				} else if (hints.fileUpload) {
					console.warn("DEPRECATION WARNING: built-in file upload will be removed");
					// FileField cannot depend on fields directly (cyclic dependency)
					props = ou.merge(props, { fields: fields });
					return React.createElement(fields.FileField, ou.merge(props, { mode: hints.fileUpload.mode }));
				} else if (schema['oneOf']) {
					return wrapped.section(props, types.alternative(fields, props));
				} else if (schema['enum']) {
					props = ou.merge(props, {
						values: schema['enum'],
						names: schema['enumNames'] || schema['enum'] });
					return wrapped.field(props, React.createElement(fields.Selection, props));
				}

				switch (schema.type) {
					case "boolean":
						return wrapped.field(props, React.createElement(fields.CheckBox, props));
					case "object":
						return wrapped.section(props, types.object(fields, props));
					case "array":
						return wrapped.section(props, types.array(fields, props));
					case "number":
					case "integer":
					case "string":
					default:
						return wrapped.field(props, React.createElement(fields.InputField, props));
				}
			};

			function makeKey(path) {
				return path.join('_');
			}

			/***/
		},
		/* 17 */
		/***/function (module, exports, __webpack_require__) {

			'use strict';

			var ou = __webpack_require__(3);

			var alternative = __webpack_require__(8);
			var resolve = __webpack_require__(9);

			module.exports = function (data, schema, context) {
				return ou.prune(withDefaultOptions(data, schema, context));
			};

			function withDefaultOptions(data, schema, context) {
				var result;
				var key;
				var effectiveSchema = resolve(schema, context);

				if (effectiveSchema.oneOf) {
					effectiveSchema = alternative.schema(data, effectiveSchema, context);
				}

				if (effectiveSchema['enum']) {
					result = data || effectiveSchema['enum'][0];
				} else if (effectiveSchema.type === 'object') {
					result = ou.merge(data);
					for (key in effectiveSchema.properties) {
						result[key] = withDefaultOptions((data || {})[key], effectiveSchema.properties[key], context);
					}
				} else if (effectiveSchema.type === 'array') {
					result = [];
					for (key = 0; key < (data || []).length; ++key) {
						result[key] = withDefaultOptions((data || [])[key], effectiveSchema.items, context);
					}
				} else {
					result = data;
				}
				return result;
			}

			/***/
		},
		/* 18 */
		/***/function (module, exports, __webpack_require__) {

			/*
   The MIT License (MIT)
   Copyright (c) 2014 The Australian National University
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   SOFTWARE.
   */

			'use strict';

			var ou = __webpack_require__(3);
			var alternative = __webpack_require__(8);

			var checkNumber = function checkNumber(schema, instance) {
				var errors = [];

				if (schema.maximum !== null) {
					if (instance > schema.maximum) errors.push('may be at most ' + schema.maximum);else if (schema.exclusiveMaximum && instance >= schema.maximum) errors.push('must be less than ' + schema.maximum);
				}
				if (schema.minimum !== null) {
					if (instance < schema.minimum) errors.push('must be at least ' + schema.minimum);else if (schema.exclusiveMinimum && instance <= schema.minimum) errors.push('must be more than ' + schema.minimum);
				}
				if (schema.multipleOf != null) {
					if (instance / schema.multipleOf % 1 != 0) errors.push('must be a multiple of ' + schema.multipleOf);
				}

				return errors;
			};

			var fieldErrors = function fieldErrors(errors) {
				if (errors.length > 0) return [{ path: [], errors: errors }];else return [];
			};

			var validator = {};

			validator.boolean = function (schema, instance) {
				var errors = [];

				if (typeof instance != 'boolean') errors.push('must be boolean');

				return fieldErrors(errors);
			};

			validator.enum = function (schema, instance) {
				var errors = [];

				if (schema.enum.indexOf(instance) < 0) errors.push('value not in list');

				return fieldErrors(errors);
			};

			validator.number = function (schema, instance) {
				var errors = [];

				if (typeof instance != 'number') errors.push('must be a number');else errors = checkNumber(schema, instance);

				return fieldErrors(errors);
			};

			validator.integer = function (schema, instance) {
				var errors = [];

				if (typeof instance != 'number') errors.push('must be a number');else {
					errors = checkNumber(schema, instance);
					if (instance % 1 > 0) errors.unshift('must be an integer');
				}

				return fieldErrors(errors);
			};

			validator.string = function (schema, instance) {
				var errors = [];

				if (typeof instance != 'string') errors.push('must be a string');else {
					if (schema.maxLength != null && instance.length > schema.maxLength) errors.push('may have at most ' + schema.maxLength + ' characters');
					if (schema.minLength != null && instance.length < schema.minLength) errors.push('must have at least ' + schema.minLength + ' characters');
					if (schema.pattern != null && !RegExp(schema.pattern).test(instance)) errors.push('must match ' + schema.pattern);
				}

				return fieldErrors(errors);
			};

			validator.array = function (schema, instance, context) {
				var errors = [];
				var result, i, j;

				if (!Array.isArray(instance)) return fieldErrors(['must be an array']);else {
					if (schema.maxItems != null && instance.length > schema.maxItems) errors.push('may have at most ' + schema.maxItems + ' items');
					if (schema.minItems != null && instance.length < schema.minItems) errors.push('must have at least ' + schema.minItems + ' items');
					result = fieldErrors(errors);

					if (schema.items != null) {
						for (i in instance) {
							errors = validate(schema.items, instance[i], context);
							for (j in errors) {
								result.push({
									path: [i].concat(errors[j].path),
									errors: errors[j].errors
								});
							}
						}
					}
				}

				return result;
			};

			var requires = function requires(schema, key) {
				var subschema;

				if (schema.required != null && schema.required.indexOf(key) >= 0) return 'must be present';else {
					subschema = schema.properties[key];
					if (subschema.type == 'array' && subschema.minItems > 0) return 'must have at least ' + subschema.minItems + ' items';else return null;
				}
			};

			validator.object = function (schema, instance, context) {
				var result = [];
				var key, errors, i;

				if (instance == null) instance = {};

				var alternativeSchema = alternative.schema(instance, schema, context);
				schema = alternativeSchema || schema;

				if (instance.constructor !== Object) result.push({ path: [], errors: ['must be a plain object'] });else {
					for (key in schema.properties) {
						if (instance.hasOwnProperty(key)) {
							errors = validate(schema.properties[key], instance[key], context);
							for (i = 0; i < errors.length; ++i) {
								result.push({
									path: [key].concat(errors[i].path),
									errors: errors[i].errors
								});
							}
						} else if (requires(schema, key)) {
							result.push({
								path: [key],
								errors: [requires(schema, key)]
							});
						}
					}
				}

				return result;
			};

			var cat = function cat(arrayOfArrays) {
				return [].concat.apply([], arrayOfArrays);
			};

			var resolve = function resolve(schema, context) {
				var reference = schema['$ref'];

				if (reference) {
					if (!reference.match(/^#(\/([a-zA-Z_][a-zA-Z_0-9]*|[0-9]+))*$/)) throw new Error('reference ' + reference + ' has unsupported format');

					return {
						allOf: [ou.without(schema, '$ref'), ou.getIn(context, reference.split('/').slice(1))]
					};
				} else return schema;
			};

			var validate = function validate(schema, instance, context) {
				var effectiveContext = context || schema;
				var effectiveSchema = resolve(schema, effectiveContext);

				if (effectiveSchema.allOf) {
					var results = [ou.without(effectiveSchema, 'allOf')].concat(effectiveSchema.allOf).map(function (schema) {
						return validate(schema, instance, effectiveContext);
					});
					return cat(results);
				} else {
					var type = effectiveSchema.enum ? 'enum' : effectiveSchema.type;
					if (type) return validator[type](effectiveSchema, instance, effectiveContext);else return [];
				}
			};

			module.exports = validate;

			/***/
		}
		/******/])
	);
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: !0 });exports.TabBody = exports.TabStrip = exports.Tab = void 0;var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
  }return target;
};var _typeof = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
} : function (obj) {
  return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
},
    _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
  };
}(),
    _react = __webpack_require__(0),
    _react2 = _interopRequireDefault(_react),
    _reactDom = __webpack_require__(3),
    _reactClass = __webpack_require__(2),
    _reactClass2 = _interopRequireDefault(_reactClass),
    _objectAssign = __webpack_require__(1),
    _objectAssign2 = _interopRequireDefault(_objectAssign),
    _reactFlex = __webpack_require__(8),
    _join = __webpack_require__(5),
    _join2 = _interopRequireDefault(_join),
    _getTransitionEnd = __webpack_require__(66),
    _getTransitionEnd2 = _interopRequireDefault(_getTransitionEnd),
    _TabStrip = __webpack_require__(63),
    _TabStrip2 = _interopRequireDefault(_TabStrip),
    _Body = __webpack_require__(61),
    _Body2 = _interopRequireDefault(_Body),
    _assignDefined = __webpack_require__(26),
    _assignDefined2 = _interopRequireDefault(_assignDefined),
    _tabPositions = __webpack_require__(27),
    _tabPositions2 = _interopRequireDefault(_tabPositions),
    _bemFactory = __webpack_require__(6),
    _bemFactory2 = _interopRequireDefault(_bemFactory),
    _reactStyleNormalizer = __webpack_require__(58),
    _reactStyleNormalizer2 = _interopRequireDefault(_reactStyleNormalizer);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
}function _possibleConstructorReturn(self, call) {
  if (!self) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call && ('object' == (typeof call === 'undefined' ? 'undefined' : _typeof2(call)) || 'function' == typeof call) ? call : self;
}function _inherits(subClass, superClass) {
  if ('function' != typeof superClass && null !== superClass) throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
}var CLASS_NAME = 'react-tab-panel',
    bem = (0, _bemFactory2.default)(CLASS_NAME),
    m = function m(a) {
  return bem(null, a);
},
    transitionWrapperClassName = CLASS_NAME + '__transition-wrapper',
    clone = function clone(a, d) {
  var e = a.props;return a = (0, _react.cloneElement)(a, (0, _objectAssign2.default)({}, e, d(e, a))), a;
},
    cloneDisplayNone = function cloneDisplayNone(a) {
  return clone(a, function (d) {
    var e = d ? d.style : null;return { style: (0, _objectAssign2.default)({}, e, { display: 'none' }) };
  });
},
    cloneWithClassName = function cloneWithClassName(a, d) {
  return clone(d, function (e) {
    return { className: (0, _join2.default)(e && e.className, a) };
  });
},
    STRATEGIES = { one: function one(a, d) {
    return a[d];
  }, all: function all(a, d) {
    return a.map(function (e, f) {
      return f !== d && (e = cloneDisplayNone(e)), e;
    });
  } },
    IN_CLASS_NAME = 'react-tab-panel__content--in',
    OUT_CLASS_NAME = 'react-tab-panel__content--out';var Tab = function (_Component) {
  function Tab() {
    return _classCallCheck(this, Tab), _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).apply(this, arguments));
  }return _inherits(Tab, _Component), _createClass(Tab, [{ key: 'render', value: function render() {
      return _react2.default.createElement('div', this.props);
    } }]), Tab;
}(_reactClass2.default);Tab.defaultProps = { isTabPanelTab: !0 };var TabPanel = function (_Component2) {
  function TabPanel(a) {
    _classCallCheck(this, TabPanel);var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(TabPanel).call(this, a));return _this2.state = { oldActiveIndex: null, activeIndex: a.defaultActiveIndex || 0 }, _this2.state = { oldActiveIndex: null, activeIndex: a.defaultActiveIndex || 0 }, _this2;
  }return _inherits(TabPanel, _Component2), _createClass(TabPanel, [{ key: 'prepareClassName', value: function prepareClassName(a) {
      return (0, _join2.default)(a.className, CLASS_NAME, m('orientation-' + (a.vertical ? 'vertical' : 'horizontal')), m('theme-' + a.theme), m('tab-align-' + a.tabAlign), m('tab-position-' + a.tabPosition));
    } }, { key: 'prepareProps', value: function prepareProps(a) {
      var d = (0, _objectAssign2.default)({}, a),
          e = {},
          f = void 0,
          g = void 0,
          h = void 0,
          i = [],
          j = [];return _react2.default.Children.toArray(d.children).forEach(function (k, l) {
        if (k) {
          var _n = k.props;if (_n) {
            if (_n.isTabStrip) return e = _n, void (g = l);_n.isTabBody && (f = _n, h = l);
          }
        }
      }), _react2.default.Children.toArray(f ? f.children : d.children).forEach(function (k) {
        if (!k) return null;var l = k.props || {};l.isTabPanelTab ? (i.push(l.children), d.transition && k.props.children && console.warn('You must only have one child in a Tab component when `transition` is true.')) : i.push(k);var n = void 0;n = l.isTabPanelTab ? (0, _objectAssign2.default)({}, l, { children: null }) : (0, _objectAssign2.default)({ title: l.tabTitle || '', disabled: l.disabled }, l.tabProps), j.push(n);
      }), d.tabs = j, d.activeIndex = this.prepareActiveIndex(d), d.tabPosition = this.prepareTabPosition(d, { tabStripIndex: g, tabBodyIndex: h }), d.vertical = d.vertical && ('left' == d.tabPosition || 'right' == d.tabPosition), d.tabStrip = e, d.tabBody = f, d.children = i, d.transition && (d.initialStrategy = d.strategy, d.strategy = this.transitionStrategy), d;
    } }, { key: 'componentDidMount', value: function componentDidMount() {
      this.body.addEventListener((0, _getTransitionEnd2.default)(), this.onBodyTransitionEnd);
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
      this.body && this.body.removeEventListener((0, _getTransitionEnd2.default)(), this.onBodyTransitionEnd);
    } }, { key: 'onBodyTransitionEnd', value: function onBodyTransitionEnd() {
      this.state.transitioning && this.setState({ transitioning: null, transitionInProgress: !1, wrapperStyle: null, oldActiveIndex: null });
    } }, { key: 'componentWillUpdate', value: function componentWillUpdate(a, d) {
      var _this3 = this,
          e = this.p.activeIndex,
          f = this.prepareActiveIndex(a, d);if (f != e && a.transition) {
        var _ret = function () {
          if (!_this3.wrapper) return { v: void 0 };var g = f > e ? 1 : -1,
              h = function h() {
            return 'one' == _this3.p.initialStrategy ? _this3.wrapper.firstChild : _this3.wrapper.children[e];
          },
              i = function i() {
            return 'one' == _this3.p.initialStrategy ? 1 == g ? _this3.wrapper.lastChild : _this3.wrapper.firstChild : _this3.wrapper.children[f];
          },
              j = h(),
              k = j && j.offsetHeight || 0,
              l = { height: _this3.wrapper.offsetHeight }; //at this point only 1 child should be rendered
          _this3.state.transitioning && _this3.onBodyTransitionEnd(), _this3.setState({ transitioning: g, wrapperStyle: { height: l.height }, oldActiveIndex: e }, function () {
            _this3.wrapper || _this3.onBodyTransitionEnd(); // debugger
            var n = i(),
                o = l.height - k + (n && n.offsetHeight || 0);_this3.setState({ transitioning: g, transitionInProgress: !0, wrapperStyle: { height: o } });
          });
        }();if ('object' == ('undefined' == typeof _ret ? 'undefined' : _typeof(_ret))) return _ret.v;
      }
    } }, { key: 'transitionStrategy', value: function transitionStrategy(a, d) {
      var _this4 = this,
          e = this.p.initialStrategy,
          f = STRATEGIES[e];f || console.warn('Strategy not supported for transition'), null == this.state.oldActiveIndex ? a = f(a, d) : 'one' == e ? function () {
        var h = [_this4.state.oldActiveIndex, d]; //render them in the correct order
        h.sort();var i = h[0],
            j = i == d,
            k = h[1],
            l = j ? IN_CLASS_NAME : OUT_CLASS_NAME,
            n = j ? OUT_CLASS_NAME : IN_CLASS_NAME;a = [clone(a[i], function (o) {
          return { style: _this4.addTransitionDuration(o && o.style), className: (0, _join2.default)(o && o.className, l) };
        }), clone(a[k], function (o) {
          return { style: _this4.addTransitionDuration(o && o.style), className: (0, _join2.default)(o && o.className, n) };
        })];
      }() : a = a.map(function (h, i) {
        return i != d && i != _this4.state.oldActiveIndex ? h = cloneDisplayNone(h) : function () {
          var j = i == d ? IN_CLASS_NAME : OUT_CLASS_NAME;h = clone(h, function (k) {
            return { className: (0, _join2.default)(k && k.className, j), style: _this4.addTransitionDuration(k.style) };
          });
        }(), h;
      });var g = this.addTransitionDuration(this.state.wrapperStyle);return _react2.default.createElement('div', { ref: function ref(h) {
          return _this4.wrapper = h;
        }, style: g, className: (0, _join2.default)(transitionWrapperClassName, this.props.vertical ? transitionWrapperClassName + '--vertical' : ''), children: a });
    } }, { key: 'addTransitionDuration', value: function addTransitionDuration(a) {
      return this.props.transitionDuration && (a = (0, _objectAssign2.default)({}, a, (0, _reactStyleNormalizer2.default)({ transitionDuration: this.props.transitionDuration }))), a;
    } }, { key: 'prepareTabPosition', value: function prepareTabPosition(a, _ref) {
      var d = _ref.tabStripIndex,
          e = _ref.tabBodyIndex,
          f = a.tabPosition in _tabPositions2.default ? a.tabPosition : 'top';return !a.tabPosition && void 0 !== d && void 0 !== e && d > e && (f = 'bottom'), f;
    } }, { key: 'prepareActiveIndex', value: function prepareActiveIndex(a, d) {
      return null == a.activeIndex ? (d || this.state).activeIndex : a.activeIndex;
    } }, { key: 'render', value: function render() {
      var a = this.p = this.prepareProps(this.props),
          d = this.prepareClassName(a),
          e = 'top' == a.tabPosition || 'left' == a.tabPosition,
          f = 'left' == a.tabPosition || 'right' == a.tabPosition,
          g = _defineProperty({}, f ? 'row' : 'column', !0);return _react2.default.createElement(_reactFlex.Flex, _extends({ wrap: !1, alignItems: 'stretch' }, g, { inline: !0 }, a, { tabIndex: null, className: d }), e && this.renderTabStrip(), this.renderBody(), !e && this.renderTabStrip());
    } }, { key: 'onActivate', value: function onActivate(a) {
      null == this.props.activeIndex && this.setState({ activeIndex: a }), this.props.onActivate(a);
    } }, { key: 'renderTabStrip', value: function renderTabStrip() {
      var a = this.p.tabs,
          _p = this.p,
          d = _p.activeIndex,
          e = _p.activateEvent,
          f = _p.onAddNew,
          g = _p.onCloseTab,
          h = _p.closeable,
          i = _p.scroller,
          j = _p.scrollSpringConfig,
          k = _p.scrollOnClick,
          l = _p.tabFactory,
          n = _p.tabStripFactory,
          o = _p.theme,
          p = _p.tabAlign,
          q = _p.tabStyle,
          r = _p.tabPosition,
          s = _p.tabEllipsis,
          t = _p.tabIndex,
          u = _p.vertical,
          v = { activateEvent: e, onActivate: this.onActivate, activeIndex: d, tabFactory: l, tabAlign: p, theme: o, defaultTabs: a, tabPosition: r, inTabPanel: !0 };(0, _assignDefined2.default)(v, { onAddNew: f, onCloseTab: g, closeable: h, scroller: i, scrollSpringConfig: j, scrollOnClick: k, vertical: u, tabStyle: q, tabEllipsis: s, tabIndex: t });var w = (0, _objectAssign2.default)({ tabFactory: l }, this.p.tabStrip, v),
          x = void 0;return n && (x = n(w)), void 0 == x && (x = _react2.default.createElement(_TabStrip2.default, w)), x;
    } }, { key: 'applyRenderStrategy', value: function applyRenderStrategy(_ref2) {
      var a = _ref2.activeIndex,
          d = _ref2.children,
          e = _ref2.strategy,
          f = STRATEGIES[e];return 'function' != typeof f && (f = 'function' == typeof e ? e : STRATEGIES.all), f(d, a);
    } }, { key: 'renderBody', value: function renderBody() {
      var _this5 = this,
          _p2 = this.p,
          a = _p2.activeIndex,
          d = _p2.transition,
          e = _p2.vertical,
          f = this.applyRenderStrategy(this.p);this.p.tabBody || {};var g = (0, _objectAssign2.default)({}, this.p.tabBody, { vertical: e, transition: d, transitionInProgress: this.state.transitionInProgress, activeIndex: a, tabPosition: this.p.tabPosition, children: f });return _react2.default.createElement(_Body2.default, _extends({ ref: function ref(h) {
          return _this5.body = (0, _reactDom.findDOMNode)(h);
        }, transitioning: this.state.transitioning }, g, this.state.bodyProps));
    } }]), TabPanel;
}(_reactClass2.default);exports.default = TabPanel;TabPanel.propTypes = { tabStripFactory: _react.PropTypes.func, tabFactory: _react.PropTypes.func, strategy: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['one', 'all']), _react.PropTypes.func]) }, TabPanel.defaultProps = { theme: 'default', tabAlign: 'start', onActivate: function onActivate() {}, strategy: 'one' };exports.Tab = Tab;exports.TabStrip = _TabStrip2.default;exports.TabBody = _Body2.default;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(3);

var ReactDOM = _interopRequireWildcard(_reactDom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var schema = exports.schema = {
    "title": "Courses",
    "id": "query",
    "properties": {
        "WHERE": {
            "id": "where",
            "title": "Filter by: ",
            "type": "object",
            // "enum": ["AND", "OR", "IS", "GT", "EQ", "LT", "NOT"],
            "oneOf": [{
                "properties": {
                    "WHERE": { "enum": ["Empty"] }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["Is"]
                    },
                    "IS": {
                        "type": "object",
                        "title": "String value only",
                        "oneOf": [{}, {
                            "properties": {
                                "IS": {
                                    "enum": ["Department"]
                                },
                                "courses_dept": {
                                    "type": "string"
                                }
                            }
                        }, {
                            "properties": {
                                "IS": {
                                    "enum": ["Instructor"]
                                },
                                "courses_instructor": {
                                    "title": "search with partial name using * syntax",
                                    "type": "string"
                                }
                            }
                        }, {
                            "properties": {
                                "IS": {
                                    "enum": ["Title"]
                                },
                                "courses_title": {
                                    "type": "string"
                                }
                            }
                        }, {
                            "properties": {
                                "IS": {
                                    "enum": ["ID"]
                                },
                                "courses_id": {
                                    "type": "string"
                                }
                            }
                        }],
                        "x-hints": {
                            "form": {
                                "selector": "IS"
                            }
                        }
                    }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["Greater than"]
                    },
                    "GT": {
                        "type": "object",
                        "title": "Number value only",
                        "oneOf": [{}, {
                            "properties": {
                                "GT": {
                                    "enum": ["Average"]
                                },
                                "courses_avg": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "GT": {
                                    "enum": ["Passed"]
                                },
                                "courses_pass": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "GT": {
                                    "enum": ["Failed"]
                                },
                                "courses_fail": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "GT": {
                                    "enum": ["Audited"]
                                },
                                "courses_audit": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "GT": {
                                    "enum": ["Year"]
                                },
                                "courses_year": {
                                    "type": "number"
                                }
                            }
                        }],
                        "x-hints": {
                            "form": {
                                "selector": "GT"
                            }
                        }
                    }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["Equal to"]
                    },
                    "EQ": {
                        "type": "object",
                        "title": "Number value only",
                        "oneOf": [{}, {
                            "properties": {
                                "EQ": {
                                    "enum": ["Average"]
                                },
                                "courses_avg": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "EQ": {
                                    "enum": ["Passed"]
                                },
                                "courses_pass": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "EQ": {
                                    "enum": ["Failed"]
                                },
                                "courses_fail": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "EQ": {
                                    "enum": ["Audited"]
                                },
                                "courses_audit": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "EQ": {
                                    "enum": ["Year"]
                                },
                                "courses_year": {
                                    "type": "number"
                                }
                            }
                        }],
                        "x-hints": {
                            "form": {
                                "selector": "EQ"
                            }
                        }
                    }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["Lower than"]
                    },
                    "LT": {
                        "type": "object",
                        "title": "Number value only",
                        "oneOf": [{}, {
                            "properties": {
                                "LT": {
                                    "enum": ["Average"]
                                },
                                "courses_avg": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "LT": {
                                    "enum": ["Passed"]
                                },
                                "courses_pass": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "LT": {
                                    "enum": ["Failed"]
                                },
                                "courses_fail": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "LT": {
                                    "enum": ["Audited"]
                                },
                                "courses_audit": {
                                    "type": "number"
                                }
                            }
                        }, {
                            "properties": {
                                "LT": {
                                    "enum": ["Year"]
                                },
                                "courses_year": {
                                    "type": "number"
                                }
                            }
                        }],
                        "x-hints": {
                            "form": {
                                "selector": "LT"
                            }
                        }
                    }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["And"]
                    },
                    "AND": {
                        "title": "And = ",
                        "type": "array",
                        "minItems": 2,
                        "items": {
                            "type": "object",
                            "oneOf": [{}, {
                                "properties": {
                                    "AND": {
                                        "enum": ["Is"]
                                    },
                                    "IS": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [{}, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["Department"]
                                                },
                                                "courses_dept": {
                                                    "type": "string"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["Instructor"]
                                                },
                                                "courses_instructor": {
                                                    "title": "search with partial name using * syntax",
                                                    "type": "string"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["Title"]
                                                },
                                                "courses_title": {
                                                    "type": "string"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["ID"]
                                                },
                                                "courses_id": {
                                                    "type": "string"
                                                }
                                            }
                                        }],
                                        "x-hints": {
                                            "form": {
                                                "selector": "IS"
                                            }
                                        }
                                    }
                                }
                            }, {
                                "properties": {
                                    "AND": {
                                        "enum": ["Greater than: a number"]
                                    },
                                    "GT": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [{}, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Average"]
                                                },
                                                "courses_avg": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Passed"]
                                                },
                                                "courses_pass": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Failed"]
                                                },
                                                "courses_fail": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Audited"]
                                                },
                                                "courses_audit": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Year"]
                                                },
                                                "courses_year": {
                                                    "type": "number"
                                                }
                                            }
                                        }],
                                        "x-hints": {
                                            "form": {
                                                "selector": "GT"
                                            }
                                        }
                                    }
                                }
                            }, {
                                "properties": {
                                    "AND": {
                                        "enum": ["Equal to: a number"]
                                    },
                                    "EQ": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [{}, {
                                            "properties": {
                                                "EQ": {
                                                    "enum": ["Average"]
                                                },
                                                "courses_avg": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "EQ": {
                                                    "enum": ["Passed"]
                                                },
                                                "courses_pass": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "EQ": {
                                                    "enum": ["Failed"]
                                                },
                                                "courses_fail": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "EQ": {
                                                    "enum": ["Audited"]
                                                },
                                                "courses_audit": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "EQ": {
                                                    "enum": ["Year"]
                                                },
                                                "courses_year": {
                                                    "type": "number"
                                                }
                                            }
                                        }],
                                        "x-hints": {
                                            "form": {
                                                "selector": "EQ"
                                            }
                                        }
                                    }
                                }
                            }, {
                                "properties": {
                                    "AND": {
                                        "enum": ["Lower than: a number"]
                                    },
                                    "LT": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [{}, {
                                            "properties": {
                                                "LT": {
                                                    "enum": ["Average"]
                                                },
                                                "courses_avg": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "LT": {
                                                    "enum": ["Passed"]
                                                },
                                                "courses_pass": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "LT": {
                                                    "enum": ["Failed"]
                                                },
                                                "courses_fail": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "LT": {
                                                    "enum": ["Audited"]
                                                },
                                                "courses_audit": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "LT": {
                                                    "enum": ["Year"]
                                                },
                                                "courses_year": {
                                                    "type": "number"
                                                }
                                            }
                                        }],
                                        "x-hints": {
                                            "form": {
                                                "selector": "LT"
                                            }
                                        }
                                    }
                                }
                            }],
                            "x-hints": {
                                "form": {
                                    "selector": "AND"
                                }
                            }
                        }
                    }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["Or"]
                    },
                    "OR": {
                        "title": "Or = ",
                        "type": "array",
                        "minItems": 2,
                        "items": {
                            "type": "object",
                            "oneOf": [{}, {
                                "properties": {
                                    "OR": {
                                        "enum": ["Is"]
                                    },
                                    "IS": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [{}, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["Department"]
                                                },
                                                "courses_dept": {
                                                    "type": "string"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["Instructor"]
                                                },
                                                "courses_instructor": {
                                                    "title": "search with partial name using * syntax",
                                                    "type": "string"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["Title"]
                                                },
                                                "courses_title": {
                                                    "type": "string"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["ID"]
                                                },
                                                "courses_id": {
                                                    "type": "string"
                                                }
                                            }
                                        }],
                                        "x-hints": {
                                            "form": {
                                                "selector": "IS"
                                            }
                                        }
                                    }
                                }
                            }, {
                                "properties": {
                                    "OR": {
                                        "enum": ["Greater than: a number"]
                                    },
                                    "GT": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [{}, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Average"]
                                                },
                                                "courses_avg": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Passed"]
                                                },
                                                "courses_pass": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Failed"]
                                                },
                                                "courses_fail": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Audited"]
                                                },
                                                "courses_audit": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Year"]
                                                },
                                                "courses_year": {
                                                    "type": "number"
                                                }
                                            }
                                        }],
                                        "x-hints": {
                                            "form": {
                                                "selector": "GT"
                                            }
                                        }
                                    }
                                }
                            }, {
                                "properties": {
                                    "OR": {
                                        "enum": ["Equal to: a number"]
                                    },
                                    "EQ": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [{}, {
                                            "properties": {
                                                "EQ": {
                                                    "enum": ["Average"]
                                                },
                                                "courses_avg": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "EQ": {
                                                    "enum": ["Passed"]
                                                },
                                                "courses_pass": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "EQ": {
                                                    "enum": ["Failed"]
                                                },
                                                "courses_fail": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "EQ": {
                                                    "enum": ["Audited"]
                                                },
                                                "courses_audit": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "EQ": {
                                                    "enum": ["Year"]
                                                },
                                                "courses_year": {
                                                    "type": "number"
                                                }
                                            }
                                        }],
                                        "x-hints": {
                                            "form": {
                                                "selector": "EQ"
                                            }
                                        }
                                    }
                                }
                            }, {
                                "properties": {
                                    "OR": {
                                        "enum": ["Lower than: a number"]
                                    },
                                    "LT": {
                                        "type": "object",
                                        "title": "+",
                                        "oneOf": [{}, {
                                            "properties": {
                                                "LT": {
                                                    "enum": ["Average"]
                                                },
                                                "courses_avg": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "LT": {
                                                    "enum": ["Passed"]
                                                },
                                                "courses_pass": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "LT": {
                                                    "enum": ["Failed"]
                                                },
                                                "courses_fail": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "LT": {
                                                    "enum": ["Audited"]
                                                },
                                                "courses_audit": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "LT": {
                                                    "enum": ["Year"]
                                                },
                                                "courses_year": {
                                                    "type": "number"
                                                }
                                            }
                                        }],
                                        "x-hints": {
                                            "form": {
                                                "selector": "LT"
                                            }
                                        }
                                    }
                                }
                            }],
                            "x-hints": {
                                "form": {
                                    "selector": "OR"
                                }
                            }
                        }
                    }
                }
            }],
            "x-hints": {
                "form": {
                    "selector": "WHERE"
                }
            }
        },
        "OPTIONS": {
            "title": "Options",
            "id": "options",
            "required": ["COLUMNS"],
            "properties": {
                "COLUMNS": {
                    "id": "columns",
                    "title": "Properties you want to display: min 1",
                    "minItems": 1,
                    "items": {
                        "type": "string",
                        "enum": ["", "courses_dept", "courses_instructor", "courses_title", "courses_id", "courses_avg", "courses_pass", "courses_fail", "courses_audit", "courses_year"],
                        "enumNames": ["Empty", "Department", "Instructor", "Title", "ID", "Average", "Passed", "Failed", "Audited", "Year"]
                    },
                    "type": "array"
                },
                "FORM": {
                    "title": "Display Type: ",
                    "enum": ["TABLE"]
                },
                "ORDER": {
                    "id": "order",
                    "properties": {
                        "dir": {
                            "id": "dir",
                            "type": "string",
                            "title": "Sort direction: ",
                            "enum": ["", "UP", "DOWN"]
                        },
                        "keys": {
                            "id": "keys",
                            "title": "Sort with key(s) from columns",
                            "items": {
                                "type": "string",
                                "enum": ["", "courses_dept", "courses_instructor", "courses_title", "courses_id", "courses_avg", "courses_pass", "courses_fail", "courses_audit", "courses_year"],
                                "enumNames": ["Empty", "Department", "Instructor", "Title", "ID", "Average", "Passed", "Failed", "Audited", "Year"]
                            },
                            "type": "array"
                        }
                    },
                    "type": "object"
                }
            },
            "type": "object"
        },
        "TRANSFORMATIONS": {
            "id": "transformations",
            "title": "Advanced search term:  ",

            "oneOf": [{}, {
                "properties": {
                    "TRANSFORMATIONS": {
                        "enum": ["Highest Average"]
                    }
                }
            }, {
                "properties": {
                    "TRANSFORMATIONS": {
                        "enum": ["Lowest Average"]
                    }
                }
            }, {
                "properties": {
                    "TRANSFORMATIONS": {
                        "enum": ["Most Sections"]
                    }
                }
            }, {
                "properties": {
                    "TRANSFORMATIONS": {
                        "enum": ["Most Passes"]
                    }
                }
            }, {
                "properties": {
                    "TRANSFORMATIONS": {
                        "enum": ["Most Fails"]
                    }
                }
            }],
            "x-hints": {
                "form": {
                    "selector": "TRANSFORMATIONS"
                }
            },
            "type": "object"
        }
    },
    "type": "object"
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.room_schema = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(3);

var ReactDOM = _interopRequireWildcard(_reactDom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var room_schema = exports.room_schema = {
    "title": "Rooms",
    "id": "query",
    "properties": {
        "WHERE": {
            "id": "where",
            "title": "Filter by: ",
            "type": "object",
            // "enum": ["AND", "OR", "IS", "GT", "EQ", "LT", "NOT"],
            "oneOf": [{
                "properties": {
                    "WHERE": { "enum": "" }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["Is"]
                    },
                    "IS": {
                        "type": "object",
                        "title": "String value only",
                        "oneOf": [{}, {
                            "properties": {
                                "IS": {
                                    "enum": ["Building Name"]
                                },
                                "rooms_name": {
                                    "type": "string"
                                }
                            }
                        }, {
                            "properties": {
                                "IS": {
                                    "enum": ["Room Number"]
                                },
                                "rooms_number": {

                                    "type": "string"
                                }
                            }
                        }, {
                            "properties": {
                                "IS": {
                                    "enum": ["Furniture Type"]
                                },
                                "rooms_furniture": {
                                    "type": "string"
                                }
                            }
                        }, {
                            "properties": {
                                "IS": {
                                    "enum": ["Room Type"]
                                },
                                "rooms_type": {
                                    "type": "string"
                                }
                            }
                        }],
                        "x-hints": {
                            "form": {
                                "selector": "IS"
                            }
                        }
                    }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["Greater than"]
                    },
                    "GT": {
                        "type": "object",
                        "title": "Number value only",
                        "properties": {

                            "rooms_seats": {
                                "type": "number"
                            }
                        }
                    }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["Equal to"]
                    },
                    "EQ": {
                        "type": "object",
                        "title": "Number value only",
                        "properties": {

                            "rooms_seats": {
                                "type": "number"
                            }
                        }
                    }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["Lower than"]
                    },
                    "LT": {
                        "type": "object",
                        "title": "Number value only",
                        "properties": {

                            "rooms_seats": {
                                "type": "number"
                            }
                        }
                    }
                }
            }, {
                "properties": {
                    "WHERE": {
                        "enum": ["And"]
                    },
                    "AND": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "oneOf": [{
                                "type": "object",
                                "properties": {
                                    "IS": {
                                        "type": "object",
                                        "title": "String value only",
                                        "oneOf": [{}, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["Department"]
                                                },
                                                "courses_dept": {
                                                    "type": "string"
                                                }
                                            }

                                        }, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["Instructor"]
                                                },
                                                "courses_instructor": {
                                                    "title": "search with partial name using * syntax",
                                                    "type": "string"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["Title"]
                                                },
                                                "courses_title": {
                                                    "type": "string"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "IS": {
                                                    "enum": ["ID"]
                                                },
                                                "courses_id": {
                                                    "type": "string"
                                                }
                                            }
                                        }],
                                        "x-hints": {
                                            "form": {
                                                "selector": "IS"
                                            }
                                        }
                                    }
                                }
                            }, {
                                "type": "object", "properties": {
                                    "GT": {
                                        "type": "object",
                                        "title": "Number value only",
                                        "oneOf": [{}, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Average"]
                                                },
                                                "courses_avg": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Passed"]
                                                },
                                                "courses_pass": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Failed"]
                                                },
                                                "courses_fail": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Audited"]
                                                },
                                                "courses_audit": {
                                                    "type": "number"
                                                }
                                            }
                                        }, {
                                            "properties": {
                                                "GT": {
                                                    "enum": ["Year"]
                                                },
                                                "courses_year": {
                                                    "type": "number"
                                                }
                                            }
                                        }],
                                        "x-hints": {
                                            "form": {
                                                "selector": "GT"
                                            }
                                        }
                                    }
                                }
                            }]
                        }
                    }
                }
            }],
            "x-hints": {
                "form": {
                    "selector": "WHERE"
                }
            }
        },
        "OPTIONS": {
            "title": "Options",
            "id": "options",
            "properties": {
                "COLUMNS": {
                    "id": "columns",
                    "title": "Properties you want to display: e.g. courses_dept",
                    "items": {
                        "description": "Allows anything, and describes nothing.",
                        "minItems": 1,
                        "type": "string"
                    },
                    "type": "array"
                },
                "FORM": {
                    "title": "Display Type: ",
                    "enum": ["TABLE"]
                },
                "ORDER": {
                    "id": "order",
                    "properties": {
                        "dir": {
                            "id": "dir",
                            "type": "string",
                            "title": "Sort direction: ",
                            "enum": ["UP", "DOWN"]
                        },
                        "keys": {
                            "id": "keys",
                            "title": "Sort with these key(s), at least 1",
                            "items": {
                                "description": "Allows anything, and describes nothing.",
                                "minItems": 1,
                                "type": "string"
                            },
                            "type": "array"
                        }
                    },
                    "type": "object"
                }
            },
            "type": "object"
        },
        "TRANSFORMATIONS": {
            "id": "transformations",
            "title": "Advanced search:  default as empty",
            "properties": {
                "APPLY": {
                    "id": "apply",
                    "title": "Custom search terms:  e.g. maxSeats",
                    "items": {
                        "type": "object",
                        "minItems": 0

                    },

                    "type": "array"
                },
                "GROUP": {
                    "id": "group",
                    "title": "Group results according to the following keys",
                    "items": {
                        "type": "string",
                        "minItems": 1
                    },
                    "type": "array"
                }
            },
            "type": ["object", "null"]
        }
    },
    "type": "object"
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(28)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./queryStyle.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./queryStyle.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(28)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./tab.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./tab.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var lib_1 = __webpack_require__(19);
exports.title_image = (React.createElement("div", null,
    " ",
    React.createElement("img", { src: "http://i.imgur.com/8lNZ8o7.png", style: { display: "block", border: 0, margin: 0, clear: "both" } }),
    lib_1.course));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);

  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('');
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(36);
var ieee754 = __webpack_require__(39);
var isArray = __webpack_require__(40);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = 'ontouchstart' in global || global.DocumentTouch && document instanceof DocumentTouch;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = debounce;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(1);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactClass = __webpack_require__(2);

var _reactClass2 = _interopRequireDefault(_reactClass);

var _join = __webpack_require__(10);

var _join2 = _interopRequireDefault(_join);

var _props2className = __webpack_require__(23);

var _props2className2 = _interopRequireDefault(_props2className);

var _cleanup = __webpack_require__(22);

var _cleanup2 = _interopRequireDefault(_cleanup);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Flex = function (_Component) {
  _inherits(Flex, _Component);

  function Flex() {
    _classCallCheck(this, Flex);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Flex).apply(this, arguments));
  }

  _createClass(Flex, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var className = (0, _join2.default)('react-flex', (0, _props2className2.default)(props));

      var allProps = (0, _objectAssign2.default)({}, props);

      (0, _cleanup2.default)(allProps);

      allProps.className = className;

      if (props.factory) {
        return props.factory(allProps);
      }

      return _react2.default.createElement('div', allProps);
    }
  }]);

  return Flex;
}(_reactClass2.default);

Flex.defaultProps = {
  row: true,
  wrap: true,
  alignItems: 'center',
  display: 'flex'
};

Flex.propTypes = {

  flex: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]),

  display: _react.PropTypes.oneOf(['flex', 'inline-flex']),

  inline: _react.PropTypes.bool,

  reverse: _react.PropTypes.bool,

  row: _react.PropTypes.bool,
  column: _react.PropTypes.bool,
  wrap: _react.PropTypes.bool,

  alignItems: _react.PropTypes.string,
  alignContent: _react.PropTypes.string,
  justifyContent: _react.PropTypes.string
};

exports.default = Flex;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(1);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactClass = __webpack_require__(2);

var _reactClass2 = _interopRequireDefault(_reactClass);

var _join = __webpack_require__(10);

var _join2 = _interopRequireDefault(_join);

var _props2className = __webpack_require__(23);

var _props2className2 = _interopRequireDefault(_props2className);

var _cleanup = __webpack_require__(22);

var _cleanup2 = _interopRequireDefault(_cleanup);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var FlexItem = function (_Component) {
  _inherits(FlexItem, _Component);

  function FlexItem() {
    _classCallCheck(this, FlexItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FlexItem).apply(this, arguments));
  }

  _createClass(FlexItem, [{
    key: 'render',
    value: function render() {

      var props = this.props;
      var className = (0, _join2.default)('react-flex-item', (0, _props2className2.default)(props));

      var allProps = (0, _objectAssign2.default)({}, props);

      (0, _cleanup2.default)(allProps);

      allProps.className = className;

      if (props.factory) {
        return props.factory(allProps);
      }

      return _react2.default.createElement('div', allProps);
    }
  }]);

  return FlexItem;
}(_reactClass2.default);

FlexItem.defaultProps = {
  flex: 1
};

FlexItem.propTypes = {
  display: _react.PropTypes.oneOf(['flex', 'inline-flex']),
  inline: function inline(props, propName) {
    if (props[propName] !== undefined) {
      return new Error('"inline" prop should not be used on "Item". Use "display=\'inline-flex\'" instead');
    }
  },

  flex: _react.PropTypes.any,
  flexGrow: _react.PropTypes.any,
  flexShrink: _react.PropTypes.any,
  flexBasis: _react.PropTypes.any
};

exports.default = FlexItem;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'react-flex-v2';

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return props.flex === false ? 0 : props.flex === true ? 1 : props.flex;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _mapToZero = __webpack_require__(11);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(14);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(13);

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(7);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(9);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(12);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var msPerFrame = 1000 / 60;

var Motion = _react2['default'].createClass({
  displayName: 'Motion',

  propTypes: {
    // TOOD: warn against putting a config in here
    defaultStyle: _react.PropTypes.objectOf(_react.PropTypes.number),
    style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired,
    children: _react.PropTypes.func.isRequired,
    onRest: _react.PropTypes.func
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var defaultStyle = _props.defaultStyle;
    var style = _props.style;

    var currentStyle = defaultStyle || _stripStyle2['default'](style);
    var currentVelocity = _mapToZero2['default'](currentStyle);
    return {
      currentStyle: currentStyle,
      currentVelocity: currentVelocity,
      lastIdealStyle: currentStyle,
      lastIdealVelocity: currentVelocity
    };
  },

  wasAnimating: false,
  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyle: null,
  // after checking for unreadPropStyle != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
    var dirty = false;
    var _state = this.state;
    var currentStyle = _state.currentStyle;
    var currentVelocity = _state.currentVelocity;
    var lastIdealStyle = _state.lastIdealStyle;
    var lastIdealVelocity = _state.lastIdealVelocity;

    for (var key in destStyle) {
      if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
        continue;
      }

      var styleValue = destStyle[key];
      if (typeof styleValue === 'number') {
        if (!dirty) {
          dirty = true;
          currentStyle = _extends({}, currentStyle);
          currentVelocity = _extends({}, currentVelocity);
          lastIdealStyle = _extends({}, lastIdealStyle);
          lastIdealVelocity = _extends({}, lastIdealVelocity);
        }

        currentStyle[key] = styleValue;
        currentVelocity[key] = 0;
        lastIdealStyle[key] = styleValue;
        lastIdealVelocity[key] = 0;
      }
    }

    if (dirty) {
      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
    }
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function (timestamp) {
      // check if we need to animate in the first place
      var propsStyle = _this.props.style;
      if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
        if (_this.wasAnimating && _this.props.onRest) {
          _this.props.onRest();
        }

        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.wasAnimating = false;
        _this.accumulatedTime = 0;
        return;
      }

      _this.wasAnimating = true;

      var currentTime = timestamp || _performanceNow2['default']();
      var timeDelta = currentTime - _this.prevTime;
      _this.prevTime = currentTime;
      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
      // more than 10 frames? prolly switched browser tab. Restart
      if (_this.accumulatedTime > msPerFrame * 10) {
        _this.accumulatedTime = 0;
      }

      if (_this.accumulatedTime === 0) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.startAnimationIfNecessary();
        return;
      }

      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

      var newLastIdealStyle = {};
      var newLastIdealVelocity = {};
      var newCurrentStyle = {};
      var newCurrentVelocity = {};

      for (var key in propsStyle) {
        if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
          continue;
        }

        var styleValue = propsStyle[key];
        if (typeof styleValue === 'number') {
          newCurrentStyle[key] = styleValue;
          newCurrentVelocity[key] = 0;
          newLastIdealStyle[key] = styleValue;
          newLastIdealVelocity[key] = 0;
        } else {
          var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
          var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
          for (var i = 0; i < framesToCatchUp; i++) {
            var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            newLastIdealStyleValue = _stepper[0];
            newLastIdealVelocityValue = _stepper[1];
          }

          var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

          var nextIdealX = _stepper2[0];
          var nextIdealV = _stepper2[1];

          newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
          newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
          newLastIdealStyle[key] = newLastIdealStyleValue;
          newLastIdealVelocity[key] = newLastIdealVelocityValue;
        }
      }

      _this.animationID = null;
      // the amount we're looped over above
      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

      _this.setState({
        currentStyle: newCurrentStyle,
        currentVelocity: newCurrentVelocity,
        lastIdealStyle: newLastIdealStyle,
        lastIdealVelocity: newLastIdealVelocity
      });

      _this.unreadPropStyle = null;

      _this.startAnimationIfNecessary();
    });
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyle != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyle);
    }

    this.unreadPropStyle = props.style;
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var renderedChildren = this.props.children(this.state.currentStyle);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = Motion;
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _mapToZero = __webpack_require__(11);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(14);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(13);

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(7);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(9);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(12);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var msPerFrame = 1000 / 60;

function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
  for (var i = 0; i < currentStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
      return false;
    }
  }
  return true;
}

var StaggeredMotion = _react2['default'].createClass({
  displayName: 'StaggeredMotion',

  propTypes: {
    // TOOD: warn against putting a config in here
    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.objectOf(_react.PropTypes.number)),
    styles: _react.PropTypes.func.isRequired,
    children: _react.PropTypes.func.isRequired
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;

    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
    var currentVelocities = currentStyles.map(function (currentStyle) {
      return _mapToZero2['default'](currentStyle);
    });
    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: currentStyles,
      lastIdealVelocities: currentVelocities
    };
  },

  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyles: null,
  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
    var _state = this.state;
    var currentStyles = _state.currentStyles;
    var currentVelocities = _state.currentVelocities;
    var lastIdealStyles = _state.lastIdealStyles;
    var lastIdealVelocities = _state.lastIdealVelocities;

    var someDirty = false;
    for (var i = 0; i < unreadPropStyles.length; i++) {
      var unreadPropStyle = unreadPropStyles[i];
      var dirty = false;

      for (var key in unreadPropStyle) {
        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
          continue;
        }

        var styleValue = unreadPropStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            someDirty = true;
            currentStyles[i] = _extends({}, currentStyles[i]);
            currentVelocities[i] = _extends({}, currentVelocities[i]);
            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
          }
          currentStyles[i][key] = styleValue;
          currentVelocities[i][key] = 0;
          lastIdealStyles[i][key] = styleValue;
          lastIdealVelocities[i][key] = 0;
        }
      }
    }

    if (someDirty) {
      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
    }
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function (timestamp) {
      var destStyles = _this.props.styles(_this.state.lastIdealStyles);

      // check if we need to animate in the first place
      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.accumulatedTime = 0;
        return;
      }

      var currentTime = timestamp || _performanceNow2['default']();
      var timeDelta = currentTime - _this.prevTime;
      _this.prevTime = currentTime;
      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
      // more than 10 frames? prolly switched browser tab. Restart
      if (_this.accumulatedTime > msPerFrame * 10) {
        _this.accumulatedTime = 0;
      }

      if (_this.accumulatedTime === 0) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.startAnimationIfNecessary();
        return;
      }

      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

      var newLastIdealStyles = [];
      var newLastIdealVelocities = [];
      var newCurrentStyles = [];
      var newCurrentVelocities = [];

      for (var i = 0; i < destStyles.length; i++) {
        var destStyle = destStyles[i];
        var newCurrentStyle = {};
        var newCurrentVelocity = {};
        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};

        for (var key in destStyle) {
          if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
            continue;
          }

          var styleValue = destStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
            var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
            for (var j = 0; j < framesToCatchUp; j++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        newCurrentStyles[i] = newCurrentStyle;
        newCurrentVelocities[i] = newCurrentVelocity;
        newLastIdealStyles[i] = newLastIdealStyle;
        newLastIdealVelocities[i] = newLastIdealVelocity;
      }

      _this.animationID = null;
      // the amount we're looped over above
      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

      _this.setState({
        currentStyles: newCurrentStyles,
        currentVelocities: newCurrentVelocities,
        lastIdealStyles: newLastIdealStyles,
        lastIdealVelocities: newLastIdealVelocities
      });

      _this.unreadPropStyles = null;

      _this.startAnimationIfNecessary();
    });
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyles != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var renderedChildren = this.props.children(this.state.currentStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = StaggeredMotion;
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _mapToZero = __webpack_require__(11);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(14);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(13);

var _stepper4 = _interopRequireDefault(_stepper3);

var _mergeDiff = __webpack_require__(49);

var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

var _performanceNow = __webpack_require__(7);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(9);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(12);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var msPerFrame = 1000 / 60;

// the children function & (potential) styles function asks as param an
// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
// {key: string, data?: any, style: PlainStyle}. However, the way we keep
// internal states doesn't contain such a data structure (check the state and
// TransitionMotionState). So when children function and others ask for such
// data we need to generate them on the fly by combining mergedPropsStyles and
// currentStyles/lastIdealStyles
function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
  // Copy the value to a `const` so that Flow understands that the const won't
  // change and will be non-nullable in the callback below.
  var cUnreadPropStyles = unreadPropStyles;
  if (cUnreadPropStyles == null) {
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      return {
        key: mergedPropsStyle.key,
        data: mergedPropsStyle.data,
        style: plainStyles[i]
      };
    });
  }
  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
    for (var j = 0; j < cUnreadPropStyles.length; j++) {
      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
        return {
          key: cUnreadPropStyles[j].key,
          data: cUnreadPropStyles[j].data,
          style: plainStyles[i]
        };
      }
    }
    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
  });
}

function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
  if (mergedPropsStyles.length !== destStyles.length) {
    return false;
  }

  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (mergedPropsStyles[i].key !== destStyles[i].key) {
      return false;
    }
  }

  // we have the invariant that mergedPropsStyles and
  // currentStyles/currentVelocities/last* are synced in terms of cells, see
  // mergeAndSync comment for more info
  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
      return false;
    }
  }

  return true;
}

// core key merging logic

// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
// c}, previous current (interpolating) style is {a, b}
// **invariant**: current[i] corresponds to merged[i] in terms of key

// steps:
// turn merged style into {a?, b, c}
//    add c, value of c is destStyles.c
//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
// turn current (interpolating) style from {a, b} into {a?, b, c}
//    maybe remove a
//    certainly add c, value of c is willEnter(c)
// loop over merged and construct new current
// dest doesn't change, that's owner's
function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
    var leavingStyle = willLeave(oldMergedPropsStyle);
    if (leavingStyle == null) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
  });

  var newCurrentStyles = [];
  var newCurrentVelocities = [];
  var newLastIdealStyles = [];
  var newLastIdealVelocities = [];
  for (var i = 0; i < newMergedPropsStyles.length; i++) {
    var newMergedPropsStyleCell = newMergedPropsStyles[i];
    var foundOldIndex = null;
    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
        foundOldIndex = j;
        break;
      }
    }
    // TODO: key search code
    if (foundOldIndex == null) {
      var plainStyle = willEnter(newMergedPropsStyleCell);
      newCurrentStyles[i] = plainStyle;
      newLastIdealStyles[i] = plainStyle;

      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
      newCurrentVelocities[i] = velocity;
      newLastIdealVelocities[i] = velocity;
    } else {
      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
    }
  }

  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
}

var TransitionMotion = _react2['default'].createClass({
  displayName: 'TransitionMotion',

  propTypes: {
    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      key: _react.PropTypes.string.isRequired,
      data: _react.PropTypes.any,
      style: _react.PropTypes.objectOf(_react.PropTypes.number).isRequired
    })),
    styles: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.shape({
      key: _react.PropTypes.string.isRequired,
      data: _react.PropTypes.any,
      style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired
    }))]).isRequired,
    children: _react.PropTypes.func.isRequired,
    willEnter: _react.PropTypes.func,
    willLeave: _react.PropTypes.func,
    didLeave: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      willEnter: function willEnter(styleThatEntered) {
        return _stripStyle2['default'](styleThatEntered.style);
      },
      // recall: returning null makes the current unmounting TransitionStyle
      // disappear immediately
      willLeave: function willLeave() {
        return null;
      },
      didLeave: function didLeave() {}
    };
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;
    var willEnter = _props.willEnter;
    var willLeave = _props.willLeave;
    var didLeave = _props.didLeave;

    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

    // this is special. for the first time around, we don't have a comparison
    // between last (no last) and current merged props. we'll compute last so:
    // say default is {a, b} and styles (dest style) is {b, c}, we'll
    // fabricate last as {a, b}
    var oldMergedPropsStyles = undefined;
    if (defaultStyles == null) {
      oldMergedPropsStyles = destStyles;
    } else {
      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
        // TODO: key search code
        for (var i = 0; i < destStyles.length; i++) {
          if (destStyles[i].key === defaultStyleCell.key) {
            return destStyles[i];
          }
        }
        return defaultStyleCell;
      });
    }
    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    });
    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    });

    var _mergeAndSync = mergeAndSync(
    // Because this is an old-style React.createClass component, Flow doesn't
    // understand that the willEnter and willLeave props have default values
    // and will always be present.
    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
    oldCurrentVelocities);

    var mergedPropsStyles = _mergeAndSync[0];
    var currentStyles = _mergeAndSync[1];
    var currentVelocities = _mergeAndSync[2];
    var lastIdealStyles = _mergeAndSync[3];
    var lastIdealVelocities = _mergeAndSync[4];
    // oldLastIdealVelocities really

    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities,
      mergedPropsStyles: mergedPropsStyles
    };
  },

  unmounting: false,
  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyles: null,
  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
    var _mergeAndSync2 = mergeAndSync(this.props.willEnter, this.props.willLeave, this.props.didLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);

    var mergedPropsStyles = _mergeAndSync2[0];
    var currentStyles = _mergeAndSync2[1];
    var currentVelocities = _mergeAndSync2[2];
    var lastIdealStyles = _mergeAndSync2[3];
    var lastIdealVelocities = _mergeAndSync2[4];

    for (var i = 0; i < unreadPropStyles.length; i++) {
      var unreadPropStyle = unreadPropStyles[i].style;
      var dirty = false;

      for (var key in unreadPropStyle) {
        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
          continue;
        }

        var styleValue = unreadPropStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            currentStyles[i] = _extends({}, currentStyles[i]);
            currentVelocities[i] = _extends({}, currentVelocities[i]);
            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
            mergedPropsStyles[i] = {
              key: mergedPropsStyles[i].key,
              data: mergedPropsStyles[i].data,
              style: _extends({}, mergedPropsStyles[i].style)
            };
          }
          currentStyles[i][key] = styleValue;
          currentVelocities[i][key] = 0;
          lastIdealStyles[i][key] = styleValue;
          lastIdealVelocities[i][key] = 0;
          mergedPropsStyles[i].style[key] = styleValue;
        }
      }
    }

    // unlike the other 2 components, we can't detect staleness and optionally
    // opt out of setState here. each style object's data might contain new
    // stuff we're not/cannot compare
    this.setState({
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      mergedPropsStyles: mergedPropsStyles,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities
    });
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    if (this.unmounting) {
      return;
    }
    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function (timestamp) {
      var propStyles = _this.props.styles;
      var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

      // check if we need to animate in the first place
      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.accumulatedTime = 0;
        return;
      }

      var currentTime = timestamp || _performanceNow2['default']();
      var timeDelta = currentTime - _this.prevTime;
      _this.prevTime = currentTime;
      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
      // more than 10 frames? prolly switched browser tab. Restart
      if (_this.accumulatedTime > msPerFrame * 10) {
        _this.accumulatedTime = 0;
      }

      if (_this.accumulatedTime === 0) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.startAnimationIfNecessary();
        return;
      }

      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

      var _mergeAndSync3 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

      var newMergedPropsStyles = _mergeAndSync3[0];
      var newCurrentStyles = _mergeAndSync3[1];
      var newCurrentVelocities = _mergeAndSync3[2];
      var newLastIdealStyles = _mergeAndSync3[3];
      var newLastIdealVelocities = _mergeAndSync3[4];

      for (var i = 0; i < newMergedPropsStyles.length; i++) {
        var newMergedPropsStyle = newMergedPropsStyles[i].style;
        var newCurrentStyle = {};
        var newCurrentVelocity = {};
        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};

        for (var key in newMergedPropsStyle) {
          if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
            continue;
          }

          var styleValue = newMergedPropsStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = newLastIdealStyles[i][key];
            var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
            for (var j = 0; j < framesToCatchUp; j++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        newLastIdealStyles[i] = newLastIdealStyle;
        newLastIdealVelocities[i] = newLastIdealVelocity;
        newCurrentStyles[i] = newCurrentStyle;
        newCurrentVelocities[i] = newCurrentVelocity;
      }

      _this.animationID = null;
      // the amount we're looped over above
      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

      _this.setState({
        currentStyles: newCurrentStyles,
        currentVelocities: newCurrentVelocities,
        lastIdealStyles: newLastIdealStyles,
        lastIdealVelocities: newLastIdealVelocities,
        mergedPropsStyles: newMergedPropsStyles
      });

      _this.unreadPropStyles = null;

      _this.startAnimationIfNecessary();
    });
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyles) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    var styles = props.styles;
    if (typeof styles === 'function') {
      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
    } else {
      this.unreadPropStyles = styles;
    }

    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.unmounting = true;
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
    var renderedChildren = this.props.children(hydratedStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = TransitionMotion;
module.exports = exports['default'];

// list of styles, each containing interpolating values. Part of what's passed
// to children function. Notice that this is
// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
// contains the key & data info (so that we only have a single source of truth
// for these, and to save space). Check the comment for `rehydrateStyles` to
// see how we regenerate the entirety of what's passed to children function

// the array that keeps track of currently rendered stuff! Including stuff
// that you've unmounted but that's still animating. This is where it lives

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// core keys merging algorithm. If previous render's keys are [a, b], and the
// next render's [c, b, d], what's the final merged keys and ordering?

// - c and a must both be before b
// - b before d
// - ordering between a and c ambiguous

// this reduces to merging two partially ordered lists (e.g. lists where not
// every item has a definite ordering, like comparing a and c above). For the
// ambiguous ordering we deterministically choose to place the next render's
// item after the previous'; so c after a

// this is called a topological sorting. Except the existing algorithms don't
// work well with js bc of the amount of allocation, and isn't optimized for our
// current use-case bc the runtime is linear in terms of edges (see wiki for
// meaning), which is huge when two lists have many common elements


exports.__esModule = true;
exports['default'] = mergeDiff;

function mergeDiff(prev, next, onRemove) {
  // bookkeeping for easier access of a key's index below. This is 2 allocations +
  // potentially triggering chrome hash map mode for objs (so it might be faster

  var prevKeyIndex = {};
  for (var i = 0; i < prev.length; i++) {
    prevKeyIndex[prev[i].key] = i;
  }
  var nextKeyIndex = {};
  for (var i = 0; i < next.length; i++) {
    nextKeyIndex[next[i].key] = i;
  }

  // first, an overly elaborate way of merging prev and next, eliminating
  // duplicates (in terms of keys). If there's dupe, keep the item in next).
  // This way of writing it saves allocations
  var ret = [];
  for (var i = 0; i < next.length; i++) {
    ret[i] = next[i];
  }
  for (var i = 0; i < prev.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
      // merge in keys that the user desires to kill
      var fill = onRemove(i, prev[i]);
      if (fill != null) {
        ret.push(fill);
      }
    }
  }

  // now all the items all present. Core sorting logic to have the right order
  return ret.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a.key];
    var nextOrderB = nextKeyIndex[b.key];
    var prevOrderA = prevKeyIndex[a.key];
    var prevOrderB = prevKeyIndex[b.key];

    if (nextOrderA != null && nextOrderB != null) {
      // both keys in next
      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
    } else if (prevOrderA != null && prevOrderB != null) {
      // both keys in prev
      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
    } else if (nextOrderA != null) {
      // key a in next, key b in prev

      // how to determine the order between a and b? We find a "pivot" (term
      // abuse), a key present in both prev and next, that is sandwiched between
      // a and b. In the context of our above example, if we're comparing a and
      // d, b's (the only) pivot
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
          return 1;
        }
      }
      // pluggable. default to: next bigger than prev
      return 1;
    }
    // prevOrderA, nextOrderB
    for (var i = 0; i < next.length; i++) {
      var pivot = next[i].key;
      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
        continue;
      }
      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
        return -1;
      }
    }
    // pluggable. default to: next bigger than prev
    return -1;
  });
}

module.exports = exports['default'];
// to loop through and find a key's index each time), but I no longer care

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) {
  return obj && obj.__esModule ? obj['default'] : obj;
}

var _Motion = __webpack_require__(46);

exports.Motion = _interopRequire(_Motion);

var _StaggeredMotion = __webpack_require__(47);

exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

var _TransitionMotion = __webpack_require__(48);

exports.TransitionMotion = _interopRequire(_TransitionMotion);

var _spring = __webpack_require__(52);

exports.spring = _interopRequire(_spring);

var _presets = __webpack_require__(24);

exports.presets = _interopRequire(_presets);

// deprecated, dummy warning function

var _reorderKeys = __webpack_require__(51);

exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports['default'] = reorderKeys;

var hasWarned = false;

function reorderKeys() {
  if (process.env.NODE_ENV === 'development') {
    if (!hasWarned) {
      hasWarned = true;
      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
    }
  }
}

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports['default'] = spring;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _presets = __webpack_require__(24);

var _presets2 = _interopRequireDefault(_presets);

var defaultConfig = _extends({}, _presets2['default'].noWobble, {
  precision: 0.01
});

function spring(val, config) {
  return _extends({}, defaultConfig, config, { val: val });
}

module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toUpperFirst = __webpack_require__(18);
var getPrefix = __webpack_require__(17);
var properties = __webpack_require__(25);

/**
 * Returns the given key prefixed, if the property is found in the prefixProps map.
 *
 * Does not test if the property supports the given value unprefixed.
 * If you need this, use './getPrefixed' instead
 */
module.exports = function (key, value) {

	if (!properties[key]) {
		return key;
	}

	var prefix = getPrefix(key);

	return prefix ? prefix + toUpperFirst(key) : key;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPrefix = __webpack_require__(17);
var forcePrefixed = __webpack_require__(53);
var el = __webpack_require__(16);

var MEMORY = {};
var STYLE;
var ELEMENT;

module.exports = function (key, value, force) {

    ELEMENT = ELEMENT || el();
    STYLE = STYLE || ELEMENT.style;

    var k = key + ': ' + value;

    if (MEMORY[k]) {
        return MEMORY[k];
    }

    var prefix;
    var prefixed;
    var prefixedValue;

    if (force || !(key in STYLE)) {

        prefix = getPrefix('appearance');

        if (prefix) {
            prefixed = forcePrefixed(key, value);

            prefixedValue = '-' + prefix.toLowerCase() + '-' + value;

            if (prefixed in STYLE) {
                ELEMENT.style[prefixed] = '';
                ELEMENT.style[prefixed] = prefixedValue;

                if (ELEMENT.style[prefixed] !== '') {
                    value = prefixedValue;
                }
            }
        }
    }

    MEMORY[k] = value;

    return value;
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getStylePrefixed = __webpack_require__(56);
var properties = __webpack_require__(25);

module.exports = function (key, value) {

	if (!properties[key]) {
		return key;
	}

	return getStylePrefixed(key, value);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toUpperFirst = __webpack_require__(18);
var getPrefix = __webpack_require__(17);
var el = __webpack_require__(16);

var MEMORY = {};
var STYLE;
var ELEMENT;

var PREFIX;

module.exports = function (key, value) {

    ELEMENT = ELEMENT || el();
    STYLE = STYLE || ELEMENT.style;

    var k = key; // + ': ' + value

    if (MEMORY[k]) {
        return MEMORY[k];
    }

    var prefix;
    var prefixed;

    if (!(key in STYLE)) {
        //we have to prefix

        // if (PREFIX){
        //     prefix = PREFIX
        // } else {
        prefix = getPrefix('appearance');

        //     if (prefix){
        //         prefix = PREFIX = prefix.toLowerCase()
        //     }
        // }

        if (prefix) {
            prefixed = prefix + toUpperFirst(key);

            if (prefixed in STYLE) {
                key = prefixed;
            }
        }
    }

    MEMORY[k] = key;

    return key;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = __webpack_require__(57);
var getPrefixed = __webpack_require__(55);

var map = __webpack_require__(59);
var plugable = __webpack_require__(60);

function plugins(key, value) {

	var result = {
		key: key,
		value: value
	};(RESULT.plugins || []).forEach(function (fn) {

		var tmp = map(function (res) {
			return fn(key, value, res);
		}, result);

		if (tmp) {
			result = tmp;
		}
	});

	return result;
}

function normalize(key, value) {

	var result = plugins(key, value);

	return map(function (result) {
		return {
			key: getPrefixed(result.key, result.value),
			value: result.value
		};
	}, result);

	return result;
}

var RESULT = function RESULT(style) {

	var k;
	var item;
	var result = {};

	for (k in style) {
		if (hasOwn(style, k)) {
			item = normalize(k, style[k]);

			if (!item) {
				continue;
			}

			map(function (item) {
				result[item.key] = item.value;
			}, item);
		}
	}return result;
};

module.exports = plugable(RESULT);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn, item) {

	if (!item) {
		return;
	}

	if (Array.isArray(item)) {
		return item.map(fn).filter(function (x) {
			return !!x;
		});
	} else {
		return fn(item);
	}
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getCssPrefixedValue = __webpack_require__(54);

module.exports = function (target) {
	target.plugins = target.plugins || [function () {
		var values = {
			'flex': 1,
			'inline-flex': 1
		};

		return function (key, value) {
			if (key === 'display' && value in values) {
				return {
					key: key,
					value: getCssPrefixedValue(key, value, true)
				};
			}
		};
	}()];

	target.plugin = function (fn) {
		target.plugins = target.plugins || [];

		target.plugins.push(fn);
	};

	return target;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: !0 });var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
  }return target;
};var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
  };
}();var _react = __webpack_require__(0),
    _react2 = _interopRequireDefault(_react),
    _reactClass = __webpack_require__(2),
    _reactClass2 = _interopRequireDefault(_reactClass),
    _objectAssign = __webpack_require__(1),
    _objectAssign2 = _interopRequireDefault(_objectAssign),
    _reactFlex = __webpack_require__(8),
    _join = __webpack_require__(5),
    _join2 = _interopRequireDefault(_join),
    _bemFactory = __webpack_require__(6),
    _bemFactory2 = _interopRequireDefault(_bemFactory);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
}function _possibleConstructorReturn(self, call) {
  if (!self) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call && ('object' == (typeof call === 'undefined' ? 'undefined' : _typeof(call)) || 'function' == typeof call) ? call : self;
}function _inherits(subClass, superClass) {
  if ('function' != typeof superClass && null !== superClass) throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
}var CLASS_NAME = 'react-tab-panel__body',
    bem = (0, _bemFactory2.default)(CLASS_NAME),
    m = function m(a) {
  return bem(null, a);
};var Body = function (_Component) {
  function Body() {
    return _classCallCheck(this, Body), _possibleConstructorReturn(this, Object.getPrototypeOf(Body).apply(this, arguments));
  }return _inherits(Body, _Component), _createClass(Body, [{ key: 'render', value: function render() {
      var a = this.props,
          b = (0, _join2.default)(a.className, CLASS_NAME, m('tab-position-' + a.tabPosition), m('orientation-' + (a.vertical ? 'vertical' : 'horizontal')), a.transition && m('transition'), a.transitioning && !0 !== a.transitioning && m('transition-' + (-1 == a.transitioning ? 'prev' : 'next')), a.transitionInProgress && m('transitioning')),
          c = a.renderContent(a.children);return _react2.default.createElement(_reactFlex.Flex, _extends({ row: !0, wrap: !1, alignItems: 'start', flexGrow: 1, flexShrink: 1, flexBasis: 'auto' }, a, { className: b, children: c }));
    } }]), Body;
}(_reactClass2.default);exports.default = Body;Body.propTypes = { renderContent: _react.PropTypes.func }, Body.defaultProps = { renderContent: function renderContent(a) {
    return a;
  }, isTabBody: !0 };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, '__esModule', { value: !0 });var _extends = Object.assign || function (target) {
   for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
         Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
      }
   }return target;
};var _createClass = function () {
   function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
         var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
      }
   }return function (Constructor, protoProps, staticProps) {
      return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
   };
}();var _react = __webpack_require__(0),
    _react2 = _interopRequireDefault(_react),
    _reactDom = __webpack_require__(3),
    _reactClass = __webpack_require__(2),
    _reactClass2 = _interopRequireDefault(_reactClass),
    _objectAssign = __webpack_require__(1),
    _objectAssign2 = _interopRequireDefault(_objectAssign),
    _hasTouch = __webpack_require__(38),
    _hasTouch2 = _interopRequireDefault(_hasTouch),
    _reactNotifyResize = __webpack_require__(15),
    _lodash = __webpack_require__(41),
    _lodash2 = _interopRequireDefault(_lodash),
    _reactFlex = __webpack_require__(8),
    _reactMotion = __webpack_require__(50),
    _join = __webpack_require__(5),
    _join2 = _interopRequireDefault(_join),
    _bemFactory = __webpack_require__(6),
    _bemFactory2 = _interopRequireDefault(_bemFactory);function _interopRequireDefault(obj) {
   return obj && obj.__esModule ? obj : { default: obj };
}function _defineProperty(obj, key, value) {
   return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}function _classCallCheck(instance, Constructor) {
   if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
}function _possibleConstructorReturn(self, call) {
   if (!self) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call && ('object' == (typeof call === 'undefined' ? 'undefined' : _typeof(call)) || 'function' == typeof call) ? call : self;
}function _inherits(subClass, superClass) {
   if ('function' != typeof superClass && null !== superClass) throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
}var CLASS_NAME = 'react-tab-panel__tab-strip-scroll-tool',
    bem = (0, _bemFactory2.default)(CLASS_NAME),
    m = function m(a) {
   return bem(null, a);
},
    styles = {},
    ARROWS = { right: _react2.default.createElement('svg', { className: (0, _join2.default)(bem('arrow'), bem('arrow', 'right')), height: '18', viewBox: '0 0 24 24', width: '18', xmlns: 'http://www.w3.org/2000/svg' }, _react2.default.createElement('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' }), _react2.default.createElement('path', { d: 'M0-.25h24v24H0z', fill: 'none' })), left: _react2.default.createElement('svg', { className: (0, _join2.default)(bem('arrow'), bem('arrow', 'left')), height: '18', viewBox: '0 0 24 24', width: '18', xmlns: 'http://www.w3.org/2000/svg' }, _react2.default.createElement('path', { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' }), _react2.default.createElement('path', { d: 'M0-.5h24v24H0z', fill: 'none' })), down: _react2.default.createElement('svg', { className: (0, _join2.default)(bem('arrow'), bem('arrow', 'down')), height: '18', viewBox: '0 0 24 24', width: '18', xmlns: 'http://www.w3.org/2000/svg' }, _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' }), _react2.default.createElement('path', { d: 'M0-.75h24v24H0z', fill: 'none' })), up: _react2.default.createElement('svg', { className: (0, _join2.default)(bem('arrow'), bem('arrow', 'up')), height: '18', viewBox: '0 0 24 24', width: '18', xmlns: 'http://www.w3.org/2000/svg' }, _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' }), _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })) },
    emptyFn = function emptyFn() {},
    stop = function stop(a) {
   a.preventDefault(), a.stopPropagation();
};var Scroller = function (_Component) {
   function Scroller(a) {
      _classCallCheck(this, Scroller);var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scroller).call(this, a));return _this.onResize = (0, _lodash2.default)(_this.onResize, 50, { leading: !1, trailing: !0 }), _this.scrollInfo = { scrollPos: 0, adjustScroll: !0, hasStartScroll: !1, hasEndScroll: !1, scrollerSize: { start: 0, end: 0 } }, _this.state = { scrolling: !1, activeScroll: 0 }, _this.onResize = (0, _lodash2.default)(_this.onResize, 50, { leading: !1, trailing: !0 }), _this;
   }return _inherits(Scroller, _Component), _createClass(Scroller, [{ key: 'getOffsetSizeName', value: function getOffsetSizeName() {
         var a = this.props.tabPosition;return 'top' == a || 'bottom' == a ? 'offsetWidth' : 'offsetHeight';
      } }, { key: 'getSizeName', value: function getSizeName() {
         var a = this.props.tabPosition;return 'top' == a || 'bottom' == a ? 'width' : 'height';
      } }, { key: 'componentDidMount', value: function componentDidMount() {
         var a = this.getOffsetSizeName();this.scrollInfo.scrollerSize = { start: (0, _reactDom.findDOMNode)(this.refs.start)[a], end: (0, _reactDom.findDOMNode)(this.refs.end)[a] }, this.syncScroll({ force: !0 });
      } }, { key: 'onResize', value: function onResize() {
         delete this.currentListSize, delete this.availableSize, this.syncScroll({ force: !0 });
      } }, { key: 'syncScroll', value: function syncScroll() {
         var _ref = 0 >= arguments.length || void 0 === arguments[0] ? {} : arguments[0],
             a = _ref.force;this.updateScrollInfo(), this.doScroll(0, null, { force: a });
      } }, { key: 'scrollIntoView', value: function scrollIntoView(a) {
         if (a) {
            var b = a.getBoundingClientRect(),
                d = (0, _reactDom.findDOMNode)(this.wrapper || this).getBoundingClientRect(),
                f = this.props.tabPosition,
                g = 'top' == f || 'bottom' == f ? 'left' : 'top',
                h = 'top' == f || 'bottom' == f ? 'right' : 'bottom',
                i = b[g] - d[g],
                j = b[h] - d[h],
                k = this.props.scrollIntoViewOffset;0 > i ? this.doScroll(-i + k, -1) : 0 < j && this.doScroll(j + k, 1);
         }
      } }, { key: 'doScroll', value: function doScroll(a, b) {
         var _ref2 = 2 >= arguments.length || void 0 === arguments[2] ? {} : arguments[2],
             d = _ref2.force,
             f = this.scrollInfo,
             g = f.scrollPos + a * (b || this.props.scrollStep);this.setScrollPosition(g, { force: d });
      } }, { key: 'scrollBy', value: function scrollBy(a, b) {
         var _ref3 = 2 >= arguments.length || void 0 === arguments[2] ? {} : arguments[2],
             d = _ref3.force,
             f = this.scrollInfo,
             g = f.scrollPos + b * a;this.setScrollPosition(g, { force: d });
      } }, { key: 'onClick', value: function onClick(a) {
         var b = this.getAvailableSize();this.scrollBy(b, a);
      } }, { key: 'setScrollPosition', value: function setScrollPosition(a) {
         var _ref4 = 1 >= arguments.length || void 0 === arguments[1] ? {} : arguments[1],
             b = _ref4.force,
             d = this.scrollInfo;a > d.maxScrollPos && (a = d.maxScrollPos), 0 > a && (a = 0), a === d.scrollPos && !0 !== b || ((0, _objectAssign2.default)(d, { hasStartScroll: 0 !== a, hasEndScroll: a < d.maxScrollPos, scrollPos: a }), this.setState({}));
      } }, { key: 'updateScrollInfo', value: function updateScrollInfo() {
         var a = this.getAvailableSize(),
             b = this.getCurrentListSize(),
             d = (0, _objectAssign2.default)(this.scrollInfo, { availableSize: a, listSize: b });d.maxScrollPos = b > a ? b - a : 0, d.hasStartScroll = 0 != d.scrollPos, d.hasEndScroll = d.scrollPos < d.maxScrollPos;
      } }, { key: 'handleScrollMax', value: function handleScrollMax(a, b) {
         stop(b);var d = -1 == a ? 0 : this.scrollInfo.maxScrollPos;this.setScrollPosition(d);
      } }, { key: 'startScroll', value: function startScroll(a) {
         var _this2 = this,
             b = _hasTouch2.default ? 'touchend' : 'mouseup',
             d = function d() {
            _this2.stopScroll(), global.removeEventListener(b, d);
         };global.addEventListener(b, d), this.scrollInterval = global.setInterval(this.doScroll.bind(this, a), this.props.scrollSpeed), this.setState({ scrolling: !0, activeScroll: a });
      } }, { key: 'stopScroll', value: function stopScroll() {
         global.clearInterval(this.scrollInterval), this.setState({ scrolling: !1, activeScroll: 0 });
      } }, { key: 'renderScroller', value: function renderScroller(a) {
         var _props = this.props,
             b = _props.scroller,
             d = _props.vertical,
             f = _props.tabPosition;if (!b) return null;d ? -1 == a ? 'up' : 'down' : -1 == a ? 'left' : 'right';var g = 'top' == f || 'bottom' == f ? -1 == a ? 'left' : 'right' : -1 == a ? 'up' : 'down',
             h = 'boolean' == typeof b ? b ? 'on' : 'off' : 'auto',
             i = this.scrollInfo,
             j = -1 == a ? !i.hasStartScroll : !i.hasEndScroll,
             k = (0, _join2.default)(CLASS_NAME, m(h), m('direction-' + g), m('tab-position-' + f), this.state.activeScroll == a ? m('active') : '', 'auto' === b && j && m('hidden'), !0 === b && j && m('disabled')),
             l = !j && this.props.scrollOnClick ? this.onClick.bind(this, a) : emptyFn,
             n = j || this.props.scrollOnClick ? emptyFn : this.startScroll.bind(this, a),
             o = j ? emptyFn : this.handleScrollMax.bind(this, a),
             p = { ref: -1 == a ? 'start' : 'end', disabled: j, className: k, onClick: l, onMouseDown: !_hasTouch2.default && n, onTouchStart: _hasTouch2.default && n, onDoubleClick: o, children: ARROWS[g] },
             q = void 0;return this.props.renderScroller && (q = this.props.renderScroller(p)), void 0 == q && (q = _react2.default.createElement('div', p)), q;
      } /**
        * Cache the current list width on this instance.
        *
        * It will be invalidated by onResize
        *
        * @return {Number}
        */ }, { key: 'getCurrentListSize', value: function getCurrentListSize() {
         return this.currentListSize = this.currentListSize || (0, _reactDom.findDOMNode)(this.strip)[this.getOffsetSizeName()];
      } /**
        * Cache the available width on this instance.
        *
        * It will be invalidated by onResize
        *
        * @return {Number}
        */ }, { key: 'getAvailableSize', value: function getAvailableSize() {
         return this.availableSize = this.availableSize || (0, _reactDom.findDOMNode)(this.wrapper || this)[this.getOffsetSizeName()];
      } }, { key: 'render', value: function render() {
         var _this3 = this,
             a = this.props,
             b = a.scroller,
             d = a.tabPosition,
             f = this.scrollInfo,
             g = 'top' == d || 'bottom' == d ? 'left' : 'top',
             h = _defineProperty({}, g, (0, _reactMotion.spring)(-f.scrollPos, a.scrollSpringConfig)),
             i = _react2.default.createElement(_reactNotifyResize.NotifyResize, { key: 'resizer', onResize: this.onResize }),
             j = [a.childProps.children, i];return _react2.default.createElement(_reactFlex.Flex, _extends({ ref: null }, a), i, this.renderScroller(-1), _react2.default.createElement(_reactMotion.Motion, { style: h }, function (_ref5) {
            var k = _ref5[g],
                l = _react2.default.createElement(_reactFlex.Flex, _extends({}, a.childProps, { ref: function ref(n) {
                  return _this3.strip = n;
               }, children: j, style: _defineProperty({}, g, k) }));return !0 === b ? _react2.default.createElement(_reactFlex.Flex, { ref: function ref(n) {
                  return _this3.wrapper = n;
               }, className: 'react-tab-panel__tab-strip-scroll-wrap', row: !0, flexGrow: 1, flexShrink: 1, wrap: !1, alignItems: 'stretch' }, l) : l;
         }), this.renderScroller(1));
      } }]), Scroller;
}(_reactClass2.default);exports.default = Scroller;Scroller.propTypes = { /**
                                                                          * When true, scrolling will only happen on click
                                                                          * and will scroll all visible tabs to a given direction
                                                                          *
                                                                          * When false, scrolling will happen on mouseDown
                                                                          *
                                                                          * @type {Boolean}
                                                                          */scrollOnClick: _react.PropTypes.bool, scroller: _react.PropTypes.oneOf(['auto', !1, !0]) }, Scroller.defaultProps = _defineProperty2({ onScrollEnd: function onScrollEnd() {}, scrollStep: 15, scrollSpeed: 10, scrollSpringConfig: { stiffness: 370, damping: 60 }, scrollIntoViewOffset: 50, onScrollerClick: function onScrollerClick() {} }, 'onScrollEnd', function onScrollEnd() {});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, '__esModule', { value: !0 });var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
  }return target;
};var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
  };
}();var _react = __webpack_require__(0),
    _react2 = _interopRequireDefault(_react),
    _reactDom = __webpack_require__(3),
    _reactClass = __webpack_require__(2),
    _reactClass2 = _interopRequireDefault(_reactClass),
    _objectAssign = __webpack_require__(1),
    _objectAssign2 = _interopRequireDefault(_objectAssign),
    _reactFlex = __webpack_require__(8),
    _tabPositions = __webpack_require__(27),
    _tabPositions2 = _interopRequireDefault(_tabPositions),
    _join = __webpack_require__(5),
    _join2 = _interopRequireDefault(_join),
    _TabTitle = __webpack_require__(65),
    _TabTitle2 = _interopRequireDefault(_TabTitle),
    _bemFactory = __webpack_require__(6),
    _bemFactory2 = _interopRequireDefault(_bemFactory),
    _Scroller = __webpack_require__(62),
    _Scroller2 = _interopRequireDefault(_Scroller);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }return Array.from(arr);
}function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
}function _possibleConstructorReturn(self, call) {
  if (!self) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call && ('object' == (typeof call === 'undefined' ? 'undefined' : _typeof(call)) || 'function' == typeof call) ? call : self;
}function _inherits(subClass, superClass) {
  if ('function' != typeof superClass && null !== superClass) throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
}var CLASS_NAME = 'react-tab-panel__tab-strip',
    NEW_TAB = _react2.default.createElement('svg', { height: '20', viewBox: '0 0 24 24', width: '20', xmlns: 'http://www.w3.org/2000/svg' }, _react2.default.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }), _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })),
    bem = (0, _bemFactory2.default)(CLASS_NAME),
    m = function m(a) {
  return bem(null, a);
};var TabStrip = function (_Component) {
  function TabStrip(a) {
    _classCallCheck(this, TabStrip);var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TabStrip).call(this, a));return _this.state = { focused: !1, activeIndex: a.defaultActiveIndex || 0 }, _this.tabNodes = [], _this.state = { focused: !1, activeIndex: a.defaultActiveIndex || 0 }, _this;
  }return _inherits(TabStrip, _Component), _createClass(TabStrip, [{ key: 'componentDidUpdate', value: function componentDidUpdate(a, d) {
      var _this2 = this,
          e = this.prepareActiveIndex(a, d);e != this.p.activeIndex && function () {
        var f = _this2.p.activeIndex;_this2.scrollToTab(f), setTimeout(function () {
          f === _this2.p.activeIndex && _this2.scrollToTab(f);
        }, 100);
      }();
    } }, { key: 'scrollToTab', value: function scrollToTab(a) {
      var d = this.tabNodes[a];d && this.scroller && this.scroller.scrollIntoView(d);
    } }, { key: 'prepareClassName', value: function prepareClassName(a) {
      return (0, _join2.default)(a.className, CLASS_NAME, m('theme-' + a.theme), m('tab-align-' + a.tabAlign), m('tab-position-' + a.tabPosition), m('orientation-' + (a.vertical ? 'vertical' : 'horizontal')), a.focused && m('focused'), a.vertical && m('vertical'), a.firstActive && m('first-active'), a.lastActive && m('last-active'));
    } }, { key: 'prepareActiveIndex', value: function prepareActiveIndex(a, d) {
      return null == a.activeIndex ? (d || this.state).activeIndex : a.activeIndex;
    } }, { key: 'prepareProps', value: function prepareProps(a) {
      var d = (0, _objectAssign2.default)({}, a),
          e = this.prepareActiveIndex(d);return d.activeIndex = e, d.tabs = d.defaultTabs || d.tabs, d.onAddNew && (d.tabs = [].concat(_toConsumableArray(d.tabs), [{ title: NEW_TAB, selectable: !1, closeable: !1, onMouseDown: function onMouseDown() {
          d.onAddNew();
        } }])), d.tabIndex = 'boolean' == typeof d.tabIndex ? d.tabIndex ? 0 : -1 : d.tabIndex, this.tabNodes.length = d.tabs.length, d.firstActive = 0 === e, d.lastActive = e === d.tabs.length - 1, d.allTabsProps = [], d.onFocus = this.onFocus, d.onBlur = this.onBlur, d.onKeyDown = this.onKeyDown, d.focused = this.state.focused, d;
    } }, { key: 'render', value: function render() {
      var _this3 = this,
          a = this.p = this.prepareProps(this.props),
          d = this.prepareClassName(a),
          e = (0, _join2.default)(bem('before'), a.firstActive && bem('before', 'before-active')),
          f = (0, _join2.default)(bem('after'), a.lastActive && bem('after', 'after-active')),
          g = a.tabPosition,
          h = 'top' == g || 'bottom' == g,
          i = (0, _objectAssign2.default)({}, a, { alignItems: 'stretch', row: h, column: !h, wrap: !1, className: d }),
          j = { className: bem('inner'), alignItems: 'stretch', row: h, column: !h, wrap: !1, children: [_react2.default.createElement(_reactFlex.Item, { className: e }), a.tabs.map(this.renderTab), _react2.default.createElement(_reactFlex.Item, { className: f })] };return !1 === a.scroller ? _react2.default.createElement(_reactFlex.Flex, i, _react2.default.createElement(_reactFlex.Flex, j)) : _react2.default.createElement(_Scroller2.default, _extends({ ref: function ref(k) {
          return _this3.scroller = _this3.scroller || k;
        } }, i, { childProps: j }));
    } }, { key: 'onResize', value: function onResize() {} }, { key: 'onFocus', value: function onFocus(a) {
      this.setState({ focused: !0 }), this.props.onFocus(a, (0, _reactDom.findDOMNode)(this));
    } }, { key: 'onBlur', value: function onBlur(a) {
      this.setState({ focused: !1 }), this.props.onBlur(a);
    } }, { key: 'onKeyDown', value: function onKeyDown(a) {
      var d = a.key;'function' == typeof this.props.onKeyDown && this.props.onKeyDown(a);var e = 0;return 'ArrowLeft' == d || 'ArrowUp' == d ? e = -1 : ('ArrowRight' == d || 'ArrowDown' == d) && (e = 1), e ? this.onNavigate(e) : 'Home' === d ? this.onNavigateFirst() : 'End' == d ? this.onNavigateLast() : void 0;
    } }, { key: 'renderTab', value: function renderTab(a, d) {
      var _this4 = this,
          e = this.p,
          f = e.activeIndex,
          g = e.activateEvent,
          h = e.inTabPanel,
          i = e.tabStyle,
          j = e.tabEllipsis,
          k = e.vertical,
          l = e.tabAlign,
          n = e.closeable;'string' == typeof a && (a = { title: a });var o = e.tabs.length - 1 === d,
          p = f - 1 === d,
          q = d === f,
          r = (0, _objectAssign2.default)({ closeable: n }, a, { ref: function ref(u) {
          return _this4.tabNodes[d] = (0, _reactDom.findDOMNode)(u);
        }, index: d, activateEvent: g, activeIndex: f, active: q, first: 0 === d, last: o, beforeActive: p, afterActive: f + 1 === d, tabAlign: l, tabTitle: a.title, children: a.title, vertical: k, tabStyle: i, tabEllipsis: j, key: d });r.onActivate = this.onActivate.bind(this, d), r.onClose = this.onClose.bind(this, d, a), delete r.title, e.allTabsProps.push(r);var s = void 0;e.tabFactory && (s = e.tabFactory(r)), void 0 == s && (s = _react2.default.createElement(_TabTitle2.default, r));var t = (0, _join2.default)(bem('between'), p && bem('between', 'before-active'), q && bem('between', 'after-active'));return [s, !o && _react2.default.createElement(_reactFlex.Item, { className: t })];
    } }, { key: 'onNavigate', value: function onNavigate(a) {
      var d = this.p.activeIndex;this.onActivate(this.getAvailableIndexFrom(d, a, this.props.rotateNavigation));
    } }, { key: 'onNavigateFirst', value: function onNavigateFirst() {
      this.onActivate(this.getFirstAvailableIndex());
    } }, { key: 'onNavigateLast', value: function onNavigateLast() {
      this.onActivate(this.getLastAvailableIndex());
    } }, { key: 'onClose', value: function onClose(a, d) {
      this.props.onCloseTab(a), d.onClose && d.onClose();
    } }, { key: 'onActivate', value: function onActivate(a) {
      if (this.p.allTabsProps[a]) {
        var _d = this.p.tabs[a];!this.isSelectableTab(_d) || _d && _d.onActivate && !1 === _d.onActivate() || (null == this.props.activeIndex && this.setState({ activeIndex: a }), a != this.p.activeIndex && this.props.onActivate(a));
      }
    } }, { key: 'getAvailableIndexFrom', value: function getAvailableIndexFrom(a, d, e) {
      var f = this.p.allTabsProps || [];f.length;var g = void 0,
          h = void 0;e && (g = this.getFirstAvailableIndex(), h = this.getLastAvailableIndex());for (var _i = void 0, _j = function _j(l) {
        return e && (l < g ? l = h : l > h && (l = g)), l;
      }, _k = _j(a + d); _i = f[_k];) {
        if (this.isSelectableTab(_i)) return _k;_k = _j(_k + d);
      }return -1;
    } }, { key: 'isSelectableTab', value: function isSelectableTab(a) {
      var d = a;return 'number' == typeof a && (d = this.p.allTabsProps[a]), !d.disabled && !1 !== d.selectable;
    } }, { key: 'getFirstAvailableIndex', value: function getFirstAvailableIndex() {
      return this.getAvailableIndexFrom(-1, 1);
    } }, { key: 'getLastAvailableIndex', value: function getLastAvailableIndex() {
      var a = this.p.allTabsProps || [];return this.getAvailableIndexFrom(a.length, -1);
    } }]), TabStrip;
}(_reactClass2.default);exports.default = TabStrip;TabStrip.propTypes = _defineProperty({ tabStyle: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object]), rotateNavigation: _react.PropTypes.bool, scroller: _react.PropTypes.oneOf([!0, !1, 'auto']), tabIndex: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number]), tabEllipsis: _react.PropTypes.bool, tabPosition: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']), vertical: function vertical(a, d) {
    var e = a[d];if (e && 'left' != a.tabPosition && 'right' != a.tabPosition) return new Error('You can only have "vertical" tabs if "tabPosition" is one of "left", "right".');
  }, tabAlign: _react.PropTypes.oneOf(['start', 'center', 'end', 'space-around', 'space-between', 'stretch']) }, 'tabPosition', _react.PropTypes.oneOf(Object.keys(_tabPositions2.default))), TabStrip.defaultProps = { scroller: 'auto', scrollOnClick: !1, rotateNavigation: !0, tabIndex: !0, tabAlign: 'start', tabPosition: 'top', theme: 'default', onActivate: function onActivate() {}, onCloseTab: function onCloseTab() {}, onBlur: function onBlur() {}, onFocus: function onFocus() {}, isTabStrip: !0 };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: !0 });var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
  }return target;
};var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
  };
}();var _react = __webpack_require__(0),
    _react2 = _interopRequireDefault(_react),
    _reactDom = __webpack_require__(3),
    _reactClass = __webpack_require__(2),
    _reactClass2 = _interopRequireDefault(_reactClass),
    _objectAssign = __webpack_require__(1),
    _objectAssign2 = _interopRequireDefault(_objectAssign),
    _reactNotifyResize = __webpack_require__(15),
    _join = __webpack_require__(5),
    _join2 = _interopRequireDefault(_join);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
}function _possibleConstructorReturn(self, call) {
  if (!self) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call && ('object' == (typeof call === 'undefined' ? 'undefined' : _typeof(call)) || 'function' == typeof call) ? call : self;
}function _inherits(subClass, superClass) {
  if ('function' != typeof superClass && null !== superClass) throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
}var emptyFn = function emptyFn() {
  return null;
},
    DivFactory = function DivFactory(a) {
  return _react2.default.createElement('div', a);
};var FlexiBox = function (_Component) {
  function FlexiBox(a) {
    _classCallCheck(this, FlexiBox);var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlexiBox).call(this, a));return _this.mounted = !1, _this.state = { width: null, height: null }, _this.mounted = !1, _this;
  }return _inherits(FlexiBox, _Component), _createClass(FlexiBox, [{ key: 'render', value: function render() {
      var a = this.props,
          b = (0, _objectAssign2.default)({}, a.style);b.position && 'static' !== b.position || (b.position = 'relative');var c = a.factory || DivFactory,
          d = a.children;return _react2.default.createElement(Factory, _extends({}, a, { factory: null, children: null }), d(this.state), _react2.default.createElement(_reactNotifyResize.NotifyResize, { onResize: this.onResize, notifyOnMount: !0 }));
    } }, { key: 'onResize', value: function onResize(_ref) {
      var a = _ref.width,
          b = _ref.height;this.mounted || (this.mounted = !0), this.setState({ width: a, height: b });
    } }]), FlexiBox;
}(_reactClass2.default);exports.default = FlexiBox;FlexiBox.propTypes = { factory: _react.PropTypes.func, children: _react.PropTypes.func };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: !0 });var _typeof = 'function' == typeof Symbol && 'symbol' == _typeof2(Symbol.iterator) ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
} : function (obj) {
  return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
},
    _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
  }return target;
};var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
  };
}();var _react = __webpack_require__(0),
    _react2 = _interopRequireDefault(_react),
    _reactDom = __webpack_require__(3),
    _reactClass = __webpack_require__(2),
    _reactClass2 = _interopRequireDefault(_reactClass),
    _objectAssign = __webpack_require__(1),
    _objectAssign2 = _interopRequireDefault(_objectAssign),
    _reactNotifyResize = __webpack_require__(15),
    _join = __webpack_require__(5),
    _join2 = _interopRequireDefault(_join),
    _assignDefined = __webpack_require__(26),
    _assignDefined2 = _interopRequireDefault(_assignDefined),
    _bemFactory = __webpack_require__(6),
    _bemFactory2 = _interopRequireDefault(_bemFactory),
    _FlexiBox = __webpack_require__(64),
    _FlexiBox2 = _interopRequireDefault(_FlexiBox);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
}function _possibleConstructorReturn(self, call) {
  if (!self) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call && ('object' == (typeof call === 'undefined' ? 'undefined' : _typeof2(call)) || 'function' == typeof call) ? call : self;
}function _inherits(subClass, superClass) {
  if ('function' != typeof superClass && null !== superClass) throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
}var toNumber = function toNumber(a) {
  return parseInt(a, 10);
},
    stopPropagation = function stopPropagation(a) {
  return a.stopPropagation();
},
    getBorderPaddingSize = function getBorderPaddingSize(a) {
  var b = global.getComputedStyle(a);return { left: toNumber(b.borderLeftWidth) + toNumber(b.paddingLeft), right: toNumber(b.borderRightWidth) + toNumber(b.paddingRight), top: toNumber(b.borderTopWidth) + toNumber(b.paddingTop), bottom: toNumber(b.borderBottomWidth) + toNumber(b.paddingBottom) };
},
    CLASS_NAME = 'react-tab-panel__tab-title',
    bem = (0, _bemFactory2.default)(CLASS_NAME),
    m = function m(a) {
  return bem(null, a);
},
    invert = function invert(_ref) {
  var a = _ref.width,
      b = _ref.height;return { height: a, width: b };
},
    HIDDEN_STYLE = { position: 'absolute', visibility: 'hidden', width: 'auto', minWidth: 'auto', maxWidth: 'auto', height: 'auto', minHeight: 'auto', maxHeight: 'auto' };var TabTitle = function (_Component) {
  function TabTitle(a) {
    _classCallCheck(this, TabTitle);var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TabTitle).call(this, a));return _this.state = { style: {}, size: {}, hiddenSize: {}, innerSize: {} }, _this.state = { style: {}, size: {}, hiddenSize: {}, innerSize: {} }, _this;
  }return _inherits(TabTitle, _Component), _createClass(TabTitle, [{ key: 'prepareClassName', value: function prepareClassName(a) {
      return (0, _join2.default)(a.className, CLASS_NAME, a.first && m('first'), a.last && m('last'), a.vertical && m('vertical'), a.active && m('active'), a.beforeActive && m('before-active'), a.afterActive && m('after-active'), a.disabled && m('disabled'), a.closeable && m('closeable'), a.tabEllipsis && m('ellipsis'));
    } }, { key: 'prepareInnerClassName', value: function prepareInnerClassName(a) {
      return (0, _join2.default)(bem('inner'), a.active && bem('inner', 'active'), a.tabEllipsis && bem('inner', 'ellipsis'));
    } }, { key: 'prepareChildren', value: function prepareChildren(a) {
      var b = (void 0 === a.tabTitle ? a.children : a.tabTitle) || '\xA0';return a.closeable ? [b, this.renderCloseIcon()] : b;
    } }, { key: 'renderCloseIcon', value: function renderCloseIcon() {
      var a = _defineProperty({}, this.p.activateEvent, stopPropagation);return _react2.default.createElement('div', _extends({}, a, { onClick: this.onClose, title: 'Close tab', className: bem('close-icon') }), _react2.default.createElement('svg', { className: bem('close-icon-svg'), height: '14', width: '14', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, _react2.default.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' }), _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })));
    } }, { key: 'onClose', value: function onClose(a) {
      'onClick' == this.p.activateEvent && a.stopPropagation(), this.props.onClose(a);
    } }, { key: 'prepareInnerStyle', value: function prepareInnerStyle(a) {
      var b = a.tabStyle,
          c = ('function' == typeof b ? b(a) : b) || {};return (0, _objectAssign2.default)({}, c);
    } }, { key: 'prepareStyle', value: function prepareStyle(a, b) {
      var c = (0, _objectAssign2.default)({}, a.style);if (a.vertical && function () {
        //on vertical tabs - the name of the dimensions are inversed
        var d = { height: 'width', minHeight: 'minWidth', maxHeight: 'maxWidth' };Object.keys(d).forEach(function (f) {
          //NOTE: inner is rotated!
          var g = b[f];void 0 !== g && (c[f] = g, delete b[f], b[d[f]] = g);
        });
      }(), 'stretch' === a.tabAlign) {
        //if we are in stretch mode, the size
        //dimensions should be set on the style object (if they are specified)
        //not on the innerStyle, since the main div will now give the dimension
        var _d = a.vertical ? ['height', 'minHeight', 'maxHeight'] : ['width', 'minWidth', 'maxWidth'];_d.forEach(function (f) {
          var g = b[f];void 0 !== g && (c[f] = g, delete b[f]);
        });
      }return c;
    } }, { key: 'render', value: function render() {
      var _this2 = this,
          a = this.p = (0, _objectAssign2.default)({}, this.props);a.activateEvent = a.activateEvent || 'onClick';var b = a.index,
          c = this.prepareClassName(a),
          d = this.prepareInnerClassName(a),
          f = this.prepareChildren(a),
          _state = this.state,
          g = _state.innerSize,
          h = _state.hiddenSize,
          i = this.prepareInnerStyle(a),
          j = this.prepareStyle(a, i);a.vertical && ('stretch' == a.tabAlign ? (j.minWidth = g.height, j.height = h.width) : (j.minWidth = g.height, j.height = g.width));var k = (0, _objectAssign2.default)({}, a, _defineProperty({ style: j, disabled: null, className: c }, a.activateEvent, this.onActivate)),
          l = { key: 'inner', style: i, className: d, children: [f, a.vertical && _react2.default.createElement(_reactNotifyResize.NotifyResize, { measureSize: this.measureInnerSize, onResize: this.onInnerResize, notifyOnMount: !0 })] };if (a.vertical && 'stretch' === a.tabAlign) {
        var _ret2 = function () {
          var o = _react2.default.createElement('div', { key: 'innerHidden', className: (0, _join2.default)(d, bem('inner', 'hidden')), style: (0, _objectAssign2.default)({}, i, HIDDEN_STYLE) }, f, _react2.default.createElement(_reactNotifyResize.NotifyResize, { onResize: _this2.onHiddenResize, notifyOnMount: !0 }));return { v: _react2.default.createElement(_FlexiBox2.default, k, function (_ref2) {
              var p = _ref2.width,
                  q = _ref2.height;return q = Math.max(q || 0, h.width || 0), [_react2.default.createElement('div', _extends({}, l, { style: (0, _objectAssign2.default)({}, i, { width: q }) })), o];
            }) };
        }();if ('object' == ('undefined' == typeof _ret2 ? 'undefined' : _typeof(_ret2))) return _ret2.v;
      }return _react2.default.createElement('div', k, _react2.default.createElement('div', l));
    } }, { key: 'measureInnerSize', value: function measureInnerSize(a) {
      var b = a.offsetHeight,
          c = a.offsetWidth;if (this.props.vertical) {
        var d = getBorderPaddingSize(a.parentNode);b += d.left + d.right;
      }return { width: c, height: b };
    } }, { key: 'onInnerResize', value: function onInnerResize(_ref3) {
      var a = _ref3.width,
          b = _ref3.height;this.setState({ innerSize: { width: a, height: b } });
    } }, { key: 'onHiddenResize', value: function onHiddenResize(_ref4) {
      var a = _ref4.width,
          b = _ref4.height;this.setState({ hiddenSize: { width: a, height: b } });
    } }, { key: 'onActivate', value: function onActivate(a) {
      var b = this.props.activateEvent || 'onClick',
          c = (0, _reactDom.findDOMNode)(this);'function' == typeof this.props[b] && this.props[b](a), this.props.disabled || this.props.onActivate(c);
    } }]), TabTitle;
}(_reactClass2.default);exports.default = TabTitle;TabTitle.propTypes = { disabled: _react.PropTypes.bool, tabEllipsis: _react.PropTypes.bool, activateEvent: _react.PropTypes.oneOf(['onClick', 'onMouseEnter', 'onMouseDown']), onActivate: _react.PropTypes.func }, TabTitle.defaultProps = { onActivate: function onActivate() {} };
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: !0 }); /**
                                                             * Transition-end mapping
                                                             */var map = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd', msTransition: 'MSTransitionEnd', transition: 'transitionend' },
    EL,
    RESULT;exports.default = function () {
  if (EL || (EL = document.createElement('p')), RESULT) return RESULT;for (var a in map) {
    if (null != EL.style[a]) {
      RESULT = map[a];break;
    }
  }return RESULT;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(undefined);
// imports


// module
exports.push([module.i, "*, *:before, *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml {\n    font-size: 13px;\n    font-family: arial, sans-serif;\n}\n\n.flexContainer {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.flexItem {\n  margin-right: 20px;\n}\n\n.error, .error * {\n    color: red;\n}\n\n.form-section {\n    border: 2px solid gray;\n}\n\n.form-subsection {\n    border: none;\n    padding: 0;\n    margin: 0.5em 0;\n}\n\n.form-section-title {\n    font-weight: bold;\n}\n\n.form-subsection .form-section-title {\n    padding: 5px 0;\n}\n\n.form-element {\n    position: relative;\n}\n\n.form-element label {\n    width: 10em;\n    display: inline-block;\n}\n\n.form-section dt {\n    float: left;\n    width: 5em;\n}\n\n.form-section dd {\n    margin-left: 5em;\n}\n\n.form-help, .form-error {\n    display: inline-block;\n    border: thin solid;\n    border-radius: 50%;\n    margin: 0 2px;\n}\n\n.form-help {\n    padding: 0 4px;\n}\n\n.form-error {\n    padding: 0 6px;\n}\n\n.invisible {\n    visibility: hidden;\n}\n\n.hidden {\n    display: none;\n}", ""]);

// exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(undefined);
// imports


// module
exports.push([module.i, ".react-flex-v2 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.react-flex-v2--inline {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.react-flex-v2--display-flex {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.react-flex-v2--display-inline-flex {\n  display: -webkit-inline-box;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n/* ALIGN-ITEMS */\n.react-flex-v2--align-items-center {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n              -ms-grid-row-align: center;\n          align-items: center; }\n\n.react-flex-v2--align-items-stretch {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n              -ms-grid-row-align: stretch;\n          align-items: stretch; }\n\n.react-flex-v2--align-items-baseline {\n  -webkit-box-align: baseline;\n  -webkit-align-items: baseline;\n      -ms-flex-align: baseline;\n              -ms-grid-row-align: baseline;\n          align-items: baseline; }\n\n.react-flex-v2--align-items-end,\n.react-flex-v2--align-items-flex-end {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n              -ms-grid-row-align: flex-end;\n          align-items: flex-end; }\n\n.react-flex-v2--align-items-start,\n.react-flex-v2--align-items-flex-start {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n              -ms-grid-row-align: flex-start;\n          align-items: flex-start; }\n\n/* ALIGN-SELF */\n.react-flex-v2--align-self-center {\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center; }\n\n.react-flex-v2--align-self-stretch {\n  -webkit-align-self: stretch;\n      -ms-flex-item-align: stretch;\n          align-self: stretch; }\n\n.react-flex-v2--align-self-baseline {\n  -webkit-align-self: baseline;\n      -ms-flex-item-align: baseline;\n          align-self: baseline; }\n\n.react-flex-v2--align-self-auto {\n  -webkit-align-self: auto;\n      -ms-flex-item-align: auto;\n          align-self: auto; }\n\n.react-flex-v2--align-self-end,\n.react-flex-v2--align-self-flex-end {\n  -webkit-align-self: flex-end;\n      -ms-flex-item-align: end;\n          align-self: flex-end; }\n\n.react-flex-v2--align-self-start,\n.react-flex-v2--align-self-flex-start {\n  -webkit-align-self: flex-start;\n      -ms-flex-item-align: start;\n          align-self: flex-start; }\n\n/* ALIGN-CONTENT */\n.react-flex-v2--align-content-center {\n  -webkit-align-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n\n.react-flex-v2--align-content-stretch {\n  -webkit-align-content: stretch;\n      -ms-flex-line-pack: stretch;\n          align-content: stretch; }\n\n.react-flex-v2--align-content-around,\n.react-flex-v2--align-content-space-around {\n  -webkit-align-content: space-around;\n      -ms-flex-line-pack: distribute;\n          align-content: space-around; }\n\n.react-flex-v2--align-content-between,\n.react-flex-v2--align-content-space-between {\n  -webkit-align-content: space-between;\n      -ms-flex-line-pack: justify;\n          align-content: space-between; }\n\n.react-flex-v2--align-content-end,\n.react-flex-v2--align-content-flex-end {\n  -webkit-align-content: flex-end;\n      -ms-flex-line-pack: end;\n          align-content: flex-end; }\n\n.react-flex-v2--align-content-start,\n.react-flex-v2--align-content-flex-start {\n  -webkit-align-content: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start; }\n\n/* JUSTIFY-CONTENT */\n.react-flex-v2--justify-content-start,\n.react-flex-v2--justify-content-flex-start {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.react-flex-v2--justify-content-end,\n.react-flex-v2--justify-content-flex-end {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.react-flex-v2--justify-content-center {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.react-flex-v2--justify-content-space-around {\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n\n.react-flex-v2--justify-content-space-between {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n/* WRAP */\n.react-flex-v2--wrap {\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n\n/* COLUMN */\n.react-flex-v2--column {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.react-flex-v2--column-reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse; }\n\n/* ROW */\n.react-flex-v2--row {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.react-flex-v2--row-reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: row-reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n\n/* FLEX-BASIS */\n.react-flex-v2--flex-basis-auto {\n  -webkit-flex-basis: auto;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n\n.react-flex-v2--flex-basis-none,\n.react-flex-v2--flex-basis-0 {\n  -webkit-flex-basis: 0px;\n      -ms-flex-preferred-size: 0px;\n          flex-basis: 0px; }\n\n.react-flex-v2--flex-basis-fill {\n  -webkit-flex-basis: fill;\n      -ms-flex-preferred-size: fill;\n          flex-basis: fill; }\n\n.react-flex-v2--flex-basis-content {\n  -webkit-flex-basis: content;\n      -ms-flex-preferred-size: content;\n          flex-basis: content; }\n\n.react-flex-v2--flex-basis-fit-content {\n  -webkit-flex-basis: fit-content;\n      -ms-flex-preferred-size: fit-content;\n          flex-basis: fit-content; }\n\n.react-flex-v2--flex-basis-min-content {\n  -webkit-flex-basis: min-content;\n      -ms-flex-preferred-size: min-content;\n          flex-basis: min-content; }\n\n.react-flex-v2--flex-basis-max-content {\n  -webkit-flex-basis: max-content;\n      -ms-flex-preferred-size: max-content;\n          flex-basis: max-content; }\n\n/* FLEX */\n.react-flex-v2--flex-none,\n.react-flex-v2--flex-0 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n      -ms-flex: none;\n          flex: none; }\n\n.react-flex-v2--flex-1 {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.react-flex-v2--flex-2 {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2; }\n\n.react-flex-v2--flex-3 {\n  -webkit-box-flex: 3;\n  -webkit-flex: 3;\n      -ms-flex: 3;\n          flex: 3; }\n\n.react-flex-v2--flex-4 {\n  -webkit-box-flex: 4;\n  -webkit-flex: 4;\n      -ms-flex: 4;\n          flex: 4; }\n\n.react-flex-v2--flex-5 {\n  -webkit-box-flex: 5;\n  -webkit-flex: 5;\n      -ms-flex: 5;\n          flex: 5; }\n\n.react-flex-v2--flex-6 {\n  -webkit-box-flex: 6;\n  -webkit-flex: 6;\n      -ms-flex: 6;\n          flex: 6; }\n\n.react-flex-v2--flex-7 {\n  -webkit-box-flex: 7;\n  -webkit-flex: 7;\n      -ms-flex: 7;\n          flex: 7; }\n\n.react-flex-v2--flex-8 {\n  -webkit-box-flex: 8;\n  -webkit-flex: 8;\n      -ms-flex: 8;\n          flex: 8; }\n\n.react-flex-v2--flex-9 {\n  -webkit-box-flex: 9;\n  -webkit-flex: 9;\n      -ms-flex: 9;\n          flex: 9; }\n\n.react-flex-v2--flex-10 {\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10; }\n\n.react-flex-v2--flex-11 {\n  -webkit-box-flex: 11;\n  -webkit-flex: 11;\n      -ms-flex: 11;\n          flex: 11; }\n\n.react-flex-v2--flex-12 {\n  -webkit-box-flex: 12;\n  -webkit-flex: 12;\n      -ms-flex: 12;\n          flex: 12; }\n\n.react-flex-v2--flex-13 {\n  -webkit-box-flex: 13;\n  -webkit-flex: 13;\n      -ms-flex: 13;\n          flex: 13; }\n\n.react-flex-v2--flex-14 {\n  -webkit-box-flex: 14;\n  -webkit-flex: 14;\n      -ms-flex: 14;\n          flex: 14; }\n\n.react-flex-v2--flex-15 {\n  -webkit-box-flex: 15;\n  -webkit-flex: 15;\n      -ms-flex: 15;\n          flex: 15; }\n\n.react-flex-v2--flex-16 {\n  -webkit-box-flex: 16;\n  -webkit-flex: 16;\n      -ms-flex: 16;\n          flex: 16; }\n\n.react-flex-v2--flex-17 {\n  -webkit-box-flex: 17;\n  -webkit-flex: 17;\n      -ms-flex: 17;\n          flex: 17; }\n\n.react-flex-v2--flex-18 {\n  -webkit-box-flex: 18;\n  -webkit-flex: 18;\n      -ms-flex: 18;\n          flex: 18; }\n\n.react-flex-v2--flex-19 {\n  -webkit-box-flex: 19;\n  -webkit-flex: 19;\n      -ms-flex: 19;\n          flex: 19; }\n\n.react-flex-v2--flex-20 {\n  -webkit-box-flex: 20;\n  -webkit-flex: 20;\n      -ms-flex: 20;\n          flex: 20; }\n\n.react-flex-v2--flex-21 {\n  -webkit-box-flex: 21;\n  -webkit-flex: 21;\n      -ms-flex: 21;\n          flex: 21; }\n\n.react-flex-v2--flex-22 {\n  -webkit-box-flex: 22;\n  -webkit-flex: 22;\n      -ms-flex: 22;\n          flex: 22; }\n\n.react-flex-v2--flex-23 {\n  -webkit-box-flex: 23;\n  -webkit-flex: 23;\n      -ms-flex: 23;\n          flex: 23; }\n\n.react-flex-v2--flex-24 {\n  -webkit-box-flex: 24;\n  -webkit-flex: 24;\n      -ms-flex: 24;\n          flex: 24; }\n\n.react-flex-v2--flex-25 {\n  -webkit-box-flex: 25;\n  -webkit-flex: 25;\n      -ms-flex: 25;\n          flex: 25; }\n\n.react-flex-v2--flex-26 {\n  -webkit-box-flex: 26;\n  -webkit-flex: 26;\n      -ms-flex: 26;\n          flex: 26; }\n\n.react-flex-v2--flex-27 {\n  -webkit-box-flex: 27;\n  -webkit-flex: 27;\n      -ms-flex: 27;\n          flex: 27; }\n\n.react-flex-v2--flex-28 {\n  -webkit-box-flex: 28;\n  -webkit-flex: 28;\n      -ms-flex: 28;\n          flex: 28; }\n\n.react-flex-v2--flex-29 {\n  -webkit-box-flex: 29;\n  -webkit-flex: 29;\n      -ms-flex: 29;\n          flex: 29; }\n\n.react-flex-v2--flex-30 {\n  -webkit-box-flex: 30;\n  -webkit-flex: 30;\n      -ms-flex: 30;\n          flex: 30; }\n\n.react-flex-v2--flex-31 {\n  -webkit-box-flex: 31;\n  -webkit-flex: 31;\n      -ms-flex: 31;\n          flex: 31; }\n\n.react-flex-v2--flex-32 {\n  -webkit-box-flex: 32;\n  -webkit-flex: 32;\n      -ms-flex: 32;\n          flex: 32; }\n\n.react-flex-v2--flex-33 {\n  -webkit-box-flex: 33;\n  -webkit-flex: 33;\n      -ms-flex: 33;\n          flex: 33; }\n\n.react-flex-v2--flex-34 {\n  -webkit-box-flex: 34;\n  -webkit-flex: 34;\n      -ms-flex: 34;\n          flex: 34; }\n\n.react-flex-v2--flex-35 {\n  -webkit-box-flex: 35;\n  -webkit-flex: 35;\n      -ms-flex: 35;\n          flex: 35; }\n\n.react-flex-v2--flex-36 {\n  -webkit-box-flex: 36;\n  -webkit-flex: 36;\n      -ms-flex: 36;\n          flex: 36; }\n\n.react-flex-v2--flex-37 {\n  -webkit-box-flex: 37;\n  -webkit-flex: 37;\n      -ms-flex: 37;\n          flex: 37; }\n\n.react-flex-v2--flex-38 {\n  -webkit-box-flex: 38;\n  -webkit-flex: 38;\n      -ms-flex: 38;\n          flex: 38; }\n\n.react-flex-v2--flex-39 {\n  -webkit-box-flex: 39;\n  -webkit-flex: 39;\n      -ms-flex: 39;\n          flex: 39; }\n\n.react-flex-v2--flex-40 {\n  -webkit-box-flex: 40;\n  -webkit-flex: 40;\n      -ms-flex: 40;\n          flex: 40; }\n\n.react-flex-v2--flex-41 {\n  -webkit-box-flex: 41;\n  -webkit-flex: 41;\n      -ms-flex: 41;\n          flex: 41; }\n\n.react-flex-v2--flex-42 {\n  -webkit-box-flex: 42;\n  -webkit-flex: 42;\n      -ms-flex: 42;\n          flex: 42; }\n\n.react-flex-v2--flex-43 {\n  -webkit-box-flex: 43;\n  -webkit-flex: 43;\n      -ms-flex: 43;\n          flex: 43; }\n\n.react-flex-v2--flex-44 {\n  -webkit-box-flex: 44;\n  -webkit-flex: 44;\n      -ms-flex: 44;\n          flex: 44; }\n\n.react-flex-v2--flex-45 {\n  -webkit-box-flex: 45;\n  -webkit-flex: 45;\n      -ms-flex: 45;\n          flex: 45; }\n\n.react-flex-v2--flex-46 {\n  -webkit-box-flex: 46;\n  -webkit-flex: 46;\n      -ms-flex: 46;\n          flex: 46; }\n\n.react-flex-v2--flex-47 {\n  -webkit-box-flex: 47;\n  -webkit-flex: 47;\n      -ms-flex: 47;\n          flex: 47; }\n\n.react-flex-v2--flex-48 {\n  -webkit-box-flex: 48;\n  -webkit-flex: 48;\n      -ms-flex: 48;\n          flex: 48; }\n\n.react-flex-v2--flex-49 {\n  -webkit-box-flex: 49;\n  -webkit-flex: 49;\n      -ms-flex: 49;\n          flex: 49; }\n\n.react-flex-v2--flex-50 {\n  -webkit-box-flex: 50;\n  -webkit-flex: 50;\n      -ms-flex: 50;\n          flex: 50; }\n\n.react-flex-v2--flex-51 {\n  -webkit-box-flex: 51;\n  -webkit-flex: 51;\n      -ms-flex: 51;\n          flex: 51; }\n\n.react-flex-v2--flex-52 {\n  -webkit-box-flex: 52;\n  -webkit-flex: 52;\n      -ms-flex: 52;\n          flex: 52; }\n\n.react-flex-v2--flex-53 {\n  -webkit-box-flex: 53;\n  -webkit-flex: 53;\n      -ms-flex: 53;\n          flex: 53; }\n\n.react-flex-v2--flex-54 {\n  -webkit-box-flex: 54;\n  -webkit-flex: 54;\n      -ms-flex: 54;\n          flex: 54; }\n\n.react-flex-v2--flex-55 {\n  -webkit-box-flex: 55;\n  -webkit-flex: 55;\n      -ms-flex: 55;\n          flex: 55; }\n\n.react-flex-v2--flex-56 {\n  -webkit-box-flex: 56;\n  -webkit-flex: 56;\n      -ms-flex: 56;\n          flex: 56; }\n\n.react-flex-v2--flex-57 {\n  -webkit-box-flex: 57;\n  -webkit-flex: 57;\n      -ms-flex: 57;\n          flex: 57; }\n\n.react-flex-v2--flex-58 {\n  -webkit-box-flex: 58;\n  -webkit-flex: 58;\n      -ms-flex: 58;\n          flex: 58; }\n\n.react-flex-v2--flex-59 {\n  -webkit-box-flex: 59;\n  -webkit-flex: 59;\n      -ms-flex: 59;\n          flex: 59; }\n\n.react-flex-v2--flex-60 {\n  -webkit-box-flex: 60;\n  -webkit-flex: 60;\n      -ms-flex: 60;\n          flex: 60; }\n\n.react-flex-v2--flex-61 {\n  -webkit-box-flex: 61;\n  -webkit-flex: 61;\n      -ms-flex: 61;\n          flex: 61; }\n\n.react-flex-v2--flex-62 {\n  -webkit-box-flex: 62;\n  -webkit-flex: 62;\n      -ms-flex: 62;\n          flex: 62; }\n\n.react-flex-v2--flex-63 {\n  -webkit-box-flex: 63;\n  -webkit-flex: 63;\n      -ms-flex: 63;\n          flex: 63; }\n\n.react-flex-v2--flex-64 {\n  -webkit-box-flex: 64;\n  -webkit-flex: 64;\n      -ms-flex: 64;\n          flex: 64; }\n\n.react-flex-v2--flex-65 {\n  -webkit-box-flex: 65;\n  -webkit-flex: 65;\n      -ms-flex: 65;\n          flex: 65; }\n\n.react-flex-v2--flex-66 {\n  -webkit-box-flex: 66;\n  -webkit-flex: 66;\n      -ms-flex: 66;\n          flex: 66; }\n\n.react-flex-v2--flex-67 {\n  -webkit-box-flex: 67;\n  -webkit-flex: 67;\n      -ms-flex: 67;\n          flex: 67; }\n\n.react-flex-v2--flex-68 {\n  -webkit-box-flex: 68;\n  -webkit-flex: 68;\n      -ms-flex: 68;\n          flex: 68; }\n\n.react-flex-v2--flex-69 {\n  -webkit-box-flex: 69;\n  -webkit-flex: 69;\n      -ms-flex: 69;\n          flex: 69; }\n\n.react-flex-v2--flex-70 {\n  -webkit-box-flex: 70;\n  -webkit-flex: 70;\n      -ms-flex: 70;\n          flex: 70; }\n\n.react-flex-v2--flex-71 {\n  -webkit-box-flex: 71;\n  -webkit-flex: 71;\n      -ms-flex: 71;\n          flex: 71; }\n\n.react-flex-v2--flex-72 {\n  -webkit-box-flex: 72;\n  -webkit-flex: 72;\n      -ms-flex: 72;\n          flex: 72; }\n\n.react-flex-v2--flex-73 {\n  -webkit-box-flex: 73;\n  -webkit-flex: 73;\n      -ms-flex: 73;\n          flex: 73; }\n\n.react-flex-v2--flex-74 {\n  -webkit-box-flex: 74;\n  -webkit-flex: 74;\n      -ms-flex: 74;\n          flex: 74; }\n\n.react-flex-v2--flex-75 {\n  -webkit-box-flex: 75;\n  -webkit-flex: 75;\n      -ms-flex: 75;\n          flex: 75; }\n\n.react-flex-v2--flex-76 {\n  -webkit-box-flex: 76;\n  -webkit-flex: 76;\n      -ms-flex: 76;\n          flex: 76; }\n\n.react-flex-v2--flex-77 {\n  -webkit-box-flex: 77;\n  -webkit-flex: 77;\n      -ms-flex: 77;\n          flex: 77; }\n\n.react-flex-v2--flex-78 {\n  -webkit-box-flex: 78;\n  -webkit-flex: 78;\n      -ms-flex: 78;\n          flex: 78; }\n\n.react-flex-v2--flex-79 {\n  -webkit-box-flex: 79;\n  -webkit-flex: 79;\n      -ms-flex: 79;\n          flex: 79; }\n\n.react-flex-v2--flex-80 {\n  -webkit-box-flex: 80;\n  -webkit-flex: 80;\n      -ms-flex: 80;\n          flex: 80; }\n\n.react-flex-v2--flex-81 {\n  -webkit-box-flex: 81;\n  -webkit-flex: 81;\n      -ms-flex: 81;\n          flex: 81; }\n\n.react-flex-v2--flex-82 {\n  -webkit-box-flex: 82;\n  -webkit-flex: 82;\n      -ms-flex: 82;\n          flex: 82; }\n\n.react-flex-v2--flex-83 {\n  -webkit-box-flex: 83;\n  -webkit-flex: 83;\n      -ms-flex: 83;\n          flex: 83; }\n\n.react-flex-v2--flex-84 {\n  -webkit-box-flex: 84;\n  -webkit-flex: 84;\n      -ms-flex: 84;\n          flex: 84; }\n\n.react-flex-v2--flex-85 {\n  -webkit-box-flex: 85;\n  -webkit-flex: 85;\n      -ms-flex: 85;\n          flex: 85; }\n\n.react-flex-v2--flex-86 {\n  -webkit-box-flex: 86;\n  -webkit-flex: 86;\n      -ms-flex: 86;\n          flex: 86; }\n\n.react-flex-v2--flex-87 {\n  -webkit-box-flex: 87;\n  -webkit-flex: 87;\n      -ms-flex: 87;\n          flex: 87; }\n\n.react-flex-v2--flex-88 {\n  -webkit-box-flex: 88;\n  -webkit-flex: 88;\n      -ms-flex: 88;\n          flex: 88; }\n\n.react-flex-v2--flex-89 {\n  -webkit-box-flex: 89;\n  -webkit-flex: 89;\n      -ms-flex: 89;\n          flex: 89; }\n\n.react-flex-v2--flex-90 {\n  -webkit-box-flex: 90;\n  -webkit-flex: 90;\n      -ms-flex: 90;\n          flex: 90; }\n\n.react-flex-v2--flex-91 {\n  -webkit-box-flex: 91;\n  -webkit-flex: 91;\n      -ms-flex: 91;\n          flex: 91; }\n\n.react-flex-v2--flex-92 {\n  -webkit-box-flex: 92;\n  -webkit-flex: 92;\n      -ms-flex: 92;\n          flex: 92; }\n\n.react-flex-v2--flex-93 {\n  -webkit-box-flex: 93;\n  -webkit-flex: 93;\n      -ms-flex: 93;\n          flex: 93; }\n\n.react-flex-v2--flex-94 {\n  -webkit-box-flex: 94;\n  -webkit-flex: 94;\n      -ms-flex: 94;\n          flex: 94; }\n\n.react-flex-v2--flex-95 {\n  -webkit-box-flex: 95;\n  -webkit-flex: 95;\n      -ms-flex: 95;\n          flex: 95; }\n\n.react-flex-v2--flex-96 {\n  -webkit-box-flex: 96;\n  -webkit-flex: 96;\n      -ms-flex: 96;\n          flex: 96; }\n\n.react-flex-v2--flex-97 {\n  -webkit-box-flex: 97;\n  -webkit-flex: 97;\n      -ms-flex: 97;\n          flex: 97; }\n\n.react-flex-v2--flex-98 {\n  -webkit-box-flex: 98;\n  -webkit-flex: 98;\n      -ms-flex: 98;\n          flex: 98; }\n\n.react-flex-v2--flex-99 {\n  -webkit-box-flex: 99;\n  -webkit-flex: 99;\n      -ms-flex: 99;\n          flex: 99; }\n\n.react-flex-v2--flex-100 {\n  -webkit-box-flex: 100;\n  -webkit-flex: 100;\n      -ms-flex: 100;\n          flex: 100; }\n\n/* FLEX-GROW */\n.react-flex-v2--flex-grow-0 {\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n\n.react-flex-v2--flex-grow-1 {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n\n.react-flex-v2--flex-grow-2 {\n  -webkit-box-flex: 2;\n  -webkit-flex-grow: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2; }\n\n.react-flex-v2--flex-grow-3 {\n  -webkit-box-flex: 3;\n  -webkit-flex-grow: 3;\n      -ms-flex-positive: 3;\n          flex-grow: 3; }\n\n.react-flex-v2--flex-grow-4 {\n  -webkit-box-flex: 4;\n  -webkit-flex-grow: 4;\n      -ms-flex-positive: 4;\n          flex-grow: 4; }\n\n.react-flex-v2--flex-grow-5 {\n  -webkit-box-flex: 5;\n  -webkit-flex-grow: 5;\n      -ms-flex-positive: 5;\n          flex-grow: 5; }\n\n.react-flex-v2--flex-grow-6 {\n  -webkit-box-flex: 6;\n  -webkit-flex-grow: 6;\n      -ms-flex-positive: 6;\n          flex-grow: 6; }\n\n.react-flex-v2--flex-grow-7 {\n  -webkit-box-flex: 7;\n  -webkit-flex-grow: 7;\n      -ms-flex-positive: 7;\n          flex-grow: 7; }\n\n.react-flex-v2--flex-grow-8 {\n  -webkit-box-flex: 8;\n  -webkit-flex-grow: 8;\n      -ms-flex-positive: 8;\n          flex-grow: 8; }\n\n.react-flex-v2--flex-grow-9 {\n  -webkit-box-flex: 9;\n  -webkit-flex-grow: 9;\n      -ms-flex-positive: 9;\n          flex-grow: 9; }\n\n.react-flex-v2--flex-grow-10 {\n  -webkit-box-flex: 10;\n  -webkit-flex-grow: 10;\n      -ms-flex-positive: 10;\n          flex-grow: 10; }\n\n.react-flex-v2--flex-grow-11 {\n  -webkit-box-flex: 11;\n  -webkit-flex-grow: 11;\n      -ms-flex-positive: 11;\n          flex-grow: 11; }\n\n.react-flex-v2--flex-grow-12 {\n  -webkit-box-flex: 12;\n  -webkit-flex-grow: 12;\n      -ms-flex-positive: 12;\n          flex-grow: 12; }\n\n.react-flex-v2--flex-grow-13 {\n  -webkit-box-flex: 13;\n  -webkit-flex-grow: 13;\n      -ms-flex-positive: 13;\n          flex-grow: 13; }\n\n.react-flex-v2--flex-grow-14 {\n  -webkit-box-flex: 14;\n  -webkit-flex-grow: 14;\n      -ms-flex-positive: 14;\n          flex-grow: 14; }\n\n.react-flex-v2--flex-grow-15 {\n  -webkit-box-flex: 15;\n  -webkit-flex-grow: 15;\n      -ms-flex-positive: 15;\n          flex-grow: 15; }\n\n.react-flex-v2--flex-grow-16 {\n  -webkit-box-flex: 16;\n  -webkit-flex-grow: 16;\n      -ms-flex-positive: 16;\n          flex-grow: 16; }\n\n.react-flex-v2--flex-grow-17 {\n  -webkit-box-flex: 17;\n  -webkit-flex-grow: 17;\n      -ms-flex-positive: 17;\n          flex-grow: 17; }\n\n.react-flex-v2--flex-grow-18 {\n  -webkit-box-flex: 18;\n  -webkit-flex-grow: 18;\n      -ms-flex-positive: 18;\n          flex-grow: 18; }\n\n.react-flex-v2--flex-grow-19 {\n  -webkit-box-flex: 19;\n  -webkit-flex-grow: 19;\n      -ms-flex-positive: 19;\n          flex-grow: 19; }\n\n.react-flex-v2--flex-grow-20 {\n  -webkit-box-flex: 20;\n  -webkit-flex-grow: 20;\n      -ms-flex-positive: 20;\n          flex-grow: 20; }\n\n.react-flex-v2--flex-grow-21 {\n  -webkit-box-flex: 21;\n  -webkit-flex-grow: 21;\n      -ms-flex-positive: 21;\n          flex-grow: 21; }\n\n.react-flex-v2--flex-grow-22 {\n  -webkit-box-flex: 22;\n  -webkit-flex-grow: 22;\n      -ms-flex-positive: 22;\n          flex-grow: 22; }\n\n.react-flex-v2--flex-grow-23 {\n  -webkit-box-flex: 23;\n  -webkit-flex-grow: 23;\n      -ms-flex-positive: 23;\n          flex-grow: 23; }\n\n.react-flex-v2--flex-grow-24 {\n  -webkit-box-flex: 24;\n  -webkit-flex-grow: 24;\n      -ms-flex-positive: 24;\n          flex-grow: 24; }\n\n.react-flex-v2--flex-grow-25 {\n  -webkit-box-flex: 25;\n  -webkit-flex-grow: 25;\n      -ms-flex-positive: 25;\n          flex-grow: 25; }\n\n.react-flex-v2--flex-grow-26 {\n  -webkit-box-flex: 26;\n  -webkit-flex-grow: 26;\n      -ms-flex-positive: 26;\n          flex-grow: 26; }\n\n.react-flex-v2--flex-grow-27 {\n  -webkit-box-flex: 27;\n  -webkit-flex-grow: 27;\n      -ms-flex-positive: 27;\n          flex-grow: 27; }\n\n.react-flex-v2--flex-grow-28 {\n  -webkit-box-flex: 28;\n  -webkit-flex-grow: 28;\n      -ms-flex-positive: 28;\n          flex-grow: 28; }\n\n.react-flex-v2--flex-grow-29 {\n  -webkit-box-flex: 29;\n  -webkit-flex-grow: 29;\n      -ms-flex-positive: 29;\n          flex-grow: 29; }\n\n.react-flex-v2--flex-grow-30 {\n  -webkit-box-flex: 30;\n  -webkit-flex-grow: 30;\n      -ms-flex-positive: 30;\n          flex-grow: 30; }\n\n.react-flex-v2--flex-grow-31 {\n  -webkit-box-flex: 31;\n  -webkit-flex-grow: 31;\n      -ms-flex-positive: 31;\n          flex-grow: 31; }\n\n.react-flex-v2--flex-grow-32 {\n  -webkit-box-flex: 32;\n  -webkit-flex-grow: 32;\n      -ms-flex-positive: 32;\n          flex-grow: 32; }\n\n.react-flex-v2--flex-grow-33 {\n  -webkit-box-flex: 33;\n  -webkit-flex-grow: 33;\n      -ms-flex-positive: 33;\n          flex-grow: 33; }\n\n.react-flex-v2--flex-grow-34 {\n  -webkit-box-flex: 34;\n  -webkit-flex-grow: 34;\n      -ms-flex-positive: 34;\n          flex-grow: 34; }\n\n.react-flex-v2--flex-grow-35 {\n  -webkit-box-flex: 35;\n  -webkit-flex-grow: 35;\n      -ms-flex-positive: 35;\n          flex-grow: 35; }\n\n.react-flex-v2--flex-grow-36 {\n  -webkit-box-flex: 36;\n  -webkit-flex-grow: 36;\n      -ms-flex-positive: 36;\n          flex-grow: 36; }\n\n.react-flex-v2--flex-grow-37 {\n  -webkit-box-flex: 37;\n  -webkit-flex-grow: 37;\n      -ms-flex-positive: 37;\n          flex-grow: 37; }\n\n.react-flex-v2--flex-grow-38 {\n  -webkit-box-flex: 38;\n  -webkit-flex-grow: 38;\n      -ms-flex-positive: 38;\n          flex-grow: 38; }\n\n.react-flex-v2--flex-grow-39 {\n  -webkit-box-flex: 39;\n  -webkit-flex-grow: 39;\n      -ms-flex-positive: 39;\n          flex-grow: 39; }\n\n.react-flex-v2--flex-grow-40 {\n  -webkit-box-flex: 40;\n  -webkit-flex-grow: 40;\n      -ms-flex-positive: 40;\n          flex-grow: 40; }\n\n.react-flex-v2--flex-grow-41 {\n  -webkit-box-flex: 41;\n  -webkit-flex-grow: 41;\n      -ms-flex-positive: 41;\n          flex-grow: 41; }\n\n.react-flex-v2--flex-grow-42 {\n  -webkit-box-flex: 42;\n  -webkit-flex-grow: 42;\n      -ms-flex-positive: 42;\n          flex-grow: 42; }\n\n.react-flex-v2--flex-grow-43 {\n  -webkit-box-flex: 43;\n  -webkit-flex-grow: 43;\n      -ms-flex-positive: 43;\n          flex-grow: 43; }\n\n.react-flex-v2--flex-grow-44 {\n  -webkit-box-flex: 44;\n  -webkit-flex-grow: 44;\n      -ms-flex-positive: 44;\n          flex-grow: 44; }\n\n.react-flex-v2--flex-grow-45 {\n  -webkit-box-flex: 45;\n  -webkit-flex-grow: 45;\n      -ms-flex-positive: 45;\n          flex-grow: 45; }\n\n.react-flex-v2--flex-grow-46 {\n  -webkit-box-flex: 46;\n  -webkit-flex-grow: 46;\n      -ms-flex-positive: 46;\n          flex-grow: 46; }\n\n.react-flex-v2--flex-grow-47 {\n  -webkit-box-flex: 47;\n  -webkit-flex-grow: 47;\n      -ms-flex-positive: 47;\n          flex-grow: 47; }\n\n.react-flex-v2--flex-grow-48 {\n  -webkit-box-flex: 48;\n  -webkit-flex-grow: 48;\n      -ms-flex-positive: 48;\n          flex-grow: 48; }\n\n.react-flex-v2--flex-grow-49 {\n  -webkit-box-flex: 49;\n  -webkit-flex-grow: 49;\n      -ms-flex-positive: 49;\n          flex-grow: 49; }\n\n.react-flex-v2--flex-grow-50 {\n  -webkit-box-flex: 50;\n  -webkit-flex-grow: 50;\n      -ms-flex-positive: 50;\n          flex-grow: 50; }\n\n.react-flex-v2--flex-grow-51 {\n  -webkit-box-flex: 51;\n  -webkit-flex-grow: 51;\n      -ms-flex-positive: 51;\n          flex-grow: 51; }\n\n.react-flex-v2--flex-grow-52 {\n  -webkit-box-flex: 52;\n  -webkit-flex-grow: 52;\n      -ms-flex-positive: 52;\n          flex-grow: 52; }\n\n.react-flex-v2--flex-grow-53 {\n  -webkit-box-flex: 53;\n  -webkit-flex-grow: 53;\n      -ms-flex-positive: 53;\n          flex-grow: 53; }\n\n.react-flex-v2--flex-grow-54 {\n  -webkit-box-flex: 54;\n  -webkit-flex-grow: 54;\n      -ms-flex-positive: 54;\n          flex-grow: 54; }\n\n.react-flex-v2--flex-grow-55 {\n  -webkit-box-flex: 55;\n  -webkit-flex-grow: 55;\n      -ms-flex-positive: 55;\n          flex-grow: 55; }\n\n.react-flex-v2--flex-grow-56 {\n  -webkit-box-flex: 56;\n  -webkit-flex-grow: 56;\n      -ms-flex-positive: 56;\n          flex-grow: 56; }\n\n.react-flex-v2--flex-grow-57 {\n  -webkit-box-flex: 57;\n  -webkit-flex-grow: 57;\n      -ms-flex-positive: 57;\n          flex-grow: 57; }\n\n.react-flex-v2--flex-grow-58 {\n  -webkit-box-flex: 58;\n  -webkit-flex-grow: 58;\n      -ms-flex-positive: 58;\n          flex-grow: 58; }\n\n.react-flex-v2--flex-grow-59 {\n  -webkit-box-flex: 59;\n  -webkit-flex-grow: 59;\n      -ms-flex-positive: 59;\n          flex-grow: 59; }\n\n.react-flex-v2--flex-grow-60 {\n  -webkit-box-flex: 60;\n  -webkit-flex-grow: 60;\n      -ms-flex-positive: 60;\n          flex-grow: 60; }\n\n.react-flex-v2--flex-grow-61 {\n  -webkit-box-flex: 61;\n  -webkit-flex-grow: 61;\n      -ms-flex-positive: 61;\n          flex-grow: 61; }\n\n.react-flex-v2--flex-grow-62 {\n  -webkit-box-flex: 62;\n  -webkit-flex-grow: 62;\n      -ms-flex-positive: 62;\n          flex-grow: 62; }\n\n.react-flex-v2--flex-grow-63 {\n  -webkit-box-flex: 63;\n  -webkit-flex-grow: 63;\n      -ms-flex-positive: 63;\n          flex-grow: 63; }\n\n.react-flex-v2--flex-grow-64 {\n  -webkit-box-flex: 64;\n  -webkit-flex-grow: 64;\n      -ms-flex-positive: 64;\n          flex-grow: 64; }\n\n.react-flex-v2--flex-grow-65 {\n  -webkit-box-flex: 65;\n  -webkit-flex-grow: 65;\n      -ms-flex-positive: 65;\n          flex-grow: 65; }\n\n.react-flex-v2--flex-grow-66 {\n  -webkit-box-flex: 66;\n  -webkit-flex-grow: 66;\n      -ms-flex-positive: 66;\n          flex-grow: 66; }\n\n.react-flex-v2--flex-grow-67 {\n  -webkit-box-flex: 67;\n  -webkit-flex-grow: 67;\n      -ms-flex-positive: 67;\n          flex-grow: 67; }\n\n.react-flex-v2--flex-grow-68 {\n  -webkit-box-flex: 68;\n  -webkit-flex-grow: 68;\n      -ms-flex-positive: 68;\n          flex-grow: 68; }\n\n.react-flex-v2--flex-grow-69 {\n  -webkit-box-flex: 69;\n  -webkit-flex-grow: 69;\n      -ms-flex-positive: 69;\n          flex-grow: 69; }\n\n.react-flex-v2--flex-grow-70 {\n  -webkit-box-flex: 70;\n  -webkit-flex-grow: 70;\n      -ms-flex-positive: 70;\n          flex-grow: 70; }\n\n.react-flex-v2--flex-grow-71 {\n  -webkit-box-flex: 71;\n  -webkit-flex-grow: 71;\n      -ms-flex-positive: 71;\n          flex-grow: 71; }\n\n.react-flex-v2--flex-grow-72 {\n  -webkit-box-flex: 72;\n  -webkit-flex-grow: 72;\n      -ms-flex-positive: 72;\n          flex-grow: 72; }\n\n.react-flex-v2--flex-grow-73 {\n  -webkit-box-flex: 73;\n  -webkit-flex-grow: 73;\n      -ms-flex-positive: 73;\n          flex-grow: 73; }\n\n.react-flex-v2--flex-grow-74 {\n  -webkit-box-flex: 74;\n  -webkit-flex-grow: 74;\n      -ms-flex-positive: 74;\n          flex-grow: 74; }\n\n.react-flex-v2--flex-grow-75 {\n  -webkit-box-flex: 75;\n  -webkit-flex-grow: 75;\n      -ms-flex-positive: 75;\n          flex-grow: 75; }\n\n.react-flex-v2--flex-grow-76 {\n  -webkit-box-flex: 76;\n  -webkit-flex-grow: 76;\n      -ms-flex-positive: 76;\n          flex-grow: 76; }\n\n.react-flex-v2--flex-grow-77 {\n  -webkit-box-flex: 77;\n  -webkit-flex-grow: 77;\n      -ms-flex-positive: 77;\n          flex-grow: 77; }\n\n.react-flex-v2--flex-grow-78 {\n  -webkit-box-flex: 78;\n  -webkit-flex-grow: 78;\n      -ms-flex-positive: 78;\n          flex-grow: 78; }\n\n.react-flex-v2--flex-grow-79 {\n  -webkit-box-flex: 79;\n  -webkit-flex-grow: 79;\n      -ms-flex-positive: 79;\n          flex-grow: 79; }\n\n.react-flex-v2--flex-grow-80 {\n  -webkit-box-flex: 80;\n  -webkit-flex-grow: 80;\n      -ms-flex-positive: 80;\n          flex-grow: 80; }\n\n.react-flex-v2--flex-grow-81 {\n  -webkit-box-flex: 81;\n  -webkit-flex-grow: 81;\n      -ms-flex-positive: 81;\n          flex-grow: 81; }\n\n.react-flex-v2--flex-grow-82 {\n  -webkit-box-flex: 82;\n  -webkit-flex-grow: 82;\n      -ms-flex-positive: 82;\n          flex-grow: 82; }\n\n.react-flex-v2--flex-grow-83 {\n  -webkit-box-flex: 83;\n  -webkit-flex-grow: 83;\n      -ms-flex-positive: 83;\n          flex-grow: 83; }\n\n.react-flex-v2--flex-grow-84 {\n  -webkit-box-flex: 84;\n  -webkit-flex-grow: 84;\n      -ms-flex-positive: 84;\n          flex-grow: 84; }\n\n.react-flex-v2--flex-grow-85 {\n  -webkit-box-flex: 85;\n  -webkit-flex-grow: 85;\n      -ms-flex-positive: 85;\n          flex-grow: 85; }\n\n.react-flex-v2--flex-grow-86 {\n  -webkit-box-flex: 86;\n  -webkit-flex-grow: 86;\n      -ms-flex-positive: 86;\n          flex-grow: 86; }\n\n.react-flex-v2--flex-grow-87 {\n  -webkit-box-flex: 87;\n  -webkit-flex-grow: 87;\n      -ms-flex-positive: 87;\n          flex-grow: 87; }\n\n.react-flex-v2--flex-grow-88 {\n  -webkit-box-flex: 88;\n  -webkit-flex-grow: 88;\n      -ms-flex-positive: 88;\n          flex-grow: 88; }\n\n.react-flex-v2--flex-grow-89 {\n  -webkit-box-flex: 89;\n  -webkit-flex-grow: 89;\n      -ms-flex-positive: 89;\n          flex-grow: 89; }\n\n.react-flex-v2--flex-grow-90 {\n  -webkit-box-flex: 90;\n  -webkit-flex-grow: 90;\n      -ms-flex-positive: 90;\n          flex-grow: 90; }\n\n.react-flex-v2--flex-grow-91 {\n  -webkit-box-flex: 91;\n  -webkit-flex-grow: 91;\n      -ms-flex-positive: 91;\n          flex-grow: 91; }\n\n.react-flex-v2--flex-grow-92 {\n  -webkit-box-flex: 92;\n  -webkit-flex-grow: 92;\n      -ms-flex-positive: 92;\n          flex-grow: 92; }\n\n.react-flex-v2--flex-grow-93 {\n  -webkit-box-flex: 93;\n  -webkit-flex-grow: 93;\n      -ms-flex-positive: 93;\n          flex-grow: 93; }\n\n.react-flex-v2--flex-grow-94 {\n  -webkit-box-flex: 94;\n  -webkit-flex-grow: 94;\n      -ms-flex-positive: 94;\n          flex-grow: 94; }\n\n.react-flex-v2--flex-grow-95 {\n  -webkit-box-flex: 95;\n  -webkit-flex-grow: 95;\n      -ms-flex-positive: 95;\n          flex-grow: 95; }\n\n.react-flex-v2--flex-grow-96 {\n  -webkit-box-flex: 96;\n  -webkit-flex-grow: 96;\n      -ms-flex-positive: 96;\n          flex-grow: 96; }\n\n.react-flex-v2--flex-grow-97 {\n  -webkit-box-flex: 97;\n  -webkit-flex-grow: 97;\n      -ms-flex-positive: 97;\n          flex-grow: 97; }\n\n.react-flex-v2--flex-grow-98 {\n  -webkit-box-flex: 98;\n  -webkit-flex-grow: 98;\n      -ms-flex-positive: 98;\n          flex-grow: 98; }\n\n.react-flex-v2--flex-grow-99 {\n  -webkit-box-flex: 99;\n  -webkit-flex-grow: 99;\n      -ms-flex-positive: 99;\n          flex-grow: 99; }\n\n.react-flex-v2--flex-grow-100 {\n  -webkit-box-flex: 100;\n  -webkit-flex-grow: 100;\n      -ms-flex-positive: 100;\n          flex-grow: 100; }\n\n/* FLEX-SHRINK */\n.react-flex-v2--flex-shrink-0 {\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0; }\n\n.react-flex-v2--flex-shrink-1 {\n  -webkit-flex-shrink: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1; }\n\n.react-flex-v2--flex-shrink-2 {\n  -webkit-flex-shrink: 2;\n      -ms-flex-negative: 2;\n          flex-shrink: 2; }\n\n.react-flex-v2--flex-shrink-3 {\n  -webkit-flex-shrink: 3;\n      -ms-flex-negative: 3;\n          flex-shrink: 3; }\n\n.react-flex-v2--flex-shrink-4 {\n  -webkit-flex-shrink: 4;\n      -ms-flex-negative: 4;\n          flex-shrink: 4; }\n\n.react-flex-v2--flex-shrink-5 {\n  -webkit-flex-shrink: 5;\n      -ms-flex-negative: 5;\n          flex-shrink: 5; }\n\n.react-flex-v2--flex-shrink-6 {\n  -webkit-flex-shrink: 6;\n      -ms-flex-negative: 6;\n          flex-shrink: 6; }\n\n.react-flex-v2--flex-shrink-7 {\n  -webkit-flex-shrink: 7;\n      -ms-flex-negative: 7;\n          flex-shrink: 7; }\n\n.react-flex-v2--flex-shrink-8 {\n  -webkit-flex-shrink: 8;\n      -ms-flex-negative: 8;\n          flex-shrink: 8; }\n\n.react-flex-v2--flex-shrink-9 {\n  -webkit-flex-shrink: 9;\n      -ms-flex-negative: 9;\n          flex-shrink: 9; }\n\n.react-flex-v2--flex-shrink-10 {\n  -webkit-flex-shrink: 10;\n      -ms-flex-negative: 10;\n          flex-shrink: 10; }\n\n.react-flex-v2--flex-shrink-11 {\n  -webkit-flex-shrink: 11;\n      -ms-flex-negative: 11;\n          flex-shrink: 11; }\n\n.react-flex-v2--flex-shrink-12 {\n  -webkit-flex-shrink: 12;\n      -ms-flex-negative: 12;\n          flex-shrink: 12; }\n\n.react-flex-v2--flex-shrink-13 {\n  -webkit-flex-shrink: 13;\n      -ms-flex-negative: 13;\n          flex-shrink: 13; }\n\n.react-flex-v2--flex-shrink-14 {\n  -webkit-flex-shrink: 14;\n      -ms-flex-negative: 14;\n          flex-shrink: 14; }\n\n.react-flex-v2--flex-shrink-15 {\n  -webkit-flex-shrink: 15;\n      -ms-flex-negative: 15;\n          flex-shrink: 15; }\n\n.react-flex-v2--flex-shrink-16 {\n  -webkit-flex-shrink: 16;\n      -ms-flex-negative: 16;\n          flex-shrink: 16; }\n\n.react-flex-v2--flex-shrink-17 {\n  -webkit-flex-shrink: 17;\n      -ms-flex-negative: 17;\n          flex-shrink: 17; }\n\n.react-flex-v2--flex-shrink-18 {\n  -webkit-flex-shrink: 18;\n      -ms-flex-negative: 18;\n          flex-shrink: 18; }\n\n.react-flex-v2--flex-shrink-19 {\n  -webkit-flex-shrink: 19;\n      -ms-flex-negative: 19;\n          flex-shrink: 19; }\n\n.react-flex-v2--flex-shrink-20 {\n  -webkit-flex-shrink: 20;\n      -ms-flex-negative: 20;\n          flex-shrink: 20; }\n\n.react-flex-v2--flex-shrink-21 {\n  -webkit-flex-shrink: 21;\n      -ms-flex-negative: 21;\n          flex-shrink: 21; }\n\n.react-flex-v2--flex-shrink-22 {\n  -webkit-flex-shrink: 22;\n      -ms-flex-negative: 22;\n          flex-shrink: 22; }\n\n.react-flex-v2--flex-shrink-23 {\n  -webkit-flex-shrink: 23;\n      -ms-flex-negative: 23;\n          flex-shrink: 23; }\n\n.react-flex-v2--flex-shrink-24 {\n  -webkit-flex-shrink: 24;\n      -ms-flex-negative: 24;\n          flex-shrink: 24; }\n\n.react-flex-v2--flex-shrink-25 {\n  -webkit-flex-shrink: 25;\n      -ms-flex-negative: 25;\n          flex-shrink: 25; }\n\n.react-flex-v2--flex-shrink-26 {\n  -webkit-flex-shrink: 26;\n      -ms-flex-negative: 26;\n          flex-shrink: 26; }\n\n.react-flex-v2--flex-shrink-27 {\n  -webkit-flex-shrink: 27;\n      -ms-flex-negative: 27;\n          flex-shrink: 27; }\n\n.react-flex-v2--flex-shrink-28 {\n  -webkit-flex-shrink: 28;\n      -ms-flex-negative: 28;\n          flex-shrink: 28; }\n\n.react-flex-v2--flex-shrink-29 {\n  -webkit-flex-shrink: 29;\n      -ms-flex-negative: 29;\n          flex-shrink: 29; }\n\n.react-flex-v2--flex-shrink-30 {\n  -webkit-flex-shrink: 30;\n      -ms-flex-negative: 30;\n          flex-shrink: 30; }\n\n.react-flex-v2--flex-shrink-31 {\n  -webkit-flex-shrink: 31;\n      -ms-flex-negative: 31;\n          flex-shrink: 31; }\n\n.react-flex-v2--flex-shrink-32 {\n  -webkit-flex-shrink: 32;\n      -ms-flex-negative: 32;\n          flex-shrink: 32; }\n\n.react-flex-v2--flex-shrink-33 {\n  -webkit-flex-shrink: 33;\n      -ms-flex-negative: 33;\n          flex-shrink: 33; }\n\n.react-flex-v2--flex-shrink-34 {\n  -webkit-flex-shrink: 34;\n      -ms-flex-negative: 34;\n          flex-shrink: 34; }\n\n.react-flex-v2--flex-shrink-35 {\n  -webkit-flex-shrink: 35;\n      -ms-flex-negative: 35;\n          flex-shrink: 35; }\n\n.react-flex-v2--flex-shrink-36 {\n  -webkit-flex-shrink: 36;\n      -ms-flex-negative: 36;\n          flex-shrink: 36; }\n\n.react-flex-v2--flex-shrink-37 {\n  -webkit-flex-shrink: 37;\n      -ms-flex-negative: 37;\n          flex-shrink: 37; }\n\n.react-flex-v2--flex-shrink-38 {\n  -webkit-flex-shrink: 38;\n      -ms-flex-negative: 38;\n          flex-shrink: 38; }\n\n.react-flex-v2--flex-shrink-39 {\n  -webkit-flex-shrink: 39;\n      -ms-flex-negative: 39;\n          flex-shrink: 39; }\n\n.react-flex-v2--flex-shrink-40 {\n  -webkit-flex-shrink: 40;\n      -ms-flex-negative: 40;\n          flex-shrink: 40; }\n\n.react-flex-v2--flex-shrink-41 {\n  -webkit-flex-shrink: 41;\n      -ms-flex-negative: 41;\n          flex-shrink: 41; }\n\n.react-flex-v2--flex-shrink-42 {\n  -webkit-flex-shrink: 42;\n      -ms-flex-negative: 42;\n          flex-shrink: 42; }\n\n.react-flex-v2--flex-shrink-43 {\n  -webkit-flex-shrink: 43;\n      -ms-flex-negative: 43;\n          flex-shrink: 43; }\n\n.react-flex-v2--flex-shrink-44 {\n  -webkit-flex-shrink: 44;\n      -ms-flex-negative: 44;\n          flex-shrink: 44; }\n\n.react-flex-v2--flex-shrink-45 {\n  -webkit-flex-shrink: 45;\n      -ms-flex-negative: 45;\n          flex-shrink: 45; }\n\n.react-flex-v2--flex-shrink-46 {\n  -webkit-flex-shrink: 46;\n      -ms-flex-negative: 46;\n          flex-shrink: 46; }\n\n.react-flex-v2--flex-shrink-47 {\n  -webkit-flex-shrink: 47;\n      -ms-flex-negative: 47;\n          flex-shrink: 47; }\n\n.react-flex-v2--flex-shrink-48 {\n  -webkit-flex-shrink: 48;\n      -ms-flex-negative: 48;\n          flex-shrink: 48; }\n\n.react-flex-v2--flex-shrink-49 {\n  -webkit-flex-shrink: 49;\n      -ms-flex-negative: 49;\n          flex-shrink: 49; }\n\n.react-flex-v2--flex-shrink-50 {\n  -webkit-flex-shrink: 50;\n      -ms-flex-negative: 50;\n          flex-shrink: 50; }\n\n.react-flex-v2--flex-shrink-51 {\n  -webkit-flex-shrink: 51;\n      -ms-flex-negative: 51;\n          flex-shrink: 51; }\n\n.react-flex-v2--flex-shrink-52 {\n  -webkit-flex-shrink: 52;\n      -ms-flex-negative: 52;\n          flex-shrink: 52; }\n\n.react-flex-v2--flex-shrink-53 {\n  -webkit-flex-shrink: 53;\n      -ms-flex-negative: 53;\n          flex-shrink: 53; }\n\n.react-flex-v2--flex-shrink-54 {\n  -webkit-flex-shrink: 54;\n      -ms-flex-negative: 54;\n          flex-shrink: 54; }\n\n.react-flex-v2--flex-shrink-55 {\n  -webkit-flex-shrink: 55;\n      -ms-flex-negative: 55;\n          flex-shrink: 55; }\n\n.react-flex-v2--flex-shrink-56 {\n  -webkit-flex-shrink: 56;\n      -ms-flex-negative: 56;\n          flex-shrink: 56; }\n\n.react-flex-v2--flex-shrink-57 {\n  -webkit-flex-shrink: 57;\n      -ms-flex-negative: 57;\n          flex-shrink: 57; }\n\n.react-flex-v2--flex-shrink-58 {\n  -webkit-flex-shrink: 58;\n      -ms-flex-negative: 58;\n          flex-shrink: 58; }\n\n.react-flex-v2--flex-shrink-59 {\n  -webkit-flex-shrink: 59;\n      -ms-flex-negative: 59;\n          flex-shrink: 59; }\n\n.react-flex-v2--flex-shrink-60 {\n  -webkit-flex-shrink: 60;\n      -ms-flex-negative: 60;\n          flex-shrink: 60; }\n\n.react-flex-v2--flex-shrink-61 {\n  -webkit-flex-shrink: 61;\n      -ms-flex-negative: 61;\n          flex-shrink: 61; }\n\n.react-flex-v2--flex-shrink-62 {\n  -webkit-flex-shrink: 62;\n      -ms-flex-negative: 62;\n          flex-shrink: 62; }\n\n.react-flex-v2--flex-shrink-63 {\n  -webkit-flex-shrink: 63;\n      -ms-flex-negative: 63;\n          flex-shrink: 63; }\n\n.react-flex-v2--flex-shrink-64 {\n  -webkit-flex-shrink: 64;\n      -ms-flex-negative: 64;\n          flex-shrink: 64; }\n\n.react-flex-v2--flex-shrink-65 {\n  -webkit-flex-shrink: 65;\n      -ms-flex-negative: 65;\n          flex-shrink: 65; }\n\n.react-flex-v2--flex-shrink-66 {\n  -webkit-flex-shrink: 66;\n      -ms-flex-negative: 66;\n          flex-shrink: 66; }\n\n.react-flex-v2--flex-shrink-67 {\n  -webkit-flex-shrink: 67;\n      -ms-flex-negative: 67;\n          flex-shrink: 67; }\n\n.react-flex-v2--flex-shrink-68 {\n  -webkit-flex-shrink: 68;\n      -ms-flex-negative: 68;\n          flex-shrink: 68; }\n\n.react-flex-v2--flex-shrink-69 {\n  -webkit-flex-shrink: 69;\n      -ms-flex-negative: 69;\n          flex-shrink: 69; }\n\n.react-flex-v2--flex-shrink-70 {\n  -webkit-flex-shrink: 70;\n      -ms-flex-negative: 70;\n          flex-shrink: 70; }\n\n.react-flex-v2--flex-shrink-71 {\n  -webkit-flex-shrink: 71;\n      -ms-flex-negative: 71;\n          flex-shrink: 71; }\n\n.react-flex-v2--flex-shrink-72 {\n  -webkit-flex-shrink: 72;\n      -ms-flex-negative: 72;\n          flex-shrink: 72; }\n\n.react-flex-v2--flex-shrink-73 {\n  -webkit-flex-shrink: 73;\n      -ms-flex-negative: 73;\n          flex-shrink: 73; }\n\n.react-flex-v2--flex-shrink-74 {\n  -webkit-flex-shrink: 74;\n      -ms-flex-negative: 74;\n          flex-shrink: 74; }\n\n.react-flex-v2--flex-shrink-75 {\n  -webkit-flex-shrink: 75;\n      -ms-flex-negative: 75;\n          flex-shrink: 75; }\n\n.react-flex-v2--flex-shrink-76 {\n  -webkit-flex-shrink: 76;\n      -ms-flex-negative: 76;\n          flex-shrink: 76; }\n\n.react-flex-v2--flex-shrink-77 {\n  -webkit-flex-shrink: 77;\n      -ms-flex-negative: 77;\n          flex-shrink: 77; }\n\n.react-flex-v2--flex-shrink-78 {\n  -webkit-flex-shrink: 78;\n      -ms-flex-negative: 78;\n          flex-shrink: 78; }\n\n.react-flex-v2--flex-shrink-79 {\n  -webkit-flex-shrink: 79;\n      -ms-flex-negative: 79;\n          flex-shrink: 79; }\n\n.react-flex-v2--flex-shrink-80 {\n  -webkit-flex-shrink: 80;\n      -ms-flex-negative: 80;\n          flex-shrink: 80; }\n\n.react-flex-v2--flex-shrink-81 {\n  -webkit-flex-shrink: 81;\n      -ms-flex-negative: 81;\n          flex-shrink: 81; }\n\n.react-flex-v2--flex-shrink-82 {\n  -webkit-flex-shrink: 82;\n      -ms-flex-negative: 82;\n          flex-shrink: 82; }\n\n.react-flex-v2--flex-shrink-83 {\n  -webkit-flex-shrink: 83;\n      -ms-flex-negative: 83;\n          flex-shrink: 83; }\n\n.react-flex-v2--flex-shrink-84 {\n  -webkit-flex-shrink: 84;\n      -ms-flex-negative: 84;\n          flex-shrink: 84; }\n\n.react-flex-v2--flex-shrink-85 {\n  -webkit-flex-shrink: 85;\n      -ms-flex-negative: 85;\n          flex-shrink: 85; }\n\n.react-flex-v2--flex-shrink-86 {\n  -webkit-flex-shrink: 86;\n      -ms-flex-negative: 86;\n          flex-shrink: 86; }\n\n.react-flex-v2--flex-shrink-87 {\n  -webkit-flex-shrink: 87;\n      -ms-flex-negative: 87;\n          flex-shrink: 87; }\n\n.react-flex-v2--flex-shrink-88 {\n  -webkit-flex-shrink: 88;\n      -ms-flex-negative: 88;\n          flex-shrink: 88; }\n\n.react-flex-v2--flex-shrink-89 {\n  -webkit-flex-shrink: 89;\n      -ms-flex-negative: 89;\n          flex-shrink: 89; }\n\n.react-flex-v2--flex-shrink-90 {\n  -webkit-flex-shrink: 90;\n      -ms-flex-negative: 90;\n          flex-shrink: 90; }\n\n.react-flex-v2--flex-shrink-91 {\n  -webkit-flex-shrink: 91;\n      -ms-flex-negative: 91;\n          flex-shrink: 91; }\n\n.react-flex-v2--flex-shrink-92 {\n  -webkit-flex-shrink: 92;\n      -ms-flex-negative: 92;\n          flex-shrink: 92; }\n\n.react-flex-v2--flex-shrink-93 {\n  -webkit-flex-shrink: 93;\n      -ms-flex-negative: 93;\n          flex-shrink: 93; }\n\n.react-flex-v2--flex-shrink-94 {\n  -webkit-flex-shrink: 94;\n      -ms-flex-negative: 94;\n          flex-shrink: 94; }\n\n.react-flex-v2--flex-shrink-95 {\n  -webkit-flex-shrink: 95;\n      -ms-flex-negative: 95;\n          flex-shrink: 95; }\n\n.react-flex-v2--flex-shrink-96 {\n  -webkit-flex-shrink: 96;\n      -ms-flex-negative: 96;\n          flex-shrink: 96; }\n\n.react-flex-v2--flex-shrink-97 {\n  -webkit-flex-shrink: 97;\n      -ms-flex-negative: 97;\n          flex-shrink: 97; }\n\n.react-flex-v2--flex-shrink-98 {\n  -webkit-flex-shrink: 98;\n      -ms-flex-negative: 98;\n          flex-shrink: 98; }\n\n.react-flex-v2--flex-shrink-99 {\n  -webkit-flex-shrink: 99;\n      -ms-flex-negative: 99;\n          flex-shrink: 99; }\n\n.react-flex-v2--flex-shrink-100 {\n  -webkit-flex-shrink: 100;\n      -ms-flex-negative: 100;\n          flex-shrink: 100; }\n.react-tab-panel,\n.react-tab-panel__tab-strip {\n  box-sizing: border-box; }\n  .react-tab-panel *,\n  .react-tab-panel *:before,\n  .react-tab-panel *:after,\n  .react-tab-panel__tab-strip *,\n  .react-tab-panel__tab-strip *:before,\n  .react-tab-panel__tab-strip *:after {\n    box-sizing: border-box; }\n\n.react-tab-panel {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 100%; }\n\n.react-tab-panel__body {\n  overflow: auto;\n  position: relative; }\n  .react-tab-panel__body .react-tab-panel__transition-wrapper {\n    position: relative;\n    -webkit-transition-property: height;\n    transition-property: height;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s; }\n  .react-tab-panel__body--transitioning,\n  .react-tab-panel__body--transitioning .react-tab-panel__transition-wrapper {\n    overflow: hidden; }\n  .react-tab-panel__body--transition .react-tab-panel__content--out {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s; }\n  .react-tab-panel__body--transition .react-tab-panel__content--in {\n    -webkit-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n    position: absolute;\n    width: 100%;\n    z-index: 100; }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-horizontal .react-tab-panel__content--in {\n    top: 0px; }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-horizontal.react-tab-panel__body--transition-next .react-tab-panel__content--in {\n    -webkit-transition-property: left;\n    transition-property: left;\n    left: 100%; }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-horizontal.react-tab-panel__body--transition-next.react-tab-panel__body--transitioning .react-tab-panel__content--out {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px); }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-horizontal.react-tab-panel__body--transition-next.react-tab-panel__body--transitioning .react-tab-panel__content--in {\n    left: 0px; }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-horizontal.react-tab-panel__body--transition-prev .react-tab-panel__content--in {\n    -webkit-transition-property: right;\n    transition-property: right;\n    right: 100%; }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-horizontal.react-tab-panel__body--transition-prev.react-tab-panel__body--transitioning .react-tab-panel__content--out {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px); }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-horizontal.react-tab-panel__body--transition-prev.react-tab-panel__body--transitioning .react-tab-panel__content--in {\n    right: 0px; }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-vertical .react-tab-panel__content--in {\n    left: 0px; }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-vertical.react-tab-panel__body--transition-next .react-tab-panel__content--in {\n    -webkit-transition-property: top;\n    transition-property: top;\n    top: 100%; }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-vertical.react-tab-panel__body--transition-next.react-tab-panel__body--transitioning .react-tab-panel__content--out {\n    -webkit-transform: translate3d(0px, -100%, 0px);\n            transform: translate3d(0px, -100%, 0px); }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-vertical.react-tab-panel__body--transition-next.react-tab-panel__body--transitioning .react-tab-panel__content--in {\n    top: 0px; }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-vertical.react-tab-panel__body--transition-prev .react-tab-panel__content--in {\n    -webkit-transition-property: bottom;\n    transition-property: bottom;\n    bottom: 100%; }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-vertical.react-tab-panel__body--transition-prev.react-tab-panel__body--transitioning .react-tab-panel__content--out {\n    -webkit-transform: translate3d(0px, 100%, 0px);\n            transform: translate3d(0px, 100%, 0px); }\n  .react-tab-panel__body--transition.react-tab-panel__body--orientation-vertical.react-tab-panel__body--transition-prev.react-tab-panel__body--transitioning .react-tab-panel__content--in {\n    bottom: 0px; }\n\n.react-tab-panel__tab-strip {\n  position: relative;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  overflow: hidden; }\n  .react-tab-panel__tab-strip:focus {\n    outline: none; }\n\n.react-tab-panel__tab-strip-scroll-wrap {\n  overflow: hidden;\n  position: relative; }\n\n.react-tab-panel__tab-strip-scroll-tool {\n  padding: 0px 6px; }\n  .react-tab-panel__tab-strip-scroll-tool--auto {\n    position: absolute;\n    z-index: 100; }\n  .react-tab-panel__tab-strip-scroll-tool.react-tab-panel__tab-strip-scroll-tool--direction-left, .react-tab-panel__tab-strip-scroll-tool.react-tab-panel__tab-strip-scroll-tool--direction-right {\n    top: 0px;\n    bottom: 0px; }\n  .react-tab-panel__tab-strip-scroll-tool.react-tab-panel__tab-strip-scroll-tool--direction-up, .react-tab-panel__tab-strip-scroll-tool.react-tab-panel__tab-strip-scroll-tool--direction-down {\n    left: 0px;\n    right: 0px; }\n  .react-tab-panel__tab-strip-scroll-tool--direction-left {\n    left: 0px;\n    z-index: 200; }\n  .react-tab-panel__tab-strip-scroll-tool--direction-right {\n    right: 0px; }\n  .react-tab-panel__tab-strip-scroll-tool--direction-up {\n    top: 0px;\n    z-index: 200; }\n  .react-tab-panel__tab-strip-scroll-tool--direction-down {\n    bottom: 0px; }\n  .react-tab-panel__tab-strip-scroll-tool--disabled {\n    opacity: 0.5; }\n  .react-tab-panel__tab-strip-scroll-tool--hidden {\n    display: none; }\n\n.react-tab-panel__tab-strip-inner {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  position: relative; }\n\n.react-tab-panel__tab-strip--tab-align-start .react-tab-panel__tab-strip-between,\n.react-tab-panel__tab-strip--tab-align-start .react-tab-panel__tab-strip-before {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none; }\n\n.react-tab-panel__tab-strip--tab-align-center .react-tab-panel__tab-strip-between {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none; }\n\n.react-tab-panel__tab-strip--tab-align-end .react-tab-panel__tab-strip-between,\n.react-tab-panel__tab-strip--tab-align-end .react-tab-panel__tab-strip-after {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none; }\n\n.react-tab-panel__tab-strip--tab-align-space-between .react-tab-panel__tab-strip-before,\n.react-tab-panel__tab-strip--tab-align-space-between .react-tab-panel__tab-strip-after {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none; }\n\n.react-tab-panel__tab-strip--tab-align-stretch .react-tab-panel__tab-strip-before,\n.react-tab-panel__tab-strip--tab-align-stretch .react-tab-panel__tab-strip-after {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.react-tab-panel__tab-strip--tab-align-stretch .react-tab-panel__tab-strip-between {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none; }\n\n.react-tab-panel__tab-strip--tab-align-stretch .react-tab-panel__tab-title,\n.react-tab-panel__tab-strip--tab-align-stretch .react-tab-panel__tab-title-inner {\n  -webkit-box-flex: 1000;\n      -ms-flex: 1000 0 auto;\n          flex: 1000 0 auto;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-flow: column;\n      flex-flow: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.react-tab-panel__tab-strip--tab-align-stretch .react-tab-panel__tab-title--active {\n  -webkit-box-flex: 1001;\n      -ms-flex: 1001 0 auto;\n          flex: 1001 0 auto; }\n\n.react-tab-panel__tab-title {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  white-space: nowrap; }\n  .react-tab-panel__tab-title-inner--ellipsis, .react-tab-panel__tab-title--ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .react-tab-panel__tab-title--disabled {\n    cursor: default;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.react-tab-panel__tab-strip--vertical .react-tab-panel__tab-title-inner {\n  display: inline-block;\n  position: absolute;\n  z-index: 1;\n  top: 100%;\n  left: 0px; }\n\n.react-tab-panel__tab-strip--vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner {\n  top: 100%;\n  left: 0px;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: translate(0%, 0%) rotate(-90deg);\n          transform: translate(0%, 0%) rotate(-90deg); }\n\n.react-tab-panel__tab-strip--vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner {\n  left: 100%;\n  top: 0px;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: translate(0%, 0%) rotate(90deg);\n          transform: translate(0%, 0%) rotate(90deg); }\n\n.react-tab-panel__tab-strip--vertical .react-tab-panel__tab-title-inner--hidden {\n  -webkit-transform: none !important;\n          transform: none !important;\n  position: absolute !important;\n  top: auto !important;\n  left: auto !important; }\n\n.react-tab-panel__tab-title-close-icon {\n  display: inline-block; }\n  .react-tab-panel__tab-title-close-icon-svg {\n    vertical-align: middle; }\n\n.react-tab-panel--theme-default .react-tab-panel__body {\n  padding: 5px 10px; }\n\n.react-tab-panel--theme-default .react-tab-panel__tab-title-close-icon {\n  position: relative; }\n  .react-tab-panel--theme-default .react-tab-panel__tab-title-close-icon:hover {\n    opacity: 0.7; }\n\n.react-tab-panel--theme-default .react-tab-panel__tab-title-close-icon-svg {\n  vertical-align: middle; }\n\n.react-tab-panel--theme-default .react-tab-panel__body--tab-position-top {\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  border-bottom: 1px solid #ddd; }\n\n.react-tab-panel--theme-default .react-tab-panel__body--tab-position-bottom {\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  border-top: 1px solid #ddd; }\n\n.react-tab-panel--theme-default .react-tab-panel__body--tab-position-left {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  border-right: 1px solid #ddd; }\n\n.react-tab-panel--theme-default .react-tab-panel__body--tab-position-right {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  border-left: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-align-stretch .react-tab-panel__tab-strip-before,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-align-stretch .react-tab-panel__tab-strip-after {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none; }\n\n.react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool {\n  background: white;\n  fill: #ddd;\n  padding: 0px;\n  cursor: pointer; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool--auto.react-tab-panel__tab-strip-scroll-tool--tab-position-top {\n    bottom: 1px; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool--auto.react-tab-panel__tab-strip-scroll-tool--tab-position-bottom {\n    top: 1px; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool--auto.react-tab-panel__tab-strip-scroll-tool--tab-position-left {\n    right: 1px; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool--auto.react-tab-panel__tab-strip-scroll-tool--tab-position-right {\n    left: 1px; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool--on.react-tab-panel__tab-strip-scroll-tool--tab-position-top {\n    border-bottom: 1px solid #ddd; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool--on.react-tab-panel__tab-strip-scroll-tool--tab-position-bottom {\n    border-top: 1px solid #ddd; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool--on.react-tab-panel__tab-strip-scroll-tool--tab-position-left {\n    border-right: 1px solid #ddd; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool--on.react-tab-panel__tab-strip-scroll-tool--tab-position-right {\n    border-left: 1px solid #ddd; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool--disabled {\n    cursor: inherit;\n    opacity: inherit; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool:not(.react-tab-panel__tab-strip-scroll-tool--hidden) {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -ms-flex-flow: row;\n        flex-flow: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-strip-scroll-tool:hover:not(.react-tab-panel__tab-strip-scroll-tool--disabled) {\n    fill: #4d7496;\n    background: #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-strip-scroll-tool--disabled svg {\n  opacity: 0.5; }\n\n.react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-title-inner {\n  padding: 5px 10px;\n  text-align: center; }\n\n.react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-title:not(.react-tab-panel__tab-title--active) {\n  color: #4d7496;\n  fill: #4d7496; }\n\n.react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active) {\n  background: #f9f9f9; }\n\n.react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-title--focused {\n  outline: none; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top.react-tab-panel__tab-strip--orientation-horizontal .react-tab-panel__tab-title-close-icon, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom.react-tab-panel__tab-strip--orientation-horizontal .react-tab-panel__tab-title-close-icon {\n  margin-left: 10px;\n  float: right; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top.react-tab-panel__tab-strip--orientation-horizontal .react-tab-panel__tab-title-close-icon-svg, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom.react-tab-panel__tab-strip--orientation-horizontal .react-tab-panel__tab-title-close-icon-svg {\n  vertical-align: middle; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top.react-tab-panel__tab-strip--orientation-horizontal .react-tab-panel__tab-strip-between, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom.react-tab-panel__tab-strip--orientation-horizontal .react-tab-panel__tab-strip-between {\n  width: 2px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title-inner:after, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title-inner:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  bottom: 0px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title-inner:before {\n  left: 0px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title-inner:after, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title-inner:after {\n  right: 0px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title-inner--active:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title-inner--active:before {\n  border-left: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title-inner--active:after, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title-inner--active:after {\n  border-right: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active) .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active) .react-tab-panel__tab-title-inner:before {\n  border-left: 1px solid #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active) .react-tab-panel__tab-title-inner:after, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active) .react-tab-panel__tab-title-inner:after {\n  border-right: 1px solid #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-close-icon {\n  margin-right: 10px;\n  float: left; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-close-icon {\n  margin-left: 10px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-close-icon {\n  margin-left: 10px;\n  float: right; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-close-icon {\n  margin-left: 10px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-strip-between, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-strip-between {\n  height: 2px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner:after, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner:after {\n  content: '';\n  position: absolute;\n  left: 0px;\n  right: 0px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner:before {\n  top: 0px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner:after, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner:after {\n  bottom: 0px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner--active:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner--active:before {\n  border-top: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner--active:after, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner--active:after {\n  border-bottom: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:before {\n  border-top: 1px solid #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:after, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:after {\n  border-bottom: 1px solid #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-strip-between, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-strip-between {\n  height: 2px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:before {\n  border-left: 1px solid #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:after, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:after {\n  border-right: 1px solid #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__body {\n  border-top: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-strip-before,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-strip-after,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-strip-between,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title:not(.react-tab-panel__tab-title--active) {\n  border-bottom: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) {\n  margin-top: 2px;\n  border-top: 1px solid #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title-inner--active {\n  border-bottom: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title {\n  border-top: 3px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-top .react-tab-panel__tab-title--active {\n  border-top: 3px solid #4d7496; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__body {\n  border-bottom: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-strip-before,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-strip-after,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-strip-between,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title:not(.react-tab-panel__tab-title--active) {\n  border-top: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) {\n  margin-bottom: 2px;\n  border-bottom: 1px solid #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title-inner--active {\n  border-top: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title {\n  border-bottom: 3px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--tab-position-bottom .react-tab-panel__tab-title--active {\n  border-bottom: 3px solid #4d7496; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner {\n  padding: 8px 10px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__body {\n  border-left: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-strip-before,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-strip-after,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-strip-between,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner {\n  border-right: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) {\n  margin-left: 2px;\n  border-left: 1px solid #eee; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:after {\n    right: 1px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner--active {\n  border-right: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title {\n  border-left: 3px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title--active {\n  border-left: 3px solid #4d7496; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__body {\n  border-right: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-strip-before,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-strip-after,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-strip-between,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner {\n  border-left: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) {\n  margin-right: 2px;\n  border-right: 1px solid #eee; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner:after {\n    left: 1px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner--active {\n  border-left: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title {\n  border-right: 3px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-horizontal.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title--active {\n  border-right: 3px solid #4d7496; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner {\n  padding: 8px 10px; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical .react-tab-panel__tab-title-inner:before, .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical .react-tab-panel__tab-title-inner:after {\n  display: none; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical .react-tab-panel__tab-title:before {\n  content: '';\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 100;\n  position: absolute; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical .react-tab-panel__tab-title:after {\n  content: '';\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 100;\n  position: absolute; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-strip-before,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-strip-after,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-strip-between {\n  border-right: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title {\n  border-left: 3px solid transparent;\n  border-right: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner {\n  border-top: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active) {\n  background: #f9f9f9 padding-box; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):before {\n    border-top: 1px solid #eee; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):after {\n    border-bottom: 1px solid #eee; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active) .react-tab-panel__tab-title-inner {\n    border-top: 1px solid #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title-inner--active {\n  border-bottom: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title--active {\n  border-left: 3px solid #4d7496;\n  border-right: none; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title--active:before {\n    border-top: 1px solid #ddd; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-left .react-tab-panel__tab-title--active:after {\n    border-bottom: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-strip-before,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-strip-after,\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-strip-between {\n  border-left: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title {\n  border-right: 3px solid transparent;\n  border-left: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner {\n  border-top: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) {\n  background: #f9f9f9 padding-box; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled):before {\n    border-top: 1px solid #eee; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled):after {\n    border-bottom: 1px solid #eee; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title:hover:not(.react-tab-panel__tab-title--active):not(.react-tab-panel__tab-title--disabled) .react-tab-panel__tab-title-inner {\n    border-top: 1px solid #eee; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title-inner--active {\n  border-bottom: 1px solid transparent; }\n\n.react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title--active {\n  border-right: 3px solid #4d7496;\n  border-left: none; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title--active:before {\n    border-top: 1px solid #ddd; }\n  .react-tab-panel__tab-strip--theme-default.react-tab-panel__tab-strip--orientation-vertical.react-tab-panel__tab-strip--tab-position-right .react-tab-panel__tab-title--active:after {\n    border-bottom: 1px solid #ddd; }\n\n.react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-title--disabled.react-tab-panel__tab-title--disabled, .react-tab-panel__tab-strip--theme-default .react-tab-panel__tab-title--disabled.react-tab-panel__tab-title--disabled:hover {\n  background: #eaeaea content-box;\n  color: grey; }\n", ""]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {
	"title": "UBC Insight",
	"course": "Courses Explorer: "
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(3);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _images = __webpack_require__(35);

var _lib = __webpack_require__(19);

var _Querybuilder = __webpack_require__(31);

var _Rqb = __webpack_require__(32);

var _reactTabPanel = __webpack_require__(30);

var _reactTabPanel2 = _interopRequireDefault(_reactTabPanel);

var _tab = __webpack_require__(34);

var _tab2 = _interopRequireDefault(_tab);

var _queryStyle = __webpack_require__(33);

var _queryStyle2 = _interopRequireDefault(_queryStyle);

var _reactFormzilla = __webpack_require__(29);

var _reactFormzilla2 = _interopRequireDefault(_reactFormzilla);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var render = ReactDOM.render;


render(React.createElement(
    "div",
    null,
    _images.title_image
), document.getElementById("react-container"));

//render(<Query fields={fields} combinators={combinators} operators={operators}/>, document.querySelector('.container'));


var onSubmit = function onSubmit(data, buttonValue, errors) {
    if (buttonValue == "Submit") {
        var query = {};
        if (Object.keys(errors).length != 0) {
            alert('Errors: ' + JSON.stringify(errors));
        } else {
            var queryWhere = data.WHERE;
            var filter, second;
            if (queryWhere.WHERE == "Empty") {
                queryWhere = {};
            } else {
                var wKeys = Object.keys(queryWhere);
                queryWhere = queryWhere[wKeys[1]];
                if (Array.isArray(queryWhere)) {
                    var fistItem = queryWhere[0];
                    var filters = Object.keys(fistItem);
                    var len = filters.length;
                    filter = filters[0];
                    var arr = new Array();
                    for (var i = 0; i < len; i++) {
                        var obj = queryWhere[i];
                        var objKeys = Object.keys(obj);
                        var tempFilter = objKeys[1];
                        var val = obj[tempFilter];
                        var valKeys = Object.keys(val);
                        var filterKey = valKeys[1];
                        var filterVal = val[filterKey];
                        var filterObj = _defineProperty({}, filterKey, filterVal);
                        var realFilter = _defineProperty({}, tempFilter, filterObj);
                        arr.push(realFilter);
                    }
                    queryWhere = _defineProperty({}, filter, arr);
                    alert(JSON.stringify(queryWhere));
                } else {
                    var _filters = Object.keys(queryWhere);
                    filter = _filters[0];
                    second = _defineProperty({}, _filters[1], queryWhere[_filters[1]]);
                    queryWhere = _defineProperty({}, filter, second);
                }
            }
            Object.assign(query, { "WHERE": queryWhere });
            alert('Data  : ' + JSON.stringify(query));
        }
    }

    // alert('Data  : ' + JSON.stringify(data) + '\n' +
    //     'Button: ' + buttonValue + '\n' +
    //     'Errors: ' + JSON.stringify(errors));
};

render(React.createElement(
    _reactTabPanel2.default,
    {
        tabAlign: "center"
        //try "stretch", "space-between", "start", "end"
    },
    React.createElement(
        "div",
        { tabTitle: "Courses Explorer" },
        React.createElement(_reactFormzilla2.default, { schema: _Querybuilder.schema,
            onSubmit: onSubmit })
    ),
    React.createElement(
        "div",
        { tabTitle: "Rooms Explorer" },
        React.createElement(_reactFormzilla2.default, { schema: _Rqb.room_schema,
            onSubmit: onSubmit })
    )
), document.getElementById("query"));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map