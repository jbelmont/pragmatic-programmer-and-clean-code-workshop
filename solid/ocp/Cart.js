'use strict';

function Cart(registry, cart) {
  this.cart = cart || [];

  this.showCart = function() {
    return new ShoppingCart(cart);
  };

  this.addCart = function(item) {
    this.cart.push(item);
  }.bind(this);

  const cartRegistry = new registry(cart);
  cartRegistry.registerState('showCart', this.showCart);
  cartRegistry.registerState('addCart', this.addCart);

  return cartRegistry;
}

function ShoppingCart(cart) {
  this.cart = cart;
}

const {CreateStore} = require('./Registry');
const {ADD_CART} = require('./constants');

class Cart2 extends CreateStore {
  constructor(reducers, preloadedState) {
    super(reducers, preloadedState);
  }
  getNewState(state, action) {
    const {
      type,
      items
    } = action;
    if (type == ADD_CART) {
      return [
        ...state,
        items
      ];
    } else {
      return state;
    }
  }
}

const {
  projector
} = require('./Composition');

const Cart3 = (state) => {
  return projector(state, (state) => {
    return [].concat([], state);
  });
};

const CreateStore2 = (oldState, state) => {
  return () => {
    return [].concat.call([], oldState, state);
  };
};


module.exports = {
  Cart,
  Cart2,
  Cart3,
  CreateStore2
};
