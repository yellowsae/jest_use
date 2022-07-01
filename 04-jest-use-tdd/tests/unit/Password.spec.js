// eslint-disable-next-line
import { mount } from "@vue/test-utils";
import Password from "@/components/Password.vue";

describe("Password", () => {
  it("init", () => {
    // 通过传入第二个参数， 获取 props 数据
    const wrapper = mount(Password, {
      props: {
        minLength: 10,
      },
    });

    // 进程测试 
    // 1. 先去找到 input 
    // 2. 给 input 赋值 
    // setValue() 赋值方法,  因为它是 异步是 Promise 所以要用  await 
    await wrapper.get("input").setValue("123456");
    console.log(wrapper.text());

    // 验证方式, 1. 看看是不是 包含字符串
    expect(wrapper.text()).toContain("Password must be at least 10 characters")


    // 2. 验证 error 存不存在
    // find() 查看某一个元素, 是否存在
    expect(wrapper.find("[data-test='error']").exists()).toBe(true);
  });
});
