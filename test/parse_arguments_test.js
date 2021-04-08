const Rectangle = require('../src/lib/geometry/rectangle');
const LineStyle = require('../src/lib/const/line_style');
const EndpointType = require('../src/lib/const/endpoint_type');
const Directions = require('../src/lib/const/directions');
const EndpointPosition = require('../src/lib/const/endpoint_position');

const { expectItWorks, expectArgumentError } = require('./parse_arguments_expectations')

const {
  addFixtureToDom, removeFixtureFromDom
} = require('./setup_fixture');

const SAMPLE_COORD = {x: 3, y: 5};
const SAMPLE_COORD1 = {x: 13, y: 55};
const EXISTING_START = '#existingStart';
const EXISTING_END = '#existingEnd';
const sampleParams =  (params) => [{source: EXISTING_START, destination: EXISTING_END, ...params}];

describe('Parsing arguments', () =>{
  beforeAll(addFixtureToDom);
  afterAll(removeFixtureFromDom);
  describe('Source and destination', () => {
    expectItWorks([EXISTING_START, EXISTING_END]);
    expectItWorks([SAMPLE_COORD, EXISTING_END]);
    expectItWorks([SAMPLE_COORD, SAMPLE_COORD1]);
    expectArgumentError(['asdf', {x:5, z:8}], 'source and destination should be either');
    expectArgumentError(['#nonExistingStart', EXISTING_END], 'Could not find element with selector');
    expectArgumentError([EXISTING_START, '#nonExistingEnd'], 'Could not find element with selector');
    expectArgumentError([], 'at least one argument');
    expectArgumentError(['asdf'], 'should always be an object');
    expectArgumentError(['asdf', {}], 'source and destination should be either');
    expectArgumentError([3, 'bla'], 'source and destination should be either');
    expectArgumentError(['bla', 'bla', 'bla'], 'last argument should always be an object');
    expectArgumentError(['bla', 'bla', {}, {}], 'Function does not accept more than three arguments');
    expectItWorks([{source: EXISTING_START, destination: EXISTING_END}]);
    expectArgumentError([{source: EXISTING_START, destination: '#nonExistingEnd'}], 'Could not find element with selector');
    expectArgumentError([{source: '#nonExistingStart', destination: EXISTING_END}], 'Could not find element with selector');
    expectArgumentError([EXISTING_START, SAMPLE_COORD, {source: EXISTING_START}], 'source specified twice');
    expectArgumentError([EXISTING_START, SAMPLE_COORD, {destination: EXISTING_START}], 'destination specified twice');
    expectArgumentError([{destination: EXISTING_END}], 'missing source');
    expectArgumentError([{source: EXISTING_END}], 'missing destination');
    expectItWorks([{source: SAMPLE_COORD, destination: EXISTING_END}]);
    expectItWorks([{destination: SAMPLE_COORD, source: EXISTING_END}]);
    expectArgumentError([{destination: {x: 13, z: 55}, source: EXISTING_END}], 'source and destination should be either');
    expectArgumentError([{destination: 12, source: EXISTING_END}], 'source and destination should be either');
  });

  describe('color', () => {
    expectItWorks(sampleParams({color: 'blue'}));
    expectArgumentError(sampleParams({color: 55}), 'must be a string');
  });

  describe('curvature', () => {
    expectItWorks(sampleParams({ curvature: 1.2}));
    expectItWorks(sampleParams({ curvature: -5}));
    expectArgumentError(sampleParams({ curvature: 'bla'}), 'must be a number');
  });

  describe('pivots', () => {
    expectItWorks(sampleParams( { pivots: [SAMPLE_COORD, SAMPLE_COORD1]}));
    expectArgumentError(sampleParams( { pivots: 1}), 'must be an array of two coordinates');
    expectArgumentError(sampleParams({ pivots: [3,4]}), 'must be an array of two coordinates');
    expectArgumentError(sampleParams({ pivots: [SAMPLE_COORD,{x:5, y:'bla'}]}), 'must be an array of two coordinates');
    expectArgumentError(sampleParams({ pivots: {}}), 'must be an array of two coordinates');
    expectArgumentError(sampleParams({ pivots: [SAMPLE_COORD,SAMPLE_COORD1], curvature: 5}), 'not allowed');
  });

  describe('sourcePosition', () => {
    expectArgumentError([{x: 5, y: 7}, EXISTING_END, { sourcePosition: 'topLeft'}], 'sourcePosition unavailable when using coordinates as source');
    expectArgumentError([
      {source: SAMPLE_COORD, destination: EXISTING_END, sourcePosition: 'center'}
    ], 'sourcePosition unavailable when using coordinates as source');
    for (let side in Rectangle.SIDES) {
      expectItWorks(sampleParams({sourcePosition: side}));
    }
    expectArgumentError(sampleParams({sourcePosition: 'somenew'}), 'is not a valid position - available positions are:');
  });

  describe('destinationPosition', () => {
    expectArgumentError([EXISTING_END, SAMPLE_COORD, { destinationPosition: 'topLeft'}], 'destinationPosition unavailable when using coordinates as destination');
    expectArgumentError([
      {destination: SAMPLE_COORD, source: EXISTING_END, destinationPosition: 'topLeft'}
    ], 'destinationPosition unavailable when using coordinates as destination');
    for (let side in Rectangle.SIDES) {
      expectItWorks(sampleParams({destinationPosition: side}));
    }
    expectArgumentError(sampleParams({destinationPosition: 'somenew'}), 'is not a valid position - available positions are:');
  });

  describe('style', () => {
    expectArgumentError(sampleParams({ style: 'somenew'}), 'is not a valid style - available styles are:');
    for (let style in LineStyle) {
      expectItWorks(sampleParams({ style }));
    }
  });

  describe('thickness', () => {
    expectArgumentError(sampleParams({thickness: 'somenew'}), 'must be a number');
    expectItWorks(sampleParams({thickness: 3.5}));
  });

  describe('forceDirection', () => {
    expectArgumentError(sampleParams({forceDirection: true}), 'must be a string');
    expectArgumentError(sampleParams({forceDirection: 'bla'}), 'is not a valid direction type - available direction types are:');
    expectItWorks(sampleParams({forceDirection: Directions.HORIZONTAL }));
  });

  describe('endpoint', () => {
    const endpointParams = (endpoint_params) => sampleParams({ endpoint: endpoint_params});
    describe('type', () => {
      expectArgumentError(endpointParams({type: 'invalid'}), 'is not a valid endpoint type - available endpoint types are:');
      expectArgumentError(endpointParams({type: 5}), 'is not a valid endpoint type - available endpoint types are:');
      for (let type in EndpointType) {
        if (type != EndpointType.custom) {
          expectItWorks(endpointParams({type}));
        }
      }
      describe('custom', () => {
        expectArgumentError(endpointParams({type: EndpointType.custom}), "missing required property 'endpoint.markerIdentifier'");
      });
    });

    describe('markerIdentifier', () => {
      expectArgumentError(endpointParams({type: EndpointType.arrowHeadFilled, markerIdentifier: 'bla'}), "only with custom");
      expectArgumentError(endpointParams({type: EndpointType.custom, markerIdentifier: 5}), "must be a string");
      expectArgumentError(endpointParams({type: EndpointType.custom, markerIdentifier: 'bla', fillColor: 'blue'}), "not available");
      expectArgumentError(endpointParams({type: EndpointType.custom, markerIdentifier: 'bla', size: -2}), "not available");
    });

    describe('fillColor', () => {
      expectArgumentError(endpointParams({fillColor: {}}), 'must be a string');
      expectItWorks(endpointParams({fillColor: 'blue'}));
    });

    describe('size', () => {
      expectArgumentError(endpointParams({size: {}}), 'must be a positive number');
      expectArgumentError(endpointParams({size: '2'}), 'must be a positive number');
      expectArgumentError(endpointParams({size: 0}), 'must be a positive number');
      expectArgumentError(endpointParams({size: -1}), 'must be a positive number');
      expectItWorks(endpointParams({size: 3.2}));
    });

    describe('position', () => {
      expectArgumentError(endpointParams({position: {}}), 'must be a string');
      expectArgumentError(endpointParams({position: 'some'}), 'is not a valid endpoint position - available endpoint positions are:');
      for (let position in EndpointPosition) {
        expectItWorks(endpointParams({position: EndpointPosition[position]}));
      }
    });
  });

  describe('svgParentSelector', () => {
    expectArgumentError(sampleParams({svgParentSelector: 5}), 'must be a string');
    expectItWorks(sampleParams({svgParentSelector: 'selector'}));
  });

  describe('unknown properties', () => {
    describe('in root', () => {
      expectArgumentError(sampleParams({unknown: 5}), 'unrecognized option');
    });
    describe('in endpoint', () => {
      expectArgumentError(sampleParams({endpoint: {unknown: 5}}), 'unrecognized endpoint option');
    });
  })
});