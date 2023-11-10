const validateOptions = require('./validate/options');

const rectangleFromParam = require('./rectangle_from_param');

function normalizeAndValidate(options){
  return {
    ...validateOptions(options),
    sourceRectangle: rectangleFromParam(options.source, options.context),
    destinationRectangle: rectangleFromParam(options.destination, options.context)
  }
}

module.exports = normalizeAndValidate;