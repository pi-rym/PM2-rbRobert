module.exports = {
    entry: {
        index : "./scripts/index.js",
        createMovie:"./scripts/createMovie.js"

    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js",
    },
}

