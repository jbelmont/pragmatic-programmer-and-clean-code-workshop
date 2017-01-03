const test = require('tape');

test('setup', assert => {
  assert.end();
});

test('test existence of shoppingCart function', assert => {
  const {ShoppingCart} = require('./program');
  assert.ok(ShoppingCart);
  assert.end();
});

test('test creation of shopping cart', assert => {
  const {ShoppingCart} = require('./program');
  const items = new ShoppingCart([
    {
      item1: 'laptop'
    },
    {
      item2: 'mouse'
    },
    {
      item3: 'videoGame'
    }
  ]);
  const actual = items.getCart();
  const expected = [
    {
      item1: 'laptop'
    },
    {
      item2: 'mouse'
    },
    {
      item3: 'videoGame'
    }
  ];
  assert.deepEqual(actual, expected);
  assert.end();
});

test('teardown', assert => {
  assert.end();
});
