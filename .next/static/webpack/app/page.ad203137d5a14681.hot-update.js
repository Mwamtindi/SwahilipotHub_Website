"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./utility/index.js":
/*!**************************!*\
  !*** ./utility/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nextUtility: function() { return /* binding */ nextUtility; }\n/* harmony export */ });\nconst nextUtility = {\n    stickyNav () {\n        const header = document.getElementById(\"header-sticky\");\n        window.addEventListener(\"scroll\", function() {\n            if (window.scrollY > 250) {\n                header === null || header === void 0 ? void 0 : header.classList.add(\"sticky\"); // Use optional chaining to avoid errors\n            } else {\n                header === null || header === void 0 ? void 0 : header.classList.remove(\"sticky\");\n            }\n        });\n    },\n    scrollAnimation () {\n        if (true) {\n            window.WOW = __webpack_require__(/*! wowjs */ \"(app-pages-browser)/./node_modules/wowjs/dist/wow.js\");\n        }\n        new WOW.WOW().init();\n    },\n    preloader () {\n        console.log(\"Preloader function is running...\");\n        const preloader = document.getElementById(\"preloader\");\n        if (preloader) {\n            setTimeout(()=>{\n                preloader.style.display = \"none\"; // Hide preloader after loading\n            }, 2000); // Adjust timing as needed\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxpdHkvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGNBQWM7SUFDekJDO1FBQ0UsTUFBTUMsU0FBU0MsU0FBU0MsY0FBYyxDQUFDO1FBQ3ZDQyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVO1lBQ2hDLElBQUlELE9BQU9FLE9BQU8sR0FBRyxLQUFLO2dCQUN4QkwsbUJBQUFBLDZCQUFBQSxPQUFRTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLHdDQUF3QztZQUMzRSxPQUFPO2dCQUNMUCxtQkFBQUEsNkJBQUFBLE9BQVFNLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1lBQzNCO1FBQ0Y7SUFDRjtJQUVBQztRQUNFLElBQUksSUFBNkIsRUFBRTtZQUNqQ04sT0FBT08sR0FBRyxHQUFHQyxtQkFBT0EsQ0FBQyxtRUFBTztRQUM5QjtRQUNBLElBQUlELElBQUlBLEdBQUcsR0FBR0UsSUFBSTtJQUNwQjtJQUVBQztRQUNFQyxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNRixZQUFZWixTQUFTQyxjQUFjLENBQUM7UUFDMUMsSUFBSVcsV0FBVztZQUNiRyxXQUFXO2dCQUNUSCxVQUFVSSxLQUFLLENBQUNDLE9BQU8sR0FBRyxRQUFRLCtCQUErQjtZQUNuRSxHQUFHLE9BQU8sMEJBQTBCO1FBQ3RDO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxpdHkvaW5kZXguanM/NjUzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbmV4dFV0aWxpdHkgPSB7XHJcbiAgc3RpY2t5TmF2KCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItc3RpY2t5XCIpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyNTApIHtcclxuICAgICAgICBoZWFkZXI/LmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7IC8vIFVzZSBvcHRpb25hbCBjaGFpbmluZyB0byBhdm9pZCBlcnJvcnNcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNjcm9sbEFuaW1hdGlvbigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHdpbmRvdy5XT1cgPSByZXF1aXJlKFwid293anNcIik7XHJcbiAgICB9XHJcbiAgICBuZXcgV09XLldPVygpLmluaXQoKTtcclxuICB9LFxyXG5cclxuICBwcmVsb2FkZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlByZWxvYWRlciBmdW5jdGlvbiBpcyBydW5uaW5nLi4uXCIpO1xyXG4gICAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVsb2FkZXJcIik7XHJcbiAgICBpZiAocHJlbG9hZGVyKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHByZWxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vIEhpZGUgcHJlbG9hZGVyIGFmdGVyIGxvYWRpbmdcclxuICAgICAgfSwgMjAwMCk7IC8vIEFkanVzdCB0aW1pbmcgYXMgbmVlZGVkXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsibmV4dFV0aWxpdHkiLCJzdGlja3lOYXYiLCJoZWFkZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxBbmltYXRpb24iLCJXT1ciLCJyZXF1aXJlIiwiaW5pdCIsInByZWxvYWRlciIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utility/index.js\n"));

/***/ })

});