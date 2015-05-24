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

module.exports = router;