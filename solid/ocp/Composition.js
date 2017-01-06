'use strict';

const projector = (state, fn) => {
  return fn(state);
};

const partialApplication = (fn, ...args) =>
  (...otherArgs) => {
    return fn.apply(this, Array.prototype.concat.call(...args, ...otherArgs));
  };

const partialApplicationFromRight = (fn, ...args) =>
  (...otherArgs) => {
    return fn.apply(this, Array.prototype.concat.call(...otherArgs, ...args));
  };

exports.partialApply = partialApplication;
exports.partialApplicationFromRight = partialApplicationFromRight;
exports.projector = projector;
