const isString = require('lodash/isString');
const isUndefined = require('lodash/isUndefined');

const Errors = require('../../../util/errors');

function validateFillColor(endpointOptions) {
  const fillColor = endpointOptions.fillColor;
  if (!isUndefined(fillColor)){
    if (!isString(fillColor)) Errors.mustBeString('Endpoint fillColor')
  }
}

module.exports = validateFillColor;