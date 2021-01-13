<template>
  <div
    class="m-auto flex flex-col items-center space-y-6 h-screen w-screen bg-gray-100"
  >
    <div class="flex lg:flex-row flex-col sm:mt-8 m-auto items-center">
      <div class="flex-1 lg:text-left sm:text-center sm:w-8/12">
        <h1 class="text-5xl font-bold text-blue-500">
          {{ text.LOGO }}
        </h1>
        <p class="text-2xl mt-5">
          {{ text.DESCRIPTION }}
        </p>
      </div>
      <sign-up-form></sign-up-form>
    </div>
    <link-footer :links="links"></link-footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SignUpForm from "@/components/SignUpForm.vue";
import LinkFooter from "@/components/LinkFooter.vue";
import { LandingPageText } from "@/enums/landing-page-text.enum.ts";
import { useStore } from "@/store/use-store";

export default defineComponent({
  name: "landing-page",
  components: {
    SignUpForm,
    LinkFooter,
  },
  setup() {
    const text = LandingPageText;
    const { links } = useStore();

    return { links, text };
  },
});
</script>

<style></style>
