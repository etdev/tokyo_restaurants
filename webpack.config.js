var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["./js/main.js", "./styles/main.scss"],
    output: {
        path: __dirname + "/build/",
        filename: "main.js",
        publicPath: "/build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
            { test: /\.html$/, loaders: ["html"] },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },
            { test: /\.jpg$/, loader: "file?name=images/[name].[ext]" },
            { test: /\.png$/, loader: "file?name=images/[name].[ext]" },
            { test: /\.html\.(slm|slim)$/, loaders: ["html", "slm"] }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ]
};
