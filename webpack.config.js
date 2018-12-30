const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
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
};