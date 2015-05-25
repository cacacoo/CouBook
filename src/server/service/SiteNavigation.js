var express = require("express"),
    fs = require("fs"),
    logger = require("./../logger"),
    ImageRepository = require("../datasource/collection/SiteImageRepository"),
    site = require("./modules/Site"),
    router = express.Router();

router.get("/title", function(req, res, next) {

    if(!req.query.url) {
        res.send('');
    }
    else {
        site.title(req.query.url)
            .then(function (result) {
                res.send(result);
            })
            .catch(function (err) {
                res.send(err);
            });
    }
});

router.get("/capture/list", function(req, res, next) {
    ImageRepository.findAll()
        .then(function(image) {
            res.send(image);
        })
        .catch(function(err) {
            winston.log("error", err);
            res.send(err);
        });
});

router.post("/capture", function(req, res, next) {

    var body = req.body,
        url = body.url,
        selector = body.selector || "body";

    if(!url || !selector) {
        res.send({
            encode: ""
        });
        return next();
    }

    ImageRepository.find(url, selector).then(function(imageData) {

        if(imageData) {
            res.send(imageData);
        }
        else {
            site.capture(url)
                .then(function (attachment) {
                    res.send(attachment)
                })
                .catch(function (err) {
                    res.send(err);
                });
        }

    });


});


module.exports = router;