const test = require('ava');
const sinon = require('sinon');
const {Repository} = require('./Repository');

let insertStub, updateStub, retrieveStub, deleteStub, sandbox;
test.before(t => {
  sandbox = sinon.sandbox.create();
  const Repo = new Repository();
  insertStub = sandbox.stub(Repo, 'insert');
  insertStub.withArgs().throws({
    'err': {
      'message': '400'
    },
    'message': 'Missing name/document.'
  });
  updateStub = sandbox.stub(Repo, 'update');
  retrieveStub = sandbox.stub(Repo, 'retrieveDocument');
  deleteStub = sandbox.stub(Repo, 'delete');
  t.pass(true);
});

test.after('cleanup', t => {
  sandbox.restore();
  t.pass(true);
});

test('test insert method in Repository Pattern throws expection when given improper arguments', assert => {
  try {
    insertStub();
  } catch (e) {
    sinon.assert.threw(insertStub);
    assert.pass(true);
  }
});
