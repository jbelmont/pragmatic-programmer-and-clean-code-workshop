'use strict';

class Db {
  insert() {}
  update() {}
  delete() {}
  retrieve() {}
}

function Database() {}

Database.prototype.insert = function() {};
Database.prototype.update = function() {};
Database.prototype.delete = function() {};
Database.prototype.retrieve = function() {};

module.exports = {
  Db,
  Database
};
