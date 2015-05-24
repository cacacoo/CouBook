var path = require("path"),
    dist = path.resolve("./dist");

module.exports = {
    profile: "develop",
    livereloadPort: 35729,
    path: dist,
    port: 1980,
    logger: {
        basePath: path.resolve("./logs/express.out"),
        pattern: ".yyyy-MM-dd"
    },
    db: {
        name: "CouBook",
        url: "mongodb://localhost/coubook"
    }
};