"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/layout/nav-item.js":
/*!*******************************************!*\
  !*** ./src/components/layout/nav-item.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavItem\": function() { return /* binding */ NavItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst NavItem = (props)=>{\n    _s();\n    const { href , icon , title , ...others } = props;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const active = href ? router.pathname === href : false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ListItem, {\n        // disableGutters\n        sx: {\n            display: \"flex\",\n            mb: 0.5,\n            py: 0,\n            px: 2\n        },\n        ...others,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: href,\n            passHref: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                // component=\"a\"\n                startIcon: icon,\n                disableRipple: true,\n                sx: {\n                    backgroundColor: active && \"rgba(255,255,255, 0.08)\",\n                    borderRadius: 1,\n                    color: active ? \"secondary.main\" : \"neutral.300\",\n                    fontWeight: active && \"fontWeightBold\",\n                    justifyContent: \"flex-start\",\n                    px: 3,\n                    textAlign: \"left\",\n                    textTransform: \"none\",\n                    width: \"100%\",\n                    \"& .MuiButton-startIcon\": {\n                        color: active ? \"secondary.main\" : \"neutral.400\"\n                    },\n                    \"&:hover\": {\n                        backgroundColor: \"rgba(255,255,255, 0.08)\"\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    sx: {\n                        flexGrow: 1\n                    },\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/alex/Documents/GitHub/Flowary/src/components/layout/nav-item.js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alex/Documents/GitHub/Flowary/src/components/layout/nav-item.js\",\n                lineNumber: 25,\n                columnNumber: 15\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/alex/Documents/GitHub/Flowary/src/components/layout/nav-item.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/alex/Documents/GitHub/Flowary/src/components/layout/nav-item.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NavItem;\nvar _c;\n$RefreshReg$(_c, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbmF2LWl0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNPO0FBQ2M7QUFFL0MsTUFBTUssVUFBVSxDQUFDQyxRQUFVOztJQUNoQyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR0MsUUFBUSxHQUFHSjtJQUN6QyxNQUFNSyxTQUFTVixzREFBU0E7SUFDeEIsTUFBTVcsU0FBU0wsT0FBUUksT0FBT0UsUUFBUSxLQUFLTixPQUFRLEtBQUs7SUFFeEQscUJBQ0UsOERBQUNILG1EQUFRQTtRQUNQLGlCQUFpQjtRQUNqQlUsSUFBSTtZQUNGQyxTQUFTO1lBQ1RDLElBQUk7WUFDSkMsSUFBSTtZQUNKQyxJQUFJO1FBQ047UUFDQyxHQUFHUixNQUFNO2tCQUVWLDRFQUFDVixrREFBUUE7WUFDUE8sTUFBTUE7WUFDTlksUUFBUTtzQkFFRiw0RUFBQ2hCLGlEQUFNQTtnQkFDWCxnQkFBZ0I7Z0JBQ2hCaUIsV0FBV1o7Z0JBQ1hhLGFBQWE7Z0JBQ2JQLElBQUk7b0JBQ0ZRLGlCQUFpQlYsVUFBVTtvQkFDM0JXLGNBQWM7b0JBQ2RDLE9BQU9aLFNBQVMsbUJBQW1CLGFBQWE7b0JBQ2hEYSxZQUFZYixVQUFVO29CQUN0QmMsZ0JBQWdCO29CQUNoQlIsSUFBSTtvQkFDSlMsV0FBVztvQkFDWEMsZUFBZTtvQkFDZkMsT0FBTztvQkFDUCwwQkFBMEI7d0JBQ3hCTCxPQUFPWixTQUFTLG1CQUFtQixhQUFhO29CQUNsRDtvQkFDQSxXQUFXO3dCQUNUVSxpQkFBaUI7b0JBQ25CO2dCQUNGOzBCQUVBLDRFQUFDcEIsOENBQUdBO29CQUFDWSxJQUFJO3dCQUFFZ0IsVUFBVTtvQkFBRTs4QkFDcEJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2IsRUFBRTtHQWxEV0o7O1FBRUlKLGtEQUFTQTs7O0tBRmJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9uYXYtaXRlbS5qcz83MWM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIExpc3RJdGVtIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5cbmV4cG9ydCBjb25zdCBOYXZJdGVtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaHJlZiwgaWNvbiwgdGl0bGUsIC4uLm90aGVycyB9ID0gcHJvcHM7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBhY3RpdmUgPSBocmVmID8gKHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZikgOiBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0SXRlbVxuICAgICAgLy8gZGlzYWJsZUd1dHRlcnNcbiAgICAgIHN4PXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgbWI6IDAuNSxcbiAgICAgICAgcHk6IDAsXG4gICAgICAgIHB4OiAyXG4gICAgICB9fVxuICAgICAgey4uLm90aGVyc31cbiAgICA+XG4gICAgICA8TmV4dExpbmtcbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgcGFzc0hyZWZcbiAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIC8vIGNvbXBvbmVudD1cImFcIlxuICAgICAgICAgIHN0YXJ0SWNvbj17aWNvbn1cbiAgICAgICAgICBkaXNhYmxlUmlwcGxlXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlICYmICdyZ2JhKDI1NSwyNTUsMjU1LCAwLjA4KScsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEsXG4gICAgICAgICAgICBjb2xvcjogYWN0aXZlID8gJ3NlY29uZGFyeS5tYWluJyA6ICduZXV0cmFsLjMwMCcsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBhY3RpdmUgJiYgJ2ZvbnRXZWlnaHRCb2xkJyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgICAgICAgICBweDogMyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICcmIC5NdWlCdXR0b24tc3RhcnRJY29uJzoge1xuICAgICAgICAgICAgICBjb2xvcjogYWN0aXZlID8gJ3NlY29uZGFyeS5tYWluJyA6ICduZXV0cmFsLjQwMCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwgMC4wOCknXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICA8L05leHRMaW5rPlxuICAgIDwvTGlzdEl0ZW0+XG4gICk7XG59O1xuXG4iXSwibmFtZXMiOlsiTmV4dExpbmsiLCJ1c2VSb3V0ZXIiLCJCb3giLCJCdXR0b24iLCJMaXN0SXRlbSIsIk5hdkl0ZW0iLCJwcm9wcyIsImhyZWYiLCJpY29uIiwidGl0bGUiLCJvdGhlcnMiLCJyb3V0ZXIiLCJhY3RpdmUiLCJwYXRobmFtZSIsInN4IiwiZGlzcGxheSIsIm1iIiwicHkiLCJweCIsInBhc3NIcmVmIiwic3RhcnRJY29uIiwiZGlzYWJsZVJpcHBsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwiZm9udFdlaWdodCIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwidGV4dFRyYW5zZm9ybSIsIndpZHRoIiwiZmxleEdyb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/nav-item.js\n"));

/***/ })

});