```
babel用法:http://www.ruanyifeng.com/blog/2016/01/babel.html

常用的babel packages:https://segmentfault.com/a/1190000010411116

babel默认只做转码，ployfill的工作（比如一些新内置对象、新的静态方法、实例方法），需要在运行入口引人babel-polyfill来支持，为运行环境提供垫片支持。

新建src>index.js;dist>index.js
根目录下新建index.html,引入dist>index.js
npm init -y
全局安装 npm i -g babel-cli
再局部安装 npm i -D babel-cli babel-preset-es2015
新建.babelrc文件(该文件用来设置转码规则和插件):
{
    "presets": [
        "es2015",
 "react"
    ],
    "plugins": []
}
附:presets字段设定转码规则:
官方提供以下的规则集，可以根据需要安装, 然后，将这些规则加入.babelrc。
# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
在package.json加入命令:
"build": "babel src/index.js -o dist/index.js"  //-o参数 将转换结果指定输出到某个文件

用作node:
babel-cli工具自带babel-node命令,不用单独安装,随babel-cli安装.执行babel-node进入pepl环境(可加在package.json执行).
babel-node es6.js
使用babel-node替代node，这样es6.js文件本身就不用做任何转码处理.
```