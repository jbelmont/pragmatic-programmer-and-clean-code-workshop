'use strict';

const fs = require('fs');
const {join} = require('path');

const readSoldiers = (cb) => {
  return fs.readFile(join(__dirname, '../../data/soldiers.csv'), (err, data) => {
    if (err) {
      return cb(err);
    }
    cb(null, data);
  });
};

const formatSoldiers = (soldiers) => {
  return soldiers.map(soldier => soldier.split(',')).map((field) => {
    return {
      name: field[0],
      rank: field[2],
      branch: field[1]
    };
  });
};

const writeSoldiers = (soldiers, cb) => {
  return fs.writeFile(join(__dirname, 'soldiers.json'), JSON.stringify(soldiers), (err) => {
    if (err) {
      return cb(err);
    }
    return cb(null, { status: 'created'});
  });
};

const removeSoldiers = (file, cb) => {
  return fs.unlinkSync(file, (err) => {
    if (err) {
      return cb(err);
    }
  });
};

module.exports = {
  readSoldiers,
  formatSoldiers,
  writeSoldiers,
  removeSoldiers
};
