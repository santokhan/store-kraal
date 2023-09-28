<template>
  <div class="relative h-[100dvh] overflow-y-auto bg-gray-100">
    <HeaderSimple to='/' class="bg-white" />
    <div class="py-10"></div>
    <MobileView>
      <form @submit.prevent="nextForm" class="form-box w-full">
        <div class="text-start w-full px-2">
          <h3 class="font-bold text-xl uppercase">Welcome Back</h3>
          <h5 class="font- uppercas">Sign in to continue</h5>
        </div>

        <!-- Input Email -->
        <div class="space-y-3">
          <input type="email" name="email" id="email" placeholder="someone@kraal.com" maxlength="32" v-model="user.email"
            class="input-default" autocomplete="false" />
          <Warning :message="warn.email" />
        </div>

        <!-- Input Password -->
        <div class="relative">
          <input :type="eyeIsOpen ? 'text' : 'password'" placeholder="Password" name="password" id="password"
            maxlength="16" v-model="user.password" class="input-default" />
          <button type="button" @click="eyeIsOpen = !eyeIsOpen" class="absolute right-4 top-1/2 -translate-y-1/2">
            <i class="fa fa-eye-slash text-xl text-gray-500" aria-hidden="true" v-if="eyeIsOpen"></i>
            <i class="fa fa-eye text-xl text-gray-500" aria-hidden="true" v-else></i>
          </button>
        </div>
        <Warning :message="warn.password" />

        <!-- Email or password invalid warning -->
        <Warning :message="invalid" />

        <div class="flex items-center gap-2 px-1">
          <RouterLink to="/forgot-password" class="text-kraal-blue-500 text-sm hover:underline">Forgot you
            password?</RouterLink>
        </div>
        <QNextButton :nextForm="nextForm" :disabled="disabled" text="Sign In" />
        <div class="text-center">
          Don't have a account?
          <!-- Go to signup page if don't have an account. -->
          <RouterLink to="/business-signup" class="text-kraal-blue-500 hover:underline">Sign Up</RouterLink>
        </div>
      </form>
    </MobileView>
    <Lock class="text-kraal-blue-500 w-16 rotate-45 absolute left-3 bottom-3 opacity-50" />
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive, ref, watch, watchEffect } from "vue";
import { RouterLink, useRouter } from "vue-router";
import QNextButton from "../steps/layout/QNextButton.vue";
import Warning from "../steps/layout/warnings/Warning.vue";
import MobileView from "../layouts/MobileView.vue";
import type { Ref } from "vue";
import authenticate from "./signin";
import { useCurrentUser } from "vuefire";
import HeaderSimple from "../../shared/header/HeaderSimplified.vue";
import Lock from "../../icons/lock.vue";

interface User {
  email: string,
  password: string
}
const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const warns = ["Enter a valid email doe@example.com", "Invalid email or password"]
// dynamic
const router = useRouter();
const user = reactive<User>({ email: "", password: "" });
const warn = reactive<User>({ email: "", password: "" });
const invalid = ref<string>("");
const disabled = ref<boolean>(true);

// redirect if logged in
onBeforeMount(() => {
  function ifLoggedIn() {
    const currentUser = useCurrentUser();
    if (currentUser) router.push("/dashboard");
  }
  ifLoggedIn();
});

watch(user, async (crnt, prev) => {
  if (user.email) {
    if (regexEmail.test(user.email)) {
      warn.email = ''
    } else {
      warn.email = warns[0];
    }
  } else {
    warn.email = ""
  }

  if (user.password) {
    warn.password = validatePass(user.password);
  } else {
    warn.password = ""
  }

  if (!warn.email && !warn.password) {
    disabled.value = false;
  } else {
    disabled.value = true;
  }
})

// this route will be used on Home button called get started
function nextForm() {
  authenticate({
    user,
    warn,
    onSignIn: () => {
      // if signed in redirect to
      router.replace("/kraalai");
    },
    onError: (error) => {
      invalid.value = warns[1];
      console.log(error)
    },
  });
}

const eyeIsOpen: Ref<boolean> = ref(false);

function validatePass(pass: string) {
  // const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/;
  const regUpper = /[A-Z]/;
  const regLower = /[a-z]/;
  const regNumber = /[0-9]/;
  const regRange = /.{8,16}/;

  if (!regUpper.test(pass)) {
    return "Password should contain at least one uppercase";
  } else if (!regLower.test(pass)) {
    return "Password should contain at least one lowercase";
  } else if (!regNumber.test(pass)) {
    return "Password should contain at least one number";
  } else if (!regRange.test(pass)) {
    return "Password should be minimum of 8 characters";
  } else {
    return "";
  }
}
</script>
