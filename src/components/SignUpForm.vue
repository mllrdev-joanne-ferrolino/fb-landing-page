<template>
  <div class="lg:w-1/2 sm:w-3/4 flex-none">
    <div class="bg-white rounded-lg m-8 p-4 shadow-md">
      <form class="flex flex-col space-y-3">
        <base-input
          inputType="text"
          :placeholder="text.EMAIL_PHONE"
        ></base-input>
        <base-input inputType="text" :placeholder="text.PASSWORD"></base-input>
        <base-button color="blue" class="text-xl">{{ text.LOGIN }}</base-button>
        <div>
          <a href="" class="text-blue-500 hover:underline text-sm">{{
            text.FORGOT_PASSWORD
          }}</a>
        </div>
        <hr />
        <div class="p-5">
          <base-button color="green" class="text-lg">{{
            text.ACCOUNT
          }}</base-button>
        </div>
      </form>
    </div>
    <div>
      <a class="font-bold hover:underline cursor-pointer">{{
        text.CREATE_PAGE
      }}</a>
      {{ text.CREATE_PAGE_DESCRIPTION }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { FormLabel } from "@/enums/form-label.enum";
import BaseInput from "./_base/BaseInput.vue";
import BaseButton from "./_base/BaseButton.vue";

export default defineComponent({
  name: "sign-up-form",
  components: { BaseInput, BaseButton },
  setup() {
    const text = FormLabel;
    return { text };
  },
});
</script>

<style></style>
