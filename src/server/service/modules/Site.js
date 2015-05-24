var logger = require("../../logger"),
    Q = require("q"),
    Spooky = require("spooky");

function makeSpooky(url) {


    
}

function title( url ) {

    return Q.promise( function( resolve, reject, notify ) {

        var spooky = new Spooky({
            child: {
                transport: 'http'
            },
            casper: {
                logLevel: 'debug',
                verbose: true
            }
        }, function (err) {

            if (err) {
                reject({
                    error: err,
                    stack: err.stack
                });

                return next();
            }

            spooky.start( url );
            spooky.then(function () {

                this.emit('complete', this.evaluate(function () {
                    return document.title;
                }));

            });

            spooky.run();
        });

        spooky.on('error', function (e, stack) {

            logger.error(e);

            reject({
                error: e,
                stack: stack
            });

        });

        spooky.on('console', function (line) {
            logger.log("[Spooky] " + line);
        });

        spooky.on('complete', function (result) {
            resolve(result);
        });

    } );

}

exports.title = title;