const test = require('ava');

test('Test ugly average function', t => {
    const {uglyAverage} = require('./program');
    t.truthy(uglyAverage, 'uglyAverage does exist');

    // calling uglyAverage returns hard-coded value
    const actual = uglyAverage();
    const expected = 10; // please correct by looking at program.js.
    t.is(actual, expected, `uglyAverage should return a number but not ${expected}`);
});

test('Implement average function', t => {
    const {average} = require('./program');
    t.truthy(average, 'average does exist');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = average(numbers);
    const expected = 5.5;
    t.is(actual, expected, `average should return ${expected}`);
});