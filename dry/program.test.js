const test = require('ava');

test('Test ugly average function', t => {
    const {uglyAverage} = require('./program');
    t.truthy(uglyAverage, 'uglyAverage does exist');

    // calling uglyAverage returns hard-coded value
    const actual = uglyAverage();
    const expected = 10; // TODO: Please correct expected by looking at hardcoded values in program.js.
    t.is(actual, expected, `uglyAverage should return a number but not ${expected}`);
});

test('Implement average function', t => {
    const {average} = require('./program');

    // TODO: Add average implementation
    t.truthy(average, 'average does exist');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = average(numbers);
    const expected = 5.5;
    t.is(actual, expected, `average should return ${expected}`);
});

test('Test ugly standardDeviation', t => {
    const {uglyStandardDeviation} = require('./program');

    t.truthy(uglyStandardDeviation, 'uglyStandardDeviation does exist');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const actual = uglyStandardDeviation(numbers);
    const expected = 2.87;
    t.is(actual, expected, `standardDeviation returns ${expected}`);    
});

test('Implement standardDeviation', t => {
    // TODO: Add either a standardDeviation function or JavaScript Class
    // The name is arbitrary feel free to change it, I did in the solution.
    const {
        standardDeviation
    } = require('./program');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = standardDeviation(numbers);
    const expected = 2.87;
    t.is(actual, expected, `standardDeviation returns ${expected}`);
});