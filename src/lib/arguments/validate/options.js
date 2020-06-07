const validateSourceAndDestination = require('./source_and_destination');
const validateColor = require('./color');
const validateThickness = require('./thickness');
const validateCurvature = require('./curvature');
const validatePositions = require('./positions');
const validatePivots = require('./pivots');
const validateSvgParentSelector = require('./svg_parent_selector');
const validateStyle = require('./style');
const validateForceDirection = require('./force_direction');
const validateEndpoint = require('./endpoint');
const validateOnlySupportedOptions = require('./only_supported');

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