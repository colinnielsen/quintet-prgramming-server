const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const cors = require('cors')

const resolutions = require("./routes/resolutions");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(bodyParser.json());
function notFound(req, res, next) {
    const url = req.originalUrl
    if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
      console.error('[404: Requested file not found] ', url)
    }
    res.status(404).send({error: 'Url not found', status: 404, url})
  }

app.use("/resolutions", resolutions);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;