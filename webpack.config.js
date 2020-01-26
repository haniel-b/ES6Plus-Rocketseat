module.exports = {
    entry: ['@babel/polyfill','./src/main.js'],
    output: {
        path: __dirname + '/public/', //global variable which references the location of webpack config
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public/' //where the webpack serv should be opened
    },
    module: {
        rules: [
            {
                test: /\.js$/, //verify if files ends with .js 
                exclude: /node_modules/, //don't take any of the files into node_modules 
                use: {
                    loader: 'babel-loader', 
                }
            }
        ],  //this property "tell" how the webpack must import/export js files
    },
};


