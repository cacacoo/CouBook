var logger = require("../../logger"),
    Q = require("q"),
    Spooky = require("spooky");

var defaultOption = {
    child: {
        transport: 'http'
    },
    casper: {
        logLevel: 'debug',
        verbose: true
    }
};

function action(action, error, option) {

    var spooky = new Spooky(option || defaultOption, function (err) {

        if (err) {
            error({
                error: err,
                stack: err.stack
            });
        }
        else {
            action(spooky);
            spooky.run();
        }

    } );

    spooky.on('error', function (e, stack) {

        logger.error(e);

        error({
            error: e,
            stack: stack
        });

    });

    spooky.on('console', function (line) {
        logger.log("[Spooky] " + line);
    });

}

function title( url ) {

    return Q.promise( function( resolve, reject, notify ) {

        action(
            function getTitle(spooky) {

                spooky.start( url );
                spooky.then(function () {
                    this.emit('complete', this.evaluate(function () {
                        return document.title;
                    }));
                });

                spooky.on('complete', function (result) {
                    resolve(result);
                });

            },
            function errorHandle(err) {
                reject(err);
            }
        );

    } );
}

function capture( url, fileName, selector ) {

    return Q.promise( function( resolve, reject, notify ) {

        action(
            function getTitle(spooky) {

                spooky.start( url );
                spooky.then(function() {

                    this.captureSelector("./hello.png", "#header");
                    this.emit('complete', this.evaluate(function () {
                        return "./hello.png";
                    }));
                });

                spooky.on('complete', function (result) {
                    resolve(result);
                });

            },
            function errorHandle(err) {
                reject(err);
            }
        );

    } );
}

exports.title = title;
exports.capture = capture;