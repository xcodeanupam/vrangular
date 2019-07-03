"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var admin_1 = require("./routes/controllers/admin");
var user_1 = require("./routes/controllers/user");
var vendor_1 = require("./routes/controllers/vendor");
var product_1 = require("./routes/controllers/product");
var review_1 = require("./routes/controllers/review");
var bookmark_1 = require("./routes/controllers/bookmark");
var category_1 = require("./routes/controllers/category");
var subcategory_1 = require("./routes/controllers/subcategory");
var superuser_1 = require("./routes/controllers/superuser");
var mediacompany_1 = require("./routes/controllers/mediacompany");
var mediaproduct_1 = require("./routes/controllers/mediaproduct");
var exceldata_1 = require("./routes/controllers/exceldata");


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
