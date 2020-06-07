const isString = require('lodash/isString');
const get = require('lodash/get');
const Errors = require('../../util/errors');

function validatePropertyInEnum(options, propertyPath, enumeration, label){
  const label_arr = isString(label) ? [label, `${label}s`] : label;
  const prop = get(options, propertyPath);
  if ((prop) && (!enumeration.includes(prop))) {
    Errors.valInEnum(prop, enumeration, label_arr);
  }
}

module.exports = validatePropertyInEnum;