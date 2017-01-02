const test = require('ava');
const {join} = require('path');
const shell = require('shelljs');

test.before(assert => {
  const result = shell.rm(join(__dirname, 'soldiers.json'));
  assert.is(result.code, 0);
});

test('test readSoldiersFormatSoldiersAndWriteSoldiers', assert => {
  const {readSoldiersFormatSoldiersAndWriteSoldiers} = require('./program');
  assert.truthy(readSoldiersFormatSoldiersAndWriteSoldiers, 'readSoldiersFormatSoldiersAndWriteSoldiers does exist');

  try {
    const action = readSoldiersFormatSoldiersAndWriteSoldiers();
    assert.pass(action);
  } catch(e) {
    assert.fail(e);
  }
});

test('check if readSoldier returns a payload', assert => {
  const {readSoldiers} = require('./program');
  const expected = [
    'John Rambo,Army,Sergeant First Class',
    'Chuck Norris,Air Force,Tech Sergeant',
    'John Doe,Marines,Private',
    'Luke Cage,Marines,Sergeant',
    'Guy Dude,Navy,Petty Officer'
  ];
  readSoldiers(((err, data) => {
    if (err) {
      assert.falsy(err);
    }
    const soldiers = data.toString();
    assert.is(soldiers, expected, 'should return a list of soldiers');
  }));
});

test('test formatSoldiers', assert => {
  const {formatSoldiers} = require('./program');
  const soldiers = [
    'John Rambo,Army,Sergeant First Class',
    'Chuck Norris,Air Force,Tech Sergeant',
    'John Doe,Marines,Private',
    'Luke Cage,Marines,Sergeant',
    'Guy Dude,Navy,Petty Officer'
  ];
  const expected = [
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
  const actual = formatSoldiers(soldiers);
  assert.deepEqual(actual, expected, 'should return a nicely formatted json object');
});

test('test writeSoldiers', assert => {
  const {writeSoldiers} = require('./program');
  const soldiers = [
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
  const expected = 'created';
  writeSoldiers(soldiers, ((err, data) => {
    if (err) {
      assert.falsy(err);
    }
    const status = data.status;
    assert.is(status, expected, 'should return a status of created');
  }));
});

test('test removeSoldiers', assert => {
  const {removeSoldiers} = require('./program');
  const filePath = `${__dirname}/soldiers.json`;
  removeSoldiers(filePath, (err) => {
    if (err) {
      assert.falsy(err);
    }
    assert.pass('Removed soldier.json');
  });
});
