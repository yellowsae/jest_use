import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Emit", () => {
  it("emit event Increment", () => {
    // 挂载
    const wrapper = mount(Counter);
    // 触发点击事件
    wrapper.get("button").trigger("click");
    // emitted()方法 查看到 获取的 emit 方法和事件
    // console.log(wrapper.emitted());

    // toHaveProperty() 方法用于查看 emit 对象中有没有这个increment事件
    expect(wrapper.emitted()).toHaveProperty("increment");
  });
});
