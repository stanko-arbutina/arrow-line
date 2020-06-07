const Errors = require('../../util/errors');

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