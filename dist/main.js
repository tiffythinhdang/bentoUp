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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bento.js":
/*!**********************!*\
  !*** ./src/bento.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ \"./src/order.js\");\n\n\n\nclass Bento {\n  constructor(numItems, order) {\n    this.numItems = numItems;\n    this.order = order;\n    this.bento = [];\n\n    this.generateBento();\n  }\n\n  generateBento() {\n    let bentoContainer = document.getElementById(\"bento-container\");\n    let bento = document.createElement(\"div\");\n    bento.id = \"bento\";\n\n    if (this.numItems === 4) {\n      bento.classList.add(\"bento-4\");\n    } else if (this.numItems === 6) {\n      bento.classList.add(\"bento-6\");\n    }\n\n    for (let i = 1; i <= this.numItems; i++ ) {\n      let bentoItem = document.createElement(\"div\");\n      bentoItem.classList.add(\"bento-item\");\n      bentoItem.classList.add(`${i}`);\n      bento.appendChild(bentoItem);\n    }\n\n    bentoContainer.appendChild(bento);\n  }\n\n  deleteBento() {\n    document.getElementById(\"bento-container\").innerHTML = \"\";\n  }\n\n  addItem(item) {\n    this.bento.push(item);\n    this.render();\n  }\n\n  removeItem() {\n    this.bento.pop();\n    this.render();\n  }\n\n  render() {\n    for (let i = 1; i <= this.numItems; i++) {\n      let bentoItem = document.getElementsByClassName(`bento-item ${i}`)[0];\n      bentoItem.innerHTML = \"\";\n      let item = this.bento[i - 1];\n      if (!item) break;\n      let img = document.createElement(\"img\");\n      img.src = _menu__WEBPACK_IMPORTED_MODULE_0__[\"MENU_ITEMS\"][item];\n      img.alt = `${item}-icon`;\n      bentoItem.appendChild(img);\n    }\n    this.check()\n  }\n\n  check() {\n    if (this.bento.length < this.numItems) return;\n    if (JSON.stringify(this.order) !== JSON.stringify(this.bento)) {\n      setTimeout(() => {alert(\"you lose\")}, 1000);\n    } else {\n      setTimeout(() => {alert(\"you win\")}, 1000);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bento);\n\n\n//# sourceURL=webpack:///./src/bento.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _bento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bento */ \"./src/bento.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ \"./src/order.js\");\n\n\n\n\nclass Game {\n  constructor() {\n    debugger\n    this.menu = new _menu__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"]();\n\n    let num = [4, 6];\n    let idx = Math.floor(Math.random() * 2);\n    this.order = new _order__WEBPACK_IMPORTED_MODULE_2__[\"Order\"](num[idx], num[idx] === 4 ? 20 : 20);\n\n    this.bento = new _bento__WEBPACK_IMPORTED_MODULE_1__[\"default\"](num[idx], this.order);\n    this.score = 0;\n    this.customerLost = 0;\n  }\n\n  restart(){\n    return new Game();\n  }\n\n  lost() {\n\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _bento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bento */ \"./src/bento.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ \"./src/order.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconsole.log(\"Webpack is working!\")\n\n// const Game = require(\"./game\");\n// const GameView = require(\"./game_view\");\n\nconst KEY_MAPPING = {\n  \"a\": \"onigiri\",\n  \"w\": \"sashimi\",\n  \"e\": \"pickles\",\n  \"f\": \"tempura\",\n  \"j\": \"fish\",\n  \"i\": \"tamago\",\n  \"o\": \"meatballs\",\n  \";\": \"sushi-roll\"\n}\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let gameCanvas = document.getElementById(\"game-canvas\");\n  let game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  // let menu = new Menu();\n\n  // let num = [4, 6];\n  // let idx = Math.floor(Math.random() * 2);\n  // let order = new Order(num[idx], num[idx] === 4 ? 20 : 20);\n\n  // let bento = new Bento(num[idx], order.order);\n\n  window.addEventListener(\"keydown\", (e) => { \n    let key = e.key;\n    if (key === \"Backspace\") {\n      bento.removeItem();\n      return;\n    }\n\n    let item = document.getElementById(`${KEY_MAPPING[key]}`);\n    if (!item) return;\n    item.classList.add(\"hover\");\n    bento.addItem(item.id);\n  });\n\n  window.addEventListener(\"keyup\", (e) => { \n    let key = e.key;\n    let item = document.getElementById(`${KEY_MAPPING[key]}`);\n    if (!item) return;\n    item.classList.remove(\"hover\");\n  });\n\n  // test codes\n  window.menu = menu;\n  window.deleteBento = bento.deleteBento;\n  // test codes\n\n  // const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  // canvasEl.width = Game.DIM_X;\n  // canvasEl.height = Game.DIM_Y;\n\n  // const ctx = canvasEl.getContext(\"2d\");\n  // const game = new Game();\n  // new GameView(game, ctx).start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: MENU_ITEMS, MenuItem, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MENU_ITEMS\", function() { return MENU_ITEMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuItem\", function() { return MenuItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\nconst MENU_ITEMS = {\n  \"onigiri\": \"../assets/menu_items/onigiri.png\",\n  \"sashimi\": \"../assets/menu_items/sashimi.png\",\n  \"pickles\": \"../assets/menu_items/pickles.png\",\n  \"tempura\": \"../assets/menu_items/tempura.png\",\n  \"fish\": \"../assets/menu_items/fish.png\",\n  \"tamago\": \"../assets/menu_items/tamago.png\",\n  \"meatballs\": \"../assets/menu_items/meatballs.png\",\n  \"sushi-roll\": \"../assets/menu_items/sushi-roll.png\"\n};\n\nclass MenuItem {\n  constructor(id, imagePath){\n    this.id = id;\n    this.imagePath = imagePath;\n  }\n\n  render(){\n    let img = document.createElement(\"img\");\n    img.src = this.imagePath;\n    img.alt = `${this.id}-icon`;\n    return img;\n  }\n}\n\nclass Menu {\n  constructor() {\n    this.menu = [];\n\n    this.generateMenu();\n  }\n\n  generateMenu() {\n    let menuItems = Array.from( document.getElementsByClassName(\"menu-item\") );\n    menuItems.forEach(item => {\n      let itemId = item.id;\n      let menuItem = new MenuItem(itemId, MENU_ITEMS[itemId]);\n      this.menu.push(menuItem);\n      item.appendChild(menuItem.render());\n    }); \n  }\n}\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/*! exports provided: CUSTOMERS, Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CUSTOMERS\", function() { return CUSTOMERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Order\", function() { return Order; });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _src_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/timer */ \"./src/timer.js\");\n\n\n\nconst CUSTOMERS = {\n  1: \"../assets/customers/customer_1.png\",\n  2: \"../assets/customers/customer_2.png\",\n  3: \"../assets/customers/customer_3.png\",\n  4: \"../assets/customers/customer_4.png\",\n  5: \"../assets/customers/customer_5.png\"\n};\n\nclass Order {\n  constructor(numItems, numSeconds){\n    this.numItems = numItems;\n    this.order = [];\n    this.timer = new _src_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](numSeconds);\n\n    this.generateOrder();\n    this.generateCustomer();\n    this.generateSpeechBubble();\n    this.renderOrder();\n    this.startTimer();\n  }\n\n  generateOrder() {\n    let menuOptions = Object.keys(_menu__WEBPACK_IMPORTED_MODULE_0__[\"MENU_ITEMS\"]);\n    let numOptions = menuOptions.length;\n\n    for (let i = 1; i <= this.numItems; i ++) {\n      let idx = Math.floor(Math.random() * numOptions );\n      this.order.push(menuOptions[idx]);\n    }\n  }\n\n  generateCustomer() {\n    let customerOptions = [1, 2, 3, 4, 5];\n    let idx = customerOptions[ Math.floor(Math.random() * 5) ];\n    let img = document.createElement(\"img\");\n    img.src = CUSTOMERS[idx];\n    img.alt = \"customer-icon\";\n    let customerContainer = document.getElementById(\"customer-container\");\n    customerContainer.appendChild(img);\n  }\n\n  generateSpeechBubble() {\n    let speechContainer = document.getElementById(\"speech-container\");\n    let speechBubble = document.createElement(\"div\");\n    speechBubble.classList.add(\"speech-bubble\");\n    speechContainer.appendChild(speechBubble);\n  }\n\n  generateOrderItem(id) {\n    let img = document.createElement(\"img\");\n    img.src = _menu__WEBPACK_IMPORTED_MODULE_0__[\"MENU_ITEMS\"][id];\n    img.alt = `${id}-icon`;\n    return img;\n  }\n\n  startTimer() {\n    let timerContainer = document.getElementById(\"timer-container\");\n    let timer = document.createElement(\"div\");\n    timer.id = \"timer\";\n    timer.innerHTML = this.timer.count;\n    timerContainer.appendChild(timer);\n    this.timer.start();\n  }\n\n  renderOrder() {\n    let orderContainer = document.createElement(\"div\");\n    orderContainer.classList.add(\"order-container\");\n    orderContainer.classList.add(`box-${this.numItems}`);\n\n    this.order.forEach(item => {\n      let orderItem = document.createElement(\"div\");\n      orderItem.classList.add(\"order-item\");\n      orderItem.appendChild(this.generateOrderItem(item));\n      orderContainer.appendChild(orderItem);\n    });\n    let speechContainer = document.getElementById(\"speech-container\");\n    speechContainer.appendChild(orderContainer);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/order.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Timer {\n  constructor(numSeconds) {\n    this.interval = undefined;\n    this.countFrom = numSeconds;\n    this.count = this.countFrom;\n  }\n\n  start() {\n    if (this.interval) {\n      clearInterval(this.interval);\n    }\n    this.count = this.countFrom;\n    this.interval = setInterval((this.tick).bind(this), 1000);\n  }\n\n  stop() {\n    clearInterval(this.interval);\n  }\n\n  tick() {\n    this.count -= 1;\n    if (this.count <= 0) {\n      this.count = 0;\n      clearInterval(this.interval);\n      setTimeout(() => alert(\"you lose\"), 1000 );\n      // game.flow.gameOver();\n    }\n    let timer = document.getElementById(\"timer\");\n    timer.innerHTML = this.count;\n    // update the view\n    // var progress = this.count / this.countFrom * 100;\n    // this.progressView.style.width = progress + \"%\";\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n\n// (function () {\n//   var game = this.colorQuestGame = this.colorQuestGame || {};\n\n//   game.timer = {\n//     interval: undefined,\n//     countFrom: 60, // second\n//     count: this.countFrom,\n//     // progressView: document.getElementById('timer'),\n\n//     restart: function () {\n//       if (this.interval) {\n//         clearInterval(this.interval);\n//       }\n//       this.count = this.countFrom;\n//       this.interval = setInterval((this.tick).bind(this), 1000);\n//     },\n\n//     stop: function () {\n//       clearInterval(this.interval);\n//     },\n\n//     tick: () => {\n//       this.count -= 1;\n//       if (this.count <= 0) {\n//         this.count = 0;\n//         clearInterval(this.interval);\n//         game.flow.gameOver();\n//       }\n//       // update the view\n//       var progress = this.count / this.countFrom * 100;\n//       this.progressView.style.width = progress + \"%\";\n//     }\n//   }\n// })();\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ })

/******/ });