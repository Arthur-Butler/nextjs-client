"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction index() {\n    _s();\n    const [serverMsg, setServerMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [serverArr, setServerArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:8081/\").then((response)=>response.json()).then((data)=>{\n            setServerMsg(data.message);\n            setServerArr(data.testArr);\n        });\n    }, []);\n    const handleSubmit = (e)=>{\n        alert(\"A name was submitted: \" + this.state.value);\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"index\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: serverMsg\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: serverArr.map((msg)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: msg,\n                        children: msg\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"testForm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Enter Username\",\n                                type: \"text\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 38\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Enter Username\",\n                                type: \"password\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 38\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"sRRiV5P9OWxkc0xyRtke+v7gVqQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRDtBQUVoRCxTQUFTRzs7SUFDUCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBQ0gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUNMLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1JPLE1BQU0sMEJBQTBCQyxJQUFJLENBQ2xDQyxDQUFBQSxXQUFVQSxTQUFTQyxJQUFJLElBQ3ZCRixJQUFJLENBQ0pHLENBQUFBO1lBQ0VQLGFBQWFPLEtBQUtDLE9BQU87WUFDekJOLGFBQWFLLEtBQUtFLE9BQU87UUFDM0I7SUFFSixHQUFHLEVBQUU7SUFFTCxNQUFNQyxlQUFhLENBQUNDO1FBQ2xCQyxNQUFNLDJCQUEyQixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsS0FBSztRQUNqREMsTUFBTUMsY0FBYztJQUN0QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7MEJBQUtsQjs7Ozs7OzBCQUNOLDhEQUFDa0I7MEJBQ0VoQixVQUFVa0IsR0FBRyxDQUFDLENBQUNDLG9CQUNkLDhEQUFDSDt3QkFBSUksSUFBSUQ7a0NBQU1BOzs7Ozs7Ozs7OzswQkFHbkIsOERBQUNFO2dCQUFLQyxVQUFVYjtnQkFBY1EsV0FBVTs7a0NBQ3RDLDhEQUFDTTs7MENBQUssOERBQUNDOzBDQUFNOzs7Ozs7MENBQWdCLDhEQUFDQztnQ0FBTUMsYUFBWTtnQ0FBaUJDLE1BQUs7Z0NBQU9DLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FDckYsOERBQUNMOzswQ0FBSyw4REFBQ0M7MENBQU07Ozs7OzswQ0FBZ0IsOERBQUNDO2dDQUFNQyxhQUFZO2dDQUFpQkMsTUFBSztnQ0FBV0MsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUN6Riw4REFBQ0g7d0JBQU1FLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQjtHQW5DUzlCO0FBcUNULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgY29uc3QgW3NlcnZlck1zZywgc2V0U2VydmVyTXNnXT11c2VTdGF0ZShcIkxvYWRpbmdcIik7XG4gIGNvbnN0IFtzZXJ2ZXJBcnIsIHNldFNlcnZlckFycl09dXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL1wiKS50aGVuKFxuICAgICAgcmVzcG9uc2U9PnJlc3BvbnNlLmpzb24oKVxuICAgICkudGhlbihcbiAgICAgIGRhdGEgPT4ge1xuICAgICAgICBzZXRTZXJ2ZXJNc2coZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgc2V0U2VydmVyQXJyKGRhdGEudGVzdEFycik7XG4gICAgICB9XG4gICAgKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQ9KGUpPT4ge1xuICAgIGFsZXJ0KCdBIG5hbWUgd2FzIHN1Ym1pdHRlZDogJyArIHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbmRleCc+XG4gICAgICA8ZGl2PntzZXJ2ZXJNc2d9PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7c2VydmVyQXJyLm1hcCgobXNnKT0+KFxuICAgICAgICAgIDxkaXYgaWQ9e21zZ30+e21zZ308L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0ndGVzdEZvcm0nPlxuICAgICAgICA8c3Bhbj48bGFiZWw+VXNlcm5hbWU8L2xhYmVsPjxpbnB1dCBwbGFjZWhvbGRlcj0nRW50ZXIgVXNlcm5hbWUnIHR5cGU9J3RleHQnIHJlcXVpcmVkPjwvaW5wdXQ+PC9zcGFuPlxuICAgICAgICA8c3Bhbj48bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPjxpbnB1dCBwbGFjZWhvbGRlcj0nRW50ZXIgVXNlcm5hbWUnIHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkPjwvaW5wdXQ+PC9zcGFuPlxuICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0Jz48L2lucHV0PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbmRleCIsInNlcnZlck1zZyIsInNldFNlcnZlck1zZyIsInNlcnZlckFyciIsInNldFNlcnZlckFyciIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJtZXNzYWdlIiwidGVzdEFyciIsImhhbmRsZVN1Ym1pdCIsImUiLCJhbGVydCIsInN0YXRlIiwidmFsdWUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibXNnIiwiaWQiLCJmb3JtIiwib25TdWJtaXQiLCJzcGFuIiwibGFiZWwiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});