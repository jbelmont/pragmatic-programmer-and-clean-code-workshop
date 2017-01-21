const test = require('ava');
const td = require('testdouble');

test.before('setup', t => {
  t.pass(true);
});

test.after('teardown', t => {
  t.pass(true);
});

test('cars should have be vehicles', assert => {
  const {Car} = require('./program');
  const expected = {
    make: 'Ford',
    model: 'Explorer'
  };
  const actual = Car.info();
  assert.is(actual, expected, `should return ${expected}`);
});
