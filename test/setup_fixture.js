const fixture = `
<div id="fixtureContent">
<div id="existingStart"></div><div id="existingEnd"></div>
 <svg id="existingTestSvgCanvas">
 <defs>
  <marker id="existingTestMarker" markerUnits="strokeWidth" viewBox="-1 -1 12 12" stroke="orange" fill="green" orient="auto" markerWidth="10" markerHeight="10" refX="5" refY="5">
  <circle r="4" cx="5" cy="5"></circle>
  </marker>
  </defs>
  </svg>
  </div>
`;

function addFixtureToDom(){
  document.body.insertAdjacentHTML('afterbegin', fixture);
}

function removeFixtureFromDom(){
  document.body.removeChild(document.getElementById('fixtureContent'));
}

module.exports = {
  addFixtureToDom, removeFixtureFromDom
}