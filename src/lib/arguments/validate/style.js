const LineStyle = require('../../const/line_style');
const validatePropertyInEnum = require('./property_in_enum');

const STYLES = Object.keys(LineStyle);

function validateStyle(options){
  validatePropertyInEnum(options, 'style', STYLES, 'style');
}

module.exports = validateStyle;