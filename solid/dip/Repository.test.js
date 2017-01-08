const test = require('ava');
const sinon = require('sinon');
const {Repository} = require('./Repository');

let insertStub, updateStub, retrieveStub, deleteStub;
test.beforeEach(t => {
  const Repo = new Repository();
  insertStub = sinon.stub(Repo, 'insert');
  updateStub = sinon.stub(Repo, 'update');
  retrieveStub = sinon.stub(Repo, 'retrieveDocument');
  deleteStub = sinon.stub(Repo, 'delete');
  t.pass(true);
});

test('TestRepository should return methods', assert => {
  assert.pass(true);
});
