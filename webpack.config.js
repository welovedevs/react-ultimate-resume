const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/package/index.js',
    devtool: 'source-map',
    output: {
        filename: 'index.js',
        library: {
            type: 'umd',
            name: '@welovedevs/react-ultimate-resume'
        }
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx']
    },
    optimization: {
        minimize: false
    },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-env',
                            [
                                '@babel/preset-typescript',
                                {
                                    isTSX: true,
                                    allExtensions: true
                                }
                            ]
                        ],
                        plugins: [
                            'babel-plugin-inline-react-svg',
                                [
                                '@babel/plugin-transform-runtime',
                                {
                                    regenerator: true
                                }
                            ],
                            '@babel/plugin-proposal-optional-chaining',
                        ]
                    }
                }
            },
            { test: /\.svg/, type: 'asset/inline' },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    }
};
