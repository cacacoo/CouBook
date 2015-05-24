var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    config = require('./config'),
    winston = require('winston');

winston.profile(config.profile);
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
//        new (winston.transports.File)({ filename: config.logger.basePath })
        new (winston.transports.DailyRotateFile)({
            filename: config.logger.basePath,
            datePattern: config.logger.pattern
        })
    ]
});

var level = {
    "SILLY": "silly",
    "DEBUG": "debug",
    "VERBOSE": "verbose",
    "INFO": "info",
    "WARN": "warn",
    "ERROR": "error"
};

function logging(level, args) {
    var toArray = Array.prototype.slice.call(args);
    toArray.unshift(level);
    logger.log.apply(logger, toArray);
}

Object.keys(level).forEach( function(v) {
    exports[level[v]] = (function(key) {
        return function() {
            logging(level[key], arguments);
        }
    })(v);
} );

exports.log = function() {
    logging(level.INFO, arguments);
};

var logDir = path.dirname(config.logger.basePath);
if(!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, 0766, function(err){
        if(err) {
            console.error("create logging directory failed...", err);
            throw new Error(err);
        }
        logger.log("info", "log directory created.", logDir);
    });
}

logger.log("info", "logger initialized.");