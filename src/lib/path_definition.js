const { HORIZONTAL } = require('./const/directions');

function getPivots(point1, point2, curvature, direction) {
  const dimension = (direction == HORIZONTAL) ? 'x' : 'y';
  const amount = (point2[dimension] - point1[dimension]) * curvature;

  return [
    point1.translate({[dimension]: amount}),
    point2.translate({[dimension]: -amount})
  ];
}

function pathDefinition(point1, point2, options){
  const [p1, p2] = options.curvature ?
    getPivots(point1, point2, options.curvature, options.direction) :
    [point1.translate(options.pivots[0]), point2.translate(options.pivots[1])];
  return ['M', point1.str(), 'C', p1.str(), p2.str(), point2.str()].join(' ');
}

module.exports = pathDefinition;