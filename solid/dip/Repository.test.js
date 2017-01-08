const test = require('ava');
const sinon = require('sinon');

const Repository = require('./Repository');

class TestRepository extends Repository {
  constructor(db) {
    super(db);
  }
}

let db;
test.beforeEach(t => {
  db = {
    retrieve: sinon.stub(TestRepository, 'insert'),
    insert: sinon.stub(TestRepository, 'insert'),
    update: sinon.stub(TestRepository, 'update'),
    delete: sinon.stub(TestRepository, 'delete')
  };
});

