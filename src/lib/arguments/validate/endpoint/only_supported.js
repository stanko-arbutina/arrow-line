const Errors = require('../../../util/errors');

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