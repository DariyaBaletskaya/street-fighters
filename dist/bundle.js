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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./src/javascript/app */ "./src/javascript/app.ts");
__webpack_require__(/*! ./src/styles/styles.css */ "./src/styles/styles.css");
new app_1.default();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Inconsolata|Akronim);", ""]);

// Module
exports.push([module.i, "html,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n\r\n    font-family: 'Inconsolata', monospace;\r\n    background: url('https://images.unsplash.com/photo-1495555775484-97f7c56a7ba9') no-repeat;\r\n    background-size: cover;\r\n    color: #FFBC42;\r\n}\r\n\r\n#root {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n#loading-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 18px;\r\n  background: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n/* Game settings block */\r\n\r\n.game-settings {\r\n    font-family: 'Akronim', cursive;\r\n    position:fixed;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n\r\n    top: 10px;\r\n    left: 50%;\r\n\r\n    height: 150px;\r\n    width: 400px;\r\n\r\n    margin-left: -200px;\r\n    padding: 2px;\r\n    \r\n    background-color: rgba(148, 40, 40, 0.849);\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n#fight-process {\r\n    visibility: hidden;\r\n}\r\n\r\n.game-lable {\r\n    width: 100%;\r\n    height: 1%;\r\n    text-align: center;\r\n    \r\n    font-family: 'Akronim', cursive;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/* Game process block */\r\n\r\n.indicator-wrapper {\r\n  font-family: 'Inconsolata', monospace;\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-basis: 50%;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.health-progress {\r\n    appearance: none;\r\n    padding: 0;\r\n    border: none;\r\n    border-radius: 0;\r\n  \r\n    display: block;\r\n    background-color: #3E4348;\r\n  \r\n    width: 80%;\r\n    height: 15px;\r\n}\r\n  \r\nprogress::-webkit-progress-bar {\r\n    background-color: #3E4348;\r\n}\r\n  \r\nprogress::-moz-progress-bar { \r\n    background-color: #FFBC42;\r\n}\r\n  \r\nprogress::-webkit-progress-value {\r\n    background-color: #FFBC42;\r\n}\r\n  \r\n.progress-bar {\r\n    background-color: #FFBC42;\r\n    display: block;\r\n    height: 100%;\r\n}\r\n\r\n\r\n/* Fighter's styles */\r\n\r\n.fighters {\r\n    font-family: 'Akronim', cursive;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex: 1;\r\n    flex-wrap: wrap;\r\n    padding: 0 15px;\r\n}\r\n\r\n.fighter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;  \r\n}\r\n\r\n.jump-animated {\r\n    -webkit-animation: jump 1s ease 0s 1 normal ; \r\n    animation: jump 1s ease 0s 1 normal ;\r\n}\r\n\r\n.fighter:hover {\r\n    box-shadow: 0 0 50px 10px rgba(0,0,0,0.06);\r\n    cursor: pointer;\r\n}\r\n\r\n.name {\r\n    font-family: 'Akronim', cursive;\r\n    font-weight: 700;\r\n\r\n    align-self: center;\r\n    font-size: 1.7rem;\r\n    margin-top: 20px;\r\n}\r\n\r\n.fighter-image , .fighter-image-right {\r\n    height: 260px; \r\n   \r\n}\r\n\r\n.fighter-image-right {\r\n    transform: scale(-1, 1);\r\n}\r\n\r\n\r\n/* Styles for modal window with fighters info */\r\n\r\n.modal {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    position: fixed;\r\n    z-index: 5;\r\n    top:50%;\r\n    margin-top: -150px;\r\n    left: 50%;\r\n    margin-left: -200px; \r\n    width:400px;\r\n    height: 300px;\r\n\r\n    background-color: rgba(148, 40, 40, 0.63);\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n    border-radius: 10px;\r\n}\r\n\r\n#fighterInfo {\r\n    visibility: hidden;\r\n}\r\n\r\n.modal-header{\r\n    border-bottom: 1px solid #534847;  \r\n    font-size: 1.5rem;\r\n}\r\n\r\n.modal-title {\r\n    margin-bottom: 0;\r\n    line-height: 1.5;\r\n}\r\n\r\n.modal-body {\r\n    position: relative;\r\n    flex: 1 1 auto;\r\n    padding: 1rem;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 1rem;\r\n}\r\n  \r\n.modal-footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    border-top: 1px solid #534847;\r\n}\r\n\r\n.modal-btn { \r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    outline: none;\r\n  \r\n    padding: 5px;\r\n    width: 150px;\r\n    margin: 3px;\r\n\r\n    border: 4px solid #494949;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    \r\n\r\n    background-image: linear-gradient(45deg,rgb(199, 139, 18) 50%, rgb(148, 40, 40) 50%);\r\n    background-position: 100%;\r\n    background-size: 400%;\r\n    transition: background 300ms ease-in-out; \r\n}\r\n\r\n.modal-btn:hover {\r\n  color: #fff;\r\n  background-position: 0;\r\n}\r\n\r\ninput {\r\n    background-color:  #f6b93b;\r\n    color: #494949;\r\n\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n    border: 1px solid #494949;\r\n}\r\n\r\n.form-group label {\r\n    display: inline-block;\r\n    width: 27%;\r\n} \r\n  \r\n@-webkit-keyframes jump {\r\n  0%{\r\n      -webkit-transform: translateY(0);\r\n      transform: translateY(0);\r\n    }\r\n  20%{\r\n      -webkit-transform: translateY(0);\r\n      transform: translateY(0);\r\n    }\r\n  40%{\r\n      -webkit-transform: translateY(-30px);\r\n      transform: translateY(-30px);\r\n    }\r\n  50%{\r\n      -webkit-transform: translateY(0);\r\n      transform: translateY(0);\r\n    }\r\n  60%{\r\n      -webkit-transform: translateY(-15px);\r\n      transform: translateY(-15px);\r\n    }\r\n  80%{\r\n      -webkit-transform: translateY(0);\r\n      transform: translateY(0);\r\n    }\r\n  100%{\r\n      -webkit-transform: translateY(0);\r\n      transform: translateY(0);\r\n    }\r\n}\r\n  \r\n@keyframes jump {\r\n  0%{\r\n      transform: translateY(0);\r\n    }\r\n  20%{\r\n      transform: translateY(0);\r\n    }\r\n  40%{\r\n      transform: translateY(-30px);\r\n    }\r\n  50%{\r\n      transform: translateY(0);\r\n    }\r\n  60%{\r\n      transform: translateY(-15px);\r\n    }\r\n  80%{\r\n      transform: translateY(0);\r\n    }\r\n  100%{\r\n      transform: translateY(0);\r\n    }\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/javascript/app.ts":
/*!*******************************!*\
  !*** ./src/javascript/app.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fightersView_1 = __webpack_require__(/*! ./fightersView */ "./src/javascript/fightersView.ts");
const fightersService_1 = __webpack_require__(/*! ./services/fightersService */ "./src/javascript/services/fightersService.ts");
class App {
    constructor() {
        this.startApp();
    }
    startApp() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                App.loadingElement.style.visibility = 'visible';
                const fighters = yield fightersService_1.fighterService.getFighters();
                const fightersView = new fightersView_1.default(fighters);
                const fightersElement = fightersView.element;
                App.rootElement.appendChild(fightersElement);
            }
            catch (error) {
                console.warn(error);
                App.rootElement.innerText = 'Failed to load data';
            }
            finally {
                App.loadingElement.style.visibility = 'hidden';
            }
        });
    }
}
App.rootElement = document.getElementById('root');
App.loadingElement = document.getElementById('loading-overlay');
exports.default = App;


/***/ }),

/***/ "./src/javascript/fighterView.ts":
/*!***************************************!*\
  !*** ./src/javascript/fighterView.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = __webpack_require__(/*! ./view */ "./src/javascript/view.ts");
class FighterView extends view_1.default {
    constructor(fighter, handleClick) {
        super();
        this.createFighter(fighter, handleClick);
    }
    createFighter(fighter, handleClick) {
        const { name, source } = fighter;
        const nameElement = this.createName(name);
        const imageElement = this.createImage(source, fighter._id);
        const checkboxElement = this.createCheckbox(fighter._id);
        const checkboxWrapper = super.createElement({
            tagName: "div",
            className: "wrapper"
        });
        checkboxWrapper.append(checkboxElement, nameElement);
        this.element = super.createElement({
            tagName: "div",
            className: "fighter"
        });
        this.element.setAttribute("id", fighter._id);
        this.element.append(imageElement, checkboxWrapper);
        this.element.addEventListener("click", event => handleClick(event, fighter), true);
    }
    //checkbox for player choice
    createCheckbox(id) {
        const attributes = {
            type: "checkbox",
            name: "fighter",
            value: id
        };
        const checkboxElement = super.createElement({
            tagName: "input",
            className: "fighter-checkbox",
            attributes
        });
        return checkboxElement;
    }
    createName(name) {
        const attributes = { for: "fighter" };
        const nameElement = super.createElement({
            tagName: "lable",
            className: "name",
            attributes
        });
        nameElement.innerText = name;
        return nameElement;
    }
    createImage(source, id) {
        let className = "fighter-image";
        // turn players face-to-face
        if (id > 3) {
            className = "fighter-image-right";
        }
        const attributes = { src: source };
        const imgElement = super.createElement({
            tagName: "img",
            className: className,
            attributes
        });
        return imgElement;
    }
}
exports.default = FighterView;


/***/ }),

/***/ "./src/javascript/fightersView.ts":
/*!****************************************!*\
  !*** ./src/javascript/fightersView.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = __webpack_require__(/*! ./view */ "./src/javascript/view.ts");
const fighterView_1 = __webpack_require__(/*! ./fighterView */ "./src/javascript/fighterView.ts");
class FightersView extends view_1.default {
    constructor(fighters) {
        super();
        this.fightersDetailsMap = new Map();
        this.handleClick = this.handleFighterClick.bind(this);
        this.createFighters(fighters);
    }
    createFighters(fighters) {
        const fighterElements = fighters.map(fighter => {
            const fighterView = new fighterView_1.default(fighter, this.handleClick);
            return fighterView.element;
        });
        this.element = this.createElement({
            tagName: "div",
            className: "fighters"
        });
        this.element.append(...fighterElements);
    }
    handleFighterClick(event, fighter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // if (!this.fightersDetailsMap.has(fighter._id)) {
                //   fighter = await fighterService.getFighterDetails(fighter._id);
                //   this.fightersDetailsMap.set(fighter._id, fighter);
            }
            catch (error) {
                // this.handleFighterInfoModal(fighter._id);
                // this.setFightersForGame();
                console.warn(error);
            }
        });
    }
}
exports.default = FightersView;


/***/ }),

/***/ "./src/javascript/helpers/apiHelper.ts":
/*!*********************************************!*\
  !*** ./src/javascript/helpers/apiHelper.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const API_URL = "https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/";
function callApi(endpoind, method) {
    const url = API_URL + endpoind;
    const options = {
        method
    };
    return fetch(url, options)
        .then(response => response.ok ? response.json() : Promise.reject(Error("Failed to load")))
        .catch(error => {
        throw error;
    });
}
exports.callApi = callApi;


/***/ }),

/***/ "./src/javascript/services/fightersService.ts":
/*!****************************************************!*\
  !*** ./src/javascript/services/fightersService.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiHelper_1 = __webpack_require__(/*! ../helpers/apiHelper */ "./src/javascript/helpers/apiHelper.ts");
class FighterService {
    getFighters() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const endpoint = "fighters.json";
                const apiResult = yield apiHelper_1.callApi(endpoint, "GET");
                return JSON.parse(atob(apiResult.content));
            }
            catch (error) {
                throw error;
            }
        });
    }
    getFighterDetails(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const endpoint = `details/fighter/${_id}.json`;
                const apiResult = yield apiHelper_1.callApi(endpoint, "GET");
                return JSON.parse(atob(apiResult.content));
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.fighterService = new FighterService();


/***/ }),

/***/ "./src/javascript/view.ts":
/*!********************************!*\
  !*** ./src/javascript/view.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class View {
    createElement({ tagName, className = "", attributes = {} }) {
        const element = document.createElement(tagName);
        element.classList.add(className);
        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
        return element;
    }
}
exports.default = View;


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map