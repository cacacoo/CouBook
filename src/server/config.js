var path = require("path"),
    dist = path.resolve("./dist");

module.exports = {
    profile: "develop",
    livereloadPort: 35729,
    path: dist,
    port: 1980,
    logger: {
        basePath: path.resolve("./log/express.out")
    },
    db: {
        name: "CouBook",
        url: "mongodb://localhost/coubook"
    }
};