var config = require( "./../config" ),
    logger = require( "./../logger" ),
    mongoose = require( "mongoose" );

exports.open = function() {

    mongoose.connect( config.db.url );

    var db = mongoose.connection;

    db.on("error", logger.error.bind(logger, "mongoose connection error!"));
    db.once("open", function (callback) {

        logger.log("mongoose connected!");
        logger.log(db.host, db.port, db.name);

    });

};