const isNumber = require('lodash/isNumber');
const Errors = require('../../util/errors');

function validateThickness(options){
  options.thickness = options.thickness || 1;
  if (!isNumber(options.thickness)) {
    Errors.mustBeNumber('Thickness')
  }
}

module.exports = validateThickness;
