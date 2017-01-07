const test = require('ava');

test('test area of Rectangle', assert => {
  const {Rectangle} = require('./Geometry');
  const {
    rectangle
  } = require('./constants');
  const width = rectangle.width || 0;
  const height = rectangle.height || 0;
  const rect = new Rectangle(width, height);
  const actual = rect.area();
  const expected = 20;
  assert.is(actual, expected, `area of rectangle with width of ${width} and height of ${height}`);
});

test('test area of square', assert => {
  const {Square} = require('./Geometry');
  const {
    square
  } = require('./constants');
  const newSquare = new Square(square);
  const actual = newSquare.area();
  const expected = 25;
  assert.is(actual, expected, `area of square with side of ${square} should have area of ${expected}`);
});

test('test area of circle', assert => {
  const {Circle} = require('./Geometry');
  const {
    circle
  } = require('./constants');
  const PI = circle.PI;
  const radius = circle.radius;
  const newCircle = new Circle(radius);
  const actual = newCircle.area();
  const expected = PI * Math.pow(radius, 2);
  assert.not(actual, expected, `area of circle should return ${expected} instead of ${actual}`);
});

test('test liskov substitution principle with by using generic Shape', assert => {
  const {Circle2} = require('./Geometry');
  const {
    circle
  } = require('./constants');
  const PI = circle.PI;
  const radius = circle.radius;
  const newCircle = new Circle2();
  newCircle.setRadius(radius);
  newCircle.setPI(PI);
  const actual = newCircle.area();
  const expected = PI * Math.pow(radius, 2);
  assert.is(actual, expected, `area of circle should return correct area of ${expected}`);
});
