var express = require('express');
var app = express();
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // render the error page
    const response = { status: true, message: "Oops something went wrong", data: { detail: err.message, error: req.app.get('env') === 'development' ? err : {} } }
    res.status(err.status || 500).send(response);
});