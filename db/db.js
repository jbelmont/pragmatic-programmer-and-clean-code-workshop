const MongoClient = require('mongodb').MongoClient;

const {mongoUrl} = require('../constants');
const {users} = require('../models/users');

const mongoConnection = url => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {
            if (!err) {
                resolve(db);
            }
            reject(err);
        });
    });
};

const insertDocuments = db => {
    return new Promise((resolve, reject) => {
        const users = db.collection('users');
        // Insert some documents
        users.insertMany(users, (err, result) => {
            if (!err) {
                resolve(result);
            }
            reject(err);
        });
    });
};

const findDocuments = db => {
    return new Promise((resolve, reject) => {
        const users = db.collection('users');
        // Find some documents
        users.find({}).toArray((err, docs) => {
            if (!err) {
                resolve(docs);
            }
            reject(err);
        });
    });
};

let dbConnection;
const dbInit = () => {
    return mongoConnection(mongoUrl)
        .then(db => {
            dbConnection = db;
            return findDocuments(db)
                .then(docs => docs)
                .catch(err => {
                    winston.err(err);
                    return insertDocuments(dbConnection)
                        .then(result => {
                            winston.info(result);
                        })
                        .then(() => {
                            return findDocuments(dbConnection)
                                .then(docs => docs)
                                .catch(err => winston.err(err))
                        })
                        .catch(err => winston.err(err));
                })
        })
};

exports.dbInit = dbInit;