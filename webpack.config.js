const path = require('path');
const glob = require('glob');

module.exports = {
    entry: {
        'bundle.js': glob.sync('./build/static/?(js|css|media)/main.*.?(js|css)').map((f) => path.resolve(__dirname, f))
    },
    mode: 'development',
    optimization: {
        minimize: false
    },
    devtool: 'source-map',
    output: {
        filename: 'index.js'
    },
    resolve: {
        roots: [__dirname, path.resolve(__dirname, 'build')]
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    }
};
