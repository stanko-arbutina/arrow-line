const {drawMarker, createElement, createSvgElement } = require('./svg_utils');
const PREFIX = require('./../const/arrow_line_prefix');

class SvgCanvas {
  constructor(parentCanvas){
    this.parentCanvas = parentCanvas;
  }

  createMarker(id, options) {
    const {type, color, fillColor, size} = options;
    const sizeValue = String(size*10);
    const marker = createElement('marker', {
      id: id,
      markerUnits: 'strokeWidth',
      viewBox: '-1 -1 12 12',
      stroke: color,
      fill: fillColor,
      orient: 'auto',
      markerWidth: sizeValue,
      markerHeight: sizeValue
    });
    drawMarker[type](marker);
    this.definitionElement.appendChild(marker);
  }

  createPath() {
    const path = createSvgElement('path');
    this.parentCanvas.appendChild(path);
    return path;
  }

  get definitionElement() {
    if (!this._defs) {
      const existingDefs = this.parentCanvas.querySelector('defs');
      if (existingDefs) {
        this._defs = existingDefs
      } else {
        const definitionsElement = createSvgElement('defs');
        this.parentCanvas.appendChild(definitionsElement);
        this._defs = definitionsElement;
      }
    }
    return this._defs;
  }
}

SvgCanvas.defaultSvgElement = function(){
  if (!this._defaultEl) {
    const id = `${PREFIX}-svg-canvas`;
    this._defaultEl = createElement('svg', {
      id: id,
      style: 'position:absolute;top:0px;left:0px;pointer-events: none;',
      width: document.body.clientWidth,
      height: document.body.clientHeight
    });
    document.body.appendChild(this._defaultEl);
  }
  return this._defaultEl;
};

module.exports = SvgCanvas;