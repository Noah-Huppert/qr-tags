"use strict";

// NPM require
var rek = require("rekuire");

var express = require("express");
var Sequelize = require("sequelize");
var passport = require("passport");

// NPM configuration
// -- sequelize
if(!process.env.DATABASE_URL) throw "\"DATABASE_URL\" environment variable must be set";
var sequelize = new Sequelize(process.env.DATABASE_URL);

// -- passport
var PassportGoogleStrategy = require("passport-google").Strategy;

// Project require