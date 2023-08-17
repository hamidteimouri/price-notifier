var express = require('express');
//var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var pairsRouter = require('./routes/pairs');
var dbConnection = require('./database/config');
dbConnection.sync().then(() => {
    console.log("synced")
}).catch((err) => {
    console.log("err :" + err)
})

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/pairs', pairsRouter);

module.exports = app;
