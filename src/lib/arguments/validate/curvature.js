const isNumber = require('lodash/isNumber');
const isUndefined = require('lodash/isUndefined');
const Errors = require('../../util/errors');

function validateCurvature(options){
  if (!isUndefined(options.curvature)) {
    if (!isNumber(options.curvature) || (options.curvature == 0)) {
      Errors.mustBeNonZeroNumber('Curvature')
    }
  }
  if (!options.pivots) options.curvature = options.curvature || 1;
}

module.exports = validateCurvature;