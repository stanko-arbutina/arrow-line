const arrowLine = require('../src/lib/arrow_line');
const {
  addFixtureToDom, removeFixtureFromDom
} = require('./setup_fixture');
describe('arrowLine', () => {
  beforeAll(addFixtureToDom);
  afterAll(removeFixtureFromDom);

  function numberOfPaths(){
    return document.getElementsByTagName('path').length;
  }

  describe('#remove()', () => {
    it('Removes the created path from DOM tree', () => {
      expect(numberOfPaths()).toBe(0);
      const newArrow = arrowLine('#existingStart', '#existingEnd');
      expect(numberOfPaths()).toBe(1);
      newArrow.remove();
      expect(numberOfPaths()).toBe(0);
    });
  });

  describe('#update()', () => {
    let newArrow;
    beforeEach(function() {
      newArrow = arrowLine('#existingStart', '#existingEnd');
    });
    afterEach(function(){
      newArrow.remove();
    });
    it('Updates svg element attributes', () => {
      const pathColor = function(){
        const path = document.getElementsByTagName('path')[0];
        return path.attributes.getNamedItem('stroke').value;
      }

      expect(pathColor()).toBe('black');
      newArrow.update({color: 'blue'});
      expect(pathColor()).toBe('blue');
    });

    it('Constructor validations still work', () => {
      expect(() => newArrow.update({color: 47 })).toThrowError(Error, /must be a string/i);
    });

    it('Expects exactly one object argument', () => {
      expect(() => newArrow.update({color: 'red' }, {})).toThrowError(Error, /one argument/i);
      expect(() => newArrow.update()).toThrowError(Error, /one argument/i);
      expect(() => newArrow.update('options')).toThrowError(Error, /must be an object/i);
    });

    it('Does not accept "svgParentSelector" option', () => {
      expect(() => newArrow.update({svgParentSelector: '#some' })).toThrowError(Error, /not allowed/i);
    });
  });

  describe('#getParentSvgId', () => {
    it('Works with default svg canvas', () => {
      const defaultPrefix = require('../src/lib/const/arrow_line_prefix');
      const newArrow = arrowLine('#existingStart', '#existingEnd');
      expect(newArrow.getParentSvgId()).toBe(`${defaultPrefix}-svg-canvas`);
      newArrow.remove();
    });
    it('Works with custom svg canvas', () => {
      const newArrow = arrowLine('#existingStart', '#existingEnd', {svgParentSelector: '#existingTestSvgCanvas'});
      expect(newArrow.getParentSvgId()).toBe('existingTestSvgCanvas');
      newArrow.remove();
    });
  });

  fdescribe('#getRawSvgPath', () => {
    it('Returns a raw svg path element', () => {
      const newArrow = arrowLine('#existingStart', '#existingEnd');
      const path = newArrow.getRawSvgPath();
      expect(path.tagName).toBe('path');
      newArrow.remove();
    });
  });
});