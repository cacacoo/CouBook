var express = require("express"),
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
            .then(function (result) {
                res.send("<img src='" + result + "'>");
            })
            .catch(function (err) {
                res.send(err);
            });
    }
});


module.exports = router;