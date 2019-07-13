"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require("bcryptjs");
var mongoose = require("mongoose");
var projectimagesSchema = new mongoose.Schema({
    description: { type: String },
    image: { type: String },
    projectname: { type: String },
    dataimage_id: { type: String , unique: true, required: true, dropDups: true  }
});


var projectimages = mongoose.model('projectimages', projectimagesSchema);
exports.default = projectimages;
