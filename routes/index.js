'use strict';

const express = require('express');
const router = express.Router();
const {join} = require('path');
const winston = require('winston');

const db = require(join(__dirname, '../db/db'));

db.dbInit()
  .then(values => {
    const data = {
      users: JSON.stringify(values)
    };

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', data);
    });
  });

module.exports = router;