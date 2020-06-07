const isString = require('lodash/isString');
const Errors = require('../../util/errors');
const isCoordinate = require('../../geometry/is_coordinate');

function validateSourceAndDestination(options){
  if (![options.source, options.destination].every(sel => isString(sel) || isCoordinate(sel))) {
    Errors.sourceAndDestinationFormat();
  }
  return options;
}

module.exports = validateSourceAndDestination;