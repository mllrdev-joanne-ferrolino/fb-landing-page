<template>
  <div class="text-left p-10 bg-white mx-auto">
    <div class="w-full flex-shrink 2xl:w-7/12 mx-auto">
      <span
        v-for="(link, index) in linkTitles.languages"
        :key="index"
        class="flex-none mr-3"
        ><a href="" class="link">{{ link }}</a></span
      >
      <span
        ><base-button class="add">
          +
        </base-button></span
      >
      <hr class="my-2" />
      <span
        class="flex-none mr-3"
        v-for="(link, index) in linkTitles.otherLinks"
        :key="index"
        ><a href="" class="link">{{ link }}</a></span
      >
      <div class="text-xs  text-gray-500 my-4">{{ copyright }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useStore } from "@/store/use-store";
import { LandingPageText } from "@/enums/landing-page-text.enum";
import BaseButton from "./_base/BaseButton.vue";

export default defineComponent({
  name: "link-footer",
  props: {
    links: {
      type: Object,
    },
  },
  setup(props) {
    const linkTitles = props.links ?? [];
    const copyright = LandingPageText.COPYRIGHT;

    return { linkTitles, copyright };
  },
});
</script>

<style>
.link {
  @apply text-xs text-gray-500 hover:underline;
}
</style>
