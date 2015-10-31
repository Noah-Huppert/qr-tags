"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/server/models/common-database-config");

module.export = function(sequelize) {
    var User = sequelize("User", function() {

    });
};