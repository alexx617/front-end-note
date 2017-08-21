http://blog.csdn.net/itkingone/article/details/70331783

API:https://doc.webpack-china.org/configuration/
API:https://doc.webpack-china.org/guides/production/#js-

命令行:

webpack //直接运行这个命令会去找webpack.config.js

webpack --config XXX.js   //使用另一份配置文件(不去找webpack.config.js)


```
//创建package.json
npm init -y

//全局安装
npm install -g webpack

//安装到你的项目目录
npm install --save-dev webpack

//配置webpack.config.js(配置了这个之后直接运行webpack命令就会自动引用这个文件)
module.exports = {
    devtool: 'eval-source-map',//使调试更容易,但会减慢打包速度,应只在开发环境用.
    entry: __dirname + "/app/main.js",//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    output:{
        path:__dirname + "/public",//打包后的文件存放的地方
        filename:"bundle.js"//打包后输出文件的文件名
    },
    devServer:{//使用webpack-dev-server,npm install --save-dev webpack-dev-server,这是个本地开发服务器,基于node.js构建
        port:9898,//指定端口,如果省略，默认为”8080“
        contentBase:'./public',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
        historyApiFallback:true,//不跳转,在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        compress:true,//开启gzip压缩
        lnlint:true//设置为true，当源文件改变时会自动刷新页面
        hot:true//开启热刷新
        open:true//自动打开浏览器
        //或可以写在package.json里(--open,--hot)
        // colors: true, //终端中输出结果为彩色
    }
}

```


```
启动指令
"scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js",// 打包
    "lint": "eslint --ext .js,.vue src"
  },
webpack.base.conf.js
webpack基本配置
var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  
  entry: {
  //起点或是应用程序的起点入口。值可以是字符串、数组、对象。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。动态加载的模块不是入口起点
  // 1. 字符串： entry： './entry'
  // 2. 字符串： entry：[ './entry1','entry2'] (多入口)
  // 3. 对象：   entry： {alert/index': path.resolve(pagesDir, `./alert/index/page`)}
  // 多入口书写的形式应为object，因为object,的key在webpack里相当于此入口的name,
    app: './src/main.js'
  },
  output: {//输出文件配置
    path: config.build.assetsRoot,//表示生成文件的根目录 需要一个**绝对路径**,把结果存储在哪里.
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'//指向生成文件的根目录,确保生成的css/js/图片/字体文件等路径以确保网页能正确地加载到这些资源.
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {//配置模块如何解析
    extensions: ['.js', '.vue', '.json'],//自动解析确定的扩展,能够在引入模块时不带扩展名
    modules: [//告诉 webpack 解析模块时应该搜索的目录(有优先级,这里的话先搜src,后搜node_modules)
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {//别名
      'vue$': 'vue/dist/vue.esm.js',//加$表示精准匹配
      '@': resolve('src'),
      'src': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils'),
      'static': resolve('static'),
      'store': resolve('src/store'),
      'styles': resolve('src/styles'),
    }
  },
  module: {// 用来进行模块加载相关的配置
    rules: [
      {
        test: /\.vue$/,//一个用以匹配loaders所处理文件的拓展名的正则表达式（必填）
        loader: 'vue-loader',//loader的名称(必填)
        //另外还有:include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}



--------------------------------------------------------------------------------
webpack.dev.conf.js
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    // DefinePlugin 是webpack 的内置插件，该插件可以在打包时候替换制定的变量
    // 
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({//这个插件的作用是依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html。这在每次生成的js文件名称不同时非常有用（比如添加了hash值）。
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // 可以自动加载当前模块依赖的其他模块并已制定别名注入到当前的模块中，引入jq
    // 在网上看到的文章，救了我的命 ProvidePlugin + expose-loader 引入jq 
    // 
    // 如果你把jQuery看做是一个普通的js模块来加载（要用到jQuery的模块统统先require
    // 后再使用），那么，当你加载老式jQuery插件时，往往会提示找不到jQuery实例
    // 有时候是提示找不到$），这是为啥呢？
    // 要解释这个问题，就必须先稍微解释一下jQuery插件的机制：jQuery插件是通过
    // jQuery提供的jQuery.fn.extend(object)和jQuery.extend(object)这俩方法，来
    // 把插件本身实现的方法挂载到jQuery（也即$）这个对象上的。传统引用jQuery及
    // 其插件的方式是先用<script>加载jQuery本身，然后再用同样的方法来加载其插件；
    // jQuery会把jQuery对象设置为全局变量（当然也包括了$），既然是全局变量，那么
    // 插件们很容易就能找到jQuery对象并挂载自身的方法了。
    // 
    // 而webpack作为一个遵从模块化原则的构建工具，自然是要把各模块的上下文环境给
    // 分隔开以减少相互间的影响；而jQuery也早已适配了AMD/CMD等加载方式，换句话说，
    // 我们在require jQuery的时候，实际上并不会把jQuery对象设置为全局变量。说到
    // 这里，问题也很明显了，jQuery插件们找不到jQuery对象了，因为在它们各自的上下
    // 文环境里，既没有局部变量jQuery（因为没有适配AMD/CMD，所以就没有相应的requi
    // re语句了），也没有全局变量jQuery。
    // 
    // A: ProvidePlugin的机制是：当webpack加载到某个js模块里，出现了未定义且名称符合
    // （字符串完全匹配）配置中key的变量时，会自动require配置中value所指定的js模块
    // expose-loader，这个loader的作用是，将指定js模块export的变量声明为全局变量。
    // 
    // B:externals 调用jq 
    // externals是webpack配置中的一项，用来将某个全局变量“伪装”成某个js模块的exports，
    // 如下面这个配置：
    // externals: {'jquery': 'window.jQuery',},
    // 那么，当某个js模块显式地调用var $ = require('jquery')的时候，就会把window,
    // jQuery返回给它,与上述ProvidePlugin + expose-loader的方案相反，此方案是先用
    // <script>加载的jQuery满足老式jQuery插件的需要，再通过externals将其转换成符合
    // 模块化要求的exports。
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      'window.$': 'jquery',
    })
  ]
})
webpack.prod.conf.js
var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },

  // webpack插件位置，有固定的用法
  // 1. 利用Plugin的初始方法并传入Plugin预设的参数进行初始化，生成一个实例。
  // 2. 将此实例插入到webpack配置文件中的plugins参数（数组类型）里即可。
  // 
  // 1. 
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({//压缩js代码
      compress: {
        warnings: false//是否显示警告
        drop_console: true,//删除console.log
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({

      // filename 生成网页的HTML名字，可以使用/来控制文件文件的目录结构，最
      // 终生成的路径是基于webpac配置的output.path的
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      // inject，指示把加载js文件用的<script>插入到哪里，默认是插到<body>
      // 的末端，如果设置为'head'，则把<script>插入到<head>里。
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),

    // 如果文件是多入口的文件，可能存在，重复代码，把公共代码提取出来，又不会重复下载公共代码了
    // （多个页面间会共享此文件的缓存）
    // CommonsChunkPlugin的初始化常用参数有解析？
    // name: 这个给公共代码的chunk唯一的标识
    // filename，如何命名打包后生产的js文件，也是可以用上[name]、[hash]、[chunkhash]
    // minChunks，公共代码的判断标准：某个js模块被多少个chunk加载了才算是公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig
```