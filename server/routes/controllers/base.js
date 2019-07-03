"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multer = require("multer");
var UPLOAD_PATH = 'public/videos';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/videos');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + 'file'); //+ '-' + Date.now() + '.jpg'
    }
});
var upload = multer({ storage: storage }).single('avatar'); //path and name pf param
var BaseCtrl = (function () {
    function BaseCtrl() {
        var _this = this;
        // Get all
        this.getAll = function (req, res) {
            _this.model.find({}, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.json(docs);
            });
        };
        // Count all
        this.count = function (req, res) {
            _this.model.count(function (err, count) {
                if (err) {
                    return console.error(err);
                }
                res.json(count);
            });
        };
        // Insert
        this.insert = function (req, res) {
            console.log('insert data');
            var obj = new _this.model(req.body);
            console.log('user data',obj);
            obj.save(function (err, item) {
                // 11000 is the code for duplicate key error
                if (err && err.code === 11000) {
                    res.sendStatus(400);
                } 
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            });
        };
        this.search = function (req, res) {
            // console.log('search');
            _this.model.find({ username: { '$regex': req.params.username } }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                console.log(obj);
                res.json(obj);
            });
        };
        //send data to the 
        // Get by id
        this.get = function (req, res) {
            _this.model.findOne({ _id: req.params.id }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                res.json(obj);
            });
        };
        // Update by id
        this.update = function (req, res) {
            _this.model.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
                if (err) {
                    return console.error(err);
                }
                res.sendStatus(200);
            });
        };
        this.up = function (req, res) {
            if (req.body === '') {
                res.sendStatus(403);
            }
            var re;
            // console.log('hello from am');
            var x = upload(req, res, function (err) {
                if (err) {
                    // An error occurred when uploading
                    return;
                }
                // console.log('id',req.body._id);
                // console.log(req.file);  
                // console.log(req.file.filename);
                // console.log(req.file.path);
                re = req.file.filename;
                res.json(req.file.filename);
                // Everything went fine
            });
        };
        // Delete by id
        this.delete = function (req, res) {
            _this.model.findOneAndRemove({ _id: req.params.id }, function (err) {
                if (err) {
                    return console.error(err);
                }
                res.sendStatus(200);
            });
        };
    }
    return BaseCtrl;
}());
exports.default = BaseCtrl;