<template>
  <div class="text-left p-10 bg-white mx-auto">
    <div class="w-10/12 flex-shrink mx-auto">
      <span
        v-for="(link, index) in linkTitles.languages"
        :key="index"
        class="flex-none mr-3"
        ><a href="" class="link">{{ link }}</a></span
      >
      <span
        ><button class="btn-add">
          +
        </button></span
      >
      <hr class="my-2" />
      <span
        class="flex-none mr-3"
        v-for="(link, index) in linkTitles.otherLinks"
        :key="index"
        ><a href="" class="link">{{ link }}</a></span
      >
      <div class="text-xs  text-gray-500 my-4">Facebook © 2021</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useStore } from "@/store/use-store";
export default defineComponent({
  name: "link-footer",
  props: {
    links: {
      type: Object,
    },
  },
  setup(props) {
    const linkTitles = props.links ?? [];

    return { linkTitles };
  },
});
</script>

<style>
.link {
  @apply text-xs text-gray-500 hover:underline;
}
</style>
