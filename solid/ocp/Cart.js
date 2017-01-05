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

module.exports = {
  Cart
};
