'use strict';

const fs = require('fs');
const {join} = require('path');

const SOLDIER_CSV = join(__dirname, '../../data/soldiers.csv');
const SOLDIER_JSON = join(__dirname, 'soldiers.json');

const readSoldiersFormatSoldiersAndWriteSoldiers = () => {
  return fs.readFile(SOLDIER_CSV, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const soldiers = data
      .trim()
      .split('\n')
      .map(soldier => soldier.split(','))
      .map((field) => {
        return {
          name: field[0],
          rank: field[1],
          branch: field[2]
        };
      });
    return fs.writeFile(SOLDIER_JSON, JSON.stringify(soldiers), (err) => {
      if (err) {
        throw err;
      }
    });
  });
};

const readSoldiers = (cb) => {
  return fs.readFile(SOLDIER_CSV, (err, data) => {
    if (err) {
      throw cb(err);
    }
    return cb(data);
  });
};

const formatSoldiers = (soldiers) => {
  return soldiers
    .map(soldier => soldier.split(','))
    .map((field) => {
      return {
        name: field[0],
        rank: field[1],
        branch: field[2]
      };
    });
};

const writeSoldiers = (soldiers, cb) => {
  return fs.writeFile(SOLDIER_JSON, JSON.stringify(soldiers), (err, data) => {
    if (err) {
      return cb(err);
    }
    return cb(null, data);
  });
};

const removeSoldiers = (file, cb) => {
  return fs.unlink(SOLDIER_JSON, (err) => {
    if (err) {
      return cb(err);
    }
    return cb('Removed File');
  });
};

module.exports = {
  readSoldiersFormatSoldiersAndWriteSoldiers,
  readSoldiers,
  formatSoldiers,
  writeSoldiers,
  removeSoldiers
};
