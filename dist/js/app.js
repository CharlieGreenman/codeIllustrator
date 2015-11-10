/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @constructor
	 * @param {string} title - Pixelator
	 * @param {string} author - Charlie Greenman
	 */
	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _utilsJs = __webpack_require__(1);

	var _utilsJs2 = _interopRequireDefault(_utilsJs);

	var _gridJs = __webpack_require__(2);

	var _gridJs2 = _interopRequireDefault(_gridJs);

	var _whenClickedJs = __webpack_require__(4);

	var _whenClickedJs2 = _interopRequireDefault(_whenClickedJs);

	var _conversionJs = __webpack_require__(5);

	var _conversionJs2 = _interopRequireDefault(_conversionJs);

	var _jsConversionJs = __webpack_require__(6);

	var _jsConversionJs2 = _interopRequireDefault(_jsConversionJs);

	var _controlViewJs = __webpack_require__(7);

	var _controlViewJs2 = _interopRequireDefault(_controlViewJs);

	var _elemJs = __webpack_require__(3);

	var _elemJs2 = _interopRequireDefault(_elemJs);

	var s,
	    x,
	    y,
	    z,
	    colorNum = 0,
	    arrMap = [],
	    c = document.getElementById("canvasGrid"),
	    ctx = c.getContext("2d"),
	    bitIllustrator = {
	  init: function init() {
	    bitIllustrator.bindActions();
	  },

	  bindActions: function bindActions() {
	    _elemJs2["default"].s.createGrid.addEventListener("click", function () {
	      bitIllustrator.updatedSettings();
	      bitIllustrator.hideShow();
	      bitIllustrator.resizeGrid();
	      _gridJs2["default"].createGridIllustrator();
	    });
	    _elemJs2["default"].el.viewButton.addEventListener("click", function () {
	      _controlViewJs2["default"].removeTiles();
	      _controlViewJs2["default"].addBackTiles();
	    });
	    _elemJs2["default"].el.drawButton.addEventListener("click", function () {
	      _controlViewJs2["default"].removeTiles();
	      _gridJs2["default"].createGridIllustrator();
	      _controlViewJs2["default"].redoGrid();
	    });
	    _elemJs2["default"].s.resetButton.addEventListener("click", _controlViewJs2["default"].resetButton, false);
	    c.addEventListener("click", function () {
	      _gridJs2["default"].handleClick();
	      _whenClickedJs2["default"].addColors();
	      _whenClickedJs2["default"].convertToArray();
	      //I would like the following code to be cleaner if possible
	      if (_elemJs2["default"].s.codeBox.classList.contains("css_box")) {
	        _whenClickedJs2["default"].convertToCss();
	      } else if (_elemJs2["default"].s.codeBox.classList.contains("sass_box")) {
	        _conversionJs2["default"].addSassVariables();
	        _conversionJs2["default"].convertToSass();
	      } else if (_elemJs2["default"].s.codeBox.classList.contains("less_box")) {
	        _conversionJs2["default"].addLessVariables();
	        _conversionJs2["default"].convertToLess();
	      } else {
	        _jsConversionJs2["default"].addEmptyArrayMap();
	        _jsConversionJs2["default"].addArrayMap();
	        _jsConversionJs2["default"].addArrMapCode();
	        _jsConversionJs2["default"].addColorMap();
	        bitIllustrator.convertToJs();
	      }
	    });
	    _elemJs2["default"].el.cssToggle.addEventListener("click", function () {
	      _whenClickedJs2["default"].convertToCss();
	    });
	    _elemJs2["default"].el.sassToggle.addEventListener("click", function () {
	      _conversionJs2["default"].addSassVariables();
	      _conversionJs2["default"].convertToSass();
	    });
	    _elemJs2["default"].el.lessToggle.addEventListener("click", function () {
	      _conversionJs2["default"].addLessVariables();
	      _conversionJs2["default"].convertToLess();
	    });
	    _elemJs2["default"].el.hexColor.addEventListener("input", function () {
	      bitIllustrator.pickHexColor();
	    });
	    //consider revision
	    for (var i = 0; i < 3; i++) {
	      _elemJs2["default"].el.rgb[i].addEventListener("input", bitIllustrator.pickRgbColor, false);
	    }
	    _elemJs2["default"].el.jsToggle.addEventListener("click", function () {
	      _jsConversionJs2["default"].addEmptyArrayMap();
	      _jsConversionJs2["default"].addArrayMap();
	      _jsConversionJs2["default"].addArrMapCode();
	      _jsConversionJs2["default"].addColorMap();
	      bitIllustrator.convertToJs();
	    });
	  },

	  updatedSettings: function updatedSettings() {
	    _elemJs2["default"].s.rowCount = document.getElementById("input-for-rows").value;
	    _elemJs2["default"].s.columnCount = document.getElementById("input-for-columns").value;
	    _elemJs2["default"].s.pixSize = document.getElementById("input-for-pixel-size").value;
	  },

	  hideShow: function hideShow() {
	    _elemJs2["default"].s.chooseSizeContainer.style.display = "none";
	    _elemJs2["default"].el.colorPicker.style.display = "block";
	    _elemJs2["default"].el.headerContainer.style.display = "block";
	    _elemJs2["default"].s.canvas.style.display = "block";
	  },

	  resizeGrid: function resizeGrid() {
	    _elemJs2["default"].s.canvas.width = _elemJs2["default"].s.columnCount * _elemJs2["default"].s.pixSize;
	    _elemJs2["default"].s.canvas.height = _elemJs2["default"].s.rowCount * _elemJs2["default"].s.pixSize;
	    _elemJs2["default"].s.canvas.style.marginLeft = -(_elemJs2["default"].s.columnCount * _elemJs2["default"].s.pixSize) / 2 + "px";
	  },

	  pickHexColor: function pickHexColor() {
	    var newHexValue = _elemJs2["default"].el.hexColor.value;

	    _elemJs2["default"].el.colorBar.style.background = newHexValue;

	    _elemJs2["default"].el.red.value = _utilsJs2["default"].hexToRgb(newHexValue).r;
	    _elemJs2["default"].el.green.value = _utilsJs2["default"].hexToRgb(newHexValue).g;
	    _elemJs2["default"].el.blue.value = _utilsJs2["default"].hexToRgb(newHexValue).b;
	  },

	  pickRgbColor: function pickRgbColor() {
	    _elemJs2["default"].el.hexColor.value = _utilsJs2["default"].rgbToHex(parseFloat(_elemJs2["default"].el.red.value), parseFloat(_elemJs2["default"].el.green.value), parseFloat(_elemJs2["default"].el.blue.value));
	    _elemJs2["default"].el.colorBar.style.background = _elemJs2["default"].el.hexColor.value;
	  },

	  convertToJs: function convertToJs() {
	    _elemJs2["default"].el.codeBox.classList.remove("css_box", "sass_box", "less_box");
	    _elemJs2["default"].el.codeBox.classList.add("js_box");
	  }
	};

	bitIllustrator.init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var utils = {
	  compare: function compare(a, b) {

	    if (parseFloat(a[0]) - parseFloat(b[0]) === 0) {
	      return parseFloat(a[1]) - parseFloat(b[1]);
	    } else {
	      return parseFloat(a[0]) - parseFloat(b[0]);
	    }
	  },
	  //used http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	  hexToRgb: function hexToRgb(hex) {
	    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
	      return r + r + g + g + b + b;
	    });

	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    return result ? {
	      r: parseInt(result[1], 16),
	      g: parseInt(result[2], 16),
	      b: parseInt(result[3], 16)
	    } : null;
	  },
	  componentToHex: function componentToHex(c) {
	    var hex = c.toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
	  },
	  rgbToHex: function rgbToHex(r, g, b) {
	    return "#" + utils.componentToHex(r) + utils.componentToHex(g) + utils.componentToHex(b);
	  }
	};

	exports["default"] = utils;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _elemJs = __webpack_require__(3);

	var _elemJs2 = _interopRequireDefault(_elemJs);

	var s,
	    x,
	    y,
	    z,
	    colorNum = 0,
	    arrMap = [],
	    c = document.getElementById("canvasGrid"),
	    ctx = c.getContext("2d");

	var grid = {

	    //create grid and create boxes
	    createGridIllustrator: function createGridIllustrator() {
	        //module for creating a grid

	        for (var r = 0; r < _elemJs2["default"].s.columnCount; r++) {
	            for (var i = 0; i < _elemJs2["default"].s.rowCount; i++) {
	                ctx.strokeStyle = "#445751";
	                ctx.strokeRect(r * _elemJs2["default"].s.pixSize, i * _elemJs2["default"].s.pixSize, _elemJs2["default"].s.pixSize, _elemJs2["default"].s.pixSize);
	                ctx.fillStyle = "rgba(62, 71, 74, 1)";
	                ctx.fillRect(r * _elemJs2["default"].s.pixSize + 1, i * _elemJs2["default"].s.pixSize + 1, _elemJs2["default"].s.pixSize - 2, _elemJs2["default"].s.pixSize - 2);
	            }
	        }
	    },

	    //allow individual boxes to be clicked
	    // handleClick is still in prototyping phase
	    handleClick: function handleClick(e) {
	        e = e || window.event;
	        var xVal = Math.floor(e.offsetX / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize;
	        var yVal = Math.floor(e.offsetY / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize;
	        ctx.fillStyle = _elemJs2["default"].el.hexColor.value;
	        //get the color for the box clicked on
	        var imgData = ctx.getImageData(Math.floor(e.offsetX / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize + 1, Math.floor(e.offsetY / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize + 1, _elemJs2["default"].s.pixSize - 2, _elemJs2["default"].s.pixSize - 2);
	        //if it is the background grey/gray remove it
	        //currently does not work with color change
	        if (imgData.data[0] !== 62 && imgData.data[1] !== 71 && imgData.data[2] !== 74) {
	            ctx.fillStyle = "rgba(62, 71, 74, 1)";
	            ctx.clearRect(Math.floor(e.offsetX / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize + 1, Math.floor(e.offsetY / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize + 1, _elemJs2["default"].s.pixSize - 2, _elemJs2["default"].s.pixSize - 2);
	            ctx.fillRect(Math.floor(e.offsetX / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize + 1, Math.floor(e.offsetY / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize + 1,
	            //accomodate for 2 px border
	            //need to put in a variable down the line
	            _elemJs2["default"].s.pixSize - 2, _elemJs2["default"].s.pixSize - 2);
	            //elem.s.storeValues.indexOf([xVal, yVal, elem.el.hexColor.value]).pop();
	            //this return false is causing wonky behavior, should look into it
	            return false;
	        }

	        ctx.fillRect(Math.floor(e.offsetX / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize + 1, Math.floor(e.offsetY / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize + 1,
	        //accomodate for 2 px border
	        //need to put in a variable down the line
	        _elemJs2["default"].s.pixSize - 2, _elemJs2["default"].s.pixSize - 2);
	    }
	};

	exports["default"] = grid;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var elem = {
	    el: {
	        codeBoxContainer: document.getElementById("code_box_container"),
	        headerContainer: document.getElementById("header-container"),
	        colorPicker: document.getElementById("color-picker"),
	        codeBox: document.getElementById("code_box"),
	        innerCodeBox: document.getElementById("inner_code_box"),
	        cssToggle: document.getElementById("css_toggle"),
	        sassToggle: document.getElementById("sass_toggle"),
	        lessToggle: document.getElementById("less_toggle"),
	        jsToggle: document.getElementById("js_toggle"),
	        viewButton: document.getElementById("view-button"),
	        drawButton: document.getElementById("draw-button"),
	        codeBoxToggle: document.getElementById("code_box_toggle"),
	        hexColor: document.getElementById("hex_color"),
	        colorBar: document.getElementById("color_bar"),
	        rgb: document.querySelectorAll(".rgb"),
	        red: document.getElementById("red"),
	        green: document.getElementById("green"),
	        blue: document.getElementById("blue")
	    },
	    //settings
	    s: {
	        resetButton: document.getElementById("reset-button"),
	        chooseSizeContainer: document.getElementById("choose_size_container"),
	        canvas: document.getElementById("canvasGrid"),
	        createGrid: document.getElementById("create_grid"),
	        rowCount: document.getElementById("input-for-rows").value,
	        columnCount: document.getElementById("input-for-columns").value,
	        pixSize: document.getElementById("input-for-pixel-size").value,
	        codeBox: document.getElementById("code_box"),
	        storeValues: [],
	        storeColors: [],
	        sassColorVariables: [],
	        lessColorVariables: []
	    }
	};

	exports["default"] = elem;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _elemJs = __webpack_require__(3);

	var _elemJs2 = _interopRequireDefault(_elemJs);

	var _utilsJs = __webpack_require__(1);

	var _utilsJs2 = _interopRequireDefault(_utilsJs);

	var hndClck = {
	    //create a color array for sass variables
	    // in order to enable color1, color2, etc...
	    addColors: function addColors() {
	        //only add value if it is a new color
	        if (_elemJs2["default"].s.storeColors.length > 0 && _elemJs2["default"].s.storeColors.indexOf(_elemJs2["default"].el.hexColor.value) > -1) {
	            return;
	        } else {
	            var colorNum = 0;
	            colorNum++;
	            _elemJs2["default"].s.storeColors.push(_elemJs2["default"].el.hexColor.value);
	            _elemJs2["default"].s.sassColorVariables.push("$color " + colorNum);
	            _elemJs2["default"].s.lessColorVariables.push("$color " + colorNum);
	        }
	    },
	    /* create multi-dimensional array
	     that is sorted by x value */
	    convertToArray: function convertToArray(e) {
	        e = e || window.event;
	        var xVal = Math.floor(e.offsetX / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize;
	        var yVal = Math.floor(e.offsetY / _elemJs2["default"].s.pixSize) * _elemJs2["default"].s.pixSize;

	        _elemJs2["default"].s.storeValues.push([xVal, yVal, _elemJs2["default"].el.hexColor.value]);

	        for (var i = 0; i < 2; i++) {
	            _elemJs2["default"].s.storeValues[_elemJs2["default"].s.storeValues.length - 1][i] += "px";
	        }

	        for (var io = 0; io < _elemJs2["default"].s.storeValues.length - 1; io++) {
	            //decided it made more sense to remove pushed value in array and then to parse through and remove value
	            //used this stackoverflow http://stackoverflow.com/questions/26635297/how-to-remove-an-array-from-a-multidimensional-array-if-it-exists-in-another-mul
	            if (JSON.stringify(_elemJs2["default"].s.storeValues[io][0] + _elemJs2["default"].s.storeValues[io][1]) === JSON.stringify(_elemJs2["default"].s.storeValues[_elemJs2["default"].s.storeValues.length - 1][0] + _elemJs2["default"].s.storeValues[_elemJs2["default"].s.storeValues.length - 1][1])) {
	                //remove value if it already exists, if statement above does not focus on color
	                _elemJs2["default"].s.storeValues.splice(io, 1);
	                _elemJs2["default"].s.storeValues.splice(_elemJs2["default"].s.storeValues.length - 1, 1);
	            }
	        }

	        _elemJs2["default"].s.storeValues.sort(_utilsJs2["default"].compare);
	    },
	    convertToCss: function convertToCss() {
	        _elemJs2["default"].el.codeBox.classList.remove("sass_box", "less_box", "js_box");
	        _elemJs2["default"].el.codeBox.classList.add("css_box");

	        /* reset value for elem.codeBox */
	        _elemJs2["default"].el.codeBox.innerHTML = "box-shadow: ";
	        /* instead of re-inserting value, need to think of how to do this */
	        for (var abc = 0; abc < _elemJs2["default"].s.storeValues.length; abc++) {
	            if (abc === _elemJs2["default"].s.storeValues.length - 1) {
	                _elemJs2["default"].el.codeBox.innerHTML += _elemJs2["default"].s.storeValues[abc].join(" ") + ";";
	            } else {
	                _elemJs2["default"].el.codeBox.innerHTML += _elemJs2["default"].s.storeValues[abc].join(" ") + ", ";
	            }
	        }
	    }

	};

	exports["default"] = hndClck;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _elemJs = __webpack_require__(3);

	var _elemJs2 = _interopRequireDefault(_elemJs);

	var convert = {
	    addSassVariables: function addSassVariables() {
	        _elemJs2["default"].el.codeBox.classList.remove("css_box", "less_box", "js_box");
	        _elemJs2["default"].el.codeBox.classList.add("sass_box");

	        _elemJs2["default"].el.innerCodeBox.innerHTML = "$num: " + _elemJs2["default"].s.pixSize + ";<br>";
	        for (var avi = 0; avi < _elemJs2["default"].s.storeColors.length; avi++) {
	            _elemJs2["default"].el.innerCodeBox.innerHTML += " $colors" + avi + ": " + _elemJs2["default"].s.storeColors[avi] + ";";
	        }

	        _elemJs2["default"].el.innerCodeBox.innerHTML += "<br>";

	        for (var x = 0; x < _elemJs2["default"].s.colçumnCount; x++) {
	            _elemJs2["default"].el.innerCodeBox.innerHTML += "$X" + x + ": $num*" + x + "px; ";
	        }
	        _elemJs2["default"].el.codeBox.innerHTML += "$num: " + _elemJs2["default"].s.pixSize + ";<br>";
	        for (var y = 0; y < _elemJs2["default"].s.columnCount; y++) {
	            _elemJs2["default"].el.innerCodeBox.innerHTML += "$O" + x + ": $num*" + x + "px; ";
	        }
	        _elemJs2["default"].el.innerCodeBox.innerHTML += "<br><br>";
	    },

	    convertToSass: function convertToSass() {

	        _elemJs2["default"].el.innerCodeBox.innerHTML += "box-shadow: ";
	        for (var x = 0; x < _elemJs2["default"].s.storeValues.length; x++) {
	            _elemJs2["default"].el.innerCodeBox.innerHTML += " $X" + parseFloat(_elemJs2["default"].s.storeValues[x][0]) / _elemJs2["default"].s.pixSize;
	            _elemJs2["default"].el.innerCodeBox.innerHTML += " $O" + parseFloat(_elemJs2["default"].s.storeValues[x][1]) / _elemJs2["default"].s.pixSize;
	            //need to add support with name that color

	            for (var y = 0; y < _elemJs2["default"].s.storeColors.length; y++) {
	                if (_elemJs2["default"].s.storeValues[x][2] === _elemJs2["default"].s.storeColors[y]) {
	                    _elemJs2["default"].el.innerCodeBox.innerHTML += " " + _elemJs2["default"].s.sassColorVariables[y];
	                }
	            }
	            if (x === _elemJs2["default"].s.storeValues.length - 1) {
	                _elemJs2["default"].el.innerCodeBox.innerHTML += ";";
	            } else {
	                _elemJs2["default"].el.innerCodeBox.innerHTML += ",";
	            }
	        }
	    },

	    addLessVariables: function addLessVariables() {
	        _elemJs2["default"].el.innerCodeBox.classList.remove("css_box", "sass_box", "js_box");
	        _elemJs2["default"].el.innerCodeBox.classList.add("less_box");

	        _elemJs2["default"].el.innerCodeBox.innerHTML = "@num:" + _elemJs2["default"].s.pixSize + ";<br>";

	        for (var x = 0; x < _elemJs2["default"].s.storeColors.length; x++) {
	            _elemJs2["default"].el.innerCodeBox.innerHTML += "@colors" + x + ": " + _elemJs2["default"].s.storeColors[x] + ";";
	        }

	        _elemJs2["default"].el.innerCodeBox.innerHTML += "<br>";

	        for (var x = 0; x < _elemJs2["default"].s.columnCount; x++) {
	            _elemJs2["default"].el.innerCodeBox.innerHTML += "@X" + x + ": @num*" + x + "px; ";
	        }
	        _elemJs2["default"].el.innerCodeBox.innerHTML += "$num: " + _elemJs2["default"].s.pixSize + ";<br>";
	        for (var y = 0; y < _elemJs2["default"].s.columnCount; y++) {
	            _elemJs2["default"].el.innerCodeBox.innerHTML += "@O" + x + ": @num*" + x + "px; ";
	        }
	        _elemJs2["default"].el.innerCodeBox.innerHTML += "<br><br>";
	    },

	    convertToLess: function convertToLess() {
	        _elemJs2["default"].el.innerCodeBox.innerHTML += "box-shadow: ";
	        for (var xyz = 0; xyz < _elemJs2["default"].s.storeValues.length; xyz++) {
	            _elemJs2["default"].el.innerCodeBox.innerHTML += " @X" + parseFloat(_elemJs2["default"].s.storeValues[xyz][0]) / _elemJs2["default"].s.pixSize;
	            _elemJs2["default"].el.innerCodeBox.innerHTML += " @O" + parseFloat(_elemJs2["default"].s.storeValues[xyz][1]) / _elemJs2["default"].s.pixSize;

	            for (var avi = 0; avi < _elemJs2["default"].s.storeColors.length; avi++) {
	                if (_elemJs2["default"].s.storeValues[xyz][2] === _elemJs2["default"].s.storeColors[avi]) {
	                    _elemJs2["default"].el.innerCodeBox.innerHTML += " " + _elemJs2["default"].s.lessColorVariables[avi];
	                }
	            }

	            if (xyz === _elemJs2["default"].s.storeValues.length - 1) {
	                _elemJs2["default"].el.innerCodeBox.innerHTML += ";";
	            } else {
	                _elemJs2["default"].el.innerCodeBox.innerHTML += ",";
	            }
	        }
	    }
	};

	exports["default"] = convert;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _elemJs = __webpack_require__(3);

	var _elemJs2 = _interopRequireDefault(_elemJs);

	var _utilsJs = __webpack_require__(1);

	var _utilsJs2 = _interopRequireDefault(_utilsJs);

	var arrMap = [],
	    x,
	    y,
	    z;

	var convertJS = {

	    addEmptyArrayMap: function addEmptyArrayMap() {
	        _elemJs2["default"].el.codeBox.innerHTML = "var canvas, ctx, tileSize = " + _elemJs2["default"].s.pixSize + ", map = [<br> ";
	        _elemJs2["default"].el.codeBox.innerHTML += "[";
	        arrMap = [];
	        //initialize the array map
	        for (x = 0; x < _elemJs2["default"].s.rowCount; x++) {
	            arrMap.push([]);
	        }
	        // populate initial array map
	    },

	    addArrayMap: function addArrayMap() {
	        // create a dynamic array map
	        for (x = 0; x < _elemJs2["default"].s.rowCount; x++) {
	            for (y = 0; y < _elemJs2["default"].s.columnCount; y++) {
	                arrMap[y].push(0);
	                for (z = 0; z < _elemJs2["default"].s.storeValues.length; z++) {
	                    //tells us value needs to be changed
	                    if (x === parseFloat(_elemJs2["default"].s.storeValues[z][0]) / _elemJs2["default"].s.pixSize && y === parseFloat(_elemJs2["default"].s.storeValues[z][1]) / _elemJs2["default"].s.pixSize) {
	                        //tells us what it should be changed to
	                        arrMap[y][x] = _elemJs2["default"].s.storeColors.indexOf(_elemJs2["default"].s.storeValues[z][2]) + 1;
	                    }
	                }
	            }
	        }

	        //create a new line once the app continues to the next line
	        //test to see if I can change value of  arrMap[1][1] = 3;
	        arrMap[_elemJs2["default"].s.columnCount - 1] += "]";
	        arrMap[_elemJs2["default"].s.columnCount - 1] += "<br>],";
	        _elemJs2["default"].el.codeBox.innerHTML += arrMap.join("],<br />[");
	    },

	    // make to add a pre tag, so that it actually treats code as code
	    // and it makes a line break
	    addArrMapCode: function addArrMapCode() {
	        _elemJs2["default"].el.codeBox.innerHTML += "\n       <pre> arrMap = {\n      Color: function(r, g, b, a) {\n\n          this.r = r;\n          this.g = g;\n          this.b = b;\n          this.a = a;\n\n          this.toString = function() {\n\n              return \"rgba(\" + this.r + \",\" + this.g + \",\" + this.b + \",\" + this.a + \")\";\n          }\n\n      },\n\n      draw: function(){\n        for(var y = 0; y < map.length; y++) {\n          for(var x = 0; x < map.length; x++) {\n            ctx.fillStyle = colors[map[y][x]].toString();\n            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);\n          }\n        }\n      },\n      init: function(){\n        canvas = document.getElementById(\"canvas\");\n        canvas.width = window.outerWidth;\n        canvas.height = window.outerHeight;\n        ctx = canvas.getContext(\"2d\");\n\n        window.setInterval(function() {\n\n            arrMap.draw();\n        }, 1000 / 30);\n      }\n    };\n\n       </pre>";
	    },

	    addColorMap: function addColorMap() {
	        _elemJs2["default"].el.codeBox.innerHTML += "var colors = [ \" \",";
	        for (x = 0; x < _elemJs2["default"].s.storeColors.length; x++) {
	            _elemJs2["default"].el.codeBox.innerHTML += "new arrMap.Color(" + _utilsJs2["default"].hexToRgb(_elemJs2["default"].s.storeColors[x]).r + "," + _utilsJs2["default"].hexToRgb(_elemJs2["default"].s.storeColors[x]).g + "," + _utilsJs2["default"].hexToRgb(_elemJs2["default"].s.storeColors[x]).b + ", 1)";
	            if (x === _elemJs2["default"].s.storeColors.length - 1) {
	                _elemJs2["default"].el.codeBox.innerHTML += '';
	            } else {
	                _elemJs2["default"].el.codeBox.innerHTML += ", ";
	            }
	        }

	        _elemJs2["default"].el.codeBox.innerHTML += "];<pre>\n     arrMap.init();</pre>\n     ";
	    }
	};

	exports["default"] = convertJS;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _elemJs = __webpack_require__(3);

	var _elemJs2 = _interopRequireDefault(_elemJs);

	var s,
	    x,
	    y,
	    z,
	    colorNum = 0,
	    arrMap = [],
	    c = document.getElementById("canvasGrid"),
	    ctx = c.getContext("2d");

	var cntrlView = {
	    removeTiles: function removeTiles() {
	        _elemJs2["default"].s.canvas.style.background = "none";
	        for (var x = 0; x < _elemJs2["default"].s.columnCount; x++) {
	            for (var y = 0; y < _elemJs2["default"].s.rowCount; y++) {
	                ctx.clearRect(x * _elemJs2["default"].s.pixSize, y * _elemJs2["default"].s.pixSize, _elemJs2["default"].s.pixSize, _elemJs2["default"].s.pixSize);
	            }
	        }
	    },

	    addBackTiles: function addBackTiles() {
	        for (x = 0; x < _elemJs2["default"].s.storeValues.length; x++) {
	            ctx.fillStyle = _elemJs2["default"].s.storeValues[x][2];
	            ctx.fillRect(parseFloat(_elemJs2["default"].s.storeValues[x][0]), parseFloat(_elemJs2["default"].s.storeValues[x][1]), _elemJs2["default"].s.pixSize, _elemJs2["default"].s.pixSize);
	        }
	    },

	    redoGrid: function redoGrid() {
	        for (x = 0; x < _elemJs2["default"].s.storeValues.length; x++) {
	            ctx.fillStyle = _elemJs2["default"].s.storeValues[x][2];
	            ctx.fillRect(parseFloat(_elemJs2["default"].s.storeValues[x][0]) + 1, parseFloat(_elemJs2["default"].s.storeValues[x][1]) + 1, _elemJs2["default"].s.pixSize - 2, _elemJs2["default"].s.pixSize - 2);
	        }
	    },
	    resetButton: function resetButton() {
	        if (_elemJs2["default"].s.resetButton.classList.contains("warning")) {
	            location.reload();
	        } else {
	            _elemJs2["default"].s.resetButton.classList.add("warning");
	        }
	    }
	};

	exports["default"] = cntrlView;
	module.exports = exports["default"];

/***/ }
/******/ ]);