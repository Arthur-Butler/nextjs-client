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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction index(param) {\n    let { onSubmit } = param;\n    _s();\n    const [serverMsg, setServerMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading\");\n    const [serverArr, setServerArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        username: \"\",\n        password: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:8081/\").then((response)=>response.json()).then((data)=>{\n            setServerMsg(data.message);\n            setServerArr(data.testArr);\n        });\n    }, []);\n    function handleInputChange(event) {\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        onSubmit(formData);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"index\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: serverMsg\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: serverArr.map((msg)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: msg\n                    }, msg, false, {\n                        fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"testForm\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"usernameInput\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: formData.username,\n                                onChange: handleInputChange,\n                                placeholder: \"Enter Username\",\n                                type: \"text\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 66\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"passwordInput\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: formData.password,\n                                onChange: handleInputChange,\n                                placeholder: \"Enter Username\",\n                                type: \"password\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 66\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Arthur Butler\\\\Documents\\\\nextjs-nodejs-app\\\\client\\\\pages\\\\index.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(index, \"7zH78vHeD/Lkflw55dJ4OHB3fM0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQVc3RCxTQUFTRyxNQUFNLEtBRUg7UUFGRyxFQUNiQyxRQUFRLEVBQ0UsR0FGRzs7SUFHYixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBQ0osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSyxXQUFXQyxhQUFhLEdBQUNOLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdWLHFEQUFjLENBQVc7UUFBRVcsVUFBVTtRQUFJQyxVQUFVO0lBQUc7SUFFdEZYLGdEQUFTQSxDQUFDO1FBQ1JZLE1BQU0sMEJBQTBCQyxJQUFJLENBQ2xDQyxDQUFBQSxXQUFVQSxTQUFTQyxJQUFJLElBQ3ZCRixJQUFJLENBQ0pHLENBQUFBO1lBQ0VYLGFBQWFXLEtBQUtDLE9BQU87WUFDekJWLGFBQWFTLEtBQUtFLE9BQU87UUFDM0I7SUFFSixHQUFHLEVBQUU7SUFFTCxTQUFTQyxrQkFBa0JDLEtBQTBDO1FBQ25FLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsTUFBTUcsTUFBTTtRQUNwQ2QsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDYSxLQUFLLEVBQUVDO1FBQU07SUFDM0M7SUFFQSxTQUFTRSxhQUFhSixLQUF1QztRQUMzREEsTUFBTUssY0FBYztRQUNwQnRCLFNBQVNLO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDswQkFBS3RCOzs7Ozs7MEJBQ04sOERBQUNzQjswQkFDRXBCLFVBQVVzQixHQUFHLENBQUMsQ0FBQ0Msb0JBQ2QsOERBQUNIO2tDQUFlRzt1QkFBTkE7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNDO2dCQUFLSCxXQUFVO2dCQUFXeEIsVUFBVXFCOztrQ0FDbkMsOERBQUNPOzswQ0FBUyw4REFBQ0M7Z0NBQU1DLFNBQVE7MENBQWdCOzs7Ozs7MENBQWdCLDhEQUFDQztnQ0FBTVosT0FBT2QsU0FBU0UsUUFBUTtnQ0FBRXlCLFVBQVVoQjtnQ0FBbUJpQixhQUFZO2dDQUFpQkMsTUFBSztnQ0FBT0MsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUN4Syw4REFBQ1A7OzBDQUFTLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBZ0I7Ozs7OzswQ0FBZ0IsOERBQUNDO2dDQUFNWixPQUFPZCxTQUFTRyxRQUFRO2dDQUFFd0IsVUFBVWhCO2dDQUFtQmlCLGFBQVk7Z0NBQWlCQyxNQUFLO2dDQUFXQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBQzVLLDhEQUFDQzt3QkFBT0YsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBM0NTbkM7QUE2Q1QsK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q2hhbmdlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgRm9ybVByb3BzIHtcbiAgb25TdWJtaXQ6IChkYXRhOiBGb3JtRGF0YSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIEZvcm1EYXRhIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gaW5kZXgoe1xuICBvblN1Ym1pdFxufTogRm9ybVByb3BzKSB7XG4gIGNvbnN0IFtzZXJ2ZXJNc2csIHNldFNlcnZlck1zZ109dXNlU3RhdGUoXCJMb2FkaW5nXCIpO1xuICBjb25zdCBbc2VydmVyQXJyLCBzZXRTZXJ2ZXJBcnJdPXVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxGb3JtRGF0YT4oeyB1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJyB9KTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9cIikudGhlbihcbiAgICAgIHJlc3BvbnNlPT5yZXNwb25zZS5qc29uKClcbiAgICApLnRoZW4oXG4gICAgICBkYXRhID0+IHtcbiAgICAgICAgc2V0U2VydmVyTXNnKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIHNldFNlcnZlckFycihkYXRhLnRlc3RBcnIpO1xuICAgICAgfVxuICAgIClcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBvblN1Ym1pdChmb3JtRGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdpbmRleCc+XG4gICAgICA8ZGl2PntzZXJ2ZXJNc2d9PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7c2VydmVyQXJyLm1hcCgobXNnKT0+KFxuICAgICAgICAgIDxkaXYga2V5PXttc2d9Pnttc2d9PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J3Rlc3RGb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGZpZWxkc2V0PjxsYWJlbCBodG1sRm9yPSd1c2VybmFtZUlucHV0Jz5Vc2VybmFtZTwvbGFiZWw+PGlucHV0IHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBwbGFjZWhvbGRlcj0nRW50ZXIgVXNlcm5hbWUnIHR5cGU9J3RleHQnIHJlcXVpcmVkPjwvaW5wdXQ+PC9maWVsZHNldD5cbiAgICAgICAgPGZpZWxkc2V0PjxsYWJlbCBodG1sRm9yPSdwYXNzd29yZElucHV0Jz5QYXNzd29yZDwvbGFiZWw+PGlucHV0IHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBwbGFjZWhvbGRlcj0nRW50ZXIgVXNlcm5hbWUnIHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkPjwvaW5wdXQ+PC9maWVsZHNldD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbmRleCIsIm9uU3VibWl0Iiwic2VydmVyTXNnIiwic2V0U2VydmVyTXNnIiwic2VydmVyQXJyIiwic2V0U2VydmVyQXJyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibWVzc2FnZSIsInRlc3RBcnIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtc2ciLCJmb3JtIiwiZmllbGRzZXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});