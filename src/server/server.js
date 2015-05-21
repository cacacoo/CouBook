var path = require('path'),
    express = require('express'),
    winston = require('winston'),
    config = require('../../gulp/config'),
    db = require("./datasource/db"),
    app = express();

app.use(require('connect-livereload')({port: config.express.livereloadPort}));
app.use(express.static(config.express.path));
app.listen(config.express.port);

winston.profile(config.profile);
winston.log( 'info', 'server started' );

db.open();

app.get("/api/heartbeat", function(req, res) {
    winston.log( 'info', 'request accepted.', req.url );
    res.send(new Date());
});