import IfShow from "@/components/IfShow.vue";
import { mount } from "@vue/test-utils";

describe("IfShow.vue", () => {
  it("获取 id 为 profile的 a 标签", () => {
    const wrapper = mount(IfShow);

    // 通过 get 方法， 获取 id=profile 的 a 标签, 类似于选择器使用
    // get() 方法只能获取到肯定存在的元素，如果获取的元素不存在，会报错
    const profile = wrapper.get("#profile");
    expect(profile.text()).toBe("My profile");
  });

  // 判断 v-if 的数据显示情况
  it("看看一个元素是不是存在的", () => {
    const wrapper = mount(IfShow);

    //  使用 wrapper.find() 获取这些 可能存在的元素
    // const profile = wrapper.get("#profile");
    const admin = wrapper.find("#admin");
    // 可以通过 exists() 方法，判断它是不是存在
    // console.log(admin.exists()); // 输出为 false
    expect(admin.exists()).toBe(false);
  });

  // 判断 v-if 的数据显示情况
  it("在测试环境下改写 admin 为存在", () => {
    // 接收第二个参数. {}
    const wrapper = mount(IfShow, {
      data() {
        // 这里只是与组件中的 data 数据对象，进行合并， 而不是直接修改  组件中的data数据对象
        return {
          admin: true,
        };
      },
    });

    const admin = wrapper.find("#admin");
    expect(admin.exists()).toBe(true);
  });

  // 判断 v-show 的数据显示情况
  it("v-show 查看是不是显示", () => {
    const wrapper = mount(IfShow);

    const userShow = wrapper.find("#user-show");
    // 因为exists()只能判断元素是否存不存在，不能判断它显示不显示
    // 可以通过 isVisible() 方法，判断它是不是显示
    expect(userShow.isVisible()).toBe(false);
  });
});
