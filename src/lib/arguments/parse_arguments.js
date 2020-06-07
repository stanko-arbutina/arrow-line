const isObject = require('lodash/isObject');
const Errors = require('./../util/errors');

const normalizeAndValidate = require('./normalize_and_validate');

function parseMultipleArguments(args){
  if ((args.length > 2) && (!isObject(args[2]))) {
    Errors.lastArgumentObject();
  }
  if (args.length > 3) {
    Errors.maximumThreeArguments();
  }
  const options = args[2] || {};
  if (options.source) {
    Errors.doubleSource()
  }
  if (options.destination) {
    Errors.doubleDestination();
  }
  return {
    ...options,
    source: args[0],
    destination: args[1]
  };
}

function parseSingleArgument(args){
  if (!isObject(args[0])) Errors.singleArgumentObject();
  const options = args[0];
  if (!options.source) {
    Errors.missingSource();
  }
  if (!options.destination) {
    Errors.missingDestination();
  }
  return options;
}

function standardize(args) {
  if (args.length == 0) {
    Errors.atLeastOneArgument();
  }
  if (args.length > 1) {
    return parseMultipleArguments(args);
  }
  return  parseSingleArgument(args);
}

function parseArguments(args) {
  const rawOptions = standardize(args);
  const options = normalizeAndValidate(rawOptions)
  return { rawOptions, options };
}

module.exports = parseArguments;