<template>
  <div class="relative h-[100dvh] overflow-y-auto bg-gray-100">
    <MobileView class="py-20">
      <form @submit.prevent="handleForgotPassword" class="form-box w-full">
        <Success :message="mailSent" />
        <label class="text-lg w-full px-2 font-medium" for="email">Forgot password</label>
        <div class="space-y-3">
          <input type="email" id="email" class="input-default" placeholder="someone@kraal.com" v-model="email"
            maxlength="32" />
          <Warning :message="warn" />
        </div>
        <QNextButtonBlue :nextForm="handleForgotPassword" text="Forgot password" :disabled="email ? false : true" />
        <div class="text-center">
          Go back to
          <RouterLink to="sign-in" class="text-kraal-blue-500 underline hover:no-underline">Sign In</RouterLink>
        </div>
      </form>
    </MobileView>
    <Lock class="text-kraal-blue-500 w-16 rotate-45 absolute left-4 bottom-3 opacity-50" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Warning from "../../components/form/steps/layout/warnings/Warning.vue";
import MobileView from "../../components/form/layouts/MobileView.vue";
import QNextButtonBlue from "../../components/form/steps/layout/QNextButtonBlue.vue";
import ForgotPassword from "../../auth/forgotPassword";
import Lock from "../../components/icons/lock.vue";
import Success from "../../components/form/steps/layout/Success.vue";

// `v-model="email"`
const email = ref<string>("");
const warn = ref<string>("");
const mailSent = ref<string>("");

function emailValidation(inputEmail: string) {
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;

  if (regex.test(inputEmail)) {
    warn.value = "";
  } else {
    warn.value = "Enter a valid email doe@example.com";
  }
}

function handleForgotPassword(e: any) {
  e.preventDefault();

  emailValidation(email.value);

  if (warn.value) return;
  ForgotPassword(email.value, () => {
    mailSent.value = `Email sent to ${email.value}`
  })
}
</script>
