"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require("bcryptjs");
var mongoose = require("mongoose");
var projectSchema = new mongoose.Schema({
    user_id: { type: String },
    projectname: { type: String },
    projectDiscription: { type: String },
    project_id: { type: String , unique: true, required: true, dropDups: true  }
});


var project = mongoose.model('project', projectSchema);
exports.default = project;
