'use strict';

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

function Square(side) {
  Rectangle.call(this, side, side);
}

Square.prototype = Object.create(Rectangle.prototype);

function Circle(radius) {
  Rectangle.call(this, radius, radius);
}

Circle.prototype = Object.create(Rectangle.prototype);

module.exports = {
  Rectangle,
  Square,
  Circle
};
