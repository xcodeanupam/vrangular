"use strict";
var __extends =
    (this && this.__extends) ||
    (function () {
        var extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (d, b) {
                    d.__proto__ = b;
                }) ||
            function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return function (d, b) {
            extendStatics(d, b);
            function __() {
                this.constructor = d;
            }


            d.prototype =
                b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
        };

    })();
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var base_1 = require("./base");
var project_1 = require("../models/project");

var ProjectCtrl = (function (_super) {
    __extends(ProjectCtrl, _super);
    function ProjectCtrl() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.model = project_1.default;


        _this.getAllproject = function (req, res) {
            _this.model.find({user_id: req.body.id}, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                console.log('all-- sub categories -- are', docs);
                res.json(docs);
            });
        };
     
        _this.getAproject = function (req, res) {
            _this.model.find({ categoryname: req.body.id }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                console.log('product -- is', docs);
                res.json(docs);
            });
        };


        return _this;
    }
    return ProjectCtrl;
})(base_1.default, project_1.default);
exports.default = ProjectCtrl;
