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

function Shape() {}

Shape.prototype.area = function() {};

function Circle2() {}

Circle2.prototype = Object.create(Shape.prototype);

Circle2.prototype.setRadius = function(radius) {
  this.radius = radius;
};

Circle2.prototype.setPI = function(PI) {
  this.PI = PI;
};

Circle2.prototype.area = function() {
  return this.PI * Math.pow(this.radius, 2);
};

module.exports = {
  Rectangle,
  Square,
  Circle,
  Circle2
};
