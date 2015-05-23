var CouBook = require('./Book'),
    Q = require("q");

exports.findAll = function() {

    return Q.promise( function(resolve, reject, notify) {

        CouBook.find(function (err, bookList) {
            if (err) {
                console.error(err);
                reject(new Error(err));
            } else {
                resolve(bookList);
            }
        });

    } );

};

