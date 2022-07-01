<template>
  <button @click="handleClick">Increment</button>
</template>

<script>
export default {
  setup(props, { emit }) {
    const handleClick = () => {
      console.log("click");
      emit("increment");
    };
    return {
      handleClick,
    };
  },
};
</script>
