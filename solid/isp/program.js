'use strict';

function Square() {}

Square.prototype.setSide = function(side) {
  this.side = side;
};

Square.prototype.area = function() {
  return Math.pow(this.side, 2);
};

function Rectangle() {}

Rectangle.prototype.setWidth = function(width) {
  this.width = width;
};

Rectangle.prototype.setHeight = function(height) {
  this.height = height;
};

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

function Circle() {}

Circle.prototype.setPI = function(PI) {
  this.PI = PI;
};

Circle.prototype.setRadius = function(radius) {
  this.radius = radius;
};

Circle.prototype.area = function() {
  return (this.PI * Math.pow(this.radius, 2)).toFixed(4);
};

exports.Square = Square;
exports.Rectangle = Rectangle;
exports.Circle = Circle;
