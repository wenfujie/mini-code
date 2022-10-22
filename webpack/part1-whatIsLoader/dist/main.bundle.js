/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n * @Date: 2022-10\n * @LastEditors: wfj\n * @LastEditTime: 2022-10\n * @Description: \n */\nconst json = __webpack_require__(/*! ../mock/test.json */ \"../mock/test.json\")\n\nconsole.log('%c json','color:#0f0;', json);\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "../mock/test.json":
/*!*************************!*\
  !*** ../mock/test.json ***!
  \*************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token \\\"m\\\" (0x6D) in JSON at position 0 while parsing near \\\"module.exports = {\\\\\\\"n...\\\"\\nFile was processed with these loaders:\\n * ../json-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\nJSONParseError: Unexpected token \\\"m\\\" (0x6D) in JSON at position 0 while parsing near \\\"module.exports = {\\\\\\\"n...\\\"\\n    at JsonParser.parse (/Users/wenfujie/Desktop/code/own/mini-code/node_modules/webpack/lib/json/JsonParser.js:43:7)\\n    at /Users/wenfujie/Desktop/code/own/mini-code/node_modules/webpack/lib/NormalModule.js:1087:26\\n    at processResult (/Users/wenfujie/Desktop/code/own/mini-code/node_modules/webpack/lib/NormalModule.js:800:11)\\n    at /Users/wenfujie/Desktop/code/own/mini-code/node_modules/webpack/lib/NormalModule.js:860:5\\n    at /Users/wenfujie/Desktop/code/own/mini-code/node_modules/loader-runner/lib/LoaderRunner.js:407:3\\n    at iterateNormalLoaders (/Users/wenfujie/Desktop/code/own/mini-code/node_modules/loader-runner/lib/LoaderRunner.js:233:10)\\n    at iterateNormalLoaders (/Users/wenfujie/Desktop/code/own/mini-code/node_modules/loader-runner/lib/LoaderRunner.js:240:10)\\n    at /Users/wenfujie/Desktop/code/own/mini-code/node_modules/loader-runner/lib/LoaderRunner.js:255:3\\n    at runSyncOrAsync (/Users/wenfujie/Desktop/code/own/mini-code/node_modules/loader-runner/lib/LoaderRunner.js:143:11)\\n    at iterateNormalLoaders (/Users/wenfujie/Desktop/code/own/mini-code/node_modules/loader-runner/lib/LoaderRunner.js:251:2)\");\n\n//# sourceURL=webpack:///../mock/test.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;