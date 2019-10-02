const path = require('path');
//const mainConfig = require('.src/gameConfig.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');

//const CleanWebpackPlugin = require('clean-webpack-plugin');
 module.exports = {
    mode:'development',
    entry: './src/app.ts',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        
        //new CleanWebpackPlugin(),
        
        new HtmlWebpackPlugin({
          title: 'Development',
          template:"./index.html",
          filename:"./index.html",
        }),

        new TypedocWebpackPlugin({
            name: 'Contoso',
            mode: 'file',
            theme: './typedoc-theme/',
            includeDeclarations: false,
            ignoreCompilerErrors: true,
        }),

       /*
        new CopyPlugin([
            { from: 'assets', to: 'assets' },
            //{ from: 'other', to: 'public' },
        ], { logLevel: 'debug' }),
        */

        //new BundleAnalyzerPlugin()
    ],
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js'
     },
     module: {
        rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['@babel/preset-env']
                 }
             },
             {test:/\.css$/, use:'css-loader'},
             //{test:/\.ts$/, use:'ts-loader',  exclude: /node_modules/},
             {
                test: /\.ts$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.json$/,
                use:[
                    'file-loader'
                ]
                 
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
              
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
              
            },
            {
                test:  /\.(html)$/,
                use:[
                    {
                        loader:'html-loader',
                        options:{
                            minimize:true
                        }
                    }
                ]
              
            },
            {
                test:  /\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
              
            },
            {
                test: /\.xml$/,
                use:[
                    'xml-loader'
                ]
              
            },
            
         ]
     },
     resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.json' ]
      },
     stats: {
         colors: true
     },
     devtool: 'source-map' 
 };