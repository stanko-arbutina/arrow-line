const isNumber = require('lodash/isNumber');
const isUndefined = require('lodash/isUndefined');
const Errors = require('../../util/errors');

function validateCurvature(options){
  if (!isUndefined(options.curvature)) {
    if (!isNumber(options.curvature)) {
      Errors.mustBeNumber('Curvature')
    }
  }
  if (!options.pivots && isUndefined(options.curvature)) options.curvature = 1;
}

module.exports = validateCurvature;