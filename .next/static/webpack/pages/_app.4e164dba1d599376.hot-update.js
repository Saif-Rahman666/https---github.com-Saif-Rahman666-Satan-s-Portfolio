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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelDog = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setPixelRatio(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.ambientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/dog.glb', {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener();\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        at: [\n            '-20px',\n            '-60px',\n            '-120px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"/Users/saifrahman/Downloads/pdf/portfolio2/components/voxel-dog.js\",\n            lineNumber: 115,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size)/2)\",\n                mt: \"calc(0px - var(--spinner-size))\",\n                __source: {\n                    fileName: \"/Users/saifrahman/Downloads/pdf/portfolio2/components/voxel-dog.js\",\n                    lineNumber: 125,\n                    columnNumber: 22\n                },\n                __self: _this\n            }),\n            \"DOG!!\"\n        ]\n    }));\n};\n_s(VoxelDog, \"/HwMTabAUEFtVS5AqNGZX2OvAKA=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFFUixDQUFDO0dBNUhLekUsUUFBUTtLQUFSQSxRQUFRO0FBNkhkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtZG9nLmpzP2NmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmICAsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcbmltcG9ydCB7IGxvYWRHTFRGTW9kZWwgfSBmcm9tIFwiLi4vbGlicy9tb2RlbFwiO1xuaW1wb3J0IHsgYW5pbWF0ZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpe1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHgtMSw0KSlcbn1cblxuY29uc3QgVm94ZWxEb2cgID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFt0YXJnZXRdID0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLDApKVxuICAgIGNvbnN0IFtpbml0aWFsQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgMjAqIE1hdGguc2luKDAuMiogTWF0aC5QSSksXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yKk1hdGguUEkpXG4gICAgICAgIClcbiAgICApXG4gICAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxuICAgIGNvbnN0IFtfY29udHJvbHMsIHNldENvbnRyb2xzXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PntcbiAgICAgICAgY29uc3R7IGN1cnJlbnQ6IGNvbnRhaW5lcn0gPSByZWZDb250YWluZXJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiByZW5kZXJlcikge1xuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXG4gICAgICAgIH1cblxuICAgIH0sIFtyZW5kZXJlcl0pXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICBjb25zdCB7Y3VycmVudDpjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgIXJlbmRlcmVyKXtcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhzY1csc2NIKVxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHNjSCowLjAwNSs0LjhcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIDUwMDAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuYW1iaWVudExpZ2h0KDB4Y2NjY2NjLDEpXG4gICAgICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxuXG4gICAgICAgICAgICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgJy9kb2cuZ2xiJywge1xuICAgICAgICAgICAgICAgICAgICByZWNlaXZlU2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FzdFNoYWRvdzpmYWxzZVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGxldCByZXEgPSBudWxsXG4gICAgICAgICAgICAgICAgbGV0IGZyYW1lID0gMFxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lKzEgOiBmcmFtZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGZyYW1lIDw9IDEwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZS8gMTIwKSogTWF0aC5QSSAqMjAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkrIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxuICAgICAgICByZXR1cm4oKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigpXG4gICAgICAgIH1cbiAgICB9LCBbcmVuZGVyZXIsaGFuZGxlV2luZG93UmVzaXplXSlcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxCb3ggcmVmPXtyZWZDb250YWluZXJ9XG4gICAgICAgICAgICAgY2xhc3NOYW1lPSd2b3hlbC1kb2cnIFxuICAgICAgICAgICAgIG09XCJhdXRvXCIgXG4gICAgICAgICAgICAgYXQ9e1snLTIwcHgnLCctNjBweCcsJy0xMjBweCddfSBcbiAgICAgICAgICAgICBtYj17WyctNDBweCcsICctMTQwcHgnLCctMjAwcHgnXX0gXG4gICAgICAgICAgICAgdz17WzI4MCw0ODAsNjQwXX1cbiAgICAgICAgICAgICBoPXtbMjgwLDQ4MCw2NDBdfVxuICAgICAgICAgICAgIHBvc2l0aW9uPSdyZWxhdGl2ZSdcbiAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInhsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0PVwiNTAlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A9XCI1MCVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpLzIpXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBtdD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSlcIiAvPlxuICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgRE9HISFcbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgVm94ZWxEb2ciXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwiYW5pbWF0ZSIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxEb2ciLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY29udGFpbmVyIiwiY3VycmVudCIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwieSIsInoiLCJ1cGRhdGUiLCJyZW5kZXIiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});