const isNumber = require('lodash/isNumber');
const isUndefined = require('lodash/isUndefined');

const Errors = require('../../../util/errors');

function validateSize(endpointOptions) {
  const size = endpointOptions.size;
  if (!isUndefined(size)){
    if (!isNumber(size) || (size<=0)) Errors.mustBePositiveNumber('Endpoint size')
  }
  endpointOptions.size = endpointOptions.size || 1;
}

module.exports = validateSize;