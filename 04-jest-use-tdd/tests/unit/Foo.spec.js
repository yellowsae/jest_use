import { mount, shallowMount } from "@vue/test-utils";
import Foo from "@/components/Foo.vue";
describe("Foo.vue", () => {
  it("shallowMount", () => {
    const wrapper = shallowMount(Foo);
    console.log(wrapper.html());
  });

  it("mount", () => {
    const wrapper = mount(Foo);
    console.log(wrapper.html());
  });
});
/**
 * 打印 mount 和 shallowMount 的结果
 * mount:
 *        <div>foo<div>bar</div>
      </div>

 * shallowMount: 
      <div>foo<bar-stub></bar-stub>
      </div>


 * 1. 其中 mount 能够渲染出  bar 组件， shallowMount 只能渲染出 bar-stub 组件  --- 区别;
 * 2. 速度上的不同， shallowMount 比 mount 测试快 
 *  
 * 
 * 总结： 当组件中获取数据不稳定， 可以使用 shallowMount 进行测试 组件
 *      组件不稳定： 也就是 组件中 可能存在大量的 发送数据请求
 * 
 *       
 */
