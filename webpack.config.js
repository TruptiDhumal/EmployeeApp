const path = require('path');
module.exports ={
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname, 'public'),
        filename : "bundle.js"
    },
    module : {
            rules:[{
                loader:"babel-loader",
                test:/\.js$/,
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use :[ 
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                    loader: 'url-loader',
                    options: {
                        fallback: require.resolve('responsive-loader'),
                        quality: 85,
                    }
                }]
            }
        ],

    },
    devtool: 'cheap-module-eval-source-map',
    devServer : {
            contentBase:path.join(__dirname, 'public'),
    }        
}
