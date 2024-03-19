const Point = require('./point');

class Rectangle {
  constructor(x,y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get topLeft(){ return new Point(this.x, this.y); }
  get topRight(){ return new Point(this.x + this.width, this.y); }
  get topCenter(){ return new Point(this.x + this.width/2, this.y) }
  get middleLeft(){ return new Point(this.x, this.y+ this.height/2) }
  get middleRight(){ return new Point(this.x+ this.width, this.y+ this.height/2) }
  get bottomLeft() { return new Point(this.x, this.y+ this.height) }
  get bottomCenter() { return new Point(this.x + this.width/2, this.y+ this.height) }
  get bottomRight() { return new Point(this.x+this.width, this.y+ this.height) }

  leftOf(other){
    return this.middleLeft.leftOf(other.middleLeft);
  }

  get center(){ return new Point(this.x + this.width/2, this.y + this.height/2) }


  aboveOf(other){
    return this.topCenter.aboveOf(other.topCenter);
  }
}

Rectangle.SIDES = {
  topLeft: 'topLeft',
  topRight: 'topRight',
  topCenter: 'topCenter',
  middleRight: 'middleRight',
  middleLeft: 'middleLeft',
  bottomLeft: 'bottomLeft',
  bottomCenter: 'bottomCenter',
  bottomRight: 'bottomRight'
};

function findAbsolutePosition(htmlElement) {
  const {x, y} = htmlElement.getBoundingClientRect();
  return new Point(x,y);
}


Rectangle.fromDOMElement = function(DOMElement){
  const position = findAbsolutePosition(DOMElement);
  return new Rectangle(
    position.x, position.y, DOMElement.offsetWidth, DOMElement.offsetHeight
  );
};

module.exports = Rectangle;