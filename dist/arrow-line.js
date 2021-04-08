(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["arrowLine"] = factory();
	else
		root["arrowLine"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const arrowLine = __webpack_require__(/*! ./lib/arrow_line.js */ "./src/lib/arrow_line.js");

module.exports = arrowLine;

/***/ }),

/***/ "./src/lib/arguments/normalize_and_validate.js":
/*!*****************************************************!*\
  !*** ./src/lib/arguments/normalize_and_validate.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isNumber = __webpack_require__(/*! lodash/isNumber */ "./src/lib/vendor/lodash/isNumber.js");
const isUndefined = __webpack_require__(/*! lodash/isUndefined */ "./src/lib/vendor/lodash/isUndefined.js");
const Errors = __webpack_require__(/*! ../../util/errors */ "./src/lib/util/errors.js");

function validateCurvature(options){
  if (!isUndefined(options.curvature)) {
    if (!isNumber(options.curvature)) {
      Errors.mustBeNumber('Curvature')
    }
  }
  if (!options.pivots && isUndefined(options.curvature)) options.curvature = 1;
}

module.exports = validateCurvature;

/***/ }),

/***/ "./src/lib/arguments/validate/endpoint/fill_color.js":
/*!***********************************************************!*\
  !*** ./src/lib/arguments/validate/endpoint/fill_color.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

module.exports = `__arrowLineInternal`;

/***/ }),

/***/ "./src/lib/const/directions.js":
/*!*************************************!*\
  !*** ./src/lib/const/directions.js ***!
  \*************************************/
/***/ ((module) => {

module.exports = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
}

/***/ }),

/***/ "./src/lib/const/endpoint_position.js":
/*!********************************************!*\
  !*** ./src/lib/const/endpoint_position.js ***!
  \********************************************/
/***/ ((module) => {

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
/***/ ((module) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
  const pathElements = ['M', point1.str()];
  if (options.curvature !=0) {
    const pivots = options.curvature ?
        getPivots(point1, point2, options.curvature, options.direction) :
        [point1.translate(options.pivots[0]), point2.translate(options.pivots[1])];
    pathElements.push('C');
    pathElements.push(...pivots.map(p => p.str()));
  }
  pathElements.push(point2.str());
  return pathElements.join(' ');
}

module.exports = pathDefinition;

/***/ }),

/***/ "./src/lib/svg/svg_canvas.js":
/*!***********************************!*\
  !*** ./src/lib/svg/svg_canvas.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./src/lib/vendor/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./src/lib/vendor/lodash/_arrayMap.js":
/*!********************************************!*\
  !*** ./src/lib/vendor/lodash/_arrayMap.js ***!
  \********************************************/
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./src/lib/vendor/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./src/lib/vendor/lodash/_freeGlobal.js":
/*!**********************************************!*\
  !*** ./src/lib/vendor/lodash/_freeGlobal.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./src/lib/vendor/lodash/_getMapData.js":
/*!**********************************************!*\
  !*** ./src/lib/vendor/lodash/_getMapData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./src/lib/vendor/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./src/lib/vendor/lodash/_objectToString.js":
/*!**************************************************!*\
  !*** ./src/lib/vendor/lodash/_objectToString.js ***!
  \**************************************************/
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnJvd0xpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy9ub3JtYWxpemVfYW5kX3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3BhcnNlX2FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy9yZWN0YW5nbGVfZnJvbV9wYXJhbS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9jb2xvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9jdXJ2YXR1cmUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvZW5kcG9pbnQvZmlsbF9jb2xvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9vbmx5X3N1cHBvcnRlZC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9zaXplLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL2VuZHBvaW50L3R5cGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvZm9yY2VfZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL29ubHlfc3VwcG9ydGVkLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvcGl2b3RzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9wcm9wZXJ0eV9pbl9lbnVtLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL3NvdXJjZV9hbmRfZGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvc3ZnX3BhcmVudF9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS90aGlja25lc3MuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcnJvd19saW5lLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvYXJyb3dfbGluZV9wcmVmaXguanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9jb25zdC9kaXJlY3Rpb25zLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvZW5kcG9pbnRfcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9jb25zdC9lbmRwb2ludF90eXBlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvbGluZV9zdHlsZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dlb21ldHJ5L2lzX2Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9nZW9tZXRyeS9wb2ludC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dlb21ldHJ5L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dldF9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9nZXRfZW5kcG9pbnRzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvbGluZV9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvbWFya2VyX29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9wYXRoX2RlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9zdmcvc3ZnX2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3N2Zy9zdmdfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi91dGlsL2FyZ3VtZW50X2Vycm9yLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdXRpbC9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi91dGlsL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2lzS2V5LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL190b0tleS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc051bWJlci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc1VuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fycm93TGluZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Fycm93TGluZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBLGtCQUFrQixtQkFBTyxDQUFDLG9EQUFxQjs7QUFFL0MsMkI7Ozs7Ozs7Ozs7QUNGQSx3QkFBd0IsbUJBQU8sQ0FBQyxtRUFBb0I7O0FBRXBELDJCQUEyQixtQkFBTyxDQUFDLDJFQUF3Qjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0M7Ozs7Ozs7Ozs7QUNaQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBaUI7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFrQjs7QUFFekMsNkJBQTZCLG1CQUFPLENBQUMsK0VBQTBCOztBQUUvRDtBQUNBO0FB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QUMsSTs7Ozs7VUNQRDtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJhcnJvdy1saW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXJyb3dMaW5lXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFycm93TGluZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImNvbnN0IGFycm93TGluZSA9IHJlcXVpcmUoJy4vbGliL2Fycm93X2xpbmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcnJvd0xpbmU7IiwiY29uc3QgdmFsaWRhdGVPcHRpb25zID0gcmVxdWlyZSgnLi92YWxpZGF0ZS9vcHRpb25zJyk7XG5cbmNvbnN0IHJlY3RhbmdsZUZyb21QYXJhbSA9IHJlcXVpcmUoJy4vcmVjdGFuZ2xlX2Zyb21fcGFyYW0nKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQW5kVmFsaWRhdGUob3B0aW9ucyl7XG4gIHJldHVybiB7XG4gICAgLi4udmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpLFxuICAgIHNvdXJjZVJlY3RhbmdsZTogcmVjdGFuZ2xlRnJvbVBhcmFtKG9wdGlvbnMuc291cmNlKSxcbiAgICBkZXN0aW5hdGlvblJlY3RhbmdsZTogcmVjdGFuZ2xlRnJvbVBhcmFtKG9wdGlvbnMuZGVzdGluYXRpb24pXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVBbmRWYWxpZGF0ZTsiLCJjb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi8uLi91dGlsL2Vycm9ycycpO1xuXG5jb25zdCBub3JtYWxpemVBbmRWYWxpZGF0ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplX2FuZF92YWxpZGF0ZScpO1xuXG5mdW5jdGlvbiBwYXJzZU11bHRpcGxlQXJndW1lbnRzKGFyZ3Mpe1xuICBpZiAoKGFyZ3MubGVuZ3RoID4gMikgJiYgKCFpc09iamVjdChhcmdzWzJdKSkpIHtcbiAgICBFcnJvcnMubGFzdEFyZ3VtZW50T2JqZWN0KCk7XG4gIH1cbiAgaWYgKGFyZ3MubGVuZ3RoID4gMykge1xuICAgIEVycm9ycy5tYXhpbXVtVGhyZWVBcmd1bWVudHMoKTtcbiAgfVxuICBjb25zdCBvcHRpb25zID0gYXJnc1syXSB8fCB7fTtcbiAgaWYgKG9wdGlvbnMuc291cmNlKSB7XG4gICAgRXJyb3JzLmRvdWJsZVNvdXJjZSgpXG4gIH1cbiAgaWYgKG9wdGlvbnMuZGVzdGluYXRpb24pIHtcbiAgICBFcnJvcnMuZG91YmxlRGVzdGluYXRpb24oKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgc291cmNlOiBhcmdzWzBdLFxuICAgIGRlc3RpbmF0aW9uOiBhcmdzWzFdXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlU2luZ2xlQXJndW1lbnQoYXJncyl7XG4gIGlmICghaXNPYmplY3QoYXJnc1swXSkpIEVycm9ycy5zaW5nbGVBcmd1bWVudE9iamVjdCgpO1xuICBjb25zdCBvcHRpb25zID0gYXJnc1swXTtcbiAgaWYgKCFvcHRpb25zLnNvdXJjZSkge1xuICAgIEVycm9ycy5taXNzaW5nU291cmNlKCk7XG4gIH1cbiAgaWYgKCFvcHRpb25zLmRlc3RpbmF0aW9uKSB7XG4gICAgRXJyb3JzLm1pc3NpbmdEZXN0aW5hdGlvbigpO1xuICB9XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBzdGFuZGFyZGl6ZShhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PSAwKSB7XG4gICAgRXJyb3JzLmF0TGVhc3RPbmVBcmd1bWVudCgpO1xuICB9XG4gIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gcGFyc2VNdWx0aXBsZUFyZ3VtZW50cyhhcmdzKTtcbiAgfVxuICByZXR1cm4gIHBhcnNlU2luZ2xlQXJndW1lbnQoYXJncyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKGFyZ3MpIHtcbiAgY29uc3QgcmF3T3B0aW9ucyA9IHN0YW5kYXJkaXplKGFyZ3MpO1xuICBjb25zdCBvcHRpb25zID0gbm9ybWFsaXplQW5kVmFsaWRhdGUocmF3T3B0aW9ucylcbiAgcmV0dXJuIHsgcmF3T3B0aW9ucywgb3B0aW9ucyB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlQXJndW1lbnRzOyIsImNvbnN0IFJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vLi4vZ2VvbWV0cnkvcmVjdGFuZ2xlJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLy4uL3V0aWwvZXJyb3JzJyk7XG5jb25zdCBpc0Nvb3JkaW5hdGUgPSByZXF1aXJlKCcuLy4uL2dlb21ldHJ5L2lzX2Nvb3JkaW5hdGUnKTtcblxuZnVuY3Rpb24gcmVjdGFuZ2xlRnJvbVBhcmFtKHBhcmFtKXtcbiAgaWYgKGlzQ29vcmRpbmF0ZShwYXJhbSkpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwYXJhbS54LCBwYXJhbS55LCAwLCAwKTtcbiAgfVxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbSk7XG4gIGlmICghZWxlbWVudCkge1xuICAgIEVycm9ycy5jb3VsZE5vdEZpbmRTZWxlY3RvcihwYXJhbSk7XG4gIH1cbiAgcmV0dXJuIFJlY3RhbmdsZS5mcm9tRE9NRWxlbWVudChlbGVtZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWN0YW5nbGVGcm9tUGFyYW07XG4iLCJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVDb2xvcihvcHRpb25zKXtcbiAgb3B0aW9ucy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJ2JsYWNrJztcbiAgaWYgKCFpc1N0cmluZyhvcHRpb25zLmNvbG9yKSkgRXJyb3JzLm11c3RCZVN0cmluZygnQ29sb3InKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUNvbG9yOyIsImNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJyk7XG5jb25zdCBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVDdXJ2YXR1cmUob3B0aW9ucyl7XG4gIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5jdXJ2YXR1cmUpKSB7XG4gICAgaWYgKCFpc051bWJlcihvcHRpb25zLmN1cnZhdHVyZSkpIHtcbiAgICAgIEVycm9ycy5tdXN0QmVOdW1iZXIoJ0N1cnZhdHVyZScpXG4gICAgfVxuICB9XG4gIGlmICghb3B0aW9ucy5waXZvdHMgJiYgaXNVbmRlZmluZWQob3B0aW9ucy5jdXJ2YXR1cmUpKSBvcHRpb25zLmN1cnZhdHVyZSA9IDE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVDdXJ2YXR1cmU7IiwiY29uc3QgaXNTdHJpbmcgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKTtcbmNvbnN0IGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJyk7XG5cbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRmlsbENvbG9yKGVuZHBvaW50T3B0aW9ucykge1xuICBjb25zdCBmaWxsQ29sb3IgPSBlbmRwb2ludE9wdGlvbnMuZmlsbENvbG9yO1xuICBpZiAoIWlzVW5kZWZpbmVkKGZpbGxDb2xvcikpe1xuICAgIGlmICghaXNTdHJpbmcoZmlsbENvbG9yKSkgRXJyb3JzLm11c3RCZVN0cmluZygnRW5kcG9pbnQgZmlsbENvbG9yJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlRmlsbENvbG9yOyIsImNvbnN0IHZhbGlkYXRlVHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpO1xuY29uc3QgdmFsaWRhdGVGaWxsQ29sb3IgPSByZXF1aXJlKCcuL2ZpbGxfY29sb3InKTtcbmNvbnN0IHZhbGlkYXRlUG9zaXRpb24gPSByZXF1aXJlKCcuL3Bvc2l0aW9uJyk7XG5jb25zdCB2YWxpZGF0ZVNpemUgPSByZXF1aXJlKCcuL3NpemUnKTtcbmNvbnN0IHZhbGlkYXRlT25seVN1cHBvcnRlZE9wdGlvbnMgPSByZXF1aXJlKCcuL29ubHlfc3VwcG9ydGVkJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRW5kcG9pbnQob3B0aW9ucyl7XG4gIG9wdGlvbnMuZW5kcG9pbnQgPSBvcHRpb25zLmVuZHBvaW50IHx8IHt9O1xuICB2YWxpZGF0ZVR5cGUob3B0aW9ucy5lbmRwb2ludCk7XG4gIHZhbGlkYXRlRmlsbENvbG9yKG9wdGlvbnMuZW5kcG9pbnQpO1xuICB2YWxpZGF0ZVBvc2l0aW9uKG9wdGlvbnMuZW5kcG9pbnQpO1xuICB2YWxpZGF0ZVNpemUob3B0aW9ucy5lbmRwb2ludCk7XG4gIG9wdGlvbnMuZW5kcG9pbnQuZmlsbENvbG9yID0gb3B0aW9ucy5lbmRwb2ludC5maWxsQ29sb3IgfHwgb3B0aW9ucy5jb2xvcjtcbiAgdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9ucyhvcHRpb25zLmVuZHBvaW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUVuZHBvaW50OyIsImNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmNvbnN0IFNVUFBPUlRFRF9PUFRJT05TID0gW1xuICAndHlwZScsXG4gICdtYXJrZXJJZGVudGlmaWVyJyxcbiAgJ2ZpbGxDb2xvcicsXG4gICdzaXplJyxcbiAgJ3Bvc2l0aW9uJ1xuXTtcblxuXG5mdW5jdGlvbiB2YWxpZGF0ZU9ubHlTdXBwb3J0ZWRPcHRpb25zKG9wdGlvbnMpe1xuICBjb25zdCB1bnJlY29nbml6ZWRPcHRpb24gPSBPYmplY3Qua2V5cyhvcHRpb25zKS5maW5kKG9wdGlvbk5hbWUgPT4ge1xuICAgIHJldHVybiAhU1VQUE9SVEVEX09QVElPTlMuaW5jbHVkZXMob3B0aW9uTmFtZSk7XG4gIH0pO1xuICBpZiAodW5yZWNvZ25pemVkT3B0aW9uKSB7XG4gICAgRXJyb3JzLnVucmVjb2duaXplZEVuZHBvaW50T3B0aW9uKHVucmVjb2duaXplZE9wdGlvbik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZU9ubHlTdXBwb3J0ZWRPcHRpb25zOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuY29uc3QgRW5kcG9pbnRQb3NpdGlvbiA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbnN0L2VuZHBvaW50X3Bvc2l0aW9uJyk7XG5cbmNvbnN0IHZhbGlkYXRlUHJvcGVydHlJbkVudW0gPSByZXF1aXJlKCcuLi9wcm9wZXJ0eV9pbl9lbnVtJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2Vycm9ycycpO1xuXG5jb25zdCBQT1NJVElPTlMgPSBPYmplY3QudmFsdWVzKEVuZHBvaW50UG9zaXRpb24pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVBvc2l0aW9uKGVuZHBvaW50T3B0aW9ucykge1xuICBjb25zdCBwb3NpdGlvbiA9IGVuZHBvaW50T3B0aW9ucy5wb3NpdGlvbjtcbiAgaWYgKCFpc1VuZGVmaW5lZChwb3NpdGlvbikpe1xuICAgIGlmICghaXNTdHJpbmcocG9zaXRpb24pKSBFcnJvcnMubXVzdEJlU3RyaW5nKCdFbmRwb2ludCBwb3NpdGlvbicpO1xuICAgIHZhbGlkYXRlUHJvcGVydHlJbkVudW0oZW5kcG9pbnRPcHRpb25zLCAncG9zaXRpb24nLCBQT1NJVElPTlMsICdlbmRwb2ludCBwb3NpdGlvbicpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVQb3NpdGlvbjsiLCJjb25zdCBpc051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bWJlcicpO1xuY29uc3QgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcblxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTaXplKGVuZHBvaW50T3B0aW9ucykge1xuICBjb25zdCBzaXplID0gZW5kcG9pbnRPcHRpb25zLnNpemU7XG4gIGlmICghaXNVbmRlZmluZWQoc2l6ZSkpe1xuICAgIGlmICghaXNOdW1iZXIoc2l6ZSkgfHwgKHNpemU8PTApKSBFcnJvcnMubXVzdEJlUG9zaXRpdmVOdW1iZXIoJ0VuZHBvaW50IHNpemUnKVxuICB9XG4gIGVuZHBvaW50T3B0aW9ucy5zaXplID0gZW5kcG9pbnRPcHRpb25zLnNpemUgfHwgMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVNpemU7IiwiY29uc3QgaXNTdHJpbmcgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKTtcbmNvbnN0IEVuZHBvaW50VHlwZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbnN0L2VuZHBvaW50X3R5cGUnKTtcbmNvbnN0IHZhbGlkYXRlUHJvcGVydHlJbkVudW0gPSByZXF1aXJlKCcuLi9wcm9wZXJ0eV9pbl9lbnVtJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2Vycm9ycycpO1xuXG5jb25zdCBNQVJLRVJTID0gT2JqZWN0LmtleXMoRW5kcG9pbnRUeXBlKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVDdXN0b21UeXBlKGVuZHBvaW50T3B0aW9ucyl7XG4gIGlmIChlbmRwb2ludE9wdGlvbnMudHlwZSA9PSBFbmRwb2ludFR5cGUuY3VzdG9tKSB7XG4gICAgaWYgKCFlbmRwb2ludE9wdGlvbnMubWFya2VySWRlbnRpZmllcikge1xuICAgICAgRXJyb3JzLm1pc3NpbmdNYXJrZXJJZGVudCgpO1xuICAgIH1cbiAgICBpZiAoIWlzU3RyaW5nKGVuZHBvaW50T3B0aW9ucy5tYXJrZXJJZGVudGlmaWVyKSkge1xuICAgICAgRXJyb3JzLm11c3RCZVN0cmluZygpO1xuICAgIH1cbiAgICBjb25zdCB1bmF2YWlsYWJsZVByb3BlcnR5ID0gWydmaWxsQ29sb3InLCAnc2l6ZSddLmZpbmQocHJvcCA9PiBlbmRwb2ludE9wdGlvbnNbcHJvcF0pO1xuICAgIGlmICh1bmF2YWlsYWJsZVByb3BlcnR5KSB7XG4gICAgICBFcnJvcnMubWFya2VyQ3VzdG9taXphdGlvblVuYXZhaWxhYmxlKHVuYXZhaWxhYmxlUHJvcGVydHkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZW5kcG9pbnRPcHRpb25zLm1hcmtlcklkZW50aWZpZXIpIHtcbiAgICAgIEVycm9ycy5tYXJrZXJJZGVudE9ubHlDdXN0b20oKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUeXBlKGVuZHBvaW50T3B0aW9ucyl7XG4gIGVuZHBvaW50T3B0aW9ucy50eXBlID0gZW5kcG9pbnRPcHRpb25zLnR5cGUgfHwgRW5kcG9pbnRUeXBlLmFycm93SGVhZEZpbGxlZDtcbiAgdmFsaWRhdGVQcm9wZXJ0eUluRW51bShlbmRwb2ludE9wdGlvbnMsICd0eXBlJywgTUFSS0VSUywgJ2VuZHBvaW50IHR5cGUnKTtcbiAgdmFsaWRhdGVDdXN0b21UeXBlKGVuZHBvaW50T3B0aW9ucyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVUeXBlOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuY29uc3QgRGlyZWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vY29uc3QvZGlyZWN0aW9ucycpO1xuY29uc3QgdmFsaWRhdGVQcm9wZXJ0eUluRW51bSA9IHJlcXVpcmUoJy4vcHJvcGVydHlfaW5fZW51bScpO1xuXG5jb25zdCBESVJFQ1RJT05TID0gT2JqZWN0LnZhbHVlcyhEaXJlY3Rpb24pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUZvcmNlRGlyZWN0aW9uKG9wdGlvbnMpe1xuICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuZm9yY2VEaXJlY3Rpb24pKXtcbiAgICBpZiAoIWlzU3RyaW5nKG9wdGlvbnMuZm9yY2VEaXJlY3Rpb24pKXtcbiAgICAgIEVycm9ycy5tdXN0QmVTdHJpbmcoJ2ZvcmNlRGlyZWN0aW9uJylcbiAgICB9XG4gICAgdmFsaWRhdGVQcm9wZXJ0eUluRW51bShvcHRpb25zLCAnZm9yY2VEaXJlY3Rpb24nLCBESVJFQ1RJT05TLCAnZGlyZWN0aW9uIHR5cGUnKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlRm9yY2VEaXJlY3Rpb247IiwiY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuY29uc3QgU1VQUE9SVEVEX09QVElPTlMgPSBbXG4gICdzb3VyY2UnLFxuICAnZGVzdGluYXRpb24nLFxuICAnY29sb3InLFxuICAnY3VydmF0dXJlJyxcbiAgJ3Bpdm90cycsXG4gICdzb3VyY2VQb3NpdGlvbicsXG4gICdkZXN0aW5hdGlvblBvc2l0aW9uJyxcbiAgJ3N0eWxlJyxcbiAgJ3RoaWNrbmVzcycsXG4gICdmb3JjZURpcmVjdGlvbicsXG4gICdlbmRwb2ludCcsXG4gICdzdmdQYXJlbnRTZWxlY3Rvcidcbl07XG5cblxuZnVuY3Rpb24gdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9ucyhvcHRpb25zKXtcbiAgY29uc3QgdW5yZWNvZ25pemVkT3B0aW9uID0gT2JqZWN0LmtleXMob3B0aW9ucykuZmluZChvcHRpb25OYW1lID0+IHtcbiAgICByZXR1cm4gIVNVUFBPUlRFRF9PUFRJT05TLmluY2x1ZGVzKG9wdGlvbk5hbWUpO1xuICB9KTtcbiAgaWYgKHVucmVjb2duaXplZE9wdGlvbikge1xuICAgIEVycm9ycy51bnJlY29nbml6ZWRPcHRpb24odW5yZWNvZ25pemVkT3B0aW9uKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlT25seVN1cHBvcnRlZE9wdGlvbnM7IiwiY29uc3QgdmFsaWRhdGVTb3VyY2VBbmREZXN0aW5hdGlvbiA9IHJlcXVpcmUoJy4vc291cmNlX2FuZF9kZXN0aW5hdGlvbicpO1xuY29uc3QgdmFsaWRhdGVDb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKTtcbmNvbnN0IHZhbGlkYXRlVGhpY2tuZXNzID0gcmVxdWlyZSgnLi90aGlja25lc3MnKTtcbmNvbnN0IHZhbGlkYXRlQ3VydmF0dXJlID0gcmVxdWlyZSgnLi9jdXJ2YXR1cmUnKTtcbmNvbnN0IHZhbGlkYXRlUG9zaXRpb25zID0gcmVxdWlyZSgnLi9wb3NpdGlvbnMnKTtcbmNvbnN0IHZhbGlkYXRlUGl2b3RzID0gcmVxdWlyZSgnLi9waXZvdHMnKTtcbmNvbnN0IHZhbGlkYXRlU3ZnUGFyZW50U2VsZWN0b3IgPSByZXF1aXJlKCcuL3N2Z19wYXJlbnRfc2VsZWN0b3InKTtcbmNvbnN0IHZhbGlkYXRlU3R5bGUgPSByZXF1aXJlKCcuL3N0eWxlJyk7XG5jb25zdCB2YWxpZGF0ZUZvcmNlRGlyZWN0aW9uID0gcmVxdWlyZSgnLi9mb3JjZV9kaXJlY3Rpb24nKTtcbmNvbnN0IHZhbGlkYXRlRW5kcG9pbnQgPSByZXF1aXJlKCcuL2VuZHBvaW50Jyk7XG5jb25zdCB2YWxpZGF0ZU9ubHlTdXBwb3J0ZWRPcHRpb25zID0gcmVxdWlyZSgnLi9vbmx5X3N1cHBvcnRlZCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyl7XG4gIHZhbGlkYXRlU291cmNlQW5kRGVzdGluYXRpb24ob3B0aW9ucyk7XG4gIHZhbGlkYXRlT25seVN1cHBvcnRlZE9wdGlvbnMob3B0aW9ucyk7XG4gIHZhbGlkYXRlQ29sb3Iob3B0aW9ucyk7XG4gIHZhbGlkYXRlVGhpY2tuZXNzKG9wdGlvbnMpO1xuICB2YWxpZGF0ZUN1cnZhdHVyZShvcHRpb25zKTtcbiAgdmFsaWRhdGVTdHlsZShvcHRpb25zKTtcbiAgdmFsaWRhdGVQb3NpdGlvbnMob3B0aW9ucyk7XG4gIHZhbGlkYXRlUGl2b3RzKG9wdGlvbnMpO1xuICB2YWxpZGF0ZUVuZHBvaW50KG9wdGlvbnMpO1xuICB2YWxpZGF0ZVN2Z1BhcmVudFNlbGVjdG9yKG9wdGlvbnMpO1xuICB2YWxpZGF0ZUZvcmNlRGlyZWN0aW9uKG9wdGlvbnMpO1xuICByZXR1cm4gb3B0aW9ucztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZU9wdGlvbnM7IiwiY29uc3QgaXNDb29yZGluYXRlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvaXNfY29vcmRpbmF0ZScpO1xuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQaXZvdHMob3B0aW9ucyl7XG4gIGlmIChvcHRpb25zLnBpdm90cykge1xuICAgIGlmICghKEFycmF5LmlzQXJyYXkob3B0aW9ucy5waXZvdHMpICYmIChvcHRpb25zLnBpdm90cy5sZW5ndGggPT0gMikgJiYgKG9wdGlvbnMucGl2b3RzLmV2ZXJ5KGlzQ29vcmRpbmF0ZSkpKSkge1xuICAgICAgRXJyb3JzLnBpdm90c0Zvcm1hdCgpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jdXJ2YXR1cmUpIHtcbiAgICAgIEVycm9ycy5waXZvdHNBbmRDdXJ2YXR1cmUoKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVBpdm90czsiLCJjb25zdCBpc0Nvb3JkaW5hdGUgPSByZXF1aXJlKCcuLi8uLi9nZW9tZXRyeS9pc19jb29yZGluYXRlJyk7XG5jb25zdCBSZWN0YW5nbGUgPSByZXF1aXJlKCcuLi8uLi9nZW9tZXRyeS9yZWN0YW5nbGUnKTtcbmNvbnN0IHZhbGlkYXRlUHJvcGVydHlJbkVudW0gPSByZXF1aXJlKCcuL3Byb3BlcnR5X2luX2VudW0nKTtcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5cbmNvbnN0IFBPU0lUSU9OUyA9IE9iamVjdC5rZXlzKFJlY3RhbmdsZS5TSURFUyk7XG5mdW5jdGlvbiB2YWxpZGF0ZVBvc2l0aW9ucyhvcHRpb25zKXtcbiAgaWYgKG9wdGlvbnMuc291cmNlUG9zaXRpb24pIHtcbiAgICBpZiAoaXNDb29yZGluYXRlKG9wdGlvbnMuc291cmNlKSkge1xuICAgICAgRXJyb3JzLnBvc2l0aW9uV2l0aENvb3Jkcygnc291cmNlJyk7XG4gICAgfVxuICAgIHZhbGlkYXRlUHJvcGVydHlJbkVudW0ob3B0aW9ucywgJ3NvdXJjZVBvc2l0aW9uJywgUE9TSVRJT05TLCAncG9zaXRpb24nKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmRlc3RpbmF0aW9uUG9zaXRpb24pIHtcbiAgICBpZiAoaXNDb29yZGluYXRlKG9wdGlvbnMuZGVzdGluYXRpb24pKSB7XG4gICAgICBFcnJvcnMucG9zaXRpb25XaXRoQ29vcmRzKCdkZXN0aW5hdGlvbicpO1xuICAgIH1cbiAgICB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtKG9wdGlvbnMsICdkZXN0aW5hdGlvblBvc2l0aW9uJywgUE9TSVRJT05TLCAncG9zaXRpb24nKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlUG9zaXRpb25zOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5jb25zdCBnZXQgPSByZXF1aXJlKCdsb2Rhc2gvZ2V0Jyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnR5SW5FbnVtKG9wdGlvbnMsIHByb3BlcnR5UGF0aCwgZW51bWVyYXRpb24sIGxhYmVsKXtcbiAgY29uc3QgbGFiZWxfYXJyID0gaXNTdHJpbmcobGFiZWwpID8gW2xhYmVsLCBgJHtsYWJlbH1zYF0gOiBsYWJlbDtcbiAgY29uc3QgcHJvcCA9IGdldChvcHRpb25zLCBwcm9wZXJ0eVBhdGgpO1xuICBpZiAoKHByb3ApICYmICghZW51bWVyYXRpb24uaW5jbHVkZXMocHJvcCkpKSB7XG4gICAgRXJyb3JzLnZhbEluRW51bShwcm9wLCBlbnVtZXJhdGlvbiwgbGFiZWxfYXJyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlUHJvcGVydHlJbkVudW07IiwiY29uc3QgaXNTdHJpbmcgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKTtcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZXJyb3JzJyk7XG5jb25zdCBpc0Nvb3JkaW5hdGUgPSByZXF1aXJlKCcuLi8uLi9nZW9tZXRyeS9pc19jb29yZGluYXRlJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU291cmNlQW5kRGVzdGluYXRpb24ob3B0aW9ucyl7XG4gIGlmICghW29wdGlvbnMuc291cmNlLCBvcHRpb25zLmRlc3RpbmF0aW9uXS5ldmVyeShzZWwgPT4gaXNTdHJpbmcoc2VsKSB8fCBpc0Nvb3JkaW5hdGUoc2VsKSkpIHtcbiAgICBFcnJvcnMuc291cmNlQW5kRGVzdGluYXRpb25Gb3JtYXQoKTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVNvdXJjZUFuZERlc3RpbmF0aW9uOyIsImNvbnN0IExpbmVTdHlsZSA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0L2xpbmVfc3R5bGUnKTtcbmNvbnN0IHZhbGlkYXRlUHJvcGVydHlJbkVudW0gPSByZXF1aXJlKCcuL3Byb3BlcnR5X2luX2VudW0nKTtcblxuY29uc3QgU1RZTEVTID0gT2JqZWN0LmtleXMoTGluZVN0eWxlKTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTdHlsZShvcHRpb25zKXtcbiAgdmFsaWRhdGVQcm9wZXJ0eUluRW51bShvcHRpb25zLCAnc3R5bGUnLCBTVFlMRVMsICdzdHlsZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlU3R5bGU7IiwiY29uc3QgaXNTdHJpbmcgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKTtcbmNvbnN0IGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVN2Z1BhcmVudFNlbGVjdG9yKG9wdGlvbnMpe1xuICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuc3ZnUGFyZW50U2VsZWN0b3IpKSB7XG4gICAgaWYgKCFpc1N0cmluZyhvcHRpb25zLnN2Z1BhcmVudFNlbGVjdG9yKSkge1xuICAgICAgRXJyb3JzLm11c3RCZVN0cmluZygnc3ZnUGFyZW50U2VsZWN0b3InKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVN2Z1BhcmVudFNlbGVjdG9yOyIsImNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVRoaWNrbmVzcyhvcHRpb25zKXtcbiAgb3B0aW9ucy50aGlja25lc3MgPSBvcHRpb25zLnRoaWNrbmVzcyB8fCAxO1xuICBpZiAoIWlzTnVtYmVyKG9wdGlvbnMudGhpY2tuZXNzKSkge1xuICAgIEVycm9ycy5tdXN0QmVOdW1iZXIoJ1RoaWNrbmVzcycpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVRoaWNrbmVzcztcbiIsImNvbnN0IHBhcnNlQXJndW1lbnRzID0gcmVxdWlyZSgnLi9hcmd1bWVudHMvcGFyc2VfYXJndW1lbnRzJyk7XG5jb25zdCBsaW5lQXR0cmlidXRlcyA9IHJlcXVpcmUoJy4vbGluZV9hdHRyaWJ1dGVzJyk7XG5jb25zdCBwYXRoRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vcGF0aF9kZWZpbml0aW9uJyk7XG5jb25zdCBnZXRFbmRwb2ludHMgPSByZXF1aXJlKCcuL2dldF9lbmRwb2ludHMnKTtcbmNvbnN0IG1hcmtlck9wdGlvbnMgPSByZXF1aXJlKCcuL21hcmtlcl9vcHRpb25zJyk7XG5jb25zdCBnZXRDYW52YXMgPSByZXF1aXJlKCcuL2dldF9jYW52YXMnKTtcbmNvbnN0IG5vcm1hbGl6ZUFuZFZhbGlkYXRlID0gcmVxdWlyZSgnLi9hcmd1bWVudHMvbm9ybWFsaXplX2FuZF92YWxpZGF0ZScpO1xuXG5jb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpO1xuXG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuL3V0aWwvZXJyb3JzJyk7XG5cbmZ1bmN0aW9uIGdldFBhdGhBdHRyaWJ1dGVOYW1lcyhzdmdQYXRoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdmdQYXRoLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3ZnUGF0aC5hdHRyaWJ1dGVzLml0ZW0oaSkubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldFBhdGhBdHRyaWJ1dGVzKHN2Zywgb3B0aW9ucykge1xuICAgIGNvbnN0IHtiZWdpblBvaW50LCBlbmRQb2ludCwgZGlyZWN0aW9ufSA9IGdldEVuZHBvaW50cyhvcHRpb25zKTtcbiAgICBjb25zdCBwYXRoRGVmaW5pdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIGRpcmVjdGlvbjogb3B0aW9ucy5mb3JjZURpcmVjdGlvbiB8fCBkaXJlY3Rpb24sXG4gICAgICAgIGN1cnZhdHVyZTogb3B0aW9ucy5jdXJ2YXR1cmUsXG4gICAgICAgIHBpdm90czogb3B0aW9ucy5waXZvdHNcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGQ6IHBhdGhEZWZpbml0aW9uKG9wdGlvbnMuc291cmNlUmVjdGFuZ2xlW2JlZ2luUG9pbnRdLCBvcHRpb25zLmRlc3RpbmF0aW9uUmVjdGFuZ2xlW2VuZFBvaW50XSwgcGF0aERlZmluaXRpb25PcHRpb25zKSxcbiAgICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgICBzdHJva2U6IG9wdGlvbnMuY29sb3IsXG4gICAgICAgIC4uLmxpbmVBdHRyaWJ1dGVzKG9wdGlvbnMpLFxuICAgICAgICAuLi5tYXJrZXJPcHRpb25zKHN2Zywgb3B0aW9ucylcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gc2V0UGF0aEF0dHJpYnV0ZXMoc3ZnUGF0aCwgcGF0aEF0dHJpYnV0ZXMpIHtcbiAgICBnZXRQYXRoQXR0cmlidXRlTmFtZXMoc3ZnUGF0aCkuZm9yRWFjaChhdHRyTmFtZSA9PiBzdmdQYXRoLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKGF0dHJOYW1lKSk7XG4gICAgZm9yIChsZXQgYXR0cmlidXRlTmFtZSBpbiBwYXRoQXR0cmlidXRlcykge1xuICAgICAgICBzdmdQYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsIGF0dHJpYnV0ZU5hbWUsIHBhdGhBdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFycm93TGluZSguLi5hcmdzKSB7XG4gICAgY29uc3QgcGFyc2VkQXJndW1lbnRzID0gcGFyc2VBcmd1bWVudHMoYXJncyk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHBhcnNlZEFyZ3VtZW50cy5vcHRpb25zO1xuICAgIGxldCByYXdPcHRpb25zID0gcGFyc2VkQXJndW1lbnRzLnJhd09wdGlvbnM7XG4gICAgY29uc3Qgc3ZnID0gZ2V0Q2FudmFzKG9wdGlvbnMuc3ZnUGFyZW50U2VsZWN0b3IpO1xuICAgIGNvbnN0IHN2Z1BhdGggPSBzdmcuY3JlYXRlUGF0aCgpO1xuICAgIHNldFBhdGhBdHRyaWJ1dGVzKHN2Z1BhdGgsIGdldFBhdGhBdHRyaWJ1dGVzKHN2Zywgb3B0aW9ucykpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBhcmVudFN2Z0lkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN2Zy5wYXJlbnRDYW52YXMuaWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJhd1N2Z1BhdGgoKXtcbiAgICAgICAgICByZXR1cm4gc3ZnUGF0aDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiAoKSA9PiB7XG4gICAgICAgICAgICBzdmdQYXRoLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgRXJyb3JzLmV4YWN0bHlPbmVBcmd1bWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdXBkYXRlT3B0aW9ucyA9IGFyZ3NbMF07XG4gICAgICAgICAgICBpZiAoIWlzT2JqZWN0KHVwZGF0ZU9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgRXJyb3JzLmFyZ3VtZW50TXVzdEJlT2JqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXBkYXRlT3B0aW9ucy5zdmdQYXJlbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIEVycm9ycy5zdmdQYXJlbnROb3RBbGxvd2VkSW5VcGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1Jhd09wdGlvbnMgPSB7Li4ucmF3T3B0aW9ucywgLi4udXBkYXRlT3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb25zID0gbm9ybWFsaXplQW5kVmFsaWRhdGUobmV3UmF3T3B0aW9ucyk7XG4gICAgICAgICAgICBzZXRQYXRoQXR0cmlidXRlcyhzdmdQYXRoLCBnZXRQYXRoQXR0cmlidXRlcyhzdmcsIG5ld09wdGlvbnMpKTtcbiAgICAgICAgICAgIHJhd09wdGlvbnMgPSBuZXdSYXdPcHRpb25zO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycm93TGluZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGBfX2Fycm93TGluZUludGVybmFsYDsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgSE9SSVpPTlRBTDogJ2hvcml6b250YWwnLFxuICBWRVJUSUNBTDogJ3ZlcnRpY2FsJ1xufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBTVEFSVDogJ3N0YXJ0JyxcbiAgRU5EOiAnZW5kJyxcbiAgQk9USDogJ2JvdGgnXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBhcnJvd0hlYWRGaWxsZWQ6ICdhcnJvd0hlYWRGaWxsZWQnLFxuICBhcnJvd0hlYWQ6ICdhcnJvd0hlYWQnLFxuICBzcXVhcmVzOiAnc3F1YXJlcycsXG4gIGNpcmNsZXM6ICdjaXJjbGVzJyxcbiAgY3VzdG9tOiAnY3VzdG9tJyxcbiAgbm9uZTogJ25vbmUnXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBkb3Q6ICcxIDEnLFxuICBkYXNoOiAnNCAxJyxcbiAgc29saWQ6ICcnLFxuICAnZG90LWRhc2gnOiAnMSAxIDQgMSdcbn07IiwiY29uc3QgaXNOdW1iZXIgPSByZXF1aXJlKCdsb2Rhc2gvaXNOdW1iZXInKTtcbmNvbnN0IGlzT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzT2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGlzQ29vcmRpbmF0ZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBpZiAoIWtleXMuaW5jbHVkZXMoJ3gnKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoIWtleXMuaW5jbHVkZXMoJ3knKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNOdW1iZXIob2JqLngpICYmIGlzTnVtYmVyKG9iai55KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Nvb3JkaW5hdGU7IiwiY29uc3QgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcbmNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCx5KXtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICB0cmFuc2xhdGUoZmlyc3QsIHNlY29uZCl7XG4gICAgbGV0IHgseTtcbiAgICBpZiAoZmlyc3QgJiYgaXNVbmRlZmluZWQoc2Vjb25kKSkge1xuICAgICAgW3gseV0gPSBbZmlyc3QueCwgZmlyc3QueV07XG4gICAgfSBlbHNlIHtcbiAgICAgIFt4LHldID0gW2ZpcnN0LCBzZWNvbmRdO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgUG9pbnQodGhpcy54Kyh4IHx8IDApLCB0aGlzLnkgKyAoeSB8fCAwKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGxlZnRPZihvdGhlcikge1xuICAgIHJldHVybiB0aGlzLnggPCBvdGhlci54XG4gIH1cblxuICBhYm92ZU9mKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMueSA8IG90aGVyLnlcbiAgfVxuXG4gIGhvcml6b250YWxseUFsaWduZWRUbyhvdGhlcil7XG4gICAgY29uc3QgaERpc3QgPSBNYXRoLmFicyhvdGhlci54IC0gdGhpcy54KTtcbiAgICBjb25zdCB2RGlzdCA9IE1hdGguYWJzKG90aGVyLnkgLSB0aGlzLnkpO1xuICAgIHJldHVybiBoRGlzdCA+IHZEaXN0O1xuICB9XG5cbiAgc3RyKCkge1xuICAgIHJldHVybiBgJHt0aGlzLnh9ICR7dGhpcy55fWBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50OyIsImNvbnN0IFBvaW50ID0gcmVxdWlyZSgnLi9wb2ludCcpO1xuXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LHksIHdpZHRoLCBoZWlnaHQpe1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgdG9wTGVmdCgpeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTsgfVxuICBnZXQgdG9wUmlnaHQoKXsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnkpOyB9XG4gIGdldCB0b3BDZW50ZXIoKXsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyB0aGlzLndpZHRoLzIsIHRoaXMueSkgfVxuICBnZXQgbWlkZGxlTGVmdCgpeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KyB0aGlzLmhlaWdodC8yKSB9XG4gIGdldCBtaWRkbGVSaWdodCgpeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCsgdGhpcy53aWR0aCwgdGhpcy55KyB0aGlzLmhlaWdodC8yKSB9XG4gIGdldCBib3R0b21MZWZ0KCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KyB0aGlzLmhlaWdodCkgfVxuICBnZXQgYm90dG9tQ2VudGVyKCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHRoaXMud2lkdGgvMiwgdGhpcy55KyB0aGlzLmhlaWdodCkgfVxuICBnZXQgYm90dG9tUmlnaHQoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54K3RoaXMud2lkdGgsIHRoaXMueSsgdGhpcy5oZWlnaHQpIH1cblxuICBsZWZ0T2Yob3RoZXIpe1xuICAgIHJldHVybiB0aGlzLm1pZGRsZUxlZnQubGVmdE9mKG90aGVyLm1pZGRsZUxlZnQpO1xuICB9XG5cbiAgZ2V0IGNlbnRlcigpeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHRoaXMud2lkdGgvMiwgdGhpcy55ICsgdGhpcy5oZWlnaHQvMikgfVxuXG5cbiAgYWJvdmVPZihvdGhlcil7XG4gICAgcmV0dXJuIHRoaXMudG9wQ2VudGVyLmFib3ZlT2Yob3RoZXIudG9wQ2VudGVyKTtcbiAgfVxufVxuXG5SZWN0YW5nbGUuU0lERVMgPSB7XG4gIHRvcExlZnQ6ICd0b3BMZWZ0JyxcbiAgdG9wUmlnaHQ6ICd0b3BSaWdodCcsXG4gIHRvcENlbnRlcjogJ3RvcENlbnRlcicsXG4gIG1pZGRsZVJpZ2h0OiAnbWlkZGxlUmlnaHQnLFxuICBtaWRkbGVMZWZ0OiAnbWlkZGxlTGVmdCcsXG4gIGJvdHRvbUxlZnQ6ICdib3R0b21MZWZ0JyxcbiAgYm90dG9tQ2VudGVyOiAnYm90dG9tQ2VudGVyJyxcbiAgYm90dG9tUmlnaHQ6ICdib3R0b21SaWdodCdcbn07XG5cbmZ1bmN0aW9uIGZpbmRBYnNvbHV0ZVBvc2l0aW9uKGh0bWxFbGVtZW50KSB7XG4gIGZvciAodmFyIHggPSAwLCB5ID0gMCwgZWwgPSBodG1sRWxlbWVudDsgZWwgIT0gbnVsbDsgZWwgPSBlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICB4ICs9IGVsLm9mZnNldExlZnQ7XG4gICAgeSArPSBlbC5vZmZzZXRUb3A7XG4gIH1cblxuICByZXR1cm4gbmV3IFBvaW50KHgseSk7XG59XG5cblxuUmVjdGFuZ2xlLmZyb21ET01FbGVtZW50ID0gZnVuY3Rpb24oRE9NRWxlbWVudCl7XG4gIGNvbnN0IHBvc2l0aW9uID0gZmluZEFic29sdXRlUG9zaXRpb24oRE9NRWxlbWVudCk7XG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKFxuICAgIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIERPTUVsZW1lbnQub2Zmc2V0V2lkdGgsIERPTUVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3RhbmdsZTsiLCJjb25zdCBTdmdDYW52YXMgPSByZXF1aXJlKCcuL3N2Zy9zdmdfY2FudmFzJyk7XG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuL3V0aWwvZXJyb3JzJyk7XG5cbmNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBnZXRTdmdDYW52YXMoc2VsZWN0b3Ipe1xuICBsZXQgZG9tRWxlbWVudDtcbiAgaWYgKCFzZWxlY3Rvcil7XG4gICAgZG9tRWxlbWVudCA9IFN2Z0NhbnZhcy5kZWZhdWx0U3ZnRWxlbWVudCgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghY2FjaGUuaGFzKHNlbGVjdG9yKSkge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgRXJyb3JzLmNvdWxkTm90RmluZFNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIGNhY2hlLnNldChzZWxlY3RvciwgZWwpO1xuICAgIH1cbiAgICBkb21FbGVtZW50ID0gIGNhY2hlLmdldChzZWxlY3RvcilcbiAgfVxuICByZXR1cm4gbmV3IFN2Z0NhbnZhcyhkb21FbGVtZW50KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTdmdDYW52YXM7IiwiY29uc3QgUmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9nZW9tZXRyeS9yZWN0YW5nbGUnKTtcbmNvbnN0IHtIT1JJWk9OVEFMLCBWRVJUSUNBTH0gPSByZXF1aXJlKCcuL2NvbnN0L2RpcmVjdGlvbnMnKTtcbmNvbnN0IHsgcmV2ZXJzZUlmIH0gPSByZXF1aXJlKCcuL3V0aWwvaGVscGVyJyk7XG5cbmNvbnN0IGRpcmVjdGlvbkVuZHBvaW50cyA9IHtcbiAgW0hPUklaT05UQUxdOiAoc291cmNlUmVjdGFuZ2xlLCBkZXN0aW5hdGlvblJlY3RhbmdsZSkgPT4gcmV2ZXJzZUlmKFxuICAgIFtSZWN0YW5nbGUuU0lERVMubWlkZGxlTGVmdCwgUmVjdGFuZ2xlLlNJREVTLm1pZGRsZVJpZ2h0XSxcbiAgICBzb3VyY2VSZWN0YW5nbGUubGVmdE9mKGRlc3RpbmF0aW9uUmVjdGFuZ2xlKVxuICApLFxuICBbVkVSVElDQUxdOiAoc291cmNlUmVjdGFuZ2xlLCBkZXN0aW5hdGlvblJlY3RhbmdsZSkgPT4gcmV2ZXJzZUlmKFxuICAgIFtSZWN0YW5nbGUuU0lERVMudG9wQ2VudGVyLCBSZWN0YW5nbGUuU0lERVMuYm90dG9tQ2VudGVyXSxcbiAgICBzb3VyY2VSZWN0YW5nbGUuYWJvdmVPZihkZXN0aW5hdGlvblJlY3RhbmdsZSkpXG59O1xuXG5mdW5jdGlvbiBnZXRFbmRwb2ludHMoe3NvdXJjZVJlY3RhbmdsZSwgZGVzdGluYXRpb25SZWN0YW5nbGUsIHNvdXJjZVBvc2l0aW9uLCBkZXN0aW5hdGlvblBvc2l0aW9ufSl7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IHNvdXJjZVJlY3RhbmdsZS5jZW50ZXIuaG9yaXpvbnRhbGx5QWxpZ25lZFRvKGRlc3RpbmF0aW9uUmVjdGFuZ2xlLmNlbnRlcikgPyBIT1JJWk9OVEFMIDogVkVSVElDQUw7XG4gIGxldCBbYmVnaW5Qb2ludCwgZW5kUG9pbnRdID0gZGlyZWN0aW9uRW5kcG9pbnRzW2RpcmVjdGlvbl0oc291cmNlUmVjdGFuZ2xlLCBkZXN0aW5hdGlvblJlY3RhbmdsZSk7XG5cbiAgaWYgKHNvdXJjZVBvc2l0aW9uKSB7XG4gICAgYmVnaW5Qb2ludCA9IHNvdXJjZVBvc2l0aW9uO1xuICB9XG5cbiAgaWYgKGRlc3RpbmF0aW9uUG9zaXRpb24pIHtcbiAgICBlbmRQb2ludCA9IGRlc3RpbmF0aW9uUG9zaXRpb247XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBiZWdpblBvaW50LFxuICAgIGVuZFBvaW50LFxuICAgIGRpcmVjdGlvblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RW5kcG9pbnRzOyIsImNvbnN0IExpbmVTdHlsZSA9IHJlcXVpcmUoJy4vY29uc3QvbGluZV9zdHlsZScpO1xuXG5mdW5jdGlvbiBsaW5lQXR0cmlidXRlcyhvcHRpb25zKXtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGlmIChvcHRpb25zLnN0eWxlKSB7XG4gICAgcmVzdWx0WydzdHJva2UtZGFzaGFycmF5J10gPSBMaW5lU3R5bGVbb3B0aW9ucy5zdHlsZV07XG4gIH1cbiAgaWYgKG9wdGlvbnMudGhpY2tuZXNzKSB7XG4gICAgcmVzdWx0WydzdHJva2Utd2lkdGgnXSA9IG9wdGlvbnMudGhpY2tuZXNzO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGluZUF0dHJpYnV0ZXM7XG4iLCJjb25zdCBnZXQgPSByZXF1aXJlKCdsb2Rhc2gvZ2V0Jyk7XG5jb25zdCBFbmRwb2ludFR5cGUgPSByZXF1aXJlKCcuL2NvbnN0L2VuZHBvaW50X3R5cGUnKTtcbmNvbnN0IEVuZHBvaW50UG9zaXRpb24gPSByZXF1aXJlKCcuL2NvbnN0L2VuZHBvaW50X3Bvc2l0aW9uJyk7XG5jb25zdCB7Z2V0Q291bnRlciB9ID0gcmVxdWlyZSgnLi91dGlsL2hlbHBlcicpO1xuY29uc3QgUFJFRklYID0gcmVxdWlyZSgnLi9jb25zdC9hcnJvd19saW5lX3ByZWZpeCcpO1xuXG5jb25zdCBNQVJLRVJfSURfUFJFRklYID0gYCR7UFJFRklYfS1NQVJLRVItYDtcbmNvbnN0IG5leHRNYXJrZXJJZCA9IGdldENvdW50ZXIoKTtcbmNvbnN0IG1hcmtlckNhY2hlID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBnZXRNYXJrZXJPcHRpb25zQW5kS2V5KG9wdGlvbnMpe1xuICBjb25zdCBtYXJrZXJUeXBlID0gZ2V0KG9wdGlvbnMsICdlbmRwb2ludC50eXBlJyk7XG4gIGNvbnN0IGZpbGxDb2xvciA9IGdldChvcHRpb25zLCAnZW5kcG9pbnQuZmlsbENvbG9yJyk7XG4gIGNvbnN0IHNpemUgPSBnZXQob3B0aW9ucywgJ2VuZHBvaW50LnNpemUnKTtcbiAgY29uc3Qgb3B0cyA9IHsgdHlwZTogbWFya2VyVHlwZSwgY29sb3I6IG9wdGlvbnMuY29sb3IsIGZpbGxDb2xvciwgc2l6ZSB9O1xuICByZXR1cm4geyBrZXk6IGAke29wdGlvbnMuY29sb3J9LSR7bWFya2VyVHlwZX0tJHtmaWxsQ29sb3J9LSR7c2l6ZX1gLCBvcHRpb25zOiBvcHRzIH1cbn1cblxuZnVuY3Rpb24gZ2V0TWFya2VyKHN2ZywgYmFzZU9wdHMpIHtcbiAgY29uc3QgeyBrZXksIG9wdGlvbnMgfSA9IGdldE1hcmtlck9wdGlvbnNBbmRLZXkoYmFzZU9wdHMpO1xuICBpZiAoIW1hcmtlckNhY2hlLmhhcyhrZXkpKSB7XG4gICAgY29uc3QgbWFya2VySWQgPSBgJHtNQVJLRVJfSURfUFJFRklYfSR7bmV4dE1hcmtlcklkKCl9YDtcbiAgICBzdmcuY3JlYXRlTWFya2VyKG1hcmtlcklkLCBvcHRpb25zKTtcbiAgICBtYXJrZXJDYWNoZS5zZXQoa2V5LCBtYXJrZXJJZCk7XG4gICAgcmV0dXJuIG1hcmtlcklkO1xuICB9XG4gIHJldHVybiBtYXJrZXJDYWNoZS5nZXQoa2V5KTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdE1hcmtlck9wdGlvbnModHlwZSwgdXJsKXtcbiAgY29uc3Qgb3B0cyA9IHtcIm1hcmtlci1lbmRcIjogdXJsfTtcbiAgaWYgKCh0eXBlID09IEVuZHBvaW50VHlwZS5zcXVhcmVzKSB8fCAodHlwZSA9PSBFbmRwb2ludFR5cGUuY2lyY2xlcykpIHtcbiAgICBvcHRzWydtYXJrZXItc3RhcnQnXSA9IHVybDtcbiAgfVxuICByZXR1cm4gb3B0cztcbn1cblxuZnVuY3Rpb24gdXNlckRlZmluZWRNYXJrZXJPcHRpb25zKHBvc2l0aW9uLCB1cmwpe1xuICBjb25zdCBvcHRzID0ge307XG4gIGlmIChbRW5kcG9pbnRQb3NpdGlvbi5TVEFSVCwgRW5kcG9pbnRQb3NpdGlvbi5CT1RIXS5pbmNsdWRlcyhwb3NpdGlvbikpe1xuICAgIG9wdHNbJ21hcmtlci1zdGFydCddID0gdXJsO1xuICB9XG4gIGlmIChbRW5kcG9pbnRQb3NpdGlvbi5FTkQsIEVuZHBvaW50UG9zaXRpb24uQk9USF0uaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgb3B0c1snbWFya2VyLWVuZCddID0gdXJsO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtlck9wdGlvbnMoc3ZnLCBvcHRpb25zKXtcbiAgY29uc3QgZW5kcG9pbnRUeXBlID0gZ2V0KG9wdGlvbnMsICdlbmRwb2ludC50eXBlJyk7XG4gIGlmIChlbmRwb2ludFR5cGUgPT0gRW5kcG9pbnRUeXBlLm5vbmUpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICBsZXQgbWFya2VySWQgPSBnZXQob3B0aW9ucywgJ2VuZHBvaW50Lm1hcmtlcklkZW50aWZpZXInKTtcbiAgaWYgKCFtYXJrZXJJZCkge1xuICAgIG1hcmtlcklkID0gZ2V0TWFya2VyKHN2Zywgb3B0aW9ucyk7XG4gIH1cbiAgY29uc3QgdXJsID0gYHVybCgjJHttYXJrZXJJZH0pYDtcbiAgY29uc3QgcG9zaXRpb24gPSBnZXQob3B0aW9ucywgJ2VuZHBvaW50LnBvc2l0aW9uJyk7XG4gIHJldHVybiBwb3NpdGlvbiA/IHVzZXJEZWZpbmVkTWFya2VyT3B0aW9ucyhwb3NpdGlvbiwgdXJsKSA6IGRlZmF1bHRNYXJrZXJPcHRpb25zKGVuZHBvaW50VHlwZSwgdXJsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXJrZXJPcHRpb25zOyIsImNvbnN0IHsgSE9SSVpPTlRBTCB9ID0gcmVxdWlyZSgnLi9jb25zdC9kaXJlY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIGdldFBpdm90cyhwb2ludDEsIHBvaW50MiwgY3VydmF0dXJlLCBkaXJlY3Rpb24pIHtcbiAgY29uc3QgZGltZW5zaW9uID0gKGRpcmVjdGlvbiA9PSBIT1JJWk9OVEFMKSA/ICd4JyA6ICd5JztcbiAgY29uc3QgYW1vdW50ID0gKHBvaW50MltkaW1lbnNpb25dIC0gcG9pbnQxW2RpbWVuc2lvbl0pICogY3VydmF0dXJlO1xuXG4gIHJldHVybiBbXG4gICAgcG9pbnQxLnRyYW5zbGF0ZSh7W2RpbWVuc2lvbl06IGFtb3VudH0pLFxuICAgIHBvaW50Mi50cmFuc2xhdGUoe1tkaW1lbnNpb25dOiAtYW1vdW50fSlcbiAgXTtcbn1cblxuZnVuY3Rpb24gcGF0aERlZmluaXRpb24ocG9pbnQxLCBwb2ludDIsIG9wdGlvbnMpe1xuICBjb25zdCBwYXRoRWxlbWVudHMgPSBbJ00nLCBwb2ludDEuc3RyKCldO1xuICBpZiAob3B0aW9ucy5jdXJ2YXR1cmUgIT0wKSB7XG4gICAgY29uc3QgcGl2b3RzID0gb3B0aW9ucy5jdXJ2YXR1cmUgP1xuICAgICAgICBnZXRQaXZvdHMocG9pbnQxLCBwb2ludDIsIG9wdGlvbnMuY3VydmF0dXJlLCBvcHRpb25zLmRpcmVjdGlvbikgOlxuICAgICAgICBbcG9pbnQxLnRyYW5zbGF0ZShvcHRpb25zLnBpdm90c1swXSksIHBvaW50Mi50cmFuc2xhdGUob3B0aW9ucy5waXZvdHNbMV0pXTtcbiAgICBwYXRoRWxlbWVudHMucHVzaCgnQycpO1xuICAgIHBhdGhFbGVtZW50cy5wdXNoKC4uLnBpdm90cy5tYXAocCA9PiBwLnN0cigpKSk7XG4gIH1cbiAgcGF0aEVsZW1lbnRzLnB1c2gocG9pbnQyLnN0cigpKTtcbiAgcmV0dXJuIHBhdGhFbGVtZW50cy5qb2luKCcgJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aERlZmluaXRpb247IiwiY29uc3Qge2RyYXdNYXJrZXIsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN2Z0VsZW1lbnQgfSA9IHJlcXVpcmUoJy4vc3ZnX3V0aWxzJyk7XG5jb25zdCBQUkVGSVggPSByZXF1aXJlKCcuLy4uL2NvbnN0L2Fycm93X2xpbmVfcHJlZml4Jyk7XG5cbmNsYXNzIFN2Z0NhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudENhbnZhcyl7XG4gICAgdGhpcy5wYXJlbnRDYW52YXMgPSBwYXJlbnRDYW52YXM7XG4gIH1cblxuICBjcmVhdGVNYXJrZXIoaWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7dHlwZSwgY29sb3IsIGZpbGxDb2xvciwgc2l6ZX0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHNpemVWYWx1ZSA9IFN0cmluZyhzaXplKjEwKTtcbiAgICBjb25zdCBtYXJrZXIgPSBjcmVhdGVFbGVtZW50KCdtYXJrZXInLCB7XG4gICAgICBpZDogaWQsXG4gICAgICBtYXJrZXJVbml0czogJ3N0cm9rZVdpZHRoJyxcbiAgICAgIHZpZXdCb3g6ICctMSAtMSAxMiAxMicsXG4gICAgICBzdHJva2U6IGNvbG9yLFxuICAgICAgZmlsbDogZmlsbENvbG9yLFxuICAgICAgb3JpZW50OiAnYXV0bycsXG4gICAgICBtYXJrZXJXaWR0aDogc2l6ZVZhbHVlLFxuICAgICAgbWFya2VySGVpZ2h0OiBzaXplVmFsdWVcbiAgICB9KTtcbiAgICBkcmF3TWFya2VyW3R5cGVdKG1hcmtlcik7XG4gICAgdGhpcy5kZWZpbml0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChtYXJrZXIpO1xuICB9XG5cbiAgY3JlYXRlUGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gY3JlYXRlU3ZnRWxlbWVudCgncGF0aCcpO1xuICAgIHRoaXMucGFyZW50Q2FudmFzLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgZ2V0IGRlZmluaXRpb25FbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fZGVmcykge1xuICAgICAgY29uc3QgZXhpc3RpbmdEZWZzID0gdGhpcy5wYXJlbnRDYW52YXMucXVlcnlTZWxlY3RvcignZGVmcycpO1xuICAgICAgaWYgKGV4aXN0aW5nRGVmcykge1xuICAgICAgICB0aGlzLl9kZWZzID0gZXhpc3RpbmdEZWZzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0VsZW1lbnQgPSBjcmVhdGVTdmdFbGVtZW50KCdkZWZzJyk7XG4gICAgICAgIHRoaXMucGFyZW50Q2FudmFzLmFwcGVuZENoaWxkKGRlZmluaXRpb25zRWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2RlZnMgPSBkZWZpbml0aW9uc0VsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kZWZzO1xuICB9XG59XG5cblN2Z0NhbnZhcy5kZWZhdWx0U3ZnRWxlbWVudCA9IGZ1bmN0aW9uKCl7XG4gIGlmICghdGhpcy5fZGVmYXVsdEVsKSB7XG4gICAgY29uc3QgaWQgPSBgJHtQUkVGSVh9LXN2Zy1jYW52YXNgO1xuICAgIHRoaXMuX2RlZmF1bHRFbCA9IGNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHN0eWxlOiAncG9zaXRpb246YWJzb2x1dGU7dG9wOjBweDtsZWZ0OjBweDtwb2ludGVyLWV2ZW50czogbm9uZTsnLFxuICAgICAgd2lkdGg6IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9kZWZhdWx0RWwpO1xuICB9XG4gIHJldHVybiB0aGlzLl9kZWZhdWx0RWw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN2Z0NhbnZhczsiLCJjb25zdCBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoL2lzRnVuY3Rpb24nKTtcbmNvbnN0IEVuZHBvaW50VHlwZSA9IHJlcXVpcmUoJy4vLi4vY29uc3QvZW5kcG9pbnRfdHlwZScpO1xuXG5mdW5jdGlvbiBjcmVhdGVTdmdFbGVtZW50KHRhZyl7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB0YWcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcbiAgY29uc3QgZWwgPSBjcmVhdGVTdmdFbGVtZW50KHR5cGUpO1xuICBmb3IgKGxldCBhdHRyIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1thdHRyXSk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufVxuXG5mdW5jdGlvbiBtYXJrZXJGYWN0b3J5KHJlZlgsIHJlZlksIHNoYXBlR2VuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgbWFya2VyLnNldEF0dHJpYnV0ZSgncmVmWCcsIHJlZlgpO1xuICAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoJ3JlZlknLCByZWZZKTtcbiAgICBjb25zdCBzaGFwZSA9IGlzRnVuY3Rpb24oc2hhcGVHZW4pID8gc2hhcGVHZW4obWFya2VyKSA6IHNoYXBlR2VuO1xuICAgIG1hcmtlci5hcHBlbmRDaGlsZChzaGFwZSk7XG4gIH1cbn1cblxuY29uc3QgZHJhd01hcmtlciA9IHtcbiAgW0VuZHBvaW50VHlwZS5hcnJvd0hlYWRGaWxsZWRdOiBtYXJrZXJGYWN0b3J5KDEwLCA1LCBjcmVhdGVFbGVtZW50KCdwb2x5Z29uJywge3BvaW50czogJzAsMCAxMCw1IDAsMTAnfSkpLFxuICBbRW5kcG9pbnRUeXBlLmNpcmNsZXNdOiBtYXJrZXJGYWN0b3J5KDUsIDUsIGNyZWF0ZUVsZW1lbnQoJ2NpcmNsZScsIHtyOiA0LCBjeDogNSwgY3k6IDV9KSksXG4gIFtFbmRwb2ludFR5cGUuc3F1YXJlc106IG1hcmtlckZhY3RvcnkoNSwgNSwgY3JlYXRlRWxlbWVudCgncmVjdCcsIHt3aWR0aDogMTAsIGhlaWdodDogMTB9KSksXG4gIFtFbmRwb2ludFR5cGUuYXJyb3dIZWFkXTogbWFya2VyRmFjdG9yeSgxMCwgNSwgZnVuY3Rpb24gKG1hcmtlcikge1xuICAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoJ2ZpbGwtb3BhY2l0eScsICcwJyk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3BvbHlsaW5lJywge3BvaW50czogJzAsMCAxMCw1IDAsMTAnfSlcbiAgfSlcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkcmF3TWFya2VyLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50XG59IiwiY2xhc3MgQXJndW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gYEFyZ3VtZW50RXJyb3I6ICR7dGhpcy5tZXNzYWdlfWA7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gQXJndW1lbnRFcnJvcjtcblxuIiwiY29uc3QgQXJndW1lbnRFcnJvciA9IHJlcXVpcmUoJy4vYXJndW1lbnRfZXJyb3InKTtcbmNvbnN0IGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpO1xuXG5jb25zdCB0aHJvd0FyZ3VtZW50RXJyb3IgPSBmdW5jdGlvbihhcmcpe1xuICBpZiAoaXNGdW5jdGlvbihhcmcpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYXJnLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB0aHJvdyBuZXcgQXJndW1lbnRFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgICB0aHJvdyBuZXcgQXJndW1lbnRFcnJvcihhcmcpO1xuICAgIH1cbiAgfVxuXG59O1xuY29uc3QgRXJyb3JzID0ge1xuICBleGFjdGx5T25lQXJndW1lbnQ6IHRocm93QXJndW1lbnRFcnJvcihgRXhhY3RseSBvbmUgYXJndW1lbnQgZXhwZWN0ZWRgKSxcbiAgYXJndW1lbnRNdXN0QmVPYmplY3Q6IHRocm93QXJndW1lbnRFcnJvcihgQXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3RgKSxcbiAgc3ZnUGFyZW50Tm90QWxsb3dlZEluVXBkYXRlOiB0aHJvd0FyZ3VtZW50RXJyb3IoJ3N2Z1BhcmVudFNlbGVjdG9yIGlzIG5vdCBhbGxvd2VkIGluIHVwZGF0ZScpLFxuICBjb3VsZE5vdEZpbmRTZWxlY3RvcjogdGhyb3dBcmd1bWVudEVycm9yKChwYXJhbSkgPT4gYENvdWxkIG5vdCBmaW5kIGVsZW1lbnQgd2l0aCBzZWxlY3RvciAtICcke3BhcmFtfSdgKSxcbiAgc291cmNlQW5kRGVzdGluYXRpb25Gb3JtYXQ6IHRocm93QXJndW1lbnRFcnJvcignc291cmNlIGFuZCBkZXN0aW5hdGlvbiBzaG91bGQgYmUgZWl0aGVyIHF1ZXJ5U2VsZWN0b3Igc3RyaW5ncyBvciBjb29yZGluYXRlIHBhaXJzICh7eDogLi4gLHk6IH0pJyksXG4gIHNpbmdsZUFyZ3VtZW50T2JqZWN0OiB0aHJvd0FyZ3VtZW50RXJyb3IoYFNpbmdsZSBhcmd1bWVudCBzaG91bGQgYWx3YXlzIGJlIGFuIG9iamVjdGApLFxuICBtaXNzaW5nU291cmNlOiB0aHJvd0FyZ3VtZW50RXJyb3IoYE1pc3Npbmcgc291cmNlIG9wdGlvbmApLFxuICBtaXNzaW5nRGVzdGluYXRpb246IHRocm93QXJndW1lbnRFcnJvcihgTWlzc2luZyBkZXN0aW5hdGlvbiBvcHRpb25gKSxcbiAgbGFzdEFyZ3VtZW50T2JqZWN0OiB0aHJvd0FyZ3VtZW50RXJyb3IoJ0xhc3QgYXJndW1lbnQgc2hvdWxkIGFsd2F5cyBiZSBhbiBvYmplY3QnKSxcbiAgbWF4aW11bVRocmVlQXJndW1lbnRzOiB0aHJvd0FyZ3VtZW50RXJyb3IoJ0Z1bmN0aW9uIGRvZXMgbm90IGFjY2VwdCBtb3JlIHRoYW4gdGhyZWUgYXJndW1lbnRzJyksXG4gIGRvdWJsZVNvdXJjZTogdGhyb3dBcmd1bWVudEVycm9yKCdTb3VyY2Ugc3BlY2lmaWVkIHR3aWNlIChhcyBmaXJzdCBhcmd1bWVudCwgYW5kIGluIG9wdGlvbnMnKSxcbiAgZG91YmxlRGVzdGluYXRpb246IHRocm93QXJndW1lbnRFcnJvcignRGVzdGluYXRpb24gc3BlY2lmaWVkIHR3aWNlIChhcyBzZWNvbmQgYXJndW1lbnQsIGFuZCBpbiBvcHRpb25zKScpLFxuICBhdExlYXN0T25lQXJndW1lbnQ6IHRocm93QXJndW1lbnRFcnJvcihgQXQgbGVhc3Qgb25lIGFyZ3VtZW50IGV4cGVjdGVkYCksXG4gIG11c3RCZVN0cmluZzogdGhyb3dBcmd1bWVudEVycm9yKHBhcmFtID0+IGAke3BhcmFtfSBtdXN0IGJlIGEgc3RyaW5nYCksXG4gIG11c3RCZU51bWJlcjogdGhyb3dBcmd1bWVudEVycm9yKHBhcmFtID0+IGAke3BhcmFtfSBtdXN0IGJlIGEgbnVtYmVyYCksXG4gIG11c3RCZVBvc2l0aXZlTnVtYmVyOiB0aHJvd0FyZ3VtZW50RXJyb3IocGFyYW0gPT4gYCR7cGFyYW19IG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJgKSxcbiAgbXVzdEJlTm9uWmVyb051bWJlcjogdGhyb3dBcmd1bWVudEVycm9yKHBhcmFtID0+IGAke3BhcmFtfSBtdXN0IGJlIGEgbnVtYmVyIGRpZmZlcmVudCB0aGFuIDBgKSxcbiAgcG9zaXRpb25XaXRoQ29vcmRzOiB0aHJvd0FyZ3VtZW50RXJyb3Ioc291cmNlT3JEZXN0ID0+IGAke3NvdXJjZU9yRGVzdH1Qb3NpdGlvbiB1bmF2YWlsYWJsZSB3aGVuIHVzaW5nIGNvb3JkaW5hdGVzIGFzICR7c291cmNlT3JEZXN0fWApLFxuICB2YWxJbkVudW06IHRocm93QXJndW1lbnRFcnJvcigodmFsLGFyciwgbGFiZWxzKSA9PiBgJyR7dmFsfScgaXMgbm90IGEgdmFsaWQgJHtsYWJlbHNbMF19IC0gYXZhaWxhYmxlICR7bGFiZWxzWzFdfSBhcmU6ICR7YXJyLmpvaW4oJywgJyl9YCksXG4gIHBpdm90c0Zvcm1hdDogdGhyb3dBcmd1bWVudEVycm9yKGAncGl2b3RzJyBtdXN0IGJlIGFuIGFycmF5IG9mIHR3byBjb29yZGluYXRlcyB7eDogbnVtYmVyICwgeTogbnVtYmVyfWApLFxuICBwaXZvdHNBbmRDdXJ2YXR1cmU6IHRocm93QXJndW1lbnRFcnJvcihcIidjdXJ2YXR1cmUnIG9wdGlvbiBpcyBub3QgYWxsb3dlZCB3aGVuIHVzaW5nIGV4cGxpY2l0IHBpdm90c1wiKSxcbiAgbWlzc2luZ01hcmtlcklkZW50OiB0aHJvd0FyZ3VtZW50RXJyb3IoXCJDdXN0b20gbWFya2VyIHR5cGUgaXMgbWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0eSAnZW5kcG9pbnQubWFya2VySWRlbnRpZmllcidcIiksXG4gIG1hcmtlcklkZW50T25seUN1c3RvbTogdGhyb3dBcmd1bWVudEVycm9yKFwicHJvcGVydHkgJ2VuZHBvaW50Lm1hcmtlcklkZW50aWZpZXInIGFsbG93ZWQgb25seSB3aXRoIGN1c3RvbSBlbmRwb2ludC50eXBlXCIpLFxuICBtYXJrZXJDdXN0b21pemF0aW9uVW5hdmFpbGFibGU6IHRocm93QXJndW1lbnRFcnJvcihwcm9wID0+IGBNYXJrZXIgY3VzdG9taXphdGlvbiBwcm9wZXJ0eSAnJHtwcm9wfScgbm90IGF2YWlsYWJsZSB3aGVuIHByb3ZpZGluZyBjdXN0b20gbWFya2VyYCksXG4gIHVucmVjb2duaXplZE9wdGlvbjogdGhyb3dBcmd1bWVudEVycm9yKHByb3AgPT4gYFVucmVjb2duaXplZCBvcHRpb24gJyR7cHJvcH0nYCksXG4gIHVucmVjb2duaXplZEVuZHBvaW50T3B0aW9uOiB0aHJvd0FyZ3VtZW50RXJyb3IocHJvcCA9PiBgVW5yZWNvZ25pemVkIGVuZHBvaW50IG9wdGlvbiAnJHtwcm9wfSdgKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvcnM7IiwiZnVuY3Rpb24gZ2V0Q291bnRlcigpe1xuICBsZXQgY250ID0gMDtcbiAgcmV0dXJuICgoKSA9PiBjbnQrKyk7XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VJZihhcnIsIGJvb2wpIHtcbiAgaWYgKGJvb2wpIHtcbiAgICByZXR1cm4gYXJyLnJldmVyc2UoKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZ2V0Q291bnRlciwgcmV2ZXJzZUlmIH07IiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG4iLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcbiIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibm9kZVwiIGluY2x1ZGU9XCJnZXQsaXNTdHJpbmcsaXNPYmplY3QsaXNOdW1iZXIsaXNVbmRlZmluZWQsaXNGdW5jdGlvblwiYFxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcy5mb3VuZGF0aW9uLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xudmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJub2RlXCIgaW5jbHVkZT1cImdldCxpc1N0cmluZyxpc09iamVjdCxpc051bWJlcixpc1VuZGVmaW5lZCxpc0Z1bmN0aW9uXCJgXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG52YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJub2RlXCIgaW5jbHVkZT1cImdldCxpc1N0cmluZyxpc09iamVjdCxpc051bWJlcixpc1VuZGVmaW5lZCxpc0Z1bmN0aW9uXCJgXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG52YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBOdW1iZXJgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogKipOb3RlOioqIFRvIGV4Y2x1ZGUgYEluZmluaXR5YCwgYC1JbmZpbml0eWAsIGFuZCBgTmFOYCwgd2hpY2ggYXJlXG4gKiBjbGFzc2lmaWVkIGFzIG51bWJlcnMsIHVzZSB0aGUgYF8uaXNGaW5pdGVgIG1ldGhvZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG51bWJlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTnVtYmVyKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcignMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IG51bWJlclRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOdW1iZXI7XG4iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5vZGVcIiBpbmNsdWRlPVwiZ2V0LGlzU3RyaW5nLGlzT2JqZWN0LGlzTnVtYmVyLGlzVW5kZWZpbmVkLGlzRnVuY3Rpb25cImBcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanMuZm91bmRhdGlvbi8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5vZGVcIiBpbmNsdWRlPVwiZ2V0LGlzU3RyaW5nLGlzT2JqZWN0LGlzTnVtYmVyLGlzVW5kZWZpbmVkLGlzRnVuY3Rpb25cImBcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanMuZm91bmRhdGlvbi8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cbnZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N0cmluZygnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N0cmluZygxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHxcbiAgICAoIWlzQXJyYXkodmFsdWUpICYmIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3RyaW5nVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmluZztcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibm9kZVwiIGluY2x1ZGU9XCJnZXQsaXNTdHJpbmcsaXNPYmplY3QsaXNOdW1iZXIsaXNVbmRlZmluZWQsaXNGdW5jdGlvblwiYFxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcy5mb3VuZGF0aW9uLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNVbmRlZmluZWQodm9pZCAwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmRlZmluZWQ7XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcbiIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9