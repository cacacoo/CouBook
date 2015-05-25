var express = require("express"),
    fs = require("fs"),
    logger = require("./../logger"),
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

router.post("/capture", function(req, res, next) {

    console.log(req.body);

    if(!req.body.url || !req.body.selector) {
        res.send("<img src=''>");
    }
    else {
        site.capture(req.body.url, './image.png', req.body.selector)
            .then(function (attachment) {
                console.log(">>>>>", attachment);
                fs.readFile(attachment, {encoding: 'base64'}, function(err, base64data) {
                    if( err ) {
                        res.send({
                            "success": false,
                            "encode": ""
                        })
                    }
                    res.send({
                        "success": true,
                        "encode": base64data
                    });
                });
            })
            .catch(function (err) {
                res.send(err);
            });
    }
});


module.exports = router;