'use strict';

const nano = require('nano')('http://127.0.0.1:5984/');
const winston = require('winston');

const usermodels = require('./UserModels');

function createDbConnection({ dbName = 'pragmaticprogrammer', name = 'users' } = {}) {
  return new Promise((resolve) => {
    nano.db.create(dbName, (err) => {
      if (!err) {
        const couchDBName = nano.use(dbName);
        return insertInitialDocument({ dbName: couchDBName, name })
                  .then(() => {
                    resolve(retrieveDocument({ dbName: couchDBName , name }));
                  });
      } else {
        const db = nano.use(dbName);
        resolve(retrieveDocument({ dbName: db, name }));
      }
    });
  });
}

function retrieveDocument({dbName, name}) {
  return new Promise((resolve, reject) => {
    dbName.get(name, (err, body) => {
      if (!err) {
        resolve(body);
      }
      reject(err);
    });
  });
}

function insertInitialDocument({dbName, name}) {
  return new Promise((resolve, reject) => {
    dbName.insert(usermodels, name, (err, body) => {
      if (!err) {
        winston.info(`Created ${name} table: ${usermodels}`);
        resolve(body);
      }
      winston.log('error', 'Database Connection Error', {err});
      reject(usermodels);
    });
  });
}

function dbActions({ dbName = 'pragmaticprogrammer', name = 'users' } = {}) {
  return createDbConnection({dbName, name});
}

dbActions();
