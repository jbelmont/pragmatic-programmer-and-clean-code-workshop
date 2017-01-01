'use strict';

const fs = require('fs');
const {join} = require('path');

const readSoldiers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(join(__dirname, '../../../data/soldiers.csv'), (err, data) => {
      if (err) {
        reject(err);
      }
      const soldiers = data.toString().trim().split('\n');
      resolve(soldiers);
    });
  });
};

const formatSoldiers = () => {
  return readSoldiers()
    .then(soldiers => {
      return soldiers.map(soldier => soldier.split(',')).map((field) => {
        return {
          name: field[0],
          rank: field[1],
          branch: field[2]
        };
      });
    });
};

exports.readSoldiers = readSoldiers;
exports.formatSoldiers = formatSoldiers;
