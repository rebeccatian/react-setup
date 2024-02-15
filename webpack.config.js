const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // what has to be compiled & from where
    entry: path.join(__dirname, "src", "index.js"),
    // where the compiled version should be outputted
    output: { 
        path: path.join(__dirname, "build"), 
        filename: "index.bundle.js" ,
        publicPath: "auto"
    },
    // the mode/env of our production
    mode: process.env.NODE_ENV || "development",
    // used to import anything from src folder and node_modules in relative paths
    resolve: { 
        modules: [
            path.resolve(__dirname, "src"), "node_modules"
        ]
    },
    // tells webpack-dev-server what files are needed to be served
    devServer: {
        static: { 
            directory: path.join(__dirname, "src")
        }
    },
    // listens for file extensions and matches the loader to them
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                type: "asset"
            },
        ],
    },
    plugins: [
        // needed to tell server that index.bundle.js should be injected into index.html
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};