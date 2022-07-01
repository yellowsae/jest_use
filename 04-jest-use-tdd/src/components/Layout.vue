<template>
  <div>
    <!-- 默认插槽 -->
    <slot></slot>
    <header>
      <!-- 具名插槽 -->
      <slot :msg="msg" name="header"></slot>
    </header>
    <main>
      <!-- 具名插槽 -->
      <slot name="main"></slot>
    </main>
    <footer>
      <!-- 具名插槽 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      msg: "message",
    }
  }
}
</script>
