const {
  addFixtureToDom, removeFixtureFromDom
} = require('./setup_fixture');

const ArgumentError = require('../src/lib/util/argument_error');
const getCanvas = require('../src/lib/get_canvas');

describe('getCanvas', () => {
  beforeAll(addFixtureToDom);
  afterAll(removeFixtureFromDom);

  it('Does not throw an error when called with no arguments', () => {
    expect(() => getCanvas()).not.toThrow();
  });
  it('Throws an error when called with non-existing DOM element selector', () => {
    expect(() => getCanvas('#unexisting')).toThrowError(ArgumentError, /Could not find element with selector/i);
  });
  it('Does not throw an error when called with existing DOM element selector', () => {
    expect(() => getCanvas('#existingTestSvgCanvas')).not.toThrow();
  });
});