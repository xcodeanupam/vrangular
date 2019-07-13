"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_1 = require("./routes/controllers/user");
var project_1 = require("./routes/controllers/project");
var projectdata_1 = require("./routes/controllers/projectdata");


function setRoutes(app) {
    var router = express.Router();
    var userCtrl = new user_1.default();
    var projectCtrl = new project_1.default();
    var ProjectdataCtrl = new projectdata_1.default();
    
    //user functions
    router.route('/login').post(userCtrl.login);
    router.route('/loginweb').post(userCtrl.weblogin);
    router.route('/user').post(userCtrl.insert);
    router.route('/updateUserProject').post(userCtrl.updateUserProject);

    //project functions
    router.route('/addproject').post(projectCtrl.insert);
    router.route('/getProjects').post(projectCtrl.getAllproject);

    //project data 3-d onject functions 
    router.route('/addprojectobject').post(ProjectdataCtrl.insert);
    router.route('/getProjectsObject').post(ProjectdataCtrl.getAllObjects);

    app.use('/api', router);
}
exports.default = setRoutes;
