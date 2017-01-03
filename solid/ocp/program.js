function ShoppingCart(cart) {
  this.cart = cart;
}

ShoppingCart.prototype.getCart = () => {
  return this.cart;
};

module.exports = {
  ShoppingCart
};
