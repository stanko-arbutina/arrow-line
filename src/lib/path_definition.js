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
  const pathElements = ['M', point1.str()];
  if (options.curvature !=0) {
    const pivots = options.curvature ?
        getPivots(point1, point2, options.curvature, options.direction) :
        [point1.translate(options.pivots[0]), point2.translate(options.pivots[1])];
    pathElements.push('C');
    pathElements.push(...pivots.map(p => p.str()));
  }
  pathElements.push(point2.str());
  return pathElements.join(' ');
}

module.exports = pathDefinition;