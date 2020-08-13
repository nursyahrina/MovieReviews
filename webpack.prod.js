const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MinifyPlugin = require('babel-minify-webpack-plugin');


module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            /* babel loader */
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MinifyPlugin({}, {
            comments: false
        })
    ]
})