const validateType = require('./type');
const validateFillColor = require('./fill_color');
const validatePosition = require('./position');
const validateSize = require('./size');
const validateOnlySupportedOptions = require('./only_supported');

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