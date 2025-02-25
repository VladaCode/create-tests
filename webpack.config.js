const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        tests: './src/tests.js' // Добавьте отдельный вход для тестов
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        port: 8080,
        historyApiFallback: true,
        watchFiles: ['src/**/*']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['main'], // Указываем, что этот HTML будет использовать только основной вход
        }),
        new HtmlWebpackPlugin({
            template: './src/tests.html',
            filename: 'tests.html',
            chunks: ['tests'], // Указываем, что этот HTML будет использовать вход для тестов
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css', // Настройка для именования CSS файлов
        }),
    ]
}
