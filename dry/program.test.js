const test = require('tape');

test('Practice Dry Principles', nest => {

    nest.test('Test ugly average function', assert => {
       const {uglyAverage} = require('./program');
       assert.ok(uglyAverage());
       assert.end();  
    });
});