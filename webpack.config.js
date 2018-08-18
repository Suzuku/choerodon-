var path = require("path");
var webpack = require('webpack')
var htmlPLugin = require("html-webpack-plugin");


module.exports = {
  entry:  [
    'react-hot-loader/patch', 
    __dirname + '/src/index.js'
]
,
  output: {
    // filename: "[name].js",
    // path: path.resolve(__dirname+ "./build")
  },
  devServer: {
    contentBase: "./src",    //本地服务器所加载的页面所在的目录
        historyApiFallback: true,   //不跳转
        inline: true,  //实时刷新
        historyApiFallback:true
  },

  module: {
    rules: [
      {
        test:/.*\.js[x]?/,
        exclude:path.resolve('node_modules'),
        loader:'babel-loader?cacheDirectory',
        options:
        {
            presets:
            [
                'env',
                'react',
                'stage-0',
               
        
            ],
            "plugins": ["transform-decorators-legacy",
            "transform-runtime"]
        }
       
    },
        {
                
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }
            ]
        
    },
      {
        test:/.(jpe?g|svg)$/,
        exclude:/node_modules/,
        use:['url-loader']
      },
    ]
  },
  plugins: [
    new htmlPLugin({
      title: "Hand China",
      template: "./src/template.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
