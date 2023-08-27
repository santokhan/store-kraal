<template>
  <div class="relative h-[100dvh] overflow-y-auto bg-gray-100">
    <HeaderSimple class="bg-white" />
    <MobileView class="py-20">
      <form @submit.prevent="handleForgotPassword" class="form-box w-full">

        <Success :message="mailSent" />

        <label class="text-lg w-full px-2 font-medium" for="email">Forgot password</label>
        <div class="space-y-3">
          <input type="email" id="email" class="input-default" placeholder="doe@domain.com" v-model="email"
            maxlength="32" />

          <Warning :message="warn" />
        </div>

        <QNextButtonBlue :nextForm="() => { }" text="Forgot password" />
        <div class="text-center">
          Go Back to
          <RouterLink to="/signin" class="text-kraal-blue-500 underline hover:no-underline">Sign In</RouterLink>
        </div>
      </form>
    </MobileView>
    <Lock class="text-kraal-blue-500 w-16 rotate-45 absolute left-4 bottom-3 opacity-50" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Warning from "../steps/layout/warnings/Warning.vue";
import Success from "../steps/layout/Success.vue";
import MobileView from "../layouts/MobileView.vue";
import HeaderSimple from "../../shared/header/HeaderSimplified.vue";
import Lock from "../../icons/lock.vue";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import QNextButtonBlue from "../steps/layout/QNextButtonBlue.vue";

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

function handleForgotPassword() {
  emailValidation(email.value);

  if (warn.value) {
    return false;
  } else {
    // firebase
    const auth = getAuth();
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        // password reset email sent
        mailSent.value = "Password reset email sent.";
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>
