const isNumber = require('lodash/isNumber');
const isObject = require('lodash/isObject');

function isCoordinate(obj) {
  if (!isObject(obj)) return false;
  const keys = Object.keys(obj);
  if (!keys.includes('x')) return false;
  if (!keys.includes('y')) return false;
  return isNumber(obj.x) && isNumber(obj.y);
}

module.exports = isCoordinate;