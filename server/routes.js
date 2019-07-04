"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_1 = require("./routes/controllers/user");



function setRoutes(app) {
    var router = express.Router();
    var userCtrl = new user_1.default();

    //user functions
    router.route('/login').post(userCtrl.login);
    router.route('/loginweb').post(userCtrl.weblogin);
    router.route('/user').post(userCtrl.insert);
    
    app.use('/api', router);
}
exports.default = setRoutes;
