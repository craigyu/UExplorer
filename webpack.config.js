module.exports = {
    entry: "./src/rest/public/Index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/src/rest/views"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    node: {
        fs: "empty",
    },
    module: {
        rules: [
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.ts$/, loader: 'ts' },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { test: /\.html/, loader: 'html' },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "babel-loader", query: { presets: ["react", "es2015", "stage-0" ] } }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};