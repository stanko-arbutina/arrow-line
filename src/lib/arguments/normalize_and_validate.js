const validateOptions = require('./validate/options');

const rectangleFromParam = require('./rectangle_from_param');

function normalizeAndValidate(options){
  return {
    ...validateOptions(options),
    sourceRectangle: rectangleFromParam(options.source),
    destinationRectangle: rectangleFromParam(options.destination)
  }
}

module.exports = normalizeAndValidate;