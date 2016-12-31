const test = require('ava');

test('Test ugly average function', t => {
    const {uglyAverage} = require('./program');
    t.truthy(uglyAverage, 'uglyAverage does exist');

    // calling uglyAverage returns hard-coded value
    const actual = uglyAverage();
    const expected = 3;
    t.is(actual, expected, 'uglyAverage returns hard-coded value of 3');
});

test('Test refactored average function', t => {
    const {
        average
    } = require('./program');

    t.truthy(average, 'average does exist');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = average(numbers);
    const expected = 5.5;
    t.is(actual, expected, 'average returns 5.5');
});

test('Test refactored average function with other implementation', t => {
    const {
        average2
    } = require('./program');

    t.truthy(average2, 'average2 does exist');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = average2(numbers);
    const expected = 5.5;
    t.is(actual, expected, 'average2 returns 5.5');
});