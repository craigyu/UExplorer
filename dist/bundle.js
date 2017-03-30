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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getValue = "";

var QueryForm = function (_React$Component) {
    _inherits(QueryForm, _React$Component);

    function QueryForm(props) {
        _classCallCheck(this, QueryForm);

        var _this = _possibleConstructorReturn(this, (QueryForm.__proto__ || Object.getPrototypeOf(QueryForm)).call(this, props));

        _this.state = {
            value: "empty",
            toRender: ["AND"]
        };

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(QueryForm, [{
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({ value: e.target.value });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            this.setState({ toRender: this.state.toRender.concat([this.state.value]) });
            e.preventDefault();
        }
    }, {
        key: "handleRender",
        value: function handleRender(render) {
            if (render == "empty") {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "label",
                        null,
                        "Pick Next Filter:"
                    ),
                    React.createElement(
                        "select",
                        { value: this.state.value, onChange: this.handleChange },
                        React.createElement(
                            "option",
                            { value: "IS" },
                            "IS"
                        ),
                        React.createElement(
                            "option",
                            { value: "GT" },
                            "GT "
                        )
                    )
                );
            }
            if (render == "AND") {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "label",
                        null,
                        "Pick Root Filter:",
                        React.createElement(
                            "select",
                            { value: this.state.value, onChange: this.handleChange },
                            React.createElement("option", null),
                            React.createElement(
                                "option",
                                { value: "empty" },
                                "NONE"
                            ),
                            React.createElement(
                                "option",
                                { value: "AND" },
                                "AND"
                            ),
                            React.createElement(
                                "option",
                                { value: "OR" },
                                "OR"
                            )
                        )
                    ),
                    React.createElement("input", { type: "submit", value: "Submit" })
                );
            }

            if (render == "IS") {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "label",
                        null,
                        "Pick String Filter",
                        React.createElement(
                            "select",
                            { value: this.state.value, onChange: this.handleChange },
                            React.createElement("option", { value: "" }),
                            React.createElement(
                                "option",
                                { value: "dept" },
                                "DEPT"
                            )
                        )
                    )
                );
            }

            if (render == "dept") {
                return React.createElement(
                    "h1",
                    null,
                    "DONE"
                );
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var toRender = this.state.toRender.map(function (render) {
                return React.createElement(
                    "form",
                    { onSubmit: _this2.handleSubmit },
                    _this2.handleRender(render)
                );
            });
            return React.createElement(
                "div",
                null,
                toRender
            );
        }
    }]);

    return QueryForm;
}(React.Component);

function getV() {
    return getValue;
}

var AndForm = function (_React$Component2) {
    _inherits(AndForm, _React$Component2);

    function AndForm(props) {
        _classCallCheck(this, AndForm);

        var _this3 = _possibleConstructorReturn(this, (AndForm.__proto__ || Object.getPrototypeOf(AndForm)).call(this, props));

        _this3.state = { value: "AND" };

        _this3.handleChange = _this3.handleChange.bind(_this3);
        return _this3;
    }

    _createClass(AndForm, [{
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({ value: e.target.value });
            getValue = this.state.value;
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            getValue = this.state.value;
            alert(this.state.value);
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "label",
                    null,
                    "Pick Root Filter:",
                    React.createElement(
                        "select",
                        { value: this.state.value, onChange: this.handleChange },
                        React.createElement("option", null),
                        React.createElement(
                            "option",
                            { value: "empty" },
                            "NONE"
                        ),
                        React.createElement(
                            "option",
                            { value: "AND" },
                            "AND"
                        ),
                        React.createElement(
                            "option",
                            { value: "OR" },
                            "OR"
                        )
                    )
                ),
                React.createElement("input", { type: "submit", value: "Submit" })
            );
        }
    }]);

    return AndForm;
}(React.Component);

var IsForm = function (_React$Component3) {
    _inherits(IsForm, _React$Component3);

    function IsForm(props) {
        _classCallCheck(this, IsForm);

        var _this4 = _possibleConstructorReturn(this, (IsForm.__proto__ || Object.getPrototypeOf(IsForm)).call(this, props));

        _this4.state = { value: "IS" };

        _this4.handleChange = _this4.handleChange.bind(_this4);
        return _this4;
    }

    _createClass(IsForm, [{
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({ value: e.target.value });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            getValue = this.state.value;
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "label",
                    null,
                    "Pick String Filter",
                    React.createElement(
                        "select",
                        { value: this.state.value, onChange: this.handleChange },
                        React.createElement("option", { value: "" }),
                        React.createElement(
                            "option",
                            { value: "dept" },
                            "DEPT"
                        )
                    ),
                    React.createElement("input", { type: "submit", value: "Submit" })
                )
            );
        }
    }]);

    return IsForm;
}(React.Component);

var Hello = function (_React$Component4) {
    _inherits(Hello, _React$Component4);

    function Hello(props) {
        _classCallCheck(this, Hello);

        var _this5 = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this, props));

        _this5.state = {
            value: "AND",
            isRendered: ["AND"]
        };
        _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
        return _this5;
    }

    _createClass(Hello, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
            this.setState({ isRendered: this.state.isRendered.concat([getV()]) });
            e.preventDefault();
        }
    }, {
        key: "handleRender",
        value: function handleRender(render) {
            this.state.value = render;
            if (render == "AND") {
                return React.createElement(AndForm, null);
            }

            if (render == "IS") {
                return React.createElement(IsForm, null);
            }

            if (render == "dept") {
                return React.createElement(
                    "h1",
                    null,
                    "DONE"
                );
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            var toRender = this.state.isRendered.map(function (render) {
                return React.createElement(
                    "form",
                    { onSubmit: _this6.handleSubmit },
                    _this6.handleRender(render)
                );
            });
            return React.createElement(
                "div",
                null,
                toRender
            );
        }
    }]);

    return Hello;
}(React.Component);

ReactDOM.render(React.createElement(Hello, null), document.getElementById('root'));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map