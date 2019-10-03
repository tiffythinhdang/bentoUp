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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ \"./src/order.js\");\n\n\n\nclass Bento {\n  constructor(numItems, order) {\n    this.numItems = numItems;\n    this.order = order;\n    this.bento = [];\n\n    this.generateBento();\n  }\n\n  generateBento() {\n    let bentoContainer = document.getElementById(\"bento-container\");\n    let bento = document.createElement(\"div\");\n    bento.id = \"bento\";\n\n    if (this.numItems === 4) {\n      bento.classList.add(\"bento-4\");\n    } else if (this.numItems === 6) {\n      bento.classList.add(\"bento-6\");\n    }\n\n    for (let i = 1; i <= this.numItems; i++ ) {\n      let bentoItem = document.createElement(\"div\");\n      bentoItem.classList.add(\"bento-item\");\n      bentoItem.classList.add(`${i}`);\n      bento.appendChild(bentoItem);\n    }\n\n    bentoContainer.appendChild(bento);\n  }\n\n  deleteBento() {\n    document.getElementById(\"bento-container\").innerHTML = \"\";\n  }\n\n  addItem(item) {\n    this.bento.push(item);\n    this.render();\n  }\n\n  removeItem() {\n    this.bento.pop();\n    this.render();\n  }\n\n  render() {\n    for (let i = 1; i <= this.numItems; i++) {\n      let bentoItem = document.getElementsByClassName(`bento-item ${i}`)[0];\n      bentoItem.innerHTML = \"\";\n      let item = this.bento[i - 1];\n      if (!item) break;\n      let img = document.createElement(\"img\");\n      img.src = _menu__WEBPACK_IMPORTED_MODULE_0__[\"MENU_ITEMS\"][item];\n      img.alt = `${item}-icon`;\n      bentoItem.appendChild(img);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bento);\n\n\n//# sourceURL=webpack:///./src/bento.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _bento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bento */ \"./src/bento.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ \"./src/order.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n\n\n\n\n\nconst KEY_MAPPING = {\n  \"a\": \"onigiri\",\n  \"w\": \"sashimi\",\n  \"e\": \"pickles\",\n  \"f\": \"tempura\",\n  \"j\": \"fish\",\n  \"i\": \"tamago\",\n  \"o\": \"meatballs\",\n  \";\": \"sushi-roll\"\n}\n\nclass Game {\n  constructor() {\n    this.menu = new _menu__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"]();\n    \n    let numItems = this.generateRandomNum();\n    this.order = new _order__WEBPACK_IMPORTED_MODULE_2__[\"Order\"](numItems, numItems === 4 ? 6 : 8 );\n    this.bento = new _bento__WEBPACK_IMPORTED_MODULE_1__[\"default\"](numItems, this.order);\n    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.order.numSeconds, this.checkState.bind(this));\n\n    this.score = 0;\n    this.customerLost = 0;\n\n    this.timeElapsed = 0;\n    this.interval = undefined;\n    this.addListenerOnWindow = this.addListenerOnWindow.bind(this);\n    this.removeListenerOnWindow = this.removeListenerOnWindow.bind(this);\n    this.addClickToMenuItems = this.addClickToMenuItems.bind(this);\n    this.tapItem = this.tapItem.bind(this);\n\n    this.renderScore();\n    this.start();\n  }\n\n  start() {\n    this.addListenerOnWindow();\n    this.addClickToMenuItems();\n    // this.interval = setInterval( this.checkState.bind(this), 1000 );\n    this.startTimer();\n  }\n\n  stop() {\n    // clearInterval(this.interval);\n  }\n\n  tapItem(e) {\n    let key = e.key;\n    if (key === \"Backspace\") {\n      game.bento.removeItem();\n      return;\n    }\n\n    let item = document.getElementById(`${KEY_MAPPING[key]}`);\n    if (!item) return;\n    item.classList.add(\"hover\");\n    game.bento.addItem(item.id);\n    this.checkState();\n  }\n\n  untapItem(e) {\n    let key = e.key;\n    let item = document.getElementById(`${KEY_MAPPING[key]}`);\n    if (!item) return;\n    item.classList.remove(\"hover\");\n  }\n\n  addListenerOnWindow() {\n    window.addEventListener(\"keydown\", this.tapItem );\n    window.addEventListener(\"keyup\", this.untapItem );\n  }\n\n  removeListenerOnWindow() {\n    window.removeEventListener(\"keydown\",this.tapItem);\n    window.removeEventListener(\"keyup\",this.untapItem);\n  }\n\n  addClickToMenuItems() {\n    let menuItems = Array.from( document.getElementsByClassName(\"menu-item\") );\n    menuItems.forEach(item => {\n      item.addEventListener(\"click\", () => {\n        this.bento.addItem(item.id);\n        this.checkState();\n      })\n    })\n  }\n\n  startTimer() {\n    let timerContainer = document.getElementById(\"timer-container\");\n    let timer = document.createElement(\"div\");\n    timer.id = \"timer\";\n    timer.innerHTML = this.timer.count;\n    timerContainer.appendChild(timer);\n    this.timer.start();\n  }\n\n  renderScore(){\n    let score = document.getElementById(\"score\")\n    score.innerHTML = (this.score > 1 ? `${this.score} orders` : `${this.score} order`);\n  }\n\n  correctBento() {\n    return JSON.stringify(this.order.order) === JSON.stringify(this.bento.bento);\n  }\n\n  checkState() {\n    if (this.lost()) {\n      this.stop();\n      this.renderEndMessage();\n      return;\n    }\n\n    if (this.timer.count > 0 && this.correctBento()) {\n      this.score += 1;\n      this.renderScore();\n\n      this.deleteGameRound();\n      this.generateGameRound();\n\n    } else if ( this.timer.count <= 0 && !this.correctBento() ) {\n      this.customerLost += 1;\n      this.renderCustomerLost();\n\n      if (this.lost()) {\n        this.stop();\n        this.renderEndMessage();\n        this.timer.stop();\n        return;\n      }\n      this.deleteGameRound();\n      this.generateGameRound();\n    }\n  }\n\n  generateRandomNum() {\n    let num = [4, 6];\n    let idx = Math.floor(Math.random() * 2);\n    return num[idx];\n  }\n\n  deleteGameRound() {\n    this.bento.deleteBento();\n    let customer = document.getElementsByClassName(\"animated bounceInRight\")[0];\n    customer.classList.remove(\"bounceInRight\");\n    customer.classList.add(\"lightSpeedOut\");\n    this.order.deleteOrder();\n    this.timer.stop();\n    this.timer.deleteTimer();\n  }\n\n  generateGameRound() {\n    let numItems = this.generateRandomNum();\n    this.order = new _order__WEBPACK_IMPORTED_MODULE_2__[\"Order\"](numItems, numItems === 4 ? 6 : 8);\n    this.bento = new _bento__WEBPACK_IMPORTED_MODULE_1__[\"default\"](numItems, this.order);\n    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.order.numSeconds, this.checkState.bind(this));\n    this.startTimer();\n  }\n\n  renderCustomerLost() {\n    let customerLost = document.getElementById(\"customer-lost\");\n    customerLost.innerHTML = \"\";\n    for (let i = 1; i <= this.customerLost; i++) {\n      let cross = document.createElement(\"img\");\n      cross.src = \"../assets/cross_mark.png\";\n      customerLost.appendChild(cross);\n    }\n  }\n\n  restart() {\n    document.getElementById(\"timer-container\").innerHTML = \"\";\n    document.getElementById(\"score\").innerHTML = \"\";\n    document.getElementById(\"customer-lost\").innerHTML = \"\";\n    this.order.deleteOrder();\n    this.bento.deleteBento();\n    this.menu.deleteMenu();\n\n    document.getElementById(\"modal\").classList.add(\"hidden\");\n\n    game = new Game();\n  }\n\n  lost() {\n    return this.customerLost >= 3;\n  }\n\n  renderEndMessage() {\n    const score = this.score;\n    \n    this.removeListenerOnWindow();\n    let message = document.getElementsByClassName(\"modal-message\")[0];\n    let ranking = document.getElementById(\"ranking\");\n    let finalScore = (score > 1 ? `${score} orders` : `${score} order`);\n    let rank;\n    if ( score >= 120 ) {\n      rank = \"Master Chef\";\n    } else if ( score >= 90 ) {\n      rank = \"Head Chef\";\n    } else if ( score >= 60 ) {\n      rank = \"Sous Chef\";\n    } else if (score >= 30) {\n      rank = \"Junior Chef\";\n    } else if (score >= 0) {\n      rank = \"Apprentice\";\n    }\n\n    message.innerHTML = `You served ${finalScore}!`;\n    ranking.innerHTML = `Rank: ${rank}`;\n    document.getElementById(\"modal\").classList.remove(\"hidden\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconsole.log(\"Webpack is working!\")\n\n// const Game = require(\"./game\");\n// const GameView = require(\"./game_view\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  let button = document.getElementById(\"play-again-button\");\n\n  button.addEventListener(\"click\", () => { \n    game.restart();\n  })\n\n  // test codes\n  window.menu = menu;\n  window.deleteBento = bento.deleteBento;\n  window.game = game;\n  window.removeListenerOnWindow = game.removeListenerOnWindow;\n  // test codes\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: MENU_ITEMS, MenuItem, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MENU_ITEMS\", function() { return MENU_ITEMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuItem\", function() { return MenuItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\nconst MENU_ITEMS = {\n  \"onigiri\": \"../assets/menu_items/onigiri.png\",\n  \"sashimi\": \"../assets/menu_items/sashimi.png\",\n  \"pickles\": \"../assets/menu_items/pickles.png\",\n  \"tempura\": \"../assets/menu_items/tempura.png\",\n  \"fish\": \"../assets/menu_items/fish.png\",\n  \"tamago\": \"../assets/menu_items/tamago.png\",\n  \"meatballs\": \"../assets/menu_items/meatballs.png\",\n  \"sushi-roll\": \"../assets/menu_items/sushi-roll.png\"\n};\n\nclass MenuItem {\n  constructor(id, imagePath){\n    this.id = id;\n    this.imagePath = imagePath;\n  }\n\n  render(){\n    let img = document.createElement(\"img\");\n    img.src = this.imagePath;\n    img.alt = `${this.id}-icon`;\n    return img;\n  }\n}\n\nclass Menu {\n  constructor() {\n    this.menu = [];\n\n    this.generateMenu();\n  }\n\n  generateMenu() {\n    let menuItems = Array.from( document.getElementsByClassName(\"menu-item\") );\n    menuItems.forEach(item => {\n      let itemId = item.id;\n      let menuItem = new MenuItem(itemId, MENU_ITEMS[itemId]);\n      this.menu.push(menuItem);\n      item.appendChild(menuItem.render());\n    }); \n  }\n\n  deleteMenu() {\n    Array.from(document.getElementById(\"menu\")\n      .getElementsByTagName(\"img\"))\n      .forEach(img => img.remove());\n    document.getElementById(\"modal\").classList.add(\"hidden\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/*! exports provided: CUSTOMERS, Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CUSTOMERS\", function() { return CUSTOMERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Order\", function() { return Order; });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _src_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/timer */ \"./src/timer.js\");\n\n\n\nconst CUSTOMERS = {\n  1: \"../assets/customers/customer_1.png\",\n  2: \"../assets/customers/customer_2.png\",\n  3: \"../assets/customers/customer_3.png\",\n  4: \"../assets/customers/customer_4.png\",\n  5: \"../assets/customers/customer_5.png\"\n};\n\nclass Order {\n  constructor(numItems, numSeconds){\n    this.numItems = numItems;\n    this.order = [];\n    this.numSeconds= numSeconds;\n    // this.timer = new Timer(numSeconds);\n\n    this.generateOrder();\n    this.generateCustomer();\n    this.generateSpeechBubble();\n    this.renderOrder();\n    // this.startTimer();\n  }\n\n  generateOrder() {\n    let menuOptions = Object.keys(_menu__WEBPACK_IMPORTED_MODULE_0__[\"MENU_ITEMS\"]);\n    let numOptions = menuOptions.length;\n\n    for (let i = 1; i <= this.numItems; i ++) {\n      let idx = Math.floor(Math.random() * numOptions );\n      this.order.push(menuOptions[idx]);\n    }\n  }\n\n  generateCustomer() {\n    let customerOptions = [1, 2, 3, 4, 5];\n    let idx = customerOptions[ Math.floor(Math.random() * 5) ];\n    let img = document.createElement(\"img\");\n    img.src = CUSTOMERS[idx];\n    img.alt = \"customer-icon\";\n    img.classList.add(\"animated\");\n    img.classList.add(\"bounceInRight\");\n    let customerContainer = document.getElementById(\"customer-container\");\n    customerContainer.appendChild(img);\n  }\n\n  generateSpeechBubble() {\n    let speechContainer = document.getElementById(\"speech-container\");\n    let speechBubble = document.createElement(\"div\");\n    speechBubble.classList.add(\"speech-bubble\");\n    speechContainer.appendChild(speechBubble);\n  }\n\n  generateOrderItem(id) {\n    let img = document.createElement(\"img\");\n    img.src = _menu__WEBPACK_IMPORTED_MODULE_0__[\"MENU_ITEMS\"][id];\n    img.alt = `${id}-icon`;\n    return img;\n  }\n\n  renderOrder() {\n    let orderContainer = document.createElement(\"div\");\n    orderContainer.classList.add(\"order-container\");\n    orderContainer.classList.add(`box-${this.numItems}`);\n\n    this.order.forEach(item => {\n      let orderItem = document.createElement(\"div\");\n      orderItem.classList.add(\"order-item\");\n      orderItem.appendChild(this.generateOrderItem(item));\n      orderContainer.appendChild(orderItem);\n    });\n    let speechContainer = document.getElementById(\"speech-container\");\n    speechContainer.appendChild(orderContainer);\n  }\n\n  deleteOrder() {\n    document.getElementById(\"speech-container\").innerHTML = \"\";\n    document.getElementById(\"customer-container\").innerHTML = \"\";\n  }\n}\n\n\n//# sourceURL=webpack:///./src/order.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Timer {\n  constructor(numSeconds, timerEndCallback) {\n    this.interval = undefined;\n    this.countFrom = numSeconds;\n    this.count = this.countFrom;\n\n    this.timerEndCallback = timerEndCallback;\n  }\n\n  start() {\n    if (this.interval) {\n      clearInterval(this.interval);\n    }\n    this.count = this.countFrom;\n    this.interval = setInterval((this.tick).bind(this), 1000);\n  }\n\n  stop() {\n    clearInterval(this.interval);\n  }\n\n  tick() {\n    this.count -= 1;\n    if (this.count <= 0) {\n      this.count = 0;\n      clearInterval(this.interval);\n      this.timerEndCallback();\n    }\n    let timer = document.getElementById(\"timer\");\n    timer.innerHTML = this.count;\n  }\n\n  deleteTimer() {\n    document.getElementById(\"timer\").remove();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n\n//# sourceURL=webpack:///./src/timer.js?");

/***/ })

/******/ });