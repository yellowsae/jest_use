// babel.config.js

module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
}


// 解释： 在使用 Babel 转换时候，把当前代码转换成 当前node 的版本， 以当前的node 版本进行编译和转换
 