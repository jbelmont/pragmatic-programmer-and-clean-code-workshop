const test = require('ava');
const sinon = require('sinon');
const {Repository} = require('./Repository');

let insertStub, insertDoc, insertResult, retrieveStub, retrieveDoc, retrieveResult, retrieveErrorResult;
let deleteStub, deleteErrorResult, deleteDoc, updateStub, updateDoc, updateResult, updateErrorResult, sandbox;
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
  updateStub = sandbox.stub(Repo, 'update');
  updateDoc = {
    dbName: 'pragmaticprogrammer',
    name: 'example1',
    body: {
      songs: ['Everybody Want to Rule the World', 'Thriller', 'No Sleep for Brooklyn']
    }
  };
  updateResult = {
    body: {
      'songs': ['Everybody Want to Rule the World', 'Thriller', 'No Sleep for Brooklyn']
    }
  };
  updateErrorResult = null;
  updateStub.withArgs().returns(Promise.reject(updateErrorResult));
  updateStub.withArgs(updateDoc.dbName, updateDoc.name, updateDoc.body).returns(Promise.resolve(updateResult));
  deleteStub = sandbox.stub(Repo, 'delete');
  deleteErrorResult = 'GET /undefined 404';
  deleteDoc = {
    dbName: 'pragmaticprogrammer',
    name: 'example1'
  };
  deleteStub.withArgs().returns(Promise.reject(deleteErrorResult));
  deleteStub.withArgs(deleteDoc.dbName, deleteDoc.name).returns(Promise.resolve(null));
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

test('test retrieveDocument method returns object when given proper arugments', assert => {
  retrieveStub(retrieveDoc.dbName, retrieveDoc.name)
    .then(result => {
      const actual = result['hero1'];
      const expected = retrieveResult['hero1'];
      assert.is(actual, expected, `should return ${expected}`);
    });
});

test('test update method returns error object when given improper arguments', assert => {
  updateStub()
    .then(result => {
      assert.truthy(result);
    })
    .catch(err => {
      assert.falsy(err);
    });
});

test('test update method updates object and returns newer object', assert => {
  updateStub(updateDoc.dbName, updateDoc.name, updateDoc.body)
    .then(result => {
      const actual = result['songs'];
      const expected = ['Everybody Want to Rule the World', 'Thriller', 'No Sleep for Brooklyn'];
      assert.deepEqual(actual, expected, `should return the following songs: ${expected}`);
    });
});

test('test delete method returns error when passed improper arguments', assert => {
  deleteStub()
    .then(result => assert.truth(result))
    .catch(err => assert.is(deleteErrorResult, err, `should return ${err}`));
});

test('test delete method returns null when passed proper arguments', assert => {
  deleteStub(deleteDoc.dbName, deleteDoc.name)
    .then(result => assert.falsy(result))
    .catch(err => console.log(err));
});
