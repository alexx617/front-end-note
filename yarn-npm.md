http://blog.csdn.net/crper/article/details/52796305
一、首先需要了解的命令
     npm i xx -g === yarn global add xx 全局安装。
     npm install === yarn —— install 安装是默认行为。
     npm install taco --save === yarn add taco —— taco 包立即被保存到 package.json 中。
     npm uninstall taco --save === yarn remove taco
在 npm 中，可以使用 npm config set save true 设置 — -save 为默认行为，但这对多数开发者而言并非显而易见的。在 yarn 中，在package.json 中添加（add）和移除（remove）等行为是默认的。
     npm install taco --save-dev === yarn add taco --dev
     npm update --save === yarn upgrade
update（更新） vs upgrade（升级）， 赞！upgrade 才是实际做的事！版本号提升时，发生的正是upgrade！
注意： npm update --save 在版本 3.11 中似乎有点问题。
     npm install taco@latest --save === yarn add taco
     npm install taco --global === yarn global add taco —— 一如既往，请谨慎使用 global 标记。
二、已知悉的命令
包和 npm registry 上是一样的。大致而言，Yarn 只是一个新的安装工具，npm 结构和 registry 还是一样的。
     npm init === yarn init
     npm link === yarn link
     npm outdated === yarn outdated
     npm publish === yarn publish
     npm run === yarn run
     npm cache clean === yarn cache clean
     npm login === yarn login (logout 同理)
     npm test === yarn test
三、Yarn 独有的命令
我跳过了一些提醒我们不要使用的内容，如 yarn clean。
     yarn licenses ls —— 允许你检查依赖的许可信息。
     yarn licenses generate —— 自动创建依赖免责声明 license。
     yarn why taco —— 检查为什么会安装 taco，详细列出依赖它的其他包（鸣谢 Olivier Combe）。
     Emojis
     速度
     通过 yarn lockfile 自动实现 shrinkwrap 功能
     以安全为中心的设计
四、Npm 独有的命令
     npm xmas === NO EQUIVALENT
     npm visnup === NO EQUIVALENT

yarn切换成淘宝源:yarn config set registry https://registry.npm.taobao.org