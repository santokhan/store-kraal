<template>
  <div class="relative h-[100dvh] bg-gray-100">
    <MobileView>
      <div class="flex justify-center items-center py-8">
        <WelcomeBack class="h-40" />
      </div>
      <form @submit.prevent="nextForm" class="form-box w-full">
        <h3 class="mb-1 flex justify-center items-center font-semibold text-2xl">
          <Kraal class="h-7 text-kraal-blue-500" />
        </h3>
        <div class="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="doe@domain.com"
            maxlength="32"
            @input="handleChange"
            @change="handleChange"
            :value="user.email"
            class="input-default"
            autocomplete="false"
          />
          <Warning :message="warn.email" />
        </div>

        <div class="relative">
          <input
            :type="eyeIsOpen ? 'text' : 'password'"
            placeholder="Password"
            name="password"
            id="password"
            maxlength="16"
            :value="user.password"
            @input="handleChange"
            class="input-default"
          />
          <button
            type="button"
            @click="handleEye"
            class="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <i
              class="fa fa-eye-slash text-xl text-gray-500"
              aria-hidden="true"
              v-if="eyeIsOpen"
            ></i>
            <i class="fa fa-eye text-xl text-gray-500" aria-hidden="true" v-else></i>
          </button>
        </div>
        <Warning :message="warn.password" />

        <Warning :message="invalid" />

        <div class="flex items-center gap-2 px-1">
          <RouterLink to="/" class="text-kraal-blue-500 text-sm"
            >Forgot you password?</RouterLink
          >
        </div>
        <QNextButton :nextForm="nextForm" :disabled="disabled" text="Sign In" />
        <div class="text-center">
          Don't have a account?
          <RouterLink to="/form/1" class="text-kraal-blue-500">Sign Up</RouterLink>
        </div>
      </form>
      <!-- <GoogleSignIn /> -->
    </MobileView>
    <!-- <Squirrel class="text-kraal-blue-500/50 absolute right-4 bottom-0" /> -->
    <!-- <Circle /> -->
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive, ref, watchEffect } from "vue";
import { RouterLink, useRouter } from "vue-router";
import QNextButton from "../steps/layout/QNextButton.vue";
import Warning from "../steps/layout/warnings/Warning.vue";
import MobileView from "../layouts/MobileView.vue";
import type { Ref } from "vue";
import authenticate from "./signin";
import { useCurrentUser } from "vuefire";
import Circle from "../../uikits/circle.vue";
import Squirrel from "../../uikits/squirrel.vue";
import HeaderSimple from "../../shared/header/HeaderSimplified.vue";
import WelcomeBack from "./WelcomeBack.vue";
import Kraal from "../../icons/kraal.vue";
import GoogleSignIn from "./GoogleSignIn.vue";

const router = useRouter();

// redirect if logged in
onBeforeMount(() => {
  function ifLoggedIn() {
    const currentUser = useCurrentUser();
    if (currentUser) {
      router.push("/dashboard");
    } else {
      router.push("/signin");
    }
  }
  ifLoggedIn();
});

const user: any = reactive({ email: "", password: "" });
const warn: any = reactive({
  email: "",
  password: "Invalid email or password",
});
const invalid = ref("");
const disabled: any = ref(true);

function handleChange(e: any) {
  const { name, value } = e.target;
  user[name] = value;
}

//
function nextForm() {
  authenticate({
    user,
    warn,
    onSignIn: () => {
      router.replace("/dashboard");
      console.log("You have singed in to your account.");
      console.log(user);
    },
    onError: ({ errorCode, errorMessage }) => {
      invalid.value = "Invalid email or password";
    },
  });
}

const eyeIsOpen: Ref<boolean> = ref(false);
function handleEye() {
  eyeIsOpen.value = !eyeIsOpen.value;
}

watchEffect(() => {
  function validateDisabled() {
    const { email, password } = user;

    if (email && password) {
      if (!warn.email && !warn.password) {
        disabled.value = false;
      } else {
        disabled.value = true;
      }
    } else {
      return false;
    }
  }
  validateDisabled();

  function validEmail(name: string) {
    function validateName(name: string) {
      if (name.length > 0) {
        if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(name)) {
          return true;
        } else {
          return false;
        }
      } else {
        return "";
      }
    }

    warn.email =
      validateName(name) === false ? "Enter a valid email doe@example.com" : "";
  }
  validEmail(user.email);

  function validPassword(password: string) {
    function validatePass(pass: string) {
      // const reg2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/;
      const regUpper = /[A-Z]/;
      const regLower = /[a-z]/;
      const regNumber = /[0-9]/;
      const regRange = /.{8,16}/;

      if (pass.length > 0) {
        if (!regUpper.test(pass)) {
          return "Password should contain at least one uppercase";
        } else if (!regLower.test(pass)) {
          return "Password should contain at least one lowercase";
        } else if (!regNumber.test(pass)) {
          return "Password should contain at least one number";
        } else if (!regRange.test(pass)) {
          return "Password should be minimum of 8 characters";
        }
      } else {
        return "";
      }
    }

    warn.password = validatePass(password);
  }
  validPassword(user.password);
});
</script>
