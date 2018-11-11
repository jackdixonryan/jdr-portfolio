webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Orbitals.js":
/*!********************************!*\
  !*** ./components/Orbitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Orbitals; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Archive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Archive */ "./components/Archive.js");
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skills */ "./components/Skills.js");
var _jsxFileName = "/Users/johnryan/Dropbox/code/Interrim/portfolio/components/Orbitals.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Space = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Orbitals__Space",
  componentId: "lmvnhi-0"
})(["background:white;height:550px;padding-top:100px;"]);
var MainOrbit = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Orbitals__MainOrbit",
  componentId: "lmvnhi-1"
})(["border-radius:50%;width:300px;height:300px;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(5,1fr);grid-template-areas:\". north-planet . . .\" \". . . . .\" \". . sun . east-planet\" \"west-planet . . . .\" \". . . . south-planet\";margin:0 auto;justify-items:center;align-items:center;@keyframes rotate{0%{transform:rotate(0deg)}50%{transform:rotate(179deg)}100%{transform:rotate(359deg)}}animation-name:rotate;animation-duration:120s;animation-iteration-count:infinite;"]);
var Sun = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Orbitals__Sun",
  componentId: "lmvnhi-2"
})(["background-image:radial-gradient(yellow,orange,red);border-radius:50%;grid-area:sun;height:5em;width:5em;"]);
var NorthPlanet = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Orbitals__NorthPlanet",
  componentId: "lmvnhi-3"
})(["border-radius:50%;grid-area:north-planet;height:3em;width:3em;position:relative;bottom:45px;cursor:pointer;background-image:url(\"../static/images/planet.png\");background-position:center;background-size:cover;background-repeat:no-repeat;@keyframes counter-rotate{0%{transform:rotate(0deg);}50%{transform:rotate(-179deg);}100%{transform:rotate(-359deg);}}animation-name:counter-rotate;animation-duration:120s;animation-iteration-count:infinite;"]);
var EastPlanet = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Orbitals__EastPlanet",
  componentId: "lmvnhi-4"
})(["border-radius:50%;grid-area:east-planet;height:3em;width:3em;position:relative;left:45px;cursor:pointer;background-image:url(\"../static/images/earth.png\");background-position:center;background-size:cover;background-repeat:no-repeat;@keyframes counter-rotate{0%{transform:rotate(0deg);}50%{transform:rotate(-179deg);}100%{transform:rotate(-359deg);}}animation-name:counter-rotate;animation-duration:120s;animation-iteration-count:infinite;"]);
var SouthPlanet = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Orbitals__SouthPlanet",
  componentId: "lmvnhi-5"
})(["border-radius:50%;grid-area:south-planet;height:3em;width:3em;position:relative;top:45px;cursor:pointer;background-image:url(\"../static/images/mars.png\");background-size:cover;background-repeat:no-repeat;@keyframes counter-rotate{0%{transform:rotate(0deg);}50%{transform:rotate(-179deg);}100%{transform:rotate(-359deg);}}animation-name:counter-rotate;animation-duration:120s;animation-iteration-count:infinite;"]);
var WestPlanet = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Orbitals__WestPlanet",
  componentId: "lmvnhi-6"
})(["border-radius:50%;grid-area:west-planet;height:3em;width:3em;position:relative;right:45px;cursor:pointer;background-image:url(\"../static/images/jupiter.png\");background-size:cover;background-repeat:no-repeat;@keyframes counter-rotate{0%{transform:rotate(0deg);}50%{transform:rotate(-179deg);}100%{transform:rotate(-359deg);}}animation-name:counter-rotate;animation-duration:120s;animation-iteration-count:infinite;"]); // const Icon = styled.i`
//   @keyframes counter-rotate {
//     0% {transform: rotate(0deg)}
//     50% {transform: rotate(-179deg)}
//     100% {transform: rotate(-359deg)}
//   }
//   animation-name: counter-rotate;
//   animation-duration: 120s;
//   animation-iteration-count: infinite;
// `;

var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Orbitals__Content",
  componentId: "lmvnhi-7"
})([".inner{background:linear-gradient(45deg,#32a6ff 0%,#3f6fff 49%,)}.outer{}"]);

var Orbitals =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Orbitals, _React$Component);

  function Orbitals() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Orbitals);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Orbitals)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      mount: 'skills'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleIconClick", function (val) {
      _this.setState({
        mount: val
      });
    });

    return _this;
  }

  _createClass(Orbitals, [{
    key: "render",
    value: function render() {
      var component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      });

      if (this.state.mount === "archive") {
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Archive__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        });
      } else if (this.state.mount === "skills") {
        component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Skills__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Space, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainOrbit, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sun, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NorthPlanet, {
        className: "tooltipped",
        "data-position": "top",
        "data-tooltip": "About Me",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EastPlanet, {
        className: "tooltipped",
        "data-position": "top",
        "data-tooltip": "Projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SouthPlanet, {
        className: "tooltipped",
        "data-position": "top",
        "data-tooltip": "Skills",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WestPlanet, {
        className: "tooltipped",
        "data-position": "top",
        "data-tooltip": "Contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, component))));
    }
  }]);

  return Orbitals;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=about.js.12238cbede0c966c09b9.hot-update.js.map