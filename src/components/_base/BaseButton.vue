<template>
  <button :class="[color, buttonType]">
    <slot />
  </button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    color: {
      type: String,
      required: true,
      default: "blue",
    },
    buttonType: {
      type: String,
      default: "primary",
    },
  },
});
</script>

<style>
.primary {
  @apply px-4 py-2 text-white transition duration-100 ease-in-out font-bold rounded-lg;
}
.add {
  @apply border-gray-400 border-solid rounded-md border-2 pr-1 text-lg focus:outline-none;
}
.blue {
  @apply bg-blue-500 hover:bg-blue-600;
}
.green {
  @apply bg-green-500 hover:bg-green-600;
}
</style>
