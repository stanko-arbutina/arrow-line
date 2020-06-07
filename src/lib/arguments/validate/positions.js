const isCoordinate = require('../../geometry/is_coordinate');
const Rectangle = require('../../geometry/rectangle');
const validatePropertyInEnum = require('./property_in_enum');
const Errors = require('../../util/errors');

const POSITIONS = Object.keys(Rectangle.SIDES);
function validatePositions(options){
  if (options.sourcePosition) {
    if (isCoordinate(options.source)) {
      Errors.positionWithCoords('source');
    }
    validatePropertyInEnum(options, 'sourcePosition', POSITIONS, 'position');
  }

  if (options.destinationPosition) {
    if (isCoordinate(options.destination)) {
      Errors.positionWithCoords('destination');
    }
    validatePropertyInEnum(options, 'destinationPosition', POSITIONS, 'position');
  }
}

module.exports = validatePositions;