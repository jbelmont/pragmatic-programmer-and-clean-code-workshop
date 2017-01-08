const test = require('tape');

test('setup', assert => {
  assert.end();
});

test('test area of a square', assert => {
  const {Square} = require('./program');
  const side = 5;
  const square = new Square();
  square.setSide(side);
  const actual = square.area();
  const expected = side * side;
  assert.equal(actual, expected, `area of square should be ${expected}`);
  assert.end();
});

test('test area of Rectangle', assert => {
  const {Rectangle} = require('./program');
  const width = 4, height = 5;
  const rectangle = new Rectangle();
  rectangle.setWidth(width);
  rectangle.setHeight(height);
  const actual = rectangle.area();
  const expected = width * height;
  assert.equal(actual, expected, `area of rectangle with width of ${width} and height of ${height} should be ${expected}`);
  assert.end();
});

test('test area of circle', assert => {
  const {Circle} = require('./program');
  const PI = Math.PI, radius = 5;
  const circle = new Circle();
  circle.setPI(PI);
  circle.setRadius(radius);
  const actual = circle.area();
  const expected = (PI * Math.pow(radius, 2)).toFixed(4);
  assert.equal(actual, expected, `area of circle with radius of ${radius} should be ${expected}`);
  assert.end();
});

test('teardown', assert => {
  assert.end();
});
