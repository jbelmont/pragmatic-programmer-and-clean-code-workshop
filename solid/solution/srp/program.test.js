'use strict';

const test = require('tape');
const sinon = require('sinon');

const program = require('./program');

let soldiers, soldiersPayload, readSoldiersStub, formatSoldiersStub, writeSoldiersStub, sandbox;
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

  sandbox = sinon.sandbox.create();
  readSoldiersStub = sandbox.stub(program, 'readSoldiers').returns(Promise.resolve(soldiersPayload));
  formatSoldiersStub = sandbox.stub(program, 'formatSoldiers');
  formatSoldiersStub.withArgs().throws('TypeError');
  formatSoldiersStub.withArgs(soldiersPayload).returns(soldiers);
  writeSoldiersStub = sandbox.stub(program, 'writeSoldiers');
  writeSoldiersStub.withArgs().throws({
    err: {
      message: '400'
    }
  });
  writeSoldiersStub.withArgs(soldiers).returns(200);
  t.end();
});

test('Practice Concepts in single responsibility principle', nest => {
  nest.test('readSoldiers should return an array of soldiers', assert => {
    readSoldiersStub().then(soldiers => {
      const expected = soldiersPayload;
      assert.deepEqual(soldiers, expected, 'should return an array of soldiers');
      assert.end();
    });
  });

  nest.test('calling formatSoldiers with no args should return an error', assert => {
    try {
      formatSoldiersStub();
    } catch(e) {
      sinon.assert.threw(formatSoldiersStub, 'TypeError');
      assert.end();
    }
  });

  nest.test('calling formatSoldiers with 1 arg should return a JSON object', assert => {
    const formatSoldiers = formatSoldiersStub(soldiersPayload);
    const expected = soldiers;
    assert.deepEqual(formatSoldiers, expected, 'should return a json object with soldiers');
    assert.end();
  });

  nest.test('calling createFile with no args should return an error', assert => {
    try {
      writeSoldiersStub();
    } catch (e) {
      sinon.assert.threw(writeSoldiersStub);
    }
    assert.end();
  });

  nest.test('calling createFile with 1 arg should return no error and a payload', assert => {
    writeSoldiersStub(soldiers);
    sinon.assert.calledWith(writeSoldiersStub, soldiers);
    assert.end();
  });

});

test('teardown', t => {
  sandbox.restore();
  t.end();
});
