const isNumber = require('lodash/isNumber');
const isUndefined = require('lodash/isUndefined');
const ArgumentError = require('../src/lib/util/argument_error');
const parseArguments = require('../src/lib/arguments/parse_arguments');

function expectItWorks(arr){
  it(`${JSON.stringify(arr)} does not throw error and contains required parameters`,function() {
    expect(() => parseArguments(arr)).not.toThrow();
    const result = parseArguments(arr).options;
    [result.sourceRectangle, result.destinationRectangle].forEach(rect => {
      expect(rect).not.toBeUndefined();
      ['x', 'y', 'width', 'height'].forEach(attr => expect(isNumber(rect[attr])).toBe(true))
    });
    expect(result.color).not.toBeUndefined();

    const curvatureOrPivots = !isUndefined(result.curvature) || !isUndefined(result.pivots);
    expect(curvatureOrPivots).toBe(true);
  })
}

function expectArgumentError(arr, msg){
  it(`${JSON.stringify(arr)} throws ArgumentError containing text '${msg}'`, function() {
    expect(() => parseArguments(arr)).toThrowError(ArgumentError, new RegExp(msg,'i'));
  });
}

module.exports = {
  expectItWorks, expectArgumentError
}