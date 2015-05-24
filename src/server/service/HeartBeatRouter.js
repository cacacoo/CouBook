var express = require('express'),
    logger = require('../logger'),
    router = express.Router();

router.get("/", function(req, res) {
    logger.log( "heartbeat!" );
    res.send({
        "responseServerDate": new Date()
    });
});

module.exports = router;