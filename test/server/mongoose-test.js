var mongoose = require('mongoose');
var Book = require('../../src/server/datasource/collection/Book');
var SiteImage = require('../../src/server/datasource/collection/SiteImage');

mongoose.connect('mongodb://localhost/coubook');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {

    Book.find(function (err, aCouBook) {
        if (err) return console.error(err);

        SiteImage.find(function(err, image) {
            if (err) return console.error(err);

            console.log(image)
        });

        console.log(aCouBook)
    });

});