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
/***/ (function(module, exports) {

class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  translate(first, second){
    let x,y;
    if (first && !second && (first.x || first.y)) {
      [x,y] = [first.x, first.y];
    } else {
      [x,y] = [first, second];
    }
    return new Point(this.x+(x || 0), this.y + (y || 0));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnJvd0xpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Fycm93TGluZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy9ub3JtYWxpemVfYW5kX3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3BhcnNlX2FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy9yZWN0YW5nbGVfZnJvbV9wYXJhbS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9jb2xvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9jdXJ2YXR1cmUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvZW5kcG9pbnQvZmlsbF9jb2xvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9vbmx5X3N1cHBvcnRlZC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9zaXplLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL2VuZHBvaW50L3R5cGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvZm9yY2VfZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL29ubHlfc3VwcG9ydGVkLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvcGl2b3RzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9wcm9wZXJ0eV9pbl9lbnVtLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL3NvdXJjZV9hbmRfZGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvc3ZnX3BhcmVudF9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS90aGlja25lc3MuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcnJvd19saW5lLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvYXJyb3dfbGluZV9wcmVmaXguanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9jb25zdC9kaXJlY3Rpb25zLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvZW5kcG9pbnRfcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9jb25zdC9lbmRwb2ludF90eXBlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvbGluZV9zdHlsZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dlb21ldHJ5L2lzX2Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9nZW9tZXRyeS9wb2ludC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dlb21ldHJ5L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dldF9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9nZXRfZW5kcG9pbnRzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvbGluZV9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvbWFya2VyX29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9wYXRoX2RlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9zdmcvc3ZnX2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3N2Zy9zdmdfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi91dGlsL2FyZ3VtZW50X2Vycm9yLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdXRpbC9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi91dGlsL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2lzS2V5LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL190b0tleS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc051bWJlci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc1VuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvdG9TdHJpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5Qyxp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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDeEVBLG1CQUFtQixtQkFBTyxDQUFDLGlFQUFpQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImFycm93LWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhcnJvd0xpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXJyb3dMaW5lXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IGFycm93TGluZSA9IHJlcXVpcmUoJy4vbGliL2Fycm93X2xpbmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcnJvd0xpbmU7IiwiY29uc3QgdmFsaWRhdGVPcHRpb25zID0gcmVxdWlyZSgnLi92YWxpZGF0ZS9vcHRpb25zJyk7XG5cbmNvbnN0IHJlY3RhbmdsZUZyb21QYXJhbSA9IHJlcXVpcmUoJy4vcmVjdGFuZ2xlX2Zyb21fcGFyYW0nKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQW5kVmFsaWRhdGUob3B0aW9ucyl7XG4gIHJldHVybiB7XG4gICAgLi4udmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpLFxuICAgIHNvdXJjZVJlY3RhbmdsZTogcmVjdGFuZ2xlRnJvbVBhcmFtKG9wdGlvbnMuc291cmNlKSxcbiAgICBkZXN0aW5hdGlvblJlY3RhbmdsZTogcmVjdGFuZ2xlRnJvbVBhcmFtKG9wdGlvbnMuZGVzdGluYXRpb24pXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVBbmRWYWxpZGF0ZTsiLCJjb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi8uLi91dGlsL2Vycm9ycycpO1xuXG5jb25zdCBub3JtYWxpemVBbmRWYWxpZGF0ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplX2FuZF92YWxpZGF0ZScpO1xuXG5mdW5jdGlvbiBwYXJzZU11bHRpcGxlQXJndW1lbnRzKGFyZ3Mpe1xuICBpZiAoKGFyZ3MubGVuZ3RoID4gMikgJiYgKCFpc09iamVjdChhcmdzWzJdKSkpIHtcbiAgICBFcnJvcnMubGFzdEFyZ3VtZW50T2JqZWN0KCk7XG4gIH1cbiAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xuICAgIEVycm9ycy5tYXhpbXVtVGhyZWVBcmd1bWVudHMoKTtcbiAgfVxuICBjb25zdCBvcHRpb25zID0gYXJnc1syXSB8fCB7fTtcbiAgaWYgKG9wdGlvbnMuc291cmNlKSB7XG4gICAgRXJyb3JzLmRvdWJsZVNvdXJjZSgpXG4gIH1cbiAgaWYgKG9wdGlvbnMuZGVzdGluYXRpb24pIHtcbiAgICBFcnJvcnMuZG91YmxlRGVzdGluYXRpb24oKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgc291cmNlOiBhcmdzWzBdLFxuICAgIGRlc3RpbmF0aW9uOiBhcmdzWzFdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlU2luZ2xlQXJndW1lbnQoYXJncyl7XG4gIGlmICghaXNPYmplY3QoYXJnc1swXSkpIEVycm9ycy5zaW5nbGVBcmd1bWVudE9iamVjdCgpO1xuICBjb25zdCBvcHRpb25zID0gYXJnc1swXTtcbiAgaWYgKCFvcHRpb25zLnNvdXJjZSkge1xuICAgIEVycm9ycy5taXNzaW5nU291cmNlKCk7XG4gIH1cbiAgaWYgKCFvcHRpb25zLmRlc3RpbmF0aW9uKSB7XG4gICAgRXJyb3JzLm1pc3NpbmdEZXN0aW5hdGlvbigpO1xuICB9XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBzdGFuZGFyZGl6ZShhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PSAwKSB7XG4gICAgRXJyb3JzLmF0TGVhc3RPbmVBcmd1bWVudCgpO1xuICB9XG4gIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gcGFyc2VNdWx0aXBsZUFyZ3VtZW50cyhhcmdzKTtcbiAgfVxuICByZXR1cm4gIHBhcnNlU2luZ2xlQXJndW1lbnQoYXJncyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKGFyZ3MpIHtcbiAgY29uc3QgcmF3T3B0aW9ucyA9IHN0YW5kYXJkaXplKGFyZ3MpO1xuICBjb25zdCBvcHRpb25zID0gbm9ybWFsaXplQW5kVmFsaWRhdGUocmF3T3B0aW9ucylcbiAgcmV0dXJuIHsgcmF3T3B0aW9ucywgb3B0aW9ucyB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlQXJndW1lbnRzOyIsImNvbnN0IFJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vLi4vZ2VvbWV0cnkvcmVjdGFuZ2xlJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLy4uL3V0aWwvZXJyb3JzJyk7XG5jb25zdCBpc0Nvb3JkaW5hdGUgPSByZXF1aXJlKCcuLy4uL2dlb21ldHJ5L2lzX2Nvb3JkaW5hdGUnKTtcblxuZnVuY3Rpb24gcmVjdGFuZ2xlRnJvbVBhcmFtKHBhcmFtKXtcbiAgaWYgKGlzQ29vcmRpbmF0ZShwYXJhbSkpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwYXJhbS54LCBwYXJhbS55LCAwLCAwKTtcbiAgfVxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbSk7XG4gIGlmICghZWxlbWVudCkge1xuICAgIEVycm9ycy5jb3VsZE5vdEZpbmRTZWxlY3RvcihwYXJhbSk7XG4gIH1cbiAgcmV0dXJuIFJlY3RhbmdsZS5mcm9tRE9NRWxlbWVudChlbGVtZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWN0YW5nbGVGcm9tUGFyYW07XG4iLCJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVDb2xvcihvcHRpb25zKXtcbiAgb3B0aW9ucy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJ2JsYWNrJztcbiAgaWYgKCFpc1N0cmluZyhvcHRpb25zLmNvbG9yKSkgRXJyb3JzLm11c3RCZVN0cmluZygnQ29sb3InKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUNvbG9yOyIsImNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJyk7XG5jb25zdCBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVDdXJ2YXR1cmUob3B0aW9ucyl7XG4gIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5jdXJ2YXR1cmUpKSB7XG4gICAgaWYgKCFpc051bWJlcihvcHRpb25zLmN1cnZhdHVyZSkgfHwgKG9wdGlvbnMuY3VydmF0dXJlID09IDApKSB7XG4gICAgICBFcnJvcnMubXVzdEJlTm9uWmVyb051bWJlcignQ3VydmF0dXJlJylcbiAgICB9XG4gIH1cbiAgaWYgKCFvcHRpb25zLnBpdm90cykgb3B0aW9ucy5jdXJ2YXR1cmUgPSBvcHRpb25zLmN1cnZhdHVyZSB8fCAxO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlQ3VydmF0dXJlOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuXG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2Vycm9ycycpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUZpbGxDb2xvcihlbmRwb2ludE9wdGlvbnMpIHtcbiAgY29uc3QgZmlsbENvbG9yID0gZW5kcG9pbnRPcHRpb25zLmZpbGxDb2xvcjtcbiAgaWYgKCFpc1VuZGVmaW5lZChmaWxsQ29sb3IpKXtcbiAgICBpZiAoIWlzU3RyaW5nKGZpbGxDb2xvcikpIEVycm9ycy5tdXN0QmVTdHJpbmcoJ0VuZHBvaW50IGZpbGxDb2xvcicpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUZpbGxDb2xvcjsiLCJjb25zdCB2YWxpZGF0ZVR5cGUgPSByZXF1aXJlKCcuL3R5cGUnKTtcbmNvbnN0IHZhbGlkYXRlRmlsbENvbG9yID0gcmVxdWlyZSgnLi9maWxsX2NvbG9yJyk7XG5jb25zdCB2YWxpZGF0ZVBvc2l0aW9uID0gcmVxdWlyZSgnLi9wb3NpdGlvbicpO1xuY29uc3QgdmFsaWRhdGVTaXplID0gcmVxdWlyZSgnLi9zaXplJyk7XG5jb25zdCB2YWxpZGF0ZU9ubHlTdXBwb3J0ZWRPcHRpb25zID0gcmVxdWlyZSgnLi9vbmx5X3N1cHBvcnRlZCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUVuZHBvaW50KG9wdGlvbnMpe1xuICBvcHRpb25zLmVuZHBvaW50ID0gb3B0aW9ucy5lbmRwb2ludCB8fCB7fTtcbiAgdmFsaWRhdGVUeXBlKG9wdGlvbnMuZW5kcG9pbnQpO1xuICB2YWxpZGF0ZUZpbGxDb2xvcihvcHRpb25zLmVuZHBvaW50KTtcbiAgdmFsaWRhdGVQb3NpdGlvbihvcHRpb25zLmVuZHBvaW50KTtcbiAgdmFsaWRhdGVTaXplKG9wdGlvbnMuZW5kcG9pbnQpO1xuICBvcHRpb25zLmVuZHBvaW50LmZpbGxDb2xvciA9IG9wdGlvbnMuZW5kcG9pbnQuZmlsbENvbG9yIHx8IG9wdGlvbnMuY29sb3I7XG4gIHZhbGlkYXRlT25seVN1cHBvcnRlZE9wdGlvbnMob3B0aW9ucy5lbmRwb2ludCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVFbmRwb2ludDsiLCJjb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2Vycm9ycycpO1xuXG5jb25zdCBTVVBQT1JURURfT1BUSU9OUyA9IFtcbiAgJ3R5cGUnLFxuICAnbWFya2VySWRlbnRpZmllcicsXG4gICdmaWxsQ29sb3InLFxuICAnc2l6ZScsXG4gICdwb3NpdGlvbidcbl07XG5cblxuZnVuY3Rpb24gdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9ucyhvcHRpb25zKXtcbiAgY29uc3QgdW5yZWNvZ25pemVkT3B0aW9uID0gT2JqZWN0LmtleXMob3B0aW9ucykuZmluZChvcHRpb25OYW1lID0+IHtcbiAgICByZXR1cm4gIVNVUFBPUlRFRF9PUFRJT05TLmluY2x1ZGVzKG9wdGlvbk5hbWUpO1xuICB9KTtcbiAgaWYgKHVucmVjb2duaXplZE9wdGlvbikge1xuICAgIEVycm9ycy51bnJlY29nbml6ZWRFbmRwb2ludE9wdGlvbih1bnJlY29nbml6ZWRPcHRpb24pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9uczsiLCJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuY29uc3QgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcbmNvbnN0IEVuZHBvaW50UG9zaXRpb24gPSByZXF1aXJlKCcuLi8uLi8uLi9jb25zdC9lbmRwb2ludF9wb3NpdGlvbicpO1xuXG5jb25zdCB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtID0gcmVxdWlyZSgnLi4vcHJvcGVydHlfaW5fZW51bScpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuY29uc3QgUE9TSVRJT05TID0gT2JqZWN0LnZhbHVlcyhFbmRwb2ludFBvc2l0aW9uKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQb3NpdGlvbihlbmRwb2ludE9wdGlvbnMpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBlbmRwb2ludE9wdGlvbnMucG9zaXRpb247XG4gIGlmICghaXNVbmRlZmluZWQocG9zaXRpb24pKXtcbiAgICBpZiAoIWlzU3RyaW5nKHBvc2l0aW9uKSkgRXJyb3JzLm11c3RCZVN0cmluZygnRW5kcG9pbnQgcG9zaXRpb24nKTtcbiAgICB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtKGVuZHBvaW50T3B0aW9ucywgJ3Bvc2l0aW9uJywgUE9TSVRJT05TLCAnZW5kcG9pbnQgcG9zaXRpb24nKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlUG9zaXRpb247IiwiY29uc3QgaXNOdW1iZXIgPSByZXF1aXJlKCdsb2Rhc2gvaXNOdW1iZXInKTtcbmNvbnN0IGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJyk7XG5cbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2l6ZShlbmRwb2ludE9wdGlvbnMpIHtcbiAgY29uc3Qgc2l6ZSA9IGVuZHBvaW50T3B0aW9ucy5zaXplO1xuICBpZiAoIWlzVW5kZWZpbmVkKHNpemUpKXtcbiAgICBpZiAoIWlzTnVtYmVyKHNpemUpIHx8IChzaXplPD0wKSkgRXJyb3JzLm11c3RCZVBvc2l0aXZlTnVtYmVyKCdFbmRwb2ludCBzaXplJylcbiAgfVxuICBlbmRwb2ludE9wdGlvbnMuc2l6ZSA9IGVuZHBvaW50T3B0aW9ucy5zaXplIHx8IDE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVTaXplOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBFbmRwb2ludFR5cGUgPSByZXF1aXJlKCcuLi8uLi8uLi9jb25zdC9lbmRwb2ludF90eXBlJyk7XG5jb25zdCB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtID0gcmVxdWlyZSgnLi4vcHJvcGVydHlfaW5fZW51bScpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuY29uc3QgTUFSS0VSUyA9IE9iamVjdC5rZXlzKEVuZHBvaW50VHlwZSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ3VzdG9tVHlwZShlbmRwb2ludE9wdGlvbnMpe1xuICBpZiAoZW5kcG9pbnRPcHRpb25zLnR5cGUgPT0gRW5kcG9pbnRUeXBlLmN1c3RvbSkge1xuICAgIGlmICghZW5kcG9pbnRPcHRpb25zLm1hcmtlcklkZW50aWZpZXIpIHtcbiAgICAgIEVycm9ycy5taXNzaW5nTWFya2VySWRlbnQoKTtcbiAgICB9XG4gICAgaWYgKCFpc1N0cmluZyhlbmRwb2ludE9wdGlvbnMubWFya2VySWRlbnRpZmllcikpIHtcbiAgICAgIEVycm9ycy5tdXN0QmVTdHJpbmcoKTtcbiAgICB9XG4gICAgY29uc3QgdW5hdmFpbGFibGVQcm9wZXJ0eSA9IFsnZmlsbENvbG9yJywgJ3NpemUnXS5maW5kKHByb3AgPT4gZW5kcG9pbnRPcHRpb25zW3Byb3BdKTtcbiAgICBpZiAodW5hdmFpbGFibGVQcm9wZXJ0eSkge1xuICAgICAgRXJyb3JzLm1hcmtlckN1c3RvbWl6YXRpb25VbmF2YWlsYWJsZSh1bmF2YWlsYWJsZVByb3BlcnR5KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVuZHBvaW50T3B0aW9ucy5tYXJrZXJJZGVudGlmaWVyKSB7XG4gICAgICBFcnJvcnMubWFya2VySWRlbnRPbmx5Q3VzdG9tKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVHlwZShlbmRwb2ludE9wdGlvbnMpe1xuICBlbmRwb2ludE9wdGlvbnMudHlwZSA9IGVuZHBvaW50T3B0aW9ucy50eXBlIHx8IEVuZHBvaW50VHlwZS5hcnJvd0hlYWRGaWxsZWQ7XG4gIHZhbGlkYXRlUHJvcGVydHlJbkVudW0oZW5kcG9pbnRPcHRpb25zLCAndHlwZScsIE1BUktFUlMsICdlbmRwb2ludCB0eXBlJyk7XG4gIHZhbGlkYXRlQ3VzdG9tVHlwZShlbmRwb2ludE9wdGlvbnMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlVHlwZTsiLCJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuY29uc3QgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0L2RpcmVjdGlvbnMnKTtcbmNvbnN0IHZhbGlkYXRlUHJvcGVydHlJbkVudW0gPSByZXF1aXJlKCcuL3Byb3BlcnR5X2luX2VudW0nKTtcblxuY29uc3QgRElSRUNUSU9OUyA9IE9iamVjdC52YWx1ZXMoRGlyZWN0aW9uKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVGb3JjZURpcmVjdGlvbihvcHRpb25zKXtcbiAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmZvcmNlRGlyZWN0aW9uKSl7XG4gICAgaWYgKCFpc1N0cmluZyhvcHRpb25zLmZvcmNlRGlyZWN0aW9uKSl7XG4gICAgICBFcnJvcnMubXVzdEJlU3RyaW5nKCdmb3JjZURpcmVjdGlvbicpXG4gICAgfVxuICAgIHZhbGlkYXRlUHJvcGVydHlJbkVudW0ob3B0aW9ucywgJ2ZvcmNlRGlyZWN0aW9uJywgRElSRUNUSU9OUywgJ2RpcmVjdGlvbiB0eXBlJyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUZvcmNlRGlyZWN0aW9uOyIsImNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmNvbnN0IFNVUFBPUlRFRF9PUFRJT05TID0gW1xuICAnc291cmNlJyxcbiAgJ2Rlc3RpbmF0aW9uJyxcbiAgJ2NvbG9yJyxcbiAgJ2N1cnZhdHVyZScsXG4gICdwaXZvdHMnLFxuICAnc291cmNlUG9zaXRpb24nLFxuICAnZGVzdGluYXRpb25Qb3NpdGlvbicsXG4gICdzdHlsZScsXG4gICd0aGlja25lc3MnLFxuICAnZm9yY2VEaXJlY3Rpb24nLFxuICAnZW5kcG9pbnQnLFxuICAnc3ZnUGFyZW50U2VsZWN0b3InXG5dO1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlT25seVN1cHBvcnRlZE9wdGlvbnMob3B0aW9ucyl7XG4gIGNvbnN0IHVucmVjb2duaXplZE9wdGlvbiA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbmQob3B0aW9uTmFtZSA9PiB7XG4gICAgcmV0dXJuICFTVVBQT1JURURfT1BUSU9OUy5pbmNsdWRlcyhvcHRpb25OYW1lKTtcbiAgfSk7XG4gIGlmICh1bnJlY29nbml6ZWRPcHRpb24pIHtcbiAgICBFcnJvcnMudW5yZWNvZ25pemVkT3B0aW9uKHVucmVjb2duaXplZE9wdGlvbik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZU9ubHlTdXBwb3J0ZWRPcHRpb25zOyIsImNvbnN0IHZhbGlkYXRlU291cmNlQW5kRGVzdGluYXRpb24gPSByZXF1aXJlKCcuL3NvdXJjZV9hbmRfZGVzdGluYXRpb24nKTtcbmNvbnN0IHZhbGlkYXRlQ29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyk7XG5jb25zdCB2YWxpZGF0ZVRoaWNrbmVzcyA9IHJlcXVpcmUoJy4vdGhpY2tuZXNzJyk7XG5jb25zdCB2YWxpZGF0ZUN1cnZhdHVyZSA9IHJlcXVpcmUoJy4vY3VydmF0dXJlJyk7XG5jb25zdCB2YWxpZGF0ZVBvc2l0aW9ucyA9IHJlcXVpcmUoJy4vcG9zaXRpb25zJyk7XG5jb25zdCB2YWxpZGF0ZVBpdm90cyA9IHJlcXVpcmUoJy4vcGl2b3RzJyk7XG5jb25zdCB2YWxpZGF0ZVN2Z1BhcmVudFNlbGVjdG9yID0gcmVxdWlyZSgnLi9zdmdfcGFyZW50X3NlbGVjdG9yJyk7XG5jb25zdCB2YWxpZGF0ZVN0eWxlID0gcmVxdWlyZSgnLi9zdHlsZScpO1xuY29uc3QgdmFsaWRhdGVGb3JjZURpcmVjdGlvbiA9IHJlcXVpcmUoJy4vZm9yY2VfZGlyZWN0aW9uJyk7XG5jb25zdCB2YWxpZGF0ZUVuZHBvaW50ID0gcmVxdWlyZSgnLi9lbmRwb2ludCcpO1xuY29uc3QgdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9ucyA9IHJlcXVpcmUoJy4vb25seV9zdXBwb3J0ZWQnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpe1xuICB2YWxpZGF0ZVNvdXJjZUFuZERlc3RpbmF0aW9uKG9wdGlvbnMpO1xuICB2YWxpZGF0ZU9ubHlTdXBwb3J0ZWRPcHRpb25zKG9wdGlvbnMpO1xuICB2YWxpZGF0ZUNvbG9yKG9wdGlvbnMpO1xuICB2YWxpZGF0ZVRoaWNrbmVzcyhvcHRpb25zKTtcbiAgdmFsaWRhdGVDdXJ2YXR1cmUob3B0aW9ucyk7XG4gIHZhbGlkYXRlU3R5bGUob3B0aW9ucyk7XG4gIHZhbGlkYXRlUG9zaXRpb25zKG9wdGlvbnMpO1xuICB2YWxpZGF0ZVBpdm90cyhvcHRpb25zKTtcbiAgdmFsaWRhdGVFbmRwb2ludChvcHRpb25zKTtcbiAgdmFsaWRhdGVTdmdQYXJlbnRTZWxlY3RvcihvcHRpb25zKTtcbiAgdmFsaWRhdGVGb3JjZURpcmVjdGlvbihvcHRpb25zKTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVPcHRpb25zOyIsImNvbnN0IGlzQ29vcmRpbmF0ZSA9IHJlcXVpcmUoJy4uLy4uL2dlb21ldHJ5L2lzX2Nvb3JkaW5hdGUnKTtcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGl2b3RzKG9wdGlvbnMpe1xuICBpZiAob3B0aW9ucy5waXZvdHMpIHtcbiAgICBpZiAoIShBcnJheS5pc0FycmF5KG9wdGlvbnMucGl2b3RzKSAmJiAob3B0aW9ucy5waXZvdHMubGVuZ3RoID09IDIpICYmIChvcHRpb25zLnBpdm90cy5ldmVyeShpc0Nvb3JkaW5hdGUpKSkpIHtcbiAgICAgIEVycm9ycy5waXZvdHNGb3JtYXQoKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY3VydmF0dXJlKSB7XG4gICAgICBFcnJvcnMucGl2b3RzQW5kQ3VydmF0dXJlKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVQaXZvdHM7IiwiY29uc3QgaXNDb29yZGluYXRlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvaXNfY29vcmRpbmF0ZScpO1xuY29uc3QgUmVjdGFuZ2xlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvcmVjdGFuZ2xlJyk7XG5jb25zdCB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtID0gcmVxdWlyZSgnLi9wcm9wZXJ0eV9pbl9lbnVtJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xuXG5jb25zdCBQT1NJVElPTlMgPSBPYmplY3Qua2V5cyhSZWN0YW5nbGUuU0lERVMpO1xuZnVuY3Rpb24gdmFsaWRhdGVQb3NpdGlvbnMob3B0aW9ucyl7XG4gIGlmIChvcHRpb25zLnNvdXJjZVBvc2l0aW9uKSB7XG4gICAgaWYgKGlzQ29vcmRpbmF0ZShvcHRpb25zLnNvdXJjZSkpIHtcbiAgICAgIEVycm9ycy5wb3NpdGlvbldpdGhDb29yZHMoJ3NvdXJjZScpO1xuICAgIH1cbiAgICB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtKG9wdGlvbnMsICdzb3VyY2VQb3NpdGlvbicsIFBPU0lUSU9OUywgJ3Bvc2l0aW9uJyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5kZXN0aW5hdGlvblBvc2l0aW9uKSB7XG4gICAgaWYgKGlzQ29vcmRpbmF0ZShvcHRpb25zLmRlc3RpbmF0aW9uKSkge1xuICAgICAgRXJyb3JzLnBvc2l0aW9uV2l0aENvb3JkcygnZGVzdGluYXRpb24nKTtcbiAgICB9XG4gICAgdmFsaWRhdGVQcm9wZXJ0eUluRW51bShvcHRpb25zLCAnZGVzdGluYXRpb25Qb3NpdGlvbicsIFBPU0lUSU9OUywgJ3Bvc2l0aW9uJyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVBvc2l0aW9uczsiLCJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuY29uc3QgZ2V0ID0gcmVxdWlyZSgnbG9kYXNoL2dldCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0eUluRW51bShvcHRpb25zLCBwcm9wZXJ0eVBhdGgsIGVudW1lcmF0aW9uLCBsYWJlbCl7XG4gIGNvbnN0IGxhYmVsX2FyciA9IGlzU3RyaW5nKGxhYmVsKSA/IFtsYWJlbCwgYCR7bGFiZWx9c2BdIDogbGFiZWw7XG4gIGNvbnN0IHByb3AgPSBnZXQob3B0aW9ucywgcHJvcGVydHlQYXRoKTtcbiAgaWYgKChwcm9wKSAmJiAoIWVudW1lcmF0aW9uLmluY2x1ZGVzKHByb3ApKSkge1xuICAgIEVycm9ycy52YWxJbkVudW0ocHJvcCwgZW51bWVyYXRpb24sIGxhYmVsX2Fycik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xuY29uc3QgaXNDb29yZGluYXRlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvaXNfY29vcmRpbmF0ZScpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVNvdXJjZUFuZERlc3RpbmF0aW9uKG9wdGlvbnMpe1xuICBpZiAoIVtvcHRpb25zLnNvdXJjZSwgb3B0aW9ucy5kZXN0aW5hdGlvbl0uZXZlcnkoc2VsID0+IGlzU3RyaW5nKHNlbCkgfHwgaXNDb29yZGluYXRlKHNlbCkpKSB7XG4gICAgRXJyb3JzLnNvdXJjZUFuZERlc3RpbmF0aW9uRm9ybWF0KCk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVTb3VyY2VBbmREZXN0aW5hdGlvbjsiLCJjb25zdCBMaW5lU3R5bGUgPSByZXF1aXJlKCcuLi8uLi9jb25zdC9saW5lX3N0eWxlJyk7XG5jb25zdCB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtID0gcmVxdWlyZSgnLi9wcm9wZXJ0eV9pbl9lbnVtJyk7XG5cbmNvbnN0IFNUWUxFUyA9IE9iamVjdC5rZXlzKExpbmVTdHlsZSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU3R5bGUob3B0aW9ucyl7XG4gIHZhbGlkYXRlUHJvcGVydHlJbkVudW0ob3B0aW9ucywgJ3N0eWxlJywgU1RZTEVTLCAnc3R5bGUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVN0eWxlOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTdmdQYXJlbnRTZWxlY3RvcihvcHRpb25zKXtcbiAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN2Z1BhcmVudFNlbGVjdG9yKSkge1xuICAgIGlmICghaXNTdHJpbmcob3B0aW9ucy5zdmdQYXJlbnRTZWxlY3RvcikpIHtcbiAgICAgIEVycm9ycy5tdXN0QmVTdHJpbmcoJ3N2Z1BhcmVudFNlbGVjdG9yJyk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVTdmdQYXJlbnRTZWxlY3RvcjsiLCJjb25zdCBpc051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bWJlcicpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVUaGlja25lc3Mob3B0aW9ucyl7XG4gIG9wdGlvbnMudGhpY2tuZXNzID0gb3B0aW9ucy50aGlja25lc3MgfHwgMTtcbiAgaWYgKCFpc051bWJlcihvcHRpb25zLnRoaWNrbmVzcykpIHtcbiAgICBFcnJvcnMubXVzdEJlTnVtYmVyKCdUaGlja25lc3MnKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVUaGlja25lc3M7XG4iLCJjb25zdCBwYXJzZUFyZ3VtZW50cyA9IHJlcXVpcmUoJy4vYXJndW1lbnRzL3BhcnNlX2FyZ3VtZW50cycpO1xuY29uc3QgbGluZUF0dHJpYnV0ZXMgPSByZXF1aXJlKCcuL2xpbmVfYXR0cmlidXRlcycpO1xuY29uc3QgcGF0aERlZmluaXRpb24gPSByZXF1aXJlKCcuL3BhdGhfZGVmaW5pdGlvbicpO1xuY29uc3QgZ2V0RW5kcG9pbnRzID0gcmVxdWlyZSgnLi9nZXRfZW5kcG9pbnRzJyk7XG5jb25zdCBtYXJrZXJPcHRpb25zID0gcmVxdWlyZSgnLi9tYXJrZXJfb3B0aW9ucycpO1xuY29uc3QgZ2V0Q2FudmFzID0gcmVxdWlyZSgnLi9nZXRfY2FudmFzJyk7XG5jb25zdCBub3JtYWxpemVBbmRWYWxpZGF0ZSA9IHJlcXVpcmUoJy4vYXJndW1lbnRzL25vcm1hbGl6ZV9hbmRfdmFsaWRhdGUnKTtcblxuY29uc3QgaXNPYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNPYmplY3QnKTtcblxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi91dGlsL2Vycm9ycycpO1xuXG5mdW5jdGlvbiBnZXRQYXRoQXR0cmlidXRlTmFtZXMoc3ZnUGF0aCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ZnUGF0aC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHN2Z1BhdGguYXR0cmlidXRlcy5pdGVtKGkpLm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRQYXRoQXR0cmlidXRlcyhzdmcsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7YmVnaW5Qb2ludCwgZW5kUG9pbnQsIGRpcmVjdGlvbn0gPSBnZXRFbmRwb2ludHMob3B0aW9ucyk7XG4gICAgY29uc3QgcGF0aERlZmluaXRpb25PcHRpb25zID0ge1xuICAgICAgICBkaXJlY3Rpb246IG9wdGlvbnMuZm9yY2VEaXJlY3Rpb24gfHwgZGlyZWN0aW9uLFxuICAgICAgICBjdXJ2YXR1cmU6IG9wdGlvbnMuY3VydmF0dXJlLFxuICAgICAgICBwaXZvdHM6IG9wdGlvbnMucGl2b3RzXG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkOiBwYXRoRGVmaW5pdGlvbihvcHRpb25zLnNvdXJjZVJlY3RhbmdsZVtiZWdpblBvaW50XSwgb3B0aW9ucy5kZXN0aW5hdGlvblJlY3RhbmdsZVtlbmRQb2ludF0sIHBhdGhEZWZpbml0aW9uT3B0aW9ucyksXG4gICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgc3Ryb2tlOiBvcHRpb25zLmNvbG9yLFxuICAgICAgICAuLi5saW5lQXR0cmlidXRlcyhvcHRpb25zKSxcbiAgICAgICAgLi4ubWFya2VyT3B0aW9ucyhzdmcsIG9wdGlvbnMpXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHNldFBhdGhBdHRyaWJ1dGVzKHN2Z1BhdGgsIHBhdGhBdHRyaWJ1dGVzKSB7XG4gICAgZ2V0UGF0aEF0dHJpYnV0ZU5hbWVzKHN2Z1BhdGgpLmZvckVhY2goYXR0ck5hbWUgPT4gc3ZnUGF0aC5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbShhdHRyTmFtZSkpO1xuICAgIGZvciAobGV0IGF0dHJpYnV0ZU5hbWUgaW4gcGF0aEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgc3ZnUGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBhdHRyaWJ1dGVOYW1lLCBwYXRoQXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhcnJvd0xpbmUoLi4uYXJncykge1xuICAgIGNvbnN0IHBhcnNlZEFyZ3VtZW50cyA9IHBhcnNlQXJndW1lbnRzKGFyZ3MpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBwYXJzZWRBcmd1bWVudHMub3B0aW9ucztcbiAgICBsZXQgcmF3T3B0aW9ucyA9IHBhcnNlZEFyZ3VtZW50cy5yYXdPcHRpb25zO1xuICAgIGNvbnN0IHN2ZyA9IGdldENhbnZhcyhvcHRpb25zLnN2Z1BhcmVudFNlbGVjdG9yKTtcbiAgICBjb25zdCBzdmdQYXRoID0gc3ZnLmNyZWF0ZVBhdGgoKTtcbiAgICBzZXRQYXRoQXR0cmlidXRlcyhzdmdQYXRoLCBnZXRQYXRoQXR0cmlidXRlcyhzdmcsIG9wdGlvbnMpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQYXJlbnRTdmdJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdmcucGFyZW50Q2FudmFzLmlkO1xuICAgICAgICB9LFxuICAgICAgICBnZXRSYXdTdmdQYXRoKCl7XG4gICAgICAgICAgcmV0dXJuIHN2Z1BhdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogKCkgPT4ge1xuICAgICAgICAgICAgc3ZnUGF0aC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Z1BhdGgpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggIT0gMSkge1xuICAgICAgICAgICAgICAgIEVycm9ycy5leGFjdGx5T25lQXJndW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZU9wdGlvbnMgPSBhcmdzWzBdO1xuICAgICAgICAgICAgaWYgKCFpc09iamVjdCh1cGRhdGVPcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIEVycm9ycy5hcmd1bWVudE11c3RCZU9iamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVwZGF0ZU9wdGlvbnMuc3ZnUGFyZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBFcnJvcnMuc3ZnUGFyZW50Tm90QWxsb3dlZEluVXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdSYXdPcHRpb25zID0gey4uLnJhd09wdGlvbnMsIC4uLnVwZGF0ZU9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IG5vcm1hbGl6ZUFuZFZhbGlkYXRlKG5ld1Jhd09wdGlvbnMpO1xuICAgICAgICAgICAgc2V0UGF0aEF0dHJpYnV0ZXMoc3ZnUGF0aCwgZ2V0UGF0aEF0dHJpYnV0ZXMoc3ZnLCBuZXdPcHRpb25zKSk7XG4gICAgICAgICAgICByYXdPcHRpb25zID0gbmV3UmF3T3B0aW9ucztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJvd0xpbmU7IiwibW9kdWxlLmV4cG9ydHMgPSBgX19hcnJvd0xpbmVJbnRlcm5hbGA7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIEhPUklaT05UQUw6ICdob3Jpem9udGFsJyxcbiAgVkVSVElDQUw6ICd2ZXJ0aWNhbCdcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgU1RBUlQ6ICdzdGFydCcsXG4gIEVORDogJ2VuZCcsXG4gIEJPVEg6ICdib3RoJ1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXJyb3dIZWFkRmlsbGVkOiAnYXJyb3dIZWFkRmlsbGVkJyxcbiAgYXJyb3dIZWFkOiAnYXJyb3dIZWFkJyxcbiAgc3F1YXJlczogJ3NxdWFyZXMnLFxuICBjaXJjbGVzOiAnY2lyY2xlcycsXG4gIGN1c3RvbTogJ2N1c3RvbScsXG4gIG5vbmU6ICdub25lJ1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZG90OiAnMSAxJyxcbiAgZGFzaDogJzQgMScsXG4gIHNvbGlkOiAnJyxcbiAgJ2RvdC1kYXNoJzogJzEgMSA0IDEnXG59OyIsImNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJyk7XG5jb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpO1xuXG5mdW5jdGlvbiBpc0Nvb3JkaW5hdGUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgaWYgKCFrZXlzLmluY2x1ZGVzKCd4JykpIHJldHVybiBmYWxzZTtcbiAgaWYgKCFrZXlzLmluY2x1ZGVzKCd5JykpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGlzTnVtYmVyKG9iai54KSAmJiBpc051bWJlcihvYmoueSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDb29yZGluYXRlOyIsImNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCx5KXtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICB0cmFuc2xhdGUoZmlyc3QsIHNlY29uZCl7XG4gICAgbGV0IHgseTtcbiAgICBpZiAoZmlyc3QgJiYgIXNlY29uZCAmJiAoZmlyc3QueCB8fCBmaXJzdC55KSkge1xuICAgICAgW3gseV0gPSBbZmlyc3QueCwgZmlyc3QueV07XG4gICAgfSBlbHNlIHtcbiAgICAgIFt4LHldID0gW2ZpcnN0LCBzZWNvbmRdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCsoeCB8fCAwKSwgdGhpcy55ICsgKHkgfHwgMCkpO1xuICB9XG5cbiAgbGVmdE9mKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMueCA8IG90aGVyLnhcbiAgfVxuXG4gIGFib3ZlT2Yob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy55IDwgb3RoZXIueVxuICB9XG5cbiAgaG9yaXpvbnRhbGx5QWxpZ25lZFRvKG90aGVyKXtcbiAgICBjb25zdCBoRGlzdCA9IE1hdGguYWJzKG90aGVyLnggLSB0aGlzLngpO1xuICAgIGNvbnN0IHZEaXN0ID0gTWF0aC5hYnMob3RoZXIueSAtIHRoaXMueSk7XG4gICAgcmV0dXJuIGhEaXN0ID4gdkRpc3Q7XG4gIH1cblxuICBzdHIoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMueH0gJHt0aGlzLnl9YFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7IiwiY29uc3QgUG9pbnQgPSByZXF1aXJlKCcuL3BvaW50Jyk7XG5cbmNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHgseSwgd2lkdGgsIGhlaWdodCl7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGdldCB0b3BMZWZ0KCl7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9XG4gIGdldCB0b3BSaWdodCgpeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHRoaXMud2lkdGgsIHRoaXMueSk7IH1cbiAgZ2V0IHRvcENlbnRlcigpeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHRoaXMud2lkdGgvMiwgdGhpcy55KSB9XG4gIGdldCBtaWRkbGVMZWZ0KCl7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkrIHRoaXMuaGVpZ2h0LzIpIH1cbiAgZ2V0IG1pZGRsZVJpZ2h0KCl7IHJldHVybiBuZXcgUG9pbnQodGhpcy54KyB0aGlzLndpZHRoLCB0aGlzLnkrIHRoaXMuaGVpZ2h0LzIpIH1cbiAgZ2V0IGJvdHRvbUxlZnQoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkrIHRoaXMuaGVpZ2h0KSB9XG4gIGdldCBib3R0b21DZW50ZXIoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgdGhpcy53aWR0aC8yLCB0aGlzLnkrIHRoaXMuaGVpZ2h0KSB9XG4gIGdldCBib3R0b21SaWdodCgpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngrdGhpcy53aWR0aCwgdGhpcy55KyB0aGlzLmhlaWdodCkgfVxuXG4gIGxlZnRPZihvdGhlcil7XG4gICAgcmV0dXJuIHRoaXMubWlkZGxlTGVmdC5sZWZ0T2Yob3RoZXIubWlkZGxlTGVmdCk7XG4gIH1cblxuICBnZXQgY2VudGVyKCl7IHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgdGhpcy53aWR0aC8yLCB0aGlzLnkgKyB0aGlzLmhlaWdodC8yKSB9XG5cblxuICBhYm92ZU9mKG90aGVyKXtcbiAgICByZXR1cm4gdGhpcy50b3BDZW50ZXIuYWJvdmVPZihvdGhlci50b3BDZW50ZXIpO1xuICB9XG59XG5cblJlY3RhbmdsZS5TSURFUyA9IHtcbiAgdG9wTGVmdDogJ3RvcExlZnQnLFxuICB0b3BSaWdodDogJ3RvcFJpZ2h0JyxcbiAgdG9wQ2VudGVyOiAndG9wQ2VudGVyJyxcbiAgbWlkZGxlUmlnaHQ6ICdtaWRkbGVSaWdodCcsXG4gIG1pZGRsZUxlZnQ6ICdtaWRkbGVMZWZ0JyxcbiAgYm90dG9tTGVmdDogJ2JvdHRvbUxlZnQnLFxuICBib3R0b21DZW50ZXI6ICdib3R0b21DZW50ZXInLFxuICBib3R0b21SaWdodDogJ2JvdHRvbVJpZ2h0J1xufTtcblxuZnVuY3Rpb24gZmluZEFic29sdXRlUG9zaXRpb24oaHRtbEVsZW1lbnQpIHtcbiAgZm9yICh2YXIgeCA9IDAsIHkgPSAwLCBlbCA9IGh0bWxFbGVtZW50OyBlbCAhPSBudWxsOyBlbCA9IGVsLm9mZnNldFBhcmVudCkge1xuICAgIHggKz0gZWwub2Zmc2V0TGVmdDtcbiAgICB5ICs9IGVsLm9mZnNldFRvcDtcbiAgfVxuXG4gIHJldHVybiBuZXcgUG9pbnQoeCx5KTtcbn1cblxuXG5SZWN0YW5nbGUuZnJvbURPTUVsZW1lbnQgPSBmdW5jdGlvbihET01FbGVtZW50KXtcbiAgY29uc3QgcG9zaXRpb24gPSBmaW5kQWJzb2x1dGVQb3NpdGlvbihET01FbGVtZW50KTtcbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoXG4gICAgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgRE9NRWxlbWVudC5vZmZzZXRXaWR0aCwgRE9NRWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdGFuZ2xlOyIsImNvbnN0IFN2Z0NhbnZhcyA9IHJlcXVpcmUoJy4vc3ZnL3N2Z19jYW52YXMnKTtcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4vdXRpbC9lcnJvcnMnKTtcblxuY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIGdldFN2Z0NhbnZhcyhzZWxlY3Rvcil7XG4gIGxldCBkb21FbGVtZW50O1xuICBpZiAoIXNlbGVjdG9yKXtcbiAgICBkb21FbGVtZW50ID0gU3ZnQ2FudmFzLmRlZmF1bHRTdmdFbGVtZW50KCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFjYWNoZS5oYXMoc2VsZWN0b3IpKSB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgaWYgKCFlbCkge1xuICAgICAgICBFcnJvcnMuY291bGROb3RGaW5kU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgY2FjaGUuc2V0KHNlbGVjdG9yLCBlbCk7XG4gICAgfVxuICAgIGRvbUVsZW1lbnQgPSAgY2FjaGUuZ2V0KHNlbGVjdG9yKVxuICB9XG4gIHJldHVybiBuZXcgU3ZnQ2FudmFzKGRvbUVsZW1lbnQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN2Z0NhbnZhczsiLCJjb25zdCBSZWN0YW5nbGUgPSByZXF1aXJlKCcuL2dlb21ldHJ5L3JlY3RhbmdsZScpO1xuY29uc3Qge0hPUklaT05UQUwsIFZFUlRJQ0FMfSA9IHJlcXVpcmUoJy4vY29uc3QvZGlyZWN0aW9ucycpO1xuY29uc3QgeyByZXZlcnNlSWYgfSA9IHJlcXVpcmUoJy4vdXRpbC9oZWxwZXInKTtcblxuY29uc3QgZGlyZWN0aW9uRW5kcG9pbnRzID0ge1xuICBbSE9SSVpPTlRBTF06IChzb3VyY2VSZWN0YW5nbGUsIGRlc3RpbmF0aW9uUmVjdGFuZ2xlKSA9PiByZXZlcnNlSWYoXG4gICAgW1JlY3RhbmdsZS5TSURFUy5taWRkbGVMZWZ0LCBSZWN0YW5nbGUuU0lERVMubWlkZGxlUmlnaHRdLFxuICAgIHNvdXJjZVJlY3RhbmdsZS5sZWZ0T2YoZGVzdGluYXRpb25SZWN0YW5nbGUpXG4gICksXG4gIFtWRVJUSUNBTF06IChzb3VyY2VSZWN0YW5nbGUsIGRlc3RpbmF0aW9uUmVjdGFuZ2xlKSA9PiByZXZlcnNlSWYoXG4gICAgW1JlY3RhbmdsZS5TSURFUy50b3BDZW50ZXIsIFJlY3RhbmdsZS5TSURFUy5ib3R0b21DZW50ZXJdLFxuICAgIHNvdXJjZVJlY3RhbmdsZS5hYm92ZU9mKGRlc3RpbmF0aW9uUmVjdGFuZ2xlKSlcbn07XG5cbmZ1bmN0aW9uIGdldEVuZHBvaW50cyh7c291cmNlUmVjdGFuZ2xlLCBkZXN0aW5hdGlvblJlY3RhbmdsZSwgc291cmNlUG9zaXRpb24sIGRlc3RpbmF0aW9uUG9zaXRpb259KXtcbiAgY29uc3QgZGlyZWN0aW9uID0gc291cmNlUmVjdGFuZ2xlLmNlbnRlci5ob3Jpem9udGFsbHlBbGlnbmVkVG8oZGVzdGluYXRpb25SZWN0YW5nbGUuY2VudGVyKSA/IEhPUklaT05UQUwgOiBWRVJUSUNBTDtcbiAgbGV0IFtiZWdpblBvaW50LCBlbmRQb2ludF0gPSBkaXJlY3Rpb25FbmRwb2ludHNbZGlyZWN0aW9uXShzb3VyY2VSZWN0YW5nbGUsIGRlc3RpbmF0aW9uUmVjdGFuZ2xlKTtcblxuICBpZiAoc291cmNlUG9zaXRpb24pIHtcbiAgICBiZWdpblBvaW50ID0gc291cmNlUG9zaXRpb247XG4gIH1cblxuICBpZiAoZGVzdGluYXRpb25Qb3NpdGlvbikge1xuICAgIGVuZFBvaW50ID0gZGVzdGluYXRpb25Qb3NpdGlvbjtcbiAgfVxuICByZXR1cm4ge1xuICAgIGJlZ2luUG9pbnQsXG4gICAgZW5kUG9pbnQsXG4gICAgZGlyZWN0aW9uXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRFbmRwb2ludHM7IiwiY29uc3QgTGluZVN0eWxlID0gcmVxdWlyZSgnLi9jb25zdC9saW5lX3N0eWxlJyk7XG5cbmZ1bmN0aW9uIGxpbmVBdHRyaWJ1dGVzKG9wdGlvbnMpe1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgaWYgKG9wdGlvbnMuc3R5bGUpIHtcbiAgICByZXN1bHRbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IExpbmVTdHlsZVtvcHRpb25zLnN0eWxlXTtcbiAgfVxuICBpZiAob3B0aW9ucy50aGlja25lc3MpIHtcbiAgICByZXN1bHRbJ3N0cm9rZS13aWR0aCddID0gb3B0aW9ucy50aGlja25lc3M7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaW5lQXR0cmlidXRlcztcbiIsImNvbnN0IGdldCA9IHJlcXVpcmUoJ2xvZGFzaC9nZXQnKTtcbmNvbnN0IEVuZHBvaW50VHlwZSA9IHJlcXVpcmUoJy4vY29uc3QvZW5kcG9pbnRfdHlwZScpO1xuY29uc3QgRW5kcG9pbnRQb3NpdGlvbiA9IHJlcXVpcmUoJy4vY29uc3QvZW5kcG9pbnRfcG9zaXRpb24nKTtcbmNvbnN0IHtnZXRDb3VudGVyIH0gPSByZXF1aXJlKCcuL3V0aWwvaGVscGVyJyk7XG5jb25zdCBQUkVGSVggPSByZXF1aXJlKCcuL2NvbnN0L2Fycm93X2xpbmVfcHJlZml4Jyk7XG5cbmNvbnN0IE1BUktFUl9JRF9QUkVGSVggPSBgJHtQUkVGSVh9LU1BUktFUi1gO1xuY29uc3QgbmV4dE1hcmtlcklkID0gZ2V0Q291bnRlcigpO1xuY29uc3QgbWFya2VyQ2FjaGUgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIGdldE1hcmtlck9wdGlvbnNBbmRLZXkob3B0aW9ucyl7XG4gIGNvbnN0IG1hcmtlclR5cGUgPSBnZXQob3B0aW9ucywgJ2VuZHBvaW50LnR5cGUnKTtcbiAgY29uc3QgZmlsbENvbG9yID0gZ2V0KG9wdGlvbnMsICdlbmRwb2ludC5maWxsQ29sb3InKTtcbiAgY29uc3Qgc2l6ZSA9IGdldChvcHRpb25zLCAnZW5kcG9pbnQuc2l6ZScpO1xuICBjb25zdCBvcHRzID0geyB0eXBlOiBtYXJrZXJUeXBlLCBjb2xvcjogb3B0aW9ucy5jb2xvciwgZmlsbENvbG9yLCBzaXplIH07XG4gIHJldHVybiB7IGtleTogYCR7b3B0aW9ucy5jb2xvcn0tJHttYXJrZXJUeXBlfS0ke2ZpbGxDb2xvcn0tJHtzaXplfWAsIG9wdGlvbnM6IG9wdHMgfVxufVxuXG5mdW5jdGlvbiBnZXRNYXJrZXIoc3ZnLCBiYXNlT3B0cykge1xuICBjb25zdCB7IGtleSwgb3B0aW9ucyB9ID0gZ2V0TWFya2VyT3B0aW9uc0FuZEtleShiYXNlT3B0cyk7XG4gIGlmICghbWFya2VyQ2FjaGUuaGFzKGtleSkpIHtcbiAgICBjb25zdCBtYXJrZXJJZCA9IGAke01BUktFUl9JRF9QUkVGSVh9JHtuZXh0TWFya2VySWQoKX1gO1xuICAgIHN2Zy5jcmVhdGVNYXJrZXIobWFya2VySWQsIG9wdGlvbnMpO1xuICAgIG1hcmtlckNhY2hlLnNldChrZXksIG1hcmtlcklkKTtcbiAgICByZXR1cm4gbWFya2VySWQ7XG4gIH1cbiAgcmV0dXJuIG1hcmtlckNhY2hlLmdldChrZXkpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0TWFya2VyT3B0aW9ucyh0eXBlLCB1cmwpe1xuICBjb25zdCBvcHRzID0ge1wibWFya2VyLWVuZFwiOiB1cmx9O1xuICBpZiAoKHR5cGUgPT0gRW5kcG9pbnRUeXBlLnNxdWFyZXMpIHx8ICh0eXBlID09IEVuZHBvaW50VHlwZS5jaXJjbGVzKSkge1xuICAgIG9wdHNbJ21hcmtlci1zdGFydCddID0gdXJsO1xuICB9XG4gIHJldHVybiBvcHRzO1xufVxuXG5mdW5jdGlvbiB1c2VyRGVmaW5lZE1hcmtlck9wdGlvbnMocG9zaXRpb24sIHVybCl7XG4gIGNvbnN0IG9wdHMgPSB7fTtcbiAgaWYgKFtFbmRwb2ludFBvc2l0aW9uLlNUQVJULCBFbmRwb2ludFBvc2l0aW9uLkJPVEhdLmluY2x1ZGVzKHBvc2l0aW9uKSl7XG4gICAgb3B0c1snbWFya2VyLXN0YXJ0J10gPSB1cmw7XG4gIH1cbiAgaWYgKFtFbmRwb2ludFBvc2l0aW9uLkVORCwgRW5kcG9pbnRQb3NpdGlvbi5CT1RIXS5pbmNsdWRlcyhwb3NpdGlvbikpIHtcbiAgICBvcHRzWydtYXJrZXItZW5kJ10gPSB1cmw7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya2VyT3B0aW9ucyhzdmcsIG9wdGlvbnMpe1xuICBjb25zdCBlbmRwb2ludFR5cGUgPSBnZXQob3B0aW9ucywgJ2VuZHBvaW50LnR5cGUnKTtcbiAgaWYgKGVuZHBvaW50VHlwZSA9PSBFbmRwb2ludFR5cGUubm9uZSkge1xuICAgIHJldHVybiB7fVxuICB9XG4gIGxldCBtYXJrZXJJZCA9IGdldChvcHRpb25zLCAnZW5kcG9pbnQubWFya2VySWRlbnRpZmllcicpO1xuICBpZiAoIW1hcmtlcklkKSB7XG4gICAgbWFya2VySWQgPSBnZXRNYXJrZXIoc3ZnLCBvcHRpb25zKTtcbiAgfVxuICBjb25zdCB1cmwgPSBgdXJsKCMke21hcmtlcklkfSlgO1xuICBjb25zdCBwb3NpdGlvbiA9IGdldChvcHRpb25zLCAnZW5kcG9pbnQucG9zaXRpb24nKTtcbiAgcmV0dXJuIHBvc2l0aW9uID8gdXNlckRlZmluZWRNYXJrZXJPcHRpb25zKHBvc2l0aW9uLCB1cmwpIDogZGVmYXVsdE1hcmtlck9wdGlvbnMoZW5kcG9pbnRUeXBlLCB1cmwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcmtlck9wdGlvbnM7IiwiY29uc3QgeyBIT1JJWk9OVEFMIH0gPSByZXF1aXJlKCcuL2NvbnN0L2RpcmVjdGlvbnMnKTtcblxuZnVuY3Rpb24gZ2V0UGl2b3RzKHBvaW50MSwgcG9pbnQyLCBjdXJ2YXR1cmUsIGRpcmVjdGlvbikge1xuICBjb25zdCBkaW1lbnNpb24gPSAoZGlyZWN0aW9uID09IEhPUklaT05UQUwpID8gJ3gnIDogJ3knO1xuICBjb25zdCBhbW91bnQgPSAocG9pbnQyW2RpbWVuc2lvbl0gLSBwb2ludDFbZGltZW5zaW9uXSkgKiBjdXJ2YXR1cmU7XG5cbiAgcmV0dXJuIFtcbiAgICBwb2ludDEudHJhbnNsYXRlKHtbZGltZW5zaW9uXTogYW1vdW50fSksXG4gICAgcG9pbnQyLnRyYW5zbGF0ZSh7W2RpbWVuc2lvbl06IC1hbW91bnR9KVxuICBdO1xufVxuXG5mdW5jdGlvbiBwYXRoRGVmaW5pdGlvbihwb2ludDEsIHBvaW50Miwgb3B0aW9ucyl7XG4gIGNvbnN0IFtwMSwgcDJdID0gb3B0aW9ucy5jdXJ2YXR1cmUgP1xuICAgIGdldFBpdm90cyhwb2ludDEsIHBvaW50Miwgb3B0aW9ucy5jdXJ2YXR1cmUsIG9wdGlvbnMuZGlyZWN0aW9uKSA6XG4gICAgW3BvaW50MS50cmFuc2xhdGUob3B0aW9ucy5waXZvdHNbMF0pLCBwb2ludDIudHJhbnNsYXRlKG9wdGlvbnMucGl2b3RzWzFdKV07XG4gIHJldHVybiBbJ00nLCBwb2ludDEuc3RyKCksICdDJywgcDEuc3RyKCksIHAyLnN0cigpLCBwb2ludDIuc3RyKCldLmpvaW4oJyAnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRoRGVmaW5pdGlvbjsiLCJjb25zdCB7ZHJhd01hcmtlciwgY3JlYXRlRWxlbWVudCwgY3JlYXRlU3ZnRWxlbWVudCB9ID0gcmVxdWlyZSgnLi9zdmdfdXRpbHMnKTtcbmNvbnN0IFBSRUZJWCA9IHJlcXVpcmUoJy4vLi4vY29uc3QvYXJyb3dfbGluZV9wcmVmaXgnKTtcblxuY2xhc3MgU3ZnQ2FudmFzIHtcbiAgY29uc3RydWN0b3IocGFyZW50Q2FudmFzKXtcbiAgICB0aGlzLnBhcmVudENhbnZhcyA9IHBhcmVudENhbnZhcztcbiAgfVxuXG4gIGNyZWF0ZU1hcmtlcihpZCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHt0eXBlLCBjb2xvciwgZmlsbENvbG9yLCBzaXplfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qgc2l6ZVZhbHVlID0gU3RyaW5nKHNpemUqMTApO1xuICAgIGNvbnN0IG1hcmtlciA9IGNyZWF0ZUVsZW1lbnQoJ21hcmtlcicsIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIG1hcmtlclVuaXRzOiAnc3Ryb2tlV2lkdGgnLFxuICAgICAgdmlld0JveDogJy0xIC0xIDEyIDEyJyxcbiAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICBmaWxsOiBmaWxsQ29sb3IsXG4gICAgICBvcmllbnQ6ICdhdXRvJyxcbiAgICAgIG1hcmtlcldpZHRoOiBzaXplVmFsdWUsXG4gICAgICBtYXJrZXJIZWlnaHQ6IHNpemVWYWx1ZVxuICAgIH0pO1xuICAgIGRyYXdNYXJrZXJbdHlwZV0obWFya2VyKTtcbiAgICB0aGlzLmRlZmluaXRpb25FbGVtZW50LmFwcGVuZENoaWxkKG1hcmtlcik7XG4gIH1cblxuICBjcmVhdGVQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSBjcmVhdGVTdmdFbGVtZW50KCdwYXRoJyk7XG4gICAgdGhpcy5wYXJlbnRDYW52YXMuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBnZXQgZGVmaW5pdGlvbkVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9kZWZzKSB7XG4gICAgICBjb25zdCBleGlzdGluZ0RlZnMgPSB0aGlzLnBhcmVudENhbnZhcy5xdWVyeVNlbGVjdG9yKCdkZWZzJyk7XG4gICAgICBpZiAoZXhpc3RpbmdEZWZzKSB7XG4gICAgICAgIHRoaXMuX2RlZnMgPSBleGlzdGluZ0RlZnNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRlZmluaXRpb25zRWxlbWVudCA9IGNyZWF0ZVN2Z0VsZW1lbnQoJ2RlZnMnKTtcbiAgICAgICAgdGhpcy5wYXJlbnRDYW52YXMuYXBwZW5kQ2hpbGQoZGVmaW5pdGlvbnNFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fZGVmcyA9IGRlZmluaXRpb25zRWxlbWVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2RlZnM7XG4gIH1cbn1cblxuU3ZnQ2FudmFzLmRlZmF1bHRTdmdFbGVtZW50ID0gZnVuY3Rpb24oKXtcbiAgaWYgKCF0aGlzLl9kZWZhdWx0RWwpIHtcbiAgICBjb25zdCBpZCA9IGAke1BSRUZJWH0tc3ZnLWNhbnZhc2A7XG4gICAgdGhpcy5fZGVmYXVsdEVsID0gY3JlYXRlRWxlbWVudCgnc3ZnJywge1xuICAgICAgaWQ6IGlkLFxuICAgICAgc3R5bGU6ICdwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6MHB4O3BvaW50ZXItZXZlbnRzOiBub25lOycsXG4gICAgICB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2RlZmF1bHRFbCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX2RlZmF1bHRFbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3ZnQ2FudmFzOyIsImNvbnN0IGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpO1xuY29uc3QgRW5kcG9pbnRUeXBlID0gcmVxdWlyZSgnLi8uLi9jb25zdC9lbmRwb2ludF90eXBlJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQodGFnKXtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHRhZyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgYXR0cmlidXRlcykge1xuICBjb25zdCBlbCA9IGNyZWF0ZVN2Z0VsZW1lbnQodHlwZSk7XG4gIGZvciAobGV0IGF0dHIgaW4gYXR0cmlidXRlcykge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKTtcbiAgfVxuICByZXR1cm4gZWw7XG59XG5cbmZ1bmN0aW9uIG1hcmtlckZhY3RvcnkocmVmWCwgcmVmWSwgc2hhcGVHZW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICBtYXJrZXIuc2V0QXR0cmlidXRlKCdyZWZYJywgcmVmWCk7XG4gICAgbWFya2VyLnNldEF0dHJpYnV0ZSgncmVmWScsIHJlZlkpO1xuICAgIGNvbnN0IHNoYXBlID0gaXNGdW5jdGlvbihzaGFwZUdlbikgPyBzaGFwZUdlbihtYXJrZXIpIDogc2hhcGVHZW47XG4gICAgbWFya2VyLmFwcGVuZENoaWxkKHNoYXBlKTtcbiAgfVxufVxuXG5jb25zdCBkcmF3TWFya2VyID0ge1xuICBbRW5kcG9pbnRUeXBlLmFycm93SGVhZEZpbGxlZF06IG1hcmtlckZhY3RvcnkoMTAsIDUsIGNyZWF0ZUVsZW1lbnQoJ3BvbHlnb24nLCB7cG9pbnRzOiAnMCwwIDEwLDUgMCwxMCd9KSksXG4gIFtFbmRwb2ludFR5cGUuY2lyY2xlc106IG1hcmtlckZhY3RvcnkoNSwgNSwgY3JlYXRlRWxlbWVudCgnY2lyY2xlJywge3I6IDQsIGN4OiA1LCBjeTogNX0pKSxcbiAgW0VuZHBvaW50VHlwZS5zcXVhcmVzXTogbWFya2VyRmFjdG9yeSg1LCA1LCBjcmVhdGVFbGVtZW50KCdyZWN0Jywge3dpZHRoOiAxMCwgaGVpZ2h0OiAxMH0pKSxcbiAgW0VuZHBvaW50VHlwZS5hcnJvd0hlYWRdOiBtYXJrZXJGYWN0b3J5KDEwLCA1LCBmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgbWFya2VyLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5JywgJzAnKTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncG9seWxpbmUnLCB7cG9pbnRzOiAnMCwwIDEwLDUgMCwxMCd9KVxuICB9KVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRyYXdNYXJrZXIsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN2Z0VsZW1lbnRcbn0iLCJjbGFzcyBBcmd1bWVudEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cblxuICB0b1N0cmluZygpe1xuICAgIHJldHVybiBgQXJndW1lbnRFcnJvcjogJHt0aGlzLm1lc3NhZ2V9YDtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBBcmd1bWVudEVycm9yO1xuXG4iLCJjb25zdCBBcmd1bWVudEVycm9yID0gcmVxdWlyZSgnLi9hcmd1bWVudF9lcnJvcicpO1xuY29uc3QgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJyk7XG5cbmNvbnN0IHRocm93QXJndW1lbnRFcnJvciA9IGZ1bmN0aW9uKGFyZyl7XG4gIGlmIChpc0Z1bmN0aW9uKGFyZykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhcmcuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIHRocm93IG5ldyBBcmd1bWVudEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgIHRocm93IG5ldyBBcmd1bWVudEVycm9yKGFyZyk7XG4gICAgfVxuICB9XG5cbn07XG5jb25zdCBFcnJvcnMgPSB7XG4gIGV4YWN0bHlPbmVBcmd1bWVudDogdGhyb3dBcmd1bWVudEVycm9yKGBFeGFjdGx5IG9uZSBhcmd1bWVudCBleHBlY3RlZGApLFxuICBhcmd1bWVudE11c3RCZU9iamVjdDogdGhyb3dBcmd1bWVudEVycm9yKGBBcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdGApLFxuICBzdmdQYXJlbnROb3RBbGxvd2VkSW5VcGRhdGU6IHRocm93QXJndW1lbnRFcnJvcignc3ZnUGFyZW50U2VsZWN0b3IgaXMgbm90IGFsbG93ZWQgaW4gdXBkYXRlJyksXG4gIGNvdWxkTm90RmluZFNlbGVjdG9yOiB0aHJvd0FyZ3VtZW50RXJyb3IoKHBhcmFtKSA9PiBgQ291bGQgbm90IGZpbmQgZWxlbWVudCB3aXRoIHNlbGVjdG9yIC0gJyR7cGFyYW19J2ApLFxuICBzb3VyY2VBbmREZXN0aW5hdGlvbkZvcm1hdDogdGhyb3dBcmd1bWVudEVycm9yKCdzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIHNob3VsZCBiZSBlaXRoZXIgcXVlcnlTZWxlY3RvciBzdHJpbmdzIG9yIGNvb3JkaW5hdGUgcGFpcnMgKHt4OiAuLiAseTogfSknKSxcbiAgc2luZ2xlQXJndW1lbnRPYmplY3Q6IHRocm93QXJndW1lbnRFcnJvcihgU2luZ2xlIGFyZ3VtZW50IHNob3VsZCBhbHdheXMgYmUgYW4gb2JqZWN0YCksXG4gIG1pc3NpbmdTb3VyY2U6IHRocm93QXJndW1lbnRFcnJvcihgTWlzc2luZyBzb3VyY2Ugb3B0aW9uYCksXG4gIG1pc3NpbmdEZXN0aW5hdGlvbjogdGhyb3dBcmd1bWVudEVycm9yKGBNaXNzaW5nIGRlc3RpbmF0aW9uIG9wdGlvbmApLFxuICBsYXN0QXJndW1lbnRPYmplY3Q6IHRocm93QXJndW1lbnRFcnJvcignTGFzdCBhcmd1bWVudCBzaG91bGQgYWx3YXlzIGJlIGFuIG9iamVjdCcpLFxuICBtYXhpbXVtVGhyZWVBcmd1bWVudHM6IHRocm93QXJndW1lbnRFcnJvcignRnVuY3Rpb24gZG9lcyBub3QgYWNjZXB0IG1vcmUgdGhhbiB0aHJlZSBhcmd1bWVudHMnKSxcbiAgZG91YmxlU291cmNlOiB0aHJvd0FyZ3VtZW50RXJyb3IoJ1NvdXJjZSBzcGVjaWZpZWQgdHdpY2UgKGFzIGZpcnN0IGFyZ3VtZW50LCBhbmQgaW4gb3B0aW9ucycpLFxuICBkb3VibGVEZXN0aW5hdGlvbjogdGhyb3dBcmd1bWVudEVycm9yKCdEZXN0aW5hdGlvbiBzcGVjaWZpZWQgdHdpY2UgKGFzIHNlY29uZCBhcmd1bWVudCwgYW5kIGluIG9wdGlvbnMpJyksXG4gIGF0TGVhc3RPbmVBcmd1bWVudDogdGhyb3dBcmd1bWVudEVycm9yKGBBdCBsZWFzdCBvbmUgYXJndW1lbnQgZXhwZWN0ZWRgKSxcbiAgbXVzdEJlU3RyaW5nOiB0aHJvd0FyZ3VtZW50RXJyb3IocGFyYW0gPT4gYCR7cGFyYW19IG11c3QgYmUgYSBzdHJpbmdgKSxcbiAgbXVzdEJlTnVtYmVyOiB0aHJvd0FyZ3VtZW50RXJyb3IocGFyYW0gPT4gYCR7cGFyYW19IG11c3QgYmUgYSBudW1iZXJgKSxcbiAgbXVzdEJlUG9zaXRpdmVOdW1iZXI6IHRocm93QXJndW1lbnRFcnJvcihwYXJhbSA9PiBgJHtwYXJhbX0gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcmApLFxuICBtdXN0QmVOb25aZXJvTnVtYmVyOiB0aHJvd0FyZ3VtZW50RXJyb3IocGFyYW0gPT4gYCR7cGFyYW19IG11c3QgYmUgYSBudW1iZXIgZGlmZmVyZW50IHRoYW4gMGApLFxuICBwb3NpdGlvbldpdGhDb29yZHM6IHRocm93QXJndW1lbnRFcnJvcihzb3VyY2VPckRlc3QgPT4gYCR7c291cmNlT3JEZXN0fVBvc2l0aW9uIHVuYXZhaWxhYmxlIHdoZW4gdXNpbmcgY29vcmRpbmF0ZXMgYXMgJHtzb3VyY2VPckRlc3R9YCksXG4gIHZhbEluRW51bTogdGhyb3dBcmd1bWVudEVycm9yKCh2YWwsYXJyLCBsYWJlbHMpID0+IGAnJHt2YWx9JyBpcyBub3QgYSB2YWxpZCAke2xhYmVsc1swXX0gLSBhdmFpbGFibGUgJHtsYWJlbHNbMV19IGFyZTogJHthcnIuam9pbignLCAnKX1gKSxcbiAgcGl2b3RzRm9ybWF0OiB0aHJvd0FyZ3VtZW50RXJyb3IoYCdwaXZvdHMnIG11c3QgYmUgYW4gYXJyYXkgb2YgdHdvIGNvb3JkaW5hdGVzIHt4OiBudW1iZXIgLCB5OiBudW1iZXJ9YCksXG4gIHBpdm90c0FuZEN1cnZhdHVyZTogdGhyb3dBcmd1bWVudEVycm9yKFwiJ2N1cnZhdHVyZScgb3B0aW9uIGlzIG5vdCBhbGxvd2VkIHdoZW4gdXNpbmcgZXhwbGljaXQgcGl2b3RzXCIpLFxuICBtaXNzaW5nTWFya2VySWRlbnQ6IHRocm93QXJndW1lbnRFcnJvcihcIkN1c3RvbSBtYXJrZXIgdHlwZSBpcyBtaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5ICdlbmRwb2ludC5tYXJrZXJJZGVudGlmaWVyJ1wiKSxcbiAgbWFya2VySWRlbnRPbmx5Q3VzdG9tOiB0aHJvd0FyZ3VtZW50RXJyb3IoXCJwcm9wZXJ0eSAnZW5kcG9pbnQubWFya2VySWRlbnRpZmllcicgYWxsb3dlZCBvbmx5IHdpdGggY3VzdG9tIGVuZHBvaW50LnR5cGVcIiksXG4gIG1hcmtlckN1c3RvbWl6YXRpb25VbmF2YWlsYWJsZTogdGhyb3dBcmd1bWVudEVycm9yKHByb3AgPT4gYE1hcmtlciBjdXN0b21pemF0aW9uIHByb3BlcnR5ICcke3Byb3B9JyBub3QgYXZhaWxhYmxlIHdoZW4gcHJvdmlkaW5nIGN1c3RvbSBtYXJrZXJgKSxcbiAgdW5yZWNvZ25pemVkT3B0aW9uOiB0aHJvd0FyZ3VtZW50RXJyb3IocHJvcCA9PiBgVW5yZWNvZ25pemVkIG9wdGlvbiAnJHtwcm9wfSdgKSxcbiAgdW5yZWNvZ25pemVkRW5kcG9pbnRPcHRpb246IHRocm93QXJndW1lbnRFcnJvcihwcm9wID0+IGBVbnJlY29nbml6ZWQgZW5kcG9pbnQgb3B0aW9uICcke3Byb3B9J2ApXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yczsiLCJmdW5jdGlvbiBnZXRDb3VudGVyKCl7XG4gIGxldCBjbnQgPSAwO1xuICByZXR1cm4gKCgpID0+IGNudCsrKTtcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZUlmKGFyciwgYm9vbCkge1xuICBpZiAoYm9vbCkge1xuICAgIHJldHVybiBhcnIucmV2ZXJzZSgpO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBnZXRDb3VudGVyLCByZXZlcnNlSWYgfTsiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG4iLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHN0cmluZy5jaGFyQ29kZUF0KDApID09PSA0NiAvKiAuICovKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN1YlN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuIiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJub2RlXCIgaW5jbHVkZT1cImdldCxpc1N0cmluZyxpc09iamVjdCxpc051bWJlcixpc1VuZGVmaW5lZCxpc0Z1bmN0aW9uXCJgXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG52YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5vZGVcIiBpbmNsdWRlPVwiZ2V0LGlzU3RyaW5nLGlzT2JqZWN0LGlzTnVtYmVyLGlzVW5kZWZpbmVkLGlzRnVuY3Rpb25cImBcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanMuZm91bmRhdGlvbi8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cbnZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5vZGVcIiBpbmNsdWRlPVwiZ2V0LGlzU3RyaW5nLGlzT2JqZWN0LGlzTnVtYmVyLGlzVW5kZWZpbmVkLGlzRnVuY3Rpb25cImBcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanMuZm91bmRhdGlvbi8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cbnZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE51bWJlcmAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiAqKk5vdGU6KiogVG8gZXhjbHVkZSBgSW5maW5pdHlgLCBgLUluZmluaXR5YCwgYW5kIGBOYU5gLCB3aGljaCBhcmVcbiAqIGNsYXNzaWZpZWQgYXMgbnVtYmVycywgdXNlIHRoZSBgXy5pc0Zpbml0ZWAgbWV0aG9kLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOdW1iZXIoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gbnVtYmVyVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc051bWJlcjtcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibm9kZVwiIGluY2x1ZGU9XCJnZXQsaXNTdHJpbmcsaXNPYmplY3QsaXNOdW1iZXIsaXNVbmRlZmluZWQsaXNGdW5jdGlvblwiYFxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcy5mb3VuZGF0aW9uLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibm9kZVwiIGluY2x1ZGU9XCJnZXQsaXNTdHJpbmcsaXNPYmplY3QsaXNOdW1iZXIsaXNVbmRlZmluZWQsaXNGdW5jdGlvblwiYFxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcy5mb3VuZGF0aW9uLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xudmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2AgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN0cmluZywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxuICAgICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJub2RlXCIgaW5jbHVkZT1cImdldCxpc1N0cmluZyxpc09iamVjdCxpc051bWJlcixpc1VuZGVmaW5lZCxpc0Z1bmN0aW9uXCJgXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1VuZGVmaW5lZCh2b2lkIDApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNVbmRlZmluZWQobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1VuZGVmaW5lZDtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iXSwic291cmNlUm9vdCI6IiJ9