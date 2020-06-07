const isString = require('lodash/isString');
const EndpointType = require('../../../const/endpoint_type');
const validatePropertyInEnum = require('../property_in_enum');
const Errors = require('../../../util/errors');

const MARKERS = Object.keys(EndpointType);

function validateCustomType(endpointOptions){
  if (endpointOptions.type == EndpointType.custom) {
    if (!endpointOptions.markerIdentifier) {
      Errors.missingMarkerIdent();
    }
    if (!isString(endpointOptions.markerIdentifier)) {
      Errors.mustBeString();
    }
    const unavailableProperty = ['fillColor', 'size'].find(prop => endpointOptions[prop]);
    if (unavailableProperty) {
      Errors.markerCustomizationUnavailable(unavailableProperty);
    }
  } else {
    if (endpointOptions.markerIdentifier) {
      Errors.markerIdentOnlyCustom();
    }
  }
}

function validateType(endpointOptions){
  endpointOptions.type = endpointOptions.type || EndpointType.arrowHeadFilled;
  validatePropertyInEnum(endpointOptions, 'type', MARKERS, 'endpoint type');
  validateCustomType(endpointOptions);
}

module.exports = validateType;