const isString = require('lodash/isString');
const isUndefined = require('lodash/isUndefined');
const Errors = require('../../util/errors');

const Direction = require('../../const/directions');
const validatePropertyInEnum = require('./property_in_enum');

const DIRECTIONS = Object.values(Direction);

function validateForceDirection(options){
  if (!isUndefined(options.forceDirection)){
    if (!isString(options.forceDirection)){
      Errors.mustBeString('forceDirection')
    }
    validatePropertyInEnum(options, 'forceDirection', DIRECTIONS, 'direction type');
  }
}

module.exports = validateForceDirection;