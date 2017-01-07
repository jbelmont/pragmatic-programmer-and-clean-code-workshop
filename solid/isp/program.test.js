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

test('teardown', assert => {
  assert.end();
});
