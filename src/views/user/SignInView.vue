<template>
    <div class="bg-gray-100 h-[calc(100svh_-_3.5rem)] grid place-items-center">
        <div class="w-full relative">
            <MobileView>
                <form @submit="nextForm" class="form-box w-full" id="signIn">
                    <div class="text-start w-full px-2">
                        <h3 class="font-bold text-xl uppercase">Welcome Back</h3>
                        <h5 class="font- uppercas">Sign in to continue</h5>
                    </div>
                    <div class="space-y-3">
                        <input type="email" name="email" id="email" placeholder="someone@kraal.com" maxlength="32"
                            v-model="user.email" class="input-default" autocomplete="false" required />
                        <Warning :message="warn.email" />
                    </div>
                    <div class="relative">
                        <input :type="eyeIsOpen ? 'text' : 'password'" placeholder="Password" name="password" id="password"
                            maxlength="16" v-model="user.password" class="input-default" autocomplete="true" required />
                        <button type="button" @click="eyeIsOpen = !eyeIsOpen"
                            class="absolute right-4 top-1/2 -translate-y-1/2">
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
                        <RouterLink to="sign-up" class="text-kraal-blue-500 hover:underline">Sign Up</RouterLink>
                    </div>
                </form>
            </MobileView>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, onBeforeMount } from "vue";
import { LocationQueryValue, RouterLink, useRoute, useRouter } from "vue-router";
import Warning from "../../components/form/steps/layout/warnings/Warning.vue";
import SubmitButton from "../../components/form/steps/layout/SubmitButton.vue";
import { authenticate_v1 } from "../../components/form/sign-in/signin";
import MobileView from "../../components/form/layouts/MobileView.vue";
import { getCurrentUser } from "vuefire";

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
            redirect();
        }
    } catch (error: any) {
        firebaseError.value = error.message || ""
    }
}
</script>
