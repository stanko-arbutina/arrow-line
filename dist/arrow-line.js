(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["arrowLine"] = factory();
	else
		root["arrowLine"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const arrowLine = __webpack_require__(/*! ./lib/arrow_line.js */ "./src/lib/arrow_line.js");

module.exports = arrowLine;

/***/ }),

/***/ "./src/lib/arguments/normalize_and_validate.js":
/*!*****************************************************!*\
  !*** ./src/lib/arguments/normalize_and_validate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const validateOptions = __webpack_require__(/*! ./validate/options */ "./src/lib/arguments/validate/options.js");

const rectangleFromParam = __webpack_require__(/*! ./rectangle_from_param */ "./src/lib/arguments/rectangle_from_param.js");

function normalizeAndValidate(options){
  return {
    ...validateOptions(options),
    sourceRectangle: rectangleFromParam(options.source),
    destinationRectangle: rectangleFromParam(options.destination)
  }
}

module.exports = normalizeAndValidate;

/***/ }),

/***/ "./src/lib/arguments/parse_arguments.js":
/*!**********************************************!*\
  !*** ./src/lib/arguments/parse_arguments.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isObject = __webpack_require__(/*! lodash/isObject */ "./src/lib/vendor/lodash/isObject.js");
const Errors = __webpack_require__(/*! ./../util/errors */ "./src/lib/util/errors.js");

const normalizeAndValidate = __webpack_require__(/*! ./normalize_and_validate */ "./src/lib/arguments/normalize_and_validate.js");

function parseMultipleArguments(args){
  if ((args.length > 2) && (!isObject(args[2]))) {
    Errors.lastArgumentObject();
  }
  if (args.length > 3) {
    Errors.maximumThreeArguments();
  }
  const options = args[2] || {};
  if (options.source) {
    Errors.doubleSource()
  }
  if (options.destination) {
    Errors.doubleDestination();
  }
  return {
    ...options,
    source: args[0],
    destination: args[1]
  };
}

function parseSingleArgument(args){
  if (!isObject(args[0])) Errors.singleArgumentObject();
  const options = args[0];
  if (!options.source) {
    Errors.missingSource();
  }
  if (!options.destination) {
    Errors.missingDestination();
  }
  return options;
}

function standardize(args) {
  if (args.length == 0) {
    Errors.atLeastOneArgument();
  }
  if (args.length > 1) {
    return parseMultipleArguments(args);
  }
  return  parseSingleArgument(args);
}

function parseArguments(args) {
  const rawOptions = standardize(args);
  const options = normalizeAndValidate(rawOptions)
  return { rawOptions, options };
}

module.exports = parseArguments;

/***/ }),

/***/ "./src/lib/arguments/rectangle_from_param.js":
/*!***************************************************!*\
  !*** ./src/lib/arguments/rectangle_from_param.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Rectangle = __webpack_require__(/*! ./../geometry/rectangle */ "./src/lib/geometry/rectangle.js");
const Errors = __webpack_require__(/*! ./../util/errors */ "./src/lib/util/errors.js");
const isCoordinate = __webpack_require__(/*! ./../geometry/is_coordinate */ "./src/lib/geometry/is_coordinate.js");

function rectangleFromParam(param){
  if (isCoordinate(param)) {
    return new Rectangle(param.x, param.y, 0, 0);
  }
  const element = document.querySelector(param);
  if (!element) {
    Errors.couldNotFindSelector(param);
  }
  return Rectangle.fromDOMElement(element);
}

module.exports = rectangleFromParam;


/***/ }),

/***/ "./src/lib/arguments/validate/color.js":
/*!*********************************************!*\
  !*** ./src/lib/arguments/validate/color.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isString = __webpack_require__(/*! lodash/isString */ "./src/lib/vendor/lodash/isString.js");
const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");

function validateColor(options){
  options.color = options.color || 'black';
  if (!isString(options.color)) Errors.mustBeString('Color');
}

module.exports = validateColor;

/***/ }),

/***/ "./src/lib/arguments/validate/curvature.js":
/*!*************************************************!*\
  !*** ./src/lib/arguments/validate/curvature.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isNumber = __webpack_require__(/*! lodash/isNumber */ "./src/lib/vendor/lodash/isNumber.js");
const isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./src/lib/vendor/lodash/isUndefined.js");
const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");

function validateCurvature(options){
  if (!isUndefined(options.curvature)) {
    if (!isNumber(options.curvature) || (options.curvature == 0)) {
      Errors.mustBeNonZeroNumber('Curvature')
    }
  }
  if (!options.pivots) options.curvature = options.curvature || 1;
}

module.exports = validateCurvature;

/***/ }),

/***/ "./src/lib/arguments/validate/endpoint/fill_color.js":
/*!***********************************************************!*\
  !*** ./src/lib/arguments/validate/endpoint/fill_color.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isString = __webpack_require__(/*! lodash/isString */ "./src/lib/vendor/lodash/isString.js");
const isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./src/lib/vendor/lodash/isUndefined.js");

const Errors = __webpack_require__(/*! ../../../util/errors */ "./src/lib/util/errors.js");

function validateFillColor(endpointOptions) {
  const fillColor = endpointOptions.fillColor;
  if (!isUndefined(fillColor)){
    if (!isString(fillColor)) Errors.mustBeString('Endpoint fillColor')
  }
}

module.exports = validateFillColor;

/***/ }),

/***/ "./src/lib/arguments/validate/endpoint/index.js":
/*!******************************************************!*\
  !*** ./src/lib/arguments/validate/endpoint/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const validateType = __webpack_require__(/*! ./type */ "./src/lib/arguments/validate/endpoint/type.js");
const validateFillColor = __webpack_require__(/*! ./fill_color */ "./src/lib/arguments/validate/endpoint/fill_color.js");
const validatePosition = __webpack_require__(/*! ./position */ "./src/lib/arguments/validate/endpoint/position.js");
const validateSize = __webpack_require__(/*! ./size */ "./src/lib/arguments/validate/endpoint/size.js");
const validateOnlySupportedOptions = __webpack_require__(/*! ./only_supported */ "./src/lib/arguments/validate/endpoint/only_supported.js");

function validateEndpoint(options){
  options.endpoint = options.endpoint || {};
  validateType(options.endpoint);
  validateFillColor(options.endpoint);
  validatePosition(options.endpoint);
  validateSize(options.endpoint);
  options.endpoint.fillColor = options.endpoint.fillColor || options.color;
  validateOnlySupportedOptions(options.endpoint);
}

module.exports = validateEndpoint;

/***/ }),

/***/ "./src/lib/arguments/validate/endpoint/only_supported.js":
/*!***************************************************************!*\
  !*** ./src/lib/arguments/validate/endpoint/only_supported.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Errors = __webpack_require__(/*! ../../../util/errors */ "./src/lib/util/errors.js");

const SUPPORTED_OPTIONS = [
  'type',
  'markerIdentifier',
  'fillColor',
  'size',
  'position'
];


function validateOnlySupportedOptions(options){
  const unrecognizedOption = Object.keys(options).find(optionName => {
    return !SUPPORTED_OPTIONS.includes(optionName);
  });
  if (unrecognizedOption) {
    Errors.unrecognizedEndpointOption(unrecognizedOption);
  }
}

module.exports = validateOnlySupportedOptions;

/***/ }),

/***/ "./src/lib/arguments/validate/endpoint/position.js":
/*!*********************************************************!*\
  !*** ./src/lib/arguments/validate/endpoint/position.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isString = __webpack_require__(/*! lodash/isString */ "./src/lib/vendor/lodash/isString.js");
const isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./src/lib/vendor/lodash/isUndefined.js");
const EndpointPosition = __webpack_require__(/*! ../../../const/endpoint_position */ "./src/lib/const/endpoint_position.js");

const validatePropertyInEnum = __webpack_require__(/*! ../property_in_enum */ "./src/lib/arguments/validate/property_in_enum.js");
const Errors = __webpack_require__(/*! ../../../util/errors */ "./src/lib/util/errors.js");

const POSITIONS = Object.values(EndpointPosition);

function validatePosition(endpointOptions) {
  const position = endpointOptions.position;
  if (!isUndefined(position)){
    if (!isString(position)) Errors.mustBeString('Endpoint position');
    validatePropertyInEnum(endpointOptions, 'position', POSITIONS, 'endpoint position');
  }
}

module.exports = validatePosition;

/***/ }),

/***/ "./src/lib/arguments/validate/endpoint/size.js":
/*!*****************************************************!*\
  !*** ./src/lib/arguments/validate/endpoint/size.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isNumber = __webpack_require__(/*! lodash/isNumber */ "./src/lib/vendor/lodash/isNumber.js");
const isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./src/lib/vendor/lodash/isUndefined.js");

const Errors = __webpack_require__(/*! ../../../util/errors */ "./src/lib/util/errors.js");

function validateSize(endpointOptions) {
  const size = endpointOptions.size;
  if (!isUndefined(size)){
    if (!isNumber(size) || (size<=0)) Errors.mustBePositiveNumber('Endpoint size')
  }
  endpointOptions.size = endpointOptions.size || 1;
}

module.exports = validateSize;

/***/ }),

/***/ "./src/lib/arguments/validate/endpoint/type.js":
/*!*****************************************************!*\
  !*** ./src/lib/arguments/validate/endpoint/type.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isString = __webpack_require__(/*! lodash/isString */ "./src/lib/vendor/lodash/isString.js");
const EndpointType = __webpack_require__(/*! ../../../const/endpoint_type */ "./src/lib/const/endpoint_type.js");
const validatePropertyInEnum = __webpack_require__(/*! ../property_in_enum */ "./src/lib/arguments/validate/property_in_enum.js");
const Errors = __webpack_require__(/*! ../../../util/errors */ "./src/lib/util/errors.js");

const MARKERS = Object.keys(EndpointType);

function validateCustomType(endpointOptions){
  if (endpointOptions.type == EndpointType.custom) {
    if (!endpointOptions.markerIdentifier) {
      Errors.missingMarkerIdent();
    }
    if (!isString(endpointOptions.markerIdentifier)) {
      Errors.mustBeString();
    }
    const unavailableProperty = ['fillColor', 'size'].find(prop => endpointOptions[prop]);
    if (unavailableProperty) {
      Errors.markerCustomizationUnavailable(unavailableProperty);
    }
  } else {
    if (endpointOptions.markerIdentifier) {
      Errors.markerIdentOnlyCustom();
    }
  }
}

function validateType(endpointOptions){
  endpointOptions.type = endpointOptions.type || EndpointType.arrowHeadFilled;
  validatePropertyInEnum(endpointOptions, 'type', MARKERS, 'endpoint type');
  validateCustomType(endpointOptions);
}

module.exports = validateType;

/***/ }),

/***/ "./src/lib/arguments/validate/force_direction.js":
/*!*******************************************************!*\
  !*** ./src/lib/arguments/validate/force_direction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isString = __webpack_require__(/*! lodash/isString */ "./src/lib/vendor/lodash/isString.js");
const isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./src/lib/vendor/lodash/isUndefined.js");
const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");

const Direction = __webpack_require__(/*! ../../const/directions */ "./src/lib/const/directions.js");
const validatePropertyInEnum = __webpack_require__(/*! ./property_in_enum */ "./src/lib/arguments/validate/property_in_enum.js");

const DIRECTIONS = Object.values(Direction);

function validateForceDirection(options){
  if (!isUndefined(options.forceDirection)){
    if (!isString(options.forceDirection)){
      Errors.mustBeString('forceDirection')
    }
    validatePropertyInEnum(options, 'forceDirection', DIRECTIONS, 'direction type');
  }
}

module.exports = validateForceDirection;

/***/ }),

/***/ "./src/lib/arguments/validate/only_supported.js":
/*!******************************************************!*\
  !*** ./src/lib/arguments/validate/only_supported.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");

const SUPPORTED_OPTIONS = [
  'source',
  'destination',
  'color',
  'curvature',
  'pivots',
  'sourcePosition',
  'destinationPosition',
  'style',
  'thickness',
  'forceDirection',
  'endpoint',
  'svgParentSelector'
];


function validateOnlySupportedOptions(options){
  const unrecognizedOption = Object.keys(options).find(optionName => {
    return !SUPPORTED_OPTIONS.includes(optionName);
  });
  if (unrecognizedOption) {
    Errors.unrecognizedOption(unrecognizedOption);
  }
}

module.exports = validateOnlySupportedOptions;

/***/ }),

/***/ "./src/lib/arguments/validate/options.js":
/*!***********************************************!*\
  !*** ./src/lib/arguments/validate/options.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const validateSourceAndDestination = __webpack_require__(/*! ./source_and_destination */ "./src/lib/arguments/validate/source_and_destination.js");
const validateColor = __webpack_require__(/*! ./color */ "./src/lib/arguments/validate/color.js");
const validateThickness = __webpack_require__(/*! ./thickness */ "./src/lib/arguments/validate/thickness.js");
const validateCurvature = __webpack_require__(/*! ./curvature */ "./src/lib/arguments/validate/curvature.js");
const validatePositions = __webpack_require__(/*! ./positions */ "./src/lib/arguments/validate/positions.js");
const validatePivots = __webpack_require__(/*! ./pivots */ "./src/lib/arguments/validate/pivots.js");
const validateSvgParentSelector = __webpack_require__(/*! ./svg_parent_selector */ "./src/lib/arguments/validate/svg_parent_selector.js");
const validateStyle = __webpack_require__(/*! ./style */ "./src/lib/arguments/validate/style.js");
const validateForceDirection = __webpack_require__(/*! ./force_direction */ "./src/lib/arguments/validate/force_direction.js");
const validateEndpoint = __webpack_require__(/*! ./endpoint */ "./src/lib/arguments/validate/endpoint/index.js");
const validateOnlySupportedOptions = __webpack_require__(/*! ./only_supported */ "./src/lib/arguments/validate/only_supported.js");

function validateOptions(options){
  validateSourceAndDestination(options);
  validateOnlySupportedOptions(options);
  validateColor(options);
  validateThickness(options);
  validateCurvature(options);
  validateStyle(options);
  validatePositions(options);
  validatePivots(options);
  validateEndpoint(options);
  validateSvgParentSelector(options);
  validateForceDirection(options);
  return options;
}

module.exports = validateOptions;

/***/ }),

/***/ "./src/lib/arguments/validate/pivots.js":
/*!**********************************************!*\
  !*** ./src/lib/arguments/validate/pivots.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isCoordinate = __webpack_require__(/*! ../../geometry/is_coordinate */ "./src/lib/geometry/is_coordinate.js");
const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");

function validatePivots(options){
  if (options.pivots) {
    if (!(Array.isArray(options.pivots) && (options.pivots.length == 2) && (options.pivots.every(isCoordinate)))) {
      Errors.pivotsFormat();
    }
    if (options.curvature) {
      Errors.pivotsAndCurvature();
    }
  }
}

module.exports = validatePivots;

/***/ }),

/***/ "./src/lib/arguments/validate/positions.js":
/*!*************************************************!*\
  !*** ./src/lib/arguments/validate/positions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isCoordinate = __webpack_require__(/*! ../../geometry/is_coordinate */ "./src/lib/geometry/is_coordinate.js");
const Rectangle = __webpack_require__(/*! ../../geometry/rectangle */ "./src/lib/geometry/rectangle.js");
const validatePropertyInEnum = __webpack_require__(/*! ./property_in_enum */ "./src/lib/arguments/validate/property_in_enum.js");
const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");

const POSITIONS = Object.keys(Rectangle.SIDES);
function validatePositions(options){
  if (options.sourcePosition) {
    if (isCoordinate(options.source)) {
      Errors.positionWithCoords('source');
    }
    validatePropertyInEnum(options, 'sourcePosition', POSITIONS, 'position');
  }

  if (options.destinationPosition) {
    if (isCoordinate(options.destination)) {
      Errors.positionWithCoords('destination');
    }
    validatePropertyInEnum(options, 'destinationPosition', POSITIONS, 'position');
  }
}

module.exports = validatePositions;

/***/ }),

/***/ "./src/lib/arguments/validate/property_in_enum.js":
/*!********************************************************!*\
  !*** ./src/lib/arguments/validate/property_in_enum.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isString = __webpack_require__(/*! lodash/isString */ "./src/lib/vendor/lodash/isString.js");
const get = __webpack_require__(/*! lodash/get */ "./src/lib/vendor/lodash/get.js");
const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");

function validatePropertyInEnum(options, propertyPath, enumeration, label){
  const label_arr = isString(label) ? [label, `${label}s`] : label;
  const prop = get(options, propertyPath);
  if ((prop) && (!enumeration.includes(prop))) {
    Errors.valInEnum(prop, enumeration, label_arr);
  }
}

module.exports = validatePropertyInEnum;

/***/ }),

/***/ "./src/lib/arguments/validate/source_and_destination.js":
/*!**************************************************************!*\
  !*** ./src/lib/arguments/validate/source_and_destination.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isString = __webpack_require__(/*! lodash/isString */ "./src/lib/vendor/lodash/isString.js");
const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");
const isCoordinate = __webpack_require__(/*! ../../geometry/is_coordinate */ "./src/lib/geometry/is_coordinate.js");

function validateSourceAndDestination(options){
  if (![options.source, options.destination].every(sel => isString(sel) || isCoordinate(sel))) {
    Errors.sourceAndDestinationFormat();
  }
  return options;
}

module.exports = validateSourceAndDestination;

/***/ }),

/***/ "./src/lib/arguments/validate/style.js":
/*!*********************************************!*\
  !*** ./src/lib/arguments/validate/style.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const LineStyle = __webpack_require__(/*! ../../const/line_style */ "./src/lib/const/line_style.js");
const validatePropertyInEnum = __webpack_require__(/*! ./property_in_enum */ "./src/lib/arguments/validate/property_in_enum.js");

const STYLES = Object.keys(LineStyle);

function validateStyle(options){
  validatePropertyInEnum(options, 'style', STYLES, 'style');
}

module.exports = validateStyle;

/***/ }),

/***/ "./src/lib/arguments/validate/svg_parent_selector.js":
/*!***********************************************************!*\
  !*** ./src/lib/arguments/validate/svg_parent_selector.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isString = __webpack_require__(/*! lodash/isString */ "./src/lib/vendor/lodash/isString.js");
const isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./src/lib/vendor/lodash/isUndefined.js");
const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");

function validateSvgParentSelector(options){
  if (!isUndefined(options.svgParentSelector)) {
    if (!isString(options.svgParentSelector)) {
      Errors.mustBeString('svgParentSelector');
    }
  }
}

module.exports = validateSvgParentSelector;

/***/ }),

/***/ "./src/lib/arguments/validate/thickness.js":
/*!*************************************************!*\
  !*** ./src/lib/arguments/validate/thickness.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isNumber = __webpack_require__(/*! lodash/isNumber */ "./src/lib/vendor/lodash/isNumber.js");
const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");

function validateThickness(options){
  options.thickness = options.thickness || 1;
  if (!isNumber(options.thickness)) {
    Errors.mustBeNumber('Thickness')
  }
}

module.exports = validateThickness;


/***/ }),

/***/ "./src/lib/arrow_line.js":
/*!*******************************!*\
  !*** ./src/lib/arrow_line.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const parseArguments = __webpack_require__(/*! ./arguments/parse_arguments */ "./src/lib/arguments/parse_arguments.js");
const lineAttributes = __webpack_require__(/*! ./line_attributes */ "./src/lib/line_attributes.js");
const pathDefinition = __webpack_require__(/*! ./path_definition */ "./src/lib/path_definition.js");
const getEndpoints = __webpack_require__(/*! ./get_endpoints */ "./src/lib/get_endpoints.js");
const markerOptions = __webpack_require__(/*! ./marker_options */ "./src/lib/marker_options.js");
const getCanvas = __webpack_require__(/*! ./get_canvas */ "./src/lib/get_canvas.js");
const normalizeAndValidate = __webpack_require__(/*! ./arguments/normalize_and_validate */ "./src/lib/arguments/normalize_and_validate.js");

const isObject = __webpack_require__(/*! lodash/isObject */ "./src/lib/vendor/lodash/isObject.js");

const Errors = __webpack_require__(/*! ./util/errors */ "./src/lib/util/errors.js");

function getPathAttributeNames(svgPath) {
    const result = [];
    for (let i = 0; i < svgPath.attributes.length; i++) {
        result.push(svgPath.attributes.item(i).name);
    }
    return result;
}

function getPathAttributes(svg, options) {
    const {beginPoint, endPoint, direction} = getEndpoints(options);
    const pathDefinitionOptions = {
        direction: options.forceDirection || direction,
        curvature: options.curvature,
        pivots: options.pivots
    };
    return {
        d: pathDefinition(options.sourceRectangle[beginPoint], options.destinationRectangle[endPoint], pathDefinitionOptions),
        fill: 'none',
        stroke: options.color,
        ...lineAttributes(options),
        ...markerOptions(svg, options)
    }

}

function setPathAttributes(svgPath, pathAttributes) {
    getPathAttributeNames(svgPath).forEach(attrName => svgPath.attributes.removeNamedItem(attrName));
    for (let attributeName in pathAttributes) {
        svgPath.setAttributeNS(null, attributeName, pathAttributes[attributeName]);
    }
}

function arrowLine(...args) {
    const parsedArguments = parseArguments(args);
    const options = parsedArguments.options;
    let rawOptions = parsedArguments.rawOptions;
    const svg = getCanvas(options.svgParentSelector);
    const svgPath = svg.createPath();
    setPathAttributes(svgPath, getPathAttributes(svg, options));
    return {
        getParentSvgId() {
            return svg.parentCanvas.id;
        },
        getRawSvgPath(){
          return svgPath;
        },
        remove: () => {
            svgPath.parentNode.removeChild(svgPath);
        },
        update: (...args) => {
            if (args.length != 1) {
                Errors.exactlyOneArgument();
            }
            const updateOptions = args[0];
            if (!isObject(updateOptions)) {
                Errors.argumentMustBeObject();
            }
            if (updateOptions.svgParentSelector) {
                Errors.svgParentNotAllowedInUpdate();
            }
            const newRawOptions = {...rawOptions, ...updateOptions};
            const newOptions = normalizeAndValidate(newRawOptions);
            setPathAttributes(svgPath, getPathAttributes(svg, newOptions));
            rawOptions = newRawOptions;
        }
    }
}

module.exports = arrowLine;

/***/ }),

/***/ "./src/lib/const/arrow_line_prefix.js":
/*!********************************************!*\
  !*** ./src/lib/const/arrow_line_prefix.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = `__arrowLineInternal`;

/***/ }),

/***/ "./src/lib/const/directions.js":
/*!*************************************!*\
  !*** ./src/lib/const/directions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
}

/***/ }),

/***/ "./src/lib/const/endpoint_position.js":
/*!********************************************!*\
  !*** ./src/lib/const/endpoint_position.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  START: 'start',
  END: 'end',
  BOTH: 'both'
};

/***/ }),

/***/ "./src/lib/const/endpoint_type.js":
/*!****************************************!*\
  !*** ./src/lib/const/endpoint_type.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  arrowHeadFilled: 'arrowHeadFilled',
  arrowHead: 'arrowHead',
  squares: 'squares',
  circles: 'circles',
  custom: 'custom',
  none: 'none'
};

/***/ }),

/***/ "./src/lib/const/line_style.js":
/*!*************************************!*\
  !*** ./src/lib/const/line_style.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  dot: '1 1',
  dash: '4 1',
  solid: '',
  'dot-dash': '1 1 4 1'
};

/***/ }),

/***/ "./src/lib/geometry/is_coordinate.js":
/*!*******************************************!*\
  !*** ./src/lib/geometry/is_coordinate.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isNumber = __webpack_require__(/*! lodash/isNumber */ "./src/lib/vendor/lodash/isNumber.js");
const isObject = __webpack_require__(/*! lodash/isObject */ "./src/lib/vendor/lodash/isObject.js");

function isCoordinate(obj) {
  if (!isObject(obj)) return false;
  const keys = Object.keys(obj);
  if (!keys.includes('x')) return false;
  if (!keys.includes('y')) return false;
  return isNumber(obj.x) && isNumber(obj.y);
}

module.exports = isCoordinate;

/***/ }),

/***/ "./src/lib/geometry/point.js":
/*!***********************************!*\
  !*** ./src/lib/geometry/point.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./src/lib/vendor/lodash/isUndefined.js");
class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  translate(first, second){
    let x,y;
    if (first && isUndefined(second)) {
      [x,y] = [first.x, first.y];
    } else {
      [x,y] = [first, second];
    }
    const result = new Point(this.x+(x || 0), this.y + (y || 0));
    return result;
  }

  leftOf(other) {
    return this.x < other.x
  }

  aboveOf(other) {
    return this.y < other.y
  }

  horizontallyAlignedTo(other){
    const hDist = Math.abs(other.x - this.x);
    const vDist = Math.abs(other.y - this.y);
    return hDist > vDist;
  }

  str() {
    return `${this.x} ${this.y}`
  }
}

module.exports = Point;

/***/ }),

/***/ "./src/lib/geometry/rectangle.js":
/*!***************************************!*\
  !*** ./src/lib/geometry/rectangle.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Point = __webpack_require__(/*! ./point */ "./src/lib/geometry/point.js");

class Rectangle {
  constructor(x,y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get topLeft(){ return new Point(this.x, this.y); }
  get topRight(){ return new Point(this.x + this.width, this.y); }
  get topCenter(){ return new Point(this.x + this.width/2, this.y) }
  get middleLeft(){ return new Point(this.x, this.y+ this.height/2) }
  get middleRight(){ return new Point(this.x+ this.width, this.y+ this.height/2) }
  get bottomLeft() { return new Point(this.x, this.y+ this.height) }
  get bottomCenter() { return new Point(this.x + this.width/2, this.y+ this.height) }
  get bottomRight() { return new Point(this.x+this.width, this.y+ this.height) }

  leftOf(other){
    return this.middleLeft.leftOf(other.middleLeft);
  }

  get center(){ return new Point(this.x + this.width/2, this.y + this.height/2) }


  aboveOf(other){
    return this.topCenter.aboveOf(other.topCenter);
  }
}

Rectangle.SIDES = {
  topLeft: 'topLeft',
  topRight: 'topRight',
  topCenter: 'topCenter',
  middleRight: 'middleRight',
  middleLeft: 'middleLeft',
  bottomLeft: 'bottomLeft',
  bottomCenter: 'bottomCenter',
  bottomRight: 'bottomRight'
};

function findAbsolutePosition(htmlElement) {
  for (var x = 0, y = 0, el = htmlElement; el != null; el = el.offsetParent) {
    x += el.offsetLeft;
    y += el.offsetTop;
  }

  return new Point(x,y);
}


Rectangle.fromDOMElement = function(DOMElement){
  const position = findAbsolutePosition(DOMElement);
  return new Rectangle(
    position.x, position.y, DOMElement.offsetWidth, DOMElement.offsetHeight
  );
};

module.exports = Rectangle;

/***/ }),

/***/ "./src/lib/get_canvas.js":
/*!*******************************!*\
  !*** ./src/lib/get_canvas.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SvgCanvas = __webpack_require__(/*! ./svg/svg_canvas */ "./src/lib/svg/svg_canvas.js");
const Errors = __webpack_require__(/*! ./util/errors */ "./src/lib/util/errors.js");

const cache = new Map();

function getSvgCanvas(selector){
  let domElement;
  if (!selector){
    domElement = SvgCanvas.defaultSvgElement();
  } else {
    if (!cache.has(selector)) {
      const el = document.querySelector(selector);
      if (!el) {
        Errors.couldNotFindSelector(selector);
      }
      cache.set(selector, el);
    }
    domElement =  cache.get(selector)
  }
  return new SvgCanvas(domElement);
}

module.exports = getSvgCanvas;

/***/ }),

/***/ "./src/lib/get_endpoints.js":
/*!**********************************!*\
  !*** ./src/lib/get_endpoints.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Rectangle = __webpack_require__(/*! ./geometry/rectangle */ "./src/lib/geometry/rectangle.js");
const {HORIZONTAL, VERTICAL} = __webpack_require__(/*! ./const/directions */ "./src/lib/const/directions.js");
const { reverseIf } = __webpack_require__(/*! ./util/helper */ "./src/lib/util/helper.js");

const directionEndpoints = {
  [HORIZONTAL]: (sourceRectangle, destinationRectangle) => reverseIf(
    [Rectangle.SIDES.middleLeft, Rectangle.SIDES.middleRight],
    sourceRectangle.leftOf(destinationRectangle)
  ),
  [VERTICAL]: (sourceRectangle, destinationRectangle) => reverseIf(
    [Rectangle.SIDES.topCenter, Rectangle.SIDES.bottomCenter],
    sourceRectangle.aboveOf(destinationRectangle))
};

function getEndpoints({sourceRectangle, destinationRectangle, sourcePosition, destinationPosition}){
  const direction = sourceRectangle.center.horizontallyAlignedTo(destinationRectangle.center) ? HORIZONTAL : VERTICAL;
  let [beginPoint, endPoint] = directionEndpoints[direction](sourceRectangle, destinationRectangle);

  if (sourcePosition) {
    beginPoint = sourcePosition;
  }

  if (destinationPosition) {
    endPoint = destinationPosition;
  }
  return {
    beginPoint,
    endPoint,
    direction
  }
}

module.exports = getEndpoints;

/***/ }),

/***/ "./src/lib/line_attributes.js":
/*!************************************!*\
  !*** ./src/lib/line_attributes.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const LineStyle = __webpack_require__(/*! ./const/line_style */ "./src/lib/const/line_style.js");

function lineAttributes(options){
  const result = {};
  if (options.style) {
    result['stroke-dasharray'] = LineStyle[options.style];
  }
  if (options.thickness) {
    result['stroke-width'] = options.thickness;
  }
  return result;
}

module.exports = lineAttributes;


/***/ }),

/***/ "./src/lib/marker_options.js":
/*!***********************************!*\
  !*** ./src/lib/marker_options.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const get = __webpack_require__(/*! lodash/get */ "./src/lib/vendor/lodash/get.js");
const EndpointType = __webpack_require__(/*! ./const/endpoint_type */ "./src/lib/const/endpoint_type.js");
const EndpointPosition = __webpack_require__(/*! ./const/endpoint_position */ "./src/lib/const/endpoint_position.js");
const {getCounter } = __webpack_require__(/*! ./util/helper */ "./src/lib/util/helper.js");
const PREFIX = __webpack_require__(/*! ./const/arrow_line_prefix */ "./src/lib/const/arrow_line_prefix.js");

const MARKER_ID_PREFIX = `${PREFIX}-MARKER-`;
const nextMarkerId = getCounter();
const markerCache = new Map();

function getMarkerOptionsAndKey(options){
  const markerType = get(options, 'endpoint.type');
  const fillColor = get(options, 'endpoint.fillColor');
  const size = get(options, 'endpoint.size');
  const opts = { type: markerType, color: options.color, fillColor, size };
  return { key: `${options.color}-${markerType}-${fillColor}-${size}`, options: opts }
}

function getMarker(svg, baseOpts) {
  const { key, options } = getMarkerOptionsAndKey(baseOpts);
  if (!markerCache.has(key)) {
    const markerId = `${MARKER_ID_PREFIX}${nextMarkerId()}`;
    svg.createMarker(markerId, options);
    markerCache.set(key, markerId);
    return markerId;
  }
  return markerCache.get(key);
}

function defaultMarkerOptions(type, url){
  const opts = {"marker-end": url};
  if ((type == EndpointType.squares) || (type == EndpointType.circles)) {
    opts['marker-start'] = url;
  }
  return opts;
}

function userDefinedMarkerOptions(position, url){
  const opts = {};
  if ([EndpointPosition.START, EndpointPosition.BOTH].includes(position)){
    opts['marker-start'] = url;
  }
  if ([EndpointPosition.END, EndpointPosition.BOTH].includes(position)) {
    opts['marker-end'] = url;
  }
}

function markerOptions(svg, options){
  const endpointType = get(options, 'endpoint.type');
  if (endpointType == EndpointType.none) {
    return {}
  }
  let markerId = get(options, 'endpoint.markerIdentifier');
  if (!markerId) {
    markerId = getMarker(svg, options);
  }
  const url = `url(#${markerId})`;
  const position = get(options, 'endpoint.position');
  return position ? userDefinedMarkerOptions(position, url) : defaultMarkerOptions(endpointType, url);
}

module.exports = markerOptions;

/***/ }),

/***/ "./src/lib/path_definition.js":
/*!************************************!*\
  !*** ./src/lib/path_definition.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { HORIZONTAL } = __webpack_require__(/*! ./const/directions */ "./src/lib/const/directions.js");

function getPivots(point1, point2, curvature, direction) {
  const dimension = (direction == HORIZONTAL) ? 'x' : 'y';
  const amount = (point2[dimension] - point1[dimension]) * curvature;

  return [
    point1.translate({[dimension]: amount}),
    point2.translate({[dimension]: -amount})
  ];
}

function pathDefinition(point1, point2, options){
  const [p1, p2] = options.curvature ?
    getPivots(point1, point2, options.curvature, options.direction) :
    [point1.translate(options.pivots[0]), point2.translate(options.pivots[1])];
  return ['M', point1.str(), 'C', p1.str(), p2.str(), point2.str()].join(' ');
}

module.exports = pathDefinition;

/***/ }),

/***/ "./src/lib/svg/svg_canvas.js":
/*!***********************************!*\
  !*** ./src/lib/svg/svg_canvas.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {drawMarker, createElement, createSvgElement } = __webpack_require__(/*! ./svg_utils */ "./src/lib/svg/svg_utils.js");
const PREFIX = __webpack_require__(/*! ./../const/arrow_line_prefix */ "./src/lib/const/arrow_line_prefix.js");

class SvgCanvas {
  constructor(parentCanvas){
    this.parentCanvas = parentCanvas;
  }

  createMarker(id, options) {
    const {type, color, fillColor, size} = options;
    const sizeValue = String(size*10);
    const marker = createElement('marker', {
      id: id,
      markerUnits: 'strokeWidth',
      viewBox: '-1 -1 12 12',
      stroke: color,
      fill: fillColor,
      orient: 'auto',
      markerWidth: sizeValue,
      markerHeight: sizeValue
    });
    drawMarker[type](marker);
    this.definitionElement.appendChild(marker);
  }

  createPath() {
    const path = createSvgElement('path');
    this.parentCanvas.appendChild(path);
    return path;
  }

  get definitionElement() {
    if (!this._defs) {
      const existingDefs = this.parentCanvas.querySelector('defs');
      if (existingDefs) {
        this._defs = existingDefs
      } else {
        const definitionsElement = createSvgElement('defs');
        this.parentCanvas.appendChild(definitionsElement);
        this._defs = definitionsElement;
      }
    }
    return this._defs;
  }
}

SvgCanvas.defaultSvgElement = function(){
  if (!this._defaultEl) {
    const id = `${PREFIX}-svg-canvas`;
    this._defaultEl = createElement('svg', {
      id: id,
      style: 'position:absolute;top:0px;left:0px;pointer-events: none;',
      width: document.body.clientWidth,
      height: document.body.clientHeight
    });
    document.body.appendChild(this._defaultEl);
  }
  return this._defaultEl;
};

module.exports = SvgCanvas;

/***/ }),

/***/ "./src/lib/svg/svg_utils.js":
/*!**********************************!*\
  !*** ./src/lib/svg/svg_utils.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const isFunction = __webpack_require__(/*! lodash/isFunction */ "./src/lib/vendor/lodash/isFunction.js");
const EndpointType = __webpack_require__(/*! ./../const/endpoint_type */ "./src/lib/const/endpoint_type.js");

function createSvgElement(tag){
  return document.createElementNS("http://www.w3.org/2000/svg", tag);
}

function createElement(type, attributes) {
  const el = createSvgElement(type);
  for (let attr in attributes) {
    el.setAttribute(attr, attributes[attr]);
  }
  return el;
}

function markerFactory(refX, refY, shapeGen) {
  return function (marker) {
    marker.setAttribute('refX', refX);
    marker.setAttribute('refY', refY);
    const shape = isFunction(shapeGen) ? shapeGen(marker) : shapeGen;
    marker.appendChild(shape);
  }
}

const drawMarker = {
  [EndpointType.arrowHeadFilled]: markerFactory(10, 5, createElement('polygon', {points: '0,0 10,5 0,10'})),
  [EndpointType.circles]: markerFactory(5, 5, createElement('circle', {r: 4, cx: 5, cy: 5})),
  [EndpointType.squares]: markerFactory(5, 5, createElement('rect', {width: 10, height: 10})),
  [EndpointType.arrowHead]: markerFactory(10, 5, function (marker) {
    marker.setAttribute('fill-opacity', '0');
    return createElement('polyline', {points: '0,0 10,5 0,10'})
  })
};

module.exports = {
  drawMarker, createElement, createSvgElement
}

/***/ }),

/***/ "./src/lib/util/argument_error.js":
/*!****************************************!*\
  !*** ./src/lib/util/argument_error.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ArgumentError extends Error {
  constructor(message){
    super();
    this.message = message;
  }

  toString(){
    return `ArgumentError: ${this.message}`;
  }
}
module.exports = ArgumentError;



/***/ }),

/***/ "./src/lib/util/errors.js":
/*!********************************!*\
  !*** ./src/lib/util/errors.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ArgumentError = __webpack_require__(/*! ./argument_error */ "./src/lib/util/argument_error.js");
const isFunction = __webpack_require__(/*! lodash/isFunction */ "./src/lib/vendor/lodash/isFunction.js");

const throwArgumentError = function(arg){
  if (isFunction(arg)) {
    return function(){
      const message = arg.apply(null, arguments);
      throw new ArgumentError(message);
    }
  } else {
    return function(){
      throw new ArgumentError(arg);
    }
  }

};
const Errors = {
  exactlyOneArgument: throwArgumentError(`Exactly one argument expected`),
  argumentMustBeObject: throwArgumentError(`Argument must be an object`),
  svgParentNotAllowedInUpdate: throwArgumentError('svgParentSelector is not allowed in update'),
  couldNotFindSelector: throwArgumentError((param) => `Could not find element with selector - '${param}'`),
  sourceAndDestinationFormat: throwArgumentError('source and destination should be either querySelector strings or coordinate pairs ({x: .. ,y: })'),
  singleArgumentObject: throwArgumentError(`Single argument should always be an object`),
  missingSource: throwArgumentError(`Missing source option`),
  missingDestination: throwArgumentError(`Missing destination option`),
  lastArgumentObject: throwArgumentError('Last argument should always be an object'),
  maximumThreeArguments: throwArgumentError('Function does not accept more than three arguments'),
  doubleSource: throwArgumentError('Source specified twice (as first argument, and in options'),
  doubleDestination: throwArgumentError('Destination specified twice (as second argument, and in options)'),
  atLeastOneArgument: throwArgumentError(`At least one argument expected`),
  mustBeString: throwArgumentError(param => `${param} must be a string`),
  mustBeNumber: throwArgumentError(param => `${param} must be a number`),
  mustBePositiveNumber: throwArgumentError(param => `${param} must be a positive number`),
  mustBeNonZeroNumber: throwArgumentError(param => `${param} must be a number different than 0`),
  positionWithCoords: throwArgumentError(sourceOrDest => `${sourceOrDest}Position unavailable when using coordinates as ${sourceOrDest}`),
  valInEnum: throwArgumentError((val,arr, labels) => `'${val}' is not a valid ${labels[0]} - available ${labels[1]} are: ${arr.join(', ')}`),
  pivotsFormat: throwArgumentError(`'pivots' must be an array of two coordinates {x: number , y: number}`),
  pivotsAndCurvature: throwArgumentError("'curvature' option is not allowed when using explicit pivots"),
  missingMarkerIdent: throwArgumentError("Custom marker type is missing required property 'endpoint.markerIdentifier'"),
  markerIdentOnlyCustom: throwArgumentError("property 'endpoint.markerIdentifier' allowed only with custom endpoint.type"),
  markerCustomizationUnavailable: throwArgumentError(prop => `Marker customization property '${prop}' not available when providing custom marker`),
  unrecognizedOption: throwArgumentError(prop => `Unrecognized option '${prop}'`),
  unrecognizedEndpointOption: throwArgumentError(prop => `Unrecognized endpoint option '${prop}'`)
};

module.exports = Errors;

/***/ }),

/***/ "./src/lib/util/helper.js":
/*!********************************!*\
  !*** ./src/lib/util/helper.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getCounter(){
  let cnt = 0;
  return (() => cnt++);
}

function reverseIf(arr, bool) {
  if (bool) {
    return arr.reverse();
  }
  return arr;
}

module.exports = { getCounter, reverseIf };

/***/ }),

/***/ "./src/lib/vendor/lodash/_Hash.js":
/*!****************************************!*\
  !*** ./src/lib/vendor/lodash/_Hash.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./src/lib/vendor/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./src/lib/vendor/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./src/lib/vendor/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./src/lib/vendor/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./src/lib/vendor/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./src/lib/vendor/lodash/_ListCache.js":
/*!*********************************************!*\
  !*** ./src/lib/vendor/lodash/_ListCache.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./src/lib/vendor/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./src/lib/vendor/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./src/lib/vendor/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./src/lib/vendor/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./src/lib/vendor/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./src/lib/vendor/lodash/_Map.js":
/*!***************************************!*\
  !*** ./src/lib/vendor/lodash/_Map.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./src/lib/vendor/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./src/lib/vendor/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./src/lib/vendor/lodash/_MapCache.js":
/*!********************************************!*\
  !*** ./src/lib/vendor/lodash/_MapCache.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./src/lib/vendor/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./src/lib/vendor/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./src/lib/vendor/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./src/lib/vendor/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./src/lib/vendor/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./src/lib/vendor/lodash/_Symbol.js":
/*!******************************************!*\
  !*** ./src/lib/vendor/lodash/_Symbol.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./src/lib/vendor/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./src/lib/vendor/lodash/_arrayMap.js":
/*!********************************************!*\
  !*** ./src/lib/vendor/lodash/_arrayMap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./src/lib/vendor/lodash/_assocIndexOf.js":
/*!************************************************!*\
  !*** ./src/lib/vendor/lodash/_assocIndexOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./src/lib/vendor/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./src/lib/vendor/lodash/_baseGet.js":
/*!*******************************************!*\
  !*** ./src/lib/vendor/lodash/_baseGet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./src/lib/vendor/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./src/lib/vendor/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./src/lib/vendor/lodash/_baseGetTag.js":
/*!**********************************************!*\
  !*** ./src/lib/vendor/lodash/_baseGetTag.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./src/lib/vendor/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./src/lib/vendor/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./src/lib/vendor/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./src/lib/vendor/lodash/_baseIsNative.js":
/*!************************************************!*\
  !*** ./src/lib/vendor/lodash/_baseIsNative.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./src/lib/vendor/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./src/lib/vendor/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./src/lib/vendor/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./src/lib/vendor/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./src/lib/vendor/lodash/_baseToString.js":
/*!************************************************!*\
  !*** ./src/lib/vendor/lodash/_baseToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./src/lib/vendor/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./src/lib/vendor/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./src/lib/vendor/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./src/lib/vendor/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./src/lib/vendor/lodash/_castPath.js":
/*!********************************************!*\
  !*** ./src/lib/vendor/lodash/_castPath.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./src/lib/vendor/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./src/lib/vendor/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./src/lib/vendor/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./src/lib/vendor/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./src/lib/vendor/lodash/_coreJsData.js":
/*!**********************************************!*\
  !*** ./src/lib/vendor/lodash/_coreJsData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./src/lib/vendor/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./src/lib/vendor/lodash/_freeGlobal.js":
/*!**********************************************!*\
  !*** ./src/lib/vendor/lodash/_freeGlobal.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/lib/vendor/lodash/_getMapData.js":
/*!**********************************************!*\
  !*** ./src/lib/vendor/lodash/_getMapData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./src/lib/vendor/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./src/lib/vendor/lodash/_getNative.js":
/*!*********************************************!*\
  !*** ./src/lib/vendor/lodash/_getNative.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./src/lib/vendor/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./src/lib/vendor/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./src/lib/vendor/lodash/_getRawTag.js":
/*!*********************************************!*\
  !*** ./src/lib/vendor/lodash/_getRawTag.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./src/lib/vendor/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./src/lib/vendor/lodash/_getValue.js":
/*!********************************************!*\
  !*** ./src/lib/vendor/lodash/_getValue.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./src/lib/vendor/lodash/_hashClear.js":
/*!*********************************************!*\
  !*** ./src/lib/vendor/lodash/_hashClear.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./src/lib/vendor/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./src/lib/vendor/lodash/_hashDelete.js":
/*!**********************************************!*\
  !*** ./src/lib/vendor/lodash/_hashDelete.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./src/lib/vendor/lodash/_hashGet.js":
/*!*******************************************!*\
  !*** ./src/lib/vendor/lodash/_hashGet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./src/lib/vendor/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./src/lib/vendor/lodash/_hashHas.js":
/*!*******************************************!*\
  !*** ./src/lib/vendor/lodash/_hashHas.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./src/lib/vendor/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./src/lib/vendor/lodash/_hashSet.js":
/*!*******************************************!*\
  !*** ./src/lib/vendor/lodash/_hashSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./src/lib/vendor/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./src/lib/vendor/lodash/_isKey.js":
/*!*****************************************!*\
  !*** ./src/lib/vendor/lodash/_isKey.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./src/lib/vendor/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./src/lib/vendor/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./src/lib/vendor/lodash/_isKeyable.js":
/*!*********************************************!*\
  !*** ./src/lib/vendor/lodash/_isKeyable.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./src/lib/vendor/lodash/_isMasked.js":
/*!********************************************!*\
  !*** ./src/lib/vendor/lodash/_isMasked.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./src/lib/vendor/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./src/lib/vendor/lodash/_listCacheClear.js":
/*!**************************************************!*\
  !*** ./src/lib/vendor/lodash/_listCacheClear.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./src/lib/vendor/lodash/_listCacheDelete.js":
/*!***************************************************!*\
  !*** ./src/lib/vendor/lodash/_listCacheDelete.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./src/lib/vendor/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./src/lib/vendor/lodash/_listCacheGet.js":
/*!************************************************!*\
  !*** ./src/lib/vendor/lodash/_listCacheGet.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./src/lib/vendor/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./src/lib/vendor/lodash/_listCacheHas.js":
/*!************************************************!*\
  !*** ./src/lib/vendor/lodash/_listCacheHas.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./src/lib/vendor/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./src/lib/vendor/lodash/_listCacheSet.js":
/*!************************************************!*\
  !*** ./src/lib/vendor/lodash/_listCacheSet.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./src/lib/vendor/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./src/lib/vendor/lodash/_mapCacheClear.js":
/*!*************************************************!*\
  !*** ./src/lib/vendor/lodash/_mapCacheClear.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./src/lib/vendor/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./src/lib/vendor/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./src/lib/vendor/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./src/lib/vendor/lodash/_mapCacheDelete.js":
/*!**************************************************!*\
  !*** ./src/lib/vendor/lodash/_mapCacheDelete.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./src/lib/vendor/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./src/lib/vendor/lodash/_mapCacheGet.js":
/*!***********************************************!*\
  !*** ./src/lib/vendor/lodash/_mapCacheGet.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./src/lib/vendor/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./src/lib/vendor/lodash/_mapCacheHas.js":
/*!***********************************************!*\
  !*** ./src/lib/vendor/lodash/_mapCacheHas.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./src/lib/vendor/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./src/lib/vendor/lodash/_mapCacheSet.js":
/*!***********************************************!*\
  !*** ./src/lib/vendor/lodash/_mapCacheSet.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./src/lib/vendor/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./src/lib/vendor/lodash/_memoizeCapped.js":
/*!*************************************************!*\
  !*** ./src/lib/vendor/lodash/_memoizeCapped.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./src/lib/vendor/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./src/lib/vendor/lodash/_nativeCreate.js":
/*!************************************************!*\
  !*** ./src/lib/vendor/lodash/_nativeCreate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./src/lib/vendor/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./src/lib/vendor/lodash/_objectToString.js":
/*!**************************************************!*\
  !*** ./src/lib/vendor/lodash/_objectToString.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./src/lib/vendor/lodash/_root.js":
/*!****************************************!*\
  !*** ./src/lib/vendor/lodash/_root.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./src/lib/vendor/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./src/lib/vendor/lodash/_stringToPath.js":
/*!************************************************!*\
  !*** ./src/lib/vendor/lodash/_stringToPath.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./src/lib/vendor/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./src/lib/vendor/lodash/_toKey.js":
/*!*****************************************!*\
  !*** ./src/lib/vendor/lodash/_toKey.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./src/lib/vendor/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./src/lib/vendor/lodash/_toSource.js":
/*!********************************************!*\
  !*** ./src/lib/vendor/lodash/_toSource.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./src/lib/vendor/lodash/eq.js":
/*!*************************************!*\
  !*** ./src/lib/vendor/lodash/eq.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./src/lib/vendor/lodash/get.js":
/*!**************************************!*\
  !*** ./src/lib/vendor/lodash/get.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="node" include="get,isString,isObject,isNumber,isUndefined,isFunction"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var baseGet = __webpack_require__(/*! ./_baseGet */ "./src/lib/vendor/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./src/lib/vendor/lodash/isArray.js":
/*!******************************************!*\
  !*** ./src/lib/vendor/lodash/isArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./src/lib/vendor/lodash/isFunction.js":
/*!*********************************************!*\
  !*** ./src/lib/vendor/lodash/isFunction.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="node" include="get,isString,isObject,isNumber,isUndefined,isFunction"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./src/lib/vendor/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./src/lib/vendor/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./src/lib/vendor/lodash/isNumber.js":
/*!*******************************************!*\
  !*** ./src/lib/vendor/lodash/isNumber.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="node" include="get,isString,isObject,isNumber,isUndefined,isFunction"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./src/lib/vendor/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./src/lib/vendor/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ "./src/lib/vendor/lodash/isObject.js":
/*!*******************************************!*\
  !*** ./src/lib/vendor/lodash/isObject.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="node" include="get,isString,isObject,isNumber,isUndefined,isFunction"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./src/lib/vendor/lodash/isObjectLike.js":
/*!***********************************************!*\
  !*** ./src/lib/vendor/lodash/isObjectLike.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./src/lib/vendor/lodash/isString.js":
/*!*******************************************!*\
  !*** ./src/lib/vendor/lodash/isString.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="node" include="get,isString,isObject,isNumber,isUndefined,isFunction"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./src/lib/vendor/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./src/lib/vendor/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./src/lib/vendor/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./src/lib/vendor/lodash/isSymbol.js":
/*!*******************************************!*\
  !*** ./src/lib/vendor/lodash/isSymbol.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./src/lib/vendor/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./src/lib/vendor/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./src/lib/vendor/lodash/isUndefined.js":
/*!**********************************************!*\
  !*** ./src/lib/vendor/lodash/isUndefined.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="node" include="get,isString,isObject,isNumber,isUndefined,isFunction"`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./src/lib/vendor/lodash/memoize.js":
/*!******************************************!*\
  !*** ./src/lib/vendor/lodash/memoize.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./src/lib/vendor/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./src/lib/vendor/lodash/toString.js":
/*!*******************************************!*\
  !*** ./src/lib/vendor/lodash/toString.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./src/lib/vendor/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnJvd0xpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Fycm93TGluZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy9ub3JtYWxpemVfYW5kX3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3BhcnNlX2FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy9yZWN0YW5nbGVfZnJvbV9wYXJhbS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9jb2xvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9jdXJ2YXR1cmUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvZW5kcG9pbnQvZmlsbF9jb2xvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9vbmx5X3N1cHBvcnRlZC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9zaXplLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL2VuZHBvaW50L3R5cGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvZm9yY2VfZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL29ubHlfc3VwcG9ydGVkLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvcGl2b3RzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9wcm9wZXJ0eV9pbl9lbnVtLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL3NvdXJjZV9hbmRfZGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvc3ZnX3BhcmVudF9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS90aGlja25lc3MuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcnJvd19saW5lLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvYXJyb3dfbGluZV9wcmVmaXguanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9jb25zdC9kaXJlY3Rpb25zLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvZW5kcG9pbnRfcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9jb25zdC9lbmRwb2ludF90eXBlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvbGluZV9zdHlsZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dlb21ldHJ5L2lzX2Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9nZW9tZXRyeS9wb2ludC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dlb21ldHJ5L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dldF9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9nZXRfZW5kcG9pbnRzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvbGluZV9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvbWFya2VyX29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9wYXRoX2RlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9zdmcvc3ZnX2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3N2Zy9zdmdfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi91dGlsL2FyZ3VtZW50X2Vycm9yLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdXRpbC9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi91dGlsL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2lzS2V5LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL190b0tleS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc051bWJlci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc1VuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvdG9TdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5Qyxp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QjtBQUNqQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDeEVBLG1CQUFtQixtQkFBTyxDQUFDLGlFQUFpQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImFycm93LWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhcnJvd0xpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXJyb3dMaW5lXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IGFycm93TGluZSA9IHJlcXVpcmUoJy4vbGliL2Fycm93X2xpbmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcnJvd0xpbmU7IiwiY29uc3QgdmFsaWRhdGVPcHRpb25zID0gcmVxdWlyZSgnLi92YWxpZGF0ZS9vcHRpb25zJyk7XG5cbmNvbnN0IHJlY3RhbmdsZUZyb21QYXJhbSA9IHJlcXVpcmUoJy4vcmVjdGFuZ2xlX2Zyb21fcGFyYW0nKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQW5kVmFsaWRhdGUob3B0aW9ucyl7XG4gIHJldHVybiB7XG4gICAgLi4udmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpLFxuICAgIHNvdXJjZVJlY3RhbmdsZTogcmVjdGFuZ2xlRnJvbVBhcmFtKG9wdGlvbnMuc291cmNlKSxcbiAgICBkZXN0aW5hdGlvblJlY3RhbmdsZTogcmVjdGFuZ2xlRnJvbVBhcmFtKG9wdGlvbnMuZGVzdGluYXRpb24pXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVBbmRWYWxpZGF0ZTsiLCJjb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi8uLi91dGlsL2Vycm9ycycpO1xuXG5jb25zdCBub3JtYWxpemVBbmRWYWxpZGF0ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplX2FuZF92YWxpZGF0ZScpO1xuXG5mdW5jdGlvbiBwYXJzZU11bHRpcGxlQXJndW1lbnRzKGFyZ3Mpe1xuICBpZiAoKGFyZ3MubGVuZ3RoID4gMikgJiYgKCFpc09iamVjdChhcmdzWzJdKSkpIHtcbiAgICBFcnJvcnMubGFzdEFyZ3VtZW50T2JqZWN0KCk7XG4gIH1cbiAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xuICAgIEVycm9ycy5tYXhpbXVtVGhyZWVBcmd1bWVudHMoKTtcbiAgfVxuICBjb25zdCBvcHRpb25zID0gYXJnc1syXSB8fCB7fTtcbiAgaWYgKG9wdGlvbnMuc291cmNlKSB7XG4gICAgRXJyb3JzLmRvdWJsZVNvdXJjZSgpXG4gIH1cbiAgaWYgKG9wdGlvbnMuZGVzdGluYXRpb24pIHtcbiAgICBFcnJvcnMuZG91YmxlRGVzdGluYXRpb24oKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgc291cmNlOiBhcmdzWzBdLFxuICAgIGRlc3RpbmF0aW9uOiBhcmdzWzFdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlU2luZ2xlQXJndW1lbnQoYXJncyl7XG4gIGlmICghaXNPYmplY3QoYXJnc1swXSkpIEVycm9ycy5zaW5nbGVBcmd1bWVudE9iamVjdCgpO1xuICBjb25zdCBvcHRpb25zID0gYXJnc1swXTtcbiAgaWYgKCFvcHRpb25zLnNvdXJjZSkge1xuICAgIEVycm9ycy5taXNzaW5nU291cmNlKCk7XG4gIH1cbiAgaWYgKCFvcHRpb25zLmRlc3RpbmF0aW9uKSB7XG4gICAgRXJyb3JzLm1pc3NpbmdEZXN0aW5hdGlvbigpO1xuICB9XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBzdGFuZGFyZGl6ZShhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PSAwKSB7XG4gICAgRXJyb3JzLmF0TGVhc3RPbmVBcmd1bWVudCgpO1xuICB9XG4gIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gcGFyc2VNdWx0aXBsZUFyZ3VtZW50cyhhcmdzKTtcbiAgfVxuICByZXR1cm4gIHBhcnNlU2luZ2xlQXJndW1lbnQoYXJncyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKGFyZ3MpIHtcbiAgY29uc3QgcmF3T3B0aW9ucyA9IHN0YW5kYXJkaXplKGFyZ3MpO1xuICBjb25zdCBvcHRpb25zID0gbm9ybWFsaXplQW5kVmFsaWRhdGUocmF3T3B0aW9ucylcbiAgcmV0dXJuIHsgcmF3T3B0aW9ucywgb3B0aW9ucyB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlQXJndW1lbnRzOyIsImNvbnN0IFJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vLi4vZ2VvbWV0cnkvcmVjdGFuZ2xlJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLy4uL3V0aWwvZXJyb3JzJyk7XG5jb25zdCBpc0Nvb3JkaW5hdGUgPSByZXF1aXJlKCcuLy4uL2dlb21ldHJ5L2lzX2Nvb3JkaW5hdGUnKTtcblxuZnVuY3Rpb24gcmVjdGFuZ2xlRnJvbVBhcmFtKHBhcmFtKXtcbiAgaWYgKGlzQ29vcmRpbmF0ZShwYXJhbSkpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwYXJhbS54LCBwYXJhbS55LCAwLCAwKTtcbiAgfVxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbSk7XG4gIGlmICghZWxlbWVudCkge1xuICAgIEVycm9ycy5jb3VsZE5vdEZpbmRTZWxlY3RvcihwYXJhbSk7XG4gIH1cbiAgcmV0dXJuIFJlY3RhbmdsZS5mcm9tRE9NRWxlbWVudChlbGVtZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWN0YW5nbGVGcm9tUGFyYW07XG4iLCJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVDb2xvcihvcHRpb25zKXtcbiAgb3B0aW9ucy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJ2JsYWNrJztcbiAgaWYgKCFpc1N0cmluZyhvcHRpb25zLmNvbG9yKSkgRXJyb3JzLm11c3RCZVN0cmluZygnQ29sb3InKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUNvbG9yOyIsImNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJyk7XG5jb25zdCBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVDdXJ2YXR1cmUob3B0aW9ucyl7XG4gIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5jdXJ2YXR1cmUpKSB7XG4gICAgaWYgKCFpc051bWJlcihvcHRpb25zLmN1cnZhdHVyZSkgfHwgKG9wdGlvbnMuY3VydmF0dXJlID09IDApKSB7XG4gICAgICBFcnJvcnMubXVzdEJlTm9uWmVyb051bWJlcignQ3VydmF0dXJlJylcbiAgICB9XG4gIH1cbiAgaWYgKCFvcHRpb25zLnBpdm90cykgb3B0aW9ucy5jdXJ2YXR1cmUgPSBvcHRpb25zLmN1cnZhdHVyZSB8fCAxO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlQ3VydmF0dXJlOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuXG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2Vycm9ycycpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUZpbGxDb2xvcihlbmRwb2ludE9wdGlvbnMpIHtcbiAgY29uc3QgZmlsbENvbG9yID0gZW5kcG9pbnRPcHRpb25zLmZpbGxDb2xvcjtcbiAgaWYgKCFpc1VuZGVmaW5lZChmaWxsQ29sb3IpKXtcbiAgICBpZiAoIWlzU3RyaW5nKGZpbGxDb2xvcikpIEVycm9ycy5tdXN0QmVTdHJpbmcoJ0VuZHBvaW50IGZpbGxDb2xvcicpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUZpbGxDb2xvcjsiLCJjb25zdCB2YWxpZGF0ZVR5cGUgPSByZXF1aXJlKCcuL3R5cGUnKTtcbmNvbnN0IHZhbGlkYXRlRmlsbENvbG9yID0gcmVxdWlyZSgnLi9maWxsX2NvbG9yJyk7XG5jb25zdCB2YWxpZGF0ZVBvc2l0aW9uID0gcmVxdWlyZSgnLi9wb3NpdGlvbicpO1xuY29uc3QgdmFsaWRhdGVTaXplID0gcmVxdWlyZSgnLi9zaXplJyk7XG5jb25zdCB2YWxpZGF0ZU9ubHlTdXBwb3J0ZWRPcHRpb25zID0gcmVxdWlyZSgnLi9vbmx5X3N1cHBvcnRlZCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUVuZHBvaW50KG9wdGlvbnMpe1xuICBvcHRpb25zLmVuZHBvaW50ID0gb3B0aW9ucy5lbmRwb2ludCB8fCB7fTtcbiAgdmFsaWRhdGVUeXBlKG9wdGlvbnMuZW5kcG9pbnQpO1xuICB2YWxpZGF0ZUZpbGxDb2xvcihvcHRpb25zLmVuZHBvaW50KTtcbiAgdmFsaWRhdGVQb3NpdGlvbihvcHRpb25zLmVuZHBvaW50KTtcbiAgdmFsaWRhdGVTaXplKG9wdGlvbnMuZW5kcG9pbnQpO1xuICBvcHRpb25zLmVuZHBvaW50LmZpbGxDb2xvciA9IG9wdGlvbnMuZW5kcG9pbnQuZmlsbENvbG9yIHx8IG9wdGlvbnMuY29sb3I7XG4gIHZhbGlkYXRlT25seVN1cHBvcnRlZE9wdGlvbnMob3B0aW9ucy5lbmRwb2ludCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVFbmRwb2ludDsiLCJjb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2Vycm9ycycpO1xuXG5jb25zdCBTVVBQT1JURURfT1BUSU9OUyA9IFtcbiAgJ3R5cGUnLFxuICAnbWFya2VySWRlbnRpZmllcicsXG4gICdmaWxsQ29sb3InLFxuICAnc2l6ZScsXG4gICdwb3NpdGlvbidcbl07XG5cblxuZnVuY3Rpb24gdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9ucyhvcHRpb25zKXtcbiAgY29uc3QgdW5yZWNvZ25pemVkT3B0aW9uID0gT2JqZWN0LmtleXMob3B0aW9ucykuZmluZChvcHRpb25OYW1lID0+IHtcbiAgICByZXR1cm4gIVNVUFBPUlRFRF9PUFRJT05TLmluY2x1ZGVzKG9wdGlvbk5hbWUpO1xuICB9KTtcbiAgaWYgKHVucmVjb2duaXplZE9wdGlvbikge1xuICAgIEVycm9ycy51bnJlY29nbml6ZWRFbmRwb2ludE9wdGlvbih1bnJlY29nbml6ZWRPcHRpb24pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9uczsiLCJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuY29uc3QgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcbmNvbnN0IEVuZHBvaW50UG9zaXRpb24gPSByZXF1aXJlKCcuLi8uLi8uLi9jb25zdC9lbmRwb2ludF9wb3NpdGlvbicpO1xuXG5jb25zdCB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtID0gcmVxdWlyZSgnLi4vcHJvcGVydHlfaW5fZW51bScpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuY29uc3QgUE9TSVRJT05TID0gT2JqZWN0LnZhbHVlcyhFbmRwb2ludFBvc2l0aW9uKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQb3NpdGlvbihlbmRwb2ludE9wdGlvbnMpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBlbmRwb2ludE9wdGlvbnMucG9zaXRpb247XG4gIGlmICghaXNVbmRlZmluZWQocG9zaXRpb24pKXtcbiAgICBpZiAoIWlzU3RyaW5nKHBvc2l0aW9uKSkgRXJyb3JzLm11c3RCZVN0cmluZygnRW5kcG9pbnQgcG9zaXRpb24nKTtcbiAgICB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtKGVuZHBvaW50T3B0aW9ucywgJ3Bvc2l0aW9uJywgUE9TSVRJT05TLCAnZW5kcG9pbnQgcG9zaXRpb24nKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlUG9zaXRpb247IiwiY29uc3QgaXNOdW1iZXIgPSByZXF1aXJlKCdsb2Rhc2gvaXNOdW1iZXInKTtcbmNvbnN0IGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJyk7XG5cbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2l6ZShlbmRwb2ludE9wdGlvbnMpIHtcbiAgY29uc3Qgc2l6ZSA9IGVuZHBvaW50T3B0aW9ucy5zaXplO1xuICBpZiAoIWlzVW5kZWZpbmVkKHNpemUpKXtcbiAgICBpZiAoIWlzTnVtYmVyKHNpemUpIHx8IChzaXplPD0wKSkgRXJyb3JzLm11c3RCZVBvc2l0aXZlTnVtYmVyKCdFbmRwb2ludCBzaXplJylcbiAgfVxuICBlbmRwb2ludE9wdGlvbnMuc2l6ZSA9IGVuZHBvaW50T3B0aW9ucy5zaXplIHx8IDE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVTaXplOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBFbmRwb2ludFR5cGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb25zdC9lbmRwb2ludF90eXBlJyk7XG5jb25zdCB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtID0gcmVxdWlyZSgnLi4vcHJvcGVydHlfaW5fZW51bScpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuY29uc3QgTUFSS0VSUyA9IE9iamVjdC5rZXlzKEVuZHBvaW50VHlwZSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ3VzdG9tVHlwZShlbmRwb2ludE9wdGlvbnMpe1xuICBpZiAoZW5kcG9pbnRPcHRpb25zLnR5cGUgPT0gRW5kcG9pbnRUeXBlLmN1c3RvbSkge1xuICAgIGlmICghZW5kcG9pbnRPcHRpb25zLm1hcmtlcklkZW50aWZpZXIpIHtcbiAgICAgIEVycm9ycy5taXNzaW5nTWFya2VySWRlbnQoKTtcbiAgICB9XG4gICAgaWYgKCFpc1N0cmluZyhlbmRwb2ludE9wdGlvbnMubWFya2VySWRlbnRpZmllcikpIHtcbiAgICAgIEVycm9ycy5tdXN0QmVTdHJpbmcoKTtcbiAgICB9XG4gICAgY29uc3QgdW5hdmFpbGFibGVQcm9wZXJ0eSA9IFsnZmlsbENvbG9yJywgJ3NpemUnXS5maW5kKHByb3AgPT4gZW5kcG9pbnRPcHRpb25zW3Byb3BdKTtcbiAgICBpZiAodW5hdmFpbGFibGVQcm9wZXJ0eSkge1xuICAgICAgRXJyb3JzLm1hcmtlckN1c3RvbWl6YXRpb25VbmF2YWlsYWJsZSh1bmF2YWlsYWJsZVByb3BlcnR5KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVuZHBvaW50T3B0aW9ucy5tYXJrZXJJZGVudGlmaWVyKSB7XG4gICAgICBFcnJvcnMubWFya2VySWRlbnRPbmx5Q3VzdG9tKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVHlwZShlbmRwb2ludE9wdGlvbnMpe1xuICBlbmRwb2ludE9wdGlvbnMudHlwZSA9IGVuZHBvaW50T3B0aW9ucy50eXBlIHx8IEVuZHBvaW50VHlwZS5hcnJvd0hlYWRGaWxsZWQ7XG4gIHZhbGlkYXRlUHJvcGVydHlJbkVudW0oZW5kcG9pbnRPcHRpb25zLCAndHlwZScsIE1BUktFUlMsICdlbmRwb2ludCB0eXBlJyk7XG4gIHZhbGlkYXRlQ3VzdG9tVHlwZShlbmRwb2ludE9wdGlvbnMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlVHlwZTsiLCJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuY29uc3QgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0L2RpcmVjdGlvbnMnKTtcbmNvbnN0IHZhbGlkYXRlUHJvcGVydHlJbkVudW0gPSByZXF1aXJlKCcuL3Byb3BlcnR5X2luX2VudW0nKTtcblxuY29uc3QgRElSRUNUSU9OUyA9IE9iamVjdC52YWx1ZXMoRGlyZWN0aW9uKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVGb3JjZURpcmVjdGlvbihvcHRpb25zKXtcbiAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmZvcmNlRGlyZWN0aW9uKSl7XG4gICAgaWYgKCFpc1N0cmluZyhvcHRpb25zLmZvcmNlRGlyZWN0aW9uKSl7XG4gICAgICBFcnJvcnMubXVzdEJlU3RyaW5nKCdmb3JjZURpcmVjdGlvbicpXG4gICAgfVxuICAgIHZhbGlkYXRlUHJvcGVydHlJbkVudW0ob3B0aW9ucywgJ2ZvcmNlRGlyZWN0aW9uJywgRElSRUNUSU9OUywgJ2RpcmVjdGlvbiB0eXBlJyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUZvcmNlRGlyZWN0aW9uOyIsImNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmNvbnN0IFNVUFBPUlRFRF9PUFRJT05TID0gW1xuICAnc291cmNlJyxcbiAgJ2Rlc3RpbmF0aW9uJyxcbiAgJ2NvbG9yJyxcbiAgJ2N1cnZhdHVyZScsXG4gICdwaXZvdHMnLFxuICAnc291cmNlUG9zaXRpb24nLFxuICAnZGVzdGluYXRpb25Qb3NpdGlvbicsXG4gICdzdHlsZScsXG4gICd0aGlja25lc3MnLFxuICAnZm9yY2VEaXJlY3Rpb24nLFxuICAnZW5kcG9pbnQnLFxuICAnc3ZnUGFyZW50U2VsZWN0b3InXG5dO1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlT25seVN1cHBvcnRlZE9wdGlvbnMob3B0aW9ucyl7XG4gIGNvbnN0IHVucmVjb2duaXplZE9wdGlvbiA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbmQob3B0aW9uTmFtZSA9PiB7XG4gICAgcmV0dXJuICFTVVBQT1JURURfT1BUSU9OUy5pbmNsdWRlcyhvcHRpb25OYW1lKTtcbiAgfSk7XG4gIGlmICh1bnJlY29nbml6ZWRPcHRpb24pIHtcbiAgICBFcnJvcnMudW5yZWNvZ25pemVkT3B0aW9uKHVucmVjb2duaXplZE9wdGlvbik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZU9ubHlTdXBwb3J0ZWRPcHRpb25zOyIsImNvbnN0IHZhbGlkYXRlU291cmNlQW5kRGVzdGluYXRpb24gPSByZXF1aXJlKCcuL3NvdXJjZV9hbmRfZGVzdGluYXRpb24nKTtcbmNvbnN0IHZhbGlkYXRlQ29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyk7XG5jb25zdCB2YWxpZGF0ZVRoaWNrbmVzcyA9IHJlcXVpcmUoJy4vdGhpY2tuZXNzJyk7XG5jb25zdCB2YWxpZGF0ZUN1cnZhdHVyZSA9IHJlcXVpcmUoJy4vY3VydmF0dXJlJyk7XG5jb25zdCB2YWxpZGF0ZVBvc2l0aW9ucyA9IHJlcXVpcmUoJy4vcG9zaXRpb25zJyk7XG5jb25zdCB2YWxpZGF0ZVBpdm90cyA9IHJlcXVpcmUoJy4vcGl2b3RzJyk7XG5jb25zdCB2YWxpZGF0ZVN2Z1BhcmVudFNlbGVjdG9yID0gcmVxdWlyZSgnLi9zdmdfcGFyZW50X3NlbGVjdG9yJyk7XG5jb25zdCB2YWxpZGF0ZVN0eWxlID0gcmVxdWlyZSgnLi9zdHlsZScpO1xuY29uc3QgdmFsaWRhdGVGb3JjZURpcmVjdGlvbiA9IHJlcXVpcmUoJy4vZm9yY2VfZGlyZWN0aW9uJyk7XG5jb25zdCB2YWxpZGF0ZUVuZHBvaW50ID0gcmVxdWlyZSgnLi9lbmRwb2ludCcpO1xuY29uc3QgdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9ucyA9IHJlcXVpcmUoJy4vb25seV9zdXBwb3J0ZWQnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpe1xuICB2YWxpZGF0ZVNvdXJjZUFuZERlc3RpbmF0aW9uKG9wdGlvbnMpO1xuICB2YWxpZGF0ZU9ubHlTdXBwb3J0ZWRPcHRpb25zKG9wdGlvbnMpO1xuICB2YWxpZGF0ZUNvbG9yKG9wdGlvbnMpO1xuICB2YWxpZGF0ZVRoaWNrbmVzcyhvcHRpb25zKTtcbiAgdmFsaWRhdGVDdXJ2YXR1cmUob3B0aW9ucyk7XG4gIHZhbGlkYXRlU3R5bGUob3B0aW9ucyk7XG4gIHZhbGlkYXRlUG9zaXRpb25zKG9wdGlvbnMpO1xuICB2YWxpZGF0ZVBpdm90cyhvcHRpb25zKTtcbiAgdmFsaWRhdGVFbmRwb2ludChvcHRpb25zKTtcbiAgdmFsaWRhdGVTdmdQYXJlbnRTZWxlY3RvcihvcHRpb25zKTtcbiAgdmFsaWRhdGVGb3JjZURpcmVjdGlvbihvcHRpb25zKTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVPcHRpb25zOyIsImNvbnN0IGlzQ29vcmRpbmF0ZSA9IHJlcXVpcmUoJy4uLy4uL2dlb21ldHJ5L2lzX2Nvb3JkaW5hdGUnKTtcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGl2b3RzKG9wdGlvbnMpe1xuICBpZiAob3B0aW9ucy5waXZvdHMpIHtcbiAgICBpZiAoIShBcnJheS5pc0FycmF5KG9wdGlvbnMucGl2b3RzKSAmJiAob3B0aW9ucy5waXZvdHMubGVuZ3RoID09IDIpICYmIChvcHRpb25zLnBpdm90cy5ldmVyeShpc0Nvb3JkaW5hdGUpKSkpIHtcbiAgICAgIEVycm9ycy5waXZvdHNGb3JtYXQoKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY3VydmF0dXJlKSB7XG4gICAgICBFcnJvcnMucGl2b3RzQW5kQ3VydmF0dXJlKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVQaXZvdHM7IiwiY29uc3QgaXNDb29yZGluYXRlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvaXNfY29vcmRpbmF0ZScpO1xuY29uc3QgUmVjdGFuZ2xlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvcmVjdGFuZ2xlJyk7XG5jb25zdCB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtID0gcmVxdWlyZSgnLi9wcm9wZXJ0eV9pbl9lbnVtJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xuXG5jb25zdCBQT1NJVElPTlMgPSBPYmplY3Qua2V5cyhSZWN0YW5nbGUuU0lERVMpO1xuZnVuY3Rpb24gdmFsaWRhdGVQb3NpdGlvbnMob3B0aW9ucyl7XG4gIGlmIChvcHRpb25zLnNvdXJjZVBvc2l0aW9uKSB7XG4gICAgaWYgKGlzQ29vcmRpbmF0ZShvcHRpb25zLnNvdXJjZSkpIHtcbiAgICAgIEVycm9ycy5wb3NpdGlvbldpdGhDb29yZHMoJ3NvdXJjZScpO1xuICAgIH1cbiAgICB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtKG9wdGlvbnMsICdzb3VyY2VQb3NpdGlvbicsIFBPU0lUSU9OUywgJ3Bvc2l0aW9uJyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5kZXN0aW5hdGlvblBvc2l0aW9uKSB7XG4gICAgaWYgKGlzQ29vcmRpbmF0ZShvcHRpb25zLmRlc3RpbmF0aW9uKSkge1xuICAgICAgRXJyb3JzLnBvc2l0aW9uV2l0aENvb3JkcygnZGVzdGluYXRpb24nKTtcbiAgICB9XG4gICAgdmFsaWRhdGVQcm9wZXJ0eUluRW51bShvcHRpb25zLCAnZGVzdGluYXRpb25Qb3NpdGlvbicsIFBPU0lUSU9OUywgJ3Bvc2l0aW9uJyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVBvc2l0aW9uczsiLCJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuY29uc3QgZ2V0ID0gcmVxdWlyZSgnbG9kYXNoL2dldCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0eUluRW51bShvcHRpb25zLCBwcm9wZXJ0eVBhdGgsIGVudW1lcmF0aW9uLCBsYWJlbCl7XG4gIGNvbnN0IGxhYmVsX2FyciA9IGlzU3RyaW5nKGxhYmVsKSA/IFtsYWJlbCwgYCR7bGFiZWx9c2BdIDogbGFiZWw7XG4gIGNvbnN0IHByb3AgPSBnZXQob3B0aW9ucywgcHJvcGVydHlQYXRoKTtcbiAgaWYgKChwcm9wKSAmJiAoIWVudW1lcmF0aW9uLmluY2x1ZGVzKHByb3ApKSkge1xuICAgIEVycm9ycy52YWxJbkVudW0ocHJvcCwgZW51bWVyYXRpb24sIGxhYmVsX2Fycik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xuY29uc3QgaXNDb29yZGluYXRlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvaXNfY29vcmRpbmF0ZScpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVNvdXJjZUFuZERlc3RpbmF0aW9uKG9wdGlvbnMpe1xuICBpZiAoIVtvcHRpb25zLnNvdXJjZSwgb3B0aW9ucy5kZXN0aW5hdGlvbl0uZXZlcnkoc2VsID0+IGlzU3RyaW5nKHNlbCkgfHwgaXNDb29yZGluYXRlKHNlbCkpKSB7XG4gICAgRXJyb3JzLnNvdXJjZUFuZERlc3RpbmF0aW9uRm9ybWF0KCk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVTb3VyY2VBbmREZXN0aW5hdGlvbjsiLCJjb25zdCBMaW5lU3R5bGUgPSByZXF1aXJlKCcuLi8uLi9jb25zdC9saW5lX3N0eWxlJyk7XG5jb25zdCB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtID0gcmVxdWlyZSgnLi9wcm9wZXJ0eV9pbl9lbnVtJyk7XG5cbmNvbnN0IFNUWUxFUyA9IE9iamVjdC5rZXlzKExpbmVTdHlsZSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU3R5bGUob3B0aW9ucyl7XG4gIHZhbGlkYXRlUHJvcGVydHlJbkVudW0ob3B0aW9ucywgJ3N0eWxlJywgU1RZTEVTLCAnc3R5bGUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVN0eWxlOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTdmdQYXJlbnRTZWxlY3RvcihvcHRpb25zKXtcbiAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN2Z1BhcmVudFNlbGVjdG9yKSkge1xuICAgIGlmICghaXNTdHJpbmcob3B0aW9ucy5zdmdQYXJlbnRTZWxlY3RvcikpIHtcbiAgICAgIEVycm9ycy5tdXN0QmVTdHJpbmcoJ3N2Z1BhcmVudFNlbGVjdG9yJyk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVTdmdQYXJlbnRTZWxlY3RvcjsiLCJjb25zdCBpc051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bWJlcicpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVUaGlja25lc3Mob3B0aW9ucyl7XG4gIG9wdGlvbnMudGhpY2tuZXNzID0gb3B0aW9ucy50aGlja25lc3MgfHwgMTtcbiAgaWYgKCFpc051bWJlcihvcHRpb25zLnRoaWNrbmVzcykpIHtcbiAgICBFcnJvcnMubXVzdEJlTnVtYmVyKCdUaGlja25lc3MnKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVUaGlja25lc3M7XG4iLCJjb25zdCBwYXJzZUFyZ3VtZW50cyA9IHJlcXVpcmUoJy4vYXJndW1lbnRzL3BhcnNlX2FyZ3VtZW50cycpO1xuY29uc3QgbGluZUF0dHJpYnV0ZXMgPSByZXF1aXJlKCcuL2xpbmVfYXR0cmlidXRlcycpO1xuY29uc3QgcGF0aERlZmluaXRpb24gPSByZXF1aXJlKCcuL3BhdGhfZGVmaW5pdGlvbicpO1xuY29uc3QgZ2V0RW5kcG9pbnRzID0gcmVxdWlyZSgnLi9nZXRfZW5kcG9pbnRzJyk7XG5jb25zdCBtYXJrZXJPcHRpb25zID0gcmVxdWlyZSgnLi9tYXJrZXJfb3B0aW9ucycpO1xuY29uc3QgZ2V0Q2FudmFzID0gcmVxdWlyZSgnLi9nZXRfY2FudmFzJyk7XG5jb25zdCBub3JtYWxpemVBbmRWYWxpZGF0ZSA9IHJlcXVpcmUoJy4vYXJndW1lbnRzL25vcm1hbGl6ZV9hbmRfdmFsaWRhdGUnKTtcblxuY29uc3QgaXNPYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNPYmplY3QnKTtcblxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi91dGlsL2Vycm9ycycpO1xuXG5mdW5jdGlvbiBnZXRQYXRoQXR0cmlidXRlTmFtZXMoc3ZnUGF0aCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ZnUGF0aC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHN2Z1BhdGguYXR0cmlidXRlcy5pdGVtKGkpLm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRQYXRoQXR0cmlidXRlcyhzdmcsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7YmVnaW5Qb2ludCwgZW5kUG9pbnQsIGRpcmVjdGlvbn0gPSBnZXRFbmRwb2ludHMob3B0aW9ucyk7XG4gICAgY29uc3QgcGF0aERlZmluaXRpb25PcHRpb25zID0ge1xuICAgICAgICBkaXJlY3Rpb246IG9wdGlvbnMuZm9yY2VEaXJlY3Rpb24gfHwgZGlyZWN0aW9uLFxuICAgICAgICBjdXJ2YXR1cmU6IG9wdGlvbnMuY3VydmF0dXJlLFxuICAgICAgICBwaXZvdHM6IG9wdGlvbnMucGl2b3RzXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkOiBwYXRoRGVmaW5pdGlvbihvcHRpb25zLnNvdXJjZVJlY3RhbmdsZVtiZWdpblBvaW50XSwgb3B0aW9ucy5kZXN0aW5hdGlvblJlY3RhbmdsZVtlbmRQb2ludF0sIHBhdGhEZWZpbml0aW9uT3B0aW9ucyksXG4gICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgc3Ryb2tlOiBvcHRpb25zLmNvbG9yLFxuICAgICAgICAuLi5saW5lQXR0cmlidXRlcyhvcHRpb25zKSxcbiAgICAgICAgLi4ubWFya2VyT3B0aW9ucyhzdmcsIG9wdGlvbnMpXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHNldFBhdGhBdHRyaWJ1dGVzKHN2Z1BhdGgsIHBhdGhBdHRyaWJ1dGVzKSB7XG4gICAgZ2V0UGF0aEF0dHJpYnV0ZU5hbWVzKHN2Z1BhdGgpLmZvckVhY2goYXR0ck5hbWUgPT4gc3ZnUGF0aC5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbShhdHRyTmFtZSkpO1xuICAgIGZvciAobGV0IGF0dHJpYnV0ZU5hbWUgaW4gcGF0aEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3ZnUGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBhdHRyaWJ1dGVOYW1lLCBwYXRoQXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhcnJvd0xpbmUoLi4uYXJncykge1xuICAgIGNvbnN0IHBhcnNlZEFyZ3VtZW50cyA9IHBhcnNlQXJndW1lbnRzKGFyZ3MpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBwYXJzZWRBcmd1bWVudHMub3B0aW9ucztcbiAgICBsZXQgcmF3T3B0aW9ucyA9IHBhcnNlZEFyZ3VtZW50cy5yYXdPcHRpb25zO1xuICAgIGNvbnN0IHN2ZyA9IGdldENhbnZhcyhvcHRpb25zLnN2Z1BhcmVudFNlbGVjdG9yKTtcbiAgICBjb25zdCBzdmdQYXRoID0gc3ZnLmNyZWF0ZVBhdGgoKTtcbiAgICBzZXRQYXRoQXR0cmlidXRlcyhzdmdQYXRoLCBnZXRQYXRoQXR0cmlidXRlcyhzdmcsIG9wdGlvbnMpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQYXJlbnRTdmdJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdmcucGFyZW50Q2FudmFzLmlkO1xuICAgICAgICB9LFxuICAgICAgICBnZXRSYXdTdmdQYXRoKCl7XG4gICAgICAgICAgcmV0dXJuIHN2Z1BhdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogKCkgPT4ge1xuICAgICAgICAgICAgc3ZnUGF0aC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Z1BhdGgpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggIT0gMSkge1xuICAgICAgICAgICAgICAgIEVycm9ycy5leGFjdGx5T25lQXJndW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSBhcmdzWzBdO1xuICAgICAgICAgICAgaWYgKCFpc09iamVjdCh1cGRhdGVPcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIEVycm9ycy5hcmd1bWVudE11c3RCZU9iamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVwZGF0ZU9wdGlvbnMuc3ZnUGFyZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBFcnJvcnMuc3ZnUGFyZW50Tm90QWxsb3dlZEluVXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdSYXdPcHRpb25zID0gey4uLnJhd09wdGlvbnMsIC4uLnVwZGF0ZU9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IG5vcm1hbGl6ZUFuZFZhbGlkYXRlKG5ld1Jhd09wdGlvbnMpO1xuICAgICAgICAgICAgc2V0UGF0aEF0dHJpYnV0ZXMoc3ZnUGF0aCwgZ2V0UGF0aEF0dHJpYnV0ZXMoc3ZnLCBuZXdPcHRpb25zKSk7XG4gICAgICAgICAgICByYXdPcHRpb25zID0gbmV3UmF3T3B0aW9ucztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJvd0xpbmU7IiwibW9kdWxlLmV4cG9ydHMgPSBgX19hcnJvd0xpbmVJbnRlcm5hbGA7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIEhPUklaT05UQUw6ICdob3Jpem9udGFsJyxcbiAgVkVSVElDQUw6ICd2ZXJ0aWNhbCdcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgU1RBUlQ6ICdzdGFydCcsXG4gIEVORDogJ2VuZCcsXG4gIEJPVEg6ICdib3RoJ1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXJyb3dIZWFkRmlsbGVkOiAnYXJyb3dIZWFkRmlsbGVkJyxcbiAgYXJyb3dIZWFkOiAnYXJyb3dIZWFkJyxcbiAgc3F1YXJlczogJ3NxdWFyZXMnLFxuICBjaXJjbGVzOiAnY2lyY2xlcycsXG4gIGN1c3RvbTogJ2N1c3RvbScsXG4gIG5vbmU6ICdub25lJ1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZG90OiAnMSAxJyxcbiAgZGFzaDogJzQgMScsXG4gIHNvbGlkOiAnJyxcbiAgJ2RvdC1kYXNoJzogJzEgMSA0IDEnXG59OyIsImNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJyk7XG5jb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpO1xuXG5mdW5jdGlvbiBpc0Nvb3JkaW5hdGUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgaWYgKCFrZXlzLmluY2x1ZGVzKCd4JykpIHJldHVybiBmYWxzZTtcbiAgaWYgKCFrZXlzLmluY2x1ZGVzKCd5JykpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTnVtYmVyKG9iai54KSAmJiBpc051bWJlcihvYmoueSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDb29yZGluYXRlOyIsImNvbnN0IGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJyk7XG5jbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgseSl7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgdHJhbnNsYXRlKGZpcnN0LCBzZWNvbmQpe1xuICAgIGxldCB4LHk7XG4gICAgaWYgKGZpcnN0ICYmIGlzVW5kZWZpbmVkKHNlY29uZCkpIHtcbiAgICAgIFt4LHldID0gW2ZpcnN0LngsIGZpcnN0LnldO1xuICAgIH0gZWxzZSB7XG4gICAgICBbeCx5XSA9IFtmaXJzdCwgc2Vjb25kXTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50KHRoaXMueCsoeCB8fCAwKSwgdGhpcy55ICsgKHkgfHwgMCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBsZWZ0T2Yob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy54IDwgb3RoZXIueFxuICB9XG5cbiAgYWJvdmVPZihvdGhlcikge1xuICAgIHJldHVybiB0aGlzLnkgPCBvdGhlci55XG4gIH1cblxuICBob3Jpem9udGFsbHlBbGlnbmVkVG8ob3RoZXIpe1xuICAgIGNvbnN0IGhEaXN0ID0gTWF0aC5hYnMob3RoZXIueCAtIHRoaXMueCk7XG4gICAgY29uc3QgdkRpc3QgPSBNYXRoLmFicyhvdGhlci55IC0gdGhpcy55KTtcbiAgICByZXR1cm4gaERpc3QgPiB2RGlzdDtcbiAgfVxuXG4gIHN0cigpIHtcbiAgICByZXR1cm4gYCR7dGhpcy54fSAke3RoaXMueX1gXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb2ludDsiLCJjb25zdCBQb2ludCA9IHJlcXVpcmUoJy4vcG9pbnQnKTtcblxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoeCx5LCB3aWR0aCwgaGVpZ2h0KXtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZ2V0IHRvcExlZnQoKXsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7IH1cbiAgZ2V0IHRvcFJpZ2h0KCl7IHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy55KTsgfVxuICBnZXQgdG9wQ2VudGVyKCl7IHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgdGhpcy53aWR0aC8yLCB0aGlzLnkpIH1cbiAgZ2V0IG1pZGRsZUxlZnQoKXsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSsgdGhpcy5oZWlnaHQvMikgfVxuICBnZXQgbWlkZGxlUmlnaHQoKXsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngrIHRoaXMud2lkdGgsIHRoaXMueSsgdGhpcy5oZWlnaHQvMikgfVxuICBnZXQgYm90dG9tTGVmdCgpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSsgdGhpcy5oZWlnaHQpIH1cbiAgZ2V0IGJvdHRvbUNlbnRlcigpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyB0aGlzLndpZHRoLzIsIHRoaXMueSsgdGhpcy5oZWlnaHQpIH1cbiAgZ2V0IGJvdHRvbVJpZ2h0KCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCt0aGlzLndpZHRoLCB0aGlzLnkrIHRoaXMuaGVpZ2h0KSB9XG5cbiAgbGVmdE9mKG90aGVyKXtcbiAgICByZXR1cm4gdGhpcy5taWRkbGVMZWZ0LmxlZnRPZihvdGhlci5taWRkbGVMZWZ0KTtcbiAgfVxuXG4gIGdldCBjZW50ZXIoKXsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyB0aGlzLndpZHRoLzIsIHRoaXMueSArIHRoaXMuaGVpZ2h0LzIpIH1cblxuXG4gIGFib3ZlT2Yob3RoZXIpe1xuICAgIHJldHVybiB0aGlzLnRvcENlbnRlci5hYm92ZU9mKG90aGVyLnRvcENlbnRlcik7XG4gIH1cbn1cblxuUmVjdGFuZ2xlLlNJREVTID0ge1xuICB0b3BMZWZ0OiAndG9wTGVmdCcsXG4gIHRvcFJpZ2h0OiAndG9wUmlnaHQnLFxuICB0b3BDZW50ZXI6ICd0b3BDZW50ZXInLFxuICBtaWRkbGVSaWdodDogJ21pZGRsZVJpZ2h0JyxcbiAgbWlkZGxlTGVmdDogJ21pZGRsZUxlZnQnLFxuICBib3R0b21MZWZ0OiAnYm90dG9tTGVmdCcsXG4gIGJvdHRvbUNlbnRlcjogJ2JvdHRvbUNlbnRlcicsXG4gIGJvdHRvbVJpZ2h0OiAnYm90dG9tUmlnaHQnXG59O1xuXG5mdW5jdGlvbiBmaW5kQWJzb2x1dGVQb3NpdGlvbihodG1sRWxlbWVudCkge1xuICBmb3IgKHZhciB4ID0gMCwgeSA9IDAsIGVsID0gaHRtbEVsZW1lbnQ7IGVsICE9IG51bGw7IGVsID0gZWwub2Zmc2V0UGFyZW50KSB7XG4gICAgeCArPSBlbC5vZmZzZXRMZWZ0O1xuICAgIHkgKz0gZWwub2Zmc2V0VG9wO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQb2ludCh4LHkpO1xufVxuXG5cblJlY3RhbmdsZS5mcm9tRE9NRWxlbWVudCA9IGZ1bmN0aW9uKERPTUVsZW1lbnQpe1xuICBjb25zdCBwb3NpdGlvbiA9IGZpbmRBYnNvbHV0ZVBvc2l0aW9uKERPTUVsZW1lbnQpO1xuICByZXR1cm4gbmV3IFJlY3RhbmdsZShcbiAgICBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBET01FbGVtZW50Lm9mZnNldFdpZHRoLCBET01FbGVtZW50Lm9mZnNldEhlaWdodFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWN0YW5nbGU7IiwiY29uc3QgU3ZnQ2FudmFzID0gcmVxdWlyZSgnLi9zdmcvc3ZnX2NhbnZhcycpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi91dGlsL2Vycm9ycycpO1xuXG5jb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gZ2V0U3ZnQ2FudmFzKHNlbGVjdG9yKXtcbiAgbGV0IGRvbUVsZW1lbnQ7XG4gIGlmICghc2VsZWN0b3Ipe1xuICAgIGRvbUVsZW1lbnQgPSBTdmdDYW52YXMuZGVmYXVsdFN2Z0VsZW1lbnQoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWNhY2hlLmhhcyhzZWxlY3RvcikpIHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICBpZiAoIWVsKSB7XG4gICAgICAgIEVycm9ycy5jb3VsZE5vdEZpbmRTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICBjYWNoZS5zZXQoc2VsZWN0b3IsIGVsKTtcbiAgICB9XG4gICAgZG9tRWxlbWVudCA9ICBjYWNoZS5nZXQoc2VsZWN0b3IpXG4gIH1cbiAgcmV0dXJuIG5ldyBTdmdDYW52YXMoZG9tRWxlbWVudCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ZnQ2FudmFzOyIsImNvbnN0IFJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJyk7XG5jb25zdCB7SE9SSVpPTlRBTCwgVkVSVElDQUx9ID0gcmVxdWlyZSgnLi9jb25zdC9kaXJlY3Rpb25zJyk7XG5jb25zdCB7IHJldmVyc2VJZiB9ID0gcmVxdWlyZSgnLi91dGlsL2hlbHBlcicpO1xuXG5jb25zdCBkaXJlY3Rpb25FbmRwb2ludHMgPSB7XG4gIFtIT1JJWk9OVEFMXTogKHNvdXJjZVJlY3RhbmdsZSwgZGVzdGluYXRpb25SZWN0YW5nbGUpID0+IHJldmVyc2VJZihcbiAgICBbUmVjdGFuZ2xlLlNJREVTLm1pZGRsZUxlZnQsIFJlY3RhbmdsZS5TSURFUy5taWRkbGVSaWdodF0sXG4gICAgc291cmNlUmVjdGFuZ2xlLmxlZnRPZihkZXN0aW5hdGlvblJlY3RhbmdsZSlcbiAgKSxcbiAgW1ZFUlRJQ0FMXTogKHNvdXJjZVJlY3RhbmdsZSwgZGVzdGluYXRpb25SZWN0YW5nbGUpID0+IHJldmVyc2VJZihcbiAgICBbUmVjdGFuZ2xlLlNJREVTLnRvcENlbnRlciwgUmVjdGFuZ2xlLlNJREVTLmJvdHRvbUNlbnRlcl0sXG4gICAgc291cmNlUmVjdGFuZ2xlLmFib3ZlT2YoZGVzdGluYXRpb25SZWN0YW5nbGUpKVxufTtcblxuZnVuY3Rpb24gZ2V0RW5kcG9pbnRzKHtzb3VyY2VSZWN0YW5nbGUsIGRlc3RpbmF0aW9uUmVjdGFuZ2xlLCBzb3VyY2VQb3NpdGlvbiwgZGVzdGluYXRpb25Qb3NpdGlvbn0pe1xuICBjb25zdCBkaXJlY3Rpb24gPSBzb3VyY2VSZWN0YW5nbGUuY2VudGVyLmhvcml6b250YWxseUFsaWduZWRUbyhkZXN0aW5hdGlvblJlY3RhbmdsZS5jZW50ZXIpID8gSE9SSVpPTlRBTCA6IFZFUlRJQ0FMO1xuICBsZXQgW2JlZ2luUG9pbnQsIGVuZFBvaW50XSA9IGRpcmVjdGlvbkVuZHBvaW50c1tkaXJlY3Rpb25dKHNvdXJjZVJlY3RhbmdsZSwgZGVzdGluYXRpb25SZWN0YW5nbGUpO1xuXG4gIGlmIChzb3VyY2VQb3NpdGlvbikge1xuICAgIGJlZ2luUG9pbnQgPSBzb3VyY2VQb3NpdGlvbjtcbiAgfVxuXG4gIGlmIChkZXN0aW5hdGlvblBvc2l0aW9uKSB7XG4gICAgZW5kUG9pbnQgPSBkZXN0aW5hdGlvblBvc2l0aW9uO1xuICB9XG4gIHJldHVybiB7XG4gICAgYmVnaW5Qb2ludCxcbiAgICBlbmRQb2ludCxcbiAgICBkaXJlY3Rpb25cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEVuZHBvaW50czsiLCJjb25zdCBMaW5lU3R5bGUgPSByZXF1aXJlKCcuL2NvbnN0L2xpbmVfc3R5bGUnKTtcblxuZnVuY3Rpb24gbGluZUF0dHJpYnV0ZXMob3B0aW9ucyl7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBpZiAob3B0aW9ucy5zdHlsZSkge1xuICAgIHJlc3VsdFsnc3Ryb2tlLWRhc2hhcnJheSddID0gTGluZVN0eWxlW29wdGlvbnMuc3R5bGVdO1xuICB9XG4gIGlmIChvcHRpb25zLnRoaWNrbmVzcykge1xuICAgIHJlc3VsdFsnc3Ryb2tlLXdpZHRoJ10gPSBvcHRpb25zLnRoaWNrbmVzcztcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmVBdHRyaWJ1dGVzO1xuIiwiY29uc3QgZ2V0ID0gcmVxdWlyZSgnbG9kYXNoL2dldCcpO1xuY29uc3QgRW5kcG9pbnRUeXBlID0gcmVxdWlyZSgnLi9jb25zdC9lbmRwb2ludF90eXBlJyk7XG5jb25zdCBFbmRwb2ludFBvc2l0aW9uID0gcmVxdWlyZSgnLi9jb25zdC9lbmRwb2ludF9wb3NpdGlvbicpO1xuY29uc3Qge2dldENvdW50ZXIgfSA9IHJlcXVpcmUoJy4vdXRpbC9oZWxwZXInKTtcbmNvbnN0IFBSRUZJWCA9IHJlcXVpcmUoJy4vY29uc3QvYXJyb3dfbGluZV9wcmVmaXgnKTtcblxuY29uc3QgTUFSS0VSX0lEX1BSRUZJWCA9IGAke1BSRUZJWH0tTUFSS0VSLWA7XG5jb25zdCBuZXh0TWFya2VySWQgPSBnZXRDb3VudGVyKCk7XG5jb25zdCBtYXJrZXJDYWNoZSA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gZ2V0TWFya2VyT3B0aW9uc0FuZEtleShvcHRpb25zKXtcbiAgY29uc3QgbWFya2VyVHlwZSA9IGdldChvcHRpb25zLCAnZW5kcG9pbnQudHlwZScpO1xuICBjb25zdCBmaWxsQ29sb3IgPSBnZXQob3B0aW9ucywgJ2VuZHBvaW50LmZpbGxDb2xvcicpO1xuICBjb25zdCBzaXplID0gZ2V0KG9wdGlvbnMsICdlbmRwb2ludC5zaXplJyk7XG4gIGNvbnN0IG9wdHMgPSB7IHR5cGU6IG1hcmtlclR5cGUsIGNvbG9yOiBvcHRpb25zLmNvbG9yLCBmaWxsQ29sb3IsIHNpemUgfTtcbiAgcmV0dXJuIHsga2V5OiBgJHtvcHRpb25zLmNvbG9yfS0ke21hcmtlclR5cGV9LSR7ZmlsbENvbG9yfS0ke3NpemV9YCwgb3B0aW9uczogb3B0cyB9XG59XG5cbmZ1bmN0aW9uIGdldE1hcmtlcihzdmcsIGJhc2VPcHRzKSB7XG4gIGNvbnN0IHsga2V5LCBvcHRpb25zIH0gPSBnZXRNYXJrZXJPcHRpb25zQW5kS2V5KGJhc2VPcHRzKTtcbiAgaWYgKCFtYXJrZXJDYWNoZS5oYXMoa2V5KSkge1xuICAgIGNvbnN0IG1hcmtlcklkID0gYCR7TUFSS0VSX0lEX1BSRUZJWH0ke25leHRNYXJrZXJJZCgpfWA7XG4gICAgc3ZnLmNyZWF0ZU1hcmtlcihtYXJrZXJJZCwgb3B0aW9ucyk7XG4gICAgbWFya2VyQ2FjaGUuc2V0KGtleSwgbWFya2VySWQpO1xuICAgIHJldHVybiBtYXJrZXJJZDtcbiAgfVxuICByZXR1cm4gbWFya2VyQ2FjaGUuZ2V0KGtleSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRNYXJrZXJPcHRpb25zKHR5cGUsIHVybCl7XG4gIGNvbnN0IG9wdHMgPSB7XCJtYXJrZXItZW5kXCI6IHVybH07XG4gIGlmICgodHlwZSA9PSBFbmRwb2ludFR5cGUuc3F1YXJlcykgfHwgKHR5cGUgPT0gRW5kcG9pbnRUeXBlLmNpcmNsZXMpKSB7XG4gICAgb3B0c1snbWFya2VyLXN0YXJ0J10gPSB1cmw7XG4gIH1cbiAgcmV0dXJuIG9wdHM7XG59XG5cbmZ1bmN0aW9uIHVzZXJEZWZpbmVkTWFya2VyT3B0aW9ucyhwb3NpdGlvbiwgdXJsKXtcbiAgY29uc3Qgb3B0cyA9IHt9O1xuICBpZiAoW0VuZHBvaW50UG9zaXRpb24uU1RBUlQsIEVuZHBvaW50UG9zaXRpb24uQk9USF0uaW5jbHVkZXMocG9zaXRpb24pKXtcbiAgICBvcHRzWydtYXJrZXItc3RhcnQnXSA9IHVybDtcbiAgfVxuICBpZiAoW0VuZHBvaW50UG9zaXRpb24uRU5ELCBFbmRwb2ludFBvc2l0aW9uLkJPVEhdLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xuICAgIG9wdHNbJ21hcmtlci1lbmQnXSA9IHVybDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrZXJPcHRpb25zKHN2Zywgb3B0aW9ucyl7XG4gIGNvbnN0IGVuZHBvaW50VHlwZSA9IGdldChvcHRpb25zLCAnZW5kcG9pbnQudHlwZScpO1xuICBpZiAoZW5kcG9pbnRUeXBlID09IEVuZHBvaW50VHlwZS5ub25lKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgbGV0IG1hcmtlcklkID0gZ2V0KG9wdGlvbnMsICdlbmRwb2ludC5tYXJrZXJJZGVudGlmaWVyJyk7XG4gIGlmICghbWFya2VySWQpIHtcbiAgICBtYXJrZXJJZCA9IGdldE1hcmtlcihzdmcsIG9wdGlvbnMpO1xuICB9XG4gIGNvbnN0IHVybCA9IGB1cmwoIyR7bWFya2VySWR9KWA7XG4gIGNvbnN0IHBvc2l0aW9uID0gZ2V0KG9wdGlvbnMsICdlbmRwb2ludC5wb3NpdGlvbicpO1xuICByZXR1cm4gcG9zaXRpb24gPyB1c2VyRGVmaW5lZE1hcmtlck9wdGlvbnMocG9zaXRpb24sIHVybCkgOiBkZWZhdWx0TWFya2VyT3B0aW9ucyhlbmRwb2ludFR5cGUsIHVybCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFya2VyT3B0aW9uczsiLCJjb25zdCB7IEhPUklaT05UQUwgfSA9IHJlcXVpcmUoJy4vY29uc3QvZGlyZWN0aW9ucycpO1xuXG5mdW5jdGlvbiBnZXRQaXZvdHMocG9pbnQxLCBwb2ludDIsIGN1cnZhdHVyZSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IGRpbWVuc2lvbiA9IChkaXJlY3Rpb24gPT0gSE9SSVpPTlRBTCkgPyAneCcgOiAneSc7XG4gIGNvbnN0IGFtb3VudCA9IChwb2ludDJbZGltZW5zaW9uXSAtIHBvaW50MVtkaW1lbnNpb25dKSAqIGN1cnZhdHVyZTtcblxuICByZXR1cm4gW1xuICAgIHBvaW50MS50cmFuc2xhdGUoe1tkaW1lbnNpb25dOiBhbW91bnR9KSxcbiAgICBwb2ludDIudHJhbnNsYXRlKHtbZGltZW5zaW9uXTogLWFtb3VudH0pXG4gIF07XG59XG5cbmZ1bmN0aW9uIHBhdGhEZWZpbml0aW9uKHBvaW50MSwgcG9pbnQyLCBvcHRpb25zKXtcbiAgY29uc3QgW3AxLCBwMl0gPSBvcHRpb25zLmN1cnZhdHVyZSA/XG4gICAgZ2V0UGl2b3RzKHBvaW50MSwgcG9pbnQyLCBvcHRpb25zLmN1cnZhdHVyZSwgb3B0aW9ucy5kaXJlY3Rpb24pIDpcbiAgICBbcG9pbnQxLnRyYW5zbGF0ZShvcHRpb25zLnBpdm90c1swXSksIHBvaW50Mi50cmFuc2xhdGUob3B0aW9ucy5waXZvdHNbMV0pXTtcbiAgcmV0dXJuIFsnTScsIHBvaW50MS5zdHIoKSwgJ0MnLCBwMS5zdHIoKSwgcDIuc3RyKCksIHBvaW50Mi5zdHIoKV0uam9pbignICcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhEZWZpbml0aW9uOyIsImNvbnN0IHtkcmF3TWFya2VyLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50IH0gPSByZXF1aXJlKCcuL3N2Z191dGlscycpO1xuY29uc3QgUFJFRklYID0gcmVxdWlyZSgnLi8uLi9jb25zdC9hcnJvd19saW5lX3ByZWZpeCcpO1xuXG5jbGFzcyBTdmdDYW52YXMge1xuICBjb25zdHJ1Y3RvcihwYXJlbnRDYW52YXMpe1xuICAgIHRoaXMucGFyZW50Q2FudmFzID0gcGFyZW50Q2FudmFzO1xuICB9XG5cbiAgY3JlYXRlTWFya2VyKGlkLCBvcHRpb25zKSB7XG4gICAgY29uc3Qge3R5cGUsIGNvbG9yLCBmaWxsQ29sb3IsIHNpemV9ID0gb3B0aW9ucztcbiAgICBjb25zdCBzaXplVmFsdWUgPSBTdHJpbmcoc2l6ZSoxMCk7XG4gICAgY29uc3QgbWFya2VyID0gY3JlYXRlRWxlbWVudCgnbWFya2VyJywge1xuICAgICAgaWQ6IGlkLFxuICAgICAgbWFya2VyVW5pdHM6ICdzdHJva2VXaWR0aCcsXG4gICAgICB2aWV3Qm94OiAnLTEgLTEgMTIgMTInLFxuICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgIGZpbGw6IGZpbGxDb2xvcixcbiAgICAgIG9yaWVudDogJ2F1dG8nLFxuICAgICAgbWFya2VyV2lkdGg6IHNpemVWYWx1ZSxcbiAgICAgIG1hcmtlckhlaWdodDogc2l6ZVZhbHVlXG4gICAgfSk7XG4gICAgZHJhd01hcmtlclt0eXBlXShtYXJrZXIpO1xuICAgIHRoaXMuZGVmaW5pdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQobWFya2VyKTtcbiAgfVxuXG4gIGNyZWF0ZVBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IGNyZWF0ZVN2Z0VsZW1lbnQoJ3BhdGgnKTtcbiAgICB0aGlzLnBhcmVudENhbnZhcy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIGdldCBkZWZpbml0aW9uRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2RlZnMpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nRGVmcyA9IHRoaXMucGFyZW50Q2FudmFzLnF1ZXJ5U2VsZWN0b3IoJ2RlZnMnKTtcbiAgICAgIGlmIChleGlzdGluZ0RlZnMpIHtcbiAgICAgICAgdGhpcy5fZGVmcyA9IGV4aXN0aW5nRGVmc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbnNFbGVtZW50ID0gY3JlYXRlU3ZnRWxlbWVudCgnZGVmcycpO1xuICAgICAgICB0aGlzLnBhcmVudENhbnZhcy5hcHBlbmRDaGlsZChkZWZpbml0aW9uc0VsZW1lbnQpO1xuICAgICAgICB0aGlzLl9kZWZzID0gZGVmaW5pdGlvbnNFbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGVmcztcbiAgfVxufVxuXG5TdmdDYW52YXMuZGVmYXVsdFN2Z0VsZW1lbnQgPSBmdW5jdGlvbigpe1xuICBpZiAoIXRoaXMuX2RlZmF1bHRFbCkge1xuICAgIGNvbnN0IGlkID0gYCR7UFJFRklYfS1zdmctY2FudmFzYDtcbiAgICB0aGlzLl9kZWZhdWx0RWwgPSBjcmVhdGVFbGVtZW50KCdzdmcnLCB7XG4gICAgICBpZDogaWQsXG4gICAgICBzdHlsZTogJ3Bvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7bGVmdDowcHg7cG9pbnRlci1ldmVudHM6IG5vbmU7JyxcbiAgICAgIHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodFxuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZGVmYXVsdEVsKTtcbiAgfVxuICByZXR1cm4gdGhpcy5fZGVmYXVsdEVsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdmdDYW52YXM7IiwiY29uc3QgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJyk7XG5jb25zdCBFbmRwb2ludFR5cGUgPSByZXF1aXJlKCcuLy4uL2NvbnN0L2VuZHBvaW50X3R5cGUnKTtcblxuZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudCh0YWcpe1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgdGFnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IGVsID0gY3JlYXRlU3ZnRWxlbWVudCh0eXBlKTtcbiAgZm9yIChsZXQgYXR0ciBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNbYXR0cl0pO1xuICB9XG4gIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gbWFya2VyRmFjdG9yeShyZWZYLCByZWZZLCBzaGFwZUdlbikge1xuICByZXR1cm4gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoJ3JlZlgnLCByZWZYKTtcbiAgICBtYXJrZXIuc2V0QXR0cmlidXRlKCdyZWZZJywgcmVmWSk7XG4gICAgY29uc3Qgc2hhcGUgPSBpc0Z1bmN0aW9uKHNoYXBlR2VuKSA/IHNoYXBlR2VuKG1hcmtlcikgOiBzaGFwZUdlbjtcbiAgICBtYXJrZXIuYXBwZW5kQ2hpbGQoc2hhcGUpO1xuICB9XG59XG5cbmNvbnN0IGRyYXdNYXJrZXIgPSB7XG4gIFtFbmRwb2ludFR5cGUuYXJyb3dIZWFkRmlsbGVkXTogbWFya2VyRmFjdG9yeSgxMCwgNSwgY3JlYXRlRWxlbWVudCgncG9seWdvbicsIHtwb2ludHM6ICcwLDAgMTAsNSAwLDEwJ30pKSxcbiAgW0VuZHBvaW50VHlwZS5jaXJjbGVzXTogbWFya2VyRmFjdG9yeSg1LCA1LCBjcmVhdGVFbGVtZW50KCdjaXJjbGUnLCB7cjogNCwgY3g6IDUsIGN5OiA1fSkpLFxuICBbRW5kcG9pbnRUeXBlLnNxdWFyZXNdOiBtYXJrZXJGYWN0b3J5KDUsIDUsIGNyZWF0ZUVsZW1lbnQoJ3JlY3QnLCB7d2lkdGg6IDEwLCBoZWlnaHQ6IDEwfSkpLFxuICBbRW5kcG9pbnRUeXBlLmFycm93SGVhZF06IG1hcmtlckZhY3RvcnkoMTAsIDUsIGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICBtYXJrZXIuc2V0QXR0cmlidXRlKCdmaWxsLW9wYWNpdHknLCAnMCcpO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdwb2x5bGluZScsIHtwb2ludHM6ICcwLDAgMTAsNSAwLDEwJ30pXG4gIH0pXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZHJhd01hcmtlciwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudFxufSIsImNsYXNzIEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2Upe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIGBBcmd1bWVudEVycm9yOiAke3RoaXMubWVzc2FnZX1gO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEFyZ3VtZW50RXJyb3I7XG5cbiIsImNvbnN0IEFyZ3VtZW50RXJyb3IgPSByZXF1aXJlKCcuL2FyZ3VtZW50X2Vycm9yJyk7XG5jb25zdCBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoL2lzRnVuY3Rpb24nKTtcblxuY29uc3QgdGhyb3dBcmd1bWVudEVycm9yID0gZnVuY3Rpb24oYXJnKXtcbiAgaWYgKGlzRnVuY3Rpb24oYXJnKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGFyZy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50RXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50RXJyb3IoYXJnKTtcbiAgICB9XG4gIH1cblxufTtcbmNvbnN0IEVycm9ycyA9IHtcbiAgZXhhY3RseU9uZUFyZ3VtZW50OiB0aHJvd0FyZ3VtZW50RXJyb3IoYEV4YWN0bHkgb25lIGFyZ3VtZW50IGV4cGVjdGVkYCksXG4gIGFyZ3VtZW50TXVzdEJlT2JqZWN0OiB0aHJvd0FyZ3VtZW50RXJyb3IoYEFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0YCksXG4gIHN2Z1BhcmVudE5vdEFsbG93ZWRJblVwZGF0ZTogdGhyb3dBcmd1bWVudEVycm9yKCdzdmdQYXJlbnRTZWxlY3RvciBpcyBub3QgYWxsb3dlZCBpbiB1cGRhdGUnKSxcbiAgY291bGROb3RGaW5kU2VsZWN0b3I6IHRocm93QXJndW1lbnRFcnJvcigocGFyYW0pID0+IGBDb3VsZCBub3QgZmluZCBlbGVtZW50IHdpdGggc2VsZWN0b3IgLSAnJHtwYXJhbX0nYCksXG4gIHNvdXJjZUFuZERlc3RpbmF0aW9uRm9ybWF0OiB0aHJvd0FyZ3VtZW50RXJyb3IoJ3NvdXJjZSBhbmQgZGVzdGluYXRpb24gc2hvdWxkIGJlIGVpdGhlciBxdWVyeVNlbGVjdG9yIHN0cmluZ3Mgb3IgY29vcmRpbmF0ZSBwYWlycyAoe3g6IC4uICx5OiB9KScpLFxuICBzaW5nbGVBcmd1bWVudE9iamVjdDogdGhyb3dBcmd1bWVudEVycm9yKGBTaW5nbGUgYXJndW1lbnQgc2hvdWxkIGFsd2F5cyBiZSBhbiBvYmplY3RgKSxcbiAgbWlzc2luZ1NvdXJjZTogdGhyb3dBcmd1bWVudEVycm9yKGBNaXNzaW5nIHNvdXJjZSBvcHRpb25gKSxcbiAgbWlzc2luZ0Rlc3RpbmF0aW9uOiB0aHJvd0FyZ3VtZW50RXJyb3IoYE1pc3NpbmcgZGVzdGluYXRpb24gb3B0aW9uYCksXG4gIGxhc3RBcmd1bWVudE9iamVjdDogdGhyb3dBcmd1bWVudEVycm9yKCdMYXN0IGFyZ3VtZW50IHNob3VsZCBhbHdheXMgYmUgYW4gb2JqZWN0JyksXG4gIG1heGltdW1UaHJlZUFyZ3VtZW50czogdGhyb3dBcmd1bWVudEVycm9yKCdGdW5jdGlvbiBkb2VzIG5vdCBhY2NlcHQgbW9yZSB0aGFuIHRocmVlIGFyZ3VtZW50cycpLFxuICBkb3VibGVTb3VyY2U6IHRocm93QXJndW1lbnRFcnJvcignU291cmNlIHNwZWNpZmllZCB0d2ljZSAoYXMgZmlyc3QgYXJndW1lbnQsIGFuZCBpbiBvcHRpb25zJyksXG4gIGRvdWJsZURlc3RpbmF0aW9uOiB0aHJvd0FyZ3VtZW50RXJyb3IoJ0Rlc3RpbmF0aW9uIHNwZWNpZmllZCB0d2ljZSAoYXMgc2Vjb25kIGFyZ3VtZW50LCBhbmQgaW4gb3B0aW9ucyknKSxcbiAgYXRMZWFzdE9uZUFyZ3VtZW50OiB0aHJvd0FyZ3VtZW50RXJyb3IoYEF0IGxlYXN0IG9uZSBhcmd1bWVudCBleHBlY3RlZGApLFxuICBtdXN0QmVTdHJpbmc6IHRocm93QXJndW1lbnRFcnJvcihwYXJhbSA9PiBgJHtwYXJhbX0gbXVzdCBiZSBhIHN0cmluZ2ApLFxuICBtdXN0QmVOdW1iZXI6IHRocm93QXJndW1lbnRFcnJvcihwYXJhbSA9PiBgJHtwYXJhbX0gbXVzdCBiZSBhIG51bWJlcmApLFxuICBtdXN0QmVQb3NpdGl2ZU51bWJlcjogdGhyb3dBcmd1bWVudEVycm9yKHBhcmFtID0+IGAke3BhcmFtfSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyYCksXG4gIG11c3RCZU5vblplcm9OdW1iZXI6IHRocm93QXJndW1lbnRFcnJvcihwYXJhbSA9PiBgJHtwYXJhbX0gbXVzdCBiZSBhIG51bWJlciBkaWZmZXJlbnQgdGhhbiAwYCksXG4gIHBvc2l0aW9uV2l0aENvb3JkczogdGhyb3dBcmd1bWVudEVycm9yKHNvdXJjZU9yRGVzdCA9PiBgJHtzb3VyY2VPckRlc3R9UG9zaXRpb24gdW5hdmFpbGFibGUgd2hlbiB1c2luZyBjb29yZGluYXRlcyBhcyAke3NvdXJjZU9yRGVzdH1gKSxcbiAgdmFsSW5FbnVtOiB0aHJvd0FyZ3VtZW50RXJyb3IoKHZhbCxhcnIsIGxhYmVscykgPT4gYCcke3ZhbH0nIGlzIG5vdCBhIHZhbGlkICR7bGFiZWxzWzBdfSAtIGF2YWlsYWJsZSAke2xhYmVsc1sxXX0gYXJlOiAke2Fyci5qb2luKCcsICcpfWApLFxuICBwaXZvdHNGb3JtYXQ6IHRocm93QXJndW1lbnRFcnJvcihgJ3Bpdm90cycgbXVzdCBiZSBhbiBhcnJheSBvZiB0d28gY29vcmRpbmF0ZXMge3g6IG51bWJlciAsIHk6IG51bWJlcn1gKSxcbiAgcGl2b3RzQW5kQ3VydmF0dXJlOiB0aHJvd0FyZ3VtZW50RXJyb3IoXCInY3VydmF0dXJlJyBvcHRpb24gaXMgbm90IGFsbG93ZWQgd2hlbiB1c2luZyBleHBsaWNpdCBwaXZvdHNcIiksXG4gIG1pc3NpbmdNYXJrZXJJZGVudDogdGhyb3dBcmd1bWVudEVycm9yKFwiQ3VzdG9tIG1hcmtlciB0eXBlIGlzIG1pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHkgJ2VuZHBvaW50Lm1hcmtlcklkZW50aWZpZXInXCIpLFxuICBtYXJrZXJJZGVudE9ubHlDdXN0b206IHRocm93QXJndW1lbnRFcnJvcihcInByb3BlcnR5ICdlbmRwb2ludC5tYXJrZXJJZGVudGlmaWVyJyBhbGxvd2VkIG9ubHkgd2l0aCBjdXN0b20gZW5kcG9pbnQudHlwZVwiKSxcbiAgbWFya2VyQ3VzdG9taXphdGlvblVuYXZhaWxhYmxlOiB0aHJvd0FyZ3VtZW50RXJyb3IocHJvcCA9PiBgTWFya2VyIGN1c3RvbWl6YXRpb24gcHJvcGVydHkgJyR7cHJvcH0nIG5vdCBhdmFpbGFibGUgd2hlbiBwcm92aWRpbmcgY3VzdG9tIG1hcmtlcmApLFxuICB1bnJlY29nbml6ZWRPcHRpb246IHRocm93QXJndW1lbnRFcnJvcihwcm9wID0+IGBVbnJlY29nbml6ZWQgb3B0aW9uICcke3Byb3B9J2ApLFxuICB1bnJlY29nbml6ZWRFbmRwb2ludE9wdGlvbjogdGhyb3dBcmd1bWVudEVycm9yKHByb3AgPT4gYFVucmVjb2duaXplZCBlbmRwb2ludCBvcHRpb24gJyR7cHJvcH0nYClcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JzOyIsImZ1bmN0aW9uIGdldENvdW50ZXIoKXtcbiAgbGV0IGNudCA9IDA7XG4gIHJldHVybiAoKCkgPT4gY250KyspO1xufVxuXG5mdW5jdGlvbiByZXZlcnNlSWYoYXJyLCBib29sKSB7XG4gIGlmIChib29sKSB7XG4gICAgcmV0dXJuIGFyci5yZXZlcnNlKCk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGdldENvdW50ZXIsIHJldmVyc2VJZiB9OyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG4iLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG4iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5vZGVcIiBpbmNsdWRlPVwiZ2V0LGlzU3RyaW5nLGlzT2JqZWN0LGlzTnVtYmVyLGlzVW5kZWZpbmVkLGlzRnVuY3Rpb25cImBcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanMuZm91bmRhdGlvbi8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cbnZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibm9kZVwiIGluY2x1ZGU9XCJnZXQsaXNTdHJpbmcsaXNPYmplY3QsaXNOdW1iZXIsaXNVbmRlZmluZWQsaXNGdW5jdGlvblwiYFxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcy5mb3VuZGF0aW9uLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xudmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibm9kZVwiIGluY2x1ZGU9XCJnZXQsaXNTdHJpbmcsaXNPYmplY3QsaXNOdW1iZXIsaXNVbmRlZmluZWQsaXNGdW5jdGlvblwiYFxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcy5mb3VuZGF0aW9uLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xudmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgTnVtYmVyYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqICoqTm90ZToqKiBUbyBleGNsdWRlIGBJbmZpbml0eWAsIGAtSW5maW5pdHlgLCBhbmQgYE5hTmAsIHdoaWNoIGFyZVxuICogY2xhc3NpZmllZCBhcyBudW1iZXJzLCB1c2UgdGhlIGBfLmlzRmluaXRlYCBtZXRob2QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc051bWJlcigzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdW1iZXIoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBudW1iZXJUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTnVtYmVyO1xuIiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJub2RlXCIgaW5jbHVkZT1cImdldCxpc1N0cmluZyxpc09iamVjdCxpc051bWJlcixpc1VuZGVmaW5lZCxpc0Z1bmN0aW9uXCJgXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJub2RlXCIgaW5jbHVkZT1cImdldCxpc1N0cmluZyxpc09iamVjdCxpc051bWJlcixpc1VuZGVmaW5lZCxpc0Z1bmN0aW9uXCJgXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG52YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5vZGVcIiBpbmNsdWRlPVwiZ2V0LGlzU3RyaW5nLGlzT2JqZWN0LGlzTnVtYmVyLGlzVW5kZWZpbmVkLGlzRnVuY3Rpb25cImBcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanMuZm91bmRhdGlvbi8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKHZvaWQgMCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1VuZGVmaW5lZChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5kZWZpbmVkO1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=