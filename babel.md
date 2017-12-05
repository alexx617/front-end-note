babel用法:http://www.ruanyifeng.com/blog/2016/01/babel.html
babel官网:http://babeljs.io/docs/plugins/preset-env
常用的babel packages:https://segmentfault.com/a/1190000010411116

babel-standalone:
网页中实时将ES6代码转为ES5，对性能会有影响。生产环境需要加载已经转码完成的脚本
用户的ES6脚本放在script标签之中，但是要注明type="text/babel"。
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.4.4/babel.min.js"></script>
<script type="text/babel">
// Your ES6 code
</script>

babel-polyfill
Babel 默认只转换新的 JavaScript 语法，而不转换新的 API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法(比如 Object.assign )都不会转码。
举例来说，ES6 在 Array 对象上新增了 Array.from 方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用 babel-polyfill，为当前环境提供一个垫片。



$ npm install --save babel-polyfill



然后，在脚本头部，加入如下一行代码。
import 'babel-polyfill';
或者
require('babel-polyfill');



Babel 默认不转码的 API 非常多，详细清单可以查看 babel-plugin-transform-runtime 模块的definitions.js文件
====================================================================
新建src>index.js;dist>index.js
根目录下新建index.html,引入dist>index.js
npm init -y
全局安装 npm i -g babel-cli
npm install --save-dev babel-preset-latest
再局部安装 npm i -D babel-cli
新建.babelrc文件(该文件用来设置转码规则和插件):
{
    "presets": [ "latest" ]
    "plugins": []
}
附:presets字段设定转码规则:官方提供以下的规则集，可以根据需要安装, 然后，将这些规则加入.babelrc。# 转码规则$ npm install --save-dev babel-preset-latest# react转码规则$ npm install --save-dev babel-preset-react# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个$ npm install --save-dev babel-preset-stage-0$ npm install --save-dev babel-preset-stage-1$ npm install --save-dev babel-preset-stage-2$ npm install --save-dev babel-preset-stage-3
在package.json加入命令:
"build": "babel src/index.js -o dist/index.js"  //-o参数 将转换结果指定输出到某个文件

用作node:
babel-cli工具自带babel-node命令,不用单独安装,随babel-cli安装.执行babel-node进入pepl环境(可加在package.json执行).
babel-node es6.js
使用babel-node替代node，这样es6.js文件本身就不用做任何转码处理.

压缩代码:npm i uglify-js -D
uglify-js xx.js -o xx.js


=================================
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s

// z转换src下面的a.js
babel src/a.js

// 把转换后的代码放到dist下面的a.js
babel src/a.js > dist/a.js

// 转换并压缩  把前面的输出内容当做后面的输入内容
babel src/a.js | uglifyjs

// 转换压缩并生成文件
babel src/a.js | uglifyjs > dist/a.js

// 把src下面所有的js分别转换到dist目录下
babel src --out-dir dist

// 把src的所有js集合打包到dist下面的index.js
babel src --out-file dist/index.js


//使用webpack+babel打包
npm i babel-core babel-loader babel-preset-env webpack
命令:"webpack --config webpack.config.js"
新建webpack.config.js:
const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}

新建.babelrc文件(该文件用来设置转码规则和插件):
{
    "presets": [ "env" ]
    "plugins": []
}

==========================================================


