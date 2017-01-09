const test = require('ava');
const sinon = require('sinon');
const {Repository} = require('./Repository');

let insertStub, insertDoc, insertResult, retrieveStub, retrieveDoc, retrieveResult, retrieveErrorResult;
let deleteStub, updateStub, sandbox;
test.before(t => {
  sandbox = sinon.sandbox.create();
  const Repo = new Repository();
  insertStub = sandbox.stub(Repo, 'insert');
  insertStub.withArgs().returns(Promise.reject({
    'err': {
      'statusCode': '400'
    },
    'message': 'Missing name/document.'
  }));
  insertDoc = {
    dbName: 'pragmaticprogrammer',
    name: 'example1',
    body: {
      hero1: 'hero1',
      hero2: 'hero2'
    }
  };
  insertResult = {
    _id: 'example1',
    _rev: '5-933532f44c219640a9cd38a813316ac0',
    hero1: 'hero1',
    hero2: 'hero2'
  };
  insertStub.withArgs(insertDoc.dbName, insertDoc.name, insertDoc.body).returns(Promise.resolve(insertResult));
  updateStub = sandbox.stub(Repo, 'update');
  retrieveStub = sandbox.stub(Repo, 'retrieveDocument');
  retrieveDoc = {
    dbName: 'pragmaticprogrammer',
    name: 'example1'
  };
  retrieveResult = {
    _id: 'example1',
    _rev: '7-04aeae92f29821ac73c52b5569f5064e',
    hero1: 'hero1',
    hero2: 'hero2'
  };
  retrieveErrorResult = {
    error: {
      message: 'Improper arguments passed'
    }
  };
  retrieveStub.withArgs().returns(Promise.reject(retrieveErrorResult));
  retrieveStub.withArgs(retrieveDoc.dbName, retrieveDoc.name).returns(Promise.resolve(retrieveResult));
  deleteStub = sandbox.stub(Repo, 'delete');
  t.pass(true);
});

test.after('cleanup', t => {
  sandbox.restore();
  t.pass(true);
});

test('test insert method returns error object when given improper arguments', assert => {
  insertStub()
    .then(result => result)
    .catch(error => {
      const actual = error['err']['statusCode'];
      const expected = '400';
      assert.is(actual, expected, `should return status code of ${expected}`);
    });
});

test('test insert method returns an object when given proper arguments', assert => {
  insertStub(insertDoc.dbName, insertDoc.name, insertDoc.body).then(actual => {
    const expected = insertResult;
    assert.is(actual, expected, `should return ${expected}`);
  });
});

test('test retrieveDocument method returns error object when given improper arguments', assert => {
  retrieveStub()
    .then(result => result)
    .catch(error => {
      const actual = error['error']['message'];
      const expected = retrieveErrorResult.error.message;
      assert.is(actual, expected, `should return string: ${expected}`);
    });
});

test('test retrieveDocument method returns object when gien proper arugments', assert => {
  retrieveStub(retrieveDoc.dbName, retrieveDoc.name)
    .then(result => {
      const actual = result['hero1'];
      const expected = retrieveResult['hero1'];
      assert.is(actual, expected, `should return ${expected}`);
    });
});
