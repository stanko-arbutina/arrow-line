const parseArguments = require('./arguments/parse_arguments');
const lineAttributes = require('./line_attributes');
const pathDefinition = require('./path_definition');
const getEndpoints = require('./get_endpoints');
const markerOptions = require('./marker_options');
const getCanvas = require('./get_canvas');
const normalizeAndValidate = require('./arguments/normalize_and_validate');

const isObject = require('lodash/isObject');

const Errors = require('./util/errors');

function getPathAttributeNames(svgPath) {
    const result = [];
    for (let i = 0; i < svgPath.attributes.length; i++) {
        result.push(svgPath.attributes.item(i).name);
    }
    return result;
}

function getPathAttributes(svg, options) {
    const {beginPoint, endPoint, direction} = getEndpoints(options);
    const pathDefinitionOptions = {
        direction: options.forceDirection || direction,
        curvature: options.curvature,
        pivots: options.pivots
    };
    return {
        d: pathDefinition(options.sourceRectangle[beginPoint], options.destinationRectangle[endPoint], pathDefinitionOptions),
        fill: 'none',
        stroke: options.color,
        ...lineAttributes(options),
        ...markerOptions(svg, options)
    }

}

function setPathAttributes(svgPath, pathAttributes) {
    getPathAttributeNames(svgPath).forEach(attrName => svgPath.attributes.removeNamedItem(attrName));
    for (let attributeName in pathAttributes) {
        svgPath.setAttributeNS(null, attributeName, pathAttributes[attributeName]);
    }
}

function arrowLine(...args) {
    const parsedArguments = parseArguments(args);
    const options = parsedArguments.options;
    let rawOptions = parsedArguments.rawOptions;
    const svg = getCanvas(options.svgParentSelector);
    const svgPath = svg.createPath();
    setPathAttributes(svgPath, getPathAttributes(svg, options));
    return {
        getParentSvgId() {
            return svg.parentCanvas.id;
        },
        getRawSvgPath(){
          return svgPath;
        },
        remove: () => {
            svgPath.parentNode.removeChild(svgPath);
        },
        update: (...args) => {
            if (args.length != 1) {
                Errors.exactlyOneArgument();
            }
            const updateOptions = args[0];
            if (!isObject(updateOptions)) {
                Errors.argumentMustBeObject();
            }
            if (updateOptions.svgParentSelector) {
                Errors.svgParentNotAllowedInUpdate();
            }
            const newRawOptions = {...rawOptions, ...updateOptions};
            const newOptions = normalizeAndValidate(newRawOptions);
            setPathAttributes(svgPath, getPathAttributes(svg, newOptions));
            rawOptions = newRawOptions;
        }
    }
}

module.exports = arrowLine;