'use strict';

function uglyAverage() {
  var numbers = [1, 2, 3, 4, 5];

  var sum = 0, i;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

function uglyStandardDeviation(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const avg = sum / numbers.length;

  let summation = 0;
  for (let i = 0; i < numbers.length; i++) {
    summation += Math.pow(Math.abs(numbers[i] - avg), 2);
  }
  return Number(Math.sqrt(summation / numbers.length).toFixed(2));
}

module.exports = {
  uglyAverage,
  uglyStandardDeviation
};