const isCoordinate = require('../../geometry/is_coordinate');
const Errors = require('../../util/errors');

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