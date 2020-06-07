const Rectangle = require('./../geometry/rectangle');
const Errors = require('./../util/errors');
const isCoordinate = require('./../geometry/is_coordinate');

function rectangleFromParam(param){
  if (isCoordinate(param)) {
    return new Rectangle(param.x, param.y, 0, 0);
  }
  const element = document.querySelector(param);
  if (!element) {
    Errors.couldNotFindSelector(param);
  }
  return Rectangle.fromDOMElement(element);
}

module.exports = rectangleFromParam;
