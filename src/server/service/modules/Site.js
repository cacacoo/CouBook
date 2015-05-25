var logger = require("../../logger"),
    Q = require("q"),
    path = require('path'),
    fs = require('fs'),
    config = require('../../config');

var captureDir = config.capture.basePathDir;
if(!fs.existsSync(captureDir)) {
    fs.mkdirSync(captureDir, 0766, function(err){
        if(err) {
            console.error("create capture directory failed...", err);
            throw new Error(err);
        }
        logger.log("info", "capture directory created.", captureDir);
    });
}

exports.title = function title( url ) {

    return Q.promise( function( resolve, reject, notify ) {

        reject(new Error("not implements"));

    } );
};
exports.capture = function title( url ) {

    return Q.promise( function( resolve, reject, notify ) {

        reject(new Error("not implements"));

    } );
};;