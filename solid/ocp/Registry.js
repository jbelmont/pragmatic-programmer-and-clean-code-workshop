'use strict';

function Registry(defaultValue) {
  this._defaultValue = defaultValue;
  this._values = Object.create(null);
}

Registry.prototype.getState = function(name) {
  var value;
  if (Object.prototype.hasOwnProperty.call(this._values, name)){
    value = this._values[name];
  } else {
    value = this._defaultValue;
  }
  return value;
};

Registry.prototype.registerState = function (name, value) {
  this._values[name] = value;
};

class CreateStore {
  constructor(reducers, preloadedState) {
    this.reducers = reducers || [];
    this.preloadedState = preloadedState;
  }

  getPreloadedState() {
    return this.preloadedState;
  }

  getNewState(state, action) {
    return this.reducers.reduce((state, reducer) => {
      return reducer.getNewState(state, action);
    }, state);
  }

  register(reducer) {
    this.reducers.push(reducer);
  }
}

module.exports = {
  Registry,
  CreateStore
};
