const ArgumentError = require('./argument_error');
const isFunction = require('lodash/isFunction');

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