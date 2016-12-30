const test = require('tape');

test('Practice Dry Principles', nest => {

    nest.test('Test ugly average function', assert => {
       const {uglyAverage} = require('./program');
       assert.ok(uglyAverage());
       assert.end();  
    });

    nest.test('Call average function', assert => {
        const {average} = require('./program');
        assert.ok(average, 'Average does exist');

        const numbers = [1, 2, 3, 4, 5];
        const actual = average(numbers);
        const expected = 3;
        assert.equal(actual, expected);
        assert.end();
    });
});