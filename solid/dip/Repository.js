'use strict';

const nano = require('nano')('http://127.0.0.1:5984/');
const {Db} = require('./Db');

class Repository extends Db {
  insert(dbName, name, body) {
    return new Promise((resolve, reject) => {
      const couchDBName = nano.use(dbName);
      return this.insertDoc({ dbName: couchDBName, name, body })
          .then(() => {
            resolve(this.retrieveDoc({ dbName: couchDBName , name }));
          })
          .catch(err => {
            reject(err);
          });
    });
  }

  insertDoc({dbName, name, body}) {
    return new Promise((resolve, reject) => {
      dbName.insert(body, name, (err, body) => {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  retrieveDoc({dbName, name}) {
    return new Promise((resolve, reject) => {
      dbName.get(name, (err, body) => {
        if (!err) {
          resolve(body);
        }
        reject(err);
      });
    });
  }

  update(dbName, name, body) {
    return new Promise((resolve, reject) => {
      dbName.insert(body, name, (err, body) => {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  delete(dbName, name) {
    const couchDBName = nano.use(dbName);
    return this.retrieveDoc({dbName: couchDBName, name})
      .then(body => {
        if (body) {
          const {
              _rev
          } = body;
          couchDBName.destroy(name, _rev, (err, body) => {
            if (!err) {
              return body;
            }
            throw err;
          });
        }
      });
  }

  retrieveDocument({dbName, name}) {
    const couchDBName = nano.use(dbName);
    return new Promise((resolve, reject) => {
      couchDBName.get(name, (err, body) => {
        if (!err) {
          resolve(body);
        }
        reject(err);
      });
    });
  }
}

module.exports = {
  Repository
};
