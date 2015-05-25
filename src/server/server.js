var path = require("path"),
    express = require("express"),
    logger = require("./logger"),
    config = require("./config"),
    db = require("./datasource/db"),
    bodyParser = require('body-parser'),
    app = express();

function serverStart() {

    app.use(require("connect-livereload")({port: config.livereloadPort}));
    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(express.static(config.path));
    app.listen(config.port);


    logger.log( "[express] Server started." );

    db.open();

    app.use("/heartbeat", require("./service/HeartBeatRouter"));
    app.use("/book", require("./service/BookRouter"));
    app.use("/site/nav", require("./service/SiteNavigation"));
}

exports.start = serverStart;

serverStart();
