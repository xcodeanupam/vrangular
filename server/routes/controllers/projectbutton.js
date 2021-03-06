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
var projectbutton_1 = require("../models/projectbutton");

var ProjectbuttonCtrl = (function (_super) {
    __extends(ProjectbuttonCtrl, _super);
    function ProjectbuttonCtrl() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.model = projectbutton_1.default;


        _this.getAllObjects = function (req, res) {
            _this.model.find({user_id: req.body.id}, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                console.log('all-- sub categories -- are', docs);
                res.json(docs);
            });
        };
    
        _this.getAprojectDetail = function (req, res) {
            _this.model.find({ projectname: req.body.id }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                console.log('product -- is', docs);
                res.json(docs);
            });
        };


        return _this;
    }
    return ProjectbuttonCtrl;
})(base_1.default, projectbutton_1.default);
exports.default = ProjectbuttonCtrl;

