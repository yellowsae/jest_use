# 在项目中使用jest测试，并且能够支持ESM的方式引入



实现方式： 使用 Babel 将导入的ES6模块 编译为 能够在当前的Node 环境下运行的代码。

- 需要配置 babel.config.js


```js
// babel.config.js


module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
}


// 解释： 在使用 Babel 转换时候，把当前代码转换成 当前node 的版本， 以当前的node 版本进行编译和转换
 

```
