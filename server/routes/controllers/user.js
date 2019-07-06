"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var user_1 = require("../models/user");
var base_1 = require("./base");
var UserCtrl = (function (_super) {
    __extends(UserCtrl, _super);
    function UserCtrl() {

        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = user_1.default;

        _this.login = function (req, res) {
            console.log('hiiii', req);
            _this.model.findOne({ email: req.body.email }, function (err, user) {
                if (!user) {
                    console.log('not found', req.body.email);

                    return res.status(403).json({ user_not_found: 'user doesnot exist in Records' });
                }
                user.comparePassword(req.body.password, function (error, isMatch) {
                    if (!isMatch) {
                        console.log(' compare not found', req.body.email);

                        return res.status(403).json({ compare_not_found: 'password doesnot matched' });
                    }
                    console.log('hiiii', user);


                    var token = jwt.sign({ user: user }, 'love'); // , { expiresIn: 10 } seconds
                    res.status(200).json({ token: token, user: user });
                });
            });
        };


        _this.weblogin = function (req, res) {
            console.log('hiiii', req);
            _this.model.findOne({ email: req.body.email }, function (err, user) {
                if (!user) {
                    console.log('not found', req.body.email);

                    return res.sendStatus(403);
                }
                user.comparePassword(req.body.password, function (error, isMatch) {
                    if (!isMatch) {
                        console.log(' compare not found', req.body.email);

                        return res.sendStatus(403);
                    }

                    var token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
                    res.status(200).json({ token: token });
                });
            });
        };

        this.socialReg = function (req, res) {
            console.log('hiiii', req);
            _this.model.findOne({ email: req.body.email }, function (err, user) {
                if (!user) {
                    console.log('not found', req.body.email);
                    console.log('awesome');
                    var obj = new _this.model(req.body);
                    obj.save(function (err, item) {
                        // 11000 is the code for duplicate key error
                        if (err && err.code === 11000) {
                            res.sendStatus(400);
                        }
                        if (err) {
                            return console.error(err);
                        }
                        var token = jwt.sign({ user: item }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
                        res.status(200).json({ token: token });
                    });
                }
                else {
                    var token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
                    res.status(200).json({ token: token });
                }

            });
        };


        _this.getAllUsers = function (io, cb) {
            var allmessage = [];
            this.model.find({}, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                io.emit('allUsers', docs);
            });
        };
        return _this;
    }
    return UserCtrl;
}(base_1.default));
exports.default = UserCtrl;
