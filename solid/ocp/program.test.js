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

test('test CreateStore getPreloadedState function', assert => {
  const {CreateStore} = require('./Registry');
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
  const ShoppingCart = new CreateStore(null, expected);
  const actual = ShoppingCart.getPreloadedState();
  assert.deepEqual(actual, expected, 'getPreloadedState should return items');
  assert.end();
});

test('test Cart2 register function', assert => {
  const {CreateStore} = require('./Registry');
  const {Cart2} = require('./Cart');
  const {ADD_CART} = require('./constants');
  const items = [
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
  const ShoppingCart = new CreateStore(null, items);
  ShoppingCart.register(new Cart2(), items);
  const actual = ShoppingCart.getNewState(items, { type: ADD_CART, items: {item4: 'donuts'} });
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
      item4: 'donuts'
    }
  ];
  assert.deepEqual(actual, expected, 'getNewState should return newer cart items');
  assert.end();
});

test('test Cart3 composition strategy', assert => {
  const {Cart3, CreateStore2} = require('./Cart');
  const items = [
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
  const Cart = Cart3(items);
  const store = CreateStore2(Cart, { item4: 'hamburgers' })();
  const expect = [
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
      item4: 'hamburgers'
    }
  ];
  assert.deepEqual(store, expect, 'CreateStore2 should return newer state');
  assert.end();
});

test('teardown', assert => {
  assert.end();
});
