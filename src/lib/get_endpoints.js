const Rectangle = require('./geometry/rectangle');
const {HORIZONTAL, VERTICAL} = require('./const/directions');
const { reverseIf } = require('./util/helper');

const directionEndpoints = {
  [HORIZONTAL]: (sourceRectangle, destinationRectangle) => reverseIf(
    [Rectangle.SIDES.middleLeft, Rectangle.SIDES.middleRight],
    sourceRectangle.leftOf(destinationRectangle)
  ),
  [VERTICAL]: (sourceRectangle, destinationRectangle) => reverseIf(
    [Rectangle.SIDES.topCenter, Rectangle.SIDES.bottomCenter],
    sourceRectangle.aboveOf(destinationRectangle))
};

function getEndpoints({sourceRectangle, destinationRectangle, sourcePosition, destinationPosition}){
  const direction = sourceRectangle.center.horizontallyAlignedTo(destinationRectangle.center) ? HORIZONTAL : VERTICAL;
  let [beginPoint, endPoint] = directionEndpoints[direction](sourceRectangle, destinationRectangle);

  if (sourcePosition) {
    beginPoint = sourcePosition;
  }

  if (destinationPosition) {
    endPoint = destinationPosition;
  }
  return {
    beginPoint,
    endPoint,
    direction
  }
}

module.exports = getEndpoints;