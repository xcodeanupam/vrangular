"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require("bcryptjs");
var mongoose = require("mongoose");
var projectbuttonSchema = new mongoose.Schema({
    description: { type: String },
    button: { type: String },
    projectname: { type: String },
    dataaudio_id: { type: String , unique: true, required: true, dropDups: true  }
});


var projectbutton = mongoose.model('projectbutton', projectbuttonSchema);
exports.default = projectbutton;
