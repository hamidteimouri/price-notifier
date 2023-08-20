const express = require('express');
//var path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const pairsRouter = require('./routes/targets');
const dbConnection = require('./database/config');
dbConnection.sync().then(() => {
    console.log("synced")
}).catch((err) => {
    console.log("err :" + err)
})


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/targets', pairsRouter);

module.exports = app;
