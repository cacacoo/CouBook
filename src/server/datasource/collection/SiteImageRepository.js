var SiteImage = require('./SiteImage'),
    Q = require("q"),
    logger = require( "../../logger" );

exports.findAll = function() {

    logger.log("SiteImage.findAll");

    return Q.promise( function(resolve, reject, notify) {

        SiteImage.find(function (err, imageList) {
            if (err) {
                reject(new Error(err));
            } else {
                resolve(imageList);
            }
        });

    } );

};

exports.findOne = function(url, selector) {

    logger.log("SiteImage.findOne", url, selector);

    return Q.promise( function(resolve, reject, notify) {

        SiteImage.findOne({ "url": url, "selector": selector }, function (err, image) {
            if (err) {
                reject(new Error(err));
            } else {
                resolve(image);
            }
        });

    } );

};

