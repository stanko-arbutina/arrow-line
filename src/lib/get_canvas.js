const SvgCanvas = require('./svg/svg_canvas');
const Errors = require('./util/errors');

const cache = new Map();

function getSvgCanvas(selector){
  let domElement;
  if (!selector){
    domElement = SvgCanvas.defaultSvgElement();
  } else {
    if (!cache.has(selector)) {
      const el = document.querySelector(selector);
      if (!el) {
        Errors.couldNotFindSelector(selector);
      }
      cache.set(selector, el);
    }
    domElement =  cache.get(selector)
  }
  return new SvgCanvas(domElement);
}

module.exports = getSvgCanvas;