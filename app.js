var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const userRouter = require('./src/routes/user.router');


var app = express();

app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', userRouter);

module.exports = app;
