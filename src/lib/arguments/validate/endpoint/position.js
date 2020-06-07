const isString = require('lodash/isString');
const isUndefined = require('lodash/isUndefined');
const EndpointPosition = require('../../../const/endpoint_position');

const validatePropertyInEnum = require('../property_in_enum');
const Errors = require('../../../util/errors');

const POSITIONS = Object.values(EndpointPosition);

function validatePosition(endpointOptions) {
  const position = endpointOptions.position;
  if (!isUndefined(position)){
    if (!isString(position)) Errors.mustBeString('Endpoint position');
    validatePropertyInEnum(endpointOptions, 'position', POSITIONS, 'endpoint position');
  }
}

module.exports = validatePosition;