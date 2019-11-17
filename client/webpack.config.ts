const path = require("path");
module.exports = {
    entry: path.resolve(__dirname, "src") + "/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "main.js",
        chunkFilename: "[id].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                loader: "ts-loader"
            },
            {
                test: /\.(css)$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                loader: require.resolve("url-loader"),
                options: {
                    limit: 8000,
                    name: "[name].[hash:8].[ext]"
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 8080
    }
};


