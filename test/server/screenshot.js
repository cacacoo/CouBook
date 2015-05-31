var viewport = {
        width: 1280,
        height: 1024
    },
    casper = require("casper").create({
        viewportSize: viewport
    });

var screenshotNow = new Date(),
    screenshotDateTime = new Date().toUTCString(),
    screenshotUrl = casper.cli.args[0],
    screenshotSelector = casper.cli.args[1],
    agendaSelector = casper.cli.args[2],
    screenshotFileName = casper.cli.args[3];


casper.start(screenshotUrl, function() {
    this.echo('current location is ' + this.getCurrentUrl(), 'info');
});

//casper.thenOpen(screenshotUrl, function() {
//    this.wait(5000);
//});
//
//casper.then(function() {
//    this.captureSelector('./capture/' + screenshotFileName + '-' + viewport.width + 'x' + viewport.height + '.png', screenshotSelector);
//});

casper.then(function() {
    this.echo("eval page");
    var content = this.evaluate(function(sel) {
        return Array.prototype.map.call(document.querySelectorAll('.communtyHide .more_contents'), function(v) {
            return v.innerHTML;
        }).join('<br/>');
    }, agendaSelector);

    this.echo(content);

});

casper.run();