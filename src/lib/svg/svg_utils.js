const isFunction = require('lodash/isFunction');
const EndpointType = require('./../const/endpoint_type');

function createSvgElement(tag){
  return document.createElementNS("http://www.w3.org/2000/svg", tag);
}

function createElement(type, attributes) {
  const el = createSvgElement(type);
  for (let attr in attributes) {
    el.setAttribute(attr, attributes[attr]);
  }
  return el;
}

function markerFactory(refX, refY, shapeGen) {
  return function (marker) {
    marker.setAttribute('refX', refX);
    marker.setAttribute('refY', refY);
    const shape = isFunction(shapeGen) ? shapeGen(marker) : shapeGen;
    marker.appendChild(shape);
  }
}

const drawMarker = {
  [EndpointType.arrowHeadFilled]: markerFactory(10, 5, createElement('polygon', {points: '0,0 10,5 0,10'})),
  [EndpointType.circles]: markerFactory(5, 5, createElement('circle', {r: 4, cx: 5, cy: 5})),
  [EndpointType.squares]: markerFactory(5, 5, createElement('rect', {width: 10, height: 10})),
  [EndpointType.arrowHead]: markerFactory(10, 5, function (marker) {
    marker.setAttribute('fill-opacity', '0');
    return createElement('polyline', {points: '0,0 10,5 0,10'})
  })
};

module.exports = {
  drawMarker, createElement, createSvgElement
}