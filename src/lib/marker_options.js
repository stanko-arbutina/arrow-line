const get = require('lodash/get');
const EndpointType = require('./const/endpoint_type');
const EndpointPosition = require('./const/endpoint_position');
const {getCounter } = require('./util/helper');
const PREFIX = require('./const/arrow_line_prefix');

const MARKER_ID_PREFIX = `${PREFIX}-MARKER-`;
const nextMarkerId = getCounter();
const markerCache = new Map();

function getMarkerOptionsAndKey(options){
  const markerType = get(options, 'endpoint.type');
  const fillColor = get(options, 'endpoint.fillColor');
  const size = get(options, 'endpoint.size');
  const opts = { type: markerType, color: options.color, fillColor, size };
  return { key: `${options.color}-${markerType}-${fillColor}-${size}`, options: opts }
}

function getMarker(svg, baseOpts) {
  const { key, options } = getMarkerOptionsAndKey(baseOpts);
  if (!markerCache.has(key)) {
    const markerId = `${MARKER_ID_PREFIX}${nextMarkerId()}`;
    svg.createMarker(markerId, options);
    markerCache.set(key, markerId);
    return markerId;
  }
  return markerCache.get(key);
}

function defaultMarkerOptions(type, url){
  const opts = {"marker-end": url};
  if ((type == EndpointType.squares) || (type == EndpointType.circles)) {
    opts['marker-start'] = url;
  }
  return opts;
}

function userDefinedMarkerOptions(position, url){
  const opts = {};
  if ([EndpointPosition.START, EndpointPosition.BOTH].includes(position)){
    opts['marker-start'] = url;
  }
  if ([EndpointPosition.END, EndpointPosition.BOTH].includes(position)) {
    opts['marker-end'] = url;
  }
}

function markerOptions(svg, options){
  const endpointType = get(options, 'endpoint.type');
  if (endpointType == EndpointType.none) {
    return {}
  }
  let markerId = get(options, 'endpoint.markerIdentifier');
  if (!markerId) {
    markerId = getMarker(svg, options);
  }
  const url = `url(#${markerId})`;
  const position = get(options, 'endpoint.position');
  return position ? userDefinedMarkerOptions(position, url) : defaultMarkerOptions(endpointType, url);
}

module.exports = markerOptions;