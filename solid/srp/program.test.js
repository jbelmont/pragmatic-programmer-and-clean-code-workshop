const test = require('ava');

test('test readSoldiersFormatSoldiersAndWriteSoldiers', t => {
  const {readSoldiersFormatSoldiersAndWriteSoldiers} = require('./program');
  t.truthy(readSoldiersFormatSoldiersAndWriteSoldiers, 'readSoldiersFormatSoldiersAndWriteSoldiers does exist');

  try {
    const action = readSoldiersFormatSoldiersAndWriteSoldiers();
    console.log(action);
  } catch(e) {
    console.log(e);
  }
});


