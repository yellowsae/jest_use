<template>
  <div>
    <input v-module="password" />
    <div v-if="error" data-test="error">{{ error }}</div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {
    minLength: {
      type: Number,
    },
  },

  setup(props) {
    const password = ref("password");
    const error = computed(() => {
      if (password.value.length < props.minLength) {
        return `Password must be at least ${props.minLength} characters`;
      }
      return "";
    });

    return {
      password,
      error,
    };
  },
};
</script>
