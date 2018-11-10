webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/johnryan/Dropbox/code/Interrim/portfolio/components/Project.js";


var ProjectWindow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Project__ProjectWindow",
  componentId: "sc-116i4z5-0"
})(["flex:1 0 46.5%;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:3fr 3fr 1fr;grid-template-areas:\"top top top\" \"content content content\" \"footer footer footer\";border:1px whitesmoke solid;border-radius:15px;margin:10px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Project__Content",
  componentId: "sc-116i4z5-1"
})(["height:80px;overflow:scroll;grid-area:content;display:grid;grid-template-columns:1fr;grid-template-rows:40px 40px;grid-template-areas:\"title\" \"description\";justify-items:center;@media screen and (min-width:400px){height:210px;}"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Project__Image",
  componentId: "sc-116i4z5-2"
})(["grid-area:top;width:100%;border-radius:15px 15px 0px 0px;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Project__Description",
  componentId: "sc-116i4z5-3"
})(["grid-area:description;padding:5px;text-align:center;"]);
var DisplayText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "Project__DisplayText",
  componentId: "sc-116i4z5-4"
})(["grid-area:title;"]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].footer.withConfig({
  displayName: "Project__Footer",
  componentId: "sc-116i4z5-5"
})(["grid-area:footer;background-color:orange;border-radius:0px 0px 15px 15px;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-template-areas:\". github . view .\";align-items:center;justify-items:center;"]);
var Github = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].i.withConfig({
  displayName: "Project__Github",
  componentId: "sc-116i4z5-6"
})(["color:white;grid-area:github;font-size:2em;"]);
var View = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].i.withConfig({
  displayName: "Project__View",
  componentId: "sc-116i4z5-7"
})(["color:white;grid-area:view;font-size:1.5em;"]);
function Project(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectWindow, {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, props.image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: props.image,
    alt: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DisplayText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, props.content)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Github, {
    className: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(View, {
    className: "fas fa-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=about.js.57955bcc7c0ea863c8ac.hot-update.js.map