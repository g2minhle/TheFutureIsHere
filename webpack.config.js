const HtmlWebpackPlugin = require('html-webpack-plugin'); // to build from html template

let plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
];

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: '[name].[contenthash].js',
        path: `${__dirname}/dist`
    },

    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    },
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: plugins,
};