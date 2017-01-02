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

const writeSoldiers = () => {
  return formatSoldiers()
    .then(soldiers => {
      fs.writeFile(join(__dirname, 'soldiers.json'), JSON.stringify(soldiers), (err) => {
        if (err) {
          throw err;
        }
      });
    });
};

exports.readSoldiers = readSoldiers;
exports.formatSoldiers = formatSoldiers;
exports.writeSoldiers = writeSoldiers;
