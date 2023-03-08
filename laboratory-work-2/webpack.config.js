const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, './dist'),
        },
        hot: false,
        liveReload: true,
        compress: true,
        port: 9000,
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
        }),
        new HtmlWebpackPlugin({ 
            title: 'webpack Boilerplate', 
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({ 
            title: 'webpack Boilerplate', 
            template: path.resolve(__dirname, './src/pages/about.html'),
            filename: 'about.html',
        }),
    ], 
} 