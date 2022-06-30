### 04-jest-use-tdd

使用 jest 测试 vue 组件的方式

```js
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "../../src/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("disply", () => {
    const wrapper = shallowMount(HelloWorld);
    // console.log(wrapper.html());
    // 验证 断言方式
    // TDD  先测试后，再去写逻辑代码
    expect(wrapper.text()).toMatch("test"); // 通过测试方式 toMatch() 看它的的信息是不是"test"
  });
});

```
