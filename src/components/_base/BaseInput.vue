<template>
  <input
    :type="inputType"
    :placeholder="placeholder"
    class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
  />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    inputType: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
});
</script>

<style></style>
