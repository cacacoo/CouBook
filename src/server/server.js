var
    path = require('path'),
    express = require('express'),
    app = express()
;

app.use(require('connect-livereload')({port: config.express.livereloadPort}));
app.use(express.static(config.express.path));
app.listen(config.express.port);