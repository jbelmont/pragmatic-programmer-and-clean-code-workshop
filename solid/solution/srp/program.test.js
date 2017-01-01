'use strict';

const test = require('tape');
const sinon = require('sinon');

const program = require('./program');

let soldiers, soldiersPayload, soldiersField, readSoldiersStub, formatSoldiersStub, sandbox;
test('setup', t => {
  soldiers = [
    {
      name: 'John Rambo',
      rank: 'Sergeant First Class',
      branch: 'Army'
    },
    {
      name: 'Chuck Norris',
      rank: 'Tech Sergeant',
      branch: 'Air Force'
    },
    {
      name: 'John Doe',
      rank: 'Private',
      branch: 'Marines'
    },
    {
      name: 'Luke Cage',
      rank: 'Sergeant',
      branch: 'Marines'
    },
    {
      name: 'Guy Dude',
      rank: 'Petty Officer',
      branch: 'Navy'
    }
  ];

  soldiersPayload = [
    'John Rambo,Army,Sergeant First Class',
    'Chuck Norris,Air Force,Tech Sergeant',
    'John Doe,Marines,Private',
    'Luke Cage,Marines,Sergeant',
    'Guy Dude,Navy,Petty Officer'
  ];

  soldiersField = {
    name: 'John Doe',
    rank: 'Private',
    branch: 'Coast Guard'
  };

  sandbox = sinon.sandbox.create();
  readSoldiersStub = sandbox.stub(program, 'readSoldiers').returns(soldiersPayload);
  formatSoldiersStub = sandbox.stub(program, 'formatSoldiers').returns(soldiers);
  t.end();
});

test('Practice Concepts in single responsibility principle', nest => {

  nest.test('readSoldiers should return an array of soldiers', assert => {
    const getSoldiers = readSoldiersStub();
    const expected = soldiersPayload;
    assert.deepEqual(getSoldiers, expected, 'should return an array of soldiers');
    assert.end();
  });

  nest.test('formatSoldiers should return a JSON object', assert => {
    const formatSoldiers = formatSoldiersStub();
    const expected = soldiers;
    assert.deepEqual(formatSoldiers, expected, 'should return a json object with soldiers');
    assert.end();
  });

});

test('teardown', t => {
  sandbox.restore();
  t.end();
});
