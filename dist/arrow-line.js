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
    sourceRectangle: rectangleFromParam(options.source, options.context),
    destinationRectangle: rectangleFromParam(options.destination, options.context)
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

function rectangleFromParam(param, context){
  if (isCoordinate(param)) {
    return new Rectangle(param.x, param.y, 0, 0);
  }
  const rootElement = context || document;
  const element = rootElement.querySelector(param);
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
  'svgParentSelector',
  `context`
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
    const svg = getCanvas(options.svgParentSelector, options);
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

function getSvgCanvas(selector, options){
  let domElement;
  
  if (!selector){
    domElement = SvgCanvas.defaultSvgElement();
  } else {
    //if (!cache.has(selector)) {
      const rootElement = options.context || document;
      const el = rootElement.querySelector(selector);
      if (!el) {
        Errors.couldNotFindSelector(selector);
      }
      cache.set(selector, el);
    //}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnJvd0xpbmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy9ub3JtYWxpemVfYW5kX3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3BhcnNlX2FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy9yZWN0YW5nbGVfZnJvbV9wYXJhbS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9jb2xvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9jdXJ2YXR1cmUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvZW5kcG9pbnQvZmlsbF9jb2xvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9vbmx5X3N1cHBvcnRlZC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9lbmRwb2ludC9zaXplLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL2VuZHBvaW50L3R5cGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvZm9yY2VfZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL29ubHlfc3VwcG9ydGVkLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvcGl2b3RzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS9wcm9wZXJ0eV9pbl9lbnVtLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvYXJndW1lbnRzL3ZhbGlkYXRlL3NvdXJjZV9hbmRfZGVzdGluYXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcmd1bWVudHMvdmFsaWRhdGUvc3ZnX3BhcmVudF9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2FyZ3VtZW50cy92YWxpZGF0ZS90aGlja25lc3MuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9hcnJvd19saW5lLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvYXJyb3dfbGluZV9wcmVmaXguanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9jb25zdC9kaXJlY3Rpb25zLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvZW5kcG9pbnRfcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9jb25zdC9lbmRwb2ludF90eXBlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvY29uc3QvbGluZV9zdHlsZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dlb21ldHJ5L2lzX2Nvb3JkaW5hdGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9nZW9tZXRyeS9wb2ludC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dlb21ldHJ5L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL2dldF9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9nZXRfZW5kcG9pbnRzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvbGluZV9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvbWFya2VyX29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9wYXRoX2RlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi9zdmcvc3ZnX2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3N2Zy9zdmdfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi91dGlsL2FyZ3VtZW50X2Vycm9yLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdXRpbC9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi91dGlsL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2lzS2V5LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL190b0tleS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc051bWJlci5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lLy4vc3JjL2xpYi92ZW5kb3IvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovL2Fycm93TGluZS8uL3NyYy9saWIvdmVuZG9yL2xvZGFzaC9pc1VuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly9hcnJvd0xpbmUvLi9zcmMvbGliL3ZlbmRvci9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYXJyb3dMaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fycm93TGluZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Fycm93TGluZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBLGtCQUFrQixtQkFBTyxDQUFDLG9EQUFxQjs7QUFFL0MsMkI7Ozs7Ozs7Ozs7QUNGQSx3QkFBd0IsbUJBQU8sQ0FBQyxtRUFBb0I7O0FBRXBELDJCQUEyQixtQkFBTyxDQUFDLDJFQUF3Qjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0M7Ozs7Ozs7Ozs7QUNaQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBaUI7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLGtEQUFrQjs7QUFFekMsNkJBQTZCLG1CQUFPLENBQUMsK0VBQTBCOztBQUUvRDtBQUNBO0FB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V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztVQ1BEO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImFycm93LWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhcnJvd0xpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXJyb3dMaW5lXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiY29uc3QgYXJyb3dMaW5lID0gcmVxdWlyZSgnLi9saWIvYXJyb3dfbGluZS5qcycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcnJvd0xpbmU7IiwiY29uc3QgdmFsaWRhdGVPcHRpb25zID0gcmVxdWlyZSgnLi92YWxpZGF0ZS9vcHRpb25zJyk7XHJcblxyXG5jb25zdCByZWN0YW5nbGVGcm9tUGFyYW0gPSByZXF1aXJlKCcuL3JlY3RhbmdsZV9mcm9tX3BhcmFtJyk7XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVBbmRWYWxpZGF0ZShvcHRpb25zKXtcclxuICByZXR1cm4ge1xyXG4gICAgLi4udmFsaWRhdGVPcHRpb25zKG9wdGlvbnMpLFxyXG4gICAgc291cmNlUmVjdGFuZ2xlOiByZWN0YW5nbGVGcm9tUGFyYW0ob3B0aW9ucy5zb3VyY2UsIG9wdGlvbnMuY29udGV4dCksXHJcbiAgICBkZXN0aW5hdGlvblJlY3RhbmdsZTogcmVjdGFuZ2xlRnJvbVBhcmFtKG9wdGlvbnMuZGVzdGluYXRpb24sIG9wdGlvbnMuY29udGV4dClcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplQW5kVmFsaWRhdGU7IiwiY29uc3QgaXNPYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNPYmplY3QnKTtcclxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi8uLi91dGlsL2Vycm9ycycpO1xyXG5cclxuY29uc3Qgbm9ybWFsaXplQW5kVmFsaWRhdGUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZV9hbmRfdmFsaWRhdGUnKTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlTXVsdGlwbGVBcmd1bWVudHMoYXJncyl7XHJcbiAgaWYgKChhcmdzLmxlbmd0aCA+IDIpICYmICghaXNPYmplY3QoYXJnc1syXSkpKSB7XHJcbiAgICBFcnJvcnMubGFzdEFyZ3VtZW50T2JqZWN0KCk7XHJcbiAgfVxyXG4gIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcclxuICAgIEVycm9ycy5tYXhpbXVtVGhyZWVBcmd1bWVudHMoKTtcclxuICB9XHJcbiAgY29uc3Qgb3B0aW9ucyA9IGFyZ3NbMl0gfHwge307XHJcbiAgaWYgKG9wdGlvbnMuc291cmNlKSB7XHJcbiAgICBFcnJvcnMuZG91YmxlU291cmNlKClcclxuICB9XHJcbiAgaWYgKG9wdGlvbnMuZGVzdGluYXRpb24pIHtcclxuICAgIEVycm9ycy5kb3VibGVEZXN0aW5hdGlvbigpO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgLi4ub3B0aW9ucyxcclxuICAgIHNvdXJjZTogYXJnc1swXSxcclxuICAgIGRlc3RpbmF0aW9uOiBhcmdzWzFdXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VTaW5nbGVBcmd1bWVudChhcmdzKXtcclxuICBpZiAoIWlzT2JqZWN0KGFyZ3NbMF0pKSBFcnJvcnMuc2luZ2xlQXJndW1lbnRPYmplY3QoKTtcclxuICBjb25zdCBvcHRpb25zID0gYXJnc1swXTtcclxuICBpZiAoIW9wdGlvbnMuc291cmNlKSB7XHJcbiAgICBFcnJvcnMubWlzc2luZ1NvdXJjZSgpO1xyXG4gIH1cclxuICBpZiAoIW9wdGlvbnMuZGVzdGluYXRpb24pIHtcclxuICAgIEVycm9ycy5taXNzaW5nRGVzdGluYXRpb24oKTtcclxuICB9XHJcbiAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YW5kYXJkaXplKGFyZ3MpIHtcclxuICBpZiAoYXJncy5sZW5ndGggPT0gMCkge1xyXG4gICAgRXJyb3JzLmF0TGVhc3RPbmVBcmd1bWVudCgpO1xyXG4gIH1cclxuICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICByZXR1cm4gcGFyc2VNdWx0aXBsZUFyZ3VtZW50cyhhcmdzKTtcclxuICB9XHJcbiAgcmV0dXJuICBwYXJzZVNpbmdsZUFyZ3VtZW50KGFyZ3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyhhcmdzKSB7XHJcbiAgY29uc3QgcmF3T3B0aW9ucyA9IHN0YW5kYXJkaXplKGFyZ3MpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBub3JtYWxpemVBbmRWYWxpZGF0ZShyYXdPcHRpb25zKVxyXG4gIHJldHVybiB7IHJhd09wdGlvbnMsIG9wdGlvbnMgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZUFyZ3VtZW50czsiLCJjb25zdCBSZWN0YW5nbGUgPSByZXF1aXJlKCcuLy4uL2dlb21ldHJ5L3JlY3RhbmdsZScpO1xyXG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLy4uL3V0aWwvZXJyb3JzJyk7XHJcbmNvbnN0IGlzQ29vcmRpbmF0ZSA9IHJlcXVpcmUoJy4vLi4vZ2VvbWV0cnkvaXNfY29vcmRpbmF0ZScpO1xyXG5cclxuZnVuY3Rpb24gcmVjdGFuZ2xlRnJvbVBhcmFtKHBhcmFtLCBjb250ZXh0KXtcclxuICBpZiAoaXNDb29yZGluYXRlKHBhcmFtKSkge1xyXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocGFyYW0ueCwgcGFyYW0ueSwgMCwgMCk7XHJcbiAgfVxyXG4gIGNvbnN0IHJvb3RFbGVtZW50ID0gY29udGV4dCB8fCBkb2N1bWVudDtcclxuICBjb25zdCBlbGVtZW50ID0gcm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbSk7XHJcbiAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICBFcnJvcnMuY291bGROb3RGaW5kU2VsZWN0b3IocGFyYW0pO1xyXG4gIH1cclxuICByZXR1cm4gUmVjdGFuZ2xlLmZyb21ET01FbGVtZW50KGVsZW1lbnQpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlY3RhbmdsZUZyb21QYXJhbTtcclxuIiwiY29uc3QgaXNTdHJpbmcgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKTtcclxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ29sb3Iob3B0aW9ucyl7XHJcbiAgb3B0aW9ucy5jb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgJ2JsYWNrJztcclxuICBpZiAoIWlzU3RyaW5nKG9wdGlvbnMuY29sb3IpKSBFcnJvcnMubXVzdEJlU3RyaW5nKCdDb2xvcicpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlQ29sb3I7IiwiY29uc3QgaXNOdW1iZXIgPSByZXF1aXJlKCdsb2Rhc2gvaXNOdW1iZXInKTtcclxuY29uc3QgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcclxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ3VydmF0dXJlKG9wdGlvbnMpe1xyXG4gIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5jdXJ2YXR1cmUpKSB7XHJcbiAgICBpZiAoIWlzTnVtYmVyKG9wdGlvbnMuY3VydmF0dXJlKSkge1xyXG4gICAgICBFcnJvcnMubXVzdEJlTnVtYmVyKCdDdXJ2YXR1cmUnKVxyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoIW9wdGlvbnMucGl2b3RzICYmIGlzVW5kZWZpbmVkKG9wdGlvbnMuY3VydmF0dXJlKSkgb3B0aW9ucy5jdXJ2YXR1cmUgPSAxO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlQ3VydmF0dXJlOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XHJcbmNvbnN0IGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJyk7XHJcblxyXG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2Vycm9ycycpO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGaWxsQ29sb3IoZW5kcG9pbnRPcHRpb25zKSB7XHJcbiAgY29uc3QgZmlsbENvbG9yID0gZW5kcG9pbnRPcHRpb25zLmZpbGxDb2xvcjtcclxuICBpZiAoIWlzVW5kZWZpbmVkKGZpbGxDb2xvcikpe1xyXG4gICAgaWYgKCFpc1N0cmluZyhmaWxsQ29sb3IpKSBFcnJvcnMubXVzdEJlU3RyaW5nKCdFbmRwb2ludCBmaWxsQ29sb3InKVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUZpbGxDb2xvcjsiLCJjb25zdCB2YWxpZGF0ZVR5cGUgPSByZXF1aXJlKCcuL3R5cGUnKTtcclxuY29uc3QgdmFsaWRhdGVGaWxsQ29sb3IgPSByZXF1aXJlKCcuL2ZpbGxfY29sb3InKTtcclxuY29uc3QgdmFsaWRhdGVQb3NpdGlvbiA9IHJlcXVpcmUoJy4vcG9zaXRpb24nKTtcclxuY29uc3QgdmFsaWRhdGVTaXplID0gcmVxdWlyZSgnLi9zaXplJyk7XHJcbmNvbnN0IHZhbGlkYXRlT25seVN1cHBvcnRlZE9wdGlvbnMgPSByZXF1aXJlKCcuL29ubHlfc3VwcG9ydGVkJyk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVuZHBvaW50KG9wdGlvbnMpe1xyXG4gIG9wdGlvbnMuZW5kcG9pbnQgPSBvcHRpb25zLmVuZHBvaW50IHx8IHt9O1xyXG4gIHZhbGlkYXRlVHlwZShvcHRpb25zLmVuZHBvaW50KTtcclxuICB2YWxpZGF0ZUZpbGxDb2xvcihvcHRpb25zLmVuZHBvaW50KTtcclxuICB2YWxpZGF0ZVBvc2l0aW9uKG9wdGlvbnMuZW5kcG9pbnQpO1xyXG4gIHZhbGlkYXRlU2l6ZShvcHRpb25zLmVuZHBvaW50KTtcclxuICBvcHRpb25zLmVuZHBvaW50LmZpbGxDb2xvciA9IG9wdGlvbnMuZW5kcG9pbnQuZmlsbENvbG9yIHx8IG9wdGlvbnMuY29sb3I7XHJcbiAgdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9ucyhvcHRpb25zLmVuZHBvaW50KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZUVuZHBvaW50OyIsImNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvZXJyb3JzJyk7XHJcblxyXG5jb25zdCBTVVBQT1JURURfT1BUSU9OUyA9IFtcclxuICAndHlwZScsXHJcbiAgJ21hcmtlcklkZW50aWZpZXInLFxyXG4gICdmaWxsQ29sb3InLFxyXG4gICdzaXplJyxcclxuICAncG9zaXRpb24nXHJcbl07XHJcblxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9ucyhvcHRpb25zKXtcclxuICBjb25zdCB1bnJlY29nbml6ZWRPcHRpb24gPSBPYmplY3Qua2V5cyhvcHRpb25zKS5maW5kKG9wdGlvbk5hbWUgPT4ge1xyXG4gICAgcmV0dXJuICFTVVBQT1JURURfT1BUSU9OUy5pbmNsdWRlcyhvcHRpb25OYW1lKTtcclxuICB9KTtcclxuICBpZiAodW5yZWNvZ25pemVkT3B0aW9uKSB7XHJcbiAgICBFcnJvcnMudW5yZWNvZ25pemVkRW5kcG9pbnRPcHRpb24odW5yZWNvZ25pemVkT3B0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9uczsiLCJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpO1xyXG5jb25zdCBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpO1xyXG5jb25zdCBFbmRwb2ludFBvc2l0aW9uID0gcmVxdWlyZSgnLi4vLi4vLi4vY29uc3QvZW5kcG9pbnRfcG9zaXRpb24nKTtcclxuXHJcbmNvbnN0IHZhbGlkYXRlUHJvcGVydHlJbkVudW0gPSByZXF1aXJlKCcuLi9wcm9wZXJ0eV9pbl9lbnVtJyk7XHJcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWwvZXJyb3JzJyk7XHJcblxyXG5jb25zdCBQT1NJVElPTlMgPSBPYmplY3QudmFsdWVzKEVuZHBvaW50UG9zaXRpb24pO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQb3NpdGlvbihlbmRwb2ludE9wdGlvbnMpIHtcclxuICBjb25zdCBwb3NpdGlvbiA9IGVuZHBvaW50T3B0aW9ucy5wb3NpdGlvbjtcclxuICBpZiAoIWlzVW5kZWZpbmVkKHBvc2l0aW9uKSl7XHJcbiAgICBpZiAoIWlzU3RyaW5nKHBvc2l0aW9uKSkgRXJyb3JzLm11c3RCZVN0cmluZygnRW5kcG9pbnQgcG9zaXRpb24nKTtcclxuICAgIHZhbGlkYXRlUHJvcGVydHlJbkVudW0oZW5kcG9pbnRPcHRpb25zLCAncG9zaXRpb24nLCBQT1NJVElPTlMsICdlbmRwb2ludCBwb3NpdGlvbicpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVBvc2l0aW9uOyIsImNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJyk7XHJcbmNvbnN0IGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJyk7XHJcblxyXG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsL2Vycm9ycycpO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVTaXplKGVuZHBvaW50T3B0aW9ucykge1xyXG4gIGNvbnN0IHNpemUgPSBlbmRwb2ludE9wdGlvbnMuc2l6ZTtcclxuICBpZiAoIWlzVW5kZWZpbmVkKHNpemUpKXtcclxuICAgIGlmICghaXNOdW1iZXIoc2l6ZSkgfHwgKHNpemU8PTApKSBFcnJvcnMubXVzdEJlUG9zaXRpdmVOdW1iZXIoJ0VuZHBvaW50IHNpemUnKVxyXG4gIH1cclxuICBlbmRwb2ludE9wdGlvbnMuc2l6ZSA9IGVuZHBvaW50T3B0aW9ucy5zaXplIHx8IDE7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVTaXplOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XHJcbmNvbnN0IEVuZHBvaW50VHlwZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2NvbnN0L2VuZHBvaW50X3R5cGUnKTtcclxuY29uc3QgdmFsaWRhdGVQcm9wZXJ0eUluRW51bSA9IHJlcXVpcmUoJy4uL3Byb3BlcnR5X2luX2VudW0nKTtcclxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbC9lcnJvcnMnKTtcclxuXHJcbmNvbnN0IE1BUktFUlMgPSBPYmplY3Qua2V5cyhFbmRwb2ludFR5cGUpO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVDdXN0b21UeXBlKGVuZHBvaW50T3B0aW9ucyl7XHJcbiAgaWYgKGVuZHBvaW50T3B0aW9ucy50eXBlID09IEVuZHBvaW50VHlwZS5jdXN0b20pIHtcclxuICAgIGlmICghZW5kcG9pbnRPcHRpb25zLm1hcmtlcklkZW50aWZpZXIpIHtcclxuICAgICAgRXJyb3JzLm1pc3NpbmdNYXJrZXJJZGVudCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1N0cmluZyhlbmRwb2ludE9wdGlvbnMubWFya2VySWRlbnRpZmllcikpIHtcclxuICAgICAgRXJyb3JzLm11c3RCZVN0cmluZygpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdW5hdmFpbGFibGVQcm9wZXJ0eSA9IFsnZmlsbENvbG9yJywgJ3NpemUnXS5maW5kKHByb3AgPT4gZW5kcG9pbnRPcHRpb25zW3Byb3BdKTtcclxuICAgIGlmICh1bmF2YWlsYWJsZVByb3BlcnR5KSB7XHJcbiAgICAgIEVycm9ycy5tYXJrZXJDdXN0b21pemF0aW9uVW5hdmFpbGFibGUodW5hdmFpbGFibGVQcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChlbmRwb2ludE9wdGlvbnMubWFya2VySWRlbnRpZmllcikge1xyXG4gICAgICBFcnJvcnMubWFya2VySWRlbnRPbmx5Q3VzdG9tKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVR5cGUoZW5kcG9pbnRPcHRpb25zKXtcclxuICBlbmRwb2ludE9wdGlvbnMudHlwZSA9IGVuZHBvaW50T3B0aW9ucy50eXBlIHx8IEVuZHBvaW50VHlwZS5hcnJvd0hlYWRGaWxsZWQ7XHJcbiAgdmFsaWRhdGVQcm9wZXJ0eUluRW51bShlbmRwb2ludE9wdGlvbnMsICd0eXBlJywgTUFSS0VSUywgJ2VuZHBvaW50IHR5cGUnKTtcclxuICB2YWxpZGF0ZUN1c3RvbVR5cGUoZW5kcG9pbnRPcHRpb25zKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVR5cGU7IiwiY29uc3QgaXNTdHJpbmcgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKTtcclxuY29uc3QgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcclxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcclxuXHJcbmNvbnN0IERpcmVjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0L2RpcmVjdGlvbnMnKTtcclxuY29uc3QgdmFsaWRhdGVQcm9wZXJ0eUluRW51bSA9IHJlcXVpcmUoJy4vcHJvcGVydHlfaW5fZW51bScpO1xyXG5cclxuY29uc3QgRElSRUNUSU9OUyA9IE9iamVjdC52YWx1ZXMoRGlyZWN0aW9uKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9yY2VEaXJlY3Rpb24ob3B0aW9ucyl7XHJcbiAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmZvcmNlRGlyZWN0aW9uKSl7XHJcbiAgICBpZiAoIWlzU3RyaW5nKG9wdGlvbnMuZm9yY2VEaXJlY3Rpb24pKXtcclxuICAgICAgRXJyb3JzLm11c3RCZVN0cmluZygnZm9yY2VEaXJlY3Rpb24nKVxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVQcm9wZXJ0eUluRW51bShvcHRpb25zLCAnZm9yY2VEaXJlY3Rpb24nLCBESVJFQ1RJT05TLCAnZGlyZWN0aW9uIHR5cGUnKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVGb3JjZURpcmVjdGlvbjsiLCJjb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xyXG5cclxuY29uc3QgU1VQUE9SVEVEX09QVElPTlMgPSBbXHJcbiAgJ3NvdXJjZScsXHJcbiAgJ2Rlc3RpbmF0aW9uJyxcclxuICAnY29sb3InLFxyXG4gICdjdXJ2YXR1cmUnLFxyXG4gICdwaXZvdHMnLFxyXG4gICdzb3VyY2VQb3NpdGlvbicsXHJcbiAgJ2Rlc3RpbmF0aW9uUG9zaXRpb24nLFxyXG4gICdzdHlsZScsXHJcbiAgJ3RoaWNrbmVzcycsXHJcbiAgJ2ZvcmNlRGlyZWN0aW9uJyxcclxuICAnZW5kcG9pbnQnLFxyXG4gICdzdmdQYXJlbnRTZWxlY3RvcicsXHJcbiAgYGNvbnRleHRgXHJcbl07XHJcblxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVPbmx5U3VwcG9ydGVkT3B0aW9ucyhvcHRpb25zKXtcclxuICBjb25zdCB1bnJlY29nbml6ZWRPcHRpb24gPSBPYmplY3Qua2V5cyhvcHRpb25zKS5maW5kKG9wdGlvbk5hbWUgPT4ge1xyXG4gICAgcmV0dXJuICFTVVBQT1JURURfT1BUSU9OUy5pbmNsdWRlcyhvcHRpb25OYW1lKTtcclxuICB9KTtcclxuICBpZiAodW5yZWNvZ25pemVkT3B0aW9uKSB7XHJcbiAgICBFcnJvcnMudW5yZWNvZ25pemVkT3B0aW9uKHVucmVjb2duaXplZE9wdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlT25seVN1cHBvcnRlZE9wdGlvbnM7IiwiY29uc3QgdmFsaWRhdGVTb3VyY2VBbmREZXN0aW5hdGlvbiA9IHJlcXVpcmUoJy4vc291cmNlX2FuZF9kZXN0aW5hdGlvbicpO1xyXG5jb25zdCB2YWxpZGF0ZUNvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpO1xyXG5jb25zdCB2YWxpZGF0ZVRoaWNrbmVzcyA9IHJlcXVpcmUoJy4vdGhpY2tuZXNzJyk7XHJcbmNvbnN0IHZhbGlkYXRlQ3VydmF0dXJlID0gcmVxdWlyZSgnLi9jdXJ2YXR1cmUnKTtcclxuY29uc3QgdmFsaWRhdGVQb3NpdGlvbnMgPSByZXF1aXJlKCcuL3Bvc2l0aW9ucycpO1xyXG5jb25zdCB2YWxpZGF0ZVBpdm90cyA9IHJlcXVpcmUoJy4vcGl2b3RzJyk7XHJcbmNvbnN0IHZhbGlkYXRlU3ZnUGFyZW50U2VsZWN0b3IgPSByZXF1aXJlKCcuL3N2Z19wYXJlbnRfc2VsZWN0b3InKTtcclxuY29uc3QgdmFsaWRhdGVTdHlsZSA9IHJlcXVpcmUoJy4vc3R5bGUnKTtcclxuY29uc3QgdmFsaWRhdGVGb3JjZURpcmVjdGlvbiA9IHJlcXVpcmUoJy4vZm9yY2VfZGlyZWN0aW9uJyk7XHJcbmNvbnN0IHZhbGlkYXRlRW5kcG9pbnQgPSByZXF1aXJlKCcuL2VuZHBvaW50Jyk7XHJcbmNvbnN0IHZhbGlkYXRlT25seVN1cHBvcnRlZE9wdGlvbnMgPSByZXF1aXJlKCcuL29ubHlfc3VwcG9ydGVkJyk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZU9wdGlvbnMob3B0aW9ucyl7XHJcbiAgdmFsaWRhdGVTb3VyY2VBbmREZXN0aW5hdGlvbihvcHRpb25zKTtcclxuICB2YWxpZGF0ZU9ubHlTdXBwb3J0ZWRPcHRpb25zKG9wdGlvbnMpO1xyXG4gIHZhbGlkYXRlQ29sb3Iob3B0aW9ucyk7XHJcbiAgdmFsaWRhdGVUaGlja25lc3Mob3B0aW9ucyk7XHJcbiAgdmFsaWRhdGVDdXJ2YXR1cmUob3B0aW9ucyk7XHJcbiAgdmFsaWRhdGVTdHlsZShvcHRpb25zKTtcclxuICB2YWxpZGF0ZVBvc2l0aW9ucyhvcHRpb25zKTtcclxuICB2YWxpZGF0ZVBpdm90cyhvcHRpb25zKTtcclxuICB2YWxpZGF0ZUVuZHBvaW50KG9wdGlvbnMpO1xyXG4gIHZhbGlkYXRlU3ZnUGFyZW50U2VsZWN0b3Iob3B0aW9ucyk7XHJcbiAgdmFsaWRhdGVGb3JjZURpcmVjdGlvbihvcHRpb25zKTtcclxuICByZXR1cm4gb3B0aW9ucztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZU9wdGlvbnM7IiwiY29uc3QgaXNDb29yZGluYXRlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvaXNfY29vcmRpbmF0ZScpO1xyXG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVQaXZvdHMob3B0aW9ucyl7XHJcbiAgaWYgKG9wdGlvbnMucGl2b3RzKSB7XHJcbiAgICBpZiAoIShBcnJheS5pc0FycmF5KG9wdGlvbnMucGl2b3RzKSAmJiAob3B0aW9ucy5waXZvdHMubGVuZ3RoID09IDIpICYmIChvcHRpb25zLnBpdm90cy5ldmVyeShpc0Nvb3JkaW5hdGUpKSkpIHtcclxuICAgICAgRXJyb3JzLnBpdm90c0Zvcm1hdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMuY3VydmF0dXJlKSB7XHJcbiAgICAgIEVycm9ycy5waXZvdHNBbmRDdXJ2YXR1cmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVQaXZvdHM7IiwiY29uc3QgaXNDb29yZGluYXRlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvaXNfY29vcmRpbmF0ZScpO1xyXG5jb25zdCBSZWN0YW5nbGUgPSByZXF1aXJlKCcuLi8uLi9nZW9tZXRyeS9yZWN0YW5nbGUnKTtcclxuY29uc3QgdmFsaWRhdGVQcm9wZXJ0eUluRW51bSA9IHJlcXVpcmUoJy4vcHJvcGVydHlfaW5fZW51bScpO1xyXG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xyXG5cclxuY29uc3QgUE9TSVRJT05TID0gT2JqZWN0LmtleXMoUmVjdGFuZ2xlLlNJREVTKTtcclxuZnVuY3Rpb24gdmFsaWRhdGVQb3NpdGlvbnMob3B0aW9ucyl7XHJcbiAgaWYgKG9wdGlvbnMuc291cmNlUG9zaXRpb24pIHtcclxuICAgIGlmIChpc0Nvb3JkaW5hdGUob3B0aW9ucy5zb3VyY2UpKSB7XHJcbiAgICAgIEVycm9ycy5wb3NpdGlvbldpdGhDb29yZHMoJ3NvdXJjZScpO1xyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVQcm9wZXJ0eUluRW51bShvcHRpb25zLCAnc291cmNlUG9zaXRpb24nLCBQT1NJVElPTlMsICdwb3NpdGlvbicpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMuZGVzdGluYXRpb25Qb3NpdGlvbikge1xyXG4gICAgaWYgKGlzQ29vcmRpbmF0ZShvcHRpb25zLmRlc3RpbmF0aW9uKSkge1xyXG4gICAgICBFcnJvcnMucG9zaXRpb25XaXRoQ29vcmRzKCdkZXN0aW5hdGlvbicpO1xyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVQcm9wZXJ0eUluRW51bShvcHRpb25zLCAnZGVzdGluYXRpb25Qb3NpdGlvbicsIFBPU0lUSU9OUywgJ3Bvc2l0aW9uJyk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlUG9zaXRpb25zOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XHJcbmNvbnN0IGdldCA9IHJlcXVpcmUoJ2xvZGFzaC9nZXQnKTtcclxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydHlJbkVudW0ob3B0aW9ucywgcHJvcGVydHlQYXRoLCBlbnVtZXJhdGlvbiwgbGFiZWwpe1xyXG4gIGNvbnN0IGxhYmVsX2FyciA9IGlzU3RyaW5nKGxhYmVsKSA/IFtsYWJlbCwgYCR7bGFiZWx9c2BdIDogbGFiZWw7XHJcbiAgY29uc3QgcHJvcCA9IGdldChvcHRpb25zLCBwcm9wZXJ0eVBhdGgpO1xyXG4gIGlmICgocHJvcCkgJiYgKCFlbnVtZXJhdGlvbi5pbmNsdWRlcyhwcm9wKSkpIHtcclxuICAgIEVycm9ycy52YWxJbkVudW0ocHJvcCwgZW51bWVyYXRpb24sIGxhYmVsX2Fycik7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlUHJvcGVydHlJbkVudW07IiwiY29uc3QgaXNTdHJpbmcgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKTtcclxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9lcnJvcnMnKTtcclxuY29uc3QgaXNDb29yZGluYXRlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvaXNfY29vcmRpbmF0ZScpO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVTb3VyY2VBbmREZXN0aW5hdGlvbihvcHRpb25zKXtcclxuICBpZiAoIVtvcHRpb25zLnNvdXJjZSwgb3B0aW9ucy5kZXN0aW5hdGlvbl0uZXZlcnkoc2VsID0+IGlzU3RyaW5nKHNlbCkgfHwgaXNDb29yZGluYXRlKHNlbCkpKSB7XHJcbiAgICBFcnJvcnMuc291cmNlQW5kRGVzdGluYXRpb25Gb3JtYXQoKTtcclxuICB9XHJcbiAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVTb3VyY2VBbmREZXN0aW5hdGlvbjsiLCJjb25zdCBMaW5lU3R5bGUgPSByZXF1aXJlKCcuLi8uLi9jb25zdC9saW5lX3N0eWxlJyk7XHJcbmNvbnN0IHZhbGlkYXRlUHJvcGVydHlJbkVudW0gPSByZXF1aXJlKCcuL3Byb3BlcnR5X2luX2VudW0nKTtcclxuXHJcbmNvbnN0IFNUWUxFUyA9IE9iamVjdC5rZXlzKExpbmVTdHlsZSk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVN0eWxlKG9wdGlvbnMpe1xyXG4gIHZhbGlkYXRlUHJvcGVydHlJbkVudW0ob3B0aW9ucywgJ3N0eWxlJywgU1RZTEVTLCAnc3R5bGUnKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVN0eWxlOyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XHJcbmNvbnN0IGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJyk7XHJcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvZXJyb3JzJyk7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVN2Z1BhcmVudFNlbGVjdG9yKG9wdGlvbnMpe1xyXG4gIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdmdQYXJlbnRTZWxlY3RvcikpIHtcclxuICAgIGlmICghaXNTdHJpbmcob3B0aW9ucy5zdmdQYXJlbnRTZWxlY3RvcikpIHtcclxuICAgICAgRXJyb3JzLm11c3RCZVN0cmluZygnc3ZnUGFyZW50U2VsZWN0b3InKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVTdmdQYXJlbnRTZWxlY3RvcjsiLCJjb25zdCBpc051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bWJlcicpO1xyXG5jb25zdCBFcnJvcnMgPSByZXF1aXJlKCcuLi8uLi91dGlsL2Vycm9ycycpO1xyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVUaGlja25lc3Mob3B0aW9ucyl7XHJcbiAgb3B0aW9ucy50aGlja25lc3MgPSBvcHRpb25zLnRoaWNrbmVzcyB8fCAxO1xyXG4gIGlmICghaXNOdW1iZXIob3B0aW9ucy50aGlja25lc3MpKSB7XHJcbiAgICBFcnJvcnMubXVzdEJlTnVtYmVyKCdUaGlja25lc3MnKVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZVRoaWNrbmVzcztcclxuIiwiY29uc3QgcGFyc2VBcmd1bWVudHMgPSByZXF1aXJlKCcuL2FyZ3VtZW50cy9wYXJzZV9hcmd1bWVudHMnKTtcclxuY29uc3QgbGluZUF0dHJpYnV0ZXMgPSByZXF1aXJlKCcuL2xpbmVfYXR0cmlidXRlcycpO1xyXG5jb25zdCBwYXRoRGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4vcGF0aF9kZWZpbml0aW9uJyk7XHJcbmNvbnN0IGdldEVuZHBvaW50cyA9IHJlcXVpcmUoJy4vZ2V0X2VuZHBvaW50cycpO1xyXG5jb25zdCBtYXJrZXJPcHRpb25zID0gcmVxdWlyZSgnLi9tYXJrZXJfb3B0aW9ucycpO1xyXG5jb25zdCBnZXRDYW52YXMgPSByZXF1aXJlKCcuL2dldF9jYW52YXMnKTtcclxuY29uc3Qgbm9ybWFsaXplQW5kVmFsaWRhdGUgPSByZXF1aXJlKCcuL2FyZ3VtZW50cy9ub3JtYWxpemVfYW5kX3ZhbGlkYXRlJyk7XHJcblxyXG5jb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpO1xyXG5cclxuY29uc3QgRXJyb3JzID0gcmVxdWlyZSgnLi91dGlsL2Vycm9ycycpO1xyXG5cclxuZnVuY3Rpb24gZ2V0UGF0aEF0dHJpYnV0ZU5hbWVzKHN2Z1BhdGgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdmdQYXRoLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByZXN1bHQucHVzaChzdmdQYXRoLmF0dHJpYnV0ZXMuaXRlbShpKS5uYW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhdGhBdHRyaWJ1dGVzKHN2Zywgb3B0aW9ucykge1xyXG4gICAgY29uc3Qge2JlZ2luUG9pbnQsIGVuZFBvaW50LCBkaXJlY3Rpb259ID0gZ2V0RW5kcG9pbnRzKG9wdGlvbnMpO1xyXG4gICAgY29uc3QgcGF0aERlZmluaXRpb25PcHRpb25zID0ge1xyXG4gICAgICAgIGRpcmVjdGlvbjogb3B0aW9ucy5mb3JjZURpcmVjdGlvbiB8fCBkaXJlY3Rpb24sXHJcbiAgICAgICAgY3VydmF0dXJlOiBvcHRpb25zLmN1cnZhdHVyZSxcclxuICAgICAgICBwaXZvdHM6IG9wdGlvbnMucGl2b3RzXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkOiBwYXRoRGVmaW5pdGlvbihvcHRpb25zLnNvdXJjZVJlY3RhbmdsZVtiZWdpblBvaW50XSwgb3B0aW9ucy5kZXN0aW5hdGlvblJlY3RhbmdsZVtlbmRQb2ludF0sIHBhdGhEZWZpbml0aW9uT3B0aW9ucyksXHJcbiAgICAgICAgZmlsbDogJ25vbmUnLFxyXG4gICAgICAgIHN0cm9rZTogb3B0aW9ucy5jb2xvcixcclxuICAgICAgICAuLi5saW5lQXR0cmlidXRlcyhvcHRpb25zKSxcclxuICAgICAgICAuLi5tYXJrZXJPcHRpb25zKHN2Zywgb3B0aW9ucylcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFBhdGhBdHRyaWJ1dGVzKHN2Z1BhdGgsIHBhdGhBdHRyaWJ1dGVzKSB7XHJcbiAgICBnZXRQYXRoQXR0cmlidXRlTmFtZXMoc3ZnUGF0aCkuZm9yRWFjaChhdHRyTmFtZSA9PiBzdmdQYXRoLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKGF0dHJOYW1lKSk7XHJcbiAgICBmb3IgKGxldCBhdHRyaWJ1dGVOYW1lIGluIHBhdGhBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgc3ZnUGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBhdHRyaWJ1dGVOYW1lLCBwYXRoQXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFycm93TGluZSguLi5hcmdzKSB7XHJcbiAgICBjb25zdCBwYXJzZWRBcmd1bWVudHMgPSBwYXJzZUFyZ3VtZW50cyhhcmdzKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBwYXJzZWRBcmd1bWVudHMub3B0aW9ucztcclxuICAgIGxldCByYXdPcHRpb25zID0gcGFyc2VkQXJndW1lbnRzLnJhd09wdGlvbnM7XHJcbiAgICBjb25zdCBzdmcgPSBnZXRDYW52YXMob3B0aW9ucy5zdmdQYXJlbnRTZWxlY3Rvciwgb3B0aW9ucyk7XHJcbiAgICBjb25zdCBzdmdQYXRoID0gc3ZnLmNyZWF0ZVBhdGgoKTtcclxuICAgIHNldFBhdGhBdHRyaWJ1dGVzKHN2Z1BhdGgsIGdldFBhdGhBdHRyaWJ1dGVzKHN2Zywgb3B0aW9ucykpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRQYXJlbnRTdmdJZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN2Zy5wYXJlbnRDYW52YXMuaWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSYXdTdmdQYXRoKCl7XHJcbiAgICAgICAgICByZXR1cm4gc3ZnUGF0aDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICBzdmdQYXRoLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnUGF0aCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGU6ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMuZXhhY3RseU9uZUFyZ3VtZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlT3B0aW9ucyA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgIGlmICghaXNPYmplY3QodXBkYXRlT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy5hcmd1bWVudE11c3RCZU9iamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVPcHRpb25zLnN2Z1BhcmVudFNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMuc3ZnUGFyZW50Tm90QWxsb3dlZEluVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV3UmF3T3B0aW9ucyA9IHsuLi5yYXdPcHRpb25zLCAuLi51cGRhdGVPcHRpb25zfTtcclxuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IG5vcm1hbGl6ZUFuZFZhbGlkYXRlKG5ld1Jhd09wdGlvbnMpO1xyXG4gICAgICAgICAgICBzZXRQYXRoQXR0cmlidXRlcyhzdmdQYXRoLCBnZXRQYXRoQXR0cmlidXRlcyhzdmcsIG5ld09wdGlvbnMpKTtcclxuICAgICAgICAgICAgcmF3T3B0aW9ucyA9IG5ld1Jhd09wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFycm93TGluZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGBfX2Fycm93TGluZUludGVybmFsYDsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBIT1JJWk9OVEFMOiAnaG9yaXpvbnRhbCcsXHJcbiAgVkVSVElDQUw6ICd2ZXJ0aWNhbCdcclxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIFNUQVJUOiAnc3RhcnQnLFxyXG4gIEVORDogJ2VuZCcsXHJcbiAgQk9USDogJ2JvdGgnXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgYXJyb3dIZWFkRmlsbGVkOiAnYXJyb3dIZWFkRmlsbGVkJyxcclxuICBhcnJvd0hlYWQ6ICdhcnJvd0hlYWQnLFxyXG4gIHNxdWFyZXM6ICdzcXVhcmVzJyxcclxuICBjaXJjbGVzOiAnY2lyY2xlcycsXHJcbiAgY3VzdG9tOiAnY3VzdG9tJyxcclxuICBub25lOiAnbm9uZSdcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkb3Q6ICcxIDEnLFxyXG4gIGRhc2g6ICc0IDEnLFxyXG4gIHNvbGlkOiAnJyxcclxuICAnZG90LWRhc2gnOiAnMSAxIDQgMSdcclxufTsiLCJjb25zdCBpc051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bWJlcicpO1xyXG5jb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpO1xyXG5cclxuZnVuY3Rpb24gaXNDb29yZGluYXRlKG9iaikge1xyXG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG4gIGlmICgha2V5cy5pbmNsdWRlcygneCcpKSByZXR1cm4gZmFsc2U7XHJcbiAgaWYgKCFrZXlzLmluY2x1ZGVzKCd5JykpIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gaXNOdW1iZXIob2JqLngpICYmIGlzTnVtYmVyKG9iai55KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpc0Nvb3JkaW5hdGU7IiwiY29uc3QgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKTtcclxuY2xhc3MgUG9pbnQge1xyXG4gIGNvbnN0cnVjdG9yKHgseSl7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcblxyXG4gIHRyYW5zbGF0ZShmaXJzdCwgc2Vjb25kKXtcclxuICAgIGxldCB4LHk7XHJcbiAgICBpZiAoZmlyc3QgJiYgaXNVbmRlZmluZWQoc2Vjb25kKSkge1xyXG4gICAgICBbeCx5XSA9IFtmaXJzdC54LCBmaXJzdC55XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFt4LHldID0gW2ZpcnN0LCBzZWNvbmRdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50KHRoaXMueCsoeCB8fCAwKSwgdGhpcy55ICsgKHkgfHwgMCkpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGxlZnRPZihvdGhlcikge1xyXG4gICAgcmV0dXJuIHRoaXMueCA8IG90aGVyLnhcclxuICB9XHJcblxyXG4gIGFib3ZlT2Yob3RoZXIpIHtcclxuICAgIHJldHVybiB0aGlzLnkgPCBvdGhlci55XHJcbiAgfVxyXG5cclxuICBob3Jpem9udGFsbHlBbGlnbmVkVG8ob3RoZXIpe1xyXG4gICAgY29uc3QgaERpc3QgPSBNYXRoLmFicyhvdGhlci54IC0gdGhpcy54KTtcclxuICAgIGNvbnN0IHZEaXN0ID0gTWF0aC5hYnMob3RoZXIueSAtIHRoaXMueSk7XHJcbiAgICByZXR1cm4gaERpc3QgPiB2RGlzdDtcclxuICB9XHJcblxyXG4gIHN0cigpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLnh9ICR7dGhpcy55fWBcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7IiwiY29uc3QgUG9pbnQgPSByZXF1aXJlKCcuL3BvaW50Jyk7XHJcblxyXG5jbGFzcyBSZWN0YW5nbGUge1xyXG4gIGNvbnN0cnVjdG9yKHgseSwgd2lkdGgsIGhlaWdodCl7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvcExlZnQoKXsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7IH1cclxuICBnZXQgdG9wUmlnaHQoKXsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnkpOyB9XHJcbiAgZ2V0IHRvcENlbnRlcigpeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHRoaXMud2lkdGgvMiwgdGhpcy55KSB9XHJcbiAgZ2V0IG1pZGRsZUxlZnQoKXsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSsgdGhpcy5oZWlnaHQvMikgfVxyXG4gIGdldCBtaWRkbGVSaWdodCgpeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCsgdGhpcy53aWR0aCwgdGhpcy55KyB0aGlzLmhlaWdodC8yKSB9XHJcbiAgZ2V0IGJvdHRvbUxlZnQoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkrIHRoaXMuaGVpZ2h0KSB9XHJcbiAgZ2V0IGJvdHRvbUNlbnRlcigpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyB0aGlzLndpZHRoLzIsIHRoaXMueSsgdGhpcy5oZWlnaHQpIH1cclxuICBnZXQgYm90dG9tUmlnaHQoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54K3RoaXMud2lkdGgsIHRoaXMueSsgdGhpcy5oZWlnaHQpIH1cclxuXHJcbiAgbGVmdE9mKG90aGVyKXtcclxuICAgIHJldHVybiB0aGlzLm1pZGRsZUxlZnQubGVmdE9mKG90aGVyLm1pZGRsZUxlZnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNlbnRlcigpeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHRoaXMud2lkdGgvMiwgdGhpcy55ICsgdGhpcy5oZWlnaHQvMikgfVxyXG5cclxuXHJcbiAgYWJvdmVPZihvdGhlcil7XHJcbiAgICByZXR1cm4gdGhpcy50b3BDZW50ZXIuYWJvdmVPZihvdGhlci50b3BDZW50ZXIpO1xyXG4gIH1cclxufVxyXG5cclxuUmVjdGFuZ2xlLlNJREVTID0ge1xyXG4gIHRvcExlZnQ6ICd0b3BMZWZ0JyxcclxuICB0b3BSaWdodDogJ3RvcFJpZ2h0JyxcclxuICB0b3BDZW50ZXI6ICd0b3BDZW50ZXInLFxyXG4gIG1pZGRsZVJpZ2h0OiAnbWlkZGxlUmlnaHQnLFxyXG4gIG1pZGRsZUxlZnQ6ICdtaWRkbGVMZWZ0JyxcclxuICBib3R0b21MZWZ0OiAnYm90dG9tTGVmdCcsXHJcbiAgYm90dG9tQ2VudGVyOiAnYm90dG9tQ2VudGVyJyxcclxuICBib3R0b21SaWdodDogJ2JvdHRvbVJpZ2h0J1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZmluZEFic29sdXRlUG9zaXRpb24oaHRtbEVsZW1lbnQpIHtcclxuICBmb3IgKHZhciB4ID0gMCwgeSA9IDAsIGVsID0gaHRtbEVsZW1lbnQ7IGVsICE9IG51bGw7IGVsID0gZWwub2Zmc2V0UGFyZW50KSB7XHJcbiAgICB4ICs9IGVsLm9mZnNldExlZnQ7XHJcbiAgICB5ICs9IGVsLm9mZnNldFRvcDtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUG9pbnQoeCx5KTtcclxufVxyXG5cclxuXHJcblJlY3RhbmdsZS5mcm9tRE9NRWxlbWVudCA9IGZ1bmN0aW9uKERPTUVsZW1lbnQpe1xyXG4gIGNvbnN0IHBvc2l0aW9uID0gZmluZEFic29sdXRlUG9zaXRpb24oRE9NRWxlbWVudCk7XHJcbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUoXHJcbiAgICBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBET01FbGVtZW50Lm9mZnNldFdpZHRoLCBET01FbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gICk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3RhbmdsZTsiLCJjb25zdCBTdmdDYW52YXMgPSByZXF1aXJlKCcuL3N2Zy9zdmdfY2FudmFzJyk7XHJcbmNvbnN0IEVycm9ycyA9IHJlcXVpcmUoJy4vdXRpbC9lcnJvcnMnKTtcclxuXHJcbmNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3ZnQ2FudmFzKHNlbGVjdG9yLCBvcHRpb25zKXtcclxuICBsZXQgZG9tRWxlbWVudDtcclxuICBcclxuICBpZiAoIXNlbGVjdG9yKXtcclxuICAgIGRvbUVsZW1lbnQgPSBTdmdDYW52YXMuZGVmYXVsdFN2Z0VsZW1lbnQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy9pZiAoIWNhY2hlLmhhcyhzZWxlY3RvcikpIHtcclxuICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBvcHRpb25zLmNvbnRleHQgfHwgZG9jdW1lbnQ7XHJcbiAgICAgIGNvbnN0IGVsID0gcm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgIGlmICghZWwpIHtcclxuICAgICAgICBFcnJvcnMuY291bGROb3RGaW5kU2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhY2hlLnNldChzZWxlY3RvciwgZWwpO1xyXG4gICAgLy99XHJcbiAgICBkb21FbGVtZW50ID0gIGNhY2hlLmdldChzZWxlY3RvcilcclxuICB9XHJcbiAgcmV0dXJuIG5ldyBTdmdDYW52YXMoZG9tRWxlbWVudCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ZnQ2FudmFzOyIsImNvbnN0IFJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJyk7XHJcbmNvbnN0IHtIT1JJWk9OVEFMLCBWRVJUSUNBTH0gPSByZXF1aXJlKCcuL2NvbnN0L2RpcmVjdGlvbnMnKTtcclxuY29uc3QgeyByZXZlcnNlSWYgfSA9IHJlcXVpcmUoJy4vdXRpbC9oZWxwZXInKTtcclxuXHJcbmNvbnN0IGRpcmVjdGlvbkVuZHBvaW50cyA9IHtcclxuICBbSE9SSVpPTlRBTF06IChzb3VyY2VSZWN0YW5nbGUsIGRlc3RpbmF0aW9uUmVjdGFuZ2xlKSA9PiByZXZlcnNlSWYoXHJcbiAgICBbUmVjdGFuZ2xlLlNJREVTLm1pZGRsZUxlZnQsIFJlY3RhbmdsZS5TSURFUy5taWRkbGVSaWdodF0sXHJcbiAgICBzb3VyY2VSZWN0YW5nbGUubGVmdE9mKGRlc3RpbmF0aW9uUmVjdGFuZ2xlKVxyXG4gICksXHJcbiAgW1ZFUlRJQ0FMXTogKHNvdXJjZVJlY3RhbmdsZSwgZGVzdGluYXRpb25SZWN0YW5nbGUpID0+IHJldmVyc2VJZihcclxuICAgIFtSZWN0YW5nbGUuU0lERVMudG9wQ2VudGVyLCBSZWN0YW5nbGUuU0lERVMuYm90dG9tQ2VudGVyXSxcclxuICAgIHNvdXJjZVJlY3RhbmdsZS5hYm92ZU9mKGRlc3RpbmF0aW9uUmVjdGFuZ2xlKSlcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEVuZHBvaW50cyh7c291cmNlUmVjdGFuZ2xlLCBkZXN0aW5hdGlvblJlY3RhbmdsZSwgc291cmNlUG9zaXRpb24sIGRlc3RpbmF0aW9uUG9zaXRpb259KXtcclxuICBjb25zdCBkaXJlY3Rpb24gPSBzb3VyY2VSZWN0YW5nbGUuY2VudGVyLmhvcml6b250YWxseUFsaWduZWRUbyhkZXN0aW5hdGlvblJlY3RhbmdsZS5jZW50ZXIpID8gSE9SSVpPTlRBTCA6IFZFUlRJQ0FMO1xyXG4gIGxldCBbYmVnaW5Qb2ludCwgZW5kUG9pbnRdID0gZGlyZWN0aW9uRW5kcG9pbnRzW2RpcmVjdGlvbl0oc291cmNlUmVjdGFuZ2xlLCBkZXN0aW5hdGlvblJlY3RhbmdsZSk7XHJcblxyXG4gIGlmIChzb3VyY2VQb3NpdGlvbikge1xyXG4gICAgYmVnaW5Qb2ludCA9IHNvdXJjZVBvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRlc3RpbmF0aW9uUG9zaXRpb24pIHtcclxuICAgIGVuZFBvaW50ID0gZGVzdGluYXRpb25Qb3NpdGlvbjtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGJlZ2luUG9pbnQsXHJcbiAgICBlbmRQb2ludCxcclxuICAgIGRpcmVjdGlvblxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZXRFbmRwb2ludHM7IiwiY29uc3QgTGluZVN0eWxlID0gcmVxdWlyZSgnLi9jb25zdC9saW5lX3N0eWxlJyk7XHJcblxyXG5mdW5jdGlvbiBsaW5lQXR0cmlidXRlcyhvcHRpb25zKXtcclxuICBjb25zdCByZXN1bHQgPSB7fTtcclxuICBpZiAob3B0aW9ucy5zdHlsZSkge1xyXG4gICAgcmVzdWx0WydzdHJva2UtZGFzaGFycmF5J10gPSBMaW5lU3R5bGVbb3B0aW9ucy5zdHlsZV07XHJcbiAgfVxyXG4gIGlmIChvcHRpb25zLnRoaWNrbmVzcykge1xyXG4gICAgcmVzdWx0WydzdHJva2Utd2lkdGgnXSA9IG9wdGlvbnMudGhpY2tuZXNzO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmVBdHRyaWJ1dGVzO1xyXG4iLCJjb25zdCBnZXQgPSByZXF1aXJlKCdsb2Rhc2gvZ2V0Jyk7XHJcbmNvbnN0IEVuZHBvaW50VHlwZSA9IHJlcXVpcmUoJy4vY29uc3QvZW5kcG9pbnRfdHlwZScpO1xyXG5jb25zdCBFbmRwb2ludFBvc2l0aW9uID0gcmVxdWlyZSgnLi9jb25zdC9lbmRwb2ludF9wb3NpdGlvbicpO1xyXG5jb25zdCB7Z2V0Q291bnRlciB9ID0gcmVxdWlyZSgnLi91dGlsL2hlbHBlcicpO1xyXG5jb25zdCBQUkVGSVggPSByZXF1aXJlKCcuL2NvbnN0L2Fycm93X2xpbmVfcHJlZml4Jyk7XHJcblxyXG5jb25zdCBNQVJLRVJfSURfUFJFRklYID0gYCR7UFJFRklYfS1NQVJLRVItYDtcclxuY29uc3QgbmV4dE1hcmtlcklkID0gZ2V0Q291bnRlcigpO1xyXG5jb25zdCBtYXJrZXJDYWNoZSA9IG5ldyBNYXAoKTtcclxuXHJcbmZ1bmN0aW9uIGdldE1hcmtlck9wdGlvbnNBbmRLZXkob3B0aW9ucyl7XHJcbiAgY29uc3QgbWFya2VyVHlwZSA9IGdldChvcHRpb25zLCAnZW5kcG9pbnQudHlwZScpO1xyXG4gIGNvbnN0IGZpbGxDb2xvciA9IGdldChvcHRpb25zLCAnZW5kcG9pbnQuZmlsbENvbG9yJyk7XHJcbiAgY29uc3Qgc2l6ZSA9IGdldChvcHRpb25zLCAnZW5kcG9pbnQuc2l6ZScpO1xyXG4gIGNvbnN0IG9wdHMgPSB7IHR5cGU6IG1hcmtlclR5cGUsIGNvbG9yOiBvcHRpb25zLmNvbG9yLCBmaWxsQ29sb3IsIHNpemUgfTtcclxuICByZXR1cm4geyBrZXk6IGAke29wdGlvbnMuY29sb3J9LSR7bWFya2VyVHlwZX0tJHtmaWxsQ29sb3J9LSR7c2l6ZX1gLCBvcHRpb25zOiBvcHRzIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWFya2VyKHN2ZywgYmFzZU9wdHMpIHtcclxuICBjb25zdCB7IGtleSwgb3B0aW9ucyB9ID0gZ2V0TWFya2VyT3B0aW9uc0FuZEtleShiYXNlT3B0cyk7XHJcbiAgaWYgKCFtYXJrZXJDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgY29uc3QgbWFya2VySWQgPSBgJHtNQVJLRVJfSURfUFJFRklYfSR7bmV4dE1hcmtlcklkKCl9YDtcclxuICAgIHN2Zy5jcmVhdGVNYXJrZXIobWFya2VySWQsIG9wdGlvbnMpO1xyXG4gICAgbWFya2VyQ2FjaGUuc2V0KGtleSwgbWFya2VySWQpO1xyXG4gICAgcmV0dXJuIG1hcmtlcklkO1xyXG4gIH1cclxuICByZXR1cm4gbWFya2VyQ2FjaGUuZ2V0KGtleSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRNYXJrZXJPcHRpb25zKHR5cGUsIHVybCl7XHJcbiAgY29uc3Qgb3B0cyA9IHtcIm1hcmtlci1lbmRcIjogdXJsfTtcclxuICBpZiAoKHR5cGUgPT0gRW5kcG9pbnRUeXBlLnNxdWFyZXMpIHx8ICh0eXBlID09IEVuZHBvaW50VHlwZS5jaXJjbGVzKSkge1xyXG4gICAgb3B0c1snbWFya2VyLXN0YXJ0J10gPSB1cmw7XHJcbiAgfVxyXG4gIHJldHVybiBvcHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VyRGVmaW5lZE1hcmtlck9wdGlvbnMocG9zaXRpb24sIHVybCl7XHJcbiAgY29uc3Qgb3B0cyA9IHt9O1xyXG4gIGlmIChbRW5kcG9pbnRQb3NpdGlvbi5TVEFSVCwgRW5kcG9pbnRQb3NpdGlvbi5CT1RIXS5pbmNsdWRlcyhwb3NpdGlvbikpe1xyXG4gICAgb3B0c1snbWFya2VyLXN0YXJ0J10gPSB1cmw7XHJcbiAgfVxyXG4gIGlmIChbRW5kcG9pbnRQb3NpdGlvbi5FTkQsIEVuZHBvaW50UG9zaXRpb24uQk9USF0uaW5jbHVkZXMocG9zaXRpb24pKSB7XHJcbiAgICBvcHRzWydtYXJrZXItZW5kJ10gPSB1cmw7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrZXJPcHRpb25zKHN2Zywgb3B0aW9ucyl7XHJcbiAgY29uc3QgZW5kcG9pbnRUeXBlID0gZ2V0KG9wdGlvbnMsICdlbmRwb2ludC50eXBlJyk7XHJcbiAgaWYgKGVuZHBvaW50VHlwZSA9PSBFbmRwb2ludFR5cGUubm9uZSkge1xyXG4gICAgcmV0dXJuIHt9XHJcbiAgfVxyXG4gIGxldCBtYXJrZXJJZCA9IGdldChvcHRpb25zLCAnZW5kcG9pbnQubWFya2VySWRlbnRpZmllcicpO1xyXG4gIGlmICghbWFya2VySWQpIHtcclxuICAgIG1hcmtlcklkID0gZ2V0TWFya2VyKHN2Zywgb3B0aW9ucyk7XHJcbiAgfVxyXG4gIGNvbnN0IHVybCA9IGB1cmwoIyR7bWFya2VySWR9KWA7XHJcbiAgY29uc3QgcG9zaXRpb24gPSBnZXQob3B0aW9ucywgJ2VuZHBvaW50LnBvc2l0aW9uJyk7XHJcbiAgcmV0dXJuIHBvc2l0aW9uID8gdXNlckRlZmluZWRNYXJrZXJPcHRpb25zKHBvc2l0aW9uLCB1cmwpIDogZGVmYXVsdE1hcmtlck9wdGlvbnMoZW5kcG9pbnRUeXBlLCB1cmwpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1hcmtlck9wdGlvbnM7IiwiY29uc3QgeyBIT1JJWk9OVEFMIH0gPSByZXF1aXJlKCcuL2NvbnN0L2RpcmVjdGlvbnMnKTtcclxuXHJcbmZ1bmN0aW9uIGdldFBpdm90cyhwb2ludDEsIHBvaW50MiwgY3VydmF0dXJlLCBkaXJlY3Rpb24pIHtcclxuICBjb25zdCBkaW1lbnNpb24gPSAoZGlyZWN0aW9uID09IEhPUklaT05UQUwpID8gJ3gnIDogJ3knO1xyXG4gIGNvbnN0IGFtb3VudCA9IChwb2ludDJbZGltZW5zaW9uXSAtIHBvaW50MVtkaW1lbnNpb25dKSAqIGN1cnZhdHVyZTtcclxuXHJcbiAgcmV0dXJuIFtcclxuICAgIHBvaW50MS50cmFuc2xhdGUoe1tkaW1lbnNpb25dOiBhbW91bnR9KSxcclxuICAgIHBvaW50Mi50cmFuc2xhdGUoe1tkaW1lbnNpb25dOiAtYW1vdW50fSlcclxuICBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRoRGVmaW5pdGlvbihwb2ludDEsIHBvaW50Miwgb3B0aW9ucyl7XHJcbiAgY29uc3QgcGF0aEVsZW1lbnRzID0gWydNJywgcG9pbnQxLnN0cigpXTtcclxuICBpZiAob3B0aW9ucy5jdXJ2YXR1cmUgIT0wKSB7XHJcbiAgICBjb25zdCBwaXZvdHMgPSBvcHRpb25zLmN1cnZhdHVyZSA/XHJcbiAgICAgICAgZ2V0UGl2b3RzKHBvaW50MSwgcG9pbnQyLCBvcHRpb25zLmN1cnZhdHVyZSwgb3B0aW9ucy5kaXJlY3Rpb24pIDpcclxuICAgICAgICBbcG9pbnQxLnRyYW5zbGF0ZShvcHRpb25zLnBpdm90c1swXSksIHBvaW50Mi50cmFuc2xhdGUob3B0aW9ucy5waXZvdHNbMV0pXTtcclxuICAgIHBhdGhFbGVtZW50cy5wdXNoKCdDJyk7XHJcbiAgICBwYXRoRWxlbWVudHMucHVzaCguLi5waXZvdHMubWFwKHAgPT4gcC5zdHIoKSkpO1xyXG4gIH1cclxuICBwYXRoRWxlbWVudHMucHVzaChwb2ludDIuc3RyKCkpO1xyXG4gIHJldHVybiBwYXRoRWxlbWVudHMuam9pbignICcpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhEZWZpbml0aW9uOyIsImNvbnN0IHtkcmF3TWFya2VyLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTdmdFbGVtZW50IH0gPSByZXF1aXJlKCcuL3N2Z191dGlscycpO1xyXG5jb25zdCBQUkVGSVggPSByZXF1aXJlKCcuLy4uL2NvbnN0L2Fycm93X2xpbmVfcHJlZml4Jyk7XHJcblxyXG5jbGFzcyBTdmdDYW52YXMge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudENhbnZhcyl7XHJcbiAgICB0aGlzLnBhcmVudENhbnZhcyA9IHBhcmVudENhbnZhcztcclxuICB9XHJcblxyXG4gIGNyZWF0ZU1hcmtlcihpZCwgb3B0aW9ucykge1xyXG4gICAgY29uc3Qge3R5cGUsIGNvbG9yLCBmaWxsQ29sb3IsIHNpemV9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IHNpemVWYWx1ZSA9IFN0cmluZyhzaXplKjEwKTtcclxuICAgIGNvbnN0IG1hcmtlciA9IGNyZWF0ZUVsZW1lbnQoJ21hcmtlcicsIHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgICBtYXJrZXJVbml0czogJ3N0cm9rZVdpZHRoJyxcclxuICAgICAgdmlld0JveDogJy0xIC0xIDEyIDEyJyxcclxuICAgICAgc3Ryb2tlOiBjb2xvcixcclxuICAgICAgZmlsbDogZmlsbENvbG9yLFxyXG4gICAgICBvcmllbnQ6ICdhdXRvJyxcclxuICAgICAgbWFya2VyV2lkdGg6IHNpemVWYWx1ZSxcclxuICAgICAgbWFya2VySGVpZ2h0OiBzaXplVmFsdWVcclxuICAgIH0pO1xyXG4gICAgZHJhd01hcmtlclt0eXBlXShtYXJrZXIpO1xyXG4gICAgdGhpcy5kZWZpbml0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChtYXJrZXIpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUGF0aCgpIHtcclxuICAgIGNvbnN0IHBhdGggPSBjcmVhdGVTdmdFbGVtZW50KCdwYXRoJyk7XHJcbiAgICB0aGlzLnBhcmVudENhbnZhcy5hcHBlbmRDaGlsZChwYXRoKTtcclxuICAgIHJldHVybiBwYXRoO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmluaXRpb25FbGVtZW50KCkge1xyXG4gICAgaWYgKCF0aGlzLl9kZWZzKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nRGVmcyA9IHRoaXMucGFyZW50Q2FudmFzLnF1ZXJ5U2VsZWN0b3IoJ2RlZnMnKTtcclxuICAgICAgaWYgKGV4aXN0aW5nRGVmcykge1xyXG4gICAgICAgIHRoaXMuX2RlZnMgPSBleGlzdGluZ0RlZnNcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBkZWZpbml0aW9uc0VsZW1lbnQgPSBjcmVhdGVTdmdFbGVtZW50KCdkZWZzJyk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRDYW52YXMuYXBwZW5kQ2hpbGQoZGVmaW5pdGlvbnNFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl9kZWZzID0gZGVmaW5pdGlvbnNFbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmcztcclxuICB9XHJcbn1cclxuXHJcblN2Z0NhbnZhcy5kZWZhdWx0U3ZnRWxlbWVudCA9IGZ1bmN0aW9uKCl7XHJcbiAgaWYgKCF0aGlzLl9kZWZhdWx0RWwpIHtcclxuICAgIGNvbnN0IGlkID0gYCR7UFJFRklYfS1zdmctY2FudmFzYDtcclxuICAgIHRoaXMuX2RlZmF1bHRFbCA9IGNyZWF0ZUVsZW1lbnQoJ3N2ZycsIHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgICBzdHlsZTogJ3Bvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7bGVmdDowcHg7cG9pbnRlci1ldmVudHM6IG5vbmU7JyxcclxuICAgICAgd2lkdGg6IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsXHJcbiAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9kZWZhdWx0RWwpO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5fZGVmYXVsdEVsO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdmdDYW52YXM7IiwiY29uc3QgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJyk7XHJcbmNvbnN0IEVuZHBvaW50VHlwZSA9IHJlcXVpcmUoJy4vLi4vY29uc3QvZW5kcG9pbnRfdHlwZScpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3ZnRWxlbWVudCh0YWcpe1xyXG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB0YWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpIHtcclxuICBjb25zdCBlbCA9IGNyZWF0ZVN2Z0VsZW1lbnQodHlwZSk7XHJcbiAgZm9yIChsZXQgYXR0ciBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1thdHRyXSk7XHJcbiAgfVxyXG4gIHJldHVybiBlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya2VyRmFjdG9yeShyZWZYLCByZWZZLCBzaGFwZUdlbikge1xyXG4gIHJldHVybiBmdW5jdGlvbiAobWFya2VyKSB7XHJcbiAgICBtYXJrZXIuc2V0QXR0cmlidXRlKCdyZWZYJywgcmVmWCk7XHJcbiAgICBtYXJrZXIuc2V0QXR0cmlidXRlKCdyZWZZJywgcmVmWSk7XHJcbiAgICBjb25zdCBzaGFwZSA9IGlzRnVuY3Rpb24oc2hhcGVHZW4pID8gc2hhcGVHZW4obWFya2VyKSA6IHNoYXBlR2VuO1xyXG4gICAgbWFya2VyLmFwcGVuZENoaWxkKHNoYXBlKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRyYXdNYXJrZXIgPSB7XHJcbiAgW0VuZHBvaW50VHlwZS5hcnJvd0hlYWRGaWxsZWRdOiBtYXJrZXJGYWN0b3J5KDEwLCA1LCBjcmVhdGVFbGVtZW50KCdwb2x5Z29uJywge3BvaW50czogJzAsMCAxMCw1IDAsMTAnfSkpLFxyXG4gIFtFbmRwb2ludFR5cGUuY2lyY2xlc106IG1hcmtlckZhY3RvcnkoNSwgNSwgY3JlYXRlRWxlbWVudCgnY2lyY2xlJywge3I6IDQsIGN4OiA1LCBjeTogNX0pKSxcclxuICBbRW5kcG9pbnRUeXBlLnNxdWFyZXNdOiBtYXJrZXJGYWN0b3J5KDUsIDUsIGNyZWF0ZUVsZW1lbnQoJ3JlY3QnLCB7d2lkdGg6IDEwLCBoZWlnaHQ6IDEwfSkpLFxyXG4gIFtFbmRwb2ludFR5cGUuYXJyb3dIZWFkXTogbWFya2VyRmFjdG9yeSgxMCwgNSwgZnVuY3Rpb24gKG1hcmtlcikge1xyXG4gICAgbWFya2VyLnNldEF0dHJpYnV0ZSgnZmlsbC1vcGFjaXR5JywgJzAnKTtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdwb2x5bGluZScsIHtwb2ludHM6ICcwLDAgMTAsNSAwLDEwJ30pXHJcbiAgfSlcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGRyYXdNYXJrZXIsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVN2Z0VsZW1lbnRcclxufSIsImNsYXNzIEFyZ3VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSl7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCl7XHJcbiAgICByZXR1cm4gYEFyZ3VtZW50RXJyb3I6ICR7dGhpcy5tZXNzYWdlfWA7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQXJndW1lbnRFcnJvcjtcclxuXHJcbiIsImNvbnN0IEFyZ3VtZW50RXJyb3IgPSByZXF1aXJlKCcuL2FyZ3VtZW50X2Vycm9yJyk7XHJcbmNvbnN0IGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpO1xyXG5cclxuY29uc3QgdGhyb3dBcmd1bWVudEVycm9yID0gZnVuY3Rpb24oYXJnKXtcclxuICBpZiAoaXNGdW5jdGlvbihhcmcpKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGFyZy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgICB0aHJvdyBuZXcgQXJndW1lbnRFcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRocm93IG5ldyBBcmd1bWVudEVycm9yKGFyZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufTtcclxuY29uc3QgRXJyb3JzID0ge1xyXG4gIGV4YWN0bHlPbmVBcmd1bWVudDogdGhyb3dBcmd1bWVudEVycm9yKGBFeGFjdGx5IG9uZSBhcmd1bWVudCBleHBlY3RlZGApLFxyXG4gIGFyZ3VtZW50TXVzdEJlT2JqZWN0OiB0aHJvd0FyZ3VtZW50RXJyb3IoYEFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0YCksXHJcbiAgc3ZnUGFyZW50Tm90QWxsb3dlZEluVXBkYXRlOiB0aHJvd0FyZ3VtZW50RXJyb3IoJ3N2Z1BhcmVudFNlbGVjdG9yIGlzIG5vdCBhbGxvd2VkIGluIHVwZGF0ZScpLFxyXG4gIGNvdWxkTm90RmluZFNlbGVjdG9yOiB0aHJvd0FyZ3VtZW50RXJyb3IoKHBhcmFtKSA9PiBgQ291bGQgbm90IGZpbmQgZWxlbWVudCB3aXRoIHNlbGVjdG9yIC0gJyR7cGFyYW19J2ApLFxyXG4gIHNvdXJjZUFuZERlc3RpbmF0aW9uRm9ybWF0OiB0aHJvd0FyZ3VtZW50RXJyb3IoJ3NvdXJjZSBhbmQgZGVzdGluYXRpb24gc2hvdWxkIGJlIGVpdGhlciBxdWVyeVNlbGVjdG9yIHN0cmluZ3Mgb3IgY29vcmRpbmF0ZSBwYWlycyAoe3g6IC4uICx5OiB9KScpLFxyXG4gIHNpbmdsZUFyZ3VtZW50T2JqZWN0OiB0aHJvd0FyZ3VtZW50RXJyb3IoYFNpbmdsZSBhcmd1bWVudCBzaG91bGQgYWx3YXlzIGJlIGFuIG9iamVjdGApLFxyXG4gIG1pc3NpbmdTb3VyY2U6IHRocm93QXJndW1lbnRFcnJvcihgTWlzc2luZyBzb3VyY2Ugb3B0aW9uYCksXHJcbiAgbWlzc2luZ0Rlc3RpbmF0aW9uOiB0aHJvd0FyZ3VtZW50RXJyb3IoYE1pc3NpbmcgZGVzdGluYXRpb24gb3B0aW9uYCksXHJcbiAgbGFzdEFyZ3VtZW50T2JqZWN0OiB0aHJvd0FyZ3VtZW50RXJyb3IoJ0xhc3QgYXJndW1lbnQgc2hvdWxkIGFsd2F5cyBiZSBhbiBvYmplY3QnKSxcclxuICBtYXhpbXVtVGhyZWVBcmd1bWVudHM6IHRocm93QXJndW1lbnRFcnJvcignRnVuY3Rpb24gZG9lcyBub3QgYWNjZXB0IG1vcmUgdGhhbiB0aHJlZSBhcmd1bWVudHMnKSxcclxuICBkb3VibGVTb3VyY2U6IHRocm93QXJndW1lbnRFcnJvcignU291cmNlIHNwZWNpZmllZCB0d2ljZSAoYXMgZmlyc3QgYXJndW1lbnQsIGFuZCBpbiBvcHRpb25zJyksXHJcbiAgZG91YmxlRGVzdGluYXRpb246IHRocm93QXJndW1lbnRFcnJvcignRGVzdGluYXRpb24gc3BlY2lmaWVkIHR3aWNlIChhcyBzZWNvbmQgYXJndW1lbnQsIGFuZCBpbiBvcHRpb25zKScpLFxyXG4gIGF0TGVhc3RPbmVBcmd1bWVudDogdGhyb3dBcmd1bWVudEVycm9yKGBBdCBsZWFzdCBvbmUgYXJndW1lbnQgZXhwZWN0ZWRgKSxcclxuICBtdXN0QmVTdHJpbmc6IHRocm93QXJndW1lbnRFcnJvcihwYXJhbSA9PiBgJHtwYXJhbX0gbXVzdCBiZSBhIHN0cmluZ2ApLFxyXG4gIG11c3RCZU51bWJlcjogdGhyb3dBcmd1bWVudEVycm9yKHBhcmFtID0+IGAke3BhcmFtfSBtdXN0IGJlIGEgbnVtYmVyYCksXHJcbiAgbXVzdEJlUG9zaXRpdmVOdW1iZXI6IHRocm93QXJndW1lbnRFcnJvcihwYXJhbSA9PiBgJHtwYXJhbX0gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcmApLFxyXG4gIG11c3RCZU5vblplcm9OdW1iZXI6IHRocm93QXJndW1lbnRFcnJvcihwYXJhbSA9PiBgJHtwYXJhbX0gbXVzdCBiZSBhIG51bWJlciBkaWZmZXJlbnQgdGhhbiAwYCksXHJcbiAgcG9zaXRpb25XaXRoQ29vcmRzOiB0aHJvd0FyZ3VtZW50RXJyb3Ioc291cmNlT3JEZXN0ID0+IGAke3NvdXJjZU9yRGVzdH1Qb3NpdGlvbiB1bmF2YWlsYWJsZSB3aGVuIHVzaW5nIGNvb3JkaW5hdGVzIGFzICR7c291cmNlT3JEZXN0fWApLFxyXG4gIHZhbEluRW51bTogdGhyb3dBcmd1bWVudEVycm9yKCh2YWwsYXJyLCBsYWJlbHMpID0+IGAnJHt2YWx9JyBpcyBub3QgYSB2YWxpZCAke2xhYmVsc1swXX0gLSBhdmFpbGFibGUgJHtsYWJlbHNbMV19IGFyZTogJHthcnIuam9pbignLCAnKX1gKSxcclxuICBwaXZvdHNGb3JtYXQ6IHRocm93QXJndW1lbnRFcnJvcihgJ3Bpdm90cycgbXVzdCBiZSBhbiBhcnJheSBvZiB0d28gY29vcmRpbmF0ZXMge3g6IG51bWJlciAsIHk6IG51bWJlcn1gKSxcclxuICBwaXZvdHNBbmRDdXJ2YXR1cmU6IHRocm93QXJndW1lbnRFcnJvcihcIidjdXJ2YXR1cmUnIG9wdGlvbiBpcyBub3QgYWxsb3dlZCB3aGVuIHVzaW5nIGV4cGxpY2l0IHBpdm90c1wiKSxcclxuICBtaXNzaW5nTWFya2VySWRlbnQ6IHRocm93QXJndW1lbnRFcnJvcihcIkN1c3RvbSBtYXJrZXIgdHlwZSBpcyBtaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5ICdlbmRwb2ludC5tYXJrZXJJZGVudGlmaWVyJ1wiKSxcclxuICBtYXJrZXJJZGVudE9ubHlDdXN0b206IHRocm93QXJndW1lbnRFcnJvcihcInByb3BlcnR5ICdlbmRwb2ludC5tYXJrZXJJZGVudGlmaWVyJyBhbGxvd2VkIG9ubHkgd2l0aCBjdXN0b20gZW5kcG9pbnQudHlwZVwiKSxcclxuICBtYXJrZXJDdXN0b21pemF0aW9uVW5hdmFpbGFibGU6IHRocm93QXJndW1lbnRFcnJvcihwcm9wID0+IGBNYXJrZXIgY3VzdG9taXphdGlvbiBwcm9wZXJ0eSAnJHtwcm9wfScgbm90IGF2YWlsYWJsZSB3aGVuIHByb3ZpZGluZyBjdXN0b20gbWFya2VyYCksXHJcbiAgdW5yZWNvZ25pemVkT3B0aW9uOiB0aHJvd0FyZ3VtZW50RXJyb3IocHJvcCA9PiBgVW5yZWNvZ25pemVkIG9wdGlvbiAnJHtwcm9wfSdgKSxcclxuICB1bnJlY29nbml6ZWRFbmRwb2ludE9wdGlvbjogdGhyb3dBcmd1bWVudEVycm9yKHByb3AgPT4gYFVucmVjb2duaXplZCBlbmRwb2ludCBvcHRpb24gJyR7cHJvcH0nYClcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRXJyb3JzOyIsImZ1bmN0aW9uIGdldENvdW50ZXIoKXtcclxuICBsZXQgY250ID0gMDtcclxuICByZXR1cm4gKCgpID0+IGNudCsrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV2ZXJzZUlmKGFyciwgYm9vbCkge1xyXG4gIGlmIChib29sKSB7XHJcbiAgICByZXR1cm4gYXJyLnJldmVyc2UoKTtcclxuICB9XHJcbiAgcmV0dXJuIGFycjtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IGdldENvdW50ZXIsIHJldmVyc2VJZiB9OyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcclxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXHJcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxyXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcclxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcclxuICB2YXIgaW5kZXggPSAtMSxcclxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xyXG5cclxuICB0aGlzLmNsZWFyKCk7XHJcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xyXG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cclxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XHJcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XHJcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XHJcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XHJcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XHJcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXHJcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcclxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxyXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXHJcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xyXG4gIHZhciBpbmRleCA9IC0xLFxyXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XHJcblxyXG4gIHRoaXMuY2xlYXIoKTtcclxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XHJcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXHJcbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcclxuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XHJcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xyXG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcclxuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcclxuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxyXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcclxuXHJcbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cclxudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcclxuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXHJcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXHJcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXHJcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXHJcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XHJcbiAgdmFyIGluZGV4ID0gLTEsXHJcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcclxuXHJcbiAgdGhpcy5jbGVhcigpO1xyXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcclxuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxyXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xyXG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XHJcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcclxuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xyXG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xyXG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcclxuXHJcbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xyXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcclxuIiwiLyoqXHJcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxyXG4gKiBzaG9ydGhhbmRzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xyXG4gIHZhciBpbmRleCA9IC0xLFxyXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcclxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcclxuXHJcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XHJcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxyXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xyXG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xyXG4gICAgICByZXR1cm4gbGVuZ3RoO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gLTE7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xyXG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxyXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxyXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxyXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xyXG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xyXG5cclxuICB2YXIgaW5kZXggPSAwLFxyXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcclxuXHJcbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xyXG4gIH1cclxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcclxuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxyXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXHJcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XHJcblxyXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXHJcbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxyXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XHJcblxyXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cclxudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxyXG4gKi9cclxuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XHJcbiAgfVxyXG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcclxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxyXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcclxuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcclxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcclxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxyXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xyXG5cclxuLyoqXHJcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcclxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXHJcbiAqL1xyXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xyXG5cclxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xyXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcclxuXHJcbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cclxudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcclxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcclxuXHJcbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cclxudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcclxuXHJcbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xyXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcclxuXHJcbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXHJcbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXHJcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcclxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcclxuICogIGVsc2UgYGZhbHNlYC5cclxuICovXHJcbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xyXG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcclxuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xyXG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXHJcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXHJcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXHJcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcclxuXHJcbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xyXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcclxuXHJcbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xyXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxyXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxyXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cclxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XHJcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cclxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xyXG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cclxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xyXG4gIH1cclxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xyXG4gIH1cclxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xyXG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XHJcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXHJcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXHJcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcclxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xyXG5cclxuLyoqXHJcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cclxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XHJcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcclxuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XHJcblxyXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXHJcbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XHJcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXHJcbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcclxuIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXHJcbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cclxuICovXHJcbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcclxuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcclxuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcclxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXHJcbiAgICA6IGRhdGEubWFwO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XHJcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcclxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxyXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcclxuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XHJcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XHJcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcclxuXHJcbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cclxudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcclxuXHJcbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xyXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcclxuXHJcbi8qKlxyXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXHJcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxyXG4gKiBvZiB2YWx1ZXMuXHJcbiAqL1xyXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcclxuXHJcbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xyXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XHJcblxyXG4vKipcclxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XHJcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxyXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XHJcblxyXG4gIHRyeSB7XHJcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XHJcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xyXG4gIH0gY2F0Y2ggKGUpIHt9XHJcblxyXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcclxuICBpZiAodW5tYXNrZWQpIHtcclxuICAgIGlmIChpc093bikge1xyXG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcclxuIiwiLyoqXHJcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXHJcbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XHJcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XHJcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbmFtZSBjbGVhclxyXG4gKiBAbWVtYmVyT2YgSGFzaFxyXG4gKi9cclxuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xyXG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcclxuICB0aGlzLnNpemUgPSAwO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcclxuIiwiLyoqXHJcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbmFtZSBkZWxldGVcclxuICogQG1lbWJlck9mIEhhc2hcclxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxyXG4gKi9cclxuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcclxuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xyXG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XHJcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcclxuXHJcbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cclxudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xyXG5cclxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xyXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xyXG5cclxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXHJcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xyXG5cclxuLyoqXHJcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbmFtZSBnZXRcclxuICogQG1lbWJlck9mIEhhc2hcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXHJcbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XHJcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xyXG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcclxuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XHJcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcclxuICB9XHJcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xyXG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XHJcblxyXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXHJcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XHJcblxyXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cclxudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbmFtZSBoYXNcclxuICogQG1lbWJlck9mIEhhc2hcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cclxuICovXHJcbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XHJcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xyXG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XHJcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcclxuXHJcbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cclxudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQG5hbWUgc2V0XHJcbiAqIEBtZW1iZXJPZiBIYXNoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcclxuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XHJcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcclxuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xyXG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxyXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XHJcblxyXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXHJcbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxyXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xyXG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XHJcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxyXG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcclxuIiwiLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XHJcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcclxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcclxuICAgIDogKHZhbHVlID09PSBudWxsKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XHJcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xyXG5cclxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cclxudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcclxuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xyXG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XHJcbiIsIi8qKlxyXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbmFtZSBjbGVhclxyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXHJcbiAqL1xyXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcclxuICB0aGlzLl9fZGF0YV9fID0gW107XHJcbiAgdGhpcy5zaXplID0gMDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcclxuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xyXG5cclxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xyXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcclxuXHJcbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xyXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBuYW1lIGRlbGV0ZVxyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XHJcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxyXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xyXG5cclxuICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XHJcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xyXG4gICAgZGF0YS5wb3AoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xyXG4gIH1cclxuICAtLXRoaXMuc2l6ZTtcclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XHJcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQG5hbWUgZ2V0XHJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXHJcbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcclxuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXHJcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XHJcblxyXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XHJcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBuYW1lIGhhc1xyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XHJcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xyXG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbmFtZSBzZXRcclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxyXG4gKi9cclxuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcclxuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXHJcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XHJcblxyXG4gIGlmIChpbmRleCA8IDApIHtcclxuICAgICsrdGhpcy5zaXplO1xyXG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcclxuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXHJcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcclxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQG5hbWUgY2xlYXJcclxuICogQG1lbWJlck9mIE1hcENhY2hlXHJcbiAqL1xyXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xyXG4gIHRoaXMuc2l6ZSA9IDA7XHJcbiAgdGhpcy5fX2RhdGFfXyA9IHtcclxuICAgICdoYXNoJzogbmV3IEhhc2gsXHJcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcclxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcclxuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQG5hbWUgZGVsZXRlXHJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxyXG4gKi9cclxuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XHJcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcclxuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcclxuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XHJcblxyXG4vKipcclxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQG5hbWUgZ2V0XHJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cclxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XHJcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcclxuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBuYW1lIGhhc1xyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcclxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cclxuICovXHJcbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xyXG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XHJcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAbmFtZSBzZXRcclxuICogQG1lbWJlck9mIE1hcENhY2hlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cclxuICovXHJcbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcclxuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcclxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcclxuXHJcbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XHJcbiIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XHJcblxyXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXHJcbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xyXG5cclxuLyoqXHJcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcclxuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xyXG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xyXG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcclxuICAgICAgY2FjaGUuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBrZXk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XHJcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcclxuXHJcbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cclxudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xyXG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXHJcbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XHJcblxyXG4vKipcclxuICogVXNlZCB0byByZXNvbHZlIHRoZVxyXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcclxuICogb2YgdmFsdWVzLlxyXG4gKi9cclxudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xyXG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcclxuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XHJcblxyXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xyXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcclxuXHJcbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xyXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcclxuIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XHJcblxyXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXHJcbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xyXG5cclxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXHJcbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXHJcbiAqL1xyXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcclxuICB2YXIgcmVzdWx0ID0gW107XHJcbiAgaWYgKHN0cmluZy5jaGFyQ29kZUF0KDApID09PSA0NiAvKiAuICovKSB7XHJcbiAgICByZXN1bHQucHVzaCgnJyk7XHJcbiAgfVxyXG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcclxuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcclxuICB9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xyXG4iLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XHJcblxyXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cclxudmFyIElORklOSVRZID0gMSAvIDA7XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxyXG4gKi9cclxuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xyXG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcclxuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xyXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xyXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xyXG4gIGlmIChmdW5jICE9IG51bGwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG4gIH1cclxuICByZXR1cm4gJyc7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XHJcbiIsIi8qKlxyXG4gKiBQZXJmb3JtcyBhXHJcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXHJcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSA0LjAuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxyXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcclxuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcclxuICpcclxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XHJcbiAqIC8vID0+IHRydWVcclxuICpcclxuICogXy5lcShvYmplY3QsIG90aGVyKTtcclxuICogLy8gPT4gZmFsc2VcclxuICpcclxuICogXy5lcSgnYScsICdhJyk7XHJcbiAqIC8vID0+IHRydWVcclxuICpcclxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcclxuICogLy8gPT4gZmFsc2VcclxuICpcclxuICogXy5lcShOYU4sIE5hTik7XHJcbiAqIC8vID0+IHRydWVcclxuICovXHJcbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xyXG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xyXG4iLCIvKipcclxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxyXG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJub2RlXCIgaW5jbHVkZT1cImdldCxpc1N0cmluZyxpc09iamVjdCxpc051bWJlcixpc1VuZGVmaW5lZCxpc0Z1bmN0aW9uXCJgXHJcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanMuZm91bmRhdGlvbi8+XHJcbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cclxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cclxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXHJcbiAqL1xyXG52YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xyXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAc2luY2UgMy43LjBcclxuICogQGNhdGVnb3J5IE9iamVjdFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXHJcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXHJcbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXHJcbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcclxuICpcclxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcclxuICogLy8gPT4gM1xyXG4gKlxyXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcclxuICogLy8gPT4gM1xyXG4gKlxyXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XHJcbiAqIC8vID0+ICdkZWZhdWx0J1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xyXG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XHJcbiIsIi8qKlxyXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XHJcbiAqIC8vID0+IHRydWVcclxuICpcclxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKlxyXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKlxyXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcclxuICogLy8gPT4gZmFsc2VcclxuICovXHJcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcclxuIiwiLyoqXHJcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cclxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibm9kZVwiIGluY2x1ZGU9XCJnZXQsaXNTdHJpbmcsaXNPYmplY3QsaXNOdW1iZXIsaXNVbmRlZmluZWQsaXNGdW5jdGlvblwiYFxyXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxyXG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XHJcbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XHJcbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xyXG4gKi9cclxudmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXHJcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcclxuXHJcbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cclxudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxyXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXHJcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxyXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAc2luY2UgMC4xLjBcclxuICogQGNhdGVnb3J5IExhbmdcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogXy5pc0Z1bmN0aW9uKF8pO1xyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XHJcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXHJcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXHJcbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xyXG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcclxuIiwiLyoqXHJcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cclxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibm9kZVwiIGluY2x1ZGU9XCJnZXQsaXNTdHJpbmcsaXNPYmplY3QsaXNOdW1iZXIsaXNVbmRlZmluZWQsaXNGdW5jdGlvblwiYFxyXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxyXG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XHJcbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XHJcbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xyXG4gKi9cclxudmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXHJcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xyXG5cclxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xyXG52YXIgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXSc7XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBOdW1iZXJgIHByaW1pdGl2ZSBvciBvYmplY3QuXHJcbiAqXHJcbiAqICoqTm90ZToqKiBUbyBleGNsdWRlIGBJbmZpbml0eWAsIGAtSW5maW5pdHlgLCBhbmQgYE5hTmAsIHdoaWNoIGFyZVxyXG4gKiBjbGFzc2lmaWVkIGFzIG51bWJlcnMsIHVzZSB0aGUgYF8uaXNGaW5pdGVgIG1ldGhvZC5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAc2luY2UgMC4xLjBcclxuICogQGNhdGVnb3J5IExhbmdcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIF8uaXNOdW1iZXIoMyk7XHJcbiAqIC8vID0+IHRydWVcclxuICpcclxuICogXy5pc051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBfLmlzTnVtYmVyKEluZmluaXR5KTtcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBfLmlzTnVtYmVyKCczJyk7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHxcclxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IG51bWJlclRhZyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaXNOdW1iZXI7XHJcbiIsIi8qKlxyXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XHJcbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5vZGVcIiBpbmNsdWRlPVwiZ2V0LGlzU3RyaW5nLGlzT2JqZWN0LGlzTnVtYmVyLGlzVW5kZWZpbmVkLGlzRnVuY3Rpb25cImBcclxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcy5mb3VuZGF0aW9uLz5cclxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxyXG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxyXG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcclxuICovXHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXHJcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcclxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIF8uaXNPYmplY3Qoe30pO1xyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XHJcbiAqIC8vID0+IHRydWVcclxuICpcclxuICogXy5pc09iamVjdChudWxsKTtcclxuICogLy8gPT4gZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcclxuIiwiLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxyXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXHJcbiAqXHJcbiAqIEBzdGF0aWNcclxuICogQG1lbWJlck9mIF9cclxuICogQHNpbmNlIDQuMC4wXHJcbiAqIEBjYXRlZ29yeSBMYW5nXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XHJcbiAqIC8vID0+IHRydWVcclxuICpcclxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcclxuICogLy8gPT4gdHJ1ZVxyXG4gKlxyXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKlxyXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcclxuICogLy8gPT4gZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JztcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XHJcbiIsIi8qKlxyXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XHJcbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5vZGVcIiBpbmNsdWRlPVwiZ2V0LGlzU3RyaW5nLGlzT2JqZWN0LGlzTnVtYmVyLGlzVW5kZWZpbmVkLGlzRnVuY3Rpb25cImBcclxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcy5mb3VuZGF0aW9uLz5cclxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxyXG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxyXG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcclxuICovXHJcbnZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxyXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxyXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcclxuXHJcbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cclxudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcsIGVsc2UgYGZhbHNlYC5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogXy5pc1N0cmluZygnYWJjJyk7XHJcbiAqIC8vID0+IHRydWVcclxuICpcclxuICogXy5pc1N0cmluZygxKTtcclxuICogLy8gPT4gZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxyXG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN0cmluZ1RhZyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XHJcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxyXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcclxuXHJcbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cclxudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSA0LjAuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xyXG4gKiAvLyA9PiBmYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XHJcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xyXG4iLCIvKipcclxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxyXG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJub2RlXCIgaW5jbHVkZT1cImdldCxpc1N0cmluZyxpc09iamVjdCxpc051bWJlcixpc1VuZGVmaW5lZCxpc0Z1bmN0aW9uXCJgXHJcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanMuZm91bmRhdGlvbi8+XHJcbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cclxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cclxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBzaW5jZSAwLjEuMFxyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAsIGVsc2UgYGZhbHNlYC5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogXy5pc1VuZGVmaW5lZCh2b2lkIDApO1xyXG4gKiAvLyA9PiB0cnVlXHJcbiAqXHJcbiAqIF8uaXNVbmRlZmluZWQobnVsbCk7XHJcbiAqIC8vID0+IGZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5kZWZpbmVkO1xyXG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xyXG5cclxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xyXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXHJcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcclxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XHJcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXHJcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXHJcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxyXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxyXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxyXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cclxuICpcclxuICogQHN0YXRpY1xyXG4gKiBAbWVtYmVyT2YgX1xyXG4gKiBAc2luY2UgMC4xLjBcclxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cclxuICogQGV4YW1wbGVcclxuICpcclxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcclxuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xyXG4gKlxyXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcclxuICogdmFsdWVzKG9iamVjdCk7XHJcbiAqIC8vID0+IFsxLCAyXVxyXG4gKlxyXG4gKiB2YWx1ZXMob3RoZXIpO1xyXG4gKiAvLyA9PiBbMywgNF1cclxuICpcclxuICogb2JqZWN0LmEgPSAyO1xyXG4gKiB2YWx1ZXMob2JqZWN0KTtcclxuICogLy8gPT4gWzEsIDJdXHJcbiAqXHJcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxyXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XHJcbiAqIHZhbHVlcyhvYmplY3QpO1xyXG4gKiAvLyA9PiBbJ2EnLCAnYiddXHJcbiAqXHJcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXHJcbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XHJcbiAqL1xyXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XHJcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XHJcbiAgfVxyXG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXHJcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXHJcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcclxuXHJcbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcclxuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xyXG4gIHJldHVybiBtZW1vaXplZDtcclxufVxyXG5cclxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXHJcbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcclxuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXHJcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxyXG4gKlxyXG4gKiBAc3RhdGljXHJcbiAqIEBtZW1iZXJPZiBfXHJcbiAqIEBzaW5jZSA0LjAuMFxyXG4gKiBAY2F0ZWdvcnkgTGFuZ1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xyXG4gKiAvLyA9PiAnJ1xyXG4gKlxyXG4gKiBfLnRvU3RyaW5nKC0wKTtcclxuICogLy8gPT4gJy0wJ1xyXG4gKlxyXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XHJcbiAqIC8vID0+ICcxLDIsMydcclxuICovXHJcbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==