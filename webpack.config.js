const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const distDirectory = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './index.js',
    output: {
        path: distDirectory,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.html$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs'
        }),
        new CopyWebpackPlugin([{from: 'static'}])
    ]
};
