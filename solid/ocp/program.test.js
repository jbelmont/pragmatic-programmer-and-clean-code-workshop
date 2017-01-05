const test = require('tape');

test('setup', assert => {
  assert.end();
});

test('test existence of shoppingCart function', assert => {
  const {Registry} = require('./Registry');
  assert.ok(Registry);
  assert.end();
});

test('test creation of shopping cart', assert => {
  const {Registry} = require('./Registry');
  const {Cart} = require('./Cart');
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
  const cart = new Cart(Registry, expected);
  const actual = cart._values.showCart().cart;
  assert.deepEqual(actual, expected, 'showCart should return list of cart items');
  assert.end();
});

test('test adding item to cart', assert => {
  const {Registry} = require('./Registry');
  const {Cart} = require('./Cart');
  const cartItems = [
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
  const cart = new Cart(Registry, cartItems);
  cart._values.addCart({item4: 'hdmiCable'});
  const actual = cart._values.showCart().cart;
  const expected = [
    {
      item1: 'laptop'
    },
    {
      item2: 'mouse'
    },
    {
      item3: 'videoGame'
    },
    {
      item4: 'hdmiCable'
    }
  ];
  assert.deepEqual(actual, expected, 'showCart should return list of cart items');
  assert.end();
});

test('teardown', assert => {
  assert.end();
});
