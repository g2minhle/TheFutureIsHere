const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // to build from html template

let plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
];

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
        ]
    },

    plugins: plugins,
};