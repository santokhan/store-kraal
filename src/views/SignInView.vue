<template>
  <div class="relative h-[100dvh] overflow-y-auto bg-gray-100">
    <HeaderSimplified to='/' class="bg-white" />
    <div class="py-10"></div>
    <MobileView>
      <form @submit="nextForm" class="form-box w-full" id="signIn">
        <div class="text-start w-full px-2">
          <h3 class="font-bold text-xl uppercase">Welcome Back</h3>
          <h5 class="font- uppercas">Sign in to continue</h5>
        </div>
        <div class="space-y-3">
          <input type="email" name="email" id="email" placeholder="someone@kraal.com" maxlength="32" v-model="user.email"
            class="input-default" autocomplete="false" required />
          <Warning :message="warn.email" />
        </div>
        <div class="relative">
          <input :type="eyeIsOpen ? 'text' : 'password'" placeholder="Password" name="password" id="password"
            maxlength="16" v-model="user.password" class="input-default" autocomplete="true" required />
          <button type="button" @click="eyeIsOpen = !eyeIsOpen" class="absolute right-4 top-1/2 -translate-y-1/2">
            <i class="fa fa-eye-slash text-xl text-gray-500" aria-hidden="true" v-if="eyeIsOpen"></i>
            <i class="fa fa-eye text-xl text-gray-500" aria-hidden="true" v-else></i>
          </button>
        </div>
        <Warning :message="warn.password" />
        <Warning :message="firebaseError" />
        <div class="flex items-center gap-2 px-1">
          <RouterLink to="/forgot-password" class="text-kraal-blue-500 text-sm hover:underline">Forgot you
            password?</RouterLink>
        </div>
        <SubmitButton :disabled="disabled" text="Sign In" />
        <div class="text-center">Don't have a account?
          <RouterLink to="/business-signup" class="text-kraal-blue-500 hover:underline">Sign Up</RouterLink>
        </div>
      </form>
    </MobileView>
    <MobileView>
      <div class="w-full py-6 space-y-2 text-gray-500">
        <h5 class="font-semibold text-lg">Dummy user for test only</h5>
        <p><span class="font-semibold">Email:</span> direct.santo@gmail.com</p>
        <p><span class="font-semibold">Password:</span> Sa12345678</p>
      </div>
    </MobileView>
    <Lock class="text-kraal-blue-500 w-16 rotate-45 absolute left-3 bottom-3 opacity-50" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, onBeforeMount } from "vue";
import { LocationQueryValue, RouterLink, useRoute, useRouter } from "vue-router";
import HeaderSimplified from "../components/shared/header/HeaderSimplified.vue";
import Warning from "../components/form/steps/layout/warnings/Warning.vue";
import SubmitButton from "../components/form/steps/layout/SubmitButton.vue";
import { authenticate_v1 } from "../components/form/sign-in/signin";
import MobileView from "../components/form/layouts/MobileView.vue";
import Lock from "../components/icons/lock.vue";
import { getCurrentUser } from "vuefire";
import * as firebase from '../firebase/services'

interface User { email: string, password: string }
const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const warns = ["Enter a valid email doe@example.com", "Invalid email or password"]
const router = useRouter();
const route = useRoute();
const user = reactive<User>({ email: "", password: "" });
const warn = reactive<User>({ email: "", password: "" });
const disabled = ref<boolean>(true);
const firebaseError = ref<string>()
const eyeIsOpen = ref<boolean>(false);

watch(user, async () => {
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
function validatePass(pass: string) {
  return ""; // that means I am removing password validator

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
function redirect() {
  const redirect: LocationQueryValue | LocationQueryValue[] = route.query.redirect
  if (typeof redirect === 'string') {
    console.log('redirect');
    router.push(redirect);
  } else {
    // if redirect not found
    router.push('/kraalai');
  }
}
async function redirect_after_auth() {
  const currentUser = await getCurrentUser()
  if (currentUser) {
    redirect()
  }
}
onBeforeMount(redirect_after_auth)
async function nextForm(e: any) {
  e.preventDefault();

  try {
    const res = await authenticate_v1(user.email, user.password);
    if (res.user) {
      firebase.sendEmailVerification();
      redirect();
    }
  } catch (error: any) {
    firebaseError.value = error.message || ""
  }
}
</script>
