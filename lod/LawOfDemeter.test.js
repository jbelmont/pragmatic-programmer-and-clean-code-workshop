const test = require('tape');

test('test object can call its own methods', assert => {
  const Demeter = require('./LawOfDemeter').Demeter;
  const expected = {
    name: 'Rambo',
    rank: 'Sergeant',
    specialty: ['guns', 'explosives', 'hand-to-hand combat', 'tanks', 'helicopters', 'tactics', 'being a badass']
  };
  const demeter = new Demeter(expected);
  const actual = demeter.getSoldier();
  assert.deepEqual(actual, expected, `should return ${expected}`);
  assert.end();
});

test('test calling methods on objects passed in to a method', assert => {
  const Demeter = require('./LawOfDemeter').Demeter;
  const expected = {
    height: 74.25,
    weight: 200,
    gender: 'male',
    age: 18
  };
  const soldier = {
    name: 'Rambo',
    rank: 'Sergeant',
    specialty: ['guns', 'explosives', 'hand-to-hand combat', 'tanks', 'helicopters', 'tactics', 'being a badass']
  };
  const demeter = new Demeter(soldier);
  const actual = demeter.soldierStats(expected);
  assert.deepEqual(actual, expected, `should return ${expected}`);
  assert.end();
});

test('test call methods on any objects we create', assert => {
  const Demeter = require('./LawOfDemeter').Demeter;
  const soldier = {
    name: 'Rambo',
    rank: 'Sergeant',
    specialty: ['guns', 'explosives', 'hand-to-hand combat', 'tanks', 'helicopters', 'tactics', 'being a badass'],
    years: 5
  };
  const demeter = new Demeter(soldier);
  const actual = demeter.getInformation({ exercise: 'pushups', branch: 'Army' });
  const expected = {
    name: 'Rambo',
    rank: 'Sergeant',
    specialty: ['guns', 'explosives', 'hand-to-hand combat', 'tanks', 'helicopters', 'tactics', 'being a badass'],
    years: 5,
    exercise: 'pushups',
    branch: 'Army'
  };
  assert.deepEqual(actual, expected, `should return ${expected}`);
  assert.end();
});

test('test any directly held component objects', assert => {
  const Demeter = require('./LawOfDemeter').Demeter;
  const soldier = {
    name: 'Rambo',
    rank: 'Sergeant',
    specialty: ['guns', 'explosives', 'hand-to-hand combat', 'tanks', 'helicopters', 'tactics', 'being a badass'],
    years: 5,
    job: 'programmer'
  };
  const demeter = new Demeter(soldier);
  const actual = demeter.civilianPlan.printPlan();
  const expected = 'Civilian Job Plan: programmer';
  assert.equal(actual, expected);
  assert.end();
});
