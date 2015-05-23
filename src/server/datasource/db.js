var config = require( './../config' ),
    winston = require( 'winston' ),
    mongoose = require( 'mongoose' );

exports.open = function() {

    mongoose.connect( config.db.url );

    var db = mongoose.connection;

    db.on('error', winston.log.bind(winston, 'error', 'mongoose connection error!'));
    db.once('open', function (callback) {

        winston.log("info", "mongoose connected!");
        winston.log("info", db.host, db.port, db.name);

    });

};