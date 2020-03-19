/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/index.scss":
/*!***********************************!*\
  !*** ./src/assets/css/index.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "../css/index.css");

/***/ }),

/***/ "./src/assets/ts/index.ts":
/*!********************************!*\
  !*** ./src/assets/ts/index.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_stub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/stub */ "./src/assets/ts/lib/stub.ts");

// let count = 0;
document.addEventListener("DOMContentLoaded", function () {
    console.log("2 + 2 = " + Object(_lib_stub__WEBPACK_IMPORTED_MODULE_0__["add"])({ a: 2, b: 3 }));
    console.log("2 + 3 = " + Object(_lib_stub__WEBPACK_IMPORTED_MODULE_0__["add"])({ a: 2, b: 2 }));
    // setInterval(() => {
    // count = add({ a: count, b: 1 });
    // console.log(count);
    // // }, 1000);
    // console.log(
    //   "Array map",
    //   [1, 2, 3].map(elem => elem + 1)
    // );
    // console.log("Object keys", Object.keys({ foo: 1, bah: 2 }));
    // const p = new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 5000);
    // });
    // p.then(res => {
    //   console.log("Promise resolved", res);
    // });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    // if (window.LiveReload !== undefined) {
    //   window.LiveReload.connector.socket.onmessage = message => {
    //     console.log(message);
    //   };
    //   console.log(window.LiveReload.connector);
    // window?.LiveReload.performReload({ command: "reload", path: "/" });
    // }
});


/***/ }),

/***/ "./src/assets/ts/lib/stub.ts":
/*!***********************************!*\
  !*** ./src/assets/ts/lib/stub.ts ***!
  \***********************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/**
 * Add two numbers to another
 * @example add({a: number,b: number})
 */
function add(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}


/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi ./src/assets/ts/index.ts ./src/assets/css/index.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/assets/ts/index.ts */"./src/assets/ts/index.ts");
module.exports = __webpack_require__(/*! ./src/assets/css/index.scss */"./src/assets/css/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jc3MvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdHMvbGliL3N0dWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLG9GQUF1QixxQkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQTNEO0FBQUE7QUFBaUM7QUFFakMsaUJBQWlCO0FBQ2pCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQVcscURBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFHLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQVcscURBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFHLENBQUMsQ0FBQztJQUM5QyxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixlQUFlO0lBRWYsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsS0FBSztJQUNMLCtEQUErRDtJQUUvRCxxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsTUFBTTtJQUVOLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsTUFBTTtJQUVOLG9FQUFvRTtJQUNwRSx5Q0FBeUM7SUFDekMsZ0VBQWdFO0lBQ2hFLDRCQUE0QjtJQUM1QixPQUFPO0lBQ1AsOENBQThDO0lBRTlDLHNFQUFzRTtJQUN0RSxJQUFJO0FBQ04sQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQ0g7QUFBQTtBQUFBOzs7R0FHRztBQUNJLFNBQVMsR0FBRyxDQUFDLEVBQWtDO1FBQWhDLFFBQUMsRUFBRSxRQUFDO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4uL2Nzcy9pbmRleC5jc3NcIjsiLCJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi9saWIvc3R1YlwiO1xuXG4vLyBsZXQgY291bnQgPSAwO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKGAyICsgMiA9ICR7YWRkKHsgYTogMiwgYjogMyB9KX1gKTtcbiAgY29uc29sZS5sb2coYDIgKyAzID0gJHthZGQoeyBhOiAyLCBiOiAyIH0pfWApO1xuICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gIC8vIGNvdW50ID0gYWRkKHsgYTogY291bnQsIGI6IDEgfSk7XG4gIC8vIGNvbnNvbGUubG9nKGNvdW50KTtcbiAgLy8gLy8gfSwgMTAwMCk7XG5cbiAgLy8gY29uc29sZS5sb2coXG4gIC8vICAgXCJBcnJheSBtYXBcIixcbiAgLy8gICBbMSwgMiwgM10ubWFwKGVsZW0gPT4gZWxlbSArIDEpXG4gIC8vICk7XG4gIC8vIGNvbnNvbGUubG9nKFwiT2JqZWN0IGtleXNcIiwgT2JqZWN0LmtleXMoeyBmb286IDEsIGJhaDogMiB9KSk7XG5cbiAgLy8gY29uc3QgcCA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAvLyAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgLy8gICB9LCA1MDAwKTtcbiAgLy8gfSk7XG5cbiAgLy8gcC50aGVuKHJlcyA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCJQcm9taXNlIHJlc29sdmVkXCIsIHJlcyk7XG4gIC8vIH0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gIC8vIGlmICh3aW5kb3cuTGl2ZVJlbG9hZCAhPT0gdW5kZWZpbmVkKSB7XG4gIC8vICAgd2luZG93LkxpdmVSZWxvYWQuY29ubmVjdG9yLnNvY2tldC5vbm1lc3NhZ2UgPSBtZXNzYWdlID0+IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAvLyAgIH07XG4gIC8vICAgY29uc29sZS5sb2cod2luZG93LkxpdmVSZWxvYWQuY29ubmVjdG9yKTtcblxuICAvLyB3aW5kb3c/LkxpdmVSZWxvYWQucGVyZm9ybVJlbG9hZCh7IGNvbW1hbmQ6IFwicmVsb2FkXCIsIHBhdGg6IFwiL1wiIH0pO1xuICAvLyB9XG59KTtcbiIsIi8qKlxuICogQWRkIHR3byBudW1iZXJzIHRvIGFub3RoZXJcbiAqIEBleGFtcGxlIGFkZCh7YTogbnVtYmVyLGI6IG51bWJlcn0pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQoeyBhLCBiIH06IHsgYTogbnVtYmVyOyBiOiBudW1iZXIgfSk6IG51bWJlciB7XG4gIHJldHVybiBhICsgYjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=