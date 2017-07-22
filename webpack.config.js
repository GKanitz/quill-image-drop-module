var path = require('path');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin')

module.exports = {
    entry: "./src/ImageDrop.js",
    output: {
        path: __dirname,
        library: 'ImageDrop',
        libraryTarget: 'umd',
        filename: "image-drop.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        "presets": [["es2015", { "modules": false }]],
                        "plugins": ["babel-plugin-transform-class-properties"]
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'raw-loader'
                }]
            }
        ]
    },
    plugins: [
        //new UglifyJsPlugin()
    ]
};
