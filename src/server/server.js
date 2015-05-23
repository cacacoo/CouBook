var path = require('path'),
    express = require('express'),
    winston = require('winston'),
    config = require('./config'),
    db = require("./datasource/db"),
    book = require("./datasource/collection/BookRepository"),
    app = express();

app.use(require('connect-livereload')({port: config.livereloadPort}));
app.use(express.static(config.path));
app.listen(config.port);

winston.profile(config.profile);
winston.log( 'info', '[express] Server started.' );

db.open();

app.get("/api/heartbeat", function(req, res) {
    winston.log( 'info', 'request accepted.', req.url );
    res.send(new Date());
});

app.get("/api/book/all", function(req, res) {
    console.log("find book");
    book.findAll()
        .then(function(bookList) {
            res.send(bookList);
        })
        .catch(function(err) {
            winston.log('error', err);
            res.send(err);
        });
});