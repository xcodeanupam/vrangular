"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_1 = require("./routes/controllers/user");
var project_1 = require("./routes/controllers/project");


function setRoutes(app) {
    var router = express.Router();
    var userCtrl = new user_1.default();
    var projectCtrl = new project_1.default();
    
    //user functions
    router.route('/login').post(userCtrl.login);
    router.route('/loginweb').post(userCtrl.weblogin);
    router.route('/user').post(userCtrl.insert);

    //project functions
    router.route('/addproject').post(projectCtrl.insert);
    router.route('/getProjects').post(projectCtrl.getAllproject);

    app.use('/api', router);
}
exports.default = setRoutes;
