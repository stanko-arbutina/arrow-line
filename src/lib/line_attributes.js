const LineStyle = require('./const/line_style');

function lineAttributes(options){
  const result = {};
  if (options.style) {
    result['stroke-dasharray'] = LineStyle[options.style];
  }
  if (options.thickness) {
    result['stroke-width'] = options.thickness;
  }
  return result;
}

module.exports = lineAttributes;
