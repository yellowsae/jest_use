

// 为什么 命名为  xxx.spec.js
// 因为 在执行 jest 时候，会自动找到  xxx.spec.js 文件

// const { default: test } = require("node:test");
const sum = require("../sum");  // 使用 CJS 的方式引入模块

test('sum', () => {   //  test(xxx, Fn)  -> test表示测试的方法，jest提供的，xxx表示测试的名称，Fn表示测试的函数
  // jest 提供的断言API    expect() 
  // toBe() 匹配器
  expect(sum(1, 1)).toBe(2)

})
