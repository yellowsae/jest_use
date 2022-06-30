

import { sum } from '../sum'

describe('sum', () => {
  it('1+1=2', () => {
    expect(sum(1, 1)).toBe(2)
  })
})



// 如果直接 使用 jest 方式使用 ESM 
// 安装 cross-env 模块
// 然后在 package.json 中添加 cross-env NODE_OPTIONS=--experimental-vm-modules jest ， 让它使用ESM的方式模块导入



