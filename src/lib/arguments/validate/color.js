const isString = require('lodash/isString');
const Errors = require('../../util/errors');

function validateColor(options){
  options.color = options.color || 'black';
  if (!isString(options.color)) Errors.mustBeString('Color');
}

module.exports = validateColor;