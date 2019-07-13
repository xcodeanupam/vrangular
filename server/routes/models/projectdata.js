"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require("bcryptjs");
var mongoose = require("mongoose");
var projectdataSchema = new mongoose.Schema({
    description: { type: String },
    model: { type: String },
    projectname: { type: String },
    data_id: { type: String , unique: true, required: true, dropDups: true  }
});


var projectdata = mongoose.model('projectdata', projectdataSchema);
exports.default = projectdata;
