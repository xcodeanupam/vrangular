const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
var morgan = require("morgan");
var nodemailer = require("nodemailer");
const app = express();
// app.use(function (req, res, next) {
//     if (req.header('x-forwarded-proto') !== 'https')
//         res.redirect(`https://${req.header('host')}${req.url}`)
//     else
//         next();
// });


var dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const mongoose = require("mongoose");
var setRoutes = require('./server/routes');

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Angular dist output folder
app.use('/', express.static(path.join(__dirname, '/dist')));
app.use('/', express.static(path.join(__dirname, '/public')));


//Set Port
const port = process.env.PORT || 49000;
app.set('port', port);


//setup MOngoose
var mongodbURI;

mongoose.Promise = global.Promise;
var mongodb = mongoose.connect('mongodb://grae:grae12345@ds347707.mlab.com:47707/vrangular', { useNewUrlParser: true });

mongodb
    .then(function (db) {
        console.log('Connected to MongoDB on');
        setRoutes.default(app);
        app.get('/*', function (req, res) {
            res.sendFile(path.join(__dirname, '/dist/index.html'));
        });
        if (!module.parent) {
            app.listen(app.get('port'), function () {
                console.log('VR App listening on port ' + app.get('port'));
            });
        }

    })
    .catch(function (err) {
        console.error(err);
    });

exports.app = app;
