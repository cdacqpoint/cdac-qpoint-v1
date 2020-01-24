require('rootpath')();
require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Compression & helmet
var compression = require('compression');
var helmet = require('helmet');
// For React to use
var cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var commentsRouter = require('./routes/comments');
var postsRouter = require('./routes/posts');
var tagsRouter = require('./routes/tags');
var categoriesRouter = require('./routes/categories');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(compression()); // Compress all routes
app.use(express.static(path.join(__dirname, 'public')));

//Routes
const urlPrefix = process.env.URL_PREFIX || "/api/v1";
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(urlPrefix, postsRouter);
app.use(urlPrefix, tagsRouter);
app.use(urlPrefix, categoriesRouter);
app.use(urlPrefix, commentsRouter);

//Configurations
require('./config');

//Middlewares
require("./middlewares")

module.exports = app;
