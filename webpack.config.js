module.exports = {
    entry: "./src/main/client/Main.js",
    output: {
        path: "./src/main/client/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};