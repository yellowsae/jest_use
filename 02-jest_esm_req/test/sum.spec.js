
import { sum } from '../src/sum'
describe('sum', () => {
  it('1+1=2', () => {
    expect(sum(1, 1)).toBe(2)
  })
})


// jest 是运行在 nodeJs 中的一个测试框架,   
// 像 sum 方法，这样使用 ESmodule 方式引入模块， 会出先报错，因为 jest 不支持 ESmodule

//     SyntaxError: Cannot use import statement outside a module

// 如何解决： 把需要测试的 sum.js 通过 Babel 来转换成 NodeJS 可以运行的代码

// 如何配置babel：
// 
