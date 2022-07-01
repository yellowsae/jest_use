import { mount } from "@vue/test-utils";
import Layout from "@/components/Layout.vue";

describe("Layout.vue", () => {
  it("default", () => {
    // 通过第二个参数, 传入 slots
    const wrapper = mount(Layout, {
      slots: {
        default: "<div>Hello</div>"
      }
    })
    // console.log(wrapper.text())

    // 验证
    expect(wrapper.text()).toContain("Hello")
  })



  it("多个值", () => {
    // 通过第二个参数, 传入 slots
    const wrapper = mount(Layout, {
      slots: {
        default: ["<div id='one'>one</div>",  "<div id='two'>two</div>"]
      }
    })
    // console.log(wrapper.html())

    // 验证
    expect(wrapper.find("#one").text()).toContain("one")
    expect(wrapper.find("#two").text()).toContain("two")
  })


  it("具名插槽", () => {
    // 通过第二个参数, 传入 slots
    const wrapper = mount(Layout, {
      slots: {
        // default: ["<div id='one'>one</div>",  "<div id='two'>two</div>"]
        // 这里起个名字就行
        header: "<div>header</div>",
        footer: "<div>footer</div>",
      }
    })
    // console.log(wrapper.html())

    // // 验证
    // toContain() 包含,  可以去除 text()
    expect(wrapper.find("header").text()).toContain("header")
    expect(wrapper.find("footer").text()).toContain("footer")
  })


  it("作用域插槽", () => {
    const wrapper = mount(Layout, {
      slots: {
        header: `
          <template #header="data">
            hello {{data.msg}}
          </template>
        `,
      }
    })
    // console.log(wrapper.html())
    expect(wrapper.find("header").text()).toContain("hello message")

  })
})
