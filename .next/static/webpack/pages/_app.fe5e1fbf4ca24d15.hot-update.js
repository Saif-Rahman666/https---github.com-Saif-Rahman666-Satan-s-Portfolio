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

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelDog = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        at: [\n            '-20px',\n            '-60px',\n            '-120px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"/Users/saifrahman/Downloads/pdf/portfolio2/components/voxel-dog.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size)/2)\",\n                mt: \"calc(0px - var(--spinner-size))\",\n                __source: {\n                    fileName: \"/Users/saifrahman/Downloads/pdf/portfolio2/components/voxel-dog.js\",\n                    lineNumber: 46,\n                    columnNumber: 22\n                },\n                __self: _this\n            }),\n            \"DOG!!\"\n        ]\n    }));\n};\n_s(VoxelDog, \"k87crlv/3PaXgurseNKtF2lTTT8=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztZQUN6QyxDQUVYOzs7QUFFUixDQUFDO0dBOUNLaEMsUUFBUTtLQUFSQSxRQUFRO0FBK0NkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtZG9nLmpzP2NmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmICAsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcbmltcG9ydCB7IGxvYWRHTFRGTW9kZWwgfSBmcm9tIFwiLi4vbGlicy9tb2RlbFwiO1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KXtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4LTEsNCkpXG59XG5cbmNvbnN0IFZveGVsRG9nICA9ICgpID0+IHtcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwwKSlcbiAgICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICAgIDIwKiBNYXRoLnNpbigwLjIqIE1hdGguUEkpLFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyMCAqIE1hdGguY29zKDAuMipNYXRoLlBJKVxuICAgICAgICApXG4gICAgKVxuICAgIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcbiAgICBjb25zdCBbX2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpXG4gICAgXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICBjb25zdCB7Y3VycmVudDpjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgIXJlbmRlcmVyKXtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8Qm94IHJlZj17cmVmQ29udGFpbmVyfVxuICAgICAgICAgICAgIGNsYXNzTmFtZT0ndm94ZWwtZG9nJyBcbiAgICAgICAgICAgICBtPVwiYXV0b1wiIFxuICAgICAgICAgICAgIGF0PXtbJy0yMHB4JywnLTYwcHgnLCctMTIwcHgnXX0gXG4gICAgICAgICAgICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywnLTIwMHB4J119IFxuICAgICAgICAgICAgIHc9e1syODAsNDgwLDY0MF19XG4gICAgICAgICAgICAgaD17WzI4MCw0ODAsNjQwXX1cbiAgICAgICAgICAgICBwb3NpdGlvbj0ncmVsYXRpdmUnXG4gICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdD1cIjUwJVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPVwiNTAlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKS8yKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkpXCIgLz5cbiAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIERPRyEhXG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFZveGVsRG9nIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxEb2ciLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiY29udGFpbmVyIiwiY3VycmVudCIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJwb3NpdGlvbiIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});