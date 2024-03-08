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

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderPeliculas=__webpack_require__(/*! ./renderCards */ \"./scripts/renderCards.js\");\r\n\r\n$.get('https://students-api.2.us-1.fl0.io/movies',(data) => {\r\n  data.forEach(renderPeliculas)\r\n})\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("\r\nconst SeccionPelicula = document.getElementById('contenedorPadre')\r\n\r\nfunction renderPeliculas(p){\r\n//const pelicula = document.createElement(\"article\")\r\nconst containerPeliculas= document.createElement(\"div\")\r\n\r\n//pelicula.classList.add('contenedorTarjeta');\r\ncontainerPeliculas.classList.add('contenedorPrincipal');\r\n\r\ncontainerPeliculas.innerHTML=`\r\n<div>\r\n<img class=\"imagenes\" src=\"${p.poster}\" alt=\"${p.title}\"/>\r\n</div>\r\n<div>\r\n<h4 class=\"h_4\">${p.title}</h4>\r\n<h5 class=\"h_5\">${p.director}</h5>\r\n<h5 class=\"h_5\">${p.duration}</h5>\r\n<h5 class=\"h_5\">${p.year}</h5>\r\n<h5 class=\"h_5\">${p.rate}</h5>\r\n<h5 class=\"h_5\">${p.genre}</h5>\r\n</div>\r\n`\r\nSeccionPelicula.appendChild(containerPeliculas);\r\n//SeccionPelicula.appendChild(pelicula);\r\n//pelicula.appendChild(containerPeliculas);\r\n\r\n}\r\nmodule.exports = renderPeliculas;\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;