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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelDog = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setPixelRatio(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.ambientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/dog.glb', {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.re;\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        at: [\n            '-20px',\n            '-60px',\n            '-120px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"/Users/saifrahman/Downloads/pdf/portfolio2/components/voxel-dog.js\",\n            lineNumber: 100,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size)/2)\",\n                mt: \"calc(0px - var(--spinner-size))\",\n                __source: {\n                    fileName: \"/Users/saifrahman/Downloads/pdf/portfolio2/components/voxel-dog.js\",\n                    lineNumber: 110,\n                    columnNumber: 22\n                },\n                __self: _this\n            }),\n            \"DOG!!\"\n        ]\n    }));\n};\n_s(VoxelDog, \"k87crlv/3PaXgurseNKtF2lTTT8=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDO1lBQUEsR0FBRztZQUFDLEdBQUc7WUFBQyxHQUFHO1FBQUEsQ0FBQztRQUNoQkMsQ0FBQyxFQUFFLENBQUM7WUFBQSxHQUFHO1lBQUMsR0FBRztZQUFDLEdBQUc7UUFBQSxDQUFDO1FBQ2hCM0IsUUFBUSxFQUFDLENBQVU7Ozs7Ozs7O1lBRWRuQyxPQUFPLHlFQUNIWixxREFBTztnQkFDTDJFLElBQUksRUFBQyxDQUFJO2dCQUNUNUIsUUFBUSxFQUFDLENBQVU7Z0JBQ25CNkIsSUFBSSxFQUFDLENBQUs7Z0JBQ1ZDLEdBQUcsRUFBQyxDQUFLO2dCQUNUQyxFQUFFLEVBQUMsQ0FBbUM7Z0JBQ3RDQyxFQUFFLEVBQUMsQ0FBaUM7Ozs7Ozs7O1lBQ3pDLENBRVg7OztBQUVSLENBQUM7R0E3R0tyRSxRQUFRO0tBQVJBLFFBQVE7QUE4R2QsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92b3hlbC1kb2cuanM/Y2Y0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgICwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgU3Bpbm5lciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCB7IE9yYml0Q29udHJvbHN9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gXCIuLi9saWJzL21vZGVsXCI7XG5pbXBvcnQgeyBhbmltYXRlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCl7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeC0xLDQpKVxufVxuXG5jb25zdCBWb3hlbERvZyAgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW3JlbmRlcmVyLCBzZXRSZW5kZXJlcl0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW19jYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsMCkpXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgICAgICAyMCogTWF0aC5zaW4oMC4yKiBNYXRoLlBJKSxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjAgKiBNYXRoLmNvcygwLjIqTWF0aC5QSSlcbiAgICAgICAgKVxuICAgIClcbiAgICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXG4gICAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKVxuICAgIFxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgY29uc3Qge2N1cnJlbnQ6Y29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcil7XG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oc2NXLHNjSClcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0gqMC4wMDUrNC44XG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICAgICAgICBzY2FsZSxcbiAgICAgICAgICAgICAgICAtc2NhbGUsXG4gICAgICAgICAgICAgICAgMC4wMSxcbiAgICAgICAgICAgICAgICA1MDAwMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcbiAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLmFtYmllbnRMaWdodCgweGNjY2NjYywxKVxuICAgICAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpXG4gICAgICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgICAgICBzZXRDb250cm9scyhjb250cm9scylcblxuICAgICAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsICcvZG9nLmdsYicsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNhc3RTaGFkb3c6ZmFsc2VcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBsZXQgcmVxID0gbnVsbFxuICAgICAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSsxIDogZnJhbWVcblxuICAgICAgICAgICAgICAgICAgICBpZihmcmFtZSA8PSAxMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUvIDEyMCkqIE1hdGguUEkgKjIwIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gcC54ICogTWF0aC5jb3Mocm90U3BlZWQpKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIucmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn1cbiAgICAgICAgICAgICBjbGFzc05hbWU9J3ZveGVsLWRvZycgXG4gICAgICAgICAgICAgbT1cImF1dG9cIiBcbiAgICAgICAgICAgICBhdD17WyctMjBweCcsJy02MHB4JywnLTEyMHB4J119IFxuICAgICAgICAgICAgIG1iPXtbJy00MHB4JywgJy0xNDBweCcsJy0yMDBweCddfSBcbiAgICAgICAgICAgICB3PXtbMjgwLDQ4MCw2NDBdfVxuICAgICAgICAgICAgIGg9e1syODAsNDgwLDY0MF19XG4gICAgICAgICAgICAgcG9zaXRpb249J3JlbGF0aXZlJ1xuICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwieGxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ9XCI1MCVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWw9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkvMilcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiIC8+XG4gICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICBET0chIVxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBWb3hlbERvZyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJhbmltYXRlIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbERvZyIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0Iiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJjb250YWluZXIiLCJjdXJyZW50Iiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwicmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3Bvc2UiLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwiYXQiLCJtYiIsInciLCJoIiwic2l6ZSIsImxlZnQiLCJ0b3AiLCJtbCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});