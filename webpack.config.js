const path = require('path');

module.exports = {
    entry: './scripts/index.js',
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 3000,
    },
    output: {
        library: 'main',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, "dist"),
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                // Tells webpack how to interpret TypeScript files into JavaScript-land
                loader: "ts-loader"
            },
            {
                test: /\.wasm$/,
                // Tells webpack how to interpret wasm files into JavaScript-land
                loader: "wasm-loader"
            },
            {
                test: /\.js$/,
                enforce: "pre",
                // Tells webpack to load source map
                use: ['source-map-loader']
            },
        ]
    },
}

