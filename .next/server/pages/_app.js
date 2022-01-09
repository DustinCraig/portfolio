"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.js\");\n\n\nfunction App({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            __source: {\n                fileName: \"/Users/dustincraig/Projects/portfolio/src/pages/_app.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/dustincraig/Projects/portfolio/src/pages/_app.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                },\n                __self: this\n            })\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtQztBQUVwQixRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JELE1BQU07dUZBRURILHFEQUFLOzs7Ozs7OzJGQUNIRSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBSWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRoZW1lPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiVGhlbWUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/styles.js":
/*!******************************!*\
  !*** ./src/styles/styles.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ \"styled-normalize\");\n/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n${styled_normalize__WEBPACK_IMPORTED_MODULE_1__.normalize};\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 63%;\n  scroll-behavior: smooth;\n}\n\nbody {\n  cursor: default;\n  font-size: 1.6rem;\n  font-family: ${(props)=>props.theme.fonts.main\n};\n  background: ${(props)=>props.theme.colors.background\n};\n  color: ${(props)=>props.theme.colors.primary\n};\n}\n\nh1,h2,h3,h4,h5,h6,button {\n  font-family: ${(props)=>props.theme.fonts.title\n};\n}\n\na {\n  text-decoration: none;\n  color: ${(props)=>props.theme.colors.link\n};\n}\n\nli {\n  list-style: none;\n}\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3N0eWxlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxRDtBQUNUO0FBRTVDLGlFQUFlQSxnRUFBaUIsQ0FBQztDQWlCa0I7O0NBRUY7Q0FJRztDQUtOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy9zdHlsZXMuanM/YzNjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAnc3R5bGVkLW5vcm1hbGl6ZSdcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXG4ke25vcm1hbGl6ZX07XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYzJTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLm1haW59O1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbn1cblxuaDEsaDIsaDMsaDQsaDUsaDYsYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy50aXRsZX07XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpbmt9O1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5gXG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJub3JtYWxpemUiLCJwcm9wcyIsInRoZW1lIiwiZm9udHMiLCJtYWluIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJ0aXRsZSIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/styles.js\n");

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/styles/styles.js\");\n/* harmony import */ var _themes_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/default */ \"./src/themes/default.js\");\n\n\n\n\nconst Theme = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n        theme: _themes_default__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        __source: {\n            fileName: \"/Users/dustincraig/Projects/portfolio/src/styles/theme.js\",\n            lineNumber: 6,\n            columnNumber: 3\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/dustincraig/Projects/portfolio/src/styles/theme.js\",\n                    lineNumber: 7,\n                    columnNumber: 5\n                },\n                __self: undefined\n            }),\n            children\n        ]\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ3BCO0FBQ1E7QUFFckMsS0FBSyxDQUFDRyxLQUFLLElBQUksQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyx5RUFDeEJKLDREQUFhO1FBQUNFLEtBQUssRUFBRUEsdURBQUs7Ozs7Ozs7O2lGQUN4QkQsK0NBQU07Ozs7Ozs7O1lBQ05HLFFBQVE7Ozs7QUFHYixpRUFBZUQsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZXMvdGhlbWUuanM/MTlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lcy9kZWZhdWx0J1xuXG5jb25zdCBUaGVtZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8U3R5bGVzIC8+XG4gICAge2NoaWxkcmVufVxuICA8L1RoZW1lUHJvdmlkZXI+XG4pXG5leHBvcnQgZGVmYXVsdCBUaGVtZSJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiU3R5bGVzIiwidGhlbWUiLCJUaGVtZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/theme.js\n");

/***/ }),

/***/ "./src/themes/default.js":
/*!*******************************!*\
  !*** ./src/themes/default.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    fonts: {\n        title: 'Space Grotesk, sans-serif',\n        main: 'Space Grotesk, sans-serif'\n    },\n    colors: {\n        primary: 'hsl(204,23.8%,95.9%)',\n        background: '#18191a',\n        accent: 'hsl(34.9,98.6%,72.9%)',\n        button: 'hsl(205.1,100%,36.1%)',\n        background2: 'hsl(232.7,27.3%,23.7%)',\n        link: 'hsl(192, 92%, 52%)'\n    },\n    breakpoints: {\n        sm: 'screen and (max-width: 640px)',\n        md: 'screen and (max-width: 768px)',\n        lg: 'screen and (max-width: 1024px)',\n        xl: 'screen and (max-width: 1280px)'\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWVzL2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLENBQUM7SUFDZEEsS0FBSyxFQUFFLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQTJCO1FBQ2xDQyxJQUFJLEVBQUUsQ0FBMkI7SUFDbkMsQ0FBQztJQUVEQyxNQUFNLEVBQUUsQ0FBQztRQUNQQyxPQUFPLEVBQUUsQ0FBc0I7UUFDL0JDLFVBQVUsRUFBRSxDQUFTO1FBQ3JCQyxNQUFNLEVBQUUsQ0FBdUI7UUFDL0JDLE1BQU0sRUFBRSxDQUF1QjtRQUMvQkMsV0FBVyxFQUFFLENBQXdCO1FBQ3JDQyxJQUFJLEVBQUUsQ0FBb0I7SUFDNUIsQ0FBQztJQUVEQyxXQUFXLEVBQUUsQ0FBQztRQUNaQyxFQUFFLEVBQUUsQ0FBK0I7UUFDbkNDLEVBQUUsRUFBRSxDQUErQjtRQUNuQ0MsRUFBRSxFQUFFLENBQWdDO1FBQ3BDQyxFQUFFLEVBQUUsQ0FBZ0M7SUFDdEMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdGhlbWVzL2RlZmF1bHQuanM/YjFlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGZvbnRzOiB7XG4gICAgdGl0bGU6ICdTcGFjZSBHcm90ZXNrLCBzYW5zLXNlcmlmJyxcbiAgICBtYWluOiAnU3BhY2UgR3JvdGVzaywgc2Fucy1zZXJpZicsXG4gIH0sXG5cbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJ2hzbCgyMDQsMjMuOCUsOTUuOSUpJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzE4MTkxYScsXG4gICAgYWNjZW50OiAnaHNsKDM0LjksOTguNiUsNzIuOSUpJyxcbiAgICBidXR0b246ICdoc2woMjA1LjEsMTAwJSwzNi4xJSknLFxuICAgIGJhY2tncm91bmQyOiAnaHNsKDIzMi43LDI3LjMlLDIzLjclKScsXG4gICAgbGluazogJ2hzbCgxOTIsIDkyJSwgNTIlKScsXG4gIH0sXG5cbiAgYnJlYWtwb2ludHM6IHtcbiAgICBzbTogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpJyxcbiAgICBtZDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJyxcbiAgICBsZzogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KScsXG4gICAgeGw6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCknLFxuICB9LFxufVxuIl0sIm5hbWVzIjpbImZvbnRzIiwidGl0bGUiLCJtYWluIiwiY29sb3JzIiwicHJpbWFyeSIsImJhY2tncm91bmQiLCJhY2NlbnQiLCJidXR0b24iLCJiYWNrZ3JvdW5kMiIsImxpbmsiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/themes/default.js\n");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-normalize");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();