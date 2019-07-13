"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require("bcryptjs");
var mongoose = require("mongoose");
var projectaudioSchema = new mongoose.Schema({
    description: { type: String },
    ausio: { type: String },
    projectname: { type: String },
    dataaudio_id: { type: String , unique: true, required: true, dropDups: true  }
});


var projectaudio = mongoose.model('projectaudio', projectaudioSchema);
exports.default = projectaudio;
