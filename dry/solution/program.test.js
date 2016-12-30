const test = require('tape');

test('Practice Dry Principles', nest => {

    nest.test('Test ugly average function', assert => {
       const {uglyAverage} = require('./program');
       assert.ok(uglyAverage());
       assert.end();  
    });

    nest.test('Test refactored average function', assert => {
        const {
            average
        } = require('./program');

        assert.ok(average, 'average does exist');
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const actual = average(numbers);
        const expected = 5.5;
        assert.equal(actual, expected);
        assert.end();
    });

    nest.test('Test refactored average function with other implementation', assert => {
        const {
            average2
        } = require('./program');

        assert.ok(average2, 'average2 does exist');
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const actual = average2(numbers);
        const expected = 5.5;
        assert.equal(actual, expected);
        assert.end();
    });
});