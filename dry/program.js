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

    let summation;
    for (let i = 0; i < numbers.length; i++) {
        summation += Math.pow(Math.abs(val - avg), 2);
    }
    return summation / numbers.length;
}

module.exports = {
    uglyAverage,
    uglyStandardDeviation
};