module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
        { test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ },

        { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, loader: 'source-map-loader' }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    devtool: 'source-map'
}
