const isString = require('lodash/isString');
const isUndefined = require('lodash/isUndefined');
const Errors = require('../../util/errors');

function validateSvgParentSelector(options){
  if (!isUndefined(options.svgParentSelector)) {
    if (!isString(options.svgParentSelector)) {
      Errors.mustBeString('svgParentSelector');
    }
  }
}

module.exports = validateSvgParentSelector;