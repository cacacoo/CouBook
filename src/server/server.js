var path = require("path"),
    express = require("express"),
    logger = require("./logger"),
    config = require("./config"),
    db = require("./datasource/db"),
    app = express();

function serverStart() {

    app.use(require("connect-livereload")({port: config.livereloadPort}));
    app.use(express.static(config.path));
    app.listen(config.port);

    logger.log( "[express] Server started." );

    db.open();

    app.use("/heartbeat", require("./service/HeartBeatRouter"));
    app.use("/book", require("./service/BookRouter"));
}

exports.start = serverStart;

serverStart();
