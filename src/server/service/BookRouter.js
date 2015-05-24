var express = require("express"),
    logger = require("../logger"),
    book = require("../datasource/collection/BookRepository"),
    router = express.Router();

router.use(function timeLog(req, res, next) {
    logger.log("Requested BookRouter ## Time: ", Date.now());
    next();
});

router.get("/api/item/:urn", function(req, res) {
    logger.log("find urn > " + req.params.urn);
    res.send("Hello~");
});

router.get("/api/all", function(req, res) {
    logger.log("find all book");
    book.findAll()
        .then(function(bookList) {
            res.send(bookList);
        })
        .catch(function(err) {
            winston.log("error", err);
            res.send(err);
        });
});

module.exports = router;